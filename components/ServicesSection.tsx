import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
interface Service {
  image: string;
  title: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    image: 'https://lh3.googleusercontent.com/pw/AP1GczPfMijE0zggGn7wGvMgNOpOuudT_e6M-sn7WZqjpn8LlkymZaKSCgQlOEk73x0JKHmjadYrVupXJZ5ly3ImYl0l_bBqk1yCXOD86KbqZFbmVgUzzFcIemiOwdNeCh_ItBuLhr76NGBDhWPDEF3xLyLu=w2014-h1510-s-no-gm?authuser=0',
    title: 'Kitchen Remodeling',
    description: 'Transform your kitchen into a modern, functional space with custom cabinetry, premium countertops, and state-of-the-art appliances.',
    features: ['Custom Cabinet Design', 'Premium Countertops', 'Modern Appliance Integration', 'Expert Installation']
  },
  {
    image: 'https://lh3.googleusercontent.com/pw/AP1GczMCD_yekUO1Fj7dzM7kxH8ENdLpPGJZm8YWKDsp9KgeLrCFJkbrarR8qJDTP1rib24LWvtxeUCP8xEpDYj1NzK5ZvWT6_B86282tqEQlu0ZnRMIvZRQUKyklNBmWNBuFokf9dllb5bL5fWl6JLjg3Fq=w2014-h1510-s-no-gm?authuser=0',
    title: 'Bathroom Renovation',
    description: 'Create a luxurious and relaxing bathroom oasis with premium fixtures, custom tilework, and elegant design elements.',
    features: ['Luxury Fixtures', 'Custom Tile Design', 'Modern Vanities', 'Spa-like Amenities']
  },
  {
    image: 'https://lh3.googleusercontent.com/pw/AP1GczO_5Ai5FbytfFKmfc72toLG4U70Rhnv1RUunnoUKHO18a5Ar0GyLDBSsyW-q583Qg8NjQqOPfSXEpIVdp3fA-7-Y9GGMOnBhuMjje3WvzBAozV8PBAr0fMkFm_5f01ORqF95TwJPzbODllLowz2JKif=w1510-h1510-s-no-gm?authuser=0',
    title: 'Custom Cabinetry',
    description: 'Tailor-made cabinets crafted with precision to maximize your storage and enhance your space\'s aesthetic appeal.',
    features: ['Premium Materials', 'Custom Finishes', 'Innovative Storage', 'Expert Craftsmanship']
  },
  {
    image: 'https://lh3.googleusercontent.com/pw/AP1GczOuElnpkFSfeIAWzE5wxc5VlI_nrOCqOk7jouYtyN3fg-B_MNtdIHFSfxbvA2wsg-uoApjL4UfRIpAtZrLRxFUvGFKtzEq1FerBDY_zQ1A42ticwky6rDMl0IlVdn31iHKmhfgPC_fvpb1ewVyEgSac=w1320-h849-s-no-gm?authuser=0',
    title: 'Flooring and Tile',
    description: 'Choose from a wide range of flooring options and tiles for your kitchen and bathroom.',
    features: ['Luxury Vinyl Plank', 'Ceramic & Porcelain Tile', 'Natural Stone', 'Professional Installation']
  },
  {
    image: 'https://lh3.googleusercontent.com/pw/AP1GczM1n_yyeN9R02JPlwjtYBHddPHv6URYPFxSepJu95lMFMxY7b_AT0i8NGL26ZQ2c_mSlJGaKfQwNyIFfnA2KaM8QWYOHh5IYyT2BCCJKNl-xrTqSJLLGhe4-pR9yRCLxnhP_rq3obF5S5yl9tR5QEy9=w960-h672-s-no-gm?authuser=0',
    title: 'Space Planning',
    description: 'Optimize your layout for better functionality and flow.',
    features: ['3D Design Visualization', 'Traffic Flow Analysis', 'Storage Solutions', 'Ergonomic Planning']
  },
  // {
  //   image: 'https://images.unsplash.com/photo-1581876424484-0d87430585e0?w=800&auto=format&fit=crop',
  //   title: 'Lighting Design',
  //   description: 'Enhance your space with modern lighting solutions.',
  //   features: ['LED Integration', 'Ambient Lighting', 'Task Lighting', 'Energy Efficiency']
  // }
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
                <div className="relative h-[400px] overflow-hidden group">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 duration-300" />
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
                    {/* {service.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex} 
                        className="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                      >
                        <ArrowRight className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))} */}
                  </ul>
                )}

                <Link href="/contact" className="group relative inline-flex items-center px-8 py-4 bg-orange-500 text-white rounded-xl overflow-hidden transition-all duration-300 hover:bg-orange-600">
                  <span className="relative z-10">Learn More</span>
                  <ArrowRight className="ml-2 w-5 h-5 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


