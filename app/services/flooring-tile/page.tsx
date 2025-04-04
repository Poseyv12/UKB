import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import BackButton from '@/components/BackButton'

export const metadata: Metadata = {
  title: 'Flooring & Tile Services | Ultimate Kitchen & Bath',
  description: 'Expert flooring and tile installation services. From luxury tile to hardwood floors, we deliver beautiful and durable solutions for your home.',
}

export default function FlooringTilePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[500px] sm:h-[600px]">
          <Image
            src="https://images.unsplash.com/photo-1639133280761-821824fb6145?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Luxury Flooring and Tile"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4">
                Flooring & Tile
              </h1>
              <p className="text-xl text-white max-w-2xl mx-auto">
                Transform your space with premium flooring and expert tile installation
              </p>
            </div>
          </div>
        </section>

        <BackButton href="/services" label="Back to Services" />

        {/* Service Description */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Expert Flooring & Tile Installation</h2>
                <p className="text-lg text-gray-600 mb-6">
                  We specialize in creating stunning floors and tile installations that combine beauty with durability. Our expert team works with a wide range of materials, from luxury vinyl and hardwood to intricate tile patterns and natural stone.
                </p>
                <p className="text-lg text-gray-600">
                  Whether you&apos;re looking to update your kitchen backsplash, install new bathroom tile, or transform your entire home&apos;s flooring, our skilled craftsmen ensure precise installation and flawless results.
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1656646523907-97b094c7e63a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Flooring Installation Process"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Flooring & Tile Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Tile Installation',
                  description: 'Expert installation of ceramic, porcelain, and natural stone tiles',
                },
                {
                  title: 'Hardwood Flooring',
                  description: 'Premium hardwood floor installation and refinishing services',
                },
                {
                  title: 'Luxury Vinyl',
                  description: 'Modern luxury vinyl plank and tile installation',
                },
                {
                  title: 'Custom Patterns',
                  description: 'Intricate tile patterns and custom floor designs',
                },
                {
                  title: 'Backsplashes',
                  description: 'Beautiful kitchen and bathroom backsplash installations',
                },
                {
                  title: 'Waterproofing',
                  description: 'Professional waterproofing for wet areas and outdoor spaces',
                },
              ].map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Installation Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: '1',
                  title: 'Consultation',
                  description: 'Discuss your style preferences and material options',
                },
                {
                  step: '2',
                  title: 'Surface Preparation',
                  description: 'Ensure proper subfloor preparation and leveling',
                },
                {
                  step: '3',
                  title: 'Installation',
                  description: 'Expert installation with precision and care',
                },
                {
                  step: '4',
                  title: 'Final Inspection',
                  description: 'Quality check and thorough cleanup',
                },
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-orange-500 py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Floors?</h2>
            <p className="text-xl text-white mb-8">
              Contact us today to discuss your flooring and tile project
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule a Consultation
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 