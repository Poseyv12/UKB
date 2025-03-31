'use client'

import Image from 'next/image'
import { useState } from 'react'
import ImageModal from './ImageModal'
import { urlForImage } from '@/lib/sanity'
import { Gallery } from '@/types/sanity'
import BackButton from './BackButton'

interface CategoryGalleryProps {
  galleryData: Gallery[]
}

export default function CategoryGallery({ galleryData }: CategoryGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null)
  const category = galleryData[0]?.category || ''
  const images = galleryData[0]?.images || []

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[500px] sm:h-[600px] lg:h-[700px]">
        <Image
          src="/ukb_kitchen.png"
          alt="Gallery Hero"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white text-center">
            {category.replace('-', ' ')} Gallery
          </h1>
        </div>
      </section>

      <BackButton href="/gallery" label="Back to Gallery" />

      {/* Gallery Grid */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 max-w-7xl mx-auto">
            {images.map((item, index) => {
              const imageUrl = urlForImage(item.asset)
              if (!imageUrl) return null
              
              return (
                <div
                  key={index}
                  className="relative h-[300px] sm:h-[300px] lg:h-[400px] overflow-hidden shadow-lg group cursor-pointer"
                  onClick={() => setSelectedImage({ src: imageUrl, alt: item.alt })}
                >
                  <Image
                    src={imageUrl}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={90}
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    {item.caption && <p className="text-sm sm:text-base text-gray-200">{item.caption}</p>}
                    <p className="text-sm sm:text-base text-gray-200">Click to view details</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        src={selectedImage?.src ?? ''}
        alt={selectedImage?.alt ?? ''}
      />
    </>
  )
} 