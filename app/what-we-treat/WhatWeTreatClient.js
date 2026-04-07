'use client';
import { useState, useEffect, useRef, useMemo } from 'react';

export default function WhatWeTreatClient({ categories, conditionDescriptions, stateCount }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [collapsedSections, setCollapsedSections] = useState({});
  const [activeCategory, setActiveCategory] = useState('');
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef(null);
  const resultsRef = useRef(null);

  /* Build search index from all conditions across categories */
  const searchIndex = useMemo(() => {
    const index = [];
    categories.forEach((cat) => {
      cat.conditions.forEach((c) => {
        const desc = conditionDescriptions[c.slug] || {};
        index.push({
          name: c.name,
          slug: c.slug,
          category: cat.categoryName,
          categorySlug: cat.categorySlug,
          keywords: (desc.keywords || '').toLowerCase(),
          description: desc.description || '',
          searchText: `${c.name} ${desc.description || ''} ${desc.keywords || ''}`.toLowerCase(),
        });
      });
    });
    return index;
  }, [categories, conditionDescriptions]);

  /* Search filtering */
  const searchResults = useMemo(() => {
    if (searchQuery.length < 2) return [];
    const q = searchQuery.toLowerCase().trim();
    return searchIndex.filter((item) => item.searchText.includes(q)).slice(0, 8);
  }, [searchQuery, searchIndex]);

  /* Toggle section collapse */
  const toggleSection = (slug) => {
    setCollapsedSections((prev) => ({ ...prev, [slug]: !prev[slug] }));
  };

  /* Scroll-spy for sidebar active link */
  useEffect(() => {
    const sections = document.querySelectorAll('.tdm-section');
    const handleScroll = () => {
      let current = '';
      sections.forEach((s) => {
        if (window.pageYOffset >= s.offsetTop - 100) {
          current = s.getAttribute('id');
        }
      });
      setActiveCategory(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Click outside to close search */
  useEffect(() => {
    const handleClick = (e) => {
      if (
        searchRef.current && !searchRef.current.contains(e.target) &&
        resultsRef.current && !resultsRef.current.contains(e.target)
      ) {
        setShowResults(false);
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  /* Smooth scroll to anchor */
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) {
      /* If collapsed, expand first */
      if (collapsedSections[sectionId]) {
        setCollapsedSections((prev) => ({ ...prev, [sectionId]: false }));
      }
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  /* Category icons */
  const categoryIcons = {
    'urgent-care': '🩺',
    'womens-health': '🩷',
    'sexual-health': '🔒',
    'skin-conditions': '🧴',
    'bites-and-infestations': '🐾',
    'chronic-medication-refills': '💊',
    'wellness-and-lifestyle': '✨',
  };

  return (
    <div className="tdm-page">
      {/* ── HERO ── */}
      <header className="tdm-hero">
        <div className="tdm-container">
          <div className="tdm-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
            Board-Certified Physician Care
          </div>
          <h1>What We Treat Online</h1>
          <p className="tdm-hero-sub">
            {searchIndex.length}+ conditions treated via secure video. Find yours below, review eligibility, and book same-day.
          </p>

          {/* Search */}
          <div className="tdm-search-wrap">
            <svg className="tdm-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
            </svg>
            <input
              ref={searchRef}
              type="search"
              className="tdm-search"
              placeholder="Search conditions..."
              autoComplete="off"
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setShowResults(true); }}
              onFocus={() => setShowResults(true)}
            />
            {showResults && searchQuery.length >= 2 && (
              <div className="tdm-results active" ref={resultsRef}>
                {searchResults.length === 0 ? (
                  <div className="tdm-result"><span>No conditions found.</span></div>
                ) : (
                  searchResults.map((item) => (
                    <a key={item.slug} className="tdm-result" href={`/${item.slug}`}>
                      <strong>{item.name}</strong>
                      <span>{item.category}</span>
                    </a>
                  ))
                )}
              </div>
            )}
          </div>

          {/* Category pills */}
          <nav className="tdm-pills">
            {categories.map((cat) => (
              <a
                key={cat.categorySlug}
                href={`#${cat.categorySlug}`}
                className="tdm-pill"
                onClick={(e) => scrollToSection(e, cat.categorySlug)}
              >
                {categoryIcons[cat.categorySlug] || '📋'} {cat.categoryName}
              </a>
            ))}
          </nav>

          {/* Trust signals */}
          <div className="tdm-trust">
            <div className="tdm-trust-item">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              Same-day appointments
            </div>
            <div className="tdm-trust-item">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              $49 flat fee
            </div>
            <div className="tdm-trust-item">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              Select insurances accepted
            </div>
            <div className="tdm-trust-item">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              Adults 18+
            </div>
          </div>
        </div>
      </header>

      {/* ── BANNER ── */}
      <aside className="tdm-banner">
        <div className="tdm-container">
          <div className="tdm-banner-content">
            <div className="tdm-banner-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              We treat common adult conditions safely via video
            </div>
            <div className="tdm-banner-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              If you need in-person care, we&rsquo;ll tell you
            </div>
            <div className="tdm-banner-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              Available in {stateCount}+ states
            </div>
          </div>
        </div>
      </aside>

      {/* ── MAIN ── */}
      <div className="tdm-container">
        <div className="tdm-main">

          {/* Sidebar (desktop) */}
          <aside className="tdm-sidebar">
            <nav className="tdm-sidebar-nav">
              <div className="tdm-sidebar-title">Categories</div>
              {categories.map((cat) => (
                <a
                  key={cat.categorySlug}
                  href={`#${cat.categorySlug}`}
                  className={`tdm-sidebar-link${activeCategory === cat.categorySlug ? ' active' : ''}`}
                  onClick={(e) => scrollToSection(e, cat.categorySlug)}
                >
                  {categoryIcons[cat.categorySlug] || '📋'} {cat.categoryName}
                </a>
              ))}
              <a href="/book-online" className="tdm-sidebar-cta">Book a Visit →</a>

              {/* Symptom Checker sidebar card */}
              <a className="tdm-sc-card" href="/symptom-checker">
                <div className="tdm-sc-icon">🩺</div>
                <p className="tdm-sc-title">Not sure where to start?</p>
                <p className="tdm-sc-sub">Answer a few quick questions and we&rsquo;ll guide you to the right care.</p>
                <span className="tdm-sc-btn">Check Symptoms →</span>
              </a>
            </nav>
          </aside>

          {/* Content */}
          <main className="tdm-content">
            {/* Mobile symptom checker */}
            <a className="tdm-sc-mobile" href="/symptom-checker">
              <div className="tdm-sc-mobile-inner">
                <div className="tdm-sc-mobile-icon">🩺</div>
                <div className="tdm-sc-mobile-text">
                  <p className="tdm-sc-mobile-title">Not sure where to start?</p>
                  <p className="tdm-sc-mobile-sub">Answer a few questions — we&rsquo;ll guide you to the right care.</p>
                </div>
                <span className="tdm-sc-mobile-arrow">→</span>
              </div>
            </a>

            {/* Category sections */}
            {categories.map((cat) => {
              const isCollapsed = collapsedSections[cat.categorySlug];
              return (
                <section
                  key={cat.categorySlug}
                  className={`tdm-section${isCollapsed ? ' collapsed' : ''}`}
                  id={cat.categorySlug}
                >
                  <div className="tdm-header" onClick={() => toggleSection(cat.categorySlug)}>
                    <div className="tdm-header-left">
                      <div className="tdm-icon">{categoryIcons[cat.categorySlug] || '📋'}</div>
                      <div>
                        <h2 className="tdm-title">{cat.categoryName}</h2>
                        <p className="tdm-subtitle">{cat.categoryDescription}</p>
                      </div>
                    </div>
                    <div className="tdm-toggle">
                      <svg className="tdm-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="6 9 12 15 18 9"/>
                      </svg>
                    </div>
                  </div>

                  {!isCollapsed && (
                    <div className="tdm-grid">
                      {cat.conditions.map((c) => {
                        const desc = conditionDescriptions[c.slug] || {};
                        return (
                          <article
                            key={c.slug}
                            className="tdm-card"
                            data-kw={desc.keywords || ''}
                          >
                            <h3 className="tdm-card-name">{c.name}</h3>
                            <p className="tdm-card-desc">{desc.description || ''}</p>
                            <div className="tdm-actions">
                              <a href="/book-online" className="tdm-btn tdm-btn-primary">Book Visit</a>
                              <a href={`/${c.slug}`} className="tdm-btn tdm-btn-secondary">Learn More →</a>
                            </div>
                          </article>
                        );
                      })}
                    </div>
                  )}
                </section>
              );
            })}
          </main>
        </div>
      </div>

      {/* ── WORK NOTE PROMO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #f3fafb 0%, #e8f4f6 100%)',
        padding: '3.5rem 1.5rem',
        borderTop: '1px solid #d4e8eb',
        borderBottom: '1px solid #d4e8eb',
      }}>
        <div className="tdm-container" style={{ maxWidth: '900px' }}>
          <div style={{
            background: '#fff',
            borderRadius: '16px',
            padding: '2.5rem',
            boxShadow: '0 2px 16px rgba(0,107,115,0.08)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ fontSize: '1.75rem' }}>📋</span>
              <h2 style={{
                margin: 0,
                fontSize: '1.5rem',
                color: 'var(--tdmd-navy, #003e52)',
                fontFamily: 'var(--tdmd-heading, Almarai, sans-serif)',
              }}>Need a Work or School Excuse Note?</h2>
            </div>
            <p style={{
              margin: 0,
              fontSize: '1.05rem',
              color: '#3a5a6a',
              lineHeight: '1.65',
            }}>
              Feeling sick and need a doctor's note for your employer or school? TeleDirectMD offers
              physician-reviewed work and school excuse notes for <strong>$39</strong> — no video call required.
              A board-certified MD reviews your case and delivers your note within <strong>4 hours</strong>,
              complete with a QR code your employer can use to verify its authenticity.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.92rem', color: '#4a7a8a' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#006b73"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                No appointment needed
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#006b73"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                Employer-verifiable
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#006b73"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                HIPAA-compliant
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#006b73"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                Available in 32+ states
              </span>
            </div>
            <div style={{ marginTop: '0.5rem' }}>
              <a
                href="/work-excuse-note"
                style={{
                  display: 'inline-block',
                  padding: '0.85rem 2rem',
                  background: 'var(--tdmd-teal, #006b73)',
                  color: '#fff',
                  borderRadius: '10px',
                  fontWeight: 700,
                  fontSize: '1rem',
                  textDecoration: 'none',
                  transition: 'background 0.2s',
                }}
              >Learn More & Get Your Note — $39</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="tdm-bottom">
        <div className="tdm-container">
          <h2>Ready to see a doctor today?</h2>
          <p>$49 flat fee. Select insurances also accepted. Available in {stateCount}+ states.</p>
          <a href="/book-online" className="tdm-cta">
            Book Your Visit
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <div className="tdm-features">
            <div className="tdm-feature"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>Adults 18+</div>
            <div className="tdm-feature"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>Board-certified MD</div>
            <div className="tdm-feature"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>Secure video visit</div>
            <div className="tdm-feature"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>LegitScript verified</div>
          </div>
        </div>
      </section>

      {/* ── MOBILE STICKY CTA ── */}
      <div className="tdm-mobile-cta"><a href="/book-online">Book a Visit — $49</a></div>
    </div>
  );
}
