'use client';

import { useState, useEffect, useRef } from 'react';
import mediaMentionsData from '../../data/media-mentions.json';

// Logo class mapping
const LOGO_CLASS_MAP = {
  'TIME': 'logo-time',
  'Newsweek': 'logo-newsweek',
  'British GQ': 'logo-gq',
  'U.S. News & World Report': 'logo-usnews',
  'HuffPost': 'logo-huffpost',
  'New York Post': 'logo-nypost',
  'FOX News Digital': 'logo-fox',
  'Daily Mail': 'logo-dailymail',
  'Healthline': 'logo-healthline',
  'Yahoo Health': 'logo-yahoo',
  "Woman's World": 'logo-womansworld',
  'EatingWell': 'logo-eatingwell',
  'Everyday Health': 'logo-everydayhealth',
  'Parade': 'logo-parade',
  "Men's Journal": 'logo-mensjournal',
  'SHEfinds': 'logo-shefinds',
};

// Filter buttons config
const FILTERS = [
  { label: 'All', value: 'all' },
  { label: 'Nutrition', value: 'nutrition' },
  { label: 'Infectious Disease', value: 'infectious-disease' },
  { label: 'Wellness', value: 'wellness' },
  { label: 'Safety', value: 'safety' },
];

// Sort options
const SORT_OPTIONS = [
  { label: 'Newest', value: 'newest' },
  { label: 'Oldest', value: 'oldest' },
  { label: 'By Outlet', value: 'outlet' },
];

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');

.tdmd-media {
  --teal: #006B73;
  --teal-dark: #004F55;
  --teal-light: #E8F5F6;
  --teal-mist: #F4FAFB;
  --navy: #003E52;
  --navy-deep: #002A3A;
  --orange: #FF5A36;
  --orange-soft: #FFF0EC;
  --slate: #4A5568;
  --slate-light: #94A3B8;
  --warm-white: #FAFAF8;
  --bone: #F5F3EF;
  --card-bg: #FFFFFF;
  --text-primary: #1A2332;
  --text-secondary: #4A5568;
  --border: #E2E8F0;
  --serif: 'DM Serif Display', Georgia, serif;
  --sans: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --radius: 12px;
  --shadow-sm: 0 1px 3px rgba(0,62,82,0.06);
  --shadow-md: 0 4px 16px rgba(0,62,82,0.08);
  --shadow-lg: 0 8px 32px rgba(0,62,82,0.10);
  --shadow-hover: 0 12px 40px rgba(0,62,82,0.14);
  font-family: var(--sans);
  color: var(--text-primary);
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Hero */
.tdmd-media__hero {
  text-align: center;
  padding: 64px 0 48px;
  position: relative;
}
.tdmd-media__hero::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: linear-gradient(90deg, var(--teal), var(--orange));
  border-radius: 2px;
}
.tdmd-media__kicker {
  font-family: var(--sans);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: var(--teal);
  margin-bottom: 16px;
}
.tdmd-media__hero h1 {
  font-family: var(--serif);
  font-size: clamp(32px, 5vw, 52px);
  color: var(--navy);
  margin: 0 0 20px;
  line-height: 1.15;
  letter-spacing: -0.5px;
}
.tdmd-media__lede {
  font-size: 17px;
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 680px;
  margin: 0 auto;
}
.tdmd-media__lede strong {
  color: var(--navy);
  font-weight: 600;
}

/* Logo Bar — Infinite Scroll */
.tdmd-media__logobar {
  padding: 44px 0 40px;
  text-align: center;
  overflow: hidden;
  position: relative;
}
.tdmd-media__logobar-label {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: var(--slate-light);
  margin-bottom: 32px;
}
.tdmd-media__logobar-track {
  display: flex;
  align-items: center;
  gap: 56px;
  width: max-content;
  animation: tdmd-scroll 48s linear infinite;
}
.tdmd-media__logobar-track:hover {
  animation-play-state: paused;
}
@keyframes tdmd-scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
/* Soft fade edges */
.tdmd-media__logobar::before,
.tdmd-media__logobar::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 80px;
  z-index: 2;
  pointer-events: none;
}
.tdmd-media__logobar::before {
  left: 0;
  background: linear-gradient(90deg, #fff 0%, transparent 100%);
}
.tdmd-media__logobar::after {
  right: 0;
  background: linear-gradient(270deg, #fff 0%, transparent 100%);
}
.tdmd-media__logobar-item {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.tdmd-media__logobar-item img {
  height: 44px;
  width: auto;
  max-width: 160px;
  object-fit: contain;
  filter: grayscale(1) contrast(1.1) brightness(0.85);
  opacity: 0.5;
  transition: all 0.3s ease;
}
.tdmd-media__logobar-item:hover img {
  opacity: 0.85;
  filter: grayscale(0.3) contrast(1.05) brightness(0.92);
}
/* Per-logo size fine-tuning */
.tdmd-media__logobar-item.logo-time img { height: 50px; }
.tdmd-media__logobar-item.logo-newsweek img { height: 38px; }
.tdmd-media__logobar-item.logo-usnews img { height: 38px; }
.tdmd-media__logobar-item.logo-huffpost img { height: 42px; }
.tdmd-media__logobar-item.logo-nypost img { height: 44px; }
.tdmd-media__logobar-item.logo-fox img { height: 46px; }
.tdmd-media__logobar-item.logo-dailymail img { height: 38px; }
.tdmd-media__logobar-item.logo-healthline img { height: 36px; }
.tdmd-media__logobar-item.logo-yahoo img { height: 40px; }
.tdmd-media__logobar-item.logo-womansworld img { height: 38px; }
.tdmd-media__logobar-item.logo-eatingwell img { height: 36px; }
.tdmd-media__logobar-item.logo-everydayhealth img { height: 36px; }
.tdmd-media__logobar-item.logo-parade img { height: 38px; }
.tdmd-media__logobar-item.logo-mensjournal img { height: 38px; }
.tdmd-media__logobar-item.logo-shefinds img { height: 36px; }
.tdmd-media__logobar-item.logo-gq img { height: 42px; }

@media (max-width: 768px) {
  .tdmd-media__logobar { padding: 32px 0; }
  .tdmd-media__logobar-track { gap: 40px; }
  .tdmd-media__logobar-item img { height: 34px !important; max-width: 120px; }
  .tdmd-media__logobar-item.logo-time img { height: 40px !important; }
  .tdmd-media__logobar-item.logo-fox img { height: 38px !important; }
  .tdmd-media__logobar-item.logo-gq img { height: 36px !important; }
  .tdmd-media__logobar::before,
  .tdmd-media__logobar::after { width: 40px; }
}

/* Stats Bar */
.tdmd-media__stats {
  display: flex;
  justify-content: center;
  gap: 48px;
  padding: 40px 0;
  margin: 32px 0;
  flex-wrap: wrap;
}
.tdmd-media__stat {
  text-align: center;
}
.tdmd-media__stat-num {
  font-family: var(--serif);
  font-size: 40px;
  color: var(--teal);
  line-height: 1;
  display: block;
}
.tdmd-media__stat-label {
  font-size: 13px;
  font-weight: 500;
  color: var(--slate-light);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-top: 8px;
  display: block;
}

/* Featured Section */
.tdmd-media__featured {
  margin-bottom: 56px;
}
.tdmd-media__featured-label {
  font-family: var(--sans);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: var(--orange);
  margin-bottom: 24px;
  text-align: center;
}
.tdmd-media__featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}
.tdmd-media__featured-card {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 28px;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
.tdmd-media__featured-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--teal);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
}
.tdmd-media__featured-card:hover {
  box-shadow: var(--shadow-hover);
  transform: translateY(-3px);
  border-color: var(--teal);
}
.tdmd-media__featured-card:hover::before {
  transform: scaleX(1);
}
.tdmd-media__featured-outlet {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--teal);
}
.tdmd-media__featured-title {
  font-family: var(--serif);
  font-size: 20px;
  color: var(--navy);
  line-height: 1.35;
}
.tdmd-media__featured-date {
  font-size: 13px;
  color: var(--slate-light);
}

/* Filter Controls */
.tdmd-media__controls {
  display: flex;
  gap: 12px;
  margin-bottom: 32px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.tdmd-media__search {
  flex: 1;
  min-width: 240px;
  max-width: 400px;
  padding: 12px 16px 12px 42px;
  border: 1px solid var(--border);
  border-radius: 8px;
  font-family: var(--sans);
  font-size: 14px;
  color: var(--text-primary);
  background: var(--card-bg) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' fill='none' viewBox='0 0 24 24'%3E%3Cpath stroke='%2394A3B8' stroke-width='2' stroke-linecap='round' d='M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z'/%3E%3C/svg%3E") 14px center no-repeat;
  transition: border-color 0.2s, box-shadow 0.2s;
  outline: none;
}
.tdmd-media__search:focus {
  border-color: var(--teal);
  box-shadow: 0 0 0 3px rgba(0,107,115,0.12);
}
.tdmd-media__filter-btn {
  padding: 10px 18px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: var(--card-bg);
  font-family: var(--sans);
  font-size: 13px;
  font-weight: 500;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.2s;
}
.tdmd-media__filter-btn:hover,
.tdmd-media__filter-btn.active {
  background: var(--teal);
  color: #fff;
  border-color: var(--teal);
}

/* Sort */
.tdmd-media__sort {
  padding: 10px 14px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: var(--card-bg);
  font-family: var(--sans);
  font-size: 13px;
  color: var(--text-secondary);
  cursor: pointer;
  outline: none;
}

/* Article Grid */
.tdmd-media__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 20px;
  margin-bottom: 64px;
}

/* Article Card */
.tdmd-media__card {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 24px;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: all 0.3s ease;
  position: relative;
}
.tdmd-media__card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
  border-color: rgba(0,107,115,0.3);
}
.tdmd-media__card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tdmd-media__outlet {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--teal);
}
.tdmd-media__date {
  font-size: 12px;
  color: var(--slate-light);
  font-weight: 500;
}
.tdmd-media__card-title {
  font-family: var(--serif);
  font-size: 17px;
  color: var(--navy);
  line-height: 1.4;
  margin: 0;
}
.tdmd-media__card-quote {
  font-size: 13.5px;
  line-height: 1.6;
  color: var(--text-secondary);
  font-style: italic;
  padding-left: 14px;
  border-left: 2px solid var(--teal-light);
  margin: 4px 0;
}
.tdmd-media__card-tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-top: auto;
}
.tdmd-media__tag {
  font-size: 11px;
  font-weight: 500;
  padding: 3px 10px;
  border-radius: 100px;
  background: var(--teal-mist);
  color: var(--teal-dark);
  letter-spacing: 0.3px;
}
.tdmd-media__arrow {
  display: inline-block;
  font-size: 13px;
  color: var(--teal);
  margin-top: 4px;
  transition: transform 0.2s;
}
.tdmd-media__card:hover .tdmd-media__arrow {
  transform: translateX(4px);
}

/* Empty state */
.tdmd-media__empty {
  grid-column: 1 / -1;
  text-align: center;
  padding: 48px 24px;
  color: var(--slate-light);
  font-size: 15px;
}

/* Footer */
.tdmd-media__footer {
  text-align: center;
  padding: 48px 0 64px;
  border-top: 1px solid var(--border);
}
.tdmd-media__footer p {
  font-size: 15px;
  color: var(--text-secondary);
  line-height: 1.7;
  max-width: 520px;
  margin: 0 auto 24px;
}
.tdmd-media__cta {
  display: inline-block;
  padding: 14px 32px;
  background: var(--teal);
  color: #fff;
  font-family: var(--sans);
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.25s;
}
.tdmd-media__cta:hover {
  background: var(--teal-dark);
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

/* Animations */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}
.tdmd-media__card, .tdmd-media__featured-card {
  animation: fadeUp 0.5s ease both;
}
.tdmd-media__grid .tdmd-media__card:nth-child(1) { animation-delay: 0.02s; }
.tdmd-media__grid .tdmd-media__card:nth-child(2) { animation-delay: 0.06s; }
.tdmd-media__grid .tdmd-media__card:nth-child(3) { animation-delay: 0.10s; }
.tdmd-media__grid .tdmd-media__card:nth-child(4) { animation-delay: 0.14s; }
.tdmd-media__grid .tdmd-media__card:nth-child(5) { animation-delay: 0.18s; }
.tdmd-media__grid .tdmd-media__card:nth-child(6) { animation-delay: 0.22s; }

/* Responsive */
@media (max-width: 768px) {
  .tdmd-media { padding: 0 16px; }
  .tdmd-media__hero { padding: 40px 0 36px; }
  .tdmd-media__stats { gap: 32px; }
  .tdmd-media__stat-num { font-size: 32px; }
  .tdmd-media__grid { grid-template-columns: 1fr; }
  .tdmd-media__featured-grid { grid-template-columns: 1fr; }
  .tdmd-media__controls { flex-direction: column; align-items: stretch; }
  .tdmd-media__search { max-width: 100%; }
}
`;

// Count-up animation hook
function useCountUp(target, isNumeric, triggered) {
  const [display, setDisplay] = useState(isNumeric ? '0' : target);

  useEffect(() => {
    if (!triggered || !isNumeric) return;
    const end = parseInt(target, 10);
    const duration = 1200;
    const step = 16;
    const steps = Math.ceil(duration / step);
    let current = 0;
    const increment = end / steps;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setDisplay(String(end));
        clearInterval(timer);
      } else {
        setDisplay(String(Math.floor(current)));
      }
    }, step);
    return () => clearInterval(timer);
  }, [triggered, target, isNumeric]);

  return display;
}

// Individual stat counter
function StatCounter({ target, label, triggered }) {
  const isNumeric = /^\d+$/.test(target);
  const display = useCountUp(target, isNumeric, triggered);
  return (
    <div className="tdmd-media__stat">
      <span className="tdmd-media__stat-num">
        {isNumeric ? display : target}
      </span>
      <span className="tdmd-media__stat-label">{label}</span>
    </div>
  );
}

export default function MediaMentionsClient() {
  const { stats, outlets, logoUrls, featured, mentions } = mediaMentionsData;

  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [sort, setSort] = useState('newest');
  const [statsTriggered, setStatsTriggered] = useState(false);

  const statsRef = useRef(null);

  // IntersectionObserver for stats counter
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Filter and sort mentions
  const filtered = mentions
    .filter((m) => {
      const matchesSearch =
        !search ||
        m.title.toLowerCase().includes(search.toLowerCase()) ||
        m.publication.toLowerCase().includes(search.toLowerCase()) ||
        (m.quote && m.quote.toLowerCase().includes(search.toLowerCase()));
      const matchesFilter =
        activeFilter === 'all' ||
        (m.topics && m.topics.includes(activeFilter));
      return matchesSearch && matchesFilter;
    })
    .sort((a, b) => {
      if (sort === 'newest') return new Date(b.sortDate) - new Date(a.sortDate);
      if (sort === 'oldest') return new Date(a.sortDate) - new Date(b.sortDate);
      if (sort === 'outlet') return a.publication.localeCompare(b.publication);
      return 0;
    });

  // Build logo bar items (outlets that have logos)
  const logoBarItems = outlets.filter((outlet) => logoUrls[outlet]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="tdmd-media">

        {/* ── HERO ── */}
        <section className="tdmd-media__hero">
          <p className="tdmd-media__kicker">Press &amp; Editorial Coverage</p>
          <h1>TeleDirectMD in the Media</h1>
          <p className="tdmd-media__lede">
            Dr.&nbsp;Parth Bhavsar, board-certified family medicine physician and founder of TeleDirectMD, has been quoted in <strong>23+ major national and international publications</strong> including TIME, Newsweek, British GQ, HuffPost, FOX News Digital, New York Post, Daily Mail, U.S.&nbsp;News &amp; World Report, Healthline, and Yahoo Health — providing expert commentary on evidence-based wellness, nutrition science, infectious disease, and medication safety.
          </p>
        </section>

        {/* ── LOGO BAR ── */}
        <section className="tdmd-media__logobar" aria-label="Featured publications">
          <p className="tdmd-media__logobar-label">As featured in</p>
          <div className="tdmd-media__logobar-track">
            {/* Set 1 — visible */}
            {logoBarItems.map((outlet) => {
              const logoClass = LOGO_CLASS_MAP[outlet] || '';
              // Find first mention URL for this outlet
              const mention = mentions.find((m) => m.publication === outlet);
              const href = mention ? mention.url : '#';
              return (
                <a
                  key={`set1-${outlet}`}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`tdmd-media__logobar-item ${logoClass}`}
                  aria-label={outlet}
                >
                  <img
                    src={logoUrls[outlet]}
                    alt={outlet}
                    loading="lazy"
                    decoding="async"
                  />
                </a>
              );
            })}
            {/* Set 2 — aria-hidden for seamless loop */}
            {logoBarItems.map((outlet) => {
              const logoClass = LOGO_CLASS_MAP[outlet] || '';
              const mention = mentions.find((m) => m.publication === outlet);
              const href = mention ? mention.url : '#';
              return (
                <a
                  key={`set2-${outlet}`}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`tdmd-media__logobar-item ${logoClass}`}
                  aria-hidden="true"
                  tabIndex={-1}
                >
                  <img
                    src={logoUrls[outlet]}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </a>
              );
            })}
          </div>
        </section>

        {/* ── STATS BAR ── */}
        <div className="tdmd-media__stats" ref={statsRef}>
          <StatCounter
            target={String(stats.publications)}
            label="Publications"
            triggered={statsTriggered}
          />
          <StatCounter
            target={String(stats.uniqueOutlets)}
            label="Unique Outlets"
            triggered={statsTriggered}
          />
          <StatCounter
            target={stats.combinedReadership}
            label="Combined Readership"
            triggered={statsTriggered}
          />
          <StatCounter
            target={String(stats.healthTopics)}
            label="Health Topics"
            triggered={statsTriggered}
          />
        </div>

        {/* ── FEATURED SECTION ── */}
        <section className="tdmd-media__featured">
          <p className="tdmd-media__featured-label">Featured Coverage</p>
          <div className="tdmd-media__featured-grid">
            {featured.map((item, i) => (
              <a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="tdmd-media__featured-card"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <span className="tdmd-media__featured-outlet">{item.publication}</span>
                <span className="tdmd-media__featured-title">{item.title}</span>
                <span className="tdmd-media__featured-date">{item.date}</span>
              </a>
            ))}
          </div>
        </section>

        {/* ── FILTER CONTROLS ── */}
        <div className="tdmd-media__controls" role="search" aria-label="Filter articles">
          <input
            type="search"
            className="tdmd-media__search"
            placeholder="Search articles, topics, outlets…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search articles"
          />
          {FILTERS.map((f) => (
            <button
              key={f.value}
              className={`tdmd-media__filter-btn${activeFilter === f.value ? ' active' : ''}`}
              onClick={() => setActiveFilter(f.value)}
              aria-pressed={activeFilter === f.value}
            >
              {f.label}
            </button>
          ))}
          <select
            className="tdmd-media__sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            aria-label="Sort articles"
          >
            {SORT_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>

        {/* ── ARTICLE GRID ── */}
        <div className="tdmd-media__grid" aria-live="polite" aria-label="Media mentions">
          {filtered.length === 0 ? (
            <div className="tdmd-media__empty">
              No articles match your search. Try a different term or filter.
            </div>
          ) : (
            filtered.map((article, i) => (
              <a
                key={`${article.publication}-${article.sortDate}-${i}`}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="tdmd-media__card"
              >
                <div className="tdmd-media__card-header">
                  <span className="tdmd-media__outlet">{article.publication}</span>
                  <span className="tdmd-media__date">{article.date}</span>
                </div>
                <h2 className="tdmd-media__card-title">{article.title}</h2>
                {article.quote && (
                  <p className="tdmd-media__card-quote">"{article.quote}"</p>
                )}
                <div className="tdmd-media__card-tags">
                  {article.tags && article.tags.map((tag) => (
                    <span key={tag} className="tdmd-media__tag">{tag}</span>
                  ))}
                </div>
                <span className="tdmd-media__arrow" aria-hidden="true">Read article →</span>
              </a>
            ))
          )}
        </div>

        {/* ── FOOTER CTA ── */}
        <footer className="tdmd-media__footer">
          <p>
            For press inquiries, expert commentary, or media collaborations, reach out to Dr.&nbsp;Bhavsar and the TeleDirectMD team.
          </p>
          <a
            href="mailto:contact@teledirectmd.com?subject=Press%20Inquiry%20%E2%80%93%20TeleDirectMD"
            className="tdmd-media__cta"
          >
            Contact for Press Inquiries
          </a>
        </footer>

      </div>
    </>
  );
}
