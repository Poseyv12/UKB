import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import CategoryGallery from '../../../components/CategoryGallery'
import { Metadata } from 'next'
import { client } from '@/lib/sanity.client'
import { Gallery } from '@/types/sanity'
import { notFound } from 'next/navigation'

interface CategoryPageProps {
  params: Promise<{ category: string }>
}

async function getGalleryData(category: string) {
  const query = `*[_type == "gallery" && category == $category] {
    category,
    images[] {
      _type,
      asset,
      alt,
      caption
    }
  }`
  
  return client.fetch<Gallery[]>(query, { category })
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params
  const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1)
  
  return {
    title: `${formattedCategory} Gallery - Ultimate Kitchen & Bath`,
    description: `Explore our ${formattedCategory.toLowerCase()} remodeling projects gallery at Ultimate Kitchen & Bath.`,
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params
  const galleryData = await getGalleryData(category)
  
  if (!galleryData || galleryData.length === 0) {
    notFound()
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <CategoryGallery galleryData={galleryData} />
      </main>
      <Footer />
    </div>
  )
} 