'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import Image from 'next/image';
import './wwt-redesign.css';

/* ── Config ──────────────────────────────────────────────────────────────── */
/* Six states not yet available. Lowercase to match the SVG's <path class="XX"> */
const NOT_COVERED = ['or', 'nm', 'ar', 'ny', 'ri', 'ma'];
const COVERED_STATE_COUNT = 44;

const CATEGORY_LABELS = {
  'urgent-care': 'Urgent care',
  'womens-health': 'Women’s health',
  'sexual-health': 'Sexual health',
  'skin-conditions': 'Skin',
  'bites-and-infestations': 'Bites & infestations',
  'chronic-medication-refills': 'Refills',
  'wellness-and-lifestyle': 'Wellness',
  'travel-medicine': 'Travel',
};

/* ── Helpers ─────────────────────────────────────────────────────────────── */
function easeOut(t) { return 1 - Math.pow(1 - t, 3); }

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const handler = (e) => setReduced(e.matches);
    mq.addEventListener?.('change', handler);
    return () => mq.removeEventListener?.('change', handler);
  }, []);
  return reduced;
}

/* Run one callback the first time an element enters the viewport */
function useOnceInView(ref, cb, threshold = 0.3) {
  useEffect(() => {
    if (!ref.current) return;
    if (typeof IntersectionObserver === 'undefined') { cb(); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { cb(); io.disconnect(); }
      });
    }, { threshold });
    io.observe(ref.current);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

/* ── US Map (inline SVG) ─────────────────────────────────────────────────── */
function UsMap({ animate }) {
  const [covered, setCovered] = useState(() => new Set(animate ? [] : ['*']));
  const [count, setCount]     = useState(animate ? 0 : COVERED_STATE_COUNT);
  const wrapRef = useRef(null);

  useOnceInView(wrapRef, () => {
    if (!animate) return;
    const paths = wrapRef.current?.querySelectorAll('path[data-state]') || [];
    const list = Array.from(paths)
      .filter((p) => !NOT_COVERED.includes(p.dataset.state))
      .sort((a, b) => {
        const ax = parseFloat((a.getAttribute('d') || '').split(/[Mm]/)[1] || '0');
        const bx = parseFloat((b.getAttribute('d') || '').split(/[Mm]/)[1] || '0');
        return ax - bx;
      });
    const duration = 3200;
    const stagger = duration / Math.max(1, list.length);
    let counted = 0;
    list.forEach((p, i) => {
      setTimeout(() => {
        setCovered((prev) => new Set(prev).add(p.dataset.state));
        if (p.dataset.state !== 'dc') {
          counted += 1;
          setCount(Math.min(COVERED_STATE_COUNT, counted));
        }
      }, i * stagger);
    });
  });

  const isOn = (code) => covered.has('*') || covered.has(code);

  return (
    <div className="wwt-map-wrap" ref={wrapRef}>
      <svg
        className="wwt-map"
        viewBox="0 0 959 593"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        {US_PATHS.map(([code, d]) => (
          <path
            key={code}
            data-state={code}
            d={d}
            className={`wwt-state${isOn(code) ? ' on' : ''}${code === 'dc' ? ' dc' : ''}`}
          />
        ))}
      </svg>
      <div className="wwt-map-legend">
        <span className="wwt-key"><span className="wwt-sw on" /> Covered</span>
        <span className="wwt-key"><span className="wwt-sw off" /> Not yet</span>
        <span className="wwt-map-count">{count} states + D.C.</span>
      </div>
    </div>
  );
}

/* ── By-the-numbers band ─────────────────────────────────────────────────── */
function ByTheNumbers({ totalConditions, stateCount }) {
  const reduced = useReducedMotion();
  const bandRef = useRef(null);
  const [n, setN] = useState(reduced ? totalConditions : 0);
  const [chip, setChip] = useState('Urgent care');
  const [ladderStates, setLadderStates] = useState(() =>
    reduced
      ? [
          { amt: 2500, on: true, crossed: true },
          { amt: 250,  on: true, crossed: true },
          { amt: 175,  on: true, crossed: true },
          { amt: 79,   on: true, crossed: false },
        ]
      : [
          { amt: 0, on: false, crossed: false },
          { amt: 0, on: false, crossed: false },
          { amt: 0, on: false, crossed: false },
          { amt: 0, on: false, crossed: false },
        ]
  );

  useOnceInView(bandRef, () => {
    if (reduced) return;
    /* conditions counter — 3s */
    const cats = ['Urgent care', 'Women’s health', 'Sexual health', 'Skin conditions', 'Bites & infestations', 'Medication refills', 'Wellness & lifestyle', 'Travel medicine', 'All categories'];
    const start = performance.now();
    const CDUR = 3000;
    let lastChip = 0;
    const step = (now) => {
      const t = Math.min(1, (now - start) / CDUR);
      const v = Math.round(totalConditions * easeOut(t));
      setN(v);
      const idx = Math.min(cats.length - 1, Math.floor((v / totalConditions) * (cats.length - 1)));
      if (idx !== lastChip) { lastChip = idx; setChip(cats[idx]); }
      if (t < 1) requestAnimationFrame(step);
      else setChip('All categories');
    };
    requestAnimationFrame(step);

    /* price ladder — staggered ~4.2s */
    const rows = [2500, 250, 175, 79];
    const LDUR = 4200;
    const stagger = LDUR / rows.length;
    rows.forEach((target, i) => {
      setTimeout(() => {
        /* count up this row */
        const rowStart = performance.now();
        const RDUR = 1100;
        const rowStep = (now) => {
          const t = Math.min(1, (now - rowStart) / RDUR);
          const v = Math.round(target * easeOut(t));
          setLadderStates((prev) => prev.map((r, j) => j === i ? { ...r, on: true, amt: v } : r));
          if (t < 1) requestAnimationFrame(rowStep);
          else if (i < rows.length - 1) {
            setTimeout(() => {
              setLadderStates((prev) => prev.map((r, j) => j === i ? { ...r, crossed: true } : r));
            }, 950);
          }
        };
        requestAnimationFrame(rowStep);
      }, i * stagger);
    });
  });

  const rows = [
    { label: 'ER visit', pct: 100 },
    { label: 'Urgent care', pct: 38 },
    { label: 'In-person PCP', pct: 22 },
    { label: 'TeleDirectMD', pct: 10, final: true },
  ];

  return (
    <section className="wwt-numbers" id="wwt-numbers" ref={bandRef} aria-label="By the numbers">
      <div className="wwt-container">
        <div className="wwt-head">
          <span className="wwt-eyebrow">By the numbers</span>
          <h2>Broad care. One price. Nearly every state.</h2>
        </div>
        <div className="wwt-numbers-grid">
          <div className="wwt-stat">
            <span className="wwt-label">Conditions treated</span>
            <h3>Adult care we cover today</h3>
            <div className="wwt-counter" aria-live="polite">
              <span>{n}</span><span className="wwt-plus" aria-hidden="true">+</span>
              <span className="wwt-chip">{chip}</span>
            </div>
            <p className="wwt-foot">
              Eight categories, from urgent care and skin conditions to sexual health, chronic refills, and travel medicine.
            </p>
          </div>

          <div className="wwt-stat">
            <span className="wwt-label">Cost of the same visit</span>
            <h3>Same care. Different bill.</h3>
            <ul className="wwt-ladder">
              {rows.map((r, i) => {
                const state = ladderStates[i];
                const cls = [
                  r.final ? 'final' : '',
                  state.on ? 'on' : '',
                  state.crossed ? 'crossed' : '',
                ].filter(Boolean).join(' ');
                return (
                  <li key={r.label} className={cls}>
                    <span className="wwt-who">
                      {r.label}
                      <span className="wwt-bar">
                        <span style={{ transform: `scaleX(${state.on ? r.pct / 100 : 0})` }} />
                      </span>
                    </span>
                    <span className="wwt-amt">${state.amt.toLocaleString('en-US')}</span>
                  </li>
                );
              })}
            </ul>
            <p className="wwt-foot">
              ER average based on <a href="https://www.kff.org/health-costs/emergency-department-visits-exceed-affordability-threshold-for-many-consumers-with-private-insurance/" target="_blank" rel="noopener noreferrer">KFF/Peterson-KFF Health System Tracker</a>. Illustrative comparison for uncomplicated adult visits; actual costs vary.
            </p>
          </div>

          <div className="wwt-stat">
            <span className="wwt-label">States covered</span>
            <h3>Coast to coast, corner to corner.</h3>
            <UsMap animate={!reduced} />
            <p className="wwt-foot">
              Key West to Anchorage to Honolulu. Six states not yet available: OR, NM, AR, NY, RI, MA.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Main client component ───────────────────────────────────────────────── */
export default function WhatWeTreatClient({ categories, conditionDescriptions, stateCount }) {
  const [query, setQuery] = useState('');
  const [activeCat, setActiveCat] = useState('all');

  const totalConditions = useMemo(
    () => categories.reduce((s, c) => s + c.conditions.length, 0),
    [categories]
  );

  const q = query.trim().toLowerCase();
  const visibleCategories = useMemo(() => {
    return categories
      .map((cat) => {
        const conds = cat.conditions.filter((c) => {
          const desc = conditionDescriptions[c.slug] || {};
          if (activeCat !== 'all' && activeCat !== cat.categorySlug) return false;
          if (!q) return true;
          const hay = `${c.name} ${desc.description || ''} ${desc.keywords || ''}`.toLowerCase();
          return hay.includes(q);
        });
        return { ...cat, conditions: conds };
      })
      .filter((c) => c.conditions.length > 0);
  }, [categories, conditionDescriptions, activeCat, q]);

  const totalShown = visibleCategories.reduce((s, c) => s + c.conditions.length, 0);
  const filtered = q.length > 0 || activeCat !== 'all';

  const chipsRef = useRef(null);
  const scrollToCategory = (slug) => {
    if (typeof window === 'undefined') return;
    requestAnimationFrame(() => {
      const target = slug === 'all'
        ? document.getElementById('wwt-results')
        : document.getElementById(`cat-${slug}`);
      if (!target) return;
      const headerH = 78;
      const toolbar = document.querySelector('.wwt-toolbar');
      const stickyOff = headerH + (toolbar?.offsetHeight || 0) + 16;
      const y = target.getBoundingClientRect().top + window.scrollY - stickyOff;
      window.scrollTo({ top: y, behavior: 'smooth' });
    });
  };

  const onChipClick = (slug) => {
    setActiveCat(slug);
    scrollToCategory(slug);
  };

  return (
    <div className="wwt-root">
      {/* Hero */}
      <section className="wwt-hero">
        <div className="wwt-container">
          <div className="wwt-hero-copy">
            <span className="wwt-eyebrow">What we treat</span>
            <h1>
              A real doctor —<br />
              not a chatbot, not an algorithm.<br />
              Without insurance, for $79.
            </h1>
            <p className="wwt-lede">
              Same-day video visits with a board-certified MD. $79 flat, or select insurance.
              Not a questionnaire, not a nurse queue — and a straight answer when telehealth isn’t the right tool for what you have.
            </p>
            <div className="wwt-cta-row">
              <a className="wwt-btn wwt-btn-on-dark" href="/book-online">Book a visit · $79</a>
              <a className="wwt-btn wwt-btn-outline-light" href="#wwt-results">Browse conditions</a>
            </div>
            <p className="wwt-hero-note">Adults 18+ · No controlled substances · Red-flag screening on every visit</p>
          </div>
        </div>
      </section>

      {/* By the numbers */}
      <ByTheNumbers totalConditions={totalConditions} stateCount={stateCount} />

      {/* Browse + toolbar */}
      <div className="wwt-browse">
        <div className="wwt-toolbar">
          <div className="wwt-container wwt-toolbar-in">
            <div className="wwt-search">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="11" cy="11" r="7"/><path d="m20 20-4.3-4.3"/>
              </svg>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search a condition, symptom, or medication"
                aria-label="Search conditions"
              />
            </div>
            <span className="wwt-count">
              {filtered
                ? `${totalShown} condition${totalShown === 1 ? '' : 's'} shown`
                : `${totalConditions}+ conditions`}
            </span>
          </div>
          <div className="wwt-container wwt-toolbar-row2">
            <div className="wwt-chips" ref={chipsRef} role="group" aria-label="Filter by category">
              <button
                className="wwt-chip"
                aria-pressed={activeCat === 'all'}
                onClick={() => onChipClick('all')}
              >All conditions</button>
              {categories.map((c) => (
                <button
                  key={c.categorySlug}
                  className="wwt-chip"
                  aria-pressed={activeCat === c.categorySlug}
                  onClick={() => onChipClick(c.categorySlug)}
                >{CATEGORY_LABELS[c.categorySlug] || c.categoryName}</button>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        <main className="wwt-container wwt-results" id="wwt-results">
          {visibleCategories.length === 0 && (
            <p className="wwt-empty">
              No conditions match “{query}”.{' '}
              <button
                className="wwt-linky"
                onClick={() => { setQuery(''); setActiveCat('all'); }}
              >Clear the filters</button>.
            </p>
          )}
          {visibleCategories.map((cat) => (
            <section className="wwt-group" id={`cat-${cat.categorySlug}`} key={cat.categorySlug}>
              <div className="wwt-group-head">
                <div>
                  <h2>{cat.categoryName}</h2>
                  {cat.categoryDescription && <p>{cat.categoryDescription}</p>}
                </div>
                <span className="wwt-n">{cat.conditions.length} condition{cat.conditions.length === 1 ? '' : 's'}</span>
              </div>
              <div className="wwt-grid">
                {cat.conditions.map((c) => {
                  const desc = conditionDescriptions[c.slug] || {};
                  return (
                    <article className="wwt-card" key={c.slug}>
                      <div className="wwt-card-art">
                        <Image
                          src={`/images/wwt/${c.slug}.webp`}
                          alt={`Illustration for ${c.name}`}
                          width={800}
                          height={500}
                          sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 33vw"
                          loading="lazy"
                        />
                      </div>
                      <div className="wwt-card-body">
                        <h3>{c.name}</h3>
                        <p>{desc.description || ''}</p>
                        <div className="wwt-card-foot">
                          <a className="wwt-link" href={`/${c.slug}`}>Learn more →</a>
                          <a
                            className="wwt-book-now"
                            href="/book-online"
                            aria-label={`Book a visit for ${c.name}`}
                          >Book now →</a>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          ))}
        </main>
      </div>

      {/* Scope discipline */}
      <section className="wwt-scope" id="wwt-scope">
        <div className="wwt-container">
          <span className="wwt-eyebrow">How we practice</span>
          <h2>The care you need — and an honest no when you need something else.</h2>
          <p className="wwt-scope-sub">
            Scope discipline is the product. These limits are written into every visit, not buried in a policy page.
          </p>
          <div className="wwt-scope-grid">
            <div className="wwt-scope-item">
              <h3>Red-flag screening every visit</h3>
              <p>If your symptoms point to something that needs hands-on care, we say so and direct you to an ER or in-person clinic. No upsell.</p>
            </div>
            <div className="wwt-scope-item">
              <h3>No controlled substances</h3>
              <p>We do not prescribe Schedule II–V medications by telehealth. That line does not move.</p>
            </div>
            <div className="wwt-scope-item">
              <h3>Adults 18 and older</h3>
              <p>TeleDirectMD treats adults. Anything outside our scope gets referred out rather than stretched to fit.</p>
            </div>
            <div className="wwt-scope-item">
              <h3>Physician-led, always</h3>
              <p>Every visit is a live video encounter with a board-certified MD, documented like any other clinical encounter.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance */}
      <section className="wwt-ins" id="insurance">
        <div className="wwt-container">
          <span className="wwt-eyebrow">Coverage</span>
          <h2>In-network in select states — or $79 flat, anywhere.</h2>
          <p className="wwt-ins-sub">
            We bill Aetna, select Blue Cross Blue Shield plans, UnitedHealthcare, and Curative. Self-pay visits are $79 and FSA/HSA eligible.
          </p>
          <div className="wwt-payers">
            <a className="wwt-payer" href="/insurance/aetna/">
              <h3>Aetna</h3>
              <p>AZ · CO · FL · GA · IL · MI · MN · OH · PA · TN</p>
            </a>
            <a className="wwt-payer" href="/insurance/blue-cross-blue-shield/">
              <h3>Blue Cross Blue Shield</h3>
              <p>FL · GA · IL · PA · TX</p>
            </a>
            <a className="wwt-payer" href="/insurance/united-healthcare/">
              <h3>UnitedHealthcare</h3>
              <p>CO · GA · IL · MN · NC · NJ · OH · OK · PA · TN · WA</p>
            </a>
            <a className="wwt-payer" href="/insurance/curative/">
              <h3>Curative</h3>
              <p>CA · DC · FL · GA · IN · LA · MD · OH · TX</p>
            </a>
          </div>
          <p className="wwt-ins-all"><a href="/insurance">Check all coverage by state →</a></p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="wwt-final">
        <div className="wwt-container">
          <h2>Ready to see a doctor today?</h2>
          <p>$79 flat, same day, with a board-certified MD. Available in 44 states and Washington, D.C. Select insurance also accepted.</p>
          <a className="wwt-btn wwt-btn-primary wwt-btn-lg" href="/book-online">Book your visit</a>
          <div className="wwt-badges">
            <span>Adults 18+</span>
            <span>Board-certified MD</span>
            <span>Secure video visit</span>
            <span>LegitScript verified</span>
            <span>HIPAA compliant</span>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ── US state paths (Albers projection, Wikimedia Commons CC0) ─────────── */
/* Set by inline data. Format: [ [id2, d], ... ]                                */
const US_PATHS = [["al", "m 643,467.4 .4,-7.3 -.9,-1.2 -1.7,-.7 -2.5,-2.8 .5,-2.9 48.8,-5.1 -.7,-2.2 -1.5,-1.5 -.5,-1.4 .6,-6.3 -2.4,-5.7 .5,-2.6 .3,-3.7 2.2,-3.8 -.2,-1.1 -1.7,-1 v -3.2 l -1.8,-1.9 -2.9,-6.1 -12.9,-45.8 -45.7,4 1.3,2 -1.3,67 4.4,33.2 .9,-.5 1.3,.1 .6,.4 .8,-.1 2,-3.8 v -2.3 l 1.1,-1.1 1.4,.5 3.4,6.4 v .9 l -3.3,2.2 3.5,-.4 4.9,-1.6 z"], ["ak", "m 15.8,572 h 2.4 l .7,.7 -1,1.2 -1.9,.2 -2.5,1.3 -3.7,-.1 2.2,-.9 .3,-1.1 2.5,-.3 z m 8.3,-1.7 1.3,.5 h .9 l .5,1.2 .3,-.6 .9,.2 1.1,1.5 0,.5 -4.2,1.9 -2.4,-.1 -1,-.5 -1.1,.7 -2,0 -1.1,-1.4 4.7,-.5 z m 5.4,-.1 1,.1 .7,.7 v 1 l -1.3,.1 -.9,-1.1 z m 2.5,.3 1.3,-.1 -.1,1 -1.1,.6 z m .3,2.2 3.4,-.1 .2,1.1 -1.3,.1 -.3,-.5 -.8,.6 -.4,-.6 -.9,-.2 z m 166.3,7.6 2.1,.1 -1,1.9 -1.1,-.1 -.4,-.8 .5,-1.3 m -1.1,-2.9 .6,-1.3 -.2,-2.3 2.4,-.5 4.5,4.4 1.3,3.4 1.9,1.6 .3,5.1 -1.4,0 -1.3,-2.3 -3.1,-2.4 h -.6 l 1.1,2.8 1.7,.2 .2,2.1 -.9,.1 -4.1,-4.4 -.1,-.9 1.9,-1 0,-1 -.5,-.8 -1.6,-.6 -1.7,-1.3 1.4,.1 .5,-.4 -.6,-.9 -.6,.5 z m -3.6,-9.1 1.3,.1 2.4,2.5 -.2,.8 -.8,-.1 -.1,1.8 .5,.5 0,1.5 -.8,.3 -.4,1.2 -.8,-.4 -.4,-2.2 1.1,-1.4 -2.1,-2.2 .1,-1.2 z m 1.5,-1.5 1.9,.2 2.5,.1 3.4,3.2 -.2,.5 -1.1,.6 -1.1,-.2 -.1,-.7 -1.2,-1.6 -.3,.7 1,1.3 -.2,1.2 -.8,-.1 -1.3,.2 -.1,-1.7 -2.6,-2.8 z m -12.7,-8.9 .9,-.4 h 1.6 l .7,-.5 4.1,2.2 .1,1.5 -.5,.5 h -.8 l -1.4,-.7 1.1,1.3 1.8,0 .5,2 -.9,0 -2.2,-1.5 -1.1,-.2 .6,1.3 .1,.9 .8,-.6 1.7,1.2 1.3,-.1 -.2,.8 1.9,4.3 0,3.4 .4,2.1 -.8,.3 -1.2,-2 -.5,-1.5 -1.6,-1.6 -.2,-2.7 -.6,-1.7 h -.7 l .3,1.1 0,.5 -1.4,1 .1,-3.3 -1.6,-1.6 -1.3,-2.3 -1.2,-1.2 z m 7.2,-2.3 1.1,1.8 2.4,-.1 1,2.1 -.6,.6 2,3.2 v 1.3 l -1.2,.8 v .7 l -2,1.9 -.5,-1.4 -.1,-1.3 .6,-.7 v -1.1 l -1.5,-1.9 -.5,-3.7 -.9,-1.5 z m -56.7,-18.3 -4,4.1 v 1.6 l 2.1,-.8 .8,-1.9 2.2,-2.4 z m -31.6,16.6 0,.6 1.8,1.2 .2,-1.4 .6,.9 3.5,.1 .7,-.6 .2,-1.8 -.5,-.7 -1.4,0 0,-.8 .4,-.6 v -.4 l -1.5,-.3 -3.3,3.6 z m -8.1,6.2 1.5,5.8 h 2.1 l 2.4,-2.5 .3,1.2 6.3,-4 .7,-1 -1,-1.1 v -.7 l .5,-1.3 -.9,-.1 -2,1 0,-1.2 -2.7,-.6 -2.4,.3 -.2,3.4 -.8,-2 -1.5,-.1 -1,.6 z m -2.2,8.2 .1,-.7 2.1,-1.3 .6,.3 1.3,.2 1.3,1.2 -2.2,-.2 -.4,-.6 -1,.6 z m -5.2,3.3 -1.1,.8 1.5,1.4 .8,-.7 -.1,-1.3 z m -6.3,-7.9 1.4,.1 .4,.6 -1.8,.1 z m -13.9,11.9 v .5 l .7,.1 -.1,-.6 z m -.4,-3.2 -1,1 v .5 l .7,1.1 1,-1 -.7,-.1 z m -2,-.8 -.3,1 -1.3,.1 -.4,.2 0,1.3 -.5,.9 .6,0 .7,-.9 .8,-.1 .9,-1 .2,-1.3 z m -4.4,-2 -.2,1.8 1.4,.8 1.2,-.6 0,-1 1.7,-.3 -.1,-.6 -.9,-.2 -.7,.6 -.9,-.5 z m -4.9,-.1 1,.7 -.3,1.2 -1.4,-1.1 z m -4.2,1.3 1.4,.1 -.7,.8 z m -3.5,3 1.8,1.1 -1.7,.1 z m -25.4,-31.2 1.2,.6 -.8,.6 z m -.7,-6.3 .4,1.2 .8,-1.2 z m 24.3,-19.3 1.5,-.1 .9,.4 1.1,-.5 1.3,-.1 1.6,.8 .8,1.9 -.1,.9 -1.2,2 -2.4,-.2 -2.1,-1.8 -1,-.4 -1.1,-2 z m -21.1,-14.4 .1,1.9 2,2 v .5 l -.8,-.2 -1.7,-.8 -.3,-1.1 -.3,-1.6 z m 18.3,-23.3 v 1.2 l 1.9,1.8 h 2.3 l .6,1.1 v 1.6 l 2.1,1.9 1.8,1.2 -.1,.7 -.7,1.1 -1.4,-1.2 -2.1,.1 -.8,-.8 -.9,-2.1 -1.5,-2.2 -2.6,-.1 -1,-.7 1,-2.1 z m 16.8,-4.5 1,0 .1,1.1 h -1 z m 16.2,19.7 .9,.1 0,1.2 -1.7,-.5 z m 127.8,77.7 -1.2,.4 -.1,1.1 h 1.2 z m -157.6,-4.5 -1.3,-.4 -4.1,.6 -2.8,1.4 -.1,1.9 1.9,.7 1.5,-.9 1.7,-.1 4.7,1.4 .1,-1.3 -1.6,-1.1 z m 2.1,2.3 -.4,-1.4 1.2,.2 .1,1.4 1.8,0 .4,-2.5 .3,2.4 2.5,-.1 3.2,-3.3 .8,.1 -.7,1.3 1.4,.9 4.2,-.2 2.6,-1.2 1.4,-.1 .3,1.5 .6,-.5 .4,-1.4 5.9,.2 1.9,-1.6 -1.3,-1.1 .6,-1.2 2.6,.2 -.2,-1.2 2.5,.2 .7,-1.1 1.1,.2 4.6,-1.9 .2,-1.7 5.6,-2.4 2,-1.9 1.2,-.6 1.3,.8 2.3,-.9 1.1,-1.9 .5,-1.3 1.7,-.9 1.5,-.7 .4,-1.4 -1.1,-1.7 -2.2,-.2 -.2,-1.3 .8,-1.6 1.4,-.2 1.3,-1.5 1.9,-.1 3.4,-3.2 .4,-1.4 1.5,-2.3 3.8,-4.1 2.5,-.9 1.9,-.9 2.1,.8 1.4,2.6 -1.5,0 -1.4,-1.5 -3,2 -1.7,.1 -.2,3.1 -3.1,4.9 .6,2 2.3,0 -.6,1 -1.4,.1 -2.4,1.8 0,.9 1.9,1 3.4,-.6 1.4,-1.7 1.4,.1 3,-1.7 .5,-2.3 1.6,-.1 6.3,.8 1,-1.1 1,-4.5 -1.6,1.1 .6,-2.2 -1.6,-1.4 .8,-1.5 .1,1.5 3.4,0 .7,-1 1.6,-.1 -.3,1.7 1.9,.1 -1.9,1.3 4.1,1.1 -3.5,.4 -1.3,1.2 .9,1.4 4.6,-1.7 2.3,1.7 .7,-.9 .6,1.4 4,2.3 h 2.9 l 3.9,-.5 4.3,1.1 2,1.9 4.5,.4 1.8,-1.5 .8,2.4 -1.8,.7 1.2,1.2 7.4,3.8 1.4,2.5 5.4,4.1 3.3,-2 -.6,-2.2 -3.5,-2 3.1,1.2 .5,-.7 .9,1.3 0,2.7 2.1,-.6 2.1,1.8 -2.5,-9.8 1.2,1.3 1.4,6 2.2,2.5 2.4,-.4 1.8,3.5 h .9 l .6,5.6 3.4,.5 1.6,2.2 1.8,1.1 .4,2.8 -1.8,2.6 2.9,1.6 1.2,-2.4 -.2,3.1 -.8,.9 1.4,1.7 .7,-2.4 -.2,-1.2 .8,.2 .6,2.3 -1,1.4 .6,2.6 .5,.4 .3,-1.6 .7,.6 -.3,2 1.2,.2 -.4,.9 1.7,-.1 0,-1 h -1 l .1,-1.7 -.8,-.6 1.7,-.3 .5,-.8 0,-1.6 .5,1.3 -.6,1.8 1.2,3.9 1.8,.1 2.2,-4.2 .1,-1.9 -1.3,-4 -.1,-1.2 .5,-1.2 -.7,-.7 -1.7,.1 -2.5,-2 -1.7,0 -2,-1.4 -1.5,0 -.5,-1.6 -1.4,-.3 -.2,-1.5 -1,-.5 .1,-1.7 -5.1,-7.4 -1.8,-1.5 v -1.2 l -4.3,-3.5 -.7,-1.1 -1.6,-2 -1.9,-.6 0,-2.2 -1.2,-1.3 -1.7,-.7 -2.1,1.3 -1.6,2.1 -.4,2.4 -1.5,.1 -2.5,2.7 -.8,-.3 v -2.5 l -2.4,-2.2 -2.3,-2 -.5,-2 -2.5,-1.3 .2,-2.2 -2.8,-.1 -.7,1.1 -1.2,0 -.7,-.7 -1.2,.8 -1.8,-1.2 0,-85.8 -6.9,-4.1 -1.8,-.5 -2.2,1.1 -2.2,.1 -2.3,-1.6 -4.3,-.6 -5.8,-3.6 -5.7,-.4 -2,.5 -.2,-1.8 -1.8,-.7 1.1,-1 -.2,-.9 -3.2,-1.1 h -2.4 l -.4,.4 -.9,-.6 .1,-2.6 -.8,-.9 -2.5,2.9 -.8,-.1 v -.8 l 1.7,-.8 v -.8 l -1.9,-2.4 -1.1,-.1 -4.5,3.1 h -3.9 l .4,-.9 -1.8,-.1 -5.2,3.4 -1.8,0 -.6,-.8 -2.7,1.5 -3.6,3.7 -2.8,2.7 -1.5,1.2  -2.6,.1 -2.2,-.4 -2.3,-1.3 v 0 l -2.8,3.9 -.1,2.4 2.6,2.4 2.1,4.5 .2,5.3 2.9,2 3.4,.4 .7,.8 -1.5,2.3 .7,2.7 -1.7,-2.6 v -2.4 l -1.5,-.3 .1,1.2 .7,2.1 2.9,3.7 h -1.4 l -2.2,1.1 -6.2,-2.5 -.1,-2 1.4,-1.3 0,-1.4 -2.1,-.5 -2.3,.2 -4.8,.2 1.5,2.3 -1.9,-1.8 -8.4,1.2 -.8,1.5 4.9,4.7 -.8,1.4 -.3,2 -.7,.8 -.1,1.9 4.4,3.6 4.1,.2 4.6,1.9 h 2 l .8,-.6 3.8,.1 .1,-.8 1.2,1.1 .1,2 -2.5,-.1 .1,3.3 .5,3.2 -2.9,2.7 -1.9,-.1 -2,-.8 -1,.1 -3.1,2.1 -1.7,.2 -1.4,-2.8 -3.1,0 -2.2,2 -.5,1.8 -3.3,1.8 -5.3,4.3 -.3,3.1 .7,2.2 1,1.2 1,-.4 .9,1 -.8,.6 -1.5,.9 1.1,1.5 -2.6,1.1 .8,2.2 1.7,2.3 .8,4.1 4,1.5 2.6,-.8 1.7,-1.1 .5,2.1 .3,4.4 -1.9,1.4 0,4.4 -.6,.9 h -1.7 l 1.7,1.2 2.1,-.1 .4,-1 4.6,-.6 2,2.6 1.3,-.7 1.3,5.1 1,.5 1,-.7 .1,-2.4 .9,-1 .7,1.1 .2,1.6 1.6,.4 4.7,-1.2 .2,1.2 -2,1.1 -1.6,1.7 -2.8,7 -4.3,2 -1.4,1.5 -.3,1.4 -1,-.6 -9.3,3.3 -1.8,4.1 -1.3,-.4 .5,-1.1 -1.5,-1.4 -3.5,-.2 -5.3,3.2 -2.2,1.3 -2.3,0 -.5,2.4 z"], ["az", "m 139.6,387.6 3,-2.2 .8,-2.4 -1,-1.6 -1.8,-.2 -1.1,-1.6 1.1,-6.9 1.6,-.3 2.4,-3.2 1.6,-7 2.4,-3.6 4.8,-1.7 1.3,-1.3 -.4,-1.9 -2.3,-2.5 -1.2,-5.8 -1.4,-1.8 -1.3,-3.4 .9,-2.1 1.4,-3 .5,-2.9 -.5,-4.9 1,-13.6 3.5,-.6 3.7,1.4 1.2,2.7 h 2 l 2.4,-2.9 3.4,-17.5 46.2,8.2 40,6 -17.4,124.1 -37.3,-5.4 -64.2,-37.5 .5,-2.9 2,-1.8 z"], ["ar", "m 584.2,367 .9,-2.2 1.2,.5 .7,-1 -.8,-.7 .3,-1.5 -1.1,-.9 .6,-1 -.1,-1.5 -1.1,-.1 .8,-.8 1.3,.8 .3,-1.4 -.4,-1.1 .1,-.7 2,.6 -.4,-1.5 1.6,-1.3 -.5,-.9 -1.1,.1 -.6,-.9 .9,-.9 1.6,-.2 .5,-.8 1.4,-.2 -.1,-.8 -.9,-.9 v -.5 h 1.5 l .4,-.7 -1.4,-1 -.1,-.6 -11.2,.8 2.8,-5.1 1.7,-1.5 v -2.2 l -1.6,-2.5 -39.8,2 -39.1,.7 4.1,24.4 -.7,39 2.6,2.3 2.8,-1.3 3.2,.8 .2,11.9 52.3,-1.3 1.2,-1.5 .5,-3 -1.5,-2.3 -.5,-2.2 .9,-.7 v -.8 l -1.7,-1.1 -.1,-.7 1.6,-.9 -1.2,-1.1 1.7,-7.1 3.4,-1.6 v -.8 l -1.1,-1.4 2.9,-5.4 h 1.9 l 1.5,-1.2 -.3,-5.2 3.1,-4.5 1.8,-.6 -.5,-3.1 z"], ["ca", "m 69.4,365.6 3.4,5.2 -1.4,.1 -1.8,-1.9 z m 1.9,-9.8 1.8,4.1 2.6,1 .7,-.6 -1.3,-2.5 -2.6,-2.4 z m -19.9,-19 v 2.4 l 2,1.2 4.4,-.2 1,-1 -3.1,-.2 z m -5.9,.1 3.3,.5 1.4,2.2 h -3.8 z m 47.9,45.5 -1,-3 .2,-3 -.4,-7.9 -1.8,-4.8 -1.2,-1.4 -.6,-1.5 -7,-8.6 -3.6,.1 -2,-1.9 1.1,-1.8 -.7,-3.7 -2.2,-1.2 -3.9,-.6 -2.8,-1.3 -1.5,-1.9 -4.5,-6.6 -2.7,-2.2 -3.7,-.5 -3.1,-2.3 -4.7,-1.5 -2.8,-.3 -2.5,-2.5 .2,-2.8 .8,-4.8 1.8,-5.1 -1.4,-1.6 -4,-9.4 -2.7,-3.7 -.4,-3 -1.6,-2.3 .2,-2.5 -2,-5 -2.9,-2.7 .6,-7.1 2.4,-.8 1.8,-3.1 -.4,-3.2 -1,-.9 h -2.5 l -2.5,-3.3 -1.5,-3.5 v -7.5 l 1.2,-4.2 .2,-2.1 2.5,.2 -.1,1.6 -.8,.7 v 2.5 l 3.7,3.2 v -4.7 l -1.4,-3.4 .5,-1.1 -1,-1.7 2.8,-1.5 -1.9,-3 -1.4,.5 -1.5,3.8 .5,1.3 -.8,1 -.9,-.1 -5.4,-6.1 .7,-5.6 -1.1,-3.9 -6.5,-12.8 .8,-10.7 2.3,-3.6 .2,-6.4 -5.5,-11.1 .3,-5.2 6.9,-7.5 1.7,-2.4 -.1,-1.4 4,-9.2 .1,-8.4 .9,-2.5 66.1,18.6 -16.4,63.1 1.1,3.5 70.4,105 -.9,2.1 1.3,3.4 1.4,1.8 1.2,5.8 2.3,2.5 .4,1.9 -1.3,1.3 -4.8,1.7 -2.4,3.6 -1.6,7 -2.4,3.2 -1.6,.3 -1.1,6.9 1.1,1.6 1.8,.2 1,1.6 -.8,2.4 -3,2.2 -2.2,-.1 z"], ["co", "m 374.6,323.3 -16.5,-1 -51.7,-4.8 -52.6,-6.5 11.5,-88.3 44.9,5.7 37.5,3.4 33.1,2.4 -1.4,22.1 z"], ["ct", "m 873.5,178.9 .4,-1.1 -3.2,-12.3 -.1,-.3 -14.9,3.4 v .7 l -.9,.3 -.5,-.7 -10.5,2.4 2.8,16.3 1.8,1.5 -3.5,3.4 1.7,2.2 5.4,-4.5 1.7,-1.3 h .8 l 2.4,-3.1 1.4,.1 2.9,-1.1 h 2.1 l 5.3,-2.7 2.8,-.9 1,-1 1.5,.5 z"], ["de", "m 822.2,226.6 -1.6,.3 -1.5,1.1 -1.2,2.1 7.6,27.1 10.9,-2.3 -2.2,-7.6 -1.1,.5 -3.3,-2.6 -.5,-1.7 -1.8,-1 -.2,-3.7 -2.1,-2.2 -1.1,-.8 -1.2,-1.1 -.4,-3.2 .3,-2.1 1,-2.2 z"], ["fl", "m 751.7,445.1 -4,-.7 -1.7,-.9 -2.2,1.4 v 2.5 l 1.4,2.1 -.5,4.3 -2.1,.6 -1,-1.1 -.6,-3.2 -50.1,3.3 -3.3,-6 -48.8,5.1 -.5,2.9 2.5,2.8 1.7,.7 .9,1.2 -.4,7.3 -1.1,.6 .5,.4 1,-.3 .7,-.8 10.5,-2.7 9.2,-.5 8.1,1.9 8.5,5 2.4,.8 2.2,2 -.1,2.7 h 2.4 l 1.9,-1 2.5,.1 2,-.8 2.9,-2 3.1,-2.9 1.1,-.4 .6,.5 h 1.4 l .5,-.8 -.5,-1.2 -.6,-.6 .2,-.8 2,-1.1 5,-.4 .8,1 1,.1 2.3,1 3,1.8 1.2,1.7 1.1,1.2 2.8,1.4 v 2.4 l 2.8,1.9 1,.1 1.6,1.4 .7,1.6 1,.2 .8,2.1 .7,.6 1,-1.1 2.9,.1 .5,1.4 1.1,.9 v 1.3 l 2.9,2.2 .2,9.6 -1.8,5.8 1,1.2 -.2,3.4 -.8,1.4 .7,1.2 2.3,2.3 .3,1.5 .8,1 -.4,-1.9 1.3,-.6 .8,-3.6 -3,-1.2 .1,-.6 2.6,-.4 .9,2.6 1.1,.6 .1,-2 1.1,.3 .6,.8 -.1,.7 -2.9,4.2 -.2,1.1 -1.7,1.9 v 1.1 l 3.7,3.8 5.3,7.9 1.8,2.1 v 1.8 l 2.8,4.6 2.3,.6 .7,-1.2 -2.1,.3 -3,-4.5 .2,-1.4 1.5,-.8 v -1.5 l -.6,-1.3 .9,-.9 .4,.9 .7,.5 v 4 l -1.2,-.6 -.8,.9 1.4,1.6 1,2.6 1.2,-.6 2.3,1.2 2.1,2.2 1.6,5.1 3.1,4.8 .8,-1.3 2.8,-.5 3.2,1.3 .3,1.7 3.3,3.8 .1,1.1 2.2,2.7 -.7,.5 v 2.7 l 2.7,1.4 h 1.5 l 2.7,-1.8 1.5,.3 1.1,.4 2.3,-1.7 .2,-.7 1.2,.3 2.4,-1.7 1.3,-2.3 -.7,-3.2 -.2,-1.3 1.1,-4 .6,-.2 .6,1.6 .8,-1.8 -.8,-7.2 -.4,-10.5 -1,-6.8 -.7,-1.7 -6.6,-11.1 -5.2,-9.1 -2.2,-3.3 -1.3,-3.6 -.2,-3.4 .9,-.3 v -.9 l -1.1,-2.2 -4,-4 -7.6,-9.7 -5.7,-10.4 -4.3,-10.7 -.6,-3.7 -1.2,-1 -.5,-3.8 z m 9.2,134.5 1.7,-.1 -.7,-1 z m 7.3,-1.1 v -.7 l 1.6,-.2 3.7,-3.3 1.5,-.6 2.4,-.9 .3,1.3 1.7,.8 -2.6,1.2 h -2.4 l -3.9,2.5 z m 17.2,-7.6 -3,1.4 -1,1.3 1.1,.1 z m 3.8,-2.9 -1.1,.3 -1.4,2 1.1,-.2 1.5,-1.6 z m 8.3,-15.7 -1.7,5.6 -.8,1 -1,2.6 -1.2,1.6 -.7,1.7 -1.9,2.2 v .9 l 2.7,-2.8 2.4,-3.5 .6,-2 2.1,-4.9 z"], ["ga", "m 761.8,414.1 v 1.4 l -4.2,6.2 -1.2,.2 1.5,.5 v 2 l -.9,1.1 -.6,6 -2.3,6.2 .5,2 .7,5.1 -3.6,.3 -4,-.7 -1.7,-.9 -2.2,1.4 v 2.5 l 1.4,2.1 -.5,4.3 -2.1,.6 -1,-1.1 -.6,-3.2 -50.1,3.3 -3.3,-6 -.7,-2.2 -1.5,-1.5 -.5,-1.4 .6,-6.3 -2.4,-5.7 .5,-2.6 .3,-3.7 2.2,-3.8 -.2,-1.1 -1.7,-1 v -3.2 l -1.8,-1.9 -2.9,-6.1 -12.9,-45.8 22.9,-2.9 21.4,-3 -.1,1.9 -1.9,1 -1.4,3.2 .2,1.3 6.1,3.8 2.6,-.3 3.1,4 .4,1.7 4.2,5.1 2.6,1.7 1.4,.2 2.2,1.6 1.1,2.2 2,1.6 1.8,.5 2.7,2.7 .1,1.4 2.6,2.8 5,2.3 3.6,6.7 .3,2.7 3.9,2.1 2.5,4.8 .8,3.1 4.2,.4 z"], ["hi", "m 317,553.7 -.2,3.2 1.7,1.9 .1,1.2 -4.8,4.5 -.1,1.2 1.9,3.2 1.7,4.2 v 2.6 l -.5,1.2 .1,3.4 4.1,2.1 1.1,1.1 1.2,-1.1 2.1,-3.6 4.5,-2.9 3.3,-.5 2.5,-1 1.7,-1.2 3.2,-3.5 -2.8,-1.1 -1.4,-1.4 .1,-1.7 -.5,-.6 h -2 l .2,-2.5 -.7,-1.2 -2.6,-2.3 -4.5,-1.9 -2.8,-.2 -3.3,-2.7 -1.2,-.6 z m -15.3,-17 -1.1,1.5 -.1,1.7 2.7,2.4 1.9,.5 .6,1 .4,3 3.6,.2 5.3,-2.6 -.1,-2.5 -1.4,-.5 -3.5,-2.6 -1.8,-.3 -2.9,1.3 -1.5,-2.7 z m -1.5,11.5 .9,-1.4 2.5,-.3 .6,1.8 z m -7,-8.7 1.7,4 3.1,-.6 .3,-2 -1.4,-1.5 z m -4.1,-6.7 -1.1,2.4 h 5 l 4.8,1.6 2.5,-1.6 .2,-1.5 -4.8,.2 z m -16,-10.6 -1.9,2.1 -2.9,.6 .8,2.2 2.2,2.8 .1,1 2.1,-.3 2.3,.1 1.7,1.2 3.5,-.8 v -.7 l -1,-.8 -.5,-2.1 -.8,-.3 -.5,1 -1.2,-1.3 .2,-1.4 -1.8,-3.3 -1.1,-.7 z m -31.8,-12.4 -4.2,2.9 .2,2.3 2.4,1.2 1.9,1.3 2.7,.4 2.6,-2.2 -.2,-1.9 .8,-1.7 v -1.4 l -1,-.9 z m -10.8,4.8 -.3,1.2 -1.9,.9 -.6,1.8 1,.8 1.1,-1.5 1.9,-.6 .4,-2.6 z"], ["id", "m 165.3,183.1 -24.4,-5.4 8.5,-37.3 2.9,-5.8 .4,-2.1 .8,-.9 -.9,-2 -2.9,-1.2 .2,-4.2 4,-5.8 2.5,-.8 1.6,-2.3 -.1,-1.6 1.8,-1.6 3.2,-5.5 4.2,-4.8 -.5,-3.2 -3.5,-3.1 -1.6,-3.6 1.1,-4.3 -.7,-4 12.7,-56.1 14.2,3 -4.8,22 3.7,7.4 -1.6,4.8 3.6,4.8 1.9,.7 3.9,8.3 v 2.1 l 2.3,3 h .9 l 1.4,2.1 h 3.2 v 1.6 l -7.1,17 -.5,4.1 1.4,.5 1.6,2.6 2.8,-1.4 3.6,-2.4 1.9,1.9 .5,2.5 -.5,3.2 2.5,9.7 2.6,3.5 2.3,1.4 .4,3 v 4.1 l 2.3,2.3 1.6,-2.3 6.9,1.6 2.1,-1.2 9,1.7 2.8,-3.3 1.8,-.6 1.2,1.8 1.6,4.1 .9,.1 -8.5,54.8 -47.9,-8.2 z"], ["il", "m 623.5,265.9 -1,5.2 v 2 l 2.4,3.5 v .7 l -.3,.9 .9,1.9 -.3,2.4 -1.6,1.8 -1.3,4.2 -3.8,5.3 -.1,7 h -1 l .9,1.9 v .9 l -2.2,2.7 .1,1.1 1.5,2.2 -.1,.9 -3.7,.6 -.6,1.2 -1.2,-.6 -1,.5 -.4,3.3 1.7,1.8 -.4,2.4 -1.5,.3 -6.9,-3 -4,3.7 .3,1.8 h -2.8 l -1.4,-1.5 -1.8,-3.8 v -1.9 l .8,-.6 .1,-1.3 -1.7,-1.9 -.9,-2.5 -2.7,-4.1 -4.8,-1.3 -7.4,-7.1 -.4,-2.4 2.8,-7.6 -.4,-1.9 1.2,-1.1 v -1.3 l -2.8,-1.5 -3,-.7 -3.4,1.2 -1.3,-2.3 .6,-1.9 -.7,-2.4 -8.6,-8.4 -2.2,-1.5 -2.5,-5.9 -1.2,-5.4 1.4,-3.7 .7,-.7 .1,-2.3 -.7,-.9 1,-1.5 1.8,-.6 .9,-.3 1,-1.2 v -2.4 l 1.7,-2.4 .5,-.5 .1,-3.5 -.9,-1.4 -1,-.3 -1.1,-1.6 1,-4 3,-.8 h 2.4 l 4.2,-1.8 1.7,-2.2 .1,-2.4 1.1,-1.3 1.3,-3.2 -.1,-2.6 -2.8,-3.5 h -1.2 l -.9,-1.1 .2,-1.6 -1.7,-1.7 -2.5,-1.3 .5,-.6 45.9,-2.8 .1,4.6 3.4,4.6 1.2,4.1 1.6,3.2 z"], ["in", "m 629.2,214.8 -5.1,2.3 -4.7,-1.4 4.1,50.2 -1,5.2 v 2 l 2.4,3.5 v .7 l -.3,.9 .9,1.9 -.3,2.4 -1.6,1.8 -1.3,4.2 -3.8,5.3 -.1,7 h -1 l .9,1.9 1.1,.8 .6,-1 -.7,-1.7 4.6,-.5 .2,1.2 1.1,.2 .4,-.9 -.6,-1.3 .3,-.8 1.3,.8 1.7,-.4 1.7,.6 3.4,2.1 1.8,-2.8 3.5,-2.2 3,3.3 1.6,-2.1 .3,-2.7 3.8,-2.3 .2,1.3 1.9,1.2 3,-.2 1.2,-.7 .1,-3.4 2.5,-3.7 4.6,-4.4 -.1,-1.7 1.2,-3.8 2.2,1 6.7,-4.5 -.4,-1.7 -1.5,-2.1 1,-1.9 -6.6,-57.2 -.1,-1.4 -32.4,3.4 z"], ["ia", "m 556.9,183 2.1,1.6 .6,1.1 -1.6,3.3 -.1,2.5 2,5.5 2.7,1.5 3.3,.7 1.3,2.8 -.5,.6 2.5,1.3 1.7,1.7 -.2,1.6 .9,1.1 h 1.2 l 2.8,3.5 .1,2.6 -1.3,3.2 -1.1,1.3 -.1,2.4 -1.7,2.2 -4.2,1.8 h -2.4 l -3,.8 -1,4 1.1,1.6 1,.3 .9,1.4 -.1,3.5 -.5,.5 -1.7,2.4 v 2.4 l -1,1.2 -.9,.3 -1.8,.6 -1,1.5 .7,.9 -.1,2.3 -.7,.7 -1.5,-.8 -1.1,-1.1 -.6,-1.6 -1.7,-1.3 -14.3,.8 -27.2,1.2 -25.9,-.1 -1.8,-4.4 .7,-2.2 -.8,-3.3 .2,-2.9 -1.3,-.7 -.4,-6.1 -2.8,-5 -.2,-3.7 -2.2,-4.3 -1.3,-3.7 v -1.4 l -.6,-1.7 v -2.3 l -.5,-.9 -.7,-1.7 -.3,-1.3 -1.3,-1.2 1,-4.3 1.7,-5.1 -.7,-2 -1.3,-.4 -.4,-1.6 1,-.5 .1,-1.1 -1.3,-1.5 .1,-1.6 2.2,.1 h 28.2 l 36.3,-.9 18.6,-.7 z"], ["ks", "m 459.1,259.5 -43.7,-1.2 -36,-2 -4.8,67 67.7,2.9 62,.1 -.5,-48.1 -3.2,-.7 -2.6,-4.7 -2.5,-2.5 .5,-2.3 2.7,-2.6 .1,-1.2 -1.5,-2.1 -.9,1 -2,-.6 -2.9,-3 z"], ["ky", "m 692.1,322.5 -20.5,1.4 -5.2,.8 -17.4,1 -2.6,.8 -22.6,2 -.7,-.6 h -3.7 l 1.2,3.2 -.6,.9 -23.3,1.5 1,-2.7 1.4,.9 .7,-.4 1.2,-4.1 -1,-1 1,-2 .2,-.9 -1.3,-.8 -.3,-1.8 4,-3.7 6.9,3 1.5,-.3 .4,-2.4 -1.7,-1.8 .4,-3.3 1,-.5 1.2,.6 .6,-1.2 3.7,-.6 .1,-.9 -1.5,-2.2 -.1,-1.1 2.2,-2.7 0,-.9 1.1,.8 .6,-1 -.7,-1.7 4.6,-.5 .2,1.2 1.1,.2 .4,-.9 -.6,-1.3 .3,-.8 1.3,.8 1.7,-.4 1.7,.6 3.4,2.1 1.8,-2.8 3.5,-2.2 3,3.3 1.6,-2.1 .3,-2.7 3.8,-2.3 .2,1.3 1.9,1.2 3,-.2 1.2,-.7 .1,-3.4 2.5,-3.7 4.6,-4.4 -.1,-1.7 1.2,-3.8 2.2,1 6.7,-4.5 -.4,-1.7 -1.5,-2.1 1,-1.9 1.3,.5 2.2,.1 1.9,-.8 2.9,1.2 2.2,3.4 v 1 l 4.1,.7 2.3,-.2 1.9,2.1 2.2,.2 v -1 l 1.9,-.8 3,.8 1.2,.8 1.3,-.7 h .9 l .6,-1.7 3.4,-1.8 .5,.8 .8,2.9 3.5,1.4 1.2,2.1 -.1,1.1 .6,1 -.6,3.6 1.9,1.6 .8,1.1 1,.6 -.1,.9 4.4,5.6 h 1.4 l 1.5,1.8 1.2,.3 1.4,-.1 -4.9,6.6 -2.9,1 -3,3 -.4,2.2 -2.1,1.3 -.1,1.7 -1.4,1.4 -1.8,.5 -.5,1.9 -1,.4 -6.9,4.2 z m -98,11.3 -.7,-.7 .2,-1 h 1.1 l .7,.7 -.3,1 z"], ["la", "m 602.5,472.8 -1.2,-1.8 .3,-1.3 -4.8,-6.8 .9,-4.6 1,-1.4 .1,-1.4 -36,2 1.7,-11.9 2.4,-4.8 6,-8.4 -1.8,-2.5 h 2 v -3.3 l -2.4,-2.5 .5,-1.7 -1.2,-1 -1.6,-7.1 .6,-1.4 -52.3,1.3 .5,19.9 .7,3.4 2.6,2.8 .7,5.4 3.8,4.6 .8,4.3 h 1 l -.1,7.3 -3.3,6.4 1.3,2.3 -1.3,1.5 .7,3 -.1,4.3 -2.2,3.5 -.1,.8 -1.7,1.2 1,1.8 1.2,1.1 1.6,-1.3 5.3,-.9 6.1,-.1 9.6,3.8 8,1 1.5,-1.4 1.8,-.2 4.8,2.2 1.6,-.4 1.1,-1.5 -4.2,-1.8 -2.2,1 -1.1,-.2 -1.4,-2 3.3,-2.2 1.6,-.1 v 1.7 l 1.5,-.1 3.4,-.3 .4,2.3 1.1,.4 .6,1.9 4.8,1 1.7,1.6 v .7 h -1.2 l -1.5,1.7 1.7,1.2 5.4,1 2.7,2.8 4.4,-1 -3.7,.2 -.1,-.6 2.8,-.7 .2,-1.8 1.2,-.3 v -1.4 l 1.1,.1 v 1.6 l 2.5,.1 .8,-1.9 .9,.3 .2,2.5 1.2,.2 -1.8,2 2.6,-.9 2,-1.1 2.9,-3.3 h -.7 l -1.3,1.2 -.4,-.1 -.5,-.8 .9,-1.2 v -2.3 l 1.1,-.8 .7,.7 1,-.8 1,-.1 .6,1.3 -.6,1.9 h 2.4 l 5.1,1.7 .5,1.3 1.6,1.4 2.8,.1 1.3,.7 1.8,-1 .9,-1.7 v -1.7 h -1.4 l -1.2,-1.4 -1.1,-1.1 -3.2,-.9 -2.6,.2 -4.2,-2.4 v -2.3 l 1.3,-1 2.4,.6 -3.1,-1.6 .2,-.8 h 3.6 l 2.6,-3.5 -2.6,-1.8 .8,-1.5 -1.2,-.8 h -.8 l -2,2.1 v 2.1 l -.6,.7 -1.1,-.1 -1.6,-1.4 h -1.3 v -1.5 l .6,-.7 .8,.7 1.7,-1.6 .7,-1.6 .8,-.3 z m -10.3,-2.7 1.9,1 .8,1.1 2.5,.1 1.5,.8 .2,1.4 -.4,.6 -.9,-1.5 -1.4,1.2 -.9,1.4 -2.8,.8 -1.6,.1 -3.7,-1 .1,-1.7 2,-2 1.1,-2.4 z m -4.7,1.2 v 1.1 l -1.8,2 h -1.2 v -2.2 l 1.6,-1.5 z"], ["me", "m 875,128.7 .6,4 3.2,2 .8,2.2 2.3,1.4 1.4,-.3 1,-3 -.8,-2.9 1.6,-.9 .5,-2.8 -.6,-1.3 3.3,-1.9 -2.2,-2.3 .9,-2.4 1.4,-2.2 .5,3.2 1.6,-2 1.3,.9 1.2,-.8 v -1.7 l 3.2,-1.3 .3,-2.9 2.5,-.2 2.7,-3.7 v -.7 l -.9,-.5 -.1,-3.3 .6,-1.1 .2,1.6 1,-.5 -.2,-3.2 -.9,.3 -.1,1.2 -1.2,-1.4 .9,-1.4 .6,.1 1.1,-.4 .5,2.8 2,-.3 2.9,.7 v -1 l -1.1,-1.2 1.3,.1 .1,-2.3 .6,.8 .3,1.9 2.1,1.5 .2,-1 .9,-.2 -.3,-.8 .8,-.6 -.1,-1.6 -1.6,-.2 -2,.7 1.4,-1.6 .7,-.8 1.3,-.2 .4,1.3 1.7,1.6 .4,-2.1 2.3,-1.2 -.9,-1.3 .1,-1.7 1.1,.5 h .7 l 1.7,-1.4 .4,-2.3 2.2,.3 .1,-.7 .2,-1.6 .5,1.4 1.5,-1 2.3,-4.1 -.1,-2.2 -1.4,-2 -3,-3.2 h -1.9 l -.8,2.2 -2.9,-3 .3,-.8 v -1.5 l -1.6,-4.5 -.8,-.2 -.7,.4 h -4.8 l -.3,-3.6 -8.1,-26 -7.3,-3.7 -2.9,-.1 -6.7,6.6 -2.7,-1 -1,-3.9 h -2.7 l -6.9,19.5 .7,6.2 -1.7,2.4 -.4,4.6 1.3,3.7 .8,.2 v 1.6 l -1.6,4.5 -1.5,1.4 -1.3,2.2 -.4,7.8 -2.4,-1 -1.5,.4 z m 34.6,-24.7 -1,.8 v 1.3 l .7,-.8 .9,.8 .4,-.5 1.1,.2 -1,-.8 .4,-.8 z m -1.7,2.6 -1,1.1 .5,.4 -.1,1 h 1.1 v -1.8 z m -3,-1.6 .9,1.3 1,.5 .3,-1 v -1.8 l -1.3,-.7 -.4,1.2 z m -1,5 -1.7,-1.7 1.6,-2.4 .8,.3 .2,1.1 1,.8 v 1.1 l -1,1 z"], ["md", "m 822.9,269.3 0,-1.7 h -.8 l 0,1.8 z m 11.8,-3.9 1.2,-2.2 .1,-2.5 -.6,-.6 -.7,.9 -.2,2.1 -.8,1.4 -.3,1.1 -4.6,1.6 -.7,.8 -1.3,.2 -.4,.9 -1.3,.6 -.3,-2.5 .4,-.7 -.8,-.5 .2,-1.5 -1.6,1 v -2 l 1.2,-.3 -1.9,-.4 -.7,-.8 .4,-1.3 -.8,-.6 -.7,1.6 .5,.8 -.7,.6 -1.1,.5 -2,-1 -.2,-1.2 -1,-1.1 -1.4,-1.7 1.5,-.8 -1,-.6 v -.9 l .6,-1 1.7,-.3 -1.4,-.6 -.1,-.7 -1.3,-.1 -.4,1.1 -.6,.3 .1,-3.4 1,-1 .8,.7 .1,-1.6 -1,-.9 -.9,1.1 -1,1.4 -.6,-1 .2,-2.4 .9,-1 .9,.9 1.2,-.7 -.4,-1.7 -1,1 -.9,-2.1 -.2,-1.7 1.1,-2.4 1.1,-1.4 1.4,-.2 -.5,-.8 .5,-.6 -.3,-.7 .2,-2.1 -1.5,.4 -.8,1.1 1,1.3 -2.6,3.6 -.9,-.4 -.7,.9 -.6,2.2 -1.8,.5 1.3,.6 1.3,1.3 -.2,.7 .9,1.2 -1.1,1 .5,.3 -.5,1.3 v 2.1 l -.5,1.3 .9,1.1 .7,3.4 1.3,1.4 1.6,1.4 .4,2.8 1.6,2 .4,1.4 v 1 h -.7 l -1.5,-1.2 -.4,.2 -1.2,-.2 -1.7,-1.4 -1.4,-.3 -1,.5 -1.2,-.3 -.4,.2 -1.7,-.8 -1,-1 -1,-1.3 -.6,-.2 -.8,.7 -1.6,1.3 -1.1,-.8 -.4,-2.3 .8,-2.1 -.3,-.5 .3,-.4 -.7,-1 1,-.1 1,-.9 .4,-1.8 1.7,-2.6 -2.6,-1.8 -1,1.7 -.6,-.6 h -1 l -.6,-.1 -.4,-.4 .1,-.5 -1.7,-.6 -.8,.3 -1.2,-.1 -.7,-.7 -.5,-.2 -.2,-.7 .6,-.8 v -.9 l -1.2,-.2 -1,-.9 -.9,.1 -1.6,-.3 -.9,-.4 .2,-1.6 -1,-.5 -.2,-.7 h -.7 l -.8,-1.2 .2,-1 -2.6,.4 -2.2,-1.6 -1.4,.3 -.9,1.4 h -1.3 l -1.7,2.9 -3.3,.4 -1.9,-1 -2.6,3.8 -2.2,-.3 -3.1,3.9 -.9,1.6 -1.8,1.6 -1.7,-11.4 60.5,-11.8 7.6,27.1 10.9,-2.3 0,5.3 -.1,3.1 -1,1.8 z m -13.4,-1.8 -1.3,.9 .8,1.8 1.7,.8 -.4,-1.6 z"], ["ma", "m 899.9,174.2 h 3.4 l .9,-.6 .1,-1.3 -1.9,-1.8 .4,1 -1.5,1.5 h -2.3 l .1,.8 z m -9,1.8 -1.2,-.6 1,-.8 .6,-2.1 1.2,-1 .8,-.2 .6,.9 1.1,.2 .6,-.6 .5,1.9 -1.3,.3 -2.8,.7 z m -34.9,-23.4 18.4,-3.8 1,-1.5 .3,-1.7 1.9,-.6 .5,-1.1 1.7,-1.1 1.3,.3 1.7,3.3 1,.4 1.1,-1.3 .8,1.3 v 1.1 l -3,2.4 .2,.8 -.9,1 .4,.8 -1.3,.3 .9,1.2 -.8,.7 .6,1 .9,-.2 .3,-.8 1.1,.6 h 1.8 l 2.5,2.6 .2,2.6 1.8,.1 .8,1.1 .6,2 1,.7 h 1.9 l 1.9,-.1 .8,-.9 1.6,-1.2 1.1,-.3 -1.2,-2.1 -.3,.9 -1.5,-3.6 h -.8 l -.4,.9 -1.2,-1 1.3,-1.1 1.8,.4 2.3,2.1 1.3,2.7 1.2,3.3 -1,2.8 v -1.8 l -.7,-1 -3.5,2.3 -.9,-.3 -1.6,1 -.1,1.2 -2.2,1.2 -2,2.1 -2,1.9 h -1.2 l 3.3,-3.3 .5,-1.9 -.5,-.6 -.3,-1.3 -.9,-.1 -.1,1.3 -1,1.2 h -1.2 l -.3,1.1 .4,1.2 -1.2,1.1 -1.1,-.2 -.4,1 -1.4,-3 -1.3,-1.1 -2.6,-1.3 -.6,-2.2 h -.8 l -.7,-2.6 -6.5,2 -.1,-.3 -14.9,3.4 v .7 l -.9,.3 -.5,-.7 -10.5,2.4 -.7,-1 .5,-15 z"], ["mi", "m 663.3,209.8 .1,1.4 21.4,-3.5 .5,-1.2 3.9,-5.9 v -4.3 l .8,-2.1 2.2,-.8 2,-7.8 1,-.5 1,.6 -.2,.6 -1.1,.8 .3,.9 .8,.4 1.9,-1.4 .4,-9.8 -1.6,-2.3 -1.2,-3.7 v -2.5 l -2.3,-4.4 v -1.8 l -1.2,-3.3 -2.3,-3 -2.9,-1 -4.8,3 -2.5,4.6 -.2,.9 -3,3.5 -1.5,-.2 -2.9,-2.8 -.1,-3.4 1.5,-1.9 2,-.2 1.2,-1.7 .2,-4 .8,-.8 1.1,-.1 .9,-1.7 -.2,-9.6 -.3,-1.3 -1.2,-1.2 -1.7,-1 -.1,-1.8 .7,-.6 1.8,.8 -.3,-1.7 -1.9,-2.7 -.7,-1.6 -1.1,-1.1 h -2.2 l -8.1,-2.9 -1.4,-1.7 -3.1,-.3 -1.2,.3 -4.4,-2.3 h -1.4 l .5,1 -2.7,-.1 .1,.6 .6,.6 -2.5,2.1 .1,1.8 1.5,2.3 1.5,.2 v .6 l -1.5,.5 -2.1,-.1 -2.8,2.5 .1,2.5 .4,5.8 -2.2,3.4 .8,-4.5 -.8,-.6 -.9,5.3 -1,-2.3 .5,-2.3 -.5,-1 .6,-1.3 -.6,-1.1 1,-1 v -1.2 l -1.3,.6 -1.3,3.1 -.7,.7 -1.3,2.4 -1.7,-.2 -.1,1.2 h -1.6 l .2,1.5 .2,2 -3,1.2 .1,1.3 1,1.7 -.1,5.2 -1.3,4.4 -1.7,2.5 1.2,1.4 .8,3.5 -1,2.5 -.2,2.1 1.7,3.4 2.5,4.9 1.2,1.9 1.6,6.9 -.1,8.8 -.9,3.9 -2,3.2 -.9,3.7 -2,3 -1.2,1 z m -95.8,-96.8 3,3.8 17,3.8 1.4,1 4,.8 .7,.5 2.8,-.2 4.9,.8 1.4,1.5 -1,1 .8,.8 3.8,.7 1.2,1.2 .1,4.4 -1.3,2.8 2,.1 1,-.8 .9,.8 -1.1,3.1 1,1.6 1.2,.3 .8,-1.8 2.9,-4.6 1.6,-6 2.3,-2 -.5,-1.6 .5,-.9 1,1.6 -.3,2.2 2.9,-2.2 .2,-2.3 2.1,.6 .8,-1.6 .7,.6 -.7,1.5 -1,.5 -1,2 1.4,1.8 1.1,-.5 -.5,-.7 1,-1.5 1.9,-1.7 h .8 l .2,-2.6 2,-1.8 7.9,-.5 1.9,-3.1 3.8,-.3 3.8,1.2 4.2,2.7 .7,-.2 -.2,-3.5 .7,-.2 4.5,1.1 1.5,-.2 2.9,-.7 1.7,.4 1.8,.1 v -1.1 l -.7,-.9 -1.5,-.2 -1.1,-.8 .5,-1.4 -.8,-.3 -2.6,.1 -.1,-1 1.1,-.8 .6,.8 .5,-1.8 -.7,-.7 .7,-.2 -1.4,-1.3 .3,-1.3 .1,-1.9 h -1.3 l -1.5,1 -1.9,.1 -.5,1.8 -1.9,.2 -.3,-1.2 -2.2,.1 -1,1.2 -.7,-.1 -.2,-.8 -2.6,.4 -.1,-4.8 1,-2 -.7,-.1 -1.8,1.1 h -2.2 l -3.8,2.7 -6.2,.3 -4.1,.8 -1.9,1.5 -1.4,1.3 -2.5,1.7 -.3,.8 -.6,-1.7 -1.3,-.6 v .6 l .7,.7 v 1.3 l -1.5,-.6 h -.6 l -.3,1.2 -2,-1.9 -1.3,-.2 -1.3,1.5 -3.2,-.1 -.5,-1.4 -2,-1.9 -1.3,-1.6 v -.7 l -1.1,-1.4 -2.6,-1.2 -3.3,-.1 -1.1,-.9 h -1.4 l -.7,.4 -2.2,2.2 -.7,1.1 -1,-.7 .2,-1 .8,-2.1 3.2,-5 .8,-.2 1.7,-1.9 .7,-1.6 3,-.6 .8,-.6 -.1,-1 -.5,-.5 -4.5,.2 -2,.5 -2.6,1.2 -1.2,1.2 -1.7,2.2 -1.8,1 -3.3,3.4 -.4,1.6 -7.4,4.6 -4,.5 -1.8,.4 -2.3,3 -1.8,.7 -4.4,2.3 z m 100.7,3.8 3.8,.1 .6,-.5 -.2,-2 -1.7,-1.8 -1.9,.1 -.1,.5 1.1,.4 -1.6,.8 -.3,1 -.6,-.6 -.4,.8 z m -75.1,-41.9 -2.3,.2 -2.7,1.9 -7.1,5.3 .8,1 1.8,.3 2.8,-2 -1.1,-.5 2.3,-1.6 h 1 l 3,-1.9 -.1,-.9 z m 41.1,62.8 v 1 l 2.1,1.6 -.2,-2.4 z m -.7,2.8 1.1,.1 v .9 h -1 z m 21.4,-21.3 v .9 l .8,-.2 v -.5 z m 4.7,3.1 -.1,-1.1 -1.6,-.2 -.6,-.4 h -.9 l -.4,.3 .9,.4 1.1,1.1 z m -18,1.2 -.1,1.1 -.3,.7 .2,2.2 .4,.3 .7,.1 .5,-.9 .1,-1.6 -.3,-.6 -.1,-1.1 z"], ["mn", "m 464.7,68.6 -1.1,2.8 .8,1.4 -.3,5.1 -.5,1.1 2.7,9.1 1.3,2.5 .7,14 1,2.7 -.4,5.8 2.9,7.4 .3,5.8 -.1,2.1 -.1,2.2 -.9,2 -3.1,1.9 -.3,1.2 1.7,2.5 .4,1.8 2.6,.6 1.5,1.9 -.2,39.5 h 28.2 l 36.3,-.9 18.6,-.7 -1.1,-4.5 -.2,-3 -2.2,-3 -2.8,-.7 -5.2,-3.6 -.6,-3.3 -6.3,-3.1 -.2,-1.3 h -3.3 l -2.2,-2.6 -2,-1.3 .7,-5.1 -.9,-1.6 .5,-5.4 1,-1.8 -.3,-2.7 -1.2,-1.3 -1.8,-.3 v -1.7 l 2.8,-5.8 5.9,-3.9 -.4,-13 .9,.4 .6,-.5 .1,-1.1 .9,-.6 1.4,1.2 .7,-.1 v 0 l -1.2,-2.2 4.3,-3.1 3.1,-3.7 1.6,-.8 4.7,-5.9 6.3,-5.8 3.9,-2.1 6.3,-2.7 7.6,-4.5 -.6,-.4 -3.7,.7 -2.8,.1 -1,-1.6 -1.4,-.9 -9.8,1.2 -1,-2.8 -1.6,-.1 -1.7,.8 -3.7,3.1 h -4.1 l -2.1,-1 -.3,-1.7 -3.9,-.8 -.6,-1.6 -.7,-1.3 -1,.9 -2.6,.1 -9.9,-5.5 h -2.9 l -.8,-.7 -3.1,1.3 -.8,1.3 -3.3,.8 -1.3,-.2 v -1.7 l -.7,-.9 h -5.9 l -.4,-1.4 h -2.6 l -1.1,.4 -2.4,-1.7 .3,-1.4 -.6,-2.4 -.7,-1.1 -.2,-3 -1,-3.1 -2.1,-1.6 h -2.9 l .1,8 -30.9,-.4 z"], ["ms", "m 623.8,468.6 -5,.1 -2.4,-1.5 -7.9,2.5 -.9,-.7 -.5,.2 -.1,1.6 -.6,.1 -2.6,2.7 -.7,-.1 -.6,-.7 -1.2,-1.8 .3,-1.3 -4.8,-6.8 .9,-4.6 1,-1.4 .1,-1.4 -36,2 1.7,-11.9 2.4,-4.8 6,-8.4 -1.8,-2.5 h 2 v -3.3 l -2.4,-2.5 .5,-1.7 -1.2,-1 -1.6,-7.1 .6,-1.4 1.2,-1.5 .5,-3 -1.5,-2.3 -.5,-2.2 .9,-.7 v -.8 l -1.7,-1.1 -.1,-.7 1.6,-.9 -1.2,-1.1 1.7,-7.1 3.4,-1.6 v -.8 l -1.1,-1.4 2.9,-5.4 h 1.9 l 1.5,-1.2 -.3,-5.2 3.1,-4.5 1.8,-.6 -.5,-3.1 38.3,-2.6 1.3,2 -1.3,67 4.4,33.2 z"], ["mo", "m 555.3,248.9 -1.1,-1.1 -.6,-1.6 -1.7,-1.3 -14.3,.8 -27.2,1.2 -25.9,-.1 1.3,1.3 -.3,1.4 2.1,3.7 3.9,6.3 2.9,3 2,.6 .9,-1 1.5,2.1 -.1,1.2 -2.7,2.6 -.5,2.3 2.5,2.5 2.6,4.7 3.2,.7 .5,48.1 .2,10.8 39.1,-.7 39.8,-2 1.6,2.5 v 2.2 l -1.7,1.5 -2.8,5.1 11.2,-.8 1,-2 1.2,-.5 v -.7 l -1.2,-1.1 -.6,-1 1.7,.2 .8,-.7 -1.4,-1.5 1.4,-.5 .1,-1 -.6,-1 v -1.3 l -.7,-.7 .2,-1 h 1.1 l .7,.7 -.3,1 .8,.7 .8,-1 1,-2.7 1.4,.9 .7,-.4 1.2,-4.1 -1,-1 1,-2 .2,-.9 -1.3,-.8 h -2.8 l -1.4,-1.5 -1.8,-3.8 v -1.9 l .8,-.6 .1,-1.3 -1.7,-1.9 -.9,-2.5 -2.7,-4.1 -4.8,-1.3 -7.4,-7.1 -.4,-2.4 2.8,-7.6 -.4,-1.9 1.2,-1.1 v -1.3 l -2.8,-1.5 -3,-.7 -3.4,1.2 -1.3,-2.3 .6,-1.9 -.7,-2.4 -8.6,-8.4 -2.2,-1.5 -2.5,-5.9 -1.2,-5.4 1.4,-3.7 z"], ["mt", "m 247,130.5 57.3,7.9 51,5.3 2,-20.7 5.2,-66.7 -53.5,-5.6 -54.3,-7.7 -65.9,-12.5 -4.8,22 3.7,7.4 -1.6,4.8 3.6,4.8 1.9,.7 3.9,8.3 v 2.1 l 2.3,3 h .9 l 1.4,2.1 h 3.2 v 1.6 l -7.1,17 -.5,4.1 1.4,.5 1.6,2.6 2.8,-1.4 3.6,-2.4 1.9,1.9 .5,2.5 -.5,3.2 2.5,9.7 2.6,3.5 2.3,1.4 .4,3 v 4.1 l 2.3,2.3 1.6,-2.3 6.9,1.6 2.1,-1.2 9,1.7 2.8,-3.3 1.8,-.6 1.2,1.8 1.6,4.1 .9,.1 z"], ["ne", "m 402.5,191.1 38,1.6 3.4,3.2 1.7,.2 2.1,2 1.8,-.1 1.8,-2 1.5,.6 1,-.7 .7,.5 .9,-.4 .7,.4 .9,-.4 1,.5 1.4,-.6 2,.6 .6,1.1 6.1,2.2 1.2,1.3 .9,2.6 1.8,.7 1.5,-.2 .5,.9 v 2.3 l .6,1.7 v 1.4 l 1.3,3.7 2.2,4.3 .2,3.7 2.8,5 .4,6.1 1.3,.7 -.2,2.9 .8,3.3 -.7,2.2 1.8,4.4 1.3,1.3 -.3,1.4 2.1,3.7 3.9,6.3 h -32.4 l -43.7,-1.2 -36,-2 1.4,-22.1 -33.1,-2.4 3.7,-44.2 z"], ["nv", "m 167.6,296.8 -3.4,17.5 -2.4,2.9 h -2 l -1.2,-2.7 -3.7,-1.4 -3.5,.6 -1,13.6 .5,4.9 -.5,2.9 -1.4,3 -70.4,-105 -1.1,-3.5 16.4,-63.1 47,11.2 24.4,5.4 23.3,4.7 z"], ["nh", "m 862.6,93.6 -1.3,.1 -1,-1.1 -1.9,1.4 -.5,6.1 1.2,2.3 -1.1,3.5 2.1,2.8 -.4,1.7 .1,1.3 -1.1,2.1 -1.4,.4 -.6,1.3 -2.1,1 -.7,1.5 1.4,3.4 -.5,2.5 .5,1.5 -1,1.9 .4,1.9 -1.3,1.9 .2,2.2 -.7,1.1 .7,4.5 .7,1.5 -.5,2.6 .9,1.8 -.2,2.5 -.5,1.3 -.1,1.4 2.1,2.6 18.4,-3.8 1,-1.5 .3,-1.7 1.9,-.6 .5,-1.1 1.7,-1.1 1.3,.3 .8,-4.8 -2.3,-1.4 -.8,-2.2 -3.2,-2 -.6,-4 -11.9,-36.8 z"], ["nj", "m 842.5,195.4 -14.6,-4.9 -1.8,2.5 .1,2.2 -3,5.4 1.5,1.8 -.7,2 -1,1 .5,3.6 2.7,.9 1,2.8 2.1,1.1 4.2,3.2 -3.3,2.6 -1.6,2.3 -1.8,3 -1.6,.6 -1.4,1.7 -1,2.2 -.3,2.1 .8,.9 .4,2.3 1.2,.6 2.4,1.5 1.8,.8 1.6,.8 .1,1.1 .8,.1 1.1,-1.2 .8,.4 2.1,.2 -.2,2.9 .2,2.5 1.8,-.7 1.5,-3.9 1.6,-4.8 2.9,-2.8 .6,-3.5 -.6,-1.2 1.7,-2.9 v -1.2 l -.7,-1.1 1.2,-2.7 -.3,-3.6 -.6,-8.2 -1.2,-1.4 v 1.4 l .5,.6 h -1.1 l -.6,-.4 -1.3,-.2 -.9,.6 -1.2,-1.6 .7,-1.7 v -1 l 1.7,-.7 .8,-2.1 z"], ["nm", "m 357.5,332.9 h -.8 l -7.9,99.3 -31.8,-2.6 -34.4,-3.6 -.3,3 2,2.2 -30.8,-4.1 -1.4,10.2 -15.7,-2.2 17.4,-124.1 52.6,6.5 51.7,4.8 z"], ["ny", "m 872.9,181.6 -1.3,.1 -.5,1 z m -30.6,22.7 .7,.6 1.3,-.3 1.1,.3 .9,-1.3 h 1.9 l 2.4,-.9 5.1,-2.1 -.5,-.5 -1.9,.8 -2,.9 .2,-.8 2.6,-1.1 .8,-1 1.2,.1 4.1,-2.3 v .7 l -4.2,3 4.5,-2.8 1.7,-2.2 1.5,-.1 4.5,-3.1 3.2,-3.1 3,-2.3 1,-1.2 -1.7,-.1 -1,1.2 -.2,.7 -.9,.7 -.8,-1.1 -1.7,1 -.1,.9 -.9,-.2 .5,-.9 -1.2,-.7 -.6,.9 .9,.3 .2,.5 -.3,.5 -1.4,2.6 h -1.9 l .9,-1.8 .9,-.6 .3,-1.7 1.4,-1.6 .9,-.8 1.5,-.7 -1.2,-.2 -.7,.9 h -.7 l -1.1,.8 -.2,1 -2.2,2.1 -.4,.9 -1.4,.9 -7.7,1.9 .2,.9 -.9,.7 -2,.3 -1,-.6 -.2,1.1 -1.1,-.4 .1,1 -1.2,-.1 -1.2,.5 -.2,1.1 h -1 l .2,1 h -.7 l .2,1 -1.8,.4 -1.5,2.3 z m -.8,-.4 -1.6,.4 v 1 l -.7,1.6 .6,.7 2.4,-2.3 -.1,-.9 z m -10.1,-95.2 -.6,1.9 1.4,.9 -.4,1.5 .5,3.2 2.2,2.3 -.4,2.2 .6,2 -.4,1 -.3,3.8 3.1,6.7 -.8,1.8 .9,2.2 .9,-1.6 1.9,1.5 3,14.2 -.5,2 1.1,1 -.5,15 .7,1 2.8,16.3 1.8,1.5 -3.5,3.4 1.7,2.2 -1.3,3.3 -1.5,1.7 -1.5,2.3 -.2,-.7 .4,-5.9 -14.6,-4.9 -1.6,-1.1 -1.9,.3 -3,-2.2 -3,-5.8 h -2 l -.4,-1.5 -1.7,-1.1 -70.5,13.9 -.8,-6 4.3,-3.9 .6,-1.7 3.9,-2.5 .6,-2.4 2.3,-2 .8,-1.1 -1.7,-3.3 -1.7,-.5 -1.8,-3 -.2,-3.2 7.6,-3.9 8.2,-1.6 h 4.4 l 3.2,1.6 .9,-.1 1.8,-1.6 3.4,-.7 h 3 l 2.6,-1.3 2.5,-2.6 2.4,-3.1 1.9,-.4 1.1,-.5 .4,-3.2 -1.4,-2.7 -1.2,-.7 2,-1.3 -.1,-1.8 h -1.5 l -2.3,-1.4 -.1,-3.1 6.2,-6.1 .7,-2.4 3.7,-6.3 5.9,-6.4 2.1,-1.7 2.5,.1 20.6,-5.2 z"], ["nc", "m 829,300.1 -29.1,6.1 -39.4,7.3 -29.4,3.5 v 5.2 l -1.5,-.1 -1.4,1.2 -2.4,5.2 -2.6,-1.1 -3.5,2.5 -.7,2.1 -1.5,1.2 -.8,-.8 -.1,-1.5 -.8,-.2 -4,3.3 -.6,3.4 -4.7,2.4 -.5,1.2 -3.2,2.6 -3.6,.5 -4.6,3 -.8,4.1 -1.3,.9 -1.5,-.1 -1.4,1.3 -.1,4.9 21.4,-3 4.4,-1.9 1.3,-.1 7.3,-4.3 23.2,-2.2 .4,.5 -.2,1.4 .7,.3 1.2,-1.5 3.3,3 .1,2.6 19.7,-2.8 24.5,17.1 4,-2.2 3,-.7 h 1.7 l 1.1,1.1 .8,-2 .6,-5 1.7,-3.9 5.4,-6.1 4.1,-3.5 5.4,-2.3 2.5,-.4 1.3,.4 .7,1.1 3.3,-6.6 3.3,-5.3 -.7,-.3 -4.4,6.8 -.5,-.8 2,-2.2 -.4,-1.5 -2,-.5 1,1.3 -1.2,.1 -1.2,-1.8 -1.2,2 -1.6,.2 1,-2.7 .7,-1.7 -.2,-2.9 -2.2,-.1 .9,-.9 1.1,.3 2.7,.1 .8,-.5 h 2.3 l 2,-1.9 .2,-3.2 1.3,-1.4 1.2,-.2 1.3,-1 -.5,-3.7 -2.2,-3.8 -2.7,-.2 -.9,1.6 -.5,-1 -2.7,.2 -1.2,.4 -1.9,1.2 -.3,-.4 h -.9 l -1.8,1.2 -2.6,.5 v -1.3 l .8,-1 1,.7 h 1 l 1.7,-2.1 3.7,-1.7 2,-2.2 h 2.4 l .8,1.3 1.7,.8 -.5,-1.5 -.3,-1.6 -2.8,-3.1 -.3,-1.4 -.4,1 -.9,-1.3 z m 7,31 2.7,-2.5 4.6,-3.3 v -3.7 l -.4,-3.1 -1.7,-4.2 1.5,1.4 1,3.2 .4,7.6 -1.7,.4 -3.1,2.4 -3.2,3.2 z m 1.9,-19.3 -.9,-.2 v 1 l 2.5,2.2 -.2,-1.4 z m 2.9,2.1 -1.4,-2.8 -2.2,-3.4 -2.4,-3 -2.2,-4.3 -.8,-.7 2.2,4.3 .3,1.3 3.4,5.5 1.8,2.1 z"], ["nd", "m 464.7,68.6 -1.1,2.8 .8,1.4 -.3,5.1 -.5,1.1 2.7,9.1 1.3,2.5 .7,14 1,2.7 -.4,5.8 2.9,7.4 .3,5.8 -.1,2.1 -29.5,-.4 -46,-2.1 -39.2,-2.9 5.2,-66.7 44.5,3.4 55.3,1.6 z"], ["oh", "m 685.7,208.8 1.9,-.4 3,1.3 2.1,.6 .7,.9 h 1 l 1,-1.5 1.3,.8 h 1.5 l -.1,1 -3.1,.5 -2,1.1 1.9,.8 1.6,-1.5 2.4,-.4 2.2,1.5 1.5,-.1 2.5,-1.7 3.6,-2.1 5.2,-.3 4.9,-5.9 3.8,-3.1 9.3,-5.1 4.9,29.9 -2.2,1.2 1.4,2.1 -.1,2.2 .6,2 -1.1,3.4 -.1,5.4 -1,3.6 .5,1.1 -.4,2.2 -1.1,.5 -2,3.3 -1.8,2 h -.6 l -1.8,1.7 -1.3,-1.2 -1.5,1.8 -.3,1.2 h -1.3 l -1.3,2.2 .1,2.1 -1,.5 1.4,1.1 v 1.9 l -1,.2 -.7,.8 -1,.5 -.6,-2.1 -1.6,-.5 -1,2.3 -.3,2.2 -1.1,1.3 1.3,3.6 -1.5,.8 -.4,3.5 h -1.5 l -3.2,1.4 -1.2,-2.1 -3.5,-1.4 -.8,-2.9 -.5,-.8 -3.4,1.8 -.6,1.7 h -.9 l -1.3,.7 -1.2,-.8 -3,-.8 -1.9,.8 v 1 l -2.2,-.2 -1.9,-2.1 -2.3,.2 -4.1,-.7 v -1 l -2.2,-3.4 -2.9,-1.2 -1.9,.8 -2.2,-.1 -1.3,-.5 -6.6,-57.2 21.4,-3.5 z"], ["ok", "m 501.5,398.6 -4.6,-3.8 -2.2,-.9 -.5,1.6 -5.1,.3 -.6,-1.5 -5,2.5 -1.6,-.7 -3.7,.3 -.6,1.7 -3.6,.9 -1.3,-1.2 -1.2,.1 -2,-1.8 -2.1,.7 -2,-.5 -1.8,-2 -2.5,4.2 -1.2,.8 -1,-1.8 .3,-2 -1.2,-.7 -2.3,2.5 -1.7,-1.2 -.1,-1.5 -1.3,.5 -2.6,-1.7 -3,2.6 -2.3,-1.1 .7,-2.1 -2.3,.1 -1.9,-3 -3.5,-1.1 -2,2.3 -2.3,-2.2 -1.4,.4 -2,.1 -3.5,-1.9 -2.3,.1 -1.2,-.7 -.5,-2.9 -2.3,-1.7 -1.1,1.5 -1.4,-1 -1.2,-.4 -1.1,1 -1.5,-.3 -2.5,-3 -2.7,-1.3 1.4,-42.7 -52.6,-3.2 .6,-10.6 16.5,1 67.7,2.9 62,.1 .2,10.8 4.1,24.4 -.7,39 z"], ["or", "m 93.9,166.5 47,11.2 8.5,-37.3 2.9,-5.8 .4,-2.1 .8,-.9 -.9,-2 -2.9,-1.2 .2,-4.2 4,-5.8 2.5,-.8 1.6,-2.3 -.1,-1.6 1.8,-1.6 3.2,-5.5 4.2,-4.8 -.5,-3.2 -3.5,-3.1 -1.6,-3.6 -30.3,-7.3 -2.8,1 -5.4,-.9 -1.8,-.9 -1.5,1.2 -3.3,-.4 -4.5,.5 -.9,.7 -4.2,-.4 -.8,-1.6 -1.2,-.2 -4.4,1.3 -1.6,-1.1 -2.2,.8 -.2,-1.8 -2.3,-1.2 -1.5,-.2 -1,-1.1 -3,.3 -1.2,-.8 h -1.2 l -1.2,.9 -5.5,.7 -6.6,-4.2 1.1,-5.6 -.4,-4.1 -3.2,-3.7 -3.7,.1 -.4,-1.1 .4,-1.2 -.7,-.8 -1,.1 -1.1,1.3 -1.5,-.2 -.5,-1.1 -1,-.1 -.7,.6 -2,-1.9 v 4.3 l -1.3,1.3 -1.1,3.5 -.1,2.3 -4.5,12.3 -13.2,31.3 -3.2,4.6 -1.6,-.1 .1,2.1 -5.2,7.1 -.3,3.3 1,1.3 .1,2.4 -1.2,1.1 -1.2,3 .1,5.7 1.2,2.9 z"], ["pa", "m 826.3,189.4 -1.9,.3 -3,-2.2 -3,-5.8 h -2 l -.4,-1.5 -1.7,-1.1 -70.5,13.9 -.8,-6 -4.2,3.4 -.9,.1 -2.7,3 -3.3,1.7 4.9,29.9 3.2,19.7 17.4,-2.9 60.5,-11.8 1.2,-2.1 1.5,-1.1 1.6,-.3 1.6,.6 1.4,-1.7 1.6,-.6 1.8,-3 1.6,-2.3 3.3,-2.6 -4.2,-3.2 -2.1,-1.1 -1,-2.8 -2.7,-.9 -.5,-3.6 1,-1 .7,-2 -1.5,-1.8 3,-5.4 -.1,-2.2 1.8,-2.5 z"], ["ri", "m 883.2,170.7 -1.3,-1.1 -2.6,-1.3 -.6,-2.2 h -.8 l -.7,-2.6 -6.5,2 3.2,12.3 -.4,1.1 .4,1.8 5.6,-3.6 .1,-3 -.8,-.8 .4,-.6 -.1,-1.3 -.9,-.7 1.2,-.4 -.9,-1.6 1.8,.7 .3,1.4 .7,1.2 -1.4,-.8 1.1,1.7 -.3,1.2 -.6,-1.1 v 2.5 l .6,-.9 .4,.9 1.3,-1.5 -.2,-2.5 1.4,3.1 1,-.9 z m -4.7,12.2 h .9 l .5,-.6 -.8,-1.3 -.7,.7 z"], ["sc", "m 772.3,350.2 -19.7,2.8 -.1,-2.6 -3.3,-3 -1.2,1.5 -.7,-.3 .2,-1.4 -.4,-.5 -23.2,2.2 -7.3,4.3 -1.3,.1 -4.4,1.9 -.1,1.9 -1.9,1 -1.4,3.2 .2,1.3 6.1,3.8 2.6,-.3 3.1,4 .4,1.7 4.2,5.1 2.6,1.7 1.4,.2 2.2,1.6 1.1,2.2 2,1.6 1.8,.5 2.7,2.7 .1,1.4 2.6,2.8 5,2.3 3.6,6.7 .3,2.7 3.9,2.1 2.5,4.8 .8,3.1 4.2,.4 .8,-1.5 h .6 l 1.8,-1.5 .5,-2 3.2,-2.1 .3,-2.4 -1.2,-.9 .8,-.7 .8,.4 1.3,-.4 1.8,-2.1 3.8,-1.8 1.6,-2.4 .1,-.7 4.8,-4.4 -.1,-.5 -.9,-.8 1.1,-1.5 h .8 l .4,.5 .7,-.8 h 1.3 l .6,-1.5 2.3,-2.1 -.3,-5.4 .8,-2.3 3.6,-6.2 2.4,-2.2 2.2,-1.1 z"], ["sd", "m 396.5,125.9 46,2.1 29.5,.4 -.1,2.2 -.9,2 -3.1,1.9 -.3,1.2 1.7,2.5 .4,1.8 2.6,.6 1.5,1.9 -.2,39.5 -2.2,-.1 -.1,1.6 1.3,1.5 -.1,1.1 -1,.5 .4,1.6 1.3,.4 .7,2 -1.7,5.1 -1,4.3 1.3,1.2 .3,1.3 .7,1.7 -1.5,.2 -1.8,-.7 -.9,-2.6 -1.2,-1.3 -6.1,-2.2 -.6,-1.1 -2,-.6 -1.4,.6 -1,-.5 -.9,.4 -.7,-.4 -.9,.4 -.7,-.5 -1,.7 -1.5,-.6 -1.8,2 -1.8,.1 -2.1,-2 -1.7,-.2 -3.4,-3.2 -38,-1.6 -51.1,-3.5 3.9,-43.9 2,-20.7 z"], ["tn", "m 620.9,365.1 45.7,-4 22.9,-2.9 .1,-4.9 1.4,-1.3 1.5,.1 1.3,-.9 .8,-4.1 4.6,-3 3.6,-.5 3.2,-2.6 .5,-1.2 4.7,-2.4 .6,-3.4 4,-3.3 .8,.2 .1,1.5 .8,.8 1.5,-1.2 .7,-2.1 3.5,-2.5 2.6,1.1 2.4,-5.2 1.4,-1.2 1.5,.1 0,-5.2 .3,-.7 -4.6,.5 -.2,1 -28.9,3.3 -5.6,1.4 -20.5,1.4 -5.2,.8 -17.4,1 -2.6,.8 -22.6,2 -.7,-.6 h -3.7 l 1.2,3.2 -.6,.9 -23.3,1.5 -.8,1 -.8,-.7 h -1 v 1.3 l .6,1 -.1,1 -1.4,.5 1.4,1.5 -.8,.7 -1.7,-.2 .6,1 1.2,1.1 v .7 l -1.2,.5 -1,2 .1,.6 1.4,1 -.4,.7 h -1.5 v .5 l .9,.9 .1,.8 -1.4,.2 -.5,.8 -1.6,.2 -.9,.9 .6,.9 1.1,-.1 .5,.9 -1.6,1.3 .4,1.5 -2,-.6 -.1,.7 .4,1.1 -.3,1.4 -1.3,-.8 -.8,.8 1.1,.1 .1,1.5 -.6,1 1.1,.9 -.3,1.5 .8,.7 -.7,1 -1.2,-.5 -.9,2.2 -1.6,.7 z"], ["tx", "m 282.3,429 .3,-3 34.4,3.6 31.8,2.6 7.9,-99.3 .8,0 52.6,3.2 -1.4,42.7 2.7,1.3 2.5,3 1.5,.3 1.1,-1 1.2,.4 1.4,1 1.1,-1.5 2.3,1.7 .5,2.9 1.2,.7 2.3,-.1 3.5,1.9 2,-.1 1.4,-.4 2.3,2.2 2,-2.3 3.5,1.1 1.9,3 2.3,-.1 -.7,2.1 2.3,1.1 3,-2.6 2.6,1.7 1.3,-.5 .1,1.5 1.7,1.2 2.3,-2.5 1.2,.7 -.3,2 1,1.8 1.2,-.8 2.5,-4.2 1.8,2 2,.5 2.1,-.7 2,1.8 1.2,-.1 1.3,1.2 3.6,-.9 .6,-1.7 3.7,-.3 1.6,.7 5,-2.5 .6,1.5 5.1,-.3 .5,-1.6 2.2,.9 4.6,3.8 6.4,1.9 2.6,2.3 2.8,-1.3 3.2,.8 .2,11.9 .5,19.9 .7,3.4 2.6,2.8 .7,5.4 3.8,4.6 .8,4.3 h 1 l -.1,7.3 -3.3,6.4 1.3,2.3 -1.3,1.5 .7,3 -.1,4.3 -2.2,3.5 -.1,.8 -1.7,1.2 1,1.8 1.2,1.1 -3.5,.3 -8.4,3.9 -3.5,1.4 -1.8,1.8 -.7,-.5 2.1,-2.3 1.8,-.7 .5,-.9 -2.9,-.1 -.7,-.8 .8,-2 -.9,-1.8 h -.6 l -2.4,1.3 -1.9,2.6 .3,1.7 3.3,3.4 1.3,.3 v .8 l -2.3,1.6 -4.9,4 -4,3.9 -3.2,1.4 -5,3 -3.7,2 -4.5,1.9 -4.1,2.5 3.2,-3 v -1.1 l .6,-.8 -.2,-1.8 -1.5,-.1 -1.1,1.5 -2.6,1.3 -1.8,-1.2 -.3,-1.7 h -1.5 l .8,2.2 1.4,.7 1.2,.9 1.8,1.6 -.7,.8 -3.9,1.7 -1.7,.1 -1.2,-1.2 -.5,2.1 .5,1.1 -2.7,2 -1.5,.2 -.8,.7 -.4,1.7 -1.8,3.3 -1.6,.7 -1.6,-.6 -1.8,1.1 .3,1.4 1.3,.8 1,.8 -1.8,3.5 -.3,2.8 -1,1.7 -1.4,1 -2.9,.4 1.8,.6 1.9,-.6 -.4,3.2 -1.1,-.1 .2,1.2 .3,1.4 -1.3,.9 v 3.1 l 1.6,1.4 .6,3.1 -.4,2.2 -1,.4 .4,1.5 1.1,.4 .8,1.7 v 2.6 l 1.1,2.1 2.2,2.6 -.1,.7 -2.2,-.2 -1.6,1.4 .2,1.4 -.9,-.3 -1.4,-.2 -3.4,-3.7 -2.3,-.6 h -7.1 l -2.8,-.8 -3.6,-3 -1.7,-1 -2.1,.1 -3.2,-2.6 -5.4,-1.6 v -1.3 l -1.4,-1.8 -.9,-4.7 -1.1,-1.7 -1.7,-1.4 v -1.6 l -1.4,-.6 .6,-2.6 -.3,-2.2 -1.3,-1.4 .7,-3 -.8,-3.2 -1.7,-1.4 h -1.1 l -4,-3.5 .1,-1.9 -.8,-1.7 -.8,-.2 -.9,-2.4 -2,-1.6 -2.9,-2.5 -.2,-2.1 -1,-.7 .2,-1.6 .5,-.7 -1.4,-1.5 .1,-.7 -2,-2.2 .1,-2.1 -2.7,-4.9 -.1,-1.7 -1.8,-3.1 -5.1,-4.8 v -1.1 l -3.3,-1.7 -.1,-1.8 -1.2,-.4 v -.7 l -.8,-.2 -2.1,-2.8 h -.8 l -.7,-.6 -1.3,1.1 h -2.2 l -2.6,-1.1 h -4.6 l -4.2,-2.1 -1.3,1.9 -2.2,-.6 -3.3,1.2 -1.7,2.8 -2,3.2 -1.1,4.4 -1.4,1.2 -1.1,.1 -.9,1.6 -1.3,.6 -.1,1.8 -2.9,.1 -1.8,-1.5 h -1 l -2,-2.9 -3.6,-.5 -1.7,-2.3 -1.3,-.2 -2.1,-.8 -3.4,-3.4 .2,-.8 -1.6,-1.2 -1,-.1 -3.4,-3.1 -.1,-2 -2.3,-4 .2,-1.6 -.7,-1.3 .8,-1.5 -.1,-2.4 -2.6,-4.1 -.6,-4.2 -1.6,-1.6 v -1 l -1.2,-.2 -.7,-1.1 -2.4,-1.7 -.9,-.1 -1.9,-1.6 v -1.1 l -2.9,-1.8 -.6,-2.1 -2.6,-2.3 -3.2,-4.4 -3,-1.3 -2.1,-1.8 .2,-1.2 -1.3,-1.4 -1.7,-3.7 -2.4,-1 z m 174.9,138.3 .8,.1 -.6,-4.8 -3.5,-12.3 -.2,-8.1 4.9,-10.5 6.1,-8.2 7.2,-5.1 v -.7 h -.8 l -2.6,1 -3.6,2.3 -.7,1.5 -8.2,11.6 -2.8,7.9 v 8.8 l 3.6,12 z"], ["ut", "m 233.2,217.9 3.3,-21.9 -47.9,-8.2 -21,109 46.2,8.2 40,6 11.5,-88.3 z"], ["vt", "m 859.1,102.4 -1.1,3.5 2.1,2.8 -.4,1.7 .1,1.3 -1.1,2.1 -1.4,.4 -.6,1.3 -2.1,1 -.7,1.5 1.4,3.4 -.5,2.5 .5,1.5 -1,1.9 .4,1.9 -1.3,1.9 .2,2.2 -.7,1.1 .7,4.5 .7,1.5 -.5,2.6 .9,1.8 -.2,2.5 -.5,1.3 -.1,1.4 2.1,2.6 -12.4,2.7 -1.1,-1 .5,-2 -3,-14.2 -1.9,-1.5 -.9,1.6 -.9,-2.2 .8,-1.8 -3.1,-6.7 .3,-3.8 .4,-1 -.6,-2 .4,-2.2 -2.2,-2.3 -.5,-3.2 .4,-1.5 -1.4,-.9 .6,-1.9 -.8,-1.7 27.3,-6.9 z"], ["va", "m 834.7,265.4 -1.1,2.8 .5,1.1 .4,-1.1 .8,-3.1 z m -34.6,-7 -.7,-1 1,-.1 1,-.9 .4,-1.8 -.2,-.5 .1,-.5 -.3,-.7 -.6,-.5 -.4,-.1 -.5,-.4 -.6,-.6 h -1 l -.6,-.1 -.4,-.4 .1,-.5 -1.7,-.6 -.8,.3 -1.2,-.1 -.7,-.7 -.5,-.2 -.2,-.7 .6,-.8 v -.9 l -1.2,-.2 -1,-.9 -.9,.1 -1.6,-.3 -.4,.7 -.4,1.6 -.5,2.3 -10,-5.2 -.2,.9 .9,1.6 -.8,2.3 .1,2.9 -1.2,.8 -.5,2.1 -.9,.8 -1.4,1.8 -.9,.8 -1,2.5 -2.4,-1.1 -2.3,8.5 -1.3,1.6 -2.8,-.5 -1.3,-1.9 -2.3,-.7 -.1,4.7 -1.4,1.7 .4,1.5 -2.1,2.2 .4,1.9 -3.7,6.3 -1,3.3 1.5,1.2 -1.5,1.9 .1,1.4 -2.3,2 -.7,-1.1 -4.3,3.1 -1.5,-1 -.6,1.4 .8,.5 -.5,.9 -5.5,2.4 -3,-1.8 -.8,1.7 -1.9,1.8 -2.3,.1 -4.4,-2.3 -.1,-1.5 -1.5,-.7 .8,-1.2 -.7,-.6 -4.9,6.6 -2.9,1 -3,3 -.4,2.2 -2.1,1.3 -.1,1.7 -1.4,1.4 -1.8,.5 -.5,1.9 -1,.4 -6.9,4.2 28.9,-3.3 .2,-1 4.6,-.5 -.3,.7 29.4,-3.5 39.4,-7.3 29.1,-6.1 -.6,-1.2 .4,-.1 .9,.9 -.1,-1.4 -.3,-1.9 1.6,1.2 .9,2.1 v -1.3 l -3.4,-5.5 v -1.2 l -.7,-.8 -1.3,.7 .5,1.4 h -.8 l -.4,-1 -.6,.9 -.9,-1.1 -2.1,-.1 -.2,.7 1.5,2.1 -1.4,-.7 -.5,-1 -.4,.8 -.8,.1 -1.5,1.7 .3,-1.6 v -1.4 l -1.5,-.7 -1.8,-.5 -.2,-1.7 -.6,-1.3 -.6,1.1 -1.7,-1 -2,.3 .2,-.9 1.5,-.2 .9,.5 1.7,-.8 .9,.4 .5,1 v .7 l 1.9,.4 .3,.9 .9,.4 .9,1.2 1.4,-1.6 h .6 l -.1,-2.1 -1.3,1 -.6,-.9 1.5,-.2 -1.2,-.9 -1.2,.6 -.1,-1.7 -1.7,.2 -2.2,-1.1 -1.8,-2.2 3.6,2.2 .9,.3 1.7,-.8 -1.7,-.9 .6,-.6 -1,-.5 .8,-.2 -.3,-.9 1.1,.9 .4,-.8 .4,1.3 1.2,.8 .6,-.5 -.5,-.6 -.1,-2.5 -1.1,-.1 -1.6,-.8 .9,-1.1 -2,-.1 -.4,-.5 -1.4,.6 -1.4,-.8 -.5,-1.2 -2.1,-1.2 -2.1,-1.8 -2.2,-1.9 3,1.3 .9,1.2 2.1,.7 2.3,2.5 .2,-1.7 .6,1.3 2.3,.5 v -4 l -.8,-1.1 1.1,.4 .1,-1.6 -3.1,-1.4 -1.6,-.2 -1.3,-.2 .3,-1.2 -1.5,-.3 -.1,-.6 h -1.8 l -.2,.8 -.7,-1 h -2.7 l -1,-.4 -.2,-1 -1.2,-.6 -.4,-1.5 -.6,-.4 -.7,1.1 -.9,.2 -.9,.7 h -1.5 l -.9,-1.3 .4,-3.1 .5,-2.4 .6,.5 z m 21.9,11.6 .9,-.1 0,-.6 -.8,.1 z m 7.5,14.2 -1,2.7 1.2,-1.3 z m -1.8,-15.3 .7,.3 -.2,1.9 -.5,-.5 -1.3,1 1,.4 -1.8,4.4 .1,8.1 1.9,3.1 .5,-1.5 .4,-2.7 -.3,-2.3 .7,-.9 -.2,-1.4 1.2,-.6 -.6,-.5 .5,-.7 .8,1.1 -.2,1.1 -.4,3.9 1.1,-2.2 .4,-3.1 .1,-3 -.3,-2 .6,-2.3 1.1,-1.8 .1,-2.2 .3,-.9 -4.6,1.6 -.7,.8 z"], ["wa", "m 161.9,83.6 .7,4 -1.1,4.3 -30.3,-7.3 -2.8,1 -5.4,-.9 -1.8,-.9 -1.5,1.2 -3.3,-.4 -4.5,.5 -.9,.7 -4.2,-.4 -.8,-1.6 -1.2,-.2 -4.4,1.3 -1.6,-1.1 -2.2,.8 -.2,-1.8 -2.3,-1.2 -1.5,-.2 -1,-1.1 -3,.3 -1.2,-.8 h -1.2 l -1.2,.9 -5.5,.7 -6.6,-4.2 1.1,-5.6 -.4,-4.1 -3.2,-3.7 -3.7,.1 -.4,-1.1 .4,-1.2 -.7,-.8 -1,.1 -2.1,-1.5 -1.2,.4 -2,-.1 -.7,-1.5 -1.6,-.3 2.5,-7.5 -.7,6 .5,.5 v -2 l .8,-.2 1.1,2.3 -.5,-2.2 1.2,-4.2 1.8,.4 -1.1,-2 -1,.3 -1.5,-.4 .2,-4.2 .2,1.5 .9,.5 .6,-1.6 h 3.2 l -2.2,-1.2 -1.7,-1.9 -1.4,1.6 1.2,-3.1 -.3,-4.6 -.2,-3.6 .9,-6.1 -.5,-2 -1.4,-2.1 .1,-4 .4,-2.7 2,-2.3 -.7,-1.4 .2,-.6 .9,.1 7.8,7.6 4.7,1.9 5.1,2.5 3.2,-.1 .2,3 1,-1.6 h .7 l .6,2.7 .5,-2.6 1.4,-.2 .5,.7 -1.1,.6 .1,1.6 .7,-1.5 h 1.1 l -.4,2.6 -1.1,-.8 .4,1.4 -.1,1.5 -.8,.7 -2.5,2.9 1.2,-3.4 -1.6,.4 -.4,2.1 -3.8,2.8 -.4,1 -2.1,2.2 -.1,1 h 2.2 l 2.4,-.2 .5,-.9 -3.9,.5 v -.6 l 2.6,-2.8 1.8,-.8 1.9,-.2 1,-1.6 3,-2.3 v -1.4 h 1.1 l .1,4 h -1.5 l -.6,.8 -1.1,-.9 .3,1.1 v 1.7 l -.7,.7 -.3,-1.6 -.8,.8 .7,.6 -.9,1.1 h 1.3 l .7,-.5 .1,2 -1,1.9 -.9,1 -.1,1.8 -1,-.2 -.2,-1.4 .9,-1.1 -.8,-.5 -.8,.7 -.7,2.2 -.8,.9 -.1,-2 .8,-1.1 -.2,-1.1 -1.2,1.2 .1,2.2 -.6,.4 -2.1,-.4 -1.3,1.2 2.2,-.6 -.2,2.2 1,-1.8 .4,1.4 .5,-1 .7,1.8 h .7 l .7,-.8 .6,-.1 2,-1.9 .2,-1.2 .8,.6 .3,.9 .7,-.3 .1,-1.2 h 1.3 l .2,-2.9 -.1,-2.7 .9,.3 -.7,-2.1 1.4,-.8 .2,-2.4 2.3,-2.2 1,.1 .3,-1.4 -1.2,-1.4 -.1,-3.5 -.8,.9 .7,2.9 -.6,.1 -.6,-1.9 -.6,-.5 .3,-2.3 1.8,-.1 .3,.7 .3,-1.6 -1.6,-1.7 -.6,-1.6 -.2,2 .9,1.1 -.7,.4 -1,-.8 -1.8,1.3 1.5,.5 .2,2.4 -.3,1.8 .9,-1.3 1.4,2.3 -.4,1.9 h -1.5 v -1.2 l -1.5,-1.2 .5,-3 -1.9,-2.6 2.7,-3 .6,-4.1 h .9 l 1.4,3.2 v -2.6 l 1.2,.3 v -3.3 l -.9,-.8 -1.2,2.5 -1,-3 1.3,-.1 -1.5,-4.9 1.9,-.6 25.4,7.5 31.7,8 23.6,5.5 z m -78.7,-39.4 h .5 l .1,.8 -.5,.3 .1,.6 -.7,.4 -.2,-.9 .5,-.4 z m 5,-4.3 -1.2,1.9 -.1,.8 .4,.2 .5,-.6 1.1,.1 z m -.4,-21.6 .5,.6 1.3,-.3 .2,-1 1.2,-1.8 -1,-.4 -.7,1.6 -.1,-1.6 -1.1,.2 -.7,1.4 z m 3.2,-5.5 .7,1.5 -.9,.2 -.8,.4 -.2,-2.4 z m -2.7,-1.6 -1.1,-.2 .5,1.4 z m -1,2.5 .8,.4 -.4,1.1 1.7,-.5 -.2,-2.2 -.9,-.2 z m -2.7,-.4 .3,2.7 1.6,1.3 .6,-1.9 -1.1,-2.2 z m 1.9,-1.1 -1.1,-1 -.9,.1 1.8,1.5 z m 3.2,-7 h -1.2 v .8 l 1.2,.6 z m -.9,32.5 .4,-2.7 h -1.1 l -.2,1.9 z"], ["wv", "m 723.4,297.5 -.8,1.2 1.5,.7 .1,1.5 4.4,2.3 2.3,-.1 1.9,-1.8 .8,-1.7 3,1.8 5.5,-2.4 .5,-.9 -.8,-.5 .6,-1.4 1.5,1 4.3,-3.1 .7,1.1 2.3,-2 -.1,-1.4 1.5,-1.9 -1.5,-1.2 1,-3.3 3.7,-6.3 -.4,-1.9 2.1,-2.2 -.4,-1.5 1.4,-1.7 .1,-4.7 2.3,.7 1.3,1.9 2.8,.5 1.3,-1.6 2.3,-8.5 2.4,1.1 1,-2.5 .9,-.8 1.4,-1.8 .9,-.8 .5,-2.1 1.2,-.8 -.1,-2.9 .8,-2.3 -.9,-1.6 .2,-.9 10,5.2 .5,-2.3 .4,-1.6 .4,-.7 -.9,-.4 .2,-1.6 -1,-.5 -.2,-.7 h -.7 l -.8,-1.2 .2,-1 -2.6,.4 -2.2,-1.6 -1.4,.3 -.9,1.4 h -1.3 l -1.7,2.9 -3.3,.4 -1.9,-1 -2.6,3.8 -2.2,-.3 -3.1,3.9 -.9,1.6 -1.8,1.6 -1.7,-11.4 -17.4,2.9 -3.2,-19.7 -2.2,1.2 1.4,2.1 -.1,2.2 .6,2 -1.1,3.4 -.1,5.4 -1,3.6 .5,1.1 -.4,2.2 -1.1,.5 -2,3.3 -1.8,2 h -.6 l -1.8,1.7 -1.3,-1.2 -1.5,1.8 -.3,1.2 h -1.3 l -1.3,2.2 .1,2.1 -1,.5 1.4,1.1 v 1.9 l -1,.2 -.7,.8 -1,.5 -.6,-2.1 -1.6,-.5 -1,2.3 -.3,2.2 -1.1,1.3 1.3,3.6 -1.5,.8 -.4,3.5 h -1.5 l -3.2,1.4 -.1,1.1 .6,1 -.6,3.6 1.9,1.6 .8,1.1 1,.6 -.1,.9 4.4,5.6 h 1.4 l 1.5,1.8 1.2,.3 1.4,-.1 z"], ["wi", "m 611,144 -2.9,.8 .2,2.3 -2.4,3.4 -.2,3.1 .6,.7 .8,-.7 .5,-1.6 2,-1.1 1.6,-4.2 3.5,-1.1 .8,-3.3 .7,-.9 .4,-2.1 1.8,-1.1 v -1.5 l 1,-.9 1.4,.1 v 2 l -1,.1 .5,1.2 -.7,2.2 -.6,.1 -1.2,4.5 -.7,.5 -2.8,7.2 -.3,4.2 .6,2 .1,1.3 -2.4,1.9 .3,1.9 -.9,3.1 .3,1.6 .4,3.7 -1.1,4.1 -1.5,5 1,1.5 -.3,.3 .8,1.7 -.5,1.1 1.1,.9 v 2.7 l 1.3,1.5 -.4,3 .3,4 -45.9,2.8 -1.3,-2.8 -3.3,-.7 -2.7,-1.5 -2,-5.5 .1,-2.5 1.6,-3.3 -.6,-1.1 -2.1,-1.6 -.2,-2.6 -1.1,-4.5 -.2,-3 -2.2,-3 -2.8,-.7 -5.2,-3.6 -.6,-3.3 -6.3,-3.1 -.2,-1.3 h -3.3 l -2.2,-2.6 -2,-1.3 .7,-5.1 -.9,-1.6 .5,-5.4 1,-1.8 -.3,-2.7 -1.2,-1.3 -1.8,-.3 v -1.7 l 2.8,-5.8 5.9,-3.9 -.4,-13 .9,.4 .6,-.5 .1,-1.1 .9,-.6 1.4,1.2 .7,-.1 h 2.6 l 6.8,-2.6 .3,-1 h 1.2 l .7,-1.2 .4,.8 1.8,-.9 1.8,-1.7 .3,.5 1,-1 2.2,1.6 -.8,1.6 -1.2,1.4 .5,1.5 -1.4,1.6 .4,.9 2.3,-1.1 v -1.4 l 3.3,1.9 1.9,.7 1.9,.7 3,3.8 17,3.8 1.4,1 4,.8 .7,.5 2.8,-.2 4.9,.8 1.4,1.5 -1,1 .8,.8 3.8,.7 1.2,1.2 .1,4.4 -1.3,2.8 2,.1 1,-.8 .9,.8 -1.1,3.1 1,1.6 1.2,.3 z m -49.5,-37.3 -.5,.1 -1.5,1.6 .2,.5 1.5,-.6 v -.6 l .9,-.3 z m 1.6,-1.1 -1,.3 -.2,.7 .9,-.1 z m -1.3,-1.6 -.2,.9 h 1.7 l .6,-.4 .1,-1 z m 2.8,-3 -.3,1.9 1.2,-.5 .1,-1.4 z m 58.3,31.9 -2,.3 -.4,1.3 1.3,1.7 z"], ["wy", "m 355.3,143.7 -51,-5.3 -57.3,-7.9 -2,10.7 -8.5,54.8 -3.3,21.9 32.1,4.8 44.9,5.7 37.5,3.4 3.7,-44.2 z"], ["dc", "m 803.5,252 -2.6,-1.8 -1,1.7 .5,.4 .4,.1 .6,.5 .3,.7 -.1,.5 .2,.5 z"]];
