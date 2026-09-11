import { useState } from 'react';
import { PageId, PressRelease } from '../types';
import { WaystarCrest } from './WaystarCrest';
import { 
  Tv, 
  Sparkles, 
  Ship, 
  Film, 
  TrendingUp, 
  ArrowRight, 
  Quote, 
  Sliders, 
  ShieldCheck, 
  Award, 
  ChevronRight,
  Zap,
  Building,
  CheckCircle,
  FileCheck2
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  featuredReleases: PressRelease[];
  onSelectRelease: (release: PressRelease) => void;
}

export function HomePage({ onNavigate, featuredReleases, onSelectRelease }: HomePageProps) {
  // Shareholder Value Optimizer state (Satirical Interactive Tool)
  const [layoffPercent, setLayoffPercent] = useState<number>(18);
  const [empathyLevel, setEmpathyLevel] = useState<number>(0);
  const [crisisDenialSpeed, setCrisisDenialSpeed] = useState<number>(95);

  // Dynamic calculations based on sliders
  const stockPriceCalc = (142.80 + (layoffPercent * 1.65) + ((100 - empathyLevel) * 0.42) + (crisisDenialSpeed * 0.12)).toFixed(2);
  const goldenParachute = (45 + (layoffPercent * 3.2) + ((100 - empathyLevel) * 1.5)).toFixed(1);
  const regulatoryVulnerability = Math.max(0.1, (100 - crisisDenialSpeed) * 0.08).toFixed(1);

  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 md:pt-20 pb-16 border-b border-[#d4af37]/20">
        {/* Subtle Ambient Radial Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-b from-amber-500/10 via-blue-900/10 to-transparent blur-3xl pointer-events-none -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          {/* Official Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0a1120] border border-[#d4af37]/40 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-cinzel text-xs uppercase tracking-[0.25em] text-amber-200 font-bold">
              Official Corporate Portal &middot; Office of the Chairman
            </span>
          </div>

          {/* Majestic Hero Headline */}
          <div className="space-y-4 max-w-4xl mx-auto">
            <h1 className="font-['Times_New_Roman',Times,serif] text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-wide leading-[1.1]">
              WE SHAPE TOMORROW&apos;S <br />
              <span className="gold-gradient-text">NARRATIVE. TODAY.</span>
            </h1>
            <p className="font-serif-pro italic text-lg sm:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              &ldquo;The market does not deliberate. It consumes, it demands, and it obeys unyielding power.&rdquo;
            </p>
          </div>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Waystar Royco commands the domestic consciousness through ATN cable broadcast, 
            operates 18 global theme resort destinations, commands 32 luxury ocean superliners, 
            and holds the premier intellectual property catalog of our era.
          </p>

          {/* Quick Action Navigation CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onNavigate('divisions')}
              id="hero-explore-divisions-btn"
              className="px-7 py-3.5 rounded-lg bg-gradient-to-r from-amber-600 via-[#d4af37] to-amber-600 text-slate-950 font-bold text-xs uppercase tracking-[0.18em] shadow-lg shadow-amber-950/40 hover:brightness-110 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Global Divisions</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('leadership')}
              id="hero-view-leadership-btn"
              className="px-7 py-3.5 rounded-lg bg-[#0b1324] border border-[#d4af37]/40 text-amber-200 font-bold text-xs uppercase tracking-[0.18em] hover:bg-[#111e38] hover:border-[#d4af37] transition-all cursor-pointer"
            >
              Board &amp; Leadership Dynasty
            </button>
          </div>

          {/* Corporate Stats Ribbon */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <div className="p-5 rounded-xl bg-[#091122]/90 border border-slate-800 text-left hover:border-[#d4af37]/40 transition-colors">
              <div className="text-xs uppercase tracking-wider text-slate-400 font-mono">Enterprise Value</div>
              <div className="font-cinzel text-3xl font-black text-white mt-1">$84.6B</div>
              <div className="text-[11px] text-amber-400 mt-0.5">▲ +12.4% YoY Consolidated</div>
            </div>

            <div className="p-5 rounded-xl bg-[#091122]/90 border border-slate-800 text-left hover:border-[#d4af37]/40 transition-colors">
              <div className="text-xs uppercase tracking-wider text-slate-400 font-mono">Global Audience</div>
              <div className="font-cinzel text-3xl font-black text-white mt-1">1.4B+</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Weekly Broadcast &amp; Park Reach</div>
            </div>

            <div className="p-5 rounded-xl bg-[#091122]/90 border border-slate-800 text-left hover:border-[#d4af37]/40 transition-colors">
              <div className="text-xs uppercase tracking-wider text-slate-400 font-mono">Superliner Fleet</div>
              <div className="font-cinzel text-3xl font-black text-white mt-1">32 Ships</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Marshall Islands Sovereign Flag</div>
            </div>

            <div className="p-5 rounded-xl bg-[#091122]/90 border border-slate-800 text-left hover:border-[#d4af37]/40 transition-colors">
              <div className="text-xs uppercase tracking-wider text-slate-400 font-mono">Prime-Time Share</div>
              <div className="font-cinzel text-3xl font-black text-white mt-1">44.8%</div>
              <div className="text-[11px] text-amber-400 mt-0.5">ATN Cable Monopoly (#1)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Mission Statement Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-gradient-to-br from-[#0a1224] via-[#070d1a] to-[#040812] border border-[#d4af37]/35 p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden">
          {/* Subtle Watermark Crest Background */}
          <div className="absolute -right-16 -bottom-16 opacity-5 pointer-events-none">
            <WaystarCrest className="w-[450px] h-[450px]" />
          </div>

          <div className="max-w-3xl space-y-8 relative z-10">
            {/* Header Tag */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-[#d4af37]" />
              <span className="font-cinzel text-xs uppercase tracking-[0.3em] text-[#d4af37] font-bold">
                The Sovereign Mandate
              </span>
            </div>

            <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-white tracking-wide leading-tight">
              A Letter from the Office of the Chairman &amp; CEO
            </h2>

            {/* Mission Statement Content in Deadpan Satirical Corporate Tone */}
            <div className="space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
              <p className="first-letter:text-5xl first-letter:font-cinzel first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-[#d4af37]">
                When I founded Waystar in 1976 with two regional print presses and a local radio frequency, 
                people told me the media was a public trust. They were wrong. The media is an empire, 
                and civilization is an ongoing auction. Whoever controls the news crawl controls the political 
                pulse of the nation, and whoever controls the turnstiles at the theme park controls the dreams of its children.
              </p>

              <p>
                At Waystar Royco, our mission is simple: <strong>uncompromising value extraction and absolute territorial supremacy</strong>. 
                We do not apologize for our scale. We do not solicit polite consensus from editorial boards or regulatory bureaucrats 
                who could not run a hot dog stand in Queens. We build assets that last, we protect our margins with savage discipline, 
                and we deliver cold, compounding returns to those who have the spine to stand with us.
              </p>

              <p>
                The world is not a seminar. It is a fight in the mud, and the only question that matters at the end of the quarter is: 
                <em> Did you win?</em> At Waystar Royco, we win every single day.
              </p>
            </div>

            {/* Signature Block */}
            <div className="pt-6 border-t border-slate-800 flex items-center justify-between flex-wrap gap-4">
              <div>
                <div className="font-cinzel text-xl font-bold text-amber-200 tracking-wider">
                  LOGAN ROY
                </div>
                <div className="text-xs uppercase tracking-widest text-slate-400 font-mono mt-0.5">
                  Founder, Chairman of the Board &amp; Chief Executive Officer
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  666 Fifth Avenue, Executive Suite 54, New York
                </div>
              </div>

              <div className="p-3 bg-[#060a14] border border-[#d4af37]/30 rounded-lg text-right">
                <div className="text-[10px] uppercase tracking-widest text-[#d4af37] font-mono font-bold">
                  Corporate Seal
                </div>
                <div className="text-xs text-slate-300 font-serif-pro italic">
                  &ldquo;Nihil Praeter Victoriam&rdquo;
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Four Strategic Pillars of Conglomerate Dominance */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="font-cinzel text-xs uppercase tracking-[0.3em] text-[#d4af37] font-bold">
            The Structural Pillars
          </span>
          <h2 className="font-cinzel text-3xl font-extrabold text-white">
            ENGINEERED TO DOMINATE
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Four interlocking commercial engines generating non-stop revenue and narrative leverage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Pillar 1: News */}
          <div 
            onClick={() => onNavigate('divisions')} 
            className="p-6 rounded-xl bg-[#091122]/90 border border-slate-800 hover:border-[#d4af37]/60 hover:bg-[#0c162d] transition-all cursor-pointer group flex flex-col justify-between space-y-4"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Tv className="w-6 h-6" />
              </div>
              <h3 className="font-cinzel text-lg font-bold text-white group-hover:text-amber-200 transition-colors">
                ATN Cable News
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Reaching 114M households with prime-time opinion programming and high-decibel urgency that dictates domestic politics.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-amber-300 font-semibold">
              <span>View News Division</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Pillar 2: Parks */}
          <div 
            onClick={() => onNavigate('divisions')} 
            className="p-6 rounded-xl bg-[#091122]/90 border border-slate-800 hover:border-[#d4af37]/60 hover:bg-[#0c162d] transition-all cursor-pointer group flex flex-col justify-between space-y-4"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-cinzel text-lg font-bold text-white group-hover:text-amber-200 transition-colors">
                Brightstar Parks
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                18 mega-resorts welcoming 85M annual guests. Precision queue monetization and exclusive Dolfi mascot merchandising.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-amber-300 font-semibold">
              <span>View Parks Division</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Pillar 3: Cruises */}
          <div 
            onClick={() => onNavigate('divisions')} 
            className="p-6 rounded-xl bg-[#091122]/90 border border-slate-800 hover:border-[#d4af37]/60 hover:bg-[#0c162d] transition-all cursor-pointer group flex flex-col justify-between space-y-4"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Ship className="w-6 h-6" />
              </div>
              <h3 className="font-cinzel text-lg font-bold text-white group-hover:text-amber-200 transition-colors">
                Brightstar Cruises
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                32 superliners operating in international waters under friendly Marshall Islands admiralty jurisdiction and tax efficiency.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-amber-300 font-semibold">
              <span>View Cruises Division</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Pillar 4: Studios */}
          <div 
            onClick={() => onNavigate('divisions')} 
            className="p-6 rounded-xl bg-[#091122]/90 border border-slate-800 hover:border-[#d4af37]/60 hover:bg-[#0c162d] transition-all cursor-pointer group flex flex-col justify-between space-y-4"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Film className="w-6 h-6" />
              </div>
              <h3 className="font-cinzel text-lg font-bold text-white group-hover:text-amber-200 transition-colors">
                Waystar Studios
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                High-yield theatrical tentpoles like <em>The Biggest Turkey in the World</em> and the Star-Go direct-to-consumer streaming suite.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-amber-300 font-semibold">
              <span>View Studios Division</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Satirical Widget: Shareholder Value Optimizer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#080e1d] border border-[#d4af37]/35 p-6 sm:p-10 shadow-xl space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div>
              <div className="flex items-center gap-2 text-amber-400 text-xs uppercase font-mono tracking-widest font-bold">
                <Sliders className="w-4 h-4" />
                <span>Executive Decision Terminal &middot; Karl Muller Treasury Suite</span>
              </div>
              <h2 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-white mt-1">
                SHAREHOLDER VALUE OPTIMIZER (SIMULATOR)
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Adjust corporate leverage, labor reduction, and crisis suppression levers to observe instantaneous stock market reactions.
              </p>
            </div>
            <div className="shrink-0 p-3 bg-[#050812] border border-amber-500/30 rounded-lg text-right">
              <div className="text-[10px] text-slate-400 uppercase font-mono">Current Simulation Ticker</div>
              <div className="font-mono text-xl font-bold text-emerald-400">WAY.R: ${stockPriceCalc}</div>
              <div className="text-[10px] text-amber-300">Golden Parachute Pool: ${goldenParachute}M</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Control Sliders */}
            <div className="lg:col-span-2 space-y-6">
              {/* Slider 1: Workforce Streamlining */}
              <div className="space-y-2 p-4 rounded-xl bg-[#0b1426] border border-slate-800">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-slate-200 uppercase tracking-wider">
                    Workforce Streamlining (Headcount Reductions)
                  </span>
                  <span className="font-mono text-amber-300 font-bold">{layoffPercent}% newsroom / resort staff</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="45"
                  value={layoffPercent}
                  onChange={(e) => setLayoffPercent(Number(e.target.value))}
                  className="w-full accent-[#d4af37] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>0% (Inefficient Civility)</span>
                  <span>18% (Wall Street Approved)</span>
                  <span>45% (Full Automation &amp; Golden Parachutes)</span>
                </div>
              </div>

              {/* Slider 2: Empathy Suppression */}
              <div className="space-y-2 p-4 rounded-xl bg-[#0b1426] border border-slate-800">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-slate-200 uppercase tracking-wider">
                    Human Empathy Allocation
                  </span>
                  <span className={`font-mono font-bold ${empathyLevel === 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                    {empathyLevel}% {empathyLevel === 0 ? '(Optimal: Complete Ruthlessness)' : '(Warning: Drag on Margin)'}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={empathyLevel}
                  onChange={(e) => setEmpathyLevel(Number(e.target.value))}
                  className="w-full accent-[#d4af37] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>0% (Maximum EBITDA)</span>
                  <span>50% (Sub-Optimal Apologies)</span>
                  <span>100% (Hostile Takeover Danger)</span>
                </div>
              </div>

              {/* Slider 3: Crisis Denial Speed */}
              <div className="space-y-2 p-4 rounded-xl bg-[#0b1426] border border-slate-800">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-slate-200 uppercase tracking-wider">
                    PR Denial Velocity (Karolina Novotney Protocol)
                  </span>
                  <span className="font-mono text-amber-300 font-bold">{crisisDenialSpeed}% of Light Speed</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="100"
                  value={crisisDenialSpeed}
                  onChange={(e) => setCrisisDenialSpeed(Number(e.target.value))}
                  className="w-full accent-[#d4af37] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>20% (Subpoena Received)</span>
                  <span>80% (Offshore Dismissal)</span>
                  <span>100% (Instant Counter-Accusation)</span>
                </div>
              </div>
            </div>

            {/* Live Real-Time Analysis Panel */}
            <div className="p-6 rounded-xl bg-[#050914] border border-[#d4af37]/30 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="text-xs uppercase tracking-widest text-amber-400 font-mono font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Treasury Consensus</span>
                </div>

                <div className="space-y-3 font-mono text-xs text-slate-300">
                  <div className="flex justify-between pb-1 border-b border-slate-800">
                    <span className="text-slate-400">Target Share Price:</span>
                    <span className="text-emerald-400 font-bold">${stockPriceCalc}</span>
                  </div>
                  <div className="flex justify-between pb-1 border-b border-slate-800">
                    <span className="text-slate-400">C-Suite Retention Pool:</span>
                    <span className="text-amber-300 font-bold">${goldenParachute}M</span>
                  </div>
                  <div className="flex justify-between pb-1 border-b border-slate-800">
                    <span className="text-slate-400">DOJ Inquiry Probability:</span>
                    <span className="text-slate-200 font-bold">{regulatoryVulnerability}% (Neutralized)</span>
                  </div>
                  <div className="flex justify-between pb-1 border-b border-slate-800">
                    <span className="text-slate-400">Wall Street Sentiment:</span>
                    <span className="text-emerald-300 font-bold">STRONG BUY</span>
                  </div>
                </div>

                <div className="p-3 bg-amber-950/20 border border-amber-500/20 rounded text-xs text-amber-200/90 leading-relaxed font-sans">
                  <strong>Karl Muller, CFO:</strong> &ldquo;By holding empathy strictly at 0% and accelerating document shredding velocity, we achieve optimal shareholder euphoria.&rdquo;
                </div>
              </div>

              <button
                onClick={() => onNavigate('press')}
                className="w-full py-2.5 rounded bg-[#0b1426] border border-[#d4af37]/40 text-amber-300 text-xs font-semibold uppercase tracking-wider hover:bg-amber-500/10 transition-colors cursor-pointer text-center"
              >
                Read Associated SEC Filings &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Press Releases from the Official Wire */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <span className="font-cinzel text-xs uppercase tracking-[0.3em] text-[#d4af37] font-bold">
              Corporate Dispatches
            </span>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-white mt-1">
              FROM THE EXECUTIVE WIRE
            </h2>
          </div>
          <button
            onClick={() => onNavigate('press')}
            id="view-all-press-releases-btn"
            className="text-xs uppercase tracking-wider text-amber-300 hover:text-white font-semibold flex items-center gap-1 cursor-pointer transition-colors"
          >
            <span>View All Official Releases</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredReleases.slice(0, 3).map((pr) => (
            <div
              key={pr.id}
              onClick={() => onSelectRelease(pr)}
              className="p-6 rounded-xl bg-[#091122]/90 border border-slate-800 hover:border-[#d4af37]/50 hover:bg-[#0c162d] transition-all cursor-pointer flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="text-[#d4af37] font-semibold">{pr.code}</span>
                  <span>{pr.date}</span>
                </div>
                <h3 className="font-cinzel text-base font-bold text-white group-hover:text-amber-200 transition-colors line-clamp-3 leading-snug">
                  {pr.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                  {pr.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-amber-400 font-semibold">
                <span className="text-[11px] uppercase tracking-wider font-mono text-slate-400">{pr.category}</span>
                <span className="group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Read Dispatch &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Succession & Family Governance Assurance Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-xl bg-[#060a14] border border-[#d4af37]/20 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400">
              <Award className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-cinzel text-lg font-bold text-white">
                FAMILY GOVERNANCE &amp; UNIFIED SUCCESSION PROTOCOL
              </h3>
              <p className="text-xs text-slate-400 mt-0.5 max-w-2xl">
                The Roy Family Trust holds 51.4% super-voting authority across all operating subsidiaries. 
                Any rumors of boardroom factional disputes or sibling proxy conflicts are vigorously rejected as speculative fiction.
              </p>
            </div>
          </div>
          <button
            onClick={() => onNavigate('leadership')}
            className="shrink-0 px-5 py-2.5 rounded bg-[#0b1426] border border-[#d4af37]/50 text-amber-200 text-xs font-bold uppercase tracking-wider hover:bg-[#13223f] transition-all cursor-pointer"
          >
            Meet the Executive Board &rarr;
          </button>
        </div>
      </section>
    </div>
  );
}
