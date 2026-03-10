'use client';

import { useRouter } from 'next/navigation';
import { Pill, FlaskConical, Stethoscope, HeartPulse } from 'lucide-react';

const categories = [
  {
    value: 'medicines',
    label: 'Medicines',
    description: 'Prescription & OTC drugs',
    icon: Pill,
    gradient: 'from-blue-500 to-cyan-400',
    bg: 'bg-blue-50',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    count: '500+ products',
    pattern: 'radial-gradient(circle at 80% 20%, rgba(59,130,246,0.15) 0%, transparent 60%)',
  },
  {
    value: 'lab-tests',
    label: 'Lab Tests',
    description: 'Diagnostics & reports',
    icon: FlaskConical,
    gradient: 'from-teal-500 to-emerald-400',
    bg: 'bg-teal-50',
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-600',
    count: '100+ tests',
    pattern: 'radial-gradient(circle at 80% 20%, rgba(20,184,166,0.15) 0%, transparent 60%)',
  },
  {
    value: 'equipment',
    label: 'Equipment',
    description: 'Medical devices & tools',
    icon: Stethoscope,
    gradient: 'from-violet-500 to-purple-400',
    bg: 'bg-violet-50',
    iconBg: 'bg-violet-100',
    iconColor: 'text-violet-600',
    count: '200+ items',
    pattern: 'radial-gradient(circle at 80% 20%, rgba(139,92,246,0.15) 0%, transparent 60%)',
  },
  {
    value: 'all',
    label: 'All Products',
    description: 'Browse everything',
    icon: HeartPulse,
    gradient: 'from-rose-500 to-pink-400',
    bg: 'bg-rose-50',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-600',
    count: '800+ products',
    pattern: 'radial-gradient(circle at 80% 20%, rgba(244,63,94,0.15) 0%, transparent 60%)',
  },
];

export default function CategoriesSection() {
  const router = useRouter();

  const handleClick = (value: string) => {
    if (value === 'all') {
      router.push('/products');
    } else {
      router.push(`/products?category=${value}`);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="mb-10 text-center">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#174dB2] mb-3">
            Shop by Category
          </span>
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            What are you looking for?
          </h2>
          <p className="mt-2 text-gray-500">
            Find exactly what you need from our wide range of healthcare products
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.value}
                onClick={() => handleClick(cat.value)}
                className={`group relative overflow-hidden rounded-2xl ${cat.bg} p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-transparent hover:border-gray-200`}
                style={{ background: cat.pattern }}
              >
                {/* Background glow on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-10 rounded-2xl`}
                />

                {/* Icon */}
                <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl ${cat.iconBg} ${cat.iconColor} transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className="h-7 w-7" strokeWidth={1.8} />
                </div>

                {/* Text */}
                <h3 className="text-base font-bold text-gray-800 group-hover:text-[#174dB2] transition-colors">
                  {cat.label}
                </h3>
                <p className="mt-1 text-xs text-gray-500 leading-relaxed">
                  {cat.description}
                </p>

                {/* Count badge */}
                <div className={`mt-4 inline-block rounded-full bg-gradient-to-r ${cat.gradient} px-3 py-1`}>
                  <span className="text-xs font-semibold text-white">{cat.count}</span>
                </div>

                {/* Arrow */}
                <div className="absolute right-4 top-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2">
                  <svg className={`h-5 w-5 ${cat.iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}