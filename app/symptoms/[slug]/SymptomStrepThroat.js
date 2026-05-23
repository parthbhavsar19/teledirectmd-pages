/**
 * SymptomStrepThroat.js — TeleDirectMD Symptom Page v3
 *
 * Symptom: White Spots on Tonsils
 * Slug:    /symptoms/strep-throat/
 * ICD-10:  J02.0 — Streptococcal pharyngitis
 *
 * v3 standard: inline opener, vertical cost bars (tdmd-vbar), FaqAccordion (12 items),
 * 4 JSON-LD schemas (MedicalWebPage + FAQPage + HowTo + BreadcrumbList), NPI 1104323203.
 *
 * Hard rules:
 *   • $79 only — price must not be under-quoted
 *   • FAQPage schema only (no QA variant)
 *   • No CitableSummaryBlock import
 *   • NPI 1104323203 in Physician schema
 *   • Literal < and > in JSX text escaped as < >
 *   • Medically reviewed by Parth Bhavsar, MD — Updated May 23, 2026
 *
 * Generated: 2026-05-23. DO NOT edit manually — regenerate from config.
 */

import FaqAccordion from '../../components/FaqAccordion';

// ─── Page constants ────────────────────────────────────────────────────────────
const PAGE_URL = 'https://teledirectmd.com/symptoms/strep-throat/';
const PAGE_TITLE = `White Spots on Tonsils — Strep, Mono, or Tonsillitis | TeleDirectMD`;
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
    generic: `amoxicillin`,
    brand: `Amoxil`,
    form: `oral capsule, suspension`,
    drugClass: `aminopenicillin`,
    dose: `500 mg PO BID × 10 days`,
    price: `$5–$21`,
    priceUrl: `https://www.goodrx.com/amoxicillin`,
    priceLabel: `GoodRx`,
    sideEffects: `Diarrhea, rash; rash develops in mononucleosis.`,
  },
  {
    generic: `penicillin V potassium`,
    brand: `Veetids`,
    form: `oral tablet`,
    drugClass: `penicillin`,
    dose: `500 mg PO BID × 10 days`,
    price: `$2–$24`,
    priceUrl: `https://www.goodrx.com/penicillin-v-potassium`,
    priceLabel: `GoodRx`,
    sideEffects: `Diarrhea, allergic reaction.`,
  },
  {
    generic: `cephalexin`,
    brand: `Keflex`,
    form: `oral capsule`,
    drugClass: `first-generation cephalosporin`,
    dose: `500 mg PO BID × 10 days`,
    price: `$5–$24`,
    priceUrl: `https://www.goodrx.com/cephalexin/how-much-does-cephalexin-cost-without-insurance`,
    priceLabel: `GoodRx`,
    sideEffects: `Diarrhea; rare cross-reactivity with severe penicillin allergy.`,
  },
  {
    generic: `azithromycin`,
    brand: `Zithromax`,
    form: `oral tablet`,
    drugClass: `macrolide`,
    dose: `500 mg day 1 then 250 mg × 4 days`,
    price: `$6–$35`,
    priceUrl: `https://www.goodrx.com/azithromycin`,
    priceLabel: `GoodRx`,
    sideEffects: `Diarrhea, QT prolongation; rising macrolide resistance.`,
  },
  {
    generic: `ibuprofen`,
    brand: `Advil`,
    form: `oral tablet`,
    drugClass: `NSAID`,
    dose: `400 mg PO every 6h PRN`,
    price: `$2–$13`,
    priceUrl: `https://www.goodrx.com/ibuprofen`,
    priceLabel: `GoodRx`,
    sideEffects: `GI upset; avoid in CKD or peptic ulcer.`,
  },
];

// ─── FAQ items (12) ───────────────────────────────────────────────────────────
const FAQ_ITEMS = [
  {
    question: `Are white spots on tonsils always strep?`,
    answerPlain: `Not always. They can also be viral pharyngitis (especially adenovirus), mononucleosis, tonsil stones, or rarely fungal infection. The Centor criteria (fever, exudate, tender lymph nodes, absence of cough) help estimate strep probability.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Not always. They can also be viral pharyngitis (especially adenovirus), mononucleosis, tonsil stones, or rarely fungal infection. The Centor criteria (fever, exudate, tender lymph nodes, absence of cough) help estimate strep probability.` }} />
    ),
  },
  {
    question: `Can a doctor diagnose strep over video?`,
    answerPlain: `Yes for high or low Centor scores. Mid-range cases benefit from a rapid antigen test, which can be done at home for $25–$50 or via a brief in-person stop. Many patients resolve clinically without testing.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Yes for high or low Centor scores. Mid-range cases benefit from a rapid antigen test, which can be done at home for $25–$50 or via a brief in-person stop. Many patients resolve clinically without testing.` }} />
    ),
  },
  {
    question: `What antibiotic is given for strep throat?`,
    answerPlain: `Amoxicillin or penicillin V are first-line per IDSA — $9–$15 generic. Cephalexin or azithromycin are alternatives for penicillin allergy. Course is 10 days. Improvement usually within 24–48 hours.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Amoxicillin or penicillin V are first-line per IDSA — $9–$15 generic. Cephalexin or azithromycin are alternatives for penicillin allergy. Course is 10 days. Improvement usually within 24–48 hours.` }} />
    ),
  },
  {
    question: `How long am I contagious with strep?`,
    answerPlain: `You are no longer contagious 24 hours after starting effective antibiotics. Untreated strep stays contagious 2–3 weeks. Always finish the full course to reduce contagion and prevent rare complications.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `You are no longer contagious 24 hours after starting effective antibiotics. Untreated strep stays contagious 2–3 weeks. Always finish the full course to reduce contagion and prevent rare complications.` }} />
    ),
  },
  {
    question: `Could it be mono instead of strep?`,
    answerPlain: `Yes — especially in young adults with severe fatigue, posterior cervical lymphadenopathy, and tonsillar exudate that doesn't respond to amoxicillin (and amoxicillin in mono can cause a generalized rash). Monospot testing distinguishes them.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Yes — especially in young adults with severe fatigue, posterior cervical lymphadenopathy, and tonsillar exudate that doesn't respond to amoxicillin (and amoxicillin in mono can cause a generalized rash). Monospot testing distinguishes them.` }} />
    ),
  },
  {
    question: `What if my symptoms haven\'t improved by day 3 on antibiotics?`,
    answerPlain: `Contact us. Possibilities include resistance (uncommon for strep), wrong diagnosis (mono, viral), peritonsillar complication, or non-adherence. A repeat visit and possible rapid strep or monospot are next steps.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Contact us. Possibilities include resistance (uncommon for strep), wrong diagnosis (mono, viral), peritonsillar complication, or non-adherence. A repeat visit and possible rapid strep or monospot are next steps.` }} />
    ),
  },
  {
    question: `Are tonsil stones the same as strep?`,
    answerPlain: `No — tonsil stones (tonsilloliths) are calcified debris in tonsillar crypts, not infection. They look like small hard white specks, often with bad breath, but no fever or significant pain. Salt-water gargles and water flossers help; antibiotics do nothing.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `No — tonsil stones (tonsilloliths) are calcified debris in tonsillar crypts, not infection. They look like small hard white specks, often with bad breath, but no fever or significant pain. Salt-water gargles and water flossers help; antibiotics do nothing.` }} />
    ),
  },
  {
    question: `When does strep need an ER visit?`,
    answerPlain: `ER if you have drooling, stridor, voice change, severe one-sided throat swelling (peritonsillar abscess), trismus (can't open mouth), or high fever > 103°F. These suggest complications requiring drainage or IV antibiotics.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `ER if you have drooling, stridor, voice change, severe one-sided throat swelling (peritonsillar abscess), trismus (can't open mouth), or high fever &gt; 103°F. These suggest complications requiring drainage or IV antibiotics.` }} />
    ),
  },
  {
    question: `How much does strep treatment cost online?`,
    answerPlain: `$79 visit + $9 amoxicillin = $58 total. With at-home strep test: ~$88. Compare to $185–$345 urgent care per Mira Health 2025 or $99–$139 at CVS MinuteClinic.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `$79 visit + $9 amoxicillin = $58 total. With at-home strep test: ~$88. Compare to $185–$345 urgent care per Mira Health 2025 or $99–$139 at CVS MinuteClinic.` }} />
    ),
  },
  {
    question: `Can I skip antibiotics if my strep is mild?`,
    answerPlain: `Untreated strep usually resolves in 7–10 days, but antibiotics shorten illness, reduce contagion, and prevent rare complications (rheumatic fever, post-streptococcal glomerulonephritis). For confirmed strep, treatment is recommended.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Untreated strep usually resolves in 7–10 days, but antibiotics shorten illness, reduce contagion, and prevent rare complications (rheumatic fever, post-streptococcal glomerulonephritis). For confirmed strep, treatment is recommended.` }} />
    ),
  },
  {
    question: `Do tonsillectomies help recurrent strep?`,
    answerPlain: `For very frequent recurrence (≥7 episodes in 1 year, ≥5/year for 2 years, or ≥3/year for 3 years per Paradise criteria), tonsillectomy reduces episodes. Decision is made with an ENT in person.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `For very frequent recurrence (&ge;7 episodes in 1 year, &ge;5/year for 2 years, or &ge;3/year for 3 years per Paradise criteria), tonsillectomy reduces episodes. Decision is made with an ENT in person.` }} />
    ),
  },
  {
    question: `Can adults get strep throat?`,
    answerPlain: `Yes, though it's more common in children. Adults account for 5–15% of strep pharyngitis cases. Symptoms and treatment are the same; complication rates are similar.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Yes, though it's more common in children. Adults account for 5–15% of strep pharyngitis cases. Symptoms and treatment are the same; complication rates are similar.` }} />
    ),
  },
];

// ─── Related condition links ───────────────────────────────────────────────────
const RELATED_CONDITIONS = [
  { slug: '/sore-throat-treatment-online/', label: 'Sore Throat Treatment Online' },
  { slug: '/sinus-infection-treatment-online/', label: 'Sinus Infection Treatment Online' },
  { slug: '/ear-pain-treatment-online/', label: 'Ear Pain Treatment Online' },
  { slug: '/common-cold-treatment-online/', label: 'Common Cold Treatment Online' },
  { slug: '/uti-treatment-online/', label: 'UTI Treatment Online' },
];

// ─── JSON-LD schemas ───────────────────────────────────────────────────────────
// Schema types: "MedicalWebPage" "FAQPage" "HowTo" "BreadcrumbList"
function buildSchemas() {
  const medicalWebPage = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: PAGE_TITLE,
    url: PAGE_URL,
    description: `White spots on tonsils can be strep, viral pharyngitis, mononucleosis, or tonsillitis. $79 telehealth visit; amoxicillin $9 if strep. 41 states.`,
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    inLanguage: 'en-US',
    about: {
      '@type': 'MedicalCondition',
      name: 'Streptococcal Pharyngitis (Strep Throat)',
      alternateName: ['Streptococcal Pharyngitis', 'Group A Strep', 'GABHS', 'Strep'],
      code: { '@type': 'MedicalCode', code: 'J02.0', codingSystem: 'ICD-10-CM' },
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
        '#sym-strep-opening',
        '#sym-strep-opening p',
        '.tdmd-sym__byline',
        '#sym-strep-faq',
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
    name: `How to Get Strep Throat Treatment Online`,
    description: `Three steps to receive strep throat evaluation and antibiotic prescription from a board-certified physician.`,
    totalTime: 'PT30M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '79' },
    step: [
      { '@type': 'HowToStep', position: 1, name: `Book your video visit`, text: `Select strep throat on teledirectmd.com. Self pay $79. No referral needed.`, url: `https://teledirectmd.com/symptoms/strep-throat/` },
      { '@type': 'HowToStep', position: 2, name: `See a board-certified MD by secure video`, text: `Physician applies Centor/McIsaac criteria and reviews throat appearance, fever, lymphadenopathy, and absence of cough.`, url: `https://teledirectmd.com/symptoms/strep-throat/` },
      { '@type': 'HowToStep', position: 3, name: `Receive your antibiotic prescription`, text: `Amoxicillin or penicillin V prescribed for high-probability strep, with instructions for isolation and follow-up.`, url: `https://teledirectmd.com/symptoms/strep-throat/` }
    ],
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'TeleDirectMD', item: 'https://teledirectmd.com' },
      { '@type': 'ListItem', position: 2, name: 'Symptoms', item: 'https://teledirectmd.com/symptoms/' },
      { '@type': 'ListItem', position: 3, name: `White Spots on Tonsils`, item: PAGE_URL },
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
export default function SymptomStrepThroat() {
  const schemas = buildSchemas();
  const pid = 'sym-strep';

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
            <span aria-current="page">White Spots on Tonsils</span>
          </div>
        </nav>

        {/* ─── 1) HERO ──────────────────────────────────────────────────────── */}
        <section className="tdmd-hero" id={`${pid}-hero`}>
          <div className="tdmd-container">
            <div className="tdmd-hero-grid">
              <div className="tdmd-hero-copy">
                <h1 data-speakable="true" dangerouslySetInnerHTML={{ __html: `White Spots on Your Tonsils — Strep, Mono, or Just Tonsillitis?` }} />
                <p className="tdmd-hero-sub" data-speakable="true">
                  White Spots on Tonsils — same-day video visit with a board-certified family medicine MD. Self pay $79 &amp;middot; 41 states &amp;middot; MD-only care.
                </p>
                <p>
                  White Spots on Tonsils is one of the most common reasons adults seek medical care. TeleDirectMD provides same-day evaluation and treatment by a board-certified family medicine physician via secure video visit. Self-pay is $79 with no insurance required. Available in 41 states.
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
                  <li><a href={`#${pid}-eligibility`}>Eligibility checklist</a></li>
                  <li><a href={`#${pid}-differentials`}>Differential diagnosis</a></li>
                  <li><a href={`#${pid}-cost`}>Cost comparison</a></li>
                  <li><a href={`#${pid}-medications`}>Medications</a></li>
                  <li><a href={`#${pid}-red-flags`}>Red flags</a></li>
                  <li><a href={`#${pid}-faq`}>FAQs</a></li>
                  <li><a href={`#${pid}-references`}>References</a></li>
                </ul>

                <ul className="tdmd-hero-benefits">
                  <li>Self pay $79 — no insurance required</li>
                  <li>MD-only care (no mid-levels)</li>
                  <li>Same-day visits available in 41 states</li>
                  <li>Board-certified Family Medicine physician</li>
                  <li>e-Prescription to your pharmacy when appropriate</li>
                </ul>

                <div className="tdmd-hero-ctas">
                  <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit — $79</a>
                  <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">View All Adult Conditions</a>
                </div>

                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> J02.0 — Streptococcal pharyngitis (final coding depends on clinical details)</p>
              </div>

              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>Online MD-Only White Spots on Tonsils Care</h2>
                  <ul>
                    <li>Fast evaluation and treatment plan</li>
                    <li>Safety screening before any prescription</li>
                    <li>Guideline-based medication choices</li>
                    <li>e-Prescription to your pharmacy</li>
                    <li>Follow-up guidance and red-flag instructions</li>
                  </ul>
                  <p className="tdmd-hero-note">
                    Adults 18+ only. TeleDirectMD is not an emergency service. If you have severe symptoms, difficulty breathing, chest pain, high fever, or rapidly worsening condition, seek urgent in-person or emergency care immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2) INLINE OPENER (v3 — replaces CitableSummaryBlock) ──────────── */}
        <section className="tdmd-section tdmd-sym__opener" id={`${pid}-opening`}>
          <div className="tdmd-container">
            <p dangerouslySetInnerHTML={{ __html: `Streptococcal pharyngitis (strep throat) is caused by Group A beta-hemolytic Streptococcus and accounts for 10–15% of adult sore throat cases. Classic features include sudden-onset throat pain, fever above 101°F, swollen anterior cervical nodes, tonsillar exudates, and absence of cough. Early penicillin or amoxicillin treatment prevents rheumatic fever and shortens illness. TeleDirectMD applies Centor/McIsaac scoring and prescribes when indicated for $79.` }} />
            <p style={{ marginTop: '1rem' }}>
              <strong>Self-pay cost:</strong> $79 flat rate — no subscription, no hidden fees. Prescription costs are separate and vary by pharmacy; see the medication table below for GoodRx estimates. TeleDirectMD does not prescribe controlled substances in any state.
            </p>
            <p>
              TeleDirectMD physicians hold Board Certification from the <a href="https://www.theabfm.org/" rel="noopener" target="_blank">American Board of Family Medicine (ABFM)</a> and follow clinical guidelines from the CDC, AAFP, and relevant specialty societies. Every visit includes red-flag screening, a structured history, a treatment plan, and clear follow-up instructions.
            </p>
          </div>
        </section>

        {/* ─── 3) ELIGIBILITY CHECKLIST ─────────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-eligibility`}>
          <div className="tdmd-container">
            <h2>White Spots on Tonsils Telehealth Eligibility Checklist</h2>
            <p><strong>You are likely eligible for a TeleDirectMD video visit if ALL of these are true:</strong></p>
            <div className="tdmd-sym__dual">
              <div className="tdmd-sym__dual-card tdmd-sym__dual-card--good">
                <h3>&#10003; You Are Eligible If</h3>
                <ul>
              <li dangerouslySetInnerHTML={{ __html: `Adult age 18 or older located in one of 41 licensed states` }} />
              <li dangerouslySetInnerHTML={{ __html: `Sore throat with visible white spots ≤ 14 days` }} />
              <li dangerouslySetInnerHTML={{ __html: `Able to swallow liquids without drooling` }} />
              <li dangerouslySetInnerHTML={{ __html: `No stridor, muffled voice, or trismus` }} />
              <li dangerouslySetInnerHTML={{ __html: `No severe one-sided throat pain or swelling` }} />
              <li dangerouslySetInnerHTML={{ __html: `Phone camera capable of clear oropharynx images` }} />
              <li dangerouslySetInnerHTML={{ __html: `Have a pharmacy where antibiotics can be sent` }} />
                </ul>
              </div>
              <div className="tdmd-sym__dual-card tdmd-sym__dual-card--alert">
                <h3>&#10007; You Are Not Eligible If</h3>
                <ul>
              <li dangerouslySetInnerHTML={{ __html: `Drooling, stridor, or muffled voice — ER` }} />
              <li dangerouslySetInnerHTML={{ __html: `Severe one-sided throat pain with uvula deviation — peritonsillar abscess` }} />
              <li dangerouslySetInnerHTML={{ __html: `Recurrent strep (≥7/year) — ENT for tonsillectomy evaluation` }} />
              <li dangerouslySetInnerHTML={{ __html: `Suspected diphtheria (rare; gray pseudomembrane) — ER + public health` }} />
              <li dangerouslySetInnerHTML={{ __html: `Penicillin and cephalosporin allergy with high-Centor strep — needs in-person rapid test` }} />
                </ul>
                <p style={{ marginTop: '0.75rem', color: 'var(--tdmd-muted)', fontSize: '0.92rem' }}>
                  <strong>If you have red-flag symptoms, seek urgent in-person or emergency care immediately. TeleDirectMD is not appropriate for severe or complex cases.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 4) HOW IT WORKS ─────────────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-how-it-works`}>
          <div className="tdmd-container">
            <h2>How White Spots on Tonsils Treatment Works Online</h2>
            <div className="tdmd-decision-flow">
              <div className="tdmd-decision-step tdmd-decision-step-check">
                <div className="tdmd-decision-number">1</div>
                <div className="tdmd-decision-content">
                  <h3>Book your $79 video visit</h3>
                  <p>No insurance required. No referral needed. Many visits available same day in 41 states. Have your symptom timeline and current medication list ready.</p>
                </div>
              </div>
              <div className="tdmd-decision-step tdmd-decision-step-check">
                <div className="tdmd-decision-number">2</div>
                <div className="tdmd-decision-content">
                  <h3>See a board-certified MD by secure video</h3>
                  <p>The physician takes a structured medical history, performs a targeted virtual exam, screens for red flags, and applies current clinical guidelines. If in-person care is needed, you&apos;ll be redirected at no charge.</p>
                </div>
              </div>
              <div className="tdmd-decision-step tdmd-decision-step-good">
                <div className="tdmd-decision-number">3</div>
                <div className="tdmd-decision-content">
                  <h3>Get your treatment plan and, if appropriate, a prescription</h3>
                  <p>If medication is clinically appropriate, an e-prescription is sent to your chosen pharmacy during or after the visit. Clear follow-up instructions and red-flag criteria are provided regardless of treatment choice.</p>
                  <div className="tdmd-decision-cta">
                    <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit — $79</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 5) DIFFERENTIAL DIAGNOSIS ───────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-differentials`}>
          <div className="tdmd-container">
            <h2>What Causes White Spots on Tonsils? Differential Diagnosis</h2>
            <p>Not all white spots on tonsils is the same condition. The table below lists the most common causes your physician will consider, with features that distinguish them.</p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="White Spots on Tonsils differential diagnosis">
                <thead>
                  <tr>
                    <th>Condition</th>
                    <th>Description</th>
                    <th>Prevalence</th>
                    <th>Key Features</th>
                    <th>Next Step</th>
                  </tr>
                </thead>
                <tbody>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Group A streptococcal pharyngitis` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Bacterial throat infection. Antibiotics shorten illness, reduce contagion, and rarely prevent rheumatic fever.` }} />
                <td dangerouslySetInnerHTML={{ __html: `5–15% adults; 15–30% children` }} />
                <td dangerouslySetInnerHTML={{ __html: `Fever &gt; 38°C; sudden onset; tonsillar exudate; tender anterior lymph nodes; no cough.` }} />
                <td dangerouslySetInnerHTML={{ __html: `Telehealth — Centor 3–4 → empiric amoxicillin/penicillin V.` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Viral pharyngitis with exudate` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Adenovirus, mononucleosis, and other viruses can produce visible exudate identical to strep.` }} />
                <td dangerouslySetInnerHTML={{ __html: `Common` }} />
                <td dangerouslySetInnerHTML={{ __html: `Cough or runny nose often present; gradual onset; less neck-node tenderness.` }} />
                <td dangerouslySetInnerHTML={{ __html: `Telehealth — supportive care.` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Infectious mononucleosis (EBV)` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Severe pharyngitis with marked fatigue. Common in 15–25-year-olds.` }} />
                <td dangerouslySetInnerHTML={{ __html: `~1% of college pharyngitis` }} />
                <td dangerouslySetInnerHTML={{ __html: `Posterior cervical lymphadenopathy; profound fatigue; possible splenomegaly.` }} />
                <td dangerouslySetInnerHTML={{ __html: `Telehealth + monospot or EBV antibody test.` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Tonsil stones (tonsilloliths)` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Calcified debris in tonsillar crypts. Not an infection.` }} />
                <td dangerouslySetInnerHTML={{ __html: `Common, often incidental` }} />
                <td dangerouslySetInnerHTML={{ __html: `Small hard white spots; bad breath; no fever; no pain or mild pain.` }} />
                <td dangerouslySetInnerHTML={{ __html: `Self-care — gargles, manual removal, hydration. Persistent: ENT for tonsillar cryptolysis.` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Peritonsillar abscess` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Pus collection adjacent to tonsil. Unilateral. Surgical emergency.` }} />
                <td dangerouslySetInnerHTML={{ __html: `~30/100,000/year` }} />
                <td dangerouslySetInnerHTML={{ __html: `Severe one-sided pain; muffled voice; trismus; uvula deviation; drooling.` }} />
                <td dangerouslySetInnerHTML={{ __html: `ER — drainage and IV antibiotics.` }} />
              </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ─── 6) COST COMPARISON (vertical bars — tdmd-vbar) ──────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-cost`}>
          <div className="tdmd-container">
            <h2>White Spots on Tonsils Treatment Cost Comparison</h2>
            <p>TeleDirectMD&apos;s self-pay rate is <strong>$79</strong> for a complete MD video visit — evaluation, treatment plan, and e-prescription included. The chart below shows how that compares to typical out-of-pocket costs at other settings. Prescription medication costs are separate.</p>

            <div className="tdmd-price-grid">
              <div className="tdmd-price-card" aria-label="TeleDirectMD pricing">
                <h3>TeleDirectMD Video Visit</h3>
                <p className="tdmd-price-big">$79</p>
                <p className="tdmd-price-sub">Self-pay flat fee — no subscription</p>
                <ul className="tdmd-price-includes">
                  <li>Board-certified MD video evaluation</li>
                  <li>Red-flag screening &amp;amp; structured triage</li>
                  <li>e-Prescription to your pharmacy (when appropriate)</li>
                  <li>Follow-up instructions &amp;amp; prevention guidance</li>
                  <li>No hidden fees — $79 is the total visit cost</li>
                </ul>
              </div>

              <div className="tdmd-price-chart" role="group" aria-label="Typical White Spots on Tonsils cost comparison">
                <h3>Typical White Spots on Tonsils Visit Cost</h3>
                <p className="tdmd-price-caption">Typical out-of-pocket costs before insurance. Actual costs vary by location and plan. ER average per Mira Health 2025 data.</p>
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
                  Source: Mira Health cost benchmarks, Feb 2025. Actual costs vary by setting, location, and insurance.
                </p>
              </div>
            </div>

            <p style={{ marginTop: '1rem' }}>
              For more detail, see <a href="/what-we-treat">all conditions we treat</a> or view our <a href="/faq">FAQ page</a> for common billing questions. TeleDirectMD does not bill insurance for self-pay visits.
            </p>
          </div>
        </section>

        {/* ─── 7) MEDICATION TABLE ─────────────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-medications`}>
          <div className="tdmd-container">
            <h2>White Spots on Tonsils Treatment Options &amp;amp; Medication Guide</h2>
            <p>
              The medications listed below represent evidence-based options used for white spots on tonsils. The physician selects the most appropriate agent based on your history, allergies, kidney function, drug interactions, and symptom severity at the time of the visit. GoodRx prices retrieved May 2026; actual cost varies by pharmacy.
            </p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="White Spots on Tonsils medication options">
                <caption style={{ captionSide: 'bottom', textAlign: 'left', padding: '0.5rem 0', fontSize: '0.85rem', color: 'var(--tdmd-muted)' }}>
                  GoodRx prices retrieved May 2026. Prescription costs are separate from the $79 TeleDirectMD visit fee. Actual pharmacy costs vary.
                </caption>
                <thead>
                  <tr>
                    <th>Medication</th>
                    <th>Form</th>
                    <th>Drug Class</th>
                    <th>Typical Dose</th>
                    <th>GoodRx Price</th>
                    <th>Key Considerations</th>
                  </tr>
                </thead>
                <tbody>
              <tr>
                <td><strong>amoxicillin</strong> <span className="tdmd-sym__med-brand">(Amoxil)</span></td>
                <td>oral capsule, suspension</td>
                <td>aminopenicillin</td>
                <td dangerouslySetInnerHTML={{ __html: `500 mg PO BID × 10 days` }} />
                <td><a href="https://www.goodrx.com/amoxicillin" target="_blank" rel="noopener">$5–$21</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Diarrhea, rash; rash develops in mononucleosis.` }} />
              </tr>
              <tr>
                <td><strong>penicillin V potassium</strong> <span className="tdmd-sym__med-brand">(Veetids)</span></td>
                <td>oral tablet</td>
                <td>penicillin</td>
                <td dangerouslySetInnerHTML={{ __html: `500 mg PO BID × 10 days` }} />
                <td><a href="https://www.goodrx.com/penicillin-v-potassium" target="_blank" rel="noopener">$2–$24</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Diarrhea, allergic reaction.` }} />
              </tr>
              <tr>
                <td><strong>cephalexin</strong> <span className="tdmd-sym__med-brand">(Keflex)</span></td>
                <td>oral capsule</td>
                <td>first-generation cephalosporin</td>
                <td dangerouslySetInnerHTML={{ __html: `500 mg PO BID × 10 days` }} />
                <td><a href="https://www.goodrx.com/cephalexin/how-much-does-cephalexin-cost-without-insurance" target="_blank" rel="noopener">$5–$24</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Diarrhea; rare cross-reactivity with severe penicillin allergy.` }} />
              </tr>
              <tr>
                <td><strong>azithromycin</strong> <span className="tdmd-sym__med-brand">(Zithromax)</span></td>
                <td>oral tablet</td>
                <td>macrolide</td>
                <td dangerouslySetInnerHTML={{ __html: `500 mg day 1 then 250 mg × 4 days` }} />
                <td><a href="https://www.goodrx.com/azithromycin" target="_blank" rel="noopener">$6–$35</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Diarrhea, QT prolongation; rising macrolide resistance.` }} />
              </tr>
              <tr>
                <td><strong>ibuprofen</strong> <span className="tdmd-sym__med-brand">(Advil)</span></td>
                <td>oral tablet</td>
                <td>NSAID</td>
                <td dangerouslySetInnerHTML={{ __html: `400 mg PO every 6h PRN` }} />
                <td><a href="https://www.goodrx.com/ibuprofen" target="_blank" rel="noopener">$2–$13</a></td>
                <td dangerouslySetInnerHTML={{ __html: `GI upset; avoid in CKD or peptic ulcer.` }} />
              </tr>
                </tbody>
              </table>
            </div>
            <p className="tdmd-med-note">
              <strong>Important:</strong> Do not start any prescription medication without a clinical evaluation. The appropriate choice depends on your individual history, allergies, comorbidities, and current medications — all assessed by the physician at your visit. TeleDirectMD does not prescribe controlled substances.
            </p>
          </div>
        </section>

        {/* ─── 8) RED FLAGS ────────────────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-red-flags`}>
          <div className="tdmd-container">
            <h2>Red Flags — When to Seek Emergency or Urgent In-Person Care</h2>
            <p>
              TeleDirectMD is not appropriate for severe or complex presentations. The following symptoms require immediate in-person or emergency evaluation. Do not use telehealth if any of the following apply:
            </p>
            <div className="tdmd-sym__dual-card tdmd-sym__dual-card--alert" style={{ marginTop: '0.75rem' }}>
              <h3>Seek Urgent / Emergency Care Immediately If</h3>
              <ul>
              <li dangerouslySetInnerHTML={{ __html: `Drooling or trouble swallowing your own saliva — peritonsillar abscess or epiglottitis` }} />
              <li dangerouslySetInnerHTML={{ __html: `Stridor (high-pitched noisy breathing in)` }} />
              <li dangerouslySetInnerHTML={{ __html: `Severe one-sided throat swelling or uvula deviation` }} />
              <li dangerouslySetInnerHTML={{ __html: `Inability to open the mouth wide (trismus)` }} />
              <li dangerouslySetInnerHTML={{ __html: `Voice severely muffled (hot-potato voice)` }} />
              <li dangerouslySetInnerHTML={{ __html: `High fever &gt; 103°F with rigors` }} />
              <li dangerouslySetInnerHTML={{ __html: `Tongue or floor-of-mouth swelling` }} />
              <li dangerouslySetInnerHTML={{ __html: `Severe one-sided ear pain with the throat pain (referred from peritonsillar abscess)` }} />
              </ul>
            </div>
            <p style={{ marginTop: '1rem' }}>
              Call 911 or go to your nearest emergency room for any life-threatening symptoms. For non-emergency in-person needs, <a href="https://findahealthcenter.hrsa.gov/" rel="noopener" target="_blank">HRSA Health Center Finder</a> can locate a low-cost clinic near you.
            </p>
          </div>
        </section>

        {/* ─── 9) RECOVERY TIMELINE ────────────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-recovery`}>
          <div className="tdmd-container">
            <h2>What to Expect: White Spots on Tonsils Recovery Timeline</h2>
            <p>Recovery timelines are approximate and depend on the underlying cause, treatment chosen, and individual factors. Use these as general guides, not guarantees.</p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="White Spots on Tonsils recovery timeline">
                <thead>
                  <tr>
                    <th>Timeframe</th>
                    <th>What to Expect</th>
                  </tr>
                </thead>
                <tbody>
              <tr>
                <td><strong>Day 1–2 of antibiotics</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Pain and fever begin improving within 24–48 hours of effective antibiotics. No longer contagious after 24 hours on antibiotics.` }} />
              </tr>
              <tr>
                <td><strong>Day 3–5</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Most symptoms resolved or markedly improved. Continue full 10-day course.` }} />
              </tr>
              <tr>
                <td><strong>Day 7–10</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Symptoms fully resolved for most strep patients.` }} />
              </tr>
              <tr>
                <td><strong>Beyond 10 days</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Persistent symptoms warrant re-evaluation: undiagnosed mononucleosis, peritonsillar complication, antibiotic resistance, or alternative diagnosis.` }} />
              </tr>
              <tr>
                <td><strong>Mono recovery</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Fatigue and lymphadenopathy 2–4 weeks; full energy return 1–3 months. No contact sports for 4 weeks.` }} />
              </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ─── 10) HOME CARE ───────────────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-home-care`}>
          <div className="tdmd-container">
            <h2>Home Care &amp;amp; Self-Management Tips for White Spots on Tonsils</h2>
            <p>These evidence-based home care strategies can complement prescription treatment. They are not substitutes for medical evaluation.</p>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `Salt-water gargles 3–4 times daily.` }} />
              <li dangerouslySetInnerHTML={{ __html: `Hydration with cool or warm fluids; popsicles.` }} />
              <li dangerouslySetInnerHTML={{ __html: `Acetaminophen or ibuprofen on schedule for the first 48 hours.` }} />
              <li dangerouslySetInnerHTML={{ __html: `Throat lozenges or numbing spray.` }} />
              <li dangerouslySetInnerHTML={{ __html: `Honey 1–2 teaspoons or in tea.` }} />
              <li dangerouslySetInnerHTML={{ __html: `Cool-mist humidifier in the bedroom.` }} />
              <li dangerouslySetInnerHTML={{ __html: `Replace toothbrush after 24 hours on antibiotics.` }} />
              <li dangerouslySetInnerHTML={{ __html: `Wash hands; avoid sharing utensils, glasses, food.` }} />
              <li dangerouslySetInnerHTML={{ __html: `Stay home until 24 hours on antibiotics or 24 hours fever-free if viral.` }} />
              <li dangerouslySetInnerHTML={{ __html: `For tonsil stones: water flosser on low setting, oral hygiene, salt-water gargle.` }} />
            </ul>
          </div>
        </section>

        {/* ─── 11) CTA STRIP ────────────────────────────────────────────────── */}
        <section className="tdmd-section" aria-label="Book a visit">
          <div className="tdmd-container">
            <div className="tdmd-sym__cta-strip" role="complementary">
              <div>
                <p>Book a same-day video visit — adults 18+ in 41 states</p>
                <small>Self pay $79 &amp;middot; MD-only care &amp;middot; No ER wait &amp;middot; e-Prescription same day</small>
              </div>
              <a className="tdmd-sym__cta-btn" href="/book-online" rel="noopener">Book Now &amp;rarr;</a>
            </div>
          </div>
        </section>

        {/* ─── 12) FAQ ACCORDION ───────────────────────────────────────────── */}
        <section className="tdmd-section tdmd-faq" id={`${pid}-faq`}>
          <div className="tdmd-container">
            <FaqAccordion
              sectionTitle={`Frequently Asked Questions — White Spots on Tonsils`}
              items={FAQ_ITEMS.map((f, i) => ({ ...f, id: `${pid}-faq-${i}` }))}
            />

            <div className="tdmd-bottom-cta" role="region" aria-label="Book a visit call to action">
              <div className="tdmd-bottom-cta-copy">
                <h3>Ready to see a board-certified MD?</h3>
                <p>Book a same-day video visit. Self pay $79 &amp;middot; 41 states &amp;middot; MD-only care.</p>
              </div>
              <div className="tdmd-bottom-cta-actions">
                <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit — $79</a>
                <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">View All Adult Conditions</a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 13) RELATED CONDITIONS ──────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-related-conditions`}>
          <div className="tdmd-container">
            <h2>Related Conditions We Treat Online</h2>
            <p>These condition pages cover related symptoms or treatments that may be relevant to your white spots on tonsils visit.</p>
            <div className="tdmd-sym__sibling-grid">
              {RELATED_CONDITIONS.map((s) => (
                <a key={s.slug} className="tdmd-sym__sibling" href={s.slug}>
                  <span className="tdmd-sym__sibling-label">{s.label}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 14) RELATED RESOURCE LINKS ─────────────────────────────────── */}
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

        {/* ─── 15) REFERENCES ──────────────────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-references`}>
          <div className="tdmd-container">
            <h2>References and Primary Sources</h2>
            <ol className="tdmd-ref-list">
              <li><a href="https://www.idsociety.org/practice-guideline/streptococcal-pharyngitis/" rel="noopener" target="_blank">IDSA — Streptococcal Pharyngitis Clinical Practice Guideline</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.aafp.org/pubs/afp/issues/2016/0815/p241.html" rel="noopener" target="_blank">AAFP — Streptococcal Pharyngitis Diagnosis and Treatment</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.cdc.gov/group-a-strep/pharyngitis/index.html" rel="noopener" target="_blank">CDC — Group A Streptococcal Pharyngitis</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=amoxicillin" rel="noopener" target="_blank">FDA DailyMed — Amoxicillin</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.goodrx.com/amoxicillin" rel="noopener" target="_blank">GoodRx — Amoxicillin Pricing</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.theabfm.org/" rel="noopener" target="_blank">ABFM — Infectious Disease Board Resources</a>. Retrieved May 23, 2026.</li>
            </ol>
          </div>
        </section>

        {/* ─── 16) MEDICAL DISCLAIMER ─────────────────────────────────────── */}
        <section className="tdmd-section tdmd-footnote" id={`${pid}-disclaimer`}>
          <div className="tdmd-container">
            <h2>Medical Disclaimer</h2>
            <p>
              This page is for informational purposes only and is not a substitute for individualized medical advice, diagnosis, or treatment. Use of TeleDirectMD does not establish a physician-patient relationship until a video visit is initiated and documented. Treatment decisions are made by a board-certified physician based on the clinical history presented at the time of the visit.
            </p>
            <p>
              If you have red-flag or emergency symptoms, seek urgent in-person or emergency care immediately — do not use TeleDirectMD. The $79 visit fee covers the physician evaluation only; prescription medication costs are separate and vary by pharmacy. GoodRx price estimates are retrieved May 2026 and are subject to change. Insurance information on this page is current as of May 23, 2026; verify with your insurer before booking. TeleDirectMD does not prescribe controlled substances in any state.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
