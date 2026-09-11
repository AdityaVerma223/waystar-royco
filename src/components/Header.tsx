import { useState, useEffect } from 'react';
import { PageId, UserSession } from '../types';
import { WaystarCrest } from './WaystarCrest';
import { ShieldAlert, TrendingUp, Menu, X, FileText, Globe2, Lock, User, LogOut } from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenWhistleblower: () => void;
  onOpenSecModal?: () => void;
  currentUser?: UserSession | null;
  onOpenLogin: () => void;
  onOpenSignIn: () => void;
  onLogout?: () => void;
}

export function Header({ 
  currentPage, 
  onNavigate, 
  onOpenWhistleblower, 
  onOpenSecModal,
  currentUser,
  onOpenLogin,
  onOpenSignIn,
  onLogout
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [stockPrice, setStockPrice] = useState(142.80);
  const [stockDelta, setStockDelta] = useState(1.84);

  // Subtle simulated tick every 8 seconds to give alive corporate feeling
  useEffect(() => {
    const interval = setInterval(() => {
      const variance = (Math.random() - 0.45) * 0.35;
      setStockPrice((prev) => +(prev + variance).toFixed(2));
      setStockDelta((prev) => +(prev + variance * 0.5).toFixed(2));
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const navItems: { id: PageId; label: string; subtext: string }[] = [
    { id: 'home', label: 'Home & Mission', subtext: 'The Sovereign Mandate' },
    { id: 'leadership', label: 'Leadership & Board', subtext: 'Executive Dynasty' },
    { id: 'divisions', label: 'Global Divisions', subtext: 'News • Parks • Cruises • Studios' },
    { id: 'press', label: 'Press Releases', subtext: 'Official Wire & Filings' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#050811]/95 backdrop-blur-md border-b border-[#d4af37]/20 transition-all">
      {/* Financial Ticker Marquee Strip */}
      <div className="bg-[#020408] border-b border-amber-500/15 py-1.5 px-4 overflow-hidden text-[11px] font-mono tracking-wider text-slate-400 select-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-6 overflow-x-auto scrollbar-none whitespace-nowrap">
            <div className="flex items-center gap-2 text-slate-300">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-semibold text-white">NYSE: WAY.R</span>
              <span className="text-amber-300 font-bold">${stockPrice.toFixed(2)}</span>
              <span className="text-emerald-400 font-bold flex items-center">
                <TrendingUp className="w-3 h-3 inline mr-0.5" /> +{stockDelta.toFixed(2)}%
              </span>
            </div>

            <span className="text-slate-600">|</span>

            <div className="flex items-center gap-2">
              <span className="text-slate-400">NASDAQ: GOJO</span>
              <span className="text-slate-300">$89.15</span>
              <span className="text-red-400">-1.85%</span>
            </div>

            <span className="text-slate-600">|</span>

            <div className="flex items-center gap-2 text-slate-400">
              <span>ATN PRIME TIME SHARE:</span>
              <span className="text-amber-400 font-bold">44.8% (#1)</span>
            </div>

            <span className="text-slate-600 hidden md:inline">|</span>

            <div className="hidden md:flex items-center gap-2 text-slate-400">
              <span>CRUISE ADMIRALTY JURISDICTION:</span>
              <span className="text-slate-200">MARSHALL ISLANDS (UNRESTRICTED)</span>
            </div>
          </div>

          <div className="shrink-0 hidden lg:flex items-center gap-3 text-slate-400">
            <span className="flex items-center gap-1 text-[10px] uppercase text-amber-400/80 bg-amber-950/40 border border-amber-500/20 px-2 py-0.5 rounded">
              <Globe2 className="w-3 h-3" /> 84 Sovereign Jurisdictions
            </span>
          </div>
        </div>
      </div>

      {/* Main Corporate Navigation Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Corporate Crest */}
          <button
            onClick={() => handleNavClick('home')}
            id="header-logo-home-btn"
            className="flex items-center gap-3.5 group text-left cursor-pointer focus:outline-none"
          >
            <div className="relative p-1 rounded border border-[#d4af37]/30 bg-[#0a1120] group-hover:border-[#d4af37] transition-all shadow-md">
              <WaystarCrest className="w-9 h-9 md:w-11 md:h-11" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-['Times_New_Roman',Times,serif] text-xl md:text-2xl font-bold tracking-normal text-white group-hover:text-amber-200 transition-colors">
                  Waystar Royco
                </span>
              </div>
              <p className="text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
                Global Media &middot; Experiences &middot; Enterprise
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-2 rounded-lg text-left transition-all cursor-pointer ${
                    isActive
                      ? 'bg-amber-500/10 text-amber-300 border border-[#d4af37]/40 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50 border border-transparent'
                  }`}
                >
                  <div className="font-cinzel text-xs font-bold tracking-wider uppercase">
                    {item.label}
                  </div>
                  <div className="text-[9.5px] tracking-tight text-slate-400 font-sans">
                    {item.subtext}
                  </div>
                  {isActive && (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action / Hotline Buttons & Login / Sign In Options at Top Right Corner */}
          <div className="hidden sm:flex items-center gap-2.5">
            {onOpenSecModal && (
              <button
                onClick={onOpenSecModal}
                id="sec-filings-btn"
                className="hidden xl:flex items-center gap-1.5 px-2.5 py-1.5 rounded bg-[#0b1426] border border-amber-500/20 text-slate-300 text-xs hover:border-[#d4af37] hover:text-amber-200 transition-all cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-amber-400" />
                <span className="tracking-wider text-[10.5px] font-mono">FORM 10-K</span>
              </button>
            )}

            <button
              onClick={onOpenWhistleblower}
              id="whistleblower-trigger-btn"
              title="Confidential Internal Reporting Portal"
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded bg-red-950/40 border border-red-500/30 text-red-300 text-xs font-semibold hover:bg-red-900/50 hover:border-red-400 transition-all cursor-pointer shadow-sm"
            >
              <ShieldAlert className="w-3.5 h-3.5 text-red-400 animate-pulse" />
              <span className="tracking-wider text-[10.5px]">WHISTLEBLOWER</span>
            </button>

            {currentUser ? (
              <div className="flex items-center gap-2 pl-2 border-l border-slate-800">
                <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-[#0a1224] border border-[#d4af37]/40">
                  <div className="w-6 h-6 rounded bg-[#0f1d38] border border-amber-500/40 text-[#d4af37] flex items-center justify-center text-[10px] font-bold font-mono">
                    {currentUser.avatarInitials}
                  </div>
                  <div className="text-left leading-tight hidden xl:block">
                    <div className="text-xs font-semibold text-white truncate max-w-[110px]">
                      {currentUser.name}
                    </div>
                    <div className="text-[9px] font-mono text-amber-400 truncate max-w-[110px]">
                      {currentUser.role}
                    </div>
                  </div>
                </div>
                {onLogout && (
                  <button
                    onClick={onLogout}
                    id="header-logout-btn"
                    title="Sign Out"
                    className="p-1.5 text-slate-400 hover:text-white rounded border border-slate-800 hover:border-slate-700 bg-[#070c18] transition-colors cursor-pointer"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-2 pl-2 border-l border-slate-800">
                <button
                  onClick={onOpenLogin}
                  id="header-login-btn"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#0a1224] border border-slate-700 hover:border-[#d4af37] text-slate-200 hover:text-white text-xs font-semibold transition-all cursor-pointer shadow-sm"
                >
                  <Lock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Log In</span>
                </button>

                <button
                  onClick={onOpenSignIn}
                  id="header-signin-btn"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-gradient-to-r from-amber-600 via-[#d4af37] to-amber-600 hover:brightness-110 text-slate-950 text-xs font-bold transition-all cursor-pointer shadow-md"
                >
                  <User className="w-3.5 h-3.5 text-slate-950" />
                  <span>Sign In</span>
                </button>
              </div>
            )}
          </div>

          {/* Mobile Hamburger Toggle & Mobile Login */}
          <div className="flex items-center gap-2 lg:hidden">
            {!currentUser && (
              <button
                onClick={onOpenLogin}
                className="p-2 text-amber-300 hover:text-amber-200 border border-amber-500/30 rounded bg-amber-950/30"
                aria-label="Log In"
              >
                <Lock className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={onOpenWhistleblower}
              className="p-2 text-red-400 hover:text-red-300 border border-red-500/30 rounded bg-red-950/30"
              aria-label="Whistleblower Portal"
            >
              <ShieldAlert className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              className="p-2 text-slate-300 hover:text-white border border-slate-700 rounded bg-[#0a1120]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#d4af37]/20 bg-[#070b14] px-4 pt-3 pb-6 space-y-2">
          {currentUser ? (
            <div className="p-3 rounded-lg bg-[#0a1224] border border-[#d4af37]/40 flex items-center justify-between mb-2">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded bg-[#0f1d38] border border-amber-500/40 text-[#d4af37] flex items-center justify-center text-xs font-bold font-mono">
                  {currentUser.avatarInitials}
                </div>
                <div>
                  <div className="text-xs font-bold text-white">{currentUser.name}</div>
                  <div className="text-[10px] text-amber-400">{currentUser.role}</div>
                </div>
              </div>
              {onLogout && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onLogout();
                  }}
                  className="px-2.5 py-1 rounded bg-[#070c18] border border-slate-800 text-[11px] text-slate-300 hover:text-white"
                >
                  Sign Out
                </button>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-2 mb-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLogin();
                }}
                id="mobile-drawer-login-btn"
                className="flex items-center justify-center gap-1.5 p-2.5 rounded bg-[#0a1224] border border-slate-700 text-slate-200 text-xs font-semibold"
              >
                <Lock className="w-3.5 h-3.5 text-amber-400" />
                <span>Log In</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSignIn();
                }}
                id="mobile-drawer-signin-btn"
                className="flex items-center justify-center gap-1.5 p-2.5 rounded bg-gradient-to-r from-amber-600 via-[#d4af37] to-amber-600 text-slate-950 text-xs font-bold"
              >
                <User className="w-3.5 h-3.5 text-slate-950" />
                <span>Sign In</span>
              </button>
            </div>
          )}

          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left p-3 rounded-lg flex flex-col justify-center transition-all ${
                  isActive
                    ? 'bg-amber-500/15 border border-[#d4af37]/50 text-amber-300'
                    : 'text-slate-200 hover:bg-slate-800/40 border border-transparent'
                }`}
              >
                <div className="font-cinzel font-bold text-sm tracking-wide">{item.label}</div>
                <div className="text-xs text-slate-400">{item.subtext}</div>
              </button>
            );
          })}
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWhistleblower();
              }}
              className="w-full flex items-center justify-center gap-2 p-2.5 rounded bg-red-950/40 border border-red-500/30 text-red-300 text-xs font-bold uppercase tracking-wider"
            >
              <ShieldAlert className="w-4 h-4 text-red-400" />
              Whistleblower Integrity Portal (Gerri Kellman)
            </button>
            {onOpenSecModal && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSecModal();
                }}
                className="w-full flex items-center justify-center gap-2 p-2.5 rounded bg-[#0b1426] border border-amber-500/30 text-amber-300 text-xs font-mono"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                SEC Filings &amp; Sovereign Disclosures
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
