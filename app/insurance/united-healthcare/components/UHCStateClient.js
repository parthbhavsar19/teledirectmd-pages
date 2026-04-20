'use client';
import { B, STATE_NAMES, INSURANCE_CONDITIONS, INSURERS } from '../../../../data/insurance/insuranceConfig';
import { FAQ, BookCTA, HowItWorksSteps, TrustBar, Breadcrumb, InsuranceDisclaimer } from '../../components/InsuranceShared';
import { Ico } from '../../components/InsuranceIcons';

const insurer = INSURERS['united-healthcare'];

const STATE_CODE_MAP = {
  colorado: 'CO',
  georgia: 'GA',
  illinois: 'IL',
  minnesota: 'MN',
  'north-carolina': 'NC',
  'new-jersey': 'NJ',
  ohio: 'OH',
  oklahoma: 'OK',
  pennsylvania: 'PA',
  tennessee: 'TN',
  washington: 'WA',
};

const STATE_CONTEXT = {
  CO: {
    cities: ['Denver', 'Aurora', 'Colorado Springs', 'Boulder', 'Fort Collins'],
    note: "UnitedHealthcare is a major commercial insurer in Colorado, with strong presence among Denver metro employer plans. Colorado's active population and tech-forward culture make telehealth a natural fit. Aetna is also in-network with TeleDirectMD in Colorado.",
  },
  GA: {
    cities: ['Atlanta', 'Savannah', 'Augusta', 'Columbus', 'Macon'],
    note: "Georgia is TeleDirectMD's home state and core market. All three major insurers — Aetna, Anthem BCBS, and UnitedHealthcare — are in-network for Georgia residents, giving the broadest coverage options of any state.",
  },
  IL: {
    cities: ['Chicago', 'Aurora', 'Naperville', 'Joliet', 'Rockford'],
    note: "Illinois is a three-insurer market for TeleDirectMD. UHC, Aetna, and BCBS of Illinois are all in-network, covering the majority of Illinois commercial plan members including the large Chicago employer base.",
  },
  MN: {
    cities: ['Minneapolis', 'Saint Paul', 'Rochester', 'Duluth', 'Bloomington'],
    note: "UnitedHealthcare is headquartered in Minnesota, making it the dominant commercial insurer across the state. TeleDirectMD is in-network with UHC in Minnesota — a natural fit for the state with the highest UHC market penetration in the country.",
  },
  NC: {
    cities: ['Charlotte', 'Raleigh', 'Greensboro', 'Durham', 'Winston-Salem'],
    note: "North Carolina's fast-growing tech and healthcare corridors in the Research Triangle and Charlotte metro drive strong commercial insurance coverage. UnitedHealthcare is a major employer plan insurer across North Carolina.",
  },
  NJ: {
    cities: ['Newark', 'Jersey City', 'Paterson', 'Elizabeth', 'Edison'],
    note: "New Jersey is one of the most densely insured states in the country. UnitedHealthcare has a significant commercial presence in New Jersey, particularly for mid-to-large employer plans in the New York metro area.",
  },
  OH: {
    cities: ['Columbus', 'Cleveland', 'Cincinnati', 'Toledo', 'Akron'],
    note: "Ohio is a strong two-insurer market with both UHC and Aetna in-network at TeleDirectMD. Ohio residents have excellent insurance coverage options for same-day telehealth visits.",
  },
  OK: {
    cities: ['Oklahoma City', 'Tulsa', 'Norman', 'Broken Arrow', 'Edmond'],
    note: "UnitedHealthcare is a leading commercial insurer in Oklahoma, covering a significant portion of employer-sponsored plan members statewide. TeleDirectMD brings physician-led telehealth to Oklahoma UHC members.",
  },
  PA: {
    cities: ['Philadelphia', 'Pittsburgh', 'Allentown', 'Erie', 'Reading'],
    note: "Pennsylvania has the broadest insurance coverage at TeleDirectMD: Aetna, Highmark BCBS, and UnitedHealthcare are all in-network, covering most Pennsylvania employer plan members across both the Philadelphia and Pittsburgh markets.",
  },
  TN: {
    cities: ['Nashville', 'Memphis', 'Knoxville', 'Chattanooga', 'Clarksville'],
    note: "Tennessee residents with UHC or Aetna commercial plans can access TeleDirectMD. Nashville's major employer base — including healthcare corporations and tech companies — makes commercial insurance coverage especially prevalent.",
  },
  WA: {
    cities: ['Seattle', 'Spokane', 'Tacoma', 'Bellevue', 'Everett'],
    note: "Washington State's large tech employer base in the Seattle–Bellevue corridor drives strong UHC commercial plan enrollment. TeleDirectMD brings same-day physician telehealth to UHC members throughout Washington.",
  },
};

export default function UHCStateClient({ stateSlug }) {
  const stateCode = STATE_CODE_MAP[stateSlug];
  const stateName = STATE_NAMES[stateCode] || stateSlug;
  const ctx = STATE_CONTEXT[stateCode] || { cities: [], note: '' };

  const FAQS = [
    {
      q: `Is TeleDirectMD in-network with UnitedHealthcare in ${stateName}?`,
      a: `Yes. TeleDirectMD is in-network with UnitedHealthcare commercial plans in ${stateName}. If you have a UHC employer-sponsored or individual commercial plan in ${stateName}, your telehealth visit with Dr. Parth Bhavsar, MD (NPI: 1104323203) may be covered subject to your plan's copay or deductible.`,
    },
    {
      q: `Does UnitedHealthcare cover telemedicine in ${stateName}?`,
      a: `Yes. UnitedHealthcare covers telehealth visits for most commercial plan members in ${stateName}. Many UHC employer plans feature $0 virtual care copays. Call the member services number on your UHC card or log into myuhc.com to verify your telehealth benefits before booking.`,
    },
    {
      q: `What is the UnitedHealthcare telehealth copay in ${stateName}?`,
      a: `UHC commercial plan telehealth copays in ${stateName} typically range from $0 to $40. Many UHC employer-sponsored plans have $0 virtual care copays, especially under UHC's Virtual Care benefit. Log into myuhc.com or call member services to verify your exact cost.`,
    },
    {
      q: `What conditions does UnitedHealthcare cover for telemedicine in ${stateName}?`,
      a: `UHC commercial plans in ${stateName} cover telehealth visits for UTI, sinus infection, strep throat, ear infection, pink eye, flu, asthma inhaler refills, hypertension medication refills, acid reflux, yeast infections, and many more. Coverage depends on your specific plan benefits.`,
    },
    {
      q: `How do I book a TeleDirectMD visit using UnitedHealthcare in ${stateName}?`,
      a: `Book at teledirectmd.com/book-online, select "Insurance" as your payment method, and have your UHC member ID card ready. We verify your coverage before your visit. You can also book self-pay for $49 flat — no insurance needed.`,
    },
    {
      q: `What if my specific UHC plan in ${stateName} is not covered?`,
      a: `If your specific UHC plan is not in-network with TeleDirectMD in ${stateName}, you can still see Dr. Bhavsar as a self-pay patient for a flat $49 fee. You may also be eligible to submit an out-of-network claim to UnitedHealthcare for partial reimbursement.`,
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
        acceptsInsurance: [{ '@type': 'HealthInsurancePlan', name: `UnitedHealthcare Commercial Plans — ${stateName}` }],
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
          { '@type': 'ListItem', position: 3, name: 'UnitedHealthcare', item: 'https://teledirectmd.com/insurance/united-healthcare' },
          { '@type': 'ListItem', position: 4, name: stateName, item: `https://teledirectmd.com/insurance/united-healthcare/${stateSlug}` },
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
        { label: 'UnitedHealthcare', href: '/insurance/united-healthcare' },
        { label: stateName },
      ]} />

      {/* HERO */}
      <div style={{ background: `linear-gradient(165deg, ${B.navyDarker} 0%, ${B.navy} 40%, ${B.navyDeep} 100%)`, padding: '56px 24px 64px', position: 'relative', overflow: 'hidden', marginTop: 16 }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.04, backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div style={{ maxWidth: 760, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.08)', borderRadius: 100, padding: '8px 16px', marginBottom: 24, backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.12)' }}>
            <Ico.Shield c="#6EE7B7" s={16} />
            <span style={{ fontFamily: B.fb, fontSize: 13, fontWeight: 600, color: '#6EE7B7', letterSpacing: '0.04em', textTransform: 'uppercase' }}>UHC In-Network — {stateName}</span>
          </div>
          <h1 style={{ fontFamily: B.fd, fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 700, color: B.white, lineHeight: 1.15, margin: '0 0 16px' }}>
            Online Doctor That Accepts<br />UnitedHealthcare in {stateName}
          </h1>
          <p style={{ fontFamily: B.fb, fontSize: 'clamp(15px, 2.5vw, 18px)', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, margin: '0 0 12px', maxWidth: 580 }}>
            TeleDirectMD is in-network with UnitedHealthcare commercial plans in {stateName}. See a board-certified physician by video — your standard UHC copay applies.
          </p>
          {ctx.note && (
            <p style={{ fontFamily: B.fb, fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, margin: '0 0 28px', maxWidth: 580 }}>{ctx.note}</p>
          )}
          <a href="https://www.teledirectmd.com/book-online" target="_blank" rel="noopener"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', background: B.accent, color: B.white, borderRadius: B.rs, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>
            <Ico.Cal c={B.white} s={18} /> Book with UHC in {stateName}
          </a>
        </div>
      </div>

      <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ margin: '32px 0' }}><TrustBar /></div>

        {/* CONDITIONS GRID */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: B.fd, fontSize: 24, fontWeight: 700, color: B.navy, margin: '0 0 8px' }}>
            Conditions UHC Covers in {stateName}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 10 }}>
            {Object.values(INSURANCE_CONDITIONS).map((cond, i) => (
              <a key={i} href={`/insurance/united-healthcare/${stateSlug}/${cond.slug}`}
                style={{ display: 'flex', alignItems: 'center', gap: 10, background: B.white, border: `1px solid ${B.border}`, borderRadius: B.rs, padding: '12px 14px', textDecoration: 'none', boxShadow: B.shadow }}>
                <Ico.Check c="#1A7A3A" s={15} />
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: B.navy }}>{cond.displayName}</div>
                  <div style={{ fontSize: 11, color: '#1A7A3A' }}>UHC + {stateName}</div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* CITIES */}
        {ctx.cities.length > 0 && (
          <section style={{ marginBottom: 40 }}>
            <h2 style={{ fontFamily: B.fd, fontSize: 22, fontWeight: 700, color: B.navy, margin: '0 0 8px' }}>
              Serving UHC Members Across {stateName}
            </h2>
            <p style={{ fontSize: 15, color: B.text, margin: 0, lineHeight: 1.6 }}>
              TeleDirectMD serves UnitedHealthcare members throughout {stateName}, including {ctx.cities.join(', ')}, and all surrounding areas. Care is delivered via secure video — your location within {stateName} does not affect your ability to book.
            </p>
          </section>
        )}

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: B.fd, fontSize: 24, fontWeight: 700, color: B.navy, margin: '0 0 8px' }}>
            How to Use Your UHC Benefits in {stateName}
          </h2>
          <HowItWorksSteps insurerName="UnitedHealthcare" />
        </section>

        <section style={{ marginBottom: 48 }}><BookCTA insurerName="UnitedHealthcare" /></section>

        {/* FAQ */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: B.fd, fontSize: 24, fontWeight: 700, color: B.navy, margin: '0 0 8px' }}>
            UnitedHealthcare + {stateName}: Frequently Asked Questions
          </h2>
          <div style={{ background: B.white, border: `1px solid ${B.border}`, borderRadius: B.r, padding: '4px 24px', boxShadow: B.shadow }}>
            {FAQS.map((faq, i) => <FAQ key={i} question={faq.q} answer={faq.a} />)}
          </div>
        </section>

        <div style={{ marginBottom: 24, display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          <a href="/insurance/united-healthcare" style={{ fontSize: 14, color: B.teal, textDecoration: 'none' }}>← All UHC States</a>
          <span style={{ color: B.border }}>|</span>
          <a href="/insurance" style={{ fontSize: 14, color: B.teal, textDecoration: 'none' }}>All Insurance Options</a>
        </div>
        <div style={{ marginBottom: 48 }}><InsuranceDisclaimer /></div>
      </div>
    </div>
  );
}
