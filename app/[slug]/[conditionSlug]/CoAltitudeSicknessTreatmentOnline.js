/**
 * CoAltitudeSicknessTreatmentOnline.js: Colorado x Altitude Sickness page (2026-11-03)
 *
 * Rendered by app/[slug]/[conditionSlug]/page.js when slug === 'co' and
 * conditionSlug === 'altitude-sickness-treatment-online'.
 *
 * Why this page is the one exception to NATIONAL_ONLY_CONDITIONS:
 *   Altitude sickness stays national-only for every other state (the May 2026
 *   deindex guard). Colorado is different: the state itself is the high-altitude
 *   destination, the local queries exist ("altitude sickness denver",
 *   "altitude sickness colorado", resort names), and this page carries
 *   Colorado-only content (resort study, town elevations, Colorado emergency
 *   routing) instead of the templated national text. Only /co/ is indexed.
 *
 * Sources: every figure on the page is cited to a primary study, the CDC Yellow
 * Book, or the WMS 2024 guideline (as quoted in the Omidi 2025 appraisal).
 * Schema: MedicalWebPage + FAQPage + BreadcrumbList. No QAPage.
 */

import FaqAccordion from '../../components/FaqAccordion';

const PAGE_URL = 'https://teledirectmd.com/co/altitude-sickness-treatment-online/';
const PAGE_TITLE = 'Altitude Sickness Medication in Colorado: Diamox by Video | TeleDirectMD';
const PAGE_DESCRIPTION = 'Heading to Breckenridge, Vail or Leadville? A Colorado-licensed physician reviews your trip and decides if acetazolamide fits. $79 flat-fee video visit.';
const DATE_PUBLISHED = '2026-11-03';
const DATE_MODIFIED = '2026-11-03';
const LAST_REVIEWED_DISPLAY = 'November 3, 2026';

const PHYSICIAN = {
  name: 'Parth Bhavsar, MD',
  npi: '1104323203',
  specialty: 'Family Medicine',
  headshot: '/images/dr-parth-bhavsar.jpg',
  bioUrl: '/about/',
};

const CDC_YB = 'https://www.cdc.gov/yellow-book/hcp/environmental-hazards-risks/high-altitude-travel-and-altitude-illness.html';

const TOWNS = [
  ['Denver', '5,280 ft'],
  ['Steamboat Springs', '6,732 ft'],
  ['Estes Park', '7,530 ft'],
  ['Aspen', '7,890 ft'],
  ['Vail', '8,189 ft'],
  ['Telluride', '8,793 ft'],
  ['Crested Butte', '8,924 ft'],
  ['Winter Park', '9,052 ft'],
  ['Keystone', '9,173 ft'],
  ['Breckenridge', '9,728 ft'],
  ['Leadville', '10,157 ft'],
];

// Plain-text answers feed the FAQPage schema; the rendered answers match them.
const FAQ_TEXT = [
  {
    q: 'Can I get Diamox online in Colorado?',
    a: 'Adults 18 and older located in Colorado can see a TeleDirectMD physician by video for a $79 flat fee. The physician decides whether acetazolamide is appropriate for your trip. It is not a controlled substance.',
  },
  {
    q: 'Do I need altitude sickness medication for Denver?',
    a: 'Denver sits at 5,280 feet, below the 8,000-foot sleeping altitude where the CDC says risk begins for unacclimatized travelers. Most people staying in Denver do not need medication. Risk rises if you go on to sleep in mountain towns the same day.',
  },
  {
    q: 'What is the dose of acetazolamide for a Colorado ski trip?',
    a: 'The CDC Yellow Book adult prevention dose is 125 mg every 12 hours, starting the day before ascent and continuing for the first two days at altitude. People over 100 kg may use 250 mg twice daily. Your physician sets the dose for you.',
  },
  {
    q: 'How common is altitude sickness at Colorado ski resorts?',
    a: 'About 25% of adult visitors to Colorado resorts between 6,300 and 9,700 feet developed acute mountain sickness in a 3,158-person study (Honigman, 1993). Most cases started within 12 hours of arrival.',
  },
  {
    q: 'Can I take acetazolamide if I am allergic to sulfa drugs?',
    a: 'The CDC Yellow Book says people allergic to sulfa antibiotics can take acetazolamide, with caution for anyone who has had anaphylaxis to a medication or has multiple drug allergies. Discuss your allergy history at the visit.',
  },
  {
    q: 'When should I book before my trip?',
    a: 'A few days before you leave gives time to fill the prescription and start the day before ascent.',
  },
  {
    q: 'What if I already feel sick in the mountains?',
    a: 'Mild headache and nausea can be acute mountain sickness; rest and avoid going higher. Confusion, trouble walking, or shortness of breath at rest are emergencies: descend and call 911.',
  },
];

const FAQ_ITEMS = FAQ_TEXT.map((f, i) => ({
  id: `co-altitude-sickness-treatment-online-faq-${i}`,
  question: f.q,
  answer: <p>{f.a}</p>,
}));

const SCHEMAS = [
  {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: PAGE_TITLE,
    url: PAGE_URL,
    description: PAGE_DESCRIPTION,
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    lastReviewed: DATE_MODIFIED,
    inLanguage: 'en-US',
    about: {
      '@type': 'MedicalCondition',
      name: 'Acute mountain sickness',
      code: { '@type': 'MedicalCode', code: 'T70.29', codingSystem: 'ICD-10-CM' },
    },
    medicalAudience: {
      '@type': 'MedicalAudience',
      audienceType: 'Patient',
      geographicArea: { '@type': 'AdministrativeArea', name: 'Colorado' },
    },
    reviewedBy: {
      '@type': 'Physician',
      '@id': 'https://teledirectmd.com/about/#physician',
      name: PHYSICIAN.name,
      identifier: { '@type': 'PropertyValue', propertyID: 'NPI', value: PHYSICIAN.npi },
      medicalSpecialty: 'Family Medicine',
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#co-altitude-sickness-treatment-online-opening', '#co-altitude-sickness-treatment-online-faq'],
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_TEXT.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'TeleDirectMD', item: 'https://teledirectmd.com' },
      { '@type': 'ListItem', position: 2, name: 'Colorado', item: 'https://teledirectmd.com/co/' },
      { '@type': 'ListItem', position: 3, name: 'Altitude Sickness Prevention in Colorado', item: PAGE_URL },
    ],
  },
];

const PAGE_CSS = `
.tdmd-co-alt{color:var(--tdmd-text);}
.tdmd-co-alt .tdmd-co-alt__byline{display:flex;align-items:center;gap:1rem;flex-wrap:wrap;margin:1rem 0 0;padding:0.85rem 1rem;background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:var(--tdmd-radius,18px);}
.tdmd-co-alt .tdmd-co-alt__byline img{width:56px;height:56px;border-radius:50%;object-fit:cover;border:2px solid var(--tdmd-teal);flex-shrink:0;background:#fff;}
.tdmd-co-alt .tdmd-co-alt__byline-text{display:flex;flex-direction:column;gap:0.15rem;font-size:0.92rem;line-height:1.45;}
.tdmd-co-alt .tdmd-co-alt__byline-name{font-weight:700;color:var(--tdmd-navy);}
.tdmd-co-alt .tdmd-co-alt__byline-meta{color:var(--tdmd-muted);font-size:0.85rem;}
.tdmd-co-alt .tdmd-co-alt__byline a{color:var(--tdmd-teal);font-weight:600;text-decoration:underline;text-underline-offset:2px;}
.tdmd-co-alt .tdmd-condition-opener{margin:1.5rem 0 0.5rem;}
.tdmd-co-alt .tdmd-condition-opener p{margin:0 0 0.75rem;font-size:1.05rem;line-height:1.7;}
.tdmd-co-alt .tdmd-condition-opener p a,.tdmd-co-alt .tdmd-section p a,.tdmd-co-alt .tdmd-section li a{color:var(--tdmd-teal);text-decoration:underline;text-underline-offset:2px;font-weight:600;}
.tdmd-co-alt .tdmd-co-alt__alert{background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-left:5px solid var(--tdmd-accent);border-radius:var(--tdmd-radius,18px);padding:1.1rem 1.25rem;margin-top:1rem;}
.tdmd-co-alt .tdmd-co-alt__alert ul{margin:0.5rem 0 0;padding-left:1.1rem;line-height:1.6;}
.tdmd-co-alt .tdmd-co-alt__note{color:var(--tdmd-muted);font-size:0.92rem;}
`;

export default function CoAltitudeSicknessTreatmentOnline() {
  const pid = 'co-altitude-sickness-treatment-online';

  return (
    <>
      {SCHEMAS.map((schema, i) => (
        <script
          key={`schema-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />

      <div className="tdmd-co-alt">
        <nav className="tdmd-breadcrumbs" aria-label="Breadcrumb">
          <div className="tdmd-container" style={{ paddingTop: '0.5rem', paddingBottom: 0 }}>
            <a href="/">Home</a>
            <span className="tdmd-bc-sep" aria-hidden="true">/</span>
            <a href="/co/">Colorado</a>
            <span className="tdmd-bc-sep" aria-hidden="true">/</span>
            <span aria-current="page">Altitude Sickness Prevention</span>
          </div>
        </nav>

        {/* 1) Hero and direct answer */}
        <section className="tdmd-hero" id={`${pid}-hero`}>
          <div className="tdmd-container">
            <h1 data-speakable="true">Altitude Sickness Prevention in Colorado: Acetazolamide (Diamox) by Video Visit</h1>

            <div className="tdmd-co-alt__byline" aria-label="Reviewed by physician">
              <img src={PHYSICIAN.headshot} alt={`${PHYSICIAN.name} headshot`} loading="eager" width={56} height={56} />
              <div className="tdmd-co-alt__byline-text">
                <span className="tdmd-co-alt__byline-name">
                  Medically reviewed by <a href={PHYSICIAN.bioUrl}>{PHYSICIAN.name}</a>, board-certified family medicine physician
                </span>
                <span className="tdmd-co-alt__byline-meta">
                  NPI {PHYSICIAN.npi} &middot; Licensed in Colorado &middot; Last reviewed <time dateTime={DATE_MODIFIED}>{LAST_REVIEWED_DISPLAY}</time>
                </span>
              </div>
            </div>

            <div className="tdmd-condition-opener" id={`${pid}-opening`}>
              <h2>Can I get altitude sickness medication before a Colorado trip?</h2>
              <p>
                Yes, if it is appropriate for you. Adults 18 and older who will be physically located in Colorado during the visit can see a board-certified physician by video for a $79 flat fee. The physician reviews where you will sleep, how fast you are going up, your health history and medications, and decides whether acetazolamide (Diamox) makes sense or whether a gradual ascent alone is enough. The prescription goes to a Colorado pharmacy you choose.
              </p>
              <p>
                Not in Colorado yet? Book while you are still at home, on the national <a href="/altitude-sickness-treatment-online/">altitude sickness prevention page</a>. TeleDirectMD sees patients in 40+ states.
              </p>
            </div>

            <div className="tdmd-hero-ctas">
              <a href="/book-online/" className="tdmd-btn tdmd-btn-primary">Book a video visit, $79</a>
            </div>
          </div>
        </section>

        {/* 2) Colorado epidemiology */}
        <section className="tdmd-section" id={`${pid}-how-common`}>
          <div className="tdmd-container">
            <h2>How common is altitude sickness in Colorado?</h2>
            <p>
              In a study of 3,158 adult visitors to Colorado resort towns between 6,300 and 9,700 feet, 25% developed acute mountain sickness, and 65% of those cases began within the first 12 hours after arrival (<a href="https://doi.org/10.7326/0003-4819-118-8-199304150-00003" rel="noopener" target="_blank">Honigman et al., Annals of Internal Medicine, 1993</a>). Visitors who lived below 3,000 feet had 3.5 times the odds of getting sick compared with those living higher. The CDC Yellow Book cites the same 25% figure for visitors sleeping above 8,000 feet in Colorado, and estimates high altitude pulmonary edema at roughly 1 per 10,000 skiers in Colorado (<a href={CDC_YB} rel="noopener" target="_blank">CDC Yellow Book</a>).
            </p>
          </div>
        </section>

        {/* 3) Sleeping altitude */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-where-you-sleep`}>
          <div className="tdmd-container">
            <h2>Where you sleep matters most</h2>
            <p>
              The CDC Yellow Book bases risk on sleeping altitude on your first night. Below 9,000 feet is low risk, 9,000 to 11,150 feet is medium risk, and above 11,150 feet is high risk. Any unacclimatized traveler sleeping at 8,000 feet or higher is at some risk.
            </p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table">
                <thead>
                  <tr><th scope="col">Colorado town</th><th scope="col">Town elevation (USGS GNIS)</th></tr>
                </thead>
                <tbody>
                  {TOWNS.map(([town, elev]) => (
                    <tr key={town}><td>{town}</td><td>{elev}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="tdmd-co-alt__note">
              Town elevations from the U.S. Geological Survey Geographic Names Information System, via the <a href="https://en.wikipedia.org/wiki/List_of_Colorado_municipalities_by_elevation" rel="noopener" target="_blank">list of Colorado municipalities by elevation</a>. Lodging and ski terrain can sit well above town level, so check the elevation of where you will sleep.
            </p>
            <p>
              Flying into Denver and driving straight to Breckenridge or Leadville the same day is a fast ascent. Spending a night in Denver first is one of the simplest ways to lower risk.
            </p>
          </div>
        </section>

        {/* 4) Acetazolamide */}
        <section className="tdmd-section" id={`${pid}-acetazolamide`}>
          <div className="tdmd-container">
            <h2>Acetazolamide (Diamox) for prevention</h2>
            <ul>
              <li>The CDC Yellow Book adult dose for prevention is 125 mg every 12 hours, starting the day before ascent and continuing for the first two days at altitude, longer if you keep climbing. People over 100 kg may use 250 mg twice daily.</li>
              <li>The Wilderness Medical Society 2024 guidelines recommend 125 mg every 12 hours starting the night before ascent, a strong recommendation based on high-quality evidence, as summarized in a 2025 appraisal of the guidelines (<a href="https://doi.org/10.1016/j.wem.2023.05.013" rel="noopener" target="_blank">Luks et al., 2024</a>; <a href="https://doi.org/10.3390/ijerph22020284" rel="noopener" target="_blank">Omidi et al., 2025</a>).</li>
              <li>In a randomized, placebo-controlled trial of 197 trekkers in Nepal, 125 mg twice daily lowered the rate of acute mountain sickness from 24.7% to 12.2% (<a href="https://doi.org/10.1089/152702903321488979" rel="noopener" target="_blank">Basnyat et al., 2003</a>). A meta-analysis of 11 randomized trials found daily doses of 250, 500 and 750 mg all prevented acute mountain sickness above 3,000 m, with a combined odds ratio of 0.36 (<a href="https://doi.org/10.1136/bmj.e6779" rel="noopener" target="_blank">Low et al., BMJ 2012</a>). Most of this trial evidence comes from altitudes higher than Colorado&apos;s resort towns.</li>
              <li>Low-risk trips usually do not need medication. The CDC Yellow Book says acetazolamide prophylaxis is not indicated for low-risk ascents.</li>
              <li>A sulfa antibiotic allergy is not an automatic barrier. The CDC Yellow Book says people allergic to sulfa antibiotics can take acetazolamide, with caution for anyone with a history of anaphylaxis to any medication or multiple drug allergies.</li>
              <li>Common effects include tingling in the fingers and toes, more frequent urination, and a change in how carbonated drinks taste.</li>
            </ul>
            <p>Whether acetazolamide is right for you, and at what dose, is decided by the physician during the visit.</p>
          </div>
        </section>

        {/* 5) Scope and emergencies */}
        <section className="tdmd-section" id={`${pid}-scope`}>
          <div className="tdmd-container">
            <h2>What a video visit can and cannot do</h2>
            <p>
              A video visit works for planning before or early in a trip: reviewing your itinerary, deciding on acetazolamide, and planning what to do if symptoms start. It cannot treat severe altitude illness.
            </p>
            <div className="tdmd-co-alt__alert" role="note">
              <strong>Get emergency care now, and descend, for any of these at altitude:</strong>
              <ul>
                <li>Confusion, unusual drowsiness, or trouble walking a straight line</li>
                <li>Shortness of breath at rest, a persistent cough, or pink or frothy sputum</li>
                <li>Chest pain or fainting</li>
              </ul>
            </div>
            <p style={{ marginTop: '1rem' }}>
              In Colorado mountain towns, call 911 or go to the nearest emergency department or hospital. TeleDirectMD does not prescribe dexamethasone or nifedipine for altitude illness and does not manage high altitude cerebral or pulmonary edema.
            </p>
          </div>
        </section>

        {/* 6) Before you book */}
        <section className="tdmd-section" id={`${pid}-before-you-book`}>
          <div className="tdmd-container">
            <h2>Before you book</h2>
            <ul>
              <li>You must be 18 or older and physically in Colorado during the visit for this page; otherwise use the <a href="/altitude-sickness-treatment-online/">national page</a>.</li>
              <li>Have your itinerary ready: arrival day, where you sleep each night, and any plans above 11,000 feet.</li>
              <li>Have your medication and allergy list ready.</li>
              <li>Book a few days before you leave so the prescription can be filled before ascent.</li>
            </ul>
          </div>
        </section>

        {/* 7) FAQ (collapsed accordion) */}
        <section className="tdmd-section" id={`${pid}-faq`}>
          <div className="tdmd-container">
            <FaqAccordion items={FAQ_ITEMS} sectionTitle="Frequently asked questions" />
          </div>
        </section>

        {/* 8) References */}
        <section className="tdmd-section" id={`${pid}-references`}>
          <div className="tdmd-container">
            <h2>References</h2>
            <ol className="tdmd-ref-list">
              <li>Honigman B, Theis MK, Koziol-McLain J, et al. Acute mountain sickness in a general tourist population at moderate altitudes. Ann Intern Med. 1993;118(8):587-592. <a href="https://doi.org/10.7326/0003-4819-118-8-199304150-00003" rel="noopener" target="_blank">doi:10.7326/0003-4819-118-8-199304150-00003</a></li>
              <li>Centers for Disease Control and Prevention. CDC Yellow Book: High-Altitude Travel and Altitude Illness. Page dated April 23, 2025. <a href={CDC_YB} rel="noopener" target="_blank">cdc.gov</a></li>
              <li>Luks AM, Beidleman BA, Freer L, et al. Wilderness Medical Society Clinical Practice Guidelines for the Prevention, Diagnosis, and Treatment of Acute Altitude Illness: 2024 Update. Wilderness Environ Med. 2024;35(1 suppl):2S-19S. <a href="https://doi.org/10.1016/j.wem.2023.05.013" rel="noopener" target="_blank">doi:10.1016/j.wem.2023.05.013</a></li>
              <li>Omidi A, Hawley GD, Kain D, et al. What Is New in Altitude- and Cold-Related Illnesses of Travel: Appraisal and Summary of the Updated Guidelines from the Wilderness Medical Society. Int J Environ Res Public Health. 2025;22(2):284. <a href="https://doi.org/10.3390/ijerph22020284" rel="noopener" target="_blank">doi:10.3390/ijerph22020284</a></li>
              <li>Basnyat B, Gertsch JH, Johnson EW, et al. Efficacy of low-dose acetazolamide (125 mg BID) for the prophylaxis of acute mountain sickness: a prospective, double-blind, randomized, placebo-controlled trial. High Alt Med Biol. 2003;4(1):45-52. <a href="https://doi.org/10.1089/152702903321488979" rel="noopener" target="_blank">doi:10.1089/152702903321488979</a></li>
              <li>Low EV, Avery AJ, Gupta V, Schedlbauer A, Grocott MPW. Identifying the lowest effective dose of acetazolamide for the prophylaxis of acute mountain sickness: systematic review and meta-analysis. BMJ. 2012;345:e6779. <a href="https://doi.org/10.1136/bmj.e6779" rel="noopener" target="_blank">doi:10.1136/bmj.e6779</a></li>
              <li>U.S. Geological Survey, Geographic Names Information System, as compiled in List of Colorado municipalities by elevation. <a href="https://en.wikipedia.org/wiki/List_of_Colorado_municipalities_by_elevation" rel="noopener" target="_blank">wikipedia.org</a></li>
            </ol>
          </div>
        </section>

        {/* 9) Disclaimer */}
        <section className="tdmd-section tdmd-footnote" id={`${pid}-disclaimer`}>
          <div className="tdmd-container">
            <p>
              Not for emergencies. This page is general education, not a diagnosis. The physician decides during the visit whether a prescription is appropriate. Questions: <a href="mailto:contact@teledirectmd.com">contact@teledirectmd.com</a>
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
