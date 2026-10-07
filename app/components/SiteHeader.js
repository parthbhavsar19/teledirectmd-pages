'use client';
import { useState, useEffect, useRef } from 'react';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  { label: 'What We Treat', href: '/what-we-treat/' },
  { label: 'Insurance', href: '/insurance/' },
  { label: 'Health Guides', href: '/health-guides/' },
  { label: 'Who We Serve', href: '/who-we-serve/' },
  { label: 'FAQ', href: '/faq/' },
  { label: 'In the Media', href: '/media-mentions/' },
  { label: 'Reviews', href: '/reviews/' },
];

/* Sun icon for dark mode (click to switch to light) */
const SunIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

/* Moon icon for light mode (click to switch to dark) */
const MoonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState('system');
  const [isDark, setIsDark] = useState(false);
  const burgerRef = useRef(null);
  const menuRef = useRef(null);
  const wasOpen = useRef(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Keyboard support for the mobile menu: focus moves into it on open, Tab
  // stays inside it, Escape closes it, and focus returns to the menu button.
  useEffect(() => {
    if (!menuOpen) {
      if (wasOpen.current && burgerRef.current) burgerRef.current.focus();
      wasOpen.current = false;
      return undefined;
    }
    wasOpen.current = true;
    const menu = menuRef.current;
    const focusables = () => Array.from(menu ? menu.querySelectorAll('a[href], button:not([disabled])') : []);
    const first = focusables()[0];
    if (first) first.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') { setMenuOpen(false); return; }
      if (e.key !== 'Tab') return;
      const items = focusables();
      if (!items.length) return;
      const firstEl = items[0];
      const lastEl = items[items.length - 1];
      if (e.shiftKey && document.activeElement === firstEl) { e.preventDefault(); lastEl.focus(); }
      else if (!e.shiftKey && document.activeElement === lastEl) { e.preventDefault(); firstEl.focus(); }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  // Initialize theme from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('tdmd-theme');
    if (stored === 'dark' || stored === 'light') {
      setTheme(stored);
      document.documentElement.setAttribute('data-theme', stored);
      setIsDark(stored === 'dark');
    } else {
      // system default
      const mq = window.matchMedia('(prefers-color-scheme: dark)');
      setIsDark(mq.matches);
      const handler = (e) => setIsDark(e.matches);
      mq.addEventListener('change', handler);
      return () => mq.removeEventListener('change', handler);
    }
  }, []);

  const toggleTheme = () => {
    const next = isDark ? 'light' : 'dark';
    setTheme(next);
    setIsDark(next === 'dark');
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('tdmd-theme', next);
  };

  return (
    <header className="tdmd-site-header">
      <div className="tdmd-header-inner">
        <a href="/" className="tdmd-header-logo">
          <img src="/logo.webp" alt="TeleDirectMD" width="180" height="76" fetchPriority="high" />
        </a>

        <nav className="tdmd-header-nav-desktop" aria-label="Main navigation">
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href} className="tdmd-header-nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="tdmd-theme-toggle"
          onClick={toggleTheme}
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDark ? <SunIcon /> : <MoonIcon />}
        </button>

        <a href="/book-online/" className="tdmd-header-cta-desktop">Book Now</a>

        <button
          ref={burgerRef}
          className="tdmd-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="tdmd-mobile-menu"
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
          <div id="tdmd-mobile-menu" ref={menuRef} className="tdmd-mobile-menu" role="dialog" aria-modal="true" aria-label="Menu" onClick={e => e.stopPropagation()}>
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1.5rem' }}>
              <button
                className="tdmd-theme-toggle"
                onClick={toggleTheme}
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                style={{ width: '2.75rem', height: '2.75rem' }}
              >
                {isDark ? <SunIcon /> : <MoonIcon />}
              </button>
              <span style={{ color: 'var(--tdmd-muted)', fontSize: '0.95rem' }}>
                {isDark ? 'Light mode' : 'Dark mode'}
              </span>
            </div>
            <a href="/book-online/" className="tdmd-mobile-cta" onClick={() => setMenuOpen(false)}>Book Now</a>
          </div>
        </div>
      )}
    </header>
  );
}
