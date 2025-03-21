import Link from 'next/link'
import Image from 'next/image'
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          <Image 
            src="https://ultimate-kitchen-bath.vercel.app/images/logo.svg"
            alt="Ultimate Kitchen & Bath"
            width={200}
            height={80}
            priority
          />
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li className="flex items-center">
              <Link href="/" className="text-gray-600 hover:text-orange-500 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full">
                Home
              </Link>
            </li>
            <li className="flex items-center">
              <Link href="/about" className="text-gray-600 hover:text-orange-600 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-orange-600 after:transition-all after:duration-300 hover:after:w-full">
                About
              </Link>
            </li>
            <li className="flex items-center">
              <Link href="/gallery" className="text-gray-600 hover:text-orange-600 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-orange-600 after:transition-all after:duration-300 hover:after:w-full">
                Gallery
              </Link>
            </li>
            <li className="flex items-center">
              <Link href="/blog" className="text-gray-600 hover:text-orange-500 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full">
                Blog
              </Link>
            </li>
            <li className="flex items-center">
              <Link href="/contact" className="text-gray-600 hover:text-orange-500 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden bg-gray-100 hover:bg-gray-200 text-black font-bold transition-all duration-300">
              <Menu className="h-20 w-20" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-white">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col space-y-4 mt-6">
              <Link href="/" className="text-gray-600 hover:text-gray-800 relative w-fit after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-800 after:transition-all after:duration-300 hover:after:w-full">
                Home
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-800 relative w-fit after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-800 after:transition-all after:duration-300 hover:after:w-full">
                About
              </Link>
              <Link href="/gallery" className="text-gray-600 hover:text-gray-800 relative w-fit after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-800 after:transition-all after:duration-300 hover:after:w-full">
                Gallery
              </Link>
              <Link href="/blog" className="text-gray-600 hover:text-gray-800 relative w-fit after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-800 after:transition-all after:duration-300 hover:after:w-full">
                Blog
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-800 relative w-fit after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-800 after:transition-all after:duration-300 hover:after:w-full">
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

