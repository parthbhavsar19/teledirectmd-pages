import { getAggregateRating, getReviewBlock } from '../../lib/review-schema';
import FaqAccordion from '../components/FaqAccordion';
import { COST_PAGE_SLUGS } from '../../lib/cost-pages-config';

export const metadata = {
  title: 'Telehealth Cost Guides by Condition | TeleDirectMD',
  description:
    'How much does an online doctor visit cost? TeleDirectMD charges $79 flat for self-pay video visits. See condition-by-condition cost guides for UTI, sinus infection, strep, acne, ED, birth control, and 15+ more conditions — with sourced comparisons to urgent care and retail clinics.',
  alternates: { canonical: 'https://teledirectmd.com/cost' },
  robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  authors: [{ name: 'Parth Bhavsar, MD' }],
  openGraph: {
    type: 'website',
    siteName: 'TeleDirectMD',
    locale: 'en_US',
    title: 'Telehealth Cost Guides by Condition | TeleDirectMD',
    description:
      '$79 flat self-pay telehealth. Cost guides for 20 conditions — sourced comparisons vs. urgent care, retail clinic, and ER.',
    url: 'https://teledirectmd.com/cost',
  },
};

const BASE_URL = 'https://teledirectmd.com';

// Cost page catalog — 20 children
const COST_CATALOG = [
  {
    slug: 'acne-treatment-cost',
    name: 'Acne Treatment Cost',
    desc: 'Prescription acne treatment at TeleDirectMD — $79 for the visit vs. $140+ at a retail clinic or $300+ at dermatology.',
  },
  {
    slug: 'birth-control-refills-cost',
    name: 'Birth Control Refill Cost',
    desc: 'Oral contraceptive refill visits from $79. No annual exam required for established patients with no complications.',
  },
  {
    slug: 'bv-treatment-cost',
    name: 'BV Treatment Cost',
    desc: 'Bacterial vaginosis treatment online — physician evaluation and prescription metronidazole or clindamycin for $79.',
  },
  {
    slug: 'cold-sore-cost',
    name: 'Cold Sore Treatment Cost',
    desc: 'Antiviral treatment for cold sores (HSV-1) — valacyclovir or acyclovir evaluated and prescribed online for $79.',
  },
  {
    slug: 'diabetes-refills-cost',
    name: 'Diabetes Medication Refill Cost',
    desc: 'Stable type 2 diabetes patients can refill metformin and other non-insulin oral medications online for $79.',
  },
  {
    slug: 'ear-infection-cost',
    name: 'Ear Infection Treatment Cost',
    desc: 'Otitis externa (swimmer\'s ear) and mild otitis media evaluated online. TeleDirectMD: $79 vs. $150+ at urgent care.',
  },
  {
    slug: 'eczema-treatment-cost',
    name: 'Eczema Treatment Cost',
    desc: 'Eczema flare-ups and contact dermatitis treated with prescription topical steroids — $79 online vs. $200+ dermatology.',
  },
  {
    slug: 'erectile-dysfunction-cost',
    name: 'Erectile Dysfunction Cost',
    desc: 'ED evaluation and prescription for sildenafil or tadalafil — $79 vs. $200+ at a primary care or urology office.',
  },
  {
    slug: 'hair-loss-treatment-cost',
    name: 'Hair Loss Treatment Cost',
    desc: 'Finasteride and other evidence-based hair loss treatments evaluated and prescribed online for $79.',
  },
  {
    slug: 'migraine-treatment-cost',
    name: 'Migraine Treatment Cost',
    desc: 'Triptan refills and preventive migraine medication renewed online. $79 vs. $250+ at a neurology office.',
  },
  {
    slug: 'online-doctor-visit-cost',
    name: 'Online Doctor Visit Cost',
    desc: 'How much does a telehealth visit cost? TeleDirectMD: $79 flat. Compare to urgent care ($200), retail clinic ($139), and ER ($2,715).',
  },
  {
    slug: 'online-prescription-cost',
    name: 'Online Prescription Cost',
    desc: 'Cost to get a prescription online — including the visit fee and pharmacy costs with GoodRx, Cost Plus Drugs, and Amazon Pharmacy.',
  },
  {
    slug: 'pink-eye-cost',
    name: 'Pink Eye Treatment Cost',
    desc: 'Bacterial conjunctivitis antibiotic eye drops — $79 online vs. $150+ at urgent care or $200+ at an ophthalmologist.',
  },
  {
    slug: 'seasonal-allergies-cost',
    name: 'Seasonal Allergies Cost',
    desc: 'Prescription allergy medications (nasal steroids, antihistamines) evaluated and prescribed for $79 — no allergy clinic needed.',
  },
  {
    slug: 'shingles-cost',
    name: 'Shingles Treatment Cost',
    desc: 'Early shingles (herpes zoster) antiviral treatment — time-sensitive. TeleDirectMD: $79 vs. $200+ at urgent care.',
  },
  {
    slug: 'sinus-infection-treatment-cost',
    name: 'Sinus Infection Treatment Cost',
    desc: 'Antibiotic treatment for bacterial sinusitis — $79 flat vs. $150+ at a walk-in clinic. Sourced cost comparison included.',
  },
  {
    slug: 'sore-throat-treatment-cost',
    name: 'Sore Throat Treatment Cost',
    desc: 'Viral vs. strep evaluation and treatment — $79 at TeleDirectMD vs. $150\u2013$200 at urgent care.',
  },
  {
    slug: 'uti-treatment-cost',
    name: 'UTI Treatment Cost',
    desc: 'Uncomplicated UTI antibiotics online — $79 for the visit. Full sourced comparison to urgent care, retail clinic, and ER.',
  },
  {
    slug: 'yeast-infection-cost',
    name: 'Yeast Infection Cost',
    desc: 'Fluconazole or topical antifungals prescribed online for vaginal yeast infections — $79 flat vs. $130+ at a GYN office.',
  },
];

const FAQS = [
  {
    question: 'How much does a TeleDirectMD video visit cost?',
    answer:
      'TeleDirectMD charges a flat $79 for a self-pay video visit. This includes the physician evaluation and any clinically appropriate prescriptions sent to your pharmacy. There are no hidden fees, no per-prescription charges, and no subscription required. HSA and FSA cards are accepted. Select Aetna, Blue Cross Blue Shield, and UnitedHealthcare commercial plans are also accepted in certain states.',
  },
  {
    question: 'How does TeleDirectMD compare in cost to urgent care?',
    answer:
      'A cash-pay urgent care visit averages approximately $200 (Mira Health, 2025). TeleDirectMD costs $79 flat — a saving of roughly $120 per visit for self-pay patients. CVS MinuteClinic costs $99\u2013$139 for a visit. An emergency room visit averages $2,715 (Mira Health, Feb 2025) for uninsured patients. For common acute conditions that are appropriate for telehealth — UTI, sinus infection, strep, pink eye, acne — TeleDirectMD is consistently the lowest-cost option.',
  },
  {
    question: 'Does TeleDirectMD charge extra for a prescription?',
    answer:
      'No. The $79 visit fee includes the physician evaluation and any prescription sent during that visit. You pay the pharmacy directly for your medication — that cost is separate and varies by drug, dose, and pharmacy. Using GoodRx, Amazon Pharmacy, or Mark Cuban\'s Cost Plus Drugs can significantly reduce the medication cost, sometimes to under $10 for common generics.',
  },
  {
    question: 'Does insurance cover a TeleDirectMD visit?',
    answer:
      'TeleDirectMD accepts Aetna, Blue Cross Blue Shield, and UnitedHealthcare commercial plans in a growing number of states. If your specific plan is in-network in your state, your copay will depend on your plan benefits. If your plan is not in-network, you can book self-pay at $79 and submit an out-of-network claim to your insurer for potential partial reimbursement. Check the insurance page for current plan and state coverage.',
  },
  {
    question: 'Why is telehealth cheaper than urgent care for the same condition?',
    answer:
      'Telehealth eliminates the overhead costs of a brick-and-mortar clinic — rent, facility fees, front-desk staff, and medical equipment. Physician-led video platforms can pass those savings to patients. A $79 telehealth visit for a UTI provides the same physician evaluation and prescription as a $200 urgent care visit, without the commute, waiting room time, or facility fee. For straightforward acute conditions, the clinical outcome is equivalent.',
  },
  {
    question: 'Are there conditions where paying for urgent care in person is worth it?',
    answer:
      'Yes. Any condition that requires a physical examination, imaging, laboratory testing, or procedures should be seen in person. A suspected fracture needs X-ray. Abdominal pain that could indicate appendicitis needs an in-person exam and possibly CT imaging. A rash that requires biopsy cannot be fully evaluated by video. TeleDirectMD physicians will always refer patients to in-person or emergency care when it is the clinically appropriate standard.',
  },
  {
    question: 'What is the cheapest way to get a prescription online?',
    answer:
      'The total cost of an online prescription has two components: the visit fee and the medication cost. TeleDirectMD\'s visit fee is $79 — among the lowest for physician-staffed platforms. For the medication, generic drugs are often $4\u2013$15 at major pharmacies with GoodRx discounts, or through Mark Cuban\'s Cost Plus Drugs (costplusdrugs.com). For example, a generic nitrofurantoin (UTI antibiotic) course is often under $15 with a GoodRx coupon at Walmart or Costco.',
  },
  {
    question: 'Does TeleDirectMD cost the same for every condition?',
    answer:
      'Yes. The self-pay fee is a flat $79 regardless of whether you are being seen for a UTI, a migraine refill, acne, ED, or any other condition. There is no tiered pricing by condition complexity. The only variable is the pharmacy cost for any prescribed medication, which is paid separately.',
  },
  {
    question: 'Can I use my HSA or FSA card for a TeleDirectMD visit?',
    answer:
      'Yes. TeleDirectMD accepts Health Savings Account (HSA) and Flexible Spending Account (FSA) cards as a form of payment. Telehealth visits with a licensed physician are qualified medical expenses under IRS rules. The prescription cost at the pharmacy is also typically HSA/FSA eligible.',
  },
  {
    question: 'How much do medications typically cost after a TeleDirectMD visit?',
    answer:
      'Generic medication costs vary widely. Common antibiotics (amoxicillin, nitrofurantoin, trimethoprim-sulfamethoxazole) cost $4\u2013$25 at most retail pharmacies with GoodRx. Antiviral medications (valacyclovir for cold sores or shingles) cost $10\u2013$40 generic. Sildenafil (generic Viagra) has dropped dramatically in price and is available from $10\u2013$40 for a supply depending on dose and pharmacy. All prices cited here are estimates; actual costs depend on your location, pharmacy, and dose.',
  },
];

const COST_BARS = [
  { label: 'TeleDirectMD', value: '$79', pct: 3, tdmd: true },
  { label: 'Retail Clinic', value: '$139', pct: 5, tdmd: false },
  { label: 'Urgent Care', value: '$200', pct: 7.5, tdmd: false },
  { label: 'ER Visit', value: '$2,715', pct: 100, tdmd: false },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      '@id': `${BASE_URL}/cost#breadcrumbs`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Cost Guides', item: `${BASE_URL}/cost/` },
      ],
    },
    {
      '@type': 'CollectionPage',
      '@id': `${BASE_URL}/cost#webpage`,
      url: `${BASE_URL}/cost/`,
      name: 'Telehealth Cost Guides by Condition | TeleDirectMD',
      description:
        'Hub page for 20 condition-by-condition telehealth cost guides. TeleDirectMD charges $79 flat; each guide provides sourced cost comparisons vs. urgent care, retail clinic, and ER.',
      inLanguage: 'en-US',
      breadcrumb: { '@id': `${BASE_URL}/cost#breadcrumbs` },
      publisher: { '@id': `${BASE_URL}/#organization` },
      reviewedBy: { '@id': `${BASE_URL}/#physician` },
      lastReviewed: '2026-05-23',
      hasPart: COST_CATALOG.map((c) => ({
        '@type': 'WebPage',
        '@id': `${BASE_URL}/cost/${c.slug}/`,
        url: `${BASE_URL}/cost/${c.slug}/`,
        name: c.name,
        description: c.desc,
      })),
    },
    {
      '@type': 'MedicalOrganization',
      '@id': `${BASE_URL}/#organization`,
      name: 'TeleDirectMD',
      url: BASE_URL,
      logo: `${BASE_URL}/logo.webp`,
      telephone: '+1-678-956-1855',
      email: 'contact@teledirectmd.com',
      priceRange: '$79',
      medicalSpecialty: ['Family Medicine', 'Urgent Care', 'Telemedicine'],
      paymentAccepted: ['Credit Card', 'Debit Card', 'HSA', 'FSA', 'Aetna', 'Blue Cross Blue Shield', 'UnitedHealthcare'],
      currenciesAccepted: 'USD',
      aggregateRating: getAggregateRating(),
    },
    {
      '@type': 'Physician',
      '@id': `${BASE_URL}/#physician`,
      name: 'Parth Bhavsar, MD',
      url: `${BASE_URL}/about`,
      identifier: { '@type': 'PropertyValue', name: 'NPI', value: '1104323203' },
      medicalSpecialty: 'Family Medicine',
      worksFor: { '@id': `${BASE_URL}/#organization` },
      ...getReviewBlock(),
    },
    {
      '@type': 'FAQPage',
      '@id': `${BASE_URL}/cost#faqpage`,
      mainEntity: FAQS.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ],
};

const PAGE_CSS = `
  :root{--tdmd-teal:#006b73;--tdmd-navy:#003e52;--tdmd-accent:#ff5a36;--tdmd-bg-soft:#f3fafb;--tdmd-border:#dde3e6;--tdmd-text:#12323a;--tdmd-muted:#4b5f66;--tdmd-card:#ffffff;--tdmd-shadow:0 8px 20px rgba(0,0,0,0.06);--tdmd-radius:18px;}
  @media(prefers-color-scheme:dark){:root:not([data-theme="light"]){--tdmd-teal:#2bc4cf;--tdmd-navy:#a0d8e8;--tdmd-accent:#ff7a5c;--tdmd-bg-soft:#0f1f24;--tdmd-border:#1e3340;--tdmd-text:#e2edf0;--tdmd-muted:#8fa8b2;--tdmd-card:#122028;--tdmd-shadow:0 8px 20px rgba(0,0,0,0.3);color-scheme:dark;}}
  :root[data-theme="dark"]{--tdmd-teal:#2bc4cf;--tdmd-navy:#a0d8e8;--tdmd-accent:#ff7a5c;--tdmd-bg-soft:#0f1f24;--tdmd-border:#1e3340;--tdmd-text:#e2edf0;--tdmd-muted:#8fa8b2;--tdmd-card:#122028;--tdmd-shadow:0 8px 20px rgba(0,0,0,0.3);color-scheme:dark;}
  .cst-wrap{max-width:1100px;margin:0 auto;padding:0 1.5rem 4rem;font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:var(--tdmd-text);}
  .cst-hero{background:var(--tdmd-bg-soft);padding:3rem 0 2.5rem;}
  .cst-hero-inner{max-width:1100px;margin:0 auto;padding:0 1.5rem;}
  .cst-bc{font-size:0.88rem;color:var(--tdmd-muted);margin-bottom:1.25rem;}
  .cst-bc a{color:var(--tdmd-navy);font-weight:700;text-decoration:underline;text-underline-offset:2px;}
  .cst-bc span{margin:0 0.4rem;}
  .cst-h1{font-size:clamp(1.75rem,4vw,2.4rem);font-weight:800;margin:0 0 0.75rem;letter-spacing:-0.02em;line-height:1.2;color:var(--tdmd-text);}
  .cst-lead{font-size:1.05rem;line-height:1.65;max-width:72ch;margin:0 0 1.25rem;color:var(--tdmd-text);}
  .cst-badge-row{display:flex;flex-wrap:wrap;gap:0.5rem 0.75rem;margin-bottom:1.25rem;}
  .cst-badge{background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:999px;padding:0.3rem 0.85rem;font-size:0.88rem;font-weight:700;color:var(--tdmd-navy);}
  .cst-badge--accent{background:var(--tdmd-accent);color:#fff;border-color:var(--tdmd-accent);}
  .cst-ctas{display:flex;flex-wrap:wrap;gap:0.75rem;margin-bottom:1.25rem;}
  .cst-btn{display:inline-block;padding:0.65rem 1.5rem;border-radius:999px;font-weight:700;font-size:0.95rem;text-decoration:none;text-align:center;}
  .cst-btn-primary{background:var(--tdmd-teal);color:#fff;}
  .cst-btn-outline{border:2px solid var(--tdmd-teal);color:var(--tdmd-teal);background:var(--tdmd-card);}
  .cst-reviewed{font-size:0.85rem;color:var(--tdmd-muted);margin:0.5rem 0 0;}
  .cst-reviewed a{color:var(--tdmd-navy);font-weight:700;text-decoration:underline;text-underline-offset:2px;}
  .cst-section{padding:2.5rem 0;}
  .cst-h2{font-size:clamp(1.3rem,3vw,1.75rem);font-weight:800;margin:0 0 0.75rem;letter-spacing:-0.01em;color:var(--tdmd-text);}
  .cst-h3{font-size:1.15rem;font-weight:700;margin:0 0 0.5rem;color:var(--tdmd-navy);}
  .cst-p{font-size:1rem;line-height:1.7;margin:0 0 1rem;color:var(--tdmd-text);}
  .cst-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:1rem;margin-top:1rem;}
  .cst-card{background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:14px;padding:1.1rem 1.2rem;box-shadow:var(--tdmd-shadow);text-decoration:none;color:var(--tdmd-text);display:block;transition:border-color .2s;}
  .cst-card:hover{border-color:var(--tdmd-teal);}
  .cst-card-title{font-weight:800;font-size:1rem;color:var(--tdmd-navy);margin:0 0 0.35rem;letter-spacing:-0.01em;}
  .cst-card-desc{font-size:0.87rem;color:var(--tdmd-muted);line-height:1.45;margin:0;}
  .cst-card-arrow{display:inline-block;margin-top:0.5rem;font-size:0.82rem;color:var(--tdmd-teal);font-weight:700;}
  .cst-vbars{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:1rem;align-items:end;padding:1.5rem 0.5rem 0.5rem;border-bottom:2px solid var(--tdmd-border);min-height:320px;margin-top:1rem;}
  .tdmd-vbar{display:flex;flex-direction:column;align-items:center;justify-content:flex-end;height:280px;position:relative;}
  .tdmd-vbar__value{font-weight:800;color:var(--tdmd-navy);font-size:0.9rem;margin-bottom:0.3rem;text-align:center;line-height:1.2;white-space:nowrap;}
  .tdmd-vbar__fill{width:100%;max-width:110px;border-radius:10px 10px 0 0;background:linear-gradient(180deg,rgba(0,62,82,.85) 0%,rgba(0,107,115,.65) 100%);min-height:8px;}
  .tdmd-vbar__fill--tdmd{background:linear-gradient(180deg,var(--tdmd-accent) 0%,#ff8a6e 100%);box-shadow:0 0 0 3px rgba(255,90,54,.15);}
  .tdmd-vbar__label{margin-top:0.6rem;padding-top:0.5rem;border-top:1px solid var(--tdmd-border);font-weight:700;color:var(--tdmd-text);font-size:0.82rem;text-align:center;line-height:1.3;width:100%;}
  .tdmd-vbar__label--tdmd{color:var(--tdmd-accent);}
  .cst-cost-note{margin-top:0.75rem;font-size:0.88rem;color:var(--tdmd-muted);}
  .cst-highlight-box{background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:14px;padding:1.25rem 1.5rem;box-shadow:var(--tdmd-shadow);border-top:4px solid var(--tdmd-teal);margin-top:1rem;}
  .cst-price-big{font-size:3rem;font-weight:900;color:var(--tdmd-teal);letter-spacing:-0.03em;margin:0.25rem 0;}
  .cst-price-sub{color:var(--tdmd-muted);font-weight:600;margin:0 0 0.75rem;}
  .cst-two-col{display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-top:1rem;}
  .cst-info-box{background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:14px;padding:1.25rem 1.4rem;box-shadow:var(--tdmd-shadow);}
  .cst-info-box--teal{border-top:4px solid var(--tdmd-teal);}
  .cst-info-box--accent{border-top:4px solid var(--tdmd-accent);}
  .cst-list{padding-left:1.25rem;margin:0.5rem 0;display:grid;gap:0.4rem;font-size:0.96rem;line-height:1.55;}
  .cst-link-cloud{display:flex;flex-wrap:wrap;gap:0.5rem 0.75rem;margin-top:1rem;}
  .cst-link-cloud a{color:var(--tdmd-navy);font-weight:700;text-decoration:underline;text-underline-offset:2px;font-size:0.95rem;}
  .cst-link-cloud a:hover{color:var(--tdmd-teal);}
  .cst-cta-bar{margin-top:2.5rem;background:linear-gradient(135deg,rgba(0,107,115,.08),rgba(0,62,82,.04));border:1px solid var(--tdmd-border);border-radius:var(--tdmd-radius);padding:1.25rem 1.5rem;display:flex;align-items:center;justify-content:space-between;gap:1rem;flex-wrap:wrap;}
  .cst-cta-bar h3{margin:0;font-size:1.15rem;font-weight:800;letter-spacing:-0.01em;}
  .cst-cta-bar p{margin:0.35rem 0 0;color:var(--tdmd-muted);font-size:0.95rem;max-width:62ch;}
  .cst-cta-bar-actions{display:flex;gap:0.75rem;flex-wrap:wrap;align-items:center;}
  .cst-divider{border:none;border-top:1px solid var(--tdmd-border);margin:2rem 0;}
  .cst-table-wrap{overflow-x:auto;margin-top:1rem;}
  .cst-table{width:100%;border-collapse:collapse;font-size:0.9rem;}
  .cst-table th,.cst-table td{border:1px solid var(--tdmd-border);padding:0.6rem 0.75rem;vertical-align:top;text-align:left;}
  .cst-table th{background:var(--tdmd-bg-soft);font-weight:800;color:var(--tdmd-navy);}
  .cst-table td:nth-child(2){font-weight:700;color:var(--tdmd-teal);}
  @media(max-width:768px){.cst-two-col{grid-template-columns:1fr;}.cst-vbars{gap:0.4rem;min-height:240px;padding:1rem 0.2rem 0.5rem;}.tdmd-vbar{height:200px;}.tdmd-vbar__value{font-size:0.72rem;}.tdmd-vbar__label{font-size:0.68rem;}}
  @media(max-width:520px){.cst-grid{grid-template-columns:1fr;}}
`;

export default function CostHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />

      {/* Hero */}
      <div className="cst-hero">
        <div className="cst-hero-inner">
          <nav className="cst-bc" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Cost Guides</span>
          </nav>
          <h1 className="cst-h1">Telehealth Cost Guides by Condition</h1>
          <p className="cst-lead">
            How much does it actually cost to get a condition treated online? This hub collects 20 condition-by-condition
            cost guides that break down what you pay at TeleDirectMD versus urgent care, retail clinics, and the ER —
            with cited sources for every number. All guides reflect TeleDirectMD&apos;s current flat <strong>$79</strong> self-pay fee.
          </p>
          <p className="cst-lead">
            Each guide also covers the total cost of care: the visit fee, the typical prescription price, and how to use
            GoodRx, Cost Plus Drugs, or Amazon Pharmacy to minimize out-of-pocket medication costs. Select your condition
            below for the full breakdown.
          </p>
          <div className="cst-badge-row">
            <span className="cst-badge cst-badge--accent">$79 Flat Visit Fee</span>
            <span className="cst-badge">No Hidden Charges</span>
            <span className="cst-badge">HSA / FSA Accepted</span>
            <span className="cst-badge">Insurance Accepted (Select Plans)</span>
          </div>
          <div className="cst-ctas">
            <a href="/book-online" className="cst-btn cst-btn-primary">Book a $79 Visit</a>
            <a href="/insurance" className="cst-btn cst-btn-outline">Check Insurance Coverage</a>
          </div>
          <p className="cst-reviewed">
            Medically reviewed by{' '}
            <a href="/about">Parth Bhavsar, MD</a>
            {' '}(NPI&nbsp;1104323203) &mdash; Last reviewed: May 23, 2026
          </p>
        </div>
      </div>

      <div className="cst-wrap">

        {/* Cost Card Grid */}
        <section className="cst-section" aria-labelledby="catalog-heading">
          <h2 id="catalog-heading" className="cst-h2">Cost Guides — 20 Conditions</h2>
          <p className="cst-p">
            Each guide below covers the total cost of treating that condition at TeleDirectMD vs. alternatives,
            along with typical prescription costs and how to reduce them. Click a condition to read the full guide.
          </p>
          <div className="cst-grid">
            {COST_CATALOG.map((c) => (
              <a key={c.slug} href={`/cost/${c.slug}`} className="cst-card">
                <p className="cst-card-title">{c.name}</p>
                <p className="cst-card-desc">{c.desc}</p>
                <span className="cst-card-arrow">Read cost guide &rarr;</span>
              </a>
            ))}
          </div>
        </section>

        <hr className="cst-divider" />

        {/* Master cost comparison chart */}
        <section className="cst-section" aria-labelledby="chart-heading">
          <h2 id="chart-heading" className="cst-h2">The Cost of Care by Setting</h2>
          <p className="cst-p">
            The chart below shows average out-of-pocket costs for a self-pay adult seeking care for a common acute condition —
            UTI, sinus infection, strep throat, pink eye, or similar. These figures are sourced from Mira Health (2025) and
            CVS MinuteClinic published pricing (2024). Individual condition cost guides contain full source citations.
          </p>
          <div className="cst-vbars" aria-label="Cost comparison by care setting">
            {COST_BARS.map((bar) => {
              const heightPct = Math.round((bar.pct / 100) * 100);
              return (
                <div key={bar.label} className="tdmd-vbar">
                  <div className="tdmd-vbar__value">{bar.value}</div>
                  <div
                    className={`tdmd-vbar__fill${bar.tdmd ? ' tdmd-vbar__fill--tdmd' : ''}`}
                    style={{ height: `${Math.max(heightPct, 4)}%` }}
                    role="img"
                    aria-label={`${bar.label}: ${bar.value}`}
                  />
                  <div className={`tdmd-vbar__label${bar.tdmd ? ' tdmd-vbar__label--tdmd' : ''}`}>
                    {bar.label}
                  </div>
                </div>
              );
            })}
          </div>
          <p className="cst-cost-note">
            ER average: $2,715 uninsured (Mira Health, Feb 2025). Urgent care: ~$200 cash-pay average (Mira Health, 2025).
            Retail clinic (CVS MinuteClinic): $99&ndash;$139 (CVS, 2024). TeleDirectMD: $79 flat. Pharmacy costs are separate.
          </p>
          <div className="cst-highlight-box">
            <div className="cst-price-big">$79</div>
            <p className="cst-price-sub">Flat self-pay fee &mdash; every visit, every condition</p>
            <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--tdmd-text)', lineHeight: 1.6 }}>
              No per-visit premium for complex conditions. No facility fee. No surprise billing. The $79 covers your
              physician evaluation and any prescriptions written. You pay the pharmacy separately for your medication.
              HSA and FSA cards accepted. Insurance copay applies when TeleDirectMD is in-network with your plan.
            </p>
          </div>
        </section>

        <hr className="cst-divider" />

        {/* Condition cost table */}
        <section className="cst-section" aria-labelledby="condition-table-heading">
          <h2 id="condition-table-heading" className="cst-h2">Typical Total Cost by Condition at TeleDirectMD</h2>
          <p className="cst-p">
            The table below shows representative total costs (visit + medication) for common conditions treated at TeleDirectMD.
            Medication prices are sourced from GoodRx published pricing (2025) for generic drugs at major retail pharmacies.
            Actual costs vary by pharmacy, dose, insurance status, and location. Individual cost guide pages contain full citations.
          </p>
          <div className="cst-table-wrap">
            <table className="cst-table">
              <thead>
                <tr>
                  <th>Condition</th>
                  <th>Visit Fee</th>
                  <th>Typical Generic Rx Cost</th>
                  <th>Estimated Total</th>
                  <th>Urgent Care Equivalent</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>UTI</td>
                  <td>$79</td>
                  <td>$4&ndash;$20 (nitrofurantoin)</td>
                  <td>~$83&ndash;$99</td>
                  <td>$150&ndash;$250</td>
                </tr>
                <tr>
                  <td>Sinus Infection</td>
                  <td>$79</td>
                  <td>$10&ndash;$25 (amoxicillin)</td>
                  <td>~$89&ndash;$104</td>
                  <td>$150&ndash;$250</td>
                </tr>
                <tr>
                  <td>Strep Throat</td>
                  <td>$79</td>
                  <td>$4&ndash;$15 (amoxicillin)</td>
                  <td>~$83&ndash;$94</td>
                  <td>$150&ndash;$250</td>
                </tr>
                <tr>
                  <td>Pink Eye</td>
                  <td>$79</td>
                  <td>$12&ndash;$35 (tobramycin drops)</td>
                  <td>~$91&ndash;$114</td>
                  <td>$150&ndash;$250</td>
                </tr>
                <tr>
                  <td>Yeast Infection</td>
                  <td>$79</td>
                  <td>$10&ndash;$20 (fluconazole)</td>
                  <td>~$89&ndash;$99</td>
                  <td>$130&ndash;$200</td>
                </tr>
                <tr>
                  <td>Cold Sore</td>
                  <td>$79</td>
                  <td>$15&ndash;$40 (valacyclovir)</td>
                  <td>~$94&ndash;$119</td>
                  <td>$150&ndash;$250</td>
                </tr>
                <tr>
                  <td>Acne (prescription)</td>
                  <td>$79</td>
                  <td>$20&ndash;$60 (topical/oral antibiotic)</td>
                  <td>~$99&ndash;$139</td>
                  <td>$250&ndash;$400 (dermatology)</td>
                </tr>
                <tr>
                  <td>Erectile Dysfunction</td>
                  <td>$79</td>
                  <td>$10&ndash;$50 (generic sildenafil)</td>
                  <td>~$89&ndash;$129</td>
                  <td>$200&ndash;$400 (primary care/urology)</td>
                </tr>
                <tr>
                  <td>Shingles</td>
                  <td>$79</td>
                  <td>$30&ndash;$80 (valacyclovir 7-day)</td>
                  <td>~$109&ndash;$159</td>
                  <td>$200&ndash;$400</td>
                </tr>
                <tr>
                  <td>Migraine refill</td>
                  <td>$79</td>
                  <td>$15&ndash;$60 (sumatriptan generic)</td>
                  <td>~$94&ndash;$139</td>
                  <td>$250&ndash;$500 (neurology)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="cst-cost-note">
            Medication prices are GoodRx estimates for generic equivalents at major retail pharmacies (2025). Branded versions cost significantly more.
            Use costplusdrugs.com or goodrx.com to compare current pricing at pharmacies near you before picking up your prescription.
          </p>
        </section>

        <hr className="cst-divider" />

        {/* How to minimize cost */}
        <section className="cst-section" aria-labelledby="minimize-heading">
          <h2 id="minimize-heading" className="cst-h2">How to Minimize Your Total Cost of Care</h2>
          <p className="cst-p">
            The TeleDirectMD visit fee is fixed at $79. The variable cost is what you pay the pharmacy for your medication.
            Here are proven strategies to reduce that cost significantly.
          </p>
          <div className="cst-two-col">
            <div className="cst-info-box cst-info-box--teal">
              <h3 className="cst-h3">Before you fill your prescription</h3>
              <ul className="cst-list">
                <li><strong>Compare using GoodRx:</strong> Enter the drug name and your zip code at goodrx.com to see prices across nearby pharmacies. Price differences of 60\u201380% for the same generic are common.</li>
                <li><strong>Try Cost Plus Drugs:</strong> Mark Cuban\u2019s costplusdrugs.com offers drastically reduced prices on many generics, often $4\u201315 for a course of antibiotics.</li>
                <li><strong>Check Amazon Pharmacy:</strong> For Prime members, Amazon Pharmacy offers competitive pricing with same-day or next-day delivery in many cities.</li>
                <li><strong>Use Costco or Walmart pharmacy:</strong> Both have historically low generic prices without a warehouse membership required for the pharmacy counter.</li>
              </ul>
            </div>
            <div className="cst-info-box cst-info-box--teal">
              <h3 className="cst-h3">Insurance and HSA/FSA tips</h3>
              <ul className="cst-list">
                <li><strong>Use your HSA or FSA:</strong> Both the TeleDirectMD visit and your pharmacy medication are qualified medical expenses under IRS rules. Pay with your HSA/FSA card to use pre-tax dollars.</li>
                <li><strong>Check if TeleDirectMD is in-network:</strong> Aetna, BCBS, and UHC members in certain states can use insurance, which may reduce the visit cost further. See the insurance page.</li>
                <li><strong>Submit an out-of-network claim:</strong> Even if TeleDirectMD is not in-network with your specific plan, you may be able to submit the $79 as an out-of-network expense for partial reimbursement. Check your Explanation of Benefits for your telehealth OON benefit.</li>
                <li><strong>Prescription discount vs. insurance:</strong> For low-cost generics, a GoodRx coupon is often cheaper than running the prescription through insurance (copay + deductible).</li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="cst-divider" />

        {/* Why cost matters in telehealth */}
        <section className="cst-section" aria-labelledby="why-heading">
          <h2 id="why-heading" className="cst-h2">Why Telehealth Cost Transparency Matters</h2>
          <p className="cst-p">
            A 2023 analysis by the Kaiser Family Foundation found that cost was the primary reason adults delayed or skipped
            necessary medical care. For common acute conditions — UTIs, respiratory infections, skin conditions, and medication refills
            — the barrier is not access to a physician but the cost and inconvenience of getting to one. Telehealth at a predictable,
            transparent price point removes both barriers simultaneously.
          </p>
          <p className="cst-p">
            TeleDirectMD publishes the $79 flat fee prominently and without asterisks because transparency is a deliberate
            practice policy. There is no fine print about facility fees, administrative charges, or per-prescription billing.
            The only additional cost is what the pharmacy charges for your medication, which is standard across all healthcare
            settings. Dr. Bhavsar is also available to discuss which pharmacy options and discount programs are appropriate
            for the specific prescription written.
          </p>
          <p className="cst-p">
            For patients managing chronic conditions — asthma, diabetes, hypertension, hypothyroidism, migraines — the cumulative
            savings from telehealth refill visits over a year are substantial. A patient who refills three prescriptions per year
            through TeleDirectMD instead of scheduling quarterly primary care visits spends $237 on visit fees versus $600&ndash;$900
            for in-person visits with a self-pay primary care physician.
          </p>
        </section>

        <hr className="cst-divider" />

        {/* Insurance section */}
        <section className="cst-section" aria-labelledby="insurance-heading">
          <h2 id="insurance-heading" className="cst-h2">When Insurance Lowers the Cost Further</h2>
          <p className="cst-p">
            TeleDirectMD accepts Aetna, Blue Cross Blue Shield (select plans), and UnitedHealthcare commercial plans in
            a growing number of states. When TeleDirectMD is in-network with your specific plan and state, your cost is
            reduced to your standard telehealth copay — which may be $0, $10, $20, or $40 depending on your benefit tier.
          </p>
          <p className="cst-p">
            The <a href="/insurance">insurance page</a> lists current accepted plans and states. If your plan is listed as
            accepted but your state is not, you can still book self-pay at $79. TeleDirectMD does not bill insurance in states
            where it is not in-network.
          </p>
          <p className="cst-p">
            Medicaid plans, including managed Medicaid products from Aetna Better Health, are not accepted. Patients covered
            under Medicaid can book as self-pay for $79. Medicare Advantage plans vary — contact TeleDirectMD at
            contact@teledirectmd.com to verify your specific plan.
          </p>
        </section>

        <hr className="cst-divider" />

        {/* FAQ */}
        <section className="cst-section" aria-labelledby="faq-heading">
          <FaqAccordion
            items={FAQS.map((f) => ({ question: f.question, answer: f.answer }))}
            sectionTitle="Cost FAQ"
            sectionId="faq"
          />
        </section>

        {/* Related links */}
        <section className="cst-section" aria-labelledby="related-heading">
          <h2 id="related-heading" className="cst-h2">Related Resources</h2>
          <div className="cst-link-cloud">
            <a href="/compare">Compare TeleDirectMD vs. Competitors</a>
            <a href="/insurance">Insurance &amp; Pricing</a>
            <a href="/symptoms">Symptoms Directory</a>
            <a href="/faq">FAQ</a>
            <a href="/about">About Dr. Bhavsar, MD</a>
            <a href="/states-we-serve">States We Serve</a>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="cst-cta-bar">
          <div>
            <h3>See a doctor online for $79 — flat, no surprises</h3>
            <p>Same-day video visit with a board-certified MD. Prescriptions to your pharmacy. HSA/FSA accepted.</p>
          </div>
          <div className="cst-cta-bar-actions">
            <a href="/book-online" className="cst-btn cst-btn-primary">Book Now</a>
            <a href="/insurance" className="cst-btn cst-btn-outline">Check Insurance</a>
          </div>
        </div>

      </div>
    </>
  );
}
