import React from 'react';
import { useTheme } from '../context/ThemeContext';

interface RFLogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'mark-only';
  showTagline?: boolean;
}

export const RFLogo: React.FC<RFLogoProps> = ({
  className = '',
  variant = 'compact',
  showTagline = false,
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  if (variant === 'mark-only') {
    return (
      <div className={`relative inline-flex items-center justify-center ${className}`}>
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="rfMarkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2637C8" />
              <stop offset="30%" stopColor="#315CFF" />
              <stop offset="65%" stopColor="#6C24E8" />
              <stop offset="85%" stopColor="#8A20E8" />
              <stop offset="100%" stopColor="#C817D9" />
            </linearGradient>
            <linearGradient id="rfMarkBorder" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#315CFF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#C817D9" stopOpacity="0.7" />
            </linearGradient>
          </defs>
          {/* Subtle back ambient glow */}
          <rect
            x="10"
            y="10"
            width="80"
            height="80"
            rx="22"
            fill="#6C24E8"
            fillOpacity={isDark ? 0.25 : 0.15}
            filter="blur(6px)"
          />
          {/* Base plate */}
          <rect
            x="6"
            y="6"
            width="88"
            height="88"
            rx="20"
            fill={isDark ? '#08145C' : '#FFFFFF'}
            stroke="url(#rfMarkBorder)"
            strokeWidth="1.8"
          />
          {/* Geometric R and F shape */}
          <path
            d="M 28 26 V 74 H 40 V 55 H 51 L 64 74 H 78 L 63 53 C 71 50 75 44 75 37 C 75 28 67 26 55 26 H 28 Z M 40 37 H 53 C 59 37 63 39 63 43 C 63 47 59 49 53 49 H 40 V 37 Z"
            fill="url(#rfMarkGrad)"
          />
          {/* Accent dot / geometry */}
          <circle cx="71" cy="27" r="3" fill="#C817D9" />
        </svg>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Mark */}
      <div className="relative w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="rfNavbarMarkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2637C8" />
              <stop offset="35%" stopColor="#315CFF" />
              <stop offset="65%" stopColor="#6C24E8" />
              <stop offset="100%" stopColor="#C817D9" />
            </linearGradient>
            <linearGradient id="rfNavbarBorder" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#315CFF" stopOpacity={isDark ? 0.8 : 0.6} />
              <stop offset="100%" stopColor="#C817D9" stopOpacity={isDark ? 0.7 : 0.5} />
            </linearGradient>
          </defs>
          <rect
            x="8"
            y="8"
            width="84"
            height="84"
            rx="20"
            fill={isDark ? '#08145C' : '#FFFFFF'}
            stroke="url(#rfNavbarBorder)"
            strokeWidth="1.7"
            className="transition-colors duration-300"
          />
          <path
            d="M 28 26 V 74 H 40 V 55 H 51 L 64 74 H 78 L 63 53 C 71 50 75 44 75 37 C 75 28 67 26 55 26 H 28 Z M 40 37 H 53 C 59 37 63 39 63 43 C 63 47 59 49 53 49 H 40 V 37 Z"
            fill="url(#rfNavbarMarkGrad)"
          />
          <circle cx="71" cy="27" r="3" fill="#C817D9" />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col">
        <div className="flex items-baseline tracking-tight">
          <span
            className={`font-display font-extrabold text-lg sm:text-xl tracking-[0.12em] transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-[#050A3A]'
            }`}
          >
            RF
          </span>
          <span className="ml-1.5 font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#315CFF] via-[#8A20E8] to-[#C817D9] text-base sm:text-lg tracking-[0.18em]">
            TECHNOLOGIES
          </span>
        </div>
        {showTagline && (
          <span
            className={`text-[9px] sm:text-[10px] tracking-[0.2em] uppercase font-semibold mt-0.5 transition-colors duration-300 ${
              isDark ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            Ideas That Inspire. Technology That Delivers.
          </span>
        )}
      </div>
    </div>
  );
};
