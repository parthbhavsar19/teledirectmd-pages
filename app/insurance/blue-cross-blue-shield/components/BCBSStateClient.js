'use client';
import { B, STATE_NAMES, INSURANCE_CONDITIONS, INSURERS } from '../../../../data/insurance/insuranceConfig';
import { FAQ, BookCTA, HowItWorksSteps, TrustBar, Breadcrumb, InsuranceDisclaimer } from '../../components/InsuranceShared';
import { Ico } from '../../components/InsuranceIcons';

const insurer = INSURERS['blue-cross-blue-shield'];

const STATE_CODE_MAP = {
  florida: 'FL',
  georgia: 'GA',
  illinois: 'IL',
  pennsylvania: 'PA',
  texas: 'TX',
};

// BCBS affiliate names by state code
const AFFILIATE_MAP = {
  FL: 'Florida Blue',
  GA: 'Anthem Blue Cross Blue Shield',
  IL: 'Blue Cross Blue Shield of Illinois',
  PA: 'Highmark Blue Cross Blue Shield',
  TX: 'Blue Cross Blue Shield of Texas',
};

const STATE_CONTEXT = {
  FL: {
    cities: ['Miami', 'Orlando', 'Tampa', 'Jacksonville', 'Fort Lauderdale'],
    note: 'Florida Blue is one of Florida\'s largest insurers, covering millions of Floridians. TeleDirectMD is in-network with Florida Blue — the BCBS affiliate in Florida — giving most Florida residents access to same-day telehealth visits with a board-certified physician.',
  },
  GA: {
    cities: ['Atlanta', 'Savannah', 'Augusta', 'Columbus', 'Macon'],
    note: 'Georgia is TeleDirectMD\'s home state. Anthem Blue Cross Blue Shield is a major insurer for Georgia employer plans. Georgia residents with Anthem BCBS can access TeleDirectMD alongside Aetna and UHC — all three are in-network.',
  },
  IL: {
    cities: ['Chicago', 'Aurora', 'Naperville', 'Joliet', 'Rockford'],
    note: 'Blue Cross Blue Shield of Illinois is one of the state\'s dominant commercial insurers, particularly for large employer plans in the Chicago metro. TeleDirectMD is in-network, along with Aetna and UHC, covering the majority of Illinois commercial plan members.',
  },
  PA: {
    cities: ['Philadelphia', 'Pittsburgh', 'Allentown', 'Erie', 'Reading'],
    note: 'Highmark Blue Cross Blue Shield is western Pennsylvania\'s largest commercial insurer, with strong presence in Pittsburgh and surrounding counties. Pennsylvania residents with Highmark BCBS, Aetna, or UHC can all access TeleDirectMD.',
  },
  TX: {
    cities: ['Houston', 'Dallas', 'San Antonio', 'Austin', 'Fort Worth'],
    note: 'Blue Cross Blue Shield of Texas is the state\'s largest commercial insurer, serving millions of Texans through employer-sponsored plans. TeleDirectMD is in-network with BCBS of Texas, bringing same-day physician-led telehealth to the entire state.',
  },
};

export default function BCBSStateClient({ stateSlug }) {
  const stateCode = STATE_CODE_MAP[stateSlug];
  const stateName = STATE_NAMES[stateCode] || stateSlug;
  const affiliateName = AFFILIATE_MAP[stateCode] || 'Blue Cross Blue Shield';
  const ctx = STATE_CONTEXT[stateCode] || { cities: [], note: '' };

  const FAQS = [
    {
      q: `Is TeleDirectMD in-network with ${affiliateName} in ${stateName}?`,
      a: `Yes. TeleDirectMD is in-network with ${affiliateName} commercial plans in ${stateName}. If you have a ${affiliateName} employer-sponsored or individual commercial plan, your telehealth visit with Dr. Parth Bhavsar, MD (NPI: 1104323203) may be covered subject to your plan's copay or deductible.`,
    },
    {
      q: `Does ${affiliateName} cover telemedicine in ${stateName}?`,
      a: `Yes. ${affiliateName} covers telehealth visits for most commercial plan members in ${stateName}. Your actual cost depends on your plan's copay, coinsurance, and deductible. Call the member services number on your ${affiliateName} card or log into your member portal to verify your telehealth benefits before booking.`,
    },
    {
      q: `What is the ${affiliateName} telehealth copay in ${stateName}?`,
      a: `${affiliateName} commercial plan telehealth copays in ${stateName} typically range from $0 to $40. Many employer-sponsored BCBS plans have $0 telehealth copays. Log into your member portal or call member services to verify your exact cost before your visit.`,
    },
    {
      q: `What conditions does ${affiliateName} cover for telemedicine in ${stateName}?`,
      a: `${affiliateName} commercial plans in ${stateName} cover telehealth visits for UTI, sinus infection, strep throat, ear infection, pink eye, flu, asthma inhaler refills, hypertension medication refills, acid reflux, yeast infections, and many more. Coverage depends on your specific plan benefits.`,
    },
    {
      q: `How do I book a TeleDirectMD visit using ${affiliateName} in ${stateName}?`,
      a: `Book at teledirectmd.com/book-online, select "Insurance" as your payment method, and have your ${affiliateName} member ID card ready. We verify your coverage before your visit. You can also book self-pay for $49 flat — no insurance needed.`,
    },
    {
      q: `What if my specific ${affiliateName} plan is not covered?`,
      a: `If your specific ${affiliateName} plan is not in-network with TeleDirectMD in ${stateName}, you can still see Dr. Bhavsar as a self-pay patient for a flat $49 fee. You may also be eligible to submit an out-of-network claim to ${affiliateName} for partial reimbursement.`,
    },
  ];

  const SCHEMA = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Physician',
        name: 'Parth Bhavsar, MD',
        identifier: { '@type': 'PropertyValue', name: 'NPI', value: '1104323203' },
        medicalSpecialty: 'Family Medicine',
        areaServed: { '@type': 'State', name: stateName },
        acceptsInsurance: [{ '@type': 'HealthInsurancePlan', name: `${affiliateName} — ${stateName}` }],
      },
      {
        '@type': 'FAQPage',
        mainEntity: FAQS.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://teledirectmd.com' },
          { '@type': 'ListItem', position: 2, name: 'Insurance', item: 'https://teledirectmd.com/insurance' },
          { '@type': 'ListItem', position: 3, name: 'Blue Cross Blue Shield', item: 'https://teledirectmd.com/insurance/blue-cross-blue-shield' },
          { '@type': 'ListItem', position: 4, name: stateName, item: `https://teledirectmd.com/insurance/blue-cross-blue-shield/${stateSlug}` },
        ],
      },
    ],
  };

  return (
    <div style={{ fontFamily: B.fb, background: B.bg, color: B.navy }}>
      <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Insurance', href: '/insurance' },
        { label: 'Blue Cross Blue Shield', href: '/insurance/blue-cross-blue-shield' },
        { label: stateName },
      ]} />

      {/* HERO */}
      <div style={{ background: `linear-gradient(165deg, ${B.navyDarker} 0%, ${B.navy} 40%, ${B.navyDeep} 100%)`, padding: '56px 24px 64px', position: 'relative', overflow: 'hidden', marginTop: 16 }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.04, backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div style={{ maxWidth: 760, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.08)', borderRadius: 100, padding: '8px 16px', marginBottom: 24, backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.12)' }}>
            <Ico.Shield c="#90C2FF" s={16} />
            <span style={{ fontFamily: B.fb, fontSize: 13, fontWeight: 600, color: '#90C2FF', letterSpacing: '0.04em', textTransform: 'uppercase' }}>BCBS In-Network — {stateName}</span>
          </div>
          <h1 style={{ fontFamily: B.fd, fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 700, color: B.white, lineHeight: 1.15, margin: '0 0 16px' }}>
            Online Doctor That Accepts<br />{affiliateName} in {stateName}
          </h1>
          <p style={{ fontFamily: B.fb, fontSize: 'clamp(15px, 2.5vw, 18px)', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, margin: '0 0 12px', maxWidth: 580 }}>
            TeleDirectMD is in-network with {affiliateName} commercial plans in {stateName}. See a board-certified physician by video — your standard BCBS copay applies.
          </p>
          {ctx.note && (
            <p style={{ fontFamily: B.fb, fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, margin: '0 0 28px', maxWidth: 580 }}>{ctx.note}</p>
          )}
          <a href="https://www.teledirectmd.com/book-online" target="_blank" rel="noopener"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', background: B.accent, color: B.white, borderRadius: B.rs, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>
            <Ico.Cal c={B.white} s={18} /> Book with {affiliateName} in {stateName}
          </a>
        </div>
      </div>

      <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ margin: '32px 0' }}><TrustBar /></div>

        {/* CONDITIONS GRID */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: B.fd, fontSize: 24, fontWeight: 700, color: B.navy, margin: '0 0 8px' }}>
            Conditions {affiliateName} Covers in {stateName}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 10 }}>
            {Object.values(INSURANCE_CONDITIONS).map((cond, i) => (
              <a key={i} href={`/insurance/blue-cross-blue-shield/${stateSlug}/${cond.slug}`}
                style={{ display: 'flex', alignItems: 'center', gap: 10, background: B.white, border: `1px solid ${B.border}`, borderRadius: B.rs, padding: '12px 14px', textDecoration: 'none', boxShadow: B.shadow }}>
                <Ico.Check c="#1A5FB4" s={15} />
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: B.navy }}>{cond.displayName}</div>
                  <div style={{ fontSize: 11, color: '#1A5FB4' }}>BCBS + {stateName}</div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* CITIES */}
        {ctx.cities.length > 0 && (
          <section style={{ marginBottom: 40 }}>
            <h2 style={{ fontFamily: B.fd, fontSize: 22, fontWeight: 700, color: B.navy, margin: '0 0 8px' }}>
              Serving {affiliateName} Members Across {stateName}
            </h2>
            <p style={{ fontSize: 15, color: B.text, margin: 0, lineHeight: 1.6 }}>
              TeleDirectMD serves {affiliateName} members throughout {stateName}, including {ctx.cities.join(', ')}, and all surrounding areas. Care is delivered via secure video — your location within {stateName} does not affect your ability to book.
            </p>
          </section>
        )}

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: B.fd, fontSize: 24, fontWeight: 700, color: B.navy, margin: '0 0 8px' }}>
            How to Use Your {affiliateName} Benefits
          </h2>
          <HowItWorksSteps insurerName={affiliateName} />
        </section>

        <section style={{ marginBottom: 48 }}><BookCTA insurerName={affiliateName} /></section>

        {/* FAQ */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: B.fd, fontSize: 24, fontWeight: 700, color: B.navy, margin: '0 0 8px' }}>
            {affiliateName} + {stateName}: Frequently Asked Questions
          </h2>
          <div style={{ background: B.white, border: `1px solid ${B.border}`, borderRadius: B.r, padding: '4px 24px', boxShadow: B.shadow }}>
            {FAQS.map((faq, i) => <FAQ key={i} question={faq.q} answer={faq.a} />)}
          </div>
        </section>

        <div style={{ marginBottom: 24, display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          <a href="/insurance/blue-cross-blue-shield" style={{ fontSize: 14, color: B.teal, textDecoration: 'none' }}>← All BCBS States</a>
          <span style={{ color: B.border }}>|</span>
          <a href="/insurance" style={{ fontSize: 14, color: B.teal, textDecoration: 'none' }}>All Insurance Options</a>
        </div>
        <div style={{ marginBottom: 48 }}><InsuranceDisclaimer /></div>
      </div>
    </div>
  );
}
