import { useState } from 'react';
import { Division } from '../types';
import { DIVISIONS } from '../data/divisions';
import { WaystarCrest } from './WaystarCrest';
import { 
  Tv, 
  Sparkles, 
  Ship, 
  Film, 
  Building2, 
  TrendingUp, 
  ShieldAlert, 
  Quote, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle,
  FileText,
  AlertCircle,
  BarChart3,
  Layers
} from 'lucide-react';

export function DivisionsPage() {
  const [activeSlug, setActiveSlug] = useState<Division['slug']>('news');
  const [regulatoryOpen, setRegulatoryOpen] = useState(true);

  const activeDivision = DIVISIONS.find(d => d.slug === activeSlug) || DIVISIONS[0];

  const getIcon = (slug: string, className: string = 'w-6 h-6') => {
    switch (slug) {
      case 'news': return <Tv className={className} />;
      case 'parks': return <Sparkles className={className} />;
      case 'cruises': return <Ship className={className} />;
      case 'studios': return <Film className={className} />;
      case 'living-plus': return <Building2 className={className} />;
      default: return <Layers className={className} />;
    }
  };

  return (
    <div className="space-y-16 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      {/* Page Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a1120] border border-[#d4af37]/35 text-amber-300 text-xs uppercase tracking-widest font-bold">
          <Layers className="w-3.5 h-3.5" />
          <span>Operational Architecture &middot; Consolidated Portfolios</span>
        </div>
        <h1 className="font-cinzel text-3xl sm:text-5xl font-black text-white tracking-wide">
          GLOBAL OPERATING DIVISIONS
        </h1>
        <p className="font-serif-pro italic text-base sm:text-xl text-slate-300 leading-relaxed">
          &ldquo;From cable airwaves to international waters, we monetize every hour of human existence.&rdquo;
        </p>
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-2xl mx-auto">
          Waystar Royco operates across four primary synergistic pillars—News, Parks, Cruises, and Studios—with 
          frontier expansion into Living+ longevity real estate.
        </p>
      </div>

      {/* Division Navigation Strip (Selector Tabs) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {DIVISIONS.map((div) => {
          const isActive = div.slug === activeSlug;
          return (
            <button
              key={div.id}
              id={`division-tab-${div.slug}`}
              onClick={() => setActiveSlug(div.slug)}
              className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                isActive
                  ? 'bg-[#0d172e] border-[#d4af37] shadow-lg shadow-amber-950/30'
                  : 'bg-[#080e1c] border-slate-800 hover:border-slate-700 hover:bg-[#0a1224]'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className={`p-2 rounded-lg border ${
                  isActive 
                    ? 'bg-amber-500/20 border-amber-400/50 text-amber-300' 
                    : 'bg-slate-800/60 border-slate-700 text-slate-400'
                }`}>
                  {getIcon(div.slug, 'w-5 h-5')}
                </div>
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
                )}
              </div>

              <div>
                <h3 className={`font-cinzel text-sm font-bold tracking-wide ${isActive ? 'text-white' : 'text-slate-300'}`}>
                  {div.shortName}
                </h3>
                <p className="text-[10px] text-slate-400 font-mono mt-0.5 truncate">
                  {div.statHighlight} &middot; {div.statLabel}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Division Deep-Dive Showcase Container */}
      <div className="rounded-2xl bg-[#080d1b] border border-[#d4af37]/35 p-6 sm:p-10 shadow-2xl space-y-10">
        {/* Division Header Banner */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-800">
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-[#050914] border border-[#d4af37]/40 text-amber-300">
                {getIcon(activeDivision.slug, 'w-7 h-7')}
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-[#d4af37] font-mono font-bold">
                  Operating Division Profile
                </span>
                <h2 className="font-cinzel text-2xl sm:text-4xl font-extrabold text-white tracking-wide">
                  {activeDivision.name}
                </h2>
              </div>
            </div>
            <p className="font-serif-pro italic text-slate-300 text-base sm:text-lg">
              &ldquo;{activeDivision.tagline}&rdquo;
            </p>
          </div>

          {/* Lead Executive Box */}
          <div className="shrink-0 p-4 rounded-xl bg-[#050914] border border-slate-800 space-y-1 text-right lg:min-w-[240px]">
            <span className="text-[10px] uppercase tracking-wider text-slate-400 font-mono block">Executive Oversight</span>
            <div className="font-cinzel text-base font-bold text-amber-200">{activeDivision.leadExecutive}</div>
            <div className="text-xs text-slate-400">{activeDivision.leadTitle}</div>
            <div className="pt-1 text-[11px] font-mono text-emerald-400">{activeDivision.revenueContribution}</div>
          </div>
        </div>

        {/* Overview & Strategic Rationale */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-3">
              <h3 className="font-cinzel text-xs font-bold uppercase tracking-widest text-slate-300">
                Commercial Overview &amp; Market Dominance
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                {activeDivision.overview}
              </p>
            </div>

            {/* Key Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {activeDivision.metrics.map((m, idx) => (
                <div key={idx} className="p-3.5 rounded-lg bg-[#0b1426] border border-slate-800 space-y-1">
                  <div className="text-[10px] uppercase font-mono text-slate-400 truncate">{m.label}</div>
                  <div className="font-cinzel text-xl font-bold text-white">{m.value}</div>
                  <div className="text-[9.5px] text-amber-400/90 leading-tight">{m.subtext}</div>
                </div>
              ))}
            </div>

            {/* Assets Table */}
            <div className="space-y-3 pt-4">
              <h3 className="font-cinzel text-xs font-bold uppercase tracking-widest text-slate-300">
                Key Strategic Assets &amp; Intellectual Property
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeDivision.assets.map((asset, idx) => (
                  <div key={idx} className="p-3.5 rounded-lg bg-[#060a14] border border-slate-800/90 space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-white">{asset.name}</span>
                      <span className="text-[10px] font-mono text-[#d4af37] uppercase">{asset.type}</span>
                    </div>
                    <p className="text-[11.5px] text-slate-400 leading-relaxed">
                      {asset.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Quotes & Regulatory Disclosures */}
          <div className="space-y-6">
            {/* Executive Quote Box */}
            <div className="p-5 rounded-xl bg-gradient-to-br from-amber-950/30 to-[#0b1426] border border-amber-500/30 space-y-3">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-amber-400 font-mono font-bold">
                <Quote className="w-4 h-4" />
                <span>Executive Philosophy</span>
              </div>
              <p className="font-serif-pro italic text-sm text-slate-200 leading-relaxed">
                &ldquo;{activeDivision.quote.text}&rdquo;
              </p>
              <div className="text-right text-xs font-cinzel font-bold text-amber-300">
                &mdash; {activeDivision.quote.speaker}
              </div>
            </div>

            {/* Regulatory & Safety Disclosures (Collapsible Accordion) */}
            <div className="rounded-xl bg-[#050914] border border-slate-800 overflow-hidden">
              <button
                onClick={() => setRegulatoryOpen(!regulatoryOpen)}
                className="w-full p-4 flex items-center justify-between text-left text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-amber-400" />
                  <span>Regulatory &amp; Liability Standing</span>
                </div>
                {regulatoryOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              {regulatoryOpen && (
                <div className="p-4 pt-0 text-xs text-slate-400 space-y-3 border-t border-slate-800/60 font-mono text-[11px]">
                  <div>
                    <strong className="text-amber-300 block mb-0.5">Jurisdictional Governance:</strong>
                    <p className="leading-relaxed">{activeDivision.regulatoryNotice}</p>
                  </div>
                  <div>
                    <strong className="text-slate-300 block mb-0.5">Incident Neutralization:</strong>
                    <p className="leading-relaxed text-slate-400">{activeDivision.incidentHistoryNote}</p>
                  </div>
                  <div className="pt-2 text-[10px] text-slate-400 flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Audited by General Counsel Gerri Kellman</span>
                  </div>
                </div>
              )}
            </div>

            {/* Division Fact Sheet Download Satirical Button */}
            <div className="p-4 rounded-xl bg-[#091122] border border-slate-800 text-center space-y-2">
              <span className="text-[11px] text-slate-400 block font-mono">
                SEC Schedule 14D Confidential Summary
              </span>
              <button
                onClick={() => alert(`Waystar Internal Notice: Division Factsheet for "${activeDivision.shortName}" is restricted to Tier-1 Voting Trust members. File reference logged.`)}
                className="w-full py-2 bg-[#060a14] border border-[#d4af37]/40 hover:border-[#d4af37] text-amber-300 rounded text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Download Subpoena-Safe Factsheet
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
