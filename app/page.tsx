import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroSlider from '../components/HeroSlider'
import TestimonialsSection from '../components/TestimonialsSection'
import ProjectsGallery from '../components/ProjectsGallery'
import CallToAction from '../components/CallToAction'
import WhyChooseUs from '../components/WhyChooseUs'
import Faq from '../components/FAQ'
import { Metadata } from 'next'

import ServicesSection from '@/components/ServicesSection'
export const metadata: Metadata = {
  title: 'Ultimate Kitchen & Bath',
  description: 'Ultimate Kitchen & Bath is a leading kitchen and bath remodeling company in Boca Raton, FL. We specialize in luxury kitchen and bathroom renovations, custom cabinetry, and expert craftsmanship.',
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSlider /> {/* Showcases luxury kitchen and bathroom remodeling in Boca Raton */}
        <ServicesSection /> {/* Features our custom kitchen design and bathroom renovation services */}
        <WhyChooseUs /> {/* Highlights why we're the top-rated kitchen and bath experts in Boca Raton */}
        <ProjectsGallery /> {/* Displays our best kitchen and bathroom remodels in Boca Raton */}
        <TestimonialsSection /> {/* Reviews from satisfied Boca Raton homeowners */}
        <CallToAction /> {/* Connect with Boca Raton's premier kitchen and bath contractor */}
        <Faq /> {/* Frequently asked questions about our services */}
      </main>
      <Footer />
    </div>
  )
}

