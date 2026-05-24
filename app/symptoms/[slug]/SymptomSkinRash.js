/**
 * SymptomSkinRash.js — TeleDirectMD Symptom Page v3
 *
 * Symptom: Skin Rash
 * Slug:    /symptoms/skin-rash/
 * ICD-10:  R21 — Rash and other nonspecific skin eruption
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
const PAGE_URL = 'https://teledirectmd.com/symptoms/skin-rash/';
const PAGE_TITLE = `Skin Rash — What Might Be Causing It and When to See a Doctor | TeleDirectMD`;
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
    generic: `triamcinolone acetonide cream`,
    brand: `Kenalog`,
    form: `Topical cream`,
    drugClass: `Medium-potency topical corticosteroid`,
    dose: `0.1% applied to affected area BID–TID × 7–14 days`,
    price: `$10–$35`,
    priceUrl: `https://www.goodrx.com/triamcinolone-topical`,
    priceLabel: `GoodRx`,
    sideEffects: `Skin atrophy with prolonged use; avoid on face; use for short courses`,
  },
  {
    generic: `cetirizine`,
    brand: `Zyrtec`,
    form: `Oral tablet`,
    drugClass: `Second-generation antihistamine`,
    dose: `10 mg PO once daily for urticaria or allergic rash`,
    price: `$8–$25`,
    priceUrl: `https://www.goodrx.com/cetirizine`,
    priceLabel: `GoodRx`,
    sideEffects: `Mild sedation, dry mouth; less sedating than diphenhydramine`,
  },
  {
    generic: `cephalexin`,
    brand: `Keflex`,
    form: `Oral capsule`,
    drugClass: `First-generation cephalosporin antibiotic`,
    dose: `500 mg PO QID × 7 days (cellulitis or bacterial skin infection)`,
    price: `$10–$30`,
    priceUrl: `https://www.goodrx.com/cephalexin`,
    priceLabel: `GoodRx`,
    sideEffects: `GI upset, rash; check for penicillin/cephalosporin allergy`,
  },
  {
    generic: `hydrocortisone 1% cream`,
    brand: `Cortaid (OTC)`,
    form: `Topical cream`,
    drugClass: `Low-potency topical corticosteroid (OTC)`,
    dose: `Apply to affected area 2–4 times daily × 7 days (contact dermatitis)`,
    price: `$5–$15`,
    priceUrl: `https://www.goodrx.com/hydrocortisone-topical`,
    priceLabel: `GoodRx`,
    sideEffects: `Minimal systemic absorption at 1%; avoid in infected skin`,
  },
];

// ─── FAQ items (12) ───────────────────────────────────────────────────────────
const FAQ_ITEMS = [
  {
    question: `What could be causing a skin rash?`,
    answerPlain: `A skin rash can have many causes, including contact dermatitis (reaction to a substance touching the skin), eczema (atopic dermatitis), urticaria (hives from an allergic reaction), viral exanthem (rash associated with a viral infection), tinea (fungal infection), psoriasis, drug reaction, cellulitis (bacterial skin infection), or shingles (herpes zoster). The distribution, appearance, timing, and associated symptoms help a physician determine the most likely cause. A physician evaluation is important because treatments differ substantially across these categories.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `A skin rash can have many causes, including contact dermatitis (reaction to a substance touching the skin), eczema (atopic dermatitis), urticaria (hives from an allergic reaction), viral exanthem (rash associated with a viral infection), tinea (fungal infection), psoriasis, drug reaction, cellulitis (bacterial skin infection), or shingles (herpes zoster). The distribution, appearance, timing, and associated symptoms help a physician determine the most likely cause. A physician evaluation is important because treatments differ substantially across these categories.` }} />
    ),
  },
  {
    question: `When should I see a doctor for a skin rash?`,
    answerPlain: `See a physician if a rash is spreading rapidly, is painful or blistering, appears infected (warm, red, swollen with pus), is associated with fever, has been present for more than 2 weeks without improvement, or is in a sensitive area (face, genitals, near eyes). Per AAD guidance, a physician evaluation is also appropriate when OTC 1% hydrocortisone cream has not improved a rash after 7 days of consistent use. A $79 TeleDirectMD evaluation can provide visual assessment and prescription management for most rash types.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `See a physician if a rash is spreading rapidly, is painful or blistering, appears infected (warm, red, swollen with pus), is associated with fever, has been present for more than 2 weeks without improvement, or is in a sensitive area (face, genitals, near eyes). Per AAD guidance, a physician evaluation is also appropriate when OTC 1% hydrocortisone cream has not improved a rash after 7 days of consistent use. A $79 TeleDirectMD evaluation can provide visual assessment and prescription management for most rash types.` }} />
    ),
  },
  {
    question: `When is a skin rash an emergency?`,
    answerPlain: `Call 911 or go to the ER immediately if a rash is accompanied by: throat tightening, difficulty breathing, or swelling of the lips/tongue (anaphylaxis); rapidly spreading redness and warmth with high fever suggesting necrotizing fasciitis or severe cellulitis; a purpuric (non-blanching, purple/red) rash with fever suggesting meningococcemia; or Stevens-Johnson syndrome features (painful diffuse blistering, mucous membrane involvement, skin sloughing). These are medical emergencies.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Call 911 or go to the ER immediately if a rash is accompanied by: throat tightening, difficulty breathing, or swelling of the lips/tongue (anaphylaxis); rapidly spreading redness and warmth with high fever suggesting necrotizing fasciitis or severe cellulitis; a purpuric (non-blanching, purple/red) rash with fever suggesting meningococcemia; or Stevens-Johnson syndrome features (painful diffuse blistering, mucous membrane involvement, skin sloughing). These are medical emergencies.` }} />
    ),
  },
  {
    question: `How long is too long to have a skin rash before seeing a doctor?`,
    answerPlain: `Any rash that has not improved after 7–14 days of OTC hydrocortisone cream (for non-infected inflammatory rashes) warrants physician evaluation. Rashes with spreading, blistering, or infection signs should be evaluated immediately — same day or next day. Chronic rashes such as psoriasis or eczema that are inadequately controlled with OTC measures should be evaluated, as prescription topical corticosteroids or other agents significantly improve outcomes per AAD guidelines.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Any rash that has not improved after 7–14 days of OTC hydrocortisone cream (for non-infected inflammatory rashes) warrants physician evaluation. Rashes with spreading, blistering, or infection signs should be evaluated immediately — same day or next day. Chronic rashes such as psoriasis or eczema that are inadequately controlled with OTC measures should be evaluated, as prescription topical corticosteroids or other agents significantly improve outcomes per AAD guidelines.` }} />
    ),
  },
  {
    question: `Can a virtual doctor evaluate a skin rash?`,
    answerPlain: `Yes — a physician can visually evaluate rash morphology (macules, papules, vesicles, plaques), distribution, and associated features via video visit with good lighting. The patient can show the rash directly to the camera. California Business and Professions Code 2290.5 authorizes telehealth evaluation and prescription for dermatologic conditions including contact dermatitis, eczema, urticaria, and fungal infections. TeleDirectMD provides $79 California video evaluations for adults 18+. Rashes with signs of serious infection, systemic illness, or emergency features require in-person or ER evaluation.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Yes — a physician can visually evaluate rash morphology (macules, papules, vesicles, plaques), distribution, and associated features via video visit with good lighting. The patient can show the rash directly to the camera. California Business and Professions Code 2290.5 authorizes telehealth evaluation and prescription for dermatologic conditions including contact dermatitis, eczema, urticaria, and fungal infections. TeleDirectMD provides $79 California video evaluations for adults 18+. Rashes with signs of serious infection, systemic illness, or emergency features require in-person or ER evaluation.` }} />
    ),
  },
  {
    question: `What will the doctor do for a skin rash at TeleDirectMD?`,
    answerPlain: `The physician evaluates rash appearance, distribution, duration, associated symptoms (fever, pruritus, pain), recent exposures (new products, medications, plants, travel), prior skin conditions, and current medications. Based on the visual evaluation, a physician may prescribe a medium-potency topical corticosteroid (for eczema or contact dermatitis), antihistamine (for urticaria), antifungal agent (for tinea), antibiotic (for cellulitis or impetigo), or antiviral (for herpes zoster/shingles). This is an evaluation — prescribing depends on the rash type identified.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `The physician evaluates rash appearance, distribution, duration, associated symptoms (fever, pruritus, pain), recent exposures (new products, medications, plants, travel), prior skin conditions, and current medications. Based on the visual evaluation, a physician may prescribe a medium-potency topical corticosteroid (for eczema or contact dermatitis), antihistamine (for urticaria), antifungal agent (for tinea), antibiotic (for cellulitis or impetigo), or antiviral (for herpes zoster/shingles). This is an evaluation — prescribing depends on the rash type identified.` }} />
    ),
  },
  {
    question: `Will I get a prescription for a skin rash?`,
    answerPlain: `A prescription depends on the evaluation findings. For eczema or contact dermatitis not controlled by OTC 1% hydrocortisone, a medium-potency topical corticosteroid (triamcinolone 0.1%) may be prescribed. For urticaria (hives), a non-sedating antihistamine such as cetirizine 10 mg will be recommended. For bacterial skin infection (cellulitis, impetigo), cephalexin or other appropriate antibiotic will be prescribed. For mild rashes appropriately manageable with OTC products, prescription guidance will be provided without a new Rx.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `A prescription depends on the evaluation findings. For eczema or contact dermatitis not controlled by OTC 1% hydrocortisone, a medium-potency topical corticosteroid (triamcinolone 0.1%) may be prescribed. For urticaria (hives), a non-sedating antihistamine such as cetirizine 10 mg will be recommended. For bacterial skin infection (cellulitis, impetigo), cephalexin or other appropriate antibiotic will be prescribed. For mild rashes appropriately manageable with OTC products, prescription guidance will be provided without a new Rx.` }} />
    ),
  },
  {
    question: `Is a skin rash something I can manage at home?`,
    answerPlain: `Mild contact dermatitis or eczema flares can often be managed with OTC 1% hydrocortisone cream (2–4 times daily × up to 7 days), discontinuation of the suspected trigger (new soap, lotion, detergent, or jewelry), cool compresses to reduce itch and inflammation, a gentle fragrance-free moisturizer, and oral OTC cetirizine or loratadine for itch relief. Per AAD guidance, consistent moisturizer use is essential for eczema management. If OTC measures do not improve the rash within 7 days, or if the rash spreads or becomes painful, a physician evaluation is appropriate.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Mild contact dermatitis or eczema flares can often be managed with OTC 1% hydrocortisone cream (2–4 times daily × up to 7 days), discontinuation of the suspected trigger (new soap, lotion, detergent, or jewelry), cool compresses to reduce itch and inflammation, a gentle fragrance-free moisturizer, and oral OTC cetirizine or loratadine for itch relief. Per AAD guidance, consistent moisturizer use is essential for eczema management. If OTC measures do not improve the rash within 7 days, or if the rash spreads or becomes painful, a physician evaluation is appropriate.` }} />
    ),
  },
  {
    question: `Does insurance cover a TeleDirectMD visit for a skin rash?`,
    answerPlain: `TeleDirectMD accepts Aetna, UnitedHealthcare (UHC), and Blue Cross Blue Shield (BCBS) commercial plans. The self-pay rate is $79 flat — no subscription, no hidden fees. Prescription costs are separate and vary by pharmacy; generic triamcinolone cream is typically $10–$35 and generic cephalexin is $10–$30 at GoodRx pricing.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `TeleDirectMD accepts Aetna, UnitedHealthcare (UHC), and Blue Cross Blue Shield (BCBS) commercial plans. The self-pay rate is $79 flat — no subscription, no hidden fees. Prescription costs are separate and vary by pharmacy; generic triamcinolone cream is typically $10–$35 and generic cephalexin is $10–$30 at GoodRx pricing.` }} />
    ),
  },
  {
    question: `How fast can I be seen for a skin rash?`,
    answerPlain: `Same-day $79 video evaluations are frequently available for California adults. Book at book.teledirectmd.com — select your preferred time and a board-certified Family Medicine physician will meet you by secure video. No referral required. Most visits are 15 minutes. Have good lighting available to show the rash clearly on camera.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Same-day $79 video evaluations are frequently available for California adults. Book at book.teledirectmd.com — select your preferred time and a board-certified Family Medicine physician will meet you by secure video. No referral required. Most visits are 15 minutes. Have good lighting available to show the rash clearly on camera.` }} />
    ),
  },
  {
    question: `What if I need an in-person visit for a skin rash?`,
    answerPlain: `In-person evaluation is recommended when a rash shows signs of serious bacterial infection (spreading cellulitis, fever, abscess), when biopsy is needed to confirm a diagnosis (suspected psoriasis, atypical lesion, or lesion with malignant features), when a rash is widespread and unresponsive to topical treatment, or when systemic therapy (biologics, phototherapy, immunosuppressants) is needed for severe psoriasis or atopic dermatitis. Dermatology referral will be provided with clear instructions at no additional charge.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `In-person evaluation is recommended when a rash shows signs of serious bacterial infection (spreading cellulitis, fever, abscess), when biopsy is needed to confirm a diagnosis (suspected psoriasis, atypical lesion, or lesion with malignant features), when a rash is widespread and unresponsive to topical treatment, or when systemic therapy (biologics, phototherapy, immunosuppressants) is needed for severe psoriasis or atopic dermatitis. Dermatology referral will be provided with clear instructions at no additional charge.` }} />
    ),
  },
  {
    question: `How is a rash from contact dermatitis different from eczema or psoriasis?`,
    answerPlain: `Contact dermatitis is a localized inflammatory rash occurring at the site of skin contact with an irritant or allergen (nickel, latex, plants, cosmetics); it resolves when the trigger is removed. Eczema (atopic dermatitis) is a chronic inflammatory skin condition causing recurrent itchy, dry, scaly patches typically in skin folds; it is associated with asthma and allergic rhinitis. Psoriasis causes well-defined thick silvery-scaled plaques, most commonly on the elbows, knees, and scalp; it is an autoimmune condition. A physician evaluation — including visual assessment of morphology and distribution — helps distinguish these conditions, as treatments differ substantially.`,
    answer: (
      <p dangerouslySetInnerHTML={{ __html: `Contact dermatitis is a localized inflammatory rash occurring at the site of skin contact with an irritant or allergen (nickel, latex, plants, cosmetics); it resolves when the trigger is removed. Eczema (atopic dermatitis) is a chronic inflammatory skin condition causing recurrent itchy, dry, scaly patches typically in skin folds; it is associated with asthma and allergic rhinitis. Psoriasis causes well-defined thick silvery-scaled plaques, most commonly on the elbows, knees, and scalp; it is an autoimmune condition. A physician evaluation — including visual assessment of morphology and distribution — helps distinguish these conditions, as treatments differ substantially.` }} />
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
    description: `Skin rash evaluation online. Determine likely cause — contact dermatitis, eczema, urticaria, cellulitis, or other — and whether prescription treatment is needed. $79 California video evaluation by board-certified Family Medicine physician.`,
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    inLanguage: 'en-US',
    about: {
      '@type': 'MedicalCondition',
      name: 'Skin Rash',
      alternateName: ['Rash', 'Skin Eruption', 'Dermatitis', 'Urticaria'],
      code: { '@type': 'MedicalCode', code: 'R21', codingSystem: 'ICD-10-CM' },
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
        '#sym-skin-rash-opening',
        '#sym-skin-rash-opening p',
        '.tdmd-sym__byline',
        '#sym-skin-rash-faq',
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
    name: `How to Get a Skin Rash Evaluation Online`,
    description: `Three steps to receive a physician evaluation for a skin rash from a board-certified physician.`,
    totalTime: 'PT30M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '79' },
    step: [
      { '@type': 'HowToStep', position: 1, name: `Book your $79 video visit`, text: `Select skin rash on teledirectmd.com. Self pay $79. No referral needed. Same-day visits often available for California adults. Have good lighting to show the rash on camera.`, url: `https://teledirectmd.com/symptoms/skin-rash/` },
      { '@type': 'HowToStep', position: 2, name: `See a board-certified MD by secure video`, text: `Physician visually evaluates rash morphology, distribution, and associated symptoms to identify the most likely cause (contact dermatitis, eczema, urticaria, infection, or other).`, url: `https://teledirectmd.com/symptoms/skin-rash/` },
      { '@type': 'HowToStep', position: 3, name: `Receive your evaluation results and plan`, text: `Prescription topical corticosteroid, antihistamine, antifungal, or antibiotic provided based on rash type. Dermatology referral for biopsied lesions or complex cases.`, url: `https://teledirectmd.com/symptoms/skin-rash/` }
    ],
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'TeleDirectMD', item: 'https://teledirectmd.com' },
      { '@type': 'ListItem', position: 2, name: 'Symptoms', item: 'https://teledirectmd.com/symptoms/' },
      { '@type': 'ListItem', position: 3, name: `Skin Rash`, item: PAGE_URL },
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
export default function SymptomSkinRash() {
  const schemas = buildSchemas();
  const pid = 'sym-skin-rash';

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
            <span aria-current="page">Skin Rash</span>
          </div>
        </nav>

        {/* ─── 1) HERO ──────────────────────────────────────────────────────── */}
        <section className="tdmd-hero" id={`${pid}-hero`}>
          <div className="tdmd-container">
            <div className="tdmd-hero-grid">
              <div className="tdmd-hero-copy">
                <h1 data-speakable="true" dangerouslySetInnerHTML={{ __html: `Skin Rash — What Might Be Causing It and When to See a Doctor` }} />
                <p className="tdmd-hero-sub" data-speakable="true">
                  Developed a new rash? A $79 California evaluation can help identify the likely cause — contact dermatitis, eczema, urticaria, infection, or another condition — and determine whether prescription treatment is the right next step.
                </p>
                <p>
                  A skin rash can signal anything from a mild allergic reaction to a bacterial skin infection to a viral illness — and the right treatment depends entirely on an accurate evaluation of rash type, distribution, and associated symptoms. TeleDirectMD provides same-day physician evaluation for California adults via secure video visit, allowing a physician to visually assess most rash types. Self-pay is $79 with no insurance required.
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

                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> R21 — Rash and other nonspecific skin eruption (final coding depends on clinical details)</p>
              </div>

              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>What a TeleDirectMD Evaluation Includes</h2>
                  <ul>
                    <li>Visual rash morphology and distribution assessment</li>
                    <li>Rash type identification (contact, eczema, urticaria, infection)</li>
                    <li>Prescription topical corticosteroid or antibiotic if appropriate</li>
                    <li>Trigger identification and avoidance guidance</li>
                    <li>Dermatology referral for biopsy or complex cases</li>
                  </ul>
                  <p className="tdmd-hero-note">
                    Adults 18+ only. Have good lighting when showing the rash on camera. Rashes with spreading infection, blistering, or systemic symptoms require in-person or emergency evaluation. TeleDirectMD is not an emergency service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2) INLINE OPENER (v3 — replaces CitableSummaryBlock) ──────────── */}
        <section className="tdmd-section tdmd-sym__opener" id={`${pid}-opening`}>
          <div className="tdmd-container">
            <p dangerouslySetInnerHTML={{ __html: `When should you see a doctor for a skin rash? A physician evaluation is appropriate when a rash is spreading, blistering, painful, associated with fever, has not improved after 7–14 days of OTC hydrocortisone cream, or is in a sensitive location. A skin rash could be caused by contact dermatitis, eczema, urticaria, viral exanthem, tinea, psoriasis, drug reaction, cellulitis, or shingles — and the correct treatment depends entirely on an accurate evaluation. TeleDirectMD provides $79 same-day California video evaluation for adults with skin rashes, with a board-certified Family Medicine physician visually assessing rash morphology and determining appropriate prescription therapy.` }} />
            <p style={{ marginTop: '1rem' }}>
              <strong>Self-pay cost:</strong> $79 flat rate — no subscription, no hidden fees. Prescription costs are separate and vary by pharmacy. TeleDirectMD does not prescribe controlled substances in any state.
            </p>
            <p>
              TeleDirectMD physicians hold Board Certification from the <a href="https://www.theabfm.org/" rel="noopener" target="_blank">American Board of Family Medicine (ABFM)</a> and follow AAD clinical guidelines. California telehealth visits are authorized under Business and Professions Code 2290.5.
            </p>
          </div>
        </section>

        {/* ─── 3) WHAT MIGHT BE CAUSING THIS ──────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-causes`}>
          <div className="tdmd-container">
            <h2>What Might Be Causing a Skin Rash?</h2>
            <p>A physician would evaluate for the following causes based on rash morphology, distribution, timing, exposures, and associated symptoms:</p>

            <h3>Common and self-limiting or OTC-manageable</h3>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `<strong>Contact dermatitis (irritant or allergic):</strong> Localized inflammatory rash at the site of skin contact with an irritant (soaps, detergents, acids) or allergen (nickel, latex, poison oak/ivy, cosmetics). Allergic contact dermatitis develops 24–72 hours after allergen exposure and causes intensely pruritic vesicular or weeping rash. A physician would evaluate for contact dermatitis when the rash distribution correlates with a specific exposure area and appeared after contact with a new substance.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Urticaria (hives):</strong> Raised, itchy wheals or welts that appear suddenly and move around the body; individual lesions typically resolve within 24 hours but new ones appear. Most commonly triggered by foods, medications, or infections. A physician would evaluate for urticaria when wheals are transient and migratory and associated with a recent food, medication, or infection exposure. Antihistamines are the primary treatment.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Eczema (atopic dermatitis):</strong> Chronic relapsing inflammatory skin condition causing itchy, dry, scaly, or weeping patches typically in flexural areas (antecubital fossae, popliteal fossae, neck). Per AAD data, atopic dermatitis affects approximately 10% of adults. A physician would evaluate for eczema flares when itchy, inflamed skin is chronic or recurrent and associated with other atopic conditions (asthma, allergic rhinitis).` }} />
            </ul>

            <h3>Common and requiring physician evaluation</h3>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `<strong>Tinea (ringworm, athlete's foot, jock itch):</strong> Dermatophyte fungal infection causing a scaly, pruritic, ring-shaped or confluent rash with a raised border and central clearing. Tinea pedis (athlete's foot), tinea cruris (jock itch), and tinea corporis (ringworm) are common presentations. A physician would evaluate for tinea when a rash is annular with a raised scaly border and does not improve with topical corticosteroid alone (corticosteroids can worsen fungal infections).` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Cellulitis (bacterial skin infection):</strong> Acute bacterial infection of the dermis and subcutaneous tissue — most commonly Staphylococcus aureus or Streptococcus — causing spreading redness, warmth, swelling, and tenderness. Per IDSA guidelines, non-purulent cellulitis is typically treated with cephalexin or TMP-SMX. A physician would evaluate for cellulitis when a skin area is warm, red, and swollen with distinct borders, particularly if fever is present.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Shingles (herpes zoster):</strong> Reactivation of the varicella-zoster virus causing a painful, unilateral dermatomal rash with grouped vesicles on an erythematous base. Often preceded by burning or shooting pain in the affected dermatome. Per CDC recommendations, antiviral therapy (valacyclovir) is most effective when started within 72 hours of rash onset. A physician would urgently evaluate for shingles when a painful unilateral blistering rash is present, particularly in patients &gt;50 years or immunocompromised.` }} />
            </ul>

            <h3>Less common but requiring evaluation</h3>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `<strong>Drug reaction (maculopapular drug exanthem):</strong> Many medications can cause a symmetric maculopapular rash appearing 7–14 days after drug initiation. Common culprits include antibiotics (amoxicillin, TMP-SMX), NSAIDs, and anticonvulsants. A physician would evaluate for drug reaction when a symmetrically distributed maculopapular rash appears within 2 weeks of starting a new medication.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Psoriasis:</strong> Autoimmune condition causing well-demarcated silvery-scaled plaques most commonly on the elbows, knees, scalp, and lower back. Chronic and recurrent; associated with psoriatic arthritis and cardiovascular risk. Per AAD guidelines, moderate-to-severe psoriasis may require systemic or biologic therapy. A physician would evaluate for psoriasis when well-defined scaly plaques are present on extensor surfaces.` }} />
            </ul>

            <div className="tdmd-sym__cta-strip" role="complementary" style={{ marginTop: '1.5rem' }}>
              <div>
                <p>Rash not improving? Book a $79 evaluation</p>
                <small>Board-certified Family Medicine physician &amp;middot; California &amp;middot; Visual assessment via secure video</small>
              </div>
              <a className="tdmd-sym__cta-btn" href="/book-online" rel="noopener">Book Now &amp;rarr;</a>
            </div>
          </div>
        </section>

        {/* ─── 4) RED FLAGS ────────────────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-red-flags`}>
          <div className="tdmd-container">
            <h2>Red Flags — When to Call 911 or Go to the ER</h2>
            <div className="tdmd-sym__dual-card tdmd-sym__dual-card--alert" style={{ marginTop: '0.75rem' }}>
              <h3>Seek Emergency Care Immediately If You Have</h3>
              <ul>
                <li dangerouslySetInnerHTML={{ __html: `<strong>Rash with throat tightening, difficulty breathing, or tongue/lip swelling</strong> — anaphylaxis; use epinephrine if available, call 911` }} />
                <li dangerouslySetInnerHTML={{ __html: `<strong>Rapidly spreading redness and warmth with high fever</strong> — possible necrotizing fasciitis or severe cellulitis; call 911` }} />
                <li dangerouslySetInnerHTML={{ __html: `<strong>Non-blanching purpuric (purple/red) rash with fever</strong> — possible meningococcemia; call 911 immediately` }} />
                <li dangerouslySetInnerHTML={{ __html: `<strong>Widespread painful blistering with mucous membrane involvement</strong> — possible Stevens-Johnson syndrome; ER evaluation` }} />
                <li dangerouslySetInnerHTML={{ __html: `<strong>Rash with altered mental status, stiff neck, or photophobia</strong> — possible meningitis or meningococcal disease; call 911` }} />
                <li dangerouslySetInnerHTML={{ __html: `<strong>Skin sloughing or necrosis</strong> — toxic epidermal necrolysis or severe drug reaction; ER evaluation` }} />
              </ul>
            </div>
          </div>
        </section>

        {/* ─── 5) SELF-CARE TO TRY FIRST ───────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-self-care`}>
          <div className="tdmd-container">
            <h2>Self-Care to Try First</h2>
            <p>For mild contact dermatitis or eczema flares without infection, blistering, or spreading, the following measures are evidence-based per AAD guidance:</p>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `<strong>Remove the suspected trigger immediately</strong> — discontinue new soaps, lotions, detergents, jewelry, or cosmetics. Wash affected skin thoroughly with gentle cleanser and water.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>OTC hydrocortisone 1% cream</strong> — apply to affected area 2–4 times daily × up to 7 days. Reduces inflammation and itch for contact dermatitis and mild eczema. Do not use on infected skin.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Cool compresses</strong> — apply a cool, damp cloth to the rash for 10–15 minutes several times daily to relieve itch and reduce inflammation.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>OTC cetirizine 10 mg daily</strong> — for itch relief from urticaria or allergic rash. Less sedating than diphenhydramine (Benadryl); more effective as a daily antihistamine for hives.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Fragrance-free moisturizer</strong> — apply generously after bathing on eczema-prone skin to restore barrier function. Per AAD guidance, moisturizer is the cornerstone of eczema management.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Avoid scratching</strong> — scratching breaks the skin barrier, increases infection risk, and worsens inflammation.` }} />
            </ul>
            <p>If the rash does not improve within 7 days, spreads, becomes painful, develops pus or crusting, or is accompanied by fever, book a physician evaluation.</p>
          </div>
        </section>

        {/* ─── 6) WHEN TO BOOK A VISIT ──────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-when-to-book`}>
          <div className="tdmd-container">
            <h2>When to Book a TeleDirectMD Visit</h2>
            <p>A $79 California video evaluation is appropriate for a skin rash when:</p>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: `Rash has not improved after 7 days of OTC hydrocortisone cream` }} />
              <li dangerouslySetInnerHTML={{ __html: `Rash is spreading beyond the initial area` }} />
              <li dangerouslySetInnerHTML={{ __html: `Rash is painful, blistering, or crusting (possible shingles or impetigo)` }} />
              <li dangerouslySetInnerHTML={{ __html: `A new medication was started in the past 2 weeks and a rash developed` }} />
              <li dangerouslySetInnerHTML={{ __html: `Rash is significantly affecting sleep or quality of life` }} />
              <li dangerouslySetInnerHTML={{ __html: `You are immunocompromised or &gt;50 years old with a unilateral blistering rash (possible shingles)` }} />
            </ul>
            <h3>What Happens in a TeleDirectMD Evaluation</h3>
            <ol>
              <li dangerouslySetInnerHTML={{ __html: `<strong>Book your visit</strong> at book.teledirectmd.com — select a same-day or next-day time slot. No referral required. Ensure good lighting when showing the rash on camera.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>15-minute secure video visit</strong> with a board-certified Family Medicine physician. The doctor visually evaluates rash morphology, distribution, and associated symptoms, and reviews exposures, medications, and prior skin conditions.` }} />
              <li dangerouslySetInnerHTML={{ __html: `<strong>Evaluation results and plan:</strong> Targeted prescription provided based on rash type (topical corticosteroid, antihistamine, antifungal, antibiotic, or antiviral). Dermatology referral provided for biopsy-warranted lesions or complex systemic conditions.` }} />
            </ol>
            <div className="tdmd-sym__cta-strip" role="complementary" style={{ marginTop: '1.5rem' }}>
              <div>
                <p>Book a $79 California evaluation for skin rash</p>
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
                  <li>Visual rash evaluation and cause assessment</li>
                  <li>Prescription topical or systemic therapy if appropriate</li>
                  <li>No hidden fees — $79 is the total visit cost</li>
                </ul>
              </div>

              <div className="tdmd-price-chart" role="group" aria-label="Typical skin rash visit cost comparison">
                <h3>Typical Skin Rash Visit Cost</h3>
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
              sectionTitle={`Frequently Asked Questions — Skin Rash`}
              items={FAQ_ITEMS.map((f, i) => ({ ...f, id: `${pid}-faq-${i}` }))}
            />

            <div className="tdmd-bottom-cta" role="region" aria-label="Book a visit call to action">
              <div className="tdmd-bottom-cta-copy">
                <h3>Ready to get your skin rash evaluated?</h3>
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
              <li><a href="https://www.aad.org/public/diseases/eczema/types/atopic-dermatitis" rel="noopener" target="_blank">AAD — Atopic Dermatitis: Overview and Treatment</a>. Retrieved May 23, 2026.</li>
              <li><a href="https://www.cdc.gov/shingles/hcp/clinical-overview.html" rel="noopener" target="_blank">CDC — Shingles (Herpes Zoster): Clinical Overview</a>. Retrieved May 23, 2026.</li>
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
              If you have red-flag symptoms such as difficulty breathing with a rash, rapidly spreading skin infection, or a non-blanching purpuric rash, seek emergency care immediately — do not use TeleDirectMD. The $79 visit fee covers the physician evaluation only; prescription medication costs are separate and vary by pharmacy. TeleDirectMD does not prescribe controlled substances in any state.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
