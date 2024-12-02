import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ContactContent from '../../components/ContactContent'

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ContactContent />
      </main>
      <Footer />
    </div>
  )
}

