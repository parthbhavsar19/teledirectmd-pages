// Reusable redesigned layout for national condition pages, in the same design
// system as the UTI antibiotics cost page (Fraunces + DM Sans, navy/teal/gold).
// Data-driven: reads the existing condition JSON, so it can be rolled out to any
// condition. Gated per-slug in NationalConditionPage until fully rolled out.
// Static-export safe. Schema/JSON-LD stays in the parent page.

const GOLD = '#E8A33D';

// Resolve {state} placeholders for the national page.
function clean(str, stateName) {
  if (!str) return '';
  return String(str).replace(/\{state\}/g, stateName || 'your state').replace(/\s+/g, ' ').trim();
}

export default function ConditionPageRedesign({
  condition,
  stateName = '',
  otherConditions = [],
  costLink = null,
  secondaryCostPages = [],
  comparePage = null,
  symptomLinks = [],
}) {
  const c = condition;
  const price = (c.pricing && c.pricing.visitPrice) || '$79';
  const hero = c.hero || {};
  const benefits = Array.isArray(hero.benefits) ? hero.benefits : [];
  const sideFeatures = (hero.sideCard && Array.isArray(hero.sideCard.features)) ? hero.sideCard.features : [];
  const bars = (c.pricing && Array.isArray(c.pricing.comparisonBars)) ? c.pricing.comparisonBars : [];
  const includes = (c.pricing && Array.isArray(c.pricing.includes)) ? c.pricing.includes : [];
  const steps = (c.howItWorks && Array.isArray(c.howItWorks.steps)) ? c.howItWorks.steps : [];
  const meds = c.medications || {};
  const medRows = Array.isArray(meds.rows) ? meds.rows : [];
  const elig = c.telehealthEligibility || c.eligibility || {};
  const eligGood = elig.appropriate || elig.eligible || [];
  const eligBad = elig.redFlags || elig.notEligible || [];
  const faqs = (c.faq && Array.isArray(c.faq.items)) ? c.faq.items : [];
  const symptoms = c.symptomsAndRedFlags || {};
  const whatIs = c.whatIsCondition || {};
  const causes = c.causesAndRiskFactors || {};
  const diff = c.differentialDiagnosis || {};
  const treat = c.treatmentOptions || {};
  const home = c.homeCare || {};
  const whenNot = c.whenNotToUse || {};
  const decision = c.decisionGuide || {};
  const refs = Array.isArray(c.references) ? c.references : [];
  const relatedConds = Array.isArray(c.relatedConditions) ? c.relatedConditions : [];

  // Parse a "$X to $Y" style bar value into a relative width for the chart.
  const nums = bars.map((b) => {
    const v = String(b.value || '');
    const found = (v.match(/[\d,]+/g) || []).map((n) => parseInt(n.replace(/,/g, ''), 10));
    return found.length ? Math.max(...found) : 0;
  });
  const maxNum = Math.max(1, ...nums);

  return (
    <div className="cpr">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=DM+Sans:wght@400;500;600;700&display=swap');
        .cpr{--navy:#003E52;--teal:#0C8F99;--gold:${GOLD};--ink:#12303b;--muted:#5c7078;--line:#e4ecee;font-family:'DM Sans',system-ui,sans-serif;color:var(--ink);}
        .cpr h1,.cpr h2,.cpr h3,.cpr .disp{font-family:'Fraunces',Georgia,serif;font-weight:600;letter-spacing:-0.01em;}
        .cpr-wrap{max-width:1080px;margin:0 auto;padding:0 1.25rem;}
        .cpr-sec{padding:3rem 0;}
        .cpr-kicker{text-transform:uppercase;letter-spacing:.14em;font-size:.72rem;font-weight:700;color:var(--teal);margin:0 0 .6rem;}
        .cpr h2{font-size:clamp(1.55rem,3vw,2.05rem);line-height:1.14;color:var(--navy);margin:0 0 .5rem;}
        .cpr-lead{font-size:1.03rem;line-height:1.6;color:var(--muted);max-width:62ch;margin:0 0 1.5rem;}
        .cpr-alt{background:#f2f8f9;}

        .cpr-hero{background:linear-gradient(160deg,#012f3e 0%,#01465a 60%,#065f6b 100%);color:#fff;padding:3rem 0 3.25rem;}
        /* 2026-08-07: was align-items:center. The copy column runs ~620px tall and
           the card ~270px, so centring the short column pushed it ~300px down and
           left a large empty rectangle at the top of the hero. Top-align it and let
           it follow the reader — these pages carry 17 h2 sections. */
        .cpr-hero-grid{display:grid;grid-template-columns:1.08fr .92fr;gap:2.5rem;align-items:start;}
        @media(max-width:840px){.cpr-hero-grid{grid-template-columns:1fr;}}
        /* Desktop only. The existing tdmd-mobile-sticky-bar covers small screens, so
           this cannot stack two persistent CTAs on top of each other. */
        @media(min-width:841px){
          .cpr-hcard{position:sticky;top:1.5rem;}
        }
        .cpr-hero h1{font-size:clamp(2rem,4.4vw,2.9rem);line-height:1.08;color:#fff;margin:0 0 .9rem;}
        .cpr-hero .sub{font-size:1.05rem;line-height:1.55;color:#d7ebee;margin:0 0 1.5rem;max-width:52ch;}
        .cpr-hero .intro{font-size:.97rem;line-height:1.6;color:#bfdfe3;margin:0 0 1.5rem;max-width:56ch;}
        .cpr-cta{display:inline-flex;align-items:center;gap:.5rem;background:var(--gold);color:#08313f;font-weight:700;padding:.9rem 1.7rem;border-radius:12px;text-decoration:none;font-size:1.05rem;box-shadow:0 10px 26px rgba(232,163,61,.3);transition:transform .15s,filter .15s;}
        .cpr-cta:hover{transform:translateY(-1px);filter:brightness(1.05);}
        .cpr-cta--navy{background:var(--navy);color:#fff;box-shadow:0 8px 22px rgba(0,62,82,.28);}
        .cpr-trust{font-size:.85rem;color:#9fc6ca;margin:1rem 0 0;}
        .cpr-hcard{background:#fff;border-radius:18px;padding:1.5rem;box-shadow:0 18px 46px rgba(0,0,0,.26);}
        .cpr-hcard h3{font-size:1.1rem;color:var(--navy);margin:0 0 .1rem;}
        .cpr-hcard .price{font-family:'Fraunces',serif;font-size:2.6rem;font-weight:600;color:var(--navy);line-height:1;margin:.4rem 0 .1rem;}
        .cpr-hcard .pl{font-size:.85rem;color:var(--muted);margin:0 0 1rem;}
        .cpr-hcard ul{list-style:none;margin:0;padding:0;}
        .cpr-hcard li{position:relative;padding-left:1.6rem;margin:.5rem 0;font-size:.92rem;line-height:1.4;color:var(--ink);}
        .cpr-hcard li::before{content:'✓';position:absolute;left:0;color:var(--teal);font-weight:800;}
        /* The card is the highest-intent element in the hero; it previously ended on
           the feature list with no action, sending the reader back to the copy column. */
        .cpr-hcard-cta{display:block;width:100%;box-sizing:border-box;margin:1.15rem 0 0;
          padding:.85rem 1.25rem;border-radius:999px;background:var(--teal);color:#fff;
          font-weight:800;font-size:1rem;text-align:center;text-decoration:none;
          box-shadow:0 8px 22px rgba(0,107,115,.30);transition:background .15s,transform .15s;}
        .cpr-hcard-cta:hover,.cpr-hcard-cta:focus{background:var(--navy);transform:translateY(-1px);color:#fff;}
        .cpr-hcard-note{margin:.6rem 0 0;font-size:.8rem;color:var(--muted);text-align:center;}

        .cpr-two{display:grid;grid-template-columns:1fr 1fr;gap:1.25rem;}
        @media(max-width:760px){.cpr-two{grid-template-columns:1fr;}}
        .cpr-pcgrid{display:grid;grid-template-columns:.85fr 1.15fr;gap:1.5rem;align-items:stretch;}
        @media(max-width:820px){.cpr-pcgrid{grid-template-columns:1fr;}}
        .cpr-pcard{background:#fff;border:1px solid var(--line);border-radius:18px;padding:1.6rem;}
        .cpr-pcard .big{font-family:'Fraunces',serif;font-size:3rem;font-weight:600;color:var(--navy);line-height:1;}
        .cpr-pcard .sub{font-weight:600;margin:.2rem 0 1rem;}
        .cpr-pcard ul{list-style:none;margin:0;padding:0;}
        .cpr-pcard li{position:relative;padding-left:1.55rem;margin:.42rem 0;font-size:.92rem;}
        .cpr-pcard li::before{content:'✓';position:absolute;left:0;color:var(--teal);font-weight:800;}
        .cpr-bars{background:var(--navy);color:#fff;border-radius:18px;padding:1.6rem 1.75rem;}
        .cpr-bars h3{color:#fff;font-size:1.15rem;margin:0 0 1rem;}
        .cpr-brow{margin:.6rem 0;}
        .cpr-btop{display:flex;justify-content:space-between;font-size:.9rem;margin-bottom:.3rem;color:#eaf6f7;}
        .cpr-btop .v{font-weight:700;font-variant-numeric:tabular-nums;}
        .cpr-btrack{height:15px;background:rgba(255,255,255,.13);border-radius:999px;overflow:hidden;}
        .cpr-bfill{height:100%;border-radius:999px;background:linear-gradient(90deg,#2aa9b3,#0c8f99);}
        .cpr-bfill.hero{background:linear-gradient(90deg,var(--gold),#f2b65a);}

        .cpr-steps{display:grid;grid-template-columns:repeat(3,1fr);gap:1.1rem;margin-top:1.4rem;}
        @media(max-width:760px){.cpr-steps{grid-template-columns:1fr;}}
        .cpr-step{background:#fff;border:1px solid var(--line);border-radius:16px;padding:1.4rem 1.3rem;}
        .cpr-step .num{font-family:'Fraunces',serif;font-size:2.1rem;font-weight:600;color:var(--gold);line-height:1;margin-bottom:.5rem;}
        .cpr-step h3{font-size:1.02rem;color:var(--navy);margin:0 0 .35rem;}
        .cpr-step p{margin:0;font-size:.9rem;line-height:1.5;color:var(--muted);}

        .cpr-fit{border-radius:16px;padding:1.4rem;}
        .cpr-fit.good{background:#eefaf3;border:1px solid #b9e6cc;}
        .cpr-fit.bad{background:#fdf0ec;border:1px solid #f3ccbf;}
        .cpr-fit h3{font-size:1.05rem;margin:0 0 .7rem;color:var(--navy);}
        .cpr-fit ul{list-style:none;margin:0;padding:0;}
        .cpr-fit li{position:relative;padding-left:1.7rem;margin:.5rem 0;font-size:.92rem;line-height:1.45;}
        .cpr-fit.good li::before{content:'✓';position:absolute;left:0;color:#2e9c5f;font-weight:800;}
        .cpr-fit.bad li::before{content:'!';position:absolute;left:.35rem;color:#c2582f;font-weight:800;}

        .cpr-table{width:100%;border-collapse:collapse;background:#fff;border-radius:14px;overflow:hidden;border:1px solid var(--line);}
        .cpr-table th{background:#f2f8f9;text-align:left;font-size:.82rem;text-transform:uppercase;letter-spacing:.04em;color:var(--navy);padding:.75rem 1rem;font-weight:700;}
        .cpr-table td{padding:.85rem 1rem;border-top:1px solid var(--line);font-size:.9rem;vertical-align:top;line-height:1.45;}
        .cpr-table td:first-child{font-weight:700;color:var(--ink);}
        .cpr-table-wrap{overflow-x:auto;}

        .cpr-faqitem{border-bottom:1px solid var(--line);}
        .cpr-faqitem summary{list-style:none;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:1.05rem 0;font-family:'Fraunces',Georgia,serif;font-weight:600;font-size:1.03rem;color:var(--navy);}
        .cpr-faqitem summary::-webkit-details-marker{display:none;}
        .cpr-faqitem .cpr-plus{flex:0 0 auto;width:24px;height:24px;position:relative;transition:transform .2s;}
        .cpr-faqitem .cpr-plus::before,.cpr-faqitem .cpr-plus::after{content:'';position:absolute;background:var(--teal);border-radius:2px;}
        .cpr-faqitem .cpr-plus::before{top:11px;left:3px;width:18px;height:2px;}
        .cpr-faqitem .cpr-plus::after{top:3px;left:11px;width:2px;height:18px;transition:opacity .2s;}
        .cpr-faqitem[open] .cpr-plus::after{opacity:0;}
        .cpr-faqitem[open] summary{color:var(--teal);}
        .cpr-faqitem .cpr-ans{margin:0;padding:0 0 1.1rem;font-size:.94rem;line-height:1.6;color:var(--muted);}

        /* prose + list sections */
        .cpr-prose p{font-size:.98rem;line-height:1.68;color:var(--ink);max-width:70ch;margin:0 0 1rem;}
        .cpr-deflist{list-style:none;margin:1rem 0 0;padding:0;display:grid;gap:.7rem;}
        .cpr-deflist li{background:#fff;border:1px solid var(--line);border-left:3px solid var(--teal);border-radius:10px;padding:.75rem 1rem;font-size:.94rem;line-height:1.5;}
        .cpr-deflist li b{color:var(--navy);}
        .cpr-cardgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1rem;margin-top:1.2rem;}
        .cpr-infocard{background:#fff;border:1px solid var(--line);border-radius:14px;padding:1.15rem 1.25rem;}
        .cpr-infocard h3{font-size:1.02rem;color:var(--navy);margin:0 0 .4rem;}
        .cpr-infocard p{margin:0;font-size:.92rem;line-height:1.55;color:var(--muted);}
        .cpr-listcard{background:#fff;border:1px solid var(--line);border-radius:14px;padding:1.2rem 1.3rem;}
        .cpr-listcard h3{font-size:1.02rem;color:var(--navy);margin:0 0 .6rem;}
        .cpr-listcard ul{list-style:none;margin:0;padding:0;}
        .cpr-listcard li{position:relative;padding-left:1.4rem;margin:.42rem 0;font-size:.92rem;line-height:1.5;color:var(--ink);}
        .cpr-listcard li::before{content:'';position:absolute;left:0;top:.5rem;width:6px;height:6px;border-radius:50%;background:var(--teal);}
        .cpr-decision{display:grid;gap:.9rem;margin-top:1.3rem;}
        .cpr-dstep{background:#fff;border:1px solid var(--line);border-radius:14px;padding:1.1rem 1.3rem;border-left:4px solid var(--teal);}
        .cpr-dstep.urgent{border-left-color:#c2582f;background:#fdf5f2;}
        .cpr-dstep h3{font-size:1rem;color:var(--navy);margin:0 0 .5rem;}
        .cpr-dstep ul{margin:.3rem 0 .6rem;padding-left:1.2rem;font-size:.9rem;color:var(--ink);line-height:1.5;}
        .cpr-dstep .act{font-size:.88rem;margin:.15rem 0;}
        .cpr-dstep .act b{color:var(--teal);}
        .cpr-dstep.urgent .act b{color:#c2582f;}
        .cpr-refs{list-style:none;margin:1.2rem 0 0;padding:0;display:grid;gap:.55rem;}
        .cpr-refs li{font-size:.88rem;line-height:1.5;color:var(--muted);padding-left:1.2rem;position:relative;}
        .cpr-refs li::before{content:'→';position:absolute;left:0;color:var(--teal);}
        .cpr-refs a{color:var(--teal);text-decoration:none;}
        .cpr-refs a:hover{text-decoration:underline;}
        /* internal links footer (styled) */
        .cpr-links{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:.75rem;margin-top:1.2rem;}
        .cpr-linkcard{background:#fff;border:1px solid var(--line);border-radius:12px;padding:.9rem 1.1rem;text-decoration:none;transition:all .15s;}
        .cpr-linkcard:hover{border-color:var(--teal);box-shadow:0 6px 18px rgba(12,143,153,.12);transform:translateY(-1px);}
        .cpr-linkcard .t{display:block;font-weight:700;color:var(--navy);font-size:.95rem;}
        .cpr-linkcard .d{display:block;font-size:.8rem;color:var(--muted);margin-top:.15rem;}
        .cpr-chips{display:flex;flex-wrap:wrap;gap:.5rem;margin-top:1rem;}
        .cpr-chip{font-size:.82rem;font-weight:600;color:var(--navy);background:#fff;border:1px solid var(--line);border-radius:999px;padding:.4rem .8rem;text-decoration:none;transition:all .15s;}
        .cpr-chip:hover{border-color:var(--teal);color:var(--teal);}

        .cpr-close{background:linear-gradient(160deg,#01465a,#065f6b);color:#fff;border-radius:22px;padding:2.5rem;text-align:center;}
        .cpr-close h2{color:#fff;font-size:clamp(1.6rem,3.3vw,2.2rem);margin:0 0 .5rem;}
        .cpr-close p{color:#d7ebee;font-size:1.03rem;margin:0 0 1.5rem;}
        .cpr-answer{background:#EAF7F8;border-left:4px solid #006B73;border-radius:0 10px 10px 0;padding:.9rem 1.15rem;margin:1rem 0 1.1rem;}
        .cpr-answer p{margin:0;color:#003E52;font-size:1.02rem;line-height:1.55;font-weight:500;}
      `}</style>

      {/* HERO */}
      <section className="cpr-hero">
        <div className="cpr-wrap cpr-hero-grid">
          <div>
            <p className="cpr-kicker" style={{ color: '#7fd0d8' }}>{clean(c.conditionName, stateName)} · Online Treatment</p>
            <h1>{clean(hero.h1, stateName)}</h1>
            {hero.subtitle && <p className="sub">{clean(hero.subtitle, stateName)}</p>}
            {hero.quickAnswer && (
              <div className="cpr-answer" data-speakable="true" id={`${c.conditionSlug}-quick-answer`}>
                <p>{clean(hero.quickAnswer, stateName)}</p>
              </div>
            )}
            {hero.introParagraph && <p className="intro">{clean(hero.introParagraph, stateName)}</p>}
            <div><a href="/book-online" className="cpr-cta">Book a Visit, {price} →</a></div>
            <p className="cpr-trust">Board-certified MD · 44 states · evenings &amp; weekends · HSA/FSA accepted · 5.0★ (125 reviews)</p>
          </div>
          <div className="cpr-hcard">
            <h3>{clean((hero.sideCard && hero.sideCard.h2) || 'What the visit includes', stateName)}</h3>
            <div className="price">{price}</div>
            <p className="pl">flat self-pay · insurance not required</p>
            <ul>
              {(sideFeatures.length ? sideFeatures : benefits).slice(0, 6).map((f, i) => (
                <li key={i}>{clean(typeof f === 'string' ? f : (f.text || f.label || ''), stateName)}</li>
              ))}
            </ul>
            <a href="/book-online" className="cpr-hcard-cta">Book a Visit &rarr;</a>
            <p className="cpr-hcard-note">Same-day appointments · HSA/FSA accepted</p>
          </div>
        </div>
      </section>

      {/* PRICE + COMPARISON */}
      {bars.length > 0 && (
        <section className="cpr-sec cpr-alt">
          <div className="cpr-wrap">
            <p className="cpr-kicker">What it costs</p>
            <h2>{price} flat. HSA/FSA accepted.</h2>
            <p className="cpr-lead">One fee covers the visit — no facility fees, no surprise billing. Here is how it compares to other care settings.</p>
            <div className="cpr-pcgrid">
              <div className="cpr-pcard">
                <div className="big">{price}</div>
                <div className="sub">One flat fee covers your entire visit</div>
                <ul>{includes.slice(0, 5).map((it, i) => <li key={i}>{clean(it, stateName)}</li>)}</ul>
              </div>
              <div className="cpr-bars">
                <h3>Cost across care settings</h3>
                {bars.map((b, i) => {
                  const name = b.name || b.label || '';
                  const isTdmd = /teledirect/i.test(name);
                  const w = Math.max(6, Math.round((nums[i] / maxNum) * 100));
                  return (
                    <div className="cpr-brow" key={i}>
                      <div className="cpr-btop"><span>{name}</span><span className="v">{b.value}</span></div>
                      <div className="cpr-btrack"><div className={`cpr-bfill${isTdmd ? ' hero' : ''}`} style={{ width: `${w}%` }} /></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* HOW IT WORKS */}
      {steps.length > 0 && (
        <section className="cpr-sec">
          <div className="cpr-wrap">
            <p className="cpr-kicker">How it works</p>
            <h2>{clean((c.howItWorks && c.howItWorks.sectionTitle) || 'How a visit works', stateName)}</h2>
            <div className="cpr-steps">
              {steps.slice(0, 3).map((s, i) => (
                <div className="cpr-step" key={i}>
                  <div className="num">{i + 1}</div>
                  <h3>{clean(s.title || s.heading || '', stateName)}</h3>
                  <p>{clean(s.text || s.body || s.description || '', stateName)}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '1.75rem' }}>
              <a href="/book-online" className="cpr-cta cpr-cta--navy">Book a {price} Visit Now →</a>
            </div>
          </div>
        </section>
      )}

      {/* ELIGIBILITY: good fit vs in-person */}
      {(eligGood.length > 0 || eligBad.length > 0) && (
        <section className="cpr-sec cpr-alt">
          <div className="cpr-wrap">
            <p className="cpr-kicker">Is telehealth right for you?</p>
            <h2>{clean(elig.sectionTitle || 'When telehealth is appropriate', stateName)}</h2>
            <div className="cpr-two" style={{ marginTop: '1.3rem' }}>
              <div className="cpr-fit good">
                <h3>Good fit for a video visit</h3>
                <ul>{eligGood.slice(0, 6).map((x, i) => <li key={i}>{clean(typeof x === 'string' ? x : (x.text || ''), stateName)}</li>)}</ul>
              </div>
              <div className="cpr-fit bad">
                <h3>Better seen in person</h3>
                <ul>{eligBad.slice(0, 6).map((x, i) => <li key={i}>{clean(typeof x === 'string' ? x : (x.text || ''), stateName)}</li>)}</ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* MEDICATIONS TABLE */}
      {medRows.length > 0 && (
        <section className="cpr-sec">
          <div className="cpr-wrap">
            <p className="cpr-kicker">Treatment</p>
            <h2>{clean(meds.sectionTitle || 'Medications', stateName)}</h2>
            {meds.intro && <p className="cpr-lead">{clean(meds.intro, stateName)}</p>}
            <div className="cpr-table-wrap">
              <table className="cpr-table">
                {Array.isArray(meds.headers) && (
                  <thead><tr>{meds.headers.map((h, i) => <th key={i}>{h}</th>)}</tr></thead>
                )}
                <tbody>
                  {medRows.map((row, i) => (
                    <tr key={i}>{(Array.isArray(row) ? row : Object.values(row)).map((cell, j) => <td key={j}>{clean(cell, stateName)}</td>)}</tr>
                  ))}
                </tbody>
              </table>
            </div>
            {meds.note && <p style={{ marginTop: '.9rem', fontSize: '.85rem', color: 'var(--muted)' }}>{clean(meds.note, stateName)}</p>}
          </div>
        </section>
      )}

      {/* WHAT IS + CAUSES */}
      {(Array.isArray(whatIs.paragraphs) || Array.isArray(causes.items)) && (
        <section className="cpr-sec cpr-alt">
          <div className="cpr-wrap">
            {Array.isArray(whatIs.paragraphs) && whatIs.paragraphs.length > 0 && (
              <div className="cpr-prose" style={{ marginBottom: causes.items ? '2.25rem' : 0 }}>
                <p className="cpr-kicker">Understanding it</p>
                <h2>{clean(whatIs.sectionTitle || 'What is it?', stateName)}</h2>
                {whatIs.paragraphs.map((p, i) => <p key={i}>{clean(p, stateName)}</p>)}
              </div>
            )}
            {Array.isArray(causes.items) && causes.items.length > 0 && (
              <div>
                <p className="cpr-kicker">Causes &amp; risk factors</p>
                <h2>{clean(causes.sectionTitle || 'Causes and risk factors', stateName)}</h2>
                {causes.intro && <p className="cpr-lead">{clean(causes.intro, stateName)}</p>}
                <ul className="cpr-deflist">
                  {causes.items.map((it, i) => (
                    <li key={i}><b>{clean(it.label || '', stateName)}</b> {clean(it.text || (typeof it === 'string' ? it : ''), stateName)}</li>
                  ))}
                </ul>
                {causes.closing && <p className="cpr-prose" style={{ marginTop: '1rem' }}>{clean(causes.closing, stateName)}</p>}
              </div>
            )}
          </div>
        </section>
      )}

      {/* SYMPTOMS & RED FLAGS TABLE */}
      {Array.isArray(symptoms.rows) && symptoms.rows.length > 0 && (
        <section className="cpr-sec">
          <div className="cpr-wrap">
            <p className="cpr-kicker">Symptoms &amp; red flags</p>
            <h2>{clean(symptoms.sectionTitle || 'Symptoms and red flags', stateName)}</h2>
            {symptoms.intro && <p className="cpr-lead">{clean(symptoms.intro, stateName)}</p>}
            <div className="cpr-table-wrap">
              <table className="cpr-table">
                {Array.isArray(symptoms.headers) && <thead><tr>{symptoms.headers.map((h, i) => <th key={i}>{clean(h, stateName)}</th>)}</tr></thead>}
                <tbody>{symptoms.rows.map((row, i) => (<tr key={i}>{(Array.isArray(row) ? row : Object.values(row)).map((cell, j) => <td key={j}>{clean(cell, stateName)}</td>)}</tr>))}</tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* DIFFERENTIAL DIAGNOSIS */}
      {(diff.telehealthAppropriate || diff.compareCards) && (
        <section className="cpr-sec cpr-alt">
          <div className="cpr-wrap">
            <p className="cpr-kicker">Not every symptom is the same</p>
            <h2>{clean(diff.sectionTitle || 'Differential diagnosis', stateName)}</h2>
            {diff.intro && <p className="cpr-lead">{clean(diff.intro, stateName)}</p>}
            <div className="cpr-two">
              {diff.telehealthAppropriate && (
                <div className="cpr-listcard">
                  <h3>{clean(diff.telehealthAppropriate.title || 'Sometimes appropriate for telehealth', stateName)}</h3>
                  <ul>{(diff.telehealthAppropriate.items || []).map((x, i) => <li key={i}>{clean(x, stateName)}</li>)}</ul>
                </div>
              )}
              {diff.requiresInPerson && (
                <div className="cpr-listcard">
                  <h3>{clean(diff.requiresInPerson.title || 'Often requires in-person evaluation', stateName)}</h3>
                  <ul>{(diff.requiresInPerson.items || []).map((x, i) => <li key={i}>{clean(x, stateName)}</li>)}</ul>
                </div>
              )}
            </div>
            {Array.isArray(diff.compareCards) && diff.compareCards.length > 0 && (
              <div className="cpr-cardgrid">
                {diff.compareCards.map((cc, i) => (
                  <div className="cpr-infocard" key={i}><h3>{clean(cc.title || '', stateName)}</h3><p>{clean(cc.text || '', stateName)}</p></div>
                ))}
              </div>
            )}
            {diff.closing && <p className="cpr-prose" style={{ marginTop: '1.2rem' }}>{clean(diff.closing, stateName)}</p>}
          </div>
        </section>
      )}

      {/* TREATMENT OPTIONS */}
      {Array.isArray(treat.sections) && treat.sections.length > 0 && (
        <section className="cpr-sec">
          <div className="cpr-wrap">
            <p className="cpr-kicker">Treatment approach</p>
            <h2>{clean(treat.sectionTitle || 'Treatment options', stateName)}</h2>
            {treat.intro && <p className="cpr-lead">{clean(treat.intro, stateName)}</p>}
            <div className="cpr-cardgrid">
              {treat.sections.map((s, i) => (
                <div className="cpr-infocard" key={i}><h3>{clean(s.title || '', stateName)}</h3><p>{clean(s.text || '', stateName)}</p></div>
              ))}
            </div>
            {Array.isArray(treat.doesNotManage) && treat.doesNotManage.length > 0 && (
              <div className="cpr-listcard" style={{ marginTop: '1.2rem' }}>
                <h3>What we do not manage by video</h3>
                <ul>{treat.doesNotManage.map((x, i) => <li key={i}>{clean(x, stateName)}</li>)}</ul>
              </div>
            )}
          </div>
        </section>
      )}

      {/* DECISION GUIDE */}
      {Array.isArray(decision.steps) && decision.steps.length > 0 && (
        <section className="cpr-sec cpr-alt">
          <div className="cpr-wrap">
            <p className="cpr-kicker">Decision guide</p>
            <h2>{clean(decision.sectionTitle || 'Should you use TeleDirectMD?', stateName)}</h2>
            <div className="cpr-decision">
              {decision.steps.map((s, i) => (
                <div className={`cpr-dstep${s.type === 'urgent' ? ' urgent' : ''}`} key={i}>
                  <h3>{clean(s.title || '', stateName)}</h3>
                  {Array.isArray(s.items) && s.items.length > 0 && <ul>{s.items.map((x, j) => <li key={j}>{clean(x, stateName)}</li>)}</ul>}
                  {s.yesAction && <p className="act"><b>Yes:</b> {clean(s.yesAction, stateName).replace(/^If yes,?\s*/i, '')}</p>}
                  {s.noAction && <p className="act"><b>No:</b> {clean(s.noAction, stateName).replace(/^If no,?\s*/i, '')}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* HOME CARE */}
      {(home.whatToDoNow || home.whatToWatch || home.followUp) && (
        <section className="cpr-sec">
          <div className="cpr-wrap">
            <p className="cpr-kicker">Recovery &amp; prevention</p>
            <h2>{clean(home.sectionTitle || 'Home care, recovery, and prevention', stateName)}</h2>
            <div className="cpr-cardgrid">
              {[home.whatToDoNow, home.whatToWatch, home.followUp].filter(Boolean).map((blk, i) => (
                <div className="cpr-listcard" key={i}>
                  <h3>{clean(blk.title || '', stateName)}</h3>
                  <ul>{(blk.items || []).map((x, j) => <li key={j}>{clean(typeof x === 'string' ? x : (x.text || ''), stateName)}</li>)}</ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* WHEN NOT TO USE */}
      {(whenNot.shouldNotUse || whenNot.alternatives) && (
        <section className="cpr-sec cpr-alt">
          <div className="cpr-wrap">
            <p className="cpr-kicker">Safety first</p>
            <h2>{clean(whenNot.sectionTitle || 'When not to use telehealth', stateName)}</h2>
            {whenNot.intro && <p className="cpr-lead">{clean(whenNot.intro, stateName)}</p>}
            <div className="cpr-two">
              {whenNot.shouldNotUse && (
                <div className="cpr-fit bad">
                  <h3>{clean(whenNot.shouldNotUse.title || 'Do not use if', stateName)}</h3>
                  <ul>{(whenNot.shouldNotUse.items || []).map((x, i) => <li key={i}>{clean(x, stateName)}</li>)}</ul>
                </div>
              )}
              {whenNot.alternatives && (
                <div className="cpr-listcard">
                  <h3>{clean(whenNot.alternatives.title || 'Alternative care options', stateName)}</h3>
                  <ul>{(whenNot.alternatives.items || []).map((x, i) => <li key={i}>{typeof x === 'string' ? clean(x, stateName) : <><b style={{ color: 'var(--navy)' }}>{clean(x.label || '', stateName)}</b> {clean(x.text || '', stateName)}</>}</li>)}</ul>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {faqs.length > 0 && (
        <section className="cpr-sec cpr-alt">
          <div className="cpr-wrap">
            <p className="cpr-kicker">Common questions</p>
            <h2>{clean((c.faq && c.faq.sectionTitle) || 'Frequently asked questions', stateName)}</h2>
            <div style={{ marginTop: '1.2rem', borderTop: '1px solid var(--line)' }}>
              {faqs.map((f, i) => (
                <details className="cpr-faqitem" key={i}>
                  <summary>
                    <span>{clean(f.question || f.q || '', stateName)}</span>
                    <span className="cpr-plus" aria-hidden="true" />
                  </summary>
                  <p className="cpr-ans">{clean(f.answer || f.a || '', stateName)}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* REFERENCES */}
      {refs.length > 0 && (
        <section className="cpr-sec">
          <div className="cpr-wrap">
            <p className="cpr-kicker">Clinical sources</p>
            <h2>References</h2>
            <ul className="cpr-refs">
              {refs.map((r, i) => (
                <li key={i}>
                  {r.url ? <a href={r.url} rel="nofollow noopener">{clean(r.text || r.label || r.url, stateName)}</a> : clean(r.text || r.label || String(r), stateName)}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* RELATED CONDITIONS (styled) */}
      {relatedConds.length > 0 && (
        <section className="cpr-sec cpr-alt">
          <div className="cpr-wrap">
            <p className="cpr-kicker">Explore more care</p>
            <h2>Related conditions we treat online</h2>
            <div className="cpr-links">
              {relatedConds.map((rc, i) => {
                const slug = rc.slug || rc.href || '';
                const name = rc.name || rc.title || rc.label || '';
                return (
                  <a className="cpr-linkcard" key={i} href={slug.startsWith('/') ? slug : `/${slug}`}>
                    <span className="t">{clean(name, stateName)}</span>
                    <span className="d">Online MD video visit</span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* QUICK LINKS: cost, compare, symptoms (styled cards) */}
      {(costLink || comparePage || (symptomLinks && symptomLinks.length > 0) || (secondaryCostPages && secondaryCostPages.length > 0)) && (
        <section className="cpr-sec">
          <div className="cpr-wrap">
            <p className="cpr-kicker">Helpful links</p>
            <h2>Pricing, comparisons &amp; symptoms</h2>
            <div className="cpr-links">
              {costLink && (
                <a className="cpr-linkcard" href={costLink.url}>
                  <span className="t">{costLink.title}</span>
                  <span className="d">Transparent cost breakdown</span>
                </a>
              )}
              {secondaryCostPages.map((s, i) => (
                <a className="cpr-linkcard" href={s.url} key={`sc${i}`}>
                  <span className="t">{s.title}</span>
                  <span className="d">Cost &amp; options</span>
                </a>
              ))}
              {comparePage && (
                <a className="cpr-linkcard" href={`/compare/${comparePage.slug}/`}>
                  <span className="t">{comparePage.title || comparePage.name || 'Compare TeleDirectMD'}</span>
                  <span className="d">Side-by-side comparison</span>
                </a>
              )}
              {(symptomLinks || []).filter(Boolean).map((s, i) => (
                <a className="cpr-linkcard" href={`/symptoms/${s.slug}/`} key={`sy${i}`}>
                  <span className="t">{s.title || s.name || s.slug}</span>
                  <span className="d">Symptom guide</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ALL CONDITIONS link cloud (styled chips) */}
      {otherConditions && otherConditions.length > 0 && (
        <section className="cpr-sec cpr-alt">
          <div className="cpr-wrap">
            <p className="cpr-kicker">Everything we treat</p>
            <h2>All conditions we treat online</h2>
            <div className="cpr-chips">
              {otherConditions.map((cc, i) => (
                <a className="cpr-chip" key={i} href={`/${cc.slug}`}>{clean(cc.name, stateName)}</a>
              ))}
            </div>
            <div style={{ marginTop: '1.5rem' }}>
              <a href="/what-we-treat" className="cpr-cta cpr-cta--navy">Explore All Adult Conditions →</a>
            </div>
          </div>
        </section>
      )}

      {/* CLOSING CTA */}
      <section className="cpr-sec">
        <div className="cpr-wrap">
          <div className="cpr-close">
            <h2>Get treated today</h2>
            <p>A board-certified MD, a same-day visit, and a flat {price}. No waiting room, no insurance required.</p>
            <a href="/book-online" className="cpr-cta">Book a Visit, {price} →</a>
          </div>
        </div>
      </section>
    </div>
  );
}
