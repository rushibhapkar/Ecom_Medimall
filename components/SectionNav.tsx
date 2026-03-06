'use client';

import { Pill, FlaskConical, Stethoscope, Home, Syringe, Award } from 'lucide-react';

const sections = [
  { id: 'medicines', label: 'Medicines', icon: Pill },
  { id: 'lab-tests', label: 'Lab Tests', icon: FlaskConical },
  { id: 'equipment', label: 'Medical Equipment', icon: Stethoscope },
  { id: 'home-services', label: 'Home Services', icon: Home },
  { id: 'vaccinations', label: 'Vaccinations', icon: Syringe },
  { id: 'membership', label: 'Membership', icon: Award },
];

export default function SectionNav() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="sticky top-[73px] z-40 bg-gradient-to-r from-[#174dB2] to-teal-500 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-hide">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="flex min-w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-[#174dB2] transition-all hover:scale-105 hover:shadow-lg"
              >
                <Icon className="h-4 w-4" />
                <span className="whitespace-nowrap">{section.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
