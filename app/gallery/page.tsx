import Header from '../../components/Header'
import Footer from '../../components/Footer'
import GalleryContent from '../../components/GalleryContent'

export default function GalleryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <GalleryContent />
      </main>
      <Footer />
    </div>
  )
}

