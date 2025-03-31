import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ServicesSection from '../../components/ServicesSection'

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ServicesSection />

        {/* CTA Section */}
        <section className="bg-gray-50 py-16 sm:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and let&apos;s bring your vision to life.
            </p>
            <a
              href="/contact"
              className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300"
            >
              Get Started
            </a>
          </div>
        </section>
      <Footer />
    </div>
  )
} 