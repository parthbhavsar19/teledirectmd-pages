'use client';
import { useState, useId } from 'react';

/* ── Stroke-based line icons (brand teal via currentColor) ──
   Consistent 24×24, stroke-width 1.75, round joins. No emoji, no fills. */
const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': 'true',
  focusable: 'false',
};

const Icons = {
  thermometer: (
    <svg {...iconProps}><path d="M14 14.76V5a2 2 0 0 0-4 0v9.76a4 4 0 1 0 4 0z" /></svg>
  ),
  virus: (
    <svg {...iconProps}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" /></svg>
  ),
  lungs: (
    <svg {...iconProps}><path d="M12 3v9" /><path d="M9 9c0 3-1 4-3.5 7C4 18 3 16.5 3 14c0-2.5 1.5-5 3-6 1.5-1 3 .5 3 1z" /><path d="M15 9c0 3 1 4 3.5 7 1.5-1 2.5-2.5 2.5-5 0-2.5-1.5-5-3-6-1.5-1-3 .5-3 1z" /></svg>
  ),
  droplet: (
    <svg {...iconProps}><path d="M12 2.7l5.3 6.9a6.7 6.7 0 1 1-10.6 0z" /></svg>
  ),
  ear: (
    <svg {...iconProps}><path d="M6 8.5a6 6 0 1 1 12 0c0 3-2.5 3.7-3.5 5.5-.6 1.1-.3 3-2 3a2.5 2.5 0 0 1-2.5-2.5" /><path d="M9 8.5a3 3 0 0 1 6 0" /></svg>
  ),
  eye: (
    <svg {...iconProps}><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="2.5" /></svg>
  ),
  tooth: (
    <svg {...iconProps}><path d="M12 5.5C10.5 4 8 3.5 6.5 5 5 6.5 5.5 9 6 11c.6 2.4.6 8 2 8s1-4 2-4 .6 4 2 4 1.4-5.6 2-8c.5-2 1-4.5-.5-6-1.5-1.5-4-1-5.5.5z" /></svg>
  ),
  bandage: (
    <svg {...iconProps}><rect x="3" y="8" width="18" height="8" rx="4" transform="rotate(-45 12 12)" /><path d="M12 10v.01M14 12v.01M10 12v.01M12 14v.01" /></svg>
  ),
  wave: (
    <svg {...iconProps}><path d="M3 12h3l2-6 3 12 2.5-9 2 5h4.5" /></svg>
  ),
  crystal: (
    <svg {...iconProps}><path d="M6 3h12l3 6-9 12L3 9z" /><path d="M3 9h18M9 3l3 6 3-6M12 9v12" /></svg>
  ),
  stethoscope: (
    <svg {...iconProps}><path d="M6 3v5a4 4 0 0 0 8 0V3" /><path d="M6 3H4M14 3h2M10 15v1a5 5 0 0 0 5 5 4 4 0 0 0 4-4v-2" /><circle cx="19" cy="11" r="2" /></svg>
  ),
};

/* Map each urgent-care condition to a consistent line icon; fallback = stethoscope. */
const conditionIcon = {
  'common-cold-treatment-online': Icons.droplet,
  'covid-19-treatment-online': Icons.virus,
  'influenza-treatment-online': Icons.thermometer,
  'sinus-infection-treatment-online': Icons.lungs,
  'sore-throat-treatment-online': Icons.wave,
  'ear-pain-treatment-online': Icons.ear,
  'pink-eye-treatment-online': Icons.eye,
  'dental-pain-treatment-online': Icons.tooth,
  'uti-treatment-online': Icons.droplet,
  'cellulitis-treatment-online': Icons.bandage,
  'shingles-treatment-online': Icons.wave,
  'gout-treatment-online': Icons.crystal,
  'mastitis-treatment-online': Icons.droplet,
  'viral-gastroenteritis-treatment-online': Icons.virus,
  'impetigo-treatment-online': Icons.bandage,
  'oral-thrush-treatment-online': Icons.wave,
};

export default function ConditionGridCanary({ category, conditionDescriptions }) {
  const [openSlug, setOpenSlug] = useState(null);
  const baseId = useId();

  const toggle = (slug) => setOpenSlug((prev) => (prev === slug ? null : slug));

  return (
    <section className="tdm-section wwtc" id={category.categorySlug}>
      {/* Clean header: small line icon + serif title + one-line subhead (no emoji, no teal banner) */}
      <header className="wwtc-header">
        <span className="wwtc-header-icon">{Icons.stethoscope}</span>
        <div className="wwtc-header-text">
          <h2 className="wwtc-title">{category.categoryName}</h2>
          <p className="wwtc-subtitle">{category.categoryDescription}</p>
        </div>
        <span className="wwtc-chip" aria-hidden="true">$79 flat fee · Same-day</span>
      </header>

      <div className="wwtc-grid">
        {category.conditions.map((c) => {
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
                <span className="wwtc-tile-icon">{conditionIcon[c.slug] || Icons.stethoscope}</span>
                <span className="wwtc-tile-name">{c.name}</span>
                <svg className="wwtc-tile-chevron" {...iconProps}><polyline points="6 9 12 15 18 9" /></svg>
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
