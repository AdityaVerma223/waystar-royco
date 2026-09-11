import { useState, FormEvent } from 'react';
import { ShieldAlert, AlertTriangle, CheckCircle2, X, Lock } from 'lucide-react';

interface WhistleblowerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WhistleblowerModal({ isOpen, onClose }: WhistleblowerModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    employeeId: '',
    department: 'cruises',
    incidentType: 'shredding',
    statement: '',
    acknowledgedNDA: false,
  });

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      employeeId: '',
      department: 'cruises',
      incidentType: 'shredding',
      statement: '',
      acknowledgedNDA: false,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        id="whistleblower-modal-container"
        className="relative w-full max-w-2xl bg-[#080d1a] border border-[#d4af37]/40 rounded-xl shadow-2xl overflow-hidden text-slate-200"
      >
        {/* Top Gold Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-amber-600 via-[#d4af37] to-amber-600" />

        {/* Modal Header */}
        <div className="p-6 border-b border-[#d4af37]/15 flex items-start justify-between bg-[#0b1224]/80">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-cinzel text-lg font-bold text-white tracking-wider">
                  CONFIDENTIAL ETHICS & DISCLOSURE PORTAL
                </h3>
                <span className="px-2 py-0.5 text-[10px] tracking-widest font-mono uppercase bg-red-950/70 border border-red-500/40 text-red-300 rounded">
                  MONITORED
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Managed under direct oversight of the Office of the General Counsel (Gerri Kellman)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            id="close-whistleblower-modal-btn"
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="inline-flex p-3 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-400 mb-2">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h4 className="font-cinzel text-xl text-white font-bold">
                INCIDENT SUBMISSION LOGGED (FILE REF: WR-GC-9941)
              </h4>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you for your candor. Your submission has been securely watermarked with your device IP, 
                building swipe record, and terminal session token. A copy has been delivered to 
                <strong> Gerri Kellman</strong> and the <strong>Rapid Risk Containment Committee</strong>.
              </p>
              <div className="p-4 bg-amber-950/20 border border-amber-600/30 rounded-lg text-left text-xs text-amber-200/90 space-y-1.5 max-w-lg mx-auto font-mono">
                <div className="font-semibold text-amber-300 uppercase tracking-wider">Operational Protocol Active:</div>
                <p>• Building security has temporarily recalibrated your 666 Fifth Avenue turnstile privileges.</p>
                <p>• Please remain seated at your desk. Two associates from Executive Human Resources will escort you to a complimentary off-site wellness evaluation.</p>
                <p>• Reminder: Deleting local Outlook sent items constitutes a violation of Section 8.2 of your Non-Compete.</p>
              </div>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleReset}
                  id="whistleblower-dismiss-btn"
                  className="px-6 py-2.5 bg-[#d4af37] text-black font-semibold text-xs tracking-widest uppercase hover:bg-amber-400 transition-colors rounded"
                >
                  Return to Corporate Portal
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              <div className="p-3 bg-amber-950/25 border border-amber-500/30 rounded-lg flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <p className="text-xs text-amber-200/90 leading-relaxed">
                  <strong>Mandatory Compliance Notice:</strong> In accordance with the Waystar Royco Employee Code of Loyalty,
                  anonymous disclosures are permitted; however, biometric keystroke telemetry and IP localization remain active
                  for quality assurance and corporate preservation.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-slate-300 mb-1.5">
                    Employee ID or Building Pass #
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., WR-NYC-88219 (or type GREG)"
                    value={formData.employeeId}
                    onChange={(e) => setFormData({ ...formData, employeeId: e.target.value })}
                    className="w-full bg-[#050812] border border-slate-700 focus:border-[#d4af37] px-3 py-2 rounded text-xs text-white outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-slate-300 mb-1.5">
                    Operating Division
                  </label>
                  <select
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full bg-[#050812] border border-slate-700 focus:border-[#d4af37] px-3 py-2 rounded text-xs text-white outline-none"
                  >
                    <option value="cruises">Brightstar Cruise Lines (Offshore Logs)</option>
                    <option value="atn">ATN Newsroom & Teleprompter Control</option>
                    <option value="parks">Brightstar Parks & Mascot Ventilation</option>
                    <option value="studios">Waystar Studios / Star-Go Streaming</option>
                    <option value="executive">Office of the Chairman (Subpoena Materials)</option>
                    <option value="living-plus">Living+ Real Estate (Oxygen Pressurization)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-slate-300 mb-1.5">
                  Nature of Irregularity
                </label>
                <select
                  value={formData.incidentType}
                  onChange={(e) => setFormData({ ...formData, incidentType: e.target.value })}
                  className="w-full bg-[#050812] border border-slate-700 focus:border-[#d4af37] px-3 py-2 rounded text-xs text-white outline-none"
                >
                  <option value="shredding">Premature Archival Document Shredding (Thanksgiving Day)</option>
                  <option value="health">Speculation Regarding Executive Chairman Stamina or Blood Pressure</option>
                  <option value="election">ATN Election Night Premature Winner Proclamation</option>
                  <option value="receipts">Secret Receipts Stashed in Unofficial Storage Locker</option>
                  <option value="ndas">Witnessed Unregistered Settlement on Yacht Deck</option>
                  <option value="other">General Moral Unease (Non-Actionable)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-slate-300 mb-1.5">
                  Detailed Statement of Concern
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Please state what you saw, who was in the room, and confirm whether you retained any physical carbon copies or USB flash drives..."
                  value={formData.statement}
                  onChange={(e) => setFormData({ ...formData, statement: e.target.value })}
                  className="w-full bg-[#050812] border border-slate-700 focus:border-[#d4af37] p-3 rounded text-xs text-white outline-none resize-none"
                />
              </div>

              <div className="pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={formData.acknowledgedNDA}
                    onChange={(e) => setFormData({ ...formData, acknowledgedNDA: e.target.checked })}
                    className="mt-1 accent-[#d4af37]"
                  />
                  <span className="text-xs text-slate-400 leading-relaxed">
                    I acknowledge that filing this disclosure waives my right to speak with the Department of Justice, 
                    The New York Times, or my personal legal representation without prior written approval from 
                    Frank Vernon and Gerri Kellman.
                  </span>
                </label>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                  <Lock className="w-3.5 h-3.5" />
                  <span>256-Bit Corporate Air-Gapped Transmission</span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    id="submit-whistleblower-btn"
                    className="px-5 py-2 bg-gradient-to-r from-amber-600 to-[#d4af37] text-slate-950 font-bold text-xs tracking-wider uppercase rounded hover:brightness-110 transition-all shadow-md"
                  >
                    Transmit to General Counsel
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
