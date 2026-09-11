import { useState } from 'react';
import { LeadershipMember } from '../types';
import { LEADERSHIP_MEMBERS } from '../data/leadership';
import { WaystarCrest } from './WaystarCrest';
import { 
  Users, 
  ShieldCheck, 
  Award, 
  FileText, 
  X, 
  Quote, 
  Scale, 
  Briefcase,
  AlertTriangle,
  Lock
} from 'lucide-react';

export function LeadershipPage() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'family' | 'executive' | 'governance'>('all');
  const [activeDossier, setActiveDossier] = useState<LeadershipMember | null>(null);

  const filteredMembers = selectedCategory === 'all' 
    ? LEADERSHIP_MEMBERS 
    : LEADERSHIP_MEMBERS.filter(m => m.category === selectedCategory);

  return (
    <div className="space-y-16 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      {/* Page Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a1120] border border-[#d4af37]/35 text-amber-300 text-xs uppercase tracking-widest font-bold">
          <Users className="w-3.5 h-3.5" />
          <span>Executive Governance &middot; Succession Protocol 102(b)</span>
        </div>
        <h1 className="font-cinzel text-3xl sm:text-5xl font-black text-white tracking-wide">
          LEADERSHIP &amp; THE ROY DYNASTY
        </h1>
        <p className="font-serif-pro italic text-base sm:text-xl text-slate-300 leading-relaxed">
          &ldquo;Continuity through strength. Stability through fear. Wealth through decisive sovereign will.&rdquo;
        </p>
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-2xl mx-auto">
          Waystar Royco is governed by a meritocratic family coalition and veteran consiglieri 
          who have survived five decades of regulatory scrutiny, hostile takeovers, and congressional hearings.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 border-b border-slate-800 pb-6">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
            selectedCategory === 'all'
              ? 'bg-amber-500/20 text-amber-300 border border-[#d4af37]'
              : 'bg-[#091122] text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          All Leadership ({LEADERSHIP_MEMBERS.length})
        </button>
        <button
          onClick={() => setSelectedCategory('family')}
          className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
            selectedCategory === 'family'
              ? 'bg-amber-500/20 text-amber-300 border border-[#d4af37]'
              : 'bg-[#091122] text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          The Roy Dynasty (Family Trust)
        </button>
        <button
          onClick={() => setSelectedCategory('executive')}
          className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
            selectedCategory === 'executive'
              ? 'bg-amber-500/20 text-amber-300 border border-[#d4af37]'
              : 'bg-[#091122] text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          Executive Operations (ATN &amp; Legal)
        </button>
        <button
          onClick={() => setSelectedCategory('governance')}
          className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
            selectedCategory === 'governance'
              ? 'bg-amber-500/20 text-amber-300 border border-[#d4af37]'
              : 'bg-[#091122] text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          Board Consigliere &amp; Treasury
        </button>
      </div>

      {/* Leadership Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMembers.map((member) => (
          <div
            key={member.id}
            id={`leader-card-${member.id}`}
            className="rounded-xl bg-[#080e1c] border border-slate-800 hover:border-[#d4af37]/60 transition-all flex flex-col justify-between overflow-hidden group shadow-lg"
          >
            <div>
              {/* Photo Banner with Corporate Overlay */}
              <div className="relative h-64 w-full overflow-hidden bg-slate-900 border-b border-slate-800">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080e1c] via-transparent to-transparent" />
                
                {/* Status Badge */}
                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-[#d4af37]/50 text-[10px] uppercase font-mono tracking-wider text-amber-300 font-bold">
                    {member.statusBadge}
                  </span>
                </div>

                {/* Name Overlay */}
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="font-cinzel text-xl font-bold text-white group-hover:text-amber-200 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs text-[#d4af37] font-semibold tracking-wide mt-0.5 line-clamp-1">
                    {member.title}
                  </p>
                </div>
              </div>

              {/* Bio & Department Info */}
              <div className="p-5 space-y-4">
                <div className="p-3 bg-[#050812] rounded-lg border border-slate-800/80 text-xs italic text-slate-300 flex items-start gap-2.5">
                  <Quote className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span className="font-serif-pro">&ldquo;{member.quote}&rdquo;</span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                  {member.bio}
                </p>

                <div className="pt-2 grid grid-cols-2 gap-2 text-[11px] font-mono text-slate-400">
                  <div className="p-2 rounded bg-[#0b1426] border border-slate-800">
                    <span className="text-slate-400 block text-[9.5px]">TENURE</span>
                    <span className="text-white font-semibold">{member.tenure}</span>
                  </div>
                  <div className="p-2 rounded bg-[#0b1426] border border-slate-800">
                    <span className="text-slate-400 block text-[9.5px]">EQUITY INTEREST</span>
                    <span className="text-amber-300 font-semibold truncate block">{member.stockUnits.split(' ')[0]} Units</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Inspect Dossier Action Button */}
            <div className="p-5 pt-0">
              <button
                onClick={() => setActiveDossier(member)}
                id={`inspect-dossier-${member.id}`}
                className="w-full py-2.5 rounded-lg bg-[#0c162d] border border-[#d4af37]/30 hover:border-[#d4af37] hover:bg-amber-500/10 text-amber-300 text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Inspect Formal Dossier</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Formal Executive Dossier Modal */}
      {activeDossier && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
          <div 
            id="executive-dossier-modal"
            className="relative w-full max-w-3xl bg-[#080d1c] border border-[#d4af37]/50 rounded-xl shadow-2xl overflow-hidden text-slate-200"
          >
            {/* Top Accent Strip */}
            <div className="h-1.5 w-full bg-gradient-to-r from-amber-700 via-[#d4af37] to-amber-700" />

            {/* Modal Header */}
            <div className="p-6 border-b border-slate-800 flex items-start justify-between bg-[#0b1428]">
              <div className="flex items-center gap-4">
                <div className="p-2 rounded bg-[#070b14] border border-[#d4af37]/40">
                  <WaystarCrest className="w-8 h-8" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-cinzel text-xl font-bold text-white">
                      CONFIDENTIAL EXECUTIVE DOSSIER
                    </h3>
                    <span className="px-2 py-0.5 text-[9px] font-mono uppercase bg-red-950/60 border border-red-500/40 text-red-300 rounded">
                      BOARD SENSITIVE
                    </span>
                  </div>
                  <p className="text-xs text-[#d4af37] font-mono mt-0.5">
                    FILE ID: SEC-DEF14A-WY-{activeDossier.id.toUpperCase()}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setActiveDossier(null)}
                id="close-dossier-btn"
                className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Content */}
            <div className="p-6 max-h-[75vh] overflow-y-auto space-y-6">
              {/* Profile Summary Header */}
              <div className="flex flex-col sm:flex-row items-center gap-6 p-4 rounded-xl bg-[#050914] border border-slate-800">
                <img
                  src={activeDossier.image}
                  alt={activeDossier.name}
                  className="w-24 h-24 rounded-lg object-cover grayscale contrast-125 border border-[#d4af37]/40 shrink-0"
                />
                <div className="space-y-1 text-center sm:text-left">
                  <h4 className="font-cinzel text-2xl font-bold text-white">
                    {activeDossier.name}
                  </h4>
                  <div className="text-xs font-semibold text-amber-300">
                    {activeDossier.title}
                  </div>
                  <div className="text-xs text-slate-400">
                    {activeDossier.department} &middot; Tenure: <strong className="text-slate-200">{activeDossier.tenure}</strong>
                  </div>
                  <div className="pt-1 text-[11px] font-mono text-emerald-400">
                    Voting Allotment: {activeDossier.votingPower}
                  </div>
                </div>
              </div>

              {/* Stated Principle Quote */}
              <div className="p-4 bg-amber-950/20 border border-amber-500/30 rounded-lg text-sm text-amber-200 font-serif-pro italic flex items-start gap-3">
                <Quote className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span>&ldquo;{activeDossier.quote}&rdquo;</span>
              </div>

              {/* Comprehensive Biography */}
              <div className="space-y-2">
                <h5 className="font-cinzel text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4 text-[#d4af37]" />
                  <span>Executive Curriculum &amp; Commercial Authority</span>
                </h5>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activeDossier.bio}
                </p>
              </div>

              {/* Committee Memberships & Equity */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-[#0b1426] border border-slate-800 space-y-2">
                  <span className="text-[11px] uppercase tracking-wider font-mono text-slate-400 font-bold block">
                    Board Committees &amp; Taskforces
                  </span>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {activeDossier.committees.map((c, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-[#0b1426] border border-slate-800 space-y-2">
                  <span className="text-[11px] uppercase tracking-wider font-mono text-slate-400 font-bold block">
                    Beneficial Ownership (SEC Form 4)
                  </span>
                  <div className="text-sm font-mono text-amber-300 font-bold">
                    {activeDossier.stockUnits}
                  </div>
                  <p className="text-[10.5px] text-slate-400 leading-tight">
                    Subject to contractual lockups and automatic acceleration upon unsolicited tender offers.
                  </p>
                </div>
              </div>

              {/* Redacted Internal Corporate Disclosure */}
              <div className="p-4 rounded-lg bg-red-950/20 border border-red-500/30 space-y-2">
                <div className="flex items-center gap-2 text-xs uppercase font-mono tracking-wider text-red-400 font-bold">
                  <AlertTriangle className="w-4 h-4" />
                  <span>General Counsel Privilege / Redacted Disclosures</span>
                </div>
                <p className="text-xs text-red-200/90 leading-relaxed font-mono">
                  {activeDossier.redactedNotes}
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-800 bg-[#070c18] flex items-center justify-between text-xs text-slate-400">
              <span className="font-mono text-[10.5px]">CONFIDENTIAL &middot; STRICTLY DELAWARE ARBITRATION</span>
              <button
                onClick={() => setActiveDossier(null)}
                className="px-5 py-1.5 bg-[#d4af37] text-slate-950 font-bold text-xs uppercase tracking-wider rounded hover:bg-amber-400 transition-colors"
              >
                Close Dossier
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
