/**
 * CaUtiTreatmentOnline.js — production California × UTI condition page (v2)
 *
 * Rendered by app/[slug]/[conditionSlug]/page.js when slug === 'ca' and
 * conditionSlug === 'uti-treatment-online' (no redirect; same URL as before).
 *
 * Content is the v1 source of truth (phase1_build/ca_uti_data.json) wired
 * into the production tdmd-* design system (light + dark mode via the
 * data-theme attribute on <html>). FAQ uses the premium <FaqAccordion>
 * shared component (single source of truth for "+/−" Style A accordion).
 *
 * Header + footer are inherited from app/layout.js (SiteHeader / SiteFooter).
 *
 * Hard rules respected:
 *   • No QAPage schema — FAQPage only.
 *   • Citable summary block is visibly rendered (not hidden / not cloaked).
 *   • Physician schema includes NPI 1104323203.
 *   • No first-person prescribing language.
 *   • Only Notion-verified CA payors (Aetna Active, UHC Commercial Approved,
 *     Anthem Blue Cross Pending, Cigna Pending) plus regulatory-only
 *     references for Medi-Cal and Kaiser (explicitly NOT in-network).
 *
 * Author / E-E-A-T: visible byline + headshot + last reviewed date.
 *   Parth Bhavsar, MD · NPI 1104323203 · Family Medicine · Licensed in CA.
 */

// CitableSummaryBlock intentionally not imported on this page (v3).
// The citable Q/A is now distributed inline as the opener paragraph below the
// hero — same content, same inline citations, no fenced summary widget. Other
// pages (/about, /insurance, /faq) continue to use CitableSummaryBlock.
import FaqAccordion from '../../components/FaqAccordion';
import { WhatDoesThisCostBlock, CompareTeleDirectMDLinkRow, CommonSymptomsBlock } from '../../components/CostCompareModules';

// ────────────────────────────────────────────────────────────────────────────
// Page meta / constants
// ────────────────────────────────────────────────────────────────────────────
const PAGE_URL = 'https://teledirectmd.com/ca/uti-treatment-online/';
const PAGE_TITLE = 'UTI Treatment Online in California | TeleDirectMD';
const DATE_PUBLISHED = '2026-05-19';
const DATE_MODIFIED = '2026-05-19';
const LAST_REVIEWED = '2026-05-19';

const PHYSICIAN = {
  name: 'Parth Bhavsar, MD',
  npi: '1104323203',
  specialty: 'Family Medicine',
  licenseState: 'California',
  headshot: '/images/dr-parth-bhavsar.jpg',
  bioUrl: '/about',
};

// California payors — sourced from Notion payor enrollment (refreshed 2026-05-19)
// Aetna: Active 2026-04-30 · UHC Commercial: Approved 2026-05-29
// Anthem Blue Cross: Pending · Cigna: Pending
// Medi-Cal / Kaiser shown for regulatory clarity only (NOT in-network).
const CA_PAYORS = [
  { name: 'Aetna', status: 'Active', effective: 'April 30, 2026', inNetwork: true,
    notes: 'Commercial plans. In-network as of April 30, 2026. Verify plan eligibility with Aetna before booking.' },
  { name: 'UnitedHealthcare Commercial', status: 'Approved', effective: 'May 29, 2026', inNetwork: true,
    notes: 'Covers UHC Commercial and Medicare Advantage. Excludes Medi-Cal, Individual Exchange, and Navigate/Charter/Core plan types.' },
  { name: 'Anthem Blue Cross', status: 'Pending', effective: 'Pending determination', inNetwork: false,
    notes: 'Enrollment pending — waiting for Anthem to confirm individual-provider enrollment for telehealth. Self pay ($79) available.' },
  { name: 'Cigna', status: 'Pending', effective: 'Pending determination', inNetwork: false,
    notes: 'Pending — Telehealth Only review in progress. Self pay ($79) available.' },
  { name: 'Kaiser Permanente', status: 'Closed system', effective: '—', inNetwork: false,
    notes: 'Kaiser is a closed health system. Use Kaiser telehealth at kp.org. TeleDirectMD self pay is available but Kaiser will not reimburse out-of-network visits.' },
  { name: 'Medi-Cal', status: 'Not enrolled', effective: '—', inNetwork: false,
    notes: 'TeleDirectMD is not currently a Medi-Cal rendering provider. Find Medi-Cal telehealth providers via your managed care plan or dhcs.ca.gov.' },
];

// First-line UTI antibiotic options per IDSA + AUA guidelines.
// GoodRx prices retrieved 2026-05-18 (GoodRx national coupon prices).
const MEDICATIONS = [
  { name: 'Nitrofurantoin macrocrystals (Macrobid) 100 mg',
    regimen: '100 mg twice daily × 5 days',
    price: '~$16.76 / 14 capsules',
    priceHref: 'https://www.goodrx.com/nitrofurantoin',
    firstLine: true,
    notes: 'First-line for uncomplicated cystitis. Avoid if GFR < 45 mL/min. Not appropriate for pyelonephritis.' },
  { name: 'Trimethoprim-sulfamethoxazole DS (Bactrim DS) 160/800 mg',
    regimen: '1 tablet twice daily × 3 days',
    price: '~$8.90 / 14 tablets',
    priceHref: 'https://www.goodrx.com/sulfamethoxazole-trimethoprim',
    firstLine: true,
    notes: 'Use only when local E. coli resistance < 20%. CA resistance may be ≥ 20% — physician reviews regional surveillance data.' },
  { name: 'Fosfomycin (Monurol) 3 g',
    regimen: 'Single 3 g sachet once',
    price: '~$33.03 / 1 packet',
    priceHref: 'https://www.goodrx.com/monurol',
    firstLine: true,
    notes: 'First-line single-dose option. Useful when first-line alternatives are contraindicated or resistance is a concern.' },
  { name: 'Cephalexin 500 mg',
    regimen: '500 mg twice daily × 5–7 days',
    price: '~$10–$20 / 14 tablets',
    priceHref: 'https://www.goodrx.com/cephalexin',
    firstLine: false,
    notes: 'Second-line when first-line agents are contraindicated.' },
  { name: 'Phenazopyridine (AZO) — OTC analgesic',
    regimen: '200 mg three times daily × up to 2 days',
    price: 'Available OTC',
    priceHref: null,
    firstLine: false,
    notes: 'Not an antibiotic — for symptom relief only. May turn urine orange.' },
];

const FAQ_ITEMS = [
  { question: 'Can I get UTI treatment online in California?',
    answer: (
      <p>
        Yes. <a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=2290.5.&lawCode=BPC" rel="noopener" target="_blank">California Business and Professions Code Section 2290.5</a> — the Telehealth Advancement Act — permits licensed physicians to deliver care via synchronous video telehealth without a prior in-person visit. TeleDirectMD physicians are licensed in California and held to the same standard of care as in-person physicians by the <a href="https://www.mbc.ca.gov/Resources/Medical-Resources/telehealth.aspx" rel="noopener" target="_blank">Medical Board of California</a>. Adults 18+ located in California can book a same-day video visit. If your symptoms are consistent with uncomplicated cystitis and you pass a red-flag screening, a prescription can be sent electronically to your California pharmacy. Self pay is $79. <a href="/insurance/aetna/california/uti-treatment/">Aetna is in-network</a> as of April 30, 2026.
      </p>
    ),
  },
  { question: 'Does California require an in-person visit before telehealth?',
    answer: (
      <p>
        No. California B&amp;P Code §2290.5 does not require a prior in-person visit before receiving telehealth services. A California-licensed physician can establish a new patient relationship and prescribe appropriate non-controlled medications through a synchronous video visit. Verbal or written patient consent for telehealth must be obtained and documented. See our <a href="/health-guides/telehealth-uti-clinical-evidence/">telehealth UTI clinical evidence guide</a> for a deeper review of the evidence base.
      </p>
    ),
  },
  { question: 'Is my Aetna plan in California in-network with TeleDirectMD?',
    answer: (
      <p>
        Aetna became an active in-network payor for TeleDirectMD in California effective April 30, 2026. If you hold an Aetna commercial plan in California, you may be able to use your in-network benefits. Always verify current in-network status directly with Aetna before your visit, as plan eligibility varies by specific plan type. See <a href="/insurance/aetna/california/uti-treatment/">Aetna × California × UTI coverage details</a>. Self pay ($79) is available regardless of insurance status.
      </p>
    ),
  },
  { question: 'Is UnitedHealthcare in-network with TeleDirectMD in California?',
    answer: (
      <p>
        UnitedHealthcare Commercial was approved for California effective May 29, 2026, covering commercial plans and Medicare Advantage. This excludes Medi-Cal, Individual Exchange plans, and Navigate/Charter/Core plan types. Anthem Blue Cross and Cigna enrollments are currently pending. Verify your specific UHC plan eligibility before booking, or view all <a href="/insurance">insurance options</a>.
      </p>
    ),
  },
  { question: 'Will Medi-Cal cover my TeleDirectMD visit in California?',
    answer: (
      <p>
        TeleDirectMD is not currently enrolled as a Medi-Cal provider. <a href="https://www.dhcs.ca.gov/provgovpart/Pages/TelehealthFAQ.aspx" rel="noopener" target="_blank">California DHCS</a> confirms that Medi-Cal covers telehealth for physical health services when the provider is an enrolled Medi-Cal rendering provider. If you have Medi-Cal, you can use the $79 self-pay rate, or find a Medi-Cal-enrolled telehealth provider through your managed care plan or the DHCS directory at dhcs.ca.gov.
      </p>
    ),
  },
  { question: 'What if I am on a Kaiser Permanente plan in California?',
    answer: (
      <p>
        Kaiser Permanente operates as a closed health system in California. TeleDirectMD is not part of the Kaiser network. Use Kaiser&apos;s telehealth services at kp.org or call your Kaiser advice line. TeleDirectMD&apos;s $79 self-pay option is available to Kaiser members, but Kaiser will not reimburse out-of-network visits.
      </p>
    ),
  },
  { question: 'Why is antibiotic selection important in California specifically?',
    answer: (
      <p>
        National surveillance data show that <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8664433/" rel="noopener" target="_blank">25.4% of E. coli isolates from community-acquired UTIs are nonsusceptible to trimethoprim-sulfamethoxazole (TMP-SMX), and 21.1% are nonsusceptible to fluoroquinolones</a> — both above the 20% IDSA threshold. The <a href="https://www.cdph.ca.gov/Programs/CHCQ/HAI/Pages/AntimicrobialResistanceLandingPage.aspx" rel="noopener" target="_blank">California Department of Public Health</a> reports that antimicrobial-resistant infections cause roughly 360,000 illnesses and nearly 4,500 deaths among Californians each year. TeleDirectMD applies evidence-based antibiotic stewardship, favoring nitrofurantoin and fosfomycin as first-line agents when clinically appropriate. See our <a href="/health-guides/urinary-tract-infection-uti-guide/">UTI guide</a> for more detail.
      </p>
    ),
  },
  { question: "Does California's telehealth parity law mean my insurance must cover my visit?",
    answer: (
      <p>
        California AB 744 (2019), codified in <a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=10123.85.&lawCode=INS" rel="noopener" target="_blank">California Insurance Code §10123.85</a>, requires commercial health plans to reimburse telehealth on the same basis as in-person services. Parity applies only when the provider is already in-network with your specific plan. Currently, Aetna (active April 30, 2026) and UnitedHealthcare Commercial (active May 29, 2026) are in-network in California for TeleDirectMD.
      </p>
    ),
  },
  { question: 'Does California law protect my telehealth visit privacy?',
    answer: (
      <p>
        Yes. California B&amp;P Code §2290.5 explicitly states that all California laws regarding the confidentiality of health care information apply equally to telehealth interactions. Federal HIPAA protections also apply. TeleDirectMD uses HIPAA-compliant secure video platforms for all visits.
      </p>
    ),
  },
  { question: 'How quickly will my prescription reach a California pharmacy?',
    answer: (
      <p>
        California requires all prescriptions to be issued electronically under Assembly Bill 2789 (effective January 1, 2022), per the <a href="https://www.mbc.ca.gov/News/" rel="noopener" target="_blank">Medical Board of California</a>. If a prescription is appropriate, TeleDirectMD sends an e-prescription electronically to your chosen California pharmacy — CVS, Walgreens, Rite Aid, Walmart, Safeway, or another California pharmacy — during or immediately after your visit. Most California pharmacies fill the prescription within one to four hours.
      </p>
    ),
  },
  { question: 'What antibiotics are used for UTI treatment, and what do they cost at California pharmacies?',
    answer: (
      <p>
        First-line options per IDSA and AUA guidelines include: nitrofurantoin macrocrystals 100 mg twice daily × 5 days (GoodRx ~$16.76 / 14 capsules as of May 2026); trimethoprim-sulfamethoxazole DS twice daily × 3 days when local resistance &lt; 20% (~$8.90 / 14 tablets); and fosfomycin 3 g as a single dose (~$33.03). The actual antibiotic depends on your allergies, kidney function, and resistance considerations assessed by the physician. See the full <a href="#ca-uti-treatment-online-medications">medication table</a> below.
      </p>
    ),
  },
  { question: 'When is UTI dangerous and when should I go to the ER in California?',
    answer: (
      <p>
        UTI is dangerous when you have fever above 38°C (100.4°F) with flank or back pain — a possible kidney infection. Other red flags: repeated vomiting, severe illness, confusion, fainting, pregnancy with urinary symptoms, inability to urinate, or rapidly worsening symptoms. Go to the nearest urgent care or emergency room. Do not use TeleDirectMD if any red flag is present.
      </p>
    ),
  },
  { question: 'Is TeleDirectMD appropriate for recurrent UTIs in California?',
    answer: (
      <p>
        Recurrent UTIs — 2 or more in 6 months or 3 or more in 12 months per <a href="https://www.auanet.org/guidelines-and-quality/guidelines/recurrent-uti" rel="noopener" target="_blank">AUA 2024 guidelines</a> — benefit from in-person urine culture testing and evaluation for contributing factors. TeleDirectMD can discuss prevention strategies and direct you to a California primary care physician or urologist. In-person resources include Planned Parenthood California (plannedparenthood.org/get-care).
      </p>
    ),
  },
];

// CA-condition siblings (6 most clinically related to UTI, all verified active)
const CA_SIBLINGS = [
  { slug: 'yeast-infection-treatment-online', label: 'Yeast Infection Treatment in CA', why: 'Often confused with UTI — vaginal symptoms can overlap with dysuria.' },
  { slug: 'bv-treatment-online', label: 'BV (Bacterial Vaginosis) Treatment in CA', why: 'Genitourinary differential when discharge is present.' },
  { slug: 'chlamydia-treatment-online', label: 'Chlamydia Treatment in CA', why: 'STI differential for dysuria, especially in younger adults.' },
  { slug: 'birth-control-refills-online', label: 'Birth Control Refills in CA', why: "Women's health adjacent — often added to the same visit." },
  { slug: 'cellulitis-treatment-online', label: 'Cellulitis Treatment in CA', why: 'Other antibiotic-driven outpatient infection.' },
];

// ────────────────────────────────────────────────────────────────────────────
// JSON-LD schema (MedicalWebPage + FAQPage + Physician + Breadcrumb + HowTo)
// Anti-cloaking: every Q/A here is also visibly rendered in the FAQ.
// ────────────────────────────────────────────────────────────────────────────
function buildSchemas() {
  const medicalWebPage = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: PAGE_TITLE,
    url: PAGE_URL,
    description: 'UTI treatment by secure video visit for California adults. Board-certified Family Medicine physician. California telehealth law compliant. Aetna in-network. UHC Commercial approved. Self pay $79. Evidence-based antibiotic stewardship.',
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    inLanguage: 'en-US',
    about: {
      '@type': 'MedicalCondition',
      name: 'Urinary Tract Infection',
      alternateName: ['UTI', 'Bladder Infection', 'Cystitis', 'Acute Uncomplicated Cystitis'],
      code: { '@type': 'MedicalCode', code: 'N39.0', codingSystem: 'ICD-10-CM' },
    },
    medicalAudience: {
      '@type': 'MedicalAudience',
      audienceType: 'Patient',
      geographicArea: { '@type': 'AdministrativeArea', name: 'California' },
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
      licensedIn: PHYSICIAN.licenseState,
      worksFor: { '@type': 'MedicalOrganization', name: 'TeleDirectMD', url: 'https://teledirectmd.com' },
      sameAs: ['https://npiregistry.cms.hhs.gov/provider-view/1104323203', 'https://teledirectmd.com/about/'],
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      // v3: opener prose lives at #ca-uti-opening; author byline + last-reviewed
      // line sit inside .tdmd-ca-uti__byline within the hero. Both are flagged
      // speakable so voice assistants and AI extractors can quote the opener
      // paragraph together with its author attribution.
      cssSelector: [
        '#ca-uti-opening',
        '#ca-uti-opening p',
        '.tdmd-ca-uti__byline',
        '#ca-uti-treatment-online-faq',
      ],
    },
  };

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      // Anti-cloaking: text matches what is visibly rendered (plain-text form).
      acceptedAnswer: { '@type': 'Answer', text: faq.answerPlain || extractPlain(faq.answer) },
    })),
  };

  const howTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Get UTI Treatment Online in California',
    description: 'Three steps to receive UTI evaluation and, if appropriate, an antibiotic prescription from a California-licensed board-certified physician.',
    totalTime: 'PT30M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '79' },
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Book your video visit', text: 'Visit teledirectmd.com and select California UTI treatment. No referral needed. Self pay $79. Many visits available same day.', url: 'https://teledirectmd.com/book-online' },
      { '@type': 'HowToStep', position: 2, name: 'See a California-licensed MD by secure video', text: 'Connect with a board-certified Family Medicine physician licensed in California. The physician reviews symptoms, history, risk factors, and performs red-flag screening. Consent per CA B&P Section 2290.5 confirmed.', url: PAGE_URL },
      { '@type': 'HowToStep', position: 3, name: 'Receive your treatment plan and e-prescription', text: 'If medication is appropriate, a California-compliant e-prescription is sent to your chosen pharmacy during or after the visit. Follow-up instructions provided regardless of treatment choice.', url: PAGE_URL },
    ],
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'TeleDirectMD', item: 'https://teledirectmd.com' },
      { '@type': 'ListItem', position: 2, name: 'California', item: 'https://teledirectmd.com/ca/' },
      { '@type': 'ListItem', position: 3, name: 'UTI Treatment Online in California', item: PAGE_URL },
    ],
  };

  return [medicalWebPage, faqPage, howTo, breadcrumb];
}

// Best-effort plain-text extraction for FAQPage JSON-LD (must mirror visible)
function extractPlain(node) {
  if (node == null) return '';
  if (typeof node === 'string') return node;
  if (Array.isArray(node)) return node.map(extractPlain).join('');
  if (node.props && node.props.children) return extractPlain(node.props.children);
  return '';
}

// ────────────────────────────────────────────────────────────────────────────
// v3 inline opener (replaces v2 CitableSummaryBlock)
//
// The same Q/A answer that previously lived in a fenced card is now distributed
// inline as the opening paragraph of the main clinical content (rendered just
// below the hero, before the eligibility checklist). It is still:
//   • self-contained (readable standalone, no surrounding context required)
//   • cited inline (CA B&P §2290.5, Aetna in-network anchor)
//   • mirrored in the FAQPage JSON-LD (FAQ_ITEMS[0])
//   • flagged as speakable via #ca-uti-opening cssSelector
//   • visually rendered as physician-authored editorial prose, not a card
// ────────────────────────────────────────────────────────────────────────────

// ────────────────────────────────────────────────────────────────────────────
// CA UTI page-specific styles — extend the tdmd-* system. Scoped to the
// .tdmd-ca-uti wrapper so they cannot leak to other condition pages.
// ────────────────────────────────────────────────────────────────────────────
const CA_UTI_CSS = `
.tdmd-ca-uti{color:var(--tdmd-text);}
.tdmd-ca-uti .tdmd-ca-uti__byline{display:flex;align-items:center;gap:1rem;flex-wrap:wrap;margin:1rem 0 0;padding:0.85rem 1rem;background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:var(--tdmd-radius,18px);}
.tdmd-ca-uti .tdmd-ca-uti__byline img{width:56px;height:56px;border-radius:50%;object-fit:cover;border:2px solid var(--tdmd-teal);flex-shrink:0;background:#fff;}
.tdmd-ca-uti .tdmd-ca-uti__byline-text{display:flex;flex-direction:column;gap:0.15rem;font-size:0.92rem;line-height:1.45;}
.tdmd-ca-uti .tdmd-ca-uti__byline-name{font-weight:700;color:var(--tdmd-navy);}
.tdmd-ca-uti .tdmd-ca-uti__byline-meta{color:var(--tdmd-muted);font-size:0.85rem;}
.tdmd-ca-uti .tdmd-ca-uti__byline a{color:var(--tdmd-teal);font-weight:600;text-decoration:underline;text-underline-offset:2px;}

.tdmd-ca-uti .tdmd-ca-uti__pillrow{display:flex;flex-wrap:wrap;gap:0.5rem;margin:0.75rem 0 0;}
.tdmd-ca-uti .tdmd-ca-uti__pill{display:inline-flex;align-items:center;gap:0.35rem;padding:0.3rem 0.7rem;border-radius:999px;background:var(--tdmd-bg-soft);border:1px solid var(--tdmd-border);font-size:0.82rem;color:var(--tdmd-text);font-weight:600;}
.tdmd-ca-uti .tdmd-ca-uti__pill--good{background:#E6F4EA;border-color:#A3D7B0;color:#1F6B36;}
:root[data-theme="dark"] .tdmd-ca-uti .tdmd-ca-uti__pill--good{background:#1a2e22;border-color:#2c5538;color:#7dd99a;}

.tdmd-ca-uti .tdmd-ca-uti__cta-strip{display:flex;justify-content:space-between;align-items:center;gap:1.25rem;flex-wrap:wrap;background:linear-gradient(135deg,var(--tdmd-teal) 0%,var(--tdmd-navy) 100%);color:#fff;padding:1.25rem 1.5rem;border-radius:var(--tdmd-radius,18px);margin:1.25rem 0;box-shadow:var(--tdmd-shadow);}
.tdmd-ca-uti .tdmd-ca-uti__cta-strip p{margin:0;font-size:1.05rem;font-weight:700;}
.tdmd-ca-uti .tdmd-ca-uti__cta-strip small{display:block;font-weight:400;margin-top:0.2rem;opacity:0.92;font-size:0.86rem;}
.tdmd-ca-uti .tdmd-ca-uti__cta-strip .tdmd-ca-uti__cta-btn{background:#fff;color:var(--tdmd-navy);font-weight:700;padding:0.7rem 1.4rem;border-radius:999px;text-decoration:none;white-space:nowrap;}
.tdmd-ca-uti .tdmd-ca-uti__cta-strip .tdmd-ca-uti__cta-btn:hover{background:#FFF6F2;color:var(--tdmd-accent);}

.tdmd-ca-uti .tdmd-ca-uti__dual{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1.25rem;margin-top:1rem;}
.tdmd-ca-uti .tdmd-ca-uti__dual-card{background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:var(--tdmd-radius,18px);padding:1.1rem 1.25rem;box-shadow:var(--tdmd-shadow);}
.tdmd-ca-uti .tdmd-ca-uti__dual-card--good{border-left:5px solid #2E7D52;}
.tdmd-ca-uti .tdmd-ca-uti__dual-card--alert{border-left:5px solid var(--tdmd-accent);}
.tdmd-ca-uti .tdmd-ca-uti__dual-card h3{margin:0 0 0.5rem;font-size:1.1rem;color:var(--tdmd-navy);}
.tdmd-ca-uti .tdmd-ca-uti__dual-card ul{margin:0;padding-left:1.1rem;line-height:1.55;}
.tdmd-ca-uti .tdmd-ca-uti__dual-card li{margin:0.25rem 0;}
@media (max-width:720px){.tdmd-ca-uti .tdmd-ca-uti__dual{grid-template-columns:minmax(0,1fr);}}

.tdmd-ca-uti .tdmd-ca-uti__sibling-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:0.85rem;margin-top:1rem;}
.tdmd-ca-uti .tdmd-ca-uti__sibling{display:flex;flex-direction:column;gap:0.25rem;padding:0.9rem 1rem;background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:14px;color:var(--tdmd-text);text-decoration:none;transition:.2s;}
.tdmd-ca-uti .tdmd-ca-uti__sibling:hover{border-color:var(--tdmd-teal);transform:translateY(-2px);box-shadow:var(--tdmd-shadow);}
.tdmd-ca-uti .tdmd-ca-uti__sibling-label{font-weight:700;color:var(--tdmd-navy);}
.tdmd-ca-uti .tdmd-ca-uti__sibling-why{font-size:0.86rem;color:var(--tdmd-muted);}

.tdmd-ca-uti .tdmd-ca-uti__related-links{display:flex;flex-wrap:wrap;gap:0.4rem 0.85rem;margin-top:0.75rem;font-size:0.95rem;}
.tdmd-ca-uti .tdmd-ca-uti__related-links a{color:var(--tdmd-teal);font-weight:600;text-decoration:underline;text-underline-offset:2px;}

.tdmd-ca-uti .tdmd-ca-uti__payor-pill{display:inline-block;padding:0.15rem 0.55rem;border-radius:999px;font-size:0.78rem;font-weight:700;letter-spacing:0.02em;}
.tdmd-ca-uti .tdmd-ca-uti__payor-pill--good{background:#E6F4EA;color:#1F6B36;}
.tdmd-ca-uti .tdmd-ca-uti__payor-pill--pending{background:#FEF3C7;color:#7A5A09;}
.tdmd-ca-uti .tdmd-ca-uti__payor-pill--none{background:#FEE2E2;color:#8A1F1F;}
:root[data-theme="dark"] .tdmd-ca-uti .tdmd-ca-uti__payor-pill--good{background:#1a2e22;color:#7dd99a;}
:root[data-theme="dark"] .tdmd-ca-uti .tdmd-ca-uti__payor-pill--pending{background:#3a2e10;color:#f0c870;}
:root[data-theme="dark"] .tdmd-ca-uti .tdmd-ca-uti__payor-pill--none{background:#3a1717;color:#f3a0a0;}

.tdmd-ca-uti .tdmd-ca-uti__med-firstline{background:linear-gradient(90deg,#E6F4EA,transparent);font-weight:600;}
:root[data-theme="dark"] .tdmd-ca-uti .tdmd-ca-uti__med-firstline{background:linear-gradient(90deg,#1a2e22,transparent);}

/* v3 — inline opener paragraph (replaces the v2 citable-summary card). */
.tdmd-ca-uti .tdmd-condition-opener{margin:1.5rem 0 0.5rem;}
.tdmd-ca-uti .tdmd-condition-opener p{margin:0;font-size:1.05rem;line-height:1.7;color:var(--tdmd-text);}
.tdmd-ca-uti .tdmd-condition-opener p strong{color:var(--tdmd-navy);}
.tdmd-ca-uti .tdmd-condition-opener p a{color:var(--tdmd-teal);text-decoration:underline;text-underline-offset:2px;font-weight:600;}
.tdmd-ca-uti .tdmd-condition-opener p a:hover{color:var(--tdmd-navy);}
.tdmd-ca-uti .tdmd-condition-opener__meta{display:block;margin-top:0.75rem;font-size:0.85rem;color:var(--tdmd-muted);font-style:italic;}
.tdmd-ca-uti .tdmd-condition-opener__meta a{color:var(--tdmd-teal);text-decoration:none;font-style:normal;font-weight:600;}
`;

// ────────────────────────────────────────────────────────────────────────────
// Main page
// ────────────────────────────────────────────────────────────────────────────
export default function CaUtiTreatmentOnline() {
  const schemas = buildSchemas();
  const pid = 'ca-uti-treatment-online';
  const today = LAST_REVIEWED;

  // Top 10 California cities for explicit local-SEO mention
  const caCities = ['Los Angeles', 'San Diego', 'San Jose', 'San Francisco', 'Fresno',
    'Sacramento', 'Long Beach', 'Oakland', 'Bakersfield', 'Anaheim'];

  return (
    <>
      {/* JSON-LD schemas — placed first per Google guidance */},
      {schemas.map((schema, i) => (
        <script
          key={`schema-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))},
      {/* CA UTI-scoped CSS additions (extends tdmd-* design system) */}
      <style dangerouslySetInnerHTML={{ __html: CA_UTI_CSS }} />

      {/* v3: CitableSummaryBlock removed from this page. Same Q/A is rendered
          inline below the hero (#ca-uti-opening) and mirrored in FAQ_ITEMS[0]
          / FAQPage JSON-LD. Hero is now the first thing the reader sees,
          matching the physician CEO's preferred layout. */}

      <div className="tdmd-ca-uti">
        {/* Breadcrumb */}
        <nav className="tdmd-breadcrumbs" aria-label="Breadcrumb">
          <div className="tdmd-container" style={{ paddingTop: '0.5rem', paddingBottom: 0 }}>
            <a href="/">Home</a>
            <span className="tdmd-bc-sep" aria-hidden="true">/</span>
            <a href="/ca/">California</a>
            <span className="tdmd-bc-sep" aria-hidden="true">/</span>
            <span aria-current="page">UTI Treatment Online</span>
          </div>
        </nav>

        {/* v3: cyan "Answer block" fenced widget removed. Hero is the first
            visual element after the breadcrumb. The same AI-extraction signals
            (same-day video visit, $79, Aetna in-network, UHC approved) now
            live in the inline opener paragraph below the hero. */},
        {/* ─── 1) HERO ────────────────────────────────────────────────────── */}
        <section className="tdmd-hero" id={`${pid}-hero`}>
          <div className="tdmd-container">
            <div className="tdmd-hero-grid">
              <div className="tdmd-hero-copy">
                <h1 data-speakable="true">UTI Treatment Online in California (Acute Uncomplicated Cystitis)</h1>
                <p className="tdmd-hero-sub" data-speakable="true">
                  California adult care by secure video visit. Self pay $79 · Aetna in-network · UHC Commercial approved · MD-only · CA B&amp;P §2290.5 compliant.
                </p>
                <p>
                  A urinary tract infection (UTI), often called a bladder infection, commonly causes burning with urination, urinary frequency, and urgency. Not every patient with these symptoms needs antibiotics, and not every urinary complaint is a simple bladder infection. TeleDirectMD uses a safety-first telehealth approach that screens for red flags — fever, flank pain, pregnancy, catheter use, immunosuppression, recent urologic procedures — before determining whether treatment by video visit is appropriate. If the history supports uncomplicated cystitis without red flags, guideline-based antibiotic treatment may be reasonable by video; adults with pyelonephritis concern, complicated UTI, or severe illness are directed to urgent in-person care. This page is for adults located in California, including {caCities.join(', ')}, and surrounding areas.
                </p>

                {/* Visible byline (E-E-A-T) */}
                <div className="tdmd-ca-uti__byline" aria-label="Reviewed by physician">
                  <img src={PHYSICIAN.headshot} alt={`${PHYSICIAN.name} headshot`} loading="eager" width={56} height={56} />
                  <div className="tdmd-ca-uti__byline-text">
                    <span className="tdmd-ca-uti__byline-name">
                      Reviewed by <a href={PHYSICIAN.bioUrl}>{PHYSICIAN.name}</a> — Board-Certified {PHYSICIAN.specialty}
                    </span>
                    <span className="tdmd-ca-uti__byline-meta">
                      NPI {PHYSICIAN.npi} · Licensed in {PHYSICIAN.licenseState} · Last reviewed{' '}
                      <time dateTime={DATE_MODIFIED}>{new Date(DATE_MODIFIED).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                    </span>
                  </div>
                </div>

                <p className="tdmd-toc-intro" style={{ marginTop: '1.25rem' }}><strong>Quick navigation:</strong></p>
                <ul className="tdmd-toc">
                  <li><a href={`#${pid}-eligibility`}>Eligibility checklist</a></li>
                  <li><a href={`#${pid}-ca-law`}>California telehealth law</a></li>
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
                  <li>Licensed telehealth care for adults located in California at the time of the visit</li>
                </ul>

                <div className="tdmd-hero-ctas">
                  <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit — $79</a>
                  <a href="/ca/" className="tdmd-btn tdmd-btn-outline">Explore California Pages</a>
                  <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">View All Adult Conditions</a>
                </div>

                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> N39.0 (final coding depends on clinical details)</p>
              </div>

              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>Online MD-Only UTI Care in California</h2>
                  <ul>
                    <li>Fast evaluation for uncomplicated bladder infection symptoms</li>
                    <li>Red-flag screening for kidney infection and serious causes</li>
                    <li>Guideline-based antibiotic choices when appropriate</li>
                    <li>e-Prescriptions to your CA pharmacy under AB 2789</li>
                    <li>Clear follow-up steps and prevention guidance</li>
                  </ul>
                  <p className="tdmd-hero-note">
                    Adults 18+ only. TeleDirectMD is not an emergency service. Go to urgent care or the ER now for fever, flank pain, persistent vomiting, severe illness, confusion, pregnancy with concerning urinary symptoms, or worsening symptoms with back pain. TeleDirectMD does not prescribe controlled substances.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2) ELIGIBILITY CHECKLIST ─────────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-eligibility`}>
          <div className="tdmd-container">
            <h2>UTI Telehealth Eligibility Checklist for California</h2>
            <p><strong>You are likely eligible for a TeleDirectMD video visit if ALL of these are true:</strong></p>
            <div className="tdmd-ca-uti__dual">
              <div className="tdmd-ca-uti__dual-card tdmd-ca-uti__dual-card--good">
                <h3>✓ You Are Eligible If</h3>
                <ul>
                  <li>You are 18 years old or older</li>
                  <li>You are physically located in California at the time of the visit</li>
                  <li>You have typical lower UTI symptoms (burning with urination, frequency, urgency, or suprapubic discomfort)</li>
                  <li>You do not have fever, chills, flank pain, or repeated vomiting</li>
                  <li>You are not pregnant</li>
                  <li>You do not have a urinary catheter and have not had a recent urinary procedure</li>
                  <li>You do not have known severe kidney disease, are not on dialysis, and are not significantly immunocompromised</li>
                  <li>Insurance is not required — a self pay option is available</li>
                </ul>
              </div>
              <div className="tdmd-ca-uti__dual-card tdmd-ca-uti__dual-card--alert">
                <h3>✗ You Are Not Eligible If</h3>
                <ul>
                  <li>You are under 18 years old</li>
                  <li>You are pregnant or could be pregnant with concerning symptoms</li>
                  <li>You have fever, flank pain, rigors, or repeated vomiting</li>
                  <li>You feel severely ill, confused, faint, or short of breath</li>
                  <li>You have blood in urine with severe pain or concern for kidney stone</li>
                  <li>You have a urinary catheter, urinary retention, or recent urologic procedure</li>
                  <li>You have recurrent UTIs needing in-person testing and culture</li>
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
            <h2>California Telehealth Law and Your UTI Visit</h2>

            <h3>Does California require an in-person visit before telehealth?</h3>
            <p>
              No. <a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=2290.5.&lawCode=BPC" rel="noopener" target="_blank">California Business and Professions Code Section 2290.5</a> does not require a prior in-person visit before receiving telehealth services. Before delivering care, the physician must obtain the patient&apos;s verbal or written consent for telehealth and document it — which TeleDirectMD does at the start of every visit.
            </p>

            <h3>What standard of care applies to California telehealth physicians?</h3>
            <p>
              The <a href="https://www.mbc.ca.gov/Resources/Medical-Resources/telehealth.aspx" rel="noopener" target="_blank">Medical Board of California</a> is explicit: &ldquo;The standard of care is the same whether the patient is seen in-person, through telehealth or other methods of electronically enabled health care.&rdquo; Physicians must be licensed in California to provide telehealth to California patients — a requirement TeleDirectMD satisfies. See our <a href="/about/">Dr. Bhavsar bio</a> for credential details.
            </p>

            <h3>Does California insurance parity law cover telehealth visits?</h3>
            <p>
              Yes, for commercial plans. California Assembly Bill 744 (2019), codified in <a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=10123.85.&lawCode=INS" rel="noopener" target="_blank">California Insurance Code §10123.85</a>, requires commercial health plans to reimburse telehealth services on the same basis as comparable in-person services. Plans cannot require face-to-face contact as a condition of reimbursement, and copays for telehealth cannot exceed those for equivalent in-person visits. These parity provisions apply to contracts issued, amended, or renewed after January 1, 2021. AB 744 parity does not apply to Medi-Cal managed care plans or Medicare.
            </p>

            <h3>Are UTI antibiotics controlled substances under California law?</h3>
            <p>
              No. First-line UTI antibiotics — nitrofurantoin, trimethoprim-sulfamethoxazole, fosfomycin, and cephalexin — are not controlled substances. They can be prescribed via California telehealth without restriction and electronically transmitted to any California pharmacy. California requires all prescriptions to be issued electronically under Assembly Bill 2789 (effective January 1, 2022), per the <a href="https://www.mbc.ca.gov/News/" rel="noopener" target="_blank">Medical Board of California</a>. TeleDirectMD does not prescribe controlled substances in any state.
            </p>
          </div>
        </section>

        {/* ─── 4) HOW IT WORKS ─────────────────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-how-it-works`} itemScope itemType="https://schema.org/HowTo">
          <div className="tdmd-container">
            <h2 itemProp="name">How Online UTI Treatment Works in California</h2>
            <div className="tdmd-decision-flow">
              <div className="tdmd-decision-step tdmd-decision-step-check">
                <div className="tdmd-decision-number">1</div>
                <div className="tdmd-decision-content">
                  <h3>Book your video visit</h3>
                  <p>Insurance is not required. No referral needed. Many visits are available same day, depending on scheduling. Before your visit, note when symptoms started, whether you have had UTIs before, any allergies, kidney history, and pregnancy status when relevant.</p>
                </div>
              </div>
              <div className="tdmd-decision-step tdmd-decision-step-check">
                <div className="tdmd-decision-number">2</div>
                <div className="tdmd-decision-content">
                  <h3>See a California-licensed MD by secure video</h3>
                  <p>The physician reviews your symptom pattern, onset, prior UTI history, allergies, kidney function, pregnancy status when relevant, and risk factors. Consent under CA B&amp;P §2290.5 is obtained and documented. Structured triage separates uncomplicated cystitis from higher-risk conditions before any antibiotic is prescribed.</p>
                </div>
              </div>
              <div className="tdmd-decision-step tdmd-decision-step-good">
                <div className="tdmd-decision-number">3</div>
                <div className="tdmd-decision-content">
                  <h3>Get a treatment plan and, if appropriate, a prescription</h3>
                  <p>If medication is clinically appropriate, a California-compliant e-prescription is sent to your chosen California pharmacy — CVS, Walgreens, Rite Aid, Walmart, Safeway, or another pharmacy — during or after the visit. You receive clear follow-up steps regardless of treatment choice, including when to seek in-person care if symptoms do not improve.</p>
                  <div className="tdmd-decision-cta">
                    <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 5) COST & INSURANCE ─────────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-cost`}>
          <div className="tdmd-container">
            <h2>UTI Treatment Cost &amp; Insurance in California</h2>
            <p>TeleDirectMD&apos;s self-pay rate is <strong>$79</strong> for a complete MD video visit, including evaluation, treatment plan, and e-prescription. Patients with in-network insurance pay their plan&apos;s telehealth copay instead. The table below reflects the current TeleDirectMD payor enrollment for California, refreshed from the internal payor enrollment system on May 19, 2026.</p>

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

              <div className="tdmd-price-chart" role="group" aria-label="Typical UTI cost comparison">
                <h3>Typical UTI Visit Cost in California</h3>
                <p className="tdmd-price-caption">Common ranges Californians see before insurance. Actual costs vary by setting and city.</p>
                <div className="tdmd-vbars" role="list" aria-label="Cost comparison bars">
                  {[
                    { name: 'TeleDirectMD video visit', value: '$79', heightPct: 13, isTdmd: true },
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
                  Source: TeleDirectMD payor enrollment records, refreshed May 19, 2026. Verify current in-network status with your insurer before booking.
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
                      ? 'tdmd-ca-uti__payor-pill tdmd-ca-uti__payor-pill--good'
                      : p.status === 'Pending' || p.status === 'Approved'
                        ? 'tdmd-ca-uti__payor-pill tdmd-ca-uti__payor-pill--pending'
                        : 'tdmd-ca-uti__payor-pill tdmd-ca-uti__payor-pill--none';
                    const pillLabel = p.inNetwork ? '✓ In-Network' : p.status;
                    return (
                      <tr key={p.name}>
                        <td><strong>{p.name}</strong></td>
                        <td><span className={pillClass}>{pillLabel}</span></td>
                        <td>{p.effective}</td>
                        <td>{p.notes}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <p style={{ marginTop: '1rem' }}>
              For deeper detail, see <a href="/insurance/aetna/california/uti-treatment/">Aetna × California × UTI coverage</a> or view all <a href="/insurance">insurance options</a>. The full <a href="/health-guides/telehealth-uti-clinical-evidence/">telehealth UTI clinical evidence guide</a> walks through the rationale behind our stewardship approach.
            </p>
          </div>
        </section>

        {/* ─── 6) AMR + STEWARDSHIP ─────────────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-stewardship`}>
          <div className="tdmd-container">
            <h2>UTI and Antibiotic Resistance in California</h2>

            <h3>How common are UTIs, and why does antibiotic resistance matter specifically in California?</h3>
            <p>
              UTI is among the most common bacterial infections in adult women, accounting for more than 8 million healthcare visits annually in the United States. Women have a lifetime UTI risk of approximately 53%, per <a href="https://www.idsociety.org/practice-guideline/complicated-urinary-tract-infections/" rel="noopener" target="_blank">IDSA 2025 guideline data</a>. The <a href="/health-guides/urinary-tract-infection-uti-guide/">TeleDirectMD UTI guide</a> covers symptoms, causes, and prevention in detail.
            </p>
            <p>
              National surveillance data published in <em>Clinical Infectious Diseases</em> show that <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8664433/" rel="noopener" target="_blank">25.4% of E. coli isolates from community-acquired UTIs are nonsusceptible to TMP-SMX, and 21.1% are nonsusceptible to fluoroquinolones</a> — both above the 20% threshold at which <a href="https://www.idsociety.org/practice-guideline/urinary-tract-infections-in-women/" rel="noopener" target="_blank">IDSA guidelines</a> recommend against empirical use. The <a href="https://www.cdph.ca.gov/Programs/CHCQ/HAI/Pages/AntimicrobialResistanceLandingPage.aspx" rel="noopener" target="_blank">California Department of Public Health</a> reports that antimicrobial-resistant infections cause roughly 360,000 illnesses and nearly 4,500 deaths among Californians each year across all pathogens.
            </p>

            <h3>How does TeleDirectMD apply antibiotic stewardship in California?</h3>
            <p>
              California&apos;s <a href="https://www.cdph.ca.gov/Programs/CHCQ/HAI/Pages/AntimicrobialStewardshipLandingPage.aspx" rel="noopener" target="_blank">CDPH Antimicrobial Stewardship Program</a> identifies inappropriate UTI prescribing as a key driver of California&apos;s resistance burden. On every TeleDirectMD visit, the physician applies structured triage criteria, selects antibiotics based on current resistance data favoring nitrofurantoin and fosfomycin, and declines to prescribe for patients who do not meet criteria for symptomatic UTI.
            </p>
          </div>
        </section>

        {/* ─── 7) MEDICATIONS TABLE ─────────────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-medications`}>
          <div className="tdmd-container">
            <h2>UTI Treatment Options and Medication Costs in California</h2>
            <p>
              The <a href="https://www.idsociety.org/practice-guideline/urinary-tract-infections-in-women/" rel="noopener" target="_blank">IDSA guideline for acute uncomplicated cystitis</a> and the <a href="https://www.auanet.org/guidelines-and-quality/guidelines/recurrent-uti" rel="noopener" target="_blank">AUA/CUA/SUFU 2024 guideline on recurrent UTIs</a> identify nitrofurantoin, trimethoprim-sulfamethoxazole (when local resistance &lt; 20%), and fosfomycin as first-line agents for uncomplicated cystitis.
            </p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="UTI antibiotic options and GoodRx prices">
                <caption style={{ captionSide: 'bottom', textAlign: 'left', padding: '0.5rem 0', fontSize: '0.85rem', color: 'var(--tdmd-muted)' }}>
                  GoodRx prices retrieved May 18, 2026 from goodrx.com. National coupon prices; actual cost varies by pharmacy. Prescription costs are separate from the TeleDirectMD visit fee.
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
                  {MEDICATIONS.map((med) => (
                    <tr key={med.name} className={med.firstLine ? 'tdmd-ca-uti__med-firstline' : ''}>
                      <td><strong>{med.name}</strong>{med.firstLine ? ' · First-line' : ''}</td>
                      <td>{med.regimen}</td>
                      <td>{med.priceHref ? <a href={med.priceHref} target="_blank" rel="noopener">{med.price}</a> : med.price}</td>
                      <td>{med.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="tdmd-med-note">
              <strong>Important:</strong> The choice of antibiotic depends on your allergies, kidney function, drug interactions, and local resistance patterns assessed by the physician at the visit. Do not start an antibiotic without a clinical evaluation.
            </p>
          </div>
        </section>

        {/* ─── 8) DUAL-PATH BLOCK (Telehealth vs In-Person) ─────────────────── */}
        <section className="tdmd-section" id={`${pid}-dual-path`}>
          <div className="tdmd-container">
            <h2>TeleDirectMD vs. In-Person Care: Which Is Right for You?</h2>
            <p>For most uncomplicated lower UTIs in adult women, a video visit is appropriate and convenient. Some situations require in-person evaluation. Use the comparison below.</p>
            <div className="tdmd-ca-uti__dual">
              <div className="tdmd-ca-uti__dual-card tdmd-ca-uti__dual-card--good">
                <h3>✓ Use TeleDirectMD (telehealth) if</h3>
                <ul>
                  <li>Classic lower UTI symptoms: burning, frequency, urgency</li>
                  <li>No fever, flank pain, chills, or vomiting</li>
                  <li>Not pregnant</li>
                  <li>No catheter or recent urologic procedure</li>
                  <li>Adult 18+, located in California</li>
                  <li>Aetna or UHC Commercial plan (in-network), or self pay $79</li>
                </ul>
              </div>
              <div className="tdmd-ca-uti__dual-card tdmd-ca-uti__dual-card--alert">
                <h3>→ Use in-person care if</h3>
                <ul>
                  <li><strong>ER / 911:</strong> Fever + flank pain, repeated vomiting, sepsis, confusion</li>
                  <li><strong>Urgent care:</strong> Uncertain diagnosis, urine test needed, moderate symptoms</li>
                  <li><strong>OB or urgent care (same day):</strong> Pregnancy with urinary symptoms</li>
                  <li><strong>Primary care / urology:</strong> Recurrent UTIs (≥ 2 in 6 months)</li>
                  <li><strong><a href="https://www.plannedparenthood.org/get-care" rel="noopener" target="_blank">Planned Parenthood California</a>:</strong> Sexual health concerns, sliding-scale fees</li>
                  <li><strong><a href="https://www.211ca.org" rel="noopener" target="_blank">California 211</a>:</strong> Find local clinics and resources</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 9) CTA STRIP ─────────────────────────────────────────────────── */}
        <section className="tdmd-section" aria-label="Book a visit">
          <div className="tdmd-container">
            <div className="tdmd-ca-uti__cta-strip" role="complementary">
              <div>
                <p>Book a same-day video visit — California adults, 18+</p>
                <small>Self pay $79 · Aetna in-network · UHC Commercial approved May 2026 · No ER wait</small>
              </div>
              <a className="tdmd-ca-uti__cta-btn" href="/book-online" rel="noopener">Book Now →</a>
            </div>
          </div>
        </section>

        {/* ─── 10) FAQ (Premium Style A accordion) ──────────────────────────── */}
        <section className="tdmd-section tdmd-faq" id={`${pid}-faq`}>
          <div className="tdmd-container">
            <FaqAccordion
              sectionTitle="Frequently Asked Questions — UTI Treatment in California"
              items={FAQ_ITEMS.map((f, i) => ({ ...f, id: `${pid}-faq-${i}` }))}
            />

            <div className="tdmd-bottom-cta" role="region" aria-label="Book a visit call to action">
              <div className="tdmd-bottom-cta-copy">
                <h3>Ready to see a California-licensed MD?</h3>
                <p>Book a same-day video visit. Self pay $79 · Aetna in-network · UHC Commercial approved.</p>
              </div>
              <div className="tdmd-bottom-cta-actions">
                <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit</a>
                <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">View All Adult Conditions</a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 11) RELATED CA CONDITIONS (siblings) ─────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-related-ca`}>
          <div className="tdmd-container">
            <h2>Other California Conditions We Treat</h2>
            <p>These California condition pages can help when symptoms overlap with UTI or when you want to explore another California telehealth visit from TeleDirectMD.</p>
            <div className="tdmd-ca-uti__sibling-grid">
              {CA_SIBLINGS.map((s) => (
                <a key={s.slug} className="tdmd-ca-uti__sibling" href={`/ca/${s.slug}/`}>
                  <span className="tdmd-ca-uti__sibling-label">{s.label}</span>
                  <span className="tdmd-ca-uti__sibling-why">{s.why}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 12) PILLAR / SPOKE / CLUSTER LINKS ───────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-related`}>
          <div className="tdmd-container">
            <h2>Related Resources from TeleDirectMD</h2>
            <p>This page sits at the intersection of two pillars: the <a href="/ca/">California state hub</a> (state-level care delivery) and <a href="/uti-treatment-online/">national UTI condition page</a> (clinical content). Read the editorial pillars for the deeper evidence base, or use the functional links below to book a visit or check your insurance.</p>
            <div className="tdmd-ca-uti__related-links" aria-label="Related resources">
              <a href="/">Home</a>
              <a href="/ca/">California (state pillar)</a>
              <a href="/uti-treatment-online/">National UTI page (condition pillar)</a>
              <a href="/health-guides/telehealth-uti-clinical-evidence/">Telehealth UTI clinical evidence guide</a>
              <a href="/health-guides/urinary-tract-infection-uti-guide/">Urinary tract infection (UTI) patient guide</a>
              <a href="/insurance/aetna/california/uti-treatment/">Aetna × California × UTI coverage</a>
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
              <li><a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=2290.5.&lawCode=BPC" rel="noopener" target="_blank">California Business and Professions Code Section 2290.5 — Telehealth Advancement Act</a>. Retrieved May 19, 2026.</li>
              <li><a href="https://www.mbc.ca.gov/Resources/Medical-Resources/telehealth.aspx" rel="noopener" target="_blank">Medical Board of California — Telehealth Resources</a>. Retrieved May 19, 2026.</li>
              <li><a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=10123.85.&lawCode=INS" rel="noopener" target="_blank">California Insurance Code §10123.85 — Telehealth Parity (AB 744)</a>. Retrieved May 19, 2026.</li>
              <li><a href="https://www.dhcs.ca.gov/provgovpart/Pages/TelehealthFAQ.aspx" rel="noopener" target="_blank">California DHCS — Telehealth FAQ</a>. Retrieved May 19, 2026.</li>
              <li><a href="https://www.cdph.ca.gov/Programs/CHCQ/HAI/Pages/AntimicrobialResistanceLandingPage.aspx" rel="noopener" target="_blank">CDPH — Antimicrobial Resistance</a>. Retrieved May 19, 2026.</li>
              <li><a href="https://www.cdph.ca.gov/Programs/CHCQ/HAI/Pages/AntimicrobialStewardshipLandingPage.aspx" rel="noopener" target="_blank">CDPH — Antimicrobial Stewardship Program</a>. Retrieved May 19, 2026.</li>
              <li><a href="https://www.cdc.gov/uti/about/index.html" rel="noopener" target="_blank">CDC — Urinary Tract Infection Basics</a>. Retrieved May 19, 2026.</li>
              <li><a href="https://www.idsociety.org/practice-guideline/urinary-tract-infections-in-women/" rel="noopener" target="_blank">IDSA/ESCMID Guideline for Acute Uncomplicated Cystitis and Pyelonephritis in Women</a>. Retrieved May 19, 2026.</li>
              <li><a href="https://www.idsociety.org/practice-guideline/complicated-urinary-tract-infections/" rel="noopener" target="_blank">IDSA 2025 Guideline Update — Complicated UTI</a>. Retrieved May 19, 2026.</li>
              <li><a href="https://www.auanet.org/guidelines-and-quality/guidelines/recurrent-uti" rel="noopener" target="_blank">AUA/CUA/SUFU Guideline — Recurrent UTIs in Women (2024)</a>. Retrieved May 19, 2026.</li>
              <li><a href="https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2020/01/treatment-of-urinary-tract-infections-in-nonpregnant-women" rel="noopener" target="_blank">ACOG — Treatment of UTIs in Nonpregnant Women</a>. Retrieved May 19, 2026.</li>
              <li><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8664433/" rel="noopener" target="_blank">Antimicrobial Resistance Trends in Urine E. coli Isolates, US Outpatients 2011–2019 (Clinical Infectious Diseases)</a>. Retrieved May 19, 2026.</li>
              <li><a href="https://telehealth.hhs.gov/providers/telehealth-policy/prescribing-controlled-substances-via-telehealth" rel="noopener" target="_blank">HHS Telehealth.HHS.gov — Prescribing Controlled Substances via Telehealth</a>. Retrieved May 19, 2026.</li>
            </ol>
          </div>
        </section>

        {/* ─── 14) DISCLAIMER ───────────────────────────────────────────────── */}
        <section className="tdmd-section tdmd-footnote" id={`${pid}-disclaimer`}>
          <div className="tdmd-container">
            <h2>Medical Disclaimer</h2>
            <p>This page is for informational purposes and is not a substitute for individualized medical advice. Use of TeleDirectMD does not establish a physician-patient relationship until a video visit is initiated and consent is documented under California B&amp;P §2290.5. Treatment decisions are made by a California-licensed board-certified physician based on the clinical history at the time of the visit. If you have red-flag symptoms (fever, flank pain, repeated vomiting, severe illness, confusion, pregnancy with concerning urinary symptoms), seek urgent in-person care immediately.</p>
            <p>TeleDirectMD does not prescribe controlled substances in any state. The price information on this page reflects GoodRx national coupon pricing retrieved May 2026; actual prescription costs at California pharmacies vary. Insurance status is current as of May 19, 2026; verify with your insurer before booking.</p>
          </div>
        </section>

        {/* Standard cost-compare / symptoms back-links (consistent with the rest of the system) */}
        <WhatDoesThisCostBlock conditionSlug="uti-treatment-online" conditionName="UTI Treatment" stateName="California" />
        <CompareTeleDirectMDLinkRow conditionSlug="uti-treatment-online" />
        <CommonSymptomsBlock conditionSlug="uti-treatment-online" conditionName="UTI Treatment" />
      </div>
    </>
  );
}
