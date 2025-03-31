'use client'

import Image from 'next/image'

export default function ServicesHero() {
  return (
    <section className="relative h-[500px] sm:h-[600px] lg:h-[700px]">
      <Image
        src="/ukb_kitchen.png"
        alt="Services Hero"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4">
            Our Services
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto px-4">
            Transform your space with our expert kitchen and bathroom remodeling services
          </p>
        </div>
      </div>
    </section>
  )
} 