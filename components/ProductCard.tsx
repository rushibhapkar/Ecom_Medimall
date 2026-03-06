'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/context/AppContext';
import { useApp } from '@/context/AppContext';
import { ShoppingCart, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart, cart } = useApp();
  const [isAdding, setIsAdding] = useState(false);
  const isInCart = cart.some((item) => item.id === product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAdding(true);
    addToCart(product);
    setTimeout(() => setIsAdding(false), 1000);
  };

  return (
    <Link href={`/products/${product.id}`}>
      <div className="group relative h-full overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:shadow-xl">
        {product.discount > 0 && (
          <div className="absolute right-2 top-2 z-10 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white shadow-md">
            {product.discount}% OFF
          </div>
        )}

        <div className="relative h-48 w-full overflow-hidden bg-gray-50">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="p-4">
          <h3 className="mb-2 line-clamp-2 text-sm font-semibold text-gray-800 group-hover:text-[#174dB2]">
            {product.name}
          </h3>

          <p className="mb-3 text-xs text-gray-500">{product.manufacturer}</p>

          <div className="mb-4 flex items-center gap-2">
            <span className="text-lg font-bold text-[#174dB2]">
              ₹{product.discountedPrice}
            </span>
            {product.originalPrice > product.discountedPrice && (
              <span className="text-sm text-gray-400 line-through">
                ₹{product.originalPrice}
              </span>
            )}
          </div>

          <Button
            onClick={handleAddToCart}
            disabled={isAdding || isInCart}
            className={`w-full ${
              isInCart
                ? 'bg-green-500 hover:bg-green-600'
                : 'bg-gradient-to-r from-[#174dB2] to-teal-500 hover:from-[#174dB2] hover:to-teal-600'
            }`}
          >
            {isAdding ? (
              <span className="flex items-center gap-2">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                Adding...
              </span>
            ) : isInCart ? (
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                Added to Cart
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <ShoppingCart className="h-4 w-4" />
                Add to Cart
              </span>
            )}
          </Button>
        </div>
      </div>
    </Link>
  );
}
