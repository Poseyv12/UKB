"use client"
import Image from 'next/image'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'John Doe',
    role: 'Homeowner',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80',
    text: 'Ultimate Kitchen & Bath transformed our outdated kitchen into a modern masterpiece. Their attention to detail and quality craftsmanship exceeded our expectations!',
    rating: 5
  },
  {
    name: 'Jane Smith',
    role: 'Interior Designer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    text: 'We couldn\'t be happier with our new bathroom. The team was professional, efficient, and delivered exactly what we envisioned.',
    rating: 5
  },
  {
    name: 'Mike Johnson',
    role: 'Real Estate Agent',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80',
    text: 'The kitchen renovation was seamless from start to finish. Their design team helped us create the perfect layout, and the installation crew was incredibly skilled.',
    rating: 5
  },
  {
    name: 'Sarah Williams',
    role: 'Business Owner',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80',
    text: 'Our master bathroom remodel exceeded all expectations. The attention to detail and quality of materials used were outstanding.',
    rating: 5
  },
  {
    name: 'David Chen',
    role: 'Architect',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80',
    text: 'As an architect, I appreciate their commitment to precision and quality. They bring designs to life exactly as envisioned.',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    role: 'Homeowner',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80',
    text: 'The team went above and beyond to ensure every detail was perfect. Our new kitchen is now the heart of our home.',
    rating: 5
  }
]

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <h2 className="text-4xl font-extrabold text-center mb-4 text-gray-800">
          What Our Clients Say
        </h2>
        <p className="text-lg text-center mb-12 text-gray-600 max-w-3xl mx-auto">
          Discover why homeowners and professionals trust us with their renovation projects.
          Here are some stories from our satisfied clients.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                  <div className="flex mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <blockquote className="text-gray-600 italic">
                &quot;{testimonial.text}&quot;
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

