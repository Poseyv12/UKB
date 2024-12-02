import Header from '../../components/Header'
import Footer from '../../components/Footer'
import BlogContent from '../../components/BlogContent'

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <BlogContent />
      </main>
      <Footer />
    </div>
  )
}

