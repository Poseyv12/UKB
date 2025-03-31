import Header from '../../components/Header'
import Footer from '../../components/Footer'
import AboutContent from '../../components/AboutContent'
import Faq from '../../components/FAQ'
import CallToAction from '../../components/CallToAction'
import ProjectsGallery from '../../components/ProjectsGallery'

import { Metadata } from 'next'
import MeetTheTeam from '../components/MeetTheTeam'

export const metadata: Metadata = {
  title: 'About Us - Ultimate Kitchen & Bath',
  description: 'Learn more about Ultimate Kitchen & Bath, your trusted partner for kitchen and bath remodeling in Boca Raton, FL.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <AboutContent />
        <MeetTheTeam />
        <ProjectsGallery />
        <CallToAction />
        <Faq />
      </main>
      <Footer />
    </div>
  )
}

