import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#174dB2] to-teal-500">
                <Heart className="h-5 w-5 text-white" fill="white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">MEDIMALL</h3>
                {/* <p className="text-xs text-gray-300">Dr. Jeswani&apos;s Divine Care</p> */}
              </div>
            </div>
            <p className="mb-4 text-sm text-gray-300">
              Your trusted partner for quality healthcare products and services. We bring care to your doorstep.
            </p>
            <div className="flex gap-3">
              <a href="#" className="rounded-full bg-[#174dB2] p-2 transition-colors hover:bg-teal-500">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="rounded-full bg-[#174dB2] p-2 transition-colors hover:bg-teal-500">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="rounded-full bg-[#174dB2] p-2 transition-colors hover:bg-teal-500">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="rounded-full bg-[#174dB2] p-2 transition-colors hover:bg-teal-500">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 transition-colors hover:text-teal-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 transition-colors hover:text-teal-400">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-300 transition-colors hover:text-teal-400">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-gray-300 transition-colors hover:text-teal-400">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#medicines" className="text-gray-300 transition-colors hover:text-teal-400">
                  Medicines
                </a>
              </li>
              <li>
                <a href="#lab-tests" className="text-gray-300 transition-colors hover:text-teal-400">
                  Lab Tests
                </a>
              </li>
              <li>
                <a href="#equipment" className="text-gray-300 transition-colors hover:text-teal-400">
                  Medical Equipment
                </a>
              </li>
              <li>
                <a href="#home-services" className="text-gray-300 transition-colors hover:text-teal-400">
                  Home Services
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="mt-1 h-4 w-4 text-teal-400" />
                <div>
                  <p className="text-gray-300">+91 9096938883</p>
                  <p className="text-xs text-gray-400">Mon-Sat 9AM-9PM</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-1 h-4 w-4 text-teal-400" />
                <p className="text-gray-300">support@medimall.com</p>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-1 h-4 w-4 text-teal-400" />
                <p className="text-gray-300">
                  123 Healthcare Street<br />Pune, Maharashtra 400001
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} MEDIMALL - Dr. Jeswani&apos;s Divine Care. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
