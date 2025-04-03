'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormItem, FormLabel, FormMessage, FormField } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import Image from 'next/image'
import { sendContactEmail, type ContactFormData } from '@/app/actions/contact'

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
  services: z.array(z.string()).min(1, {
    message: "Please select at least one service.",
  }),
})

const services = [
  { id: "kitchen_remodel", label: "Kitchen Remodeling" },
  { id: "bathroom_remodel", label: "Bathroom Remodeling" },
  { id: "custom_cabinets", label: "Custom Cabinets" },
  { id: "countertops", label: "Countertops" },
  { id: "flooring", label: "Flooring" },
  { id: "lighting", label: "Lighting Design" },
  { id: "plumbing", label: "Plumbing" },
  { id: "other", label: "Other" },
]

export default function ContactContent() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      services: [],
    },
  })

  async function onSubmit(values: ContactFormData) {
    setIsSubmitting(true)
    try {
      const result = await sendContactEmail(values)
      
      if (result.success) {
        setSubmitMessage('Thank you for your message. We will get back to you soon!')
        form.reset()
      } else {
        setSubmitMessage(result.error || 'There was an error sending your message. Please try again later.')
      }
    } catch (error) {
      console.error('Error:', error)
      setSubmitMessage('There was an error sending your message. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      <section className="relative h-[400px] flex items-center justify-center mb-16">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white space-y-4">
          <h1 className="text-5xl sm:text-6xl font-bold">
            Let&apos;s Get Started
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto px-4">
            Transform your space with our expert design and craftsmanship
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10">
              <div className="max-w-md mx-auto">
                <h2 className="text-3xl font-bold mb-2">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your name" 
                              {...field}
                              className="h-12 border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">Email</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your email" 
                              {...field}
                              className="h-12 border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your project, schedule a showroom visit, or just say hello!" 
                              {...field}
                              className="min-h-[150px] border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="services"
                      render={() => (
                        <FormItem>
                          <FormLabel className="text-gray-700">Services of Interest</FormLabel>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {services.map((service) => (
                              <FormField
                                key={service.id}
                                control={form.control}
                                name="services"
                                render={({ field }) => {
                                  return (
                                    <FormItem
                                      key={service.id}
                                      className="flex flex-row items-start space-x-3 space-y-0"
                                    >
                                      <FormControl>
                                        <Checkbox
                                          checked={field.value?.includes(service.id)}
                                          onCheckedChange={(checked: boolean) => {
                                            return checked
                                              ? field.onChange([...field.value, service.id])
                                              : field.onChange(
                                                  field.value?.filter((value) => value !== service.id)
                                                )
                                          }}
                                        />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        {service.label}
                                      </FormLabel>
                                    </FormItem>
                                  )
                                }}
                              />
                            ))}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white transition-colors duration-300"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </Form>
                {submitMessage && (
                  <div className="mt-6 p-4 bg-green-50 text-green-700 rounded-lg">
                    {submitMessage}
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-10">
              <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10">
                <h2 className="text-3xl font-bold mb-8">Visit Our Showroom</h2>
                
                <div className="relative h-[300px] rounded-xl overflow-hidden mb-10">
                  <Image
                    src="https://images.unsplash.com/photo-1643903032976-8c0d0556a8ea?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Ultimate Kitchen &amp; Bath Showroom"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-3 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Address</h3>
                      <p className="text-gray-600">
                        1000 Clint Moore Rd #105<br />
                        Boca Raton, FL 33487
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-3 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Contact</h3>
                      <p className="text-gray-600">
                        Phone: (561) 998-7711<br />
                        Email: ultimatekbinc@aol.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-3 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Hours (By Appointment Only)</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9am - 6pm<br />
                        Saturday: 10am - 4pm<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3573.4875874774725!2d-80.11008802457792!3d26.407737476951706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d91fd2e9c30259%3A0x323c277df0c2d9a0!2s1000%20Clint%20Moore%20Rd%20%23%20105%2C%20Boca%20Raton%2C%20FL%2033487!5e0!3m2!1sen!2sus!4v1732946469278!5m2!1sen!2sus"
                  className="w-full h-[400px]"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

