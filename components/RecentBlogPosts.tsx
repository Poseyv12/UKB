'use client';

import { useQuery } from '@tanstack/react-query';
import { client } from '@/lib/sanity.client';
import { blogListQuery } from '@/lib/queries';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity.client';
import Link from 'next/link';
import { Calendar } from 'lucide-react';
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

interface RecentBlogPostsProps {
  limit?: number;
  className?: string;
}

export default function RecentBlogPosts({ limit = 3, className = '' }: RecentBlogPostsProps) {
  const { data: posts, isLoading, error } = useQuery<BlogPost[]>({
    queryKey: ['recent-blog-posts'],
    queryFn: () => client.fetch(blogListQuery)
  });

  if (isLoading) {
    return (
      <div className="text-center py-8">
        <h2 className="text-xl font-bold text-gray-900">Loading recent posts...</h2>
      </div>
    );
  }

  if (error) {
    console.error('Query error:', error);
    return (
      <div className="text-center py-8">
        <h2 className="text-xl font-bold text-gray-900">Error loading posts</h2>
        <p className="text-gray-600 mt-2">Please try again later</p>
      </div>
    );
  }

  if (!posts || posts.length === 0) {
    return null;
  }

  const recentPosts = posts.slice(0, limit);

  return (
    <div className={`space-y-6 ${className}`}>
      <h2 className="text-2xl font-bold text-gray-900">Recent Blog Posts</h2>
      <div className="grid gap-6">
        {recentPosts.map((post) => (
          <Link 
            key={post._id}
            href={`/blog/${post.slug.current}`}
            className="group flex gap-4 items-start hover:bg-gray-50 p-2 rounded-lg transition-colors"
          >
            <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
              <Image
                src={urlFor(post.mainImage).url()}
                alt={post.mainImageAlt || post.title}
                fill
                sizes="96px"
                className="object-cover group-hover:scale-105 transition-transform duration-200"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-500 transition-colors line-clamp-2">
                {post.title}
              </h3>
              <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                <Calendar size={14} />
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </time>
              </div>
              {post.categories?.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {post.categories.map((category) => (
                    <span 
                      key={category}
                      className="px-2 py-0.5 bg-orange-100 text-orange-800 rounded-full text-xs font-medium"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
      <div className="text-center">
        <Link 
          href="/blog"
          className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
        >
          View all blog posts
          <svg 
            className="w-4 h-4 ml-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </Link>
      </div>
    </div>
  );
} 