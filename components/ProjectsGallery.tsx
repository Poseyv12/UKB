import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: 'Modern Kitchens',
    description: 'Contemporary design',
    image: 'https://lh3.googleusercontent.com/pw/AP1GczONfUOoAPgxwordszf6l6QH_wJnmKHb3whmO96Bdmft60H0SYIWEtdY54kP4xIK5jpL-O0zhM5huRaxNd-Rqj0YZsRsLBDBxLKNblD4JHWoTFCYNJbM-WUyK5V8AS20lPO8DCNxTxcH5KYarS3SOvot=w2014-h1510-s-no-gm?authuser=0',
    category: 'Kitchen',
    link: '/gallery/Kitchen',
  },
  {
    title: 'Luxurious Primary Bathrooms',
    description: 'High-end finishes with marble countertops',
    image: '/images/bath-1.jpg',
    category: 'Bathroom',
    link: '/gallery/Master-Bath',
  },
  {
    title: 'Trasitional Kitchens',
    description: 'Elegant blend of modern classic',
    image: '/images/trans-kitchen.PNG',
    category: 'Kitchen',
    link: '/gallery/Kitchen',
  },
  {
    title: 'Secondary Bathrooms',
    description: 'Timeless elegance with modern fixtures',
    image: '/images/sec-bath.jpeg',
    category: 'Bathroom', 
    link: '/gallery/Bath',
  },
]

export default function ProjectsGallery() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4 text-gray-900">
            Our Recent Projects
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Browse through our latest renovations!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.link}
              className="group relative bg-white overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-[300px] sm:h-[400px] w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-sm font-medium text-orange-400 mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-base text-gray-200">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/gallery">
            <Button
              variant="default"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

