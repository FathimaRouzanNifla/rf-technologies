import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PRINCIPLES_DATA } from '../data/contentData';
import { Lightbulb, Target, CheckCircle, Cpu, Eye } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const WhyRFSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const icons = [Lightbulb, Target, CheckCircle, Cpu, Eye];

  return (
    <section
      id="why-rf"
      className={`relative py-28 lg:py-36 overflow-hidden border-t transition-colors duration-300 ${
        isDark ? 'bg-[#050A3A] border-white/5' : 'bg-[#F8FAFC]/90 border-slate-200/80'
      }`}
    >
      {/* Ambient background light */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-1/3 left-1/4 w-96 sm:w-[550px] h-96 sm:h-[550px] rounded-full blur-[150px] animate-subtle-float transition-opacity duration-300 ${
            isDark ? 'bg-[#2637C8]/15' : 'bg-[#315CFF]/08'
          }`}
        />
        <div
          className={`absolute bottom-10 right-10 w-80 sm:w-[480px] h-80 sm:h-[480px] rounded-full blur-[140px] animate-subtle-float-reverse transition-opacity duration-300 ${
            isDark ? 'bg-[#C817D9]/12' : 'bg-[#C817D9]/06'
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
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-[#315CFF]" />
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#315CFF]">
              03 / PHILOSOPHY & VALUES
            </span>
          </div>
          <h2
            className={`font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-[-0.02em] transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-[#050A3A]'
            }`}
          >
            Why RF Technologies?
          </h2>
          <p
            className={`mt-4 text-sm sm:text-base font-light leading-relaxed transition-colors duration-300 ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            We reject superficial metrics and generic templates. Our credibility is rooted in
            uncompromising principles, intentional architectural discipline, and transparent craftsmanship.
          </p>
        </div>

        {/* 5 Principles Stack */}
        <div className="space-y-4">
          {PRINCIPLES_DATA.map((principle, idx) => {
            const isActive = activeIdx === idx;
            const IconComp = icons[idx % icons.length];

            return (
              <motion.div
                key={principle.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onClick={() => setActiveIdx(idx)}
                onMouseEnter={() => setActiveIdx(idx)}
                className={`group relative rounded-2xl border transition-all duration-300 p-6 sm:p-8 cursor-pointer overflow-hidden hover:-translate-y-0.5 ${
                  isActive
                    ? isDark
                      ? 'bg-[#08145C] border-[#315CFF]/70 shadow-2xl shadow-[#6C24E8]/20'
                      : 'bg-white border-[#315CFF]/80 shadow-xl shadow-slate-200/80'
                    : isDark
                    ? 'bg-[#08145C]/40 border-white/10 hover:border-white/20 hover:bg-[#08145C]/60'
                    : 'bg-white/80 border-slate-200/90 hover:border-[#315CFF]/40 hover:bg-white shadow-xs'
                }`}
              >
                {/* Active side indicator glow line */}
                {isActive && (
                  <motion.div
                    layoutId="activePrincipleGlow"
                    className="absolute top-0 bottom-0 left-0 w-1.5 bg-gradient-to-b from-[#315CFF] via-[#6C24E8] to-[#C817D9]"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  {/* Number & Principle Title (5 cols) */}
                  <div className="lg:col-span-5 flex items-center gap-4 sm:gap-6">
                    <span
                      className={`font-mono font-bold text-2xl sm:text-4xl transition-colors ${
                        isActive
                          ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#315CFF] to-[#C817D9]'
                          : isDark
                          ? 'text-slate-500 group-hover:text-slate-400'
                          : 'text-slate-400 group-hover:text-slate-600'
                      }`}
                    >
                      {principle.number}
                    </span>

                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                          isActive
                            ? 'bg-[#315CFF]/15 text-[#315CFF] border border-[#315CFF]/40'
                            : isDark
                            ? 'bg-white/5 text-slate-400 border border-white/5'
                            : 'bg-slate-100 text-slate-500 border border-slate-200'
                        }`}
                      >
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h3
                        className={`font-display font-extrabold text-lg sm:text-xl tracking-[0.02em] transition-colors ${
                          isDark ? 'text-white' : 'text-[#050A3A]'
                        }`}
                      >
                        {principle.title}
                      </h3>
                    </div>
                  </div>

                  {/* Quote & Description (7 cols) */}
                  <div className="lg:col-span-7 space-y-2">
                    <div
                      className={`text-base sm:text-lg font-medium transition-colors ${
                        isActive
                          ? isDark
                            ? 'text-white'
                            : 'text-[#2637C8] font-bold'
                          : isDark
                          ? 'text-slate-300'
                          : 'text-slate-700'
                      }`}
                    >
                      {principle.quote}
                    </div>
                    <p
                      className={`text-xs sm:text-sm font-light leading-relaxed transition-colors ${
                        isDark ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      {principle.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
