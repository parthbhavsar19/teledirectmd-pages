'use client';
import { B, INSURERS, COPAY_DATA, STATE_PLAN_DETAILS } from '../../../../data/insurance/insuranceConfig';
import { FAQ, BookCTA, HowItWorksSteps, Breadcrumb, InsuranceDisclaimer, AnswerBlock, CopayCard, CommissionerLink } from '../../components/InsuranceShared';
import { Ico } from '../../components/InsuranceIcons';
import { getAggregateRating, getReviewBlock } from '../../../../lib/review-schema';
import { CitableSummaryBlock } from '../../../components/CitableSummary';
import { citableSummaryToJsonLd } from '../../../../lib/citable-summary';
import MedicaidExclusion from '../../../components/MedicaidExclusion';

const curative = INSURERS.curative;
const cColor = curative.color;

// Georgia keeps its hand-written narrative: it is the home state and the only
// state that reaches the network through Curative's Cigna PPO wrap. Every other
// licensed state is composed by buildStateCopy() from that state's own record
// (licensure, issuing board, metros, telehealth rule) so no two pages share the
// same licensure statement, local paragraph, or regulatory note.
const STATE_COPY = {
  GA: {
    conditionPrefix: '/ga/',
    confirmationLine: 'Credentialing was confirmed active on July 24, 2026.',
    intro:
      'Georgia is TeleDirectMD’s home state and the first state activated under the Curative agreement. Parth Bhavsar, MD is board-certified in Family Medicine, licensed to practice in Georgia, and sees Georgia patients by secure video for the same everyday problems you would take to a primary care or urgent care office.',
    networkPara:
      'Georgia members reach the network through Curative’s Cigna Healthcare PPO wrap network arrangement. TeleDirectMD participates through a direct contract with Curative, so your visit is processed as in-network care rather than as an out-of-network claim. The agreement took effect July 7, 2026, and credentialing was confirmed active on July 24, 2026.',
    localPara:
      'Because the visit is virtual, there is no drive into Midtown Atlanta traffic and no waiting room. Georgia patients from Atlanta, Savannah, Augusta, Columbus, Macon, and Athens, as well as rural counties without a nearby urgent care, connect from home or from work. Prescriptions are routed electronically to your local pharmacy, including CVS, Walgreens, Publix, Kroger, and Walmart locations across the state.',
    faqs: [
      {
        q: 'Which doctors take Curative insurance in Georgia?',
        a: 'TeleDirectMD is in-network with Curative in Georgia for Commercial PPO, EPO, and self-funded plans. Visits are with Parth Bhavsar, MD, a board-certified Family Medicine physician licensed in Georgia (NPI 1104323203). Appointments are virtual and usually available the same day.',
      },
      {
        q: 'How do Georgia Curative members access the TeleDirectMD network?',
        a: 'Georgia members access the network through Curative’s Cigna Healthcare PPO wrap network arrangement. TeleDirectMD holds a direct contract with Curative, effective July 7, 2026, so your virtual visit is billed as in-network care. You do not need a referral.',
      },
      {
        q: 'What will a Georgia Curative member pay for a video visit?',
        a: 'Curative members who complete their annual Baseline Visit within 120 days of their plan start date have $0 copays, $0 deductible, and 0% coinsurance for in-network care, including this visit. Members who have not completed the Baseline Visit pay toward their plan deductible, commonly $5,000 individual and $10,000 family on the EPO product. A flat $79 self-pay visit is also available if you prefer not to use insurance.',
      },
      {
        q: 'Is Parth Bhavsar, MD licensed in Georgia?',
        a: 'Yes. Dr. Bhavsar holds an active Georgia medical license and is board-certified in Family Medicine. Georgia is TeleDirectMD’s home state, and Georgia telehealth rules allow a licensed physician to evaluate and prescribe for established and new adult patients by real-time video when clinically appropriate.',
      },
      {
        q: 'What can a Georgia Curative member be treated for online?',
        a: 'Common adult conditions such as urinary tract infections, sinus infections, sore throat, ear pain, pink eye, flu, cold sores, rashes, and seasonal allergies, plus refills for hypertension, hyperlipidemia, and hypothyroidism. If your symptoms need an in-person exam, imaging, or emergency care, we will say so during the visit and point you to the right Georgia facility.',
      },
      {
        q: 'Does TeleDirectMD accept Georgia Medicaid or Medicare plans through Curative?',
        a: 'No. The Curative agreement covers Commercial PPO, EPO, and self-funded plans only. TeleDirectMD is not in-network with Georgia Medicaid, Managed Medicaid, PeachCare for Kids (CHIP), or Medicare-Medicaid plans, and does not bill them in any state. The $79 flat self-pay visit remains available.',
      },
    ],
  },
};

function buildStateCopy(state) {
  const name = state.name;
  const metros = state.majorMetros || [];
  const metroList = metros.length > 1
    ? `${metros.slice(0, -1).join(', ')}, and ${metros[metros.length - 1]}`
    : metros[0] || name;

  return {
    conditionPrefix: `/${state.code.toLowerCase()}/`,
    confirmationLine: `Curative Network Contracting confirmed the national scope of this agreement in writing on ${state.credentialingConfirmed}.`,
    intro:
      `${state.licenseNote} Dr. Bhavsar sees ${name} patients by secure video for the same everyday problems you would ` +
      `take to a primary care or urgent care office, and ${name} is covered under the national Curative agreement rather than ` +
      `a state-by-state rollout.`,
    networkPara:
      `${state.networkAccessNote} The agreement took effect ${state.effectiveDate}, and Curative Network Contracting confirmed ` +
      `in writing on ${state.credentialingConfirmed} that TeleDirectMD is in-network for Curative members in every state where ` +
      `Dr. Bhavsar holds an active license, ${name} included.`,
    localPara:
      `Because the visit is virtual, there is no drive across ${name} and no waiting room. Members connect from home or from work ` +
      `in ${metroList}${state.code === 'DC' ? '' : ', and from rural counties without a nearby urgent care'}. ` +
      `Prescriptions are routed electronically to your local pharmacy.${state.telehealthNote ? ` ${state.telehealthNote}` : ''}`,
    faqs: [
      {
        q: `Which doctors take Curative insurance in ${name}?`,
        a: `TeleDirectMD is in-network with Curative in ${name} for Commercial PPO, EPO, and self-funded plans. Visits are with Parth Bhavsar, MD, a board-certified Family Medicine physician licensed in ${name} (NPI 1104323203). Appointments are virtual and usually available the same day.`,
      },
      {
        q: `How do ${name} Curative members access the TeleDirectMD network?`,
        a: `${state.networkAccessNote} The contract is effective ${state.effectiveDate}, so your virtual visit is billed as in-network care. You do not need a referral.`,
      },
      {
        q: `What will a ${name} Curative member pay for a video visit?`,
        a: 'Curative members who complete their annual Baseline Visit within 120 days of their plan start date have $0 copays, $0 deductible, and 0% coinsurance for in-network care, including this visit. Members who have not completed the Baseline Visit pay toward their plan deductible, commonly $5,000 individual and $10,000 family on the EPO product. A flat $79 self-pay visit is also available if you prefer not to use insurance.',
      },
      {
        q: `Is Parth Bhavsar, MD licensed in ${name}?`,
        a: `Yes. ${state.licenseNote} Coverage under the Curative agreement follows that license: TeleDirectMD is in-network for Curative members in every state where Dr. Bhavsar holds an active license.`,
      },
      {
        q: `What can a ${name} Curative member be treated for online?`,
        a: `Common adult conditions such as urinary tract infections, sinus infections, sore throat, ear pain, pink eye, flu, cold sores, rashes, and seasonal allergies, plus refills for hypertension, hyperlipidemia, and hypothyroidism. If your symptoms need an in-person exam, imaging, or emergency care, we will say so during the visit and point you to the right ${name} facility.`,
      },
      {
        q: `Does TeleDirectMD accept ${name} Medicaid or Medicare plans through Curative?`,
        a: `No. The Curative agreement covers Commercial PPO, EPO, and self-funded plans only. TeleDirectMD is not in-network with ${name} Medicaid, Managed Medicaid, CHIP, or Medicare-Medicaid plans, and does not bill them in any state. The $79 flat self-pay visit remains available.`,
      },
    ],
  };
}

const CONDITIONS = [
  { slug: 'uti-treatment-online', label: 'UTI (Urinary Tract Infection)' },
  { slug: 'sinus-infection-treatment-online', label: 'Sinus Infection' },
  { slug: 'sore-throat-treatment-online', label: 'Sore Throat' },
  { slug: 'ear-pain-treatment-online', label: 'Ear Infection and Ear Pain' },
  { slug: 'pink-eye-treatment-online', label: 'Pink Eye (Conjunctivitis)' },
  { slug: 'influenza-treatment-online', label: 'Flu and Influenza' },
  { slug: 'yeast-infection-treatment-online', label: 'Yeast Infection' },
  { slug: 'bv-treatment-online', label: 'BV (Bacterial Vaginosis)' },
  { slug: 'shingles-treatment-online', label: 'Shingles' },
  { slug: 'seasonal-allergies-treatment-online', label: 'Seasonal Allergies' },
  { slug: 'hypertension-refills-online', label: 'Hypertension Refills' },
  { slug: 'hyperlipidemia-refills-online', label: 'Hyperlipidemia Refills' },
];

export default function CurativeStateClient({ state }) {
  const copy = STATE_COPY[state.code] || buildStateCopy(state);
  const planDetail = STATE_PLAN_DETAILS.curative?.[state.code];
  const copay = COPAY_DATA.curative?.[state.code];
  const pageUrl = `https://teledirectmd.com/insurance/curative/${state.slug}/`;

  const capsule = `Yes. TeleDirectMD is in-network with Curative Commercial PPO, EPO, and self-funded plans in ${state.name}, effective ${state.effectiveDate}. ${state.name} members who have completed their annual Baseline Visit typically pay $0 for a same-day video visit with Parth Bhavsar, MD. A flat $79 self-pay option is always available.`;

  const citableSummary = {
    question: `Which doctors take Curative insurance in ${state.name}?`,
    answerHtml:
      `TeleDirectMD is in-network with Curative in ${state.name} for Commercial PPO, EPO, and self-funded plans (EPO Value, EPO (PPOx), PPO (PPO+), and PPO Max), effective ${state.effectiveDate}. ` +
      `Visits are with Parth Bhavsar, MD (NPI 1104323203), board-certified in Family Medicine and licensed in ${state.name}. ` +
      `${state.networkAccessNote} ` +
      'Curative members who complete their annual Baseline Visit within 120 days of their plan start date have $0 copays, $0 deductible, and 0% coinsurance for in-network care, including virtual visits; members who have not completed it are subject to their plan deductible. ' +
      'TeleDirectMD is not in-network with Medicaid, Managed Medicaid, CHIP, or Medicare-Medicaid plans. Self-pay alternative: $79 flat, HSA and FSA eligible.',
    answerText: '',
    emitAs: 'QAPage',
  };
  citableSummary.answerText = citableSummary.answerHtml.replace(/<[^>]+>/g, '');
  const citableJsonLd = citableSummaryToJsonLd(citableSummary, { pageUrl });

  const faqs = copy?.faqs || [];

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalBusiness',
        '@id': `${pageUrl}#business`,
        'name': `TeleDirectMD Curative coverage in ${state.name}`,
        'url': pageUrl,
        'areaServed': { '@type': 'AdministrativeArea', 'name': state.name },
        'aggregateRating': getAggregateRating(),
        'acceptedInsurance': (planDetail?.plans || []).map((p) => ({
          '@type': 'HealthInsurancePlan',
          'name': p.name,
          'description': `Curative ${p.productType} plan, in-network with TeleDirectMD in ${state.name}.`,
          'validFrom': planDetail.effectiveDateISO,
        })),
      },
      {
        '@type': 'Physician',
        '@id': `${pageUrl}#physician`,
        'name': 'Parth Bhavsar, MD',
        'medicalSpecialty': 'Family Medicine',
        'identifier': [{ '@type': 'PropertyValue', 'name': 'NPI', 'value': '1104323203' }],
        'areaServed': { '@type': 'AdministrativeArea', 'name': state.name },
        'sameAs': ['https://npiregistry.cms.hhs.gov/provider-view/1104323203'],
        ...getReviewBlock(),
      },
      ...(faqs.length > 0 ? [{
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        'mainEntity': faqs.map((f) => ({
          '@type': 'Question',
          'name': f.q,
          'acceptedAnswer': { '@type': 'Answer', 'text': f.a.replace(/<[^>]+>/g, '') },
        })),
      }] : []),
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        'url': pageUrl,
        'name': `Doctors That Take Curative Insurance in ${state.name} | TeleDirectMD`,
        'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['[data-speakable]'] },
      },
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://teledirectmd.com' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Insurance', 'item': 'https://teledirectmd.com/insurance' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Curative', 'item': 'https://teledirectmd.com/insurance/curative/' },
          { '@type': 'ListItem', 'position': 4, 'name': state.name, 'item': pageUrl },
        ],
      },
    ],
  };

  const customSteps = [
    { icon: <Ico.Cal c={B.teal} s={24} />, title: 'Confirm plan and Baseline', desc: `Your Curative card should show a Commercial PPO, EPO, or self-funded plan. Baseline Visit completion is what unlocks $0 in-network cost sharing.` },
    { icon: <Ico.Check c={B.teal} s={24} />, title: 'Benefits verified', desc: `We confirm your Curative benefits and any remaining deductible before your ${state.name} video visit.` },
    { icon: <Ico.Video c={B.teal} s={24} />, title: 'Video visit and prescription', desc: `Same-day video with Parth Bhavsar, MD, licensed in ${state.name}. Any prescription goes electronically to your local pharmacy.` },
  ];

  return (
    <div style={{ fontFamily: B.fb, background: B.bg, color: B.navy }}>
      <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <CitableSummaryBlock summary={citableSummary} jsonLd={citableJsonLd} idSuffix={`curative-${state.slug}`} />
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Insurance', href: '/insurance' }, { label: 'Curative', href: '/insurance/curative/' }, { label: state.name }]} />

      {/* HERO */}
      <div style={{ background: `linear-gradient(165deg, ${B.navyDarker} 0%, ${B.navy} 40%, ${B.navyDeep} 100%)`, padding: '56px 24px 64px', position: 'relative', overflow: 'hidden', marginTop: 16 }}>
        <div style={{ maxWidth: 760, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.08)', borderRadius: 100, padding: '8px 16px', marginBottom: 24, border: '1px solid rgba(255,255,255,0.12)' }}>
            <Ico.Shield c={cColor} s={16} />
            <span style={{ fontFamily: B.fb, fontSize: 13, fontWeight: 600, color: '#8FD3EE', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Curative In-Network in {state.name}</span>
          </div>
          <h1 style={{ fontFamily: B.fd, fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 700, color: B.white, lineHeight: 1.15, margin: '0 0 16px' }}>
            Doctors That Take Curative Insurance in {state.name}
          </h1>
          <p data-speakable="true" style={{ fontFamily: B.fb, fontSize: 'clamp(16px, 2.5vw, 19px)', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, margin: '0 0 28px', maxWidth: 620 }}>
            Same-day video visits with Parth Bhavsar, MD, licensed in {state.name}, in-network with Curative Commercial PPO, EPO, and self-funded plans since {state.effectiveDate}.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <a href="https://www.teledirectmd.com/book-online" target="_blank" rel="noopener"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', background: B.accent, color: B.white, borderRadius: B.rs, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>
              <Ico.Cal c={B.white} s={18} /> Book a {state.name} visit
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
          question={`Does TeleDirectMD accept Curative insurance in ${state.name}?`}
          answer={capsule}
          color={B.teal}
        />

        {/* STATE CONTEXT */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: B.fd, fontSize: 26, fontWeight: 700, color: B.navy, margin: '0 0 12px' }}>Curative coverage for {state.name} members</h2>
          <p style={{ fontSize: 15, color: B.text, margin: '0 0 14px', lineHeight: 1.75 }}>{copy?.intro}</p>
          <p style={{ fontSize: 15, color: B.text, margin: '0 0 14px', lineHeight: 1.75 }}>{copy?.networkPara}</p>
          <p style={{ fontSize: 15, color: B.text, margin: 0, lineHeight: 1.75 }}>{copy?.localPara}</p>
        </section>

        {/* NETWORK ACCESS CALLOUT */}
        <div style={{ background: curative.colorLight, border: `1px solid ${cColor}33`, borderRadius: B.r, padding: '20px 24px', marginBottom: 40, display: 'flex', gap: 14, alignItems: 'flex-start' }}>
          <Ico.Shield c={cColor} s={22} />
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, color: B.navy, marginBottom: 6 }}>How {state.name} members reach the network</div>
            <p style={{ fontSize: 14, color: B.text, margin: 0, lineHeight: 1.65 }}>{state.networkAccessNote} {copy.confirmationLine}</p>
          </div>
        </div>

        {/* CONTRACTED PLANS */}
        {planDetail && (
          <section style={{ marginBottom: 40 }}>
            <h2 style={{ fontFamily: B.fd, fontSize: 22, fontWeight: 700, color: B.navy, margin: '0 0 8px' }}>Contracted Curative plans in {state.name}</h2>
            <p style={{ fontSize: 14, color: B.text, margin: '0 0 16px', lineHeight: 1.6 }}>
              Participating networks effective {planDetail.effectiveDate}: {planDetail.productLines.join(', ')}.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 10, marginBottom: 16 }}>
              {planDetail.plans.map((p) => (
                <div key={p.name} style={{ background: B.white, border: `1px solid ${cColor}22`, borderLeft: `3px solid ${cColor}`, borderRadius: B.r, padding: '12px 14px' }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: B.navy }}>{p.name}</div>
                  <div style={{ fontSize: 12, color: B.text }}>{p.productType}</div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 13, color: B.text, margin: 0, lineHeight: 1.6 }}>
              Not contracted: {planDetail.excludedLines.join(', ')}. If your plan falls outside the contracted networks, the flat $79 self-pay visit is still available.
            </p>
          </section>
        )}

        {/* COST */}
        <CopayCard insurerName="Curative" stateName={state.name} copayData={copay} insurerColor={cColor} />

        <section style={{ marginBottom: 40, background: B.white, border: `1px solid ${cColor}22`, borderRadius: B.r, padding: '24px 28px', boxShadow: B.shadow }}>
          <h2 style={{ fontFamily: B.fd, fontSize: 22, fontWeight: 700, color: B.navy, margin: '0 0 12px' }}>The Baseline Visit decides your cost</h2>
          <p style={{ fontSize: 15, color: B.text, margin: '0 0 14px', lineHeight: 1.75 }}>
            Curative members who complete the annual Baseline Visit within 120 days of their plan start date have <strong>$0 copays, $0 deductible, and 0% coinsurance</strong> for in-network care, which includes a video visit with TeleDirectMD in {state.name}.
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
          <h2 style={{ fontFamily: B.fd, fontSize: 26, fontWeight: 700, color: B.navy, margin: '0 0 20px' }}>Using your Curative plan in {state.name}</h2>
          <HowItWorksSteps insurerName="Curative" customSteps={customSteps} />
        </section>

        {/* CONDITIONS */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: B.fd, fontSize: 26, fontWeight: 700, color: B.navy, margin: '0 0 8px' }}>What {state.name} Curative members can be treated for</h2>
          <p style={{ fontSize: 15, color: B.text, margin: '0 0 20px', lineHeight: 1.6 }}>Each link opens the {state.name} clinical page for that condition, with treatment detail and local pharmacy information.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 10 }}>
            {CONDITIONS.map((c) => (
              <a key={c.slug} href={`${copy?.conditionPrefix || '/'}${c.slug}/`}
                style={{ display: 'block', background: B.white, border: `1px solid ${cColor}22`, borderLeft: `3px solid ${cColor}`, borderRadius: B.r, padding: '12px 14px', textDecoration: 'none', fontSize: 14, fontWeight: 600, color: B.navy }}>
                {c.label}
              </a>
            ))}
          </div>
        </section>

        {/* Sitewide Medicaid + D-SNP exclusion */}
        <MedicaidExclusion headingLevel="h2" idSuffix={`curative-${state.slug}`} />

        {/* FAQ */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: B.fd, fontSize: 26, fontWeight: 700, color: B.navy, margin: '0 0 24px' }}>Curative in {state.name}: questions members ask</h2>
          {faqs.map((f, i) => (
            <FAQ key={i} question={f.q} answer={f.a} />
          ))}
        </section>

        <BookCTA
          insurerName="Curative"
          tagline={`Curative Commercial PPO, EPO, and self-funded plans in ${state.name}, verified before your video visit.`}
          subtagline="Or pay $79 flat self-pay (HSA and FSA eligible), with no claim and no copay surprises."
        />

        <CommissionerLink stateCode={state.code} stateName={state.name} />

        <div style={{ marginBottom: 48 }}>
          <InsuranceDisclaimer payerNote={`Curative network status in ${state.name} reflects our national Commercial PPO, EPO, and self-funded contract effective ${state.effectiveDate}: TeleDirectMD is in-network for Curative members in every state where Dr. Bhavsar holds an active license, per written confirmation from Curative Network Contracting (07/26/2026). Cost sharing depends on your plan and on whether your annual Baseline Visit is complete. Verify benefits with Curative before your visit.`} />
        </div>
      </div>
    </div>
  );
}
