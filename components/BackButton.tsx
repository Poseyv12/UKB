'use client'

import Link from 'next/link'

interface BackButtonProps {
  href: string
  label?: string
}

export default function BackButton({ href, label = 'Back' }: BackButtonProps) {
  return (
    <div className="container mx-auto px-4 py-6">
      <Link
        href={href}
        className="inline-flex items-center gap-2 px-4 py-2 text-gray-700 bg-white hover:bg-gray-50 rounded-lg shadow-md transition-all duration-300 group"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
        <span>{label}</span>
      </Link>
    </div>
  )
} 