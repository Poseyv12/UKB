import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import BackButton from '@/components/BackButton'

export const metadata: Metadata = {
  title: 'Kitchen Remodeling Services | Ultimate Kitchen & Bath',
  description: 'Transform your kitchen with our expert remodeling services. Custom designs, quality craftsmanship, and exceptional service for your dream kitchen.',
}

export default function KitchenRemodelPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[500px] sm:h-[600px]">
          <Image
            src="/images/trans-kitchen.PNG"
            alt="Modern Kitchen  fgRemodel"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4">
                Kitchen Remodeling
              </h1>
              <p className="text-xl text-white max-w-2xl mx-auto">
                Transform your kitchen into a beautiful, functional space that reflects your style and meets your needs
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
                <h2 className="text-3xl font-bold mb-6">Custom Kitchen Remodeling</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our expert team specializes in creating beautiful, functional kitchens that perfectly match your lifestyle and design preferences. From complete renovations to specific upgrades, we handle every aspect of your kitchen remodel with precision and care.
                </p>
                <p className="text-lg text-gray-600">
                  We work closely with you to understand your vision and bring it to life, ensuring every detail meets your expectations. Our experienced designers and craftsmen use only the highest quality materials and the latest techniques to deliver exceptional results.
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/ukb_kitchen2.jpeg"
                  alt="Kitchen Design Process"
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
            <h2 className="text-3xl font-bold text-center mb-12">Our Kitchen Remodeling Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Custom Cabinetry',
                  description: 'Beautiful, functional storage solutions tailored to your needs',
                },
                {
                  title: 'Countertop Installation',
                  description: 'Premium materials including quartz, granite, and marble',
                },
                {
                  title: 'Appliance Integration',
                  description: 'Seamless integration of modern appliances for optimal functionality',
                },
                {
                  title: 'Lighting Design',
                  description: 'Custom lighting solutions to enhance your kitchen\'s ambiance',
                },
                {
                  title: 'Flooring',
                  description: 'Durable, stylish flooring options to complete your kitchen design',
                },
                {
                  title: 'Backsplash Installation',
                  description: 'Beautiful tile work to protect and enhance your kitchen walls',
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
                  title: 'Consultation',
                  description: 'We discuss your vision, needs, and budget',
                },
                {
                  step: '2',
                  title: 'Design',
                  description: 'Create a detailed plan for your dream kitchen',
                },
                {
                  step: '3',
                  title: 'Installation',
                  description: 'Expert craftsmanship brings your design to life',
                },
                {
                  step: '4',
                  title: 'Completion',
                  description: 'Final inspection and your satisfaction guaranteed',
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
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Kitchen?</h2>
            <p className="text-xl text-white mb-8">
              Contact us today for a free consultation and let&apos;s start planning your dream kitchen
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
