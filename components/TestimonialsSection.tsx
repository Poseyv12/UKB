"use client"
import Image from 'next/image'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect, useCallback } from 'react'

const testimonials = [
  {
    name: 'John Doe',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80',
    text: 'Ultimate Kitchen & Bath transformed our outdated kitchen into a modern masterpiece. Their attention to detail and quality craftsmanship exceeded our expectations!',
  },
  {
    name: 'Jane Smith',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    text: 'We couldn\'t be happier with our new bathroom. The team was professional, efficient, and delivered exactly what we envisioned. Highly recommended!',
  },
  {
    name: 'Mike Johnson',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80',
    text: 'The kitchen renovation was seamless from start to finish. Their design team helped us create the perfect layout, and the installation crew was incredibly skilled.',
  },
  {
    name: 'Sarah Williams',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80',
    text: 'Our master bathroom remodel exceeded all expectations. The attention to detail and quality of materials used were outstanding. It feels like a luxury spa!',
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  const handlePrevious = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
    }
  }, [isAnimating])

  const handleNext = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }
  }, [isAnimating])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [currentIndex])

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(handleNext, 5000)
      return () => clearInterval(interval)
    }
  }, [isPaused, handleNext])

  return (
    <section className="py-8 md:py-16 bg-gradient-to-b from-white to-white-500">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 md:mb-8 text-gray-800">
          What Our Clients Say
        </h2>
        <p className="text-base md:text-lg text-center mb-8 md:mb-12 text-gray-600">
          Hear from our happy clients who have transformed their homes with our expert remodeling services.
        </p>
        <div className="relative max-w-2xl mx-auto px-4 md:px-0"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <button 
            onClick={handlePrevious}
            className="absolute md:left-0 left-1 top-1/2 -translate-y-1/2 md:-translate-x-12 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
          </button>
          
          <div className="overflow-hidden relative">
            <div
              key={currentIndex}
              className="bg-white p-4 md:p-8 rounded-xl shadow-lg animate-fade-in"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden mb-4">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    width={96}
                    height={96}
                    className="object-cover object-center"
                  />
                </div>
                <p className="text-sm md:text-base text-gray-600 text-center italic mb-4 md:mb-6">
                  &ldquo;{testimonials[currentIndex].text}&rdquo;
                </p>
                <h3 className="text-base md:text-lg font-bold text-gray-800">
                  {testimonials[currentIndex].name}
                </h3>
                <div className="flex mt-2 md:mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <button 
            onClick={handleNext}
            className="absolute md:right-0 right-1 top-1/2 -translate-y-1/2 md:translate-x-12 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
          </button>

          <div className="flex justify-center mt-4 md:mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => !isAnimating && setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-gray-800' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

