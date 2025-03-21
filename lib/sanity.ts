import imageUrlBuilder from '@sanity/image-url'
import { client } from '@/app/sanity/client'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

const builder = imageUrlBuilder(client)

export function urlForImage(source: SanityImageSource): string {
  if (!source) return ''
  
  // Return the URL string directly
  return builder
    .image(source)
    .auto('format')
    .fit('max')
    .url()
} 