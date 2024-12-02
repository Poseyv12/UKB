'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const galleryItems = {
  kitchen: [
    { src: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', alt: 'Modern Kitchen' },
    { src: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', alt: 'Bright Kitchen' },
    { src: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80', alt: 'Minimalist Kitchen' },
    { src: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', alt: 'Rustic Kitchen' },
  ],
  bath: [
    { src: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80', alt: 'Luxurious Bathroom' },
    { src: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80', alt: 'Modern Bathroom' },
    { src: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80', alt: 'Minimalist Bathroom' },
    { src: 'https://images.unsplash.com/photo-1604709177225-055f99402ea3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80', alt: 'Spa-like Bathroom' },
  ],
  general: [
    { src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2100&q=80', alt: 'Living Room' },
    { src: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80', alt: 'Dining Room' },
    { src: 'https://images.unsplash.com/photo-1616137466211-f939a420be84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80', alt: 'Home Office' },
    { src: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', alt: 'Outdoor Space' },
  ],
}

export default function GalleryContent() {
  const [activeTab, setActiveTab] = useState('kitchen')

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] sm:h-[500px] lg:h-[600px]">
        <Image
          src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Gallery Hero"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white text-center">
            Our Project Gallery
          </h1>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="kitchen" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 bg-gray-100">
              <TabsTrigger 
                value="kitchen"
                className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
              >
                Kitchen
              </TabsTrigger>
              <TabsTrigger 
                value="bath"
                className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
              >
                Bath
              </TabsTrigger>
              <TabsTrigger 
                value="general"
                className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
              >
                General
              </TabsTrigger>
            </TabsList>
            {Object.entries(galleryItems).map(([key, items]) => (
              <TabsContent key={key} value={key} className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {items.map((item, index) => (
                    <div
                      key={index}
                      className="relative aspect-square overflow-hidden rounded-lg shadow-md"
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 py-2 px-4">
                        <p className="text-white text-sm font-medium">{item.alt}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </>
  )
}

