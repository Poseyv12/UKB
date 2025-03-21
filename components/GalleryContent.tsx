'use client'

import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from 'react'
import ImageModal from './ImageModal'
import { urlForImage } from '@/lib/sanity'
import { Gallery, GalleryItem } from '@/types/sanity'

interface GalleryContentProps {
  galleryData: Gallery[]
}

export default function GalleryContent({ galleryData }: GalleryContentProps) {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null)

  // Organize gallery items by category
  const galleryItems = galleryData.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = []
    }
    acc[item.category].push(...item.images)
    return acc
  }, {} as Record<string, GalleryItem[]>)

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
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white text-center">
            Our Project Gallery
          </h1>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="kitchen" className="w-full">
            <TabsList className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
              <TabsTrigger 
                value="kitchen"
                className="px-4 sm:px-8 py-2 sm:py-3 text-sm sm:text-base rounded-lg text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors
                data-[state=active]:bg-orange-500 data-[state=active]:text-white data-[state=active]:shadow-md"
              >
                Kitchen
              </TabsTrigger>
              <TabsTrigger 
                value="bath"
                className="px-4 sm:px-8 py-2 sm:py-3 text-sm sm:text-base rounded-lg text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors
                data-[state=active]:bg-orange-500 data-[state=active]:text-white data-[state=active]:shadow-md"
              >
                Bathroom 
              </TabsTrigger>
              <TabsTrigger 
                value="other"
                className="px-4 sm:px-8 py-2 sm:py-3 text-sm sm:text-base rounded-lg text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors
                data-[state=active]:bg-orange-500 data-[state=active]:text-white data-[state=active]:shadow-md"
              >
                Bar Spaces
              </TabsTrigger>
              <TabsTrigger 
                value="master-bath"
                className="px-4 sm:px-8 py-2 sm:py-3 text-sm sm:text-base rounded-lg text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors
                data-[state=active]:bg-orange-500 data-[state=active]:text-white data-[state=active]:shadow-md"
              >
                Master Bath
              </TabsTrigger>  
            </TabsList>

            <div className="relative">
              {Object.entries(galleryItems).map(([category, items]) => (
                <TabsContent 
                  key={category} 
                  value={category} 
                  className="mt-8 transition-all duration-300 animate-in fade-in-50"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    {items.map((item, index) => {
                      const imageUrl = urlForImage(item.asset)
                      if (!imageUrl) return null
                      
                      return (
                        <div
                          key={index}
                          className="relative h-[400px] sm:h-[500px] overflow-hidden rounded-xl shadow-lg group cursor-pointer"
                          onClick={() => setSelectedImage({ src: imageUrl, alt: item.alt })}
                        >
                          <Image
                            src={imageUrl}
                            alt={item.alt}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            quality={90}
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            {item.caption && <p className="text-gray-200">{item.caption}</p>}
                            <p className="text-gray-200">Click to view details</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
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

