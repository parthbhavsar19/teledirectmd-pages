import { getStates } from '../../lib/get-data';
import {
  REVIEW_PLATFORMS,
  TOTAL_REVIEW_COUNT,
  AGGREGATE_RATING_VALUE,
  getAggregateRating,
  getPlatformReviews,
} from '../../lib/review-schema';
import { PRICE_SHORT, PHYSICIAN_NAME } from '../../lib/global-invariants';
import reviewsData from '../../data/reviews.json';

/* ── Dynamic, drift-proof facts ───────────────────────────────────────────
   Coverage and rating totals are derived from the same single sources of
   truth the rest of the site uses, so this page can never re-stale the way
   the old Squarespace page did. */
const COVERAGE_AREAS = getStates().length; // 45 (44 states + DC)
const STATE_COUNT = getStates().filter(
  (s) => !/d\.?c\.?|district of columbia/i.test(s.name),
).length; // 43
const COVERAGE_PHRASE = `${STATE_COUNT} states + Washington, D.C.`;
const SITE = 'https://teledirectmd.com';
const PAGE_URL = `${SITE}/reviews/`;
const BOOK_URL = '/book-online';

/* ── Theme grouping for the review grid ───────────────────────────────────
   Each verbatim review from data/reviews.json is assigned to exactly one
   theme. Assignment priority (value → prescriptions → bedside → speed)
   guarantees the small "value" bucket is populated rather than absorbed by
   the larger "speed" bucket. Display order follows the brief. */
const THEMES = [
  { key: 'speed', label: 'Speed' },
  { key: 'prescriptions', label: 'Prescriptions' },
  { key: 'bedside', label: 'Bedside Manner' },
  { key: 'value', label: 'Value' },
];

function themeForTags(tags = []) {
  if (tags.includes('affordable')) return 'value';
  if (tags.includes('prescriptions')) return 'prescriptions';
  if (tags.includes('thorough') || tags.includes('compassionate')) return 'bedside';
  return 'speed'; // "quick" and any untagged fall here
}

function Stars({ count = 5 }) {
  return (
    <span className="rv-stars" aria-label={`${count} out of 5 stars`}>
      {'★'.repeat(count)}
    </span>
  );
}

export const metadata = {
  title: 'Patient Reviews | TeleDirectMD – Rated 4.9+ by Patients',
  description:
    `Read ${TOTAL_REVIEW_COUNT} verified patient reviews of TeleDirectMD — a ${AGGREGATE_RATING_VALUE}★ ` +
    `average across Google, Zocdoc, WebMD, and Healthgrades. Board-certified family medicine ` +
    `physician Dr. Parth Bhavsar offers ${PRICE_SHORT} flat-fee video visits across ${COVERAGE_PHRASE}`,
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  authors: [{ name: PHYSICIAN_NAME }],
  openGraph: {
    type: 'website',
    siteName: 'TeleDirectMD',
    locale: 'en_US',
    title: 'Patient Reviews | TeleDirectMD – Rated 4.9+ by Patients',
    description:
      `${TOTAL_REVIEW_COUNT} verified patient reviews of TeleDirectMD — a ${AGGREGATE_RATING_VALUE}★ average ` +
      `across Google, Zocdoc, WebMD, and Healthgrades. ${PRICE_SHORT} flat-fee video visits with Dr. Parth Bhavsar.`,
    url: PAGE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Patient Reviews | TeleDirectMD – Rated 4.9+ by Patients',
    description:
      `${TOTAL_REVIEW_COUNT} verified patient reviews of TeleDirectMD — a ${AGGREGATE_RATING_VALUE}★ average ` +
      `across Google, Zocdoc, WebMD, and Healthgrades. ${PRICE_SHORT} flat-fee video visits with Dr. Parth Bhavsar.`,
  },
  alternates: { canonical: PAGE_URL },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE}/reviews#breadcrumbs`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Patient Reviews', item: PAGE_URL },
      ],
    },
    {
      '@type': 'MedicalWebPage',
      '@id': `${SITE}/reviews#webpage`,
      url: PAGE_URL,
      name: 'Patient Reviews | TeleDirectMD',
      description:
        `${TOTAL_REVIEW_COUNT} verified patient reviews of TeleDirectMD (a ${AGGREGATE_RATING_VALUE}★ average ` +
        `across Google, Zocdoc, WebMD, and Healthgrades), a physician-led telehealth practice offering ` +
        `${PRICE_SHORT} flat-fee video visits across ${COVERAGE_PHRASE}`,
      inLanguage: 'en-US',
      breadcrumb: { '@id': `${SITE}/reviews#breadcrumbs` },
      about: { '@id': `${SITE}/#physician` },
      mainEntity: { '@id': `${SITE}/#physician` },
      isPartOf: { '@id': `${SITE}/#website` },
      lastReviewed: new Date().toISOString().split('T')[0],
    },
    {
      '@type': 'Physician',
      '@id': `${SITE}/#physician`,
      name: PHYSICIAN_NAME,
      medicalSpecialty: 'https://schema.org/FamilyPractice',
      url: `${SITE}/about/`,
      aggregateRating: getAggregateRating(),
      review: getPlatformReviews(),
    },
  ],
};

const REVIEWS_CSS = `
  .rv-page{font-family:'Inter','Segoe UI',sans-serif;color:var(--tdmd-text);}
  .rv-page *{box-sizing:border-box;}

  /* ── Hero ── */
  .rv-hero{background:linear-gradient(135deg,var(--tdmd-navy) 0%,var(--tdmd-teal) 140%);color:#fff;padding:64px 0 56px;}
  :root[data-theme="dark"] .rv-hero{background:linear-gradient(135deg,#0a171c 0%,#0f2a30 140%);}
  @media (prefers-color-scheme: dark){:root:not([data-theme="light"]) .rv-hero{background:linear-gradient(135deg,#0a171c 0%,#0f2a30 140%);}}
  .rv-hero-inner{max-width:1100px;margin:0 auto;padding:0 24px;text-align:center;}
  .rv-eyebrow{font-size:0.8rem;font-weight:600;letter-spacing:0.16em;text-transform:uppercase;color:rgba(255,255,255,0.72);margin-bottom:14px;}
  .rv-hero h1{font-family:'Merriweather',serif;font-size:2.6rem;line-height:1.15;margin:0 0 14px;color:#fff;}
  .rv-hero p{font-size:1.1rem;line-height:1.7;color:rgba(255,255,255,0.9);max-width:660px;margin:0 auto;}

  /* ── Trust strip ── */
  .rv-trust{display:flex;flex-wrap:wrap;justify-content:center;align-items:stretch;gap:16px;margin-top:34px;}
  .rv-trust-score{display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.18);border-radius:16px;padding:18px 26px;backdrop-filter:blur(4px);}
  .rv-trust-score .rv-big{font-family:'Merriweather',serif;font-size:2.4rem;font-weight:700;line-height:1;color:#fff;}
  .rv-trust-score .rv-stars{color:#F2B705;font-size:1.05rem;letter-spacing:2px;margin:6px 0 2px;}
  .rv-trust-score small{font-size:0.82rem;color:rgba(255,255,255,0.82);}
  .rv-platforms{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:10px;}
  .rv-platform{display:flex;flex-direction:column;align-items:center;gap:2px;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.18);border-radius:14px;padding:12px 18px;min-width:96px;text-decoration:none;color:#fff;transition:background 0.15s;}
  .rv-platform:hover{background:rgba(255,255,255,0.2);}
  .rv-platform .rv-pname{font-weight:700;font-size:0.95rem;}
  .rv-platform .rv-pcount{font-size:0.78rem;color:rgba(255,255,255,0.82);}

  /* ── Section shell ── */
  .rv-section{max-width:1100px;margin:0 auto;padding:56px 24px;}
  .rv-section-head{text-align:center;margin-bottom:36px;}
  .rv-section-head h2{font-family:'Merriweather',serif;font-size:1.9rem;margin:0 0 8px;color:var(--tdmd-text);}
  .rv-section-head p{color:var(--tdmd-muted);font-size:1rem;margin:0;}

  /* ── Featured reviews ── */
  .rv-featured-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:22px;}
  .rv-featured-card{background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:var(--tdmd-radius);box-shadow:var(--tdmd-shadow);padding:30px 28px;position:relative;}
  .rv-featured-card::before{content:'\\201C';position:absolute;top:10px;left:20px;font-family:'Merriweather',serif;font-size:3.4rem;line-height:1;color:var(--tdmd-teal);opacity:0.16;}
  .rv-featured-card .rv-stars{color:#F2B705;font-size:0.95rem;letter-spacing:1px;position:relative;}
  .rv-featured-card blockquote{margin:12px 0 18px;font-size:1.05rem;line-height:1.7;color:var(--tdmd-text);}
  .rv-byline{display:flex;align-items:center;justify-content:space-between;gap:10px;}
  .rv-byline .rv-name{font-weight:700;font-size:0.95rem;color:var(--tdmd-text);}
  .rv-byline .rv-src{font-size:0.78rem;color:var(--tdmd-muted);}

  /* ── Filter + grid ── */
  .rv-filter{display:flex;flex-wrap:wrap;justify-content:center;gap:10px;margin-bottom:30px;}
  .rv-pill{border:1px solid var(--tdmd-border);background:var(--tdmd-card);color:var(--tdmd-text);border-radius:999px;padding:8px 18px;font-size:0.9rem;font-weight:600;cursor:pointer;transition:all 0.15s;font-family:inherit;}
  .rv-pill:hover{border-color:var(--tdmd-teal);color:var(--tdmd-teal);}
  .rv-pill.is-active{background:var(--tdmd-teal);border-color:var(--tdmd-teal);color:#fff;}
  .rv-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:18px;}
  .rv-card{background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:14px;padding:22px 20px;display:flex;flex-direction:column;gap:10px;}
  .rv-card[hidden]{display:none;}
  .rv-theme-tag{align-self:flex-start;font-size:0.68rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--tdmd-teal);background:var(--tdmd-bg-soft);border-radius:999px;padding:3px 10px;}
  .rv-card .rv-stars{color:#F2B705;font-size:0.82rem;letter-spacing:1px;}
  .rv-card p{margin:0;font-size:0.95rem;line-height:1.6;color:var(--tdmd-text);}
  .rv-card .rv-byline{margin-top:auto;}

  /* ── CTA ── */
  .rv-cta{background:var(--tdmd-navy);color:#fff;text-align:center;padding:60px 24px;}
  :root[data-theme="dark"] .rv-cta{background:#0f2a30;}
  @media (prefers-color-scheme: dark){:root:not([data-theme="light"]) .rv-cta{background:#0f2a30;}}
  .rv-cta-inner{max-width:600px;margin:0 auto;}
  .rv-cta h2{font-family:'Merriweather',serif;font-size:1.9rem;margin:0 0 10px;color:#fff;}
  .rv-cta p{color:rgba(255,255,255,0.85);font-size:1.05rem;margin:0 0 26px;line-height:1.6;}
  .rv-cta-btn{display:inline-block;background:#fff;color:var(--tdmd-navy);padding:15px 40px;border-radius:999px;font-weight:700;font-size:1rem;text-decoration:none;transition:transform 0.15s,box-shadow 0.15s;}
  .rv-cta-btn:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(0,0,0,0.25);}

  @media (max-width:640px){
    .rv-hero h1{font-size:2rem;}
    .rv-section-head h2{font-size:1.55rem;}
  }
`;

/* Progressive-enhancement filter: without JS every card is visible and the
   cards remain grouped by theme in source order. */
const FILTER_JS = `
(function(){
  var root=document.getElementById('rv-reviews-app');
  if(!root)return;
  var pills=root.querySelectorAll('.rv-pill');
  var cards=root.querySelectorAll('.rv-card');
  pills.forEach(function(pill){
    pill.addEventListener('click',function(){
      var f=pill.getAttribute('data-filter');
      pills.forEach(function(p){p.classList.toggle('is-active',p===pill);});
      cards.forEach(function(c){
        c.hidden=(f!=='all'&&c.getAttribute('data-theme')!==f);
      });
    });
  });
})();
`;

export default function ReviewsPage() {
  const featured = reviewsData.featured || [];
  const grouped = THEMES.map((t) => ({
    ...t,
    items: (reviewsData.reviews || []).filter(
      (r) => themeForTags(r.tags) === t.key,
    ),
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <style dangerouslySetInnerHTML={{ __html: REVIEWS_CSS }} />

      <div className="rv-page" id="rv-reviews-app">
        <nav className="tdm-sr-only" aria-label="Breadcrumb" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)' }}>
          <ol>
            <li><a href="/">Home</a></li>
            <li>Patient Reviews</li>
          </ol>
        </nav>

        {/* ── HERO + TRUST STRIP ── */}
        <header className="rv-hero">
          <div className="rv-hero-inner">
            <div className="rv-eyebrow">What Our Patients Say</div>
            <h1>Real Reviews from Real Patients</h1>
            <p>
              Dr. Parth Bhavsar, a board-certified family medicine physician, personally
              conducts every visit. Here is what patients say about {PRICE_SHORT} flat-fee
              video care across {COVERAGE_PHRASE} ({COVERAGE_AREAS} coverage areas).
            </p>

            <div className="rv-trust">
              <div className="rv-trust-score">
                <span className="rv-big">{AGGREGATE_RATING_VALUE}</span>
                <Stars count={5} />
                <small>avg across {TOTAL_REVIEW_COUNT} verified reviews</small>
              </div>
              <div className="rv-platforms">
                {REVIEW_PLATFORMS.map((p) => (
                  <a key={p.name} className="rv-platform" href={p.url} target="_blank" rel="noopener noreferrer">
                    <span className="rv-pname">{p.name}</span>
                    <span className="rv-pcount">{p.ratingValue.toFixed(1)} ★ · {p.reviewCount}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* ── FEATURED REVIEWS ── */}
        {featured.length > 0 && (
          <section className="rv-section" aria-label="Featured patient reviews">
            <div className="rv-section-head">
              <h2>Featured Reviews</h2>
              <p>Longer stories from patients who chose physician-led telehealth.</p>
            </div>
            <div className="rv-featured-grid">
              {featured.map((f, i) => (
                <figure className="rv-featured-card" key={`${f.name}-${i}`}>
                  <Stars count={f.rating || 5} />
                  <blockquote>{f.text}</blockquote>
                  <figcaption className="rv-byline">
                    <span className="rv-name">{f.name}</span>
                    <span className="rv-src">{f.source}{f.date ? ` · ${f.date}` : ''}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {/* ── THEMED, FILTERABLE GRID ── */}
        <section className="rv-section" aria-label="Patient reviews by theme" style={{ paddingTop: 0 }}>
          <div className="rv-section-head">
            <h2>More Patient Reviews</h2>
            <p>Filter by what matters most to you.</p>
          </div>

          <div className="rv-filter" role="group" aria-label="Filter reviews by theme">
            <button type="button" className="rv-pill is-active" data-filter="all">All</button>
            {THEMES.map((t) => (
              <button type="button" className="rv-pill" data-filter={t.key} key={t.key}>{t.label}</button>
            ))}
          </div>

          <div className="rv-grid">
            {grouped.flatMap((g) =>
              g.items.map((r, i) => (
                <article className="rv-card" data-theme={g.key} key={`${g.key}-${r.name}-${i}`}>
                  <span className="rv-theme-tag">{g.label}</span>
                  <Stars count={r.rating || 5} />
                  <p>{r.text}</p>
                  <div className="rv-byline">
                    <span className="rv-name">{r.name}</span>
                    <span className="rv-src">{r.source}{r.date ? ` · ${r.date}` : ''}</span>
                  </div>
                </article>
              )),
            )}
          </div>
        </section>

        {/* ── CLOSING CTA ── */}
        <section className="rv-cta" aria-label="Book a visit">
          <div className="rv-cta-inner">
            <h2>Join thousands of highly rated visits</h2>
            <p>See Dr. Bhavsar by secure video today. Flat {PRICE_SHORT}, no insurance required.</p>
            <a href={BOOK_URL} className="rv-cta-btn">Book a {PRICE_SHORT} Visit</a>
          </div>
        </section>

        <script dangerouslySetInnerHTML={{ __html: FILTER_JS }} />
      </div>
    </>
  );
}
