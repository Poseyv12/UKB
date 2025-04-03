import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_TOKEN,
  perspective: 'published',
});

// Test function to verify Sanity connection
export async function testSanityConnection() {
  try {
    const result = await client.fetch('count(*)');
    console.log('Sanity connection test result:', result);
    return result;
  } catch (error) {
    console.error('Sanity connection test failed:', error);
    throw error;
  }
}

export const urlFor = (source: SanityImageSource) => imageUrlBuilder(client).image(source); 