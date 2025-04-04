import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import BackButton from '@/components/BackButton'

export const metadata: Metadata = {
  title: 'Space Planning Services | Ultimate Kitchen & Bath',
  description: 'Expert space planning and design services. Optimize your home layout with our professional design team for maximum functionality and flow.',
}

export default function SpacePlanningPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[500px] sm:h-[600px]">
          <Image
            src="https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Space Planning and Design"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4">
                Space Planning
              </h1>
              <p className="text-xl text-white max-w-2xl mx-auto">
                Optimize your living space with expert design and layout solutions
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
                <h2 className="text-3xl font-bold mb-6">Professional Space Planning</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our expert designers create thoughtful, functional layouts that maximize your space&apos;s potential. We consider traffic flow, functionality, and aesthetics to design spaces that work perfectly for your lifestyle.
                </p>
                <p className="text-lg text-gray-600">
                  Whether you&apos;re renovating a kitchen, bathroom, or planning a complete home remodel, our space planning services ensure every square foot is utilized effectively while maintaining a beautiful, cohesive design.
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/Jeff.jpeg"
                  alt="Space Planning Process"
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
            <h2 className="text-3xl font-bold text-center mb-12">Our Space Planning Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Layout Design',
                  description: 'Optimal space arrangement for maximum functionality and flow',
                },
                {
                  title: '3D Visualization',
                  description: 'Realistic 3D renderings to help you envision your space',
                },
                {
                  title: 'Storage Solutions',
                  description: 'Creative storage planning to maximize space efficiency',
                },
                {
                  title: 'Traffic Flow Analysis',
                  description: 'Ensure smooth movement through your space',
                },
                {
                  title: 'Lighting Design',
                  description: 'Strategic lighting plans to enhance functionality and ambiance',
                },
                {
                  title: 'Universal Design',
                  description: 'Accessible spaces that work for everyone',
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
            <h2 className="text-3xl font-bold text-center mb-12">Our Design Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: '1',
                  title: 'Initial Assessment',
                  description: 'Evaluate your space and understand your needs',
                },
                {
                  step: '2',
                  title: 'Concept Development',
                  description: 'Create preliminary layout options and designs',
                },
                {
                  step: '3',
                  title: 'Design Refinement',
                  description: 'Fine-tune the design based on your feedback',
                },
                {
                  step: '4',
                  title: 'Final Planning',
                  description: 'Detailed plans and specifications for implementation',
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
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Optimize Your Space?</h2>
            <p className="text-xl text-white mb-8">
              Contact us today to start planning your perfect layout
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