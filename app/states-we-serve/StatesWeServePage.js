'use client';

import { useRef } from 'react';
import USMap from '../components/USMap';

const SAMPLE_CONDITIONS = [
  { slug: 'common-cold-treatment-online', name: 'Common Cold' },
  { slug: 'uti-treatment-online', name: 'UTI' },
  { slug: 'acne-treatment-online', name: 'Acne' },
  { slug: 'asthma-refills-online', name: 'Asthma Refills' },
];

export default function StatesWeServePage({ states }) {
  const gridRef = useRef(null);
  const stateCount = states.length;

  const handleMapClick = (abbr) => {
    const el = document.getElementById(`state-card-${abbr.toLowerCase()}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.classList.add('tdmd-states-card-highlight');
      setTimeout(() => el.classList.remove('tdmd-states-card-highlight'), 2000);
    }
  };

  return (
    <>
      {/* 1) Hero */}
      <section className="tdmd-states-hero">
        <div className="tdmd-container">
          <span className="tdmd-states-badge">Licensed Physician-Led Telemedicine</span>
          <h1>States We Serve</h1>
          <p className="tdmd-states-hero-sub">
            Board-certified physician delivering secure video consultations to adults 18+ across more than 35 U.S. states. Same-day appointments, transparent pricing, no insurance required.
          </p>

          <div className="tdmd-states-stats">
            <div className="tdmd-states-stat">
              <div className="tdmd-states-stat-number">{stateCount}</div>
              <div className="tdmd-states-stat-label">States</div>
            </div>
            <div className="tdmd-states-stat">
              <div className="tdmd-states-stat-number">$49</div>
              <div className="tdmd-states-stat-label">Per Visit</div>
            </div>
            <div className="tdmd-states-stat">
              <div className="tdmd-states-stat-number">100%</div>
              <div className="tdmd-states-stat-label">Video Visits</div>
            </div>
            <div className="tdmd-states-stat">
              <div className="tdmd-states-stat-number">Same-Day</div>
              <div className="tdmd-states-stat-label">Available</div>
            </div>
          </div>

          <div className="tdmd-hero-ctas">
            <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book Your $49 Visit</a>
            <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">View All Conditions</a>
          </div>
        </div>
      </section>

      {/* 2) Emergency Banner */}
      <div className="tdmd-emergency-banner">
        <div className="tdmd-container">
          <strong>If you are experiencing a medical emergency, call 911 or go to your nearest emergency room.</strong>
        </div>
      </div>

      {/* 3) Coverage Map */}
      <section className="tdmd-section" id="coverage-map">
        <div className="tdmd-container">
          <h2>Where We Practice</h2>
          <p>Click a teal state to jump to its details below. Gray states are not currently covered.</p>
          <USMap
            states={states}
            onStateClick={handleMapClick}
            selectedState={null}
          />
        </div>
      </section>

      {/* 4) All Licensed States Grid */}
      <section className="tdmd-section tdmd-section-highlight" id="all-states" ref={gridRef}>
        <div className="tdmd-container">
          <h2>All {stateCount} Licensed States</h2>
          <p>Every state where TeleDirectMD is licensed to practice. Click a state for detailed telehealth information and condition pages.</p>

          <div className="tdmd-states-grid">
            {states
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((s) => (
                <div key={s.abbr} className="tdmd-states-card" id={`state-card-${s.slug}`}>
                  <div className="tdmd-states-card-header">
                    <span className="tdmd-states-card-abbr">{s.abbr}</span>
                    <h3>
                      <a href={`/${s.slug}`}>{s.name}</a>
                    </h3>
                  </div>
                  <div className="tdmd-states-card-conditions">
                    {SAMPLE_CONDITIONS.map((c) => (
                      <a key={c.slug} href={`/${s.slug}/${c.slug}`}>{c.name}</a>
                    ))}
                  </div>
                  <a href="/book-online" className="tdmd-btn tdmd-btn-primary" style={{ fontSize: '0.85rem', padding: '0.5rem 1rem', marginTop: '0.75rem' }}>
                    Book a visit
                  </a>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* 5) Bottom CTA */}
      <section className="tdmd-section">
        <div className="tdmd-container">
          <div className="tdmd-bottom-cta">
            <div className="tdmd-bottom-cta-copy">
              <h3>Ready to see a doctor?</h3>
              <p>Book a same-day video visit with a licensed MD. $49, no insurance required, from anywhere in our covered states.</p>
            </div>
            <div className="tdmd-bottom-cta-actions">
              <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit</a>
              <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">View All Conditions</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
