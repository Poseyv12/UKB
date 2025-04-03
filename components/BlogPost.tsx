import React from 'react';
import Image from 'next/image';
import { Post } from '../types/post';

interface BlogPostProps {
  post: Post;
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">{post.title}</h1>
        <p className="text-xl text-gray-600 mb-4">{post.excerpt}</p>
        <p className="text-sm text-gray-500">
          Published on: {new Date(post.created_at).toLocaleDateString()}
        </p>
      </header>
      
      {post.post_image && (
        <figure className="mb-8 relative aspect-video">
          <Image 
            src={post.post_image} 
            alt={post.title} 
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
            className="rounded-lg shadow-lg object-cover"
            priority={true}
          />
        </figure>
      )}
      
      <section 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></section>
    </article>
  );
} 