'use client';
import { useState, useId } from 'react';

/* ── Soft-3D ceramic icons (owner-approved WebP assets in /public/icons/wwt) ──
   Decorative: alt="" since the adjacent condition name conveys the label. */
const ICON_BASE = '/icons/wwt';
const HEADER_ICON = 'stethoscope.webp';

/* Map each urgent-care condition slug to its icon filename; fallback = stethoscope. */
const conditionIconFile = {
  'common-cold-treatment-online': 'common_cold.webp',
  'covid-19-treatment-online': 'covid.webp',
  'influenza-treatment-online': 'influenza.webp',
  'sinus-infection-treatment-online': 'sinus.webp',
  'sore-throat-treatment-online': 'sore_throat.webp',
  'ear-pain-treatment-online': 'ear_pain.webp',
  'pink-eye-treatment-online': 'pink_eye.webp',
  'dental-pain-treatment-online': 'dental.webp',
  'uti-treatment-online': 'uti.webp',
  'cellulitis-treatment-online': 'cellulitis.webp',
  'shingles-treatment-online': 'shingles.webp',
  'gout-treatment-online': 'gout.webp',
  'mastitis-treatment-online': 'mastitis.webp',
  'viral-gastroenteritis-treatment-online': 'gastro.webp',
  'impetigo-treatment-online': 'impetigo.webp',
  'oral-thrush-treatment-online': 'oral_thrush.webp',
};

/* Display-only tile order, ranked by real-world booking frequency.
   Scoped to canary-grid rendering; does not affect source data or schema. */
const DISPLAY_ORDER = [
  'uti-treatment-online',
  'influenza-treatment-online',
  'sore-throat-treatment-online',
  'shingles-treatment-online',
  'pink-eye-treatment-online',
  'sinus-infection-treatment-online',
  'common-cold-treatment-online',
  'covid-19-treatment-online',
  'viral-gastroenteritis-treatment-online',
  'ear-pain-treatment-online',
  'dental-pain-treatment-online',
  'cellulitis-treatment-online',
  'gout-treatment-online',
  'mastitis-treatment-online',
  'impetigo-treatment-online',
  'oral-thrush-treatment-online',
];

export default function ConditionGridCanary({ category, conditionDescriptions }) {
  const [openSlug, setOpenSlug] = useState(null);
  const baseId = useId();

  const toggle = (slug) => setOpenSlug((prev) => (prev === slug ? null : slug));

  /* Reorder tiles for RENDERING only; never mutate category.conditions
     (the JSON-LD ItemList builder consumes the original source order). */
  const rank = (slug) => {
    const i = DISPLAY_ORDER.indexOf(slug);
    return i === -1 ? DISPLAY_ORDER.length : i;
  };
  const orderedConditions = category.conditions
    .map((c, i) => ({ c, i }))
    .sort((a, b) => rank(a.c.slug) - rank(b.c.slug) || a.i - b.i)
    .map((x) => x.c);

  return (
    <section className="tdm-section wwtc" id={category.categorySlug}>
      {/* Clean header: small line icon + serif title + one-line subhead (no emoji, no teal banner) */}
      <header className="wwtc-header">
        <span className="wwtc-header-icon">
          <img src={`${ICON_BASE}/${HEADER_ICON}`} alt="" width="64" height="64" loading="lazy" decoding="async" />
        </span>
        <div className="wwtc-header-text">
          <h2 className="wwtc-title">{category.categoryName}</h2>
          <p className="wwtc-subtitle">{category.categoryDescription}</p>
        </div>
        <span className="wwtc-chip" aria-hidden="true">$79 flat fee · Same-day</span>
      </header>

      <div className="wwtc-grid">
        {orderedConditions.map((c) => {
          const desc = conditionDescriptions[c.slug] || {};
          const full = desc.full || desc.description || '';
          const isOpen = openSlug === c.slug;
          const panelId = `${baseId}-${c.slug}`;
          return (
            <div className={`wwtc-tile${isOpen ? ' open' : ''}`} key={c.slug} data-kw={desc.keywords || ''}>
              <button
                type="button"
                className="wwtc-tile-btn"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(c.slug)}
              >
                <span className="wwtc-tile-icon">
                  <img src={`${ICON_BASE}/${conditionIconFile[c.slug] || HEADER_ICON}`} alt="" width="48" height="48" loading="lazy" decoding="async" />
                </span>
                <span className="wwtc-tile-name">{c.name}</span>
                <svg className="wwtc-tile-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><polyline points="6 9 12 15 18 9" /></svg>
              </button>

              {/* Full description stays server-rendered in the DOM at all times;
                  visibility is toggled via CSS so SEO / AI-citation value is preserved. */}
              <div
                id={panelId}
                className="wwtc-panel"
                role="region"
                aria-label={`${c.name} details`}
                hidden={!isOpen}
              >
                <p className="wwtc-panel-desc">{full}</p>
                <div className="wwtc-panel-actions">
                  <a href="/book-online" className="tdm-btn tdm-btn-primary">Book Visit</a>
                  <a href={`/${c.slug}`} className="tdm-btn tdm-btn-secondary">Learn More →</a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="wwtc-section-cta">
        <a href="/book-online" className="tdm-btn tdm-btn-primary wwtc-section-cta-btn">Book a Visit — $79</a>
      </div>
    </section>
  );
}
