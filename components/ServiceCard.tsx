'use client';

import Image from 'next/image';
import { Service } from '@/context/AppContext';
import { Check, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {

  const handleWhatsAppBooking = () => {
    const message = `Hello, I want to book the following service:

Service: ${service.name}
Price: ₹${service.price}

Please share more details.`;

    const encodedMessage = encodeURIComponent(message);

    const whatsappURL = `https://wa.me/919096938883?text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');
  };

  return (
    <Card className="group h-full overflow-hidden transition-all hover:shadow-xl">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={service.image}
          alt={service.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <CardHeader>
        <CardTitle className="text-lg text-[#174dB2]">{service.name}</CardTitle>
        <CardDescription>{service.description}</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="mb-4">
          <p className="text-2xl font-bold text-[#174dB2]">
            ₹{service.price.toLocaleString()}
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-semibold text-gray-700">Features:</p>
          {service.features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
              <span className="text-sm text-gray-600">{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex gap-2">
        <Button
          onClick={handleWhatsAppBooking}
          className="flex-1 bg-gradient-to-r from-[#174dB2] to-teal-500 hover:from-[#174dB2] hover:to-teal-600"
        >
          Book Now
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="border-[#174dB2] text-[#174dB2]"
          onClick={() => window.open('tel:9096938883')}
        >
          <Phone className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}