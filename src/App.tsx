/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { PageId, PressRelease, UserSession } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { LeadershipPage } from './components/LeadershipPage';
import { DivisionsPage } from './components/DivisionsPage';
import { PressReleasesPage } from './components/PressReleasesPage';
import { WhistleblowerModal } from './components/WhistleblowerModal';
import { SecModal } from './components/SecModal';
import { AuthModal } from './components/AuthModal';
import { PRESS_RELEASES } from './data/pressReleases';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [whistleblowerOpen, setWhistleblowerOpen] = useState(false);
  const [secModalOpen, setSecModalOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signin'>('login');
  const [selectedRelease, setSelectedRelease] = useState<PressRelease | null>(null);

  // User session with localStorage persistence
  const [currentUser, setCurrentUser] = useState<UserSession | null>(() => {
    try {
      const saved = localStorage.getItem('waystar_session');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const handleLoginSuccess = (user: UserSession) => {
    setCurrentUser(user);
    try {
      localStorage.setItem('waystar_session', JSON.stringify(user));
    } catch {
      // ignore
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    try {
      localStorage.removeItem('waystar_session');
    } catch {
      // ignore
    }
  };

  const handleOpenLogin = () => {
    setAuthMode('login');
    setAuthModalOpen(true);
  };

  const handleOpenSignIn = () => {
    setAuthMode('signin');
    setAuthModalOpen(true);
  };

  const handleSelectReleaseFromAnywhere = (release: PressRelease) => {
    setSelectedRelease(release);
    setCurrentPage('press');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#050811] text-slate-200 selection:bg-[#d4af37]/30 selection:text-amber-200">
      {/* Global Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenWhistleblower={() => setWhistleblowerOpen(true)}
        onOpenSecModal={() => setSecModalOpen(true)}
        currentUser={currentUser}
        onOpenLogin={handleOpenLogin}
        onOpenSignIn={handleOpenSignIn}
        onLogout={handleLogout}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            featuredReleases={PRESS_RELEASES}
            onSelectRelease={handleSelectReleaseFromAnywhere}
          />
        )}

        {currentPage === 'leadership' && (
          <LeadershipPage />
        )}

        {currentPage === 'divisions' && (
          <DivisionsPage />
        )}

        {currentPage === 'press' && (
          <PressReleasesPage
            selectedRelease={selectedRelease}
            onSelectRelease={setSelectedRelease}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenWhistleblower={() => setWhistleblowerOpen(true)}
      />

      {/* Satirical Confidential Whistleblower Modal */}
      <WhistleblowerModal
        isOpen={whistleblowerOpen}
        onClose={() => setWhistleblowerOpen(false)}
      />

      {/* SEC Form 10-K Filings Modal */}
      <SecModal
        isOpen={secModalOpen}
        onClose={() => setSecModalOpen(false)}
      />

      {/* Corporate Identity & Access Management (Log In / Sign In) Modal */}
      <AuthModal
        isOpen={authModalOpen}
        initialMode={authMode}
        onClose={() => setAuthModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </div>
  );
}
