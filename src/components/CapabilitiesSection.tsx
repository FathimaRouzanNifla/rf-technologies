import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CAPABILITY_AREAS } from '../data/contentData';
import { ArrowDown, Check, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const CapabilitiesSection: React.FC = () => {
  const [activeAreaId, setActiveAreaId] = useState<string>(CAPABILITY_AREAS[0].id);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const activeArea = CAPABILITY_AREAS.find((a) => a.id === activeAreaId) || CAPABILITY_AREAS[0];

  return (
    <section
      id="capabilities"
      className={`relative py-28 lg:py-36 overflow-hidden border-t transition-colors duration-300 ${
        isDark ? 'bg-[#050A3A] border-white/5' : 'bg-[#F8FAFC]/90 border-slate-200/80'
      }`}
    >
      {/* Dynamic ambient lighting shifting based on active capability */}
      <div className="absolute inset-0 pointer-events-none transition-colors duration-700">
        <div
          className={`absolute top-1/4 -left-48 w-96 sm:w-[500px] h-96 sm:h-[500px] rounded-full blur-[160px] animate-subtle-float transition-opacity duration-300 ${
            isDark ? 'bg-[#315CFF]/15' : 'bg-[#315CFF]/08'
          }`}
        />
        <div
          className={`absolute bottom-10 -right-48 w-96 sm:w-[500px] h-96 sm:h-[500px] rounded-full blur-[160px] animate-subtle-float-reverse transition-opacity duration-300 ${
            isDark ? 'bg-[#C817D9]/15' : 'bg-[#C817D9]/08'
          }`}
        />
        <div
          className={`absolute inset-0 rf-grid-pattern transition-opacity duration-300 ${
            isDark ? 'opacity-20' : 'opacity-15'
          }`}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-[#315CFF]" />
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#315CFF]">
              05 / DIGITAL ECOSYSTEM
            </span>
          </div>
          <h2
            className={`font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-[0.02em] leading-tight transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-[#050A3A]'
            }`}
          >
            One Studio.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#315CFF] via-[#6C24E8] to-[#C817D9]">
              Multiple Digital Possibilities.
            </span>
          </h2>
          <p
            className={`mt-4 text-sm sm:text-base font-light leading-relaxed transition-colors duration-300 ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            Every breakthrough digital product requires an unbroken chain of craftsmanship. Explore how each
            discipline feeds into the next, powering your digital evolution from raw brand concept to sustained scale.
          </p>
        </div>

        {/* Interactive Connected Ecosystem */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Interactive Chain Flow (5 nodes: Brand -> Design -> Experience -> Technology -> Growth) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
            {CAPABILITY_AREAS.map((area, idx) => {
              const isSelected = area.id === activeAreaId;

              return (
                <div key={area.id} className="relative">
                  <button
                    type="button"
                    onClick={() => setActiveAreaId(area.id)}
                    onMouseEnter={() => setActiveAreaId(area.id)}
                    className={`w-full p-4 sm:p-5 rounded-2xl border text-left transition-all duration-300 flex items-center justify-between ${
                      isSelected
                        ? isDark
                          ? 'bg-[#08145C] border-[#315CFF] shadow-xl shadow-[#315CFF]/20 scale-[1.02]'
                          : 'bg-white border-[#315CFF] shadow-xl shadow-slate-200 scale-[1.02]'
                        : isDark
                        ? 'bg-[#08145C]/40 border-white/10 hover:border-white/20 hover:bg-[#08145C]/60 opacity-70 hover:opacity-100'
                        : 'bg-white/80 border-slate-200 hover:border-[#315CFF]/40 hover:bg-white opacity-80 hover:opacity-100 shadow-xs'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center font-mono font-bold text-xs transition-colors ${
                          isSelected
                            ? 'bg-gradient-to-r from-[#315CFF] to-[#C817D9] text-white'
                            : isDark
                            ? 'bg-white/5 text-slate-400 border border-white/10'
                            : 'bg-slate-100 text-slate-500 border border-slate-200'
                        }`}
                      >
                        0{idx + 1}
                      </div>
                      <div>
                        <div
                          className={`font-display font-extrabold text-base sm:text-lg uppercase tracking-[0.02em]r transition-colors ${
                            isDark ? 'text-white' : 'text-[#050A3A]'
                          }`}
                        >
                          {area.title}
                        </div>
                        <div
                          className={`text-[11px] font-mono ${
                            isDark ? 'text-slate-400' : 'text-slate-500'
                          }`}
                        >
                          {area.subtitle}
                        </div>
                      </div>
                    </div>

                    <div
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        isSelected
                          ? 'bg-[#C817D9] scale-125 ring-4 ring-[#C817D9]/20'
                          : isDark
                          ? 'bg-white/15'
                          : 'bg-slate-300'
                      }`}
                    />
                  </button>

                  {/* Flow arrow down to next discipline */}
                  {idx < CAPABILITY_AREAS.length - 1 && (
                    <div className="flex justify-center py-1">
                      <ArrowDown className={`w-3.5 h-3.5 ${isDark ? 'text-slate-600' : 'text-slate-400'}`} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Immersive Expanded Visual Canvas (7 cols) */}
          <div className="lg:col-span-7 animate-subtle-float-gentle">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeArea.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                className={`h-full min-h-[460px] rounded-3xl border p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden shadow-2xl transition-colors duration-300 ${
                  isDark
                    ? 'bg-gradient-to-br from-[#08145C] to-[#050A3A] border-[#315CFF]/30'
                    : 'bg-gradient-to-br from-white to-slate-50 border-slate-200/90 shadow-slate-200/70'
                }`}
              >
                {/* Accent ambient lighting */}
                <div
                  className={`absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none ${
                    isDark
                      ? 'bg-gradient-to-bl from-[#C817D9]/20 via-[#6C24E8]/20 to-transparent'
                      : 'bg-gradient-to-bl from-[#C817D9]/10 via-[#6C24E8]/10 to-transparent'
                  }`}
                />

                <div>
                  <div
                    className={`flex items-center justify-between pb-4 border-b text-xs font-mono mb-6 ${
                      isDark ? 'border-white/10 text-slate-400' : 'border-slate-200 text-slate-500'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#315CFF]" />
                      CONNECTED ECOSYSTEM NODE
                    </span>
                    <span className="text-[#C817D9] uppercase font-bold tracking-[0.02em]st">
                      {activeArea.id.toUpperCase()}
                    </span>
                  </div>

                  <span className="text-xs font-mono uppercase tracking-[0.02em]st text-[#315CFF] font-bold">
                    {activeArea.subtitle}
                  </span>

                  <h3
                    className={`mt-2 font-display font-extrabold text-3xl sm:text-5xl tracking-tight transition-colors ${
                      isDark ? 'text-white' : 'text-[#050A3A]'
                    }`}
                  >
                    {activeArea.title}
                  </h3>

                  <p
                    className={`mt-4 text-sm sm:text-base leading-relaxed font-light max-w-xl transition-colors ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {activeArea.description}
                  </p>
                </div>

                {/* Interactive Tags Matrix */}
                <div className="pt-8">
                  <div
                    className={`text-xs font-mono uppercase mb-3 tracking-[0.02em]r flex items-center gap-2 ${
                      isDark ? 'text-slate-400' : 'text-slate-500'
                    }`}
                  >
                    <Sparkles className="w-3 h-3 text-[#315CFF]" />
                    <span>Specialized Core Vectors:</span>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {activeArea.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`px-4 py-2 rounded-xl border text-xs font-medium flex items-center gap-2 shadow-xs transition-colors ${
                          isDark
                            ? 'bg-[#050A3A] border-white/15 text-white'
                            : 'bg-slate-100/90 border-slate-200 text-slate-800'
                        }`}
                      >
                        <Check className="w-3.5 h-3.5 text-[#315CFF]" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div
                    className={`mt-6 pt-4 border-t flex items-center justify-between text-[11px] font-mono ${
                      isDark ? 'border-white/10 text-slate-400' : 'border-slate-200 text-slate-500'
                    }`}
                  >
                    <span>RF ARCHITECTURAL INTEGRITY</span>
                    <span className="text-[#315CFF] font-bold">SEAMLESS HANDOVER</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
