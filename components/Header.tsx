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
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-2 lg:py-3">
        {/* Top Row: Logo, Location, and Actions */}
        <div className="flex items-center justify-between gap-2 md:gap-4">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#174dB2] to-teal-500">
              <Heart className="h-5 w-5 md:h-6 md:w-6 text-white" fill="white" />
            </div>
            <h1 className="hidden xs:block text-lg md:text-xl font-bold text-[#174dB2] tracking-tight">
              MEDIMALL
            </h1>
          </Link>

          {/* Location - Hidden on very small screens or made compact */}
          <div className="hidden sm:flex items-center gap-1 border-l pl-4 ml-2 border-gray-200">
            <MapPin className="h-4 w-4 text-[#174dB2]" />
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger className="w-[120px] lg:w-[150px] border-none shadow-none focus:ring-0 h-8 text-sm px-2">
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

          {/* Search Bar - Desktop Only */}
          <div className="hidden lg:block flex-1 max-w-xl mx-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search medicines..."
                className="w-full rounded-full border border-gray-200 py-2 pl-10 pr-4 text-sm focus:border-[#174dB2] focus:outline-none focus:ring-1 focus:ring-[#174dB2]"
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-1.5 md:gap-3">
            <a
              href="tel:+9096938883"
              className="flex items-center justify-center h-9 w-9 md:w-auto md:px-4 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors"
              title="Emergency"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden md:inline ml-2 text-xs font-bold uppercase">Emergency</span>
            </a>

            <a
              href="https://wa.me/9096938883"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
            </a>

            <Link href="/cart" className="relative">
              <Button
                variant="outline"
                size="icon"
                className="h-9 w-9 rounded-full border-2 border-[#174dB2] text-[#174dB2] hover:bg-[#174dB2] hover:text-white"
              >
                <ShoppingCart className="h-4 w-4 md:h-5 w-5" />
                {cartItemsCount > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-4 w-4 md:h-5 md:w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white border-2 border-white">
                    {cartItemsCount}
                  </span>
                )}
              </Button>
            </Link>
          </div>
        </div>

        {/* Bottom Row: Search Bar (Mobile & Tablet Only) */}
        <div className="mt-2 lg:hidden">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search medicines, lab tests..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-4 text-sm focus:bg-white focus:border-[#174dB2] focus:outline-none"
            />
          </div>
        </div>
      </div>
    </header>
  );
}