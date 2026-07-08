// Bold visual overhaul for /cost/uti-antibiotics-cost ONLY (design pilot).
// Self-contained, static-export safe. Rendered above the standard template body
// for this one slug. Uses the site's navy/teal palette with a warm accent.
//
// Palette: navy #003E52, teal #01696F/#0C8F99, mint surfaces, gold accent #E8A33D
// for the "star" price numbers (earns attention on the money figures).

const NAVY = '#003E52';
const TEAL = '#0C8F99';
const GOLD = '#E8A33D';
const INK = '#0A2438';

const DRUGS = [
  { name: 'Nitrofurantoin', brand: 'Macrobid', price: '$7–$22', tag: 'First-line', tagColor: TEAL, note: '5-day course · preferred per IDSA' },
  { name: 'Trimethoprim-sulfa', brand: 'Bactrim', price: '$5–$20', tag: 'Cheapest', tagColor: '#437A22', note: '3-day course · where resistance <20%' },
  { name: 'Cephalexin', brand: 'Keflex', price: '$11–$18', tag: 'Alternative', tagColor: '#7A7974', note: 'Beta-lactam · safe in pregnancy' },
  { name: 'Fosfomycin', brand: 'Monurol', price: '$20–$52', tag: 'Single dose', tagColor: '#006494', note: 'One-time 3g sachet' },
];

const BARS = [
  { label: 'TeleDirectMD visit + generic', value: '$85–$93', w: 12, hero: true },
  { label: 'Retail clinic (CVS MinuteClinic)', value: '$105–$153', w: 20 },
  { label: 'Urgent care (uninsured)', value: '$150–$450', w: 52 },
  { label: 'ER for a UTI', value: '$1,200–$3,000+', w: 100, warn: true },
];

export default function UtiAntibioticsVisual({ price = '79' }) {
  return (
    <section aria-label="UTI antibiotics cost at a glance" style={{ background: NAVY, color: '#fff', padding: '2.5rem 1rem 2.75rem' }}>
      <style>{`
        .uti-viz-wrap{max-width:1120px;margin:0 auto;}
        .uti-viz-grid{display:grid;grid-template-columns:1.1fr 1fr;gap:2rem;align-items:start;}
        @media(max-width:820px){.uti-viz-grid{grid-template-columns:1fr;}}
        .uti-eyebrow{text-transform:uppercase;letter-spacing:.12em;font-size:.72rem;font-weight:700;color:#8FD3D9;margin:0 0 .5rem;}
        .uti-headline{font-size:2rem;line-height:1.15;font-weight:800;margin:0 0 .6rem;color:#fff;}
        .uti-sub{font-size:1.02rem;line-height:1.5;color:#D6EAEC;margin:0 0 1.4rem;max-width:52ch;}
        .uti-price-hero{display:flex;align-items:baseline;gap:.5rem;flex-wrap:wrap;margin:0 0 .35rem;}
        .uti-price-num{font-size:3.4rem;font-weight:800;color:${GOLD};line-height:1;}
        .uti-price-plus{font-size:1.1rem;color:#D6EAEC;}
        .uti-price-med{font-size:2rem;font-weight:800;color:#fff;line-height:1;}
        .uti-price-cap{font-size:.9rem;color:#B9D6D9;margin:.5rem 0 1.5rem;}
        .uti-cta{display:inline-flex;align-items:center;gap:.5rem;background:${GOLD};color:${NAVY};font-weight:800;
          padding:.85rem 1.6rem;border-radius:8px;text-decoration:none;font-size:1.05rem;box-shadow:0 6px 18px rgba(232,163,61,.28);}
        .uti-cta:hover{filter:brightness(1.05);}
        .uti-cta-note{font-size:.82rem;color:#9FC6CA;margin:.75rem 0 0;}
        .uti-card{background:#fff;border-radius:14px;padding:1.25rem 1.25rem 1rem;box-shadow:0 10px 30px rgba(0,0,0,.22);}
        .uti-card h3{margin:0 0 .15rem;color:${NAVY};font-size:1.05rem;font-weight:800;}
        .uti-card .cap{margin:0 0 1rem;color:#5a6b74;font-size:.82rem;}
        .uti-drug{display:flex;align-items:center;justify-content:space-between;gap:.75rem;padding:.7rem 0;border-top:1px solid #edf2f3;}
        .uti-drug:first-of-type{border-top:none;}
        .uti-drug-name{font-weight:700;color:${INK};font-size:.95rem;}
        .uti-drug-brand{color:#7a8890;font-weight:500;}
        .uti-drug-note{font-size:.76rem;color:#7a8890;margin-top:.1rem;}
        .uti-badge{display:inline-block;font-size:.66rem;font-weight:800;text-transform:uppercase;letter-spacing:.05em;
          color:#fff;padding:.12rem .45rem;border-radius:999px;margin-bottom:.2rem;}
        .uti-drug-price{font-weight:800;color:${TEAL};font-size:1.05rem;white-space:nowrap;font-variant-numeric:tabular-nums;}
        .uti-bars{margin-top:1.6rem;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.14);border-radius:14px;padding:1.25rem 1.4rem;}
        .uti-bars h3{margin:0 0 .1rem;color:#fff;font-size:1rem;font-weight:800;}
        .uti-bars .cap{margin:0 0 1rem;color:#B9D6D9;font-size:.8rem;}
        .uti-bar-row{margin:.55rem 0;}
        .uti-bar-top{display:flex;justify-content:space-between;font-size:.88rem;margin-bottom:.28rem;color:#EAF6F7;}
        .uti-bar-top .v{font-weight:800;font-variant-numeric:tabular-nums;}
        .uti-bar-track{height:16px;background:rgba(255,255,255,.12);border-radius:999px;overflow:hidden;}
        .uti-bar-fill{height:100%;border-radius:999px;background:linear-gradient(90deg,#2AA9B3,#0C8F99);}
        .uti-bar-fill.hero{background:linear-gradient(90deg,${GOLD},#F2B65A);}
        .uti-bar-fill.warn{background:linear-gradient(90deg,#B4573A,#8f3f28);}
        .uti-note{grid-column:1/-1;margin:1.6rem 0 0;font-size:.82rem;color:#9FC6CA;text-align:center;}
      `}</style>

      <div className="uti-viz-wrap">
        <div className="uti-viz-grid">
          {/* Left: headline + price hero + CTA */}
          <div>
            <p className="uti-eyebrow">UTI Antibiotics · 2026 Cash-Pay Pricing</p>
            <h1 className="uti-headline">There are no over-the-counter UTI antibiotics. Here is the fast, legal way to get one.</h1>
            <p className="uti-sub">
              Every antibiotic that cures a UTI needs a prescription. The good news: the medication is cheap, and a
              same-day video visit gets you one without an in-person appointment.
            </p>

            <div className="uti-price-hero">
              <span className="uti-price-num">${price}</span>
              <span className="uti-price-plus">visit&nbsp;+</span>
              <span className="uti-price-med">$5–$25</span>
              <span className="uti-price-plus">generic antibiotic</span>
            </div>
            <p className="uti-price-cap">Total often $85–$93 · same-day prescription to your pharmacy · no insurance required</p>

            <a href="/book-online" className="uti-cta">Get a UTI Prescription Today →</a>
            <p className="uti-cta-note">Board-certified MD · 43 states · evenings &amp; weekends · HSA/FSA accepted</p>
          </div>

          {/* Right: drug-cost card */}
          <div className="uti-card">
            <h3>What each UTI antibiotic costs</h3>
            <p className="cap">Lowest GoodRx cash price, standard course. Prescription required for all.</p>
            {DRUGS.map((d) => (
              <div className="uti-drug" key={d.name}>
                <div>
                  <span className="uti-badge" style={{ background: d.tagColor }}>{d.tag}</span>
                  <div className="uti-drug-name">{d.name} <span className="uti-drug-brand">({d.brand})</span></div>
                  <div className="uti-drug-note">{d.note}</div>
                </div>
                <div className="uti-drug-price">{d.price}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Full-width comparison bars */}
        <div className="uti-bars">
          <h3>What treating a UTI costs across care settings</h3>
          <p className="cap">Total out-of-pocket including the antibiotic (uninsured, 2026).</p>
          {BARS.map((b) => (
            <div className="uti-bar-row" key={b.label}>
              <div className="uti-bar-top">
                <span>{b.label}</span>
                <span className="v">{b.value}</span>
              </div>
              <div className="uti-bar-track">
                <div className={`uti-bar-fill${b.hero ? ' hero' : ''}${b.warn ? ' warn' : ''}`} style={{ width: `${b.w}%` }} />
              </div>
            </div>
          ))}
          <p style={{ margin: '0.9rem 0 0', fontSize: '0.74rem', color: '#8FB6BA' }}>
            Sources: Mira Health 2025, GoodRx 2026, CVS MinuteClinic 2024. AZO and other OTC products only relieve
            symptoms; they do not cure the infection.
          </p>
        </div>
      </div>
    </section>
  );
}
