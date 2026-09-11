import { useState, FormEvent } from 'react';
import { UserSession } from '../types';
import { WaystarCrest } from './WaystarCrest';
import { 
  X, 
  Lock, 
  KeyRound, 
  ShieldCheck, 
  User, 
  Check, 
  AlertCircle, 
  Building2, 
  FileCheck
} from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  initialMode: 'login' | 'signin';
  onClose: () => void;
  onLoginSuccess: (user: UserSession) => void;
}

const PRESET_EXECUTIVES: UserSession[] = [
  {
    name: 'Logan Roy',
    role: 'Founder, Chairman & CEO',
    clearanceLevel: 'LEVEL 5 &middot; SOVEREIGN AUTOCRAT',
    email: 'l.roy@waystarroyco.com',
    avatarInitials: 'LR',
    department: '7th Floor Sovereign Command'
  },
  {
    name: 'Kendall Roy',
    role: 'Executive Co-COO',
    clearanceLevel: 'LEVEL 4 &middot; BOARD TRUSTEE',
    email: 'k.roy@waystarroyco.com',
    avatarInitials: 'KR',
    department: 'Strategy & Capital Markets'
  },
  {
    name: 'Siobhan Roy',
    role: 'President of Domestic Operations',
    clearanceLevel: 'LEVEL 4 &middot; PRINCIPAL HEIR',
    email: 's.roy@waystarroyco.com',
    avatarInitials: 'SR',
    department: 'Government & Corporate Policy'
  },
  {
    name: 'Roman Roy',
    role: 'Co-COO & President of Star-Go',
    clearanceLevel: 'LEVEL 4 &middot; CREATIVE SYNERGIES',
    email: 'r.roy@waystarroyco.com',
    avatarInitials: 'RR',
    department: 'Entertainment & Studios'
  },
  {
    name: 'Tom Wambsgans',
    role: 'Chairman of ATN News Global',
    clearanceLevel: 'LEVEL 3 &middot; EDITORIAL DICTATE',
    email: 't.wambsgans@atnnews.com',
    avatarInitials: 'TW',
    department: 'Broadcast Operations'
  },
  {
    name: 'Gregory Hirsch',
    role: 'Executive Confidential Assistant',
    clearanceLevel: 'LEVEL 1 &middot; PROVISIONAL CLEARANCE',
    email: 'greg.hirsch@waystarroyco.com',
    avatarInitials: 'GH',
    department: 'Archival Retention / Shredding'
  }
];

export function AuthModal({ isOpen, initialMode, onClose, onLoginSuccess }: AuthModalProps) {
  const [activeTab, setActiveTab] = useState<'login' | 'signin'>(initialMode);
  
  // Custom Form States
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [department, setDepartment] = useState('Executive Suite');
  const [ndaAgreed, setNdaAgreed] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [errorNotice, setErrorNotice] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleExecutiveSelect = (exec: UserSession) => {
    setSubmitting(true);
    setTimeout(() => {
      onLoginSuccess(exec);
      setSubmitting(false);
      onClose();
    }, 400);
  };

  const handleCustomSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setErrorNotice('A valid Waystar Royco domain or shareholder credential is required.');
      return;
    }

    if (activeTab === 'signin' && !fullName.trim()) {
      setErrorNotice('Full legal name is required for statutory registry.');
      return;
    }

    if (activeTab === 'signin' && !ndaAgreed) {
      setErrorNotice('You must affirm the Permanent Non-Disparagement Covenant.');
      return;
    }

    setSubmitting(true);
    setErrorNotice(null);

    setTimeout(() => {
      const initials = (activeTab === 'signin' ? fullName : email.split('@')[0])
        .split(' ')
        .map(n => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2) || 'WR';

      const user: UserSession = {
        name: activeTab === 'signin' ? fullName : (email.split('@')[0].replace('.', ' ').toUpperCase()),
        role: activeTab === 'signin' ? 'Registered Institutional Affiliate' : 'Certified Enterprise User',
        clearanceLevel: 'LEVEL 2 &middot; ACCREDITED INVESTOR',
        email: email,
        avatarInitials: initials,
        department: department
      };

      onLoginSuccess(user);
      setSubmitting(false);
      onClose();
    }, 450);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        id="auth-credential-modal"
        className="relative w-full max-w-xl bg-[#080d1c] border border-[#d4af37]/45 rounded-xl shadow-2xl overflow-hidden text-slate-200 flex flex-col max-h-[92vh]"
      >
        {/* Top Gold Accent Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-amber-700 via-[#d4af37] to-amber-700 shrink-0" />

        {/* Modal Header */}
        <div className="p-5 border-b border-slate-800 bg-[#0b1428] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-1.5 rounded bg-[#070b14] border border-[#d4af37]/40">
              <WaystarCrest className="w-7 h-7" />
            </div>
            <div>
              <div className="text-[10px] font-mono tracking-widest text-[#d4af37] font-bold uppercase">
                WAYSTAR ROYCO &middot; IDENTITY &amp; ACCESS MANAGEMENT
              </div>
              <h3 className="font-cinzel text-base font-bold text-white">
                {activeTab === 'login' ? 'Executive & Shareholder Log In' : 'Institutional Sign In & Enrollment'}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs: Log In vs Sign In */}
        <div className="grid grid-cols-2 bg-[#050914] border-b border-slate-800 text-xs font-mono">
          <button
            type="button"
            onClick={() => { setActiveTab('login'); setErrorNotice(null); }}
            className={`py-3 text-center font-bold tracking-wider uppercase transition-colors border-b-2 ${
              activeTab === 'login'
                ? 'border-[#d4af37] text-amber-300 bg-[#0c1428]'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Log In (Existing Clearance)
          </button>
          <button
            type="button"
            onClick={() => { setActiveTab('signin'); setErrorNotice(null); }}
            className={`py-3 text-center font-bold tracking-wider uppercase transition-colors border-b-2 ${
              activeTab === 'signin'
                ? 'border-[#d4af37] text-amber-300 bg-[#0c1428]'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Sign In / Register New Account
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs text-slate-300 font-sans">
          {errorNotice && (
            <div className="p-3 rounded-lg bg-red-950/60 border border-red-500/40 text-red-300 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorNotice}</span>
            </div>
          )}

          {/* Quick Identity Selector (Fast Executive Pass) */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10.5px] uppercase tracking-wider text-[#d4af37] font-semibold flex items-center gap-1.5">
                <KeyRound className="w-3.5 h-3.5 text-amber-400" />
                Select Authorized C-Suite Identity (Fast Pass)
              </span>
              <span className="text-[10px] text-slate-500 font-mono">Simulated Clearance</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {PRESET_EXECUTIVES.map((exec) => (
                <button
                  key={exec.email}
                  type="button"
                  onClick={() => handleExecutiveSelect(exec)}
                  disabled={submitting}
                  className="p-2.5 rounded-lg bg-[#070d1a] border border-slate-800 hover:border-[#d4af37]/60 hover:bg-[#0c162e] transition-all text-left flex items-center gap-3 cursor-pointer group"
                >
                  <div className="w-8 h-8 rounded bg-[#0f1d38] border border-amber-500/30 flex items-center justify-center font-cinzel font-bold text-amber-300 text-xs shrink-0 group-hover:border-[#d4af37]">
                    {exec.avatarInitials}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-white group-hover:text-amber-200 truncate">
                      {exec.name}
                    </div>
                    <div className="text-[10px] text-slate-400 truncate">
                      {exec.role}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="relative flex py-1 items-center">
            <div className="flex-grow border-t border-slate-800"></div>
            <span className="flex-shrink mx-4 text-[10px] font-mono uppercase text-slate-500">
              Or Authenticate Manually
            </span>
            <div className="flex-grow border-t border-slate-800"></div>
          </div>

          {/* Manual Input Form */}
          <form onSubmit={handleCustomSubmit} className="space-y-4">
            {activeTab === 'signin' && (
              <div className="space-y-1.5">
                <label className="block text-[11px] font-mono uppercase text-slate-400">
                  Full Legal Name (As Filed on Corporate Registry)
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Adrian Brody or Karolina Novotney"
                    className="w-full bg-[#040812] border border-slate-700 focus:border-[#d4af37] pl-9 pr-3 py-2 rounded text-xs text-white outline-none"
                  />
                </div>
              </div>
            )}

            <div className="space-y-1.5">
              <label className="block text-[11px] font-mono uppercase text-slate-400">
                Corporate Email / Terminal Address
              </label>
              <div className="relative">
                <Building2 className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="identity@waystarroyco.com"
                  className="w-full bg-[#040812] border border-slate-700 focus:border-[#d4af37] pl-9 pr-3 py-2 rounded text-xs text-white outline-none"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="block text-[11px] font-mono uppercase text-slate-400">
                  Access Key / Security PIN
                </label>
                {activeTab === 'login' && (
                  <span className="text-[10px] text-amber-400/80 cursor-pointer hover:underline">
                    Forgot Key? Contact Karolina Novotney
                  </span>
                )}
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-[#040812] border border-slate-700 focus:border-[#d4af37] pl-9 pr-3 py-2 rounded text-xs text-white outline-none"
                />
              </div>
            </div>

            {activeTab === 'signin' && (
              <div className="space-y-1.5">
                <label className="block text-[11px] font-mono uppercase text-slate-400">
                  Affiliated Division / Institutional Entity
                </label>
                <select
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="w-full bg-[#040812] border border-slate-700 focus:border-[#d4af37] px-3 py-2 rounded text-xs text-slate-200 outline-none"
                >
                  <option value="Executive Suite">666 Fifth Avenue Executive Suite</option>
                  <option value="ATN Cable Broadcast">ATN Cable News Broadcast</option>
                  <option value="Brightstar Parks & Experiences">Brightstar Theme Parks &amp; Resorts</option>
                  <option value="Brightstar Maritime Fleet">Brightstar Ocean Cruise Fleet</option>
                  <option value="Star-Go Streaming & Studios">Star-Go Streaming &amp; Studios</option>
                  <option value="Roy Family Trust / Governance">Roy Family Trust / Family Office</option>
                  <option value="Institutional Equity Holder">Accredited Institutional Shareholder</option>
                </select>
              </div>
            )}

            {activeTab === 'signin' && (
              <label className="flex items-start gap-2.5 p-3 rounded bg-[#060b17] border border-slate-800 text-[11px] text-slate-400 cursor-pointer">
                <input
                  type="checkbox"
                  checked={ndaAgreed}
                  onChange={(e) => setNdaAgreed(e.target.checked)}
                  className="mt-0.5 rounded border-slate-700 text-[#d4af37] focus:ring-0"
                />
                <span>
                  I legally affirm compliance with the Waystar Royco Global Non-Disparagement Covenant, 
                  agree to binding arbitration under the maritime jurisdiction of the Marshall Islands, and waive class action rights.
                </span>
              </label>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-2.5 rounded bg-gradient-to-r from-amber-600 via-[#d4af37] to-amber-600 text-slate-950 font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              {submitting ? (
                <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <ShieldCheck className="w-4 h-4 text-slate-950" />
                  <span>{activeTab === 'login' ? 'Authenticate & Enter Portal' : 'Enroll Credentials & Sign In'}</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Modal Footer */}
        <div className="p-3 border-t border-slate-800 bg-[#060a14] flex items-center justify-between text-[11px] text-slate-500 font-mono shrink-0">
          <span>PORTAL SECURED &middot; 4096-BIT LOGAN ROY TRUST PROTOCOL</span>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
