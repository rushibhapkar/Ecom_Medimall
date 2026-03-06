'use client';

import SectionNav from '@/components/SectionNav';
import ProductCard from '@/components/ProductCard';
import ServiceCard from '@/components/ServiceCard';
import { products, services } from '@/data/dummyData';
import Link from 'next/link';
import { ArrowRight, Shield, Truck, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Home() {
  const medicineProducts = products.filter((p) => p.category === 'medicines');
  const labTestProducts = products.filter((p) => p.category === 'lab-tests');
  const equipmentProducts = products.filter((p) => p.category === 'equipment');
  const homeServices = services.filter((s) => s.category === 'home-services');
  const vaccinations = services.filter((s) => s.category === 'vaccinations');
  const membership = services.filter((s) => s.category === 'membership');

  return (
    <>
      <SectionNav />

      <div className="bg-gradient-to-br from-blue-50 to-teal-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold text-[#174dB2] md:text-5xl lg:text-6xl">
              Welcome to MEDIMALL
            </h1>
            {/* <p className="mb-8 text-xl text-gray-700 md:text-2xl">
              Dr. Jeswani&apos;s Divine Care
            </p> */}
            <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
              Your trusted healthcare partner delivering quality medicines, diagnostic services, and medical equipment right to your doorstep.
            </p>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Shield, title: 'Authentic Products', desc: '100% Genuine' },
                { icon: Truck, title: 'Free Delivery', desc: 'On orders above ₹500' },
                { icon: Clock, title: '24/7 Support', desc: 'Always here for you' },
                { icon: Award, title: 'Best Prices', desc: 'Guaranteed lowest' },
              ].map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={idx}
                    className="rounded-xl bg-white p-6 shadow-md transition-all hover:shadow-xl"
                  >
                    <div className="mb-4 flex justify-center">
                      <div className="rounded-full bg-gradient-to-br from-[#174dB2] to-teal-500 p-4">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <h3 className="mb-2 font-semibold text-gray-800">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div id="medicines" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-[#174dB2]">Medicines</h2>
              <p className="text-gray-600">Quality medicines at affordable prices</p>
            </div>
            <Link href="/products?category=medicines">
              <Button variant="outline" className="border-[#174dB2] text-[#174dB2]">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {medicineProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

      <div id="lab-tests" className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-[#174dB2]">Lab Tests</h2>
              <p className="text-gray-600">Comprehensive diagnostic services</p>
            </div>
            <Link href="/products?category=lab-tests">
              <Button variant="outline" className="border-[#174dB2] text-[#174dB2]">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {labTestProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

      <div id="equipment" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-[#174dB2]">Medical Equipment</h2>
              <p className="text-gray-600">Professional healthcare devices</p>
            </div>
            <Link href="/products?category=equipment">
              <Button variant="outline" className="border-[#174dB2] text-[#174dB2]">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {equipmentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

      <div id="home-services" className="bg-gradient-to-br from-blue-50 to-teal-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-[#174dB2]">Home Services</h2>
            <p className="text-gray-600">Professional healthcare at your doorstep</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {homeServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>

      <div id="vaccinations" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-[#174dB2]">Vaccinations</h2>
            <p className="text-gray-600">Stay protected with our vaccination services</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {vaccinations.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>

      <div id="membership" className="bg-gradient-to-br from-[#174dB2] to-teal-500 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold">Membership Plans</h2>
            <p className="text-gray-100">Exclusive benefits for your family</p>
          </div>
          <div className="mx-auto max-w-4xl">
  {membership.map((service) => {

    const handleSubscribe = () => {
      const message = `Hello, I want to subscribe to the following membership:

Membership Plan: ${service.name}
Price: ₹${service.price} / year

Please share the subscription process and details.`;

      const encodedMessage = encodeURIComponent(message);

      const whatsappURL = `https://wa.me/919096938883?text=${encodedMessage}`;

      window.open(whatsappURL, "_blank");
    };

    return (
      <div
        key={service.id}
        className="rounded-2xl bg-white p-8 text-gray-800 shadow-2xl"
      >
        <div className="mb-6 text-center">
          <h3 className="mb-2 text-3xl font-bold text-[#174dB2]">
            {service.name}
          </h3>
          <p className="text-gray-600">{service.description}</p>

          <div className="mt-4">
            <span className="text-5xl font-bold text-[#174dB2]">
              ₹{service.price.toLocaleString()}
            </span>
            <span className="text-gray-600">/year</span>
          </div>
        </div>

        <div className="mb-6 grid gap-4 md:grid-cols-2">
          {service.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500">
                <span className="text-xs text-white">✓</span>
              </div>
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>

        <Button
          onClick={handleSubscribe}
          className="w-full bg-gradient-to-r from-[#174dB2] to-teal-500 py-6 text-lg hover:from-[#174dB2] hover:to-teal-600"
        >
          Subscribe Now
        </Button>
      </div>
    );
  })}
</div>
        </div>
      </div>
    </>
  );
}
