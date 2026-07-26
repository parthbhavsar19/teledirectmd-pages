'use client';
import { B, INSURERS } from '../../../../data/insurance/insuranceConfig';
import { FAQ, BookCTA, HowItWorksSteps, Breadcrumb, InsuranceDisclaimer, AnswerBlock, CopayCard, CommissionerLink } from '../../components/InsuranceShared';
import { Ico } from '../../components/InsuranceIcons';
import { getAggregateRating, getReviewBlock } from '../../../../lib/review-schema';
import { CitableSummaryBlock } from '../../../components/CitableSummary';
import { citableSummaryToJsonLd } from '../../../../lib/citable-summary';
import MedicaidExclusion from '../../../components/MedicaidExclusion';

const curative = INSURERS.curative;
const cColor = curative.color;

// All state-varying copy arrives as the `content` prop, assembled server-side by
// lib/curative-content.js from data/state-licenses.json and data/states.json. The
// component holds no per-state strings, so a new state cannot render as a
// state-name substitution of another.
export default function CurativeStateClient({ content }) {
  const c = content;
  const pageUrl = `https://teledirectmd.com/insurance/curative/${c.slug}/`;
  const lic = c.license;

  const capsule = `Yes. TeleDirectMD is in-network with Curative Commercial PPO, EPO, and self-funded plans in ${c.name}, effective ${c.effectiveDate}, under a national provider agreement. ${c.name} members who have completed their annual Baseline Visit pay $0 for a same-day video visit with Parth Bhavsar, MD. A flat $79 self-pay option is always available.`;

  const citableSummary = {
    question: `Which doctors take Curative insurance in ${c.name}?`,
    answerHtml:
      `TeleDirectMD is in-network with Curative in ${c.name} for Commercial PPO, EPO, and self-funded plans (EPO Value, EPO (PPOx), PPO (PPO+), and PPO Max), effective ${c.effectiveDate}. ` +
      `Visits are with Parth Bhavsar, MD (NPI 1104323203), board-certified in Family Medicine. ${lic.credential} ` +
      `${c.regulatory.lead} ` +
      'Curative members who complete their annual Baseline Visit within 120 days of their plan start date have $0 copays, $0 deductible, and 0% coinsurance for in-network care, including virtual visits; members who have not completed it are subject to their plan deductible. ' +
      'TeleDirectMD is not in-network with Medicaid, Managed Medicaid, CHIP, or Medicare-Medicaid plans. Self-pay alternative: $79 flat, HSA and FSA eligible.',
    answerText: '',
    emitAs: 'QAPage',
  };
  citableSummary.answerText = citableSummary.answerHtml.replace(/<[^>]+>/g, '');
  const citableJsonLd = citableSummaryToJsonLd(citableSummary, { pageUrl });

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalBusiness',
        '@id': `${pageUrl}#business`,
        'name': `TeleDirectMD Curative coverage in ${c.name}`,
        'url': pageUrl,
        'areaServed': { '@type': 'AdministrativeArea', 'name': c.name },
        'aggregateRating': getAggregateRating(),
        'acceptedInsurance': c.plans.map((p) => ({
          '@type': 'HealthInsurancePlan',
          'name': p.name,
          'description': `Curative ${p.productType} plan, in-network with TeleDirectMD in ${c.name}.`,
          'validFrom': c.effectiveDateISO,
        })),
      },
      {
        '@type': 'Physician',
        '@id': `${pageUrl}#physician`,
        'name': 'Parth Bhavsar, MD',
        'medicalSpecialty': 'Family Medicine',
        'identifier': [{ '@type': 'PropertyValue', 'name': 'NPI', 'value': '1104323203' }],
        'areaServed': { '@type': 'AdministrativeArea', 'name': c.name },
        'hasCredential': {
          '@type': 'EducationalOccupationalCredential',
          'credentialCategory': lic.isTelehealthRegistration
            ? 'Out-of-state telehealth provider registration'
            : 'State medical license',
          'name': lic.credential,
          'identifier': lic.number,
          'recognizedBy': { '@type': 'GovernmentOrganization', 'name': lic.board, 'url': lic.boardUrl },
        },
        'sameAs': ['https://npiregistry.cms.hhs.gov/provider-view/1104323203'],
        ...getReviewBlock(),
      },
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        'mainEntity': c.faqs.map((f) => ({
          '@type': 'Question',
          'name': f.q,
          'acceptedAnswer': { '@type': 'Answer', 'text': f.a.replace(/<[^>]+>/g, '') },
        })),
      },
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        'url': pageUrl,
        'name': `Doctors That Take Curative Insurance in ${c.name} | TeleDirectMD`,
        'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['[data-speakable]'] },
      },
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://teledirectmd.com' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Insurance', 'item': 'https://teledirectmd.com/insurance' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Curative', 'item': 'https://teledirectmd.com/insurance/curative/' },
          { '@type': 'ListItem', 'position': 4, 'name': c.name, 'item': pageUrl },
        ],
      },
    ],
  };

  const customSteps = [
    { icon: <Ico.Cal c={B.teal} s={24} />, title: 'Confirm plan and Baseline', desc: 'Your Curative card should show a Commercial PPO, EPO, or self-funded plan. Baseline Visit completion is what unlocks $0 in-network cost sharing.' },
    { icon: <Ico.Check c={B.teal} s={24} />, title: 'Benefits verified', desc: `We confirm your Curative benefits and any remaining deductible before your ${c.name} video visit.` },
    { icon: <Ico.Video c={B.teal} s={24} />, title: 'Video visit and prescription', desc: `Same-day video with Parth Bhavsar, MD, ${lic.isTelehealthRegistration ? `registered for telehealth practice in ${c.name}` : `licensed in ${c.name}`}. Any prescription goes electronically to your local pharmacy.` },
  ];

  return (
    <div style={{ fontFamily: B.fb, background: B.bg, color: B.navy }}>
      <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <CitableSummaryBlock summary={citableSummary} jsonLd={citableJsonLd} idSuffix={`curative-${c.slug}`} />
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Insurance', href: '/insurance' }, { label: 'Curative', href: '/insurance/curative/' }, { label: c.name }]} />

      {/* HERO */}
      <div style={{ background: `linear-gradient(165deg, ${B.navyDarker} 0%, ${B.navy} 40%, ${B.navyDeep} 100%)`, padding: '56px 24px 64px', position: 'relative', overflow: 'hidden', marginTop: 16 }}>
        <div style={{ maxWidth: 760, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.08)', borderRadius: 100, padding: '8px 16px', marginBottom: 24, border: '1px solid rgba(255,255,255,0.12)' }}>
            <Ico.Shield c={cColor} s={16} />
            <span style={{ fontFamily: B.fb, fontSize: 13, fontWeight: 600, color: '#8FD3EE', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Curative In-Network in {c.name}</span>
          </div>
          <h1 style={{ fontFamily: B.fd, fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 700, color: B.white, lineHeight: 1.15, margin: '0 0 16px' }}>
            Doctors That Take Curative Insurance in {c.name}
          </h1>
          <p data-speakable="true" style={{ fontFamily: B.fb, fontSize: 'clamp(16px, 2.5vw, 19px)', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, margin: '0 0 28px', maxWidth: 620 }}>
            Same-day video visits with Parth Bhavsar, MD, {lic.isTelehealthRegistration ? `registered for telehealth practice in ${c.name}` : `licensed in ${c.name}`}, in-network with Curative Commercial PPO, EPO, and self-funded plans since {c.effectiveDate}.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <a href="https://www.teledirectmd.com/book-online" target="_blank" rel="noopener"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', background: B.accent, color: B.white, borderRadius: B.rs, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>
              <Ico.Cal c={B.white} s={18} /> Book a {c.name} visit
            </a>
            <a href="/insurance/curative/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 24px', background: 'rgba(255,255,255,0.1)', color: B.white, borderRadius: B.rs, fontWeight: 600, fontSize: 15, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>
              All Curative coverage
            </a>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 880, margin: '0 auto', padding: '32px 24px 0' }}>
        {/* AI ANSWER CAPSULE */}
        <AnswerBlock
          question={`Does TeleDirectMD accept Curative insurance in ${c.name}?`}
          answer={capsule}
          color={B.teal}
        />

        {/* STATE CONTEXT */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: B.fd, fontSize: 26, fontWeight: 700, color: B.navy, margin: '0 0 12px' }}>Curative coverage for {c.name} members</h2>
          <p style={{ fontSize: 15, color: B.text, margin: '0 0 14px', lineHeight: 1.75 }}>{c.intro}</p>
          <p style={{ fontSize: 15, color: B.text, margin: '0 0 14px', lineHeight: 1.75 }}>{c.networkPara}</p>
          <p style={{ fontSize: 15, color: B.text, margin: 0, lineHeight: 1.75 }}>{c.localPara}</p>
        </section>

        {/* REGULATORY: Exhibit D addendum states get a materially different block
            from states covered by the base agreement alone. */}
        <section style={{ marginBottom: 40, background: B.white, border: `1px solid ${cColor}22`, borderLeft: `4px solid ${cColor}`, borderRadius: B.r, padding: '24px 28px', boxShadow: B.shadow }}>
          <div style={{ display: 'inline-block', background: curative.colorLight, color: cColor, borderRadius: 100, padding: '4px 12px', fontSize: 12, fontWeight: 700, letterSpacing: '0.03em', marginBottom: 12 }}>
            {c.regulatory.badge}
          </div>
          <h2 style={{ fontFamily: B.fd, fontSize: 22, fontWeight: 700, color: B.navy, margin: '0 0 10px' }}>{c.regulatory.heading}</h2>
          <p style={{ fontSize: 15, color: B.navy, fontWeight: 600, margin: '0 0 14px', lineHeight: 1.7 }}>{c.regulatory.lead}</p>
          {c.regulatory.body.map((para, i) => (
            <p key={i} style={{ fontSize: 15, color: B.text, margin: i === c.regulatory.body.length - 1 ? 0 : '0 0 14px', lineHeight: 1.75 }}>{para}</p>
          ))}
        </section>

        {/* LICENSURE AND VERIFICATION */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: B.fd, fontSize: 22, fontWeight: 700, color: B.navy, margin: '0 0 12px' }}>
            {lic.isTelehealthRegistration ? `Telehealth registration on file in ${c.name}` : `Who you see, and how to verify the ${c.name} license`}
          </h2>
          <p style={{ fontSize: 15, color: B.text, margin: '0 0 16px', lineHeight: 1.75 }}>{c.licensurePara}</p>
          <div style={{ background: B.white, border: `1px solid ${cColor}22`, borderRadius: B.r, padding: '16px 20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
            <div>
              <div style={{ fontSize: 12, color: B.text, textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 700, marginBottom: 4 }}>
                {lic.isTelehealthRegistration ? 'Registration number' : 'License number'}
              </div>
              <div style={{ fontSize: 15, fontWeight: 700, color: B.navy }}>{lic.number}</div>
            </div>
            <div>
              <div style={{ fontSize: 12, color: B.text, textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 700, marginBottom: 4 }}>Issuing board</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: B.navy }}>{lic.board}</div>
            </div>
            {lic.expires && (
              <div>
                <div style={{ fontSize: 12, color: B.text, textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 700, marginBottom: 4 }}>Current through</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: B.navy }}>{lic.expires}</div>
              </div>
            )}
            {lic.verificationUrl && (
              <div>
                <div style={{ fontSize: 12, color: B.text, textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 700, marginBottom: 4 }}>Public registry</div>
                <a href={lic.verificationUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: 15, fontWeight: 700, color: cColor, textDecoration: 'none' }}>
                  Verify with the board
                </a>
              </div>
            )}
          </div>
        </section>

        {/* STATE TELEHEALTH RULES */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: B.fd, fontSize: 22, fontWeight: 700, color: B.navy, margin: '0 0 12px' }}>What {c.name} telehealth law allows during the visit</h2>
          <p style={{ fontSize: 15, color: B.text, margin: '0 0 14px', lineHeight: 1.75 }}>{c.telehealthPara}</p>
          <p style={{ fontSize: 15, color: B.text, margin: 0, lineHeight: 1.75 }}>
            Within those rules Dr. Bhavsar can evaluate you by real-time video and, when clinically appropriate, send a prescription to a {c.name} pharmacy. Controlled substances are never prescribed. If your symptoms need an in-person exam, imaging, or emergency care, we say so during the visit and point you to the right {c.name} facility.
          </p>
        </section>

        {/* CONTRACTED PLANS */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: B.fd, fontSize: 22, fontWeight: 700, color: B.navy, margin: '0 0 8px' }}>Contracted Curative plans in {c.name}</h2>
          <p style={{ fontSize: 14, color: B.text, margin: '0 0 16px', lineHeight: 1.6 }}>
            Participating networks effective {c.effectiveDate}: {c.productLines.join(', ')}.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 10, marginBottom: 16 }}>
            {c.plans.map((p) => (
              <div key={p.name} style={{ background: B.white, border: `1px solid ${cColor}22`, borderLeft: `3px solid ${cColor}`, borderRadius: B.r, padding: '12px 14px' }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: B.navy }}>{p.name}</div>
                <div style={{ fontSize: 12, color: B.text }}>{p.productType}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 13, color: B.text, margin: '0 0 8px', lineHeight: 1.6 }}>
            Not contracted: {c.excludedLines.join(', ')}. If your plan falls outside the contracted networks, the flat $79 self-pay visit is still available.
          </p>
          <p style={{ fontSize: 13, color: B.text, margin: 0, lineHeight: 1.6 }}>{c.planNote}</p>
        </section>

        {/* COST */}
        <CopayCard insurerName="Curative" stateName={c.name} copayData={c.copay} insurerColor={cColor} />

        <section style={{ marginBottom: 40, background: B.white, border: `1px solid ${cColor}22`, borderRadius: B.r, padding: '24px 28px', boxShadow: B.shadow }}>
          <h2 style={{ fontFamily: B.fd, fontSize: 22, fontWeight: 700, color: B.navy, margin: '0 0 12px' }}>The Baseline Visit decides your cost</h2>
          <p style={{ fontSize: 15, color: B.text, margin: '0 0 14px', lineHeight: 1.75 }}>
            Curative members who complete the annual Baseline Visit within 120 days of their plan start date have <strong>$0 copays, $0 deductible, and 0% coinsurance</strong> for in-network care, which includes a video visit with TeleDirectMD in {c.name}.
          </p>
          <p style={{ fontSize: 15, color: B.text, margin: '0 0 14px', lineHeight: 1.75 }}>
            If the Baseline Visit is not complete, your plan deductible applies (for example, $5,000 individual and $10,000 family on the EPO product). Confirm your status with Curative before booking.
          </p>
          <p style={{ fontSize: 15, color: B.text, margin: 0, lineHeight: 1.75 }}>
            You can also skip insurance entirely: TeleDirectMD self-pay is a flat <strong>$79</strong> per video visit, HSA and FSA eligible, with no claim filed.
          </p>
        </section>

        {/* HOW IT WORKS */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: B.fd, fontSize: 26, fontWeight: 700, color: B.navy, margin: '0 0 20px' }}>Using your Curative plan in {c.name}</h2>
          <HowItWorksSteps insurerName="Curative" customSteps={customSteps} />
        </section>

        {/* CONDITIONS */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: B.fd, fontSize: 26, fontWeight: 700, color: B.navy, margin: '0 0 8px' }}>What {c.name} Curative members can be treated for</h2>
          <p style={{ fontSize: 15, color: B.text, margin: '0 0 20px', lineHeight: 1.6 }}>Each link opens the {c.name} clinical page for that condition, with treatment detail and local pharmacy information.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 10 }}>
            {c.conditions.map((cond) => (
              <a key={cond.slug} href={`${c.conditionPrefix}${cond.slug}/`}
                style={{ display: 'block', background: B.white, border: `1px solid ${cColor}22`, borderLeft: `3px solid ${cColor}`, borderRadius: B.r, padding: '12px 14px', textDecoration: 'none', fontSize: 14, fontWeight: 600, color: B.navy }}>
                {cond.label}
              </a>
            ))}
          </div>
          <p style={{ fontSize: 14, color: B.text, margin: '16px 0 0', lineHeight: 1.6 }}>
            You can also see everything we treat on the <a href={`/${c.stateSlug}/`} style={{ color: cColor, fontWeight: 600 }}>{c.name} telehealth page</a>, or compare payers on the <a href="/insurance/" style={{ color: cColor, fontWeight: 600 }}>insurance coverage checker</a>.
          </p>
        </section>

        {/* Sitewide Medicaid + D-SNP exclusion */}
        <MedicaidExclusion headingLevel="h2" idSuffix={`curative-${c.slug}`} />

        {/* FAQ */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: B.fd, fontSize: 26, fontWeight: 700, color: B.navy, margin: '0 0 24px' }}>Curative in {c.name}: questions members ask</h2>
          {c.faqs.map((f, i) => (
            <FAQ key={i} question={f.q} answer={f.a} />
          ))}
        </section>

        <BookCTA
          insurerName="Curative"
          tagline={`Curative Commercial PPO, EPO, and self-funded plans in ${c.name}, verified before your video visit.`}
          subtagline="Or pay $79 flat self-pay (HSA and FSA eligible), with no claim and no copay surprises."
        />

        <CommissionerLink stateCode={c.code} stateName={c.name} />

        <div style={{ marginBottom: 48 }}>
          <InsuranceDisclaimer payerNote={`Curative network status in ${c.name} reflects a national Commercial PPO, EPO, and self-funded contract effective ${c.effectiveDate}, in-network in every state where Dr. Bhavsar holds an active license. Cost sharing depends on your plan and on whether your annual Baseline Visit is complete. Verify benefits with Curative before your visit.`} />
        </div>
      </div>
    </div>
  );
}
