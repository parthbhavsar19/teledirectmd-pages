import { getStates, getConditionSlugs, getCondition, getStateBySlug, resolveConditionForState } from '../../../lib/get-data';
import { generateJsonLd } from '../../../lib/json-ld';
import { getStateInsurance } from '../../../lib/insurance-data';

export async function generateStaticParams() {
  const states = getStates();
  const conditionSlugs = getConditionSlugs();
  const params = [];
  for (const state of states) {
    for (const cSlug of conditionSlugs) {
      params.push({ slug: state.slug, conditionSlug: cSlug });
    }
  }
  return params;
}

export async function generateMetadata({ params }) {
  const { slug, conditionSlug } = await params;
  const state = getStateBySlug(slug);
  const rawCondition = getCondition(conditionSlug);
  const condition = resolveConditionForState(rawCondition, state);
  const baseUrl = 'https://teledirectmd.com';
  const pageUrl = `${baseUrl}/${slug}/${conditionSlug}`;

  return {
    title: condition.pageTitle,
    description: condition.metaDescription,
    robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    authors: [{ name: 'Parth Bhavsar, MD' }],
    openGraph: {
      type: 'website',
      siteName: 'TeleDirectMD',
      locale: 'en_US',
      title: condition.pageTitle,
      description: condition.metaDescription,
      url: pageUrl,
      images: [{ url: `${baseUrl}/assets/social/tdmd-${slug}-${conditionSlug}-og.png`, alt: condition.ogImageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: condition.pageTitle,
      description: condition.metaDescription,
      images: [`${baseUrl}/assets/social/tdmd-${slug}-${conditionSlug}-og.png`],
    },
    alternates: { canonical: pageUrl },
  };
}

export default async function ConditionPage({ params }) {
  const { slug, conditionSlug } = await params;
  const state = getStateBySlug(slug);
  const rawCondition = getCondition(conditionSlug);
  const condition = resolveConditionForState(rawCondition, state);
  const baseUrl = 'https://teledirectmd.com';
  const jsonLd = generateJsonLd(condition, state);
  const today = new Date().toISOString().split('T')[0];
  const pid = `${slug}-${conditionSlug}`;
  const allStates = getStates();
  const otherStates = allStates.filter((s) => s.slug !== slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 0) Breadcrumb */}
      <nav className="tdmd-breadcrumbs" aria-label="Breadcrumb">
        <div className="tdmd-container" style={{ paddingTop: '0.5rem', paddingBottom: '0' }}>
          <a href="/">Home</a>
          <span className="tdmd-bc-sep" aria-hidden="true">/</span>
          <a href="/what-we-treat">What We Treat</a>
          <span className="tdmd-bc-sep" aria-hidden="true">/</span>
          <a href={`/${slug}/`}>{state.name}</a>
          <span className="tdmd-bc-sep" aria-hidden="true">/</span>
          <span aria-current="page">{condition.conditionName}</span>
        </div>
      </nav>

      {/* 0b) Answer Block — AI snippet target */}
      <div className="tdmd-answer-block" data-speakable="true" style={{
        background: '#EAF7F8', borderLeft: '4px solid #006B73',
        padding: '1rem 1.25rem', margin: '0 0 0', lineHeight: 1.6
      }}>
        <div className="tdmd-container">
          <p style={{ margin: 0, fontWeight: 700, color: '#003E52', fontSize: '1.05rem' }}>
            {condition.hero.h1.replace(/\bin\b.*/, '').trim()} via telehealth in {state.name}:
          </p>
          <p style={{ margin: '0.35rem 0 0', color: '#003E52', fontSize: '0.97rem' }}>
            TeleDirectMD offers same-day video visits with a board-certified MD for {condition.conditionName.toLowerCase()} in {state.name}, starting at $49. A physician evaluates your symptoms, confirms the diagnosis, and sends a prescription to your local pharmacy — no waiting room required.
          </p>
        </div>
      </div>

      {/* 1) Hero */}
      <section className="tdmd-hero" id={`${pid}-hero`}>
        <div className="tdmd-container">
          <div className="tdmd-hero-grid">
            <div className="tdmd-hero-copy">
              <h1 data-speakable="true">{condition.hero.h1}</h1>
              <p className="tdmd-hero-sub" data-speakable="true">{condition.hero.subtitle}</p>
              <p>{condition.hero.introParagraph}</p>

              <p className="tdmd-toc-intro"><strong>Quick navigation:</strong></p>
              <ul className="tdmd-toc">
                {condition.hero.tocLinks.map((link) => (
                  <li key={link.href}>
                    <a href={`#${pid}-${link.href}`}>{link.label}</a>
                  </li>
                ))}
              </ul>

              <ul className="tdmd-hero-benefits">
                {condition.hero.benefits.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>

              <div className="tdmd-hero-ctas">
                <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit</a>
                <a href={`/${slug}`} className="tdmd-btn tdmd-btn-outline">Explore {state.name} Pages</a>
                <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">View All Adult Conditions</a>
              </div>

              <p className="tdmd-reviewed">
                Last reviewed on {today} by{' '}
                <a className="tdmd-author-link" href="/about" aria-label="About Parth Bhavsar, MD">
                  Parth Bhavsar, MD
                </a>
              </p>
              <p className="tdmd-icd">
                <strong>ICD-10 commonly used:</strong> {condition.hero.icd10Display}
              </p>
            </div>

            <div className="tdmd-hero-side">
              <div className="tdmd-hero-card">
                <h2>{condition.hero.sideCard.h2}</h2>
                <ul>
                  {condition.hero.sideCard.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
                <p className="tdmd-hero-note">{condition.hero.sideCard.note}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2) Eligibility Checklist */}
      <section className="tdmd-section" id={`${pid}-eligibility-checklist`}>
        <div className="tdmd-container">
          <h2>{condition.eligibility.sectionTitle}</h2>
          <p><strong>{condition.eligibility.introText}</strong></p>

          <div className="tdmd-grid tdmd-grid-2">
            <div className="tdmd-card tdmd-card-good">
              <h3>✓ You Are Eligible If</h3>
              <ul className="tdmd-checklist tdmd-checklist--good">
                {condition.eligibility.eligible.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="tdmd-card tdmd-card-alert">
              <h3>✗ You Are Not Eligible If</h3>
              <ul className="tdmd-checklist tdmd-checklist--alert">
                {condition.eligibility.notEligible.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p className="tdmd-card-disclaimer">
                <strong>{condition.eligibility.notEligibleDisclaimer}</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3) How It Works */}
      <section className="tdmd-section" id={`${pid}-how-it-works`} itemScope itemType="https://schema.org/HowTo">
        <div className="tdmd-container">
          <h2 itemProp="name">{condition.howItWorks.sectionTitle}</h2>

          <div className="tdmd-decision-flow">
            {condition.howItWorks.steps.map((step, i) => (
              <div key={i} className={`tdmd-decision-step tdmd-decision-step-${step.type}`}>
                <div className="tdmd-decision-number">{i + 1}</div>
                <div className="tdmd-decision-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  {step.showCta && (
                    <div className="tdmd-decision-cta">
                      <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit</a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4) State Telehealth Regulations */}
      <section className="tdmd-section" id={`${pid}-telehealth-regulations`}>
        <div className="tdmd-container">
          <h2>{condition.telehealthRegulations.sectionTitle}</h2>
          {condition.telehealthRegulations.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* 5) Comparison Table */}
      <section className="tdmd-section" id={`${pid}-comparison`}>
        <div className="tdmd-container">
          <h2>{condition.comparisonTable.sectionTitle}</h2>
          <p>{condition.comparisonTable.intro}</p>

          <div className="tdmd-table-wrap">
            <table className="tdmd-table">
              <thead>
                <tr>
                  <th>Care option</th>
                  <th>Typical cost</th>
                  <th>Wait time</th>
                  <th>Provider type</th>
                  <th>Best for</th>
                </tr>
              </thead>
              <tbody>
                {condition.comparisonTable.rows.map((row, i) => (
                  <tr key={i}>
                    <td>{row.highlight ? <strong>{row.option}</strong> : row.option}</td>
                    <td>{row.highlight ? <strong>{row.cost}</strong> : row.cost}</td>
                    <td>{row.wait}</td>
                    <td>{row.provider}</td>
                    <td>{row.highlight ? row.bestFor : (row.bestFor.includes('Severe') || row.bestFor.includes('severe') ? <strong>{row.bestFor}</strong> : row.bestFor)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="tdmd-comparison-note">
            <strong>Bottom line:</strong> {condition.comparisonTable.bottomLine}
          </p>
        </div>
      </section>

      {/* 6) Decision Guide */}
      <section className="tdmd-section" id={`${pid}-decision-guide`}>
        <div className="tdmd-container">
          <h2>{condition.decisionGuide.sectionTitle}</h2>

          <div className="tdmd-decision-flow">
            {condition.decisionGuide.steps.map((step, i) => (
              <div key={i} className={`tdmd-decision-step tdmd-decision-step-${step.type}`}>
                <div className="tdmd-decision-number">{i + 1}</div>
                <div className="tdmd-decision-content">
                  <h3>{step.title}</h3>
                  {step.items && step.items.length > 0 && (
                    <ul>
                      {step.items.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {step.description && <p>{step.description}</p>}
                  {step.yesAction && (
                    <p className="tdmd-decision-action"><strong>{step.yesAction}</strong></p>
                  )}
                  {step.noAction && (
                    <p className="tdmd-decision-action"><strong>{step.noAction}</strong></p>
                  )}
                  {step.showCta && (
                    <div className="tdmd-decision-cta">
                      <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit</a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7) Cost Breakdown */}
      <section className="tdmd-section tdmd-section-highlight" id={`${pid}-cost`}>
        <div className="tdmd-container">
          <h2>{condition.pricing.sectionTitle}</h2>
          <p>{condition.pricing.subtitle}</p>

          <div className="tdmd-price-grid">
            <div className="tdmd-price-card" aria-label="TeleDirectMD pricing">
              <h3>TeleDirectMD Video Visit</h3>
              <p className="tdmd-price-big">{condition.pricing.visitPrice}</p>
              <p className="tdmd-price-sub">{condition.pricing.priceSubtext}</p>
              <ul className="tdmd-price-includes">
                {condition.pricing.includes.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="tdmd-price-chart" role="group" aria-label="Typical cost comparison chart">
              <h3>Typical Cost Comparison</h3>
              <p className="tdmd-price-caption">Common ranges people see before insurance. Actual costs vary.</p>

              {condition.pricing.comparisonBars.map((bar, i) => (
                <div key={i} className="tdmd-bar-row" role="list">
                  <div className="tdmd-bar-label" role="listitem">
                    <span className="tdmd-bar-name">{bar.name}</span>
                    <span className="tdmd-bar-value">{bar.value}</span>
                  </div>
                  <div className="tdmd-bar-track" aria-hidden="true">
                    <div
                      className={`tdmd-bar-fill${bar.isTdmd ? ' tdmd-bar-fill-tdmd' : ''}`}
                      style={{ '--w': bar.width }}
                    />
                  </div>
                </div>
              ))}

              <p className="tdmd-price-footnote">{condition.pricing.footnote}</p>
            </div>
          </div>

          <p className="tdmd-cost-note">{condition.pricing.noHiddenFees}</p>
        </div>
      </section>

      {/* 8) What Is Condition */}
      <section className="tdmd-section" id={`${pid}-what-is`}>
        <div className="tdmd-container">
          <h2>{condition.whatIsCondition.sectionTitle}</h2>
          {condition.whatIsCondition.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* 9) Causes and Risk Factors */}
      <section className="tdmd-section" id={`${pid}-causes-risk-factors`}>
        <div className="tdmd-container">
          <h2>{condition.causesAndRiskFactors.sectionTitle}</h2>
          <p>{condition.causesAndRiskFactors.intro}</p>
          <ul>
            {condition.causesAndRiskFactors.items.map((item, i) => (
              <li key={i}><strong>{item.label}</strong> {item.text}</li>
            ))}
          </ul>
          <p>{condition.causesAndRiskFactors.closing}</p>
        </div>
      </section>

      {/* 10) Symptoms and Red Flags Table */}
      <section className="tdmd-section" id={`${pid}-symptoms-redflags`}>
        <div className="tdmd-container">
          <h2>{condition.symptomsAndRedFlags.sectionTitle}</h2>
          <p>{condition.symptomsAndRedFlags.intro}</p>

          <div className="tdmd-table-wrap">
            <table className="tdmd-table">
              <thead>
                <tr>
                  {condition.symptomsAndRedFlags.headers.map((h, i) => (
                    <th key={i}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {condition.symptomsAndRedFlags.rows.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 11) Differential Diagnosis */}
      <section className="tdmd-section" id={`${pid}-differential`}>
        <div className="tdmd-container">
          <h2>{condition.differentialDiagnosis.sectionTitle}</h2>
          <p>{condition.differentialDiagnosis.intro}</p>

          <div className="tdmd-grid tdmd-grid-2">
            <div className="tdmd-card">
              <h3>{condition.differentialDiagnosis.telehealthAppropriate.title}</h3>
              <ul>
                {condition.differentialDiagnosis.telehealthAppropriate.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="tdmd-card">
              <h3>{condition.differentialDiagnosis.requiresInPerson.title}</h3>
              <ul>
                {condition.differentialDiagnosis.requiresInPerson.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="tdmd-grid tdmd-grid-2 tdmd-compare-cards">
            {condition.differentialDiagnosis.compareCards.map((card, i) => (
              <div key={i} className="tdmd-card">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            ))}
          </div>

          <p>{condition.differentialDiagnosis.closing}</p>
        </div>
      </section>

      {/* 12) Telehealth Eligibility */}
      <section className="tdmd-section" id={`${pid}-telehealth-eligibility`}>
        <div className="tdmd-container">
          <h2>{condition.telehealthEligibility.sectionTitle}</h2>

          <div className="tdmd-grid tdmd-grid-2">
            <div className="tdmd-card tdmd-card-good">
              <h3>{condition.telehealthEligibility.appropriate.title}</h3>
              <ul className="tdmd-checklist tdmd-checklist--good">
                {condition.telehealthEligibility.appropriate.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="tdmd-card tdmd-card-alert">
              <h3>{condition.telehealthEligibility.redFlags.title}</h3>
              <ul className="tdmd-checklist tdmd-checklist--alert">
                {condition.telehealthEligibility.redFlags.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p className="tdmd-card-disclaimer">
                {condition.telehealthEligibility.redFlags.disclaimer}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 13) Treatment Options */}
      <section className="tdmd-section" id={`${pid}-treatment-options`}>
        <div className="tdmd-container">
          <h2>{condition.treatmentOptions.sectionTitle}</h2>
          <p>{condition.treatmentOptions.intro}</p>

          {condition.treatmentOptions.sections.map((sec, i) => (
            <div key={i}>
              <h3>{sec.title}</h3>
              <p>{sec.text}</p>
            </div>
          ))}

          <h3>What TeleDirectMD Does Not Manage</h3>
          <ul>
            {condition.treatmentOptions.doesNotManage.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* 14) Medication Table */}
      <section className="tdmd-section" id={`${pid}-medications`}>
        <div className="tdmd-container">
          <h2>{condition.medications.sectionTitle}</h2>
          <p>{condition.medications.intro}</p>

          <div className="tdmd-table-wrap">
            <table className="tdmd-table">
              <thead>
                <tr>
                  {condition.medications.headers.map((h, i) => (
                    <th key={i}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {condition.medications.rows.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="tdmd-med-note">
            <strong>Important:</strong> {condition.medications.note}
          </p>
        </div>
      </section>

      {/* 15) Home Care / Recovery / Prevention */}
      <section className="tdmd-section" id={`${pid}-home-care`}>
        <div className="tdmd-container">
          <h2>{condition.homeCare.sectionTitle}</h2>

          <h3>{condition.homeCare.whatToDoNow.title}</h3>
          <ul>
            {condition.homeCare.whatToDoNow.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h3>{condition.homeCare.whatToWatch.title}</h3>
          <ul>
            {condition.homeCare.whatToWatch.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h3>{condition.homeCare.followUp.title}</h3>
          <ul>
            {condition.homeCare.followUp.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* 16) When NOT to Use TeleDirectMD */}
      <section className="tdmd-section" id={`${pid}-when-not`}>
        <div className="tdmd-container">
          <h2>{condition.whenNotToUse.sectionTitle}</h2>
          <p>{condition.whenNotToUse.intro}</p>

          <h3>{condition.whenNotToUse.shouldNotUse.title}</h3>
          <ul>
            {condition.whenNotToUse.shouldNotUse.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h3>{condition.whenNotToUse.alternatives.title}</h3>
          <ul>
            {condition.whenNotToUse.alternatives.items.map((item, i) => (
              <li key={i}><strong>{item.label}</strong> {item.text}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* 17) FAQ Accordion */}
      <section className="tdmd-section tdmd-faq" id={`${pid}-faq`}>
        <div className="tdmd-container">
          <h2>{condition.faq.sectionTitle}</h2>

          <div className="tdmd-faq-list" role="list">
            {condition.faq.items.map((item, i) => (
              <details key={i} className="tdmd-faq-item">
                <summary className="tdmd-faq-question" data-speakable="true">{item.question}</summary>
                <div className="tdmd-faq-answer">
                  <p>{item.answer}</p>
                </div>
              </details>
            ))}
          </div>

          <div className="tdmd-bottom-cta" role="region" aria-label="Book a visit call to action">
            <div className="tdmd-bottom-cta-copy">
              <h3>{condition.faq.bottomCta.title}</h3>
              <p>{condition.faq.bottomCta.text}</p>
            </div>
            <div className="tdmd-bottom-cta-actions">
              <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit</a>
              <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">View All Adult Conditions</a>
            </div>
          </div>

          {/* Cross-links */}
          <div className="tdmd-inline-links" style={{ marginTop: '2rem' }}>
            <h3>More {state.name} Resources</h3>
            <p className="tdmd-link-cloud">
              <a href={`/${slug}/online-doctor-visits`}>Online Doctor Visits in {state.name}</a>
              <a href={`/${slug}`}>All Conditions in {state.name}</a>
              <a href="/insurance">Insurance & Pricing</a>
              <a href="/faq">FAQs</a>
              <a href="/states-we-serve">All States We Serve</a>
            </p>
          </div>
        </div>
      </section>

      {/* 18) References */}
      <section className="tdmd-section" id={`${pid}-references`}>
        <div className="tdmd-container">
          <h2>References</h2>
          <ul className="tdmd-ref-list">
            {condition.references.map((ref, i) => (
              <li key={i}>
                <a href={ref.url} rel="nofollow noopener" target="_blank">{ref.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 19) Disclaimer */}
      <section className="tdmd-section tdmd-footnote" id={`${pid}-disclaimer`}>
        <div className="tdmd-container">
          <h2>{condition.disclaimer.sectionTitle}</h2>
          {condition.disclaimer.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* 20) Related Conditions Grid */}
      <section className="tdmd-section" id={`${pid}-related-conditions`}>
        <div className="tdmd-container">
          <h2>Related Adult Conditions We Treat in {state.name}</h2>
          <p>These pages can help when symptoms overlap or when you want to explore other {state.name} telehealth care options from TeleDirectMD.</p>

          <div className="tdmd-related-grid" role="list">
            {condition.relatedConditions.map((rc, i) => (
              <a
                key={i}
                className="tdmd-related-card"
                role="listitem"
                href={`/${slug}/${rc.slug}`}
                aria-label={`${rc.title} treatment in ${state.name}`}
              >
                <span className="tdmd-related-title">{rc.title}</span>
                <span className="tdmd-related-desc">{rc.description}</span>
              </a>
            ))}
          </div>

          <div className="tdmd-inline-links">
            <h3>More {state.name} TeleDirectMD Pages</h3>
            <p className="tdmd-link-cloud">
              {condition.inlineLinks.map((link, i) => (
                <a key={i} href={`/${slug}/${link.slug}`}>{link.label}</a>
              ))}
            </p>
          </div>

          <div className="tdmd-city-block">
            <h3>{condition.cityBlock.title}</h3>
            <p>{condition.cityBlock.text}</p>
          </div>

          <div className="tdmd-related-cta">
            <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">Explore All Adult Conditions</a>
          </div>
        </div>
      </section>

      {/* 21) Same Condition in Other States */}
      <section className="tdmd-section tdmd-section-highlight" id={`${pid}-other-states`}>
        <div className="tdmd-container">
          <h2>Get {condition.conditionName} Treatment in Other States</h2>
          <p>TeleDirectMD treats {condition.conditionName.toLowerCase()} via telehealth in 40+ states. If you are traveling, relocating, or helping a family member in another state, select below to find this treatment near them.</p>
          <div className="tdmd-other-states-grid">
            {otherStates.map((s) => (
              <a key={s.slug} className="tdmd-other-state-link" href={`/${s.slug}/${conditionSlug}`}>
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
