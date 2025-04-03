"use client";

import { useQuery } from '@tanstack/react-query';
import { client } from '@/lib/sanity.client';
import { blogListQuery } from '@/lib/queries';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity.client';
import Link from 'next/link';
import { Calendar, Clock } from 'lucide-react';
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
}

export default function BlogList() {
  const { data: posts, isLoading, error } = useQuery<BlogPost[]>({
    queryKey: ['blog-posts'],
    queryFn: () => client.fetch(blogListQuery)
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

  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900">No blog posts found</h2>
        <p className="text-gray-600 mt-2">Check back later for new content</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <article 
          key={post._id}
          className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <Link href={`/blog/${post.slug.current}`}>
            <div className="relative aspect-video">
              <Image
                src={urlFor(post.mainImage).url()}
                alt={post.mainImageAlt || post.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {post.categories?.map((category: string) => (
                  <span 
                    key={category}
                    className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium"
                  >
                    {category}
                  </span>
                ))}
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  <time dateTime={post.publishedAt}>
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </time>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span>5 min read</span>
                </div>
              </div>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
} 