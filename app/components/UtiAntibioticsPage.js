// Full dedicated design for /cost/uti-antibiotics-cost ONLY.
// Self-styled (own fonts + layout), replaces the bland shared-template body for
// this one slug. Static-export safe. Does not affect any other cost page.
//
// Type system: Fraunces (display, warm editorial serif) + DM Sans (body) via CDN.
// Palette: navy #003E52, teal #0C8F99, gold accent #E8A33D, warm neutrals.

const NAVY = '#003E52';
const TEAL = '#0C8F99';
const GOLD = '#E8A33D';

const DRUGS = [
  { name: 'Nitrofurantoin', brand: 'Macrobid', price: '$7–$22', tag: 'First-line', tagColor: TEAL, note: '5-day course · minimal resistance · preferred per IDSA' },
  { name: 'Trimethoprim-sulfa', brand: 'Bactrim', price: '$5–$20', tag: 'Cheapest', tagColor: '#437A22', note: '3-day course · where local resistance is under 20%' },
  { name: 'Cephalexin', brand: 'Keflex', price: '$11–$18', tag: 'Alternative', tagColor: '#6E7A80', note: 'Beta-lactam alternative · safe in pregnancy' },
  { name: 'Fosfomycin', brand: 'Monurol', price: '$20–$52', tag: 'Single dose', tagColor: '#006494', note: 'One-time 3g sachet · convenient but pricier' },
  { name: 'Ciprofloxacin', brand: 'Cipro', price: '$25', tag: 'Reserved', tagColor: '#8a6d3b', note: 'No longer first-line for uncomplicated cystitis' },
  { name: 'Blujepa', brand: 'gepotidacin', price: '$400–$600', tag: 'Brand only', tagColor: '#B4573A', note: 'Newest FDA-approved oral · no generic · rarely needed' },
];

const BARS = [
  { label: 'TeleDirectMD visit + generic', value: '$85–$93', w: 12, hero: true },
  { label: 'Retail clinic (CVS MinuteClinic)', value: '$105–$153', w: 20 },
  { label: 'Urgent care (uninsured)', value: '$150–$450', w: 52 },
  { label: 'ER for a UTI', value: '$1,200–$3,000+', w: 100, warn: true },
];

const STEPS = [
  { n: '1', h: 'Book in 2 minutes', p: 'Pick a same-day or next-available slot. Pay $79, or use HSA/FSA, or apply in-network insurance.' },
  { n: '2', h: 'Video visit with an MD', p: 'Connect by secure video with Dr. Bhavsar. No app download. Most visits take 10–15 minutes.' },
  { n: '3', h: 'Prescription to your pharmacy', p: 'Get a diagnosis, a written summary, and an e-prescription routed to your pharmacy, usually within the hour.' },
];

const FAQS = [
  { q: 'Are there any over-the-counter antibiotics for a UTI?', a: 'No. In the U.S., all oral antibiotics that cure a UTI (nitrofurantoin, Bactrim, cephalexin, fosfomycin) require a prescription. OTC products like AZO only relieve symptoms; they do not cure the infection.' },
  { q: 'How much do UTI antibiotics cost without insurance?', a: 'Generics are cheap with GoodRx: nitrofurantoin $7–$22, Bactrim $5–$20, cephalexin $11–$18, fosfomycin $20–$52. The newest brand-only option, Blujepa, runs $400–$600 and is rarely needed.' },
  { q: 'How do I get UTI antibiotics without seeing a doctor in person?', a: 'Book a telehealth visit. A licensed MD can assess your symptoms by video and send an e-prescription to your pharmacy same-day, with no in-person appointment or urinalysis required for an uncomplicated UTI.' },
  { q: 'Is AZO an antibiotic?', a: 'No. AZO (phenazopyridine) is a urinary analgesic that numbs burning within about 20 minutes. It has no antibacterial activity and will not cure your UTI.' },
  { q: 'What is the cheapest UTI antibiotic?', a: 'Trimethoprim-sulfamethoxazole (generic Bactrim) is often the cheapest at $5–$20, followed closely by nitrofurantoin. Your prescriber picks based on local resistance and your history.' },
  { q: 'Can I get UTI antibiotics online same-day?', a: 'Yes. A $79 TeleDirectMD video visit typically results in an antibiotic at your pharmacy within an hour, with same-day visits available evenings and weekends in 44 states.' },
];

export default function UtiAntibioticsPage({ price = '79' }) {
  return (
    <div className="uap">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=DM+Sans:wght@400;500;600;700&display=swap');

        .uap{--navy:${NAVY};--teal:${TEAL};--gold:${GOLD};--ink:#12303b;--muted:#5c7078;--line:#e4ecee;
          font-family:'DM Sans',system-ui,sans-serif;color:var(--ink);}
        .uap h1,.uap h2,.uap h3,.uap .disp{font-family:'Fraunces',Georgia,serif;font-weight:600;letter-spacing:-0.01em;}
        .uap-wrap{max-width:1080px;margin:0 auto;padding:0 1.25rem;}
        .uap-sec{padding:3.25rem 0;}
        .uap-sec--tight{padding:2.25rem 0;}
        .uap-kicker{text-transform:uppercase;letter-spacing:.14em;font-size:.72rem;font-weight:700;color:var(--teal);margin:0 0 .6rem;}
        .uap h2{font-size:clamp(1.6rem,3.2vw,2.15rem);line-height:1.12;color:var(--navy);margin:0 0 .5rem;}
        .uap-lead{font-size:1.05rem;line-height:1.6;color:var(--muted);max-width:60ch;margin:0 0 1.75rem;}

        /* HERO */
        .uap-hero{background:linear-gradient(160deg,#012f3e 0%,#01465a 60%,#065f6b 100%);color:#fff;padding:3rem 0 3.25rem;}
        .uap-hero-grid{display:grid;grid-template-columns:1.08fr .92fr;gap:2.5rem;align-items:center;}
        @media(max-width:840px){.uap-hero-grid{grid-template-columns:1fr;}}
        .uap-hero .k{color:#7fd0d8;}
        .uap-hero h1{font-size:clamp(2rem,4.6vw,3rem);line-height:1.08;color:#fff;margin:0 0 .9rem;}
        .uap-hero p.sub{font-size:1.08rem;line-height:1.55;color:#d7ebee;margin:0 0 1.6rem;max-width:50ch;}
        .uap-pricebox{display:inline-flex;align-items:baseline;gap:.55rem;flex-wrap:wrap;
          background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.16);border-radius:16px;padding:1rem 1.25rem;margin:0 0 1.4rem;}
        .uap-pricebox .big{font-family:'Fraunces',serif;font-size:3rem;font-weight:600;color:var(--gold);line-height:1;}
        .uap-pricebox .med{font-family:'Fraunces',serif;font-size:1.9rem;font-weight:600;color:#fff;line-height:1;}
        .uap-pricebox .lab{font-size:.95rem;color:#cfe6e9;}
        .uap-cta{display:inline-flex;align-items:center;gap:.5rem;background:var(--gold);color:#08313f;font-weight:700;
          padding:.9rem 1.7rem;border-radius:12px;text-decoration:none;font-size:1.05rem;box-shadow:0 10px 26px rgba(232,163,61,.3);transition:transform .15s,filter .15s;}
        .uap-cta:hover{transform:translateY(-1px);filter:brightness(1.05);}
        .uap-cta--navy{background:var(--navy);color:#fff;box-shadow:0 8px 22px rgba(0,62,82,.28);}
        .uap-cta--ghost{background:transparent;border:1.5px solid rgba(255,255,255,.5);color:#fff;box-shadow:none;}
        .uap-trust{font-size:.85rem;color:#9fc6ca;margin:1rem 0 0;}

        /* HERO card (drug list) */
        .uap-hcard{background:#fff;border-radius:18px;padding:1.4rem 1.4rem 1.1rem;box-shadow:0 18px 46px rgba(0,0,0,.26);}
        .uap-hcard h3{font-size:1.1rem;color:var(--navy);margin:0 0 .15rem;}
        .uap-hcard .cap{font-family:'DM Sans';font-size:.8rem;color:var(--muted);margin:0 0 .9rem;}
        .uap-drug{display:flex;align-items:center;justify-content:space-between;gap:.9rem;padding:.62rem 0;border-top:1px solid #eef3f4;}
        .uap-drug:first-of-type{border-top:none;}
        .uap-badge{display:inline-block;font-size:.62rem;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:#fff;padding:.12rem .5rem;border-radius:999px;margin-bottom:.25rem;font-family:'DM Sans';}
        .uap-dn{font-weight:700;color:var(--ink);font-size:.95rem;}
        .uap-dn span{color:#8a979d;font-weight:500;}
        .uap-dnote{font-size:.75rem;color:#8a979d;margin-top:.12rem;}
        .uap-dp{font-family:'Fraunces',serif;font-weight:600;color:var(--teal);font-size:1.15rem;white-space:nowrap;font-variant-numeric:tabular-nums;}

        /* generic surfaces */
        .uap-alt{background:#f2f8f9;}
        .uap-callout{display:flex;gap:1rem;align-items:flex-start;background:#fff;border:1px solid var(--line);border-left:4px solid var(--gold);border-radius:14px;padding:1.15rem 1.3rem;}
        .uap-callout .ico{flex:0 0 auto;width:38px;height:38px;border-radius:10px;background:#fff5e6;display:flex;align-items:center;justify-content:center;}
        .uap-callout h3{font-size:1.05rem;color:var(--navy);margin:0 0 .25rem;}
        .uap-callout p{margin:0;font-size:.95rem;line-height:1.55;color:var(--ink);}

        /* bars */
        .uap-bars{background:var(--navy);color:#fff;border-radius:18px;padding:1.6rem 1.75rem;}
        .uap-bars h3{color:#fff;font-size:1.2rem;margin:0 0 .15rem;}
        .uap-bars .cap{font-family:'DM Sans';font-size:.82rem;color:#b9d6d9;margin:0 0 1.1rem;}
        .uap-brow{margin:.6rem 0;}
        .uap-btop{display:flex;justify-content:space-between;font-size:.9rem;margin-bottom:.3rem;color:#eaf6f7;}
        .uap-btop .v{font-weight:700;font-variant-numeric:tabular-nums;}
        .uap-btrack{height:15px;background:rgba(255,255,255,.13);border-radius:999px;overflow:hidden;}
        .uap-bfill{height:100%;border-radius:999px;background:linear-gradient(90deg,#2aa9b3,#0c8f99);}
        .uap-bfill.hero{background:linear-gradient(90deg,var(--gold),#f2b65a);}
        .uap-bfill.warn{background:linear-gradient(90deg,#c25f40,#8f3f28);}

        /* steps */
        .uap-steps{display:grid;grid-template-columns:repeat(3,1fr);gap:1.1rem;}
        @media(max-width:760px){.uap-steps{grid-template-columns:1fr;}}
        .uap-step{background:#fff;border:1px solid var(--line);border-radius:16px;padding:1.4rem 1.3rem;position:relative;}
        .uap-step .num{font-family:'Fraunces',serif;font-size:2.2rem;font-weight:600;color:var(--gold);line-height:1;margin-bottom:.5rem;}
        .uap-step h3{font-size:1.05rem;color:var(--navy);margin:0 0 .35rem;}
        .uap-step p{margin:0;font-size:.92rem;line-height:1.5;color:var(--muted);}

        /* fit / not-fit */
        .uap-two{display:grid;grid-template-columns:1fr 1fr;gap:1.25rem;}
        @media(max-width:760px){.uap-two{grid-template-columns:1fr;}}
        .uap-fit{border-radius:16px;padding:1.4rem 1.4rem;}
        .uap-fit.good{background:#eefaf3;border:1px solid #b9e6cc;}
        .uap-fit.bad{background:#fdf0ec;border:1px solid #f3ccbf;}
        .uap-fit h3{font-size:1.05rem;margin:0 0 .7rem;color:var(--navy);}
        .uap-fit ul{list-style:none;margin:0;padding:0;}
        .uap-fit li{position:relative;padding-left:1.7rem;margin:.5rem 0;font-size:.93rem;line-height:1.45;}
        .uap-fit.good li::before{content:'✓';position:absolute;left:0;color:#2e9c5f;font-weight:800;}
        .uap-fit.bad li::before{content:'!';position:absolute;left:.35rem;color:#c2582f;font-weight:800;}

        /* price + comparison two-col */
        .uap-pcgrid{display:grid;grid-template-columns:.85fr 1.15fr;gap:1.5rem;align-items:stretch;}
        @media(max-width:820px){.uap-pcgrid{grid-template-columns:1fr;}}
        .uap-pcard{background:#fff;border:1px solid var(--line);border-radius:18px;padding:1.6rem;}
        .uap-pcard .big{font-family:'Fraunces',serif;font-size:3.2rem;font-weight:600;color:var(--navy);line-height:1;}
        .uap-pcard .sub{font-weight:600;color:var(--ink);margin:.2rem 0 1rem;}
        .uap-pcard ul{list-style:none;margin:0;padding:0;}
        .uap-pcard li{position:relative;padding-left:1.6rem;margin:.45rem 0;font-size:.93rem;color:var(--ink);}
        .uap-pcard li::before{content:'✓';position:absolute;left:0;color:var(--teal);font-weight:800;}

        /* faq */
        .uap-faq{border-top:1px solid var(--line);}
        .uap-faqitem{border-bottom:1px solid var(--line);padding:1.15rem 0;}
        .uap-faqitem h3{font-size:1.05rem;color:var(--navy);margin:0 0 .4rem;}
        .uap-faqitem p{margin:0;font-size:.95rem;line-height:1.6;color:var(--muted);}

        /* chips */
        .uap-chips{display:flex;flex-wrap:wrap;gap:.5rem;}
        .uap-chip{font-size:.82rem;font-weight:600;color:var(--navy);background:#fff;border:1px solid var(--line);border-radius:999px;padding:.4rem .8rem;text-decoration:none;transition:all .15s;}
        .uap-chip:hover{border-color:var(--teal);color:var(--teal);}

        /* closing CTA band */
        .uap-close{background:linear-gradient(160deg,#01465a,#065f6b);color:#fff;border-radius:22px;padding:2.5rem;text-align:center;}
        .uap-close h2{color:#fff;font-size:clamp(1.7rem,3.5vw,2.3rem);margin:0 0 .5rem;}
        .uap-close p{color:#d7ebee;font-size:1.05rem;margin:0 0 1.5rem;}
        .uap-refs{font-size:.8rem;color:var(--muted);line-height:1.6;}
        .uap-refs a{color:var(--teal);}
      `}</style>

      {/* HERO */}
      <section className="uap-hero">
        <div className="uap-wrap uap-hero-grid">
          <div>
            <p className="uap-kicker k">UTI Antibiotics · 2026 Cash-Pay Pricing</p>
            <h1>There are no over-the-counter UTI antibiotics. Here is the fast, legal way to get one.</h1>
            <p className="sub">Every antibiotic that cures a UTI needs a prescription. The good news: the medication is cheap, and a same-day video visit gets you one without an in-person appointment.</p>
            <div className="uap-pricebox">
              <span className="big">${price}</span><span className="lab">visit +</span>
              <span className="med">$5–$25</span><span className="lab">generic antibiotic</span>
            </div>
            <div><a href="/book-online" className="uap-cta">Get a UTI Prescription Today →</a></div>
            <p className="uap-trust">Board-certified MD · 44 states · evenings &amp; weekends · HSA/FSA accepted · 5.0★ (125 reviews)</p>
          </div>
          <div className="uap-hcard">
            <h3>What each UTI antibiotic costs</h3>
            <p className="cap">Lowest GoodRx cash price, standard course. Prescription required for all.</p>
            {DRUGS.slice(0, 4).map((d) => (
              <div className="uap-drug" key={d.name}>
                <div>
                  <span className="uap-badge" style={{ background: d.tagColor }}>{d.tag}</span>
                  <div className="uap-dn">{d.name} <span>({d.brand})</span></div>
                  <div className="uap-dnote">{d.note}</div>
                </div>
                <div className="uap-dp">{d.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KEY FACT callouts */}
      <section className="uap-sec">
        <div className="uap-wrap">
          <div className="uap-two">
            <div className="uap-callout">
              <div className="ico">🚫</div>
              <div><h3>No OTC antibiotic exists</h3><p>Every oral antibiotic that cures a UTI is prescription-only in the U.S. by FDA rule. AZO, Uristat, and Cystex only numb the burning; they do not treat the infection.</p></div>
            </div>
            <div className="uap-callout">
              <div className="ico">⚡</div>
              <div><h3>Same-day is the fastest legal route</h3><p>An uncomplicated UTI in a non-pregnant adult woman needs no urinalysis per IDSA guidelines, so the whole encounter can be a $79 video visit plus a $5–$25 generic.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICE + COMPARISON */}
      <section className="uap-sec uap-alt">
        <div className="uap-wrap">
          <p className="uap-kicker">The math</p>
          <h2>$79 flat. HSA/FSA accepted.</h2>
          <p className="uap-lead">One fee covers the visit. The antibiotic is a separate, inexpensive pharmacy pickup. Here is how the total compares to every other setting.</p>
          <div className="uap-pcgrid">
            <div className="uap-pcard">
              <div className="big">${price}</div>
              <div className="sub">One flat fee covers your entire visit</div>
              <ul>
                <li>Board-certified MD video consultation</li>
                <li>E-prescription to any US pharmacy</li>
                <li>HSA / FSA-eligible</li>
                <li>No facility fees, no surprise billing</li>
              </ul>
            </div>
            <div className="uap-bars">
              <h3>What treating a UTI costs across settings</h3>
              <p className="cap">Total out-of-pocket including the antibiotic (uninsured, 2026).</p>
              {BARS.map((b) => (
                <div className="uap-brow" key={b.label}>
                  <div className="uap-btop"><span>{b.label}</span><span className="v">{b.value}</span></div>
                  <div className="uap-btrack"><div className={`uap-bfill${b.hero ? ' hero' : ''}${b.warn ? ' warn' : ''}`} style={{ width: `${b.w}%` }} /></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FULL DRUG TABLE */}
      <section className="uap-sec">
        <div className="uap-wrap">
          <p className="uap-kicker">Every option, priced</p>
          <h2>UTI antibiotic cost by medication</h2>
          <p className="uap-lead">Lowest GoodRx cash price for a standard course. All require a prescription; the visit is separate.</p>
          {/* Reciprocal link back to /cost/uti-treatment-cost/.

             That page linked here twice; nothing linked back. It is the stronger,
             better-matched page for "uti treatment cost" (1,221 words, two comparison
             tables, 21 citation links, Offer schema) yet it does not rank at all,
             while this thinner page surfaces at absolute rank 18 with an H1 that does
             not answer the query. One-way internal equity is the likeliest mechanical
             cause; this closes the loop. */}
          <p className="uap-lead" style={{ marginTop: '-0.35rem' }}>
            Looking for the total cost of care rather than the drug alone?{' '}
            <a
              href="/cost/uti-treatment-cost/"
              style={{ color: 'var(--navy)', fontWeight: 700, textDecoration: 'underline', textUnderlineOffset: '2px' }}
            >
              Compare UTI treatment cost across online doctor, urgent care, and ER
            </a>.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))', gap: '0.9rem' }}>
            {DRUGS.map((d) => (
              <div key={d.name} style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 14, padding: '1.1rem 1.2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                <div>
                  <span className="uap-badge" style={{ background: d.tagColor }}>{d.tag}</span>
                  <div className="uap-dn">{d.name} <span>({d.brand})</span></div>
                  <div className="uap-dnote">{d.note}</div>
                </div>
                <div className="uap-dp">{d.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="uap-sec uap-alt">
        <div className="uap-wrap">
          <p className="uap-kicker">How it works</p>
          <h2>From symptoms to prescription in under an hour</h2>
          <div className="uap-steps" style={{ marginTop: '1.5rem' }}>
            {STEPS.map((s) => (
              <div className="uap-step" key={s.n}>
                <div className="num">{s.n}</div>
                <h3>{s.h}</h3>
                <p>{s.p}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '1.75rem' }}>
            <a href="/book-online" className="uap-cta uap-cta--navy">Book a $79 Visit Now →</a>
          </div>
        </div>
      </section>

      {/* FIT / NOT FIT */}
      <section className="uap-sec">
        <div className="uap-wrap">
          <p className="uap-kicker">Is telehealth right for you?</p>
          <h2>When a UTI antibiotic can be prescribed online</h2>
          <div className="uap-two" style={{ marginTop: '1.4rem' }}>
            <div className="uap-fit good">
              <h3>Good fit for a video visit</h3>
              <ul>
                <li>Adult, non-pregnant women</li>
                <li>Classic symptoms: burning, frequency, urgency</li>
                <li>No fever, flank pain, or vomiting</li>
                <li>No blood in urine</li>
                <li>No UTI in the past 4 weeks</li>
              </ul>
            </div>
            <div className="uap-fit bad">
              <h3>Better seen in person</h3>
              <ul>
                <li>Fever, chills, or back/flank pain (possible kidney infection)</li>
                <li>Pregnancy</li>
                <li>Recurrent UTI within 4 weeks</li>
                <li>Visible blood in urine</li>
                <li>Male patients (warrants in-person workup)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="uap-sec uap-alt">
        <div className="uap-wrap">
          <p className="uap-kicker">Common questions</p>
          <h2>UTI antibiotics: your questions answered</h2>
          <div className="uap-faq" style={{ marginTop: '1.4rem' }}>
            {FAQS.map((f) => (
              <div className="uap-faqitem" key={f.q}>
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA + states + refs */}
      <section className="uap-sec">
        <div className="uap-wrap">
          <div className="uap-close">
            <h2>Get your UTI treated today</h2>
            <p>A board-certified MD, a same-day prescription, and a flat $79. No waiting room, no insurance required.</p>
            <a href="/book-online" className="uap-cta">Get a UTI Prescription Today →</a>
          </div>

          <div style={{ marginTop: '2.5rem' }}>
            <p className="uap-kicker">Licensed in 44 states</p>
            <div className="uap-chips">
              {['Alabama','Alaska','Arizona','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','North Carolina','North Dakota','Ohio','Oklahoma','Pennsylvania','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming'].map((s) => (
                <span className="uap-chip" key={s}>{s}</span>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--line)' }}>
            <p className="uap-refs">
              <strong>Sources:</strong>{' '}
              <a href="https://www.webmd.com/a-to-z-guides/what-are-antibiotics-for-uti" rel="nofollow noopener">WebMD — Antibiotics for UTI</a>;{' '}
              <a href="https://www.goodrx.com/conditions/urinary-tract-infection/drugs" rel="nofollow noopener">GoodRx — UTI antibiotic prices (2026)</a>;{' '}
              <a href="https://blog.walgreens.com/health/general-health/how-do-you-get-rid-of-a-uti.html" rel="nofollow noopener">Walgreens</a>;{' '}
              <a href="https://www.idsociety.org/practice-guideline/urinary-tract-infection-uti/" rel="nofollow noopener">IDSA — Uncomplicated UTI guideline</a>;{' '}
              <a href="https://www.talktomira.com/post/how-much-does-urgent-care-cost-without-insurance" rel="nofollow noopener">Mira Health (2025)</a>.<br />
              Medically reviewed by <a href="/about">Parth Bhavsar, MD</a> — Board-Certified Family Medicine · NPI 1104323203 · LegitScript Certified · HIPAA-Compliant. Updated July 2026. AZO and other OTC products only relieve symptoms; they do not cure the infection.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
