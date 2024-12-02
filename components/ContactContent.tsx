'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormItem, FormLabel, FormMessage, FormField } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

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
})

export default function ContactContent() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    setTimeout(() => {
      console.log(values)
      setSubmitMessage('Thank you for your message. We will get back to you soon!')
      setIsSubmitting(false)
      form.reset()
    }, 2000)
  }

  return (
    <>
      <section className="relative h-[200px] flex items-center justify-center mb-8">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1499159058454-75067059248a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbnRhY3R8ZW58MHx8MHx8fDA%3D')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="absolute inset-0 bg-black/20" /> {/* Dark overlay */}
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-black z-10">
          Contact Us
        </h1>
      </section>

      <section className="py-8 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="order-1">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">Get in Touch</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-8">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
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
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Your email" {...field} />
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
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Your message" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full sm:w-auto"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </Form>
              {submitMessage && (
                <p className="mt-4 text-green-600">{submitMessage}</p>
              )}
            </div>
            <div className="order-2">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">Visit Our Showroom</h2>
              <p className="mb-4 text-sm sm:text-base">
                1000 Clint Moore Rd #105<br />
               Boca Raton, FL 33487
                
              </p>
              <p className="mb-4 text-sm sm:text-base">
                Phone: (555) 123-4567<br />
                Email: info@ultimatekb.com
              </p>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Hours</h3>
              <p className="mb-4 text-sm sm:text-base">
                Monday - Friday: 9am - 6pm<br />
                Saturday: 10am - 4pm<br />
                Sunday: Closed
              </p>
              <div className="aspect-w-16 aspect-h-9 relative h-[300px] sm:h-[450px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3573.4875874774725!2d-80.11008802457792!3d26.407737476951706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d91fd2e9c30259%3A0x323c277df0c2d9a0!2s1000%20Clint%20Moore%20Rd%20%23%20105%2C%20Boca%20Raton%2C%20FL%2033487!5e0!3m2!1sen!2sus!4v1732946469278!5m2!1sen!2sus"
                  className="w-full h-full absolute"
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
    </>
  )
}

