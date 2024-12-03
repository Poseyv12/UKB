'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const images = [
  {
    src: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    alt: 'Luxury Kitchen Remodeling in Boca Raton - Modern Design',
  },
  {
    src: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    alt: 'Custom Bathroom Renovation Boca Raton - Spa-Like Retreat',
  },
  {
    src: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=2076&q=80',
    alt: 'High-End Kitchen and Bath Remodeling Boca Raton',
  }
]

export default function HeroSlider() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {images.map((image, index) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          style={{
            objectFit: 'cover',
            opacity: index === currentImage ? 1 : 0,
            transition: 'opacity 1s ease-in-out'
          }}
          priority={index === 0}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/50 flex items-center justify-center">
        <div className="text-center px-6 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
            Kitchen & Bath Remodeling Experts
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white mb-8">
            Transform Your Home with South Florida&apos;s Most Trusted Kitchen and Bathroom Renovation Specialists
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-orange-700 transition duration-300">
              Complimetery Design Consultation
            </button>
         
          </div>
        </div>
      </div>
    </div>
  )
}


