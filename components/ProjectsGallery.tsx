import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: 'Modern Kitchen Renovation',
    image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  {
    title: 'Luxurious Bathroom Makeover',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
  },
  {
    title: 'Sleek Kitchen Design',
    image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  {
    title: 'Spa-like Bathroom Retreat',
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=2076&q=80',
  },
]

export default function ProjectsGallery() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-white">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-extrabold text-center mb-8 text-gray-800">Our Recent Projects</h2>
        <p className="text-lg text-center mb-12 text-gray-600">
          Browse through our latest transformations and get inspired for your own renovation.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-md shadow-lg group bg-gray-100 transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              <div className="relative h-48 md:h-64 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl font-bold text-center px-6">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button
            variant="outline"
            className="px-8 py-3 text-lg font-semibold border-gray-600 text-gray-800 hover:bg-gray-100 hover:border-gray-800"
          >
            <Link href="/gallery">See More Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

