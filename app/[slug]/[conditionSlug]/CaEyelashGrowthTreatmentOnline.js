/**
 * CaEyelashGrowthTreatmentOnline.js — production California × Eyelash Growth Treatment condition page (v3)
 *
 * Rendered by app/[slug]/[conditionSlug]/page.js when slug === 'ca' and
 * conditionSlug === 'eyelash-growth-treatment-online'.
 *
 * Matches v3 CA UTI template: inline opener paragraph (no CitableSummaryBlock),
 * hero, CA regulatory block (exact reuse), epidemiology block, clinical content,
 * vertical bar chart cost section, CA payor table, medications, dual-path block,
 * FAQ accordion (12 Q/A), JSON-LD schemas (MedicalWebPage + FAQPage + Physician
 * + HowTo + BreadcrumbList + SpeakableSpecification — NEVER QAPage).
 *
 * Authority: AAD
 * Guideline: FDA-Approved Prescribing Information for Bimatoprost 0.03% (Latisse) + AAD Eyelash Alopecia Guidelines
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

const PAGE_URL = 'https://teledirectmd.com/ca/eyelash-growth-treatment-online/';
const PAGE_TITLE = 'Eyelash Hypotrichosis — Bimatoprost (Latisse) Treatment Online in California | TeleDirectMD';
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
    id: 'ca-eyelash-growth-treatment-online-faq-0',
    question: 'Can I get Latisse (bimatoprost) for eyelash growth online in California?',
    answer: (
      <p>
        Yes. California Business and Professions Code Section 2290.5 permits licensed physicians to prescribe appropriate medications via synchronous video telehealth without a prior in-person visit. TeleDirectMD's California-licensed board-certified Family Medicine physician evaluates your eyelash growth concerns, screens for contraindications including glaucoma and intraocular pressure medications, and prescribes Latisse (bimatoprost 0.03%) for eligible patients. Self pay is $79; Aetna is in-network effective April 30, 2026.
      </p>
    ),
  },
  {
    id: 'ca-eyelash-growth-treatment-online-faq-1',
    question: 'What is Latisse and how does it work for eyelash growth?',
    answer: (
      <p>
        Latisse (bimatoprost ophthalmic solution 0.03%) is the only FDA-approved prescription medication for hypotrichosis of the eyelashes — insufficient eyelash growth. It is a prostaglandin analog that extends the anagen (growth) phase of the eyelash hair cycle and increases the number of hairs in the growth phase. Applied nightly to the upper eyelid margin, Latisse produces measurable increases in eyelash length, fullness, and darkness by 16 weeks in the FDA approval trial. Results are reversible — eyelashes return to baseline within weeks to months of discontinuation.
      </p>
    ),
  },
  {
    id: 'ca-eyelash-growth-treatment-online-faq-2',
    question: 'Is Latisse safe for California adults to use?',
    answer: (
      <p>
        Latisse has been FDA-approved since 2008 and has a well-characterized safety profile when used as directed. Known risks include: eyelid skin darkening at the application site (typically reversible with discontinuation); very rare iris color change (more relevant for ophthalmic drops used for glaucoma than for the cosmetic eyelid application); periorbital fat atrophy with long-term use (infrequent at cosmetic doses); and transient eye irritation or itching. The physician screens for contraindications — active eye infection, glaucoma without ophthalmologist coordination, pregnancy — before prescribing.
      </p>
    ),
  },
  {
    id: 'ca-eyelash-growth-treatment-online-faq-3',
    question: 'Can Latisse affect my intraocular pressure or interact with glaucoma medications?',
    answer: (
      <p>
        Bimatoprost (the active ingredient in Latisse) is also used as prescription eye drops (Lumigan) to lower intraocular pressure in glaucoma. When applied to the upper eyelid skin margin as directed — rather than directly to the eye as drops — systemic absorption and IOP effects are minimal. However, the physician screens all patients for glaucoma, elevated IOP, and current IOP-lowering medications before prescribing Latisse, and recommends that patients with glaucoma inform their ophthalmologist before starting Latisse.
      </p>
    ),
  },
  {
    id: 'ca-eyelash-growth-treatment-online-faq-4',
    question: 'How do I apply Latisse correctly?',
    answer: (
      <p>
        Apply Latisse once nightly following this technique: remove makeup and contact lenses first; place one drop of Latisse onto the provided sterile applicator brush (do not re-use applicators); draw the brush along the upper eyelid margin at the skin at the base of the upper eyelashes, moving from the inner to outer corner; blot any excess solution from the eyelid with a clean tissue (to minimize off-target effects); wait 15 minutes before reinserting contact lenses. Do NOT apply to the lower eyelid margin — this causes unwanted hair growth on the lower eyelid skin.
      </p>
    ),
  },
  {
    id: 'ca-eyelash-growth-treatment-online-faq-5',
    question: 'How much does Latisse cost in California?',
    answer: (
      <p>
        Latisse (bimatoprost 0.03%) is not available as an FDA-approved generic in the U.S. for the cosmetic eyelash indication. Brand Latisse costs approximately $120–$200 per 3 mL or 5 mL bottle at California pharmacies with a GoodRx coupon as of May 2026. Allergan (manufacturer) offers savings programs through their website that can significantly reduce out-of-pocket cost. The $79 TeleDirectMD visit covers the physician evaluation and prescription — the Latisse medication cost is a separate out-of-pocket expense.
      </p>
    ),
  },
  {
    id: 'ca-eyelash-growth-treatment-online-faq-6',
    question: 'Does California insurance cover Latisse prescriptions?',
    answer: (
      <p>
        Latisse is generally considered a cosmetic prescription and is not covered by most commercial health insurance plans including Aetna and UnitedHealthcare for the cosmetic eyelash growth indication. The TeleDirectMD self-pay visit rate of $79 covers the physician evaluation and prescription — the Latisse medication cost ($120–$200) is a separate out-of-pocket expense. Allergan manufacturer savings programs can help reduce drug cost. Medi-Cal does not cover Latisse for cosmetic purposes.
      </p>
    ),
  },
  {
    id: 'ca-eyelash-growth-treatment-online-faq-7',
    question: 'What conditions cause eyelash loss that I should discuss with my doctor?',
    answer: (
      <p>
        Before prescribing Latisse, the physician screens for secondary causes of eyelash loss: hypothyroidism (TSH check if eyelash AND eyebrow thinning present — classic hypothyroidism sign), alopecia areata (autoimmune), chemotherapy-induced alopecia (grows back after chemo ends), trichotillomania, eyelid inflammatory conditions (blepharitis, seborrheic dermatitis), and nutritional deficiencies (iron deficiency, biotin — though biotin supplementation is commonly oversold with little evidence). Treating an underlying cause is appropriate before starting Latisse for secondary eyelash loss.
      </p>
    ),
  },
  {
    id: 'ca-eyelash-growth-treatment-online-faq-8',
    question: 'How long do I need to use Latisse to maintain eyelash growth?',
    answer: (
      <p>
        Latisse results are not permanent — they depend on continued use. Eyelash growth improvements typically begin at 4 weeks and reach maximum effect at 16 weeks. Upon discontinuation, eyelashes gradually return to their baseline appearance within weeks to months. Most patients use Latisse as ongoing maintenance therapy — once nightly on weekdays with occasional weekends off is a common approach some patients use to reduce cost while maintaining most of the benefit. The physician discusses the duration strategy at the initial visit.
      </p>
    ),
  },
  {
    id: 'ca-eyelash-growth-treatment-online-faq-9',
    question: 'Does California telehealth law allow Latisse prescriptions without an in-person visit?',
    answer: (
      <p>
        Yes. California Business and Professions Code Section 2290.5 does not require a prior in-person visit for telehealth prescribing of non-controlled medications. Latisse (bimatoprost) is not a controlled substance and can be prescribed via a California video visit after the physician screens for contraindications. The Medical Board of California holds telehealth physicians to the same standard of care as in-person physicians — which TeleDirectMD satisfies through comprehensive contraindication screening and prescribing education at every visit.
      </p>
    ),
  },
  {
    id: 'ca-eyelash-growth-treatment-online-faq-10',
    question: 'Can Latisse be used to grow eyebrows as well as eyelashes in California?',
    answer: (
      <p>
        Latisse is FDA-approved for eyelash hypotrichosis only. Eyebrow application is off-label — some physicians use bimatoprost off-label for eyebrow growth with patient informed consent. The physician discusses whether eyebrow application is appropriate for your individual situation. When applied to eyebrow skin, the same safety considerations apply — application site skin darkening and proximity to the eye are relevant. Eyebrow thinning may also indicate hypothyroidism (lateral third eyebrow thinning is a classic sign) — the physician screens for thyroid disease if eyebrow loss is the primary concern.
      </p>
    ),
  },
  {
    id: 'ca-eyelash-growth-treatment-online-faq-11',
    question: 'What should I expect at my Latisse consultation with TeleDirectMD?',
    answer: (
      <p>
        At the consultation, the physician reviews: current eyelash status (photos or live video), prior Latisse or prostaglandin analog use, glaucoma history and current eye medications, contact lens use, any active eye infections or eyelid conditions, pregnancy or breastfeeding status, and any medications that could interact with bimatoprost. After screening, the physician prescribes a 3 mL bottle (approximately 90-day supply) with detailed application instructions. Follow-up is available if side effects occur. Self pay is $79 per visit.
      </p>
    ),
  },
];

const SCHEMAS = [{"@context": "https://schema.org", "@type": "MedicalWebPage", "name": "Eyelash Hypotrichosis \u2014 Bimatoprost (Latisse) Treatment Online in California | TeleDirectMD", "url": "https://teledirectmd.com/ca/eyelash-growth-treatment-online/", "description": "Prescription Latisse (bimatoprost) for eyelash growth online for California adults. Board-certified Family Medicine MD. FDA-approved. Self pay $79. Aetna in-network. Same-day video visits.", "datePublished": "2026-05-20", "dateModified": "2026-05-20", "inLanguage": "en-US", "about": {"@type": "MedicalCondition", "name": "Eyelash Growth Treatment", "code": {"@type": "MedicalCode", "code": "H02.719", "codingSystem": "ICD-10-CM"}}, "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient", "geographicArea": {"@type": "AdministrativeArea", "name": "California"}}, "reviewedBy": {"@type": "Physician", "@id": "https://teledirectmd.com/about/#physician-parth-bhavsar", "name": "Parth Bhavsar, MD", "identifier": {"@type": "PropertyValue", "propertyID": "NPI", "value": "1104323203"}, "medicalSpecialty": "Family Medicine", "hasCredential": [{"@type": "EducationalOccupationalCredential", "credentialCategory": "degree", "name": "Doctor of Medicine (MD)"}, {"@type": "EducationalOccupationalCredential", "credentialCategory": "certification", "name": "Board Certification \u2014 American Board of Family Medicine"}], "licensedIn": "California", "worksFor": {"@type": "MedicalOrganization", "name": "TeleDirectMD", "url": "https://teledirectmd.com"}, "sameAs": ["https://npiregistry.cms.hhs.gov/provider-view/1104323203", "https://teledirectmd.com/about/"]}, "speakable": {"@type": "SpeakableSpecification", "cssSelector": ["#ca-eyelash-growth-treatment-online-opening", "#ca-eyelash-growth-treatment-online-opening p", ".tdmd-ca-eyelash-growth-treatment-online__byline", "#ca-eyelash-growth-treatment-online-faq"]}}, {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Can I get Latisse (bimatoprost) for eyelash growth online in California?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. California Business and Professions Code Section 2290.5 permits licensed physicians to prescribe appropriate medications via synchronous video telehealth without a prior in-person visit. TeleDirectMD's California-licensed board-certified Family Medicine physician evaluates your eyelash growth concerns, screens for contraindications including glaucoma and intraocular pressure medications, and prescribes Latisse (bimatoprost 0.03%) for eligible patients. Self pay is $79; Aetna is in-network effective April 30, 2026."}}, {"@type": "Question", "name": "What is Latisse and how does it work for eyelash growth?", "acceptedAnswer": {"@type": "Answer", "text": "Latisse (bimatoprost ophthalmic solution 0.03%) is the only FDA-approved prescription medication for hypotrichosis of the eyelashes \u2014 insufficient eyelash growth. It is a prostaglandin analog that extends the anagen (growth) phase of the eyelash hair cycle and increases the number of hairs in the growth phase. Applied nightly to the upper eyelid margin, Latisse produces measurable increases in eyelash length, fullness, and darkness by 16 weeks in the FDA approval trial. Results are reversible \u2014 eyelashes return to baseline within weeks to months of discontinuation."}}, {"@type": "Question", "name": "Is Latisse safe for California adults to use?", "acceptedAnswer": {"@type": "Answer", "text": "Latisse has been FDA-approved since 2008 and has a well-characterized safety profile when used as directed. Known risks include: eyelid skin darkening at the application site (typically reversible with discontinuation); very rare iris color change (more relevant for ophthalmic drops used for glaucoma than for the cosmetic eyelid application); periorbital fat atrophy with long-term use (infrequent at cosmetic doses); and transient eye irritation or itching. The physician screens for contraindications \u2014 active eye infection, glaucoma without ophthalmologist coordination, pregnancy \u2014 before prescribing."}}, {"@type": "Question", "name": "Can Latisse affect my intraocular pressure or interact with glaucoma medications?", "acceptedAnswer": {"@type": "Answer", "text": "Bimatoprost (the active ingredient in Latisse) is also used as prescription eye drops (Lumigan) to lower intraocular pressure in glaucoma. When applied to the upper eyelid skin margin as directed \u2014 rather than directly to the eye as drops \u2014 systemic absorption and IOP effects are minimal. However, the physician screens all patients for glaucoma, elevated IOP, and current IOP-lowering medications before prescribing Latisse, and recommends that patients with glaucoma inform their ophthalmologist before starting Latisse."}}, {"@type": "Question", "name": "How do I apply Latisse correctly?", "acceptedAnswer": {"@type": "Answer", "text": "Apply Latisse once nightly following this technique: remove makeup and contact lenses first; place one drop of Latisse onto the provided sterile applicator brush (do not re-use applicators); draw the brush along the upper eyelid margin at the skin at the base of the upper eyelashes, moving from the inner to outer corner; blot any excess solution from the eyelid with a clean tissue (to minimize off-target effects); wait 15 minutes before reinserting contact lenses. Do NOT apply to the lower eyelid margin \u2014 this causes unwanted hair growth on the lower eyelid skin."}}, {"@type": "Question", "name": "How much does Latisse cost in California?", "acceptedAnswer": {"@type": "Answer", "text": "Latisse (bimatoprost 0.03%) is not available as an FDA-approved generic in the U.S. for the cosmetic eyelash indication. Brand Latisse costs approximately $120\u2013$200 per 3 mL or 5 mL bottle at California pharmacies with a GoodRx coupon as of May 2026. Allergan (manufacturer) offers savings programs through their website that can significantly reduce out-of-pocket cost. The $79 TeleDirectMD visit covers the physician evaluation and prescription \u2014 the Latisse medication cost is a separate out-of-pocket expense."}}, {"@type": "Question", "name": "Does California insurance cover Latisse prescriptions?", "acceptedAnswer": {"@type": "Answer", "text": "Latisse is generally considered a cosmetic prescription and is not covered by most commercial health insurance plans including Aetna and UnitedHealthcare for the cosmetic eyelash growth indication. The TeleDirectMD self-pay visit rate of $79 covers the physician evaluation and prescription \u2014 the Latisse medication cost ($120\u2013$200) is a separate out-of-pocket expense. Allergan manufacturer savings programs can help reduce drug cost. Medi-Cal does not cover Latisse for cosmetic purposes."}}, {"@type": "Question", "name": "What conditions cause eyelash loss that I should discuss with my doctor?", "acceptedAnswer": {"@type": "Answer", "text": "Before prescribing Latisse, the physician screens for secondary causes of eyelash loss: hypothyroidism (TSH check if eyelash AND eyebrow thinning present \u2014 classic hypothyroidism sign), alopecia areata (autoimmune), chemotherapy-induced alopecia (grows back after chemo ends), trichotillomania, eyelid inflammatory conditions (blepharitis, seborrheic dermatitis), and nutritional deficiencies (iron deficiency, biotin \u2014 though biotin supplementation is commonly oversold with little evidence). Treating an underlying cause is appropriate before starting Latisse for secondary eyelash loss."}}, {"@type": "Question", "name": "How long do I need to use Latisse to maintain eyelash growth?", "acceptedAnswer": {"@type": "Answer", "text": "Latisse results are not permanent \u2014 they depend on continued use. Eyelash growth improvements typically begin at 4 weeks and reach maximum effect at 16 weeks. Upon discontinuation, eyelashes gradually return to their baseline appearance within weeks to months. Most patients use Latisse as ongoing maintenance therapy \u2014 once nightly on weekdays with occasional weekends off is a common approach some patients use to reduce cost while maintaining most of the benefit. The physician discusses the duration strategy at the initial visit."}}, {"@type": "Question", "name": "Does California telehealth law allow Latisse prescriptions without an in-person visit?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. California Business and Professions Code Section 2290.5 does not require a prior in-person visit for telehealth prescribing of non-controlled medications. Latisse (bimatoprost) is not a controlled substance and can be prescribed via a California video visit after the physician screens for contraindications. The Medical Board of California holds telehealth physicians to the same standard of care as in-person physicians \u2014 which TeleDirectMD satisfies through comprehensive contraindication screening and prescribing education at every visit."}}, {"@type": "Question", "name": "Can Latisse be used to grow eyebrows as well as eyelashes in California?", "acceptedAnswer": {"@type": "Answer", "text": "Latisse is FDA-approved for eyelash hypotrichosis only. Eyebrow application is off-label \u2014 some physicians use bimatoprost off-label for eyebrow growth with patient informed consent. The physician discusses whether eyebrow application is appropriate for your individual situation. When applied to eyebrow skin, the same safety considerations apply \u2014 application site skin darkening and proximity to the eye are relevant. Eyebrow thinning may also indicate hypothyroidism (lateral third eyebrow thinning is a classic sign) \u2014 the physician screens for thyroid disease if eyebrow loss is the primary concern."}}, {"@type": "Question", "name": "What should I expect at my Latisse consultation with TeleDirectMD?", "acceptedAnswer": {"@type": "Answer", "text": "At the consultation, the physician reviews: current eyelash status (photos or live video), prior Latisse or prostaglandin analog use, glaucoma history and current eye medications, contact lens use, any active eye infections or eyelid conditions, pregnancy or breastfeeding status, and any medications that could interact with bimatoprost. After screening, the physician prescribes a 3 mL bottle (approximately 90-day supply) with detailed application instructions. Follow-up is available if side effects occur. Self pay is $79 per visit."}}]}, {"@context": "https://schema.org", "@type": "HowTo", "name": "How to Get Eyelash Hypotrichosis \u2014 Bimatoprost (Latisse) Treatment Online in California", "description": "Three steps to receive eyelash hypotrichosis \u2014 bimatoprost (latisse) treatment evaluation and, if appropriate, a prescription from a California-licensed board-certified physician.", "totalTime": "PT30M", "estimatedCost": {"@type": "MonetaryAmount", "currency": "USD", "value": "79"}, "step": [{"@type": "HowToStep", "position": 1, "name": "Book your video visit", "text": "Visit teledirectmd.com and select California Eyelash Growth Treatment treatment. No referral needed. Self pay $79. Many visits available same day.", "url": "https://teledirectmd.com/book-online"}, {"@type": "HowToStep", "position": 2, "name": "See a California-licensed MD by secure video", "text": "Connect with a board-certified Family Medicine physician licensed in California. The physician reviews your symptoms, history, and red-flag screening. Consent per CA B&P Section 2290.5 confirmed.", "url": "https://teledirectmd.com/ca/eyelash-growth-treatment-online/"}, {"@type": "HowToStep", "position": 3, "name": "Receive your treatment plan and e-prescription", "text": "If medication is appropriate, a California-compliant e-prescription is sent to your chosen pharmacy during or after the visit.", "url": "https://teledirectmd.com/ca/eyelash-growth-treatment-online/"}]}, {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "TeleDirectMD", "item": "https://teledirectmd.com"}, {"@type": "ListItem", "position": 2, "name": "California", "item": "https://teledirectmd.com/ca/"}, {"@type": "ListItem", "position": 3, "name": "Eyelash Hypotrichosis \u2014 Bimatoprost (Latisse) Treatment Online in California", "item": "https://teledirectmd.com/ca/eyelash-growth-treatment-online/"}]}];

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

export default function CaEyelashGrowthTreatmentOnline() {
  const pid = 'ca-eyelash-growth-treatment-online';

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
            <span aria-current="page">Eyelash Hypotrichosis — Bimatoprost (Latisse) Treatment Online</span>
          </div>
        </nav>

        {/* ─── 1) HERO ────────────────────────────────────────────────────── */}
        <section className="tdmd-hero" id={`${pid}-hero`}>
          <div className="tdmd-container">
            <div className="tdmd-hero-grid">
              <div className="tdmd-hero-copy">
                <h1 data-speakable="true">Eyelash Growth Treatment Online in California</h1>
                <p className="tdmd-hero-sub" data-speakable="true">
                  California adult care by secure video visit. Self pay $79 · Aetna in-network · UHC Commercial approved · FDA-approved bimatoprost (Latisse) + AAD eyelash alopecia guidelines · CA B&P §2290.5 compliant.
                </p>
                <p>
                  Eyelash Growth Treatment is a condition commonly evaluated and, when appropriate, treated via telehealth. TeleDirectMD uses a safety-first approach, screening for red-flag symptoms that require in-person or emergency care before determining whether treatment by video visit is appropriate. This page is for adults located in California, including Los Angeles, San Diego, San Jose, San Francisco, Fresno, Sacramento, Long Beach, Oakland, Bakersfield, Anaheim, and surrounding areas.
                </p>

                {/* v3: Inline opener paragraph — replaces CitableSummaryBlock */}
                <div className="tdmd-condition-opener" id={`${pid}-opening`}>
                  <p>
                    <strong>Can I get eyelash hypotrichosis — bimatoprost (latisse) treatment online in California?</strong> Yes. <a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=2290.5.&lawCode=BPC" rel="noopener" target="_blank">California Business and Professions Code Section 2290.5</a> — the Telehealth Advancement Act — permits licensed physicians to deliver care via synchronous video telehealth without a prior in-person visit. TeleDirectMD physicians are licensed in California and are held to the same standard of care as in-person physicians by the <a href="https://www.mbc.ca.gov/Resources/Medical-Resources/telehealth.aspx" rel="noopener" target="_blank">Medical Board of California</a>. Adults 18+ located in California can book a same-day video visit. Self pay is $79. <a href="/insurance/">Aetna is in-network</a> as of April 30, 2026; UnitedHealthcare Commercial approved May 29, 2026.
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

                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> H02.719 (Madarosis of unspecified eyelid and periocular area); cosmetic indication coded per clinical details</p>
              </div>

              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>Online MD-Only Eyelash Growth Treatment Care in California</h2>
                  <ul>
                    <li>Fast evaluation for eyelash hypotrichosis — bimatoprost (latisse) treatment symptoms</li>
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
            <h2>Eyelash Hypotrichosis — Bimatoprost (Latisse) Treatment Telehealth Eligibility Checklist for California</h2>
            <p><strong>You are likely eligible for a TeleDirectMD video visit if ALL of these apply to you:</strong></p>
            <div className="tdmd-ca-cond__dual">
              <div className="tdmd-ca-cond__dual-card tdmd-ca-cond__dual-card--good">
                <h3>&#10003; You Are Eligible If</h3>
                <ul>
                  <li>Adult 18+ located in California at time of visit</li>
                  <li>Eyelash hypotrichosis (cosmetic eyelash growth desire) without secondary pathological cause</li>
                  <li>Established Latisse user seeking refill</li>
                  <li>No active eye infection, uncontrolled glaucoma, or conflicting IOP-lowering medications</li>
                  <li>Screening for contraindications reviewable by video and medical history</li>
                  <li>Contact lens user — can comply with removal before application</li>
                </ul>
              </div>
              <div className="tdmd-ca-cond__dual-card tdmd-ca-cond__dual-card--alert">
                <h3>&#10007; Seek In-Person or Emergency Care If</h3>
                <ul>
                  <li>Active eye infection (conjunctivitis, keratitis, stye) — treat infection first before prescribing</li>
                  <li>Uncontrolled narrow-angle glaucoma — ophthalmologist clearance required before bimatoprost</li>
                  <li>Current use of intraocular pressure-lowering prostaglandin analog drops — ophthalmologist coordination required</li>
                  <li>Rapidly progressive eyelash loss with scalp hair loss — possible alopecia areata — dermatology evaluation</li>
                  <li>Eyelash loss with outer eyebrow thinning — screen for hypothyroidism (TSH) before cosmetic prescribing</li>
                  <li>Pregnancy or breastfeeding — bimatoprost safety in pregnancy not established — physician evaluation required</li>
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
            <h2>California Telehealth Law and Your Eyelash Hypotrichosis — Bimatoprost (Latisse) Treatment Visit</h2>

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

            <h3>Are eyelash hypotrichosis — bimatoprost (latisse) treatment medications controlled substances under California law?</h3>
            <p>
              Bimatoprost 0.03% (Latisse) is not a controlled substance. It can be prescribed via California telehealth and transmitted electronically to any California pharmacy under Assembly Bill 2789. California requires all prescriptions to be issued electronically under Assembly Bill 2789 (effective January 1, 2022), per the <a href="https://www.mbc.ca.gov/News/" rel="noopener" target="_blank">Medical Board of California</a>. TeleDirectMD does not prescribe controlled substances in any state.
            </p>
          </div>
        </section>

        {/* ─── 4) HOW IT WORKS ─────────────────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-how-it-works`} itemScope itemType="https://schema.org/HowTo">
          <div className="tdmd-container">
            <h2 itemProp="name">How Online Eyelash Hypotrichosis — Bimatoprost (Latisse) Treatment Works in California</h2>
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
            <h2>How Common Is Eyelash Growth Treatment in California?</h2>
            <p>
              Bimatoprost 0.03% (Latisse) received FDA approval in 2008 for hypotrichosis of the eyelashes — the only FDA-approved prescription eyelash growth product — based on the HAIR study demonstrating statistically significant increases in eyelash length, thickness, and darkness versus vehicle at 16 weeks. California's cosmetically focused market (Los Angeles, San Francisco, San Diego) drives demand for physician-prescribed cosmetic treatments. Secondary eyelash loss from hypothyroidism, alopecia areata, and chemotherapy is clinically significant and requires evaluation before cosmetic prescribing. — <a href="https://www.accessdata.fda.gov/drugsatfda_docs/label/2008/022369lbl.pdf" rel="noopener" target="_blank">FDA — Latisse (Bimatoprost 0.03%) Approval and Drug Label</a>.
            </p>
            <p>
              Clinical guidance for eyelash hypotrichosis — bimatoprost (latisse) treatment is provided by <a href="https://www.aad.org/public/diseases/hair-loss/types/alopecia" rel="noopener" target="_blank">AAD</a> through the FDA-Approved Prescribing Information for Bimatoprost 0.03% (Latisse) + AAD Eyelash Alopecia Guidelines. TeleDirectMD follows these guidelines on every patient visit.
            </p>
            <h3>What causes eyelash growth treatment and who is most at risk in California?</h3>
            <p>
              Eyelash Growth Treatment affects California adults across all demographics, though certain populations face higher risk based on the specific condition. The physician reviews your individual risk factors at each visit. Telehealth is appropriate for adults 18 and older with mild to moderate presentations who do not have red-flag symptoms requiring immediate in-person evaluation.
            </p>
          </div>
        </section>

        {/* ─── 6) COST & INSURANCE ─────────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-cost`}>
          <div className="tdmd-container">
            <h2>Eyelash Hypotrichosis — Bimatoprost (Latisse) Treatment Cost &amp; Insurance in California</h2>
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

              <div className="tdmd-price-chart" role="group" aria-label="Typical Eyelash Growth Treatment cost comparison">
                <h3>Typical Eyelash Growth Treatment Visit Cost in California</h3>
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
            <h2>Eyelash Hypotrichosis — Bimatoprost (Latisse) Treatment Medication Options and Costs in California</h2>
            <p>
              Medications for eyelash hypotrichosis — bimatoprost (latisse) treatment are selected based on current guidelines from <a href="https://www.aad.org/public/diseases/hair-loss/types/alopecia" rel="noopener" target="_blank">AAD</a>, patient history, allergies, and relevant contraindications assessed at the visit. GoodRx-verified pricing is shown below.
            </p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Eyelash Hypotrichosis — Bimatoprost (Latisse) Treatment medication options and GoodRx prices">
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
                    <td><strong>Bimatoprost 0.03% ophthalmic solution (Latisse) — 3 mL or 5 mL</strong> · First-line</td>
                    <td>1 drop to sterile applicator, apply to upper eyelid margin nightly. Remove contacts first; wait 15 min to reinsert. Do NOT apply to lower lid.</td>
                    <td><a href="https://www.goodrx.com/latisse" target="_blank" rel="noopener">~$120–$200 per bottle GoodRx; Allergan savings programs available</a></td>
                    <td>Only FDA-approved prescription eyelash growth product. Must be used consistently for continued results — eyelashes return to baseline weeks to months after stopping. Physician screens for glaucoma and IOP medications before prescribing.</td>
                  </tr>
                  <tr>
                    <td><strong>Compounded bimatoprost 0.03% — California compounding pharmacy option</strong></td>
                    <td>Same application technique as Latisse brand — nightly to upper eyelid margin</td>
                    <td><a href="https://www.goodrx.com/bimatoprost-ophthalmic" target="_blank" rel="noopener">~$40–$80 per bottle at California compounding pharmacies</a></td>
                    <td>Compounded bimatoprost may reduce cost compared to brand Latisse. Not FDA-approved as a finished product — physician discusses compounded vs. brand at visit. California compounding pharmacies must comply with CA Board of Pharmacy 503A compounding standards.</td>
                  </tr>
                  <tr>
                    <td><strong>Minoxidil topical 5% — off-label eyebrow/lash adjunct (patient-initiated OTC)</strong></td>
                    <td>Not routinely prescribed; OTC minoxidil is sometimes used off-label for eyebrow hypotrichosis by patients</td>
                    <td><a href="https://www.goodrx.com/minoxidil-topical" target="_blank" rel="noopener">~$25–$40/month OTC</a></td>
                    <td>Not FDA-approved for eyelash or eyebrow use. Physician discusses off-label application only at patient request. Proximity to eyes creates safety concern — not typically prescribed by TeleDirectMD for periocular use. Bimatoprost (Latisse) is the preferred physician-prescribed option.</td>
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
            <p>For most adults with mild to moderate eyelash hypotrichosis — bimatoprost (latisse) treatment without red-flag symptoms, a video visit is appropriate and convenient. Some situations require in-person evaluation. Use the comparison below to determine the right care pathway for you.</p>
            <div className="tdmd-ca-cond__dual">
              <div className="tdmd-ca-cond__dual-card tdmd-ca-cond__dual-card--good">
                <h3>&#10003; Use TeleDirectMD (telehealth) if</h3>
                <ul>
                  <li>Adult 18+ located in California at time of visit</li>
                  <li>Eyelash hypotrichosis (cosmetic eyelash growth desire) without secondary pathological cause</li>
                  <li>Established Latisse user seeking refill</li>
                  <li>No active eye infection, uncontrolled glaucoma, or conflicting IOP-lowering medications</li>
                  <li>Screening for contraindications reviewable by video and medical history</li>
                  <li>Contact lens user — can comply with removal before application</li>
                </ul>
              </div>
              <div className="tdmd-ca-cond__dual-card tdmd-ca-cond__dual-card--alert">
                <h3>&rarr; Use in-person care if</h3>
                <ul>
                  <li>Active eye infection (conjunctivitis, keratitis, stye) — treat infection first before prescribing</li>
                  <li>Uncontrolled narrow-angle glaucoma — ophthalmologist clearance required before bimatoprost</li>
                  <li>Current use of intraocular pressure-lowering prostaglandin analog drops — ophthalmologist coordination required</li>
                  <li>Rapidly progressive eyelash loss with scalp hair loss — possible alopecia areata — dermatology evaluation</li>
                  <li>Eyelash loss with outer eyebrow thinning — screen for hypothyroidism (TSH) before cosmetic prescribing</li>
                  <li>Pregnancy or breastfeeding — bimatoprost safety in pregnancy not established — physician evaluation required</li>
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
              sectionTitle="Frequently Asked Questions — Eyelash Hypotrichosis — Bimatoprost (Latisse) Treatment in California"
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
              <a key="anti-aging-treatment-online" className="tdmd-ca-uti__sibling" href="/ca/anti-aging-treatment-online/">
                  <span className="tdmd-ca-uti__sibling-label">Anti-Aging Treatment in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Cosmetic scope companion — often requested alongside tretinoin and skincare regimens.</span>
                </a>
              <a key="hair-loss-treatment-online" className="tdmd-ca-uti__sibling" href="/ca/hair-loss-treatment-online/">
                  <span className="tdmd-ca-uti__sibling-label">Hair Loss Treatment in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Prostaglandin analog mechanism (bimatoprost) has overlap with hair growth research.</span>
                </a>
              <a key="hypothyroidism-refills-online" className="tdmd-ca-uti__sibling" href="/ca/hypothyroidism-refills-online/">
                  <span className="tdmd-ca-uti__sibling-label">Hypothyroidism Refills in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Hypothyroidism causes eyelash and eyebrow loss — exclude thyroid cause before cosmetic treatment.</span>
                </a>
              <a key="seasonal-allergies-treatment-online" className="tdmd-ca-uti__sibling" href="/ca/seasonal-allergies-treatment-online/">
                  <span className="tdmd-ca-uti__sibling-label">Seasonal Allergies in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Allergic conjunctivitis and eyelid irritation can cause secondary eyelash loss — allergy control first.</span>
                </a>
              <a key="hypertension-refills-online" className="tdmd-ca-uti__sibling" href="/ca/hypertension-refills-online/">
                  <span className="tdmd-ca-uti__sibling-label">Hypertension Refills in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Prostaglandin analog (Latisse) and some antihypertensives — drug interaction context.</span>
                </a>
            </div>
          </div>
        </section>

        {/* ─── 12) PILLAR / SPOKE / CLUSTER LINKS ──────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-related`}>
          <div className="tdmd-container">
            <h2>Related Resources from TeleDirectMD</h2>
            <p>This page sits at the intersection of the <a href="/ca/">California state hub</a> and the <a href="/eyelash-growth-treatment-online/">Eyelash Growth Treatment national condition page</a>. Use the links below to explore insurance details, book a visit, or review other conditions.</p>
            <div className="tdmd-ca-cond__related-links" aria-label="Related resources">
              <a href="/">Home</a>
              <a href="/ca/">California (state pillar)</a>
              <a href="/eyelash-growth-treatment-online/">National Eyelash Growth Treatment page</a>
              <a href="/health-guides/">Eyelash Growth Treatment health guides</a>
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
              <li><a href="https://www.accessdata.fda.gov/drugsatfda_docs/label/2008/022369lbl.pdf" rel="noopener" target="_blank">FDA — Latisse (Bimatoprost 0.03%) Prescribing Information</a></li>
              <li><a href="https://www.aad.org/public/diseases/hair-loss/types/alopecia" rel="noopener" target="_blank">AAD — Alopecia (Eyelash and Eyebrow Hair Loss)</a></li>
              <li><a href="https://www.allergan.com/assets/pdf/latisse_pi.pdf" rel="noopener" target="_blank">Allergan — Latisse Full Prescribing Information</a></li>
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

        <WhatDoesThisCostBlock conditionSlug="eyelash-growth-treatment-online" conditionName="Eyelash Hypotrichosis — Bimatoprost (Latisse) Treatment" stateName="California" />
        <CompareTeleDirectMDLinkRow conditionSlug="eyelash-growth-treatment-online" />
        <CommonSymptomsBlock conditionSlug="eyelash-growth-treatment-online" conditionName="Eyelash Hypotrichosis — Bimatoprost (Latisse) Treatment" />
      </div>
    </>
  );
}
