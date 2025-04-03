import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from './providers'
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ultimate Kitchen & Bath',
  description: 'Your premier kitchen and bath remodeling company in Boca Raton, FL',
  openGraph: {
    title: 'Ultimate Kitchen & Bath',
    description: 'Premier kitchen and bathroom remodeling services in Boca Raton, FL',
    images: [
      { url: '/ukb_kitchen.png' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ultimate Kitchen & Bath',
    description: 'Premier kitchen and bathroom remodeling services in Boca Raton, FL',
    images: [
      { url: '/ukb_kitchen.png' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
        <SpeedInsights />
      </body>
    </html>
  )
} 