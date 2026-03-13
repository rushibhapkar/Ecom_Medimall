'use client';

import { useEffect, useRef, useState } from 'react';
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
  const navRef = useRef<HTMLDivElement>(null);
  const [navTop, setNavTop] = useState(73);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  // Dynamically detect header height
  useEffect(() => {
    const header = document.querySelector('header');
    if (header) {
      setNavTop(header.offsetHeight);
    }
  }, []);

  // Scroll direction detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        // Always show near the top
        setVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        // Scrolling DOWN → hide
        setVisible(false);
      } else {
        // Scrolling UP → show
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const navHeight = navRef.current?.offsetHeight ?? 56;
    const totalOffset = navTop + navHeight + 8;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: elementPosition - totalOffset,
      behavior: 'smooth',
    });
  };

  return (
    <div
      ref={navRef}
      className="sticky z-40 bg-gradient-to-r from-[#174dB2] to-teal-500 shadow-md"
      style={{
        top: `${navTop}px`,
        transform: visible ? 'translateY(0)' : 'translateY(-110%)',
        transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
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