import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
  throw new Error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID environment variable');
}

if (!process.env.NEXT_PUBLIC_SANITY_DATASET) {
  throw new Error('Missing NEXT_PUBLIC_SANITY_DATASET environment variable');
}


export const client = createClient({
  projectId: "ogrc4p6l",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
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