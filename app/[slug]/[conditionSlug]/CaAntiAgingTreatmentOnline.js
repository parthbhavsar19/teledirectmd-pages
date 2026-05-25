/**
 * CaAntiAgingTreatmentOnline.js — production California × Anti-Aging Treatment condition page (v3)
 *
 * Rendered by app/[slug]/[conditionSlug]/page.js when slug === 'ca' and
 * conditionSlug === 'anti-aging-treatment-online'.
 *
 * Matches v3 CA UTI template: inline opener paragraph (no CitableSummaryBlock),
 * hero, CA regulatory block (exact reuse), epidemiology block, clinical content,
 * vertical bar chart cost section, CA payor table, medications, dual-path block,
 * FAQ accordion (12 Q/A), JSON-LD schemas (MedicalWebPage + FAQPage + Physician
 * + HowTo + BreadcrumbList + SpeakableSpecification — NEVER QAPage).
 *
 * Authority: AAD
 * Guideline: AAD Evidence-Based Anti-Aging Skin Care Guidelines + FDA-Approved Tretinoin Prescribing Information
 *
 * Hard rules respected:
 *   • No QAPage schema — FAQPage only.
 *   • Inline opener (not CitableSummaryBlock) — v3 pattern.
 *   • Physician NPI 1104323203 visible in byline.
 *   • No first-person prescribing language.
 *   • Only Notion-verified CA payors.
 *   • All prices verified via GoodRx URL citations.
 *   • TeleDirectMD is 18+ adults only (noted where relevant).
 */

import FaqAccordion from '../../components/FaqAccordion';
import { WhatDoesThisCostBlock, CompareTeleDirectMDLinkRow, CommonSymptomsBlock } from '../../components/CostCompareModules';

const PAGE_URL = 'https://teledirectmd.com/ca/anti-aging-treatment-online/';
const PAGE_TITLE = 'Photoaging / Anti-Aging Skin Treatment Online in California | TeleDirectMD';
const DATE_PUBLISHED = '2026-05-20';
const DATE_MODIFIED = '2026-05-20';
const LAST_REVIEWED = '2026-05-20';

const PHYSICIAN = {
  name: 'Parth Bhavsar, MD',
  npi: '1104323203',
  specialty: 'Family Medicine',
  licenseState: 'California',
  headshot: '/images/dr-parth-bhavsar.jpg',
  bioUrl: '/about',
};

const CA_PAYORS = [
  { name: 'Aetna', status: 'Active', effective: 'April 30, 2026', inNetwork: true,
    notes: 'Commercial plans. In-network as of April 30, 2026. Verify plan eligibility with Aetna before booking.' },
  { name: 'UnitedHealthcare Commercial', status: 'Approved', effective: 'May 29, 2026', inNetwork: true,
    notes: 'Covers UHC Commercial and Medicare Advantage. Excludes Medi-Cal, Individual Exchange, and Navigate/Charter/Core plan types.' },
  { name: 'Anthem Blue Cross', status: 'Pending', effective: 'Pending determination', inNetwork: false,
    notes: 'Enrollment pending. Self pay ($79) available.' },
  { name: 'Cigna', status: 'Pending', effective: 'Pending determination', inNetwork: false,
    notes: 'Pending — Telehealth Only review in progress. Self pay ($79) available.' },
  { name: 'Kaiser Permanente', status: 'Closed system', effective: '—', inNetwork: false,
    notes: 'Kaiser is a closed health system. Use Kaiser telehealth at kp.org. TeleDirectMD self pay is available but Kaiser will not reimburse out-of-network visits.' },
  { name: 'Medi-Cal', status: 'Not enrolled', effective: '—', inNetwork: false,
    notes: 'TeleDirectMD is not currently a Medi-Cal rendering provider. Find Medi-Cal telehealth providers via your managed care plan or dhcs.ca.gov.' },
];

const FAQ_ITEMS = [
  {
    id: 'ca-anti-aging-treatment-online-faq-0',
    question: 'Can I get prescription tretinoin for anti-aging online in California?',
    answer: (
      <p>
        Yes. California Business and Professions Code Section 2290.5 permits licensed physicians to prescribe appropriate medications via synchronous video telehealth without a prior in-person visit. TeleDirectMD's California-licensed board-certified Family Medicine physician evaluates your skin aging concerns — photoaging, fine lines, hyperpigmentation — via video consultation and photo review, then prescribes a physician-confirmed treatment regimen including tretinoin and adjunctive therapies. Self pay is $79; Aetna is in-network effective April 30, 2026.
      </p>
    ),
  },
  {
    id: 'ca-anti-aging-treatment-online-faq-1',
    question: 'What is tretinoin and why is it the gold-standard anti-aging treatment?',
    answer: (
      <p>
        Tretinoin (all-trans retinoic acid) is an FDA-approved prescription retinoid with Level A evidence (AAD) for treating photoaging — the wrinkles, hyperpigmentation, and rough texture caused by UV exposure. Tretinoin works by upregulating collagen synthesis in the dermis, accelerating keratinocyte turnover, and reversing photodamage at the cellular level. Multiple randomized controlled trials show statistically significant improvement in wrinkles, mottled hyperpigmentation, and skin roughness at 24–48 weeks. Generic tretinoin is available at approximately $30–$85 per tube with GoodRx, making it cost-effective compared to OTC "anti-aging" products.
      </p>
    ),
  },
  {
    id: 'ca-anti-aging-treatment-online-faq-2',
    question: 'What does California\'s high UV index mean for anti-aging care?',
    answer: (
      <p>
        California's UV index regularly reaches 8–11 in summer across Los Angeles, San Diego, the Central Valley, and the Sierra Nevada foothills — among the highest sustained UV exposure of any continental U.S. state. The AAD identifies UV radiation as causing approximately 90% of visible skin aging changes including wrinkles, brown spots, and textural changes. The California Department of Public Health (CDPH) supports daily broad-spectrum sunscreen use (SPF 30+) as the most evidence-based anti-aging intervention available. The physician recommends SPF 50+ for outdoor activities and emphasizes daily sunscreen as foundational to any tretinoin regimen.
      </p>
    ),
  },
  {
    id: 'ca-anti-aging-treatment-online-faq-3',
    question: 'What strength of tretinoin should I start with?',
    answer: (
      <p>
        The physician selects tretinoin strength based on your Fitzpatrick skin type, sun exposure history, prior retinoid experience, and skin sensitivity. For tretinoin-naive patients with sensitive skin or Fitzpatrick types I–II (lighter skin tones): start with 0.025% cream, applied 2–3 nights per week, gradually increasing to nightly use over 4–6 weeks. For patients with prior retinoid experience or moderate skin: 0.05% cream is the standard starting strength. Maximum strength (0.1%) is reserved for experienced users who have built tolerance. Retinization — temporary peeling, redness, and sensitivity — is expected in weeks 2–6 and typically resolves.
      </p>
    ),
  },
  {
    id: 'ca-anti-aging-treatment-online-faq-4',
    question: 'How much does prescription tretinoin cost in California with GoodRx?',
    answer: (
      <p>
        Generic tretinoin is significantly more affordable than brand-name Retin-A with a GoodRx coupon at California pharmacies (May 2026): tretinoin 0.025% cream approximately $30–$60 per tube; tretinoin 0.05% cream approximately $35–$75; tretinoin 0.1% cream approximately $40–$85. Brand-name Retin-A costs significantly more. Prescription cost is separate from the $79 TeleDirectMD visit fee.
      </p>
    ),
  },
  {
    id: 'ca-anti-aging-treatment-online-faq-5',
    question: 'What anti-aging treatments are outside the scope of TeleDirectMD?',
    answer: (
      <p>
        TeleDirectMD prescribes topical anti-aging medications via telehealth. The following are outside the scope of this service: injectable botulinum toxin (Botox/Dysport), dermal filler injections (hyaluronic acid, Sculptra, Radiesse), chemical peels performed by physician, laser or IPL treatments, photodynamic therapy, and surgical cosmetic procedures. For injectable and procedural cosmetic treatments in California, consult a board-certified dermatologist or plastic surgeon.
      </p>
    ),
  },
  {
    id: 'ca-anti-aging-treatment-online-faq-6',
    question: 'Is tretinoin safe for all skin tones in California?',
    answer: (
      <p>
        Tretinoin is effective across all Fitzpatrick skin types but must be used with care in darker skin tones (Fitzpatrick types IV–VI). Post-inflammatory hyperpigmentation (PIH) — darkening of skin in response to irritation — is a risk in darker skin tones if tretinoin is initiated too aggressively. The physician recommends starting with a lower concentration (0.025%), using a moisturizing cream formulation rather than gel, and applying every other night initially to reduce retinization. Azelaic acid 15% is also a good complementary depigmenting agent for darker skin tones due to its safety across all Fitzpatrick types.
      </p>
    ),
  },
  {
    id: 'ca-anti-aging-treatment-online-faq-7',
    question: 'Can I use tretinoin and sunscreen together in California?',
    answer: (
      <p>
        Yes, and combining tretinoin with daily sunscreen is essential — not optional. Tretinoin increases photosensitivity of the skin. California's high UV index (8–11+ in summer) means sun damage can occur in minutes. The AAD recommends applying broad-spectrum SPF 30–50+ sunscreen every morning (and reapplying every 2 hours outdoors) while using tretinoin. Apply tretinoin at night only. Sunscreen is the most evidence-based anti-aging intervention available — even more so when using tretinoin that increases UV sensitivity.
      </p>
    ),
  },
  {
    id: 'ca-anti-aging-treatment-online-faq-8',
    question: 'Does California telehealth law allow anti-aging prescriptions without an in-person visit?',
    answer: (
      <p>
        Yes. California Business and Professions Code Section 2290.5 does not require a prior in-person visit for telehealth prescribing of non-controlled medications. Tretinoin, azelaic acid, and hydroquinone are not controlled substances and can be prescribed via a California video visit. The physician evaluates your skin concerns by live video and photo review to the same standard as an in-person evaluation for cosmetic prescription decisions.
      </p>
    ),
  },
  {
    id: 'ca-anti-aging-treatment-online-faq-9',
    question: 'What is azelaic acid and when is it used for anti-aging?',
    answer: (
      <p>
        Azelaic acid is a naturally occurring dicarboxylic acid available at 15–20% by prescription (Finacea, Azelex, generic) and at 10% over the counter. It works by inhibiting tyrosinase (reducing melanin synthesis) and suppressing inflammation. Clinical applications for anti-aging include: treating melasma (brown patches from UV or hormonal exposure), post-inflammatory hyperpigmentation, and rosacea-associated redness. Unlike hydroquinone, azelaic acid is safe for use in all Fitzpatrick skin types including darker skin tones, and is considered safe in pregnancy under physician guidance.
      </p>
    ),
  },
  {
    id: 'ca-anti-aging-treatment-online-faq-10',
    question: 'When should anti-aging skin concerns require in-person dermatology evaluation?',
    answer: (
      <p>
        See a dermatologist in-person for: any new or changing pigmented lesion suspicious for melanoma (asymmetry, irregular border, multiple colors, diameter >6mm, evolving — the ABCDE criteria); nodular or raised skin lesions; painful or bleeding skin lesions; rash with systemic symptoms (fever, joint pain — possible connective tissue disease); or when a TeleDirectMD physician assessment by video is insufficient to characterize a concerning lesion. Early melanoma detection is critical in sun-heavy California — annual skin checks with a dermatologist are recommended for adults with significant cumulative UV exposure.
      </p>
    ),
  },
  {
    id: 'ca-anti-aging-treatment-online-faq-11',
    question: 'What skincare routine should I follow alongside prescription tretinoin in California?',
    answer: (
      <p>
        The physician recommends a simplified routine to maximize tretinoin efficacy and minimize irritation: Morning — gentle non-soap cleanser, antioxidant serum (vitamin C 10–20% is complementary to tretinoin, applied AM), moisturizer, SPF 50+ sunscreen. Evening — gentle cleanser, allow skin to dry 20–30 minutes, apply pea-sized tretinoin to entire face, moisturizer over tretinoin if skin is very dry. Avoid retinol OTC products simultaneously with tretinoin (redundant and potentially irritating). Avoid exfoliating acids (AHAs, BHAs) in the first 4–6 weeks of tretinoin use while the skin builds tolerance. $79 TeleDirectMD visit includes skincare routine counseling.
      </p>
    ),
  },
];

const SCHEMAS = [{"@context": "https://schema.org", "@type": "MedicalWebPage", "name": "Photoaging / Anti-Aging Skin Treatment Online in California | TeleDirectMD", "url": "https://teledirectmd.com/ca/anti-aging-treatment-online/", "description": "Prescription anti-aging skin treatment online for California adults. Board-certified Family Medicine MD. AAD guideline-based. Self pay $79. Aetna in-network. Tretinoin, azelaic acid, hydroquinone. Same-day video visits.", "datePublished": "2026-05-20", "dateModified": "2026-05-20", "inLanguage": "en-US", "about": {"@type": "MedicalCondition", "name": "Anti-Aging Treatment", "code": {"@type": "MedicalCode", "code": "L57.8", "codingSystem": "ICD-10-CM"}}, "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient", "geographicArea": {"@type": "AdministrativeArea", "name": "California"}}, "reviewedBy": {"@type": "Physician", "@id": "https://teledirectmd.com/about/#physician-parth-bhavsar", "name": "Parth Bhavsar, MD", "identifier": {"@type": "PropertyValue", "propertyID": "NPI", "value": "1104323203"}, "medicalSpecialty": "Family Medicine", "hasCredential": [{"@type": "EducationalOccupationalCredential", "credentialCategory": "degree", "name": "Doctor of Medicine (MD)"}, {"@type": "EducationalOccupationalCredential", "credentialCategory": "certification", "name": "Board Certification \u2014 American Board of Family Medicine"}], "licensedIn": "California", "worksFor": {"@type": "MedicalOrganization", "name": "TeleDirectMD", "url": "https://teledirectmd.com"}, "sameAs": ["https://npiregistry.cms.hhs.gov/provider-view/1104323203", "https://teledirectmd.com/about/"]}, "speakable": {"@type": "SpeakableSpecification", "cssSelector": ["#ca-anti-aging-treatment-online-opening", "#ca-anti-aging-treatment-online-opening p", ".tdmd-ca-anti-aging-treatment-online__byline", "#ca-anti-aging-treatment-online-faq"]}}, {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Can I get prescription tretinoin for anti-aging online in California?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. California Business and Professions Code Section 2290.5 permits licensed physicians to prescribe appropriate medications via synchronous video telehealth without a prior in-person visit. TeleDirectMD's California-licensed board-certified Family Medicine physician evaluates your skin aging concerns \u2014 photoaging, fine lines, hyperpigmentation \u2014 via video consultation and photo review, then prescribes a physician-confirmed treatment regimen including tretinoin and adjunctive therapies. Self pay is $79; Aetna is in-network effective April 30, 2026."}}, {"@type": "Question", "name": "What is tretinoin and why is it the gold-standard anti-aging treatment?", "acceptedAnswer": {"@type": "Answer", "text": "Tretinoin (all-trans retinoic acid) is an FDA-approved prescription retinoid with Level A evidence (AAD) for treating photoaging \u2014 the wrinkles, hyperpigmentation, and rough texture caused by UV exposure. Tretinoin works by upregulating collagen synthesis in the dermis, accelerating keratinocyte turnover, and reversing photodamage at the cellular level. Multiple randomized controlled trials show statistically significant improvement in wrinkles, mottled hyperpigmentation, and skin roughness at 24\u201348 weeks. Generic tretinoin is available at approximately $30\u2013$85 per tube with GoodRx, making it cost-effective compared to OTC \"anti-aging\" products."}}, {"@type": "Question", "name": "What does California's high UV index mean for anti-aging care?", "acceptedAnswer": {"@type": "Answer", "text": "California's UV index regularly reaches 8\u201311 in summer across Los Angeles, San Diego, the Central Valley, and the Sierra Nevada foothills \u2014 among the highest sustained UV exposure of any continental U.S. state. The AAD identifies UV radiation as causing approximately 90% of visible skin aging changes including wrinkles, brown spots, and textural changes. The California Department of Public Health (CDPH) supports daily broad-spectrum sunscreen use (SPF 30+) as the most evidence-based anti-aging intervention available. The physician recommends SPF 50+ for outdoor activities and emphasizes daily sunscreen as foundational to any tretinoin regimen."}}, {"@type": "Question", "name": "What strength of tretinoin should I start with?", "acceptedAnswer": {"@type": "Answer", "text": "The physician selects tretinoin strength based on your Fitzpatrick skin type, sun exposure history, prior retinoid experience, and skin sensitivity. For tretinoin-naive patients with sensitive skin or Fitzpatrick types I\u2013II (lighter skin tones): start with 0.025% cream, applied 2\u20133 nights per week, gradually increasing to nightly use over 4\u20136 weeks. For patients with prior retinoid experience or moderate skin: 0.05% cream is the standard starting strength. Maximum strength (0.1%) is reserved for experienced users who have built tolerance. Retinization \u2014 temporary peeling, redness, and sensitivity \u2014 is expected in weeks 2\u20136 and typically resolves."}}, {"@type": "Question", "name": "How much does prescription tretinoin cost in California with GoodRx?", "acceptedAnswer": {"@type": "Answer", "text": "Generic tretinoin is significantly more affordable than brand-name Retin-A with a GoodRx coupon at California pharmacies (May 2026): tretinoin 0.025% cream approximately $30\u2013$60 per tube; tretinoin 0.05% cream approximately $35\u2013$75; tretinoin 0.1% cream approximately $40\u2013$85. Brand-name Retin-A costs significantly more. Prescription cost is separate from the $79 TeleDirectMD visit fee."}}, {"@type": "Question", "name": "What anti-aging treatments are outside the scope of TeleDirectMD?", "acceptedAnswer": {"@type": "Answer", "text": "TeleDirectMD prescribes topical anti-aging medications via telehealth. The following are outside the scope of this service: injectable botulinum toxin (Botox/Dysport), dermal filler injections (hyaluronic acid, Sculptra, Radiesse), chemical peels performed by physician, laser or IPL treatments, photodynamic therapy, and surgical cosmetic procedures. For injectable and procedural cosmetic treatments in California, consult a board-certified dermatologist or plastic surgeon."}}, {"@type": "Question", "name": "Is tretinoin safe for all skin tones in California?", "acceptedAnswer": {"@type": "Answer", "text": "Tretinoin is effective across all Fitzpatrick skin types but must be used with care in darker skin tones (Fitzpatrick types IV\u2013VI). Post-inflammatory hyperpigmentation (PIH) \u2014 darkening of skin in response to irritation \u2014 is a risk in darker skin tones if tretinoin is initiated too aggressively. The physician recommends starting with a lower concentration (0.025%), using a moisturizing cream formulation rather than gel, and applying every other night initially to reduce retinization. Azelaic acid 15% is also a good complementary depigmenting agent for darker skin tones due to its safety across all Fitzpatrick types."}}, {"@type": "Question", "name": "Can I use tretinoin and sunscreen together in California?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, and combining tretinoin with daily sunscreen is essential \u2014 not optional. Tretinoin increases photosensitivity of the skin. California's high UV index (8\u201311+ in summer) means sun damage can occur in minutes. The AAD recommends applying broad-spectrum SPF 30\u201350+ sunscreen every morning (and reapplying every 2 hours outdoors) while using tretinoin. Apply tretinoin at night only. Sunscreen is the most evidence-based anti-aging intervention available \u2014 even more so when using tretinoin that increases UV sensitivity."}}, {"@type": "Question", "name": "Does California telehealth law allow anti-aging prescriptions without an in-person visit?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. California Business and Professions Code Section 2290.5 does not require a prior in-person visit for telehealth prescribing of non-controlled medications. Tretinoin, azelaic acid, and hydroquinone are not controlled substances and can be prescribed via a California video visit. The physician evaluates your skin concerns by live video and photo review to the same standard as an in-person evaluation for cosmetic prescription decisions."}}, {"@type": "Question", "name": "What is azelaic acid and when is it used for anti-aging?", "acceptedAnswer": {"@type": "Answer", "text": "Azelaic acid is a naturally occurring dicarboxylic acid available at 15\u201320% by prescription (Finacea, Azelex, generic) and at 10% over the counter. It works by inhibiting tyrosinase (reducing melanin synthesis) and suppressing inflammation. Clinical applications for anti-aging include: treating melasma (brown patches from UV or hormonal exposure), post-inflammatory hyperpigmentation, and rosacea-associated redness. Unlike hydroquinone, azelaic acid is safe for use in all Fitzpatrick skin types including darker skin tones, and is considered safe in pregnancy under physician guidance."}}, {"@type": "Question", "name": "When should anti-aging skin concerns require in-person dermatology evaluation?", "acceptedAnswer": {"@type": "Answer", "text": "See a dermatologist in-person for: any new or changing pigmented lesion suspicious for melanoma (asymmetry, irregular border, multiple colors, diameter >6mm, evolving \u2014 the ABCDE criteria); nodular or raised skin lesions; painful or bleeding skin lesions; rash with systemic symptoms (fever, joint pain \u2014 possible connective tissue disease); or when a TeleDirectMD physician assessment by video is insufficient to characterize a concerning lesion. Early melanoma detection is critical in sun-heavy California \u2014 annual skin checks with a dermatologist are recommended for adults with significant cumulative UV exposure."}}, {"@type": "Question", "name": "What skincare routine should I follow alongside prescription tretinoin in California?", "acceptedAnswer": {"@type": "Answer", "text": "The physician recommends a simplified routine to maximize tretinoin efficacy and minimize irritation: Morning \u2014 gentle non-soap cleanser, antioxidant serum (vitamin C 10\u201320% is complementary to tretinoin, applied AM), moisturizer, SPF 50+ sunscreen. Evening \u2014 gentle cleanser, allow skin to dry 20\u201330 minutes, apply pea-sized tretinoin to entire face, moisturizer over tretinoin if skin is very dry. Avoid retinol OTC products simultaneously with tretinoin (redundant and potentially irritating). Avoid exfoliating acids (AHAs, BHAs) in the first 4\u20136 weeks of tretinoin use while the skin builds tolerance. $79 TeleDirectMD visit includes skincare routine counseling."}}]}, {"@context": "https://schema.org", "@type": "HowTo", "name": "How to Get Photoaging / Anti-Aging Skin Treatment Online in California", "description": "Three steps to receive photoaging / anti-aging skin treatment evaluation and, if appropriate, a prescription from a California-licensed board-certified physician.", "totalTime": "PT30M", "estimatedCost": {"@type": "MonetaryAmount", "currency": "USD", "value": "79"}, "step": [{"@type": "HowToStep", "position": 1, "name": "Book your video visit", "text": "Visit teledirectmd.com and select California Anti-Aging Treatment treatment. No referral needed. Self pay $79. Many visits available same day.", "url": "https://teledirectmd.com/book-online"}, {"@type": "HowToStep", "position": 2, "name": "See a California-licensed MD by secure video", "text": "Connect with a board-certified Family Medicine physician licensed in California. The physician reviews your symptoms, history, and red-flag screening. Consent per CA B&P Section 2290.5 confirmed.", "url": "https://teledirectmd.com/ca/anti-aging-treatment-online/"}, {"@type": "HowToStep", "position": 3, "name": "Receive your treatment plan and e-prescription", "text": "If medication is appropriate, a California-compliant e-prescription is sent to your chosen pharmacy during or after the visit.", "url": "https://teledirectmd.com/ca/anti-aging-treatment-online/"}]}, {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "TeleDirectMD", "item": "https://teledirectmd.com"}, {"@type": "ListItem", "position": 2, "name": "California", "item": "https://teledirectmd.com/ca/"}, {"@type": "ListItem", "position": 3, "name": "Photoaging / Anti-Aging Skin Treatment Online in California", "item": "https://teledirectmd.com/ca/anti-aging-treatment-online/"}]}];

const PAGE_CSS = `
.tdmd-ca-cond{color:var(--tdmd-text);}
.tdmd-ca-cond .tdmd-ca-cond__byline{display:flex;align-items:center;gap:1rem;flex-wrap:wrap;margin:1rem 0 0;padding:0.85rem 1rem;background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:var(--tdmd-radius,18px);}
.tdmd-ca-cond .tdmd-ca-cond__byline img{width:56px;height:56px;border-radius:50%;object-fit:cover;border:2px solid var(--tdmd-teal);flex-shrink:0;background:#fff;}
.tdmd-ca-cond .tdmd-ca-cond__byline-text{display:flex;flex-direction:column;gap:0.15rem;font-size:0.92rem;line-height:1.45;}
.tdmd-ca-cond .tdmd-ca-cond__byline-name{font-weight:700;color:var(--tdmd-navy);}
.tdmd-ca-cond .tdmd-ca-cond__byline-meta{color:var(--tdmd-muted);font-size:0.85rem;}
.tdmd-ca-cond .tdmd-ca-cond__byline a{color:var(--tdmd-teal);font-weight:600;text-decoration:underline;text-underline-offset:2px;}
.tdmd-ca-cond .tdmd-ca-cond__dual{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1.25rem;margin-top:1rem;}
.tdmd-ca-cond .tdmd-ca-cond__dual-card{background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:var(--tdmd-radius,18px);padding:1.1rem 1.25rem;box-shadow:var(--tdmd-shadow);}
.tdmd-ca-cond .tdmd-ca-cond__dual-card--good{border-left:5px solid #2E7D52;}
.tdmd-ca-cond .tdmd-ca-cond__dual-card--alert{border-left:5px solid var(--tdmd-accent);}
.tdmd-ca-cond .tdmd-ca-cond__dual-card h3{margin:0 0 0.5rem;font-size:1.1rem;color:var(--tdmd-navy);}
.tdmd-ca-cond .tdmd-ca-cond__dual-card ul{margin:0;padding-left:1.1rem;line-height:1.55;}
.tdmd-ca-cond .tdmd-ca-cond__dual-card li{margin:0.25rem 0;}
@media (max-width:720px){.tdmd-ca-cond .tdmd-ca-cond__dual{grid-template-columns:minmax(0,1fr);}}
.tdmd-ca-cond .tdmd-ca-cond__sibling-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:0.85rem;margin-top:1rem;}
.tdmd-ca-cond .tdmd-ca-cond__sibling{display:flex;flex-direction:column;gap:0.25rem;padding:0.9rem 1rem;background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:14px;color:var(--tdmd-text);text-decoration:none;transition:.2s;}
.tdmd-ca-cond .tdmd-ca-cond__sibling:hover{border-color:var(--tdmd-teal);transform:translateY(-2px);box-shadow:var(--tdmd-shadow);}
.tdmd-ca-cond .tdmd-ca-cond__sibling-label{font-weight:700;color:var(--tdmd-navy);}
.tdmd-ca-cond .tdmd-ca-cond__sibling-why{font-size:0.86rem;color:var(--tdmd-muted);}
.tdmd-ca-cond .tdmd-ca-cond__payor-pill{display:inline-block;padding:0.15rem 0.55rem;border-radius:999px;font-size:0.78rem;font-weight:700;letter-spacing:0.02em;}
.tdmd-ca-cond .tdmd-ca-cond__payor-pill--good{background:#E6F4EA;color:#1F6B36;}
.tdmd-ca-cond .tdmd-ca-cond__payor-pill--pending{background:#FEF3C7;color:#7A5A09;}
.tdmd-ca-cond .tdmd-ca-cond__payor-pill--none{background:#FEE2E2;color:#8A1F1F;}
.tdmd-ca-cond .tdmd-ca-cond__med-firstline{background:linear-gradient(90deg,#E6F4EA,transparent);font-weight:600;}
.tdmd-ca-cond .tdmd-condition-opener{margin:1.5rem 0 0.5rem;}
.tdmd-ca-cond .tdmd-condition-opener p{margin:0;font-size:1.05rem;line-height:1.7;color:var(--tdmd-text);}
.tdmd-ca-cond .tdmd-condition-opener p strong{color:var(--tdmd-navy);}
.tdmd-ca-cond .tdmd-condition-opener p a{color:var(--tdmd-teal);text-decoration:underline;text-underline-offset:2px;font-weight:600;}
.tdmd-ca-cond .tdmd-ca-cond__cta-strip{display:flex;justify-content:space-between;align-items:center;gap:1.25rem;flex-wrap:wrap;background:linear-gradient(135deg,var(--tdmd-teal) 0%,var(--tdmd-navy) 100%);color:#fff;padding:1.25rem 1.5rem;border-radius:var(--tdmd-radius,18px);margin:1.25rem 0;box-shadow:var(--tdmd-shadow);}
.tdmd-ca-cond .tdmd-ca-cond__cta-strip p{margin:0;font-size:1.05rem;font-weight:700;}
.tdmd-ca-cond .tdmd-ca-cond__cta-strip small{display:block;font-weight:400;margin-top:0.2rem;opacity:0.92;font-size:0.86rem;}
.tdmd-ca-cond .tdmd-ca-cond__cta-btn{background:#fff;color:var(--tdmd-navy);font-weight:700;padding:0.7rem 1.4rem;border-radius:999px;text-decoration:none;white-space:nowrap;}
.tdmd-ca-cond .tdmd-ca-cond__related-links{display:flex;flex-wrap:wrap;gap:0.4rem 0.85rem;margin-top:0.75rem;font-size:0.95rem;}
.tdmd-ca-cond .tdmd-ca-cond__related-links a{color:var(--tdmd-teal);font-weight:600;text-decoration:underline;text-underline-offset:2px;}
`;

export default function CaAntiAgingTreatmentOnline() {
  const pid = 'ca-anti-aging-treatment-online';

  return (
    <>
      {/* JSON-LD schemas */}
      {SCHEMAS.map((schema, i) => (
        <script
          key={`schema-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />

      <div className="tdmd-ca-cond">
        {/* Breadcrumb */}
        <nav className="tdmd-breadcrumbs" aria-label="Breadcrumb">
          <div className="tdmd-container" style={{ paddingTop: '0.5rem', paddingBottom: 0 }}>
            <a href="/">Home</a>
            <span className="tdmd-bc-sep" aria-hidden="true">/</span>
            <a href="/ca/">California</a>
            <span className="tdmd-bc-sep" aria-hidden="true">/</span>
            <span aria-current="page">Photoaging / Anti-Aging Skin Treatment Online</span>
          </div>
        </nav>

        {/* ─── 1) HERO ────────────────────────────────────────────────────── */}
        <section className="tdmd-hero" id={`${pid}-hero`}>
          <div className="tdmd-container">
            <div className="tdmd-hero-grid">
              <div className="tdmd-hero-copy">
                <h1 data-speakable="true">Anti-Aging Treatment Online in California</h1>
                <p className="tdmd-hero-sub" data-speakable="true">
                  California adult care by secure video visit. Self pay $79 · Aetna in-network · UHC Commercial approved · AAD evidence-based anti-aging skin care guidelines · CA B&P §2290.5 compliant.
                </p>
                <p>
                  Anti-Aging Treatment is a condition commonly evaluated and, when appropriate, treated via telehealth. TeleDirectMD uses a safety-first approach, screening for red-flag symptoms that require in-person or emergency care before determining whether treatment by video visit is appropriate. This page is for adults located in California, including Los Angeles, San Diego, San Jose, San Francisco, Fresno, Sacramento, Long Beach, Oakland, Bakersfield, Anaheim, and surrounding areas.
                </p>

                {/* v3: Inline opener paragraph — replaces CitableSummaryBlock */}
                <div className="tdmd-condition-opener" id={`${pid}-opening`}>
                  <p>
                    <strong>Can I get photoaging / anti-aging skin treatment online in California?</strong> Yes. <a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=2290.5.&lawCode=BPC" rel="noopener" target="_blank">California Business and Professions Code Section 2290.5</a> — the Telehealth Advancement Act — permits licensed physicians to deliver care via synchronous video telehealth without a prior in-person visit. TeleDirectMD physicians are licensed in California and are held to the same standard of care as in-person physicians by the <a href="https://www.mbc.ca.gov/Resources/Medical-Resources/telehealth.aspx" rel="noopener" target="_blank">Medical Board of California</a>. Adults 18+ located in California can book a same-day video visit. Self pay is $79. <a href="/insurance/">Aetna is in-network</a> as of April 30, 2026; UnitedHealthcare Commercial approved May 29, 2026.
                  </p>
                </div>

                {/* Visible byline (E-E-A-T) */}
                <div className="tdmd-ca-cond__byline" aria-label="Reviewed by physician">
                  <img src={PHYSICIAN.headshot} alt={`${PHYSICIAN.name} headshot`} loading="eager" width={56} height={56} />
                  <div className="tdmd-ca-cond__byline-text">
                    <span className="tdmd-ca-cond__byline-name">
                      Reviewed by <a href={PHYSICIAN.bioUrl}>{PHYSICIAN.name}</a> — Board-Certified {PHYSICIAN.specialty}
                    </span>
                    <span className="tdmd-ca-cond__byline-meta">
                      NPI {PHYSICIAN.npi} &middot; Licensed in {PHYSICIAN.licenseState} &middot; Last reviewed 
                      <time dateTime={LAST_REVIEWED}>May 20, 2026</time>
                    </span>
                  </div>
                </div>

                <p className="tdmd-toc-intro" style={{ marginTop: '1.25rem' }}><strong>Quick navigation:</strong></p>
                <ul className="tdmd-toc">
                  <li><a href={`#${pid}-eligibility`}>Eligibility checklist</a></li>
                  <li><a href={`#${pid}-ca-law`}>California telehealth law</a></li>
                  <li><a href={`#${pid}-epidemiology`}>California epidemiology</a></li>
                  <li><a href={`#${pid}-cost`}>Cost &amp; insurance</a></li>
                  <li><a href={`#${pid}-medications`}>Medication options</a></li>
                  <li><a href={`#${pid}-dual-path`}>Telehealth vs in-person</a></li>
                  <li><a href={`#${pid}-faq`}>FAQs</a></li>
                  <li><a href={`#${pid}-references`}>References</a></li>
                </ul>

                <ul className="tdmd-hero-benefits">
                  <li>Self pay $79 — no insurance required</li>
                  <li>MD-only care (no mid-levels)</li>
                  <li>Aetna in-network (effective April 30, 2026)</li>
                  <li>UnitedHealthcare Commercial approved (effective May 29, 2026)</li>
                  <li>Licensed telehealth care for adults 18+ located in California at time of visit</li>
                </ul>

                <div className="tdmd-hero-ctas">
                  <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit — $79</a>
                  <a href="/ca/" className="tdmd-btn tdmd-btn-outline">Explore California Pages</a>
                  <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">View All Adult Conditions</a>
                </div>

                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> L57.8 (Other skin changes due to chronic exposure to nonionizing radiation — photoaging)</p>
              </div>

              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>Online MD-Only Anti-Aging Treatment Care in California</h2>
                  <ul>
                    <li>Fast evaluation for photoaging / anti-aging skin treatment symptoms</li>
                    <li>Red-flag screening for serious complications requiring in-person care</li>
                    <li>Guideline-based treatment per AAD</li>
                    <li>e-Prescriptions to your CA pharmacy under AB 2789</li>
                    <li>Clear follow-up steps and prevention guidance</li>
                  </ul>
                  <p className="tdmd-hero-note">
                    Adults 18+ only. TeleDirectMD is not an emergency service. Go to urgent care or the ER for severe symptoms, systemic illness, or any red-flag signs described on this page. TeleDirectMD does not prescribe controlled substances.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2) ELIGIBILITY CHECKLIST ─────────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-eligibility`}>
          <div className="tdmd-container">
            <h2>Photoaging / Anti-Aging Skin Treatment Telehealth Eligibility Checklist for California</h2>
            <p><strong>You are likely eligible for a TeleDirectMD video visit if ALL of these apply to you:</strong></p>
            <div className="tdmd-ca-cond__dual">
              <div className="tdmd-ca-cond__dual-card tdmd-ca-cond__dual-card--good">
                <h3>&#10003; You Are Eligible If</h3>
                <ul>
                  <li>Adult 18+ located in California at time of visit</li>
                  <li>Photoaging — wrinkles, fine lines, hyperpigmentation, rough texture from UV exposure</li>
                  <li>Seeking tretinoin (0.025%, 0.05%, or 0.1%) prescription or refill</li>
                  <li>Seeking azelaic acid or hydroquinone for hyperpigmentation or melasma</li>
                  <li>No suspicious pigmented lesions on video/photo review</li>
                  <li>Skincare regimen consultation and optimization</li>
                </ul>
              </div>
              <div className="tdmd-ca-cond__dual-card tdmd-ca-cond__dual-card--alert">
                <h3>&#10007; Seek In-Person or Emergency Care If</h3>
                <ul>
                  <li>New or changing pigmented lesion suspicious for melanoma (asymmetry, irregular border, multiple colors, diameter &gt;6mm, evolving — ABCDE criteria) — in-person dermatology evaluation urgently</li>
                  <li>Nodular or raised skin lesions — in-person evaluation</li>
                  <li>Painful or bleeding skin lesions — in-person dermatology</li>
                  <li>Rash with systemic symptoms (fever, joint pain) — possible connective tissue disease — in-person evaluation</li>
                  <li>Rapid onset of multiple seborrheic keratoses (Leser-Trélat sign) — possible paraneoplastic process — in-person evaluation</li>
                  <li>Severe allergic reaction to prescription topical (urticaria, angioedema) — ER</li>
                </ul>
                <p style={{ marginTop: '0.75rem', color: 'var(--tdmd-muted)', fontSize: '0.92rem' }}>
                  <strong>If you have red-flag symptoms, seek urgent in-person care or emergency care immediately. TeleDirectMD is not appropriate for complex or severe cases.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 3) CALIFORNIA TELEHEALTH LAW ─────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-ca-law`}>
          <div className="tdmd-container">
            <h2>California Telehealth Law and Your Photoaging / Anti-Aging Skin Treatment Visit</h2>

            <h3>Does California require an in-person visit before telehealth?</h3>
            <p>
              No. <a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=2290.5.&lawCode=BPC" rel="noopener" target="_blank">California Business and Professions Code Section 2290.5</a> — the Telehealth Advancement Act — does not require a prior in-person visit before receiving telehealth services. Before delivering care, the physician must obtain the patient&apos;s verbal or written consent for telehealth and document it — which TeleDirectMD does at the start of every visit.
            </p>

            <h3>What standard of care applies to California telehealth physicians?</h3>
            <p>
              The <a href="https://www.mbc.ca.gov/Resources/Medical-Resources/telehealth.aspx" rel="noopener" target="_blank">Medical Board of California</a> is explicit: &ldquo;The standard of care is the same whether the patient is seen in-person, through telehealth or other methods of electronically enabled health care.&rdquo; Physicians must be licensed in California to provide telehealth to California patients — a requirement TeleDirectMD satisfies. See our <a href="/about/">Dr. Bhavsar bio</a> for credential details.
            </p>

            <h3>Does California insurance parity law cover telehealth visits?</h3>
            <p>
              Yes, for commercial plans. California Assembly Bill 744 (2019), codified in <a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=10123.85.&lawCode=INS" rel="noopener" target="_blank">California Insurance Code &sect;10123.85</a>, requires commercial health plans to reimburse telehealth services on the same basis as comparable in-person services. Plans cannot require face-to-face contact as a condition of reimbursement, and copays for telehealth cannot exceed those for equivalent in-person visits. These parity provisions apply to contracts issued, amended, or renewed after January 1, 2021. AB 744 parity does not apply to Medi-Cal managed care plans or Medicare.
            </p>

            <h3>Are photoaging / anti-aging skin treatment medications controlled substances under California law?</h3>
            <p>
              Tretinoin, azelaic acid, and hydroquinone are not controlled substances. They can be prescribed via California telehealth and transmitted electronically to any California pharmacy under Assembly Bill 2789. California requires all prescriptions to be issued electronically under Assembly Bill 2789 (effective January 1, 2022), per the <a href="https://www.mbc.ca.gov/News/" rel="noopener" target="_blank">Medical Board of California</a>. TeleDirectMD does not prescribe controlled substances in any state.
            </p>
          </div>
        </section>

        {/* ─── 4) HOW IT WORKS ─────────────────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-how-it-works`} itemScope itemType="https://schema.org/HowTo">
          <div className="tdmd-container">
            <h2 itemProp="name">How Online Photoaging / Anti-Aging Skin Treatment Works in California</h2>
            <div className="tdmd-decision-flow">
              <div className="tdmd-decision-step tdmd-decision-step-check">
                <div className="tdmd-decision-number">1</div>
                <div className="tdmd-decision-content">
                  <h3>Book your video visit</h3>
                  <p>No referral needed. Self pay $79. Many visits available same day. Note your symptom onset, prior episodes, allergies, and current medications before the visit.</p>
                </div>
              </div>
              <div className="tdmd-decision-step tdmd-decision-step-check">
                <div className="tdmd-decision-number">2</div>
                <div className="tdmd-decision-content">
                  <h3>See a California-licensed MD by secure video</h3>
                  <p>The physician reviews your symptoms, history, and risk factors. Telehealth consent under CA B&amp;P &sect;2290.5 is obtained and documented. Red-flag screening determines whether telehealth is appropriate for your presentation.</p>
                </div>
              </div>
              <div className="tdmd-decision-step tdmd-decision-step-good">
                <div className="tdmd-decision-number">3</div>
                <div className="tdmd-decision-content">
                  <h3>Receive your treatment plan and e-prescription</h3>
                  <p>If medication is clinically appropriate, a California-compliant e-prescription is sent to your chosen California pharmacy during or after the visit. You receive clear follow-up instructions regardless of treatment choice, including when to seek in-person care.</p>
                  <div className="tdmd-decision-cta">
                    <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 5) CALIFORNIA EPIDEMIOLOGY ──────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-epidemiology`}>
          <div className="tdmd-container">
            <h2>How Common Is Anti-Aging Treatment in California?</h2>
            <p>
              California's year-round outdoor culture — surfing, hiking, outdoor dining, agricultural work — combined with its geographic position at 32–42 degrees latitude and high UV index (UV index regularly 8–11+ in summer in Los Angeles, San Diego, and Central Valley) drives photoaging, actinic keratoses, and cosmetic skin aging concerns at rates above national averages. The American Cancer Society estimates California leads the nation in melanoma diagnoses, reflecting both its sun exposure profile and its large population. The AAD identifies UV radiation as causing approximately 90% of visible skin aging changes. — <a href="https://www.aad.org/public/everyday-care/skin-care-basics/anti-aging/retinoids" rel="noopener" target="_blank">AAD — Retinoids: The Gold Standard Anti-Aging Treatment</a>.
            </p>
            <p>
              Clinical guidance for photoaging / anti-aging skin treatment is provided by <a href="https://www.aad.org/public/everyday-care/skin-care-basics/anti-aging/retinoids" rel="noopener" target="_blank">AAD</a> through the AAD Evidence-Based Anti-Aging Skin Care Guidelines + FDA-Approved Tretinoin Prescribing Information. TeleDirectMD follows these guidelines on every patient visit.
            </p>
            <h3>What causes anti-aging treatment and who is most at risk in California?</h3>
            <p>
              Anti-Aging Treatment affects California adults across all demographics, though certain populations face higher risk based on the specific condition. The physician reviews your individual risk factors at each visit. Telehealth is appropriate for adults 18 and older with mild to moderate presentations who do not have red-flag symptoms requiring immediate in-person evaluation.
            </p>
          </div>
        </section>

        {/* ─── 6) COST & INSURANCE ─────────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-cost`}>
          <div className="tdmd-container">
            <h2>Photoaging / Anti-Aging Skin Treatment Cost &amp; Insurance in California</h2>
            <p>TeleDirectMD&apos;s self-pay rate is <strong>$79</strong> for a complete MD video visit, including evaluation, treatment plan, and e-prescription. Patients with in-network insurance pay their plan&apos;s telehealth copay instead. The table below reflects current TeleDirectMD payor enrollment for California.</p>

            <div className="tdmd-price-grid">
              <div className="tdmd-price-card" aria-label="TeleDirectMD pricing">
                <h3>TeleDirectMD Video Visit</h3>
                <p className="tdmd-price-big">$79</p>
                <p className="tdmd-price-sub">Self-pay flat fee — no subscription</p>
                <ul className="tdmd-price-includes">
                  <li>Board-certified MD video evaluation</li>
                  <li>Red-flag screening &amp; structured triage</li>
                  <li>e-Prescription to your CA pharmacy (when appropriate)</li>
                  <li>Follow-up instructions &amp; prevention guidance</li>
                  <li>No hidden fees</li>
                </ul>
              </div>

              <div className="tdmd-price-chart" role="group" aria-label="Typical Anti-Aging Treatment cost comparison">
                <h3>Typical Anti-Aging Treatment Visit Cost in California</h3>
                <p className="tdmd-price-caption">Common ranges Californians see before insurance. Actual costs vary by setting and city.</p>
                <div className="tdmd-vbars" role="list" aria-label="Cost comparison bars">
                  {[
                    { name: 'TeleDirectMD video visit', value: '$79', heightPct: 16, isTdmd: true },
                    { name: 'Other telehealth', value: '$75–$150', heightPct: 22 },
                    { name: 'Urgent care', value: '$150–$300', heightPct: 45 },
                    { name: 'ER visit', value: '$500–$3,000+', heightPct: 100 },
                  ].map((bar, i) => (
                    <div key={i} className="tdmd-vbar" role="listitem" aria-label={`${bar.name}: ${bar.value}`}>
                      <span className="tdmd-vbar__value">{bar.value}</span>
                      <div className={`tdmd-vbar__fill${bar.isTdmd ? ' tdmd-vbar__fill--tdmd' : ''}`} style={{ height: `${bar.heightPct}%` }} aria-hidden="true" />
                      <span className={`tdmd-vbar__label${bar.isTdmd ? ' tdmd-vbar__label--tdmd' : ''}`}>{bar.name}</span>
                    </div>
                  ))}
                </div>
                <p className="tdmd-price-footnote">Comparison reflects typical California metro pricing. Actual costs vary.</p>
              </div>
            </div>

            <h3 style={{ marginTop: '1.75rem' }}>California Payor Status — TeleDirectMD</h3>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="TeleDirectMD California payor status">
                <caption style={{ captionSide: 'bottom', textAlign: 'left', padding: '0.5rem 0', fontSize: '0.85rem', color: 'var(--tdmd-muted)' }}>
                  Source: TeleDirectMD payor enrollment records, refreshed May 20, 2026. Verify current in-network status with your insurer before booking.
                </caption>
                <thead>
                  <tr>
                    <th>Insurer</th>
                    <th>Status</th>
                    <th>Effective</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {CA_PAYORS.map((p) => {
                    const pillClass = p.inNetwork
                      ? 'tdmd-ca-cond__payor-pill tdmd-ca-cond__payor-pill--good'
                      : (p.status === 'Pending' || p.status === 'Approved')
                        ? 'tdmd-ca-cond__payor-pill tdmd-ca-cond__payor-pill--pending'
                        : 'tdmd-ca-cond__payor-pill tdmd-ca-cond__payor-pill--none';
                    const pillLabel = p.inNetwork ? '&#10003; In-Network' : p.status;
                    return (
                      <tr key={p.name}>
                        <td><strong>{p.name}</strong></td>
                        <td><span className={pillClass} dangerouslySetInnerHTML={{ __html: pillLabel }} /></td>
                        <td>{p.effective}</td>
                        <td>{p.notes}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p style={{ marginTop: '1rem' }}>
              View all <a href="/insurance">insurance options</a> or <a href="/book-online">book a $79 self-pay visit</a>.
            </p>
          </div>
        </section>

        {/* ─── 7) MEDICATIONS TABLE ─────────────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-medications`}>
          <div className="tdmd-container">
            <h2>Photoaging / Anti-Aging Skin Treatment Medication Options and Costs in California</h2>
            <p>
              Medications for photoaging / anti-aging skin treatment are selected based on current guidelines from <a href="https://www.aad.org/public/everyday-care/skin-care-basics/anti-aging/retinoids" rel="noopener" target="_blank">AAD</a>, patient history, allergies, and relevant contraindications assessed at the visit. GoodRx-verified pricing is shown below.
            </p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Photoaging / Anti-Aging Skin Treatment medication options and GoodRx prices">
                <caption style={{ captionSide: 'bottom', textAlign: 'left', padding: '0.5rem 0', fontSize: '0.85rem', color: 'var(--tdmd-muted)' }}>
                  GoodRx prices retrieved May 2026 from goodrx.com. National coupon prices; actual cost varies by pharmacy. Prescription costs are separate from the TeleDirectMD visit fee.
                </caption>
                <thead>
                  <tr>
                    <th>Medication</th>
                    <th>Typical Regimen</th>
                    <th>GoodRx Price (May 2026)</th>
                    <th>Key Considerations</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="tdmd-ca-uti__med-firstline">
                    <td><strong>Tretinoin 0.025% cream (generic Retin-A)</strong> · First-line</td>
                    <td>Apply pea-sized amount to clean dry face 2–3 nights/week, increasing to nightly as tolerated</td>
                    <td><a href="https://www.goodrx.com/tretinoin" target="_blank" rel="noopener">~$30–$60/tube GoodRx</a></td>
                    <td>Starting strength for tretinoin-naive patients, sensitive skin, or Fitzpatrick types I–II. Retinization (peeling, redness) expected weeks 2–6. Gold-standard photoaging treatment per AAD.</td>
                  </tr>
                  <tr className="tdmd-ca-uti__med-firstline">
                    <td><strong>Tretinoin 0.05% cream (generic Retin-A)</strong> · First-line</td>
                    <td>Nightly, pea-sized amount to clean dry face</td>
                    <td><a href="https://www.goodrx.com/tretinoin" target="_blank" rel="noopener">~$35–$75/tube GoodRx</a></td>
                    <td>Standard strength for most patients after tolerating 0.025%. Good balance of efficacy and tolerability. Level A AAD evidence for photoaging.</td>
                  </tr>
                  <tr>
                    <td><strong>Tretinoin 0.1% cream (generic Retin-A)</strong></td>
                    <td>Nightly, pea-sized amount; significant retinization expected</td>
                    <td><a href="https://www.goodrx.com/tretinoin" target="_blank" rel="noopener">~$40–$85/tube GoodRx</a></td>
                    <td>Reserved for experienced tretinoin users. Significant peeling, redness, sensitivity — use cautiously in Fitzpatrick types I–II.</td>
                  </tr>
                  <tr className="tdmd-ca-uti__med-firstline">
                    <td><strong>Azelaic acid 15% gel/cream (Finacea, Azelex, generic)</strong> · First-line</td>
                    <td>Apply BID to affected areas</td>
                    <td><a href="https://www.goodrx.com/azelaic-acid" target="_blank" rel="noopener">~$40–$80/tube GoodRx</a></td>
                    <td>For hyperpigmentation, melasma, or rosacea-associated redness. Safe in all Fitzpatrick types. Can be used in pregnancy (physician discusses). Tyrosinase inhibitor.</td>
                  </tr>
                  <tr className="tdmd-ca-uti__med-firstline">
                    <td><strong>Hydroquinone 4% cream (generic)</strong> · First-line</td>
                    <td>Apply to hyperpigmented areas BID for ≤3 months</td>
                    <td><a href="https://www.goodrx.com/hydroquinone" target="_blank" rel="noopener">~$20–$45/tube GoodRx</a></td>
                    <td>For melasma and hyperpigmentation. Do not use continuously &gt;3 months. Avoid with potential pregnancy. Higher concentrations available compounded — physician discusses risks.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="tdmd-med-note">
              <strong>Important:</strong> The choice of medication depends on your medical history, allergies, drug interactions, and clinical factors assessed by the physician at the visit. Do not start any prescription medication without a clinical evaluation.
            </p>
          </div>
        </section>

        {/* ─── 8) DUAL-PATH BLOCK ───────────────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-dual-path`}>
          <div className="tdmd-container">
            <h2>TeleDirectMD vs. In-Person Care: Which Is Right for You?</h2>
            <p>For most adults with mild to moderate photoaging / anti-aging skin treatment without red-flag symptoms, a video visit is appropriate and convenient. Some situations require in-person evaluation. Use the comparison below to determine the right care pathway for you.</p>
            <div className="tdmd-ca-cond__dual">
              <div className="tdmd-ca-cond__dual-card tdmd-ca-cond__dual-card--good">
                <h3>&#10003; Use TeleDirectMD (telehealth) if</h3>
                <ul>
                  <li>Adult 18+ located in California at time of visit</li>
                  <li>Photoaging — wrinkles, fine lines, hyperpigmentation, rough texture from UV exposure</li>
                  <li>Seeking tretinoin (0.025%, 0.05%, or 0.1%) prescription or refill</li>
                  <li>Seeking azelaic acid or hydroquinone for hyperpigmentation or melasma</li>
                  <li>No suspicious pigmented lesions on video/photo review</li>
                  <li>Skincare regimen consultation and optimization</li>
                </ul>
              </div>
              <div className="tdmd-ca-cond__dual-card tdmd-ca-cond__dual-card--alert">
                <h3>&rarr; Use in-person care if</h3>
                <ul>
                  <li>New or changing pigmented lesion suspicious for melanoma (asymmetry, irregular border, multiple colors, diameter &gt;6mm, evolving — ABCDE criteria) — in-person dermatology evaluation urgently</li>
                  <li>Nodular or raised skin lesions — in-person evaluation</li>
                  <li>Painful or bleeding skin lesions — in-person dermatology</li>
                  <li>Rash with systemic symptoms (fever, joint pain) — possible connective tissue disease — in-person evaluation</li>
                  <li>Rapid onset of multiple seborrheic keratoses (Leser-Trélat sign) — possible paraneoplastic process — in-person evaluation</li>
                  <li>Severe allergic reaction to prescription topical (urticaria, angioedema) — ER</li>
                </ul>
                <ul>
                  <li><strong>ER / 911:</strong> Any life-threatening symptom — difficulty breathing, chest pain, severe confusion, signs of sepsis</li>
                  <li><strong>Urgent care:</strong> Moderate symptoms needing physical exam or testing TeleDirectMD cannot perform</li>
                  <li><strong>Primary care:</strong> Chronic management, recurrent episodes, specialist referral needs</li>
                  <li><strong><a href="https://www.211ca.org" rel="noopener" target="_blank">California 211</a>:</strong> Find local clinics and health resources</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 9) CTA STRIP ─────────────────────────────────────────────────── */}
        <section className="tdmd-section" aria-label="Book a visit">
          <div className="tdmd-container">
            <div className="tdmd-ca-cond__cta-strip" role="complementary">
              <div>
                <p>Book a same-day video visit — California adults, 18+</p>
                <small>Self pay $79 &middot; Aetna in-network &middot; UHC Commercial approved May 2026 &middot; No ER wait</small>
              </div>
              <a className="tdmd-ca-cond__cta-btn" href="/book-online" rel="noopener">Book Now &rarr;</a>
            </div>
          </div>
        </section>

        {/* ─── 10) FAQ (Premium Style A accordion) ─────────────────────────── */}
        <section className="tdmd-section tdmd-faq" id={`${pid}-faq`}>
          <div className="tdmd-container">
            <FaqAccordion
              sectionTitle="Frequently Asked Questions — Photoaging / Anti-Aging Skin Treatment in California"
              items={FAQ_ITEMS}
            />
            <div className="tdmd-bottom-cta" role="region" aria-label="Book a visit call to action">
              <div className="tdmd-bottom-cta-copy">
                <h3>Ready to see a California-licensed MD?</h3>
                <p>Book a same-day video visit. Self pay $79 &middot; Aetna in-network &middot; UHC Commercial approved.</p>
              </div>
              <div className="tdmd-bottom-cta-actions">
                <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit</a>
                <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">View All Adult Conditions</a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 11) RELATED CA CONDITIONS (siblings) ────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-related-ca`}>
          <div className="tdmd-container">
            <h2>Other California Conditions We Treat</h2>
            <p>These California condition pages can help when symptoms overlap or when you want to explore another California telehealth visit from TeleDirectMD.</p>
            <div className="tdmd-ca-cond__sibling-grid">
              <a key="hair-loss-treatment-online" className="tdmd-ca-uti__sibling" href="/ca/hair-loss-treatment-online/">
                  <span className="tdmd-ca-uti__sibling-label">Hair Loss Treatment in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Cosmetic scope overlap — patients often seek both hair and skin optimization together.</span>
                </a>
              <a key="eyelash-growth-treatment-online" className="tdmd-ca-uti__sibling" href="/ca/eyelash-growth-treatment-online/">
                  <span className="tdmd-ca-uti__sibling-label">Eyelash Growth Treatment in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Latisse (bimatoprost) is a physician-prescribed cosmetic treatment often paired with anti-aging.</span>
                </a>
              <a key="smoking-cessation-treatment-online" className="tdmd-ca-uti__sibling" href="/ca/smoking-cessation-treatment-online/">
                  <span className="tdmd-ca-uti__sibling-label">Smoking Cessation in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Smoking accelerates photoaging — cessation is the most impactful lifestyle anti-aging intervention.</span>
                </a>
              <a key="hypothyroidism-refills-online" className="tdmd-ca-uti__sibling" href="/ca/hypothyroidism-refills-online/">
                  <span className="tdmd-ca-uti__sibling-label">Hypothyroidism Refills in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Hypothyroidism causes skin dryness and premature aging — treat the underlying condition.</span>
                </a>
              <a key="melasma-treatment-online" className="tdmd-ca-uti__sibling" href="/ca/melasma-treatment-online/">
                  <span className="tdmd-ca-uti__sibling-label">Melasma Treatment in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Melasma and photoaging share UV trigger — tretinoin and hydroquinone used for both.</span>
                </a>
            </div>
          </div>
        </section>

        {/* ─── 12) PILLAR / SPOKE / CLUSTER LINKS ──────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-related`}>
          <div className="tdmd-container">
            <h2>Related Resources from TeleDirectMD</h2>
            <p>This page sits at the intersection of the <a href="/ca/">California state hub</a> and the <a href="/anti-aging-treatment-online/">Anti-Aging Treatment national condition page</a>. Use the links below to explore insurance details, book a visit, or review other conditions.</p>
            <div className="tdmd-ca-cond__related-links" aria-label="Related resources">
              <a href="/">Home</a>
              <a href="/ca/">California (state pillar)</a>
              <a href="/anti-aging-treatment-online/">National Anti-Aging Treatment page</a>
              <a href="/health-guides/">Anti-Aging Treatment health guides</a>
              <a href="/about/">About Dr. Bhavsar</a>
              <a href="/book-online">Book Online</a>
              <a href="/what-we-treat">What We Treat</a>
              <a href="/insurance">Insurance</a>
              <a href="/faq">FAQ</a>
            </div>
          </div>
        </section>

        {/* ─── 13) REFERENCES ───────────────────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-references`}>
          <div className="tdmd-container">
            <h2>References and Primary Sources</h2>
            <ol className="tdmd-ref-list">
              <li><a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=2290.5.&lawCode=BPC" rel="noopener" target="_blank">California Business and Professions Code Section 2290.5 — Telehealth Advancement Act</a></li>
              <li><a href="https://www.mbc.ca.gov/Licensees/Telehealth/" rel="noopener" target="_blank">Medical Board of California — Telehealth Resources</a></li>
              <li><a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=10123.85.&lawCode=INS" rel="noopener" target="_blank">California Insurance Code §10123.85 — Telehealth Parity (AB 744)</a></li>
              <li><a href="https://www.aad.org/public/everyday-care/skin-care-basics/anti-aging/retinoids" rel="noopener" target="_blank">AAD — Retinoids: The Gold Standard Anti-Aging Treatment</a></li>
              <li><a href="https://www.cdph.ca.gov/Programs/CCDPHP/DCDIC/CDCB/Pages/CancerPreventionPrograms.aspx" rel="noopener" target="_blank">CDPH — Skin Cancer Prevention</a></li>
              <li><a href="https://www.aad.org/public/everyday-care/sun-protection/sunscreen-patients/sunscreen-faqs" rel="noopener" target="_blank">AAD — Sunscreen FAQ</a></li>
              <li><a href="https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm?event=overview.process&ApplNo=018662" rel="noopener" target="_blank">FDA — Tretinoin (Retin-A) Drug Information</a></li>
              <li><a href="https://www.dhcs.ca.gov/provgovpart/Pages/Telehealth.aspx" rel="noopener" target="_blank">California DHCS — Telehealth FAQ</a></li>
            </ol>
          </div>
        </section>

        {/* ─── 14) DISCLAIMER ───────────────────────────────────────────────── */}
        <section className="tdmd-section tdmd-footnote" id={`${pid}-disclaimer`}>
          <div className="tdmd-container">
            <h2>Medical Disclaimer</h2>
            <p>This page is for informational purposes and is not a substitute for individualized medical advice. Use of TeleDirectMD does not establish a physician-patient relationship until a video visit is initiated and consent is documented under California B&amp;P &sect;2290.5. Treatment decisions are made by a California-licensed board-certified physician based on the clinical history at the time of the visit. If you have red-flag symptoms — severe pain, high fever, difficulty breathing, rapidly spreading infection, signs of sepsis, or worsening symptoms — seek urgent in-person care or call 911 immediately.</p>
            <p>TeleDirectMD does not prescribe controlled substances in any state. The price information on this page reflects GoodRx national coupon pricing retrieved May 2026; actual prescription costs at California pharmacies vary. Insurance status is current as of May 20, 2026; verify with your insurer before booking.</p>
          </div>
        </section>

        <WhatDoesThisCostBlock conditionSlug="anti-aging-treatment-online" conditionName="Photoaging / Anti-Aging Skin Treatment" stateName="California" />
        <CompareTeleDirectMDLinkRow conditionSlug="anti-aging-treatment-online" />
        <CommonSymptomsBlock conditionSlug="anti-aging-treatment-online" conditionName="Photoaging / Anti-Aging Skin Treatment" />
      </div>
    </>
  );
}
