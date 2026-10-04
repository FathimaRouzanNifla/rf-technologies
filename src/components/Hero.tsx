import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight, Sparkles, Code2, Smartphone, Globe, Layers } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Hero: React.FC = () => {
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
      id="home"
      className={`relative min-h-screen flex flex-col justify-between pt-32 pb-16 overflow-hidden transition-colors duration-300 ${
        isDark ? 'bg-[#050A3A]' : 'bg-transparent'
      }`}
    >
      {/* Ambient background light gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Fine technical grid */}
        <div
          className={`absolute inset-0 rf-grid-pattern transition-opacity duration-300 ${
            isDark ? 'opacity-40' : 'opacity-25'
          }`}
        />

        {/* Primary ambient glow orbs */}
        <div
          className={`absolute -top-32 -left-32 w-96 sm:w-[540px] h-96 sm:h-[540px] rounded-full blur-[120px] animate-ambient-pulse animate-subtle-float pointer-events-none transition-opacity duration-300 ${
            isDark ? 'bg-[#2637C8]/20' : 'bg-[#315CFF]/10'
          }`}
        />
        <div
          className={`absolute top-1/3 -right-32 w-96 sm:w-[500px] h-96 sm:h-[500px] rounded-full blur-[140px] animate-subtle-float-slow pointer-events-none transition-opacity duration-300 ${
            isDark ? 'bg-[#6C24E8]/25' : 'bg-[#6C24E8]/10'
          }`}
          style={{ animationDuration: '10s' }}
        />
        <div
          className={`absolute -bottom-32 left-1/3 w-80 sm:w-[450px] h-80 sm:h-[450px] rounded-full blur-[130px] animate-subtle-float-reverse pointer-events-none transition-opacity duration-300 ${
            isDark ? 'bg-[#C817D9]/15' : 'bg-[#C817D9]/08'
          }`}
        />

        {/* Diagonal subtle beam */}
        <div
          className={`absolute inset-0 pointer-events-none ${
            isDark
              ? 'bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(49,92,255,0.22),rgba(5,10,58,0))]'
              : 'bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(49,92,255,0.08),transparent)]'
          }`}
        />
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Editorial Content (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Small Label */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border mb-6 shadow-xs transition-colors duration-300 ${
                isDark
                  ? 'bg-[#08145C] border-[#315CFF]/30 text-[#A5B4FC]'
                  : 'bg-white border-slate-200 text-[#2637C8]'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#315CFF] animate-pulse" />
              <span className="text-[11px] font-mono uppercase tracking-[0.28em] font-bold">
                RF TECHNOLOGIES STUDIO
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
  initial={{ opacity: 0, y: 24 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.7,
    delay: 0.1,
    ease: [0.16, 1, 1, 1],
  }}
  className={`font-display font-extrabold text-[2.7rem] leading-[0.9] tracking-[0.02em] sm:text-[4rem] md:text-[4.8rem] lg:text-[5.8rem] xl:text-[6.6rem] max-w-[11ch] transition-colors duration-300 ${
    isDark ? 'text-white' : 'text-[#050A3A]'
  }`}
>
  Ideas That{' '}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#315CFF] via-[#6C24E8] to-[#C817D9]">
    Inspire.
  </span>
  <br />
  Technology That
  <span
    className={`ml-4 text-transparent bg-clip-text ${
      isDark
        ? 'bg-gradient-to-r from-[#6C24E8] via-[#C817D9] to-white'
        : 'bg-gradient-to-r from-[#2637C8] via-[#6C24E8] to-[#050A3A]'
    }`}
  >
    Delivers.
  </span>
</motion.h1>

            {/* Supporting text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className={`mt-6 sm:mt-8 text-sm sm:text-base lg:text-lg font-normal max-w-xl leading-relaxed transition-colors duration-300 ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              Creative design and digital solutions built to turn ideas into meaningful experiences.
              We unite brand identity, UI/UX, and robust software engineering to architect your next digital leap.
            </motion.p>

            {/* CTA Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-[0.02em]r text-white overflow-hidden transition-all duration-300 shadow-xl shadow-[#6C24E8]/25 hover:shadow-[#C817D9]/35 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
              >
                {/* Button gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#2637C8] via-[#6C24E8] to-[#C817D9] transition-transform duration-500 group-hover:scale-105" />
                <span className="relative z-10">Let's Work Together</span>
                <ArrowUpRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('services')}
                className={`group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm font-semibold uppercase tracking-[0.02em]r border transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] ${
                  isDark
                    ? 'text-slate-200 bg-[#08145C]/70 hover:bg-[#08145C] border-[#315CFF]/30 hover:border-[#315CFF]'
                    : 'text-[#050A3A] bg-white hover:bg-slate-50 border-slate-200 hover:border-[#315CFF]/50 shadow-sm'
                }`}
              >
                <span>Explore Our Services</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#315CFF] group-hover:bg-[#C817D9] transition-colors" />
              </button>
            </motion.div>

            {/* Trust metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className={`mt-10 pt-6 border-t w-full flex flex-wrap items-center gap-6 sm:gap-10 text-xs font-mono transition-colors duration-300 ${
                isDark ? 'border-white/10 text-slate-400' : 'border-slate-200 text-slate-600'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#315CFF]" />
                <span className={isDark ? 'text-slate-300 font-medium' : 'text-slate-800 font-semibold'}>
                  10 Core Digital Disciplines
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6C24E8]" />
                <span className={isDark ? 'text-slate-300 font-medium' : 'text-slate-800 font-semibold'}>
                  Bespoke Architectural Craft
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C817D9]" />
                <span className={isDark ? 'text-slate-300 font-medium' : 'text-slate-800 font-semibold'}>
                  Direct WhatsApp Access
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Visual Composition: Original Luxury Digital Laboratory (5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[480px]"
            >
              {/* Floating ambient glow backing */}
              <div
                className={`absolute inset-0 rounded-3xl filter blur-2xl -z-10 transform -rotate-2 transition-opacity duration-300 ${
                  isDark
                    ? 'bg-gradient-to-tr from-[#2637C8]/30 via-[#6C24E8]/40 to-[#C817D9]/30'
                    : 'bg-gradient-to-tr from-[#315CFF]/15 via-[#6C24E8]/15 to-[#C817D9]/15'
                }`}
              />

              {/* Main Laboratory Canvas Card */}
              <motion.div
                animate={{
                  y: [-6, 6, -6],
                  rotate: [0, 0.5, 0],
                }}
                transition={{
                  duration: 9,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className={`relative rounded-2xl border p-6 backdrop-blur-xl transition-all duration-300 ${
                  isDark
                    ? 'bg-[#08145C]/90 border-white/15 shadow-2xl shadow-[#050A3A]'
                    : 'bg-white/90 border-slate-200/90 shadow-2xl shadow-slate-300/50'
                }`}
              >
                {/* Header terminal-style bar */}
                <div
                  className={`flex items-center justify-between pb-4 border-b mb-5 ${
                    isDark ? 'border-white/10' : 'border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#315CFF]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#6C24E8]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#C817D9]" />
                    <span
                      className={`ml-2 text-[10px] font-mono tracking-[0.02em]st uppercase ${
                        isDark ? 'text-slate-400' : 'text-slate-500'
                      }`}
                    >
                      STUDIO_CORE.V1
                    </span>
                  </div>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                      isDark
                        ? 'bg-[#315CFF]/10 text-[#315CFF] border-[#315CFF]/30'
                        : 'bg-[#315CFF]/10 text-[#2637C8] border-[#315CFF]/25 font-bold'
                    }`}
                  >
                    ONLINE
                  </span>
                </div>

                {/* Abstract Interactive Workspaces Layer */}
                <div className="space-y-4">
                  {/* Layer 1: Abstract Brand Mark Card */}
                  <div
                    className={`p-4 rounded-xl border flex items-center justify-between transition-colors duration-300 ${
                      isDark
                        ? 'bg-[#050A3A]/80 border-white/10'
                        : 'bg-slate-50/90 border-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#2637C8] via-[#6C24E8] to-[#C817D9] p-[1.5px] flex items-center justify-center">
                        <div
                          className={`w-full h-full rounded-[7px] flex items-center justify-center font-display font-extrabold text-sm ${
                            isDark ? 'bg-[#08145C] text-white' : 'bg-white text-[#050A3A]'
                          }`}
                        >
                          RF
                        </div>
                      </div>
                      <div>
                        <div
                          className={`text-xs font-bold font-display tracking-[0.02em]r ${
                            isDark ? 'text-white' : 'text-[#050A3A]'
                          }`}
                        >
                          BRAND ARCHITECTURE
                        </div>
                        <div
                          className={`text-[10px] font-mono ${
                            isDark ? 'text-slate-400' : 'text-slate-500'
                          }`}
                        >
                          Geometric Monograms & Visual Systems
                        </div>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-[#315CFF] font-bold">01</span>
                  </div>

                  {/* Layer 2: UI/UX Wireframe Matrix */}
                  <div
                    className={`p-4 rounded-xl border relative overflow-hidden transition-colors duration-300 ${
                      isDark
                        ? 'bg-gradient-to-r from-[#08145C] to-[#0c186e] border-[#315CFF]/20'
                        : 'bg-gradient-to-r from-slate-50 to-blue-50/40 border-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className={`flex items-center gap-2 text-xs font-bold ${
                          isDark ? 'text-white' : 'text-[#050A3A]'
                        }`}
                      >
                        <Layers className="w-3.5 h-3.5 text-[#315CFF]" />
                        <span>TACTILE UI/UX SYSTEMS</span>
                      </div>
                      <span className="text-[10px] font-mono text-[#C817D9] font-bold">60 FPS FLUIDITY</span>
                    </div>
                    {/* Visual wireframe mini-bars */}
                    <div className="grid grid-cols-3 gap-2 pt-1">
                      <div
                        className={`h-8 rounded p-1.5 flex flex-col justify-between border ${
                          isDark ? 'bg-white/5 border-white/5' : 'bg-white border-slate-200/80 shadow-xs'
                        }`}
                      >
                        <div className="w-3/4 h-1.5 rounded-full bg-[#315CFF]" />
                        <div
                          className={`w-1/2 h-1 rounded-full ${
                            isDark ? 'bg-white/20' : 'bg-slate-300'
                          }`}
                        />
                      </div>
                      <div
                        className={`h-8 rounded p-1.5 flex flex-col justify-between border ${
                          isDark ? 'bg-white/5 border-white/5' : 'bg-white border-slate-200/80 shadow-xs'
                        }`}
                      >
                        <div className="w-2/3 h-1.5 rounded-full bg-[#6C24E8]" />
                        <div
                          className={`w-1/3 h-1 rounded-full ${
                            isDark ? 'bg-white/20' : 'bg-slate-300'
                          }`}
                        />
                      </div>
                      <div
                        className={`h-8 rounded p-1.5 flex flex-col justify-between border ${
                          isDark ? 'bg-white/5 border-white/5' : 'bg-white border-slate-200/80 shadow-xs'
                        }`}
                      >
                        <div className="w-4/5 h-1.5 rounded-full bg-[#C817D9]" />
                        <div
                          className={`w-2/5 h-1 rounded-full ${
                            isDark ? 'bg-white/20' : 'bg-slate-300'
                          }`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Layer 3: Modern Engineering Stack */}
                  <div
                    className={`p-4 rounded-xl border flex items-center justify-between transition-colors duration-300 ${
                      isDark
                        ? 'bg-[#050A3A]/80 border-white/10'
                        : 'bg-slate-50/90 border-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#315CFF]/15 border border-[#315CFF]/30 flex items-center justify-center text-[#315CFF]">
                        <Code2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div
                          className={`text-xs font-semibold ${
                            isDark ? 'text-slate-200' : 'text-slate-800'
                          }`}
                        >
                          HIGH-PRECISION CODE
                        </div>
                        <div
                          className={`text-[10px] font-mono ${
                            isDark ? 'text-slate-400' : 'text-slate-500'
                          }`}
                        >
                          React • TypeScript • Cloud Architecture
                        </div>
                      </div>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50" />
                  </div>
                </div>

                {/* Bottom Status bar */}
                <div
                  className={`mt-5 pt-3 border-t flex items-center justify-between text-[11px] font-mono ${
                    isDark ? 'border-white/10 text-slate-400' : 'border-slate-200 text-slate-500'
                  }`}
                >
                  <span
                    className={`flex items-center gap-1.5 ${
                      isDark ? 'text-slate-300' : 'text-slate-700 font-medium'
                    }`}
                  >
                    <Sparkles className="w-3 h-3 text-[#C817D9]" />
                    <span>DELIVERING QUALITY</span>
                  </span>
                  <span className="text-[#315CFF] font-bold">IDEAS → IMPACT</span>
                </div>
              </motion.div>

              {/* Floating accent badge: Mobile & Web Synergy */}
              <motion.div
                animate={{
                  y: [8, -8, 8],
                  x: [-4, 4, -4],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className={`absolute -bottom-6 -left-6 p-3.5 rounded-xl border backdrop-blur-md flex items-center gap-3 shadow-xl transition-colors duration-300 ${
                  isDark
                    ? 'bg-[#08145C] border-[#6C24E8]/40 shadow-[#050A3A]'
                    : 'bg-white border-slate-200/90 shadow-slate-300/60'
                }`}
              >
                <div className="w-8 h-8 rounded-lg bg-[#6C24E8]/15 flex items-center justify-center text-[#6C24E8]">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <div
                    className={`text-[11px] font-bold ${
                      isDark ? 'text-white' : 'text-[#050A3A]'
                    }`}
                  >
                    Full-Spectrum Digital
                  </div>
                  <div
                    className={`text-[9px] font-mono ${
                      isDark ? 'text-slate-400' : 'text-slate-500'
                    }`}
                  >
                    From Design to Production
                  </div>
                </div>
              </motion.div>

              {/* Floating accent badge: Creative Precision */}
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                  x: [4, -4, 4],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className={`absolute -top-6 -right-6 p-3 rounded-xl border backdrop-blur-md flex items-center gap-2.5 shadow-xl transition-colors duration-300 ${
                  isDark
                    ? 'bg-[#08145C] border-[#C817D9]/40 shadow-[#050A3A]'
                    : 'bg-white border-slate-200/90 shadow-slate-300/60'
                }`}
              >
                <div className="w-7 h-7 rounded-lg bg-[#C817D9]/15 flex items-center justify-center text-[#C817D9]">
                  <Smartphone className="w-3.5 h-3.5" />
                </div>
                <div
                  className={`text-[10px] font-mono font-bold uppercase tracking-[0.02em]r ${
                    isDark ? 'text-white' : 'text-[#050A3A]'
                  }`}
                >
                  Engineered For Motion
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-center pt-6">
        <button
          type="button"
          onClick={() => scrollToSection('about')}
          className="group inline-flex flex-col items-center gap-2 focus:outline-none"
          aria-label="Scroll to explore About section"
        >
          <span
            className={`text-[10px] font-mono tracking-[0.28em] font-semibold uppercase transition-colors ${
              isDark ? 'text-slate-400 group-hover:text-white' : 'text-slate-500 group-hover:text-[#050A3A]'
            }`}
          >
            SCROLL TO EXPLORE
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className={`w-7 h-7 rounded-full border flex items-center justify-center transition-all ${
              isDark
                ? 'bg-[#08145C] border-[#315CFF]/30 group-hover:border-[#C817D9] text-slate-400 group-hover:text-white'
                : 'bg-white border-slate-300 group-hover:border-[#315CFF] text-slate-600 group-hover:text-[#315CFF] shadow-xs'
            }`}
          >
            <ArrowDown className="w-3.5 h-3.5" />
          </motion.div>
        </button>
      </div>
    </section>
  );
};
