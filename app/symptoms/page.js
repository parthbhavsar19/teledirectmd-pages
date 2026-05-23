import { getAggregateRating, getReviewBlock } from '../../lib/review-schema';
import FaqAccordion from '../components/FaqAccordion';
import { SYMPTOM_PAGE_SLUGS } from '../../lib/symptom-pages-config';

export const metadata = {
  title: 'Symptoms & Online Treatment | TeleDirectMD',
  description:
    'Look up your symptom and see a board-certified MD by same-day video visit. TeleDirectMD evaluates 20+ symptoms — UTI, sinus infection, strep, acne, migraines, cold sores, pink eye, and more — for a flat $79 self-pay fee in 42 states + DC.',
  alternates: { canonical: 'https://teledirectmd.com/symptoms' },
  robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  authors: [{ name: 'Parth Bhavsar, MD' }],
  openGraph: {
    type: 'website',
    siteName: 'TeleDirectMD',
    locale: 'en_US',
    title: 'Symptoms & Online Treatment | TeleDirectMD',
    description:
      'Match your symptom to a board-certified MD video visit. $79 flat, same-day, 42 states + DC. No membership needed.',
    url: 'https://teledirectmd.com/symptoms',
  },
};

const BASE_URL = 'https://teledirectmd.com';

// Symptom catalog — name, description, slug.
// Pulled from SYMPTOM_PAGE_SLUGS list; descriptions written for SEO card copy.
const SYMPTOM_CATALOG = [
  {
    slug: 'acid-reflux',
    name: 'Acid Reflux',
    desc: 'Persistent heartburn or regurgitation? An online physician can evaluate GERD symptoms and discuss prescription-strength options.',
  },
  {
    slug: 'acne-breakout',
    name: 'Acne Breakout',
    desc: 'Inflammatory acne, stubborn comedones, or flare-ups that over-the-counter products cannot control — evaluated by a physician online.',
  },
  {
    slug: 'allergy-symptoms',
    name: 'Allergy Symptoms',
    desc: 'Seasonal sneezing, itchy eyes, nasal congestion, and post-nasal drip evaluated online with prescription antihistamines or nasal steroids when appropriate.',
  },
  {
    slug: 'asthma',
    name: 'Asthma',
    desc: 'Established asthma patients can get rescue inhaler and controller medication refills via a quick video visit — no in-person appointment required.',
  },
  {
    slug: 'birth-control',
    name: 'Birth Control',
    desc: 'Oral contraceptive refills and new-start evaluations available via video visit for adults 18+ with no prior complications.',
  },
  {
    slug: 'bronchitis',
    name: 'Bronchitis',
    desc: 'Productive cough lasting more than a week, chest tightness, and wheezing — differentiated from pneumonia and treated appropriately online.',
  },
  {
    slug: 'burning-urination',
    name: 'Burning Urination',
    desc: 'Painful urination, urgency, and frequency are classic UTI symptoms. A physician can evaluate and send antibiotics to your pharmacy the same day.',
  },
  {
    slug: 'cold-sore',
    name: 'Cold Sore',
    desc: 'Cold sores caused by HSV-1 can be treated with antiviral medication. Get a same-day prescription for a new outbreak or suppression therapy.',
  },
  {
    slug: 'cystic-acne',
    name: 'Cystic Acne',
    desc: 'Painful, deep cysts that leave scarring require physician-grade treatment. Online evaluation for topical or oral antibiotics and referral planning.',
  },
  {
    slug: 'ear-pain',
    name: 'Ear Pain',
    desc: 'Ear pain, fullness, and muffled hearing from swimmer\u2019s ear or early otitis media can often be evaluated and treated via video visit.',
  },
  {
    slug: 'erectile-dysfunction',
    name: 'Erectile Dysfunction',
    desc: 'ED affects roughly 30 million men in the US. Physician evaluation and evidence-based treatment options including PDE5 inhibitors where appropriate.',
  },
  {
    slug: 'migraine',
    name: 'Migraine',
    desc: 'Established migraine patients can refill triptans and preventive medications. New-onset severe headache requires in-person evaluation first.',
  },
  {
    slug: 'persistent-cough',
    name: 'Persistent Cough',
    desc: 'A cough that won\u2019t go away after two weeks may signal post-viral irritation, GERD, or an underlying issue. Physician evaluation online.',
  },
  {
    slug: 'pink-eye',
    name: 'Pink Eye',
    desc: 'Bacterial conjunctivitis with discharge, crusting, and redness is a common same-day telehealth visit. Antibiotic eye drops prescribed when indicated.',
  },
  {
    slug: 'sinus-infection',
    name: 'Sinus Infection',
    desc: 'Facial pressure, thick colored discharge, and fever after 10+ days of symptoms suggest bacterial sinusitis — treated online with antibiotics when appropriate.',
  },
  {
    slug: 'sinus-pressure',
    name: 'Sinus Pressure',
    desc: 'Sinus pressure and congestion can stem from viral URI, allergies, or early sinusitis. A physician can differentiate and prescribe targeted treatment.',
  },
  {
    slug: 'skin-rash',
    name: 'Skin Rash',
    desc: 'New rashes, contact dermatitis, eczema flares, and hives are evaluated by description and photo. Treatment includes topical steroids and antihistamines.',
  },
  {
    slug: 'sore-throat',
    name: 'Sore Throat',
    desc: 'Determine if your sore throat is viral or strep — and get antibiotics if appropriate — without a clinic visit.',
  },
  {
    slug: 'strep-throat',
    name: 'Strep Throat',
    desc: 'Severe sore throat with exudate, swollen lymph nodes, and fever. Rapid strep testing guidance and antibiotic prescriptions sent same day.',
  },
  {
    slug: 'yeast-infection',
    name: 'Yeast Infection',
    desc: 'Vaginal yeast infections with classic symptoms can be evaluated and treated online with prescription antifungals — private, fast, and convenient.',
  },
];

const FAQS = [
  {
    question: 'Can I see a doctor online for symptoms without leaving home?',
    answer:
      'Yes. TeleDirectMD offers live, synchronous video visits with a board-certified MD — Dr. Parth Bhavsar — for adults 18+ physically located in one of the 42 states + DC the practice serves. You connect by secure video, describe your symptoms, and the physician evaluates you in real time. If a prescription is appropriate, it is sent to your preferred pharmacy the same day. There is no commute, no waiting room, and no subscription required.',
  },
  {
    question: 'What symptoms can be evaluated online?',
    answer:
      'TeleDirectMD evaluates 20+ symptom categories including UTI symptoms (burning urination), sore throat and strep throat, sinus pressure and sinus infections, acne and cystic acne, cold sores, pink eye, ear pain, migraines, bronchitis, persistent cough, skin rashes, yeast infections, erectile dysfunction, acid reflux, asthma, birth control, allergy symptoms, and more. Life-threatening emergencies — chest pain, difficulty breathing, altered consciousness, stroke symptoms — should go to the nearest ER or call 911.',
  },
  {
    question: 'How much does a symptom evaluation cost at TeleDirectMD?',
    answer:
      'Self-pay visits are a flat $79 — no hidden fees, no per-feature charges, no subscription. That compares with $139+ at a retail clinic like CVS MinuteClinic, roughly $200 at urgent care, and $2,715 average for an ER visit (Mira Health, 2025). TeleDirectMD also accepts Aetna, Blue Cross Blue Shield, and UnitedHealthcare commercial plans in a growing number of states. HSA and FSA cards are accepted.',
  },
  {
    question: 'Will I get a prescription from an online symptom visit?',
    answer:
      'A prescription is not guaranteed — it depends on what is clinically appropriate for your specific evaluation. If the physician determines that prescription treatment is indicated, the e-prescription is sent to your chosen pharmacy the same day. TeleDirectMD does not prescribe controlled substances. If your symptoms indicate something beyond a telemedicine scope — such as a need for an in-office exam, imaging, or laboratory tests — the physician will advise accordingly.',
  },
  {
    question: 'Is TeleDirectMD available in my state?',
    answer:
      'TeleDirectMD is licensed in 42 states + Washington DC. You must be physically located in a covered state at the time of your visit — not just a resident. Visit the States We Serve page for the full list. Coverage is expanding to additional states as new licenses are obtained.',
  },
  {
    question: 'What happens if my symptom requires an in-person visit?',
    answer:
      'The physician will tell you directly. If red-flag symptoms are present — such as high fever with stiff neck, chest pain, or signs of a serious infection — you will be advised to seek emergency or urgent in-person care. TeleDirectMD physicians are trained to recognize conditions outside the safe scope of telemedicine and will never delay appropriate care.',
  },
  {
    question: 'Can children use TeleDirectMD for symptoms?',
    answer:
      'No. TeleDirectMD evaluates adults aged 18 and older only. For pediatric symptoms, use your child\u2019s pediatrician, an urgent care with pediatric capabilities, or a pediatric telemedicine service.',
  },
  {
    question: 'How long does a symptom visit take?',
    answer:
      'Most video visits run 10\u201315 minutes. You will be asked to briefly describe your symptoms, duration, and any medications you have already tried. The physician reviews your medical history and completes a focused evaluation. If a prescription is sent, it typically reaches the pharmacy within 30 minutes of the visit ending.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      '@id': `${BASE_URL}/symptoms#breadcrumbs`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Symptoms', item: `${BASE_URL}/symptoms/` },
      ],
    },
    {
      '@type': 'CollectionPage',
      '@id': `${BASE_URL}/symptoms#webpage`,
      url: `${BASE_URL}/symptoms/`,
      name: 'Symptoms & Online Treatment | TeleDirectMD',
      description:
        'Hub page listing 20 symptom guides for adult telemedicine visits. Each symptom links to a detailed page with clinical context, treatment options, and $79 flat-fee booking.',
      inLanguage: 'en-US',
      breadcrumb: { '@id': `${BASE_URL}/symptoms#breadcrumbs` },
      publisher: { '@id': `${BASE_URL}/#organization` },
      reviewedBy: { '@id': `${BASE_URL}/#physician` },
      lastReviewed: '2026-05-23',
      hasPart: SYMPTOM_CATALOG.map((s) => ({
        '@type': 'WebPage',
        '@id': `${BASE_URL}/symptoms/${s.slug}/`,
        url: `${BASE_URL}/symptoms/${s.slug}/`,
        name: s.name,
        description: s.desc,
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
      '@id': `${BASE_URL}/symptoms#faqpage`,
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
  .sym-wrap{max-width:1100px;margin:0 auto;padding:0 1.5rem 4rem;font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:var(--tdmd-text);}
  .sym-hero{background:var(--tdmd-bg-soft);padding:3rem 0 2.5rem;}
  .sym-hero-inner{max-width:1100px;margin:0 auto;padding:0 1.5rem;}
  .sym-bc{font-size:0.88rem;color:var(--tdmd-muted);margin-bottom:1.25rem;}
  .sym-bc a{color:var(--tdmd-navy);font-weight:700;text-decoration:underline;text-underline-offset:2px;}
  .sym-bc span{margin:0 0.4rem;}
  .sym-h1{font-size:clamp(1.75rem,4vw,2.4rem);font-weight:800;margin:0 0 0.75rem;letter-spacing:-0.02em;line-height:1.2;color:var(--tdmd-text);}
  .sym-lead{font-size:1.05rem;line-height:1.65;max-width:72ch;margin:0 0 1.25rem;color:var(--tdmd-text);}
  .sym-badge-row{display:flex;flex-wrap:wrap;gap:0.5rem 0.75rem;margin-bottom:1.25rem;}
  .sym-badge{background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:999px;padding:0.3rem 0.85rem;font-size:0.88rem;font-weight:700;color:var(--tdmd-navy);}
  .sym-badge--accent{background:var(--tdmd-accent);color:#fff;border-color:var(--tdmd-accent);}
  .sym-ctas{display:flex;flex-wrap:wrap;gap:0.75rem;margin-bottom:1.25rem;}
  .sym-btn{display:inline-block;padding:0.65rem 1.5rem;border-radius:999px;font-weight:700;font-size:0.95rem;text-decoration:none;text-align:center;}
  .sym-btn-primary{background:var(--tdmd-teal);color:#fff;}
  .sym-btn-outline{border:2px solid var(--tdmd-teal);color:var(--tdmd-teal);background:var(--tdmd-card);}
  .sym-reviewed{font-size:0.85rem;color:var(--tdmd-muted);margin:0.5rem 0 0;}
  .sym-reviewed a{color:var(--tdmd-navy);font-weight:700;text-decoration:underline;text-underline-offset:2px;}
  .sym-section{padding:2.5rem 0;}
  .sym-h2{font-size:clamp(1.3rem,3vw,1.75rem);font-weight:800;margin:0 0 0.75rem;letter-spacing:-0.01em;color:var(--tdmd-text);}
  .sym-h3{font-size:1.15rem;font-weight:700;margin:0 0 0.5rem;color:var(--tdmd-navy);}
  .sym-p{font-size:1rem;line-height:1.7;margin:0 0 1rem;color:var(--tdmd-text);}
  .sym-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:1rem;margin-top:1rem;}
  .sym-card{background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:14px;padding:1.1rem 1.2rem;box-shadow:var(--tdmd-shadow);text-decoration:none;color:var(--tdmd-text);display:block;transition:border-color .2s,box-shadow .2s;}
  .sym-card:hover{border-color:var(--tdmd-teal);box-shadow:0 4px 16px rgba(0,107,115,0.12);}
  .sym-card-title{font-weight:800;font-size:1.05rem;color:var(--tdmd-navy);margin:0 0 0.35rem;letter-spacing:-0.01em;}
  .sym-card-desc{font-size:0.88rem;color:var(--tdmd-muted);line-height:1.45;margin:0;}
  .sym-card-arrow{display:inline-block;margin-top:0.5rem;font-size:0.82rem;color:var(--tdmd-teal);font-weight:700;}
  .sym-vbars{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:1rem;align-items:end;padding:1.5rem 0.5rem 0.5rem;border-bottom:2px solid var(--tdmd-border);min-height:300px;margin-top:1rem;}
  .tdmd-vbar{display:flex;flex-direction:column;align-items:center;justify-content:flex-end;height:260px;position:relative;}
  .tdmd-vbar__value{font-weight:800;color:var(--tdmd-navy);font-size:0.9rem;margin-bottom:0.3rem;text-align:center;line-height:1.2;white-space:nowrap;}
  .tdmd-vbar__fill{width:100%;max-width:100px;border-radius:10px 10px 0 0;background:linear-gradient(180deg,rgba(0,62,82,.85) 0%,rgba(0,107,115,.65) 100%);min-height:8px;}
  .tdmd-vbar__fill--tdmd{background:linear-gradient(180deg,var(--tdmd-accent) 0%,#ff8a6e 100%);box-shadow:0 0 0 3px rgba(255,90,54,.15);}
  .tdmd-vbar__label{margin-top:0.6rem;padding-top:0.5rem;border-top:1px solid var(--tdmd-border);font-weight:700;color:var(--tdmd-text);font-size:0.82rem;text-align:center;line-height:1.3;width:100%;}
  .tdmd-vbar__label--tdmd{color:var(--tdmd-accent);}
  .sym-cost-note{margin-top:0.75rem;font-size:0.88rem;color:var(--tdmd-muted);}
  .sym-two-col{display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-top:1rem;}
  .sym-info-box{background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:14px;padding:1.25rem 1.4rem;box-shadow:var(--tdmd-shadow);}
  .sym-info-box--teal{border-top:4px solid var(--tdmd-teal);}
  .sym-info-box--accent{border-top:4px solid var(--tdmd-accent);}
  .sym-list{padding-left:1.25rem;margin:0.5rem 0;display:grid;gap:0.4rem;font-size:0.96rem;line-height:1.55;}
  .sym-link-cloud{display:flex;flex-wrap:wrap;gap:0.5rem 0.75rem;margin-top:1rem;}
  .sym-link-cloud a{color:var(--tdmd-navy);font-weight:700;text-decoration:underline;text-underline-offset:2px;font-size:0.95rem;}
  .sym-link-cloud a:hover{color:var(--tdmd-teal);}
  .sym-cta-bar{margin-top:2.5rem;background:linear-gradient(135deg,rgba(0,107,115,.08),rgba(0,62,82,.04));border:1px solid var(--tdmd-border);border-radius:var(--tdmd-radius);padding:1.25rem 1.5rem;display:flex;align-items:center;justify-content:space-between;gap:1rem;flex-wrap:wrap;}
  .sym-cta-bar h3{margin:0;font-size:1.15rem;font-weight:800;letter-spacing:-0.01em;}
  .sym-cta-bar p{margin:0.35rem 0 0;color:var(--tdmd-muted);font-size:0.95rem;max-width:62ch;}
  .sym-cta-bar-actions{display:flex;gap:0.75rem;flex-wrap:wrap;align-items:center;}
  .sym-divider{border:none;border-top:1px solid var(--tdmd-border);margin:2rem 0;}
  @media(max-width:768px){.sym-two-col{grid-template-columns:1fr;}.sym-vbars{grid-template-columns:repeat(4,minmax(0,1fr));gap:0.4rem;min-height:240px;padding:1rem 0.2rem 0.5rem;}.tdmd-vbar{height:200px;}.tdmd-vbar__value{font-size:0.72rem;}.tdmd-vbar__label{font-size:0.68rem;}}
  @media(max-width:520px){.sym-grid{grid-template-columns:1fr;}}
`;

const COST_BARS = [
  { label: 'TeleDirectMD', value: '$79', pct: 3, tdmd: true },
  { label: 'Retail Clinic', value: '$139', pct: 5, tdmd: false },
  { label: 'Urgent Care', value: '$200', pct: 7, tdmd: false },
  { label: 'ER Visit', value: '$2,715', pct: 100, tdmd: false },
];

export default function SymptomsHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />

      {/* Hero */}
      <div className="sym-hero">
        <div className="sym-hero-inner">
          <nav className="sym-bc" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Symptoms</span>
          </nav>
          <h1 className="sym-h1">Symptoms &amp; Online Treatment</h1>
          <p className="sym-lead">
            Every symptom listed below can be evaluated by a board-certified physician — Dr.&nbsp;Parth Bhavsar, MD — through a live, secure video visit.
            No commute, no waiting room, no membership. The visit is a flat <strong>$79</strong> self-pay, with select commercial insurance also accepted.
            If your symptom warrants prescription treatment, the e-prescription goes to your preferred pharmacy the same day.
            Use this directory to find the right guide for your symptom and book when you are ready.
          </p>
          <div className="sym-badge-row">
            <span className="sym-badge sym-badge--accent">$79 Flat Fee</span>
            <span className="sym-badge">Same-Day Appointments</span>
            <span className="sym-badge">42 States + DC</span>
            <span className="sym-badge">Board-Certified MD Only</span>
            <span className="sym-badge">No Membership</span>
          </div>
          <div className="sym-ctas">
            <a href="/book-online" className="sym-btn sym-btn-primary">Book a $79 Visit</a>
            <a href="/what-we-treat" className="sym-btn sym-btn-outline">All Conditions</a>
          </div>
          <p className="sym-reviewed">
            Medically reviewed by{' '}
            <a href="/about">Parth Bhavsar, MD</a>
            {' '}(NPI&nbsp;1104323203) &mdash; Last reviewed: May 23, 2026
          </p>
        </div>
      </div>

      <div className="sym-wrap">

        {/* Symptom Catalog Grid */}
        <section className="sym-section" aria-labelledby="catalog-heading">
          <h2 id="catalog-heading" className="sym-h2">Symptom Directory — 20 Guides</h2>
          <p className="sym-p">
            Each guide below covers how the symptom is evaluated online, what clinical findings support or rule out telehealth treatment,
            which medications are typically appropriate, and what cost to expect — all from a physician-reviewed perspective.
            Select your symptom to read the full guide and find booking options for your state.
          </p>
          <div className="sym-grid">
            {SYMPTOM_CATALOG.map((s) => (
              <a key={s.slug} href={`/symptoms/${s.slug}`} className="sym-card">
                <p className="sym-card-title">{s.name}</p>
                <p className="sym-card-desc">{s.desc}</p>
                <span className="sym-card-arrow">Read guide &rarr;</span>
              </a>
            ))}
          </div>
        </section>

        <hr className="sym-divider" />

        {/* What telemedicine can and cannot evaluate */}
        <section className="sym-section" aria-labelledby="scope-heading">
          <h2 id="scope-heading" className="sym-h2">What Telemedicine Can — and Cannot — Evaluate</h2>
          <p className="sym-p">
            Telemedicine is not a replacement for emergency or in-person care in all situations. Understanding the appropriate scope of a video
            visit helps you make an informed decision about where to seek care. Dr. Bhavsar uses clinical judgment on every visit to determine
            whether telemedicine is appropriate or whether in-person evaluation is indicated.
          </p>
          <div className="sym-two-col">
            <div className="sym-info-box sym-info-box--teal">
              <h3 className="sym-h3">Conditions well-suited for telehealth</h3>
              <ul className="sym-list">
                <li>Uncomplicated urinary tract infections (classic symptoms, no fever or flank pain)</li>
                <li>Acute sinusitis &mdash; bacterial, with symptoms lasting 10+ days</li>
                <li>Strep throat with classic presentation (exudate, high fever, no rash)</li>
                <li>Bacterial conjunctivitis (pink eye) with mucopurulent discharge</li>
                <li>Acne &mdash; inflammatory or cystic, photos reviewed</li>
                <li>Cold sores (HSV-1) &mdash; antiviral initiation or suppression</li>
                <li>Erectile dysfunction in adults without significant comorbidities</li>
                <li>Chronic medication refills (asthma inhalers, birth control, migraines)</li>
                <li>Seasonal allergies &mdash; prescription antihistamines and nasal steroids</li>
                <li>Skin rashes &mdash; contact dermatitis, eczema flares, urticaria</li>
              </ul>
            </div>
            <div className="sym-info-box sym-info-box--accent">
              <h3 className="sym-h3">Symptoms requiring in-person or emergency care</h3>
              <ul className="sym-list">
                <li>Chest pain, pressure, or tightness radiating to the jaw or arm</li>
                <li>Shortness of breath at rest or with minimal exertion</li>
                <li>Fever with stiff neck, light sensitivity, or severe headache</li>
                <li>Signs of stroke (facial droop, arm weakness, speech difficulty)</li>
                <li>Severe abdominal pain with guarding or rigidity</li>
                <li>Suspected fracture, dislocation, or deep laceration</li>
                <li>Altered consciousness or confusion</li>
                <li>Eye injuries or chemical exposure</li>
                <li>First-episode psychosis or active suicidal ideation</li>
                <li>Children under 18 &mdash; TeleDirectMD treats adults only</li>
              </ul>
            </div>
          </div>
          <p className="sym-p" style={{ marginTop: '1rem' }}>
            If you are unsure whether your symptoms are appropriate for a video visit, book anyway. Dr. Bhavsar will tell you clearly during
            the evaluation if in-person or emergency care is warranted. No prescription is given without a proper clinical basis.
          </p>
        </section>

        <hr className="sym-divider" />

        {/* Cost comparison section */}
        <section className="sym-section" aria-labelledby="cost-heading">
          <h2 id="cost-heading" className="sym-h2">Cost Comparison: Online vs. In-Person Care</h2>
          <p className="sym-p">
            The cost of medical care varies widely by setting. An uncomplicated symptom evaluation — strep throat, UTI, sinus infection,
            pink eye — costs dramatically more at a brick-and-mortar site than through a physician-led video visit. The chart below shows
            average out-of-pocket costs for an adult paying cash. Sources: Mira Health (2025), CVS MinuteClinic published pricing (2024).
          </p>
          <div className="sym-vbars" aria-label="Cost comparison bar chart">
            {COST_BARS.map((bar) => {
              const heightPct = Math.round((bar.pct / 100) * 100);
              return (
                <div key={bar.label} className="tdmd-vbar">
                  <div className="tdmd-vbar__value">{bar.value}</div>
                  <div
                    className={`tdmd-vbar__fill${bar.tdmd ? ' tdmd-vbar__fill--tdmd' : ''}`}
                    style={{ height: `${heightPct}%` }}
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
          <p className="sym-cost-note">
            ER average: $2,715 (Mira Health, Feb 2025). Urgent care: ~$200 cash-pay average. Retail clinic (CVS MinuteClinic): $99&ndash;$139.
            TeleDirectMD: $79 flat. Prescription costs are separate and vary by pharmacy; GoodRx discounts often apply.
          </p>
          <p className="sym-p" style={{ marginTop: '1rem' }}>
            For patients with Aetna, Blue Cross Blue Shield, or UnitedHealthcare commercial coverage, TeleDirectMD may be in-network in
            your state, reducing the cost further. Check the <a href="/insurance">insurance page</a> for current plan and state coverage.
            HSA and FSA cards are accepted for self-pay visits.
          </p>
        </section>

        <hr className="sym-divider" />

        {/* How a visit works */}
        <section className="sym-section" aria-labelledby="how-heading">
          <h2 id="how-heading" className="sym-h2">How a Symptom Visit Works at TeleDirectMD</h2>
          <p className="sym-p">
            The process is designed to be quick, private, and clinically thorough. Every visit follows the same sequence regardless of
            which symptom you are being seen for.
          </p>
          <div className="sym-two-col" style={{ marginTop: '0' }}>
            <div className="sym-info-box sym-info-box--teal">
              <h3 className="sym-h3">Before your visit</h3>
              <ol className="sym-list">
                <li><strong>Book online</strong> at teledirectmd.com/book-online. Select the date and time that works for you — same-day slots are usually available.</li>
                <li><strong>Complete your intake form.</strong> Describe your symptoms, list your current medications, and note any relevant medical history. This takes about 5 minutes.</li>
                <li><strong>Confirm your state.</strong> You must be physically located in a covered state at the time of your visit, not just a resident.</li>
              </ol>
            </div>
            <div className="sym-info-box sym-info-box--teal">
              <h3 className="sym-h3">During and after your visit</h3>
              <ol className="sym-list" start={4}>
                <li><strong>Join by secure video.</strong> Dr. Bhavsar reviews your intake, asks follow-up questions, and performs a focused clinical evaluation.</li>
                <li><strong>Receive your treatment plan.</strong> If a prescription is clinically appropriate, it is e-prescribed to your preferred pharmacy. You also receive clear guidance on next steps.</li>
                <li><strong>Follow up as needed.</strong> If your symptoms do not improve within the expected timeframe, return visits are welcome. TeleDirectMD keeps your visit record so follow-up is smooth.</li>
              </ol>
            </div>
          </div>
        </section>

        <hr className="sym-divider" />

        {/* Why physician-led matters */}
        <section className="sym-section" aria-labelledby="physician-heading">
          <h2 id="physician-heading" className="sym-h2">Why an MD-Only Model Matters for Symptom Evaluation</h2>
          <p className="sym-p">
            Many telehealth platforms use nurse practitioners (NPs) or physician assistants (PAs) for routine urgent care visits — in some cases
            without disclosing this to patients. TeleDirectMD is different: every visit is conducted by Dr. Parth Bhavsar, a board-certified
            Family Medicine physician (NPI&nbsp;1104323203). This means your symptom evaluation is always physician-led, not supervised by a
            physician reviewing the notes after the fact.
          </p>
          <p className="sym-p">
            This matters for nuanced presentations. A persistent cough after a URI might be post-viral bronchospasm, GERD, or early
            pneumonia — the differential is different. A skin rash might be contact dermatitis, a drug reaction, or a tinea infection
            that looks similar. A physician&apos;s broader diagnostic training means more accurate evaluation and fewer inappropriate prescriptions.
            TeleDirectMD does not prescribe antibiotics for viral illnesses, does not prescribe controlled substances, and will always recommend
            in-person care when it is the appropriate standard.
          </p>
          <p className="sym-p">
            Dr. Bhavsar is licensed in 42 states + DC and has been featured as a medical expert in TIME, Newsweek, HuffPost, U.S. News,
            Fox News Digital, and more than 21 national publications. The same physician who sees you today is the one your visit record
            stays with — there is continuity that large multi-provider platforms cannot match.
          </p>
        </section>

        <hr className="sym-divider" />

        {/* Common symptom groups */}
        <section className="sym-section" aria-labelledby="groups-heading">
          <h2 id="groups-heading" className="sym-h2">Symptom Groups: Finding the Right Guide</h2>
          <p className="sym-p">
            Symptoms are grouped below by body system to help you navigate to the most relevant guide quickly.
            Each group links to the individual symptom pages where you will find the full clinical context.
          </p>

          <h3 className="sym-h3">Respiratory &amp; Throat</h3>
          <p className="sym-p">
            Sore throat, strep throat, persistent cough, bronchitis, sinus infection, and sinus pressure are among the most common reasons
            adults seek same-day medical care. Online evaluation can differentiate bacterial from viral illness, determine whether an antibiotic
            is warranted, and send a prescription without a clinic trip. Conditions like a severe sore throat with difficulty swallowing, a rash
            suggesting scarlet fever, or a cough with hemoptysis still require in-person evaluation.
          </p>
          <div className="sym-link-cloud">
            <a href="/symptoms/sore-throat">Sore Throat</a>
            <a href="/symptoms/strep-throat">Strep Throat</a>
            <a href="/symptoms/persistent-cough">Persistent Cough</a>
            <a href="/symptoms/bronchitis">Bronchitis</a>
            <a href="/symptoms/sinus-infection">Sinus Infection</a>
            <a href="/symptoms/sinus-pressure">Sinus Pressure</a>
            <a href="/symptoms/allergy-symptoms">Allergy Symptoms</a>
          </div>

          <h3 className="sym-h3" style={{ marginTop: '1.5rem' }}>Urinary &amp; Reproductive Health</h3>
          <p className="sym-p">
            Burning urination and urgency are hallmark UTI symptoms that can often be evaluated and treated entirely online.
            Yeast infections with classic presentation are similarly well-suited to telehealth. Birth control refills for women on
            established oral contraceptive regimens, and erectile dysfunction evaluation for adult men, are two additional high-volume
            categories where telehealth saves significant time and cost compared to scheduling a primary care appointment.
          </p>
          <div className="sym-link-cloud">
            <a href="/symptoms/burning-urination">Burning Urination (UTI)</a>
            <a href="/symptoms/yeast-infection">Yeast Infection</a>
            <a href="/symptoms/birth-control">Birth Control Refills</a>
            <a href="/symptoms/erectile-dysfunction">Erectile Dysfunction</a>
          </div>

          <h3 className="sym-h3" style={{ marginTop: '1.5rem' }}>Skin &amp; Eyes</h3>
          <p className="sym-p">
            Pink eye with mucopurulent discharge is one of the most common acute conditions treated via telehealth — antibiotic eye drops
            are prescribed when bacterial infection is likely. Skin rashes, acne, cystic acne, and cold sores are all evaluated with the help
            of photos shared during the visit. Eczema flares and contact dermatitis are assessed by history and lesion description.
            Conditions requiring biopsy or dermoscopy — such as atypical moles — are referred to dermatology.
          </p>
          <div className="sym-link-cloud">
            <a href="/symptoms/pink-eye">Pink Eye</a>
            <a href="/symptoms/acne-breakout">Acne Breakout</a>
            <a href="/symptoms/cystic-acne">Cystic Acne</a>
            <a href="/symptoms/cold-sore">Cold Sore</a>
            <a href="/symptoms/skin-rash">Skin Rash</a>
          </div>

          <h3 className="sym-h3" style={{ marginTop: '1.5rem' }}>Pain, Headache &amp; Ear</h3>
          <p className="sym-p">
            Migraine patients with an established diagnosis and prior triptan use can refill prescriptions efficiently online.
            Ear pain from otitis externa (swimmer&apos;s ear) or early otitis media is commonly evaluated via video visit.
            Acid reflux with classic heartburn pattern can be managed with prescription-strength acid suppression.
            New-onset severe headache — especially thunderclap or worst-headache-of-your-life — requires emergency evaluation, not telehealth.
          </p>
          <div className="sym-link-cloud">
            <a href="/symptoms/migraine">Migraine</a>
            <a href="/symptoms/ear-pain">Ear Pain</a>
            <a href="/symptoms/acid-reflux">Acid Reflux</a>
          </div>

          <h3 className="sym-h3" style={{ marginTop: '1.5rem' }}>Chronic &amp; Ongoing Conditions</h3>
          <p className="sym-p">
            Patients with stable asthma can refill rescue and controller inhalers without interrupting their care.
            Seasonal allergy sufferers can get prescription-strength antihistamines and intranasal corticosteroids when OTC options are
            insufficient. These refill visits are typically straightforward and can be completed in 10&ndash;15 minutes.
          </p>
          <div className="sym-link-cloud">
            <a href="/symptoms/asthma">Asthma Refills</a>
            <a href="/symptoms/allergy-symptoms">Allergy Symptoms</a>
            <a href="/symptoms/acid-reflux">Acid Reflux</a>
            <a href="/symptoms/migraine">Migraine Refills</a>
          </div>
        </section>

        <hr className="sym-divider" />

        {/* State coverage */}
        <section className="sym-section" aria-labelledby="states-heading">
          <h2 id="states-heading" className="sym-h2">States Where Symptom Evaluations Are Available</h2>
          <p className="sym-p">
            TeleDirectMD is currently licensed to provide telehealth services in 42 states and Washington DC. You must be physically located
            in a covered state at the time of your visit. The full state list is on the{' '}
            <a href="/states-we-serve">States We Serve</a> page. If your state is not currently covered, the practice is actively seeking
            additional licensure — check back or sign up for notifications.
          </p>
          <p className="sym-p">
            States not currently served include Alaska, Hawaii, New York, Massachusetts, Rhode Island, Vermont, New Mexico, Oregon,
            and Arkansas. Patients in those states should use a locally licensed telehealth service or visit an in-person provider.
          </p>
        </section>

        <hr className="sym-divider" />

        {/* FAQ */}
        <section className="sym-section" aria-labelledby="faq-heading">
          <FaqAccordion
            items={FAQS.map((f) => ({ question: f.question, answer: f.answer }))}
            sectionTitle="Frequently Asked Questions"
            sectionId="faq"
          />
        </section>

        {/* Related links */}
        <section className="sym-section" aria-labelledby="related-heading">
          <h2 id="related-heading" className="sym-h2">Explore Related Resources</h2>
          <div className="sym-link-cloud">
            <a href="/what-we-treat">All Conditions We Treat</a>
            <a href="/cost">Cost Guides by Condition</a>
            <a href="/insurance">Insurance &amp; Pricing</a>
            <a href="/faq">FAQ — Frequently Asked Questions</a>
            <a href="/about">About Dr. Bhavsar, MD</a>
            <a href="/states-we-serve">States We Serve</a>
            <a href="/health-guides">Health Guides</a>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="sym-cta-bar">
          <div>
            <h3>Ready to be seen today?</h3>
            <p>
              Board-certified physician, same-day video visit, $79 flat — select insurance also accepted.
              No membership, no hidden fees.
            </p>
          </div>
          <div className="sym-cta-bar-actions">
            <a href="/book-online" className="sym-btn sym-btn-primary">Book Online Now</a>
            <a href="/faq" className="sym-btn sym-btn-outline">Common Questions</a>
          </div>
        </div>

      </div>
    </>
  );
}
