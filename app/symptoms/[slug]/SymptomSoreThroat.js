/**
 * SymptomSoreThroat.js — TeleDirectMD Symptom Page v3
 *
 * Symptom: Sore Throat That Won't Go Away
 * Slug:    /symptoms/sore-throat/
 * ICD-10:  J02.9 — Acute pharyngitis, unspecified
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
const PAGE_URL = 'https://teledirectmd.com/symptoms/sore-throat/';
const PAGE_TITLE = `Sore Throat That Won't Go Away — Causes, When It's Strep | TeleDirectMD`;
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
    drugClass: `aminopenicillin antibiotic`,
    dose: `500 mg PO BID × 10 days`,
    price: `$5–$21`,
    priceUrl: `https://www.goodrx.com/amoxicillin`,
    priceLabel: `GoodRx`,
    sideEffects: `Diarrhea, rash; rash develops in mononucleosis.`,
  },
  {
    generic: `penicillin V potassium`,
    brand: `Veetids`,
    form: `oral tablet, suspension`,
    drugClass: `penicillin antibiotic`,
    dose: `500 mg PO BID × 10 days`,
    price: `$2–$26`,
    priceUrl: `https://www.goodrx.com/penicillin-v-potassium`,
    priceLabel: `GoodRx`,
    sideEffects: `Diarrhea, allergic reaction.`,
  },
  {
    generic: `cephalexin`,
    brand: `Keflex`,
    form: `oral capsule, suspension`,
    drugClass: `first-generation cephalosporin`,
    dose: `500 mg PO BID × 10 days`,
    price: `$8–$37`,
    priceUrl: `https://www.goodrx.com/cephalexin`,
    priceLabel: `GoodRx`,
    sideEffects: `Diarrhea, rash; cross-reactivity with penicillin allergy is low (~2%).`,
  },
  {
    generic: `azithromycin`,
    brand: `Zithromax (Z-Pak)`,
    form: `oral tablet`,
    drugClass: `macrolide antibiotic`,
    dose: `500 mg day 1, then 250 mg daily × 4 days`,
    price: `$6–$35`,
    priceUrl: `https://www.goodrx.com/azithromycin`,
    priceLabel: `GoodRx`,
    sideEffects: `Diarrhea, QT prolongation; rising macrolide resistance in GAS.`,
  },
  {
    generic: `ibuprofen`,
    brand: `Advil, Motrin`,
    form: `oral tablet`,
    drugClass: `NSAID`,
    dose: `400 mg PO every 6h PRN`,
    price: `$2–$13`,
    priceUrl: `https://www.goodrx.com/ibuprofen`,
    priceLabel: `GoodRx`,
    sideEffects: `GI upset, kidney effects with long-term use; avoid in CKD or peptic ulcer.`,
  },
];

// ─── FAQ items (12) ───────────────────────────────────────────────────────────
const FAQ_ITEMS = [
  {
    question: `When should I worry about a sore throat that won\'t go away?`,
    answerPlain: `See a clinician if it lasts longer than 7 days, you have fever above 101°F, white spots on tonsils, severe ear pain on one side, or trouble swallowing. Drooling, stridor, or muffled voice means the ER, not telehealth — those suggest peritonsillar abscess or epiglottitis.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `See a clinician if it lasts longer than 7 days, you have fever above 101°F, white spots on tonsils, severe ear pain on one side, or trouble swallowing. Drooling, stridor, or muffled voice means the ER, not telehealth — those suggest peritonsillar abscess or epiglottitis.` }} />
    ),
  },
  {
    question: `Can TeleDirectMD diagnose strep online?`,
    answerPlain: `Yes for high or low Centor scores — clinical decision-making works well at the extremes. Mid-range cases benefit from a rapid antigen test, which can be done at home for $25–$50 (CVS sells a 2-pack) or via a brief in-person stop. Many patients resolve clinically without testing.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Yes for high or low Centor scores — clinical decision-making works well at the extremes. Mid-range cases benefit from a rapid antigen test, which can be done at home for $25–$50 (CVS sells a 2-pack) or via a brief in-person stop. Many patients resolve clinically without testing.` }} />
    ),
  },
  {
    question: `What antibiotic is first-line for strep throat?`,
    answerPlain: `Amoxicillin or penicillin V are first-line per IDSA guidelines, both about $9–$15 generic. Course is 10 days. Cephalexin is preferred for non-anaphylactic penicillin allergy. Azithromycin is reserved for true beta-lactam allergy because of rising macrolide resistance.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Amoxicillin or penicillin V are first-line per IDSA guidelines, both about $9–$15 generic. Course is 10 days. Cephalexin is preferred for non-anaphylactic penicillin allergy. Azithromycin is reserved for true beta-lactam allergy because of rising macrolide resistance.` }} />
    ),
  },
  {
    question: `How quickly will I feel better on antibiotics?`,
    answerPlain: `Fever and pain typically improve within 24–48 hours of effective antibiotics. You are no longer contagious after 24 hours on antibiotics. Always finish the full 10-day course to prevent rare complications like rheumatic fever and post-streptococcal glomerulonephritis.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Fever and pain typically improve within 24–48 hours of effective antibiotics. You are no longer contagious after 24 hours on antibiotics. Always finish the full 10-day course to prevent rare complications like rheumatic fever and post-streptococcal glomerulonephritis.` }} />
    ),
  },
  {
    question: `What if it\'s not strep — do I still get treatment?`,
    answerPlain: `Yes — for viral pharyngitis you get a clear plan: ibuprofen or acetaminophen on schedule, salt-water gargles, throat lozenges, hydration, and a return-precautions list. Antibiotics will not help and will not be prescribed.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Yes — for viral pharyngitis you get a clear plan: ibuprofen or acetaminophen on schedule, salt-water gargles, throat lozenges, hydration, and a return-precautions list. Antibiotics will not help and will not be prescribed.` }} />
    ),
  },
  {
    question: `Could it be mono instead of strep?`,
    answerPlain: `Yes — especially if you are 15–25 years old with severe fatigue, swollen lymph nodes throughout the neck (including the posterior chain), and a 'swollen' throat sensation lasting more than a week. The visit will refer for monospot or EBV antibody testing.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Yes — especially if you are 15–25 years old with severe fatigue, swollen lymph nodes throughout the neck (including the posterior chain), and a 'swollen' throat sensation lasting more than a week. The visit will refer for monospot or EBV antibody testing.` }} />
    ),
  },
  {
    question: `How long is strep contagious?`,
    answerPlain: `Untreated, strep is contagious for 2–3 weeks. With effective antibiotics, contagion drops dramatically after 24 hours of treatment, which is why most schools and workplaces use that as a return cutoff.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Untreated, strep is contagious for 2–3 weeks. With effective antibiotics, contagion drops dramatically after 24 hours of treatment, which is why most schools and workplaces use that as a return cutoff.` }} />
    ),
  },
  {
    question: `Can a sore throat with cough still be strep?`,
    answerPlain: `Cough makes strep much less likely — absence of cough is one of the four Centor criteria. A sore throat with cough is almost always viral. Antibiotics are not indicated when cough is part of the symptom package.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Cough makes strep much less likely — absence of cough is one of the four Centor criteria. A sore throat with cough is almost always viral. Antibiotics are not indicated when cough is part of the symptom package.` }} />
    ),
  },
  {
    question: `What is a peritonsillar abscess?`,
    answerPlain: `A pus collection between the tonsil and the pharyngeal muscle. It causes severe one-sided throat pain, muffled voice ('hot potato'), trismus (limited mouth opening), and uvula deviation. It needs in-person drainage and IV antibiotics — not telehealth.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `A pus collection between the tonsil and the pharyngeal muscle. It causes severe one-sided throat pain, muffled voice ('hot potato'), trismus (limited mouth opening), and uvula deviation. It needs in-person drainage and IV antibiotics — not telehealth.` }} />
    ),
  },
  {
    question: `How much does a sore throat visit cost without insurance?`,
    answerPlain: `$79 at TeleDirectMD; antibiotic (see medication table); total $58–$64. Compare to $185–$345 at urgent care including the strep test, or $99–$139 at CVS MinuteClinic per their public price list.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `$79 at TeleDirectMD; antibiotic (see medication table); total $58–$64. Compare to $185–$345 at urgent care including the strep test, or $99–$139 at CVS MinuteClinic per their public price list.` }} />
    ),
  },
  {
    question: `Can I just take leftover antibiotics from a previous infection?`,
    answerPlain: `Strongly discouraged. Partial courses fuel resistance, and the leftover antibiotic may not match the current pathogen. A 10-minute $79 visit gets you the right drug, the right dose, and the right duration.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Strongly discouraged. Partial courses fuel resistance, and the leftover antibiotic may not match the current pathogen. A 10-minute $79 visit gets you the right drug, the right dose, and the right duration.` }} />
    ),
  },
  {
    question: `When is a tonsillectomy considered?`,
    answerPlain: `Tonsillectomy is considered for recurrent strep (typically more than 7 episodes in 1 year, 5/year for 2 years, or 3/year for 3 years per Paradise criteria), recurrent peritonsillar abscess, or severe sleep apnea from tonsillar hypertrophy. Decision is made with an ENT in person.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Tonsillectomy is considered for recurrent strep (typically more than 7 episodes in 1 year, 5/year for 2 years, or 3/year for 3 years per Paradise criteria), recurrent peritonsillar abscess, or severe sleep apnea from tonsillar hypertrophy. Decision is made with an ENT in person.` }} />
    ),
  },
];

// ─── Related condition links ───────────────────────────────────────────────────
const RELATED_CONDITIONS = [
  { slug: '/sore-throat-treatment-online/', label: 'Sore Throat Treatment Online' },
  { slug: '/sinus-infection-treatment-online/', label: 'Sinus Infection Treatment Online' },
  { slug: '/common-cold-treatment-online/', label: 'Common Cold Treatment Online' },
  { slug: '/ear-pain-treatment-online/', label: 'Ear Pain Treatment Online' },
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
    description: `Sore throat lasting 5+ days is often viral pharyngitis, strep, mononucleosis, or postnasal drip. $79 video visit; amoxicillin prescribed if strep. 41 states.`,
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    inLanguage: 'en-US',
    about: {
      '@type': 'MedicalCondition',
      name: 'Acute Pharyngitis (Sore Throat)',
      alternateName: ['Pharyngitis', 'Acute Pharyngitis', 'Throat Pain'],
      code: { '@type': 'MedicalCode', code: 'J02.9', codingSystem: 'ICD-10-CM' },
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
        '#sym-sore-throat-opening',
        '#sym-sore-throat-opening p',
        '.tdmd-sym__byline',
        '#sym-sore-throat-faq',
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
    name: `How to Get Sore Throat Treatment Online`,
    description: `Three steps to receive sore throat evaluation and treatment from a board-certified physician.`,
    totalTime: 'PT30M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '79' },
    step: [
      { '@type': 'HowToStep', position: 1, name: `Book your video visit`, text: `Select sore throat on teledirectmd.com. Self pay $79. No referral needed.`, url: `https://teledirectmd.com/symptoms/sore-throat/` },
      { '@type': 'HowToStep', position: 2, name: `See a board-certified MD by secure video`, text: `Physician reviews throat appearance, fever, lymph nodes, and Centor criteria to distinguish strep from viral causes.`, url: `https://teledirectmd.com/symptoms/sore-throat/` },
      { '@type': 'HowToStep', position: 3, name: `Receive your treatment plan`, text: `Antibiotic prescribed if strep is likely, or supportive care guidance if viral etiology is more probable.`, url: `https://teledirectmd.com/symptoms/sore-throat/` }
    ],
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'TeleDirectMD', item: 'https://teledirectmd.com' },
      { '@type': 'ListItem', position: 2, name: 'Symptoms', item: 'https://teledirectmd.com/symptoms/' },
      { '@type': 'ListItem', position: 3, name: `Sore Throat That Won't Go Away`, item: PAGE_URL },
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
export default function SymptomSoreThroat() {
  const schemas = buildSchemas();
  const pid = 'sym-sore-throat';

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
            <span aria-current="page">Sore Throat That Won't Go Away</span>
          </div>
        </nav>

        {/* ─── 1) HERO ──────────────────────────────────────────────────────── */}
        <section className="tdmd-hero" id={`${pid}-hero`}>
          <div className="tdmd-container">
            <div className="tdmd-hero-grid">
              <div className="tdmd-hero-copy">
                <h1 data-speakable="true" dangerouslySetInnerHTML={{ __html: `Sore Throat That Won't Go Away — Strep, Viral, or Mono?` }} />
                <p className="tdmd-hero-sub" data-speakable="true">
                  Sore Throat That Won't Go Away — same-day video visit with a board-certified family medicine MD. Self pay $79 &amp;middot; 41 states &amp;middot; MD-only care.
                </p>
                <p>
                  Sore Throat That Won't Go Away is one of the most common reasons adults seek medical care. TeleDirectMD provides same-day evaluation and treatment by a board-certified family medicine physician via secure video visit. Self-pay is $79 with no insurance required. Available in 41 states.
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

                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> J02.9 — Acute pharyngitis, unspecified (final coding depends on clinical details)</p>
              </div>

              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>Online MD-Only Sore Throat That Won't Go Away Care</h2>
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
            <p dangerouslySetInnerHTML={{ __html: `Acute sore throat (pharyngitis) is one of the most common reasons adults visit a doctor. Most cases — approximately 85–90% — are caused by viruses and resolve without antibiotics. Group A Streptococcus (strep) causes 10–15% of adult cases and requires penicillin or amoxicillin to prevent rheumatic fever. TeleDirectMD applies the Centor/McIsaac criteria to guide antibiotic decisions for $79.` }} />
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
            <h2>Sore Throat That Won't Go Away Telehealth Eligibility Checklist</h2>
            <p><strong>You are likely eligible for a TeleDirectMD video visit if ALL of these are true:</strong></p>
            <div className="tdmd-sym__dual">
              <div className="tdmd-sym__dual-card tdmd-sym__dual-card--good">
                <h3>&#10003; You Are Eligible If</h3>
                <ul>
              <li dangerouslySetInnerHTML={{ __html: `Adult age 18 or older located in one of the 41 licensed states at the time of the visit` }} />
              <li dangerouslySetInnerHTML={{ __html: `Sore throat lasting 2 days to 2 weeks` }} />
              <li dangerouslySetInnerHTML={{ __html: `Able to swallow liquids without drooling` }} />
              <li dangerouslySetInnerHTML={{ __html: `No stridor or muffled voice` }} />
              <li dangerouslySetInnerHTML={{ __html: `No severe one-sided throat swelling` }} />
              <li dangerouslySetInnerHTML={{ __html: `No high fever (&gt; 103°F) with neck stiffness` }} />
              <li dangerouslySetInnerHTML={{ __html: `Willing to use a rapid at-home strep test if symptoms are mid-range Centor` }} />
              <li dangerouslySetInnerHTML={{ __html: `Have a pharmacy where antibiotics can be sent if needed` }} />
              <li dangerouslySetInnerHTML={{ __html: `No history of recurrent strep with peritonsillar abscess` }} />
                </ul>
              </div>
              <div className="tdmd-sym__dual-card tdmd-sym__dual-card--alert">
                <h3>&#10007; You Are Not Eligible If</h3>
                <ul>
              <li dangerouslySetInnerHTML={{ __html: `Drooling, stridor, or inability to swallow saliva — ER` }} />
              <li dangerouslySetInnerHTML={{ __html: `Severe one-sided throat swelling — peritonsillar abscess, needs in-person drainage` }} />
              <li dangerouslySetInnerHTML={{ __html: `Suspected epiglottitis (drooling, fever, tripod position) — ER immediately` }} />
              <li dangerouslySetInnerHTML={{ __html: `Sore throat with cervical neck stiffness and high fever — rule out meningitis in person` }} />
              <li dangerouslySetInnerHTML={{ __html: `Recurrent strep (more than 5 in a year) — ENT evaluation for tonsillectomy` }} />
              <li dangerouslySetInnerHTML={{ __html: `Penicillin and cephalosporin allergy with high-probability strep — needs in-person rapid strep + alternative antibiotic` }} />
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
            <h2>How Sore Throat That Won't Go Away Treatment Works Online</h2>
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
            <h2>What Causes Sore Throat That Won't Go Away? Differential Diagnosis</h2>
            <p>Not all sore throat that won't go away is the same condition. The table below lists the most common causes your physician will consider, with features that distinguish them.</p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Sore Throat That Won't Go Away differential diagnosis">
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
                <td><strong dangerouslySetInnerHTML={{ __html: `Viral pharyngitis` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `70–85% of adult sore throats. Caused by rhinovirus, adenovirus, influenza, coronavirus, or SARS-CoV-2. Resolves in 7–10 days without antibiotics.` }} />
                <td dangerouslySetInnerHTML={{ __html: `70–85%` }} />
                <td dangerouslySetInnerHTML={{ __html: `Cough, runny nose, low-grade fever; mild-moderate throat pain; usually no tonsillar exudate.` }} />
                <td dangerouslySetInnerHTML={{ __html: `Telehealth — supportive care; antibiotics not indicated.` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Group A streptococcal pharyngitis` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Bacterial throat infection. Antibiotics shorten illness, reduce contagion, and (rarely) prevent acute rheumatic fever.` }} />
                <td dangerouslySetInnerHTML={{ __html: `5–15% adults; 15–30% children` }} />
                <td dangerouslySetInnerHTML={{ __html: `Fever &gt; 38°C; tonsillar exudate; tender anterior lymph nodes; absence of cough; sudden onset.` }} />
                <td dangerouslySetInnerHTML={{ __html: `Telehealth — Centor 3–4: empiric amoxicillin. Centor 0–1: supportive care.` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Infectious mononucleosis (EBV)` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Severe viral pharyngitis with marked fatigue and lymphadenopathy. Most common in adolescents and young adults.` }} />
                <td dangerouslySetInnerHTML={{ __html: `~1% of college-age sore throats` }} />
                <td dangerouslySetInnerHTML={{ __html: `Severe fatigue; posterior cervical lymphadenopathy; tonsillar exudate; possibly splenomegaly; lasts 2–4 weeks.` }} />
                <td dangerouslySetInnerHTML={{ __html: `Telehealth + lab referral for monospot or EBV serology.` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Peritonsillar abscess` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Pus collection between the tonsil and pharyngeal muscle. Surgical or in-person urgent-care emergency.` }} />
                <td dangerouslySetInnerHTML={{ __html: `~30/100,000 adults/year` }} />
                <td dangerouslySetInnerHTML={{ __html: `Severe one-sided throat pain; muffled 'hot potato' voice; trismus; uvula deviation; drooling.` }} />
                <td dangerouslySetInnerHTML={{ __html: `ER — immediate drainage and IV antibiotics.` }} />
              </tr>
              <tr>
                <td><strong dangerouslySetInnerHTML={{ __html: `Postnasal drip / reflux laryngitis` }} /></td>
                <td dangerouslySetInnerHTML={{ __html: `Chronic sore throat from mucus drip or acid reflux. Usually low-grade and lasts weeks to months.` }} />
                <td dangerouslySetInnerHTML={{ __html: `Common cause of chronic sore throat` }} />
                <td dangerouslySetInnerHTML={{ __html: `Throat clearing; morning hoarseness; sour taste; no fever; no exudate.` }} />
                <td dangerouslySetInnerHTML={{ __html: `Telehealth — intranasal steroid or PPI trial.` }} />
              </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ─── 6) COST COMPARISON (vertical bars — tdmd-vbar) ──────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-cost`}>
          <div className="tdmd-container">
            <h2>Sore Throat That Won't Go Away Treatment Cost Comparison</h2>
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

              <div className="tdmd-price-chart" role="group" aria-label="Typical Sore Throat That Won't Go Away cost comparison">
                <h3>Typical Sore Throat That Won't Go Away Visit Cost</h3>
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
            <h2>Sore Throat That Won't Go Away Treatment Options &amp;amp; Medication Guide</h2>
            <p>
              The medications listed below represent evidence-based options used for sore throat that won't go away. The physician selects the most appropriate agent based on your history, allergies, kidney function, drug interactions, and symptom severity at the time of the visit. GoodRx prices retrieved May 2026; actual cost varies by pharmacy.
            </p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Sore Throat That Won't Go Away medication options">
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
                <td>aminopenicillin antibiotic</td>
                <td dangerouslySetInnerHTML={{ __html: `500 mg PO BID × 10 days` }} />
                <td><a href="https://www.goodrx.com/amoxicillin" target="_blank" rel="noopener">$5–$21</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Diarrhea, rash; rash develops in mononucleosis.` }} />
              </tr>
              <tr>
                <td><strong>penicillin V potassium</strong> <span className="tdmd-sym__med-brand">(Veetids)</span></td>
                <td>oral tablet, suspension</td>
                <td>penicillin antibiotic</td>
                <td dangerouslySetInnerHTML={{ __html: `500 mg PO BID × 10 days` }} />
                <td><a href="https://www.goodrx.com/penicillin-v-potassium" target="_blank" rel="noopener">$2–$26</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Diarrhea, allergic reaction.` }} />
              </tr>
              <tr>
                <td><strong>cephalexin</strong> <span className="tdmd-sym__med-brand">(Keflex)</span></td>
                <td>oral capsule, suspension</td>
                <td>first-generation cephalosporin</td>
                <td dangerouslySetInnerHTML={{ __html: `500 mg PO BID × 10 days` }} />
                <td><a href="https://www.goodrx.com/cephalexin" target="_blank" rel="noopener">$8–$37</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Diarrhea, rash; cross-reactivity with penicillin allergy is low (~2%).` }} />
              </tr>
              <tr>
                <td><strong>azithromycin</strong> <span className="tdmd-sym__med-brand">(Zithromax (Z-Pak))</span></td>
                <td>oral tablet</td>
                <td>macrolide antibiotic</td>
                <td dangerouslySetInnerHTML={{ __html: `500 mg day 1, then 250 mg daily × 4 days` }} />
                <td><a href="https://www.goodrx.com/azithromycin" target="_blank" rel="noopener">$6–$35</a></td>
                <td dangerouslySetInnerHTML={{ __html: `Diarrhea, QT prolongation; rising macrolide resistance in GAS.` }} />
              </tr>
              <tr>
                <td><strong>ibuprofen</strong> <span className="tdmd-sym__med-brand">(Advil, Motrin)</span></td>
                <td>oral tablet</td>
                <td>NSAID</td>
                <td dangerouslySetInnerHTML={{ __html: `400 mg PO every 6h PRN` }} />
                <td><a href="https://www.goodrx.com/ibuprofen" target="_blank" rel="noopener">$2–$13</a></td>
                <td dangerouslySetInnerHTML={{ __html: `GI upset, kidney effects with long-term use; avoid in CKD or peptic ulcer.` }} />
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
              <li dangerouslySetInnerHTML={{ __html: `Drooling or inability to swallow your own saliva` }} />
              <li dangerouslySetInnerHTML={{ __html: `Stridor (high-pitched noisy breathing in)` }} />
              <li dangerouslySetInnerHTML={{ __html: `Voice muffled — 'hot potato' voice (peritonsillar abscess or epiglottitis)` }} />
              <li dangerouslySetInnerHTML={{ __html: `Severe one-sided throat swelling with uvula deviation` }} />
              <li dangerouslySetInnerHTML={{ __html: `Severe neck stiffness with high fever (consider meningitis)` }} />
              <li dangerouslySetInnerHTML={{ __html: `Trismus — inability to open the mouth fully` }} />
              <li dangerouslySetInnerHTML={{ __html: `Tongue or facial swelling (consider angioedema or Ludwig angina)` }} />
              <li dangerouslySetInnerHTML={{ __html: `Inability to keep down liquids (dehydration risk in severe pharyngitis)` }} />
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
            <h2>What to Expect: Sore Throat That Won't Go Away Recovery Timeline</h2>
            <p>Recovery timelines are approximate and depend on the underlying cause, treatment chosen, and individual factors. Use these as general guides, not guarantees.</p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Sore Throat That Won't Go Away recovery timeline">
                <thead>
                  <tr>
                    <th>Timeframe</th>
                    <th>What to Expect</th>
                  </tr>
                </thead>
                <tbody>
              <tr>
                <td><strong>Day 1–2 of antibiotics</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Pain and fever begin improving within 24–48 hours of starting effective antibiotics for strep. Patient is no longer contagious after 24 hours on antibiotics.` }} />
              </tr>
              <tr>
                <td><strong>Day 3–5</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Most patients near-resolution of fever and significant reduction in throat pain. Eating and drinking comfortable. Continue full 10-day antibiotic course even if feeling well.` }} />
              </tr>
              <tr>
                <td><strong>Day 7–10</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Symptoms fully resolved for most strep patients. For viral pharyngitis treated supportively, this is when most cases resolve as well.` }} />
              </tr>
              <tr>
                <td><strong>Week 2</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Persistent symptoms beyond 10 days warrant re-evaluation: consider mononucleosis, undiagnosed GAS recurrence, or peritonsillar complication.` }} />
              </tr>
              <tr>
                <td><strong>Week 3–4 (mono)</strong></td>
                <td dangerouslySetInnerHTML={{ __html: `Mononucleosis fatigue and lymphadenopathy commonly persist 2–4 weeks; full recovery may take 2–3 months. Avoid contact sports for 4 weeks due to splenic rupture risk.` }} />
              </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ─── 10) HOME CARE ───────────────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-home-care`}>
          <div className="tdmd-container">
            <h2>Home Care &amp;amp; Self-Management Tips for Sore Throat That Won't Go Away</h2>
            <p>These evidence-based home care strategies can complement prescription treatment. They are not substitutes for medical evaluation.</p>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `Salt-water gargles 3–4 times daily — 1/2 teaspoon table salt in 8 oz warm water.` }} />
              <li dangerouslySetInnerHTML={{ __html: `Hydration with cool or warm fluids; popsicles soothe.` }} />
              <li dangerouslySetInnerHTML={{ __html: `Honey 1–2 teaspoons or in tea (small-trial benefit per Cochrane reviews).` }} />
              <li dangerouslySetInnerHTML={{ __html: `Acetaminophen or ibuprofen on schedule for the first 48 hours.` }} />
              <li dangerouslySetInnerHTML={{ __html: `Throat lozenges with menthol or benzocaine; numb-spray (Chloraseptic) for severe pain.` }} />
              <li dangerouslySetInnerHTML={{ __html: `Rest and avoid talking when painful.` }} />
              <li dangerouslySetInnerHTML={{ __html: `Cool-mist humidifier in the bedroom at night.` }} />
              <li dangerouslySetInnerHTML={{ __html: `Replace toothbrush after 24 hours on antibiotics (avoids reinfection).` }} />
              <li dangerouslySetInnerHTML={{ __html: `Wash hands; avoid sharing utensils, glasses, or food during the contagious period.` }} />
              <li dangerouslySetInnerHTML={{ __html: `Stay home from work or school until 24 hours on antibiotics or 24 hours fever-free for viral pharyngitis.` }} />
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
              sectionTitle={`Frequently Asked Questions — Sore Throat That Won't Go Away`}
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
            <p>These condition pages cover related symptoms or treatments that may be relevant to your sore throat that won't go away visit.</p>
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
              <li><a href="https://www.aafp.org/pubs/afp/issues/2016/0815/p241.html" rel="noopener" target="_blank">AAFP — Sore Throat: Diagnosis and Treatment</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.cdc.gov/group-a-strep/pharyngitis/index.html" rel="noopener" target="_blank">CDC — Sore Throat / Group A Strep</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=amoxicillin" rel="noopener" target="_blank">FDA DailyMed — Amoxicillin</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.goodrx.com/amoxicillin" rel="noopener" target="_blank">GoodRx — Amoxicillin Pricing</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.theabfm.org/" rel="noopener" target="_blank">ABFM — Infectious Disease Resources</a>. Retrieved May 23, 2026.</li>
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
