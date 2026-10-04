import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Zap, Shield, Compass, TrendingUp } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const StartupVisionSection: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const advantages = [
    {
      icon: Zap,
      title: 'Founder-Level Dedication',
      text: 'Every project receives direct, uncompromised attention from our core creative and engineering leads. No junior handoffs or bureaucracy.'
    },
    {
      icon: Shield,
      title: 'Pure Modern Foundations',
      text: 'Built from day one on cutting-edge 2026 web and design tooling. Zero accumulated technical debt, zero stale legacy frameworks.'
    },
    {
      icon: Compass,
      title: 'Adaptive Agility',
      text: 'Rapid prototyping and nimble iteration cycles allow us to adapt swiftly to your evolving market requirements.'
    },
    {
      icon: TrendingUp,
      title: 'Aligned Mutual Growth',
      text: 'Our reputation is forged by the real-world success of the products we craft together. Your win is our definitive calling card.'
    }
  ];

  return (
    <section
      id="vision"
      className={`relative py-28 lg:py-36 overflow-hidden border-t transition-colors duration-300 ${
        isDark ? 'bg-[#050A3A] border-white/5' : 'bg-[#F8FAFC]/80 border-slate-200/80'
      }`}
    >
      {/* Ambient background lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-1/2 left-1/3 w-96 sm:w-[600px] h-96 sm:h-[600px] rounded-full blur-[170px] animate-subtle-float-slow transition-opacity duration-300 ${
            isDark ? 'bg-[#6C24E8]/15' : 'bg-[#6C24E8]/08'
          }`}
        />
        <div
          className={`absolute inset-0 rf-grid-pattern transition-opacity duration-300 ${
            isDark ? 'opacity-20' : 'opacity-15'
          }`}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Vision Statement */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-8 bg-[#315CFF]" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#315CFF]">
                06 / STARTUP VISION & TRAJECTORY
              </span>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-[0.02em] leading-tight transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-[#050A3A]'
              }`}
            >
              We're Building <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#315CFF] via-[#6C24E8] to-[#C817D9]">
                What's Next.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className={`text-base sm:text-lg lg:text-xl font-normal leading-relaxed border-l-2 border-[#C817D9] pl-5 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-[#050A3A]'
              }`}
            >
              “RF Technologies is at the beginning of its journey, with a clear vision to build
              meaningful digital experiences and grow alongside the businesses we work with.”
            </motion.p>

            <p
              className={`text-sm sm:text-base leading-relaxed font-light transition-colors duration-300 ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              Being a new studio is our greatest strategic strength. We bring fresh eyes, unbridled
              enthusiasm, and obsessive attention to detail to every engagement. Rather than resting on
              yesterday's laurels, we are wholeheartedly committed to demonstrating our world-class standard on every single deliverable.
            </p>

            <div
              className={`pt-2 flex items-center gap-3 text-xs font-mono ${
                isDark ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              <span
                className={`flex items-center gap-1.5 font-semibold ${
                  isDark ? 'text-white' : 'text-[#050A3A]'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-[#315CFF]" />
                FORWARD-LOOKING PARTNERSHIPS
              </span>
              <span>•</span>
              <span className="text-[#315CFF] font-bold">LAUNCHING WITH PURPOSE</span>
            </div>
          </div>

          {/* Right Column: 4 Agile Advantages of Partnering Early */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 animate-subtle-float-gentle">
            {advantages.map((adv, idx) => {
              const IconComp = adv.icon;
              return (
                <motion.div
                  key={adv.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * idx }}
                  className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-0.5 ${
                    isDark
                      ? 'bg-[#08145C]/60 border-white/10 hover:border-[#315CFF]/50'
                      : 'bg-white/90 border-slate-200 hover:border-[#315CFF]/50 shadow-sm hover:shadow-md'
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-[#315CFF]/15 border border-[#315CFF]/30 flex items-center justify-center text-[#315CFF] group-hover:text-[#C817D9] group-hover:border-[#C817D9]/50 transition-colors mb-4">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3
                      className={`font-display font-bold text-base uppercase mb-2 transition-colors ${
                        isDark ? 'text-white' : 'text-[#050A3A]'
                      }`}
                    >
                      {adv.title}
                    </h3>
                    <p
                      className={`text-xs leading-relaxed font-light transition-colors ${
                        isDark ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      {adv.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
