import { Check } from 'lucide-react'

const reasons = [
  "20+ Years of Experience in Kitchen & Bath Remodeling",
  "Fully Licensed and Insured Professional Team",
  "Custom Designs Tailored to Your Unique Style and Needs",
  "High-Quality Materials and Craftsmanship",
  "Transparent Pricing and No Hidden Fees",
  "Timely Project Completion and Clean Job Sites",
]

const awards = [
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc6XznBM3yUaBO03Wq1f6GwuPd3tz0XZPmFg&s",
    alt: "Award 1",
    link: "#",
  },
  {
    src: "https://www.grsmgt.com/wp-content/themes/grsmgt/images/gcba.png",
    alt: "Award 2",
    link: "#",
  },
  {
    src: "https://syzygyglobal.com/wp-content/uploads/2022/11/PRISM_2022_Silver_Winner.jpeg",
    alt: "Award 3",
    link: "#",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-extrabold text-center mb-8 text-gray-800">
          Why Choose Ultimate Kitchen & Bath
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          At Ultimate Kitchen & Bath, we're committed to turning your dream spaces into reality. Our expertise, attention to detail, and customer-first approach set us apart in the world of home renovations.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex items-start bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex-shrink-0">
                <Check className="w-6 h-6 text-green-500 mr-4" />
              </div>
              <p className="text-lg text-gray-700">{reason}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-xl font-semibold text-gray-800 max-w-2xl mx-auto">
            Experience the Ultimate Kitchen & Bath difference. Let us bring your vision to life with precision, creativity, and unmatched quality.
          </p>
        </div>
        {/* Awards Section */}
        <div className="mt-16">
          <div className="flex justify-center items-center gap-8">
            {awards.map((award, index) => (
              <a key={index} href={award.link} target="_blank" rel="noopener noreferrer" className="block">
                <img
                  src={award.src}
                  alt={award.alt}
                  className="h-32 object-contain hover:scale-105 transition-transform duration-300"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

