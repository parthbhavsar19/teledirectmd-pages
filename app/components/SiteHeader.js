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

/* Both icons are rendered; CSS shows the moon in light mode and the sun in
   dark mode based on <html data-theme>, so the right icon shows on first
   paint, before React hydrates. */
const SunIcon = () => (
  <svg className="tdmd-icon-sun" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

const MoonIcon = () => (
  <svg className="tdmd-icon-moon" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

// The visitor's saved choice ('dark' | 'light'), or null to follow the system.
function readStoredTheme() {
  try {
    const t = localStorage.getItem('tdmd-theme');
    if (t === 'dark' || t === 'light') return t;
    const legacy = localStorage.getItem('tdmd-dark-mode');
    if (legacy === 'true') return 'dark';
    if (legacy === 'false') return 'light';
  } catch (e) { /* storage blocked */ }
  return null;
}

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
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

  // The inline script in app/layout.js has already set <html data-theme>
  // (saved choice, else system preference). Read it back here, follow system
  // changes while the visitor has not chosen, and follow other open tabs.
  useEffect(() => {
    const root = document.documentElement;
    const mq = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
    const stored = () => readStoredTheme();
    const apply = (t) => { root.setAttribute('data-theme', t); setIsDark(t === 'dark'); };
    apply(stored() || root.getAttribute('data-theme') || (mq && mq.matches ? 'dark' : 'light'));
    const onSystem = (e) => { if (!stored()) apply(e.matches ? 'dark' : 'light'); };
    const onStorage = (e) => {
      if (e.key !== 'tdmd-theme') return;
      apply(stored() || (mq && mq.matches ? 'dark' : 'light'));
    };
    if (mq) {
      if (mq.addEventListener) mq.addEventListener('change', onSystem);
      else if (mq.addListener) mq.addListener(onSystem);
    }
    window.addEventListener('storage', onStorage);
    return () => {
      if (mq) {
        if (mq.removeEventListener) mq.removeEventListener('change', onSystem);
        else if (mq.removeListener) mq.removeListener(onSystem);
      }
      window.removeEventListener('storage', onStorage);
    };
  }, []);

  const toggleTheme = () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setIsDark(next === 'dark');
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('tdmd-theme', next);
      localStorage.setItem('tdmd-dark-mode', String(next === 'dark'));
    } catch (e) { /* storage blocked: the choice lasts for this page only */ }
  };

  const toggleProps = {
    type: 'button',
    className: 'tdmd-theme-toggle',
    onClick: toggleTheme,
    'aria-label': 'Dark mode',
    'aria-pressed': isDark,
    title: isDark ? 'Switch to light mode' : 'Switch to dark mode',
  };

  return (
    <header className="tdmd-site-header">
      <div className="tdmd-header-inner">
        <a href="/" className="tdmd-header-logo">
          <img className="tdmd-logo-light" src="/logo.webp" alt="TeleDirectMD" width="180" height="76" fetchPriority="high" />
          <img className="tdmd-logo-dark" src="/brand/tdmd-logo-white-400.png" alt="TeleDirectMD" width="180" height="76" loading="lazy" />
        </a>

        <nav className="tdmd-header-nav-desktop" aria-label="Main navigation">
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href} className="tdmd-header-nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <button {...toggleProps}>
          <MoonIcon />
          <SunIcon />
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
                <img className="tdmd-logo-light" src="/logo.webp" alt="TeleDirectMD" width="160" height="67" />
                <img className="tdmd-logo-dark" src="/brand/tdmd-logo-white-400.png" alt="TeleDirectMD" width="160" height="67" loading="lazy" />
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
              <button {...toggleProps} aria-label={undefined} aria-labelledby="tdmd-theme-toggle-label" style={{ width: '2.75rem', height: '2.75rem' }}>
                <MoonIcon />
                <SunIcon />
              </button>
              <span id="tdmd-theme-toggle-label" style={{ color: 'var(--tdmd-muted)', fontSize: '0.95rem' }}>
                Dark mode
              </span>
            </div>
            <a href="/book-online/" className="tdmd-mobile-cta" onClick={() => setMenuOpen(false)}>Book Now</a>
          </div>
        </div>
      )}
    </header>
  );
}
