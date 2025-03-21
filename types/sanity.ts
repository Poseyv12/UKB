import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export interface GalleryItem {
  _type: 'image'
  asset: SanityImageSource
  alt: string
  caption?: string
}

export interface Gallery {
  _type: 'gallery'
  category: 'kitchen' | 'bath' | 'other'
  images: GalleryItem[]
} 