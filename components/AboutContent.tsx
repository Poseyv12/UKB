import Image from 'next/image'

export default function AboutContent() {
  return (
    <>
     
      {/* Content Section */}
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-stretch">
            <div>
              <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">About Ultimate Kitchen & Bath</h1>
              <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                At Ultimate Kitchen and Bath, we are Boca Raton&apos;s premier kitchen and bathroom remodeling specialists. Our expertise spans custom kitchen design, luxury bathroom renovations, and complete home remodeling projects throughout South Florida. Whether you&apos;re looking for modern kitchen remodeling in Boca Raton or contemporary bathroom renovations, our team delivers exceptional results that transform your space.
              </p>
              <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                With over 35 years of experience as trusted kitchen and bath contractors in Boca Raton, our expert designers and craftsmen specialize in high-end bathroom remodeling, custom cabinetry, countertop installation, and comprehensive kitchen renovations. From cabinet refacing to complete kitchen and bath upgrades, we offer both affordable bathroom remodel options and luxury kitchen remodel solutions tailored to Boca Raton homeowners.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                As licensed residential contractors in Boca Raton, we provide full-service solutions including plumbing renovation, shower and tub upgrades, and tile and flooring installation. Our energy-efficient kitchen upgrades and open concept kitchen remodel designs have made us one of the best kitchen remodelers in Boca Raton, known for creating beautiful, functional spaces that exceed expectations.
              </p>
            </div>
            <div className="relative h-full">
              <Image
                src="/ukb_kitchen.png"
                alt="Luxury Kitchen Remodeling in Boca Raton"
                layout="fill"
                objectFit="cover"
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

