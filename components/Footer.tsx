import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Ultimate Kitchen & Bath</h3>
            <p className="text-gray-400">Transforming homes, one room at a time.</p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
            <p className="text-gray-400">123 Remodel Street, Design City, ST 12345</p>
            <p className="text-gray-400">Phone: (555) 123-4567</p>
            <p className="text-gray-400">Email: info@ultimatekb.com</p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <a href="#" className="text-white hover:text-gray-400">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; 2023 Ultimate Kitchen & Bath. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

