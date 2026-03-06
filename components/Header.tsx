'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useApp } from '@/context/AppContext';
import { locations } from '@/data/dummyData';
import {
  Search,
  ShoppingCart,
  Phone,
  MapPin,
  ChevronDown,
  MessageCircle,
  Heart,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function Header() {
  const { cartItemsCount, selectedLocation, setSelectedLocation } = useApp();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#174dB2] to-teal-500">
                <Heart className="h-6 w-6 text-white" fill="white" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-[#174dB2]">MEDIMALL</h1>
                {/* <p className="text-xs text-gray-600">
                  Dr. Jeswani&apos;s Divine Care
                </p> */}
              </div>
            </Link>

            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-[#174dB2]" />
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger className="w-[180px] border-none shadow-none focus:ring-0">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for medicines, lab tests, equipment..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-full border border-gray-300 py-2 pl-10 pr-4 focus:border-[#174dB2] focus:outline-none focus:ring-2 focus:ring-[#174dB2] focus:ring-opacity-20"
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="tel:+9096938883"
                className="hidden md:flex items-center gap-2 rounded-full bg-red-500 px-4 py-2 text-white transition-all hover:bg-red-600"
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm font-medium">Emergency</span>
              </a>

              <a
                href="https://wa.me/9096938883"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white transition-all hover:bg-green-600"
              >
                <MessageCircle className="h-5 w-5" />
              </a>

              <Link href="/cart" className="relative">
                <Button
                  variant="outline"
                  size="icon"
                  className="relative h-10 w-10 rounded-full border-2 border-[#174dB2] hover:bg-[#174dB2] hover:text-white"
                >
                  <ShoppingCart className="h-5 w-5" />
                  {cartItemsCount > 0 && (
                    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                      {cartItemsCount}
                    </span>
                  )}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
