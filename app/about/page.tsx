import Header from '../../components/Header'
import Footer from '../../components/Footer'
import AboutContent from '../../components/AboutContent'
import Faq from '../../components/FAQ'
import CallToAction from '../../components/CallToAction'
import ProjectsGallery from '../../components/ProjectsGallery'
import UserFlow from '@/components/UserFlow'

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <AboutContent />
        <UserFlow />
        <ProjectsGallery />
      </main>
      <CallToAction />
      <Faq />
      <Footer />
    </div>
  )
}

