import { X, FileText, AlertTriangle, ShieldCheck } from 'lucide-react';
import { WaystarCrest } from './WaystarCrest';

interface SecModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SecModal({ isOpen, onClose }: SecModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        id="sec-filings-modal"
        className="relative w-full max-w-3xl bg-[#080d1c] border border-[#d4af37]/45 rounded-xl shadow-2xl overflow-hidden text-slate-200 flex flex-col max-h-[85vh]"
      >
        <div className="h-1.5 w-full bg-gradient-to-r from-amber-700 via-[#d4af37] to-amber-700 shrink-0" />

        {/* Modal Header */}
        <div className="p-5 border-b border-slate-800 bg-[#0b1428] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-1.5 rounded bg-[#070b14] border border-[#d4af37]/40">
              <WaystarCrest className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-cinzel text-base font-bold text-white">
                  UNITED STATES SECURITIES AND EXCHANGE COMMISSION
                </h3>
                <span className="px-2 py-0.5 text-[9px] font-mono uppercase bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 rounded">
                  FORM 10-K / ANNUAL REPORT
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-mono">
                COMMISSION FILE NUMBER: 001-38914 &middot; WAYSTAR ROYCO INC.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs text-slate-300 font-sans leading-relaxed">
          <div className="p-4 bg-[#050914] border border-slate-800 rounded font-mono text-[11px] space-y-1">
            <div><strong className="text-white">Registrant:</strong> Waystar Royco Incorporated</div>
            <div><strong className="text-white">State of Incorporation:</strong> Delaware (Operational Sovereign Entity)</div>
            <div><strong className="text-white">Principal Executive Offices:</strong> 666 Fifth Avenue, New York, NY 10019</div>
            <div><strong className="text-white">Securities Registered:</strong> Class A Super-Voting Common Stock (NYSE: WAY.R)</div>
          </div>

          <div className="space-y-4">
            <h4 className="font-cinzel text-sm font-bold text-amber-300 uppercase tracking-wider border-b border-slate-800 pb-1">
              ITEM 1A. RISK FACTORS (SELECTED EXTRACTS)
            </h4>

            <div className="space-y-2 p-3 bg-[#0a1122] rounded border border-slate-800">
              <strong className="text-white block">
                1. Dependence upon the Vital Stamina and Unpredictable Moods of Chairman Logan Roy.
              </strong>
              <p className="text-slate-400">
                Our commercial operations, regulatory immunity, and credit facility renewals are overwhelmingly dependent on the continued presence and psychological stamina of Founder Logan Roy. In the event of temporary patriarch incapacitation, the Company lacks an uncontested succession protocol, and sibling factional warfare could adversely impact consolidated EBITDA by up to 24%.
              </p>
            </div>

            <div className="space-y-2 p-3 bg-[#0a1122] rounded border border-slate-800">
              <strong className="text-white block">
                2. Potential Jurisdictional Re-Evaluation of Brightstar Maritime Operations.
              </strong>
              <p className="text-slate-400">
                While Brightstar Cruise Lines operates under the exclusive admiralty flag of the Marshall Islands, terrestrial regulatory bodies (including the US Department of Justice and Senate Commerce Subcommittees) continue to request historic passenger logs from voyages occurring between 1999 and 2014. The Company believes the physical degradation of historic microfiche has mitigated outstanding liability.
              </p>
            </div>

            <div className="space-y-2 p-3 bg-[#0a1122] rounded border border-slate-800">
              <strong className="text-white block">
                3. Living+ Longevity Real Estate Biological Tolerances.
              </strong>
              <p className="text-slate-400">
                The Company has pledged substantial forward balance sheet reserves to Living+, which promises affluent retirees indefinite cellular rejuvenation through oxygen-pressurized residential villas. Failure of subscribers to achieve biological immortality may generate localized breach-of-contract disputes with designated heirs.
              </p>
            </div>

            <div className="space-y-2 p-3 bg-[#0a1122] rounded border border-slate-800">
              <strong className="text-white block">
                4. Unsolicited Hostile Tender Offers from Nordic Tech Consortia.
              </strong>
              <p className="text-slate-400">
                The Company remains vigilant against speculative acquisition overtures from Scandinavian streaming enterprises (GoJo). The Board of Directors maintains a Poison Pill defense mechanism authorizing immediate issuance of 100,000,000 new Class-B preferred shares to the Roy Family Trust upon any unauthorized accumulation of 15% voting equity.
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-slate-800 bg-[#070c18] flex items-center justify-between text-xs shrink-0">
          <span className="font-mono text-slate-500 text-[10.5px]">CERTIFIED BY KARL MULLER, CFO &middot; SEC EDGAR TRANSMISSION</span>
          <button
            onClick={onClose}
            className="px-5 py-1.5 bg-[#d4af37] text-slate-950 font-bold text-xs uppercase tracking-wider rounded hover:bg-amber-400 transition-colors"
          >
            Acknowledge Filing
          </button>
        </div>
      </div>
    </div>
  );
}
