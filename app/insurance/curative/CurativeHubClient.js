'use client';
import { B, INSURERS, EXHIBIT_D_STATES, CURATIVE_CONTRACT, CURATIVE_PLAN_DETAIL } from '../../../data/insurance/insuranceConfig';
import { FAQ, BookCTA, HowItWorksSteps, Breadcrumb, InsuranceDisclaimer, AnswerBlock } from '../components/InsuranceShared';
import { Ico } from '../components/InsuranceIcons';
import { getAggregateRating, getReviewBlock } from '../../../lib/review-schema';
import { CitableSummaryBlock } from '../../components/CitableSummary';
import { summarizeInsurerHub, citableSummaryToJsonLd } from '../../../lib/citable-summary';
import MedicaidExclusion from '../../components/MedicaidExclusion';

// Curative is an employer-sponsored health plan. TeleDirectMD contracts directly
// with Curative; the participating networks per contract Exhibit C are Commercial
// PPO, EPO, and Self-Funded plans.
//
// The agreement is national. Curative Network Contracting confirmed in writing on
// 2026-07-26 that TeleDirectMD is in-network for Curative members in every state
// where Dr. Bhavsar holds an active license. The state roster arrives as a prop,
// computed server-side by lib/curative-content.js getCurativeRoster().

const curative = INSURERS.curative;
const cColor = curative.color;
const PAGE_URL = 'https://teledirectmd.com/insurance/curative/';

const PLANS = CURATIVE_PLAN_DETAIL.plans;

function curativeFaqs(stateCount, addendumCount) {
  return [
  {
    q: 'Does Curative insurance cover telehealth visits at TeleDirectMD?',
    a: 'Yes. TeleDirectMD is in-network with Curative for Commercial PPO, EPO, and self-funded plans under an agreement effective July 7, 2026. Virtual visits are billed to Curative as in-network care using standard office visit codes (CPT 99213 and 99214). The agreement is national: TeleDirectMD is in-network for Curative members in every state where Parth Bhavsar, MD holds an active license, currently ' + stateCount + ' states.',
  },
  {
    q: 'Which Curative plans are in-network with TeleDirectMD?',
    a: 'The participating networks are Curative Commercial PPO, Commercial EPO, and Self-Funded plans. In member-facing terms, that covers the EPO Value, EPO (PPOx), PPO (PPO+), and PPO Max products. If your Curative member ID card shows one of those plan names, TeleDirectMD is in-network for your virtual visit.',
  },
  {
    q: 'Do I need to complete my Baseline Visit before using my Curative benefits?',
    a: 'Curative members who complete their annual Baseline Visit within 120 days of their plan start date have $0 copays, $0 deductible, and 0% coinsurance for in-network care, including virtual visits. Members who have not completed the Baseline Visit are subject to their plan deductible, which on the EPO product is commonly $5,000 individual and $10,000 family. Your Baseline Visit status is the single biggest factor in what you pay, so check it with Curative before you book.',
  },
  {
    q: 'What does an online doctor visit cost with Curative?',
    a: 'If you have completed your Baseline Visit, most Curative members pay $0 for an in-network virtual visit with TeleDirectMD. If you have not completed it, the visit applies to your plan deductible at the contracted rate. TeleDirectMD also offers a flat $79 self-pay visit (HSA and FSA eligible) in every state we serve, which some members prefer when a deductible has not been met.',
  },
  {
    q: 'In how many states is TeleDirectMD in-network with Curative?',
    a: 'TeleDirectMD is in-network with Curative in ' + stateCount + ' states. The provider agreement is national rather than state-by-state, so it applies in every state where Parth Bhavsar, MD holds an active license. ' + CURATIVE_CONTRACT.source + ' confirmed that scope in writing on ' + CURATIVE_CONTRACT.confirmedDate + '. Georgia was the first state activated, with credentialing confirmed active on July 24, 2026.',
  },
  {
    q: 'What is Exhibit D, and does it limit where I can use my Curative plan?',
    a: 'Exhibit D of the provider agreement attaches a state regulatory addendum for ' + addendumCount + ' jurisdictions, conforming the contract to those states\u2019 insurance codes on matters such as claim handling, member appeals, and continuity of care. It is an addendum, not a limitation. States outside Exhibit D are covered by the base agreement directly, with no state rider required.',
  },
  {
    q: 'Can I use my Curative plan for virtual urgent care?',
    a: 'Yes, for the adult conditions we treat by video, such as urinary tract infections, sinus infections, sore throat, pink eye, flu, rashes, and chronic medication refills. Visits are same day in most cases and prescriptions are sent electronically to your local pharmacy. If your symptoms need hands-on evaluation or emergency care, we will tell you and direct you to the right in-person setting.',
  },
  {
    q: 'Does TeleDirectMD accept Curative Medicaid, Medicare Advantage, or HMO plans?',
    a: 'No. The Curative contract covers Commercial PPO, EPO, and self-funded plans only. TeleDirectMD is not in-network with any state Medicaid, Managed Medicaid, CHIP, or Medicare-Medicaid plan, in any state. If your plan is outside the contracted networks, the $79 flat self-pay visit is still available.',
  },
  {
    q: 'What if my state is not on the Curative list above?',
    a: 'Network participation follows licensure, so a state appears above once Dr. Bhavsar holds an active license there and the state is not positioned as self-pay only. States not listed are ones where licensure is being renewed or where TeleDirectMD deliberately operates self-pay only. The $79 flat self-pay visit is available in every state where TeleDirectMD is licensed, whether or not insurance is billed there.',
  },
  ];
}

const CURATIVE_CONDITIONS = [
  { slug: 'uti-treatment-online', label: 'UTI (Urinary Tract Infection)' },
  { slug: 'sinus-infection-treatment-online', label: 'Sinus Infection' },
  { slug: 'sore-throat-treatment-online', label: 'Sore Throat' },
  { slug: 'ear-pain-treatment-online', label: 'Ear Infection and Ear Pain' },
  { slug: 'pink-eye-treatment-online', label: 'Pink Eye (Conjunctivitis)' },
  { slug: 'influenza-treatment-online', label: 'Flu and Influenza' },
  { slug: 'common-cold-treatment-online', label: 'Common Cold' },
  { slug: 'yeast-infection-treatment-online', label: 'Yeast Infection' },
  { slug: 'bv-treatment-online', label: 'BV (Bacterial Vaginosis)' },
  { slug: 'cold-sore-treatment-online', label: 'Cold Sores' },
  { slug: 'shingles-treatment-online', label: 'Shingles' },
  { slug: 'seasonal-allergies-treatment-online', label: 'Seasonal Allergies' },
  { slug: 'hypertension-refills-online', label: 'Hypertension Refills' },
  { slug: 'hyperlipidemia-refills-online', label: 'Hyperlipidemia Refills' },
  { slug: 'hypothyroidism-refills-online', label: 'Hypothyroidism Refills' },
];

function buildSchema(faqs, stateCount) {
  return {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalOrganization',
      '@id': 'https://teledirectmd.com/#organization',
      'name': 'TeleDirectMD',
      'url': 'https://teledirectmd.com',
      'description': `Physician-led telemedicine practice in-network with Curative Commercial PPO, EPO, and self-funded plans in ${stateCount} states under a national provider agreement.`,
      'aggregateRating': getAggregateRating(),
    },
    {
      '@type': 'Physician',
      '@id': 'https://teledirectmd.com/#physician',
      'name': 'Parth Bhavsar, MD',
      'identifier': [{ '@type': 'PropertyValue', 'name': 'NPI', 'value': '1104323203' }],
      'medicalSpecialty': 'Family Medicine',
      'acceptsInsurance': PLANS.map((p) => ({
        '@type': 'HealthInsurancePlan',
        'name': p.name,
        'description': `Curative ${p.productType} plan, in-network with TeleDirectMD in ${stateCount} states.`,
        'validFrom': CURATIVE_CONTRACT.effectiveDateISO,
      })),
      'sameAs': ['https://npiregistry.cms.hhs.gov/provider-view/1104323203'],
      ...getReviewBlock(),
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      'mainEntity': faqs.map((f) => ({
        '@type': 'Question',
        'name': f.q,
        'acceptedAnswer': { '@type': 'Answer', 'text': f.a.replace(/<[^>]+>/g, '') },
      })),
    },
    {
      '@type': 'WebPage',
      '@id': `${PAGE_URL}#webpage`,
      'url': PAGE_URL,
      'name': 'Online Doctor That Accepts Curative Insurance | TeleDirectMD',
      'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['[data-speakable]'] },
    },
    {
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://teledirectmd.com' },
        { '@type': 'ListItem', 'position': 2, 'name': 'Insurance', 'item': 'https://teledirectmd.com/insurance' },
        { '@type': 'ListItem', 'position': 3, 'name': 'Curative', 'item': PAGE_URL },
      ],
    },
  ],
  };
}

export default function CurativeHubClient({ roster }) {
  const stateCount = roster.length;
  const addendumStates = roster.filter((s) => s.isExhibitD);
  const baseStates = roster.filter((s) => !s.isExhibitD);
  const faqs = curativeFaqs(stateCount, EXHIBIT_D_STATES.length);
  const schema = buildSchema(faqs, stateCount);
  const customSteps = [
    { icon: <Ico.Cal c={B.teal} s={24} />, title: 'Check plan and Baseline', desc: 'Commercial PPO, EPO, or self-funded. Baseline Visit completion is what unlocks $0 in-network cost sharing.' },
    { icon: <Ico.Check c={B.teal} s={24} />, title: 'Benefits verified', desc: 'We confirm your Curative benefits and any remaining deductible before the video call.' },
    { icon: <Ico.Video c={B.teal} s={24} />, title: 'Video visit and prescription', desc: 'Same-day video with Parth Bhavsar, MD. Any prescription is routed electronically to your pharmacy.' },
  ];

  const citableSummary = summarizeInsurerHub({
    insurerName: 'Curative',
    stateCount,
    stateList: roster.map((s) => s.name),
    planTypes: 'Commercial PPO, EPO, and self-funded',
    payerSpecificCopy:
      'Curative is an employer-sponsored health plan. The participating networks under the TeleDirectMD agreement, effective July 7, 2026, are Commercial PPO, EPO, and Self-Funded plans, covering the EPO Value, EPO (PPOx), PPO (PPO+), and PPO Max products. ' +
      'Curative members who complete their annual Baseline Visit within 120 days of their plan start date have $0 copays, $0 deductible, and 0% coinsurance for in-network care, including virtual visits. Members who have not completed the Baseline Visit are subject to their plan deductible (for example, $5,000 individual and $10,000 family on the EPO product). ' +
      `The agreement is national rather than state-by-state. ${CURATIVE_CONTRACT.source} confirmed in writing on ${CURATIVE_CONTRACT.confirmedDate} that TeleDirectMD is in-network for Curative members in every state where Parth Bhavsar, MD holds an active license. Exhibit D of the agreement attaches a state regulatory addendum for ${EXHIBIT_D_STATES.length} jurisdictions; it conforms the contract to those states' insurance codes and does not limit its reach. Georgia members additionally reach the network through Curative's Cigna Healthcare PPO wrap arrangement. ` +
      'TeleDirectMD is not in-network with Medicaid, Managed Medicaid, CHIP, or Medicare-Medicaid plans in any state. Self-pay alternative: $79 flat, HSA and FSA eligible.',
  });
  // emitAs QAPage so this page carries exactly one FAQPage node (the main graph above).
  citableSummary.emitAs = 'QAPage';
  const citableJsonLd = citableSummaryToJsonLd(citableSummary, { pageUrl: PAGE_URL });

  return (
    <div style={{ fontFamily: B.fb, background: B.bg, color: B.navy }}>
      <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <CitableSummaryBlock summary={citableSummary} jsonLd={citableJsonLd} idSuffix="curative-hub" />
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Insurance', href: '/insurance' }, { label: 'Curative' }]} />

      {/* HERO */}
      <div style={{ background: `linear-gradient(165deg, ${B.navyDarker} 0%, ${B.navy} 40%, ${B.navyDeep} 100%)`, padding: '56px 24px 64px', position: 'relative', overflow: 'hidden', marginTop: 16 }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.04, backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div style={{ maxWidth: 760, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.08)', borderRadius: 100, padding: '8px 16px', marginBottom: 24, border: '1px solid rgba(255,255,255,0.12)' }}>
            <Ico.Shield c={cColor} s={16} />
            <span style={{ fontFamily: B.fb, fontSize: 13, fontWeight: 600, color: '#8FD3EE', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Curative In-Network</span>
          </div>
          <h1 style={{ fontFamily: B.fd, fontSize: 'clamp(30px, 5vw, 46px)', fontWeight: 700, color: B.white, lineHeight: 1.15, margin: '0 0 16px' }}>
            Online Doctor Visits Covered<br />by Curative
          </h1>
          <p data-speakable="true" style={{ fontFamily: B.fb, fontSize: 'clamp(16px, 2.5vw, 19px)', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, margin: '0 0 28px', maxWidth: 600 }}>
            TeleDirectMD is in-network with Curative Commercial PPO, EPO, and self-funded plans in {stateCount} states, effective July 7, 2026. See Parth Bhavsar, MD by secure video, usually the same day.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <a href="https://www.teledirectmd.com/book-online" target="_blank" rel="noopener"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', background: B.accent, color: B.white, borderRadius: B.rs, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>
              <Ico.Cal c={B.white} s={18} /> Book with Curative
            </a>
            <a href="#curative-states" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 24px', background: 'rgba(255,255,255,0.1)', color: B.white, borderRadius: B.rs, fontWeight: 600, fontSize: 15, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>
              Find your state
            </a>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ height: 32 }} />

        {/* AI ANSWER CAPSULE */}
        <AnswerBlock
          question="Does TeleDirectMD accept Curative insurance?"
          answer={`Yes. TeleDirectMD is in-network with Curative Commercial PPO, EPO, and self-funded plans in ${stateCount} states, effective July 7, 2026. The provider agreement is national, so it applies in every state where Parth Bhavsar, MD holds an active license. Curative members who have completed their annual Baseline Visit pay $0 for a virtual visit with a board-certified physician. A $79 flat self-pay option is available in every state we serve.`}
          color={B.teal}
        />

        {/* WHICH PLANS */}
        <section style={{ marginBottom: 48 }}>
          <div style={{ background: curative.colorLight, border: `1px solid ${cColor}33`, borderRadius: B.r, padding: '20px 24px', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
            <Ico.Shield c={cColor} s={22} />
            <div>
              <h2 style={{ fontFamily: B.fd, fontSize: 20, fontWeight: 700, color: B.navy, margin: '0 0 8px' }}>Which Curative plans are in-network?</h2>
              <p style={{ fontSize: 14, color: B.text, margin: '0 0 12px', lineHeight: 1.6 }}>
                The participating networks under our Curative agreement are <strong>Commercial PPO</strong>, <strong>Commercial EPO</strong>, and <strong>Self-Funded</strong> plans. In member-facing terms, those are the plans below.
              </p>
              <ul style={{ margin: '0 0 12px', paddingLeft: 20, fontSize: 14, color: B.text, lineHeight: 1.8 }}>
                {PLANS.map((p) => (
                  <li key={p.name}><strong>{p.name}</strong> ({p.productType})</li>
                ))}
              </ul>
              <p style={{ fontSize: 14, color: B.text, margin: 0, lineHeight: 1.6 }}>
                Plans outside those networks, including Medicaid, Managed Medicaid, CHIP, Medicare-Medicaid, Medicare Advantage, and HMO products, are not in-network. The $79 flat self-pay visit is available either way.
              </p>
            </div>
          </div>
        </section>

        {/* COST */}
        <section style={{ marginBottom: 48, background: B.white, border: `1px solid ${cColor}22`, borderRadius: B.r, padding: '28px', boxShadow: B.shadow }}>
          <h2 style={{ fontFamily: B.fd, fontSize: 24, fontWeight: 700, color: B.navy, margin: '0 0 16px' }}>What will I pay with Curative?</h2>
          <p style={{ fontSize: 15, color: B.text, margin: '0 0 16px', lineHeight: 1.7 }}>
            Curative&rsquo;s plan design turns on the annual <strong>Baseline Visit</strong>. Members who complete their Baseline Visit within 120 days of their plan start date have <strong>$0 copays, $0 deductible, and 0% coinsurance</strong> for in-network care, and that includes a virtual visit with TeleDirectMD.
          </p>
          <p style={{ fontSize: 15, color: B.text, margin: '0 0 16px', lineHeight: 1.7 }}>
            Members who have <strong>not</strong> completed the Baseline Visit are subject to their plan deductible. On the EPO product that is commonly $5,000 individual and $10,000 family. If you are unsure of your status, check with Curative before you book so you know what to expect.
          </p>
          <p style={{ fontSize: 15, color: B.text, margin: '0 0 20px', lineHeight: 1.7 }}>
            Prefer not to use insurance? The TeleDirectMD self-pay rate is a flat <strong>$79</strong> for the video visit, HSA and FSA eligible, with no claim filed. Prescriptions, if appropriate, are paid separately at your pharmacy.
          </p>
          <div style={{ background: '#F3FAFB', border: '1px solid #DDE3E6', borderRadius: 18, padding: '18px 22px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
            <p style={{ margin: 0, fontSize: 14, color: '#12323A' }}>Not sure which route is cheaper for you? Compare insurance and self-pay side by side.</p>
            <a href="/insurance/" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '10px 18px', background: '#006B73', color: '#fff', borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: 'none', whiteSpace: 'nowrap' }}>Compare options</a>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: B.fd, fontSize: 26, fontWeight: 700, color: B.navy, margin: '0 0 8px' }}>How it works with Curative</h2>
          <p style={{ fontSize: 15, color: B.text, margin: '0 0 24px', lineHeight: 1.6 }}>From booking to prescription, a Curative-covered visit with Parth Bhavsar, MD usually takes under 30 minutes end to end.</p>
          <HowItWorksSteps insurerName="Curative" customSteps={customSteps} />
        </section>

        {/* STATES */}
        <section id="curative-states" style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: B.fd, fontSize: 26, fontWeight: 700, color: B.navy, margin: '0 0 8px' }}>Where Curative coverage is live</h2>
          <p style={{ fontSize: 15, color: B.text, margin: '0 0 12px', lineHeight: 1.6 }}>
            The provider agreement is national, so Curative coverage follows licensure: TeleDirectMD is in-network in all {stateCount} states where Parth Bhavsar, MD holds an active license. {CURATIVE_CONTRACT.source} confirmed that scope in writing on {CURATIVE_CONTRACT.confirmedDate}.
          </p>
          <p style={{ fontSize: 15, color: B.text, margin: '0 0 24px', lineHeight: 1.6 }}>
            Each state page carries that state&rsquo;s licensure record, its telehealth statute, and how the contract applies there. The {addendumStates.length} jurisdictions below carry a state regulatory addendum under Exhibit D of the agreement; the rest are covered by the base contract with no state rider required.
          </p>

          <h3 style={{ fontFamily: B.fd, fontSize: 19, fontWeight: 700, color: B.navy, margin: '0 0 4px' }}>Exhibit D jurisdictions ({addendumStates.length})</h3>
          <p style={{ fontSize: 14, color: B.text, margin: '0 0 14px', lineHeight: 1.6 }}>A state regulatory addendum conforms the contract to state insurance law on claim handling, member appeals, and continuity of care.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 12, marginBottom: 32 }}>
            {addendumStates.map((s) => (
              <a key={s.slug} href={`/insurance/curative/${s.slug}/`}
                style={{ display: 'block', background: B.white, border: `1px solid ${cColor}22`, borderLeft: `3px solid ${cColor}`, borderRadius: B.r, padding: '16px 18px', textDecoration: 'none' }}>
                <div style={{ fontFamily: B.fd, fontSize: 17, fontWeight: 700, color: B.navy, marginBottom: 4 }}>{s.name}</div>
                <div style={{ fontSize: 13, color: B.text }}>{s.board}</div>
              </a>
            ))}
          </div>

          <h3 style={{ fontFamily: B.fd, fontSize: 19, fontWeight: 700, color: B.navy, margin: '0 0 4px' }}>Covered by the base agreement ({baseStates.length})</h3>
          <p style={{ fontSize: 14, color: B.text, margin: '0 0 14px', lineHeight: 1.6 }}>No state addendum is required. The same participating networks, cost-sharing design, and claim path apply directly.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 12 }}>
            {baseStates.map((s) => (
              <a key={s.slug} href={`/insurance/curative/${s.slug}/`}
                style={{ display: 'block', background: B.white, border: `1px solid ${cColor}22`, borderLeft: `3px solid ${cColor}55`, borderRadius: B.r, padding: '16px 18px', textDecoration: 'none' }}>
                <div style={{ fontFamily: B.fd, fontSize: 17, fontWeight: 700, color: B.navy, marginBottom: 4 }}>{s.name}</div>
                <div style={{ fontSize: 13, color: B.text }}>{s.board}</div>
              </a>
            ))}
          </div>
        </section>

        {/* CONDITIONS */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: B.fd, fontSize: 26, fontWeight: 700, color: B.navy, margin: '0 0 8px' }}>What we treat for Curative members</h2>
          <p style={{ fontSize: 15, color: B.text, margin: '0 0 24px', lineHeight: 1.6 }}>Common adult conditions handled by video. Select any condition for clinical detail, pricing, and state-specific FAQ.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 10 }}>
            {CURATIVE_CONDITIONS.map((c) => (
              <a key={c.slug} href={`/${c.slug}/`}
                style={{ display: 'block', background: B.white, border: `1px solid ${cColor}22`, borderRadius: B.r, padding: '12px 14px', textDecoration: 'none', fontSize: 14, fontWeight: 600, color: B.navy, borderLeft: `3px solid ${cColor}` }}>
                {c.label}
              </a>
            ))}
          </div>
        </section>

        {/* Sitewide Medicaid + D-SNP exclusion */}
        <MedicaidExclusion headingLevel="h2" idSuffix="curative-hub" />

        {/* FAQ */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: B.fd, fontSize: 26, fontWeight: 700, color: B.navy, margin: '0 0 24px' }}>Curative and TeleDirectMD FAQ</h2>
          {faqs.map((f, i) => (
            <FAQ key={i} question={f.q} answer={f.a} />
          ))}
        </section>

        <BookCTA
          insurerName="Curative"
          tagline="Curative Commercial PPO, EPO, and self-funded plans, verified before your video visit. Medicaid, Medicare Advantage, and HMO products are not in-network."
          subtagline="Or pay $79 flat self-pay (HSA and FSA eligible), with no claim and no copay surprises."
        />

        <div style={{ marginBottom: 48 }}>
          <InsuranceDisclaimer payerNote={`Curative network status reflects our Commercial PPO, EPO, and self-funded contract effective July 7, 2026. Per written confirmation from ${CURATIVE_CONTRACT.source} on ${CURATIVE_CONTRACT.confirmedDate}, the agreement is national: TeleDirectMD is in-network for Curative members in every state where Dr. Bhavsar holds an active license, currently ${stateCount} states. Cost sharing depends on your plan and on whether your annual Baseline Visit is complete. Verify benefits with Curative before your visit.`} />
        </div>
      </div>
    </div>
  );
}
