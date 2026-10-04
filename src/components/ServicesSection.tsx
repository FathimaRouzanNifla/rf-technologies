import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SERVICES_DATA } from '../data/contentData';
import { ServiceItem } from '../types';
import { ServiceVisual } from './ServiceVisuals';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      id="services"
      className={`relative py-28 lg:py-36 overflow-hidden border-t transition-colors duration-300 ${
        isDark ? 'bg-[#050A3A] border-white/5' : 'bg-[#F8FAFC]/80 border-slate-200/80'
      }`}
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-1/4 -right-40 w-96 sm:w-[600px] h-96 sm:h-[600px] rounded-full blur-[160px] animate-subtle-float-slow transition-opacity duration-300 ${
            isDark ? 'bg-[#6C24E8]/15' : 'bg-[#6C24E8]/08'
          }`}
        />
        <div
          className={`absolute bottom-1/4 -left-40 w-96 sm:w-[500px] h-96 sm:h-[500px] rounded-full blur-[150px] animate-subtle-float-reverse transition-opacity duration-300 ${
            isDark ? 'bg-[#315CFF]/15' : 'bg-[#315CFF]/08'
          }`}
        />
        <div
          className={`absolute inset-0 rf-grid-pattern transition-opacity duration-300 ${
            isDark ? 'opacity-25' : 'opacity-15'
          }`}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[1px] w-8 bg-[#315CFF]" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#315CFF]">
                02 / CAPABILITIES & SERVICES
              </span>
            </div>
            <h2
              className={`font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-[-0.02em] transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-[#050A3A]'
              }`}
            >
              Our Services
            </h2>
          </div>
          <p
            className={`text-sm sm:text-base max-w-md font-light leading-relaxed border-l pl-4 transition-colors duration-300 ${
              isDark ? 'text-slate-300 border-white/15' : 'text-slate-600 border-slate-300'
            }`}
          >
            “From identity to digital growth, we create solutions designed to move ideas forward.”
          </p>
        </div>

        {/* 10 Modular Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch">
          {SERVICES_DATA.map((service, index) => {
            const isHovered = hoveredId === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => onSelectService(service)}
                data-cursor="view"
                className={`group relative h-full rounded-2xl border p-6 sm:p-7 flex flex-col justify-between cursor-pointer transition-all duration-300 overflow-hidden hover:-translate-y-1 ${
                  isDark
                    ? 'bg-[#08145C]/75 border-white/10 hover:border-[#315CFF]/60 shadow-xl hover:shadow-2xl hover:shadow-[#6C24E8]/20'
                    : 'bg-white/90 border-slate-200/90 hover:border-[#315CFF]/60 shadow-md hover:shadow-xl hover:shadow-slate-300/60'
                }`}
              >
                {/* Background Hover Gradient */}
                <div
                  className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${
                    isDark
                      ? 'bg-gradient-to-br from-[#2637C8]/20 via-[#6C24E8]/20 to-[#C817D9]/20'
                      : 'bg-gradient-to-br from-[#315CFF]/08 via-[#6C24E8]/06 to-[#C817D9]/08'
                  } ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                />

                {/* Subtle cursor glow follower effect */}
                <div
                  className={`absolute -top-24 -right-24 w-48 h-48 rounded-full bg-[#C817D9]/15 blur-2xl transition-opacity duration-500 pointer-events-none ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                {/* Top Card Header */}
                <div className="relative z-10 flex items-start justify-between mb-4">
                  {/* Number */}
                  <span
                    className={`font-mono font-bold transition-all duration-300 ${
                      isHovered
                        ? 'text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#315CFF] to-[#C817D9]'
                        : isDark
                        ? 'text-xl sm:text-2xl text-slate-500'
                        : 'text-xl sm:text-2xl text-slate-400'
                    }`}
                  >
                    {service.number}
                  </span>

                  {/* Corner Action Arrow */}
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isHovered
                        ? 'bg-gradient-to-r from-[#315CFF] to-[#C817D9] text-white scale-110 shadow-md shadow-[#6C24E8]/40'
                        : isDark
                        ? 'bg-white/5 text-slate-400 border border-white/10'
                        : 'bg-slate-100 text-slate-600 border border-slate-200'
                    }`}
                  >
                    <ArrowUpRight
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isHovered ? 'translate-x-0.5 -translate-y-0.5' : ''
                      }`}
                    />
                  </div>
                </div>

                {/* Service Title */}
                <div className="relative z-10 mb-3">
                  <h3
                    className={`font-display font-extrabold text-xl sm:text-2xl tracking-tight transition-transform duration-300 ${
                      isHovered ? 'translate-x-1' : ''
                    } ${
                      isDark
                        ? isHovered
                          ? 'text-white'
                          : 'text-slate-100'
                        : isHovered
                        ? 'text-[#2637C8]'
                        : 'text-[#050A3A]'
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`mt-2 text-xs sm:text-sm font-light leading-relaxed transition-colors duration-300 ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    “{service.shortDesc}”
                  </p>
                </div>

                {/* Embedded Service Visual */}
                <div className="relative z-10 my-4">
                  <ServiceVisual visualType={service.visualType} isHovered={isHovered} />
                </div>

                {/* Bottom Deliverables Pill Bar */}
                <div
                  className={`relative z-10 pt-4 border-t flex items-center justify-between text-[11px] font-mono transition-colors duration-300 ${
                    isDark ? 'border-white/10' : 'border-slate-200'
                  }`}
                >
                  <div
                    className={`flex items-center gap-1.5 ${
                      isDark ? 'text-slate-400' : 'text-slate-500'
                    }`}
                  >
                    <Sparkles className="w-3 h-3 text-[#315CFF]" />
                    <span>{service.deliverables.length} Deliverables Included</span>
                  </div>
                  <span
                    className={`uppercase font-semibold tracking-[0.02em]r transition-colors ${
                      isHovered ? 'text-[#C817D9]' : isDark ? 'text-slate-500' : 'text-slate-400'
                    }`}
                  >
                    View Specs →
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
