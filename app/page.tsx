import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroSlider from '../components/HeroSlider'
import ServicesSection from '../components/ServicesSection'
import TestimonialsSection from '../components/TestimonialsSection'
import ProjectsGallery from '../components/ProjectsGallery'
import CallToAction from '../components/CallToAction'
import WhyChooseUs from '../components/WhyChooseUs'
import Faq from '../components/FAQ'
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSlider /> {/* Showcases luxury kitchen and bathroom remodeling in Boca Raton */}
        <ProjectsGallery /> {/* Displays our best kitchen and bathroom remodels in Boca Raton */}
        <WhyChooseUs /> {/* Highlights why we're the top-rated kitchen and bath experts in Boca Raton */}
        <ServicesSection /> {/* Features our custom kitchen design and bathroom renovation services */}
        <TestimonialsSection /> {/* Reviews from satisfied Boca Raton homeowners */}
        <CallToAction /> {/* Connect with Boca Raton's premier kitchen and bath contractor */}
        <Faq /> {/* Frequently asked questions about our services */}
      </main>
      <Footer />
    </div>
  )
}

