import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Eye, Focus, Compass, Sparkles, Cpu, ShieldCheck } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { RFLogo } from './RFLogo';
import logoLight from "../assets/logo-light.png";
import logoDark from "../assets/logo-dark.png";

export const AboutSection: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [imageFailed, setImageFailed] = useState(false);

  const pillars = [
    {
      icon: Eye,
      title: 'Fresh Perspective',
      text: 'Unburdened by legacy dogma. We approach every digital challenge with raw clarity and uncompromised contemporary craftsmanship.',
    },
    {
      icon: Focus,
      title: 'Attention to Detail',
      text: 'From sub-pixel layout precision to micro-interactions, we obsess over the microscopic touchpoints that define true luxury.',
    },
    {
      icon: Compass,
      title: 'Creative Thinking',
      text: 'Merging artistic sensibility with analytical discipline to build products that stand distinct in crowded digital markets.',
    },
    {
      icon: Sparkles,
      title: 'User-Focused Design',
      text: 'Interfaces engineered around human cognition, reducing cognitive friction while elevating brand delight at every step.',
    },
    {
      icon: Cpu,
      title: 'Practical Digital Solutions',
      text: 'Pragmatic, high-performance technology that delivers actual measurable utility without superfluous technical debt.',
    },
    {
      icon: ShieldCheck,
      title: 'Long-Term Vision',
      text: 'We architect sustainable design systems and modular codebases built to adapt, evolve, and thrive for years to come.',
    },
  ];

  return (
    <section
      id="about"
      className={`relative py-28 lg:py-36 overflow-hidden border-t transition-colors duration-300 ${
        isDark ? 'bg-[#050A3A] border-white/5' : 'bg-[#F8FAFC]/90 border-slate-200/80'
      }`}
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-1/2 -left-48 w-96 h-96 rounded-full blur-[140px] animate-subtle-float transition-opacity duration-300 ${
            isDark ? 'bg-[#315CFF]/15' : 'bg-[#315CFF]/08'
          }`}
        />
        <div
          className={`absolute bottom-10 right-0 w-[500px] h-[500px] rounded-full blur-[160px] animate-subtle-float-reverse transition-opacity duration-300 ${
            isDark ? 'bg-[#6C24E8]/15' : 'bg-[#6C24E8]/08'
          }`}
        />
        <div
          className={`absolute inset-0 rf-grid-pattern transition-opacity duration-300 ${
            isDark ? 'opacity-30' : 'opacity-15'
          }`}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-[1px] w-8 bg-[#315CFF]" />
          <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#315CFF]">
            01 / INTRODUCTION & PURPOSE
          </span>
        </div>

        {/* ROW 1 — MAIN CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT COLUMN — EDITORIAL HEADLINE & MANIFESTO */}
          <div className="lg:col-span-7 space-y-8">
            {/* Headline */}
         
<motion.h2
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className={`font-display font-extrabold text-[2.4rem] leading-[0.9] tracking-[0.01em] sm:text-[3.25rem] md:text-[4.2rem] lg:text-[5rem] xl:text-[6rem] max-w-[11ch] transition-colors duration-300 ${
    isDark ? 'text-white' : 'text-[#050A3A]'
  }`}
>
  We build <br />

  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#315CFF] via-[#6C24E8] to-[#C817D9]">
    digital experiences
  </span>

  <br />

  <span className="whitespace-nowrap">
    with purpose.
  </span>
</motion.h2>

            {/* Manifesto */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className={`space-y-6 text-base sm:text-lg leading-relaxed font-light transition-colors duration-300 ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              <p
                className={`text-lg sm:text-xl font-normal leading-relaxed border-l-2 border-[#6C24E8] pl-5 transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-[#050A3A]'
                }`}
              >
                “RF Technologies is a creative technology studio focused on transforming ideas into
                thoughtful digital experiences. We bring together design, development, branding, and
                digital growth to help businesses build a stronger presence in the digital world.”
              </p>

              <p>
                As an agile, design-driven new studio, we operate with zero corporate baggage.
                Our conviction is simple: technology should not feel like an off-the-shelf commodity.
                It should embody the soul, ambition, and identity of the concept it powers.
              </p>
            </motion.div>
          </div>

          {/* RIGHT COLUMN — RF MONOGRAM */}
          <div className="lg:col-span-5 relative sticky top-28">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`relative w-full aspect-square max-w-[460px] mx-auto rounded-3xl p-8 flex flex-col justify-between overflow-hidden animate-subtle-float-slow transition-all duration-300 ${
                isDark
                  ? 'bg-gradient-to-b from-[#08145C] to-[#050A3A] border border-white/15 shadow-2xl shadow-[#050A3A]'
                  : 'bg-gradient-to-b from-white to-slate-50 border border-slate-200/90 shadow-2xl shadow-slate-200/60'
              }`}
            >
              {/* Back ambient radial glow */}
              <div
                className={`absolute inset-0 pointer-events-none ${
                  isDark
                    ? 'bg-[radial-gradient(circle_at_70%_40%,rgba(108,36,232,0.35),transparent_70%)]'
                    : 'bg-[radial-gradient(circle_at_70%_40%,rgba(108,36,232,0.12),transparent_70%)]'
                }`}
              />

              {/* Central Iconic Layered RF Visual */}
              <div className="relative z-10 my-auto flex items-center justify-center py-6">
                <div className="relative w-80 h-80 flex items-center justify-center">
                  {/* Outer rotating ring */}
                  <div
                    className="absolute inset-0 rounded-full border border-[#315CFF]/20 animate-spin"
                    style={{
                      animationDuration: '40s',
                    }}
                  />

                  {/* Inner dashed rotating ring */}
                  <div
                    className="absolute inset-4 rounded-full border border-dashed border-[#6C24E8]/30 animate-spin"
                    style={{
                      animationDuration: '30s',
                      animationDirection: 'reverse',
                    }}
                  />

                  {/* Static inner ring */}
                  <div className="absolute inset-8 rounded-full border border-[#C817D9]/20" />

                  {/* Logo */}
                 <div className="relative z-10 w-40 h-40 flex items-center justify-center">
  {/* Very subtle glow */}
  <div className="absolute w-48 h-48 rounded-full bg-[#315CFF]/15 blur-2xl" />

  <img
    src={theme === "dark" ? logoDark : logoLight}
    alt="RF Technologies"
    className="relative z-10 w-40 h-40 object-contain drop-shadow-[0_0_18px_rgba(49,92,255,0.25)]"
  />
</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ROW 2 — FULL WIDTH PILLARS */}
          <div className="lg:col-span-12 pt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {pillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;

                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.08 * idx }}
                    className={`p-5 rounded-xl border transition-all duration-300 group hover:-translate-y-0.5 ${
                      isDark
                        ? 'bg-[#08145C]/60 border-white/10 hover:border-[#315CFF]/40'
                        : 'bg-white/80 border-slate-200/90 hover:border-[#315CFF]/50 shadow-sm hover:shadow-md shadow-slate-200/40'
                    }`}
                  >
                    {/* Icon + Title */}
                    <div className="flex items-center gap-3 mb-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#315CFF]/15 border border-[#315CFF]/30 flex items-center justify-center text-[#315CFF] group-hover:text-[#C817D9] group-hover:border-[#C817D9]/50 transition-colors">
                        <IconComponent className="w-4 h-4" />
                      </div>

                      <h3
                        className={`font-display font-bold text-sm tracking-[0.02em] transition-colors ${
                          isDark ? 'text-white' : 'text-[#050A3A]'
                        }`}
                      >
                        {pillar.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p
                      className={`text-xs leading-relaxed font-light transition-colors ${
                        isDark ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      {pillar.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
