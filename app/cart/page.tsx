'use client';

import { useApp } from '@/context/AppContext';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';





export default function CartPage() {


  const handlePlaceOrder = () => {
    let message = "Hello, I would like to place the following order:\n\n";

    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name}\n`;
      message += `Quantity: ${item.quantity}\n`;
      message += `Price: ₹${item.discountedPrice}\n\n`;
    });

    message += `Subtotal: ₹${cartTotal}\n`;
    message += `Delivery Charge: ₹${deliveryCharge}\n`;
    message += `Total Amount: ₹${finalTotal}\n\n`;
    message += "Please confirm my order.";

    const encodedMessage = encodeURIComponent(message);

    const whatsappURL = `https://wa.me/919096938883?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");

    clearCart();
  };
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useApp();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-md text-center">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-gray-100 p-8">
              <ShoppingBag className="h-16 w-16 text-gray-400" />
            </div>
          </div>
          <h1 className="mb-4 text-2xl font-bold text-gray-800">Your Cart is Empty</h1>
          <p className="mb-8 text-gray-600">
            Looks like you haven&apos;t added any items to your cart yet.
          </p>
          <Link href="/products">
            <Button className="bg-gradient-to-r from-[#174dB2] to-teal-500 hover:from-[#174dB2] hover:to-teal-600">
              Start Shopping
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const deliveryCharge = cartTotal >= 500 ? 0 : 50;
  const finalTotal = cartTotal + deliveryCharge;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#174dB2]">Shopping Cart</h1>
            <p className="text-gray-600">{cart.length} items in your cart</p>
          </div>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-50">
                Clear Cart
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Clear Cart?</AlertDialogTitle>
                <AlertDialogDescription>
                  Are you sure you want to remove all items from your cart? This action cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={clearCart} className="bg-red-500 hover:bg-red-600">
                  Clear Cart
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 rounded-xl bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
                >
                  <Link href={`/products/${item.id}`} className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </Link>

                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <Link href={`/products/${item.id}`}>
                        <h3 className="font-semibold text-gray-800 hover:text-[#174dB2]">
                          {item.name}
                        </h3>
                      </Link>
                      <p className="text-xs text-gray-500">{item.manufacturer}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-full"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-full"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>

                      <div className="text-right">
                        <p className="text-lg font-bold text-[#174dB2]">
                          ₹{item.discountedPrice * item.quantity}
                        </p>
                        {item.originalPrice > item.discountedPrice && (
                          <p className="text-xs text-gray-400 line-through">
                            ₹{item.originalPrice * item.quantity}
                          </p>
                        )}
                      </div>

                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="ml-2 text-red-500 hover:bg-red-50 hover:text-red-600"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Remove Item?</AlertDialogTitle>
                            <AlertDialogDescription>
                              Are you sure you want to remove {item.name} from your cart?
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => removeFromCart(item.id)}
                              className="bg-red-500 hover:bg-red-600"
                            >
                              Remove
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-xl bg-white p-6 shadow-md">
              <h2 className="mb-6 text-xl font-bold text-gray-800">Order Summary</h2>

              <div className="space-y-3 border-b border-gray-200 pb-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-medium">₹{cartTotal}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Delivery Charge</span>
                  <span className="font-medium">
                    {deliveryCharge === 0 ? (
                      <span className="text-green-600">FREE</span>
                    ) : (
                      `₹${deliveryCharge}`
                    )}
                  </span>
                </div>
                {deliveryCharge > 0 && (
                  <p className="text-xs text-gray-500">
                    Add ₹{500 - cartTotal} more for free delivery
                  </p>
                )}
              </div>

              <div className="mb-6 mt-4 flex justify-between text-lg font-bold">
                <span>Total</span>
                <span className="text-[#174dB2]">₹{finalTotal}</span>
              </div>

              <AlertDialog>
  <AlertDialogTrigger asChild>
    <Button className="w-full bg-gradient-to-r from-[#174dB2] to-teal-500 py-6 text-lg hover:from-[#174dB2] hover:to-teal-600">
      Place Order
      <ArrowRight className="ml-2 h-5 w-5" />
    </Button>
  </AlertDialogTrigger>

  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Confirm Order</AlertDialogTitle>
      <AlertDialogDescription>
        Your order details will be sent to WhatsApp for confirmation.
      </AlertDialogDescription>
    </AlertDialogHeader>

    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>

      <AlertDialogAction
        onClick={handlePlaceOrder}
        className="bg-[#174dB2] hover:bg-[#123a85]"
      >
        Confirm Order
      </AlertDialogAction>

    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

              <div className="mt-6 space-y-2 text-xs text-gray-500">
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>100% Authentic Products</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Secure Payment</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Easy Returns</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <Link href="/products">
            <Button className="w-full bg-gradient-to-r from-[#174dB2] to-teal-500 py-6 text-lg hover:from-[#174dB2] hover:to-teal-600">
              Proceed to Checkout
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
