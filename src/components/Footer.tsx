import { PageId } from '../types';
import { WaystarCrest } from './WaystarCrest';
import { Shield, Globe, Award, Scale, AlertOctagon } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenWhistleblower: () => void;
}

export function Footer({ onNavigate, onOpenWhistleblower }: FooterProps) {
  return (
    <footer className="w-full bg-[#03060d] text-slate-400 border-t border-[#d4af37]/25 text-xs">
      {/* Top Gold Accent Bar */}
      <div className="h-1 w-full bg-gradient-to-r from-amber-900 via-[#d4af37] to-amber-900 opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1 & 2: Brand & Global Posture */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-1 rounded bg-[#0a1120] border border-[#d4af37]/40">
                <WaystarCrest className="w-9 h-9" />
              </div>
              <div>
                <span className="font-cinzel text-lg font-black tracking-widest text-white block">
                  WAYSTAR ROYCO
                </span>
                <span className="text-[10px] tracking-widest text-[#d4af37] uppercase font-semibold">
                  A Sovereign Media &amp; Entertainment Empire
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Waystar Royco is an international media, leisure, and narrative conglomerate. 
              Broadcasting to over 1.4 billion people, operating 18 theme resorts, commanding 32 
              luxury superliners, and curating the prime-time consciousness of western civilization.
            </p>

            <div className="pt-2 text-[11px] text-slate-400 space-y-1 font-mono">
              <div><strong className="text-slate-300">Executive HQ:</strong> 666 Fifth Avenue, Fl 52-54, New York, NY 10019</div>
              <div><strong className="text-slate-300">Maritime Registry:</strong> Waystar Offshore Holdings S.A., Majuro, Marshall Islands</div>
              <div><strong className="text-slate-300">Ticker:</strong> NYSE: WAY.R &middot; CUSIP: 94418R102</div>
            </div>
          </div>

          {/* Col 3: Conglomerate Navigation */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-xs font-bold uppercase tracking-wider text-amber-300 border-b border-slate-800 pb-1.5">
              Corporate Directory
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-amber-200 transition-colors cursor-pointer text-left"
                >
                  The Sovereign Mandate (Mission)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('leadership')}
                  className="hover:text-amber-200 transition-colors cursor-pointer text-left"
                >
                  Leadership &amp; Family Dynasty
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('divisions')}
                  className="hover:text-amber-200 transition-colors cursor-pointer text-left"
                >
                  Global Operating Divisions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('press')}
                  className="hover:text-amber-200 transition-colors cursor-pointer text-left"
                >
                  Official Wire &amp; Press Releases
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenWhistleblower}
                  className="text-red-400 hover:text-red-300 transition-colors cursor-pointer text-left flex items-center gap-1"
                >
                  <AlertOctagon className="w-3 h-3" />
                  Ethics &amp; Disclosure Portal
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Key Operating Assets */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-xs font-bold uppercase tracking-wider text-amber-300 border-b border-slate-800 pb-1.5">
              Flagship Assets
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>ATN Global Cable News</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Brightstar Magic Kingdom Orlando</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>The Waystar Sovereign (Flagship Cruise)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Waystar Studios &amp; Star-Go DTC</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Living+ Longevity Enclaves</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Dolfi Character Merchandise Group</span>
              </li>
            </ul>
          </div>

          {/* Col 5: Governance Badges */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-xs font-bold uppercase tracking-wider text-amber-300 border-b border-slate-800 pb-1.5">
              Legal Standing
            </h4>
            <div className="space-y-2.5 text-[11px] text-slate-400">
              <div className="flex items-start gap-2 p-2 bg-[#091122] rounded border border-slate-800">
                <Scale className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Delaware Corporate Code Section 141 (Discretionary Board Authority)</span>
              </div>
              <div className="flex items-start gap-2 p-2 bg-[#091122] rounded border border-slate-800">
                <Shield className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Confidential Non-Disclosure Retention Ratio: 99.8%</span>
              </div>
              <div className="flex items-start gap-2 p-2 bg-[#091122] rounded border border-slate-800">
                <Award className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>#1 Ranked Shareholder Yield in Media &amp; Defense (FY24)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Satirical Corporate Disclaimer Block */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 space-y-4 text-[10.5px] text-slate-500 leading-relaxed font-mono">
          <p>
            <strong className="text-slate-400">SAFE HARBOR &amp; EXTRA-TERRITORIAL NOTICE:</strong> Statements published on this corporate portal regarding the financial outlook of Waystar Royco, television ratings certainty, roller coaster gravitational tolerance, longevity metrics of the Living+ hyperbaric residency program, and historical maritime logbook retention are forward-looking declarations within the meaning of Section 27A of the Securities Act of 1933. The Company disclaims any duty to reconcile public statements with reality, congressional subpoenas, or leaked audio recordings.
          </p>
          <p>
            Brightstar Cruise Lines operates under the sovereign admiralty laws of registered flag administrations. Shore-side municipal citations and terrestrial summons carry non-binding advisory status only.
          </p>
          <div className="pt-4 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
            <div>
              &copy; 1976&ndash;2026 Waystar Royco Incorporated. All Rights Reserved Worldwide and in Sovereign Orbit.
            </div>
            <div className="flex items-center gap-4">
              <span className="hover:text-slate-400 cursor-pointer">Terms of Absolute Submission</span>
              <span>&middot;</span>
              <span className="hover:text-slate-400 cursor-pointer">Mandatory Class Action Waiver</span>
              <span>&middot;</span>
              <span className="hover:text-slate-400 cursor-pointer">Admiralty Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
