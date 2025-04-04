import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import BackButton from '@/components/BackButton'

export const metadata: Metadata = {
  title: 'Custom Cabinetry Services | Ultimate Kitchen & Bath',
  description: 'Transform your space with our custom cabinetry solutions. Expert craftsmanship, premium materials, and personalized designs for your home.',
}

export default function CustomCabinetryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[500px] sm:h-[600px]">
          <Image
            src="/images/ukb_kitchen2.jpeg"
            alt="Custom Cabinetry Showcase"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4">
                Custom Cabinetry
              </h1>
              <p className="text-xl text-white max-w-2xl mx-auto">
                Elevate your space with beautifully crafted custom cabinets designed for your lifestyle
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
                <h2 className="text-3xl font-bold mb-6">Expert Cabinet Craftsmanship</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our custom cabinetry solutions are designed to perfectly match your style and maximize your space. Each piece is meticulously crafted using premium materials and expert techniques to ensure lasting beauty and functionality.
                </p>
                <p className="text-lg text-gray-600">
                  From traditional to contemporary designs, our skilled craftsmen create cabinets that combine aesthetic appeal with practical storage solutions. We work closely with you to understand your needs and create cabinets that enhance your daily life.
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1682888813734-b1b0a4f79385?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Custom Cabinet Design Process"
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
            <h2 className="text-3xl font-bold text-center mb-12">Our Cabinet Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Kitchen Cabinets',
                  description: 'Custom kitchen cabinets designed for optimal storage and workflow efficiency',
                },
                {
                  title: 'Bathroom Vanities',
                  description: 'Elegant bathroom storage solutions tailored to your space',
                },
                {
                  title: 'Built-in Units',
                  description: 'Custom built-ins for entertainment centers, offices, and living spaces',
                },
                {
                  title: 'Storage Solutions',
                  description: 'Innovative storage designs to maximize space and organization',
                },
                {
                  title: 'Material Selection',
                  description: 'Premium woods and finishes to match your style and durability needs',
                },
                {
                  title: 'Hardware & Accessories',
                  description: 'High-quality hardware and custom accessories for enhanced functionality',
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
            <h2 className="text-3xl font-bold text-center mb-12">Our Custom Cabinet Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: '1',
                  title: 'Design Consultation',
                  description: 'Discuss your vision, style preferences, and space requirements',
                },
                {
                  step: '2',
                  title: 'Custom Design',
                  description: 'Create detailed plans and select materials and finishes',
                },
                {
                  step: '3',
                  title: 'Crafting',
                  description: 'Expert fabrication of your custom cabinets',
                },
                {
                  step: '4',
                  title: 'Installation',
                  description: 'Professional installation with attention to every detail',
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
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Space?</h2>
            <p className="text-xl text-white mb-8">
              Contact us today to discuss your custom cabinetry project
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