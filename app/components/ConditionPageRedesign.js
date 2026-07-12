// Reusable redesigned layout for national condition pages, in the same design
// system as the UTI antibiotics cost page (Fraunces + DM Sans, navy/teal/gold).
// Data-driven: reads the existing condition JSON, so it can be rolled out to any
// condition. Gated per-slug in NationalConditionPage until fully rolled out.
// Static-export safe. Schema/JSON-LD stays in the parent page.

import { clean, CPR_CSS } from './conditionRedesignStyles';

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
      <style>{CPR_CSS}</style>

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
            <p className="cpr-trust">Board-certified MD · 43 states · evenings &amp; weekends · HSA/FSA accepted · 5.0★ (125 reviews)</p>
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
