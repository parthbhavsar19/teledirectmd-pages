import { getStates, getConditionSlugs, getCondition, getConditionCategories, resolveConditionNational } from '../../lib/get-data';
import { generateNationalJsonLd } from '../../lib/json-ld-national';
import { INSURERS, INSURANCE_CONDITIONS } from '../../data/insurance/insuranceConfig';

export default function NationalConditionPage({ conditionSlug }) {
  const rawCondition = getCondition(conditionSlug);
  const condition = resolveConditionNational(rawCondition);
  const baseUrl = 'https://teledirectmd.com';
  const jsonLd = generateNationalJsonLd(condition);
  const today = new Date().toISOString().split('T')[0];
  const pid = conditionSlug;
  const allStates = getStates();
  const categories = getConditionCategories();

  const nationalH1 = condition.hero.h1;

  const nationalSubtitle = 'Nationwide adult care by secure video visit, self pay option starting at $49, MD-only. Insurance is not required but select plans are accepted.';

  /* National intro — replace residual state-specific text with national copy */
  const nationalIntro = condition.hero.introParagraph
    .replace(/This page is for adults located in one of our covered states, including communities nationwide\./g,
      `TeleDirectMD is currently licensed in 40+ states. Select your state below to find your state-specific treatment page.`);

  const nationalSideH2 = condition.hero.sideCard.h2;

  /* National benefits — swap location line for state count */
  const nationalBenefits = condition.hero.benefits.map((b) =>
    b.replace(/Licensed telehealth care for patients located in one of our covered states at the time of the visit/g,
      `Licensed in 40+ states — select yours below`)
  );

  /* Find related conditions from same category */
  const conditionCategory = categories.find((cat) =>
    cat.conditions.some((c) => c.slug === conditionSlug)
  );
  const relatedFromCategory = conditionCategory
    ? conditionCategory.conditions.filter((c) => c.slug !== conditionSlug).slice(0, 6)
    : [];

  /* All other conditions for the inline links */
  const allConditionSlugs = getConditionSlugs();
  const otherConditions = allConditionSlugs
    .filter((s) => s !== conditionSlug)
    .map((s) => {
      const c = getCondition(s);
      return { slug: s, name: c.conditionName };
    });

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
            {condition.conditionName} online telemedicine:
          </p>
          <p style={{ margin: '0.35rem 0 0', color: '#003E52', fontSize: '0.97rem' }}>
            TeleDirectMD offers same-day video visits with a board-certified MD for {condition.conditionName.toLowerCase()} in 40+ states, starting at $49. A physician evaluates your symptoms, confirms the diagnosis, and sends a prescription to your preferred pharmacy — no waiting room, no referral required. Select your state below to see your state-specific page.
          </p>
        </div>
      </div>

      {/* 1) Hero */}
      <section className="tdmd-hero" id={`${pid}-hero`}>
        <div className="tdmd-container">
          <div className="tdmd-hero-grid">
            <div className="tdmd-hero-copy">
              <h1 data-speakable="true">{nationalH1}</h1>
              <p className="tdmd-hero-sub" data-speakable="true">{nationalSubtitle}</p>
              <p>{nationalIntro}</p>

              <p className="tdmd-toc-intro"><strong>Quick navigation:</strong></p>
              <ul className="tdmd-toc">
                {condition.hero.tocLinks.map((link) => (
                  <li key={link.href}>
                    <a href={`#${pid}-${link.href}`}>{link.label}</a>
                  </li>
                ))}
              </ul>

              <ul className="tdmd-hero-benefits">
                {nationalBenefits.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>

              <div className="tdmd-hero-ctas">
                <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit</a>
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
                <h2>{nationalSideH2}</h2>
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
                  <li key={i}>{item.replace(/You are physically located in one of our covered states at the time of the visit/g, `You are physically located in one of our 40+ licensed states at the time of the visit`)}</li>
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

      {/* 4) Telehealth Regulations — national version */}
      <section className="tdmd-section" id={`${pid}-telehealth-regulations`}>
        <div className="tdmd-container">
          <h2>Telehealth Regulations Across Our Licensed States</h2>
          <p>TeleDirectMD is currently licensed to provide telehealth services in 40+ states. Each state has its own telehealth regulations, prescribing guidelines, and scope-of-practice rules. Our physicians follow all applicable state and federal regulations for every patient encounter.</p>
          <p>When you book a visit, you will be matched with a physician licensed in the state where you are physically located. This ensures your care meets all regulatory requirements for that jurisdiction. Select your state below to see specific telehealth regulations for your location.</p>
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

      {/* 20) Available in All States */}
      {/* Insurer Coverage for this condition — internal linking for AI visibility */}
      {(() => {
        const nationalToInsurance = {
          // short keys
          'uti': 'uti-treatment', 'urinary-tract-infection': 'uti-treatment',
          'sinus-infection': 'sinus-infection', 'sinusitis': 'sinus-infection',
          'strep-throat': 'strep-throat', 'pink-eye': 'pink-eye', 'conjunctivitis': 'pink-eye',
          'ear-infection': 'ear-infection', 'asthma': 'asthma-refill', 'asthma-refill': 'asthma-refill',
          'hypertension': 'hypertension-refill', 'high-blood-pressure': 'hypertension-refill',
          'acid-reflux': 'acid-reflux', 'gerd': 'acid-reflux',
          'flu': 'flu-treatment', 'influenza': 'flu-treatment', 'flu-treatment': 'flu-treatment',
          'yeast-infection': 'yeast-infection',
          // actual live site slugs (used by conditionSlug param)
          'uti-treatment-online': 'uti-treatment',
          'sinus-infection-treatment-online': 'sinus-infection',
          'sore-throat-treatment-online': 'strep-throat', 'strep-throat-treatment-online': 'strep-throat',
          'pink-eye-treatment-online': 'pink-eye',
          'ear-pain-treatment-online': 'ear-infection',
          'asthma-refills-online': 'asthma-refill',
          'hypertension-refills-online': 'hypertension-refill',
          'acid-reflux-refills-online': 'acid-reflux',
          'influenza-treatment-online': 'flu-treatment',
          'yeast-infection-treatment-online': 'yeast-infection',
        };
        const insCondSlug = nationalToInsurance[conditionSlug];
        if (!insCondSlug || !INSURANCE_CONDITIONS[insCondSlug]) return null;
        const insurerLinks = Object.values(INSURERS).map((ins) => ({
          slug: ins.slug, name: ins.name,
          hubUrl: `/insurance/${ins.slug}`,
          condUrl: `/insurance/${ins.slug}/${insCondSlug}`,
          stateCount: ins.states.length,
        }));
        return (
          <section className="tdmd-section" id={`${pid}-insurance-coverage`}>
            <div className="tdmd-container" data-speakable="true">
              <h2>Insurance Coverage for {condition.conditionName}</h2>
              <p>TeleDirectMD is in-network with major insurers for {condition.conditionName.toLowerCase()} telemedicine visits. Your standard copay applies in place of the $49 self-pay fee.</p>
              <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', marginTop: '1rem' }}>
                {insurerLinks.map((link) => (
                  <div key={link.slug} style={{ border: '1px solid var(--tdmd-border, #E5E7EB)', borderRadius: '0.5rem', padding: '1.25rem' }}>
                    <strong style={{ display: 'block', fontSize: '1.05rem', marginBottom: '0.5rem' }}>{link.name}</strong>
                    <p style={{ fontSize: '0.9rem', margin: '0 0 0.75rem', lineHeight: 1.5 }}>Coverage in {link.stateCount} states.</p>
                    <a href={link.condUrl} style={{ display: 'block', color: 'var(--tdmd-teal, #14B8A6)', fontWeight: 600, textDecoration: 'none', marginBottom: '0.25rem' }}>Does {link.name} cover {condition.conditionName}? →</a>
                    <a href={link.hubUrl} style={{ display: 'block', color: 'var(--tdmd-teal, #14B8A6)', fontSize: '0.9rem', textDecoration: 'none' }}>All {link.name} coverage →</a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })()}

      <section className="tdmd-section" id={`${pid}-states`}>
        <div className="tdmd-container">
          <h2>Get {condition.conditionName} in Your State</h2>
          <p>TeleDirectMD treats {condition.conditionName.toLowerCase()} via telehealth in 40+ states. Select your state for a page tailored to your location, including local telehealth regulations and pharmacy options.</p>

          <div className="tdmd-other-states-grid">
            {allStates.map((s) => (
              <a key={s.slug} className="tdmd-other-state-link" href={`/${s.slug}/${conditionSlug}`}>
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 21) Related Conditions — national version */}
      <section className="tdmd-section tdmd-section-highlight" id={`${pid}-related-conditions`}>
        <div className="tdmd-container">
          <h2>Related Conditions We Treat Online</h2>
          <p>These conditions can help when symptoms overlap or when you want to explore other telehealth care options from TeleDirectMD.</p>

          {relatedFromCategory.length > 0 && (
            <div className="tdmd-related-grid" role="list">
              {relatedFromCategory.map((rc, i) => (
                <a
                  key={i}
                  className="tdmd-related-card"
                  role="listitem"
                  href={`/${rc.slug}`}
                  aria-label={`${rc.name} treatment online`}
                >
                  <span className="tdmd-related-title">{rc.name}</span>
                  <span className="tdmd-related-desc">Online MD video visit</span>
                </a>
              ))}
            </div>
          )}

          <div className="tdmd-inline-links">
            <h3>All Conditions We Treat</h3>
            <p className="tdmd-link-cloud">
              {otherConditions.map((c, i) => (
                <a key={i} href={`/${c.slug}`}>{c.name}</a>
              ))}
            </p>
          </div>

          <div className="tdmd-related-cta">
            <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">Explore All Adult Conditions</a>
          </div>
        </div>
      </section>

      {/* 22) Who We Serve Cross-Links */}
      <section className="tdmd-section tdmd-section-highlight" id={`${pid}-who-we-serve`}>
        <div className="tdmd-container">
          <h2>Who We Serve</h2>
          <p>TeleDirectMD provides telehealth for people whose lifestyle or work makes traditional healthcare difficult. See how we help:</p>
          <div className="tdmd-related-grid" role="list">
            <a className="tdmd-related-card" role="listitem" href="/who-we-serve/truck-drivers/">
              <span className="tdmd-related-title">Truck Drivers</span>
              <span className="tdmd-related-desc">Healthcare from any truck stop in 41 states</span>
            </a>
            <a className="tdmd-related-card" role="listitem" href="/who-we-serve/gig-workers/">
              <span className="tdmd-related-title">Gig Workers & Freelancers</span>
              <span className="tdmd-related-desc">Affordable care without employer insurance</span>
            </a>
            <a className="tdmd-related-card" role="listitem" href="/who-we-serve/uninsured-affordable-care/">
              <span className="tdmd-related-title">Uninsured & Self-Pay</span>
              <span className="tdmd-related-desc">$49 visits with no insurance required</span>
            </a>
            <a className="tdmd-related-card" role="listitem" href="/who-we-serve/remote-workers/">
              <span className="tdmd-related-title">Remote Workers</span>
              <span className="tdmd-related-desc">Virtual doctor for digital nomads</span>
            </a>
            <a className="tdmd-related-card" role="listitem" href="/who-we-serve/travel-nurses/">
              <span className="tdmd-related-title">Travel Nurses</span>
              <span className="tdmd-related-desc">Same doctor across every assignment</span>
            </a>
            <a className="tdmd-related-card" role="listitem" href="/who-we-serve/small-business-owners/">
              <span className="tdmd-related-title">Small Business Owners</span>
              <span className="tdmd-related-desc">No time wasted in waiting rooms</span>
            </a>
          </div>
        </div>
      </section>

      {/* 23) Quick Links */}
      <section className="tdmd-section" id={`${pid}-quick-links`}>
        <div className="tdmd-container">
          <h2>More from TeleDirectMD</h2>
          <div className="tdmd-inline-links">
            <p className="tdmd-link-cloud">
              <a href="/insurance">Insurance & Pricing</a>
              <a href="/states-we-serve">States We Serve</a>
              <a href="/who-we-serve">Who We Serve</a>
              <a href="/faq">Frequently Asked Questions</a>
              <a href="/book-online">Book a Visit</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
