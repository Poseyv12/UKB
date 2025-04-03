'use client';

import Image from 'next/image';
import { urlFor } from '@/lib/sanity.client';
import { PortableTextComponents } from '@portabletext/react';

export const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="relative my-8 mx-auto max-w-3xl">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || 'Blog post image'}
            width={800}
            height={600}
            className="rounded-lg shadow-lg"
            priority={false}
          />
          {value.caption && (
            <p className="text-center text-sm text-gray-500 mt-2">
              {value.caption}
            </p>
          )}
        </div>
      );
    },
  },
  block: {
    h1: ({ children }) => <h1 className="text-4xl font-bold mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold mb-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold mb-3">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-bold mb-3">{children}</h4>,
    normal: ({ children }) => <p className="mb-4">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="bg-gray-100 rounded px-2 py-1 font-mono text-sm">
        {children}
      </code>
    ),
    link: ({ value, children }) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          className="text-blue-600 hover:underline"
        >
          {children}
        </a>
      );
    },
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-4 mb-4">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-4 mb-4">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-2">{children}</li>,
    number: ({ children }) => <li className="mb-2">{children}</li>,
  },
}; 