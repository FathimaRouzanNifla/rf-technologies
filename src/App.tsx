import React, { useState } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { NetworkBackground } from './components/NetworkBackground';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyRFSection } from './components/WhyRFSection';
import { ApproachSection } from './components/ApproachSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { StartupVisionSection } from './components/StartupVisionSection';
import { CallToActionSection } from './components/CallToActionSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ServiceItem } from './types';
import { SERVICES_DATA } from './data/contentData';

function MainLayout() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [prefilledService, setPrefilledService] = useState<string>('Web Development');
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service);
  };

  const handleSelectForInquiry = (serviceTitle: string) => {
    setPrefilledService(serviceTitle);
    const el = document.getElementById('contact');
    if (el) {
      const offsetTop = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  const handleFooterSelectService = (title: string) => {
    const matched = SERVICES_DATA.find(
      (s) => s.title.toLowerCase() === title.toLowerCase()
    );
    if (matched) {
      setSelectedService(matched);
    }
  };

  return (
    <div
      className={`relative min-h-screen flex flex-col selection:bg-[#6C24E8] selection:text-white transition-colors duration-300 ${
        isDark ? 'bg-[#050A3A] text-slate-100' : 'bg-[#F8FAFC] text-[#050A3A]'
      }`}
    >
      {/* Animated Connected Digital Network Background */}
      <NetworkBackground />

      {/* Desktop custom cursor */}
      <CustomCursor />

      {/* Sticky Luxury Navbar with Light/Dark Theme Switcher */}
      <Navbar />

      {/* Main Page Flow: Continuous Digital Experience */}
      <main className="flex-grow">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Introduction / About */}
        <AboutSection />

        {/* 3. Services (10 Disciplines) */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 4. Why RF Technologies */}
        <WhyRFSection />

        {/* 5. Our Systematic Approach */}
        <ApproachSection />

        {/* 6. Digital Capabilities Ecosystem */}
        <CapabilitiesSection />

        {/* 7. Startup Vision / Future */}
        <StartupVisionSection />

        {/* 8. Call To Action */}
        <CallToActionSection />

        {/* 9. Contact */}
        <ContactSection selectedServicePreload={prefilledService} />
      </main>

      {/* 10. Footer */}
      <Footer onSelectServiceTitle={handleFooterSelectService} />

      {/* Interactive Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectForInquiry={handleSelectForInquiry}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainLayout />
    </ThemeProvider>
  );
}
