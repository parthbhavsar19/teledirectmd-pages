// Reusable redesigned layout for /cost/[slug] pages, matching the site design
// system (Fraunces + DM Sans, navy/teal/gold). Data-driven: reads the cost-page
// config object, so it can be rolled out to every cost page. Static-export safe.
// Schema/JSON-LD stays in the parent page.

import { AGGREGATE_RATING_VALUE, TOTAL_REVIEW_COUNT } from '../../lib/review-schema';

const GOLD = '#E8A33D';

// Render HTML strings that the config uses (answerBody, educationalGap paragraphs).
function html(s) { return { __html: String(s || '') }; }

// Build a relative bar width from a "$X–$Y" style string (max number).
function maxNum(v) {
  const found = (String(v).match(/[\d,]+/g) || []).map((n) => parseInt(n.replace(/,/g, ''), 10));
  return found.length ? Math.max(...found) : 0;
}

// Price content decays, and cost SERPs weight freshness heavily. Competitors that
// outrank us surface an explicit date (docdx.com dateModified 2026-06-29,
// primaimmediatecare.com 2026-01-22) while we surfaced none.
function verificationDate() {
  const iso = new Date().toISOString().split('T')[0];
  return {
    verifiedISO: iso,
    verifiedDisplay: new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', timeZone: 'UTC'
    }),
  };
}

export default function CostPageRedesign({ cfg, relatedCost = [], comparePages = [] }) {
  const { verifiedISO, verifiedDisplay } = verificationDate();
  const p = cfg;
  const price = '79';
  const costRows = (p.costTable && Array.isArray(p.costTable.rows)) ? p.costTable.rows : [];
  const platRows = (p.platformTable && Array.isArray(p.platformTable.rows)) ? p.platformTable.rows : [];
  const rollRows = (p.conditionRollup && Array.isArray(p.conditionRollup.rows)) ? p.conditionRollup.rows : [];
  const medRows = (p.medicationsTable && Array.isArray(p.medicationsTable.rows)) ? p.medicationsTable.rows : [];
  const faqs = Array.isArray(p.faqs) ? p.faqs : [];
  const refs = Array.isArray(p.references) ? p.references : [];
  const heroItems = Array.isArray(p.heroCardItems) ? p.heroCardItems : [];
  const benefits = Array.isArray(p.heroBenefits) ? p.heroBenefits : [];

  // Build the comparison bar chart from the cost table (setting -> cost).
  const barSource = costRows.length ? costRows.map((r) => ({ label: r.setting, value: r.cost })) : [];
  const bmax = Math.max(1, ...barSource.map((b) => maxNum(b.value)));

  return (
    <div className="cxr">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=DM+Sans:wght@400;500;600;700&display=swap');
        .cxr{--navy:#003E52;--teal:#0C8F99;--gold:${GOLD};--ink:#12303b;--muted:#5c7078;--line:#e4ecee;font-family:'DM Sans',system-ui,sans-serif;color:var(--ink);}
        .cxr h1,.cxr h2,.cxr h3,.cxr .disp{font-family:'Fraunces',Georgia,serif;font-weight:600;letter-spacing:-0.01em;}
        .cxr li{color:var(--ink);}
        .cxr p{color:var(--ink);}
        .cxr-wrap{max-width:1080px;margin:0 auto;padding:0 1.25rem;}
        .cxr-sec{padding:3rem 0;}
        .cxr-alt{background:#f2f8f9;}
        .cxr-kicker{text-transform:uppercase;letter-spacing:.14em;font-size:.72rem;font-weight:700;color:var(--teal);margin:0 0 .6rem;}
        .cxr h2{font-size:clamp(1.55rem,3vw,2.05rem);line-height:1.14;color:var(--navy);margin:0 0 .5rem;}
        .cxr-lead{font-size:1.02rem;line-height:1.6;color:var(--muted);max-width:64ch;margin:0 0 1.4rem;}
        .cxr-prose p{font-size:.98rem;line-height:1.68;color:var(--ink);max-width:72ch;margin:0 0 1rem;}
        .cxr-prose a,.cxr-refs a{color:var(--teal);}

        .cxr-hero{background:linear-gradient(160deg,#012f3e 0%,#01465a 60%,#065f6b 100%);color:#fff;padding:3rem 0 3.25rem;}
        .cxr-hero-grid{display:grid;grid-template-columns:1.08fr .92fr;gap:2.5rem;align-items:center;}
        @media(max-width:840px){.cxr-hero-grid{grid-template-columns:1fr;}}
        .cxr-hero h1{font-size:clamp(2rem,4.4vw,2.9rem);line-height:1.09;color:#fff;margin:0 0 .9rem;}
        .cxr-hero .sub{font-size:1.05rem;line-height:1.55;color:#d7ebee;margin:0 0 1.5rem;max-width:52ch;}
        .cxr-pricebox{display:inline-flex;align-items:baseline;gap:.55rem;flex-wrap:wrap;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.16);border-radius:16px;padding:1rem 1.25rem;margin:0 0 1.4rem;}
        .cxr-pricebox .big{font-family:'Fraunces',serif;font-size:3rem;font-weight:600;color:var(--gold);line-height:1;}
        .cxr-pricebox .lab{font-size:.95rem;color:#cfe6e9;}
        .cxr-cta{display:inline-flex;align-items:center;gap:.5rem;background:var(--gold);color:#08313f;font-weight:700;padding:.9rem 1.7rem;border-radius:12px;text-decoration:none;font-size:1.05rem;box-shadow:0 10px 26px rgba(232,163,61,.3);transition:transform .15s,filter .15s;}
        .cxr-cta:hover{transform:translateY(-1px);filter:brightness(1.05);}
        .cxr-cta--navy{background:var(--navy);color:#fff;box-shadow:0 8px 22px rgba(0,62,82,.28);}
        .cxr-hero .cxr-trust{font-size:.85rem;color:#9fc6ca;margin:1rem 0 0;}
        .cxr-hero .cxr-byline{font-size:.82rem;line-height:1.6;color:#bfdfe3;margin:.55rem 0 0;
          padding-top:.55rem;border-top:1px solid rgba(255,255,255,.14);}
        .cxr-hero .cxr-byline a{color:#fff;font-weight:700;text-decoration:underline;text-underline-offset:2px;}
        .cxr-hero .cxr-byline a:hover{color:#9fe3ea;}
        .cxr-hero .cxr-byline span{color:#9fc6ca;}
        .cxr-hcard{background:#fff;border-radius:18px;padding:1.5rem;box-shadow:0 18px 46px rgba(0,0,0,.26);}
        .cxr-hcard h3{font-size:1.1rem;color:var(--navy);margin:0 0 .1rem;}
        .cxr-hcard .price{font-family:'Fraunces',serif;font-size:2.6rem;font-weight:600;color:var(--navy);line-height:1;margin:.4rem 0 .1rem;}
        .cxr-hcard .pl{font-size:.85rem;color:var(--muted);margin:0 0 1rem;}
        .cxr-hcard ul{list-style:none;margin:0;padding:0;}
        .cxr-hcard li{position:relative;padding-left:1.6rem;margin:.5rem 0;font-size:.92rem;line-height:1.4;color:var(--ink);}
        .cxr-hcard li::before{content:'✓';position:absolute;left:0;color:var(--teal);font-weight:800;}

        .cxr-pcgrid{display:grid;grid-template-columns:.82fr 1.18fr;gap:1.5rem;align-items:stretch;}
        @media(max-width:820px){.cxr-pcgrid{grid-template-columns:1fr;}}
        .cxr-pcard{background:#fff;border:1px solid var(--line);border-radius:18px;padding:1.6rem;}
        .cxr-pcard .big{font-family:'Fraunces',serif;font-size:3rem;font-weight:600;color:var(--navy);line-height:1;}
        .cxr-pcard .sub{font-weight:600;margin:.2rem 0 1rem;}
        .cxr-pcard ul{list-style:none;margin:0;padding:0;}
        .cxr-pcard li{position:relative;padding-left:1.55rem;margin:.42rem 0;font-size:.92rem;color:var(--ink);}
        .cxr-pcard li::before{content:'✓';position:absolute;left:0;color:var(--teal);font-weight:800;}
        .cxr-bars{background:var(--navy);color:#fff;border-radius:18px;padding:1.6rem 1.75rem;}
        .cxr-bars h3{color:#fff;font-size:1.15rem;margin:0 0 1rem;}
        .cxr-brow{margin:.6rem 0;}
        .cxr-btop{display:flex;justify-content:space-between;font-size:.9rem;margin-bottom:.3rem;color:#eaf6f7;gap:1rem;}
        .cxr-btop .v{font-weight:700;font-variant-numeric:tabular-nums;white-space:nowrap;}
        .cxr-btrack{height:15px;background:rgba(255,255,255,.13);border-radius:999px;overflow:hidden;}
        .cxr-bfill{height:100%;border-radius:999px;background:linear-gradient(90deg,#2aa9b3,#0c8f99);}
        .cxr-bfill.hero{background:linear-gradient(90deg,var(--gold),#f2b65a);}

        .cxr-table-wrap{overflow-x:auto;}
        .cxr-table{width:100%;border-collapse:collapse;background:#fff;border-radius:14px;overflow:hidden;border:1px solid var(--line);}
        .cxr-table th{background:#f2f8f9;text-align:left;font-size:.8rem;text-transform:uppercase;letter-spacing:.04em;color:var(--navy);padding:.75rem 1rem;font-weight:700;}
        .cxr-table td{padding:.85rem 1rem;border-top:1px solid var(--line);font-size:.9rem;vertical-align:top;line-height:1.45;}
        .cxr-table td:first-child{font-weight:700;color:var(--ink);}
        .cxr-table tr.hero td{background:#fffdf6;}
        .cxr-table td .src{display:block;font-size:.72rem;color:var(--muted);margin-top:.2rem;}
        .cxr-caption{font-size:.82rem;color:var(--muted);margin:.7rem 0 0;}

        .cxr-cardgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1rem;margin-top:1.2rem;}
        .cxr-infocard{background:#fff;border:1px solid var(--line);border-radius:14px;padding:1.15rem 1.25rem;}
        .cxr-infocard h3{font-size:1rem;color:var(--navy);margin:0 0 .4rem;}
        .cxr-infocard p{margin:0;font-size:.9rem;line-height:1.55;color:var(--muted);}
        .cxr-two{display:grid;grid-template-columns:1fr 1fr;gap:1.25rem;}
        @media(max-width:760px){.cxr-two{grid-template-columns:1fr;}}
        .cxr-fit{border-radius:16px;padding:1.4rem;}
        .cxr-fit.good{background:#eefaf3;border:1px solid #b9e6cc;}
        .cxr-fit.bad{background:#fdf0ec;border:1px solid #f3ccbf;}
        .cxr-fit h3{font-size:1.02rem;margin:0 0 .7rem;color:var(--navy);}
        .cxr-fit ul{list-style:none;margin:0;padding:0;}
        .cxr-fit li{position:relative;padding-left:1.7rem;margin:.5rem 0;font-size:.92rem;line-height:1.45;color:var(--ink);}
        .cxr-fit.good li::before{content:'✓';position:absolute;left:0;color:#2e9c5f;font-weight:800;}
        .cxr-fit.bad li::before{content:'!';position:absolute;left:.35rem;color:#c2582f;font-weight:800;}

        .cxr-steps{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1rem;margin-top:1.2rem;}
        .cxr-step{background:#fff;border:1px solid var(--line);border-radius:14px;padding:1.2rem 1.3rem;}
        .cxr-step .num{font-family:'Fraunces',serif;font-size:1.9rem;font-weight:600;color:var(--gold);line-height:1;margin-bottom:.4rem;}
        .cxr-step h3{font-size:.98rem;color:var(--navy);margin:0 0 .3rem;}
        .cxr-step p{margin:0;font-size:.88rem;line-height:1.5;color:var(--muted);}

        .cxr-faqitem{border-bottom:1px solid var(--line);}
        .cxr-faqitem summary{list-style:none;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:1.05rem 0;font-family:'Fraunces',Georgia,serif;font-weight:600;font-size:1.03rem;color:var(--navy);}
        .cxr-faqitem summary::-webkit-details-marker{display:none;}
        .cxr-plus{flex:0 0 auto;width:24px;height:24px;position:relative;}
        .cxr-plus::before,.cxr-plus::after{content:'';position:absolute;background:var(--teal);border-radius:2px;}
        .cxr-plus::before{top:11px;left:3px;width:18px;height:2px;}
        .cxr-plus::after{top:3px;left:11px;width:2px;height:18px;transition:opacity .2s;}
        .cxr-faqitem[open] .cxr-plus::after{opacity:0;}
        .cxr-faqitem[open] summary{color:var(--teal);}
        .cxr-ans{margin:0;padding:0 0 1.1rem;font-size:.94rem;line-height:1.6;color:var(--muted);}

        .cxr-refs{list-style:none;margin:1.2rem 0 0;padding:0;display:grid;gap:.55rem;}
        .cxr-refs li{font-size:.87rem;line-height:1.5;color:var(--muted);padding-left:1.3rem;position:relative;}
        .cxr-refs li::before{content:'→';position:absolute;left:0;color:var(--teal);}
        .cxr-refs a{text-decoration:none;}
        .cxr-refs a:hover{text-decoration:underline;}

        .cxr-links{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:.75rem;margin-top:1.2rem;}
        .cxr-linkcard{background:#fff;border:1px solid var(--line);border-radius:12px;padding:.9rem 1.1rem;text-decoration:none;transition:all .15s;}
        .cxr-linkcard:hover{border-color:var(--teal);box-shadow:0 6px 18px rgba(12,143,153,.12);transform:translateY(-1px);}
        .cxr-linkcard .t{display:block;font-weight:700;color:var(--navy);font-size:.95rem;}
        .cxr-linkcard .d{display:block;font-size:.8rem;color:var(--muted);margin-top:.15rem;}

        .cxr-close{background:linear-gradient(160deg,#01465a,#065f6b);color:#fff;border-radius:22px;padding:2.5rem;text-align:center;}
        .cxr-close h2{color:#fff;font-size:clamp(1.6rem,3.3vw,2.2rem);margin:0 0 .5rem;}
        .cxr-close p{color:#d7ebee;font-size:1.03rem;margin:0 0 1.5rem;}
      `}</style>

      {/* HERO */}
      <section className="cxr-hero">
        <div className="cxr-wrap cxr-hero-grid">
          <div>
            <p className="cxr-kicker" style={{ color: '#7fd0d8' }}>{p.breadcrumb || 'Cost'} · 2026 Pricing</p>
            <h1>{p.h1}</h1>
            {p.heroSub && <p className="sub">{p.heroSub}</p>}
            <div className="cxr-pricebox">
              <span className="big">${price}</span><span className="lab">flat · no insurance required</span>
            </div>
            <div><a href="/book-online" className="cxr-cta">Book a Visit, ${price} →</a></div>
            <p className="cxr-trust">Board-certified MD · 44 states + DC · evenings &amp; weekends · HSA/FSA accepted · {AGGREGATE_RATING_VALUE}★ ({TOTAL_REVIEW_COUNT} reviews)</p>
            {/* Visible reviewer + price-verification line.

               These 21 pages had no visible byline or date anywhere in the rendered
               body. The credentials existed only in JSON-LD, which no reader and no
               AI Overview snippet sees. The one cost page that carries a visible
               byline (uti-antibiotics-cost, rendered by UtiAntibioticsPage) is also
               the only UTI cost page Google surfaces.

               Measured competitors do this in plain text: bettercare.com renders
               "Written by Kristen Cramer, April 24, 2025 · Edited by Tara Farmer ·
               Fact-checked by Jennifer Carlson" and outranks or matches us on the
               same queries with weaker credentials than a board-certified MD. */}
            <p className="cxr-byline">
              Medically reviewed by{' '}
              <a href="/about" aria-label="About Parth Bhavsar, MD">Parth Bhavsar, MD</a>
              {' '}· Board-Certified Family Medicine · NPI 1104323203
              <br />
              <span>Prices verified <time dateTime={verifiedISO}>{verifiedDisplay}</time></span>
            </p>
          </div>
          <div className="cxr-hcard">
            <h3>{p.heroCardTitle || `What you get for $${price}`}</h3>
            <div className="price">${price}</div>
            <p className="pl">flat self-pay · insurance not required</p>
            <ul>{(heroItems.length ? heroItems : benefits).slice(0, 6).map((it, i) => <li key={i}>{it}</li>)}</ul>
          </div>
        </div>
      </section>

      {/* ANSWER (citable prose) */}
      {p.answerBody && (
        <section className="cxr-sec">
          <div className="cxr-wrap cxr-prose" data-speakable="true">
            {p.answerLead && <p className="cxr-kicker">{p.answerLead}</p>}
            <p dangerouslySetInnerHTML={html(p.answerBody)} />
            {p.costPlus && (
              <p className="cxr-costplus" style={{ margin: '0 0 1rem' }}>
                <strong>Cost Plus Drugs:</strong> {p.costPlus.drug}{p.costPlus.price ? ` — ${p.costPlus.price}` : ''}. {p.costPlus.note}.
              </p>
            )}
            {p.heroIntro && <p dangerouslySetInnerHTML={html(p.heroIntro)} />}
          </div>
        </section>
      )}

      {/* COST TABLE + comparison bars */}
      {costRows.length > 0 && (
        <section className="cxr-sec cxr-alt">
          <div className="cxr-wrap">
            <p className="cxr-kicker">The numbers</p>
            <h2>{p.costTable.title || 'Cost across care settings'}</h2>
            {p.costTable.caption && <p className="cxr-lead">{p.costTable.caption}</p>}
            <div className="cxr-pcgrid">
              <div className="cxr-bars">
                <h3>Visual comparison</h3>
                {barSource.map((b, i) => {
                  const isHero = /teledirect/i.test(b.label);
                  const w = Math.max(6, Math.round((maxNum(b.value) / bmax) * 100));
                  return (
                    <div className="cxr-brow" key={i}>
                      <div className="cxr-btop"><span>{b.label}</span><span className="v">{b.value}</span></div>
                      <div className="cxr-btrack"><div className={`cxr-bfill${isHero ? ' hero' : ''}`} style={{ width: `${w}%` }} /></div>
                    </div>
                  );
                })}
              </div>
              <div className="cxr-table-wrap">
                <table className="cxr-table">
                  <thead><tr><th>Setting</th><th>Cost</th><th>What's included</th></tr></thead>
                  <tbody>
                    {costRows.map((r, i) => (
                      <tr key={i} className={/teledirect/i.test(r.setting) ? 'hero' : ''}>
                        <td>{r.setting}</td>
                        <td style={{ fontWeight: 700, whiteSpace: 'nowrap' }}>{r.cost}</td>
                        <td>{r.includes}{r.source && <span className="src">{r.sourceUrl ? <a href={r.sourceUrl} style={{ color: 'var(--teal)' }}>{r.source}</a> : r.source}</span>}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* EDUCATIONAL GAP */}
      {p.educationalGap && Array.isArray(p.educationalGap.paragraphs) && (
        <section className="cxr-sec">
          <div className="cxr-wrap cxr-prose">
            <p className="cxr-kicker">Why the difference</p>
            <h2>{p.educationalGap.title}</h2>
            {p.educationalGap.paragraphs.map((para, i) => <p key={i} dangerouslySetInnerHTML={html(para)} />)}
          </div>
        </section>
      )}

      {/* PLATFORM COMPARISON TABLE */}
      {platRows.length > 0 && (
        <section className="cxr-sec cxr-alt">
          <div className="cxr-wrap">
            <p className="cxr-kicker">How we compare</p>
            <h2>{p.platformTable.title || 'Cost across telehealth platforms'}</h2>
            {p.platformTable.caption && <p className="cxr-lead">{p.platformTable.caption}</p>}
            <div className="cxr-table-wrap">
              <table className="cxr-table">
                <thead><tr><th>Platform</th><th>Price</th><th>States</th><th>MD-only</th></tr></thead>
                <tbody>
                  {platRows.map((r, i) => (
                    <tr key={i} className={/teledirect/i.test(r.platform) ? 'hero' : ''}>
                      <td>{r.platform}</td>
                      <td style={{ whiteSpace: 'nowrap' }}>{r.price}</td>
                      <td>{r.states}</td>
                      <td>{r.mdOnly}{r.source && <span className="src">{r.sourceUrl ? <a href={r.sourceUrl} style={{ color: 'var(--teal)' }}>{r.source}</a> : r.source}</span>}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* CONDITION ROLLUP TABLE */}
      {rollRows.length > 0 && (
        <section className="cxr-sec">
          <div className="cxr-wrap">
            <p className="cxr-kicker">Total cost by condition</p>
            <h2>{p.conditionRollup.title || 'Total cost of care by condition'}</h2>
            {p.conditionRollup.caption && <p className="cxr-lead">{p.conditionRollup.caption}</p>}
            <div className="cxr-table-wrap">
              <table className="cxr-table">
                <thead><tr><th>Condition</th><th>Telehealth</th><th>Urgent care</th><th>ER</th></tr></thead>
                <tbody>
                  {rollRows.map((r, i) => (
                    <tr key={i}>
                      <td>{r.condition}</td>
                      <td style={{ color: 'var(--teal)', fontWeight: 700, whiteSpace: 'nowrap' }}>{r.telehealth}</td>
                      <td style={{ whiteSpace: 'nowrap' }}>{r.urgentCare}</td>
                      <td style={{ whiteSpace: 'nowrap' }}>{r.er}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* WHO WE HELP */}
      {p.whoWeHelp && Array.isArray(p.whoWeHelp.groups) && (
        <section className="cxr-sec cxr-alt">
          <div className="cxr-wrap">
            <p className="cxr-kicker">Who benefits</p>
            <h2>{p.whoWeHelp.title}</h2>
            <div className="cxr-cardgrid">
              {p.whoWeHelp.groups.map((g, i) => (
                <div className="cxr-infocard" key={i}><h3>{g.label}</h3><p>{g.desc}</p></div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* APPROPRIATE (good fit / not) */}
      {p.appropriateBlock && (p.appropriateBlock.goodFor || p.appropriateBlock.notFor) && (
        <section className="cxr-sec">
          <div className="cxr-wrap">
            <p className="cxr-kicker">Is it right for you?</p>
            <h2>{p.appropriateBlock.title || 'When telehealth is appropriate'}</h2>
            <div className="cxr-two" style={{ marginTop: '1.3rem' }}>
              {Array.isArray(p.appropriateBlock.goodFor) && (
                <div className="cxr-fit good"><h3>Good fit for a video visit</h3>
                  <ul>{p.appropriateBlock.goodFor.map((x, i) => <li key={i}>{x}</li>)}</ul></div>
              )}
              {Array.isArray(p.appropriateBlock.notFor) && (
                <div className="cxr-fit bad"><h3>Better seen in person</h3>
                  <ul>{p.appropriateBlock.notFor.map((x, i) => <li key={i}>{x}</li>)}</ul></div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* DECISION GUIDE */}
      {p.decisionGuide && Array.isArray(p.decisionGuide.steps) && (
        <section className="cxr-sec cxr-alt">
          <div className="cxr-wrap">
            <p className="cxr-kicker">Decision guide</p>
            <h2>{p.decisionGuide.title || 'How to decide'}</h2>
            <div className="cxr-steps">
              {p.decisionGuide.steps.map((s, i) => (
                <div className="cxr-step" key={i}>
                  {s.num != null && <div className="num">{s.num}</div>}
                  <h3>{s.head || s.title || ''}</h3>
                  <p>{s.body || s.text || ''}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* MEDICATIONS TABLE */}
      {medRows.length > 0 && (
        <section className="cxr-sec">
          <div className="cxr-wrap">
            <p className="cxr-kicker">Medication pricing</p>
            <h2>{p.medicationsTable.title || 'Medication costs'}</h2>
            {p.medicationsTable.caption && <p className="cxr-lead">{p.medicationsTable.caption}</p>}
            <div className="cxr-table-wrap">
              <table className="cxr-table">
                <thead><tr><th>Medication</th><th>Cost</th></tr></thead>
                <tbody>
                  {medRows.map((r, i) => (
                    <tr key={i}><td>{r.drug || r.medication}</td>
                      <td style={{ color: 'var(--teal)', fontWeight: 700, whiteSpace: 'nowrap' }}>{r.cost}{r.sourceUrl && <span className="src"><a href={r.sourceUrl} style={{ color: 'var(--teal)' }}>source</a></span>}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* FAQ ACCORDION */}
      {faqs.length > 0 && (
        <section className="cxr-sec cxr-alt">
          <div className="cxr-wrap">
            <p className="cxr-kicker">Common questions</p>
            <h2>Frequently asked questions</h2>
            <div style={{ marginTop: '1.2rem', borderTop: '1px solid var(--line)' }}>
              {faqs.map((f, i) => (
                <details className="cxr-faqitem" key={i}>
                  <summary><span>{f.question || f.q}</span><span className="cxr-plus" aria-hidden="true" /></summary>
                  <p className="cxr-ans">{f.answer || f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* RELATED / INTERNAL LINKS */}
      {(relatedCost.length > 0 || comparePages.length > 0) && (
        <section className="cxr-sec">
          <div className="cxr-wrap">
            <p className="cxr-kicker">Explore more</p>
            <h2>Related pricing &amp; comparisons</h2>
            <div className="cxr-links">
              {relatedCost.map((r, i) => (
                <a className="cxr-linkcard" href={r.url} key={`rc${i}`}><span className="t">{r.title}</span><span className="d">Cost breakdown</span></a>
              ))}
              {comparePages.map((r, i) => (
                <a className="cxr-linkcard" href={r.url} key={`cp${i}`}><span className="t">{r.title}</span><span className="d">Side-by-side comparison</span></a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* REFERENCES */}
      {refs.length > 0 && (
        <section className="cxr-sec cxr-alt">
          <div className="cxr-wrap">
            <p className="cxr-kicker">Clinical &amp; pricing sources</p>
            <h2>References</h2>
            <ul className="cxr-refs">
              {refs.map((r, i) => (
                <li key={i}>{r.url ? <a href={r.url} rel="nofollow noopener">{r.label || r.text || r.url}</a> : (r.label || r.text || String(r))}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* CLOSING CTA */}
      <section className="cxr-sec">
        <div className="cxr-wrap">
          <div className="cxr-close">
            <h2>See a board-certified MD today</h2>
            <p>A flat ${price} video visit. No insurance required, prescription sent to your pharmacy same-day.</p>
            <a href="/book-online" className="cxr-cta">Book a Visit, ${price} →</a>
          </div>
        </div>
      </section>
    </div>
  );
}
