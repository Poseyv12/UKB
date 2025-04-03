'use client';

import { useQuery } from '@tanstack/react-query';
import { client, testSanityConnection } from '@/lib/sanity.client';
import { blogListQuery, debugQuery } from '@/lib/queries';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity.client';
import { useEffect } from 'react';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt: string;
  mainImage: SanityImageSource;
  mainImageAlt: string;
  categories: string[];
  tags: string[];
}

export default function BlogContent() {
  useEffect(() => {
    // Test Sanity connection on component mount
    testSanityConnection().catch(console.error);
  }, []);

  const { data: posts, isLoading, error } = useQuery<BlogPost[]>({
    queryKey: ['blog-list'],
    queryFn: async () => {
      try {
        // First try the debug query
        const debugData = await client.fetch(debugQuery);
        console.log('Debug query result:', debugData);

        // Then try the main query
        const data = await client.fetch(blogListQuery);
        console.log('Main query result:', data);
        return data;
      } catch (err) {
        console.error('Error fetching posts:', err);
        throw err;
      }
    }
  });

  if (isLoading) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900">Loading blog posts...</h2>
      </div>
    );
  }

  if (error) {
    console.error('Query error:', error);
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900">Error loading blog posts</h2>
        <p className="text-gray-600 mt-2">Please try again later</p>
      </div>
    );
  }

  if (!posts?.length) {
    console.log('No posts found, posts array:', posts);
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900">No blog posts found</h2>
        <p className="text-gray-600 mt-2">Check back later for new content</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Latest Blog Posts</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post: BlogPost) => (
          <Link 
            href={`/blog/${post.slug.current}`} 
            key={post._id}
            className="group hover:shadow-lg transition-shadow duration-200 rounded-lg overflow-hidden"
          >
            <article className="bg-white rounded-lg overflow-hidden border border-gray-200">
              {post.mainImage && (
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={urlFor(post.mainImage).url()}
                    alt={post.mainImageAlt || post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
              )}
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-orange-500 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                {post.categories?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.categories.map((category: string) => (
                      <span 
                        key={category}
                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                )}
                <p className="text-sm text-gray-500">
                  {new Date(post.publishedAt).toLocaleDateString()}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}

