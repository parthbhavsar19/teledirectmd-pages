'use client';
import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'What We Treat', href: '/what-we-treat' },
  { label: 'Insurance', href: '/insurance' },
  { label: 'FAQ', href: '/faq' },
  { label: 'In the Media', href: '/media-mentions' },
  { label: 'Reviews', href: '/reviews' },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header className="tdmd-site-header">
      <div className="tdmd-header-inner">
        <a href="/" className="tdmd-header-logo">
          <img src="/logo.webp" alt="TeleDirectMD" width="180" height="76" />
        </a>

        <nav className="tdmd-header-nav-desktop" aria-label="Main navigation">
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href} className="tdmd-header-nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <a href="/book-online" className="tdmd-header-cta-desktop">Book Now</a>

        <button
          className="tdmd-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile overlay menu */}
      {menuOpen && (
        <div className="tdmd-mobile-overlay" onClick={() => setMenuOpen(false)}>
          <div className="tdmd-mobile-menu" onClick={e => e.stopPropagation()}>
            <div className="tdmd-mobile-menu-top">
              <a href="/" className="tdmd-header-logo">
                <img src="/logo.webp" alt="TeleDirectMD" width="160" height="67" />
              </a>
              <button
                className="tdmd-hamburger"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                </svg>
              </button>
            </div>
            <nav className="tdmd-mobile-nav" aria-label="Mobile navigation">
              {NAV_LINKS.map(link => (
                <a key={link.href} href={link.href} className="tdmd-mobile-nav-link" onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              ))}
            </nav>
            <a href="/book-online" className="tdmd-mobile-cta" onClick={() => setMenuOpen(false)}>Book Now</a>
          </div>
        </div>
      )}
    </header>
  );
}
