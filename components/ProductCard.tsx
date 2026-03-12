// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';
// import { Product } from '@/context/AppContext';
// import { useApp } from '@/context/AppContext';
// import { ShoppingCart, Check } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { useState } from 'react';

// interface ProductCardProps {
//   product: Product;
// }

// export default function ProductCard({ product }: ProductCardProps) {
//   const { addToCart, cart } = useApp();
//   const [isAdding, setIsAdding] = useState(false);
//   const isInCart = cart.some((item) => item.id === product.id);

//   const handleAddToCart = (e: React.MouseEvent) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setIsAdding(true);
//     addToCart(product);
//     setTimeout(() => setIsAdding(false), 1000);
//   };

//   return (
//     <Link href={`/products/${product.id}`}>
//       <div className="group relative h-full overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:shadow-xl">
//         {product.discount > 0 && (
//           <div className="absolute right-2 top-2 z-10 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white shadow-md">
//             {product.discount}% OFF
//           </div>
//         )}

//         <div className="relative h-48 w-full overflow-hidden bg-gray-50">
//           <Image
//             src={product.image}
//             alt={product.name}
//             fill
//             className="object-cover transition-transform duration-300 group-hover:scale-110"
//             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//           />
//         </div>

//         <div className="p-4">
//           <h3 className="mb-2 line-clamp-2 text-sm font-semibold text-gray-800 group-hover:text-[#174dB2]">
//             {product.name}
//           </h3>

//           <p className="mb-3 text-xs text-gray-500">{product.manufacturer}</p>

//           <div className="mb-4 flex items-center gap-2">
//             <span className="text-lg font-bold text-[#174dB2]">
//               ₹{product.discountedPrice}
//             </span>
//             {product.originalPrice > product.discountedPrice && (
//               <span className="text-sm text-gray-400 line-through">
//                 ₹{product.originalPrice}
//               </span>
//             )}
//           </div>

//           <Button
//             onClick={handleAddToCart}
//             disabled={isAdding || isInCart}
//             className={`w-full ${
//               isInCart
//                 ? 'bg-green-500 hover:bg-green-600'
//                 : 'bg-gradient-to-r from-[#174dB2] to-teal-500 hover:from-[#174dB2] hover:to-teal-600'
//             }`}
//           >
//             {isAdding ? (
//               <span className="flex items-center gap-2">
//                 <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
//                 Adding...
//               </span>
//             ) : isInCart ? (
//               <span className="flex items-center gap-2">
//                 <Check className="h-4 w-4" />
//                 Added to Cart
//               </span>
//             ) : (
//               <span className="flex items-center gap-2">
//                 <ShoppingCart className="h-4 w-4" />
//                 Add to Cart
//               </span>
//             )}
//           </Button>
//         </div>
//       </div>
//     </Link>
//   );
// }


'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/context/AppContext';
import { useApp } from '@/context/AppContext';
import { ShoppingCart, Check, Star, Zap } from 'lucide-react';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart, cart } = useApp();
  const [isAdding, setIsAdding] = useState(false);
  const [ripple, setRipple] = useState(false);
  const isInCart = cart.some((item) => item.id === product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isInCart || isAdding) return;
    setIsAdding(true);
    setRipple(true);
    addToCart(product);
    setTimeout(() => setRipple(false), 600);
    setTimeout(() => setIsAdding(false), 1000);
  };

  const savings = product.originalPrice - product.discountedPrice;

  return (
    <Link href={`/products/${product.id}`} className="block h-full">
      <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_2px_16px_rgba(0,0,0,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(23,77,178,0.15)]">

        {/* Discount badge */}
{product.discount > 0 && (
  <div className="absolute left-3 top-3 z-30 flex items-center gap-1 rounded-full bg-gradient-to-r from-red-500 to-orange-400 px-2.5 py-1 shadow-lg">
    <Zap className="h-3 w-3 fill-white text-white" />
    <span className="text-[11px] font-extrabold tracking-wide text-white">
      {product.discount}% OFF
    </span>
  </div>
)}

        {/* Image container */}
        <div className="relative h-52 w-full overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
          {/* Subtle radial glow behind image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-36 w-36 rounded-full bg-blue-100/60 blur-2xl" />
          </div>
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="relative z-10 object-contain p-4 transition-transform duration-500 group-hover:scale-[1.07]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Bottom gradient fade */}
          <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-4">
          {/* Manufacturer pill */}
          <span className="mb-2 inline-block w-fit rounded-full bg-blue-50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-[#174dB2]">
            {product.manufacturer}
          </span>

          {/* Product name */}
          <h3 className="mb-3 line-clamp-2 flex-1 text-[13.5px] font-bold leading-snug text-gray-800 transition-colors group-hover:text-[#174dB2]">
            {product.name}
          </h3>

          {/* Price row */}
          <div className="mb-1 flex items-end gap-2">
            <span className="text-xl font-extrabold tracking-tight text-[#174dB2]">
              ₹{product.discountedPrice.toLocaleString()}
            </span>
            {product.originalPrice > product.discountedPrice && (
              <span className="mb-0.5 text-xs text-gray-400 line-through">
                ₹{product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          {/* Savings chip */}
          {savings > 0 && (
            <p className="mb-4 text-[11px] font-semibold text-emerald-600">
              You save ₹{savings.toLocaleString()}
            </p>
          )}

          {/* CTA Button */}
          <button
            onClick={handleAddToCart}
            disabled={isAdding || isInCart}
            className={`
              relative w-full overflow-hidden rounded-xl py-2.5 text-sm font-bold text-white
              transition-all duration-300 active:scale-[0.97]
              ${isInCart
                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 shadow-[0_4px_14px_rgba(16,185,129,0.4)]'
                : 'bg-gradient-to-r from-[#174dB2] to-[#2563eb] shadow-[0_4px_14px_rgba(23,77,178,0.35)] hover:shadow-[0_6px_20px_rgba(23,77,178,0.5)]'
              }
            `}
          >
            {/* Ripple effect */}
            {ripple && (
              <span className="absolute inset-0 animate-ping rounded-xl bg-white/20" />
            )}

            <span className="relative flex items-center justify-center gap-2">
              {isAdding ? (
                <>
                  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  Adding...
                </>
              ) : isInCart ? (
                <>
                  <Check className="h-4 w-4 stroke-[3]" />
                  Added to Cart
                </>
              ) : (
                <>
                  <ShoppingCart className="h-4 w-4" />
                  Add to Cart
                </>
              )}
            </span>
          </button>
        </div>

        {/* Hover shine line at bottom */}
        <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#174dB2] to-teal-400 transition-all duration-500 group-hover:w-full" />
      </div>
    </Link>
  );
}
