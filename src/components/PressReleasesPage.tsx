import { useState } from 'react';
import { PressRelease } from '../types';
import { PRESS_RELEASES } from '../data/pressReleases';
import { WaystarCrest } from './WaystarCrest';
import { 
  FileText, 
  Search, 
  Filter, 
  ArrowRight, 
  X, 
  Printer, 
  Share2, 
  Check, 
  AlertCircle, 
  ShieldAlert,
  Calendar,
  Building,
  Quote
} from 'lucide-react';

interface PressReleasesPageProps {
  selectedRelease: PressRelease | null;
  onSelectRelease: (release: PressRelease | null) => void;
}

export function PressReleasesPage({ selectedRelease, onSelectRelease }: PressReleasesPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [copied, setCopied] = useState(false);

  const categories = ['All', 'Governance', 'Crisis Containment', 'Product Launch', 'Earnings', 'Mergers & Tech'];

  const filteredReleases = PRESS_RELEASES.filter((pr) => {
    const matchesCategory = selectedCategory === 'All' || pr.category === selectedCategory;
    const matchesSearch = 
      pr.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pr.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pr.bodyParagraphs.some(p => p.toLowerCase().includes(searchQuery.toLowerCase())) ||
      pr.code.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCopyLink = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-12 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a1120] border border-[#d4af37]/35 text-amber-300 text-xs uppercase tracking-widest font-bold">
          <FileText className="w-3.5 h-3.5" />
          <span>Official Corporate Communications Wire</span>
        </div>
        <h1 className="font-cinzel text-3xl sm:text-5xl font-black text-white tracking-wide">
          PRESS DISPATCHES &amp; FILINGS
        </h1>
        <p className="font-serif-pro italic text-base sm:text-xl text-slate-300 leading-relaxed">
          &ldquo;Proactive statements defining reality before the market creates its own.&rdquo;
        </p>
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-2xl mx-auto">
          All releases are published simultaneously on the Bloomberg and Dow Jones terminals and 
          certified by the Office of Karolina Novotney.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-[#080e1c] border border-slate-800">
        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search filings, keywords, codes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#040812] border border-slate-700 focus:border-[#d4af37] pl-9 pr-4 py-2 rounded-lg text-xs text-white outline-none"
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto scrollbar-none pb-1 md:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-amber-500/20 text-amber-300 border border-[#d4af37]'
                  : 'bg-[#0b1426] text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Releases List */}
      <div className="space-y-4">
        {filteredReleases.length === 0 ? (
          <div className="p-12 text-center rounded-xl bg-[#080e1c] border border-slate-800 text-slate-400 text-sm">
            No matching dispatches found under query &ldquo;{searchQuery}&rdquo;.
          </div>
        ) : (
          filteredReleases.map((pr) => (
            <div
              key={pr.id}
              id={`press-release-item-${pr.id}`}
              onClick={() => onSelectRelease(pr)}
              className="p-6 rounded-xl bg-[#080e1c] border border-slate-800 hover:border-[#d4af37]/60 hover:bg-[#0a1224] transition-all cursor-pointer group flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-md"
            >
              <div className="space-y-2.5 max-w-4xl">
                <div className="flex flex-wrap items-center gap-3 text-xs">
                  <span className="font-mono text-[#d4af37] font-bold">{pr.code}</span>
                  <span className="text-slate-600">&middot;</span>
                  <span className="text-slate-400 font-mono text-[11px] flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-slate-400" />
                    {pr.date}
                  </span>
                  <span className="text-slate-600">&middot;</span>
                  <span className="px-2 py-0.5 rounded text-[10px] uppercase font-mono font-semibold bg-[#0f1d38] text-amber-300 border border-amber-500/20">
                    {pr.category}
                  </span>
                  {pr.urgentNotice && (
                    <span className="px-2 py-0.5 rounded text-[10px] uppercase font-mono font-bold bg-red-950/70 border border-red-500/40 text-red-300">
                      URGENT DISPATCH
                    </span>
                  )}
                </div>

                <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white group-hover:text-amber-200 transition-colors leading-snug">
                  {pr.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed font-sans">
                  {pr.subtitle}
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-2 text-xs text-amber-400 font-semibold group-hover:translate-x-1 transition-transform">
                <span>Read Full Wire</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))
        )}
      </div>

      {/* Full Wire Dispatch Reader Modal */}
      {selectedRelease && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div 
            id="press-release-detail-modal"
            className="relative w-full max-w-4xl bg-[#080d1c] border border-[#d4af37]/50 rounded-xl shadow-2xl overflow-hidden text-slate-200 flex flex-col max-h-[90vh]"
          >
            {/* Top Gold Accent Bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-amber-700 via-[#d4af37] to-amber-700 shrink-0" />

            {/* Modal Header */}
            <div className="p-6 border-b border-slate-800 bg-[#0b1428] flex items-start justify-between shrink-0">
              <div className="flex items-center gap-4">
                <div className="p-2 rounded bg-[#070b14] border border-[#d4af37]/40">
                  <WaystarCrest className="w-8 h-8" />
                </div>
                <div>
                  <div className="text-[10px] font-mono tracking-widest text-[#d4af37] font-bold uppercase">
                    OFFICIAL PR NEWSWIRE &middot; WAYSTAR ROYCO INVESTOR RELATIONS
                  </div>
                  <div className="font-mono text-xs text-slate-400">
                    REF: {selectedRelease.code} &middot; {selectedRelease.date} &middot; {selectedRelease.location}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyLink}
                  title="Copy Document Reference"
                  className="p-2 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => window.print()}
                  title="Print Press Release"
                  className="p-2 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors"
                >
                  <Printer className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onSelectRelease(null)}
                  id="close-press-release-btn"
                  className="p-2 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 sm:p-10 overflow-y-auto space-y-8 font-sans">
              {/* Wire Stamp */}
              <div className="border-b border-slate-800 pb-4">
                <div className="font-mono text-xs uppercase tracking-widest text-red-400 font-bold">
                  FOR IMMEDIATE RELEASE
                </div>
                <h2 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-white mt-2 leading-tight">
                  {selectedRelease.title}
                </h2>
                <p className="font-serif-pro italic text-base sm:text-lg text-slate-300 mt-2">
                  {selectedRelease.subtitle}
                </p>
              </div>

              {/* Lead Summary Callout */}
              <div className="p-4 rounded-lg bg-[#050914] border-l-4 border-[#d4af37] text-xs sm:text-sm text-slate-300 font-semibold leading-relaxed">
                <strong>{selectedRelease.location} &mdash; {selectedRelease.date}</strong> &mdash; {selectedRelease.summary}
              </div>

              {/* Body Paragraphs */}
              <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                {selectedRelease.bodyParagraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Featured Quote Callout */}
              <div className="p-6 rounded-xl bg-amber-950/20 border border-amber-500/30 space-y-2">
                <div className="flex items-start gap-3">
                  <Quote className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-serif-pro italic text-sm sm:text-base text-amber-100">
                      &ldquo;{selectedRelease.quote.text}&rdquo;
                    </p>
                    <div className="mt-2 text-xs font-cinzel font-bold text-amber-300">
                      &mdash; {selectedRelease.quote.speaker}, {selectedRelease.quote.title}
                    </div>
                  </div>
                </div>
              </div>

              {/* Media & Investor Contacts */}
              <div className="pt-6 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-3 bg-[#050914] rounded border border-slate-800 space-y-1">
                  <strong className="text-slate-200 block text-[11px] uppercase">Corporate Communications:</strong>
                  <div className="text-amber-300">Karolina Novotney</div>
                  <div className="text-slate-400">media.relations@waystarroyco.com</div>
                  <div className="text-slate-400">+1 (212) 555-0199 (Direct Wire)</div>
                </div>

                <div className="p-3 bg-[#050914] rounded border border-slate-800 space-y-1">
                  <strong className="text-slate-200 block text-[11px] uppercase">Investor Relations &amp; SEC Filing:</strong>
                  <div className="text-amber-300">Office of Karl Muller, CFO</div>
                  <div className="text-slate-400">investor.relations@waystarroyco.com</div>
                  <div className="text-slate-400">666 Fifth Avenue, New York, NY</div>
                </div>
              </div>

              {/* Statutory Safe Harbor Disclosure */}
              <div className="p-4 rounded-lg bg-[#040710] border border-slate-900 text-[10.5px] text-slate-500 leading-relaxed font-mono">
                <strong className="text-slate-400">FORWARD-LOOKING STATEMENT CAUTIONARY ADVISORY:</strong> {selectedRelease.safeHarborClause}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-800 bg-[#070c18] flex items-center justify-between text-xs shrink-0">
              <span className="font-mono text-slate-500 text-[11px]">END OF TRANSMISSION // WAYSTAR ROYCO IR</span>
              <button
                onClick={() => onSelectRelease(null)}
                className="px-5 py-1.5 bg-[#d4af37] text-slate-950 font-bold text-xs uppercase tracking-wider rounded hover:bg-amber-400 transition-colors"
              >
                Close Wire
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
