import Header from '../../components/Header'
import Footer from '../../components/Footer'
import BlogContent from '../../components/BlogContent'

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

