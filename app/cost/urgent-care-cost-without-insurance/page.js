// /cost/urgent-care-cost-without-insurance/
// Prototype for the rebuilt cost library (plan: seo-dashboard/cost-pages/2026-11-24/PLAN.md).
// A static route, so it takes precedence over app/cost/[slug].
//
// Rules for this page:
// - Every number comes from lib/urgent-care-cost-data.js, which names its public source.
// - Every number says what kind of number it is (Medicare allowed amount, employer plan
//   price, pharmacy acquisition cost) and its year.
// - No retail drug coupon prices and no figures from sources whose terms bar reuse.
// - The $79 visit appears once, with what it includes and excludes, and only for
//   conditions on the live What We Treat list.

import FaqAccordion from '../../components/FaqAccordion';
import { darkCSS } from '../../../lib/dark-css';
import {
  UC_DATA_CHECKED,
  MEDICARE_2026,
  NADAC,
  HCCI_2022,
  KFF_UNINSURED_2024,
} from '../../../lib/urgent-care-cost-data';

const BASE_URL = 'https://teledirectmd.com';
const SLUG = 'urgent-care-cost-without-insurance';
const PAGE_URL = `${BASE_URL}/cost/${SLUG}/`;
const CSV_PATH = '/data/urgent-care-cost-2026.csv';
const HERO = '/images/cost/hero-urgent-care-cost.webp';
const OG = '/images/cost/og-urgent-care-cost.jpg';

const TITLE = 'How Much Does Urgent Care Cost Without Insurance in 2026?';
const META_TITLE = 'Urgent Care Cost Without Insurance (2026): Real Benchmarks by State | TeleDirectMD';
const META_DESCRIPTION =
  'What an urgent care visit costs without insurance in 2026, from public data: Medicare rates for every state, employer plan averages, what x-rays and generic medicine add, and your Good Faith Estimate rights.';

const usd = (n) => `$${n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
const usd0 = (n) => `$${n.toLocaleString('en-US', { maximumFractionDigits: 0 })}`;
const range = ([lo, hi]) => (lo === hi ? usd(lo) : `${usd(lo)} to ${usd(hi)}`);
const longDate = (iso) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });

const N = MEDICARE_2026.national;
const CHECKED = longDate(UC_DATA_CHECKED);
const NADAC_EFFECTIVE = longDate(NADAC.effective);

// Lowest and highest state amounts for a returning-patient visit (99213), 50 states plus DC.
const STATES_50_DC = MEDICARE_2026.states.filter((s) => !['Puerto Rico', 'U.S. Virgin Islands'].includes(s.state));
const low13 = STATES_50_DC.reduce((a, s) => (s.v99213[0] < a.v99213[0] ? s : a));
const high13 = STATES_50_DC.reduce((a, s) => (s.v99213[1] > a.v99213[1] ? s : a));

const DRUG_ROWS = NADAC.rows.map((r) => ({
  key: r.drug.split(' ')[0].toLowerCase() + (r.drug.includes('clavulanate') ? '-clav' : ''),
  name: r.drug,
  qtyLabel: r.course,
  course: Math.round(r.perUnit * r.units * 100) / 100,
}));

const QUICK_ANSWER =
  `There is no single national cash price for an urgent care visit in 2026, because each clinic sets its own self-pay price. ` +
  `The closest public benchmarks for the visit alone, before tests or medicine: Medicare's 2026 rate for a low-complexity office visit is ` +
  `${usd(N.v99213)} for a returning patient and ${usd(N.v99203)} for a new patient (CMS Physician Fee Schedule, national amounts), ` +
  `and employer health plans paid an average of ${usd0(HCCI_2022.urgentCare)} per urgent care visit in 2022 (Health Care Cost Institute). ` +
  `X-rays, lab tests and prescriptions are billed on top.`;

export const metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  authors: [{ name: 'Parth Bhavsar, MD' }],
  openGraph: {
    type: 'article',
    siteName: 'TeleDirectMD',
    locale: 'en_US',
    title: TITLE,
    description: META_DESCRIPTION,
    url: PAGE_URL,
    images: [{ url: `${BASE_URL}${OG}`, width: 1200, height: 800, alt: 'Illustration of a clinic, a price tag and a receipt' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: META_DESCRIPTION, images: [`${BASE_URL}${OG}`] },
};

// ── References. Each was opened and read on the date in UC_DATA_CHECKED.
const REFS = [
  {
    id: 'ref-pfs',
    text: 'CMS. Physician Fee Schedule: Indicators and Localities for 2026 (relative value units, geographic practice cost indices). pfs.data.cms.gov.',
    url: 'https://pfs.data.cms.gov/',
  },
  {
    id: 'ref-pfs-rule',
    text: 'CMS. Calendar Year 2026 Medicare Physician Fee Schedule Final Rule (CMS-1832-F) fact sheet. October 31, 2025.',
    url: 'https://www.cms.gov/newsroom/fact-sheets/calendar-year-cy-2026-medicare-physician-fee-schedule-final-rule-cms-1832-f',
  },
  {
    id: 'ref-hcci',
    text: 'Health Care Cost Institute. Urgent Care Spending Increased by 50% over 5 Years Driven by Higher Use. January 28, 2026 (2022 employer-sponsored insurance data).',
    url: 'https://healthcostinstitute.org/all-hcci-reports/urgent-care-spending-increased-by-50-over-5-years-driven-by-higher-use/',
  },
  {
    id: 'ref-nadac',
    text: `CMS. National Average Drug Acquisition Cost (NADAC) 2026 dataset, updated November 20, 2026; rates effective ${NADAC_EFFECTIVE}.`,
    url: 'https://data.medicaid.gov/dataset/fbb83258-11c7-47f5-8b18-5f8e79f7e704',
  },
  {
    id: 'ref-gfe',
    text: 'CMS. Know your rights: Good Faith Estimates when you do not have insurance or are not using it.',
    url: 'https://www.cms.gov/initiatives/your-patient-rights/medical-bill-rights/know-your-rights/without-insurance',
  },
  {
    id: 'ref-emtala',
    text: 'CMS. You have rights in an emergency room under EMTALA.',
    url: 'https://www.cms.gov/priorities/your-patient-rights/emergency-room-rights',
  },
  {
    id: 'ref-kff',
    text: 'KFF. Key Facts about the Uninsured Population. June 16, 2026.',
    url: 'https://www.kff.org/uninsured/key-facts-about-the-uninsured-population/',
  },
];
const refNum = (id) => REFS.findIndex((r) => r.id === id) + 1;
const Cite = ({ id }) => (
  <sup className="ucx-cite">
    <a href={`#${id}`} aria-label={`Reference ${refNum(id)}`}>[{refNum(id)}]</a>
  </sup>
);

const FAQS = [
  {
    id: 'faq-cost',
    question: 'How much does urgent care cost without insurance in 2026?',
    answer: QUICK_ANSWER,
  },
  {
    id: 'faq-can-you-go',
    question: 'Can you go to urgent care without insurance?',
    answer:
      'Yes. Urgent care clinics generally see self-pay patients, and many post a self-pay price for a basic visit. Ask for that price, and for the price of any test, before you are seen. Hospital emergency departments that take Medicare must screen and stabilize anyone with an emergency medical condition whether or not they have insurance or can pay, under a federal law called EMTALA. That law covers hospital emergency departments, so do not wait on an urgent care clinic if you think you are having an emergency.',
  },
  {
    id: 'faq-xray',
    question: 'How much is an x-ray at urgent care without insurance?',
    answer: `Each clinic sets its own self-pay price. As a benchmark, Medicare's 2026 national amount for a two-view chest x-ray, including the reading, is ${usd(N.x71046)}; for a three-view ankle x-ray it is ${usd(N.x73610)}, and for a three-view hand x-ray ${usd(N.x73130)}. These are what Medicare allows, not a price any clinic must charge you.`,
  },
  {
    id: 'faq-vs-er',
    question: 'Is urgent care cheaper than the emergency room?',
    answer: `For people with employer insurance in 2022, the average price of an urgent care visit was ${usd0(HCCI_2022.urgentCare)} and of an emergency room visit ${usd0(HCCI_2022.er)}, according to the Health Care Cost Institute. For urinary tract infection visits it was ${usd0(HCCI_2022.utiPrice.urgentCare)} at urgent care and ${usd0(HCCI_2022.utiPrice.er)} in the ER. These are insured prices, not cash prices, and the researchers note that ER visits can be more severe than urgent care visits for the same diagnosis, so the gap is not only price.`,
  },
  {
    id: 'faq-estimate',
    question: 'Does an urgent care clinic have to tell me the price first?',
    answer:
      'If you do not have insurance or are not using it, you can ask any provider for a Good Faith Estimate, and you must get one when you schedule care at least 3 business days ahead. If the final bill is at least $400 more than the estimate, you can dispute it within 120 days of the bill. Estimates are not required during emergency care.',
  },
  {
    id: 'faq-medicare',
    question: 'Why does this page use Medicare rates if I do not have Medicare?',
    answer:
      'Medicare publishes what it pays for every visit code in every part of the country, every year. That makes it the only free, complete and dated benchmark. It is not a price you are entitled to without Medicare, but it gives you a reference point when a clinic quotes a self-pay price, and many clinics set self-pay prices with Medicare rates in mind.',
  },
  {
    id: 'faq-medicine',
    question: 'How much will the prescription cost?',
    answer: `It depends on the drug, the pharmacy and any discount you use. What pharmacies themselves pay is public: for example, a 10-capsule course of generic oseltamivir 75 mg cost pharmacies about ${usd(DRUG_ROWS.find((d) => d.key === 'oseltamivir').course)} on average (CMS NADAC survey, rates effective ${NADAC_EFFECTIVE}). The counter price adds the pharmacy's dispensing cost and margin, so ask the pharmacy for its cash price for the generic before you pay.`,
  },
];

function buildJsonLd() {
  const author = {
    '@type': 'Physician',
    '@id': `${BASE_URL}/about/#parth-bhavsar`,
    name: 'Parth Bhavsar, MD',
    medicalSpecialty: 'FamilyMedicine',
    url: `${BASE_URL}/about/`,
    sameAs: ['https://npiregistry.cms.hhs.gov/provider-view/1104323203'],
  };
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}#breadcrumbs`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Cost Guides', item: `${BASE_URL}/cost/` },
          { '@type': 'ListItem', position: 3, name: 'Urgent care cost without insurance', item: PAGE_URL },
        ],
      },
      {
        '@type': 'MedicalWebPage',
        '@id': `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: TITLE,
        description: META_DESCRIPTION,
        inLanguage: 'en-US',
        image: `${BASE_URL}${OG}`,
        datePublished: UC_DATA_CHECKED,
        dateModified: UC_DATA_CHECKED,
        lastReviewed: UC_DATA_CHECKED,
        author,
        reviewedBy: author,
        publisher: { '@type': 'MedicalOrganization', '@id': `${BASE_URL}/#organization`, name: 'TeleDirectMD', url: `${BASE_URL}/` },
        audience: { '@type': 'PeopleAudience', audienceType: 'Patients' },
        about: { '@type': 'Thing', name: 'Cost of urgent care without health insurance' },
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#quick-answer'] },
        breadcrumb: { '@id': `${PAGE_URL}#breadcrumbs` },
        citation: REFS.map((r) => ({ '@type': 'CreativeWork', name: r.text, url: r.url })),
      },
      {
        '@type': 'Dataset',
        '@id': `${PAGE_URL}#dataset`,
        name: 'Urgent care visit and x-ray benchmarks by U.S. state, 2026 (Medicare Physician Fee Schedule)',
        description:
          'Medicare 2026 non-facility allowed amounts for office visit codes 99203, 99213 and 99214 and chest x-ray code 71046, national and by state (lowest and highest payment locality), computed by TeleDirectMD from CMS relative value units, geographic practice cost indices and the $33.4009 conversion factor.',
        url: PAGE_URL,
        creator: { '@type': 'MedicalOrganization', name: 'TeleDirectMD', url: `${BASE_URL}/` },
        isBasedOn: ['https://pfs.data.cms.gov/'],
        temporalCoverage: '2026',
        spatialCoverage: { '@type': 'Place', name: 'United States' },
        variableMeasured: ['CPT 99203 allowed amount', 'CPT 99213 allowed amount', 'CPT 99214 allowed amount', 'CPT 71046 allowed amount'],
        dateModified: UC_DATA_CHECKED,
        distribution: [{ '@type': 'DataDownload', encodingFormat: 'text/csv', contentUrl: `${BASE_URL}${CSV_PATH}` }],
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_URL}#faq`,
        mainEntity: FAQS.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      },
    ],
  };
}

export default function UrgentCareCostPage() {
  const jsonLd = buildJsonLd();
  return (
    <div className="ucx">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <div className="ucx-wrap">
        <nav className="ucx-crumbs" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span aria-hidden="true">›</span>
          <a href="/cost/">Cost Guides</a>
          <span aria-hidden="true">›</span>
          <span>Urgent care without insurance</span>
        </nav>

        <header className="ucx-head">
          <h1 className="ucx-h1">{TITLE}</h1>
          <p className="ucx-sub">
            Public benchmarks from Medicare, employer health plans and the national pharmacy cost survey, with what each
            number includes and what it leaves out.
          </p>
          <div className="ucx-meta">
            <span>
              Written and medically reviewed by <a href="/about/">Parth Bhavsar, MD</a>, board-certified family medicine
              physician. Data checked {CHECKED}.
            </span>
          </div>
        </header>


        <section id="quick-answer" className="ucx-answer" aria-labelledby="quick-answer-h">
          <h2 id="quick-answer-h" className="ucx-answer-label">The short answer</h2>
          <p>
            There is no single national cash price for an urgent care visit in 2026, because each clinic sets its own
            self-pay price. The closest public benchmarks for the visit alone, before tests or medicine: Medicare&apos;s 2026
            rate for a low-complexity office visit is <strong>{usd(N.v99213)}</strong> for a returning patient and{' '}
            <strong>{usd(N.v99203)}</strong> for a new patient
            <Cite id="ref-pfs" />, and employer health plans paid an average of <strong>{usd0(HCCI_2022.urgentCare)}</strong>{' '}
            per urgent care visit in 2022
            <Cite id="ref-hcci" />. X-rays, lab tests and prescriptions are billed on top.
          </p>
        </section>

        <figure className="ucx-hero">
          <img
            src={HERO}
            alt="Illustration of an urgent care clinic, a price tag and a paid receipt"
            width="1536"
            height="500"
            loading="lazy"
          />
        </figure>

        <section className="ucx-sec" aria-labelledby="measures-h">
          <h2 id="measures-h" className="ucx-h2">Four kinds of &ldquo;price,&rdquo; and which one you are looking at</h2>
          <p>
            Most cost articles mix these together. They answer different questions, so this page labels every figure.
            About {KFF_UNINSURED_2024.millions} million people under 65 had no health insurance in 2024
            <Cite id="ref-kff" />; for them, the self-pay price is the one that matters, and it is the one no public
            dataset tracks.
          </p>
          <div className="ucx-table-wrap" role="region" aria-label="Urgent care price measures" tabIndex={0}>
            <table className="ucx-table">
              <thead>
                <tr>
                  <th scope="col">Measure</th>
                  <th scope="col">Figure</th>
                  <th scope="col">What it includes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Medicare allowed amount, new patient, low complexity (99203), 2026 national</th>
                  <td className="ucx-num">{usd(N.v99203)}</td>
                  <td>The visit only. No tests, x-rays or medicine. Varies by area (state table below).</td>
                </tr>
                <tr>
                  <th scope="row">Medicare allowed amount, returning patient, low complexity (99213), 2026 national</th>
                  <td className="ucx-num">{usd(N.v99213)}</td>
                  <td>The visit only.</td>
                </tr>
                <tr>
                  <th scope="row">Medicare allowed amount, moderate complexity (99204 new, 99214 returning), 2026 national</th>
                  <td className="ucx-num">
                    {usd(N.v99204)} / {usd(N.v99214)}
                  </td>
                  <td>The visit only. Higher levels apply when the problem needs more evaluation.</td>
                </tr>
                <tr>
                  <th scope="row">Average price of an urgent care visit, employer-sponsored insurance, 2022</th>
                  <td className="ucx-num">{usd0(HCCI_2022.urgentCare)}</td>
                  <td>Visit claims for people with employer coverage. Not a cash price; 2022 data.</td>
                </tr>
                <tr>
                  <th scope="row">Self-pay (cash) price</th>
                  <td className="ucx-num">Set by each clinic</td>
                  <td>Ask before you are seen. You can ask for a Good Faith Estimate.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="ucx-note">
            Medicare amounts are total allowed amounts in a non-facility (office) setting, calculated from CMS relative
            value units and the 2026 conversion factor of ${MEDICARE_2026.conversionFactor}
            <Cite id="ref-pfs" />
            <Cite id="ref-pfs-rule" />. Employer plan figures are from the Health Care Cost Institute
            <Cite id="ref-hcci" />.
          </p>
        </section>

        <section className="ucx-sec" aria-labelledby="states-h">
          <h2 id="states-h" className="ucx-h2">Medicare 2026 benchmarks by state</h2>
          <p>
            Medicare adjusts its rates for local costs. Where a state has more than one Medicare payment area, the table
            shows the lowest and highest. Use it as a reference point when a clinic quotes you a self-pay price; it is
            not what any clinic must charge. For a returning-patient visit, the 2026 amounts run from{' '}
            {usd(low13.v99213[0])} in {low13.state} to {usd(high13.v99213[1])} in the highest-cost part of {high13.state}.
          </p>
          <p>
            <a className="ucx-dl" href={CSV_PATH} download>
              Download this table (CSV)
            </a>
          </p>
          <div className="ucx-table-wrap ucx-tall" role="region" aria-label="Medicare 2026 amounts by state" tabIndex={0}>
            <table className="ucx-table ucx-states">
              <thead>
                <tr>
                  <th scope="col">State</th>
                  <th scope="col">New patient visit (99203)</th>
                  <th scope="col">Returning patient visit (99213)</th>
                  <th scope="col">Chest x-ray, 2 views (71046)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="ucx-natl">
                  <th scope="row">United States (national amount)</th>
                  <td className="ucx-num">{usd(N.v99203)}</td>
                  <td className="ucx-num">{usd(N.v99213)}</td>
                  <td className="ucx-num">{usd(N.x71046)}</td>
                </tr>
                {MEDICARE_2026.states.map((s) => (
                  <tr key={s.state}>
                    <th scope="row">
                      {s.state}
                      {s.localities > 1 ? <span className="ucx-loc"> ({s.localities} areas)</span> : null}
                    </th>
                    <td className="ucx-num">{range(s.v99203)}</td>
                    <td className="ucx-num">{range(s.v99213)}</td>
                    <td className="ucx-num">{range(s.x71046)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="ucx-note">
            Calculated by TeleDirectMD from the CMS 2026 Physician Fee Schedule relative value units and 2026 locality
            geographic practice cost indices
            <Cite id="ref-pfs" />. CMS does not publish state totals. The Washington, D.C. payment area also covers
            nearby Maryland and Virginia counties, so it is counted in all three rows.
          </p>
        </section>

        <section className="ucx-sec" aria-labelledby="adds-h">
          <h2 id="adds-h" className="ucx-h2">What adds to the bill</h2>
          <h3 className="ucx-h3">X-rays</h3>
          <p>
            Medicare&apos;s 2026 national amounts, including the radiologist&apos;s reading: two-view chest x-ray{' '}
            {usd(N.x71046)}, three-view ankle x-ray {usd(N.x73610)}, three-view hand x-ray {usd(N.x73130)}
            <Cite id="ref-pfs" />. Clinics set their own self-pay prices for imaging.
          </p>
          <h3 className="ucx-h3">Rapid tests</h3>
          <p>
            Strep, flu, COVID-19 and urine tests are billed separately from the visit. Ask for the self-pay price of each
            test before it is run, and ask whether it will change what the clinician does. A test that will not change
            treatment is one you can decline.
          </p>
          <h3 className="ucx-h3">Generic medicine</h3>
          <p>
            Retail prices vary by pharmacy and discount program. What pharmacies themselves pay is public: CMS surveys
            pharmacy invoices and publishes a National Average Drug Acquisition Cost (NADAC) for each drug
            <Cite id="ref-nadac" />. The figures below are that acquisition cost, not the price at the counter, which adds
            a dispensing fee and margin.
          </p>
          <div className="ucx-table-wrap" role="region" aria-label="Pharmacy acquisition cost of common generic courses" tabIndex={0}>
            <table className="ucx-table">
              <thead>
                <tr>
                  <th scope="col">Generic drug</th>
                  <th scope="col">Quantity (a common adult course)</th>
                  <th scope="col">Pharmacy acquisition cost</th>
                </tr>
              </thead>
              <tbody>
                {DRUG_ROWS.map((d) => (
                  <tr key={d.key}>
                    <th scope="row">{d.name}</th>
                    <td>{d.qtyLabel}</td>
                    <td className="ucx-num">{usd(d.course)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="ucx-note">
            NADAC per-unit cost times quantity, rates effective {NADAC_EFFECTIVE}
            <Cite id="ref-nadac" />. Your prescription may differ in drug, dose or length.
          </p>
        </section>

        <section className="ucx-sec" aria-labelledby="insured-h">
          <h2 id="insured-h" className="ucx-h2">If you do have insurance: urgent care, primary care and the ER</h2>
          <p>
            The Health Care Cost Institute compared average visit prices and out-of-pocket costs for people with employer
            coverage in 2022
            <Cite id="ref-hcci" />.
          </p>
          <div className="ucx-table-wrap" role="region" aria-label="Employer plan visit prices by setting, 2022" tabIndex={0}>
            <table className="ucx-table">
              <thead>
                <tr>
                  <th scope="col">2022, employer-sponsored insurance</th>
                  <th scope="col">Urgent care</th>
                  <th scope="col">Primary care office</th>
                  <th scope="col">Emergency room</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Average price per visit, all diagnoses</th>
                  <td className="ucx-num">{usd0(HCCI_2022.urgentCare)}</td>
                  <td className="ucx-num">{usd0(HCCI_2022.primaryCare)}</td>
                  <td className="ucx-num">{usd0(HCCI_2022.er)}</td>
                </tr>
                <tr>
                  <th scope="row">Average price, urinary tract infection visit</th>
                  <td className="ucx-num">{usd0(HCCI_2022.utiPrice.urgentCare)}</td>
                  <td className="ucx-num">{usd0(HCCI_2022.utiPrice.primaryCare)}</td>
                  <td className="ucx-num">{usd0(HCCI_2022.utiPrice.er)}</td>
                </tr>
                <tr>
                  <th scope="row">Average out-of-pocket, urinary tract infection visit</th>
                  <td className="ucx-num">{usd0(HCCI_2022.utiOutOfPocket.urgentCare)}</td>
                  <td className="ucx-num">{usd0(HCCI_2022.utiOutOfPocket.primaryCare)}</td>
                  <td className="ucx-num">{usd0(HCCI_2022.utiOutOfPocket.er)}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="ucx-note">
            These are insured prices from 2022, not 2026 cash prices. The researchers note that visits for the same
            diagnosis can be more severe in the ER than at urgent care, so part of the difference reflects the patients,
            not only the price.
          </p>
        </section>

        <section className="ucx-sec" aria-labelledby="rights-h">
          <h2 id="rights-h" className="ucx-h2">Your right to a price estimate</h2>
          <p>
            If you do not have insurance or are not using it, federal rules let you ask any provider for a Good Faith
            Estimate of the cost. You must receive one when you schedule care at least 3 business days ahead, and you can
            request one any time. If your bill comes in at least $400 above the estimate, you can dispute it within 120
            days of the bill date. Estimates are not required during emergency care
            <Cite id="ref-gfe" />.
          </p>
          <p>
            In a hospital emergency department, a separate federal law (EMTALA) requires a medical screening exam and
            stabilizing treatment for an emergency medical condition whether or not you have insurance or can pay
            <Cite id="ref-emtala" />.
          </p>
        </section>

        <section className="ucx-sec" aria-labelledby="setting-h">
          <h2 id="setting-h" className="ucx-h2">Choosing the setting: a physician&apos;s guide</h2>
          <p className="ucx-byline">By Parth Bhavsar, MD</p>
          <div className="ucx-cards">
            <div className="ucx-card ucx-card-er">
              <h3 className="ucx-h3">Call 911 or go to the ER</h3>
              <p>
                Chest pain or pressure, trouble breathing, signs of stroke such as face drooping, arm weakness or trouble
                speaking, fainting, new confusion, severe bleeding, severe belly pain, or a serious injury. Cost should not
                decide this one.
              </p>
            </div>
            <div className="ucx-card">
              <h3 className="ucx-h3">Urgent care, in person</h3>
              <p>
                Problems that need hands on, an x-ray or a quick test: a possible broken bone or bad sprain, a cut that may
                need stitches, a sore throat that needs a strep test, ear pain that needs a look inside the ear.
              </p>
            </div>
            <div className="ucx-card">
              <h3 className="ucx-h3">A video visit can often handle it</h3>
              <p>
                Problems a physician can usually assess from your history and what the camera shows: colds, flu, sinus
                infections, pink eye, many rashes, urinary symptoms in non-pregnant adult women without complicating
                features, and refills of medicines you already take.
              </p>
            </div>
          </div>
        </section>

        <section className="ucx-sec ucx-tdmd" aria-labelledby="tdmd-h">
          <h2 id="tdmd-h" className="ucx-h2">Where a $79 video visit fits</h2>
          <p>
            TeleDirectMD publishes this page. A TeleDirectMD visit is a <strong>$79 flat self-pay fee</strong> for a video
            visit with a board-certified physician. It includes the evaluation and, when one is appropriate, a
            prescription sent to your pharmacy. It does not include the cost of medicine, lab tests or imaging. Visits are
            for adults 18 and older who are physically in one of the 40+ states TeleDirectMD serves at the time of the
            visit. If your problem needs an exam, a test or an x-ray, the physician will tell you to be seen in person.
          </p>
          <p>
            <a href="/what-we-treat/">See what can be treated by video</a> ·{' '}
            <a href="/states-we-serve/">Check your state</a>
          </p>
          <a href="/book-online/" className="ucx-cta">
            Book a $79 video visit
          </a>
        </section>

        <section className="ucx-sec" aria-labelledby="faq-h">
          <span id="faq-h" className="ucx-sr">Frequently asked questions</span>
          <FaqAccordion items={FAQS} sectionTitle="Frequently asked questions" sectionId="faq" />
        </section>

        <section className="ucx-sec ucx-method" aria-labelledby="method-h">
          <h2 id="method-h" className="ucx-h2">How we built these numbers</h2>
          <ul>
            <li>
              Medicare amounts: total non-facility relative value units for each code multiplied by the 2026 conversion
              factor (${MEDICARE_2026.conversionFactor}) for the national figures; for each state, work, practice expense
              and malpractice units each multiplied by that payment area&apos;s geographic index, then by the conversion
              factor
              <Cite id="ref-pfs" />.
            </li>
            <li>
              Drug figures: CMS NADAC per-unit cost for the generic tablet or capsule, multiplied by the quantity shown
              <Cite id="ref-nadac" />.
            </li>
            <li>Employer plan figures are quoted as published, with their data year.</li>
            <li>
              Refresh schedule: Medicare rates every January 1, NADAC monthly, employer plan and uninsured figures when
              their publishers release new years.
            </li>
            <li>
              Not included: retail drug coupon prices, crowd-sourced price lists, and price figures from sources whose terms
              do not allow reuse.
            </li>
          </ul>
        </section>

        <section className="ucx-sec" aria-labelledby="refs-h">
          <h2 id="refs-h" className="ucx-h2">References</h2>
          <ol className="ucx-refs">
            {REFS.map((r) => (
              <li key={r.id} id={r.id}>
                {r.text}{' '}
                <a href={r.url} rel="noopener" target="_blank">
                  {r.url.replace(/^https:\/\//, '')}
                </a>
              </li>
            ))}
          </ol>
        </section>

        <p className="ucx-disclaimer">
          Prices vary by clinic, location and plan. Figures on this page are dated benchmarks from the sources cited, not
          quotes or guarantees of what you will pay. This page is general information and not medical advice for your
          situation.
        </p>
      </div>
    </div>
  );
}

const CSS = `
.ucx{--ucx-navy:#003E52;--ucx-ink:#16242b;--ucx-muted:#4f5f67;--ucx-bg:#ffffff;--ucx-line:#dfe5e8;--ucx-head:#f3f6f7;--ucx-coral:#ff5a36;--ucx-coral-ink:#1a0b06;--ucx-teal:#0C8F99;
  background:var(--ucx-bg);color:var(--ucx-ink);font-family:'DM Sans',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;line-height:1.65;padding:8px 0 56px}
.ucx *{box-sizing:border-box}
.ucx-wrap{max-width:860px;margin:0 auto;padding:0 20px}
.ucx a{color:var(--ucx-navy);text-underline-offset:2px}
.ucx-crumbs{display:flex;flex-wrap:wrap;gap:6px;font-size:14px;color:var(--ucx-muted);padding:18px 0 6px}
.ucx-crumbs a{color:var(--ucx-muted)}
.ucx-head{padding:10px 0 18px;border-bottom:1px solid var(--ucx-line);margin-bottom:24px}
.ucx-h1{font-family:'Fraunces',Georgia,serif;font-weight:600;color:var(--ucx-navy);font-size:clamp(30px,5vw,44px);line-height:1.14;letter-spacing:-.01em;margin:8px 0 12px}
.ucx-sub{font-size:clamp(17px,2.2vw,19px);color:var(--ucx-muted);margin:0 0 12px;max-width:760px}
.ucx-meta{font-size:14px;color:var(--ucx-muted)}
.ucx-answer{margin:0 0 28px}
.ucx-answer-label{font-family:'Fraunces',Georgia,serif;font-size:clamp(21px,2.8vw,25px);font-weight:600;color:var(--ucx-navy);margin:0 0 8px}
.ucx-answer p{margin:0;font-size:18px;line-height:1.7}
.ucx-hero{margin:0 0 36px}
.ucx-hero img{display:block;width:100%;height:auto}
.ucx-sec{margin:0 0 40px}
.ucx-h2{font-family:'Fraunces',Georgia,serif;font-weight:600;color:var(--ucx-navy);font-size:clamp(23px,3.2vw,29px);line-height:1.25;margin:0 0 12px}
.ucx-h3{font-family:'DM Sans',sans-serif;font-weight:700;color:var(--ucx-ink);font-size:17px;margin:22px 0 6px}
.ucx-sec p{margin:0 0 12px}
.ucx-note{font-size:14px;color:var(--ucx-muted)}
.ucx-cite{font-size:.72em;line-height:0;margin-left:1px}
.ucx-cite a{text-decoration:none;font-weight:600}
.ucx-table-wrap{overflow-x:auto;border-top:2px solid var(--ucx-navy);margin:8px 0 12px}
.ucx-table-wrap:focus{outline:2px solid var(--ucx-teal);outline-offset:2px}
.ucx-tall{max-height:560px;overflow-y:auto;border-bottom:1px solid var(--ucx-line)}
.ucx-table{width:100%;border-collapse:collapse;font-size:15px}
.ucx-table th,.ucx-table td{padding:10px 12px;text-align:left;vertical-align:top;border-bottom:1px solid var(--ucx-line)}
.ucx-table thead th{background:var(--ucx-bg);color:var(--ucx-ink);font-size:13.5px;font-weight:700;position:sticky;top:0;z-index:1;box-shadow:inset 0 -1px 0 var(--ucx-ink)}
.ucx-table tbody th{font-weight:600}
.ucx-num{font-variant-numeric:tabular-nums;white-space:nowrap}
.ucx-natl th,.ucx-natl td{font-weight:700;background:var(--ucx-head)}
.ucx-loc{font-weight:400;color:var(--ucx-muted);font-size:13px}
.ucx-dl{font-weight:700;font-size:15px}
.ucx-byline{font-size:14px;color:var(--ucx-muted);margin-top:-6px}
.ucx-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:28px;border-top:1px solid var(--ucx-line);padding-top:6px}
.ucx-card .ucx-h3{margin-top:12px}
.ucx-card p{font-size:15px;margin:0}
.ucx-card-er .ucx-h3{color:#b3261e}
.ucx-tdmd{border-top:2px solid var(--ucx-navy);border-bottom:1px solid var(--ucx-line);padding:20px 0 24px}
.ucx .ucx-cta{display:inline-block;margin-top:6px;background:var(--ucx-coral);color:var(--ucx-coral-ink);font-weight:700;font-size:16px;font-family:'DM Sans',sans-serif;border-radius:8px;padding:11px 22px;text-decoration:none}
.ucx .ucx-cta:hover{background:#ff7a5c}
.ucx-method ul{margin:0;padding-left:20px}
.ucx-method li{margin:0 0 8px}
.ucx-refs{padding-left:22px;font-size:14.5px;color:var(--ucx-muted)}
.ucx-refs li{margin:0 0 8px;scroll-margin-top:90px}
.ucx-refs a{word-break:break-word}
.ucx-disclaimer{font-size:14px;color:var(--ucx-muted);border-top:1px solid var(--ucx-line);padding-top:16px}
.ucx-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
@media (max-width:760px){
  .ucx-cards{grid-template-columns:1fr;gap:4px}
  .ucx-answer p{font-size:17px}
  .ucx-table{font-size:14px}
  .ucx-table th,.ucx-table td{padding:9px 8px}
}
${darkCSS(`
DARK .ucx{--ucx-navy:#a0d8e8;--ucx-ink:#e2edf0;--ucx-muted:#9fb6bf;--ucx-bg:#0a171c;--ucx-line:#2a4350;--ucx-head:#10232a}
DARK .ucx-card-er .ucx-h3{color:#ff8a75}
DARK .ucx-hero img{filter:brightness(.92);border-radius:10px}
DARK .ucx .ucx-cta{color:#1a0b06}
`)}
`;
