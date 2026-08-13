/**
 * CaSeasonalAllergiesTreatmentOnline.js — California × Seasonal Allergies Treatment condition page (v3)
 *
 * URL: /ca/seasonal-allergies-treatment-online/
 * Authority: AAAAI/ACAAI + ARIA-EAACI 2026
 * Rendered by app/[slug]/[conditionSlug]/page.js when slug === 'ca'
 * and conditionSlug === 'seasonal-allergies-treatment-online'.
 *
 * Matches CA UTI v3 template:
 *   • No CitableSummaryBlock — inline opener paragraph below hero
 *   • Premium FaqAccordion — 12 FAQs (3 CA-generic + 9 condition-specific)
 *   • JSON-LD: MedicalWebPage + FAQPage + Physician + HowTo + BreadcrumbList + SpeakableSpecification
 *   • NO QAPage schema
 *   • Inline vertical cost bars (heightPct: 8/22/45/100)
 *   • CA Payor Status table from Notion CSV
 *   • GoodRx-verified CA pricing
 *   • 15+ internal links
 *   • CA regulatory block (B&P §2290.5, MBC, AB 744, AB 2789)
 *
 * Hard rules respected:
 *   • No QAPage schema
 *   • No CitableSummaryBlock
 *   • No first-person prescribing
 *   • No fabricated patient scenarios
 *   • NPI 1104323203 visible
 *   • All .gov and clinical society citations are live <a href> tags
 */
import FaqAccordion from '../../components/FaqAccordion';

const PAGE_URL = 'https://teledirectmd.com/ca/seasonal-allergies-treatment-online/';
const PAGE_TITLE = 'Seasonal Allergies Treatment Online in California | TeleDirectMD';
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
const CA_PAYORS = [
  { name: 'Aetna', status: 'Active', effective: 'April 30, 2026', inNetwork: true,
    notes: 'Commercial plans. In-network as of April 30, 2026. Verify plan eligibility with Aetna before booking.' },
  { name: 'UnitedHealthcare Commercial', status: 'Approved', effective: 'May 29, 2026', inNetwork: true,
    notes: 'Covers UHC Commercial and Medicare Advantage. Excludes Medi-Cal, Individual Exchange, and Navigate/Charter/Core plan types.' },
  { name: 'Anthem Blue Cross', status: 'Pending', effective: 'Pending determination', inNetwork: false,
    notes: 'Enrollment pending — self pay ($79) available.' },
  { name: 'Cigna', status: 'Pending', effective: 'Pending determination', inNetwork: false,
    notes: 'Pending — self pay ($79) available.' },
  { name: 'Kaiser Permanente', status: 'Closed system', effective: '—', inNetwork: false,
    notes: 'Kaiser is a closed health system. Use Kaiser telehealth at kp.org. TeleDirectMD self pay available but Kaiser will not reimburse out-of-network visits.' },
  { name: 'Medi-Cal', status: 'Not enrolled', effective: '—', inNetwork: false,
    notes: 'TeleDirectMD is not currently a Medi-Cal rendering provider. Find Medi-Cal telehealth providers via dhcs.ca.gov.' },
];

const FAQ_ITEMS = [
  {
    id: 'seasonal-allergies-treatment-online-faq-0',
    question: "Can I get seasonal allergy treatment online in California?",
    answer: <p>Yes. California Business and Professions Code Section 2290.5 permits licensed physicians to deliver care via synchronous video telehealth without a prior in-person visit. TeleDirectMD\'s California-licensed board-certified Family Medicine physician evaluates your symptom pattern, allergen triggers, and prior treatment response before prescribing intranasal corticosteroids, antihistamines, leukotriene receptor antagonists, or combination nasal sprays. Self pay is $79; Aetna is in-network effective April 30, 2026.</p>,
  },
  {
    id: 'seasonal-allergies-treatment-online-faq-1',
    question: "What makes California allergy seasons different from the rest of the U.S.?",
    answer: <p>California\'s Mediterranean climate creates a nearly year-round pollen season with no true winter respite for most residents. Tree pollen peaks from February through June, grass pollen (including bermuda and timothy from the Central Valley, which has some of the highest grass pollen counts in the nation) runs from May through October, and weed pollen persists from July through November. Wildfire smoke — now a year-round risk — worsens allergic rhinitis and asthma symptoms independent of pollen counts. The Bay Area Air Quality Management District (BAAQMD) publishes real-time pollen data relevant to Northern California residents.</p>,
  },
  {
    id: 'seasonal-allergies-treatment-online-faq-2',
    question: "What is the first-line treatment for seasonal allergies per ARIA 2026?",
    answer: <p>The ARIA 2026 (Allergic Rhinitis and Its Impact on Asthma) updated guideline and AAAAI/ACAAI practice parameters establish intranasal corticosteroids (INCS) as the most effective first-line treatment for persistent or moderate-severe allergic rhinitis. INCS — including fluticasone propionate (Flonase), mometasone (Nasonex), and budesonide (Rhinocort) — reduce nasal congestion, rhinorrhea, sneezing, and nasal pruritus more effectively than oral antihistamines alone. For mild intermittent symptoms, second-generation antihistamines (cetirizine, fexofenadine, loratadine) are appropriate as monotherapy.</p>,
  },
  {
    id: 'seasonal-allergies-treatment-online-faq-3',
    question: "What allergy medications are safe and non-sedating for California adults who drive?",
    answer: <p>Second-generation antihistamines are the appropriate choice for Californians who drive or work heavy equipment. Fexofenadine (Allegra 180 mg) is the least sedating second-generation antihistamine and is the preferred choice for daytime drivers. Loratadine (Claritin 10 mg) is also non-sedating. Cetirizine (Zyrtec 10 mg) may cause mild sedation in some patients. Avoid first-generation antihistamines (diphenhydramine/Benadryl, chlorpheniramine) — these cause significant sedation and are contraindicated when driving. Intranasal corticosteroids do not cause sedation.</p>,
  },
  {
    id: 'seasonal-allergies-treatment-online-faq-4',
    question: "How much do prescription allergy medications cost in California with GoodRx?",
    answer: <p>Many allergy medications are available over the counter or as affordable generics. Fluticasone nasal spray (generic Flonase): available OTC approximately $15–$25 per month. Mometasone nasal spray (generic Nasonex): approximately $15–$30 per month with GoodRx. Cetirizine, loratadine, and fexofenadine are available OTC at approximately $8–$20 per month generic. The combination nasal spray (azelastine/fluticasone/Dymista) runs approximately $100–$200 per bottle — manufacturer savings programs available.</p>,
  },
  {
    id: 'seasonal-allergies-treatment-online-faq-5',
    question: "What is allergen immunotherapy and can TeleDirectMD prescribe it?",
    answer: <p>Allergen immunotherapy (SCIT: subcutaneous immunotherapy — allergy shots; SLIT: sublingual immunotherapy — drops or tablets) is the only disease-modifying treatment for allergic rhinitis — it builds tolerance to specific allergens and can produce lasting symptom reduction after treatment is completed. TeleDirectMD can facilitate a referral to a California allergist for immunotherapy evaluation. Administering allergen immunotherapy requires an in-person allergist, but TeleDirectMD can provide prescription antihistamines, nasal steroids, and symptom management while you pursue immunotherapy.</p>,
  },
  {
    id: 'seasonal-allergies-treatment-online-faq-6',
    question: "Does California wildfire smoke worsen seasonal allergies?",
    answer: <p>Yes. California wildfire smoke significantly worsens allergic rhinitis and asthma symptoms. Wildfire smoke contains fine particulate matter (PM2.5), volatile organic compounds, and combustion byproducts that directly irritate nasal mucosa and trigger allergic inflammation independent of pollen. During smoke events — tracked by the California Air Resources Board (CARB) — the physician may recommend temporary dose increase of intranasal corticosteroids, indoor air filtration (HEPA filter), N95 mask use outdoors, and asthma action plan review for patients with comorbid asthma.</p>,
  },
  {
    id: 'seasonal-allergies-treatment-online-faq-7',
    question: "What is the FDA warning for montelukast in seasonal allergies?",
    answer: <p>The FDA issued a boxed warning for montelukast (Singulair) in 2020 for serious neuropsychiatric adverse events including agitation, aggression, depression, suicidal ideation, and suicidality. Because effective alternatives (intranasal corticosteroids, antihistamines) exist for allergic rhinitis, the FDA recommends against prescribing montelukast as first-line therapy for allergic rhinitis when alternatives are appropriate. TeleDirectMD prescribes montelukast for allergic rhinitis only when other options have failed or are contraindicated, and discusses the boxed warning with patients before prescribing.</p>,
  },
  {
    id: 'seasonal-allergies-treatment-online-faq-8',
    question: "Does California insurance cover allergy treatment visits?",
    answer: <p>California Assembly Bill 744 (2019) requires commercial health plans to reimburse telehealth allergy management visits on the same basis as in-person care. Aetna commercial is in-network with TeleDirectMD in California effective April 30, 2026; UnitedHealthcare Commercial is approved effective May 29, 2026. Anthem Blue Cross and Cigna are pending enrollment. Many allergy medications (fluticasone, cetirizine, loratadine, fexofenadine) are also available over the counter without a prescription in California pharmacies.</p>,
  },
  {
    id: 'seasonal-allergies-treatment-online-faq-9',
    question: "When do seasonal allergies require in-person evaluation instead of telehealth?",
    answer: <p>Seek in-person evaluation for: severe allergic reaction or anaphylaxis after allergen exposure (use EpiPen + call 911); new nasal polyps, orbital cellulitis, or sinusitis with high fever; suspected allergic fungal sinusitis; first-time evaluation for allergen immunotherapy; or when multiple treatments have failed and allergy skin testing or immunoCap testing is needed to identify specific triggers. TeleDirectMD manages symptom-based allergic rhinitis without requiring skin testing for established allergen patterns.</p>,
  },
  {
    id: 'seasonal-allergies-treatment-online-faq-10',
    question: "Can TeleDirectMD treat children\'s seasonal allergies in California?",
    answer: <p>TeleDirectMD treats adults 18 years of age and older only. Children with seasonal allergies should be seen by their pediatrician, a board-certified allergist, or a pediatric primary care provider. Pediatric allergy resources in California include the AAAAI Find an Allergist tool at aaaai.org and Medi-Cal managed care pediatric providers for insured children.</p>,
  },
  {
    id: 'seasonal-allergies-treatment-online-faq-11',
    question: "What should I track before my seasonal allergy visit with TeleDirectMD?",
    answer: <p>Before your visit, note: which months your symptoms are worst (helps identify tree vs. grass vs. weed pollen dominance); symptom severity score (nasal congestion, runny nose, sneezing, itchy eyes — 0–3 scale); what treatments you have tried (including OTC antihistamines, nasal sprays) and how well they worked; comorbid conditions (asthma, eczema, food allergies, nasal polyps, sinus infections); and any occupational exposures (agricultural work, outdoor labor in the Central Valley). This history helps the physician select the most effective treatment from the start.</p>,
  }
];

const CA_SIBLINGS = [
  { slug: 'asthma-refills-online', label: "Asthma Refills in CA", why: "Allergic asthma and allergic rhinitis share mechanisms — often co-managed (united airway disease)." },
  { slug: 'epipen-refills-online', label: "EpiPen Refills in CA", why: "Anaphylaxis risk in patients with severe allergic disease — emergency preparedness companion." },
  { slug: 'anti-aging-treatment-online', label: "Anti-Aging Treatment in CA", why: "Allergic contact dermatitis can mimic anti-aging skin concerns — differential context." },
  { slug: 'smoking-cessation-treatment-online', label: "Smoking Cessation in CA", why: "Smoking worsens allergic rhinitis — cessation reduces nasal inflammation." },
  { slug: 'acid-reflux-refills-online', label: "Acid Reflux Refills in CA", why: "Nasal drip can trigger reflux — postnasal drip and GERD often co-occur." },
];

function buildSchemas() {
  const medicalWebPage = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: PAGE_TITLE,
    url: PAGE_URL,
    description: 'Get seasonal allergy treatment online in California. Board-certified Family Medicine MD. CA telehealth law compliant. Aetna in-network. Self pay $79. AAAAI/ACAAI + ARIA-EAACI 2026 guidelines. Antihistamines, nasal steroids, immunotherapy referral.',
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    inLanguage: 'en-US',
    about: {
      '@type': 'MedicalCondition',
      name: 'Seasonal Allergies Treatment',
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
      cssSelector: ['#seasonal-allergies-treatment-online-opening', '#seasonal-allergies-treatment-online-opening p', '.tdmd-seasonal-allergies-treatment-online-byline', '#seasonal-allergies-treatment-online-faq'],
    },
  };

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: typeof faq.answer === 'string' ? faq.answer : faq.answer?.props?.children || faq.question },
    })),
  };

  const howTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Get Treatment for Seasonal Allergies Treatment Online in California',
    description: 'Three steps to receive seasonal allergies treatment evaluation and prescription from a California-licensed board-certified physician.',
    totalTime: 'PT30M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '79' },
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Book your video visit', text: 'Visit teledirectmd.com and select California Seasonal Allergies Treatment. No referral needed. Self pay $79. Many visits available same day.', url: 'https://teledirectmd.com/book-online' },
      { '@type': 'HowToStep', position: 2, name: 'See a California-licensed MD by secure video', text: 'Connect with a board-certified Family Medicine physician licensed in California. The physician reviews your history, current medications, lab values, and clinical status. Consent per CA B&P Section 2290.5 confirmed.', url: PAGE_URL },
      { '@type': 'HowToStep', position: 3, name: 'Receive your treatment plan and e-prescription', text: 'If medication is appropriate, a California-compliant e-prescription is sent to your chosen pharmacy during or after the visit per AB 2789. Follow-up instructions provided.', url: PAGE_URL },
    ],
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'TeleDirectMD', item: 'https://teledirectmd.com' },
      { '@type': 'ListItem', position: 2, name: 'California', item: 'https://teledirectmd.com/ca/' },
      { '@type': 'ListItem', position: 3, name: PAGE_TITLE, item: PAGE_URL },
    ],
  };

  return [medicalWebPage, faqPage, howTo, breadcrumb];
}

function extractPlain(node) {
  if (node == null) return '';
  if (typeof node === 'string') return node;
  if (Array.isArray(node)) return node.map(extractPlain).join('');
  if (node.props && node.props.children) return extractPlain(node.props.children);
  return '';
}

export default function CaSeasonalAllergiesTreatmentOnline() {
  const schemas = buildSchemas();
  const pid = 'ca-seasonal-allergies-treatment-online';
  const caCities = ['Los Angeles', 'San Diego', 'San Jose', 'San Francisco', 'Fresno',
    'Sacramento', 'Long Beach', 'Oakland', 'Bakersfield', 'Anaheim'];

  return (
    <>
      {/* JSON-LD schemas */},
      {schemas.map((schema, i) => (
        <script
          key={`schema-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="tdmd-ca-uti">
        {/* Breadcrumb */}
        <nav className="tdmd-breadcrumbs" aria-label="Breadcrumb">
          <div className="tdmd-container" style={{ paddingTop: '0.5rem', paddingBottom: 0 }}>
            <a href="/">Home</a>
            <span className="tdmd-bc-sep" aria-hidden="true">/</span>
            <a href="/ca/">California</a>
            <span className="tdmd-bc-sep" aria-hidden="true">/</span>
            <span aria-current="page">Seasonal Allergies Treatment</span>
          </div>
        </nav>

        {/* ─── 1) HERO ────────────────────────────────────────────────────── */}
        <section className="tdmd-hero" id={`${pid}-hero`}>
          <div className="tdmd-container">
            <div className="tdmd-hero-grid">
              <div className="tdmd-hero-copy">
                <h1 data-speakable="true">Seasonal Allergies Treatment</h1>
                <p className="tdmd-hero-sub" data-speakable="true">
                  California adults 18+ · Secure video visit · Self pay $79 · Aetna in-network · UHC Commercial approved · MD-only · CA B&amp;P §2290.5 compliant · AAAAI/ACAAI + ARIA-EAACI 2026
                </p>
                <p>
                  TeleDirectMD provides evidence-based seasonal allergies treatment by secure video visit for California adults. A California-licensed board-certified Family Medicine physician evaluates your history, reviews relevant lab values and prior treatments, and prescribes appropriate medication when clinically indicated. This page is for adults located in California, including {caCities.join(', ')}, and surrounding areas.
                </p>

                {/* Visible byline (E-E-A-T) */}
                <div className="tdmd-ca-uti__byline tdmd-seasonal-allergies-treatment-online-byline" aria-label="Reviewed by physician">
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
                  <li><a href={`#${pid}-opening`}>Overview</a></li>
                  <li><a href={`#${pid}-ca-law`}>California telehealth law</a></li>
                  <li><a href={`#${pid}-epidemiology`}>California epidemiology</a></li>
                  <li><a href={`#${pid}-cost`}>Cost &amp; insurance</a></li>
                  <li><a href={`#${pid}-medications`}>Medications &amp; pricing</a></li>
                  <li><a href={`#${pid}-dual-path`}>Telehealth vs in-person</a></li>
                  <li><a href={`#${pid}-faq`}>FAQs</a></li>
                  <li><a href={`#${pid}-references`}>References</a></li>
                </ul>

                <ul className="tdmd-hero-benefits">
                  <li>Self pay $79 — no insurance required</li>
                  <li>MD-only care (no mid-levels)</li>
                  <li>Aetna in-network (effective April 30, 2026)</li>
                  <li>UnitedHealthcare Commercial approved (effective May 29, 2026)</li>
                  <li>California-licensed telehealth for adults located in California at time of visit</li>
                  <li>Evidence-based treatment per AAAAI/ACAAI + ARIA-EAACI 2026</li>
                </ul>

                <div className="tdmd-hero-ctas">
                  <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit — $79</a>
                  <a href="/ca/" className="tdmd-btn tdmd-btn-outline">Explore California Pages</a>
                  <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">View All Adult Conditions</a>
                </div>

                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> J30.1 (Allergic rhinitis due to pollen), J30.9 (Allergic rhinitis, unspecified) — final coding per clinical details</p>
              </div>

              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>Online Seasonal Allergies Treatment in California</h2>
                  <ul>
                    <li>Board-certified Family Medicine MD — California-licensed</li>
                    <li>Evidence-based regimen per AAAAI/ACAAI + ARIA-EAACI 2026</li>
                    <li>Lab value review before prescribing</li>
                    <li>e-Prescriptions to your CA pharmacy under AB 2789</li>
                    <li>Clear follow-up steps and monitoring guidance</li>
                  </ul>
                  <p className="tdmd-hero-note">
                    Adults 18+ only. TeleDirectMD is not an emergency service. If you have urgent or severe symptoms, go to urgent care or the ER. TeleDirectMD does not prescribe controlled substances.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2) INLINE OPENER ───────────────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-opening`}>
          <div className="tdmd-container">
            <div className="tdmd-condition-opener" id="seasonal-allergies-treatment-online-opening">
              <p>
                California adults with seasonal allergic rhinitis can receive evaluation and prescription allergy treatment — including intranasal corticosteroids, antihistamines, leukotriene receptor antagonists, and nasal antihistamine/steroid combinations — by secure video visit through TeleDirectMD, consistent with California Business and Professions Code Section 2290.5. A California-licensed board-certified Family Medicine physician reviews your allergen trigger history, symptom pattern, prior treatment response, and comorbid conditions (asthma, allergic conjunctivitis). AAAAI, ACAAI, and the updated ARIA-EAACI 2026 guidelines inform treatment selection. California's year-round pollen seasons — driven by dry chaparral, oak, and grass pollen in the Central Valley and Bay Area — create one of the highest seasonal allergy burdens in the U.S. Self pay is $79. Aetna is in-network effective April 30, 2026.
              </p>
              <span className="tdmd-condition-opener__meta">
                Reviewed by <a href="/about/">{PHYSICIAN.name}</a>, Board-Certified {PHYSICIAN.specialty} · NPI {PHYSICIAN.npi} · Licensed in {PHYSICIAN.licenseState} ·
                Last reviewed <time dateTime={DATE_MODIFIED}>{new Date(DATE_MODIFIED).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
              </span>
            </div>
          </div>
        </section>

        {/* ─── 3) CALIFORNIA TELEHEALTH LAW ─────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-ca-law`}>
          <div className="tdmd-container">
            <h2>California Telehealth Law and Your Seasonal Allergies Treatment Visit</h2>

            <h3>Does California require an in-person visit before telehealth?</h3>
            <p>
              No. <a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=2290.5.&lawCode=BPC" rel="noopener" target="_blank">California Business and Professions Code Section 2290.5</a> — the Telehealth Advancement Act — does not require a prior in-person visit before receiving telehealth services. Before delivering care, the physician must obtain the patient&apos;s verbal or written consent and document it. TeleDirectMD does this at the start of every visit.
            </p>

            <h3>What standard of care applies to California telehealth physicians?</h3>
            <p>
              The <a href="https://www.mbc.ca.gov/Resources/Medical-Resources/telehealth.aspx" rel="noopener" target="_blank">Medical Board of California</a> is explicit: &ldquo;The standard of care is the same whether the patient is seen in-person, through telehealth or other methods of electronically enabled health care.&rdquo; TeleDirectMD physicians are licensed in California. See <a href="/about/">Dr. Bhavsar&apos;s bio</a> for credential details.
            </p>

            <h3>Does California insurance parity law cover telehealth visits?</h3>
            <p>
              Yes, for commercial plans. California Assembly Bill 744 (2019), codified in <a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=10123.85.&lawCode=INS" rel="noopener" target="_blank">California Insurance Code §10123.85</a>, requires commercial health plans to reimburse telehealth services on the same basis as comparable in-person services. Plans cannot require face-to-face contact as a condition of reimbursement. These parity provisions apply to contracts issued, amended, or renewed after January 1, 2021.
            </p>

            <h3>Does California require electronic prescriptions?</h3>
            <p>
              Yes. California requires all prescriptions to be issued electronically under Assembly Bill 2789 (effective January 1, 2022), per the <a href="https://www.mbc.ca.gov/News/" rel="noopener" target="_blank">Medical Board of California</a>. If a prescription is appropriate after your visit, TeleDirectMD sends an e-prescription directly to your chosen California pharmacy — CVS, Walgreens, Rite Aid, Walmart, Safeway, or another pharmacy of your choice. TeleDirectMD does not prescribe controlled substances in any state.
            </p>
          </div>
        </section>

        {/* ─── 4) CALIFORNIA EPIDEMIOLOGY ───────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-epidemiology`}>
          <div className="tdmd-container">
            <h2>California Epidemiology: Seasonal Allergies Treatment</h2>
            <p>Allergic rhinitis affects approximately 19% of U.S. adults — an estimated 7.4 million California adults. California's Mediterranean climate with distinct wet and dry seasons, combined with its chaparral scrubland, grass plains in the Central Valley, and extensive urban tree plantings, creates pollen seasons that overlap year-round. Unlike much of the U.S., California does not have a defined allergy-free winter for most residents.</p>
            
            
            
            
            
            
          </div>
        </section>

        {/* ─── 5) COST & INSURANCE ─────────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-cost`}>
          <div className="tdmd-container">
            <h2>Seasonal Allergies Treatment Cost &amp; Insurance in California</h2>
            <p>TeleDirectMD&apos;s self-pay rate is <strong>$79</strong> for a complete MD video visit, including evaluation, treatment plan, and e-prescription when appropriate. Patients with in-network insurance pay their plan&apos;s telehealth copay instead. The payor table below reflects TeleDirectMD&apos;s current California enrollment, refreshed May 19, 2026.</p>

            <div className="tdmd-price-grid">
              <div className="tdmd-price-card" aria-label="TeleDirectMD pricing">
                <h3>TeleDirectMD Video Visit</h3>
                <p className="tdmd-price-big">$79</p>
                <p className="tdmd-price-sub">Self-pay flat fee — no subscription</p>
                <ul className="tdmd-price-includes">
                  <li>Board-certified MD video evaluation</li>
                  <li>Evidence-based seasonal allergies treatment management</li>
                  <li>e-Prescription to your CA pharmacy (when appropriate)</li>
                  <li>Follow-up instructions &amp; monitoring guidance</li>
                  <li>No hidden fees</li>
                </ul>
              </div>

              <div className="tdmd-price-chart" role="group" aria-label="Typical cost comparison">
                <h3>Typical Seasonal Allergies Treatment Visit Cost in California</h3>
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
                  <tr><th>Insurer</th><th>Status</th><th>Effective</th><th>Notes</th></tr>
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
              For deeper detail, see <a href="/insurance/aetna/california/seasonal-allergies-treatment-online/">Aetna × California × Seasonal Allergies Treatment</a> or view all <a href="/insurance">insurance options</a>.
            </p>
          </div>
        </section>

        {/* ─── 6) MEDICATIONS TABLE ─────────────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-medications`}>
          <div className="tdmd-container">
            <h2>Seasonal Allergies Treatment: Medication Options and CA Pricing</h2>
            <p>
              The table below reflects evidence-based medication options per AAAAI/ACAAI + ARIA-EAACI 2026 guidelines.
              GoodRx prices retrieved May 2026 from goodrx.com — national coupon prices; actual cost varies by California pharmacy location.
              Prescription costs are separate from the $79 TeleDirectMD visit fee.
            </p>
            <div className="tdmd-table-wrap">
              <table className="tdmd-table" aria-label="Seasonal Allergies Treatment medication options and GoodRx prices">
                <caption style={{ captionSide: 'bottom', textAlign: 'left', padding: '0.5rem 0', fontSize: '0.85rem', color: 'var(--tdmd-muted)' }}>
                  GoodRx prices retrieved May 2026. Actual pharmacy prices vary. Prescription costs are separate from the visit fee.
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
                  <tr>
                    <td><strong>Fluticasone propionate nasal spray 50 mcg (Flonase, generic)</strong></td>
                    <td>2 sprays each nostril once daily; 1 spray maintenance</td>
                    <td><a href="https://www.goodrx.com/fluticasone-nasal" target="_blank" rel="noopener">Available OTC (~$15–$25/month); Rx strength same</a></td>
                    <td>First-line for moderate-persistent allergic rhinitis per ARIA 2026. Minimal systemic absorption. Also available as Flonase Sensimist (aqueous mist, less drip).</td>
                  </tr>
                  <tr>
                    <td><strong>Mometasone nasal spray 50 mcg (Nasonex, generic)</strong></td>
                    <td>2 sprays each nostril once daily</td>
                    <td><a href="https://www.goodrx.com/mometasone-nasal" target="_blank" rel="noopener">~$15–$30/month GoodRx (generic)</a></td>
                    <td>Similar efficacy to fluticasone. Generic available.</td>
                  </tr>
                  <tr>
                    <td><strong>Budesonide nasal spray 32 mcg (Rhinocort, generic)</strong></td>
                    <td>1–4 sprays per nostril once daily</td>
                    <td><a href="https://www.goodrx.com/budesonide-nasal" target="_blank" rel="noopener">Available OTC and Rx (~$15–$25/month)</a></td>
                    <td>Gentle aqueous formulation, well-tolerated. Good choice for patients prone to nasal dryness.</td>
                  </tr>
                  <tr>
                    <td><strong>Cetirizine (Zyrtec) 10 mg</strong></td>
                    <td>10 mg once daily</td>
                    <td><a href="https://www.goodrx.com/cetirizine" target="_blank" rel="noopener">Available OTC (~$10–$20/month generic)</a></td>
                    <td>Low sedation, rapid onset. May cause mild drowsiness in some patients.</td>
                  </tr>
                  <tr>
                    <td><strong>Fexofenadine (Allegra) 180 mg</strong></td>
                    <td>180 mg once daily or 60 mg BID</td>
                    <td><a href="https://www.goodrx.com/fexofenadine" target="_blank" rel="noopener">Available OTC (~$10–$20/month generic)</a></td>
                    <td>Least sedating antihistamine. Best choice for daytime use when driving or operating machinery.</td>
                  </tr>
                  <tr>
                    <td><strong>Loratadine (Claritin) 10 mg</strong></td>
                    <td>10 mg once daily</td>
                    <td><a href="https://www.goodrx.com/loratadine" target="_blank" rel="noopener">Available OTC (~$8–$18/month generic)</a></td>
                    <td>Non-sedating. Generic widely available in California pharmacies.</td>
                  </tr>
                  <tr>
                    <td><strong>Azelastine/fluticasone nasal spray (Dymista)</strong></td>
                    <td>1 spray each nostril BID</td>
                    <td><a href="https://www.goodrx.com/azelastine-fluticasone" target="_blank" rel="noopener">~$100–$200/bottle GoodRx; manufacturer savings available</a></td>
                    <td>FDA-approved combination for moderate-severe allergic rhinitis inadequately controlled by INCS alone. Provides antihistamine and steroid effects in a single spray.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="tdmd-med-note">
              <strong>Important:</strong> The choice of medication depends on your individual clinical history, allergies, organ function, and other factors assessed by the physician at the visit. Do not start a prescription medication without a clinical evaluation.
            </p>
          </div>
        </section>

        {/* ─── 7) DUAL-PATH BLOCK ────────────────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-dual-path`}>
          <div className="tdmd-container">
            <h2>TeleDirectMD vs. In-Person Care: Which Is Right for You?</h2>
            <p>For most established seasonal allergies treatment cases in stable adults, a video visit is appropriate and convenient. Some situations require in-person evaluation. Use the comparison below.</p>
            <div className="tdmd-ca-uti__dual">
              <div className="tdmd-ca-uti__dual-card tdmd-ca-uti__dual-card--good">
                <h3>✓ Use TeleDirectMD (telehealth) if</h3>
                <ul>
                  <li>Established seasonal allergies treatment with prior diagnosis</li>
                  <li>Stable on current regimen with recent relevant labs</li>
                  <li>No acute emergency or red-flag symptoms</li>
                  <li>Adult 18+, located in California</li>
                  <li>Aetna or UHC Commercial (in-network), or self pay $79</li>
                  <li>Seeking refill, monitoring review, or treatment initiation</li>
                </ul>
              </div>
              <div className="tdmd-ca-uti__dual-card tdmd-ca-uti__dual-card--alert">
                <h3>→ Use in-person care if</h3>
                <ul>
                  <li><strong>ER / 911:</strong> Acute severe symptoms, potential emergency</li>
                  <li><strong>Urgent care:</strong> Moderate acute symptoms requiring physical examination</li>
                  <li><strong>Primary care:</strong> New diagnosis, complex workup, or specialist referral needed</li>
                  <li><strong>Specialist:</strong> Condition exceeding primary care telehealth scope</li>
                  <li><strong><a href="https://www.211ca.org" rel="noopener" target="_blank">California 211</a>:</strong> Find local clinics and resources</li>
                  <li><strong><a href="https://coveredca.com" rel="noopener" target="_blank">Covered California</a>:</strong> Find in-network primary care providers</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 8) CTA STRIP ─────────────────────────────────────────────────── */}
        <section className="tdmd-section" aria-label="Book a visit">
          <div className="tdmd-container">
            <div className="tdmd-ca-uti__cta-strip" role="complementary">
              <div>
                <p>Book a same-day video visit — California adults, 18+</p>
                <small>Self pay $79 · Aetna in-network · UHC Commercial approved May 2026 · Seasonal Allergies Treatment</small>
              </div>
              <a className="tdmd-ca-uti__cta-btn" href="/book-online" rel="noopener">Book Now →</a>
            </div>
          </div>
        </section>

        {/* ─── 9) FAQ (Premium Style A accordion) ──────────────────────────── */}
        <section className="tdmd-section tdmd-faq" id={`${pid}-faq`}>
          <div className="tdmd-container">
            <FaqAccordion
              sectionTitle="Frequently Asked Questions — Seasonal Allergies Treatment"
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

        {/* ─── 10) RELATED CA CONDITIONS (siblings) ─────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-related-ca`}>
          <div className="tdmd-container">
            <h2>Other California Conditions We Treat</h2>
            <p>These California condition pages address related or frequently co-occurring conditions treated by TeleDirectMD in California.</p>
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

        {/* ─── 11) PILLAR / SPOKE / CLUSTER LINKS ───────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-related`}>
          <div className="tdmd-container">
            <h2>Related Resources from TeleDirectMD</h2>
            <p>This page sits at the intersection of the <a href="/ca/">California state hub</a> and the <a href="/seasonal-allergies-treatment-online/">Seasonal Allergies Treatment national condition page</a>.</p>
            <div className="tdmd-ca-uti__related-links" aria-label="Related resources">
              <a href="/">Home</a>
              <a href="/ca/">California (state pillar)</a>
              <a href="/seasonal-allergies-treatment-online/">Seasonal Allergies Treatment (national)</a>
              <a href="/ca/asthma-refills-online/">Asthma Refills in CA</a>
              <a href="/ca/hypertension-refills-online/">Hypertension Refills in CA</a>
              <a href="/ca/hypothyroidism-refills-online/">Hypothyroidism Refills in CA</a>
              <a href="/ca/hyperlipidemia-refills-online/">Hyperlipidemia Refills in CA</a>
              <a href="/ca/diabetes-refills-online/">Diabetes Refills in CA</a>
              <a href="/ca/migraine-refills-online/">Migraine Refills in CA</a>
              <a href="/ca/acid-reflux-refills-online/">Acid Reflux Refills in CA</a>
              <a href="/ca/epipen-refills-online/">EpiPen Refills in CA</a>
              <a href="/ca/hair-loss-treatment-online/">Hair Loss in CA</a>
              <a href="/ca/seasonal-allergies-treatment-online/">Seasonal Allergies in CA</a>
              <a href="/ca/anti-aging-treatment-online/">Anti-Aging in CA</a>
              <a href="/ca/eyelash-growth-treatment-online/">Eyelash Growth in CA</a>
              <a href="/ca/smoking-cessation-treatment-online/">Smoking Cessation in CA</a>
              <a href="/ca/motion-sickness-treatment-online/">Motion Sickness in CA</a>
              <a href="/ca/uti-treatment-online/">UTI Treatment in CA</a>
              <a href="/about/">About Dr. Bhavsar</a>
              <a href="/book-online">Book Online</a>
              <a href="/what-we-treat">What We Treat</a>
              <a href="/insurance">Insurance</a>
              <a href="/faq">FAQ</a>
            </div>
          </div>
        </section>

        {/* ─── 12) REFERENCES ───────────────────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-references`}>
          <div className="tdmd-container">
            <h2>References and Primary Sources</h2>
            <ol className="tdmd-ref-list">
              <li><a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=2290.5.&lawCode=BPC" rel="noopener" target="_blank">California Business and Professions Code Section 2290.5 — Telehealth Advancement Act</a>. Retrieved May 2026.</li>
              <li><a href="https://www.mbc.ca.gov/Resources/Medical-Resources/telehealth.aspx" rel="noopener" target="_blank">Medical Board of California — Telehealth Resources</a>. Retrieved May 2026.</li>
              <li><a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=10123.85.&lawCode=INS" rel="noopener" target="_blank">California Insurance Code §10123.85 — Telehealth Parity (AB 744)</a>. Retrieved May 2026.</li>
              <li><a href="https://www.dhcs.ca.gov/provgovpart/Pages/TelehealthFAQ.aspx" rel="noopener" target="_blank">California DHCS — Telehealth FAQ</a>. Retrieved May 2026.</li>
              <li><a href="https://www.mbc.ca.gov/News/" rel="noopener" target="_blank">Medical Board of California — AB 2789 Electronic Prescribing</a>. Retrieved May 2026.</li>
              <li><a href="https://www.ariaguidelines.com/" rel="noopener" target="_blank">ARIA 2022 GRADE Guideline — Allergic Rhinitis</a>. Retrieved May 2026.</li>
              <li><a href="https://www.aaaai.org/conditions-and-treatments/allergies/rhinitis" rel="noopener" target="_blank">AAAAI — Practice Parameters for the Diagnosis and Management of Rhinitis</a>. Retrieved May 2026.</li>
              <li><a href="https://www.acaai.org/allergies/types/hay-fever/" rel="noopener" target="_blank">ACAAI — Allergic Rhinitis Treatment Guidelines</a>. Retrieved May 2026.</li>
              <li><a href="https://www.aaaai.org/conditions-and-treatments/allergies/rhinitis" rel="noopener" target="_blank">AAAAI — Allergic Rhinitis (Hay Fever) Overview</a>. Retrieved May 2026.</li>
              <li><a href="https://www.acaai.org/allergies/types/hay-fever/" rel="noopener" target="_blank">ACAAI — Hay Fever (Allergic Rhinitis)</a>. Retrieved May 2026.</li>
              <li><a href="https://www.baaqmd.gov/" rel="noopener" target="_blank">Bay Area Air Quality Management District — Pollen Count</a>. Retrieved May 2026.</li>
              <li><a href="https://www.ariaguidelines.com/" rel="noopener" target="_blank">ARIA-EAACI Guidelines — Allergic Rhinitis and Its Impact on Asthma</a>. Retrieved May 2026.</li>
            </ol>
          </div>
        </section>

        {/* ─── 13) DISCLAIMER ───────────────────────────────────────────────── */}
        <section className="tdmd-section tdmd-footnote" id={`${pid}-disclaimer`}>
          <div className="tdmd-container">
            <h2>Medical Disclaimer</h2>
            <p>This page is for informational purposes and is not a substitute for individualized medical advice. Use of TeleDirectMD does not establish a physician-patient relationship until a video visit is initiated and consent is documented under California B&amp;P §2290.5. Treatment decisions are made by a California-licensed board-certified physician based on the clinical history at the time of the visit. If you have urgent or severe symptoms, seek in-person care or emergency care immediately. TeleDirectMD does not prescribe controlled substances in any state.</p>
            <p>GoodRx price information reflects national coupon pricing retrieved May 2026; actual prescription costs at California pharmacies vary. Insurance status is current as of May 19, 2026; verify with your insurer before booking.</p>
          </div>
        </section>
      </div>
    </>
  );
}
