import React, { useState, useEffect } from 'react';
import { RFLogo } from './RFLogo';
import { ThemeToggle } from './ThemeToggle';
import { ArrowUpRight, Menu, X, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../context/ThemeContext';

import logoLight from "../assets/logo-light.png";
import logoDark from "../assets/logo-dark.png";

interface NavbarProps {
  onOpenContactModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setIsScrolled(scrollY > 40);

      // Section tracking
      const sections = [
        'home',
        'about',
        'services',
        'why-rf',
        'approach',
        'capabilities',
        'vision',
        'contact',
      ];

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);

        if (el) {
          const rect = el.getBoundingClientRect();

          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'approach', label: 'Approach', href: '#approach' },
    { id: 'capabilities', label: 'Capabilities', href: '#capabilities' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const targetId = href.replace('#', '');
    const targetEl = document.getElementById(targetId);

    if (targetEl) {
      const offsetTop =
        targetEl.getBoundingClientRect().top + window.scrollY - 80;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        id="main-navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? isDark
              ? 'py-3.5 bg-[#050A3A]/90 backdrop-blur-md border-b border-[#315CFF]/20 shadow-2xl shadow-[#050A3A]/80'
              : 'py-3.5 bg-white/90 backdrop-blur-md border-b border-slate-200/90 shadow-md shadow-slate-200/40'
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-3.5 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#315CFF] transition-transform"
            aria-label="RF Technologies Home"
          >
            <img
              src={theme === "dark" ? logoDark : logoLight}
              alt="RF Technologies"
              className="h-12 w-auto object-contain transition-opacity duration-300"
            />

            <span
              className={`font-display font-bold text-xl tracking-tight transition-colors duration-300 ${
                theme === "dark"
                  ? "text-white"
                  : "text-[#050A3A]"
              }`}
            >
              RF Technologies
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav
            className={`hidden md:flex items-center gap-1 lg:gap-1.5 px-3 py-1.5 rounded-full border backdrop-blur-sm transition-colors duration-300 ${
              isDark
                ? 'bg-[#08145C]/50 border-white/10'
                : 'bg-white/80 border-slate-200/90 shadow-xs'
            }`}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3.5 py-1.5 text-xs lg:text-sm font-semibold tracking-[0.02em] uppercase transition-colors rounded-full ${
                    isActive
                      ? 'text-white'
                      : isDark
                        ? 'text-slate-300 hover:text-white'
                        : 'text-slate-600 hover:text-[#050A3A]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-[#2637C8] via-[#6C24E8] to-[#C817D9] -z-10 shadow-sm shadow-[#6C24E8]/35"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}

                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTA + Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="relative group overflow-hidden rounded-full p-[1.5px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#315CFF] transition-transform duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#2637C8] via-[#6C24E8] to-[#C817D9] transition-all duration-300 group-hover:opacity-100 opacity-90" />

              <span
                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.02em] transition-all duration-300 group-hover:bg-transparent group-hover:text-white ${
                  isDark
                    ? 'bg-[#08145C] text-white'
                    : 'bg-white text-[#050A3A] shadow-xs'
                }`}
              >
                <span>Let's Talk</span>

                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          </div>

          {/* Mobile Menu Controls */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2.5 rounded-xl border transition-colors focus:outline-none focus:ring-2 focus:ring-[#315CFF] ${
                isDark
                  ? 'bg-[#08145C] text-slate-200 border-white/10 hover:border-[#315CFF]/50'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-[#315CFF]/50 shadow-xs'
              }`}
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Animated Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className={`fixed inset-0 z-40 md:hidden flex flex-col justify-between pt-28 pb-8 px-6 backdrop-blur-xl transition-colors duration-300 ${
              isDark
                ? 'bg-[#050A3A]/95 text-white'
                : 'bg-white/95 text-[#050A3A]'
            }`}
          >
            <div className="flex flex-col space-y-3">
              <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#315CFF] mb-2 font-bold">
                Navigation
              </div>

              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.05 * idx,
                    duration: 0.3,
                  }}
                  className={`flex items-center justify-between py-3 border-b text-xl font-display font-bold transition-colors ${
                    isDark
                      ? 'border-white/10 text-white hover:text-[#315CFF]'
                      : 'border-slate-200 text-[#050A3A] hover:text-[#315CFF]'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="text-xs font-mono text-slate-400">
                    0{idx + 1}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Mobile Footer CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.35,
                duration: 0.3,
              }}
              className={`space-y-4 pt-6 border-t ${
                isDark
                  ? 'border-white/10'
                  : 'border-slate-200'
              }`}
            >
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 bg-gradient-to-r from-[#2637C8] via-[#6C24E8] to-[#C817D9] text-white font-bold uppercase tracking-[0.02em] text-sm shadow-lg shadow-[#6C24E8]/25 transition-transform active:scale-[0.98]"
              >
                <span>Start A Conversation</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/94729658842"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 px-6 rounded-xl flex items-center justify-center gap-2 border font-semibold text-xs tracking-[0.02em] uppercase transition-colors ${
                  isDark
                    ? 'bg-[#08145C] border-[#315CFF]/30 text-white hover:border-[#C817D9]/50'
                    : 'bg-slate-100 border-slate-200 text-[#050A3A] hover:border-[#315CFF]'
                }`}
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#315CFF]" />
                <span>WhatsApp: +94 729658842</span>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};