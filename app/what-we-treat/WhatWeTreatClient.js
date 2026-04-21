'use client';
import { useState, useEffect, useRef, useMemo } from 'react';

export default function WhatWeTreatClient({ categories, conditionDescriptions }) {
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
              Available in 40+ states
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

      {/* ── INSURANCE ACCEPTED (state-specific discoverability) ── */}
      <section style={{ padding: "48px 0", background: "#F5FAFA", borderTop: "1px solid rgba(0,62,82,0.10)" }} data-speakable="true">
        <div className="tdm-container">
          <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 28, fontWeight: 700, color: "#003E52", margin: "0 0 8px", textAlign: "center" }}>Insurance Accepted for These Conditions</h2>
          <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: 16, color: "#4A6870", lineHeight: 1.6, margin: "0 auto 28px", textAlign: "center", maxWidth: 640 }}>We bill Aetna, select Blue Cross Blue Shield plans, and UnitedHealthcare for every condition above in select states. Pick your insurer to see state-specific coverage — or pay $49 flat self-pay anywhere.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, maxWidth: 960, margin: "0 auto" }}>
            {[
              { name: "Aetna", slug: "aetna", accent: "#7B2CBF", bg: "#F3EAFF", states: "AZ · CO · FL · GA · IL · MI · MN · OH · PA · TN" },
              { name: "Blue Cross Blue Shield", slug: "blue-cross-blue-shield", accent: "#1A5FB4", bg: "#EAF2FF", states: "FL · GA · IL · PA · TX" },
              { name: "UnitedHealthcare", slug: "united-healthcare", accent: "#1A7A3A", bg: "#E6FFF0", states: "CO · GA · IL · MN · NC · NJ · OH · OK · PA · TN · WA" },
            ].map((ins) => (
              <a key={ins.slug} href={`/insurance/${ins.slug}/`} style={{ display: "block", padding: 20, background: ins.bg, border: `1px solid ${ins.accent}22`, borderRadius: 12, textDecoration: "none", color: "inherit", transition: "transform 0.2s ease, box-shadow 0.2s ease" }}>
                <div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 18, fontWeight: 700, color: "#003E52", marginBottom: 6 }}>{ins.name}</div>
                <div style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: 13, color: ins.accent, fontWeight: 600, marginBottom: 8 }}>Accepted in: {ins.states}</div>
                <div style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: 13, color: ins.accent, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 4 }}>See {ins.name} coverage by state →</div>
              </a>
            ))}
          </div>
          <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: 14, color: "#4A6870", textAlign: "center", margin: "24px 0 0" }}>
            <a href="/insurance" style={{ color: "#006B73", fontWeight: 600, textDecoration: "none" }}>Check all coverage by state →</a>
          </p>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="tdm-bottom">
        <div className="tdm-container">
          <h2>Ready to see a doctor today?</h2>
          <p>$49 flat fee. Select insurances also accepted. Available in 40+ states.</p>
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
