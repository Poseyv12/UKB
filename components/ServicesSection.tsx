import Image from 'next/image';

const services = [
  {
    image: 'https://plus.unsplash.com/premium_photo-1671269942050-df7e96b3e4ac?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2l0Y2hlbiUyMG1vZGVybnxlbnwwfHwwfHx8MA%3D%3D',
    title: 'Kitchen Remodeling',
    description: 'Transform your kitchen into a modern, functional space.',
  },
  {
    image: 'https://images.unsplash.com/photo-1576698483491-8c43f0862543?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmF0aCUyMG1vZGVybnxlbnwwfHwwfHx8MA%3D%3D',
    title: 'Bathroom Renovation',
    description: 'Create a luxurious and relaxing bathroom oasis.',
  },
  {
    image: 'https://images.unsplash.com/photo-1628745277866-0c4468030a81?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Custom Cabinetry',
    description: 'Tailor-made cabinets to maximize your storage and style.',
  },
  {
    image: 'https://images.unsplash.com/photo-1542621334-a254cf47733d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFyY2hpdGVjdHVyZSUyMHBsYW5zfGVufDB8fDB8fHww',
    title: 'Space Planning',
    description: 'Optimize your layout for better functionality and flow.',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-white-100 to-white-100">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-800">Our Services</h2>
        <p className="text-lg text-center mb-12 text-gray-600">
          Explore our range of services designed to bring your dream home to life.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-sm shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


