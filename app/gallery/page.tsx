import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Metadata } from 'next'
import { client } from '@/lib/sanity.client'
import { Gallery, GalleryItem } from '@/types/sanity'
import Image from 'next/image'
import Link from 'next/link'
import { urlForImage } from '@/lib/sanity'
import BackButton from '../../components/BackButton'

async function getGalleryData() {
  const query = `*[_type == "gallery"] {
    category,
    order,
    images[] {
      _type,
      asset,
      alt,
      caption,
    }
  }`
  
  return client.fetch<Gallery[]>(query)
}

export const metadata: Metadata = {
  title: 'Gallery - Ultimate Kitchen & Bath',
  description: 'Explore our gallery of kitchen and bath remodeling projects completed by Ultimate Kitchen & Bath.',
}

export default async function GalleryPage() {
  const galleryData = await getGalleryData()
  
  // Get unique categories and their first image, preserving order
  const categories = galleryData.reduce((acc, item) => {
    if (!acc[item.category] && item.images.length > 0) {
      acc[item.category] = {
        image: item.images[0],
        order: item.order || 999 // Default to high number if no order specified
      }
    }
    return acc
  }, {} as Record<string, { image: GalleryItem; order: number }>)

  // Sort categories by order
  const sortedCategories = Object.entries(categories)
    .sort(([, a], [, b]) => a.order - b.order)
    .reduce((acc, [category, { image }]) => {
      acc[category] = image
      return acc
    }, {} as Record<string, GalleryItem>)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
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
              Our Project Gallery
            </h1>
          </div>
        </section>

        <BackButton href="/" label="Back to Home" />

        {/* Category Cards Section */}
        <section className="py-12 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {Object.entries(sortedCategories).map(([category, firstImage]) => {
                const imageUrl = urlForImage(firstImage.asset)
                return (
                  <Link
                    key={category}
                    href={`/gallery/${category}`}
                    className="group relative h-[400px] overflow-hidden shadow-lg transition-transform hover:scale-[1.02] duration-300"
                  >
                    <Image
                      src={imageUrl || '/ukb_kitchen.png'}
                      alt={`${category} category`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h2 className="text-2xl sm:text-3xl font-bold capitalize mb-2 text-orange-500">
                        {category.replace('-', ' ')}
                      </h2>
                      <p className="text-gray-200">
                        View our {category.replace('-', ' ')} projects
                      </p>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

