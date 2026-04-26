// Shared render modules for the cost / compare internal-link rollout (PR 3).
// Pure JSX with tdmd-* classes — no client-only APIs, safe to import from
// both server and client components.

import {
  MASTER_COST_PAGE,
  COMPARE_PAGES_INDEX,
  getCostPageLinkForCondition,
  getTopComparePageForCondition,
} from '../../lib/internal-links';

// "What does this cost?" block — used on national + state×condition pages.
// Produces 1 outbound edge to the matching cost page (or the master) per
// page rendered.
export function WhatDoesThisCostBlock({ conditionSlug, conditionName, stateName }) {
  const link = getCostPageLinkForCondition(conditionSlug);
  const where = stateName ? ` in ${stateName}` : '';
  // Avoid doubling the word "treatment" — condition names like "UTI Treatment"
  // already include it; condition names like "Hypertension Refills" don't.
  const baseName = conditionName.replace(/\s+treatment\b/i, '').trim();
  const includesTreatment = /\btreatment\b/i.test(conditionName);
  const phrase = includesTreatment ? `${baseName.toLowerCase()} treatment` : `${conditionName.toLowerCase()}`;
  const lead = link.isCondition
    ? `What does ${phrase} cost${where}?`
    : `What does an online doctor visit${where} cost?`;
  const body = link.isCondition
    ? `A telehealth visit at TeleDirectMD is $49 flat. With a generic prescription via GoodRx, most patients pay $50–$115 total — a fraction of in-person urgent care. See the full breakdown by care setting on our cost guide.`
    : `TeleDirectMD\'s $49 flat rate is up to 5× cheaper than an in-person urgent care visit and ~18× cheaper than an uninsured ER visit. See verified 2026 cash-pay prices across every care setting.`;

  return (
    <section className="tdmd-section" id={`cost-cta-${conditionSlug || 'default'}`}>
      <div className="tdmd-container" data-speakable="true">
        <h2>{lead}</h2>
        <p>{body}</p>
        <div className="tdmd-related-cta" style={{ marginTop: '0.75rem' }}>
          <a href={link.url} className="tdmd-btn tdmd-btn-primary">{link.title} →</a>
        </div>
      </div>
    </section>
  );
}

// "Compare TeleDirectMD to other telehealth services" — surfaces the master
// cost page + the most relevant single compare page on every condition page.
// Targeted: 2 outbound edges per page (master + top compare for the condition).
export function CompareTeleDirectMDLinkRow({ conditionSlug }) {
  const top = getTopComparePageForCondition(conditionSlug) || COMPARE_PAGES_INDEX[0];
  return (
    <section className="tdmd-section tdmd-section-highlight" id={`compare-cta-${conditionSlug || 'default'}`}>
      <div className="tdmd-container">
        <h3 style={{ margin: '0 0 0.5rem' }}>Compare TeleDirectMD to other telehealth services</h3>
        <p className="tdmd-link-cloud">
          <a href={MASTER_COST_PAGE}>How much does an online doctor visit cost?</a>
          {' · '}
          <a href={`/compare/${top.slug}/`}>TeleDirectMD vs. {top.competitor}</a>
          {' · '}
          <a href="/compare/teledirectmd-vs-teladoc/">All platform comparisons</a>
        </p>
      </div>
    </section>
  );
}

// Full 6-card compare grid — used on insurance hubs and insurer×state pages.
// Produces 6 outbound edges per page rendered.
export function CompareToOtherTelehealthGrid({ heading } = {}) {
  return (
    <section className="tdmd-section" id="compare-other-telehealth">
      <div className="tdmd-container" data-speakable="true">
        <h2>{heading || 'Compare TeleDirectMD to Other Telehealth Providers'}</h2>
        <p>Or pay $49 cash — see how TeleDirectMD\'s flat rate stacks up against the major US telehealth platforms. Side-by-side, with sources.</p>
        <div className="tdmd-related-grid" style={{ marginTop: '1rem' }}>
          {COMPARE_PAGES_INDEX.map((c) => (
            <a key={c.slug} href={`/compare/${c.slug}/`} className="tdmd-related-card">
              <span className="tdmd-related-title">TeleDirectMD vs. {c.competitor}</span>
              <span className="tdmd-related-desc">{c.tagline}</span>
            </a>
          ))}
        </div>
        <p style={{ marginTop: '1rem' }}>
          <a href={MASTER_COST_PAGE} style={{ color: 'var(--tdmd-teal)', fontWeight: 600 }}>Or see the full cost breakdown across every care setting →</a>
        </p>
      </div>
    </section>
  );
}

// Small inline footer used on insurance pages.
// 1 outbound edge to the master cost page.
export function Or49CashLink() {
  return (
    <p style={{ margin: '1.25rem 0 0', fontSize: '0.95rem', color: 'var(--tdmd-muted)' }}>
      Or pay $49 cash —{' '}
      <a href={MASTER_COST_PAGE} style={{ color: 'var(--tdmd-teal)', fontWeight: 600 }}>see the full pricing breakdown</a>
      {' '}across every care setting (TeleDirectMD vs. ER, urgent care, retail clinic, and other telehealth platforms).
    </p>
  );
}

// Pricing-breakdown CTA used on every who-we-serve segment page (sitewide
// router-level append). 1 outbound edge to the master cost page; 1 to a
// relevant condition cost page when one is supplied.
export function WhoWeServePricingCTA({ pricingHook, relatedCostPage }) {
  return (
    <section className="tdmd-section" id="cost-breakdown-cta">
      <div className="tdmd-container" data-speakable="true">
        <h2>What you\'ll actually pay</h2>
        <p>{pricingHook || 'A flat $49 visit is up to 5× cheaper than urgent care and ~18× cheaper than an uninsured ER visit. We\'ve published the full price breakdown so you know your total cost upfront.'}</p>
        <div className="tdmd-related-grid" style={{ marginTop: '0.75rem' }}>
          <a href={MASTER_COST_PAGE} className="tdmd-related-card">
            <span className="tdmd-related-title">Online Doctor Visit Cost in 2026</span>
            <span className="tdmd-related-desc">$49 vs. $150–$280 urgent care vs. ~$2,715 ER, with sources.</span>
          </a>
          {relatedCostPage && (
            <a href={`/cost/${relatedCostPage.slug}/`} className="tdmd-related-card">
              <span className="tdmd-related-title">{relatedCostPage.title}</span>
              <span className="tdmd-related-desc">{relatedCostPage.tagline}</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
