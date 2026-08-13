'use client';

// Long-tail SEO page: "California telehealth urgent care that accepts Aetna"
// Targets bottom-of-funnel intent — California Aetna members searching for virtual urgent care right now.

const B = {
  teal: '#006B73',
  tealLight: '#008C96',
  navy: '#003E52',
  navyDeep: '#002A3A',
  accent: '#FF5A36',
  white: '#FFFFFF',
  bg: '#F5FAFA',
  text: '#4A6870',
  border: 'rgba(0,62,82,0.10)',
  shadow: '0 4px 20px rgba(0,35,45,0.06)',
  fd: "'Fraunces', Georgia, serif",
  fb: "'DM Sans', Montserrat, system-ui, sans-serif",
};

const CONDITIONS = [
  { name: 'Urinary Tract Infection (UTI)', summary: 'Burning, frequency, urgency. Treated with a 5-day generic antibiotic.', href: '/ca/uti-treatment-online' },
  { name: 'Sinus Infection', summary: 'Facial pressure, congestion, post-nasal drip. Antibiotics only when bacterial pattern (10+ days).', href: '/ca/sinus-infection-treatment-online' },
  { name: 'Strep Throat', summary: 'Sore throat with fever, swollen tonsils. First-line: amoxicillin or penicillin VK.', href: '/ca/strep-throat-treatment-online' },
  { name: 'Pink Eye (Conjunctivitis)', summary: 'Red, watery, gritty eyes. Antibiotic drops if bacterial; supportive care if viral.', href: '/ca/pink-eye-treatment-online' },
  { name: 'Influenza (Flu)', summary: 'Fever, body aches, cough. Tamiflu within 48 hours of symptom onset.', href: '/ca/influenza-treatment-online' },
  { name: 'Asthma Inhaler Refills', summary: 'Stable asthma on controller + rescue inhaler. Yearly action plan review.', href: '/ca/asthma-refills-online' },
  { name: 'Hypertension Refills', summary: 'Stable BP on lisinopril, amlodipine, losartan, etc. Recent BP log required.', href: '/ca/hypertension-refills-online' },
  { name: 'Acid Reflux / GERD', summary: 'Heartburn ≥2x/week. PPI (omeprazole) first-line for 8 weeks.', href: '/ca/acid-reflux-refills-online' },
  { name: 'Yeast Infection', summary: 'Itching, white discharge. Single-dose oral fluconazole.', href: '/ca/yeast-infection-treatment-online' },
  { name: 'Cold Sore', summary: 'HSV-1 outbreak. Oral acyclovir or valacyclovir within 48h shortens episode.', href: '/ca/cold-sore-treatment-online' },
  { name: 'Seasonal Allergies', summary: 'Sneezing, congestion, itchy eyes. Intranasal steroids + antihistamines.', href: '/ca/seasonal-allergies-treatment-online' },
  { name: 'Skin Rash / Eczema', summary: 'Itchy, dry, inflamed skin. Topical corticosteroid first-line.', href: '/ca/eczema-treatment-online' },
];

const FAQS = [
  {
    q: 'Is TeleDirectMD a real urgent care for Aetna members in California?',
    a: "Yes. TeleDirectMD is a physician-led telehealth practice providing same-day virtual urgent care for adults 18+ in California. Dr. Parth Bhavsar, MD (NPI 1104323203) is board-certified in Family Medicine and is the treating physician for all visits. We are in-network with Aetna commercial plans in California effective April 30, 2026. We are HIPAA-compliant and LegitScript certified.",
  },
  {
    q: 'What is the difference between this and in-person urgent care?',
    a: "In-person urgent care typically costs $160–$320 cash (or your Aetna urgent-care copay, often $50–$100) and includes hands-on exam, point-of-care testing (rapid strep, flu, COVID swabs), wound care, and X-rays when needed. TeleDirectMD covers the subset of urgent-care complaints that can be safely evaluated via video — typically $10–$40 with your Aetna copay or $79 self-pay. We will refer you to in-person care for anything requiring physical exam, imaging, IV fluids, or in-person testing.",
  },
  {
    q: 'When should I go to in-person urgent care or the ER instead?',
    a: "Go in-person for: chest pain, severe shortness of breath, stroke symptoms (FAST: face/arm/speech/time), severe abdominal pain, suspected fracture, deep cuts needing stitches, head injury with loss of consciousness, severe allergic reactions, suicidal thoughts, or pediatric emergencies. Call 911 or go to the nearest ER for life-threatening symptoms. TeleDirectMD is for non-emergency adult conditions only.",
  },
  {
    q: 'How fast can I be seen?',
    a: 'Most California Aetna members are seen same-day, typically within 1–4 hours of booking. Evening and weekend visits are routinely available. After booking, you complete a brief intake, then connect with Dr. Bhavsar via secure video — no app download required.',
  },
  {
    q: 'Will Aetna pay for this visit?',
    a: "Yes. Telehealth visits with a licensed physician are covered under your Aetna commercial plan's medical benefit. California's Telehealth Advancement Act (<a href='https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=2290.5' target='_blank' rel='noopener'>Business and Professions Code §2290.5</a>) requires Aetna and other commercial plans to reimburse medically necessary telehealth on terms comparable to in-person care, and <a href='https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=INS&sectionNum=10123.85' target='_blank' rel='noopener'>Insurance Code §10123.85</a> codifies parity requirements. Your cost will be your plan's copay — typically $10–$40, often $0 for large California employer plans. You can confirm in-network status in the <a href='https://www.aetna.com/dsepublic/#/contentPage?page=providerSearchLanding' target='_blank' rel='noopener'>Aetna provider directory</a>. Aetna Medicaid, Medicare fee-for-service, and Aetna Medicare Advantage are NOT accepted.",
  },
  {
    q: 'Can the doctor prescribe medication?',
    a: "Yes — for non-controlled medications. Dr. Bhavsar can prescribe antibiotics, antivirals, antihistamines, inhalers, blood pressure medications, statins, PPIs (omeprazole), birth control, and many other commonly used medications. Prescriptions are sent electronically to your preferred California pharmacy (CVS, Walgreens, Rite Aid, Walmart, Safeway, or any retail/independent pharmacy). We do NOT prescribe controlled substances (Schedule II–V), including opioids, ADHD stimulants, benzodiazepines, or testosterone.",
  },
  {
    q: 'What if my condition requires in-person evaluation?',
    a: "If Dr. Bhavsar determines your condition requires in-person evaluation (e.g., abdominal pain needing exam, suspected pneumonia needing imaging, possible fracture, etc.), he will tell you within the first few minutes of the visit and refer you to the appropriate level of care — urgent care, ER, or specialist. We do not charge for the visit fee if we cannot help you.",
  },
  {
    q: 'Which California pharmacies can receive my prescription?',
    a: "Any California-licensed retail or independent pharmacy. Prescriptions are sent electronically (e-prescribed via Surescripts) the moment your visit ends. The most commonly used chains in California are CVS, Walgreens, Rite Aid, Walmart, Costco, Safeway, Vons, Ralphs, Albertsons, and Kaiser-affiliated outpatient pharmacies. Independent and compounding pharmacies are also supported. You will receive an SMS confirmation when the pharmacy receives the script — typically within 5–10 minutes. If you are out-of-state temporarily, we can send to any U.S. pharmacy where a California-issued prescription is valid.",
  },
  {
    q: 'Does Aetna require prior authorization for a telehealth urgent-care visit?',
    a: "No. Aetna does not require prior authorization for a telehealth urgent-care visit with an in-network physician under your commercial plan. You can book directly and use your standard copay. Prior authorization may be required for certain medications (e.g., brand-name PPIs, brand-name inhalers, GLP-1s for weight loss) or for specialist referrals — but not for the visit itself. If a prescribed medication requires PA, Dr. Bhavsar will discuss generic alternatives during the visit.",
  },
  {
    q: 'What happens if we get disconnected during the video visit?',
    a: "If the video call drops, simply rejoin using the same link in your confirmation email or SMS — your visit room stays open for 30 minutes. If reconnection fails, Dr. Bhavsar will call you on the phone number you provided at booking. We do not charge an additional fee for connection issues, and your visit will continue from where it left off. If a stable video connection cannot be established, the visit can be completed by phone for routine refills and simple follow-ups; new urgent-care complaints typically require video for visual assessment.",
  },
  {
    q: 'Do you offer visits in Spanish or other languages?',
    a: "Dr. Bhavsar speaks English and Hindi natively and conversational Spanish for routine visits. For visits requiring full Spanish fluency or other languages (Mandarin, Cantonese, Vietnamese, Tagalog, Korean, Armenian, etc.), we provide three options: (1) a family member or trusted adult can join the video call to interpret, (2) we can use a HIPAA-compliant phone interpreter line during the visit (no extra cost to you), or (3) we can reschedule to a language-matched physician partner. California Senate Bill 223 supports patient language access; please note your preference at booking.",
  },
  {
    q: 'What technology do I need to join the visit?',
    a: "A smartphone (iPhone or Android, 2018 or newer), tablet, or laptop with a working camera and microphone, plus a stable internet connection (Wi-Fi or 4G/5G, minimum 1 Mbps up/down). No app download is required — the visit opens in your mobile or desktop browser (Safari, Chrome, Firefox, or Edge). You will receive the secure visit link via SMS and email 5 minutes before your appointment. If you have technology problems, our support team can call you and walk you through setup. We do not use Zoom, FaceTime, or general-purpose video tools — our platform is HIPAA-compliant and end-to-end encrypted.",
  },
];

const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalWebPage',
      '@id': 'https://teledirectmd.com/california/telehealth-urgent-care-aetna#webpage',
      name: 'California Telehealth Urgent Care That Accepts Aetna',
      description:
        "Same-day virtual urgent care for California Aetna commercial-plan members. UTI, sinus infection, asthma refills, hypertension refills, and more. Board-certified physician Dr. Parth Bhavsar, MD (NPI 1104323203).",
      url: 'https://teledirectmd.com/california/telehealth-urgent-care-aetna',
      lastReviewed: '2026-05-11',
      reviewedBy: {
        '@type': 'Physician',
        name: 'Parth Bhavsar, MD',
        identifier: { '@type': 'PropertyValue', name: 'NPI', value: '1104323203' },
      },
      medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['[data-speakable]'] },
    },
    {
      '@type': 'MedicalBusiness',
      '@id': 'https://teledirectmd.com/#telehealth-urgent-care',
      name: 'TeleDirectMD — California Telehealth Urgent Care',
      url: 'https://teledirectmd.com/california/telehealth-urgent-care-aetna',
      medicalSpecialty: 'Family Medicine',
      areaServed: { '@type': 'State', name: 'California' },
      priceRange: '$79 self-pay / $10–$40 with Aetna copay',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '125',
        bestRating: '5',
        worstRating: '1',
      },
      acceptsInsurance: [
        {
          '@type': 'HealthInsurancePlan',
          name: 'Aetna Commercial Plans — California',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: FAQS.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://teledirectmd.com' },
        { '@type': 'ListItem', position: 2, name: 'California', item: 'https://teledirectmd.com/ca' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Telehealth Urgent Care (Aetna)',
          item: 'https://teledirectmd.com/california/telehealth-urgent-care-aetna',
        },
      ],
    },
  ],
};

export default function TelehealthUrgentCareAetnaClient() {
  return (
    <div style={{ fontFamily: B.fb, background: B.bg, color: B.navy, minHeight: '100vh' }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700&display=swap"
        rel="stylesheet"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" style={{ padding: '12px 24px', maxWidth: 1100, margin: '0 auto', fontSize: 14, color: B.text }}>
        <a href="/" style={{ color: B.teal, textDecoration: 'none' }}>Home</a>
        <span style={{ margin: '0 8px' }}>/</span>
        <a href="/ca" style={{ color: B.teal, textDecoration: 'none' }}>California</a>
        <span style={{ margin: '0 8px' }}>/</span>
        <span>Telehealth Urgent Care (Aetna)</span>
      </nav>

      {/* Hero */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '40px 24px 28px' }}>
        <div
          style={{
            display: 'inline-block',
            padding: '6px 14px',
            background: '#F3EAFF',
            color: '#7B2CBF',
            fontWeight: 700,
            fontSize: 13,
            borderRadius: 999,
            marginBottom: 16,
            letterSpacing: 0.5,
          }}
        >
          AETNA IN-NETWORK · CALIFORNIA
        </div>
        <h1
          data-speakable="true"
          style={{
            fontFamily: B.fd,
            fontSize: 'clamp(30px, 5vw, 46px)',
            lineHeight: 1.15,
            color: B.navyDeep,
            margin: '0 0 16px',
            fontWeight: 600,
          }}
        >
          California Telehealth Urgent Care That Accepts Aetna
        </h1>
        <p
          data-speakable="true"
          style={{ fontSize: 19, lineHeight: 1.6, color: B.text, maxWidth: 760, margin: '0 0 24px' }}
        >
          Same-day virtual urgent care for adults in California — covered by your Aetna commercial plan. Board-certified
          physician Dr. Parth Bhavsar, MD, treats UTI, sinus infection, asthma refills, hypertension refills, pink eye,
          strep throat, and other non-emergency adult conditions. Most California Aetna members pay $10–$40, or choose
          flat $79 self-pay.
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a
            href="/book-online"
            style={{
              padding: '14px 28px',
              background: B.accent,
              color: B.white,
              textDecoration: 'none',
              borderRadius: 12,
              fontWeight: 700,
              fontSize: 16,
            }}
          >
            Book Same-Day Visit
          </a>
          <a
            href="/california-aetna"
            style={{
              padding: '14px 28px',
              background: B.white,
              color: B.teal,
              border: `2px solid ${B.teal}`,
              textDecoration: 'none',
              borderRadius: 12,
              fontWeight: 700,
              fontSize: 16,
            }}
          >
            See How Aetna Coverage Works
          </a>
        </div>
      </section>

      {/* What we treat */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 24px' }}>
        <h2 style={{ fontFamily: B.fd, fontSize: 28, color: B.navyDeep, margin: '0 0 8px', fontWeight: 600 }}>
          Conditions We Treat Via Telehealth in California
        </h2>
        <p style={{ color: B.text, fontSize: 15, margin: '0 0 20px', maxWidth: 760, lineHeight: 1.6 }}>
          Click any condition to see the dedicated California treatment page with evidence-based protocols, typical
          prescriptions, and what to expect.
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 12,
          }}
        >
          {CONDITIONS.map((c) => (
            <a
              key={c.name}
              href={c.href}
              style={{
                padding: 18,
                background: B.white,
                border: `1px solid ${B.border}`,
                borderRadius: 14,
                textDecoration: 'none',
                color: B.navy,
                display: 'block',
                boxShadow: B.shadow,
              }}
            >
              <div style={{ fontFamily: B.fd, fontSize: 17, fontWeight: 600, marginBottom: 6, color: B.navyDeep }}>
                {c.name} →
              </div>
              <p style={{ margin: 0, fontSize: 14, color: B.text, lineHeight: 1.5 }}>{c.summary}</p>
            </a>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 24px' }}>
        <h2 style={{ fontFamily: B.fd, fontSize: 28, color: B.navyDeep, margin: '0 0 16px', fontWeight: 600 }}>
          How a Same-Day Aetna Telehealth Visit Works
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 16,
          }}
        >
          {[
            {
              n: 1,
              title: 'Book Online',
              body: "Select 'Insurance' as your payment method and enter your Aetna member ID. We verify coverage before your visit.",
            },
            {
              n: 2,
              title: 'See Dr. Bhavsar',
              body: 'Secure video visit — no app download. Most visits last 8–15 minutes.',
            },
            {
              n: 3,
              title: 'Get Your Rx',
              body: 'Prescription sent electronically to your preferred California pharmacy.',
            },
            {
              n: 4,
              title: 'Aetna Billed',
              body: "We submit your claim to Aetna using CPT 99213/99214. You'll receive an EOB in 2–4 weeks.",
            },
          ].map((s) => (
            <div
              key={s.n}
              style={{
                padding: 20,
                background: B.white,
                border: `1px solid ${B.border}`,
                borderRadius: 16,
                boxShadow: B.shadow,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 999,
                  background: B.teal,
                  color: B.white,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  marginBottom: 12,
                }}
              >
                {s.n}
              </div>
              <div style={{ fontFamily: B.fd, fontSize: 17, fontWeight: 600, color: B.navyDeep, marginBottom: 6 }}>
                {s.title}
              </div>
              <p style={{ margin: 0, fontSize: 14, color: B.text, lineHeight: 1.6 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Compare urgent care vs telehealth */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 24px' }}>
        <div
          style={{
            padding: 28,
            background: B.white,
            border: `1px solid ${B.border}`,
            borderRadius: 20,
            boxShadow: B.shadow,
          }}
        >
          <h2 style={{ fontFamily: B.fd, fontSize: 26, color: B.navyDeep, margin: '0 0 12px', fontWeight: 600 }}>
            California Aetna: Urgent Care vs. Telehealth — Typical Costs
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15 }}>
              <thead>
                <tr style={{ background: B.bg }}>
                  <th style={{ textAlign: 'left', padding: 12, color: B.navyDeep, fontWeight: 700, borderBottom: `2px solid ${B.border}` }}>Setting</th>
                  <th style={{ textAlign: 'left', padding: 12, color: B.navyDeep, fontWeight: 700, borderBottom: `2px solid ${B.border}` }}>Aetna Copay (typical)</th>
                  <th style={{ textAlign: 'left', padding: 12, color: B.navyDeep, fontWeight: 700, borderBottom: `2px solid ${B.border}` }}>Self-Pay Cash</th>
                  <th style={{ textAlign: 'left', padding: 12, color: B.navyDeep, fontWeight: 700, borderBottom: `2px solid ${B.border}` }}>Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: 12, borderBottom: `1px solid ${B.border}`, fontWeight: 600 }}>TeleDirectMD Telehealth</td>
                  <td style={{ padding: 12, borderBottom: `1px solid ${B.border}`, color: B.teal, fontWeight: 700 }}>$10–$40</td>
                  <td style={{ padding: 12, borderBottom: `1px solid ${B.border}` }}>$79 flat</td>
                  <td style={{ padding: 12, borderBottom: `1px solid ${B.border}` }}>1–4 hrs same day</td>
                </tr>
                <tr>
                  <td style={{ padding: 12, borderBottom: `1px solid ${B.border}` }}>In-Person Urgent Care</td>
                  <td style={{ padding: 12, borderBottom: `1px solid ${B.border}` }}>$50–$100 + tests</td>
                  <td style={{ padding: 12, borderBottom: `1px solid ${B.border}` }}>$160–$320</td>
                  <td style={{ padding: 12, borderBottom: `1px solid ${B.border}` }}>1–3 hrs wait + drive</td>
                </tr>
                <tr>
                  <td style={{ padding: 12, borderBottom: `1px solid ${B.border}` }}>Hospital ER</td>
                  <td style={{ padding: 12, borderBottom: `1px solid ${B.border}` }}>$150–$500 + coinsurance</td>
                  <td style={{ padding: 12, borderBottom: `1px solid ${B.border}` }}>$1,200–$3,000+</td>
                  <td style={{ padding: 12, borderBottom: `1px solid ${B.border}` }}>3–8 hrs</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ color: B.text, fontSize: 13, lineHeight: 1.6, margin: '12px 0 0' }}>
            Cost ranges based on California market rates and typical Aetna commercial plan copay structures (2026). Your
            specific cost depends on your plan, deductible status, and the complexity of the visit. Verify benefits with
            Aetna at aetna.com before booking.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 24px' }}>
        <h2 style={{ fontFamily: B.fd, fontSize: 30, color: B.navyDeep, margin: '0 0 16px', fontWeight: 600 }}>
          California Aetna Telehealth Urgent Care — FAQ
        </h2>
        {FAQS.map((f) => (
          <details
            key={f.q}
            style={{
              background: B.white,
              border: `1px solid ${B.border}`,
              borderRadius: 12,
              padding: '14px 20px',
              marginBottom: 10,
            }}
          >
            <summary
              data-speakable="true"
              style={{ cursor: 'pointer', fontFamily: B.fd, fontSize: 17, fontWeight: 600, color: B.navyDeep, lineHeight: 1.4 }}
            >
              {f.q}
            </summary>
            <p style={{ marginTop: 12, fontSize: 15, color: B.text, lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: f.a }} />
          </details>
        ))}
      </section>

      {/* Related California Aetna resources */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 24px 8px' }}>
        <h2 style={{ fontFamily: B.fd, fontSize: 24, color: B.navyDeep, margin: '0 0 16px', fontWeight: 600 }}>
          Related California Aetna Resources
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 16,
          }}
        >
          {[
            { href: '/california-aetna', t: 'Aetna Telehealth in California (Hub)', d: 'Patient-friendly hub covering Aetna coverage, copays, plans, and city availability.' },
            { href: '/insurance/aetna/california', t: 'Aetna California — Full Details', d: 'Insurer-first page with state context, parity laws, and the full Aetna plan list.' },
            { href: '/news/aetna-california-may-2026', t: 'Announcement: Aetna CA (May 2026)', d: 'Network expansion announcement with effective date and member benefits.' },
            { href: '/insurance/aetna/california/uti-treatment', t: 'Aetna CA: UTI Treatment', d: 'Same-day antibiotic prescription for UTI — Aetna commercial plans accepted in California.' },
            { href: '/insurance/aetna/california/hypertension-refill', t: 'Aetna CA: Hypertension Refills', d: 'Blood pressure medication refills via Aetna telehealth in California.' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                display: 'block',
                padding: 20,
                background: B.white,
                border: `1px solid ${B.border}`,
                borderRadius: 14,
                textDecoration: 'none',
                color: B.navyDeep,
                boxShadow: B.shadow,
              }}
            >
              <div style={{ fontFamily: B.fd, fontSize: 17, fontWeight: 600, color: B.teal, marginBottom: 6 }}>{link.t} →</div>
              <div style={{ fontSize: 14, color: B.text, lineHeight: 1.5 }}>{link.d}</div>
            </a>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '24px 24px 64px' }}>
        <div
          style={{
            padding: 32,
            background: `linear-gradient(135deg, ${B.teal}, ${B.navyDeep})`,
            color: B.white,
            borderRadius: 24,
            textAlign: 'center',
          }}
        >
          <h2 style={{ fontFamily: B.fd, fontSize: 26, margin: '0 0 12px', fontWeight: 600, color: B.white }}>
            See an MD Today — California Aetna In-Network
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.92)', margin: '0 0 24px' }}>
            Same-day video visit with Dr. Parth Bhavsar, MD. Most California Aetna members pay $10–$40 — or flat $79 self-pay.
          </p>
          <a
            href="/book-online"
            style={{
              display: 'inline-block',
              padding: '14px 32px',
              background: B.accent,
              color: B.white,
              textDecoration: 'none',
              borderRadius: 12,
              fontWeight: 700,
              fontSize: 16,
            }}
          >
            Book Your Visit
          </a>
        </div>
        <p style={{ fontSize: 12, color: B.text, marginTop: 16, textAlign: 'center', lineHeight: 1.6 }}>
          TeleDirectMD does not treat emergencies. For chest pain, stroke symptoms, severe shortness of breath, severe
          bleeding, suspected fractures, or other emergencies, call 911 or go to the nearest ER. Adults 18+ only.
          Information reflects active contracts as of May 2026.
        </p>
      </section>
    </div>
  );
}
