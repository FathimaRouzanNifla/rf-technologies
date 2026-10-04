import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'motion/react';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative inline-flex items-center justify-center p-2 rounded-full border transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#315CFF] ${
        isDark
          ? 'bg-[#08145C]/80 border-white/15 text-[#A5B4FC] hover:text-white hover:border-[#315CFF]/60 hover:bg-[#08145C]'
          : 'bg-white/85 border-slate-200 text-[#2637C8] hover:text-[#6C24E8] hover:border-[#315CFF]/50 hover:bg-white shadow-sm'
      } ${className}`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -45, scale: 0.7, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        exit={{ rotate: 45, scale: 0.7, opacity: 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="w-4 h-4 flex items-center justify-center"
      >
        {isDark ? (
          <Sun className="w-4 h-4 text-amber-300" />
        ) : (
          <Moon className="w-4 h-4 text-[#315CFF]" />
        )}
      </motion.div>
    </button>
  );
};
