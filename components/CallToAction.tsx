import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function CallToAction() {
  return (
    <section
      className="relative py-16 overflow-hidden"
    >
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center transform scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=2076&q=80')`,
        }}
      />
      
      <div className="relative container mx-auto px-4 text-center bg-black bg-opacity-50 py-12">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Transform Your Space?
        </h2>
        {/* <p className="text-xl text-white mb-8">
          Let&apos;s bring your dream kitchen or bathroom to life!
        </p> */}
        <p className="text-xl text-white mb-8">Schedual a time to come into our showroom to see our products and get a free consultation</p>
        <Button 
          asChild 
          size="lg" 
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Link href="/contact">Get a Free Consultation</Link>
        </Button>
      </div>
    </section>
  )
}

