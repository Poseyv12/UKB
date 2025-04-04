import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import BackButton from '@/components/BackButton'

export const metadata: Metadata = {
  title: 'Bathroom Remodeling Services | Ultimate Kitchen & Bath',
  description: 'Transform your bathroom with our expert remodeling services. Custom designs, luxury fixtures, and exceptional craftsmanship for your dream bathroom.',
}

export default function BathroomRemodelPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[500px] sm:h-[600px]">
          <Image
            src="/images/sec-bath.jpeg"
            alt="Luxury Bathroom Remodel"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4">
                Bathroom Remodeling
              </h1>
              <p className="text-xl text-white max-w-2xl mx-auto">
                Create your perfect sanctuary with a custom bathroom remodel designed for comfort and luxury
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
                <h2 className="text-3xl font-bold mb-6">Luxury Bathroom Remodeling</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Transform your bathroom into a luxurious retreat with our expert remodeling services. Whether you&apos;re looking for a spa-like experience or a functional family bathroom, we create spaces that combine beauty, comfort, and practicality.
                </p>
                <p className="text-lg text-gray-600">
                  Our team of experienced designers and craftsmen work with you to create a bathroom that reflects your personal style while incorporating the latest trends and technologies. From concept to completion, we ensure every detail is perfect.
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/sec-bath.jpeg"
                  alt="Bathroom Design Process"
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
            <h2 className="text-3xl font-bold text-center mb-12">Our Bathroom Remodeling Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Custom Shower Systems',
                  description: 'Luxury shower installations with premium fixtures and custom tile work',
                },
                {
                  title: 'Vanity & Storage',
                  description: 'Custom cabinetry and storage solutions for optimal organization',
                },
                {
                  title: 'Tile & Flooring',
                  description: 'Beautiful, durable tile work for walls, floors, and shower surrounds',
                },
                {
                  title: 'Plumbing Fixtures',
                  description: 'High-end fixtures and faucets from leading manufacturers',
                },
                {
                  title: 'Lighting Design',
                  description: 'Custom lighting solutions for ambiance and functionality',
                },
                {
                  title: 'Accessibility Features',
                  description: 'ADA-compliant and aging-in-place modifications available',
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
            <h2 className="text-3xl font-bold text-center mb-12">Our Remodeling Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: '1',
                  title: 'Initial Consultation',
                  description: 'We discuss your vision, needs, and budget for your new bathroom',
                },
                {
                  step: '2',
                  title: 'Design Planning',
                  description: 'Create a detailed design plan with material selections',
                },
                {
                  step: '3',
                  title: 'Installation',
                  description: 'Expert installation with attention to every detail',
                },
                {
                  step: '4',
                  title: 'Final Walkthrough',
                  description: 'Thorough inspection to ensure your complete satisfaction',
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
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Create Your Dream Bathroom?</h2>
            <p className="text-xl text-white mb-8">
              Contact us today for a free consultation and let&apos;s start planning your perfect bathroom
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
