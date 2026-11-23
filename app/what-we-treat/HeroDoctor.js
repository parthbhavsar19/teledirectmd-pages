/* What We Treat hero: doctor first, dark navy palette (Parth's pick, Nov 23 2026). */

const CONDITIONS = [
  { label: 'UTI (women)', href: '/uti-treatment-online/' },
  { label: 'Sinus infection', href: '/sinus-infection-treatment-online/' },
  { label: 'BV', href: '/bv-treatment-online/' },
  { label: 'Yeast infection', href: '/yeast-infection-treatment-online/' },
  { label: 'Flu', href: '/influenza-treatment-online/' },
  { label: 'Medication refills', href: '#cat-chronic-medication-refills' },
];

function Icon({ name }) {
  const p = { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };
  if (name === 'md') return (<svg {...p}><path d="M12 21s-7-4.5-7-11a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 6.5-7 11-7 11z" /></svg>);
  if (name === 'price') return (<svg {...p}><rect x="3" y="6" width="18" height="12" rx="2" /><circle cx="12" cy="12" r="2.5" /></svg>);
  if (name === 'map') return (<svg {...p}><path d="M12 21s-6-5.3-6-10a6 6 0 0 1 12 0c0 4.7-6 10-6 10z" /><circle cx="12" cy="11" r="2" /></svg>);
  return (<svg {...p}><path d="M4 12l5 5L20 6" /></svg>);
}

export default function HeroDoctor() {
  return (
    <section className="wwt-hd" aria-labelledby="wwt-hd-title">
      <div className="wwt-container wwt-hd-grid">
        <div className="wwt-hd-copy">
          <div className="wwt-hd-byline">
            <img src="/images/wwt/bhavsar-hero-cutout.webp" alt="" width="44" height="44" />
            <span><strong>Parth Bhavsar, MD</strong>Board-certified family physician</span>
          </div>
          <span className="wwt-eyebrow wwt-hd-eyebrow">What we treat</span>
          <h1 id="wwt-hd-title">60+ conditions, treated by a real doctor.</h1>
          <nav className="wwt-hd-conds" aria-label="Common conditions">
            {CONDITIONS.map((c) => (
              <a key={c.label} href={c.href}>{c.label}</a>
            ))}
            <a className="wwt-hd-all" href="#wwt-results">All 60+ →</a>
          </nav>
          <p className="wwt-hd-lede">
            Every visit is live video with a board-certified physician. Not a chatbot, not a questionnaire,
            not a nurse queue.
          </p>
          <div className="wwt-hd-cta">
            <a className="wwt-hd-btn" href="/book-online/">Book a visit · $79</a>
            <a className="wwt-hd-sub" href="/insurance/">or use select insurance</a>
          </div>
          <ul className="wwt-hd-trust">
            <li><Icon name="md" />Physician-only, never an NP or PA</li>
            <li><Icon name="price" />$79 flat, FSA and HSA eligible</li>
            <li><Icon name="map" />Licensed in 40+ states</li>
            <li><Icon name="check" />Adults 18+, no controlled substances</li>
          </ul>
        </div>
        <figure className="wwt-hd-doc">
          <div className="wwt-hd-arch" aria-hidden="true" />
          <img
            className="wwt-hd-photo"
            src="/images/wwt/bhavsar-hero-cutout.webp"
            alt="Parth Bhavsar, MD, board-certified family physician"
            width="640"
            height="806"
            fetchPriority="high"
          />
          <figcaption className="wwt-hd-plate">
            <strong>Parth Bhavsar, MD</strong>
            <span>Board-certified family physician</span>
            <span>Founder and medical director</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
