'use client';

import { useQuery } from '@tanstack/react-query';
import { client } from '@/lib/sanity.client';
import { blogPostQuery } from '@/lib/queries';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity.client';
import { PortableText } from '@portabletext/react';
import { portableTextComponents } from './PortableTextComponent';
import { Facebook, Twitter, Linkedin, Clock } from 'lucide-react';
import { useEffect, useState } from 'react';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { PortableTextBlock } from '@portabletext/types';

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt: string;
  mainImage: SanityImageSource;
  mainImageAlt: string;
  body: PortableTextBlock[];
  categories: string[];
  tags: string[];
}

export default function BlogPostContent({ slug }: { slug: string }) {
  const [readingTime, setReadingTime] = useState<number>(0);
  const [currentUrl, setCurrentUrl] = useState<string>('');

  useEffect(() => {
    setCurrentUrl(window.location.href);
    // Calculate reading time
    const text = document.querySelector('.prose')?.textContent || '';
    const words = text.trim().split(/\s+/).length;
    const time = Math.ceil(words / 200); // Assuming 200 words per minute
    setReadingTime(time);
  }, []);

  const { data: post, isLoading, error } = useQuery<BlogPost>({
    queryKey: ['blog-post', slug],
    queryFn: () => client.fetch(blogPostQuery, { slug })
  });

  if (isLoading) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900">Loading blog post...</h2>
      </div>
    );
  }

  if (error) {
    console.error('Query error:', error);
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900">Error loading blog post</h2>
        <p className="text-gray-600 mt-2">Please try again later</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900">Blog post not found</h2>
      </div>
    );
  }

  const shareUrl = encodeURIComponent(currentUrl);
  const shareTitle = encodeURIComponent(post.title);

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <header className="mb-12 text-center">
        <div className="flex justify-center gap-2 mb-6">
          {post.categories?.map((category: string) => (
            <span 
              key={category}
              className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium"
            >
              {category}
            </span>
          ))}
        </div>
        <h1 className="text-5xl font-bold mb-6 text-gray-900 leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center justify-center gap-6 text-gray-500">
          <div className="flex items-center gap-2">
            <Clock size={16} />
            <span>{readingTime} min read</span>
          </div>
          <span>•</span>
          <time dateTime={post.publishedAt}>
            {new Date(post.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        </div>
      </header>

      {post.mainImage && (
        <div className="relative aspect-video mb-12 rounded-xl overflow-hidden shadow-xl">
          <Image
            src={urlFor(post.mainImage).url()}
            alt={post.mainImageAlt || post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
            className="object-cover"
            priority
          />
        </div>
      )}

      <div className="prose prose-lg max-w-none">
        <PortableText 
          value={post.body} 
          components={portableTextComponents}
        />
      </div>

      {post.tags?.length > 0 && (
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag: string) => (
              <span 
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-semibold mb-4">Share this article</h3>
        <div className="flex gap-4">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            aria-label="Share on Facebook"
          >
            <Facebook size={20} />
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-sky-500 text-white hover:bg-sky-600 transition-colors"
            aria-label="Share on Twitter"
          >
            <Twitter size={20} />
          </a>
          <a
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareTitle}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition-colors"
            aria-label="Share on LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </article>
  );
} 