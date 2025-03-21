import type { Metadata } from 'next'
import './globals.css'
import { SpeedInsights } from '@vercel/speed-insights/next';
export const metadata: Metadata = {
  title: 'Ultimate Kitchen & Bath',
  description: 'Premier kitchen and bathroom remodeling services in Boca Raton, FL',
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
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
} 