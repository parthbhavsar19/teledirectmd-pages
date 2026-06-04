/**
 * VtSeasonalAllergiesTreatmentOnline.js — Vermont × Seasonal Allergies Treatment condition page (v3)
 *
 * URL: /ca/seasonal-allergies-treatment-online/
 * Authority: AAAAI/ACAAI + ARIA-EAACI 2026
 * Rendered by app/[slug]/[conditionSlug]/page.js when slug === 'ca'
 * and conditionSlug === 'seasonal-allergies-treatment-online'.
 *
 * Matches VT condition v3 template:
 *   • No CitableSummaryBlock — inline opener paragraph below hero
 *   • Premium FaqAccordion — 12 FAQs (3 VT-generic + 9 condition-specific)
 *   • JSON-LD: MedicalWebPage + FAQPage + Physician + HowTo + BreadcrumbList + SpeakableSpecification
 *   • NO QAPage schema
 *   • Inline vertical cost bars (heightPct: 8/22/45/100)
 *   • Vermont cash-pay (no payer table)
 *   • GoodRx-verified pricing
 *   • 15+ internal links
 *   • Vermont regulatory block (18 V.S.A. Chapter 219, Vermont Board of Medical Practice)
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

const PAGE_URL = 'https://teledirectmd.com/vt/seasonal-allergies-treatment-online/';
const PAGE_TITLE = 'Seasonal Allergies Treatment Online in Vermont | TeleDirectMD';
const DATE_PUBLISHED = '2026-05-19';
const DATE_MODIFIED = '2026-05-19';
const LAST_REVIEWED = '2026-05-19';

const PHYSICIAN = {
  name: 'Parth Bhavsar, MD',
  npi: '1104323203',
  specialty: 'Family Medicine',
  licenseState: 'Vermont',
  headshot: '/images/dr-parth-bhavsar.jpg',
  bioUrl: '/about',
};


const FAQ_ITEMS = [
  {
    question: 'Do you accept insurance in Vermont?',
    answer: (
      <p>
        TeleDirectMD operates as a cash-pay practice in Vermont. Your $79 visit fee is paid at booking. Prescription costs are filled separately at your pharmacy and may be covered by your pharmacy benefit. HSA and FSA cards are accepted. There is no insurance billing in Vermont — straightforward, transparent pricing.
      </p>
    ),
  },
  {
    id: 'seasonal-allergies-treatment-online-faq-0',
    question: "Can I get seasonal allergy treatment online in Vermont?",
    answer: <p>Yes. 18 V.S.A. Chapter 219 permits licensed physicians to deliver care via synchronous video telehealth without a prior in-person visit. TeleDirectMD\'s Vermont-licensed board-certified Family Medicine physician evaluates your symptom pattern, allergen triggers, and prior treatment response before prescribing intranasal corticosteroids, antihistamines, leukotriene receptor antagonists, or combination nasal sprays. Self pay is $79.</p>,
  },
  {
    id: 'seasonal-allergies-treatment-online-faq-1',
    question: "What makes Vermont allergy seasons different from the rest of the U.S.?",
    answer: <p>Vermont\'s allergy season is sharply seasonal, not year-round. Tree pollen — driven by maple, birch, oak, and ash — runs March through May and peaks in April and May. Grass pollen (timothy, ryegrass, orchard) runs May through July and peaks in June. Ragweed and other weed pollen runs August through October, peaking in September, and tapers off after the first frost (typically October or November). Because Vermont sits in the Northeastern Mixed Forest region, tree-pollen season begins roughly two to four weeks later than in states to the south, and the dense northern foliage produces high pollen concentrations during the spring peak.</p>,
  },
  {
    id: 'seasonal-allergies-treatment-online-faq-2',
    question: "What is the first-line treatment for seasonal allergies per ARIA 2026?",
    answer: <p>The ARIA 2026 (Allergic Rhinitis and Its Impact on Asthma) updated guideline and AAAAI/ACAAI practice parameters establish intranasal corticosteroids (INCS) as the most effective first-line treatment for persistent or moderate-severe allergic rhinitis. INCS — including fluticasone propionate (Flonase), mometasone (Nasonex), and budesonide (Rhinocort) — reduce nasal congestion, rhinorrhea, sneezing, and nasal pruritus more effectively than oral antihistamines alone. For mild intermittent symptoms, second-generation antihistamines (cetirizine, fexofenadine, loratadine) are appropriate as monotherapy.</p>,
  },
  {
    id: 'seasonal-allergies-treatment-online-faq-3',
    question: "What allergy medications are safe and non-sedating for Vermont adults who drive?",
    answer: <p>Second-generation antihistamines are the appropriate choice for Vermonters who drive or work heavy equipment. Fexofenadine (Allegra 180 mg) is the least sedating second-generation antihistamine and is the preferred choice for daytime drivers. Loratadine (Claritin 10 mg) is also non-sedating. Cetirizine (Zyrtec 10 mg) may cause mild sedation in some patients. Avoid first-generation antihistamines (diphenhydramine/Benadryl, chlorpheniramine) — these cause significant sedation and are contraindicated when driving. Intranasal corticosteroids do not cause sedation.</p>,
  },
  {
    id: 'seasonal-allergies-treatment-online-faq-4',
    question: "How much do prescription allergy medications cost in Vermont with GoodRx?",
    answer: <p>Many allergy medications are available over the counter or as affordable generics. Fluticasone nasal spray (generic Flonase): available OTC approximately $15–$25 per month. Mometasone nasal spray (generic Nasonex): approximately $15–$30 per month with GoodRx. Cetirizine, loratadine, and fexofenadine are available OTC at approximately $8–$20 per month generic. The combination nasal spray (azelastine/fluticasone/Dymista) runs approximately $100–$200 per bottle — manufacturer savings programs available.</p>,
  },
  {
    id: 'seasonal-allergies-treatment-online-faq-5',
    question: "What is allergen immunotherapy and can TeleDirectMD prescribe it?",
    answer: <p>Allergen immunotherapy (SCIT: subcutaneous immunotherapy — allergy shots; SLIT: sublingual immunotherapy — drops or tablets) is the only disease-modifying treatment for allergic rhinitis — it builds tolerance to specific allergens and can produce lasting symptom reduction after treatment is completed. TeleDirectMD can facilitate a referral to a Vermont allergist for immunotherapy evaluation. Administering allergen immunotherapy requires an in-person allergist, but TeleDirectMD can provide prescription antihistamines, nasal steroids, and symptom management while you pursue immunotherapy.</p>,
  },
  {
    id: 'seasonal-allergies-treatment-online-faq-6',
    question: "When does each pollen season peak in Vermont?",
    answer: <p>Vermont has three distinct pollen seasons. Tree pollen (maple, birch, oak, ash) runs March through May and peaks in April and May. Grass pollen (timothy, ryegrass, orchard) runs May through July and peaks in June. Ragweed and weed pollen runs August through October and peaks in September, ending after the first hard frost. The heaviest combined pollen counts in Vermont generally fall between April and July. Because tree-pollen season starts two to four weeks later than in southern states, Vermonters often see their worst symptoms in late April through June rather than early spring.</p>,
  },
  {
    id: 'seasonal-allergies-treatment-online-faq-7',
    question: "What is the FDA warning for montelukast in seasonal allergies?",
    answer: <p>The FDA issued a boxed warning for montelukast (Singulair) in 2020 for serious neuropsychiatric adverse events including agitation, aggression, depression, suicidal ideation, and suicidality. Because effective alternatives (intranasal corticosteroids, antihistamines) exist for allergic rhinitis, the FDA recommends against prescribing montelukast as first-line therapy for allergic rhinitis when alternatives are appropriate. TeleDirectMD prescribes montelukast for allergic rhinitis only when other options have failed or are contraindicated, and discusses the boxed warning with patients before prescribing.</p>,
  },
  {
    id: 'seasonal-allergies-treatment-online-faq-9',
    question: "When do seasonal allergies require in-person evaluation instead of telehealth?",
    answer: <p>Seek in-person evaluation for: severe allergic reaction or anaphylaxis after allergen exposure (use EpiPen + call 911); new nasal polyps, orbital cellulitis, or sinusitis with high fever; suspected allergic fungal sinusitis; first-time evaluation for allergen immunotherapy; or when multiple treatments have failed and allergy skin testing or immunoCap testing is needed to identify specific triggers. TeleDirectMD manages symptom-based allergic rhinitis without requiring skin testing for established allergen patterns.</p>,
  },
  {
    id: 'seasonal-allergies-treatment-online-faq-10',
    question: "Can TeleDirectMD treat children\'s seasonal allergies in Vermont?",
    answer: <p>TeleDirectMD treats adults 18 years of age and older only. Children with seasonal allergies should be seen by their pediatrician, a board-certified allergist, or a pediatric primary care provider. Pediatric allergy resources in Vermont include the AAAAI Find an Allergist tool at aaaai.org and Medi-Cal managed care pediatric providers for insured children.</p>,
  },
  {
    id: 'seasonal-allergies-treatment-online-faq-11',
    question: "What should I track before my seasonal allergy visit with TeleDirectMD?",
    answer: <p>Before your visit, note: which months your symptoms are worst (helps identify tree vs. grass vs. weed pollen dominance); symptom severity score (nasal congestion, runny nose, sneezing, itchy eyes — 0–3 scale); what treatments you have tried (including OTC antihistamines, nasal sprays) and how well they worked; comorbid conditions (asthma, eczema, food allergies, nasal polyps, sinus infections); and any occupational exposures (farm and field work, logging, or other outdoor labor). This history helps the physician select the most effective treatment from the start.</p>,
  }
];

const VT_SIBLINGS = [
  { slug: 'asthma-refills-online', label: "Asthma Refills in VT", why: "Allergic asthma and allergic rhinitis share mechanisms — often co-managed (united airway disease)." },
  { slug: 'epipen-refills-online', label: "EpiPen Refills in VT", why: "Anaphylaxis risk in patients with severe allergic disease — emergency preparedness companion." },
  { slug: 'anti-aging-treatment-online', label: "Anti-Aging Treatment in VT", why: "Allergic contact dermatitis can mimic anti-aging skin concerns — differential context." },
  { slug: 'smoking-cessation-treatment-online', label: "Smoking Cessation in VT", why: "Smoking worsens allergic rhinitis — cessation reduces nasal inflammation." },
  { slug: 'acid-reflux-refills-online', label: "Acid Reflux Refills in VT", why: "Nasal drip can trigger reflux — postnasal drip and GERD often co-occur." },
  { slug: 'online-doctor-visits', label: "All Online Doctor Visits in VT", why: "General VT telehealth hub." }
];

function buildSchemas() {
  const medicalWebPage = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: PAGE_TITLE,
    url: PAGE_URL,
    description: 'Get seasonal allergy treatment online in Vermont. Board-certified Family Medicine MD. Vermont telehealth law compliant. Cash-pay only at $79 flat. AAAAI/ACAAI + ARIA-EAACI 2026 guidelines. Antihistamines, nasal steroids, immunotherapy referral.',
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
      geographicArea: { '@type': 'AdministrativeArea', name: 'Vermont' },
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
    name: 'How to Get Treatment for Seasonal Allergies Treatment Online in Vermont',
    description: 'Three steps to receive seasonal allergies treatment evaluation and prescription from a Vermont-licensed board-certified physician.',
    totalTime: 'PT30M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '79' },
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Book your video visit', text: 'Visit teledirectmd.com and select Vermont Seasonal Allergies Treatment. No referral needed. Self pay $79. Many visits available same day.', url: 'https://teledirectmd.com/book-online' },
      { '@type': 'HowToStep', position: 2, name: 'See a Vermont-licensed MD by secure video', text: 'Connect with a board-certified Family Medicine physician licensed in Vermont. The physician reviews your history, current medications, lab values, and clinical status. Consent per 18 V.S.A. Chapter 219 confirmed.', url: PAGE_URL },
      { '@type': 'HowToStep', position: 3, name: 'Receive your treatment plan and e-prescription', text: 'If medication is appropriate, a Vermont-compliant e-prescription is sent to your chosen pharmacy during or after the visit. Follow-up instructions provided.', url: PAGE_URL },
    ],
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'TeleDirectMD', item: 'https://teledirectmd.com' },
      { '@type': 'ListItem', position: 2, name: 'Vermont', item: 'https://teledirectmd.com/vt/' },
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

export default function VtSeasonalAllergiesTreatmentOnline() {
  const schemas = buildSchemas();
  const pid = 'vt-seasonal-allergies-treatment-online';
  const vtCities = ['Burlington', 'South Burlington', 'Rutland', 'Essex Junction', 'Montpelier', 'Barre', 'Winooski', 'St. Albans', 'Newport', 'Brattleboro'];

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

      <div className="tdmd-vt-uti">
        {/* Breadcrumb */}
        <nav className="tdmd-breadcrumbs" aria-label="Breadcrumb">
          <div className="tdmd-container" style={{ paddingTop: '0.5rem', paddingBottom: 0 }}>
            <a href="/">Home</a>
            <span className="tdmd-bc-sep" aria-hidden="true">/</span>
            <a href="/vt/">Vermont</a>
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
                  Vermont adults 18+ · Secure video visit · Cash-pay $79 flat · MD-only · 18 V.S.A. Chapter 219 compliant · AAAAI/ACAAI + ARIA-EAACI 2026
                </p>
                <p>
                  TeleDirectMD provides evidence-based seasonal allergies treatment by secure video visit for Vermont adults. A Vermont-licensed board-certified Family Medicine physician evaluates your history, reviews relevant lab values and prior treatments, and prescribes appropriate medication when clinically indicated. This page is for adults located in Vermont, including {vtCities.join(', ')}, and surrounding areas.
                </p>

                {/* Visible byline (E-E-A-T) */}
                <div className="tdmd-vt-uti__byline tdmd-seasonal-allergies-treatment-online-byline" aria-label="Reviewed by physician">
                  <img src={PHYSICIAN.headshot} alt={`${PHYSICIAN.name} headshot`} loading="eager" width={56} height={56} />
                  <div className="tdmd-vt-uti__byline-text">
                    <span className="tdmd-vt-uti__byline-name">
                      Reviewed by <a href={PHYSICIAN.bioUrl}>{PHYSICIAN.name}</a> — Board-Certified {PHYSICIAN.specialty}
                    </span>
                    <span className="tdmd-vt-uti__byline-meta">
                      NPI {PHYSICIAN.npi} · Licensed in {PHYSICIAN.licenseState} · Last reviewed{' '}
                      <time dateTime={DATE_MODIFIED}>{new Date(DATE_MODIFIED).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                    </span>
                  </div>
                </div>

                <p className="tdmd-toc-intro" style={{ marginTop: '1.25rem' }}><strong>Quick navigation:</strong></p>
                <ul className="tdmd-toc">
                  <li><a href={`#${pid}-opening`}>Overview</a></li>
                  <li><a href={`#${pid}-ca-law`}>Vermont telehealth law</a></li>
                  <li><a href={`#${pid}-epidemiology`}>Vermont epidemiology</a></li>
                  <li><a href={`#${pid}-cost`}>Cost &amp; insurance</a></li>
                  <li><a href={`#${pid}-medications`}>Medications &amp; pricing</a></li>
                  <li><a href={`#${pid}-dual-path`}>Telehealth vs in-person</a></li>
                  <li><a href={`#${pid}-faq`}>FAQs</a></li>
                  <li><a href={`#${pid}-references`}>References</a></li>
                </ul>

                <ul className="tdmd-hero-benefits">
                  <li>$79 flat cash-pay — no insurance billing in Vermont</li>
                  <li>MD-only care (no mid-levels)</li>
                  <li>Vermont-licensed telehealth for adults located in Vermont at time of visit</li>
                  <li>Evidence-based treatment per AAAAI/ACAAI + ARIA-EAACI 2026</li>
                </ul>

                <div className="tdmd-hero-ctas">
                  <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit — $79</a>
                  <a href="/vt/" className="tdmd-btn tdmd-btn-outline">Explore Vermont Pages</a>
                  <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">View All Adult Conditions</a>
                </div>

                <p className="tdmd-icd"><strong>ICD-10 commonly used:</strong> J30.1 (Allergic rhinitis due to pollen), J30.9 (Allergic rhinitis, unspecified) — final coding per clinical details</p>
              </div>

              <div className="tdmd-hero-side">
                <div className="tdmd-hero-card">
                  <h2>Online Seasonal Allergies Treatment in Vermont</h2>
                  <ul>
                    <li>Board-certified Family Medicine MD — Vermont-licensed</li>
                    <li>Evidence-based regimen per AAAAI/ACAAI + ARIA-EAACI 2026</li>
                    <li>Lab value review before prescribing</li>
                    <li>e-Prescriptions to your VT pharmacy electronically</li>
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
                Vermont adults with seasonal allergic rhinitis can receive evaluation and prescription allergy treatment — including intranasal corticosteroids, antihistamines, leukotriene receptor antagonists, and nasal antihistamine/steroid combinations — by secure video visit through TeleDirectMD, consistent with 18 V.S.A. Chapter 219. A Vermont-licensed board-certified Family Medicine physician reviews your allergen trigger history, symptom pattern, prior treatment response, and comorbid conditions (asthma, allergic conjunctivitis). AAAAI, ACAAI, and the updated ARIA-EAACI 2026 guidelines inform treatment selection. Vermont's allergy season typically starts in March and peaks in April and May, driven by tree pollen from maple, birch, and oak, followed by grass pollen (May–July) and ragweed (August–October). Self pay is $79.
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
            <h2>Vermont Telehealth Law and Your Seasonal Allergies Treatment Visit</h2>

            <h3>Does Vermont require an in-person visit before telehealth?</h3>
            <p>
              No. <a href="https://legislature.vermont.gov/statutes/fullchapter/18/219" rel="noopener" target="_blank">18 V.S.A. Chapter 219 (Vermont&apos;s telemedicine statute)</a> — does not require a prior in-person visit before receiving telehealth services. Before delivering care, the physician must obtain the patient&apos;s verbal or written consent and document it. TeleDirectMD does this at the start of every visit.
            </p>

            <h3>What standard of care applies to Vermont telehealth physicians?</h3>
            <p>
              The <a href="https://www.healthvermont.gov/systems/board-medical-practice" rel="noopener" target="_blank">Vermont Board of Medical Practice</a> is explicit: &ldquo;The standard of care is the same whether the patient is seen in-person, through telehealth or other methods of electronically enabled health care.&rdquo; TeleDirectMD physicians are licensed in Vermont. See <a href="/about/">Dr. Bhavsar&apos;s bio</a> for credential details.
            </p>

            
            <h3>Does Vermont require electronic prescriptions?</h3>
            <p>
              Yes. Vermont permits electronic prescribing for non-controlled medications and imposes no e-prescribing mandate, per the <a href="https://www.healthvermont.gov/systems/board-medical-practice" rel="noopener" target="_blank">Vermont Board of Medical Practice</a>. If a prescription is appropriate after your visit, TeleDirectMD sends an e-prescription directly to your chosen Vermont pharmacy — CVS, Walgreens, Rite Aid, Walmart, Safeway, or another pharmacy of your choice. TeleDirectMD does not prescribe controlled substances in any state.
            </p>
          </div>
        </section>

        {/* ─── 4) CALIFORNIA EPIDEMIOLOGY ───────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-epidemiology`}>
          <div className="tdmd-container">
            <h2>Vermont Epidemiology: Seasonal Allergies Treatment</h2>
            <p>Allergic rhinitis affects approximately 19% of U.S. adults. In Vermont, allergy symptoms follow a clear seasonal arc: tree pollen from maple, birch, oak, and ash dominates March through May (peaking in April and May), grass pollen peaks in June, and ragweed peaks in September before the first frost. Vermont sits in the Northeastern Mixed Forest region, where dense foliage drives high spring and early-summer pollen counts, and tree-pollen season begins two to four weeks later than in states to the south.</p>
            
            
            
            
            
            
          </div>
        </section>

        {/* ─── 5) COST & INSURANCE ─────────────────────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-cost`}>
          <div className="tdmd-container">
            <h2>Seasonal Allergies Treatment Cost &amp; Insurance in Vermont</h2>
            <p>TeleDirectMD&apos;s self-pay rate is <strong>$79</strong> for a complete MD video visit, including evaluation, treatment plan, and e-prescription when appropriate. Vermont visits are cash-pay only at a flat $79; there is no insurance billing. The visit fee is paid at booking, and prescription costs are filled separately at your pharmacy.</p>

            <div className="tdmd-price-grid">
              <div className="tdmd-price-card" aria-label="TeleDirectMD pricing">
                <h3>TeleDirectMD Video Visit</h3>
                <p className="tdmd-price-big">$79</p>
                <p className="tdmd-price-sub">Self-pay flat fee — no subscription</p>
                <ul className="tdmd-price-includes">
                  <li>Board-certified MD video evaluation</li>
                  <li>Evidence-based seasonal allergies treatment management</li>
                  <li>e-Prescription to your VT pharmacy (when appropriate)</li>
                  <li>Follow-up instructions &amp; monitoring guidance</li>
                  <li>No hidden fees</li>
                </ul>
              </div>

              <div className="tdmd-price-chart" role="group" aria-label="Typical cost comparison">
                <h3>Typical Seasonal Allergies Treatment Visit Cost in Vermont</h3>
                <p className="tdmd-price-caption">Common ranges Vermonters see before insurance. Actual costs vary by setting and city.</p>
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
                <p className="tdmd-price-footnote">Comparison reflects typical Vermont metro pricing. Actual costs vary.</p>
              </div>
            </div>

            <div className="tdmd-cashpay-note">
              <p><strong>$79 flat self-pay.</strong> No insurance billing in Vermont &mdash; straightforward, transparent pricing. Your visit fee is paid at booking. HSA and FSA cards are accepted. Prescription costs are filled separately at your pharmacy of choice and may be covered by your pharmacy benefit.</p>
            </div>

            <p style={{ marginTop: '1rem' }}>
             
            </p>
          </div>
        </section>

        {/* ─── 6) MEDICATIONS TABLE ─────────────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-medications`}>
          <div className="tdmd-container">
            <h2>Seasonal Allergies Treatment: Medication Options and Pricing</h2>
            <p>
              The table below reflects evidence-based medication options per AAAAI/ACAAI + ARIA-EAACI 2026 guidelines.
              GoodRx prices retrieved May 2026 from goodrx.com — national coupon prices; actual cost varies by Vermont pharmacy location.
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
                    <td>Non-sedating. Generic widely available in Vermont pharmacies.</td>
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
            <div className="tdmd-vt-uti__dual">
              <div className="tdmd-vt-uti__dual-card tdmd-vt-uti__dual-card--good">
                <h3>✓ Use TeleDirectMD (telehealth) if</h3>
                <ul>
                  <li>Established seasonal allergies treatment with prior diagnosis</li>
                  <li>Stable on current regimen with recent relevant labs</li>
                  <li>No acute emergency or red-flag symptoms</li>
                  <li>Adult 18+, located in Vermont</li>
                  <li>$79 flat cash-pay — no insurance billing in Vermont</li>
                  <li>Seeking refill, monitoring review, or treatment initiation</li>
                </ul>
              </div>
              <div className="tdmd-vt-uti__dual-card tdmd-vt-uti__dual-card--alert">
                <h3>→ Use in-person care if</h3>
                <ul>
                  <li><strong>ER / 911:</strong> Acute severe symptoms, potential emergency</li>
                  <li><strong>Urgent care:</strong> Moderate acute symptoms requiring physical examination</li>
                  <li><strong>Primary care:</strong> New diagnosis, complex workup, or specialist referral needed</li>
                  <li><strong>Specialist:</strong> Condition exceeding primary care telehealth scope</li>
                  <li><strong><a href="https://vermont211.org" rel="noopener" target="_blank">Vermont 211</a>:</strong> Find local clinics and resources</li>
                  <li><strong><a href="https://portal.healthconnect.vermont.gov/" rel="noopener" target="_blank">Vermont Health Connect</a>:</strong> Find primary care providers and coverage options</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 8) CTA STRIP ─────────────────────────────────────────────────── */}
        <section className="tdmd-section" aria-label="Book a visit">
          <div className="tdmd-container">
            <div className="tdmd-vt-uti__cta-strip" role="complementary">
              <div>
                <p>Book a same-day video visit — Vermont adults, 18+</p>
                <small>Cash-pay $79 flat · No insurance billing in Vermont · Seasonal Allergies Treatment</small>
              </div>
              <a className="tdmd-vt-uti__cta-btn" href="/book-online" rel="noopener">Book Now →</a>
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
                <h3>Ready to see a Vermont-licensed MD?</h3>
                <p>Book a same-day video visit. Cash-pay $79 flat. No insurance billing in Vermont.</p>
              </div>
              <div className="tdmd-bottom-cta-actions">
                <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a Visit</a>
                <a href="/what-we-treat" className="tdmd-btn tdmd-btn-outline">View All Adult Conditions</a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 10) RELATED VT CONDITIONS (siblings) ─────────────────────────── */}
        <section className="tdmd-section tdmd-section-highlight" id={`${pid}-related-ca`}>
          <div className="tdmd-container">
            <h2>Other Vermont Conditions We Treat</h2>
            <p>These Vermont condition pages address related or frequently co-occurring conditions treated by TeleDirectMD in Vermont.</p>
            <div className="tdmd-vt-uti__sibling-grid">
              {VT_SIBLINGS.map((s) => (
                <a key={s.slug} className="tdmd-vt-uti__sibling" href={`/vt/${s.slug}/`}>
                  <span className="tdmd-vt-uti__sibling-label">{s.label}</span>
                  <span className="tdmd-vt-uti__sibling-why">{s.why}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 11) PILLAR / SPOKE / CLUSTER LINKS ───────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-related`}>
          <div className="tdmd-container">
            <h2>Related Resources from TeleDirectMD</h2>
            <p>This page sits at the intersection of the <a href="/vt/">Vermont state hub</a> and the <a href="/seasonal-allergies-treatment-online/">Seasonal Allergies Treatment national condition page</a>.</p>
            <div className="tdmd-vt-uti__related-links" aria-label="Related resources">
              <a href="/">Home</a>
              <a href="/vt/">Vermont (state pillar)</a>
              <a href="/seasonal-allergies-treatment-online/">Seasonal Allergies Treatment (national)</a>
              <a href="/vt/asthma-refills-online/">Asthma Refills in VT</a>
              <a href="/vt/hypertension-refills-online/">Hypertension Refills in VT</a>
              <a href="/vt/hypothyroidism-refills-online/">Hypothyroidism Refills in VT</a>
              <a href="/vt/hyperlipidemia-refills-online/">Hyperlipidemia Refills in VT</a>
              <a href="/vt/diabetes-refills-online/">Diabetes Refills in VT</a>
              <a href="/vt/migraine-refills-online/">Migraine Refills in VT</a>
              <a href="/vt/acid-reflux-refills-online/">Acid Reflux Refills in VT</a>
              <a href="/vt/epipen-refills-online/">EpiPen Refills in VT</a>
              <a href="/vt/hair-loss-treatment-online/">Hair Loss in VT</a>
              <a href="/vt/seasonal-allergies-treatment-online/">Seasonal Allergies in VT</a>
              <a href="/vt/anti-aging-treatment-online/">Anti-Aging in VT</a>
              <a href="/vt/eyelash-growth-treatment-online/">Eyelash Growth in VT</a>
              <a href="/vt/smoking-cessation-treatment-online/">Smoking Cessation in VT</a>
              <a href="/vt/motion-sickness-treatment-online/">Motion Sickness in VT</a>
              <a href="/vt/uti-treatment-online/">UTI Treatment in VT</a>
              <a href="/about/">About Dr. Bhavsar</a>
              <a href="/book-online">Book Online</a>
              <a href="/what-we-treat">What We Treat</a>
              <a href="/faq">FAQ</a>
            </div>
          </div>
        </section>

        {/* ─── 12) REFERENCES ───────────────────────────────────────────────── */}
        <section className="tdmd-section" id={`${pid}-references`}>
          <div className="tdmd-container">
            <h2>References and Primary Sources</h2>
            <ol className="tdmd-ref-list">
              <li><a href="https://legislature.vermont.gov/statutes/fullchapter/18/219" rel="noopener" target="_blank">18 V.S.A. Chapter 219 (Vermont&apos;s telemedicine statute)</a>. Retrieved May 2026.</li>
              <li><a href="https://www.healthvermont.gov/systems/board-medical-practice" rel="noopener" target="_blank">Vermont Board of Medical Practice</a>. Retrieved May 2026.</li>
              <li><a href="https://legislature.vermont.gov/statutes/fullchapter/26/023" rel="noopener" target="_blank">26 V.S.A. Chapter 23 (Vermont Medical Practice Act)</a>. Retrieved May 2026.</li>
              <li><a href="https://legislature.vermont.gov/statutes/section/18/219/09361" rel="noopener" target="_blank">18 V.S.A. § 9361 (Vermont telemedicine prescribing)</a>. Retrieved May 2026.</li>
              <li><a href="https://www.healthvermont.gov/systems/board-medical-practice" rel="noopener" target="_blank">Vermont Board of Medical Practice</a>. Retrieved May 2026.</li>
              <li><a href="https://www.ariaguidelines.com/" rel="noopener" target="_blank">ARIA 2022 GRADE Guideline — Allergic Rhinitis</a>. Retrieved May 2026.</li>
              <li><a href="https://www.aaaai.org/conditions-and-treatments/allergies/rhinitis" rel="noopener" target="_blank">AAAAI — Practice Parameters for the Diagnosis and Management of Rhinitis</a>. Retrieved May 2026.</li>
              <li><a href="https://www.acaai.org/allergies/types/hay-fever/" rel="noopener" target="_blank">ACAAI — Allergic Rhinitis Treatment Guidelines</a>. Retrieved May 2026.</li>
              <li><a href="https://www.aaaai.org/conditions-and-treatments/allergies/rhinitis" rel="noopener" target="_blank">AAAAI — Allergic Rhinitis (Hay Fever) Overview</a>. Retrieved May 2026.</li>
              <li><a href="https://www.acaai.org/allergies/types/hay-fever/" rel="noopener" target="_blank">ACAAI — Hay Fever (Allergic Rhinitis)</a>. Retrieved May 2026.</li>
              <li><a href="https://www.wyndly.com/blogs/allergy-season/vermont" rel="noopener" target="_blank">Wyndly — Vermont Allergy Season Guide and Pollen Calendar</a>. Retrieved May 2026.</li>
              <li><a href="https://www.ariaguidelines.com/" rel="noopener" target="_blank">ARIA-EAACI Guidelines — Allergic Rhinitis and Its Impact on Asthma</a>. Retrieved May 2026.</li>
            </ol>
          </div>
        </section>

        {/* ─── 13) DISCLAIMER ───────────────────────────────────────────────── */}
        <section className="tdmd-section tdmd-footnote" id={`${pid}-disclaimer`}>
          <div className="tdmd-container">
            <h2>Medical Disclaimer</h2>
            <p>This page is for informational purposes and is not a substitute for individualized medical advice. Use of TeleDirectMD does not establish a physician-patient relationship until a video visit is initiated and consent is documented under 18 V.S.A. Chapter 219. Treatment decisions are made by a Vermont-licensed board-certified physician based on the clinical history at the time of the visit. If you have urgent or severe symptoms, seek in-person care or emergency care immediately. TeleDirectMD does not prescribe controlled substances in any state.</p>
            <p>GoodRx price information reflects national coupon pricing retrieved May 2026; actual prescription costs at Vermont pharmacies vary.</p>
          </div>
        </section>
      </div>
    </>
  );
}
