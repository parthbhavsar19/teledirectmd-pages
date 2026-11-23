'use client';

import { useState } from 'react';

/* Hero directions for /what-we-treat. Preview only: one is kept after Parth picks. */

const POPULAR = [
  { label: 'UTI (women)', href: '/uti-treatment-online/' },
  { label: 'Sinus infection', href: '/sinus-infection-treatment-online/' },
  { label: 'BV', href: '/bv-treatment-online/' },
  { label: 'Yeast infection', href: '/yeast-infection-treatment-online/' },
  { label: 'Flu', href: '/influenza-treatment-online/' },
  { label: 'Medication refills', href: '#cat-chronic-medication-refills' },
];

const NOTE = 'Adults 18+ · No controlled substances · Red-flag screening on every visit';

/* A: search first */
export function HeroSearch({ setQuery, onJump }) {
  const [draft, setDraft] = useState('');
  const submit = (e) => {
    e.preventDefault();
    setQuery(draft);
    onJump();
  };
  return (
    <section className="wwt-hero wwt-hero-a">
      <div className="wwt-container">
        <div className="wwt-hero-copy">
          <span className="wwt-eyebrow">What we treat</span>
          <h1>What we treat online</h1>
          <p className="wwt-lede">
            60+ adult conditions, treated by live video with a board-certified physician.
            $79 flat, or select insurance, in 40+ states.
          </p>
          <form className="wwt-hero-search" role="search" onSubmit={submit}>
            <label htmlFor="wwt-hero-q" className="wwt-sr">Search conditions</label>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
              <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <input
              id="wwt-hero-q"
              type="search"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Search a condition"
              autoComplete="off"
            />
            <button type="submit" className="wwt-btn wwt-btn-on-dark">Search</button>
          </form>
          <div className="wwt-popular" aria-label="Popular conditions">
            <span className="wwt-popular-label">Popular</span>
            {POPULAR.map((p) => (
              <a key={p.label} className="wwt-pop" href={p.href}>{p.label}</a>
            ))}
          </div>
          <div className="wwt-hero-foot">
            <a className="wwt-textlink" href="/book-online/">Book a visit · $79 →</a>
            <span className="wwt-hero-note">{NOTE}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* B: physician first */
export function HeroPhysician({ categories }) {
  return (
    <section className="wwt-hero wwt-hero-b">
      <div className="wwt-container wwt-hero-b-grid">
        <div className="wwt-hero-copy">
          <span className="wwt-eyebrow">What we treat</span>
          <h1>60+ conditions, treated by a real doctor.</h1>
          <p className="wwt-lede">
            Live video visits with a board-certified physician. Not a chatbot, not a questionnaire,
            not a nurse queue. $79 flat, or select insurance, in 40+ states.
          </p>
          <div className="wwt-cta-row">
            <a className="wwt-btn wwt-btn-on-dark" href="/book-online/">Book a visit · $79</a>
            <a className="wwt-btn wwt-btn-outline-light" href="#wwt-results">Browse conditions</a>
          </div>
          <div className="wwt-catstrip" aria-label="Condition categories">
            {categories.map((c) => (
              <a key={c.categorySlug} href={`#cat-${c.categorySlug}`}>
                {c.categoryName} <span>{c.conditions.length}</span>
              </a>
            ))}
          </div>
        </div>
        <figure className="wwt-doc">
          <img
            src="/images/bhavsar-portrait.webp"
            alt="Parth Bhavsar, MD, board-certified family physician"
            width="480"
            height="600"
            loading="eager"
            decoding="async"
          />
          <figcaption>
            <strong>Parth Bhavsar, MD</strong>
            <span>Board-certified family physician</span>
            <span>Founder and medical director</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

/* C: answer first */
export function HeroAnswer({ categories }) {
  return (
    <section className="wwt-hero wwt-hero-c">
      <div className="wwt-container">
        <div className="wwt-hero-copy">
          <span className="wwt-eyebrow">What we treat</span>
          <h1>What can an online doctor treat?</h1>
          <p className="wwt-answer">
            At TeleDirectMD, a board-certified physician treats 60+ common adult conditions by live
            video, including UTIs in women, sinus infections, BV, yeast infections, flu, skin
            conditions and routine medication refills. Visits are $79 flat, or select insurance, in
            40+ states.
          </p>
        </div>
        <div className="wwt-fit">
          <div className="wwt-fit-col wwt-fit-yes">
            <h2>Good fit for a video visit</h2>
            <ul>
              {categories.map((c) => (
                <li key={c.categorySlug}>
                  <a href={`#cat-${c.categorySlug}`}>{c.categoryName}</a>
                  <span>{c.conditions.length}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="wwt-fit-col wwt-fit-no">
            <h2>Needs in-person care</h2>
            <ul>
              <li>Chest pain, trouble breathing or any emergency: call 911</li>
              <li>Symptoms that need a hands-on exam or same-day test</li>
              <li>Prescriptions for controlled substances</li>
              <li>UTIs in men</li>
              <li>Patients under 18</li>
            </ul>
          </div>
        </div>
        <div className="wwt-cta-row">
          <a className="wwt-btn wwt-btn-on-dark" href="/book-online/">Book a visit · $79</a>
          <a className="wwt-btn wwt-btn-outline-light" href="#wwt-results">Browse all conditions</a>
        </div>
      </div>
    </section>
  );
}
