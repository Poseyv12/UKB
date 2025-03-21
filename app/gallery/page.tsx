import Header from '../../components/Header'
import Footer from '../../components/Footer'
import GalleryContent from '../../components/GalleryContent'
import { Metadata } from 'next'
import { client } from '../sanity/client'
import { Gallery } from '@/types/sanity'

async function getGalleryData() {
  const query = `*[_type == "gallery"] {
    category,
    images[] {
      _type,
      asset,
      alt,
      caption
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
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <GalleryContent galleryData={galleryData} />
      </main>
      <Footer />
    </div>
  )
}

