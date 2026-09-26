'use client';
// Anthem Blue Cross (California) state page.
// Lives at /insurance/blue-cross-blue-shield/california/.
//
// Deliberately NOT rendered through the generic BCBSStateClient template:
// the California agreement (effective 2026-09-23, Parth Bhavsar Medical
// Corporation) names only Commercial PPO, Commercial Indemnity, and Medicare
// PPO in its Provider Networks Attachment. The generic template claims
// HMO/EPO/POS and says Medicare Advantage is excluded, both wrong here.
// No state x condition fan-out pages exist for CA (see check-state-coverage.js).

import { B, LAST_REVIEWED } from '../../../../data/insurance/insuranceConfig';
import { FAQ, BookCTA, HowItWorksSteps, TrustBar, Breadcrumb, InsuranceDisclaimer, AnswerBlock, CommissionerLink } from '../../components/InsuranceShared';
import { Ico } from '../../components/InsuranceIcons';
import { getAggregateRating, getReviewBlock } from '../../../../lib/review-schema';

const URL = 'https://teledirectmd.com/insurance/blue-cross-blue-shield/california';
const ANTHEM_BLUE = '#1A5FB4';

export const ANTHEM_CA_META = {
  title: 'Online Doctor That Accepts Anthem Blue Cross PPO in California | TeleDirectMD',
  description:
    'TeleDirectMD is in-network with Anthem Blue Cross in California for Commercial PPO, Indemnity, and Medicare PPO plans, effective September 23, 2026. Same-day video visits with a board-certified MD. HMO and Medi-Cal not included.',
  alternates: { canonical: URL },
  openGraph: {
    title: 'Online Doctor That Accepts Anthem Blue Cross PPO in California | TeleDirectMD',
    description: 'In-network with Anthem Blue Cross PPO, Indemnity, and Medicare PPO plans in California, effective September 23, 2026.',
    url: URL,
    siteName: 'TeleDirectMD',
    type: 'website',
  },
};

const ACCEPTED = [
  { t: 'Commercial PPO', d: 'Employer-sponsored Anthem Blue Cross PPO plans. Your card will usually say PPO near the plan name.' },
  { t: 'Commercial Indemnity', d: 'Traditional indemnity (fee-for-service) Anthem Blue Cross plans.' },
  { t: 'Medicare PPO', d: 'Anthem Blue Cross Medicare Advantage PPO plans. Original Medicare is billed separately and is not part of this agreement.' },
];

const NOT_ACCEPTED = [
  'Anthem Blue Cross HMO plans (including Medicare Advantage HMO)',
  'Anthem Blue Cross Medi-Cal',
  'EPO plans, until Anthem confirms they use a network in this agreement',
  'Blue Shield of California (a separate company, not contracted)',
  "Workers' compensation",
];

const FAQS = [
  {
    q: 'Is TeleDirectMD in-network with Anthem Blue Cross in California?',
    a: 'Yes, for Anthem Blue Cross Commercial PPO, Commercial Indemnity, and Medicare PPO plans, effective September 23, 2026. Visits on or after that date are billed to Anthem as in-network. The treating physician is Dr. Parth Bhavsar, MD (NPI 1104323203).',
  },
  {
    q: 'My card says Anthem Blue Cross HMO. Can I use it?',
    a: 'Not in-network. HMO plans are not part of the California agreement, and most HMOs require care through your assigned medical group. You can still book a $79 self-pay visit with the same physician.',
  },
  {
    q: 'Is Anthem Blue Cross the same as Blue Shield of California?',
    a: 'No. They are two separate companies. Anthem Blue Cross holds the Blue Cross license in California and Blue Shield of California holds the Blue Shield license. TeleDirectMD is contracted with Anthem Blue Cross only.',
  },
  {
    q: 'I bought my Anthem plan through Covered California. Am I covered?',
    a: "Individual and family plans, including Covered California plans, often use narrower networks than employer PPO plans. Before booking, call the member services number on your card and ask whether TeleDirectMD (NPI 1104323203) is in-network for your plan. If it isn't, the $79 self-pay visit is available.",
  },
  {
    q: 'Does Anthem Blue Cross cover Medi-Cal telehealth visits with TeleDirectMD?',
    a: 'No. Anthem Blue Cross Medi-Cal plans are not included. TeleDirectMD does not accept Medi-Cal or any Medicaid plan.',
  },
  {
    q: 'What will I pay?',
    a: "Your plan's normal telehealth or office-visit cost-sharing: a copay, or coinsurance if you haven't met your deductible. Check the Sydney Health app or <a href='https://www.anthem.com/ca/' target='_blank' rel='noopener'>anthem.com/ca</a> for your exact amount. For fully insured plans, California's telehealth parity law (<a href='https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1374.14' target='_blank' rel='noopener'>Health and Safety Code §1374.14</a> and <a href='https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=INS&sectionNum=10123.855' target='_blank' rel='noopener'>Insurance Code §10123.855</a>) requires telehealth to be covered on the same basis as in-person care. Self-funded employer plans follow federal rules and the employer's plan design.",
  },
  {
    q: 'I have a Blue plan from another state and live in California. Does this apply?',
    a: 'It may. Out-of-state Blue plan members are generally processed through the local Blue plan, but network access depends on your home plan. Call the number on the back of your card before booking.',
  },
  {
    q: 'What can I be seen for?',
    a: 'Common non-emergency adult conditions such as UTIs, sinus infections, sore throat, pink eye, flu, skin rashes, and medication refills for blood pressure, cholesterol, and asthma. Emergencies need 911 or an emergency department.',
  },
];

const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalWebPage',
      name: 'Online Doctor That Accepts Anthem Blue Cross PPO in California',
      description: ANTHEM_CA_META.description,
      url: URL,
      lastReviewed: LAST_REVIEWED,
      reviewedBy: { '@type': 'Physician', name: 'Parth Bhavsar, MD', identifier: { '@type': 'PropertyValue', name: 'NPI', value: '1104323203' } },
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['[data-speakable]'] },
    },
    {
      '@type': 'Physician',
      name: 'Parth Bhavsar, MD',
      identifier: { '@type': 'PropertyValue', name: 'NPI', value: '1104323203' },
      medicalSpecialty: 'Family Medicine',
      areaServed: { '@type': 'State', name: 'California' },
      hasCredential: {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Medical License',
        name: 'California Medical License A182278',
        recognizedBy: { '@type': 'Organization', name: 'Medical Board of California', url: 'https://www.mbc.ca.gov/' },
      },
      acceptsInsurance: [
        { '@type': 'HealthInsurancePlan', name: 'Anthem Blue Cross Commercial PPO (California)' },
        { '@type': 'HealthInsurancePlan', name: 'Anthem Blue Cross Commercial Indemnity (California)' },
        { '@type': 'HealthInsurancePlan', name: 'Anthem Blue Cross Medicare PPO (California)' },
      ],
      ...getReviewBlock(),
    },
    {
      '@type': 'MedicalOrganization',
      '@id': 'https://teledirectmd.com/#organization',
      name: 'TeleDirectMD',
      url: 'https://teledirectmd.com',
      areaServed: { '@type': 'State', name: 'California' },
      aggregateRating: getAggregateRating(),
    },
    {
      '@type': 'FAQPage',
      mainEntity: FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/<[^>]+>/g, '') } })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://teledirectmd.com' },
        { '@type': 'ListItem', position: 2, name: 'Insurance', item: 'https://teledirectmd.com/insurance' },
        { '@type': 'ListItem', position: 3, name: 'Blue Cross Blue Shield', item: 'https://teledirectmd.com/insurance/blue-cross-blue-shield' },
        { '@type': 'ListItem', position: 4, name: 'California', item: URL },
      ],
    },
  ],
};

const card = { background: B.white, border: `1px solid ${B.border}`, borderRadius: B.r, padding: '22px 24px', boxShadow: B.shadow };
const h2 = { fontFamily: B.fd, fontSize: 24, fontWeight: 700, color: B.navy, margin: '0 0 14px' };
const p = { fontSize: 15, color: B.text, lineHeight: 1.7, margin: '0 0 12px' };

export default function AnthemCaliforniaClient() {
  return (
    <div style={{ fontFamily: B.fb, background: B.bg, color: B.navy }}>
      <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Insurance', href: '/insurance' }, { label: 'Blue Cross Blue Shield', href: '/insurance/blue-cross-blue-shield' }, { label: 'California' }]} />

      {/* HERO */}
      <div style={{ background: `linear-gradient(165deg, ${B.navyDarker} 0%, ${B.navy} 40%, ${B.navyDeep} 100%)`, padding: '56px 24px 64px', position: 'relative', overflow: 'hidden', marginTop: 16 }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.04, backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div style={{ maxWidth: 760, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.08)', borderRadius: 100, padding: '8px 16px', marginBottom: 24, border: '1px solid rgba(255,255,255,0.12)' }}>
            <Ico.Shield c="#90C2FF" s={16} />
            <span style={{ fontSize: 13, fontWeight: 600, color: '#90C2FF', letterSpacing: '0.04em', textTransform: 'uppercase' }}>In-network since Sept 23, 2026</span>
          </div>
          <h1 style={{ fontFamily: B.fd, fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 700, color: B.white, lineHeight: 1.15, margin: '0 0 16px' }}>
            Online Doctor That Accepts Anthem Blue Cross in California
          </h1>
          <p data-speakable="true" style={{ fontSize: 'clamp(15px, 2.5vw, 18px)', color: 'rgba(255,255,255,0.85)', lineHeight: 1.65, margin: '0 0 12px', maxWidth: 620 }}>
            TeleDirectMD is in-network with Anthem Blue Cross PPO, Indemnity, and Medicare PPO plans in California. See a board-certified physician by video, usually the same day, and pay your normal plan cost-sharing.
          </p>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.6, margin: '0 0 24px', maxWidth: 600 }}>
            HMO and Medi-Cal plans are not included. Not sure which you have? Look for "PPO" or "HMO" on the front of your member ID card.
          </p>
          <a href="https://www.teledirectmd.com/book-online" target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', background: B.accent, color: B.white, borderRadius: B.rs, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>
            <Ico.Cal c={B.white} s={18} /> Book with Anthem Blue Cross
          </a>
        </div>
      </div>

      <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ margin: '32px 0' }}><TrustBar /></div>

        <AnswerBlock
          question="Does TeleDirectMD take Anthem Blue Cross in California?"
          answer="Yes. As of September 23, 2026, TeleDirectMD is in-network with Anthem Blue Cross Commercial PPO, Commercial Indemnity, and Medicare PPO plans in California. Anthem Blue Cross HMO, Medi-Cal, and Medicare Advantage HMO plans are not included. Self-pay is $79 for any plan we don't take."
          color={ANTHEM_BLUE}
        />

        {/* ACCEPTED / NOT ACCEPTED */}
        <section style={{ marginBottom: 44 }}>
          <h2 style={h2}>Which Anthem Blue Cross plans are accepted</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 12, marginBottom: 16 }}>
            {ACCEPTED.map((a) => (
              <div key={a.t} style={card}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                  <Ico.Check c={B.teal} s={18} />
                  <strong style={{ fontSize: 16, color: B.navy }}>{a.t}</strong>
                </div>
                <p style={{ ...p, fontSize: 14, margin: 0 }}>{a.d}</p>
              </div>
            ))}
          </div>
          <div style={{ ...card, background: '#FFF8F5', borderColor: 'rgba(255,90,54,0.25)' }}>
            <strong style={{ display: 'block', fontSize: 16, color: B.navy, marginBottom: 8 }}>Not in-network</strong>
            <ul style={{ margin: 0, paddingLeft: 20, fontSize: 14, color: B.text, lineHeight: 1.8 }}>
              {NOT_ACCEPTED.map((n) => <li key={n}>{n}</li>)}
            </ul>
          </div>
        </section>

        {/* CALIFORNIA SPECIFICS */}
        <section style={{ marginBottom: 44 }}>
          <h2 style={h2}>What California patients should know</h2>
          <p style={p}>
            <strong>Anthem Blue Cross and Blue Shield of California are different companies.</strong> Both carry Blue branding, but only Anthem Blue Cross is contracted with TeleDirectMD. Check the logo and company name on your card.
          </p>
          <p style={p}>
            <strong>Location matters.</strong> You need to be physically in California during the video visit. Dr. Bhavsar holds California Medical License A182278, which you can verify with the{' '}
            <a href="https://www.mbc.ca.gov/License-Verification/" target="_blank" rel="noopener" style={{ color: B.teal }}>Medical Board of California</a>.
          </p>
          <p style={p}>
            <strong>Telehealth parity.</strong> For fully insured plans, California law requires health plans and insurers to cover telehealth on the same basis as in-person care (
            <a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1374.14" target="_blank" rel="noopener" style={{ color: B.teal }}>H&amp;S Code §1374.14</a>,{' '}
            <a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=INS&sectionNum=10123.855" target="_blank" rel="noopener" style={{ color: B.teal }}>Ins. Code §10123.855</a>). Self-funded employer plans aren't subject to state mandates, so your cost follows your employer's plan design.
          </p>
          <p style={{ ...p, margin: 0 }}>
            <strong>Individual and Covered California plans.</strong> These often use narrower networks. Call Anthem at the number on your card before booking and ask whether NPI 1104323203 is in-network for your plan.
          </p>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2 style={h2}>How to use your Anthem Blue Cross benefits</h2>
          <HowItWorksSteps insurerName="Anthem Blue Cross" />
        </section>

        <section style={{ marginBottom: 48 }}>
          <BookCTA
            insurerName="Anthem Blue Cross"
            tagline="Anthem Blue Cross PPO, Indemnity, and Medicare PPO plans in California. Same-day video visits with a board-certified MD."
            subtagline="HMO, Medi-Cal, or another plan? Self-pay is $79 flat with the same physician."
          />
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ ...h2, margin: '0 0 8px' }}>Anthem Blue Cross in California: FAQ</h2>
          <div style={{ background: B.white, border: `1px solid ${B.border}`, borderRadius: B.r, padding: '4px 24px', boxShadow: B.shadow }}>
            {FAQS.map((f, i) => <FAQ key={i} question={f.q} answer={f.a} />)}
          </div>
        </section>

        <div style={{ marginBottom: 24, display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          <a href="/news/anthem-blue-cross-california-september-2026" style={{ fontSize: 14, color: B.teal, textDecoration: 'none' }}>Announcement</a>
          <span style={{ color: B.border }}>|</span>
          <a href="/insurance/blue-cross-blue-shield" style={{ fontSize: 14, color: B.teal, textDecoration: 'none' }}>All BCBS states</a>
          <span style={{ color: B.border }}>|</span>
          <a href="/insurance?state=CA" style={{ fontSize: 14, color: B.teal, textDecoration: 'none' }}>Check other California plans</a>
          <span style={{ color: B.border }}>|</span>
          <a href="/ca/" style={{ fontSize: 14, color: B.teal, textDecoration: 'none' }}>California telehealth home</a>
        </div>

        <CommissionerLink stateCode="CA" stateName="California" />

        <div style={{ marginBottom: 48 }}>
          <InsuranceDisclaimer payerNote="Anthem Blue Cross network status in California covers Commercial PPO, Commercial Indemnity, and Medicare PPO under an agreement effective September 23, 2026. HMO, EPO, Medi-Cal, Medicare Advantage HMO, and workers' compensation are not included. Benefits and cost-sharing are set by your plan." />
        </div>
      </div>
    </div>
  );
}
