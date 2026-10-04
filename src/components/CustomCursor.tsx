import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';
import { useTheme } from '../context/ThemeContext';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorType, setCursorType] = useState<'default' | 'pointer' | 'view' | 'drag'>('default');
  const [cursorText, setCursorText] = useState('');
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const cursorX = useSpring(-100, { stiffness: 600, damping: 35 });
  const cursorY = useSpring(-100, { stiffness: 600, damping: 35 });

  useEffect(() => {
    // Only activate on devices with fine pointer (mouse), not touch
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || prefersReducedMotion) {
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('a, button, [role="button"], input, select, textarea, [data-cursor]');
      const cursorAttr = target.closest('[data-cursor]')?.getAttribute('data-cursor');

      if (cursorAttr === 'view') {
        setCursorType('view');
        setCursorText('VIEW');
      } else if (cursorAttr === 'explore') {
        setCursorType('view');
        setCursorText('EXPLORE');
      } else if (interactive) {
        setCursorType('pointer');
        setCursorText('');
      } else {
        setCursorType('default');
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  const isExpanded = cursorType === 'pointer' || cursorType === 'view';

  // Adaptive cursor color based on active theme
  const defaultBg = isDark ? '#FFFFFF' : '#050A3A';
  const pointerBg = isDark ? 'rgba(49, 92, 255, 0.18)' : 'rgba(49, 92, 255, 0.14)';
  const pointerBorder = isDark ? 'rgba(200, 23, 217, 0.8)' : 'rgba(108, 36, 232, 0.7)';
  const defaultBorder = isDark ? 'rgba(255, 255, 255, 0.4)' : 'rgba(5, 10, 58, 0.3)';

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:block"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
      }}
    >
      <motion.div
        animate={{
          width: cursorType === 'view' ? 72 : isExpanded ? 46 : 14,
          height: cursorType === 'view' ? 72 : isExpanded ? 46 : 14,
          backgroundColor:
            cursorType === 'view'
              ? 'rgba(108, 36, 232, 0.88)'
              : isExpanded
              ? pointerBg
              : defaultBg,
          borderColor: isExpanded ? pointerBorder : defaultBorder,
          borderWidth: isExpanded ? 1.5 : 0,
        }}
        transition={{ type: 'spring', stiffness: 450, damping: 28 }}
        className="rounded-full flex items-center justify-center backdrop-blur-[2px] shadow-lg shadow-[#6C24E8]/20 transition-colors"
      >
        {cursorText && (
          <span className="text-[10px] font-display font-bold tracking-[0.02em]st text-white uppercase select-none">
            {cursorText}
          </span>
        )}
      </motion.div>
    </motion.div>
  );
};
