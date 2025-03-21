import { Facebook, Instagram, Twitter } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 md:w-1/3 mb-6 md:mb-0">
          <Link href="/" className="text-2xl font-bold text-gray-800">
          <Image 
            src="https://ultimate-kitchen-bath.vercel.app/images/logo.svg"
            alt="Ultimate Kitchen & Bath"
            width={200}
            height={80}
            priority
            className="[filter:invert(1)]"
          />
        </Link>
            <p className="text-gray-400">Transforming homes, one room at a time.</p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
            <p className="text-gray-400">1000 Clint Moore Rd #105, Boca Raton, FL 33487</p>
            <p className="text-gray-400">Phone: (561) 998-7711</p>
            <p className="text-gray-400">Email: ultimatekbinc@aol.com</p>
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
          <p>&copy; 2025 Ultimate Kitchen & Bath. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

