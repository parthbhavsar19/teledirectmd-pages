/**
 * SymptomAcneBreakout.js — TeleDirectMD Symptom Page v3
 *
 * Symptom: Acne Breakout
 * Slug:    /symptoms/acne-breakout/
 * ICD-10:  L70.0 — Acne vulgaris
 *
 * v3 standard: inline opener, vertical cost bars (tdmd-vbar), FaqAccordion (12 items),
 * 4 JSON-LD schemas (MedicalWebPage + FAQPage + HowTo + BreadcrumbList), NPI 1104323203.
 *
 * Hard rules:
 *   • $79 only — price must not be under-quoted
 *   • FAQPage schema only (no QA variant)
 *   • No CitableSummaryBlock import
 *   • NPI 1104323203 in Physician schema
 *   • Literal < and > in JSX text escaped as &lt; &gt;
 *   • Medically reviewed by Parth Bhavsar, MD — Updated May 23, 2026
 *
 * Generated: 2026-05-23. DO NOT edit manually — regenerate from config.
 */

import FaqAccordion from '../../components/FaqAccordion';

// ─── Page constants ────────────────────────────────────────────────────────────
const PAGE_URL = 'https://teledirectmd.com/symptoms/acne-breakout/';
const PAGE_TITLE = `Acne Breakout — What Might Be Causing It and When to See a Doctor | TeleDirectMD`;
const DATE_PUBLISHED = '2026-05-23';
const DATE_MODIFIED = '2026-05-23';
const LAST_REVIEWED = '2026-05-23';

const PHYSICIAN = {
  name: 'Parth Bhavsar, MD',
  npi: '1104323203',
  specialty: 'Family Medicine',
  headshot: '/images/dr-parth-bhavsar.jpg',
  bioUrl: '/about',
};

// ─── Vertical cost comparison bars ────────────────────────────────────────────
const COST_BARS = [
  { name: 'TeleDirectMD', value: '$79', heightPct: 16, isTdmd: true },
  { name: 'Retail Clinic', value: '$139', heightPct: 28 },
  { name: 'Urgent Care', value: '$200', heightPct: 40 },
  { name: 'ER Visit', value: '$2,715', heightPct: 100 },
];

// ─── Medications ───────────────────────────────────────────────────────────────
const MEDICATIONS = [
  {
    generic: `tretinoin cream/gel`,
    brand: `Retin-A`,
    form: `Topical cream/gel`,
    drugClass: `Topical retinoid`,
    dose: `0.025–0.1% applied nightly to affected areas`,
    price: `$18–$90`,
    priceUrl: `https://www.goodrx.com/tretinoin`,
    priceLabel: `GoodRx`,
    sideEffects: `Initial dryness, peeling, photosensitivity; use sunscreen`,
  },
  {
    generic: `doxycycline hyclate`,
    brand: `Vibramycin`,
    form: `Oral capsule`,
    drugClass: `Tetracycline antibiotic`,
    dose: `50–100 mg PO daily or BID × 3 months`,
    price: `$10–$45`,
    priceUrl: `https://www.goodrx.com/doxycycline-hyclate`,
    priceLabel: `GoodRx`,
    sideEffects: `Photosensitivity, GI upset; take with food and water`,
  },
  {
    generic: `benzoyl peroxide`,
    brand: `PanOxyl`,
    form: `Topical wash/gel`,
    drugClass: `Topical antibacterial/keratolytic`,
    dose: `2.5–10% applied once or twice daily`,
    price: `$7–$20`,
    priceUrl: `https://www.goodrx.com/benzoyl-peroxide`,
    priceLabel: `GoodRx`,
    sideEffects: `Dryness, bleaching of clothing and linens`,
  },
  {
    generic: `adapalene`,
    brand: `Differin`,
    form: `Topical gel`,
    drugClass: `Topical retinoid`,
    dose: `0.1% applied nightly`,
    price: `$15–$45`,
    priceUrl: `https://www.goodrx.com/adapalene`,
    priceLabel: `GoodRx`,
    sideEffects: `Initial irritation and peeling; less photosensitivity than tretinoin`,
  },
];

// ─── FAQ items (12) ───────────────────────────────────────────────────────────
const FAQ_ITEMS = [
  {
    question: `What could be causing my acne breakout?`,
    answerPlain: `Acne breakouts are most commonly caused by excess sebum production, follicular plugging, and Cutibacterium acnes (formerly P. acnes) bacterial overgrowth. Contributing factors include hormonal fluctuations (menstrual cycle, polycystic ovary syndrome, puberty), stress, certain medications (corticosteroids, lithium, some birth controls), occlusive cosmetics, and diet. A physician evaluation helps identify the pattern of breakout and any contributing systemic factors.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Acne breakouts are most commonly caused by excess sebum production, follicular plugging, and Cutibacterium acnes (formerly P. acnes) bacterial overgrowth. Contributing factors include hormonal fluctuations (menstrual cycle, polycystic ovary syndrome, puberty), stress, certain medications (corticosteroids, lithium, some birth controls), occlusive cosmetics, and diet. A physician evaluation helps identify the pattern of breakout and any contributing systemic factors.` }} />
    ),
  },
  {
    question: `When should I see a doctor for an acne breakout?`,
    answerPlain: `See a physician if OTC benzoyl peroxide and salicylic acid have not improved acne after 8–12 weeks, breakouts are painful cystic or nodular lesions, you are developing significant scarring, acne is causing psychological distress, or you suspect a hormonal cause. Per AAD guidelines, prescription topical retinoids, antibiotics, or combined therapy significantly improve moderate-to-severe acne beyond what OTC products can achieve.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `See a physician if OTC benzoyl peroxide and salicylic acid have not improved acne after 8–12 weeks, breakouts are painful cystic or nodular lesions, you are developing significant scarring, acne is causing psychological distress, or you suspect a hormonal cause. Per AAD guidelines, prescription topical retinoids, antibiotics, or combined therapy significantly improve moderate-to-severe acne beyond what OTC products can achieve.` }} />
    ),
  },
  {
    question: `When is an acne breakout an emergency?`,
    answerPlain: `Most acne is not an emergency, but seek urgent in-person care if a facial cyst or nodule develops rapid spreading redness, warmth, and swelling consistent with cellulitis, or if fever develops. Severe acne fulminans — a rare explosive inflammatory eruption with systemic symptoms — requires urgent in-person dermatology care. For typical cystic acne, the ER is not appropriate; a same-day $79 telehealth evaluation is the right first step.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Most acne is not an emergency, but seek urgent in-person care if a facial cyst or nodule develops rapid spreading redness, warmth, and swelling consistent with cellulitis, or if fever develops. Severe acne fulminans — a rare explosive inflammatory eruption with systemic symptoms — requires urgent in-person dermatology care. For typical cystic acne, the ER is not appropriate; a same-day $79 telehealth evaluation is the right first step.` }} />
    ),
  },
  {
    question: `How long is too long to have an acne breakout before seeing a doctor?`,
    answerPlain: `If you have been using OTC acne products consistently for 8–12 weeks without meaningful improvement, a physician evaluation is appropriate. Moderate acne (multiple pustules or papules covering a significant portion of the face) and severe acne (cysts, nodules, or extensive involvement) should be evaluated earlier — within 4–8 weeks of onset — to prevent scarring. The earlier prescription-strength treatment is initiated, the better the long-term outcome.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `If you have been using OTC acne products consistently for 8–12 weeks without meaningful improvement, a physician evaluation is appropriate. Moderate acne (multiple pustules or papules covering a significant portion of the face) and severe acne (cysts, nodules, or extensive involvement) should be evaluated earlier — within 4–8 weeks of onset — to prevent scarring. The earlier prescription-strength treatment is initiated, the better the long-term outcome.` }} />
    ),
  },
  {
    question: `Can a virtual doctor evaluate an acne breakout?`,
    answerPlain: `Yes — acne is one of the most effective conditions for telehealth evaluation. A physician can assess acne severity (comedonal, inflammatory, cystic/nodular), distribution, and likely contributing factors via video visit. California Business and Professions Code 2290.5 authorizes telehealth evaluation and prescription for dermatologic conditions including acne. TeleDirectMD provides $79 California evaluations for adults 18+.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Yes — acne is one of the most effective conditions for telehealth evaluation. A physician can assess acne severity (comedonal, inflammatory, cystic/nodular), distribution, and likely contributing factors via video visit. California Business and Professions Code 2290.5 authorizes telehealth evaluation and prescription for dermatologic conditions including acne. TeleDirectMD provides $79 California evaluations for adults 18+.` }} />
    ),
  },
  {
    question: `What will the doctor do for an acne breakout at TeleDirectMD?`,
    answerPlain: `The physician evaluates acne lesion type (comedones, papules, pustules, cysts), distribution (face, back, chest), and severity, as well as hormonal history, prior treatments, and current medications. Based on the evaluation, a physician may prescribe topical retinoids (tretinoin, adapalene), oral antibiotics (doxycycline), topical antibiotics, or combined therapy per AAD guidelines. This is a physician evaluation — prescribing depends on what is clinically appropriate for your specific acne pattern.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `The physician evaluates acne lesion type (comedones, papules, pustules, cysts), distribution (face, back, chest), and severity, as well as hormonal history, prior treatments, and current medications. Based on the evaluation, a physician may prescribe topical retinoids (tretinoin, adapalene), oral antibiotics (doxycycline), topical antibiotics, or combined therapy per AAD guidelines. This is a physician evaluation — prescribing depends on what is clinically appropriate for your specific acne pattern.` }} />
    ),
  },
  {
    question: `Will I get a prescription for acne?`,
    answerPlain: `A prescription depends on the evaluation. If moderate-to-severe inflammatory acne that has not responded to OTC treatment is identified, a physician may prescribe topical retinoids, oral doxycycline, or a combination approach. For mild comedonal acne, OTC adapalene (now available without a prescription) or benzoyl peroxide may be recommended before proceeding to prescription therapy.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `A prescription depends on the evaluation. If moderate-to-severe inflammatory acne that has not responded to OTC treatment is identified, a physician may prescribe topical retinoids, oral doxycycline, or a combination approach. For mild comedonal acne, OTC adapalene (now available without a prescription) or benzoyl peroxide may be recommended before proceeding to prescription therapy.` }} />
    ),
  },
  {
    question: `Is an acne breakout something I can manage at home?`,
    answerPlain: `Mild acne (a few comedones and small papules) can often be improved with consistent OTC use of benzoyl peroxide 2.5–5% (applied nightly), salicylic acid cleanser, non-comedogenic moisturizer with SPF, and avoiding picking or squeezing lesions. Per AAD guidance, consistently applied OTC benzoyl peroxide is the most evidence-supported non-prescription acne treatment. If OTC measures fail after 8–12 weeks, a physician evaluation is appropriate.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Mild acne (a few comedones and small papules) can often be improved with consistent OTC use of benzoyl peroxide 2.5–5% (applied nightly), salicylic acid cleanser, non-comedogenic moisturizer with SPF, and avoiding picking or squeezing lesions. Per AAD guidance, consistently applied OTC benzoyl peroxide is the most evidence-supported non-prescription acne treatment. If OTC measures fail after 8–12 weeks, a physician evaluation is appropriate.` }} />
    ),
  },
  {
    question: `Does insurance cover a TeleDirectMD visit for acne?`,
    answerPlain: `TeleDirectMD accepts Aetna, UnitedHealthcare (UHC), and Blue Cross Blue Shield (BCBS) commercial plans. The self-pay rate is $79 flat — no subscription, no hidden fees. Prescription costs are separate and vary by pharmacy; tretinoin is typically $18–$90 at GoodRx pricing.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `TeleDirectMD accepts Aetna, UnitedHealthcare (UHC), and Blue Cross Blue Shield (BCBS) commercial plans. The self-pay rate is $79 flat — no subscription, no hidden fees. Prescription costs are separate and vary by pharmacy; tretinoin is typically $18–$90 at GoodRx pricing.` }} />
    ),
  },
  {
    question: `How fast can I be seen for an acne breakout?`,
    answerPlain: `Same-day $79 video evaluations are frequently available for California adults. Book at book.teledirectmd.com — select your preferred time and a board-certified Family Medicine physician will meet you by secure video. No referral required. Most visits are 15 minutes.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Same-day $79 video evaluations are frequently available for California adults. Book at book.teledirectmd.com — select your preferred time and a board-certified Family Medicine physician will meet you by secure video. No referral required. Most visits are 15 minutes.` }} />
    ),
  },
  {
    question: `What if I need an in-person visit for my acne?`,
    answerPlain: `If severe nodulocystic acne warranting isotretinoin (Accutane) is identified, you will be referred to dermatology for in-person evaluation, as isotretinoin requires an iPLEDGE program enrollment, monthly labs, and specialist prescribing. Acne complicated by facial cellulitis or abscess also requires in-person evaluation. You will be referred with clear instructions at no additional charge.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `If severe nodulocystic acne warranting isotretinoin (Accutane) is identified, you will be referred to dermatology for in-person evaluation, as isotretinoin requires an iPLEDGE program enrollment, monthly labs, and specialist prescribing. Acne complicated by facial cellulitis or abscess also requires in-person evaluation. You will be referred with clear instructions at no additional charge.` }} />
    ),
  },
  {
    question: `How is acne different from rosacea or folliculitis?`,
    answerPlain: `Acne vulgaris involves comedones (blackheads, whiteheads), papules, pustules, and potentially cysts primarily on the face, chest, and back; it is associated with sebaceous gland activity and hormonal influence. Rosacea causes flushing, persistent facial redness, and papulopustular lesions but without comedones; it is triggered by sun, alcohol, and spicy foods. Folliculitis causes small pustules centered on hair follicles, often on the trunk or extremities, typically from Staphylococcal or fungal infection. A physician's evaluation helps distinguish these conditions.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Acne vulgaris involves comedones (blackheads, whiteheads), papules, pustules, and potentially cysts primarily on the face, chest, and back; it is associated with sebaceous gland activity and hormonal influence. Rosacea causes flushing, persistent facial redness, and papulopustular lesions but without comedones; it is triggered by sun, alcohol, and spicy foods. Folliculitis causes small pustules centered on hair follicles, often on the trunk or extremities, typically from Staphylococcal or fungal infection. A physician's evaluation helps distinguish these conditions.` }} />
    ),
  },
];

// ─── Related condition links ───────────────────────────────────────────────────
const RELATED_CONDITIONS = [
  { slug: '/uti-treatment-online/', label: 'UTI Treatment Online' },
  { slug: '/sinus-infection-treatment-online/', label: 'Sinus Infection Treatment Online' },
  { slug: '/sore-throat-treatment-online/', label: 'Sore Throat Treatment Online' },
  { slug: '/common-cold-treatment-online/', label: 'Common Cold Treatment Online' },
  { slug: '/asthma-refills-online/', label: 'Asthma Inhaler Refills Online' },
];

// ─── JSON-LD schemas ───────────────────────────────────────────────────────────
// Schema types: "MedicalWebPage" "FAQPage" "HowTo" "BreadcrumbList"
function buildSchemas() {
  const medicalWebPage = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: PAGE_TITLE,
    url: PAGE_URL,
    description: `Acne breakout evaluation online. Determine severity, likely cause, and whether prescription treatment is needed. $79 California video evaluation by board-certified Family Medicine physician.`,
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    inLanguage: 'en-US',
    about: {
      '@type': 'MedicalCondition',
      name: 'Acne Vulgaris',
      alternateName: ['Acne', 'Pimples', 'Acne Breakout', 'Cystic Acne'],
      code: { '@type': 'MedicalCode', code: 'L70.0', codingSystem: 'ICD-10-CM' },
    },
    medicalAudience: {
      '@type': 'MedicalAudience',
      audienceType: 'Patient',
      geographicArea: { '@type': 'AdministrativeArea', name: 'United States' },
    },
    reviewedBy: {
      '@type': 'Physician',
      '@id': 'https://teledirectmd.com/about/#physician-parth-bhavsar',
      name: PHYSICIAN.name,
      identifier: { '@type': 'PropertyValue', propertyID: 'NPI', value: PHYSICIAN.npi },
      medicalSpecialty: PHYSICIAN.specialty,
      hasCredential: [
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'degree', name: 'Doctor of Medicine (MD)' },
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'Board Certification — American Board of Family Medicine' },
      ],
      worksFor: { '@type': 'MedicalOrganization', name: 'TeleDirectMD', url: 'https://teledirectmd.com' },
      sameAs: ['https://npiregistry.cms.hhs.gov/provider-view/1104323203', 'https://teledirectmd.com/about/'],
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: [
        '#sym-acne-breakout-opening',
        '#sym-acne-breakout-opening p',
        '.tdmd-sym__byline',
        '#sym-acne-breakout-faq',
      ],
    },
  };

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answerPlain || '' },
    })),
  };

  const howTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to Get an Acne Breakout Evaluation Online`,
    description: `Three steps to receive a physician evaluation for acne breakout from a board-certified physician.`,
    totalTime: 'PT30M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '79' },
    step: [
      { '@type': 'HowToStep', position: 1, name: `Book your $79 video visit`, text: `Select acne on teledirectmd.com. Self pay $79. No referral needed. Same-day visits often available for California adults.`, url: `https://teledirectmd.com/symptoms/acne-breakout/` },
      { '@type': 'HowToStep', position: 2, name: `See a board-certified MD by secure video`, text: `Physician evaluates acne severity, lesion type, distribution, and contributing factors via video to determine appropriate treatment.`, url: `https://teledirectmd.com/symptoms/acne-breakout/` },
      { '@type': 'HowToStep', position: 3, name: `Receive your evaluation results and plan`, text: `Prescription retinoid, antibiotic, or combination therapy provided if indicated. Dermatology referral for isotretinoin if appropriate.`, url: `https://teledirectmd.com/symptoms/acne-breakout/` }
    ],
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'TeleDirectMD', item: 'https://teledirectmd.com' },
      { '@type': 'ListItem', position: 2, name: 'Symptoms', item: 'https://teledirectmd.com/symptoms/' },
      { '@type': 'ListItem', position: 3, name: `Acne Breakout`, item: PAGE_URL },
    ],
  };

  return [medicalWebPage, faqPage, howTo, breadcrumb];
}

// ─── Page-scoped CSS ───────────────────────────────────────────────────────────
const PAGE_CSS = `
.tdmd-sym { color: var(--tdmd-text); }
.tdmd-sym .tdmd-sym__byline { display:flex;align-items:center;gap:1rem;flex-wrap:wrap;margin:1rem 0 0;padding:0.85rem 1rem;background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:var(--tdmd-radius,18px); }
.tdmd-sym .tdmd-sym__byline img { width:56px;height:56px;border-radius:50%;object-fit:cover;border:2px solid var(--tdmd-teal);flex-shrink:0;background:#fff; }
.tdmd-sym .tdmd-sym__byline-text { display:flex;flex-direction:column;gap:0.15rem;font-size:0.92rem;line-height:1.45; }
.tdmd-sym .tdmd-sym__byline-name { font-weight:700;color:var(--tdmd-navy); }
.tdmd-sym .tdmd-sym__byline-meta { color:var(--tdmd-muted);font-size:0.85rem; }
.tdmd-sym .tdmd-sym__byline a { color:var(--tdmd-teal);font-weight:600;text-decoration:underline;text-underline-offset:2px; }
.tdmd-sym .tdmd-sym__opener { margin:1.5rem 0 0.5rem; }
.tdmd-sym .tdmd-sym__opener p { margin:0;font-size:1.05rem;line-height:1.7;color:var(--tdmd-text); }
.tdmd-sym .tdmd-sym__opener p strong { color:var(--tdmd-navy); }
.tdmd-sym .tdmd-sym__opener p a { color:var(--tdmd-teal);text-decoration:underline;text-underline-offset:2px;font-weight:600; }
.tdmd-sym .tdmd-sym__dual { display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1.25rem;margin-top:1rem; }
.tdmd-sym .tdmd-sym__dual-card { background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:var(--tdmd-radius,18px);padding:1.1rem 1.25rem;box-shadow:var(--tdmd-shadow); }
.tdmd-sym .tdmd-sym__dual-card--good { border-left:5px solid #2E7D52; }
.tdmd-sym .tdmd-sym__dual-card--alert { border-left:5px solid var(--tdmd-accent); }
.tdmd-sym .tdmd-sym__dual-card h3 { margin:0 0 0.5rem;font-size:1.1rem;color:var(--tdmd-navy); }
.tdmd-sym .tdmd-sym__dual-card ul { margin:0;padding-left:1.1rem;line-height:1.55; }
.tdmd-sym .tdmd-sym__dual-card li { margin:0.25rem 0; }
@media (max-width:720px) { .tdmd-sym .tdmd-sym__dual { grid-template-columns:minmax(0,1fr); } }
.tdmd-sym .tdmd-sym__cta-strip { display:flex;justify-content:space-between;align-items:center;gap:1.25rem;flex-wrap:wrap;background:linear-gradient(135deg,var(--tdmd-teal) 0%,var(--tdmd-navy) 100%);color:#fff;padding:1.25rem 1.5rem;border-radius:var(--tdmd-radius,18px);margin:1.25rem 0;box-shadow:var(--tdmd-shadow); }
.tdmd-sym .tdmd-sym__cta-strip p { margin:0;font-size:1.05rem;font-weight:700; }
.tdmd-sym .tdmd-sym__cta-strip small { display:block;font-weight:400;margin-top:0.2rem;opacity:0.92;font-size:0.86rem; }
.tdmd-sym .tdmd-sym__cta-btn { background:#fff;color:var(--tdmd-navy);font-weight:700;padding:0.7rem 1.4rem;border-radius:999px;text-decoration:none;white-space:nowrap; }
.tdmd-sym .tdmd-sym__cta-btn:hover { background:#FFF6F2;color:var(--tdmd-accent); }
.tdmd-sym .tdmd-sym__sibling-grid { display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:0.85rem;margin-top:1rem; }
.tdmd-sym .tdmd-sym__sibling { display:flex;flex-direction:column;gap:0.25rem;padding:0.9rem 1rem;background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:14px;color:var(--tdmd-text);text-decoration:none;transition:.2s; }
.tdmd-sym .tdmd-sym__sibling:hover { border-color:var(--tdmd-teal);transform:translateY(-2px);box-shadow:var(--tdmd-shadow); }
.tdmd-sym .tdmd-sym__sibling-label { font-weight:700;color:var(--tdmd-navy); }
.tdmd-sym .tdmd-sym__related-links { display:flex;flex-wrap:wrap;gap:0.4rem 0.85rem;margin-top:0.75rem;font-size:0.95rem; }
.tdmd-sym .tdmd-sym__related-links a { color:var(--tdmd-teal);font-weight:600;text-decoration:underline;text-underline-offset:2px; }
`;

// ─── Component ─────────────────────────────────────────────────────────────────
export default function SymptomAcneBreakout() {
  const schemas = buildSchemas();
  const pid = 'sym-acne-breakout';

  return (
    <>
      {/* JSON-LD schemas */}
      {schemas.map((schema, i) => (
        <script
          key={`schema-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />

      <div className="tdmd-sym">
        {/* ─── Breadcrumb ─────────────────────────────────────────────────── */}
        <nav className="tdmd-breadcrumbs" aria-label="Breadcrumb">
          <div className="tdmd-container" style={{ paddingTop: '0.5rem', paddingBottom: 0 }}>
            <a href="/">Home</a>
            <span className="tdmd-bc-sep" aria-hidden="true">/</span>
            <a href="/symptoms/">Symptoms</a>
            <span className="tdmd-bc-sep" aria-hidden="true">/</span>
            <span aria-current="page">Acne Breakout</span>
          </div>
        </nav>

        {/* ─── 1) HERO ──────────────────────────────────────────────────────── */}
        <section className="tdmd-hero" id={`${pid}-hero`}>
          <div className="tdmd-container">
            <div className="tdmd-hero-grid">
              <div className="tdmd-hero-copy">
                <h1 data-speakable="true" dangerouslySetInnerHTML={{ __html: `Acne Breakout — What Might Be Causing It and When to See a Doctor` }} />
                <p className="tdmd-hero-sub" data-speakable="true">
                  Experiencing persistent or worsening acne breakouts? A $79 California evaluation can assess severity, identify contributing factors, and determine whether prescription treatment is the right next step.
                </p>
                <p>
                  Acne breakouts range from occasional mild comedones to severe cystic lesions that can cause scarring. Knowing when OTC treatment is sufficient — and when prescription therapy is needed — requires a physician evaluation of lesion type, severity, and distribution. TeleDirectMD provides same-day physician evaluation for California adults via secure video visit. Self-pay is $79 with no insurance required.
                </p>

                {/* Physician byline (E-E-A-T) */}
                <div className="tdmd-sym__byline" aria-label="Reviewed by physician">
                  <img src={PHYSICIAN.headshot} alt={`${PHYSICIAN.name} headshot`} loading="eager" width={56} height={56} />
                  <div className="tdmd-sym__byline-text">
                    <span className="tdmd-sym__byline-name">
                      Medically reviewed by <a href={PHYSICIAN.bioUrl}>{PHYSICIAN.name}</a> — Board-Certified {PHYSICIAN.specialty}
                    </span>
                    <span className="tdmd-sym__byline-meta">
                      NPI {PHYSICIAN.npi} &amp;middot; Updated May 23, 2026
                    </span>
                  </div>
                </div>

                <p className="tdmd-toc-intro" style={{ marginTop: '1.25rem' }}><strong>Quick navigation:</strong></p>
                <ul className="tdmd-toc">
                  <li><a href={`#${pid}-opening`}>Overview</a></li>
                  <li><a href={`#${pid}-causes`}>What might be causing this?</a></li>
                  <li><a href={`#${pid}-red-flags`}>Red flags</a></li>
                  <li><a href={`#${pid}-self-care`}>Self-care to try first</a></li>
                  <li><a href={`#${pid}-when-to-book`}>When to book a visit</a></li>
                  <li><a href={`#${pid}-cost`}>Cost comparison</a></li>
                  <li><a href={`#${pid}-faq`}>FAQs</a></li>
                  <li><a href={`#${pid}-references`}>References</a></li>
                </ul>

                <ul className="tdmd-hero-benefits">
                  <li>Self pay $79 — no insurance required</li>
                  <li>MD-only care (no mid-levels)</li>
                  <li>Same-day evaluations available in California</li>
                  <li>Board-certified Family Medicine physician</li>
                  <li>e-Prescription to your pharmacy when appropriate</li>
                </ul>

                <div className="tdmd-hero-ctas">
                  <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a $79 California Evaluation</a>
                  <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">View All Adult Conditions</a>
                </div>

                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> L70.0 — Acne vulgaris (final coding depends on clinical details)</p>
              </div>

              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>What a TeleDirectMD Evaluation Includes</h2>
                  <ul>
                    <li>Acne severity and lesion type assessment</li>
                    <li>Contributing factor review (hormonal, dietary, medications)</li>
                    <li>Prescription retinoid or antibiotic if appropriate</li>
                    <li>e-Prescription to your pharmacy</li>
                    <li>Dermatology referral if isotretinoin is warranted</li>
                  </ul>
                  <p className="tdmd-hero-note">
                    Adults 18+ only. For severe nodulocystic acne requiring isotretinoin, a dermatology referral will be provided. TeleDirectMD is not an emergency service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2) INLINE OPENER (v3 — replaces CitableSummaryBlock) ──────────── */}
        <section className="tdmd-section tdmd-sym__opener" id={`${pid}-opening`}>
          <div className="tdmd-container">
            <p dangerouslySetInnerHTML={{ __html: `When should you see a doctor for an acne breakout? A physician evaluation is appropriate when OTC benzoyl peroxide and salicylic acid products have not meaningfully improved acne after 8–12 weeks of consistent use, when breakouts include painful cysts or nodules, or when significant scarring or psychological distress is present. Acne breakouts could be caused by hormonal fluctuations, medication side effects, PCOS, or standard acne vulgaris — and the most effective treatment depends on lesion type and severity. TeleDirectMD provides $79 same-day California video evaluation for adults with acne breakouts, with a board-certified Family Medicine physician assessing acne severity and determining appropriate prescription therapy.` }} />
            <p style={{ marginTop: '1rem' }}>
              <strong>Self-pay cost:</strong> $79 flat rate — no subscription, no hidden fees. Prescription costs are separate and vary by pharmacy. TeleDirectMD does not prescribe controlled substances in any state.
            </p>
            <p>
              TeleDirectMD physicians hold Board Certification from the <a href="https://www.theabfm.org/" rel="noopener" target="_blank">American Board of Family Medicine (ABFM)</a> and follow clinical guidelines from the AAD and AAFP. Every visit includes a structured symptom and history assessment.
            </p>
          </div>
        </section>

        {/* ─── 3) WHAT MIGHT BE CAUSING THIS ──────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-causes`}>
          <div className="tdmd-container">
            <h2>What Might Be Causing Acne Breakouts?</h2>
            <p>A physician would evaluate for the following contributing causes based on your acne pattern, location, severity, and history:</p>

            <h3>Common causes</h3>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `<strong>Acne vulgaris (standard acne):</strong> The most common skin condition in the US, affecting approximately 50 million Americans annually per AAD data. Caused by excess sebum, follicular plugging, and Cutibacterium acnes (C. acnes) bacterial overgrowth producing comedones, papules, and pustules. A physician evaluates severity (mild, moderate, severe) and selects appropriate topical or systemic therapy accordingly.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Hormonal acne:</strong> Androgens stimulate sebaceous gland activity; fluctuations during the menstrual cycle, perimenopause, or from hormonal medications can worsen acne. A physician would evaluate for a hormonal pattern when breakouts are predominantly on the lower face and jaw, worsen pre-menstrually, or occur alongside other signs of androgen excess (irregular periods, hirsutism).` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Medication-induced acne:</strong> Corticosteroids, lithium, some hormonal contraceptives (progestins), anabolic steroids, and certain anticonvulsants can trigger or worsen acne. A physician would review your medication list for acneigenic agents.` }} />
            </ul>

            <h3>Less common but requiring evaluation</h3>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `<strong>Polycystic ovary syndrome (PCOS):</strong> PCOS causes excess androgen production, leading to cystic acne, irregular periods, and hirsutism in women. A physician would evaluate for PCOS when acne is accompanied by these features, with appropriate lab referral.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Rosacea:</strong> An inflammatory skin condition that can look like acne with papules and pustules on the central face, but without comedones and with a background of persistent flushing and facial redness. Requires different treatment than acne vulgaris. A physician would evaluate for rosacea when comedones are absent and triggers include heat, alcohol, and spicy food.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Gram-negative folliculitis:</strong> A complication of long-term oral antibiotic use for acne, causing a sudden flare of pustules around the nose. A physician would consider this when acne worsens during or after prolonged antibiotic courses.` }} />
            </ul>

            <div className="tdmd-sym__cta-strip" role="complementary" style={{ marginTop: '1.5rem' }}>
              <div>
                <p>Not getting results from OTC acne products? Book a $79 evaluation</p>
                <small>Board-certified Family Medicine physician &amp;middot; California &amp;middot; Same-day available</small>
              </div>
              <a className="tdmd-sym__cta-btn" href="/book-online" rel="noopener">Book Now &amp;rarr;</a>
            </div>
          </div>
        </section>

        {/* ─── 4) RED FLAGS ────────────────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-red-flags`}>
          <div className="tdmd-container">
            <h2>Red Flags — When to Seek Urgent In-Person or Emergency Care</h2>
            <div className="tdmd-sym__dual-card tdmd-sym__dual-card--alert" style={{ marginTop: '0.75rem' }}>
              <h3>Seek Urgent Care If You Have</h3>
              <ul>
              <li dangerouslySetInnerHTML={{ __html: `<strong>Facial swelling, rapidly spreading redness, and warmth around an acne lesion</strong> — possible cellulitis; urgent in-person care` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Fever with facial skin infection</strong> — possible facial cellulitis or abscess; in-person or ER` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Acne fulminans — sudden explosive acne with systemic symptoms</strong> (fever, joint pain, weight loss) — urgent dermatology` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Rapidly spreading rash not consistent with acne</strong> — may be an allergic reaction or infection; evaluation needed` }} />
              </ul>
            </div>
          </div>
        </section>

        {/* ─── 5) SELF-CARE TO TRY FIRST ───────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-self-care`}>
          <div className="tdmd-container">
            <h2>Self-Care to Try First</h2>
            <p>For mild acne (a few comedones and papules) without cysts or nodules, the following OTC measures are evidence-based per AAD guidance:</p>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `<strong>Benzoyl peroxide 2.5–5% nightly</strong> — kills C. acnes and reduces follicular plugging. Most evidence-supported OTC ingredient. Bleaches fabrics; use old pillowcases.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Salicylic acid cleanser daily</strong> — unclogs pores and reduces inflammation for comedonal acne.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Non-comedogenic moisturizer with SPF 30+</strong> — essential if using drying active ingredients. Avoid occlusive or oil-based products.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Do not pick or squeeze lesions</strong> — picking significantly increases scarring risk and can spread bacterial infection.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Wash pillowcases twice weekly</strong> — reduces C. acnes and oil redeposition.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Consistency for at least 8–12 weeks</strong> — OTC products require consistent use for 2–3 months to show full effect; many people discontinue too early.` }} />
            </ul>
            <p>If OTC measures do not produce clear improvement after 8–12 weeks of consistent use, a physician evaluation for prescription-strength therapy is appropriate.</p>
          </div>
        </section>

        {/* ─── 6) WHEN TO BOOK A VISIT ──────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-when-to-book`}>
          <div className="tdmd-container">
            <h2>When to Book a TeleDirectMD Visit</h2>
            <p>A $79 California video evaluation is appropriate for acne breakouts when:</p>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `OTC benzoyl peroxide and salicylic acid have not improved acne after 8–12 weeks` }} />
              <li dangerouslySetInnerHTML={{ __html: `Breakouts include painful cysts or nodules (&gt;5 mm in diameter)` }} />
              <li dangerouslySetInnerHTML={{ __html: `Acne is producing visible scarring` }} />
              <li dangerouslySetInnerHTML={{ __html: `Acne pattern suggests hormonal cause (lower face/jaw, pre-menstrual flares)` }} />
              <li dangerouslySetInnerHTML={{ __html: `Acne involves the chest or back extensively` }} />
              <li dangerouslySetInnerHTML={{ __html: `Acne is causing significant psychological distress or social limitation` }} />
            </ul>
            <h3>What Happens in a TeleDirectMD Evaluation</h3>
            <ol>
              <li dangerouslySetInnerHTML={{ __html: `<strong>Book your visit</strong> at book.teledirectmd.com — select a same-day or next-day time slot. No referral required.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>15-minute secure video visit</strong> with a board-certified Family Medicine physician. The doctor evaluates acne severity, lesion type, distribution, hormonal history, prior treatments, and current medications.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Evaluation results and plan:</strong> Prescription topical retinoid (tretinoin, adapalene), oral antibiotic (doxycycline), or combination therapy provided if appropriate per AAD guidelines. Dermatology referral provided for isotretinoin candidacy.` }} />
            </ol>
            <div className="tdmd-sym__cta-strip" role="complementary" style={{ marginTop: '1.5rem' }}>
              <div>
                <p>Book a $79 California evaluation for acne breakout</p>
                <small>Same-day visits available &amp;middot; Board-certified Family Medicine &amp;middot; e-Prescription same day</small>
              </div>
              <a className="tdmd-sym__cta-btn" href="https://book.teledirectmd.com" rel="noopener">Book Now &amp;rarr;</a>
            </div>
          </div>
        </section>

        {/* ─── 7) COST COMPARISON (vertical bars — tdmd-vbar) ──────────────── */}
        <section className="tdmd-section" id={`${pid}-cost`}>
          <div className="tdmd-container">
            <h2>Evaluation Cost Comparison</h2>
            <p>TeleDirectMD&apos;s self-pay rate is <strong>$79</strong> for a complete MD video evaluation. Prescription medication costs are separate.</p>

            <div className="tdmd-price-grid">
              <div className="tdmd-price-card" aria-label="TeleDirectMD pricing">
                <h3>TeleDirectMD Video Evaluation</h3>
                <p className="tdmd-price-big">$79</p>
                <p className="tdmd-price-sub">Self-pay flat fee — no subscription</p>
                <ul className="tdmd-price-includes">
                  <li>Board-certified Family Medicine physician</li>
                  <li>Acne severity and cause assessment</li>
                  <li>Prescription retinoid or antibiotic if appropriate</li>
                  <li>No hidden fees — $79 is the total visit cost</li>
                </ul>
              </div>

              <div className="tdmd-price-chart" role="group" aria-label="Typical acne visit cost comparison">
                <h3>Typical Acne Visit Cost</h3>
                <p className="tdmd-price-caption">Typical out-of-pocket costs before insurance. Actual costs vary by location and plan.</p>
                <div className="tdmd-vbars" role="list" aria-label="Cost comparison bars">
                  {COST_BARS.map((bar, i) => (
                    <div key={i} className="tdmd-vbar" role="listitem" aria-label={`${bar.name}: ${bar.value}`}>
                      <span className="tdmd-vbar__value">{bar.value}</span>
                      <div
                        className={`tdmd-vbar__fill${bar.isTdmd ? ' tdmd-vbar__fill--tdmd' : ''}`}
                        style={{ height: `${bar.heightPct}%` }}
                        aria-hidden="true"
                      />
                      <span className={`tdmd-vbar__label${bar.isTdmd ? ' tdmd-vbar__label--tdmd' : ''}`}>{bar.name}</span>
                    </div>
                  ))}
                </div>
                <p className="tdmd-price-footnote">
                  TeleDirectMD $79 · Retail Clinic $139 · Urgent Care $200 · ER $2,715 avg.
                  Source: Mira Health cost benchmarks, Feb 2025.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 8) CTA STRIP ────────────────────────────────────────────────── */}
        <section className="tdmd-section" aria-label="Book a visit">
          <div className="tdmd-container">
            <div className="tdmd-sym__cta-strip" role="complementary">
              <div>
                <p>Book a same-day California evaluation — adults 18+ &amp;middot; $79 self-pay</p>
                <small>Board-certified Family Medicine &amp;middot; MD-only care &amp;middot; e-Prescription same day</small>
              </div>
              <a className="tdmd-sym__cta-btn" href="/book-online" rel="noopener">Book Now &amp;rarr;</a>
            </div>
          </div>
        </section>

        {/* ─── 9) FAQ ACCORDION ───────────────────────────────────────────── */}
        <section className="tdmd-section tdmd-faq" id={`${pid}-faq`}>
          <div className="tdmd-container">
            <FaqAccordion
              sectionTitle={`Frequently Asked Questions — Acne Breakout`}
              items={FAQ_ITEMS.map((f, i) => ({ ...f, id: `${pid}-faq-${i}` }))}
            />

            <div className="tdmd-bottom-cta" role="region" aria-label="Book a visit call to action">
              <div className="tdmd-bottom-cta-copy">
                <h3>Ready to get your acne breakout evaluated?</h3>
                <p>Book a same-day $79 California video visit. Board-certified Family Medicine &amp;middot; MD-only care.</p>
              </div>
              <div className="tdmd-bottom-cta-actions">
                <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit — $79</a>
                <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">View All Adult Conditions</a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 10) RELATED CONDITIONS ──────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-related-conditions`}>
          <div className="tdmd-container">
            <h2>Related Conditions We Treat Online</h2>
            <div className="tdmd-sym__sibling-grid">
              {RELATED_CONDITIONS.map((s) => (
                <a key={s.slug} className="tdmd-sym__sibling" href={s.slug}>
                  <span className="tdmd-sym__sibling-label">{s.label}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 11) RELATED RESOURCE LINKS ─────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-related`}>
          <div className="tdmd-container">
            <h2>Related Resources from TeleDirectMD</h2>
            <div className="tdmd-sym__related-links" aria-label="Related resources">
              <a href="/">Home</a>
              <a href="/symptoms/">All Symptoms</a>
              <a href="/what-we-treat">What We Treat</a>
              <a href="/book-online">Book Online</a>
              <a href="/about/">About Dr. Bhavsar</a>
              <a href="/faq">FAQ</a>
              <a href="/insurance">Insurance</a>
            </div>
          </div>
        </section>

        {/* ─── 12) REFERENCES ──────────────────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-references`}>
          <div className="tdmd-container">
            <h2>References and Primary Sources</h2>
            <ol className="tdmd-ref-list">
              <li><a href="https://www.aad.org/public/diseases/acne/really-acne/how-acne-forms" rel="noopener" target="_blank">AAD — Acne: Overview and Treatment</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.aafp.org/pubs/afp/issues/2019/1201/p659.html" rel="noopener" target="_blank">AAFP — Acne Vulgaris: Diagnosis and Treatment</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&amp;sectionNum=2290.5." rel="noopener" target="_blank">California B&amp;P Code 2290.5 — Telehealth</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.theabfm.org/" rel="noopener" target="_blank">ABFM — Board Certification Standards</a>. Retrieved May 23, 2026.</li>
            </ol>
          </div>
        </section>

        {/* ─── 13) MEDICAL DISCLAIMER ─────────────────────────────────────── */}
        <section className="tdmd-section tdmd-footnote" id={`${pid}-disclaimer`}>
          <div className="tdmd-container">
            <h2>Medical Disclaimer</h2>
            <p>
              This page is for informational purposes only and is not a substitute for individualized medical advice, diagnosis, or treatment. Use of TeleDirectMD does not establish a physician-patient relationship until a video visit is initiated and documented. Treatment decisions are made by a board-certified physician based on the clinical history presented at the time of the visit.
            </p>
            <p>
              If you have red-flag or emergency symptoms, seek urgent in-person or emergency care immediately — do not use TeleDirectMD. The $79 visit fee covers the physician evaluation only; prescription medication costs are separate and vary by pharmacy. TeleDirectMD does not prescribe controlled substances in any state.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
