import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const CallToActionSection: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offsetTop = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section
      className={`relative py-28 lg:py-36 overflow-hidden border-t transition-colors duration-300 ${
        isDark ? 'bg-[#050A3A] border-white/5' : 'bg-[#F8FAFC]/90 border-slate-200/80'
      }`}
    >
      {/* Large controlled gradient visual */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute -top-1/2 left-1/2 -translate-x-1/2 w-[800px] sm:w-[1100px] h-[500px] sm:h-[650px] rounded-full blur-[140px] pointer-events-none animate-ambient-pulse animate-subtle-float-slow ${
            isDark
              ? 'bg-gradient-to-b from-[#2637C8]/25 via-[#6C24E8]/20 to-[#C817D9]/15'
              : 'bg-gradient-to-b from-[#315CFF]/15 via-[#6C24E8]/10 to-[#C817D9]/10'
          }`}
        />
        <div
          className={`absolute inset-0 rf-grid-pattern transition-opacity duration-300 ${
            isDark ? 'opacity-30' : 'opacity-15'
          }`}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border mb-8 animate-subtle-float-gentle transition-colors ${
            isDark
              ? 'bg-[#08145C] border-[#315CFF]/30 text-[#A5B4FC]'
              : 'bg-white border-slate-200 text-[#2637C8] shadow-xs'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-[#C817D9] animate-pulse" />
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] font-bold">
            START YOUR NEXT VENTURE
          </span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className={`font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl uppercase tracking-[-0.03em] leading-[1.06] transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-[#050A3A]'
          }`}
        >
          HAVE AN IDEA? <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#315CFF] via-[#6C24E8] to-[#C817D9]">
            LET'S CREATE IT TOGETHER.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className={`mt-6 text-base sm:text-xl max-w-2xl mx-auto font-light leading-relaxed transition-colors duration-300 ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          “Whether you're building a brand, launching a digital product, or looking to strengthen your
          online presence, let's start the conversation.”
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            type="button"
            onClick={() => scrollToSection('contact')}
            className="group relative inline-flex items-center justify-center gap-3 px-9 py-4 rounded-xl text-sm font-bold uppercase tracking-[0.02em]r text-white overflow-hidden transition-all duration-300 shadow-xl shadow-[#6C24E8]/30 hover:shadow-[#C817D9]/40 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#2637C8] via-[#6C24E8] to-[#C817D9] transition-transform duration-500 group-hover:scale-105" />
            <span className="relative z-10">START A CONVERSATION</span>
            <ArrowUpRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <button
            type="button"
            onClick={() => scrollToSection('services')}
            className={`group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold uppercase tracking-[0.02em]r border transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] ${
              isDark
                ? 'text-slate-200 bg-[#08145C]/80 hover:bg-[#08145C] border-[#315CFF]/30 hover:border-[#315CFF]'
                : 'text-[#050A3A] bg-white hover:bg-slate-50 border-slate-200 hover:border-[#315CFF]/50 shadow-sm'
            }`}
          >
            <span>VIEW SERVICES</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#315CFF] group-hover:bg-[#C817D9] transition-colors" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
