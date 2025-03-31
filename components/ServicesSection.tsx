import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface Service {
  image: string;
  title: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    image: 'https://plus.unsplash.com/premium_photo-1671269942050-df7e96b3e4ac?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2l0Y2hlbiUyMG1vZGVybnxlbnwwfHwwfHx8MA%3D%3D',
    title: 'Kitchen Remodeling',
    description: 'Transform your kitchen into a modern, functional space with custom cabinetry, premium countertops, and state-of-the-art appliances.',
    features: ['Custom Cabinet Design', 'Premium Countertops', 'Modern Appliance Integration', 'Expert Installation']
  },
  {
    image: 'https://images.unsplash.com/photo-1576698483491-8c43f0862543?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmF0aCUyMG1vZGVybnxlbnwwfHwwfHx8MA%3D%3D',
    title: 'Bathroom Renovation',
    description: 'Create a luxurious and relaxing bathroom oasis with premium fixtures, custom tilework, and elegant design elements.',
    features: ['Luxury Fixtures', 'Custom Tile Design', 'Modern Vanities', 'Spa-like Amenities']
  },
  {
    image: 'https://images.unsplash.com/photo-1628745277866-0c4468030a81?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Custom Cabinetry',
    description: 'Tailor-made cabinets crafted with precision to maximize your storage and enhance your space\'s aesthetic appeal.',
    features: ['Premium Materials', 'Custom Finishes', 'Innovative Storage', 'Expert Craftsmanship']
  },
  {
    image: 'https://www.harperfloors.com/cdn/shop/articles/Luxury_Vinyl_Plank_Flooring_3000x.jpg?v=1673601438',
    title: 'Flooring and Tile',
    description: 'Choose from a wide range of flooring options and tiles for your kitchen and bathroom.',
    features: ['Luxury Vinyl Plank', 'Ceramic & Porcelain Tile', 'Natural Stone', 'Professional Installation']
  },
  {
    image: 'https://images.unsplash.com/photo-1542621334-a254cf47733d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFyY2hpdGVjdHVyZSUyMHBsYW5zfGVufDB8fDB8fHww',
    title: 'Space Planning',
    description: 'Optimize your layout for better functionality and flow.',
    features: ['3D Design Visualization', 'Traffic Flow Analysis', 'Storage Solutions', 'Ergonomic Planning']
  },
  {
    image: 'https://images.unsplash.com/photo-1581876424484-0d87430585e0?w=800&auto=format&fit=crop',
    title: 'Lighting Design',
    description: 'Enhance your space with modern lighting solutions.',
    features: ['LED Integration', 'Ambient Lighting', 'Task Lighting', 'Energy Efficiency']
  }
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-4 block">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Premium Services for Your Home
          </h2>
          <p className="text-lg text-gray-600/90 leading-relaxed">
            Experience exceptional craftsmanship and attention to detail in every project.
            We specialize in creating stunning, functional spaces that exceed expectations.
          </p>
        </div>

        <div className="space-y-32">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-16 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative h-[500px] rounded-3xl overflow-hidden group">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 space-y-8">
                <div className="space-y-4">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-lg text-gray-600/90 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                {service.features && service.features.length > 0 && (
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex} 
                        className="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                      >
                        <ArrowRight className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <button className="group relative inline-flex items-center px-8 py-4 bg-orange-500 text-white rounded-xl overflow-hidden transition-all duration-300 hover:bg-orange-600">
                  <span className="relative z-10">Learn More</span>
                  <ArrowRight className="ml-2 w-5 h-5 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


