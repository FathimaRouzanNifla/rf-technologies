import React from 'react';
import { useTheme } from '../context/ThemeContext';

interface ServiceVisualProps {
  visualType: string;
  isHovered?: boolean;
}

export const ServiceVisual: React.FC<ServiceVisualProps> = ({ visualType, isHovered = false }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const containerBg = isDark
    ? 'bg-[#050A3A] border-white/10'
    : 'bg-slate-50 border-slate-200/90 shadow-inner';
  const textMuted = isDark ? 'text-slate-400' : 'text-slate-500';
  const cardBgInner = isDark ? 'bg-[#08145C]' : 'bg-white';
  const borderInner = isDark ? 'border-white/5' : 'border-slate-200/80 shadow-xs';

  switch (visualType) {
    case 'logo-geometry':
      return (
        <div className={`relative w-full h-44 rounded-xl border p-4 flex items-center justify-center overflow-hidden transition-colors duration-300 ${containerBg}`}>
          <div className={`absolute inset-0 rf-grid-pattern ${isDark ? 'opacity-60' : 'opacity-25'}`} />
          <svg viewBox="0 0 200 140" className="w-full h-full relative z-10" fill="none">
            <circle cx="100" cy="70" r="48" stroke="#315CFF" strokeWidth="1" strokeDasharray="3 3" opacity={isDark ? '0.6' : '0.4'} />
            <circle cx="100" cy="70" r="32" stroke="#6C24E8" strokeWidth="1" strokeDasharray="2 2" opacity={isDark ? '0.7' : '0.5'} />
            <circle cx="100" cy="70" r="16" stroke="#C817D9" strokeWidth="1" opacity={isDark ? '0.8' : '0.6'} />
            <line x1="40" y1="20" x2="160" y2="120" stroke="#315CFF" strokeWidth="0.8" opacity={isDark ? '0.4' : '0.3'} />
            <line x1="40" y1="120" x2="160" y2="20" stroke="#C817D9" strokeWidth="0.8" opacity={isDark ? '0.4' : '0.3'} />
            <path
              d="M 85 45 V 95 H 98 V 74 H 108 L 120 95 H 134 L 120 73 C 128 70 133 64 133 56 C 133 47 125 45 110 45 H 85 Z M 98 55 H 110 C 115 55 119 57 119 61 C 119 65 115 67 110 67 H 98 V 55 Z"
              fill="url(#logoGeomGrad)"
              className="transition-transform duration-500"
              style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)', transformOrigin: 'center' }}
            />
            <defs>
              <linearGradient id="logoGeomGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#315CFF" />
                <stop offset="50%" stopColor="#6C24E8" />
                <stop offset="100%" stopColor="#C817D9" />
              </linearGradient>
            </defs>
          </svg>
          <span className={`absolute bottom-2.5 right-3 text-[9px] font-mono ${textMuted}`}>
            RATIO 1:1.618
          </span>
        </div>
      );

    case 'graphic-editorial':
      return (
        <div className={`relative w-full h-44 rounded-xl border p-4 flex flex-col justify-between overflow-hidden transition-colors duration-300 ${containerBg}`}>
          <div className={`flex items-center justify-between border-b pb-2 ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
            <span className="text-[10px] font-mono text-[#315CFF] uppercase tracking-[0.02em]st font-bold">
              VOL. 01 / EDITORIAL
            </span>
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6C24E8]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#C817D9]" />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-2 my-auto items-center">
            <div className="col-span-7 space-y-1.5">
              <div className="h-4 w-3/4 bg-gradient-to-r from-[#2637C8] to-[#6C24E8] rounded-sm" />
              <div className={`h-2 w-full rounded-sm ${isDark ? 'bg-white/10' : 'bg-slate-300/80'}`} />
              <div className={`h-2 w-4/5 rounded-sm ${isDark ? 'bg-white/10' : 'bg-slate-300/80'}`} />
              <div className={`h-2 w-1/2 rounded-sm ${isDark ? 'bg-white/10' : 'bg-slate-300/80'}`} />
            </div>
            <div className="col-span-5 h-20 rounded-lg bg-gradient-to-tr from-[#2637C8] via-[#6C24E8] to-[#C817D9] p-[1px]">
              <div className={`w-full h-full rounded-[7px] p-2 flex flex-col justify-between ${cardBgInner}`}>
                <div className={`text-[8px] font-mono ${textMuted}`}>ART_DIR</div>
                <div className="w-6 h-6 rounded-full bg-[#6C24E8]/20 text-[#6C24E8] flex items-center justify-center text-[10px] font-bold">
                  RF
                </div>
              </div>
            </div>
          </div>
          <div className={`flex items-center justify-between text-[9px] font-mono pt-1 ${textMuted}`}>
            <span>GRID SYSTEM</span>
            <span className="text-[#C817D9] font-semibold">TYPOGRAPHIC SCALE</span>
          </div>
        </div>
      );

    case 'brand-identity':
      return (
        <div className={`relative w-full h-44 rounded-xl border p-4 flex items-center justify-center overflow-hidden transition-colors duration-300 ${containerBg}`}>
          <div className="relative w-full max-w-[240px] h-32">
            <div className={`absolute top-0 left-2 w-48 h-24 rounded-md border p-2 shadow-lg transition-colors ${
              isDark ? 'bg-[#08145C] border-[#315CFF]/30' : 'bg-white border-slate-200 shadow-slate-200'
            }`}>
              <div className="w-12 h-1.5 rounded-full bg-[#315CFF]" />
              <div className="mt-2 space-y-1">
                <div className={`w-full h-1 rounded-full ${isDark ? 'bg-white/10' : 'bg-slate-200'}`} />
                <div className={`w-4/5 h-1 rounded-full ${isDark ? 'bg-white/10' : 'bg-slate-200'}`} />
              </div>
            </div>
            <div className={`absolute bottom-1 right-2 w-36 h-20 rounded-lg border p-2.5 shadow-xl flex flex-col justify-between transition-colors ${
              isDark ? 'bg-gradient-to-br from-[#0c186e] to-[#08145C] border-[#C817D9]/40' : 'bg-gradient-to-br from-white to-slate-50 border-[#C817D9]/30 shadow-slate-300'
            }`}>
              <div className="flex items-center justify-between">
                <span className={`text-[9px] font-display font-extrabold ${isDark ? 'text-white' : 'text-[#050A3A]'}`}>RF</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C817D9]" />
              </div>
              <div>
                <div className="h-1.5 w-16 bg-gradient-to-r from-[#315CFF] to-[#C817D9] rounded-full" />
                <div className={`mt-1 text-[7px] font-mono ${textMuted}`}>DESIGN TOKENS</div>
              </div>
            </div>
          </div>
        </div>
      );

    case 'ui-ux':
      return (
        <div className={`relative w-full h-44 rounded-xl border p-3 flex flex-col justify-between overflow-hidden transition-colors duration-300 ${containerBg}`}>
          <div className={`flex items-center justify-between border-b pb-2 ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#315CFF]" />
              <span className="w-2 h-2 rounded-full bg-[#6C24E8]" />
              <span className="w-2 h-2 rounded-full bg-[#C817D9]" />
            </div>
            <span className={`text-[9px] font-mono ${textMuted}`}>UX_FLOW_PROTOTYPE</span>
          </div>
          <div className="grid grid-cols-3 gap-2 my-auto">
            <div className={`p-2 rounded-lg border space-y-1.5 ${cardBgInner} ${borderInner}`}>
              <div className="w-full h-2 rounded bg-[#315CFF]/30" />
              <div className={`w-3/4 h-1.5 rounded ${isDark ? 'bg-white/10' : 'bg-slate-200'}`} />
              <div className={`w-1/2 h-1.5 rounded ${isDark ? 'bg-white/10' : 'bg-slate-200'}`} />
            </div>
            <div className={`p-2 rounded-lg border space-y-1.5 shadow-md ${cardBgInner} border-[#6C24E8]/40 shadow-[#6C24E8]/10`}>
              <div className="w-full h-2 rounded bg-[#6C24E8]" />
              <div className={`w-4/5 h-1.5 rounded ${isDark ? 'bg-white/20' : 'bg-slate-300'}`} />
              <div className={`w-2/3 h-1.5 rounded ${isDark ? 'bg-white/20' : 'bg-slate-300'}`} />
            </div>
            <div className={`p-2 rounded-lg border space-y-1.5 ${cardBgInner} ${borderInner}`}>
              <div className="w-full h-2 rounded bg-[#C817D9]/30" />
              <div className={`w-3/4 h-1.5 rounded ${isDark ? 'bg-white/10' : 'bg-slate-200'}`} />
              <div className={`w-1/2 h-1.5 rounded ${isDark ? 'bg-white/10' : 'bg-slate-200'}`} />
            </div>
          </div>
          <div className={`flex items-center justify-between text-[9px] font-mono ${textMuted}`}>
            <span>MICRO-INTERACTIONS</span>
            <span className="text-[#315CFF] font-semibold">WCAG AA COMPLIANT</span>
          </div>
        </div>
      );

    case 'web-design':
      return (
        <div className={`relative w-full h-44 rounded-xl border p-3 flex flex-col justify-between overflow-hidden transition-colors duration-300 ${containerBg}`}>
          <div className={`flex items-center justify-between rounded-t-lg px-2.5 py-1.5 border-b ${
            isDark ? 'bg-[#08145C] border-white/5' : 'bg-slate-100 border-slate-200'
          }`}>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500/80" />
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80" />
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
            </div>
            <div className={`px-2 py-0.5 rounded text-[8px] font-mono ${
              isDark ? 'bg-black/40 text-slate-400' : 'bg-white text-slate-600 border border-slate-200'
            }`}>
              https://rftechnologies.com
            </div>
            <div className="w-3" />
          </div>
          <div className="p-2 space-y-2">
            <div className={`h-6 rounded border flex items-center px-2 ${
              isDark
                ? 'bg-gradient-to-r from-[#2637C8]/40 via-[#6C24E8]/40 to-[#C817D9]/40 border-white/10'
                : 'bg-gradient-to-r from-[#315CFF]/15 via-[#6C24E8]/15 to-[#C817D9]/15 border-slate-200'
            }`}>
              <div className="w-16 h-2 rounded-full bg-gradient-to-r from-[#315CFF] to-[#6C24E8]" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className={`h-10 rounded p-1.5 space-y-1 border ${cardBgInner} ${borderInner}`}>
                <div className="w-3/4 h-1.5 bg-[#315CFF] rounded-full" />
                <div className={`w-1/2 h-1 rounded-full ${isDark ? 'bg-white/15' : 'bg-slate-200'}`} />
              </div>
              <div className={`h-10 rounded p-1.5 space-y-1 border ${cardBgInner} ${borderInner}`}>
                <div className="w-2/3 h-1.5 bg-[#C817D9] rounded-full" />
                <div className={`w-1/3 h-1 rounded-full ${isDark ? 'bg-white/15' : 'bg-slate-200'}`} />
              </div>
            </div>
          </div>
          <div className={`text-[9px] font-mono flex justify-between px-1 ${textMuted}`}>
            <span>RESPONSIVE VIEWPORTS</span>
            <span className="text-[#315CFF] font-semibold">1440PX • 768PX • 375PX</span>
          </div>
        </div>
      );

    case 'web-dev':
      return (
        <div className={`relative w-full h-44 rounded-xl border p-3 flex flex-col justify-between overflow-hidden font-mono text-[10px] transition-colors duration-300 ${containerBg}`}>
          <div className={`flex items-center justify-between border-b pb-1.5 ${
            isDark ? 'border-white/10 text-slate-400' : 'border-slate-200 text-slate-500'
          }`}>
            <span className="text-[#315CFF] font-bold">Engine.tsx</span>
            <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#315CFF]/15 text-[#315CFF] font-bold">
              TYPESCRIPT 5.0
            </span>
          </div>
          <div className={`space-y-1 py-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
            <div>
              <span className="text-[#C817D9] font-bold">const</span>{' '}
              <span className="text-[#315CFF] font-bold">deploySolution</span> ={' '}
              <span className="text-amber-500 font-bold">async</span> () =&gt; &#123;
            </div>
            <div className={`pl-3 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              <span className="text-[#6C24E8] font-bold">await</span> architectModule(&#123;
            </div>
            <div className="pl-6 text-emerald-600 font-semibold">performance: "99+", vitals: "green"</div>
            <div className={`pl-3 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>&#125;);</div>
            <div>&#125;;</div>
          </div>
          <div className={`flex items-center justify-between text-[9px] pt-1 border-t ${
            isDark ? 'border-white/5 text-slate-400' : 'border-slate-200 text-slate-500'
          }`}>
            <span className="text-emerald-500 font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              BUILD: READY
            </span>
            <span className="text-[#C817D9] font-bold">FAST VITE BUNDLE</span>
          </div>
        </div>
      );

    case 'mobile-app':
      return (
        <div className={`relative w-full h-44 rounded-xl border p-3 flex items-center justify-center overflow-hidden transition-colors duration-300 ${containerBg}`}>
          <div className={`relative w-28 h-36 rounded-2xl border-2 p-1.5 shadow-2xl flex flex-col justify-between transition-colors ${
            isDark ? 'bg-[#08145C] border-slate-600/60 shadow-[#050A3A]' : 'bg-white border-slate-400/80 shadow-slate-300'
          }`}>
            <div className="w-10 h-1.5 rounded-full bg-slate-900 mx-auto mb-1" />
            <div className="space-y-1.5 flex-1 p-1">
              <div className="h-6 rounded-md bg-gradient-to-r from-[#315CFF] to-[#6C24E8] p-1 flex items-center">
                <div className="w-3 h-3 rounded-full bg-white/40" />
              </div>
              <div className="grid grid-cols-2 gap-1">
                <div className={`h-8 rounded border ${isDark ? 'bg-white/5 border-white/5' : 'bg-slate-100 border-slate-200'}`} />
                <div className={`h-8 rounded border ${isDark ? 'bg-white/5 border-white/5' : 'bg-slate-100 border-slate-200'}`} />
              </div>
              <div className="h-6 rounded bg-[#C817D9]/15 border border-[#C817D9]/30" />
            </div>
            <div className={`w-8 h-1 rounded-full mx-auto ${isDark ? 'bg-white/30' : 'bg-slate-400'}`} />
          </div>
          <div className={`absolute top-3 right-3 text-[9px] font-mono text-right ${textMuted}`}>
            <div>iOS / ANDROID</div>
            <div className="text-[#315CFF] font-bold">GESTURE ENGINE</div>
          </div>
        </div>
      );

    case 'software-dev':
      return (
        <div className={`relative w-full h-44 rounded-xl border p-3 flex flex-col justify-between overflow-hidden transition-colors duration-300 ${containerBg}`}>
          <div className={`flex items-center justify-between border-b pb-1.5 ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
            <span className="text-[9px] font-mono text-[#6C24E8] uppercase font-bold">
              SYS_METRICS_DASHBOARD
            </span>
            <span className="text-[9px] font-mono text-emerald-500 font-bold">99.98% UP</span>
          </div>
          <div className="grid grid-cols-4 gap-1.5 my-auto">
            <div className={`col-span-1 h-16 rounded border p-1 flex flex-col justify-between ${cardBgInner} ${borderInner}`}>
              <div className={`text-[7px] font-mono ${textMuted}`}>LOAD</div>
              <div className={`text-xs font-bold font-mono ${isDark ? 'text-white' : 'text-[#050A3A]'}`}>0.08s</div>
            </div>
            <div className={`col-span-3 h-16 rounded border p-1 flex flex-col justify-between ${cardBgInner} ${borderInner}`}>
              <div className={`flex justify-between text-[7px] font-mono ${textMuted}`}>
                <span>EVENT STREAM</span>
                <span className="text-[#C817D9] font-bold">REST / GRAPHQL</span>
              </div>
              <div className="flex items-end gap-1 h-7 pt-1">
                {[30, 50, 40, 75, 60, 90, 70, 85, 95].map((h, i) => (
                  <div
                    key={i}
                    style={{ height: `${h}%` }}
                    className="flex-1 rounded-t-sm bg-gradient-to-t from-[#2637C8] to-[#C817D9]"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className={`flex justify-between text-[9px] font-mono ${textMuted}`}>
            <span>MODULAR ARCHITECTURE</span>
            <span className="text-[#315CFF] font-semibold">SCALE-READY</span>
          </div>
        </div>
      );

    case 'seo-backlinks':
      return (
        <div className={`relative w-full h-44 rounded-xl border p-3 flex flex-col justify-between overflow-hidden transition-colors duration-300 ${containerBg}`}>
          <div className={`flex items-center justify-between border-b pb-1.5 ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
            <span className="text-[9px] font-mono text-[#315CFF] uppercase font-bold">
              TOPICAL_AUTHORITY_GRAPH
            </span>
            <span className="text-[9px] font-mono text-[#C817D9] font-bold">SCHEMA.ORG</span>
          </div>
          <div className="relative w-full h-20 flex items-center justify-center">
            <svg viewBox="0 0 180 80" className="w-full h-full" fill="none">
              <line x1="90" y1="40" x2="30" y2="20" stroke="#315CFF" strokeWidth="1" strokeDasharray="2 2" />
              <line x1="90" y1="40" x2="150" y2="20" stroke="#6C24E8" strokeWidth="1" strokeDasharray="2 2" />
              <line x1="90" y1="40" x2="45" y2="65" stroke="#C817D9" strokeWidth="1" />
              <line x1="90" y1="40" x2="135" y2="65" stroke="#315CFF" strokeWidth="1" />
              <circle cx="90" cy="40" r="14" fill={isDark ? '#08145C' : '#FFFFFF'} stroke="#C817D9" strokeWidth="2" />
              <text x="90" y="43" textAnchor="middle" fill={isDark ? '#FFFFFF' : '#050A3A'} fontSize="7" fontWeight="bold" fontFamily="monospace">
                CORE
              </text>
              <circle cx="30" cy="20" r="7" fill="#315CFF" />
              <circle cx="150" cy="20" r="7" fill="#6C24E8" />
              <circle cx="45" cy="65" r="6" fill="#8A20E8" />
              <circle cx="135" cy="65" r="6" fill="#C817D9" />
            </svg>
          </div>
          <div className={`flex justify-between text-[9px] font-mono ${textMuted}`}>
            <span>INDEX SPEED</span>
            <span className="text-emerald-500 font-bold">STRUCTURED CRAWL</span>
          </div>
        </div>
      );

    case 'digital-marketing':
      return (
        <div className={`relative w-full h-44 rounded-xl border p-3 flex flex-col justify-between overflow-hidden transition-colors duration-300 ${containerBg}`}>
          <div className={`flex items-center justify-between border-b pb-1.5 ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
            <span className="text-[9px] font-mono text-[#C817D9] uppercase font-bold">
              CAMPAIGN_RESONANCE
            </span>
            <span className="text-[9px] font-mono text-[#315CFF] font-bold">MULTI-SURFACE</span>
          </div>
          <div className="space-y-2 my-auto">
            <div className="space-y-1">
              <div className={`flex justify-between text-[8px] font-mono ${textMuted}`}>
                <span>AUDIENCE ENGAGEMENT</span>
                <span className={isDark ? 'text-white font-bold' : 'text-[#050A3A] font-bold'}>ORGANIC GROWTH</span>
              </div>
              <div className={`w-full h-2 rounded-full overflow-hidden ${isDark ? 'bg-white/10' : 'bg-slate-200'}`}>
                <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-[#315CFF] via-[#6C24E8] to-[#C817D9]" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-1.5 pt-1">
              <div className={`p-1 rounded border text-center ${cardBgInner} ${borderInner}`}>
                <div className={`text-[7px] font-mono ${textMuted}`}>POSITION</div>
                <div className={`text-[10px] font-bold ${isDark ? 'text-white' : 'text-[#050A3A]'}`}>STRONG</div>
              </div>
              <div className={`p-1 rounded border text-center ${cardBgInner} ${borderInner}`}>
                <div className={`text-[7px] font-mono ${textMuted}`}>CONTENT</div>
                <div className="text-[10px] font-bold text-[#315CFF]">REFINED</div>
              </div>
              <div className={`p-1 rounded border text-center ${cardBgInner} ${borderInner}`}>
                <div className={`text-[7px] font-mono ${textMuted}`}>IMPACT</div>
                <div className="text-[10px] font-bold text-[#C817D9]">MEASURED</div>
              </div>
            </div>
          </div>
          <div className={`flex justify-between text-[9px] font-mono ${textMuted}`}>
            <span>CONVERSION PATHWAYS</span>
            <span className="text-[#6C24E8] font-bold">BRAND ALIGNED</span>
          </div>
        </div>
      );

    default:
      return null;
  }
};
