/**
 * CaHairLossTreatmentOnline.js — production California × Hair Loss Treatment condition page (v3)
 *
 * Rendered by app/[slug]/[conditionSlug]/page.js when slug === 'ca' and
 * conditionSlug === 'hair-loss-treatment-online'.
 *
 * Matches v3 CA UTI template: inline opener paragraph (no CitableSummaryBlock),
 * hero, CA regulatory block (exact reuse), epidemiology block, clinical content,
 * vertical bar chart cost section, CA payor table, medications, dual-path block,
 * FAQ accordion (12 Q/A), JSON-LD schemas (MedicalWebPage + FAQPage + Physician
 * + HowTo + BreadcrumbList + SpeakableSpecification — NEVER QAPage).
 *
 * Authority: AAD
 * Guideline: AAD Clinical Practice Guidelines for Androgenetic Alopecia
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

const PAGE_URL = 'https://teledirectmd.com/ca/hair-loss-treatment-online/';
const PAGE_TITLE = 'Androgenetic Alopecia (Male/Female Pattern Hair Loss) Online in California | TeleDirectMD';
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
    id: 'ca-hair-loss-treatment-online-faq-0',
    question: 'Can I get hair loss treatment online in California?',
    answer: (
      <p>
        Yes. California Business and Professions Code Section 2290.5 permits licensed physicians to prescribe appropriate medications via synchronous video telehealth without a prior in-person visit. TeleDirectMD's California-licensed board-certified Family Medicine physician evaluates your hair loss pattern, scalp photos or live video assessment, symptom history, and medical history before prescribing a physician-confirmed treatment regimen for androgenetic alopecia. This includes established therapies and off-label medications the physician has cross-checked. Self pay is $79; Aetna is in-network effective April 30, 2026.
      </p>
    ),
  },
  {
    id: 'ca-hair-loss-treatment-online-faq-1',
    question: 'What hair loss medications does TeleDirectMD prescribe in California?',
    answer: (
      <p>
        TeleDirectMD prescribes finasteride 1 mg (FDA-approved for male AGA; off-label for post-menopausal women — physician-confirmed), dutasteride 0.5 mg (off-label for AGA — physician-confirmed superior DHT suppression), low-dose oral minoxidil (2.5–5 mg for men; 0.25–2.5 mg for women — off-label, physician-confirmed), and can recommend topical minoxidil 5% available over the counter. The physician assesses your specific pattern and medical history to determine the optimal regimen.
      </p>
    ),
  },
  {
    id: 'ca-hair-loss-treatment-online-faq-2',
    question: 'Is finasteride safe for hair loss treatment in California?',
    answer: (
      <p>
        Finasteride 1 mg is FDA-approved for male androgenetic alopecia and has been in clinical use since 1997. AAD evidence shows 80–90% of men experience stabilization and 64% show measurable regrowth at 2 years. Side effects including sexual dysfunction (decreased libido, erectile dysfunction) occur in fewer than 2% of users and typically resolve with discontinuation. The physician discusses post-finasteride syndrome — a rare but documented persistent side effect — at treatment initiation. Finasteride is absolutely contraindicated in pregnant women due to risk of hypospadias in male fetuses.
      </p>
    ),
  },
  {
    id: 'ca-hair-loss-treatment-online-faq-3',
    question: 'What is the difference between finasteride and dutasteride for hair loss?',
    answer: (
      <p>
        Finasteride inhibits 5-alpha-reductase type 2 only, reducing scalp DHT by approximately 70%. Dutasteride inhibits both type 1 and type 2 (complete DHT suppression, reducing scalp DHT by approximately 90%). A 2023 Korean randomized controlled trial showed dutasteride 0.5 mg/day superior to finasteride 1 mg/day for hair density at 12 months. Dutasteride has a much longer half-life (approximately 5 weeks) — DHT suppression persists for weeks after stopping. Both are teratogenic — contraindicated in women who could become pregnant.
      </p>
    ),
  },
  {
    id: 'ca-hair-loss-treatment-online-faq-4',
    question: 'Can low-dose oral minoxidil treat hair loss?',
    answer: (
      <p>
        Low-dose oral minoxidil (2.5–5 mg for men; 0.25–2.5 mg for women) is an increasingly recognized off-label treatment for androgenetic alopecia, supported by multiple randomized controlled trials published in JAAD 2021–2023. At these low doses — far below the antihypertensive dose (10–40 mg/day) — oral minoxidil improves hair density with better adherence than topical application. The physician monitors blood pressure at initiation and screens for cardiac contraindications. Hypertrichosis (unwanted facial and body hair) is the most common side effect, dose-dependent and more common in women.
      </p>
    ),
  },
  {
    id: 'ca-hair-loss-treatment-online-faq-5',
    question: 'How is hair loss assessed during a video visit in California?',
    answer: (
      <p>
        The physician assesses hair loss pattern during the video visit using: live scalp video assessment, review of scalp photos taken in natural light (front, vertex, and temporal views requested before the visit), description of hair loss duration and progression rate, family history, medication list (drug-induced alopecia), lab review (TSH, ferritin, CBC if available), and menstrual/hormonal history for women. The physician classifies the pattern as Norwood-Hamilton (male) or Ludwig (female) scale and determines whether treatment for androgenetic alopecia is appropriate or dermatology referral is needed.
      </p>
    ),
  },
  {
    id: 'ca-hair-loss-treatment-online-faq-6',
    question: 'What hair loss conditions require in-person dermatologist care?',
    answer: (
      <p>
        Hair loss conditions requiring dermatologist evaluation: scarring alopecias (lichen planopilaris, frontal fibrosing alopecia, discoid lupus — present with scalp inflammation and permanent follicle destruction), alopecia areata (patchy autoimmune hair loss — may respond to intralesional steroid injections or systemic immunotherapy), trichotillomania, secondary alopecia from systemic disease (lupus, iron deficiency anemia, thyroid disease — treat the underlying cause first), and sudden diffuse hair loss with systemic symptoms. TeleDirectMD will facilitate a referral when these conditions are suspected.
      </p>
    ),
  },
  {
    id: 'ca-hair-loss-treatment-online-faq-7',
    question: 'Can women get hair loss treatment from TeleDirectMD in California?',
    answer: (
      <p>
        Yes. Female-pattern hair loss (FPHL) follows the Ludwig scale and affects approximately 25% of women by age 50. TeleDirectMD prescribes topical minoxidil 5% (off-label — physician-confirmed; FDA-approved is 2% for women), low-dose oral minoxidil (0.25–2.5 mg — off-label, physician-confirmed), finasteride 1 mg off-label for post-menopausal women (physician-confirmed; contraindicated in premenopausal women without reliable contraception), and may add spironolactone as an anti-androgen adjunct. The physician screens for hormonal causes (PCOS, post-menopausal androgen excess) before prescribing.
      </p>
    ),
  },
  {
    id: 'ca-hair-loss-treatment-online-faq-8',
    question: 'How much do hair loss medications cost in California with GoodRx?',
    answer: (
      <p>
        Generic hair loss medication costs with GoodRx coupons at California pharmacies (May 2026): generic finasteride 1 mg per month approximately $20–$40; generic dutasteride 0.5 mg per month approximately $25–$50; generic oral minoxidil 2.5 mg per month approximately $15–$40. Topical minoxidil 5% foam or solution (Rogaine/generic) is available over the counter for approximately $25–$40 per month without a prescription. Prescription costs are separate from the $79 TeleDirectMD visit fee.
      </p>
    ),
  },
  {
    id: 'ca-hair-loss-treatment-online-faq-9',
    question: 'Does California telehealth law allow hair loss prescriptions without an in-person visit?',
    answer: (
      <p>
        Yes. California Business and Professions Code Section 2290.5 does not require a prior in-person visit for telehealth prescribing of non-controlled medications. Finasteride, dutasteride, and oral minoxidil are not controlled substances and can be prescribed via a California video visit. The Medical Board of California holds telehealth physicians to the same standard of care as in-person physicians — which TeleDirectMD satisfies through thorough pattern assessment, contraindication screening, and lab review where indicated.
      </p>
    ),
  },
  {
    id: 'ca-hair-loss-treatment-online-faq-10',
    question: 'What should I expect at my first hair loss consultation with TeleDirectMD?',
    answer: (
      <p>
        At your first visit, the physician reviews: your hair loss pattern duration and rate of progression; family history of hair loss; current medications (particularly anabolic steroids, spironolactone, chemotherapy, thyroid medications, blood thinners — which can affect hair); recent major illness, surgery, or childbirth (telogen effluvium causes); nutritional habits; for women, menstrual cycle regularity and signs of hormonal imbalance. If recent TSH and ferritin labs are available, the physician reviews them. Based on this, the physician discusses the most appropriate treatment options and prescribes accordingly.
      </p>
    ),
  },
  {
    id: 'ca-hair-loss-treatment-online-faq-11',
    question: 'When will I see results from hair loss treatment?',
    answer: (
      <p>
        Timeline for hair loss treatment response: topical minoxidil — initial shedding common in first 2–4 weeks (normal), visible stabilization at 3–4 months, measurable regrowth at 6–12 months; finasteride — stabilization typically seen at 3–6 months, maximum regrowth at 12–24 months; oral minoxidil — similar to topical, with regrowth visible at 6–12 months. Treatment must be continued long-term — hair loss returns within months of stopping any treatment. Annual review visits confirm response and allow treatment adjustments. The $79 TeleDirectMD visit covers annual follow-up reviews.
      </p>
    ),
  },
];

const SCHEMAS = [{"@context": "https://schema.org", "@type": "MedicalWebPage", "name": "Androgenetic Alopecia (Male/Female Pattern Hair Loss) Online in California | TeleDirectMD", "url": "https://teledirectmd.com/ca/hair-loss-treatment-online/", "description": "Hair loss treatment online for California adults. Board-certified Family Medicine MD. AAD guideline-based. Self pay $79. Aetna in-network. Finasteride, dutasteride, oral minoxidil. Same-day video visits.", "datePublished": "2026-05-20", "dateModified": "2026-05-20", "inLanguage": "en-US", "about": {"@type": "MedicalCondition", "name": "Hair Loss Treatment", "code": {"@type": "MedicalCode", "code": "L64.9", "codingSystem": "ICD-10-CM"}}, "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient", "geographicArea": {"@type": "AdministrativeArea", "name": "California"}}, "reviewedBy": {"@type": "Physician", "@id": "https://teledirectmd.com/about/#physician-parth-bhavsar", "name": "Parth Bhavsar, MD", "identifier": {"@type": "PropertyValue", "propertyID": "NPI", "value": "1104323203"}, "medicalSpecialty": "Family Medicine", "hasCredential": [{"@type": "EducationalOccupationalCredential", "credentialCategory": "degree", "name": "Doctor of Medicine (MD)"}, {"@type": "EducationalOccupationalCredential", "credentialCategory": "certification", "name": "Board Certification \u2014 American Board of Family Medicine"}], "licensedIn": "California", "worksFor": {"@type": "MedicalOrganization", "name": "TeleDirectMD", "url": "https://teledirectmd.com"}, "sameAs": ["https://npiregistry.cms.hhs.gov/provider-view/1104323203", "https://teledirectmd.com/about/"]}, "speakable": {"@type": "SpeakableSpecification", "cssSelector": ["#ca-hair-loss-treatment-online-opening", "#ca-hair-loss-treatment-online-opening p", ".tdmd-ca-hair-loss-treatment-online__byline", "#ca-hair-loss-treatment-online-faq"]}}, {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Can I get hair loss treatment online in California?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. California Business and Professions Code Section 2290.5 permits licensed physicians to prescribe appropriate medications via synchronous video telehealth without a prior in-person visit. TeleDirectMD's California-licensed board-certified Family Medicine physician evaluates your hair loss pattern, scalp photos or live video assessment, symptom history, and medical history before prescribing a physician-confirmed treatment regimen for androgenetic alopecia. This includes established therapies and off-label medications the physician has cross-checked. Self pay is $79; Aetna is in-network effective April 30, 2026."}}, {"@type": "Question", "name": "What hair loss medications does TeleDirectMD prescribe in California?", "acceptedAnswer": {"@type": "Answer", "text": "TeleDirectMD prescribes finasteride 1 mg (FDA-approved for male AGA; off-label for post-menopausal women \u2014 physician-confirmed), dutasteride 0.5 mg (off-label for AGA \u2014 physician-confirmed superior DHT suppression), low-dose oral minoxidil (2.5\u20135 mg for men; 0.25\u20132.5 mg for women \u2014 off-label, physician-confirmed), and can recommend topical minoxidil 5% available over the counter. The physician assesses your specific pattern and medical history to determine the optimal regimen."}}, {"@type": "Question", "name": "Is finasteride safe for hair loss treatment in California?", "acceptedAnswer": {"@type": "Answer", "text": "Finasteride 1 mg is FDA-approved for male androgenetic alopecia and has been in clinical use since 1997. AAD evidence shows 80\u201390% of men experience stabilization and 64% show measurable regrowth at 2 years. Side effects including sexual dysfunction (decreased libido, erectile dysfunction) occur in fewer than 2% of users and typically resolve with discontinuation. The physician discusses post-finasteride syndrome \u2014 a rare but documented persistent side effect \u2014 at treatment initiation. Finasteride is absolutely contraindicated in pregnant women due to risk of hypospadias in male fetuses."}}, {"@type": "Question", "name": "What is the difference between finasteride and dutasteride for hair loss?", "acceptedAnswer": {"@type": "Answer", "text": "Finasteride inhibits 5-alpha-reductase type 2 only, reducing scalp DHT by approximately 70%. Dutasteride inhibits both type 1 and type 2 (complete DHT suppression, reducing scalp DHT by approximately 90%). A 2023 Korean randomized controlled trial showed dutasteride 0.5 mg/day superior to finasteride 1 mg/day for hair density at 12 months. Dutasteride has a much longer half-life (approximately 5 weeks) \u2014 DHT suppression persists for weeks after stopping. Both are teratogenic \u2014 contraindicated in women who could become pregnant."}}, {"@type": "Question", "name": "Can low-dose oral minoxidil treat hair loss?", "acceptedAnswer": {"@type": "Answer", "text": "Low-dose oral minoxidil (2.5\u20135 mg for men; 0.25\u20132.5 mg for women) is an increasingly recognized off-label treatment for androgenetic alopecia, supported by multiple randomized controlled trials published in JAAD 2021\u20132023. At these low doses \u2014 far below the antihypertensive dose (10\u201340 mg/day) \u2014 oral minoxidil improves hair density with better adherence than topical application. The physician monitors blood pressure at initiation and screens for cardiac contraindications. Hypertrichosis (unwanted facial and body hair) is the most common side effect, dose-dependent and more common in women."}}, {"@type": "Question", "name": "How is hair loss assessed during a video visit in California?", "acceptedAnswer": {"@type": "Answer", "text": "The physician assesses hair loss pattern during the video visit using: live scalp video assessment, review of scalp photos taken in natural light (front, vertex, and temporal views requested before the visit), description of hair loss duration and progression rate, family history, medication list (drug-induced alopecia), lab review (TSH, ferritin, CBC if available), and menstrual/hormonal history for women. The physician classifies the pattern as Norwood-Hamilton (male) or Ludwig (female) scale and determines whether treatment for androgenetic alopecia is appropriate or dermatology referral is needed."}}, {"@type": "Question", "name": "What hair loss conditions require in-person dermatologist care?", "acceptedAnswer": {"@type": "Answer", "text": "Hair loss conditions requiring dermatologist evaluation: scarring alopecias (lichen planopilaris, frontal fibrosing alopecia, discoid lupus \u2014 present with scalp inflammation and permanent follicle destruction), alopecia areata (patchy autoimmune hair loss \u2014 may respond to intralesional steroid injections or systemic immunotherapy), trichotillomania, secondary alopecia from systemic disease (lupus, iron deficiency anemia, thyroid disease \u2014 treat the underlying cause first), and sudden diffuse hair loss with systemic symptoms. TeleDirectMD will facilitate a referral when these conditions are suspected."}}, {"@type": "Question", "name": "Can women get hair loss treatment from TeleDirectMD in California?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Female-pattern hair loss (FPHL) follows the Ludwig scale and affects approximately 25% of women by age 50. TeleDirectMD prescribes topical minoxidil 5% (off-label \u2014 physician-confirmed; FDA-approved is 2% for women), low-dose oral minoxidil (0.25\u20132.5 mg \u2014 off-label, physician-confirmed), finasteride 1 mg off-label for post-menopausal women (physician-confirmed; contraindicated in premenopausal women without reliable contraception), and may add spironolactone as an anti-androgen adjunct. The physician screens for hormonal causes (PCOS, post-menopausal androgen excess) before prescribing."}}, {"@type": "Question", "name": "How much do hair loss medications cost in California with GoodRx?", "acceptedAnswer": {"@type": "Answer", "text": "Generic hair loss medication costs with GoodRx coupons at California pharmacies (May 2026): generic finasteride 1 mg per month approximately $20\u2013$40; generic dutasteride 0.5 mg per month approximately $25\u2013$50; generic oral minoxidil 2.5 mg per month approximately $15\u2013$40. Topical minoxidil 5% foam or solution (Rogaine/generic) is available over the counter for approximately $25\u2013$40 per month without a prescription. Prescription costs are separate from the $79 TeleDirectMD visit fee."}}, {"@type": "Question", "name": "Does California telehealth law allow hair loss prescriptions without an in-person visit?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. California Business and Professions Code Section 2290.5 does not require a prior in-person visit for telehealth prescribing of non-controlled medications. Finasteride, dutasteride, and oral minoxidil are not controlled substances and can be prescribed via a California video visit. The Medical Board of California holds telehealth physicians to the same standard of care as in-person physicians \u2014 which TeleDirectMD satisfies through thorough pattern assessment, contraindication screening, and lab review where indicated."}}, {"@type": "Question", "name": "What should I expect at my first hair loss consultation with TeleDirectMD?", "acceptedAnswer": {"@type": "Answer", "text": "At your first visit, the physician reviews: your hair loss pattern duration and rate of progression; family history of hair loss; current medications (particularly anabolic steroids, spironolactone, chemotherapy, thyroid medications, blood thinners \u2014 which can affect hair); recent major illness, surgery, or childbirth (telogen effluvium causes); nutritional habits; for women, menstrual cycle regularity and signs of hormonal imbalance. If recent TSH and ferritin labs are available, the physician reviews them. Based on this, the physician discusses the most appropriate treatment options and prescribes accordingly."}}, {"@type": "Question", "name": "When will I see results from hair loss treatment?", "acceptedAnswer": {"@type": "Answer", "text": "Timeline for hair loss treatment response: topical minoxidil \u2014 initial shedding common in first 2\u20134 weeks (normal), visible stabilization at 3\u20134 months, measurable regrowth at 6\u201312 months; finasteride \u2014 stabilization typically seen at 3\u20136 months, maximum regrowth at 12\u201324 months; oral minoxidil \u2014 similar to topical, with regrowth visible at 6\u201312 months. Treatment must be continued long-term \u2014 hair loss returns within months of stopping any treatment. Annual review visits confirm response and allow treatment adjustments. The $79 TeleDirectMD visit covers annual follow-up reviews."}}]}, {"@context": "https://schema.org", "@type": "HowTo", "name": "How to Get Androgenetic Alopecia (Male/Female Pattern Hair Loss) Online in California", "description": "Three steps to receive androgenetic alopecia (male/female pattern hair loss) evaluation and, if appropriate, a prescription from a California-licensed board-certified physician.", "totalTime": "PT30M", "estimatedCost": {"@type": "MonetaryAmount", "currency": "USD", "value": "79"}, "step": [{"@type": "HowToStep", "position": 1, "name": "Book your video visit", "text": "Visit teledirectmd.com and select California Hair Loss Treatment treatment. No referral needed. Self pay $79. Many visits available same day.", "url": "https://teledirectmd.com/book-online"}, {"@type": "HowToStep", "position": 2, "name": "See a California-licensed MD by secure video", "text": "Connect with a board-certified Family Medicine physician licensed in California. The physician reviews your symptoms, history, and red-flag screening. Consent per CA B&P Section 2290.5 confirmed.", "url": "https://teledirectmd.com/ca/hair-loss-treatment-online/"}, {"@type": "HowToStep", "position": 3, "name": "Receive your treatment plan and e-prescription", "text": "If medication is appropriate, a California-compliant e-prescription is sent to your chosen pharmacy during or after the visit.", "url": "https://teledirectmd.com/ca/hair-loss-treatment-online/"}]}, {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "TeleDirectMD", "item": "https://teledirectmd.com"}, {"@type": "ListItem", "position": 2, "name": "California", "item": "https://teledirectmd.com/ca/"}, {"@type": "ListItem", "position": 3, "name": "Androgenetic Alopecia (Male/Female Pattern Hair Loss) Online in California", "item": "https://teledirectmd.com/ca/hair-loss-treatment-online/"}]}];

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

export default function CaHairLossTreatmentOnline() {
  const pid = 'ca-hair-loss-treatment-online';

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
            <span aria-current="page">Androgenetic Alopecia (Male/Female Pattern Hair Loss) Online</span>
          </div>
        </nav>

        {/* ─── 1) HERO ────────────────────────────────────────────────────── */}
        <section className="tdmd-hero" id={`${pid}-hero`}>
          <div className="tdmd-container">
            <div className="tdmd-hero-grid">
              <div className="tdmd-hero-copy">
                <h1 data-speakable="true">Hair Loss Treatment Online in California</h1>
                <p className="tdmd-hero-sub" data-speakable="true">
                  California adult care by secure video visit. Self pay $79 · Aetna in-network · UHC Commercial approved · AAD guideline-based androgenetic alopecia treatment · CA B&P §2290.5 compliant.
                </p>
                <p>
                  Hair Loss Treatment is a condition commonly evaluated and, when appropriate, treated via telehealth. TeleDirectMD uses a safety-first approach, screening for red-flag symptoms that require in-person or emergency care before determining whether treatment by video visit is appropriate. This page is for adults located in California, including Los Angeles, San Diego, San Jose, San Francisco, Fresno, Sacramento, Long Beach, Oakland, Bakersfield, Anaheim, and surrounding areas.
                </p>

                {/* v3: Inline opener paragraph — replaces CitableSummaryBlock */}
                <div className="tdmd-condition-opener" id={`${pid}-opening`}>
                  <p>
                    <strong>Can I get androgenetic alopecia (male/female pattern hair loss) online in California?</strong> Yes. <a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=2290.5.&lawCode=BPC" rel="noopener" target="_blank">California Business and Professions Code Section 2290.5</a> — the Telehealth Advancement Act — permits licensed physicians to deliver care via synchronous video telehealth without a prior in-person visit. TeleDirectMD physicians are licensed in California and are held to the same standard of care as in-person physicians by the <a href="https://www.mbc.ca.gov/Resources/Medical-Resources/telehealth.aspx" rel="noopener" target="_blank">Medical Board of California</a>. Adults 18+ located in California can book a same-day video visit. Self pay is $79. <a href="/insurance/">Aetna is in-network</a> as of April 30, 2026; UnitedHealthcare Commercial approved May 29, 2026.
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

                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> L64.9 (Androgenic alopecia, unspecified); L65.9 (Nonscarring hair loss, unspecified) — final coding per clinical details</p>
              </div>

              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>Online MD-Only Hair Loss Treatment Care in California</h2>
                  <ul>
                    <li>Fast evaluation for androgenetic alopecia (male/female pattern hair loss) symptoms</li>
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
            <h2>Androgenetic Alopecia (Male/Female Pattern Hair Loss) Telehealth Eligibility Checklist for California</h2>
            <p><strong>You are likely eligible for a TeleDirectMD video visit if ALL of these apply to you:</strong></p>
            <div className="tdmd-ca-cond__dual">
              <div className="tdmd-ca-cond__dual-card tdmd-ca-cond__dual-card--good">
                <h3>&#10003; You Are Eligible If</h3>
                <ul>
                  <li>Adult 18+ located in California at time of visit</li>
                  <li>Androgenetic alopecia (male-pattern or female-pattern hair loss) — confirmed by pattern history and photo assessment</li>
                  <li>Seeking finasteride, dutasteride, or low-dose oral minoxidil prescription or refill</li>
                  <li>No scalp inflammation, pain, or scarring on visual assessment</li>
                  <li>No signs of secondary cause (TSH, ferritin labs available or obtainable)</li>
                  <li>Established patient seeking dose adjustment or monitoring visit</li>
                </ul>
              </div>
              <div className="tdmd-ca-cond__dual-card tdmd-ca-cond__dual-card--alert">
                <h3>&#10007; Seek In-Person or Emergency Care If</h3>
                <ul>
                  <li>Scarring alopecia (lichen planopilaris, frontal fibrosing alopecia, discoid lupus) — scalp inflammation, permanent follicle destruction — dermatologist evaluation required</li>
                  <li>Alopecia areata — patchy autoimmune hair loss — may require intralesional steroid injections or systemic immunotherapy — dermatologist evaluation</li>
                  <li>Sudden diffuse hair loss with systemic symptoms — possible thyroid disease, iron deficiency, or autoimmune disorder — lab workup required in person</li>
                  <li>Trichotillomania (compulsive hair pulling) — psychiatric and dermatologic co-management required</li>
                  <li>Scalp inflammation, pain, blistering, or scarring — in-person dermatology evaluation</li>
                  <li>Secondary alopecia from systemic disease (lupus, anemia, thyroid) — treat underlying cause before cosmetic treatment</li>
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
            <h2>California Telehealth Law and Your Androgenetic Alopecia (Male/Female Pattern Hair Loss) Visit</h2>

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

            <h3>Are androgenetic alopecia (male/female pattern hair loss) medications controlled substances under California law?</h3>
            <p>
              Finasteride, dutasteride, and oral minoxidil for androgenetic alopecia are not controlled substances. They can be prescribed via California telehealth and transmitted electronically to any California pharmacy under Assembly Bill 2789. California requires all prescriptions to be issued electronically under Assembly Bill 2789 (effective January 1, 2022), per the <a href="https://www.mbc.ca.gov/News/" rel="noopener" target="_blank">Medical Board of California</a>. TeleDirectMD does not prescribe controlled substances in any state.
            </p>
          </div>
        </section>

        {/* ─── 4) HOW IT WORKS ─────────────────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-how-it-works`} itemScope itemType="https://schema.org/HowTo">
          <div className="tdmd-container">
            <h2 itemProp="name">How Online Androgenetic Alopecia (Male/Female Pattern Hair Loss) Works in California</h2>
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
            <h2>How Common Is Hair Loss Treatment in California?</h2>
            <p>
              Androgenetic alopecia (AGA) affects approximately 50% of men and 25% of women by age 50, per AAD epidemiological data. In California's diverse population, AGA prevalence varies by ethnicity — higher in white and Hispanic men, lower in Asian and Black men. California's cosmetically conscious culture in major metro areas (Los Angeles, San Francisco, San Diego) drives significant demand for physician-supervised hair loss treatment. Among California adults aged 30–60, hair loss is one of the top dermatology-related telehealth requests. — <a href="https://www.aad.org/public/diseases/hair-loss/types/alopecia" rel="noopener" target="_blank">AAD — Hair Loss: Types, Causes, and Treatment Overview</a>.
            </p>
            <p>
              Clinical guidance for androgenetic alopecia (male/female pattern hair loss) is provided by <a href="https://www.aad.org/public/diseases/hair-loss/types/alopecia" rel="noopener" target="_blank">AAD</a> through the AAD Clinical Practice Guidelines for Androgenetic Alopecia. TeleDirectMD follows these guidelines on every patient visit.
            </p>
            <h3>What causes hair loss treatment and who is most at risk in California?</h3>
            <p>
              Hair Loss Treatment affects California adults across all demographics, though certain populations face higher risk based on the specific condition. The physician reviews your individual risk factors at each visit. Telehealth is appropriate for adults 18 and older with mild to moderate presentations who do not have red-flag symptoms requiring immediate in-person evaluation.
            </p>
          </div>
        </section>

        {/* ─── 6) COST & INSURANCE ─────────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-cost`}>
          <div className="tdmd-container">
            <h2>Androgenetic Alopecia (Male/Female Pattern Hair Loss) Cost &amp; Insurance in California</h2>
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

              <div className="tdmd-price-chart" role="group" aria-label="Typical Hair Loss Treatment cost comparison">
                <h3>Typical Hair Loss Treatment Visit Cost in California</h3>
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
            <h2>Androgenetic Alopecia (Male/Female Pattern Hair Loss) Medication Options and Costs in California</h2>
            <p>
              Medications for androgenetic alopecia (male/female pattern hair loss) are selected based on current guidelines from <a href="https://www.aad.org/public/diseases/hair-loss/types/alopecia" rel="noopener" target="_blank">AAD</a>, patient history, allergies, and relevant contraindications assessed at the visit. GoodRx-verified pricing is shown below.
            </p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Androgenetic Alopecia (Male/Female Pattern Hair Loss) medication options and GoodRx prices">
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
                    <td><strong>Finasteride 1 mg oral (generic Propecia)</strong> · First-line</td>
                    <td>1 mg orally once daily; results visible at 3–6 months; continue long-term</td>
                    <td><a href="https://www.goodrx.com/finasteride" target="_blank" rel="noopener">~$20–$40/month GoodRx (generic)</a></td>
                    <td>FDA-approved for male AGA. Off-label for post-menopausal women (physician-confirmed). Contraindicated in pregnancy. PSA levels reduced ~50% — alert urologist if PSA screening done. Discuss post-finasteride syndrome risk at initiation.</td>
                  </tr>
                  <tr className="tdmd-ca-uti__med-firstline">
                    <td><strong>Dutasteride 0.5 mg oral (generic Avodart) — off-label for AGA</strong> · First-line</td>
                    <td>0.5 mg orally once daily</td>
                    <td><a href="https://www.goodrx.com/dutasteride" target="_blank" rel="noopener">~$25–$50/month GoodRx (generic)</a></td>
                    <td>Off-label for AGA — physician-confirmed. Superior DHT suppression vs. finasteride (inhibits both type 1 and 2). Longer half-life (~5 weeks). Teratogenic — not for women who could become pregnant.</td>
                  </tr>
                  <tr className="tdmd-ca-uti__med-firstline">
                    <td><strong>Oral minoxidil 2.5–5 mg (men) / 0.25–2.5 mg (women) — off-label for AGA</strong> · First-line</td>
                    <td>Men: 2.5–5 mg once daily; Women: 0.25–2.5 mg once daily</td>
                    <td><a href="https://www.goodrx.com/minoxidil" target="_blank" rel="noopener">~$15–$40/month GoodRx (generic)</a></td>
                    <td>Off-label at hair loss doses — physician-confirmed. Monitor BP at initiation. Hypertrichosis (unwanted body/facial hair) is dose-dependent side effect — most common in women. Avoid in cardiac disease.</td>
                  </tr>
                  <tr className="tdmd-ca-uti__med-firstline">
                    <td><strong>Minoxidil topical 5% foam/solution (generic Rogaine)</strong> · First-line</td>
                    <td>5% — 1 mL or half-capful to dry scalp twice daily</td>
                    <td><a href="https://www.goodrx.com/minoxidil-topical" target="_blank" rel="noopener">~$25–$40/month OTC (generic)</a></td>
                    <td>FDA-approved for male (5%) and female (2%; 5% off-label, physician-confirmed) AGA. Available OTC. Allow to dry before sleeping. Physician prescribes for insurance coverage if needed.</td>
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
            <p>For most adults with mild to moderate androgenetic alopecia (male/female pattern hair loss) without red-flag symptoms, a video visit is appropriate and convenient. Some situations require in-person evaluation. Use the comparison below to determine the right care pathway for you.</p>
            <div className="tdmd-ca-cond__dual">
              <div className="tdmd-ca-cond__dual-card tdmd-ca-cond__dual-card--good">
                <h3>&#10003; Use TeleDirectMD (telehealth) if</h3>
                <ul>
                  <li>Adult 18+ located in California at time of visit</li>
                  <li>Androgenetic alopecia (male-pattern or female-pattern hair loss) — confirmed by pattern history and photo assessment</li>
                  <li>Seeking finasteride, dutasteride, or low-dose oral minoxidil prescription or refill</li>
                  <li>No scalp inflammation, pain, or scarring on visual assessment</li>
                  <li>No signs of secondary cause (TSH, ferritin labs available or obtainable)</li>
                  <li>Established patient seeking dose adjustment or monitoring visit</li>
                </ul>
              </div>
              <div className="tdmd-ca-cond__dual-card tdmd-ca-cond__dual-card--alert">
                <h3>&rarr; Use in-person care if</h3>
                <ul>
                  <li>Scarring alopecia (lichen planopilaris, frontal fibrosing alopecia, discoid lupus) — scalp inflammation, permanent follicle destruction — dermatologist evaluation required</li>
                  <li>Alopecia areata — patchy autoimmune hair loss — may require intralesional steroid injections or systemic immunotherapy — dermatologist evaluation</li>
                  <li>Sudden diffuse hair loss with systemic symptoms — possible thyroid disease, iron deficiency, or autoimmune disorder — lab workup required in person</li>
                  <li>Trichotillomania (compulsive hair pulling) — psychiatric and dermatologic co-management required</li>
                  <li>Scalp inflammation, pain, blistering, or scarring — in-person dermatology evaluation</li>
                  <li>Secondary alopecia from systemic disease (lupus, anemia, thyroid) — treat underlying cause before cosmetic treatment</li>
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
              sectionTitle="Frequently Asked Questions — Androgenetic Alopecia (Male/Female Pattern Hair Loss) in California"
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
              <a key="hypothyroidism-refills-online" className="tdmd-ca-uti__sibling" href="/ca/hypothyroidism-refills-online/">
                  <span className="tdmd-ca-uti__sibling-label">Hypothyroidism Refills in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Hypothyroidism is a common reversible cause of diffuse hair loss — TSH screening first.</span>
                </a>
              <a key="anti-aging-treatment-online" className="tdmd-ca-uti__sibling" href="/ca/anti-aging-treatment-online/">
                  <span className="tdmd-ca-uti__sibling-label">Anti-Aging Treatment in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Cosmetic scope overlap — patients often seek both hair and skin treatments.</span>
                </a>
              <a key="eyelash-growth-treatment-online" className="tdmd-ca-uti__sibling" href="/ca/eyelash-growth-treatment-online/">
                  <span className="tdmd-ca-uti__sibling-label">Eyelash Growth Treatment in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Prostaglandin analog mechanism shared between bimatoprost and hair growth research.</span>
                </a>
              <a key="hypertension-refills-online" className="tdmd-ca-uti__sibling" href="/ca/hypertension-refills-online/">
                  <span className="tdmd-ca-uti__sibling-label">Hypertension Refills in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Oral minoxidil was originally an antihypertensive — BP monitoring required.</span>
                </a>
              <a key="seasonal-allergies-treatment-online" className="tdmd-ca-uti__sibling" href="/ca/seasonal-allergies-treatment-online/">
                  <span className="tdmd-ca-uti__sibling-label">Seasonal Allergies in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Antihistamines sometimes used off-label for telogen effluvium — patient inquiry context.</span>
                </a>
            </div>
          </div>
        </section>

        {/* ─── 12) PILLAR / SPOKE / CLUSTER LINKS ──────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-related`}>
          <div className="tdmd-container">
            <h2>Related Resources from TeleDirectMD</h2>
            <p>This page sits at the intersection of the <a href="/ca/">California state hub</a> and the <a href="/hair-loss-treatment-online/">Hair Loss Treatment national condition page</a>. Use the links below to explore insurance details, book a visit, or review other conditions.</p>
            <div className="tdmd-ca-cond__related-links" aria-label="Related resources">
              <a href="/">Home</a>
              <a href="/ca/">California (state pillar)</a>
              <a href="/hair-loss-treatment-online/">National Hair Loss Treatment page</a>
              <a href="/health-guides/">Hair Loss Treatment health guides</a>
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
              <li><a href="https://www.aad.org/public/diseases/hair-loss/types/alopecia" rel="noopener" target="_blank">AAD — Hair Loss: Types, Causes, and Treatment Overview</a></li>
              <li><a href="https://www.jaad.org/article/S0190-9622(21)00561-3/fulltext" rel="noopener" target="_blank">JAAD — Low-Dose Oral Minoxidil as Treatment for Androgenetic Alopecia</a></li>
              <li><a href="https://www.aad.org/public/diseases/hair-loss/treatment/finasteride" rel="noopener" target="_blank">AAD — Finasteride for Hair Loss</a></li>
              <li><a href="https://www.dhcs.ca.gov/provgovpart/Pages/Telehealth.aspx" rel="noopener" target="_blank">California DHCS — Telehealth FAQ</a></li>
              <li><a href="https://www.mbc.ca.gov/Licensees/ePrescribing.aspx" rel="noopener" target="_blank">Medical Board of California — AB 2789 Electronic Prescribing</a></li>
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

        <WhatDoesThisCostBlock conditionSlug="hair-loss-treatment-online" conditionName="Androgenetic Alopecia (Male/Female Pattern Hair Loss)" stateName="California" />
        <CompareTeleDirectMDLinkRow conditionSlug="hair-loss-treatment-online" />
        <CommonSymptomsBlock conditionSlug="hair-loss-treatment-online" conditionName="Androgenetic Alopecia (Male/Female Pattern Hair Loss)" />
      </div>
    </>
  );
}
