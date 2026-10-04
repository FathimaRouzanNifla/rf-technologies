import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowUpRight, CheckCircle2, Layers } from 'lucide-react';
import { ServiceItem } from '../types';
import { ServiceVisual } from './ServiceVisuals';
import { useTheme } from '../context/ThemeContext';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectForInquiry: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onSelectForInquiry,
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  if (!service) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className={`fixed inset-0 backdrop-blur-md transition-colors ${
            isDark ? 'bg-[#050A3A]/85' : 'bg-[#050A3A]/60'
          }`}
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className={`relative w-full max-w-2xl rounded-2xl shadow-2xl p-6 sm:p-8 z-10 overflow-hidden transition-colors duration-300 ${
            isDark
              ? 'bg-[#08145C] border border-[#315CFF]/40 text-white'
              : 'bg-white border border-slate-200 text-[#050A3A]'
          }`}
        >
          {/* Subtle Ambient Background Gradient */}
          <div
            className={`absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none ${
              isDark
                ? 'bg-gradient-to-bl from-[#C817D9]/20 via-[#6C24E8]/20 to-transparent'
                : 'bg-gradient-to-bl from-[#C817D9]/10 via-[#6C24E8]/10 to-transparent'
            }`}
          />

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className={`absolute top-5 right-5 p-2 rounded-xl border transition-colors ${
              isDark
                ? 'bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white border-white/10'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-[#050A3A] border-slate-200'
            }`}
            aria-label="Close service details"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="flex items-center gap-3 text-xs font-mono text-[#315CFF] mb-3">
            <span className="text-xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-[#315CFF] to-[#C817D9]">
              {service.number}
            </span>
            <span>// SERVICE SPECIFICATION</span>
          </div>

          <h3
            className={`font-display font-extrabold text-2xl sm:text-3xl uppercase tracking-tight ${
              isDark ? 'text-white' : 'text-[#050A3A]'
            }`}
          >
            {service.title}
          </h3>

          <p
            className={`mt-3 text-sm sm:text-base leading-relaxed font-light ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            {service.fullDesc}
          </p>

          {/* Embedded Custom Visual */}
          <div className="mt-5">
            <ServiceVisual visualType={service.visualType} isHovered={true} />
          </div>

          {/* Deliverables & Focus Areas */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div
              className={`p-4 rounded-xl border ${
                isDark ? 'bg-[#050A3A]/70 border-white/10' : 'bg-slate-50 border-slate-200'
              }`}
            >
              <div
                className={`flex items-center gap-2 text-xs font-mono font-bold uppercase mb-3 ${
                  isDark ? 'text-white' : 'text-[#050A3A]'
                }`}
              >
                <CheckCircle2 className="w-4 h-4 text-[#315CFF]" />
                <span>Deliverables</span>
              </div>
              <ul className="space-y-2">
                {service.deliverables.map((item, idx) => (
                  <li
                    key={idx}
                    className={`text-xs flex items-start gap-2 ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    <span className="text-[#6C24E8] mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={`p-4 rounded-xl border ${
                isDark ? 'bg-[#050A3A]/70 border-white/10' : 'bg-slate-50 border-slate-200'
              }`}
            >
              <div
                className={`flex items-center gap-2 text-xs font-mono font-bold uppercase mb-3 ${
                  isDark ? 'text-white' : 'text-[#050A3A]'
                }`}
              >
                <Layers className="w-4 h-4 text-[#C817D9]" />
                <span>Focus Areas</span>
              </div>
              <ul className="space-y-2">
                {service.focusAreas.map((item, idx) => (
                  <li
                    key={idx}
                    className={`text-xs flex items-start gap-2 ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    <span className="text-[#C817D9] mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Modal Footer CTAs */}
          <div
            className={`mt-8 pt-6 border-t flex flex-wrap items-center justify-between gap-4 ${
              isDark ? 'border-white/10' : 'border-slate-200'
            }`}
          >
            <button
              type="button"
              onClick={() => {
                onSelectForInquiry(service.title);
                onClose();
              }}
              className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-gradient-to-r from-[#2637C8] via-[#6C24E8] to-[#C817D9] text-white font-bold text-xs uppercase tracking-[0.02em]r flex items-center justify-center gap-2 shadow-lg shadow-[#6C24E8]/30 hover:opacity-95 hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              <span>Inquire About This Service</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onClose}
              className={`px-5 py-3 rounded-xl border text-xs font-semibold uppercase tracking-[0.02em]r transition-colors ${
                isDark
                  ? 'bg-white/5 hover:bg-white/10 text-slate-300 border-white/10'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
              }`}
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
