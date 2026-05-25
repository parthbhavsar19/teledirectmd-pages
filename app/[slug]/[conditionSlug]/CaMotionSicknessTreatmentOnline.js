/**
 * CaMotionSicknessTreatmentOnline.js — production California × Motion Sickness Treatment condition page (v3)
 *
 * Rendered by app/[slug]/[conditionSlug]/page.js when slug === 'ca' and
 * conditionSlug === 'motion-sickness-treatment-online'.
 *
 * Matches v3 CA UTI template: inline opener paragraph (no CitableSummaryBlock),
 * hero, CA regulatory block (exact reuse), epidemiology block, clinical content,
 * vertical bar chart cost section, CA payor table, medications, dual-path block,
 * FAQ accordion (12 Q/A), JSON-LD schemas (MedicalWebPage + FAQPage + Physician
 * + HowTo + BreadcrumbList + SpeakableSpecification — NEVER QAPage).
 *
 * Authority: AAFP
 * Guideline: AAFP Review on Motion Sickness Management + CDC Yellow Book 2024 — Motion Sickness
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

const PAGE_URL = 'https://teledirectmd.com/ca/motion-sickness-treatment-online/';
const PAGE_TITLE = 'Motion Sickness — Scopolamine and Antiemetic Treatment Online in California | TeleDirectMD';
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
    id: 'ca-motion-sickness-treatment-online-faq-0',
    question: 'Can I get a prescription scopolamine patch for motion sickness online in California?',
    answer: (
      <p>
        Yes. California Business and Professions Code Section 2290.5 permits licensed physicians to prescribe appropriate medications via synchronous video telehealth without a prior in-person visit. TeleDirectMD's California-licensed board-certified Family Medicine physician reviews your motion sickness history, triggers, prior treatment response, and screens for contraindications to scopolamine (glaucoma, urinary retention, significant anticholinergic drug burden) before prescribing. Scopolamine patches are not controlled substances and can be prescribed via California telehealth. Self pay is $79; Aetna is in-network effective April 30, 2026.
      </p>
    ),
  },
  {
    id: 'ca-motion-sickness-treatment-online-faq-1',
    question: 'What is scopolamine and how does it prevent motion sickness?',
    answer: (
      <p>
        Scopolamine (Transderm Scōp) is an anticholinergic medication delivered via a transdermal patch that provides up to 72 hours of motion sickness prevention from a single patch applied behind the ear. It works by blocking muscarinic acetylcholine receptors in the vestibular nucleus and vomiting center — reducing the sensory conflict signal that causes motion sickness. Per AAFP evidence review, scopolamine patches are the most effective pharmacotherapy for prolonged motion exposures such as ocean cruises, extended boating, and long mountain driving. The patch must be applied at least 4 hours before travel for full effect.
      </p>
    ),
  },
  {
    id: 'ca-motion-sickness-treatment-online-faq-2',
    question: 'What motion sickness triggers are common in California?',
    answer: (
      <p>
        California's diverse geography creates multiple motion sickness scenarios: Pacific Ocean boating and whale-watching tours departing from Santa Barbara, Monterey, San Francisco, and Los Angeles; Channel Islands National Park ferry crossings; cruise ship departures from Port of Los Angeles and San Francisco; winding Highway 1 along Big Sur and the Marin Headlands; Sierra Nevada mountain roads; helicopter and small plane scenic tours; and VR/virtual reality entertainment environments increasingly common in Silicon Valley and tech-hub areas. The physician tailors the prescription to your specific planned exposure duration and severity.
      </p>
    ),
  },
  {
    id: 'ca-motion-sickness-treatment-online-faq-3',
    question: 'Who should NOT use scopolamine patches?',
    answer: (
      <p>
        The scopolamine patch has several contraindications that the physician screens for at every visit: narrow-angle glaucoma (anticholinergics can precipitate acute angle-closure glaucoma crisis — ask your ophthalmologist before using); urinary retention or benign prostatic hyperplasia (BPH) — anticholinergics worsen urinary flow; gastrointestinal obstruction; myasthenia gravis; significant pre-existing anticholinergic drug burden (tricyclic antidepressants, bladder anticholinergics, antihistamines with high anticholinergic activity). Elderly patients are more sensitive to anticholinergic side effects including confusion and urinary retention.
      </p>
    ),
  },
  {
    id: 'ca-motion-sickness-treatment-online-faq-4',
    question: 'How much do scopolamine patches cost in California with GoodRx?',
    answer: (
      <p>
        Scopolamine transdermal patches (Transderm Scōp) are prescription-only and not available as a generic. Pricing with GoodRx coupons at California pharmacies (May 2026): approximately $25–$50 per single patch; 4-patch box approximately $80–$150. Prices vary by pharmacy — CVS, Walgreens, Walmart Pharmacy, and Costco carry scopolamine patches in most California locations. The $79 TeleDirectMD visit fee is separate from the patch cost.
      </p>
    ),
  },
  {
    id: 'ca-motion-sickness-treatment-online-faq-5',
    question: 'What are the side effects of scopolamine patches?',
    answer: (
      <p>
        Common scopolamine patch side effects: dry mouth (most common, affecting approximately 30% of users — carry water); drowsiness or grogginess (less severe than oral antihistamines for most users); blurred vision or mydriasis (dilated pupil) especially if patch touches eye; dizziness; confusion (more likely in elderly). Less common: urinary retention (particularly in men with enlarged prostate), skin irritation at application site. Post-patch rebound: some users experience nausea after patch removal following prolonged use — removing patch gradually or wearing the patch until return to stable land is recommended.
      </p>
    ),
  },
  {
    id: 'ca-motion-sickness-treatment-online-faq-6',
    question: 'What over-the-counter motion sickness medications are available in California?',
    answer: (
      <p>
        Several effective OTC options are available at California pharmacies without a prescription: meclizine 25 mg (Bonine, Antivert) — the AAFP's preferred OTC agent, mild sedation, taken 1 hour before travel; dimenhydrinate 50 mg (Dramamine) — classic OTC choice, more sedating than meclizine; diphenhydramine 25–50 mg (Benadryl) — available OTC but highly sedating, not appropriate for drivers. Ginger supplements (ginger root capsules or ginger candy) have some evidence for mild motion sickness prevention and are available at California natural health retailers. Physician can prescribe meclizine for insurance coverage if needed.
      </p>
    ),
  },
  {
    id: 'ca-motion-sickness-treatment-online-faq-7',
    question: 'Is motion sickness more common in migraineurs?',
    answer: (
      <p>
        Yes. People with migraine have significantly higher rates of motion sickness susceptibility — approximately 50–60% of migraineurs report significant motion sickness compared to approximately 20–30% of non-migraineurs. Both conditions involve vestibular supersensitivity and central sensitization. The physician assesses for migraine history at the motion sickness visit, as it may influence treatment selection — scopolamine is appropriate for both conditions, and some migraine preventives may also reduce motion sickness susceptibility.
      </p>
    ),
  },
  {
    id: 'ca-motion-sickness-treatment-online-faq-8',
    question: 'Does California telehealth law allow prescription scopolamine without an in-person visit?',
    answer: (
      <p>
        Yes. California Business and Professions Code Section 2290.5 does not require a prior in-person visit for telehealth prescribing of non-controlled medications. Scopolamine patches are not controlled substances under federal or California law and can be prescribed via a California video visit after thorough contraindication screening. The Medical Board of California holds telehealth physicians to the same standard of care as in-person physicians — which TeleDirectMD satisfies through comprehensive history-taking and contraindication review.
      </p>
    ),
  },
  {
    id: 'ca-motion-sickness-treatment-online-faq-9',
    question: 'When does motion sickness require in-person evaluation instead of telehealth?',
    answer: (
      <p>
        Motion sickness prevention for a planned travel event is appropriate for telehealth evaluation. However, seek in-person evaluation for: persistent vertigo not triggered by motion (possible labyrinthitis, BPPV, or Meniere's disease); nausea and vomiting with no clear motion trigger (exclude central causes); new onset dizziness in an older adult (possible TIA/stroke); or hearing loss with dizziness (possible acoustic neuroma or Meniere's). These conditions require ENT or neurology evaluation, vestibular function testing, and possibly imaging.
      </p>
    ),
  },
  {
    id: 'ca-motion-sickness-treatment-online-faq-10',
    question: 'What is the best strategy for motion sickness on California\'s winding mountain roads?',
    answer: (
      <p>
        For mountain driving motion sickness on routes like Sierra Nevada roads, Big Sur Highway 1, or Angeles Crest Highway, the AAFP recommends: sit in the front passenger seat (less motion than rear seats); focus gaze on the road horizon ahead rather than surrounding terrain; avoid reading or phone use while in motion; keep windows cracked for fresh air; eat a light meal before travel (neither fasting nor overeating); consider over-the-counter meclizine 25–50 mg one hour before departure. For severe or chronic mountain-road motion sickness, a prescription scopolamine patch (applied the night before travel) provides the most reliable prevention. $79 TeleDirectMD visit includes travel preparation counseling.
      </p>
    ),
  },
  {
    id: 'ca-motion-sickness-treatment-online-faq-11',
    question: 'Does California insurance cover motion sickness treatment visits at TeleDirectMD?',
    answer: (
      <p>
        California Assembly Bill 744 (2019), codified in Insurance Code §10123.85, requires commercial health plans to reimburse telehealth visits on the same basis as in-person visits. Aetna commercial plans are active in California as of April 30, 2026; UnitedHealthcare Commercial is approved effective May 29, 2026. Anthem Blue Cross and Cigna are pending enrollment. For patients without in-network insurance, the self-pay rate is $79 per visit. Scopolamine patches are prescription-only and their pharmacy cost is separate from the visit fee — GoodRx coupons are recommended to reduce patch cost at California pharmacies.
      </p>
    ),
  },
];

const SCHEMAS = [{"@context": "https://schema.org", "@type": "MedicalWebPage", "name": "Motion Sickness \u2014 Scopolamine and Antiemetic Treatment Online in California | TeleDirectMD", "url": "https://teledirectmd.com/ca/motion-sickness-treatment-online/", "description": "Motion sickness treatment online for California adults. Board-certified Family Medicine MD. AAFP guideline-based. Self pay $79. Aetna in-network. Scopolamine patch, meclizine, ondansetron. Same-day video visits.", "datePublished": "2026-05-20", "dateModified": "2026-05-20", "inLanguage": "en-US", "about": {"@type": "MedicalCondition", "name": "Motion Sickness Treatment", "code": {"@type": "MedicalCode", "code": "T75.3XXA", "codingSystem": "ICD-10-CM"}}, "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient", "geographicArea": {"@type": "AdministrativeArea", "name": "California"}}, "reviewedBy": {"@type": "Physician", "@id": "https://teledirectmd.com/about/#physician-parth-bhavsar", "name": "Parth Bhavsar, MD", "identifier": {"@type": "PropertyValue", "propertyID": "NPI", "value": "1104323203"}, "medicalSpecialty": "Family Medicine", "hasCredential": [{"@type": "EducationalOccupationalCredential", "credentialCategory": "degree", "name": "Doctor of Medicine (MD)"}, {"@type": "EducationalOccupationalCredential", "credentialCategory": "certification", "name": "Board Certification \u2014 American Board of Family Medicine"}], "licensedIn": "California", "worksFor": {"@type": "MedicalOrganization", "name": "TeleDirectMD", "url": "https://teledirectmd.com"}, "sameAs": ["https://npiregistry.cms.hhs.gov/provider-view/1104323203", "https://teledirectmd.com/about/"]}, "speakable": {"@type": "SpeakableSpecification", "cssSelector": ["#ca-motion-sickness-treatment-online-opening", "#ca-motion-sickness-treatment-online-opening p", ".tdmd-ca-motion-sickness-treatment-online__byline", "#ca-motion-sickness-treatment-online-faq"]}}, {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Can I get a prescription scopolamine patch for motion sickness online in California?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. California Business and Professions Code Section 2290.5 permits licensed physicians to prescribe appropriate medications via synchronous video telehealth without a prior in-person visit. TeleDirectMD's California-licensed board-certified Family Medicine physician reviews your motion sickness history, triggers, prior treatment response, and screens for contraindications to scopolamine (glaucoma, urinary retention, significant anticholinergic drug burden) before prescribing. Scopolamine patches are not controlled substances and can be prescribed via California telehealth. Self pay is $79; Aetna is in-network effective April 30, 2026."}}, {"@type": "Question", "name": "What is scopolamine and how does it prevent motion sickness?", "acceptedAnswer": {"@type": "Answer", "text": "Scopolamine (Transderm Sc\u014dp) is an anticholinergic medication delivered via a transdermal patch that provides up to 72 hours of motion sickness prevention from a single patch applied behind the ear. It works by blocking muscarinic acetylcholine receptors in the vestibular nucleus and vomiting center \u2014 reducing the sensory conflict signal that causes motion sickness. Per AAFP evidence review, scopolamine patches are the most effective pharmacotherapy for prolonged motion exposures such as ocean cruises, extended boating, and long mountain driving. The patch must be applied at least 4 hours before travel for full effect."}}, {"@type": "Question", "name": "What motion sickness triggers are common in California?", "acceptedAnswer": {"@type": "Answer", "text": "California's diverse geography creates multiple motion sickness scenarios: Pacific Ocean boating and whale-watching tours departing from Santa Barbara, Monterey, San Francisco, and Los Angeles; Channel Islands National Park ferry crossings; cruise ship departures from Port of Los Angeles and San Francisco; winding Highway 1 along Big Sur and the Marin Headlands; Sierra Nevada mountain roads; helicopter and small plane scenic tours; and VR/virtual reality entertainment environments increasingly common in Silicon Valley and tech-hub areas. The physician tailors the prescription to your specific planned exposure duration and severity."}}, {"@type": "Question", "name": "Who should NOT use scopolamine patches?", "acceptedAnswer": {"@type": "Answer", "text": "The scopolamine patch has several contraindications that the physician screens for at every visit: narrow-angle glaucoma (anticholinergics can precipitate acute angle-closure glaucoma crisis \u2014 ask your ophthalmologist before using); urinary retention or benign prostatic hyperplasia (BPH) \u2014 anticholinergics worsen urinary flow; gastrointestinal obstruction; myasthenia gravis; significant pre-existing anticholinergic drug burden (tricyclic antidepressants, bladder anticholinergics, antihistamines with high anticholinergic activity). Elderly patients are more sensitive to anticholinergic side effects including confusion and urinary retention."}}, {"@type": "Question", "name": "How much do scopolamine patches cost in California with GoodRx?", "acceptedAnswer": {"@type": "Answer", "text": "Scopolamine transdermal patches (Transderm Sc\u014dp) are prescription-only and not available as a generic. Pricing with GoodRx coupons at California pharmacies (May 2026): approximately $25\u2013$50 per single patch; 4-patch box approximately $80\u2013$150. Prices vary by pharmacy \u2014 CVS, Walgreens, Walmart Pharmacy, and Costco carry scopolamine patches in most California locations. The $79 TeleDirectMD visit fee is separate from the patch cost."}}, {"@type": "Question", "name": "What are the side effects of scopolamine patches?", "acceptedAnswer": {"@type": "Answer", "text": "Common scopolamine patch side effects: dry mouth (most common, affecting approximately 30% of users \u2014 carry water); drowsiness or grogginess (less severe than oral antihistamines for most users); blurred vision or mydriasis (dilated pupil) especially if patch touches eye; dizziness; confusion (more likely in elderly). Less common: urinary retention (particularly in men with enlarged prostate), skin irritation at application site. Post-patch rebound: some users experience nausea after patch removal following prolonged use \u2014 removing patch gradually or wearing the patch until return to stable land is recommended."}}, {"@type": "Question", "name": "What over-the-counter motion sickness medications are available in California?", "acceptedAnswer": {"@type": "Answer", "text": "Several effective OTC options are available at California pharmacies without a prescription: meclizine 25 mg (Bonine, Antivert) \u2014 the AAFP's preferred OTC agent, mild sedation, taken 1 hour before travel; dimenhydrinate 50 mg (Dramamine) \u2014 classic OTC choice, more sedating than meclizine; diphenhydramine 25\u201350 mg (Benadryl) \u2014 available OTC but highly sedating, not appropriate for drivers. Ginger supplements (ginger root capsules or ginger candy) have some evidence for mild motion sickness prevention and are available at California natural health retailers. Physician can prescribe meclizine for insurance coverage if needed."}}, {"@type": "Question", "name": "Is motion sickness more common in migraineurs?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. People with migraine have significantly higher rates of motion sickness susceptibility \u2014 approximately 50\u201360% of migraineurs report significant motion sickness compared to approximately 20\u201330% of non-migraineurs. Both conditions involve vestibular supersensitivity and central sensitization. The physician assesses for migraine history at the motion sickness visit, as it may influence treatment selection \u2014 scopolamine is appropriate for both conditions, and some migraine preventives may also reduce motion sickness susceptibility."}}, {"@type": "Question", "name": "Does California telehealth law allow prescription scopolamine without an in-person visit?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. California Business and Professions Code Section 2290.5 does not require a prior in-person visit for telehealth prescribing of non-controlled medications. Scopolamine patches are not controlled substances under federal or California law and can be prescribed via a California video visit after thorough contraindication screening. The Medical Board of California holds telehealth physicians to the same standard of care as in-person physicians \u2014 which TeleDirectMD satisfies through comprehensive history-taking and contraindication review."}}, {"@type": "Question", "name": "When does motion sickness require in-person evaluation instead of telehealth?", "acceptedAnswer": {"@type": "Answer", "text": "Motion sickness prevention for a planned travel event is appropriate for telehealth evaluation. However, seek in-person evaluation for: persistent vertigo not triggered by motion (possible labyrinthitis, BPPV, or Meniere's disease); nausea and vomiting with no clear motion trigger (exclude central causes); new onset dizziness in an older adult (possible TIA/stroke); or hearing loss with dizziness (possible acoustic neuroma or Meniere's). These conditions require ENT or neurology evaluation, vestibular function testing, and possibly imaging."}}, {"@type": "Question", "name": "What is the best strategy for motion sickness on California's winding mountain roads?", "acceptedAnswer": {"@type": "Answer", "text": "For mountain driving motion sickness on routes like Sierra Nevada roads, Big Sur Highway 1, or Angeles Crest Highway, the AAFP recommends: sit in the front passenger seat (less motion than rear seats); focus gaze on the road horizon ahead rather than surrounding terrain; avoid reading or phone use while in motion; keep windows cracked for fresh air; eat a light meal before travel (neither fasting nor overeating); consider over-the-counter meclizine 25\u201350 mg one hour before departure. For severe or chronic mountain-road motion sickness, a prescription scopolamine patch (applied the night before travel) provides the most reliable prevention. $79 TeleDirectMD visit includes travel preparation counseling."}}, {"@type": "Question", "name": "Does California insurance cover motion sickness treatment visits at TeleDirectMD?", "acceptedAnswer": {"@type": "Answer", "text": "California Assembly Bill 744 (2019), codified in Insurance Code \u00a710123.85, requires commercial health plans to reimburse telehealth visits on the same basis as in-person visits. Aetna commercial plans are active in California as of April 30, 2026; UnitedHealthcare Commercial is approved effective May 29, 2026. Anthem Blue Cross and Cigna are pending enrollment. For patients without in-network insurance, the self-pay rate is $79 per visit. Scopolamine patches are prescription-only and their pharmacy cost is separate from the visit fee \u2014 GoodRx coupons are recommended to reduce patch cost at California pharmacies."}}]}, {"@context": "https://schema.org", "@type": "HowTo", "name": "How to Get Motion Sickness \u2014 Scopolamine and Antiemetic Treatment Online in California", "description": "Three steps to receive motion sickness \u2014 scopolamine and antiemetic treatment evaluation and, if appropriate, a prescription from a California-licensed board-certified physician.", "totalTime": "PT30M", "estimatedCost": {"@type": "MonetaryAmount", "currency": "USD", "value": "79"}, "step": [{"@type": "HowToStep", "position": 1, "name": "Book your video visit", "text": "Visit teledirectmd.com and select California Motion Sickness Treatment treatment. No referral needed. Self pay $79. Many visits available same day.", "url": "https://teledirectmd.com/book-online"}, {"@type": "HowToStep", "position": 2, "name": "See a California-licensed MD by secure video", "text": "Connect with a board-certified Family Medicine physician licensed in California. The physician reviews your symptoms, history, and red-flag screening. Consent per CA B&P Section 2290.5 confirmed.", "url": "https://teledirectmd.com/ca/motion-sickness-treatment-online/"}, {"@type": "HowToStep", "position": 3, "name": "Receive your treatment plan and e-prescription", "text": "If medication is appropriate, a California-compliant e-prescription is sent to your chosen pharmacy during or after the visit.", "url": "https://teledirectmd.com/ca/motion-sickness-treatment-online/"}]}, {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "TeleDirectMD", "item": "https://teledirectmd.com"}, {"@type": "ListItem", "position": 2, "name": "California", "item": "https://teledirectmd.com/ca/"}, {"@type": "ListItem", "position": 3, "name": "Motion Sickness \u2014 Scopolamine and Antiemetic Treatment Online in California", "item": "https://teledirectmd.com/ca/motion-sickness-treatment-online/"}]}];

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

export default function CaMotionSicknessTreatmentOnline() {
  const pid = 'ca-motion-sickness-treatment-online';

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
            <span aria-current="page">Motion Sickness — Scopolamine and Antiemetic Treatment Online</span>
          </div>
        </nav>

        {/* ─── 1) HERO ────────────────────────────────────────────────────── */}
        <section className="tdmd-hero" id={`${pid}-hero`}>
          <div className="tdmd-container">
            <div className="tdmd-hero-grid">
              <div className="tdmd-hero-copy">
                <h1 data-speakable="true">Motion Sickness Treatment Online in California</h1>
                <p className="tdmd-hero-sub" data-speakable="true">
                  California adult care by secure video visit. Self pay $79 · Aetna in-network · UHC Commercial approved · AAFP evidence-based motion sickness management · CA B&P §2290.5 compliant.
                </p>
                <p>
                  Motion Sickness Treatment is a condition commonly evaluated and, when appropriate, treated via telehealth. TeleDirectMD uses a safety-first approach, screening for red-flag symptoms that require in-person or emergency care before determining whether treatment by video visit is appropriate. This page is for adults located in California, including Los Angeles, San Diego, San Jose, San Francisco, Fresno, Sacramento, Long Beach, Oakland, Bakersfield, Anaheim, and surrounding areas.
                </p>

                {/* v3: Inline opener paragraph — replaces CitableSummaryBlock */}
                <div className="tdmd-condition-opener" id={`${pid}-opening`}>
                  <p>
                    <strong>Can I get motion sickness — scopolamine and antiemetic treatment online in California?</strong> Yes. <a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=2290.5.&lawCode=BPC" rel="noopener" target="_blank">California Business and Professions Code Section 2290.5</a> — the Telehealth Advancement Act — permits licensed physicians to deliver care via synchronous video telehealth without a prior in-person visit. TeleDirectMD physicians are licensed in California and are held to the same standard of care as in-person physicians by the <a href="https://www.mbc.ca.gov/Resources/Medical-Resources/telehealth.aspx" rel="noopener" target="_blank">Medical Board of California</a>. Adults 18+ located in California can book a same-day video visit. Self pay is $79. <a href="/insurance/">Aetna is in-network</a> as of April 30, 2026; UnitedHealthcare Commercial approved May 29, 2026.
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

                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> T75.3XXA (Motion sickness, initial encounter)</p>
              </div>

              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>Online MD-Only Motion Sickness Treatment Care in California</h2>
                  <ul>
                    <li>Fast evaluation for motion sickness — scopolamine and antiemetic treatment symptoms</li>
                    <li>Red-flag screening for serious complications requiring in-person care</li>
                    <li>Guideline-based treatment per AAFP</li>
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
            <h2>Motion Sickness — Scopolamine and Antiemetic Treatment Telehealth Eligibility Checklist for California</h2>
            <p><strong>You are likely eligible for a TeleDirectMD video visit if ALL of these apply to you:</strong></p>
            <div className="tdmd-ca-cond__dual">
              <div className="tdmd-ca-cond__dual-card tdmd-ca-cond__dual-card--good">
                <h3>&#10003; You Are Eligible If</h3>
                <ul>
                  <li>Adult 18+ located in California at time of visit</li>
                  <li>Motion sickness prevention for planned travel (boat, car, plane, VR exposure)</li>
                  <li>Seeking scopolamine patch prescription or refill for upcoming travel</li>
                  <li>Prior use of OTC agents (meclizine, dimenhydrinate) with suboptimal response</li>
                  <li>No contraindications to anticholinergics (glaucoma, BPH, significant anticholinergic burden) on history</li>
                  <li>Migraineur with motion sickness — treatment coordination appropriate by video</li>
                </ul>
              </div>
              <div className="tdmd-ca-cond__dual-card tdmd-ca-cond__dual-card--alert">
                <h3>&#10007; Seek In-Person or Emergency Care If</h3>
                <ul>
                  <li>Persistent vertigo NOT triggered by motion — possible labyrinthitis, BPPV, or Meniere's disease — in-person ENT evaluation</li>
                  <li>Nausea and vomiting with no clear motion trigger — exclude central or abdominal causes in person</li>
                  <li>New onset dizziness in an older adult — possible TIA or stroke — call 911 or go to the ER</li>
                  <li>Hearing loss with dizziness — possible acoustic neuroma or Meniere's disease — in-person neurology/ENT evaluation</li>
                  <li>Narrow-angle glaucoma — scopolamine contraindicated — ophthalmologist clearance required</li>
                  <li>Urinary retention or BPH — anticholinergics (scopolamine) contraindicated or require careful assessment</li>
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
            <h2>California Telehealth Law and Your Motion Sickness — Scopolamine and Antiemetic Treatment Visit</h2>

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

            <h3>Are motion sickness — scopolamine and antiemetic treatment medications controlled substances under California law?</h3>
            <p>
              Scopolamine (Transderm Scōp), meclizine, dimenhydrinate, and ondansetron are not controlled substances. They can be prescribed via California telehealth and transmitted electronically to any California pharmacy under Assembly Bill 2789. California requires all prescriptions to be issued electronically under Assembly Bill 2789 (effective January 1, 2022), per the <a href="https://www.mbc.ca.gov/News/" rel="noopener" target="_blank">Medical Board of California</a>. TeleDirectMD does not prescribe controlled substances in any state.
            </p>
          </div>
        </section>

        {/* ─── 4) HOW IT WORKS ─────────────────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-how-it-works`} itemScope itemType="https://schema.org/HowTo">
          <div className="tdmd-container">
            <h2 itemProp="name">How Online Motion Sickness — Scopolamine and Antiemetic Treatment Works in California</h2>
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
            <h2>How Common Is Motion Sickness Treatment in California?</h2>
            <p>
              Motion sickness affects approximately 33% of adults in mildly provocative conditions and nearly 100% in extreme conditions per AAFP. California's geography generates diverse motion sickness scenarios: Pacific Ocean boating and whale-watching tours departing from Santa Barbara, Monterey, San Francisco, and Los Angeles; Channel Islands National Park ferry crossings; cruise ship departures from Port of Los Angeles and San Francisco; winding Highway 1 along Big Sur; Sierra Nevada mountain roads; and virtual reality environments in Silicon Valley tech hubs. Scopolamine prescriptions peak in California in summer and holiday travel seasons. — <a href="https://www.aafp.org/pubs/afp/issues/2014/0501/p648.html" rel="noopener" target="_blank">AAFP — Motion Sickness: A Review of Pathogenesis, Prevention, and Treatment</a>.
            </p>
            <p>
              Clinical guidance for motion sickness — scopolamine and antiemetic treatment is provided by <a href="https://www.aafp.org/pubs/afp/issues/2014/0501/p648.html" rel="noopener" target="_blank">AAFP</a> through the AAFP Review on Motion Sickness Management + CDC Yellow Book 2024 — Motion Sickness. TeleDirectMD follows these guidelines on every patient visit.
            </p>
            <h3>What causes motion sickness treatment and who is most at risk in California?</h3>
            <p>
              Motion Sickness Treatment affects California adults across all demographics, though certain populations face higher risk based on the specific condition. The physician reviews your individual risk factors at each visit. Telehealth is appropriate for adults 18 and older with mild to moderate presentations who do not have red-flag symptoms requiring immediate in-person evaluation.
            </p>
          </div>
        </section>

        {/* ─── 6) COST & INSURANCE ─────────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-cost`}>
          <div className="tdmd-container">
            <h2>Motion Sickness — Scopolamine and Antiemetic Treatment Cost &amp; Insurance in California</h2>
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

              <div className="tdmd-price-chart" role="group" aria-label="Typical Motion Sickness Treatment cost comparison">
                <h3>Typical Motion Sickness Treatment Visit Cost in California</h3>
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
            <h2>Motion Sickness — Scopolamine and Antiemetic Treatment Medication Options and Costs in California</h2>
            <p>
              Medications for motion sickness — scopolamine and antiemetic treatment are selected based on current guidelines from <a href="https://www.aafp.org/pubs/afp/issues/2014/0501/p648.html" rel="noopener" target="_blank">AAFP</a>, patient history, allergies, and relevant contraindications assessed at the visit. GoodRx-verified pricing is shown below.
            </p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Motion Sickness — Scopolamine and Antiemetic Treatment medication options and GoodRx prices">
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
                    <td><strong>Scopolamine transdermal patch 1 mg/72h (Transderm Scōp)</strong> · First-line</td>
                    <td>Apply 1 patch behind ear ≥4 hours before travel; replace every 72 hours; remove promptly after travel</td>
                    <td><a href="https://www.goodrx.com/scopolamine" target="_blank" rel="noopener">~$25–$50 per patch GoodRx; ~$80–$150 for 4-patch box; Rx required</a></td>
                    <td>Most effective pharmacotherapy per AAFP for prolonged exposures (ocean cruises, extended boating). Screen for narrow-angle glaucoma, urinary retention, anticholinergic drug burden before prescribing. Avoid in elderly with high anticholinergic sensitivity.</td>
                  </tr>
                  <tr className="tdmd-ca-uti__med-firstline">
                    <td><strong>Meclizine 25 mg (Bonine, Antivert — OTC)</strong> · First-line</td>
                    <td>25–50 mg 1 hour before travel; may repeat q24h</td>
                    <td><a href="https://www.goodrx.com/meclizine" target="_blank" rel="noopener">~$10–$20 OTC</a></td>
                    <td>AAFP preferred OTC agent. Less sedating than dimenhydrinate or diphenhydramine. Available OTC — physician can prescribe for insurance coverage or higher doses.</td>
                  </tr>
                  <tr>
                    <td><strong>Dimenhydrinate 50 mg (Dramamine — OTC)</strong></td>
                    <td>50–100 mg 30 min before travel; repeat q4–6h</td>
                    <td><a href="https://www.goodrx.com/dimenhydrinate" target="_blank" rel="noopener">~$8–$18 OTC</a></td>
                    <td>Classic OTC motion sickness agent. More sedating than meclizine — avoid when driving. Available OTC without prescription.</td>
                  </tr>
                  <tr>
                    <td><strong>Ondansetron 4 mg ODT (generic Zofran) — off-label</strong></td>
                    <td>4 mg orally disintegrating tablet before travel or at nausea onset</td>
                    <td><a href="https://www.goodrx.com/ondansetron" target="_blank" rel="noopener">~$15–$35 / 8 tablets GoodRx (generic)</a></td>
                    <td>Off-label for motion sickness. Useful when anticholinergic side effects (dry mouth, urinary retention, blurred vision) are a concern. Non-sedating. QTc prolongation risk — review ECG history.</td>
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
            <p>For most adults with mild to moderate motion sickness — scopolamine and antiemetic treatment without red-flag symptoms, a video visit is appropriate and convenient. Some situations require in-person evaluation. Use the comparison below to determine the right care pathway for you.</p>
            <div className="tdmd-ca-cond__dual">
              <div className="tdmd-ca-cond__dual-card tdmd-ca-cond__dual-card--good">
                <h3>&#10003; Use TeleDirectMD (telehealth) if</h3>
                <ul>
                  <li>Adult 18+ located in California at time of visit</li>
                  <li>Motion sickness prevention for planned travel (boat, car, plane, VR exposure)</li>
                  <li>Seeking scopolamine patch prescription or refill for upcoming travel</li>
                  <li>Prior use of OTC agents (meclizine, dimenhydrinate) with suboptimal response</li>
                  <li>No contraindications to anticholinergics (glaucoma, BPH, significant anticholinergic burden) on history</li>
                  <li>Migraineur with motion sickness — treatment coordination appropriate by video</li>
                </ul>
              </div>
              <div className="tdmd-ca-cond__dual-card tdmd-ca-cond__dual-card--alert">
                <h3>&rarr; Use in-person care if</h3>
                <ul>
                  <li>Persistent vertigo NOT triggered by motion — possible labyrinthitis, BPPV, or Meniere's disease — in-person ENT evaluation</li>
                  <li>Nausea and vomiting with no clear motion trigger — exclude central or abdominal causes in person</li>
                  <li>New onset dizziness in an older adult — possible TIA or stroke — call 911 or go to the ER</li>
                  <li>Hearing loss with dizziness — possible acoustic neuroma or Meniere's disease — in-person neurology/ENT evaluation</li>
                  <li>Narrow-angle glaucoma — scopolamine contraindicated — ophthalmologist clearance required</li>
                  <li>Urinary retention or BPH — anticholinergics (scopolamine) contraindicated or require careful assessment</li>
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
              sectionTitle="Frequently Asked Questions — Motion Sickness — Scopolamine and Antiemetic Treatment in California"
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
              <a key="acid-reflux-refills-online" className="tdmd-ca-uti__sibling" href="/ca/acid-reflux-refills-online/">
                  <span className="tdmd-ca-uti__sibling-label">Acid Reflux Refills in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Nausea and vomiting differential — GERD can exacerbate motion sickness symptoms.</span>
                </a>
              <a key="migraine-refills-online" className="tdmd-ca-uti__sibling" href="/ca/migraine-refills-online/">
                  <span className="tdmd-ca-uti__sibling-label">Migraine Refills in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Migraineurs have higher motion sickness susceptibility — shared pathophysiology.</span>
                </a>
              <a key="seasonal-allergies-treatment-online" className="tdmd-ca-uti__sibling" href="/ca/seasonal-allergies-treatment-online/">
                  <span className="tdmd-ca-uti__sibling-label">Seasonal Allergies in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Antihistamines used in both — meclizine vs. non-sedating allergy antihistamines.</span>
                </a>
              <a key="epipen-refills-online" className="tdmd-ca-uti__sibling" href="/ca/epipen-refills-online/">
                  <span className="tdmd-ca-uti__sibling-label">EpiPen Refills in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Travel preparation overlap — patients packing both EpiPen and scopolamine for trips.</span>
                </a>
              <a key="anti-aging-treatment-online" className="tdmd-ca-uti__sibling" href="/ca/anti-aging-treatment-online/">
                  <span className="tdmd-ca-uti__sibling-label">Anti-Aging Treatment in CA</span>
                  <span className="tdmd-ca-uti__sibling-why">Patients traveling for California outdoor recreation — Pacific Coast, Sierra, Catalina Island.</span>
                </a>
            </div>
          </div>
        </section>

        {/* ─── 12) PILLAR / SPOKE / CLUSTER LINKS ──────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-related`}>
          <div className="tdmd-container">
            <h2>Related Resources from TeleDirectMD</h2>
            <p>This page sits at the intersection of the <a href="/ca/">California state hub</a> and the <a href="/motion-sickness-treatment-online/">Motion Sickness Treatment national condition page</a>. Use the links below to explore insurance details, book a visit, or review other conditions.</p>
            <div className="tdmd-ca-cond__related-links" aria-label="Related resources">
              <a href="/">Home</a>
              <a href="/ca/">California (state pillar)</a>
              <a href="/motion-sickness-treatment-online/">National Motion Sickness Treatment page</a>
              <a href="/health-guides/">Motion Sickness Treatment health guides</a>
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
              <li><a href="https://www.aafp.org/pubs/afp/issues/2014/0501/p648.html" rel="noopener" target="_blank">AAFP — Motion Sickness: A Review of Pathogenesis, Prevention, and Treatment (AFP 2022)</a></li>
              <li><a href="https://wwwnc.cdc.gov/travel/yellowbook/2024/preparing/motion-sickness" rel="noopener" target="_blank">CDC Yellow Book 2024 — Motion Sickness</a></li>
              <li><a href="https://www.accessdata.fda.gov/drugsatfda_docs/label/2019/017874s048lbl.pdf" rel="noopener" target="_blank">FDA — Transderm Scōp (Scopolamine Transdermal) Prescribing Information</a></li>
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

        <WhatDoesThisCostBlock conditionSlug="motion-sickness-treatment-online" conditionName="Motion Sickness — Scopolamine and Antiemetic Treatment" stateName="California" />
        <CompareTeleDirectMDLinkRow conditionSlug="motion-sickness-treatment-online" />
        <CommonSymptomsBlock conditionSlug="motion-sickness-treatment-online" conditionName="Motion Sickness — Scopolamine and Antiemetic Treatment" />
      </div>
    </>
  );
}
