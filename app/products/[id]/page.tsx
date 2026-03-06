'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { products } from '@/data/dummyData';
import { useApp } from '@/context/AppContext';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Check, ArrowLeft, Package, Shield, Truck } from 'lucide-react';
import ProductCard from '@/components/ProductCard';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart, cart } = useApp();
  const [isAdding, setIsAdding] = useState(false);

  const product = products.find((p) => p.id === params.id);
  const isInCart = cart.some((item) => item.id === product?.id);

  const relatedProducts = product
    ? products.filter(
        (p) => p.category === product.category && p.id !== product.id
      ).slice(0, 4)
    : [];

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="mb-4 text-2xl font-bold text-gray-800">Product Not Found</h1>
        <Button onClick={() => router.push('/products')}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product);
    setTimeout(() => setIsAdding(false), 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <Button
          variant="ghost"
          onClick={() => router.back()}
          className="mb-6 text-[#174dB2]"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl bg-white p-8">
            {product.discount > 0 && (
              <div className="absolute right-4 top-4 z-10 rounded-full bg-red-500 px-4 py-2 text-sm font-bold text-white shadow-lg">
                {product.discount}% OFF
              </div>
            )}
            <div className="relative h-96 w-full">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          <div className="rounded-2xl bg-white p-8">
            <div className="mb-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-[#174dB2]">
              {product.category === 'medicines' && 'Medicine'}
              {product.category === 'lab-tests' && 'Lab Test'}
              {product.category === 'equipment' && 'Medical Equipment'}
            </div>

            <h1 className="mb-4 text-3xl font-bold text-gray-800">{product.name}</h1>

            <p className="mb-6 text-gray-600">{product.description}</p>

            <div className="mb-6">
              <p className="mb-2 text-sm text-gray-500">Manufacturer</p>
              <p className="font-medium text-gray-800">{product.manufacturer}</p>
            </div>

            <div className="mb-6 flex items-baseline gap-3">
              <span className="text-4xl font-bold text-[#174dB2]">
                ₹{product.discountedPrice}
              </span>
              {product.originalPrice > product.discountedPrice && (
                <>
                  <span className="text-xl text-gray-400 line-through">
                    ₹{product.originalPrice}
                  </span>
                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                    Save ₹{product.originalPrice - product.discountedPrice}
                  </span>
                </>
              )}
            </div>

            <div className="mb-6">
              {product.inStock ? (
                <div className="flex items-center gap-2 text-green-600">
                  <Check className="h-5 w-5" />
                  <span className="font-medium">In Stock</span>
                </div>
              ) : (
                <div className="text-red-600">
                  <span className="font-medium">Out of Stock</span>
                </div>
              )}
            </div>

            <div className="mb-8 flex gap-4">
              <Button
                onClick={handleAddToCart}
                disabled={isAdding || isInCart || !product.inStock}
                className={`flex-1 py-6 text-lg ${
                  isInCart
                    ? 'bg-green-500 hover:bg-green-600'
                    : 'bg-gradient-to-r from-[#174dB2] to-teal-500 hover:from-[#174dB2] hover:to-teal-600'
                }`}
              >
                {isAdding ? (
                  <span className="flex items-center gap-2">
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                    Adding...
                  </span>
                ) : isInCart ? (
                  <span className="flex items-center gap-2">
                    <Check className="h-5 w-5" />
                    Added to Cart
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <ShoppingCart className="h-5 w-5" />
                    Add to Cart
                  </span>
                )}
              </Button>
            </div>

            <div className="grid gap-4 border-t border-gray-200 pt-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
                  <Package className="h-6 w-6 text-[#174dB2]" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Fast Delivery</p>
                  <p className="text-sm text-gray-600">Delivery within 2-3 days</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
                  <Shield className="h-6 w-6 text-[#174dB2]" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">100% Authentic</p>
                  <p className="text-sm text-gray-600">Guaranteed genuine products</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
                  <Truck className="h-6 w-6 text-[#174dB2]" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Free Shipping</p>
                  <p className="text-sm text-gray-600">On orders above ₹500</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="mb-6 text-2xl font-bold text-[#174dB2]">Related Products</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
