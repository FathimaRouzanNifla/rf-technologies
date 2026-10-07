import React from 'react';
import { ArrowUpRight, MessageSquare, Linkedin, ArrowUp, Mail } from 'lucide-react';
import { SERVICES_DATA } from '../data/contentData';
import { useTheme } from '../context/ThemeContext';
import logoLight from "../assets/logo-light.png";
import logoDark from "../assets/logo-dark.png";

interface FooterProps {
  onSelectServiceTitle: (title: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectServiceTitle }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Approach', href: '#approach' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const el = document.getElementById(targetId);
    if (el) {
      const offsetTop = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  const handleServiceClick = (e: React.MouseEvent, title: string) => {
    e.preventDefault();
    onSelectServiceTitle(title);
    const el = document.getElementById('services');
    if (el) {
      const offsetTop = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <footer
      className={`relative border-t pt-20 pb-12 overflow-hidden transition-colors duration-300 ${
        isDark ? 'bg-[#050A3A] border-white/10' : 'bg-slate-100/90 border-slate-200'
      }`}
    >
      {/* Subtle bottom gradient sweep */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2637C8] via-[#6C24E8] to-[#C817D9]" />
      <div
        className={`absolute -bottom-24 left-1/2 -translate-x-1/2 w-[700px] h-[200px] rounded-full blur-[100px] pointer-events-none ${
          isDark ? 'bg-[#6C24E8]/10' : 'bg-[#6C24E8]/05'
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b ${
            isDark ? 'border-white/10' : 'border-slate-200'
          }`}
        >
          {/* Col 1: Brand & Tagline (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
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

            <p
              className={`text-sm leading-relaxed font-light max-w-sm transition-colors ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              RF Technologies is a creative technology studio focused on transforming ideas into
              thoughtful digital experiences through brand architecture, human-centered UI/UX, and
              robust modern engineering.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://wa.me/94729658842"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border text-xs font-semibold uppercase tracking-[0.02em]r transition-all hover:-translate-y-0.5 ${
                  isDark
                    ? 'bg-[#08145C] border-[#315CFF]/30 text-white hover:border-[#315CFF]'
                    : 'bg-white border-slate-200 text-[#050A3A] hover:border-[#315CFF] shadow-xs'
                }`}
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-500" />
                <span>+94 729658842</span>
              </a>

              <a
                href="https://www.linkedin.com/company/rftechnologieshq/posts/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border text-xs font-semibold uppercase tracking-[0.02em]r transition-all hover:-translate-y-0.5 ${
                  isDark
                    ? 'bg-[#08145C] border-white/10 hover:border-[#6C24E8]/50 text-slate-300 hover:text-white'
                    : 'bg-white border-slate-200 hover:border-[#6C24E8]/50 text-slate-700 hover:text-[#050A3A] shadow-xs'
                }`}
              >
                <Linkedin className="w-3.5 h-3.5 text-[#315CFF]" />
                <span>LinkedIn</span>
              </a>

              <a
                href="mailto:rftechnologies.lk@gmail.com"
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border text-xs font-semibold uppercase tracking-[0.02em]r transition-all hover:-translate-y-0.5 ${
                  isDark
                    ? 'bg-[#08145C] border-white/10 hover:border-[#6C24E8]/50 text-slate-300 hover:text-white'
                    : 'bg-white border-slate-200 hover:border-[#6C24E8]/50 text-slate-700 hover:text-[#050A3A] shadow-xs'
                }`}
              >
                <Mail className="w-3.5 h-3.5 text-[#6C24E8]" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#315CFF] font-bold">
              Navigation
            </div>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-xs transition-colors flex items-center gap-1 group ${
                      isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-[#050A3A]'
                    }`}
                  >
                    <span
                      className={`w-1 h-1 rounded-full transition-colors ${
                        isDark ? 'bg-white/20' : 'bg-slate-300'
                      } group-hover:bg-[#C817D9]`}
                    />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#315CFF] font-bold">
              Disciplines & Services
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
              {SERVICES_DATA.map((srv) => (
                <button
                  key={srv.id}
                  type="button"
                  onClick={(e) => handleServiceClick(e, srv.title)}
                  className={`text-xs text-left transition-colors flex items-center justify-between group ${
                    isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-[#050A3A]'
                  }`}
                >
                  <span className="truncate">{srv.title}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 text-[#315CFF] transition-opacity" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono ${
            isDark ? 'text-slate-400' : 'text-slate-500'
          }`}
        >
          <div>
  © {new Date().getFullYear()} RF Technologies. All rights reserved.
</div>

          <div className="flex items-center gap-6">
            <span className="text-[#315CFF] font-semibold">Ideas That Inspire. Technology That Delivers.</span>

            {/* Back to top */}
            <button
              type="button"
              onClick={scrollToTop}
              className={`p-2 rounded-xl border transition-all hover:-translate-y-0.5 ${
                isDark
                  ? 'bg-[#08145C] border-white/10 hover:border-[#315CFF]/40 text-slate-300 hover:text-white'
                  : 'bg-white border-slate-200 hover:border-[#315CFF]/40 text-slate-700 hover:text-[#050A3A] shadow-xs'
              }`}
              aria-label="Back to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
