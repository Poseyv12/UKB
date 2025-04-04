'use client'

import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from 'react'
import ImageModal from './ImageModal'
import { urlForImage } from '@/lib/sanity'
import { Gallery, GalleryItem } from '@/types/sanity'

interface GalleryContentProps {
  galleryData: Gallery[]
  showTabs?: boolean
}

export default function GalleryContent({ galleryData, showTabs = true }: GalleryContentProps) {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null)

  // Organize gallery items by category
  const galleryItems = galleryData.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = []
    }
    acc[item.category].push(...item.images)
    return acc
  }, {} as Record<string, GalleryItem[]>)

  const renderGalleryGrid = (items: GalleryItem[]) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 max-w-7xl mx-auto">
      {items.map((item, index) => {
        const imageUrl = urlForImage(item.asset)
        if (!imageUrl) return null
        
        return (
          <div
            key={index}
            className="relative h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden shadow-lg group cursor-pointer"
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
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 sm:group-hover:opacity-100 opacity-100 sm:opacity-0 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white transform translate-y-0 sm:translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              {item.caption && <p className="text-sm sm:text-base text-gray-200">{item.caption}</p>}
              <p className="text-sm sm:text-base text-gray-200">Click to view details</p>
            </div>
          </div>
        )
      })}
    </div>
  )

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
            {showTabs ? 'Our Project Gallery' : `${Object.keys(galleryItems)[0]?.replace('-', ' ')} Gallery`}
          </h1>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-2 sm:px-4">
          {showTabs ? (
            <Tabs defaultValue={Object.keys(galleryItems)[0]} className="w-full">
              <TabsList className="grid grid-cols-2 sm:flex sm:flex-row justify-center gap-x-2 gap-y-4 mb-20 sm:mb-12 mx-auto max-w-[95vw] sm:max-w-none">
                {Object.keys(galleryItems).map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="w-full sm:w-auto sm:flex-none px-2 sm:px-8 py-2 sm:py-3 text-xs sm:text-base rounded-lg text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors
                    data-[state=active]:bg-orange-500 data-[state=active]:text-white data-[state=active]:shadow-md"
                  >
                    {category.replace('-', ' ')}
                  </TabsTrigger>
                ))}
              </TabsList>

              <div className="relative mt-8 sm:mt-0">
                {Object.entries(galleryItems).map(([category, items]) => (
                  <TabsContent
                    key={category}
                    value={category}
                    className="mt-6 sm:mt-8 transition-all duration-300 animate-in fade-in-50"
                  >
                    {renderGalleryGrid(items)}
                  </TabsContent>
                ))}
              </div>
            </Tabs>
          ) : (
            renderGalleryGrid(Object.values(galleryItems)[0] || [])
          )}
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

