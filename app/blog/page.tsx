import Header from '../../components/Header'
import Footer from '../../components/Footer'
import BlogContent from '../../components/BlogContent'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - Ultimate Kitchen & Bath',
  description: 'Read our blog for tips, tricks, and insights on kitchen and bath remodeling in Boca Raton, FL.',
}

export const revalidate = 3600 // Revalidate every hour

export default async function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <BlogContent />
      </main>
      <Footer />
    </div>
  )
}

