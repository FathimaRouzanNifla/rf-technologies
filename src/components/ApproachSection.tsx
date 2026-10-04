import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { APPROACH_STEPS } from '../data/contentData';
import { Compass, Layers, Palette, Code2, Sparkles, Rocket, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ApproachSection: React.FC = () => {
  const [activeStepIdx, setActiveStepIdx] = useState(0);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const iconMap: Record<string, React.ElementType> = {
    Compass,
    Layers,
    Palette,
    Code2,
    Sparkles,
    Rocket,
  };

  const currentStep = APPROACH_STEPS[activeStepIdx];
  const CurrentIcon = iconMap[currentStep.iconName] || Sparkles;

  return (
    <section
      id="approach"
      className={`relative py-28 lg:py-36 overflow-hidden border-t transition-colors duration-300 ${
        isDark ? 'bg-[#050A3A] border-white/5' : 'bg-[#F8FAFC]/80 border-slate-200/80'
      }`}
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-1/2 right-1/4 w-96 sm:w-[500px] h-96 sm:h-[500px] rounded-full blur-[150px] animate-subtle-float transition-opacity duration-300 ${
            isDark ? 'bg-[#6C24E8]/15' : 'bg-[#6C24E8]/08'
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
                04 / SYSTEMATIC PROCESS
              </span>
            </div>
            <h2
              className={`font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-[0.02em] transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-[#050A3A]'
              }`}
            >
              From Idea 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#315CFF] via-[#6C24E8] to-[#C817D9]">
                To Impact.
              </span>
            </h2>
          </div>
          <p
            className={`text-sm sm:text-base max-w-md font-light leading-relaxed border-l pl-4 transition-colors duration-300 ${
              isDark ? 'text-slate-300 border-white/15' : 'text-slate-600 border-slate-300'
            }`}
          >
            A continuous, collaborative path designed to eliminate guesswork and turn raw potential
            into refined, production-grade reality.
          </p>
        </div>

        {/* Interactive Stepper Navigation Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 mb-10">
          {APPROACH_STEPS.map((step, idx) => {
            const isActive = activeStepIdx === idx;
            const StepIcon = iconMap[step.iconName] || Sparkles;

            return (
              <button
                key={step.number}
                type="button"
                onClick={() => setActiveStepIdx(idx)}
                className={`relative rounded-xl p-3.5 sm:p-4 text-left transition-all duration-300 border flex flex-col justify-between overflow-hidden hover:-translate-y-0.5 ${
                  isActive
                    ? isDark
                      ? 'bg-[#08145C] border-[#315CFF] shadow-lg shadow-[#315CFF]/20'
                      : 'bg-white border-[#315CFF] shadow-md shadow-slate-200'
                    : isDark
                    ? 'bg-[#08145C]/40 border-white/10 hover:border-white/20 hover:bg-[#08145C]/70'
                    : 'bg-white/80 border-slate-200 hover:border-[#315CFF]/40 hover:bg-white shadow-xs'
                }`}
              >
                {/* Active top line */}
                {isActive && (
                  <motion.div
                    layoutId="approachPillLine"
                    className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#315CFF] to-[#C817D9]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-mono text-xs font-bold ${
                      isActive ? 'text-[#315CFF]' : isDark ? 'text-slate-500' : 'text-slate-400'
                    }`}
                  >
                    {step.number}
                  </span>
                  <StepIcon
                    className={`w-4 h-4 ${
                      isActive ? 'text-[#C817D9]' : isDark ? 'text-slate-500' : 'text-slate-400'
                    }`}
                  />
                </div>
                <div
                  className={`font-display font-bold text-xs sm:text-sm uppercase tracking-[0.02em]r transition-colors ${
                    isDark ? 'text-white' : 'text-[#050A3A]'
                  }`}
                >
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Stage Showcase Board */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep.number}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className={`rounded-3xl border p-8 sm:p-12 shadow-2xl relative overflow-hidden transition-colors duration-300 ${
              isDark
                ? 'bg-gradient-to-br from-[#08145C] to-[#050A3A] border-[#315CFF]/30'
                : 'bg-gradient-to-br from-white to-slate-50 border-slate-200/90 shadow-slate-200/60'
            }`}
          >
            {/* Ambient inner glow */}
            <div
              className={`absolute top-0 right-0 w-96 h-96 pointer-events-none ${
                isDark
                  ? 'bg-[radial-gradient(circle_at_70%_20%,rgba(200,23,217,0.2),transparent_70%)]'
                  : 'bg-[radial-gradient(circle_at_70%_20%,rgba(200,23,217,0.1),transparent_70%)]'
              }`}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Number, Title, Detailed Description */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#315CFF] to-[#C817D9]">
                    {currentStep.number}
                  </span>
                  <div className={`h-6 w-[1px] ${isDark ? 'bg-white/20' : 'bg-slate-300'}`} />
                  <span className="text-xs font-mono tracking-[0.02em]st text-[#315CFF] uppercase font-bold">
                    STAGE {activeStepIdx + 1} OF 6
                  </span>
                </div>

                <h3
                  className={`font-display font-extrabold text-2xl sm:text-4xl tracking-tight transition-colors ${
                    isDark ? 'text-white' : 'text-[#050A3A]'
                  }`}
                >
                  {currentStep.title} — {currentStep.summary}
                </h3>

                <p
                  className={`text-sm sm:text-base leading-relaxed font-light transition-colors ${
                    isDark ? 'text-slate-300' : 'text-slate-600'
                  }`}
                >
                  {currentStep.details}
                </p>

                {/* Key Deliverables Chips */}
                <div className="pt-2">
                  <div
                    className={`text-xs font-mono uppercase mb-3 tracking-[0.02em]r ${
                      isDark ? 'text-slate-400' : 'text-slate-500'
                    }`}
                  >
                    Stage Deliverables & Verification:
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {currentStep.deliverables.map((deliv, i) => (
                      <span
                        key={i}
                        className={`px-3.5 py-1.5 rounded-lg border text-xs font-mono flex items-center gap-2 transition-colors ${
                          isDark
                            ? 'bg-[#050A3A] border-white/15 text-slate-200'
                            : 'bg-slate-100/90 border-slate-200 text-slate-700'
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#315CFF]" />
                        {deliv}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Navigation to next step */}
                <div className="pt-4 flex items-center gap-4">
                  {activeStepIdx < APPROACH_STEPS.length - 1 ? (
                    <button
                      type="button"
                      onClick={() => setActiveStepIdx(activeStepIdx + 1)}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.02em]r text-[#315CFF] hover:text-[#C817D9] transition-colors"
                    >
                      <span>Proceed to Next Stage: {APPROACH_STEPS[activeStepIdx + 1].title}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <span className="text-xs font-mono text-emerald-500 font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      COMPLETE CYCLE — READY FOR LAUNCH
                    </span>
                  )}
                </div>
              </div>

              {/* Right Column: Visual Stage Blueprint Abstract */}
              <div className="lg:col-span-5 flex items-center justify-center">
                <div
                  className={`relative w-full max-w-sm aspect-square rounded-2xl border p-6 flex flex-col justify-between shadow-xl animate-subtle-float-slow transition-colors duration-300 ${
                    isDark
                      ? 'bg-[#050A3A] border-white/10'
                      : 'bg-white border-slate-200 shadow-slate-200'
                  }`}
                >
                  <div
                    className={`flex items-center justify-between text-xs font-mono pb-2 border-b ${
                      isDark ? 'border-white/10 text-slate-400' : 'border-slate-200 text-slate-500'
                    }`}
                  >
                    <span>ARCHITECTURAL STAGE</span>
                    <span className="text-[#315CFF] font-bold">V1.0</span>
                  </div>

                  <div className="my-auto flex flex-col items-center justify-center text-center py-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#2637C8] via-[#6C24E8] to-[#C817D9] p-[2px] mb-4 shadow-lg shadow-[#6C24E8]/30">
                      <div
                        className={`w-full h-full rounded-[14px] flex items-center justify-center ${
                          isDark ? 'bg-[#08145C]' : 'bg-white'
                        }`}
                      >
                        <CurrentIcon className="w-9 h-9 text-[#315CFF]" />
                      </div>
                    </div>
                    <div
                      className={`font-display font-bold text-lg uppercase ${
                        isDark ? 'text-white' : 'text-[#050A3A]'
                      }`}
                    >
                      {currentStep.title}
                    </div>
                    <div
                      className={`text-xs font-mono mt-1 max-w-[200px] ${
                        isDark ? 'text-slate-400' : 'text-slate-500'
                      }`}
                    >
                      {currentStep.summary}
                    </div>
                  </div>

                  <div
                    className={`p-3 rounded-lg border flex items-center justify-between text-[10px] font-mono ${
                      isDark
                        ? 'bg-[#08145C] border-white/5 text-slate-300'
                        : 'bg-slate-50 border-slate-200 text-slate-700'
                    }`}
                  >
                    <span>RIGOROUS QA</span>
                    <span className="text-[#C817D9] font-bold">100% TRANSPARENCY</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
