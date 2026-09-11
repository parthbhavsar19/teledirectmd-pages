import comparison from '../../../data/competitor-comparison.json';
import states from '../../../data/states.json';
import { uninsuredCSS } from '../../../lib/uninsured-styles';
import { PHYSICIAN_NAME, PHYSICIAN_NPI, CREDENTIAL_BOARD } from '../../../lib/global-invariants';
import UninsuredCompareCards from './UninsuredCompareCards';
import UninsuredCoverageMap from './UninsuredCoverageMap';
import UninsuredStickyCta from './UninsuredStickyCta';
import UninsuredVideoHero from './UninsuredVideoHero';

/* Coverage comes from data/states.json, the same source the state pages and the
   sitemap build from, so a state launch updates the map, the list and the
   structured data without an edit here. Copy says "40+ states" rather than a
   number, per brand phrasing; the exhaustive list stays on the page inside the
   coverage section for patients checking whether they qualify. */
const SERVED = [...states].sort((a, b) => a.name.localeCompare(b.name));
const STATE_ABBRS = SERVED.map((s) => s.abbr);
const STATE_NAMES = SERVED.map((s) => s.name);
const ALL_US_STATES = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana',
  'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
  'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
  'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma',
  'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
  'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
const NOT_YET = ALL_US_STATES.filter((n) => !STATE_NAMES.includes(n));

const Tick = () => (
  <span className="uac-tick" aria-hidden="true">
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
  </span>
);

const HERO_CHIPS = [
  { label: 'UTI', slug: 'uti-treatment-online' },
  { label: 'Sinus infection', slug: 'sinus-infection-treatment-online' },
  { label: 'Blood pressure refill', slug: 'hypertension-refills-online' },
  { label: 'GERD', slug: 'acid-reflux-refills-online' },
  { label: 'Cold & flu', slug: 'common-cold-treatment-online' },
];

const INCLUDED = [
  'A 10 to 15 minute video visit with the same board-certified family medicine physician every time',
  'E-prescription to any US pharmacy you choose, including Cost Plus Drugs and Costco',
  'No enrollment fee, no membership, no subscription, no facility fee',
  'No pressure to sign up for monthly medication delivery',
  'HSA and FSA cards accepted at checkout',
  'Follow-ups are the same $79 flat. No first-visit surcharge.',
];

const TELEHEALTH_OK = [
  'UTI, sinus infection, bronchitis, strep-like symptoms',
  'Cold, flu, cough, low-grade fever',
  'Rash, eczema, cold sore, mild acne',
  'Refills: hypertension, diabetes, GERD, statins (non-controlled)',
  'Migraine, reflux, mild allergic reaction',
  'Pink eye, adult ear pain, recurrent UTI',
  'Travel medicine, work notes, med reviews',
];

const GO_IN_PERSON = [
  'Chest pain, shortness of breath, heart-attack symptoms',
  'Stroke signs: face droop, arm weakness, slurred speech',
  'Uncontrolled bleeding or suspected fracture',
  'Severe abdominal pain, vomiting blood, black stools',
  'Head injury with confusion or loss of consciousness',
  'Pregnancy complications, severe pediatric illness',
  'Mental health emergency: call or text 988',
];

const TAG_COLORS = { Infection: '#14706B', Chronic: '#E85D3C', Skin: '#C75B4A', Respiratory: '#2E7D6E' };

const CONDITIONS = [
  { tag: 'Infection', name: 'UTI', blurb: 'Uncomplicated UTI evaluation; antibiotics if appropriate.', slug: 'uti-treatment-online' },
  { tag: 'Infection', name: 'Sinus infection', blurb: 'Bacterial vs viral; antibiotics only when indicated.', slug: 'sinus-infection-treatment-online' },
  { tag: 'Respiratory', name: 'Cold, flu, respiratory', blurb: 'Same-day evaluation, antivirals for eligible flu.', slug: 'common-cold-treatment-online' },
  { tag: 'Chronic', name: 'Hypertension', blurb: 'Ongoing BP management and refills, same physician.', slug: 'hypertension-refills-online' },
  { tag: 'Chronic', name: 'Type 2 diabetes', blurb: 'Refills, dose adjustments, A1c follow-up.', slug: 'diabetes-refills-online' },
  { tag: 'Chronic', name: 'Acid reflux / GERD', blurb: 'PPI and H2 blocker management, no specialist copay.', slug: 'acid-reflux-refills-online' },
  { tag: 'Skin', name: 'Eczema & skin', blurb: 'Topical prescriptions evaluated by video.', slug: 'eczema-treatment-online' },
  { tag: 'Infection', name: 'Influenza', blurb: 'Same-day evaluation, antivirals when eligible.', slug: 'influenza-treatment-online' },
  { tag: 'Chronic', name: 'Migraine', blurb: 'Abortive and preventive prescriptions.', slug: 'migraine-refills-online' },
  { tag: 'Infection', name: 'Pink eye', blurb: 'Drops when bacterial, guidance when viral.', slug: 'pink-eye-treatment-online' },
];

const STEPS = [
  { img: '/images/steps/step-book.jpg', meta: '01 · about 2 minutes', title: 'Request a visit', body: 'Open TeleDirectMD.com on your phone. See the $79 price before you confirm. Tell us your state and symptoms.' },
  { img: '/images/steps/step-video.jpg', meta: '02 · 10 to 15 minutes', title: 'Connect by video', body: 'You meet Dr. Bhavsar by secure video. Same-day slots most days, plus evenings and weekends.' },
  { img: '/images/steps/step-rx.jpg', meta: '03 · minutes later', title: 'Get treated', body: "Prescription e-sent to the pharmacy you choose. If your case isn't right for telehealth, you hear it directly and get pointed to the right care." },
];

const PHARMACIES = [
  { href: 'https://costplusdrugs.com', name: 'Cost Plus Drugs', note: 'Often the cheapest source for common generics.' },
  { href: 'https://goodrx.com', name: 'GoodRx coupons', note: 'Show at pickup. No membership needed for a coupon.' },
  { href: 'https://www.walmart.com/cp/4-prescriptions/1078664', name: 'Walmart $4 / $10 list', note: 'Covers many common medications.' },
  { href: 'https://www.costco.com/pharmacy.html', name: 'Costco pharmacy', note: 'Low cash prices. No Costco membership needed to fill.' },
];

const REFERENCES = [
  { href: 'https://www.kff.org/uninsured/issue-brief/key-facts-about-the-uninsured-population/', label: 'Key facts about the uninsured population, KFF, 2025' },
  { href: 'https://doi.org/10.1136/bmjopen-2017-021161', label: 'Continuity of care with doctors and mortality: a systematic review, Pereira Gray et al., BMJ Open 2018' },
  { href: 'https://www.pennmedicine.org/news/news-releases/2024/march/telemedicine-visits-cost-far-less-than-office-visits', label: 'Telemedicine visits cost far less than office visits, Penn Medicine / JAMA Network Open' },
  { href: 'https://www.goodrx.com/healthcare-access/telehealth/how-much-does-a-telehealth-visit-cost', label: 'How much does a telehealth visit cost? GoodRx' },
  { href: 'https://coveredusa.org/urgent-care-cost-without-insurance/', label: 'Urgent care visit cost without insurance, CoveredUSA 2026' },
];

/* Prose gets "September 8, 2026"; JSON-LD keeps the ISO form. */
const LONG_DATE = new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
const longDate = (iso) => LONG_DATE.format(new Date(`${iso}T00:00:00Z`));

const OTHER_SEGMENTS = [
  { href: '/who-we-serve/truck-drivers', label: 'Truck drivers' },
  { href: '/who-we-serve/gig-workers', label: 'Gig workers & freelancers' },
  { href: '/who-we-serve/hdhp-hsa-holders', label: 'HDHP & HSA holders' },
  { href: '/who-we-serve/early-retirees', label: 'Early retirees' },
  { href: '/who-we-serve', label: 'All communities' },
];

export default function UninsuredAffordableCarePage() {
  const baseUrl = 'https://teledirectmd.com';
  const pageUrl = `${baseUrl}/who-we-serve/uninsured-affordable-care`;
  const today = new Date().toISOString().split('T')[0];
  const checkedOn = longDate(comparison.asOfDate);

  const faqItems = [
    {
      q: 'How much does an online doctor cost without insurance?',
      a: `A TeleDirectMD visit is $79 flat, cash pay. GoodRx reports typical no-insurance telehealth prices of $40 to $90 per visit, though the lowest advertised prices usually require a monthly membership. Name-brand telehealth runs $89 to $129. In-person urgent care averages $180, and an uninsured ER visit averages $2,400 or more. Prices other than ours were checked ${checkedOn}; confirm on each company's site before you compare.`,
    },
    {
      q: 'Will I see the same doctor every visit?',
      a: `Yes. TeleDirectMD is a single-physician practice by design. You see ${PHYSICIAN_NAME} on your first visit and every visit after. Almost every other cash-pay service rotates you through a large clinician pool.`,
    },
    {
      q: 'Is there a membership, subscription, or hidden fee?',
      a: 'No. $79 is the whole price, and follow-ups are the same $79. There is no enrollment fee, no membership tier, and no unlock price. HSA and FSA cards are accepted; telehealth visits are qualified medical expenses under IRS rules. Insurance is optional and accepted in select states. Medication costs are separate from the visit fee and depend on your drug and pharmacy.',
    },
    {
      q: 'Can I get antibiotics or refills prescribed online?',
      a: 'Prescriptions are issued only when the physician determines they are medically appropriate after evaluating you. Common examples include uncomplicated UTIs, bacterial sinus infections, and refills for blood pressure, diabetes, or GERD. Antibiotics are not prescribed for conditions that are usually viral, and no controlled substances are prescribed.',
    },
    {
      q: 'Does an uninsured visit affect future insurance?',
      a: 'For ACA marketplace, employer, Medicare, and Medicaid plans, no: pre-existing conditions cannot raise premiums or deny coverage. Life and disability underwriting can review medical records, and whether a specific visit matters depends on the diagnosis and the carrier.',
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'BreadcrumbList', '@id': `${pageUrl}#breadcrumbs`, itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${baseUrl}/` },
          { '@type': 'ListItem', position: 2, name: 'Who We Serve', item: `${baseUrl}/who-we-serve` },
          { '@type': 'ListItem', position: 3, name: 'Uninsured & Affordable Care', item: pageUrl }
      ]},
      { '@type': ['MedicalBusiness','MedicalOrganization','Organization'], '@id': `${baseUrl}/#organization`,
        name: 'TeleDirectMD', url: baseUrl, logo: `${baseUrl}/assets/brand/teledirectmd-logo.png`,
        telephone: '+1-678-956-1855', medicalSpecialty: 'FamilyMedicine', priceRange: '$79',
        areaServed: STATE_ABBRS, employee: { '@id': `${baseUrl}/about#physician` },
        makesOffer: { '@type': 'Offer', name: 'Online doctor video visit, cash pay',
          price: '79.00', priceCurrency: 'USD', category: 'Telehealth video visit',
          description: 'Flat $79 per visit with a board-certified family medicine physician. No insurance, no membership, no drug subscription required. Follow-up visits are the same $79.',
          eligibleRegion: STATE_ABBRS, availableAtOrFrom: { '@type': 'VirtualLocation', url: 'https://teledirectmd.as.me' } },
        availableService: { '@type': 'MedicalTherapy', name: 'Telehealth video visit for non-emergency adult conditions', howPerformed: 'Secure HIPAA-compliant video visit' } },
      { '@type': 'Physician', '@id': `${baseUrl}/about#physician`, name: PHYSICIAN_NAME,
        givenName: 'Parth', familyName: 'Bhavsar', honorificSuffix: 'MD', jobTitle: 'Founder and Physician',
        medicalSpecialty: 'FamilyMedicine', worksFor: { '@id': `${baseUrl}/#organization` },
        alumniOf: [
          { '@type': 'EducationalOrganization', name: 'Smt NHL Municipal Medical College, Ahmedabad, India' },
          { '@type': 'EducationalOrganization', name: 'University of Mississippi Medical Center (Family Medicine Residency, 2021)' } ],
        hasCredential: [{ '@type': 'EducationalOccupationalCredential', credentialCategory: 'Board Certification',
          name: 'Board Certified in Family Medicine', recognizedBy: { '@type': 'Organization', name: CREDENTIAL_BOARD } }],
        areaServed: STATE_ABBRS },
      { '@type': 'HowTo', name: 'How to book a $79 online doctor visit without insurance',
        estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '79' }, totalTime: 'PT15M',
        step: STEPS.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.title, text: s.body })) },
      { '@type': 'FAQPage', '@id': `${pageUrl}#faq`,
        mainEntity: faqItems.map(item => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
      { '@type': 'MedicalWebPage', '@id': `${pageUrl}#webpage`, url: pageUrl,
        name: '$79 Online Doctor Without Insurance - Same MD, 40+ States',
        description: 'See the same board-certified physician every visit for $79 flat. No insurance, no membership, no drug subscriptions. 40+ states, same-day, evenings and weekends.',
        inLanguage: 'en-US', breadcrumb: { '@id': `${pageUrl}#breadcrumbs` },
        author: { '@id': `${baseUrl}/about#physician` }, reviewedBy: { '@id': `${baseUrl}/about#physician` },
        lastReviewed: today, datePublished: today, dateModified: today,
        publisher: { '@type': 'Organization', name: 'TeleDirectMD', url: baseUrl },
        audience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
        about: [
          { '@type': 'MedicalCondition', name: 'Urinary tract infection' },
          { '@type': 'MedicalCondition', name: 'Sinus infection' },
          { '@type': 'MedicalCondition', name: 'Influenza' },
          { '@type': 'MedicalCondition', name: 'Hypertension' },
          { '@type': 'MedicalCondition', name: 'Type 2 diabetes' },
          { '@type': 'MedicalCondition', name: 'Gastroesophageal reflux disease' },
          { '@type': 'MedicalCondition', name: 'Eczema' },
          { '@type': 'MedicalCondition', name: 'Migraine' },
          { '@type': 'MedicalCondition', name: 'Conjunctivitis' } ],
        mainEntity: { '@id': `${pageUrl}#faq` },
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.uac-hero-sub', '.uac-faq-q'] } }
    ]
  };

  return (
    <div className="uac-wrap">
      <style dangerouslySetInnerHTML={{ __html: uninsuredCSS }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />

      {/* ── Hero (video) ─────────────────────────────────────────────────── */}
      <section className="uac-hero">
        <UninsuredVideoHero />
        <div className="uac-hero-overlay" aria-hidden="true" />
        <div className="uac-hero-container">
          <nav className="uac-crumbs" aria-label="Breadcrumb">
            <a href="/">Home</a><span aria-hidden="true">/</span>
            <a href="/who-we-serve">Who We Serve</a><span aria-hidden="true">/</span>
            <span aria-current="page">Uninsured &amp; Affordable Care</span>
          </nav>

          <div className="uac-hero-copy">
            <span className="uac-eyebrow uac-eyebrow--orange">Uninsured &amp; affordable care</span>
            <h1>$79. One doctor. No insurance needed.</h1>
            <p className="uac-hero-sub">A board-certified MD by video, same-day, in 40+ states. No membership, no drug subscription.</p>

            <div className="uac-hero-ctas">
              <a className="uac-btn uac-btn--primary" href="/book-online" data-analytics="book_hero">Book a $79 Visit</a>
              <a className="uac-btn uac-btn--glass" href="#uninsured-compare">See How We Compare</a>
            </div>

            <div className="uac-chiprow">
              <span className="uac-chiprow-label">Common visits:</span>
              {HERO_CHIPS.map((c) => (
                <a key={c.slug} className="uac-chip" href={`/${c.slug}`}>{c.label}</a>
              ))}
            </div>

            <p className="uac-byline">Medically reviewed by <a href="/about">{PHYSICIAN_NAME}</a> · Updated {longDate(today)}</p>
          </div>
        </div>
      </section>

      {/* ── Price + doctor (overlap the hero) ─────────────────────────────── */}
      <section className="uac-overlap" aria-label="Pricing and physician">
        <div className="uac-overlap-grid">
          <div className="uac-pricecard">
            <span className="uac-eyebrow">Cash-pay, all visits</span>
            <div className="uac-pricecard-row">
              <span className="uac-price-big">$79</span>
              <span className="uac-price-note">flat rate<br />first visit &amp; every follow-up</span>
            </div>
            <ul>
              <li><Tick />Board-certified family medicine MD</li>
              <li><Tick />Prescription to any US pharmacy you choose</li>
              <li><Tick />No membership, no subscription, no add-on fees</li>
              <li><Tick />HSA and FSA cards accepted</li>
            </ul>
            <a className="uac-btn uac-btn--primary" href="/book-online" data-analytics="book_price_card" style={{ width: '100%' }}>Book Now</a>
            <p className="uac-pricecard-foot">Same-day, evenings, and weekends. Insurance optional in select states.</p>
          </div>

          <div className="uac-doctorcard">
            <img className="uac-doctorcard-img" src="/images/dr-parth-bhavsar.jpg" alt={`${PHYSICIAN_NAME}, board-certified family medicine physician`} width="96" height="96" />
            <div className="uac-doctorcard-body">
              <span className="uac-doctorcard-name">{PHYSICIAN_NAME} <span>· Board-certified, {CREDENTIAL_BOARD}</span></span>
              <span className="uac-doctorcard-quote">&ldquo;You&rsquo;ll see me on your first visit and every visit after. Same physician, same chart, no re-intake.&rdquo;</span>
            </div>
            <a className="uac-doctorcard-link" href="#uninsured-physician">Meet your doctor</a>
          </div>
        </div>

        <div className="uac-examplevisit">
          <span className="uac-examplevisit-label">Example visit · UTI</span>
          <span>Antibiotics e-sent to your pharmacy when clinically appropriate. Often ready in about an hour, depending on your pharmacy.</span>
          <span className="uac-examplevisit-note">Dramatization</span>
        </div>
      </section>

      {/* ── Comparison ──────────────────────────────────────────────────── */}
      <section className="uac-compare" id="uninsured-compare">
        <div className="uac-compare-inner">
          <div className="uac-compare-head">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <span className="uac-eyebrow uac-eyebrow--dark">Honest comparison</span>
              <h2>&ldquo;Cheap online doctor&rdquo; usually hides one of three catches.</h2>
            </div>
            <p>A monthly membership to unlock the low price. A rotating pool of whoever is available. Or a &ldquo;$0 visit&rdquo; that exists to sell you a drug subscription. Here is what each service charged and included when we last checked, on {checkedOn}.</p>
          </div>

          <UninsuredCompareCards rows={comparison.rows}>
            <p className="uac-compare-note">
              Competitor prices come from each company&rsquo;s own pricing page and from{' '}
              {comparison.sources.map((s, i) => (
                <span key={s.url}>{i > 0 ? ', ' : ''}<a href={s.url} rel="nofollow noopener" target="_blank">{s.label}</a></span>
              ))}
              , checked {checkedOn} and reviewed quarterly. Prices change; confirm on their sites before comparing.
            </p>
          </UninsuredCompareCards>

          <div className="uac-compare-why">
            <div>
              <h3>Why $79 with the same MD beats $19 with a rotating NP</h3>
              <p>GoodRx Care&rsquo;s $19 needs a $10/month Gold membership, so a non-member really pays $39 to $70. You also see whoever is free, MD or NP, almost never the same person twice. If you have hypertension, diabetes, or GERD, that rotation adds friction. A single physician at a flat $79 does not.</p>
            </div>
            <div>
              <h3>Why a flat visit beats a $30-a-month drug subscription</h3>
              <p>Hims, Hers, and Ro advertise &ldquo;$0 visits.&rdquo; The visit is a lead-in to a monthly prescription, often priced above what the same drug costs at a pharmacy. We send your prescription to CVS, Walmart, Costco, Cost Plus Drugs, whichever is cheapest for your drug. Our revenue is the visit, not the drug margin.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What $79 gets you + right level of care ─────────────────────── */}
      <section className="uac-two" id="uninsured-included">
        <div className="uac-col">
          <span className="uac-eyebrow">What&rsquo;s included</span>
          <h2>What $79 actually gets you</h2>
          <ul className="uac-numlist">
            {INCLUDED.map((line, i) => (
              <li key={line}><span className="uac-num">{String(i + 1).padStart(2, '0')}</span>{line}</li>
            ))}
          </ul>
          <p className="uac-footnote">Insurance accepted in select states. <a href="/insurance">Confirm your plan.</a></p>
        </div>

        <div className="uac-col" id="uninsured-triage">
          <span className="uac-eyebrow">Right level of care</span>
          <h2>When telehealth is right, and when it isn&rsquo;t</h2>
          <div className="uac-triage">
            <div className="uac-triage-card uac-triage--yes">
              <h4>Book a video visit</h4>
              <ul>{TELEHEALTH_OK.map((t) => <li key={t}>{t}</li>)}</ul>
            </div>
            <div className="uac-triage-card uac-triage--no">
              <h4>Go to urgent care or the ER</h4>
              <ul>{GO_IN_PERSON.map((t) => <li key={t}>{t}</li>)}</ul>
            </div>
          </div>
          <p className="uac-footnote">Unsure? Request a visit. If your case isn&rsquo;t right for telehealth, we tell you before charging you and point you to the right level of care.</p>
        </div>
      </section>

      {/* ── Doctor ──────────────────────────────────────────────────────── */}
      <section className="uac-doctor" id="uninsured-physician">
        <div className="uac-doctor-inner">
          <div className="uac-doctor-media">
            <img src="/images/dr-parth-bhavsar.jpg" alt={`${PHYSICIAN_NAME}, board-certified family medicine physician`} width="420" height="525" />
            <div className="uac-doctor-tags">
              <span className="uac-pill">Board-certified, ABFM</span>
              <span className="uac-pill">Family medicine</span>
              <span className="uac-pill">40+ states</span>
            </div>
          </div>

          <div className="uac-doctor-body">
            <span className="uac-eyebrow uac-eyebrow--dark">Meet your doctor</span>
            <h2>The whole practice is one doctor. That&rsquo;s the point.</h2>
            <blockquote className="uac-quote">&ldquo;You&rsquo;ll see me on your first visit and every visit after. Home in Atlanta, on a work trip in Denver, visiting family in Miami: same physician, same chart, no re-intake.&rdquo;</blockquote>
            <p>
              A 2018 systematic review in <a href="https://doi.org/10.1136/bmjopen-2017-021161" rel="nofollow noopener" target="_blank" style={{ textDecoration: 'underline' }}>BMJ Open</a> found that 18 of 22 studies linked higher continuity of care with a doctor to lower mortality. The evidence is observational rather than proof of cause, but it points the same way across nine health systems. Day to day it is simpler than that: a small change in your blood pressure, or in how you responded to a medication, is easier to catch when the same physician saw you last time.
            </p>
            <dl className="uac-dl">
              <dt>Board</dt><dd>{CREDENTIAL_BOARD}</dd>
              <dt>Residency</dt><dd>University of Mississippi Medical Center, 2021</dd>
              <dt>MD</dt><dd>Smt NHL Municipal Medical College, Ahmedabad</dd>
              <dt>NPI</dt><dd>{PHYSICIAN_NPI}</dd>
            </dl>
            <div className="uac-doctor-actions">
              <a className="uac-btn uac-btn--primary" href="/book-online" data-analytics="book_doctor">Book With Dr. Bhavsar</a>
              <a href="/about">More about Dr. Bhavsar</a>
            </div>
            <p className="uac-fineprint">HIPAA-compliant. Your health information is encrypted, never sold, never shared for advertising.</p>
            <p className="uac-fineprint uac-fineprint--quiet">If we expand in the future, we&rsquo;ll make every effort to keep you with your one doctor, wherever and whenever you need to see us.</p>
          </div>
        </div>
      </section>

      {/* ── Coverage ────────────────────────────────────────────────────── */}
      <section className="uac-coverage" id="uninsured-states">
        <div className="uac-coverage-copy">
          <span className="uac-eyebrow">Coverage</span>
          <h2>40+ states, one doctor, no re-establishing care</h2>
          <p>Uninsured patients move for work and travel between states. Every switch to a new provider means a new intake, a new fee, and a new physician who doesn&rsquo;t know your history. With TeleDirectMD you keep the same doctor as long as you&rsquo;re physically in a covered state at the time of your visit.</p>

          <div className="uac-legend">
            <div><span className="uac-swatch" style={{ background: '#14706B' }} />Covered, including Washington D.C.</div>
            <div><span className="uac-swatch" style={{ background: '#D9D4CA' }} />Not yet: {NOT_YET.join(', ')}</div>
          </div>

          <details className="uac-statelist">
            <summary>See every state we cover</summary>
            <div className="uac-statelist-cols">
              {STATE_NAMES.map((n) => <div key={n}>{n}</div>)}
            </div>
          </details>

          <a className="uac-coverage-link" href="/states-we-serve">State-specific condition pages</a>
        </div>

        <div className="uac-map">
          <UninsuredCoverageMap servedAbbrs={STATE_ABBRS} label="Map of the United States with every state TeleDirectMD covers shaded teal" />
        </div>
      </section>

      {/* ── Conditions ──────────────────────────────────────────────────── */}
      <section className="uac-conditions" id="uninsured-conditions">
        <div className="uac-conditions-inner">
          <div className="uac-conditions-head">
            <div>
              <span className="uac-eyebrow">Common conditions</span>
              <h2>What we treat for $79</h2>
              <p>Every condition page explains what to expect, which medications are typically appropriate, and when telehealth isn&rsquo;t the right call.</p>
            </div>
            <a className="uac-btn uac-btn--dark" href="/what-we-treat">View All 60+ Conditions</a>
          </div>

          <div className="uac-conditions-grid">
            {CONDITIONS.map((c) => (
              <a key={c.slug} className="uac-condition" href={`/${c.slug}`}>
                <span className="uac-condition-tag" style={{ color: TAG_COLORS[c.tag] }}>{c.tag}</span>
                <h3>{c.name}</h3>
                <p>{c.blurb}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ────────────────────────────────────────────────── */}
      <section className="uac-steps" id="uninsured-how-it-works">
        <div className="uac-steps-head">
          <span className="uac-eyebrow">How it works</span>
          <h2>Three steps, about 15 minutes total</h2>
        </div>
        <div className="uac-steps-grid">
          {STEPS.map((s) => (
            <div className="uac-step" key={s.title}>
              <img src={s.img} alt="" width="600" height="400" />
              <span className="uac-step-meta">{s.meta}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Prescriptions ───────────────────────────────────────────────── */}
      <section className="uac-rx" id="uninsured-prescriptions">
        <div className="uac-rx-inner">
          <div className="uac-rx-copy">
            <span className="uac-eyebrow">Prescriptions</span>
            <h2>Prescriptions without insurance</h2>
            <p>Medication cost is separate from the $79 visit and depends on the drug and pharmacy, not on us. During your visit we discuss the least-expensive option that works clinically. We sell no medication subscription, so we have no reason to steer you toward a pricier pharmacy.</p>
          </div>
          <ul className="uac-rx-list">
            {PHARMACIES.map((p) => (
              <li key={p.href}>
                <a href={p.href} rel="nofollow noopener" target="_blank">{p.name}</a>
                <span>{p.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section className="uac-faq" id="uninsured-faq">
        <div className="uac-faq-head">
          <span className="uac-eyebrow">Questions &amp; answers</span>
          <h2>Straight answers about paying cash</h2>
          <p>Still unsure? <a href="/faq">See the full FAQ.</a></p>
        </div>
        <div className="uac-faq-list">
          {faqItems.map((item) => (
            <details className="uac-faq-item" key={item.q} name="uac-faq">
              <summary className="uac-faq-q" data-speakable="true">
                <span>{item.q}</span>
                <span className="uac-faq-sign" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
                </span>
              </summary>
              <p className="uac-faq-a">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ── Final CTA ───────────────────────────────────────────────────── */}
      <section className="uac-cta">
        <div className="uac-cta-inner">
          <div className="uac-cta-copy">
            <h2>See a board-certified MD today. $79 flat.</h2>
            <p>No insurance, no membership, no drug subscription. Same doctor every visit across 40+ states.</p>
          </div>
          <div className="uac-cta-actions">
            <a className="uac-btn uac-btn--dark" href="/book-online" data-analytics="book_final_cta">Book a $79 Visit</a>
            <a className="uac-btn uac-btn--light" href="/insurance">Pricing &amp; Insurance</a>
          </div>
        </div>
      </section>

      {/* ── Foot notes ──────────────────────────────────────────────────── */}
      <section className="uac-notes" id="uninsured-disclaimer">
        <div>
          <span className="uac-eyebrow">Other communities we serve</span>
          <div className="uac-notes-pills">
            {OTHER_SEGMENTS.map((s) => (
              <a key={s.href} className="uac-pill" href={s.href}>{s.label}</a>
            ))}
          </div>
        </div>
        <div>
          <span className="uac-eyebrow">References</span>
          <ul>
            {REFERENCES.map((r) => (
              <li key={r.href}><a href={r.href} rel="nofollow noopener" target="_blank">{r.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <span className="uac-eyebrow">Medical disclaimer</span>
          <p>Informational only, not medical advice. TeleDirectMD treats non-emergency conditions in adults 18+ physically located in a covered state at the time of the visit. No controlled substances. No IV or IM medications, except EpiPen refills when clinically appropriate. Emergency: call 911. Mental health crisis: call or text 988. Medication costs are separate from the visit fee.</p>
        </div>
      </section>

      <UninsuredStickyCta />
    </div>
  );
}
