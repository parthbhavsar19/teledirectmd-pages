/**
 * Shared layout for /employers/[industry] pages.
 *
 * Inherits the existing .tdmd-emp design tokens + Fraunces/DM Sans typography
 * from app/employers/employers-styles.js. No additional CSS — the styles are
 * already loaded by the parent /employers route's CSS, but since each industry
 * page is its own route, we re-inject employersCSS so styling works standalone.
 *
 * Section order (mirrors the buyer-journey research):
 *   1. Hero with audience-specific headline + booking CTA
 *   2. Workforce profile (signals expertise via BLS-level data)
 *   3. Common acute clinical complaints (longest section — this is the AI/AEO
 *      money block; each complaint is a citable claim with primary source)
 *   4. Industry-specific regulatory notes (DOT/OSHA/USDA/state-specific)
 *   5. What virtual care solves (3-5 numbered value props)
 *   6. What we honestly can't do (disclaimer block; builds trust + protects
 *      against scope-of-practice complaints + future compliance audits)
 *   7. Employer economics with cost data
 *   8. Industry-specific FAQ (3 questions, matched 1:1 to JSON-LD FAQPage)
 *   9. Final CTA + cross-link to /employers parent
 *
 * All external citation links open in new tab with rel="noopener noreferrer".
 */

import Link from 'next/link';
import { employersCSS } from './employers-styles';
import LeadFormEmbed from './LeadFormEmbed';
import { buildIndustryJsonLd } from './industry-page-factory';

function Citation({ label, url }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="tdmd-emp-citation">
      {label}
    </a>
  );
}

export default function IndustryPageLayout({ industry }) {
  const jsonLd = buildIndustryJsonLd(industry);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: employersCSS + EXTRA_CSS }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="tdmd-emp">
        {/* ============ HERO ============ */}
        <section className="tdmd-emp-hero">
          <div className="tdmd-emp-container">
            <div className="tdmd-emp-hero-grid">
              <div>
                <span className="tdmd-emp-eyebrow">For {industry.audienceLabel}</span>
                <h1>
                  {industry.heroHeadline}{' '}
                  {industry.heroHeadlineEm && <em>{industry.heroHeadlineEm}</em>}
                </h1>
                <p className="tdmd-emp-hero-sub">{industry.heroSub}</p>
                <div className="tdmd-emp-ctas">
                  <a href="#form" className="tdmd-emp-btn tdmd-emp-btn--primary">
                    Book a 15-Minute Call
                  </a>
                  <Link href="/employers/brief" className="tdmd-emp-btn tdmd-emp-btn--outline">
                    Download the Brief (PDF)
                  </Link>
                </div>
              </div>
              <div className="tdmd-emp-feecard">
                <div className="tdmd-emp-feecard-label">Your business pays</div>
                <div className="tdmd-emp-feecard-number">$0</div>
                <p>
                  No PEPM, no per-visit fees, no contracts with money in them. Your team pays{' '}
                  Preferred employer per-visit rate (set in your partnership agreement) or uses BCBS / Aetna / UHC in-network.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ WORKFORCE PROFILE ============ */}
        <section className="tdmd-emp-section tdmd-emp-section--soft">
          <div className="tdmd-emp-container tdmd-emp-narrow">
            <span className="tdmd-emp-eyebrow">The Workforce</span>
            <h2>{industry.name}: who they are, what they need</h2>
            <p>{industry.workforceProfile.intro}</p>
            <ul className="tdmd-emp-statlist">
              {industry.workforceProfile.stats.map((s, i) => (
                <li key={i}>
                  <strong>{s.value}</strong> <span>{s.label}</span>{' '}
                  {s.citation && <Citation {...s.citation} />}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ============ CLINICAL COMPLAINTS ============ */}
        <section className="tdmd-emp-section" id="how">
          <div className="tdmd-emp-container tdmd-emp-narrow">
            <span className="tdmd-emp-eyebrow">What we treat for this workforce</span>
            <h2>The {industry.workforceProfile.shortDesc || industry.shortName} health problems virtual care actually solves</h2>
            <p className="tdmd-emp-section-lede">{industry.complaintsLede}</p>
            <div className="tdmd-emp-complaint-list">
              {industry.commonComplaints.map((c, i) => (
                <div key={i} className="tdmd-emp-complaint">
                  <h3>{c.name}</h3>
                  <p>
                    <strong>Why this workforce:</strong> {c.why}
                  </p>
                  {c.citations && c.citations.length > 0 && (
                    <p className="tdmd-emp-cite-row">
                      {c.citations.map((cit, j) => (
                        <Citation key={j} {...cit} />
                      ))}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ REGULATORY NOTES ============ */}
        {industry.regulatoryNotes && (
          <section className="tdmd-emp-section tdmd-emp-section--soft">
            <div className="tdmd-emp-container tdmd-emp-narrow">
              <span className="tdmd-emp-eyebrow">Industry-specific notes</span>
              <h2>What we do — and do not — replace</h2>
              <div
                className="tdmd-emp-reg-body"
                dangerouslySetInnerHTML={{ __html: industry.regulatoryNotes }}
              />
            </div>
          </section>
        )}

        {/* ============ WHAT WE SOLVE ============ */}
        <section className="tdmd-emp-section tdmd-emp-section--teal">
          <div className="tdmd-emp-container tdmd-emp-narrow">
            <span className="tdmd-emp-eyebrow">For HR & operations</span>
            <h2>What this benefit changes day-to-day</h2>
            <div className="tdmd-emp-solve-grid">
              {industry.whatWeSolve.map((s, i) => (
                <div key={i} className="tdmd-emp-solve-card">
                  <h3>{s.headline}</h3>
                  <p>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ HONEST DISCLAIMERS ============ */}
        <section className="tdmd-emp-section">
          <div className="tdmd-emp-container tdmd-emp-narrow">
            <span className="tdmd-emp-eyebrow">Honest scope</span>
            <h2>What TeleDirectMD honestly cannot do</h2>
            <p className="tdmd-emp-section-lede">
              We tell employers up front where virtual care stops. It protects your team, your liability posture, and our license.
            </p>
            <ul className="tdmd-emp-dontlist">
              {industry.whatWeDont.map((d, i) => (
                <li key={i}>
                  <strong>{d.headline}.</strong> {d.body}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ============ EMPLOYER ECONOMICS ============ */}
        <section className="tdmd-emp-section tdmd-emp-section--soft">
          <div className="tdmd-emp-container tdmd-emp-narrow">
            <span className="tdmd-emp-eyebrow">Employer economics</span>
            <h2>What this saves you</h2>
            <div
              className="tdmd-emp-econ-body"
              dangerouslySetInnerHTML={{ __html: industry.employerEconomics }}
            />
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section className="tdmd-emp-section">
          <div className="tdmd-emp-container tdmd-emp-narrow">
            <span className="tdmd-emp-eyebrow">FAQ</span>
            <h2>{industry.shortName} employer FAQ</h2>
            <dl className="tdmd-emp-faq">
              {industry.faqs.map((f, i) => (
                <div key={i} className="tdmd-emp-faq-item">
                  <dt>{f.q}</dt>
                  <dd>{f.a}</dd>
                </div>
              ))}
            </dl>
            <p className="tdmd-emp-faq-foot">
              See the{' '}
              <Link href="/employers/">main employer FAQ</Link> for cost, contract, and
              compliance details. Brokers — see the{' '}
              <Link href="/employers/brokers/">$250 partnership program</Link>.
            </p>
          </div>
        </section>

        {/* ============ LEAD FORM ============ */}
        <section className="tdmd-emp-section tdmd-emp-section--soft" id="form">
          <div className="tdmd-emp-container tdmd-emp-narrow">
            <LeadFormEmbed defaultPath="employer" />
          </div>
        </section>
      </div>
    </>
  );
}

// Industry-page-specific tweaks layered on top of employersCSS.
const EXTRA_CSS = `
.tdmd-emp-citation {
  display: inline-block;
  font-size: 0.78rem;
  color: var(--tdmd-teal);
  text-decoration: underline;
  text-underline-offset: 2px;
  margin-right: 0.5rem;
  font-weight: 500;
}
.tdmd-emp-citation:hover { color: var(--tdmd-navy); }
.tdmd-emp-cite-row { margin-top: 0.35rem; font-size: 0.85rem; line-height: 1.6; }
.tdmd-emp-section-lede { font-size: 1.05rem; color: var(--tdmd-muted); margin-bottom: 1.5rem; }
.tdmd-emp-statlist {
  list-style: none; padding: 0; margin: 1.25rem 0 0;
  display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1rem;
}
.tdmd-emp-statlist li {
  padding: 1rem 1.25rem;
  background: #fff; border-radius: 12px;
  border: 1px solid #e5e0db;
}
.tdmd-emp-statlist strong {
  display: block;
  font-family: 'Fraunces', Georgia, serif;
  font-size: 1.5rem; color: var(--tdmd-navy); font-weight: 600;
}
.tdmd-emp-statlist span {
  display: block; font-size: 0.92rem; color: var(--tdmd-muted); margin-top: 0.2rem;
}
.tdmd-emp-complaint-list { margin-top: 1.25rem; display: grid; gap: 1rem; }
.tdmd-emp-complaint {
  padding: 1.1rem 1.4rem; background: #fff;
  border: 1px solid #e5e0db; border-radius: 12px;
}
.tdmd-emp-complaint h3 {
  font-family: 'Fraunces', Georgia, serif;
  font-size: 1.05rem; color: var(--tdmd-navy); font-weight: 600; margin: 0 0 0.4rem;
}
.tdmd-emp-complaint p { margin: 0; font-size: 0.95rem; line-height: 1.55; }
.tdmd-emp-reg-body, .tdmd-emp-econ-body { font-size: 1rem; line-height: 1.65; }
.tdmd-emp-reg-body p, .tdmd-emp-econ-body p { margin: 0 0 1rem; }
.tdmd-emp-reg-body ul, .tdmd-emp-econ-body ul { padding-left: 1.25rem; margin: 0 0 1rem; }
.tdmd-emp-solve-grid {
  display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem; margin-top: 1.25rem;
}
.tdmd-emp-solve-card {
  padding: 1.25rem 1.4rem;
  background: rgba(255,255,255,0.08); border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.15);
}
.tdmd-emp-solve-card h3 { color: #fff; margin-bottom: 0.5rem; }
.tdmd-emp-solve-card p { color: rgba(255,255,255,0.85); margin: 0; font-size: 0.95rem; }
.tdmd-emp-dontlist { padding-left: 1.25rem; line-height: 1.65; }
.tdmd-emp-dontlist li { margin-bottom: 0.85rem; }
.tdmd-emp-faq { margin-top: 0.75rem; }
.tdmd-emp-faq-item { padding: 1rem 0; border-top: 1px solid #e5e0db; }
.tdmd-emp-faq-item:last-child { border-bottom: 1px solid #e5e0db; }
.tdmd-emp-faq dt {
  font-family: 'Fraunces', Georgia, serif;
  font-size: 1.08rem; font-weight: 600; color: var(--tdmd-navy); margin-bottom: 0.4rem;
}
.tdmd-emp-faq dd { margin: 0; font-size: 1rem; line-height: 1.6; color: var(--tdmd-text); }
.tdmd-emp-faq-foot {
  margin-top: 1.25rem; font-size: 0.9rem; color: var(--tdmd-muted);
}
.tdmd-emp-faq-foot a { color: var(--tdmd-teal); font-weight: 600; }
`;
