import { 
  CookingPotIcon, 
  BathIcon, 
  PaintBucketIcon, 
  RulerIcon, 
  HammerIcon, 
  PaletteIcon 
} from 'lucide-react';

const services = [
  {
    icon: <CookingPotIcon className="w-12 h-12 text-blue-500" />,
    title: 'Kitchen Remodeling',
    description: 'Transform your kitchen into a modern, functional space with custom cabinetry, high-end appliances, and beautiful countertops.'
  },
  {
    icon: <BathIcon className="w-12 h-12 text-green-500" />,
    title: 'Bathroom Renovation',
    description: 'Create a luxurious and relaxing bathroom oasis with elegant fixtures, custom tile work, and spa-like amenities.'
  },
  {
    icon: <PaintBucketIcon className="w-12 h-12 text-yellow-500" />,
    title: 'Custom Cabinetry',
    description: 'Tailor-made cabinets to maximize your storage and style, crafted with precision and high-quality materials.'
  },
  {
    icon: <RulerIcon className="w-12 h-12 text-red-500" />,
    title: 'Flooring and Tile',
    description: 'Choose from a wide range of flooring options and tiles for your kitchen and bathroom to create a beautiful and functional space in your home.'
  },
  {
    icon: <HammerIcon className="w-12 h-12 text-purple-500" />,
    title: 'General Contracting',
    description: 'From start to finish, we manage all aspects of your remodeling project, ensuring quality and timely completion.'
  },
  {
    icon: <PaletteIcon className="w-12 h-12 text-pink-500" />,
    title: 'Interior Design',
    description: 'Our expert designers will help you create a cohesive look that reflects your personal style and enhances your home\'s aesthetic.'
  }
];

export default function ServicesContent() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

