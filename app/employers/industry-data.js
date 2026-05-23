/**
 * Data for the 5 industry employer landing pages.
 *
 * Each entry below is the canonical content source for /employers/[slug].
 * Primary-source citations are inline (label + url) — the layout component
 * renders them as `<a>` tags marked rel="noopener noreferrer" to external sources.
 *
 * Content is physician-defensible: every clinical claim is backed by a
 * BLS, CDC, NIOSH, OSHA, FMCSA, KFF, Mercer, or PubMed/PMC citation. Scope
 * disclaimers (no DOT exams, no controlled substances, no pediatrics, no
 * vaccine administration, no in-person procedures) are surfaced on every page
 * via the "What we cannot do" section.
 */

export const INDUSTRY_DATA = {
  // ────────────────────────────────────────────────────────────────────
  trucking: {
    slug: 'trucking',
    name: 'Trucking & Logistics',
    shortName: 'Trucking',
    audienceLabel: 'OTR Drivers, Owner-Operators, Fleet HR',
    metaDescription:
      'Virtual primary care for OTR truck drivers and owner-operators. Manage hypertension, diabetes, sleep apnea so drivers keep their DOT card. Same-day visits in 41 states + DC. $0 employer cost.',
    heroHeadline: 'Virtual primary care for the people who keep America moving.',
    heroHeadlineEm: 'No truck-stop detour required.',
    heroSub:
      "TeleDirectMD is physician-led virtual primary care designed for OTR drivers and owner-operators. We don't replace your DOT medical exam — federal law requires that in person. We manage the conditions that most often shorten a driver's card or get them disqualified: high blood pressure, diabetes, dyslipidemia, sleep apnea follow-up, mental health, and acute illness on the road. Licensed in 41 states + DC.",
    workforceProfile: {
      shortDesc: 'OTR driver',
      intro:
        'The US trucking workforce is older, heavier, and more medically complex than the general working population — and the regulatory cost of letting any of that drift is uniquely high.',
      stats: [
        {
          value: '~900,000',
          label: 'Heavy/tractor-trailer drivers (NAICS 484, 2025)',
          citation: { label: 'BLS NAICS 484', url: 'https://www.bls.gov/iag/tgs/iag484.htm' },
        },
        {
          value: '14.9%',
          label: 'Uninsured rate, transportation occupations (2024)',
          citation: {
            label: 'US Census Bureau, Sept 2025',
            url: 'https://www.census.gov/library/stories/2025/09/health-coverage-by-occupation.html',
          },
        },
        {
          value: '~69%',
          label: 'Obesity rate in long-haul drivers (vs. 31% general working adults)',
          citation: {
            label: 'CDC NIOSH 2015',
            url: 'https://www.cdc.gov/niosh/bulletin/2015/truck-driver-health.html',
          },
        },
        {
          value: '~28%',
          label: 'Commercial drivers with sleep apnea (FMCSA-sponsored study)',
          citation: {
            label: 'FMCSA Sleep Apnea Expert Panel',
            url: 'https://www.fmcsa.dot.gov/sites/fmcsa.dot.gov/files/docs/Driving-Sleep-Apnea_508CLN.pdf',
          },
        },
      ],
    },
    complaintsLede:
      "Every condition below falls within Dr. Bhavsar's scope of virtual primary care (adult, non-emergent, non-controlled). DOT physical exams themselves remain in-person by federal law (49 CFR §391.43) — but the chronic conditions that drive DOT card disqualification are exactly what virtual primary care does best.",
    commonComplaints: [
      {
        name: 'Hypertension (Stage 1–2)',
        why: 'NIOSH data show 26.2% of long-haul drivers had SBP ≥140 mmHg. FMCSA gives only a 1-year card for Stage 1 HTN, a 3-month card for Stage 2, and disqualifies drivers with BP ≥180/110. Consistent virtual management keeps drivers on full 2-year certifications.',
        citations: [
          { label: 'Hege et al., PLoS ONE 2018', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6237367/' },
          { label: 'FMCSA §391.41(b)(6)', url: 'https://www.fmcsa.dot.gov/regulations/medical/section-ss-39141b6-driver-safety-health-medical-requirements' },
        ],
      },
      {
        name: 'Type 2 Diabetes / Prediabetes',
        why: 'Diabetes prevalence in long-haul drivers is 14% vs. 7% in the general working population. Non-insulin diabetes managed to HbA1c targets is typically DOT-certifiable. Insulin-treated drivers can have Dr. Bhavsar complete the FMCSA MCSA-5870 ITDM Assessment Form.',
        citations: [
          { label: 'CDC NIOSH Bulletin 2015', url: 'https://www.cdc.gov/niosh/bulletin/2015/truck-driver-health.html' },
        ],
      },
      {
        name: 'Obstructive Sleep Apnea — CPAP adherence monitoring',
        why: 'Roughly 28% of commercial drivers have OSA. We cannot diagnose OSA (sleep study required) but we can review CPAP adherence data, manage comorbidities (HTN, DM2) that worsen it, and document compliance for the in-person Medical Examiner.',
        citations: [
          { label: 'FMCSA Sleep Apnea PDF', url: 'https://www.fmcsa.dot.gov/sites/fmcsa.dot.gov/files/docs/Driving-Sleep-Apnea_508CLN.pdf' },
        ],
      },
      {
        name: 'Dyslipidemia / High Cholesterol',
        why: '22% of long-haul drivers reported high cholesterol; 65.2% had HDL ≤40 mg/dL in clinical study. Statin titration and follow-up is fully telehealth-managed.',
        citations: [
          { label: 'Hege et al. 2018', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6237367/' },
        ],
      },
      {
        name: 'Acute respiratory infections from the road',
        why: 'Truck stops, communal facilities, ~51% smoking prevalence (vs. 19% nationally). A virtual visit replaces a 3-hour clinic detour at roughly one-third the cost of in-person urgent care.',
        citations: [
          { label: 'CDC NIOSH 2015', url: 'https://www.cdc.gov/niosh/bulletin/2015/truck-driver-health.html' },
          { label: 'J Patient Experience 2021', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8205332/' },
        ],
      },
      {
        name: 'Lumbar strain / back pain',
        why: 'Overexertion is the #1 cause of nonfatal injuries in tractor-trailer drivers (35%). NSAIDs, non-controlled muscle relaxants, return-to-work documentation — all virtual.',
        citations: [
          { label: 'BLS MLR 2015', url: 'https://www.bls.gov/opub/mlr/2015/article/workplace-hazards-of-truck-drivers.htm' },
        ],
      },
      {
        name: 'Urinary tract infection',
        why: 'Limited restroom access on routes forces delayed voiding; dehydration is common. Classic UTI symptom presentation can be diagnosed and treated entirely by video, with prescriptions sent to the nearest pharmacy.',
        citations: [
          { label: 'CDC NIOSH LHTD', url: 'https://www.cdc.gov/niosh/motor-vehicle/long-haul-truck-drivers/index.html' },
        ],
      },
      {
        name: 'Depression, anxiety, occupational stress',
        why: '62.5% of drivers report moderate-to-chronic stress; 38.1% rarely get a good night\'s sleep on workdays. SSRIs/SNRIs are not categorically DOT-disqualifying and can be managed virtually with documentation for the Medical Examiner.',
        citations: [
          { label: 'Hege et al. 2018', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6237367/' },
        ],
      },
      {
        name: 'GERD / dyspepsia',
        why: 'High-fat truck-stop diet, irregular meals, obesity, smoking — all GERD risk factors are highly prevalent. PPIs and H2 blockers are fully telehealth-prescribable.',
      },
      {
        name: 'Skin infections / cellulitis (non-abscess)',
        why: 'Cargo handling and outdoor exposure mean minor cuts and abrasions are frequent. Uncomplicated cellulitis can be managed with oral antibiotics by video. Abscess drainage requires in-person care — we refer.',
      },
      {
        name: 'Sprains and strains from falls/loading',
        why: 'Falls, slips, and trips were 30% of nonfatal injuries in tractor-trailer drivers. We rule out fracture indication (Ottawa rules), prescribe NSAIDs, and write light-duty letters.',
        citations: [
          { label: 'BLS MLR 2015', url: 'https://www.bls.gov/opub/mlr/2015/article/workplace-hazards-of-truck-drivers.htm' },
        ],
      },
    ],
    regulatoryNotes: `
<p><strong>The DOT physical itself stays in person — that's federal law.</strong> The FMCSA Medical Examiner's Certificate (49 CFR §391.43) requires an in-person exam by an FMCSA-listed Medical Examiner. TeleDirectMD does not perform DOT physicals.</p>
<p>What we do is manage the conditions that most often shorten a driver's card or get them disqualified — so drivers arrive at their next DOT exam in their best shape:</p>
<ul>
  <li><strong>FMCSA §391.41(b)(6) blood pressure thresholds.</strong> BP &lt;140/90 = 2-year card. Stage 1 HTN = 1-year card. Stage 2 HTN = 3-month one-time card. BP ≥180/110 = disqualified. Consistent virtual antihypertensive management is direct card-protection.</li>
  <li><strong>National Registry II (2025–2026).</strong> Exam results now transmit electronically to the driver's CDLIS/MVR overnight. Lapses are visible to employers. Carrying chronic disease through TeleDirectMD between exams prevents preventable downgrade events.</li>
  <li><strong>Insulin-treated diabetes (ITDM) MCSA-5870 form.</strong> The treating physician completes this — Dr. Bhavsar can sign for drivers he actively manages.</li>
  <li><strong>Return-to-work letters after illness/injury.</strong> FMCSRs do not mandate a new DOT exam after every illness, but most carriers require physician fitness-for-duty documentation. Same-day via telehealth.</li>
  <li><strong>Drug & alcohol program (49 CFR Part 382).</strong> Testing is administered by employers/TPAs — not by physicians. TeleDirectMD does not perform DOT drug screens.</li>
</ul>
`,
    whatWeSolve: [
      {
        headline: 'DOT-card preservation',
        body: 'Ongoing virtual management of HTN, DM2, dyslipidemia keeps biomarkers within FMCSA certification thresholds — protecting the 2-year card and avoiding the cascade of 1-year, 3-month, or disqualified outcomes.',
      },
      {
        headline: 'Eliminate clinic detours',
        body: 'Virtual visits run roughly one-third the cost of in-person urgent care and eliminate the 2–4 hour route deviation. UTIs, sinus infections, skin infections — all handled from a truck-stop parking lot.',
      },
      {
        headline: 'ITDM and fitness-for-duty documentation',
        body: 'Dr. Bhavsar can complete the MCSA-5870 ITDM form and write fitness-for-duty clearance letters same-day for drivers he manages — without requiring them to return home.',
      },
      {
        headline: 'Mental health support on the road',
        body: 'SSRIs/SNRIs are not categorically DOT-disqualifying. Virtual management plus medication-safety documentation for the Medical Examiner addresses driver mental health without putting the card at risk.',
      },
      {
        headline: 'One physician across 41 states + DC',
        body: 'OTR drivers move between states constantly. Dr. Bhavsar holds licenses in 41 states + DC — drivers get care wherever they happen to be (as long as they are physically located in a licensed state at the time of the visit).',
      },
    ],
    whatWeDont: [
      { headline: 'No DOT physical exams', body: 'Federal law (49 CFR §391.43) requires DOT exams to be performed in person by an FMCSA-listed Medical Examiner. We do not — and cannot — replace that exam. We make sure drivers are ready to pass it.' },
      { headline: 'No controlled substances', body: 'No Schedule II–V prescriptions via telehealth — no opioids, no stimulants, no benzodiazepines. This is a deliberate clinical-safety decision.' },
      { headline: 'No DOT drug or alcohol testing', body: 'Required by 49 CFR Part 382 — administered by employers and Third Party Administrators, not by physicians.' },
      { headline: 'No pediatric care', body: 'Adults only (18+). The benefit covers your drivers themselves.' },
    ],
    employerEconomics: `
<p>For a fleet operator or owner-operator, the financial math runs on three numbers: <strong>out-of-service days, healthcare cost per worker, and turnover</strong>. Each one is directly affected by whether your drivers have ongoing primary care.</p>
<ul>
  <li><strong>DOT card disqualification is a livelihood event.</strong> A driver pulled from service costs an owner-operator $500–$1,500 per day in lost revenue, or a fleet $2,000–$4,000+ per day in freight value. Most preventable disqualifications come from uncontrolled HTN, DM2, or BMI-driven sleep apnea.</li>
  <li><strong>Average employer health cost in 2025: $17,496 per employee per year (<a href="https://www.mercer.com/en-us/insights/us-health-news/employers-are-challenged-to-keep-healthcare-affordable-as-costs-soar-survey-results/" target="_blank" rel="noopener noreferrer">Mercer 2025</a>).</strong> TeleDirectMD costs the business $0 — drivers pay $59 per visit or use BCBS/Aetna/UHC in-network.</li>
  <li><strong>Absenteeism costs ~$1,685 per employee per year (<a href="https://www.teamsense.com/blog/absenteeism-workplace-statistics" target="_blank" rel="noopener noreferrer">CDC via TeamSense</a>).</strong> Quick virtual triage replaces "I'll just push through it" or "I have to leave the route" — both of which cost the carrier more than the visit itself.</li>
</ul>
`,
    faqs: [
      {
        q: 'Can a telehealth doctor help me pass my DOT physical?',
        a: "TeleDirectMD cannot perform your DOT physical — 49 CFR §391.43 requires that exam to be done in person by an FMCSA-certified Medical Examiner. What we can do is manage the conditions that most often shorten your card or get you disqualified: high blood pressure, diabetes, and high cholesterol. If your BP is Stage 2 (160–179/100–109), you only get a 3-month card. If we help you get it below 140/90 consistently, you qualify for a full 2-year card. Many drivers see us regularly specifically to stay DOT-ready year-round.",
      },
      {
        q: "I'm an owner-operator without company health insurance. How does this work for me?",
        a: 'TeleDirectMD is a direct-pay virtual primary care service — no insurance required. You get same-day video visits with Dr. Bhavsar for acute illness, prescription refills, lab review, and ongoing chronic disease management — all from your cab or a truck stop. Prescriptions are sent to a pharmacy near your current location. You are not tied to one city or one clinic.',
      },
      {
        q: 'My fleet has drivers in multiple states. Can one telehealth doctor cover all of them?',
        a: 'Yes. Dr. Bhavsar is licensed in 41 states plus DC — which covers the vast majority of US interstate OTR routes. Drivers must be physically located in a licensed state at the time of the visit; we confirm this at booking. This is the operational reason a telehealth-first practice works for geographically distributed workforces in a way that a single-state clinic cannot.',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────
  restaurants: {
    slug: 'restaurants',
    name: 'Restaurants & Hospitality',
    shortName: 'Restaurant',
    audienceLabel: 'Restaurant Owners, F&B HR, Hospitality GMs',
    metaDescription:
      'Virtual primary care for restaurant workers — burns, cuts, contact dermatitis, norovirus clearance, food-handler documentation. Same-day visits, $0 employer cost, 41 states + DC.',
    heroHeadline: "A telehealth benefit your kitchen and front-of-house can actually use.",
    heroHeadlineEm: 'Without losing a shift.',
    heroSub:
      "Restaurants have the highest burn and laceration rates of any private industry, the highest occupational dermatitis rates, and a 22% uninsured workforce. TeleDirectMD provides same-day virtual primary care for burns, cuts, contact dermatitis, norovirus clearance, food-handler health documentation, and mental health for late-shift workers — all without anyone leaving the line for a 3-hour urgent care detour.",
    workforceProfile: {
      shortDesc: 'restaurant worker',
      intro:
        'Food service is one of the largest private-sector workforces in America — and one of the most under-covered. Two thirds are under 35, a third of cooks lack a high school diploma, and over a fifth carry no health insurance at all.',
      stats: [
        {
          value: '~12.9M',
          label: 'US restaurant and food service workers (2026)',
          citation: { label: 'National Restaurant Association 2026', url: 'https://restaurant.org/research-and-media/research/restaurant-economic-insights/economic-indicators/total-restaurant-industry-jobs/' },
        },
        {
          value: '22.0%',
          label: 'Uninsured rate, food prep & serving occupations (2024)',
          citation: {
            label: 'US Census Bureau Sept 2025',
            url: 'https://www.census.gov/library/stories/2025/09/health-coverage-by-occupation.html',
          },
        },
        {
          value: '6.8×',
          label: 'Burn rate in full-service restaurants vs. all private industry',
          citation: {
            label: 'BLS 2020',
            url: 'https://www.bls.gov/opub/ted/2020/93800-nonfatal-injuries-and-illnesses-in-full-service-restaurants-in-2019.htm',
          },
        },
        {
          value: '~$1,500',
          label: 'Replacement cost per hourly worker (restaurant industry)',
          citation: { label: 'CirrusMD retailer case study', url: 'https://www.cirrusmd.com/resources/case-studies/retailer-benefits-by-providing-telehealth-to-uninsured-and-unenrolled-workers' },
        },
      ],
    },
    complaintsLede:
      "Burns, cuts, contact dermatitis, and shift-related illness dominate the clinical reality of restaurant work. Most of these are exactly what virtual primary care does well — fast assessment, prompt prescription, written WC and food-safety documentation. The ones that need in-person care (deep lacerations needing sutures, severe burns) we refer immediately and provide the triage call.",
    commonComplaints: [
      {
        name: 'Thermal burns (hands, forearms)',
        why: 'Burns occur at 10.2 cases per 10,000 FTEs in full-service restaurants — nearly 7× the all-industry rate. 57% of kitchen workers in a 2024 study reported skin burns. Minor first/second-degree burns are telehealth-manageable with wound care and topical antibiotic prescribing.',
        citations: [
          { label: 'BLS 2020', url: 'https://www.bls.gov/opub/ted/2020/93800-nonfatal-injuries-and-illnesses-in-full-service-restaurants-in-2019.htm' },
          { label: 'J Egyptian Public Health Assoc 2024', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11228010/' },
        ],
      },
      {
        name: 'Cuts, lacerations, puncture wounds',
        why: 'Cuts occur at 23.6 cases per 10,000 FTEs in full-service restaurants — more than 3× the private industry rate. 54% of kitchen workers reported cut wounds in 2024. Most non-suture-requiring wounds are managed by video; deep/gaping wounds get an immediate referral.',
        citations: [
          { label: 'BLS 2020', url: 'https://www.bls.gov/opub/ted/2020/93800-nonfatal-injuries-and-illnesses-in-full-service-restaurants-in-2019.htm' },
        ],
      },
      {
        name: 'Contact dermatitis (wet-work hands)',
        why: 'Restaurant workers have roughly twice the dermatitis rate of the general workforce. Treated with topical corticosteroids, barrier creams, and irritant-avoidance counseling — fully virtual.',
        citations: [
          { label: 'DermNet NZ', url: 'https://dermnetnz.org/topics/occupational-skin-disorders-in-chefs-and-restaurant-workers' },
        ],
      },
      {
        name: 'Norovirus / acute gastroenteritis',
        why: 'Norovirus is responsible for ~50% of all US foodborne illness outbreaks. CDC guidance: ill food workers must stay home until at least 48 hours after symptoms resolve. We provide same-day clearance-to-return documentation for FDA Food Code compliance.',
        citations: [
          { label: 'CDC Norovirus for Food Workers 2024', url: 'https://www.cdc.gov/norovirus/communication-resources/facts-for-food-workers.html' },
        ],
      },
      {
        name: 'Hepatitis A — vaccination documentation review',
        why: 'Hepatitis A is a top foodborne viral threat. We review vaccination records and provide documentation; vaccine administration itself requires an in-person clinic visit.',
        citations: [
          { label: 'TrainCan WHO/FAO 2024', url: 'https://www.traincan.com/foodsafetynews/how-viruses-like-hepatitis-a-and-norovirus-are-changing-the-global-food-safety-landscape' },
        ],
      },
      {
        name: 'Sprains and strains (slips and falls)',
        why: '71% of kitchen workers reported slips, trips, or falls in 2024. Sprains in full-service restaurants run 16.3 cases per 10,000 FTEs. Ottawa rules assessment, NSAIDs, return-to-work — virtual.',
        citations: [
          { label: 'BLS 2020', url: 'https://www.bls.gov/opub/ted/2020/93800-nonfatal-injuries-and-illnesses-in-full-service-restaurants-in-2019.htm' },
        ],
      },
      {
        name: 'Shift-work sleep disorder / insomnia',
        why: 'Late and overnight shifts predispose to circadian disruption. Shift workers are roughly 3× more likely to develop shift-related sleep disorders. Non-controlled sleep management (doxylamine, melatonin) and underlying mood evaluation are telehealth-friendly.',
        citations: [
          { label: 'UCLA Health 2024', url: 'https://www.uclahealth.org/news/article/5-long-term-health-effects-shift-work' },
        ],
      },
      {
        name: 'Upper respiratory infections / pharyngitis',
        why: 'Close-quarters kitchens, communal living, high turnover and low sick-leave access mean URIs spread fast. We assess, prescribe when bacterial, and provide written clearance for return to food handling per FDA Food Code.',
      },
      {
        name: 'Late-shift anxiety and depression',
        why: 'Shift work increases depression and anxiety risk dose-dependently with shift frequency. SSRIs/SNRIs and behavioral counseling referral are core scope.',
        citations: [
          { label: 'Brazilian J Occup Med 2025', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11822966/' },
        ],
      },
      {
        name: 'Food-handler health card documentation',
        why: 'Many counties require a food handler card or physician-signed health attestation. We provide the physician documentation piece quickly and remotely; the county test itself still goes through the local health authority.',
      },
    ],
    regulatoryNotes: `
<p>Restaurant operators live with three regulatory layers on worker health: the FDA Food Code, OSHA recordkeeping, and county-level food handler requirements. TeleDirectMD plugs into each one without replacing any of them.</p>
<ul>
  <li><strong>FDA Food Code ill-employee provisions.</strong> Workers with vomiting, diarrhea, jaundice, fever-plus-sore-throat, or open lesions are restricted from food contact. Dr. Bhavsar provides same-day clearance letters after symptom resolution — replacing the need to find a local clinic on short notice.</li>
  <li><strong>OSHA injury recordkeeping (29 CFR Part 1904).</strong> Injuries requiring medical treatment beyond first aid must be recorded. TeleDirectMD encounters can qualify as "medical treatment" for the OSHA 300 log when prescriptions are involved — your safety manager should know this.</li>
  <li><strong>Workers' compensation documentation.</strong> Restaurants have high injury frequency and need prompt WC documentation. A virtual assessment within hours of injury supports timely filing.</li>
  <li><strong>Food handler cards / county health permits.</strong> Requirements differ by county. TeleDirectMD provides medical history review and physician attestation; county-issued cards themselves go through the local health authority.</li>
</ul>
`,
    whatWeSolve: [
      { headline: 'Same-day burn, cut, and skin care', body: 'A line cook with a burn or laceration can be assessed by video within an hour, get prescribed topical antibiotic or oral antibiotic if infected, and have WC documentation in hand before the shift ends.' },
      { headline: 'Norovirus clearance letters', body: 'When a worker calls in with GI symptoms, FDA Food Code requires clearance before return to food handling. We provide same-day written clearance once symptoms resolve.' },
      { headline: 'Care for the 22% uninsured', body: 'Many restaurant workers will not see a doctor without our flat-rate option. UTIs, cellulitis, and burns that would otherwise become ER visits are handled by primary care.' },
      { headline: 'Mental health for late shifts', body: 'Dr. Bhavsar treats anxiety, depression, and shift-work insomnia at hours that work for night-shift staff — no daytime clinic appointment that conflicts with sleep.' },
      { headline: 'One benefit across multiple locations', body: 'Restaurant groups with multiple sites can offer one virtual primary care benefit to all hourly workers — no negotiating with multiple local clinics or insurance networks.' },
    ],
    whatWeDont: [
      { headline: 'No sutures or in-person procedures', body: 'Deep or gaping lacerations need an in-person clinician with sterile instruments. We assess by video, refer immediately when sutures are needed, and provide the WC documentation.' },
      { headline: 'No severe-burn management', body: 'Burns greater than 10% body surface area or full-thickness burns need ER care. We triage, but we do not manage these virtually.' },
      { headline: 'No vaccine administration', body: 'We can review immunization records and write attestations — but vaccines themselves are given at a pharmacy or clinic.' },
      { headline: 'No county-issued food handler cards', body: 'County health departments issue the card. We provide the physician documentation many counties require as one component.' },
      { headline: 'No controlled substances', body: 'No Schedule II–V prescriptions via telehealth.' },
      { headline: 'No pediatric care', body: 'Adults only (18+).' },
    ],
    employerEconomics: `
<p>The restaurant industry economic case is built on three lines: injury frequency, regulatory exposure, and the uninsured-worker absenteeism cycle.</p>
<ul>
  <li><strong>Replacement cost: ~$1,500 per hourly worker</strong> (<a href="https://www.cirrusmd.com/resources/case-studies/retailer-benefits-by-providing-telehealth-to-uninsured-and-unenrolled-workers" target="_blank" rel="noopener noreferrer">CirrusMD case study</a>). Even a modest reduction in turnover from "I can't get healthcare" pays for the benefit many times over.</li>
  <li><strong>Outbreak exposure.</strong> A norovirus outbreak traced to an ill food worker can trigger a health department closure, $50,000–$100,000+ in lost revenue, and reputational damage that lasts years. Same-day clearance letters protect against this.</li>
  <li><strong>Absenteeism: ~$1,685 per employee per year</strong> (<a href="https://www.teamsense.com/blog/absenteeism-workplace-statistics" target="_blank" rel="noopener noreferrer">CDC via TeamSense</a>). Uninsured workers skip care, get sicker, miss more shifts.</li>
  <li><strong>$0 to the business.</strong> Employees pay $59 per visit or use BCBS/Aetna/UHC in-network. The restaurant signs a one-page agreement and the team gets an enrollment code.</li>
</ul>
`,
    faqs: [
      {
        q: 'My employee cut their hand on a knife. Can a telehealth doctor help?',
        a: 'Yes, for most knife cuts. Dr. Bhavsar can assess the wound by video, decide whether it needs in-person suturing (and refer immediately if so), prescribe antibiotics if it shows signs of infection, and provide workers\' compensation documentation — all within the hour. Suture-requiring wounds get triaged to urgent care right away; the majority that don\'t are managed completely by telehealth.',
      },
      {
        q: 'Our state requires food handler cards. Can TeleDirectMD help with that?',
        a: 'We can review vaccination records, document medical history, and provide written physician attestations that many counties accept as part of the food handler clearance process. The specific card or test required by your local health department still needs to be obtained through that authority — requirements vary significantly by county. What we handle is the physician-documentation piece, which often slows down hiring.',
      },
      {
        q: "Half my staff doesn't have health insurance and they call out sick without seeing a doctor. What can I do?",
        a: 'TeleDirectMD\'s flat-rate visits cost a fraction of urgent care or ER, with no transportation barrier and no lost shift to get an appointment. Employers who add this as a voluntary benefit see uninsured workers use it for conditions they\'d previously push through — norovirus, UTIs, skin infections — reducing both spread and absenteeism.',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────
  'home-care': {
    slug: 'home-care',
    name: 'Home Care & Home Health',
    shortName: 'Home Care',
    audienceLabel: 'Home Care Agencies, Home Health HR',
    metaDescription:
      'Virtual primary care for home health aides and personal care aides — TB and Hep B documentation, back-injury triage, return-to-work clearance, mental health. $0 employer cost, 41 states + DC.',
    heroHeadline: 'Virtual primary care for the people who care for everyone else.',
    heroHeadlineEm: "Built for an aging, mostly-female, mostly-immigrant workforce.",
    heroSub:
      "Home health aides are 87% women, 42% foreign-born, with a median wage of $34,900 and back-injury rates more than 5× the general workforce. TeleDirectMD provides TB and Hep B record review, back-injury triage, return-to-work clearance, mental health care, and chronic disease management — designed for a workforce that often can't take a daytime appointment without losing pay.",
    workforceProfile: {
      shortDesc: 'home-care worker',
      intro:
        'Home care is one of the fastest-growing US occupations and one of the most physically demanding — back injuries among nursing assistants run at 166.3 MSDs per 10,000 workers, more than 5× the all-worker rate.',
      stats: [
        {
          value: '~4.35M',
          label: 'US home health and personal care aides (May 2024)',
          citation: { label: 'BLS OOH', url: 'https://www.bls.gov/ooh/healthcare/home-health-aides-and-personal-care-aides.htm' },
        },
        {
          value: '87.2%',
          label: 'Women',
          citation: { label: 'BLS TED Nov 2024', url: 'https://www.bls.gov/opub/ted/2024/in-2023-the-majority-of-home-health-aides-and-personal-care-aides-were-women.htm' },
        },
        {
          value: '38.5%',
          label: 'Workforce age 55 and over',
          citation: { label: 'BLS TED Nov 2024', url: 'https://www.bls.gov/opub/ted/2024/in-2023-the-majority-of-home-health-aides-and-personal-care-aides-were-women.htm' },
        },
        {
          value: '~80%',
          label: 'Annual turnover rate (2024)',
          citation: { label: 'HCAOA July 2024', url: 'https://www.hcaoa.org/newsletters/home-care-turnover-rate-jumps-to-80hcaoa-is-here-to-help-members' },
        },
      ],
    },
    complaintsLede:
      "Home care is a back-and-shoulder injury industry, a TB-and-Hep-B documentation industry, and a workforce-mental-health industry — all at the same time. Each of those buckets is a high-value telehealth use case.",
    commonComplaints: [
      {
        name: 'Low back pain from patient transfers',
        why: 'Nursing assistants run MSD rates of 166.3 per 10,000 — more than 5× the all-worker rate. Direct/indirect cost of healthcare back injuries: ~$20 billion annually. NSAIDs, non-opioid muscle relaxants, PT referral, WC documentation — all virtual.',
        citations: [
          { label: 'OSHA Safe Patient Handling', url: 'http://www.osha.gov/healthcare/safe-patient-handling' },
        ],
      },
      {
        name: 'Shoulder strain / rotator cuff irritation',
        why: 'Repetitive overhead lifting during patient transfers. Conservative management, imaging referral if chronic.',
      },
      {
        name: 'Knee pain / patellofemoral syndrome',
        why: 'Home care environments require floor-level work that institutional settings minimize. Anti-inflammatory management, ergonomic counseling, referral as needed.',
      },
      {
        name: 'TB documentation and LTBI consultation',
        why: 'CDC recommends baseline TB testing for healthcare personnel at hire. We review IGRA/TST results, manage latent TB (isoniazid, rifapentine — non-controlled), and write clearance letters. Skin test administration itself is in-person.',
        citations: [
          { label: 'CDC TB Screening for HCP', url: 'https://www.cdc.gov/tb-healthcare-settings/hcp/screening-testing/index.html' },
        ],
      },
      {
        name: 'Hepatitis B vaccination documentation',
        why: 'OSHA Bloodborne Pathogens Standard (29 CFR 1910.1030) requires Hep B vaccine series for workers with reasonably anticipated blood exposure. We review records, order titers, document immunity status — vaccine administration is in-person.',
        citations: [
          { label: 'OSHA Hep B Factsheet', url: 'https://www.osha.gov/sites/default/files/publications/BBFACT05.pdf' },
        ],
      },
      {
        name: 'Influenza / COVID-19 vaccination documentation',
        why: 'Many home care agencies and Medicaid contracts require documented worker vaccination. We provide records review and written documentation; administration is via pharmacy or clinic.',
      },
      {
        name: 'Upper respiratory infections',
        why: 'Aides travel between multiple patients\' homes — both at risk themselves and creating transmission risk for vulnerable patients. Assessment, treatment, and work-restriction guidance follow CDC HCP guidance.',
      },
      {
        name: 'Urinary tract infection',
        why: 'Women are 87% of the workforce. Limited restroom access during home visits and shift-based dehydration drive UTI risk. Nitrofurantoin / TMP-SMX prescribing is fully telehealth-friendly.',
      },
      {
        name: 'Burnout, anxiety, depression',
        why: '49% of direct care workers rely on public assistance; 41.9% are foreign-born facing additional stressors; ~80% annual turnover speaks to extreme occupational stress. SSRI/SNRI management plus referral is core scope.',
        citations: [
          { label: 'PHI 2025', url: 'https://www.phinational.org/policy-research/key-facts-faq/' },
        ],
      },
      {
        name: 'Contact dermatitis and latex sensitivity',
        why: 'Frequent handwashing, glove use, cleaning chemicals. Topical corticosteroids, glove-material counseling, allergy referral if systemic reaction.',
      },
    ],
    regulatoryNotes: `
<p>Home care employers operate under a stack of compliance obligations on worker health: TB testing, Hep B documentation, vaccination records, and workers' comp for back injuries. TeleDirectMD fits into each.</p>
<ul>
  <li><strong>TB screening (CDC HCP guidance, Dec 2023).</strong> Baseline IGRA or TST plus risk assessment at hire; subsequent testing based on individual risk reassessment — not automatically annual for every worker (state requirements vary). We can review results, manage latent TB treatment, and provide clearance letters.</li>
  <li><strong>OSHA Bloodborne Pathogens (29 CFR 1910.1030).</strong> Hep B vaccine offer required for workers with anticipated blood exposure. We support documentation of vaccination status and titer results.</li>
  <li><strong>Medicaid / managed care credentialing.</strong> Many Medicaid-funded agencies require documented health clearances at hire. Standardized clearance letters available.</li>
  <li><strong>Workers' comp for back injuries.</strong> Prompt physician documentation supports timely WC filing — and same-day virtual assessment means the documentation happens within hours of the injury, not days.</li>
</ul>
`,
    whatWeSolve: [
      { headline: 'TB documentation workflow', body: 'Instead of sending each new hire to a clinic for result review, agencies route TB test results to Dr. Bhavsar for same-day interpretation, latent-TB management, and written clearance — material for an industry projecting 765,800 annual openings.' },
      { headline: 'Back injury triage and return-to-work', body: 'When an aide reports a back injury after a transfer, we provide same-day assessment, conservative management, and WC documentation — preventing the cycle of "show up the next day more injured" or "miss two weeks without documentation."' },
      { headline: 'Accessible care for a low-wage workforce', body: 'A workforce that\'s 87% female, median $34,900/year, 36% near poverty cannot easily take a daytime appointment. Virtual visits remove the transportation, childcare, and unpaid-time barriers.' },
      { headline: 'Chronic disease management for an older workforce', body: '38.5% of aides are 55+. Managing their HTN, DM2, and joint disease keeps experienced workers on the job — protecting the $2,000+ replacement cost.' },
      { headline: 'Interpreter-supported care', body: 'With 41.9% foreign-born and 24.9% Hispanic, professional interpretation services are a meaningful access feature.' },
    ],
    whatWeDont: [
      { headline: 'No TB skin test administration', body: 'TST placement and reading requires an in-person clinical visit. We can manage IGRA blood tests entirely virtually and review TST results when done elsewhere.' },
      { headline: 'No vaccine administration', body: 'Hep B, flu, COVID-19 vaccines themselves are given at a pharmacy or clinic. We handle record review, titer ordering, and documentation.' },
      { headline: 'No in-person physical exam', body: 'When a physical exam is required (e.g., some annual occupational health exams), we refer to an occupational medicine clinic.' },
      { headline: 'No controlled substances', body: 'No Schedule II–V prescribing via telehealth.' },
      { headline: 'No pediatric care', body: 'Adults only (18+).' },
    ],
    employerEconomics: `
<p>Home care economics are dominated by turnover — ~80% annually, with replacement costs over $2,000 per worker. Healthcare access is one of the most evidence-supported turnover-reduction levers in low-wage hourly workforces.</p>
<ul>
  <li><strong>Replacement cost: ~$2,000+ per direct care worker</strong> (<a href="https://attendanceondemand.com/blog/the-price-of-employee-turnover/" target="_blank" rel="noopener noreferrer">Attendance on Demand</a>). A 100-aide agency at 80% turnover spends $160,000+ annually on replacement alone.</li>
  <li><strong>MSD cost burden.</strong> Healthcare and social assistance had 99,600 MSDs in 2021–2022 — the highest of any industry — averaging 14+ days away per case (<a href="https://www.cpwr.com/wp-content/uploads/DataBulletin-June2025.pdf" target="_blank" rel="noopener noreferrer">CPWR June 2025</a>).</li>
  <li><strong>$0 to the agency.</strong> Aides pay $59 per visit or use commercial insurance in-network. The agency signs a one-page partnership agreement.</li>
</ul>
`,
    faqs: [
      {
        q: 'Our agency requires TB tests before hire. Can TeleDirectMD handle this?',
        a: 'We can review TB test results (IGRA or TST), interpret them, manage any positive findings (latent TB referral and documentation), and provide written health clearance letters. The actual TST skin test injection requires in-person placement and reading — we refer new hires to a local clinic for the test itself, then handle the clinical review and documentation piece. IGRA (blood test) results can be reviewed entirely by telehealth.',
      },
      {
        q: 'My aide threw her back out lifting a patient. What should she do?',
        a: 'She should connect with us right away for a same-day video assessment. Dr. Bhavsar evaluates the injury, prescribes anti-inflammatory medication if appropriate, provides activity-modification guidance, and documents the injury for workers\' compensation. If imaging is needed, he orders it and directs her to a facility. Most acute muscle strains can be fully managed by telehealth — keeping care accessible and producing the documentation the WC claim requires.',
      },
      {
        q: 'Our agency has very high turnover. Can healthcare benefits really make a difference?',
        a: 'Research consistently links healthcare access to reduced turnover in hourly workforce roles. For a workforce where 36% live near poverty and 49% rely on public assistance, access to a low-cost primary care option is meaningful in a way voluntary wellness programs are not. An aide who can call a doctor for a UTI or an illness does not miss two shifts waiting to feel better — reducing the "I can\'t take this job with no benefits" attrition that drives the 80% turnover rate.',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────
  construction: {
    slug: 'construction',
    name: 'Construction & Trades',
    shortName: 'Construction',
    audienceLabel: 'GCs, Subcontractors, Construction HR',
    metaDescription:
      'Virtual primary care for construction crews — OSHA 1910.134 respirator medical evaluations via telehealth, eye injury triage, MSK and return-to-work documentation. $0 employer cost, 41 states + DC.',
    heroHeadline: 'Virtual primary care for the trades.',
    heroHeadlineEm: 'OSHA respirator clearances done by telehealth.',
    heroSub:
      "Construction has the second-highest uninsured rate of any occupation (27.8%), the highest occupational eye injury rate, and is the single largest user of OSHA respirator medical evaluations. TeleDirectMD performs the OSHA 29 CFR 1910.134 respirator clearance entirely virtually, triages eye injuries to keep crews out of the ER unnecessarily, and provides same-day return-to-work documentation after sprains, strains, and lacerations.",
    workforceProfile: {
      shortDesc: 'tradesperson',
      intro:
        'The trades have a profile most healthcare systems are badly designed for: roughly 90% male, 33% Hispanic, average age 42, and 27.8% uninsured — the second-highest rate of any major occupation.',
      stats: [
        {
          value: '~8.5M',
          label: 'US construction and extraction workers (2024)',
          citation: { label: 'BLS CPS 2024', url: 'https://www.bls.gov/cps/cpsaat11b.htm' },
        },
        {
          value: '27.8%',
          label: 'Uninsured rate — 2nd highest of any occupation',
          citation: { label: 'US Census Bureau Sept 2025', url: 'https://www.census.gov/library/stories/2025/09/health-coverage-by-occupation.html' },
        },
        {
          value: '~33%',
          label: 'Hispanic workforce',
          citation: { label: 'NIOSH Construction Safety', url: 'https://www.cdc.gov/niosh/construction/about/index.html' },
        },
        {
          value: '2,120',
          label: 'Construction eye injury/illness cases in 2020 — highest of any occupational group',
          citation: { label: 'BLS Eye Injuries 2023', url: 'https://www.bls.gov/opub/ted/2023/workers-suffered-18510-eye-related-injuries-and-illnesses-in-2020.htm' },
        },
      ],
    },
    complaintsLede:
      "Construction medicine is musculoskeletal injury, eye injury, respiratory exposure, and uncontrolled chronic disease. The single highest-value virtual service for a construction employer is the OSHA 1910.134 respirator medical evaluation — fully completed by telehealth, with same-day written clearance.",
    commonComplaints: [
      {
        name: 'Acute low back pain / lumbar strain',
        why: '15.2% of construction workers report "a lot of back pain"; 17.5% in workers 50+. Non-opioid management (NSAIDs, methocarbamol, tizanidine), activity counseling, PT referral, light-duty letters — all virtual.',
        citations: [
          { label: 'CPWR June 2025', url: 'https://www.cpwr.com/wp-content/uploads/DataBulletin-June2025.pdf' },
        ],
      },
      {
        name: 'Knee pain / patellar tendinopathy / bursitis',
        why: 'Specialty trade contractors had the highest MSD rate of any construction subsector (28.4 per 10,000 FTEs). Prepatellar bursitis is particularly common in tile setters, flooring, roofers.',
        citations: [
          { label: 'CPWR June 2025', url: 'https://www.cpwr.com/wp-content/uploads/DataBulletin-June2025.pdf' },
        ],
      },
      {
        name: 'Shoulder strain / rotator cuff tendinopathy',
        why: 'Repetitive overhead work in electricians, painters, drywallers, HVAC. NSAIDs, activity modification, imaging referral if needed.',
      },
      {
        name: 'Eye injuries — conjunctival foreign body / chemical splash',
        why: 'Construction trades had 2,120 occupational eye injury cases in 2020 — the highest of any group. 59.6% of all occupational eye injuries involve foreign matter abrasion. Non-embedded foreign bodies with post-irrigation can be assessed by video and managed with antibiotic drops. Embedded foreign body, open globe, or chemical alkali splash with ongoing pain = ER immediately.',
        citations: [
          { label: 'BLS Eye Injuries 2023', url: 'https://www.bls.gov/opub/ted/2023/workers-suffered-18510-eye-related-injuries-and-illnesses-in-2020.htm' },
        ],
      },
      {
        name: 'Hand and wrist lacerations',
        why: 'Tool injuries from power tools, saws, sheet metal. Wound assessment, antibiotic prescribing for infected wounds, WC documentation, tetanus review — virtual. Deep/gaping wounds get an immediate suturing referral.',
      },
      {
        name: 'Respiratory irritation / occupational asthma',
        why: 'Silica dust (29 CFR 1926.1153), wood dust, drywall dust, isocyanates in spray foam — significant particulate and sensitizer exposure across the trades. Bronchodilator initiation and pulmonary function testing referral are core scope; spirometry itself is in-person.',
      },
      {
        name: 'Wound cellulitis from contaminated abrasions',
        why: 'Soil, concrete, metal contamination of job-site wounds. Oral antibiotics for uncomplicated non-abscess cellulitis. Abscesses requiring I&D get an in-person referral.',
      },
      {
        name: 'Heat exhaustion',
        why: 'Outdoor work in summer; OSHA identifies construction as high-risk for heat illness. We assess severity, counsel on rehydration, and triage to ER for any heat-stroke indicator. Heat stroke is a 911 emergency — we say so plainly.',
      },
      {
        name: 'Hypertension (often undiagnosed)',
        why: 'A 27.8% uninsured workforce largely lacks primary care. Job-site BP screenings frequently reveal first-time diagnoses. Treatment initiation and ongoing management — fully virtual.',
      },
      {
        name: 'Tinnitus from noise exposure',
        why: 'Construction is consistently among the highest-noise industries. We provide tinnitus management counseling, audiology referral, and documentation for hearing conservation programs.',
      },
    ],
    regulatoryNotes: `
<p>The single highest-leverage regulatory service for construction employers is the OSHA respirator medical evaluation. It is the one place where telehealth maps perfectly to an OSHA requirement.</p>
<ul>
  <li><strong>OSHA 29 CFR 1910.134 Appendix C — respirator medical evaluation (telehealth-eligible).</strong> Before any worker assigned to a respirator is fit-tested, a Physician or Licensed Healthcare Professional must review the OSHA medical evaluation questionnaire. <strong>This review can be conducted by telehealth</strong> — confirmed by <a href="http://www.osha.gov/laws-regs/standardinterpretations/2004-10-21" target="_blank" rel="noopener noreferrer">OSHA interpretation letters</a>. Dr. Bhavsar reviews each worker's Appendix C questionnaire and issues written clearance, clearance with restrictions, or denial — typically same-day. For a contractor mobilizing 20 workers for a respirator-required job, this replaces $1,500–$3,000 in occupational-medicine clinic fees.</li>
  <li><strong>OSHA Silica Standard (29 CFR 1926.1153).</strong> Medical surveillance includes periodic exams. Spirometry is in-person, but we can handle initial health-history review, symptom screening, and ongoing management of related conditions.</li>
  <li><strong>Lead and Asbestos Standards (29 CFR 1926.62 and 1926.1101).</strong> Blood lead and PFT requirements are in-person. We review lab results and manage related conditions (HTN from lead exposure).</li>
  <li><strong>Return-to-work documentation.</strong> Same-day clearance or modified-duty restrictions after sprains, strains, lacerations.</li>
</ul>
`,
    whatWeSolve: [
      { headline: 'OSHA 1910.134 respirator clearances by telehealth', body: 'A general contractor with 20 workers assigned to respirator use can have all 20 complete the OSHA Appendix C questionnaire and receive Dr. Bhavsar\'s written medical clearance same-day, without any worker leaving the site. This satisfies the full OSHA requirement.' },
      { headline: 'Eye injury triage in minutes', body: 'After a foreign body or splash, a worker connects with Dr. Bhavsar in minutes. Non-embedded foreign body with no vision change → antibiotic drops and avoid a 4-hour ER wait. Anything serious → faster, better-informed ER referral with documentation.' },
      { headline: 'Same-day return-to-work letters', body: 'After a strain, sprain, laceration, or burn, Dr. Bhavsar provides same-day written clearance — full duty or modified duty — keeping the job moving and the WC file complete.' },
      { headline: 'Hypertension management for the 27.8% uninsured', body: 'These workers have no primary care home. We initiate treatment and monitor — reducing the risk of a hypertensive event on the job, which is both a clinical and a workers\' comp exposure.' },
      { headline: 'Spanish-language accessibility', body: '33% Hispanic workforce. Professional interpretation services expand access for crews where English is not the primary language.' },
    ],
    whatWeDont: [
      { headline: 'No DOT/CDL exams', body: 'If your tradesperson also drives commercially, the DOT physical itself remains in person.' },
      { headline: 'No in-person procedures', body: 'No sutures, no embedded foreign body removal, no abscess drainage, no spirometry. We triage, refer, and document.' },
      { headline: 'No emergency care', body: 'Severe chemical splash, eye injury with vision change, heat stroke, severe respiratory distress = ER or 911. We make that call fast.' },
      { headline: 'No controlled substances', body: 'No Schedule II–V prescribing via telehealth.' },
      { headline: 'No pediatric care', body: 'Adults only (18+).' },
    ],
    employerEconomics: `
<p>Construction healthcare economics are driven by uninsured exposure, MSD lost time, and the cost of routine OSHA medical compliance.</p>
<ul>
  <li><strong>27.8% of construction workers are uninsured.</strong> A condition that could have been managed by primary care often becomes a $1,200–$2,500 ER visit instead — borne by whoever ends up paying.</li>
  <li><strong>MSD median: 15 lost days per case.</strong> At a median $58,360 salary (~$28/hour), 15 missed days = $3,360+ per case in direct wage continuation, plus replacement labor (<a href="https://www.cpwr.com/wp-content/uploads/DataBulletin-June2025.pdf" target="_blank" rel="noopener noreferrer">CPWR June 2025</a>).</li>
  <li><strong>OSHA respirator clearance commercial pricing: $75–$150 per worker.</strong> Telehealth processing reduces this substantially with same-day turnaround — particularly valuable when mobilizing dozens of workers for a new contract.</li>
  <li><strong>$0 to the employer.</strong> Workers pay $59 per visit or use commercial insurance in-network. The contractor signs a one-page agreement.</li>
</ul>
`,
    faqs: [
      {
        q: 'We have workers who need OSHA respirator clearances before they can start a job. Can TeleDirectMD do those?',
        a: 'Yes. OSHA\'s respirator medical evaluation standard (29 CFR 1910.134) requires a licensed healthcare professional to review each worker\'s medical questionnaire — and that review can be conducted by telehealth. Workers complete the OSHA Appendix C questionnaire, Dr. Bhavsar reviews each one and issues written clearance typically same-day, and you have your PLHCP documentation for the OSHA file. No clinic appointments. Particularly useful when mobilizing a crew for a new contract.',
      },
      {
        q: 'One of my workers got something in his eye on a job site. Is this a telehealth situation?',
        a: 'It depends on the injury. Dr. Bhavsar can assess by video right away — that assessment itself takes 10 minutes and tells you whether it\'s an ER case or a telehealth-manageable case. Non-embedded foreign body with no vision change after irrigation → antibiotic drops by telehealth. Embedded foreign body, chemical splash with ongoing pain, any vision change → ER immediately. The telehealth visit either saves a 4-hour ER trip or gets the worker there faster with clear documentation.',
      },
      {
        q: "My subcontractors don't offer health insurance to their crews. Is there anything I can do as a general contractor?",
        a: 'Some general contractors are now including TeleDirectMD access as a project-level benefit for all workers on their sites — regardless of which subcontractor employs them. This isn\'t traditional health insurance, so it does not create an employment relationship or ACA obligation. It does ensure your 27% uninsured crew members have a doctor to call. Reduces lost-time injuries, reduces ER utilization, and signals to subcontractors that crew health matters.',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────
  cleaning: {
    slug: 'cleaning',
    name: 'Cleaning & Janitorial Services',
    shortName: 'Janitorial',
    audienceLabel: 'Cleaning Contractors, Janitorial HR',
    metaDescription:
      'Virtual primary care for janitorial crews — contact dermatitis, occupational asthma, chemical exposure incidents, OSHA respirator clearances, night-shift health. $0 employer cost, 41 states + DC.',
    heroHeadline: 'Virtual primary care for cleaning crews.',
    heroHeadlineEm: 'Designed for chemical exposure and night-shift hours.',
    heroSub:
      "Janitorial and cleaning workers face cleaning-chemical asthma, contact dermatitis, eye splashes, and night-shift health barriers — and a 21.9% uninsured rate (much higher in immigrant subgroups). TeleDirectMD provides same-day virtual care for chemical exposure incidents, contact dermatitis, occupational asthma, OSHA respirator clearances, and the chronic conditions a transient workforce typically lets drift.",
    workforceProfile: {
      shortDesc: 'janitorial worker',
      intro:
        'Cleaning crews work nights, work alone, work with chemicals, and are heavily immigrant — all of which make traditional clinic-based care structurally hard to reach. Virtual primary care is built for exactly this profile.',
      stats: [
        {
          value: '~2.45M',
          label: 'Janitors and building cleaners (BLS, 2024)',
          citation: { label: 'BLS OOH', url: 'https://www.bls.gov/ooh/building-and-grounds-cleaning/janitors-and-building-cleaners.htm' },
        },
        {
          value: '21.9%',
          label: 'Uninsured rate, building & grounds cleaning (2024)',
          citation: { label: 'US Census Bureau Sept 2025', url: 'https://www.census.gov/library/stories/2025/09/health-coverage-by-occupation.html' },
        },
        {
          value: '30.6–31.7%',
          label: 'Uninsured rate among noncitizen immigrants (overrepresented in cleaning)',
          citation: { label: 'KFF May 2026', url: 'https://www.kff.org/racial-equity-and-health-policy/key-facts-on-health-coverage-of-immigrants/' },
        },
        {
          value: '~27%',
          label: 'Building service workers on non-daytime shifts',
          citation: { label: 'UE union data', url: 'https://www.ueunion.org/stwd_fatigueshift.html' },
        },
      ],
    },
    complaintsLede:
      "Cleaning medicine is chemicals, skin, lungs, and night-shift health — all converging on a workforce that historically gets less primary care than almost any other. Same-day virtual visits in the worker's language change that.",
    commonComplaints: [
      {
        name: 'Irritant contact dermatitis (hands, forearms)',
        why: 'Irritant contact dermatitis accounts for 70–80% of all occupational contact dermatitis. NIOSH estimates 13.2M US workers face chemical skin-hazard exposure; cleaning workers are specifically cited. Topical corticosteroids, barrier creams, irritant avoidance counseling — virtual.',
        citations: [
          { label: 'OSHA-NIOSH InfoSheet', url: 'https://www.osha.gov/sites/default/files/publications/OSHA3512.pdf' },
        ],
      },
      {
        name: 'Allergic contact dermatitis (sensitization)',
        why: 'Quaternary ammonium compounds (QACs) in disinfectants are documented contact allergens. Once sensitized, trace exposure triggers reactions. Topical management, allergen avoidance counseling, patch test referral.',
        citations: [
          { label: 'Curr Opin Allergy Clin Immunol', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3125175/' },
        ],
      },
      {
        name: 'Occupational asthma',
        why: 'More than 250 substances in cleaning products are recognized asthma inducers. Mixing bleach and ammonia produces chloramine gas — severe lung damage or death. Bronchodilator initiation, inhaled corticosteroid management, PFT referral.',
        citations: [
          { label: 'Mt Sinai Today June 2022', url: 'https://health.mountsinai.org/blog/occupational-asthma-and-cleaning/' },
          { label: 'OSHA-NIOSH InfoSheet', url: 'https://www.osha.gov/sites/default/files/publications/OSHA3512.pdf' },
        ],
      },
      {
        name: 'Chemical eye splash / conjunctival irritation',
        why: 'Building cleaning workers had 1,570 occupational eye injury cases in 2020. Post-irrigation assessment by video, antibiotic drops if conjunctivitis. Alkali/bleach splash with ongoing pain, vision change, or lid injury → ER immediately.',
        citations: [
          { label: 'BLS Eye Injuries 2023', url: 'https://www.bls.gov/opub/ted/2023/workers-suffered-18510-eye-related-injuries-and-illnesses-in-2020.htm' },
        ],
      },
      {
        name: 'Upper respiratory irritation from chemical fumes',
        why: 'Accidental mixing of cleaning products is a recurring incident. 17.2% of kitchen/cleaning workers reported respiratory problems in 2024 study. Assessment, bronchodilator if mild-moderate bronchospasm, ER referral for severe dyspnea. Acute chloramine gas inhalation with severe symptoms is a 911 emergency.',
      },
      {
        name: 'Latex allergy (Type I IgE-mediated)',
        why: 'Cleaning workers use rubber/latex gloves extensively. Latex allergy prevalence in repeated-glove-use occupations is 5–17%. Epinephrine auto-injector prescribing for anaphylaxis risk, nitrile/vinyl glove substitution counseling, allergy referral.',
      },
      {
        name: 'Musculoskeletal back pain from mopping and scrubbing',
        why: 'Prolonged awkward postures, repetitive motion, heavy floor equipment. NSAIDs, ergonomic counseling, PT referral, return-to-work documentation.',
      },
      {
        name: 'Knee pain / bursitis from floor work',
        why: 'Prepatellar bursitis from floor scrubbing. Anti-inflammatory management, knee pad use counseling, aspiration referral if septic bursitis suspected.',
      },
      {
        name: 'Urinary tract infection',
        why: 'Female cleaning workers face limited restroom access during shifts. Classic UTI presentation can be diagnosed and treated entirely virtually.',
      },
      {
        name: 'Mental health — anxiety, depression, isolation',
        why: 'Night-shift work, low wages, immigrant documentation stress, language barriers. PHQ-9/GAD-7 screening, SSRI initiation, interpreter-assisted visits, referral as needed.',
      },
    ],
    regulatoryNotes: `
<p>Cleaning operators interact with two OSHA standards regularly: Hazard Communication and Respiratory Protection. Both have telehealth-relevant components.</p>
<ul>
  <li><strong>OSHA Hazard Communication Standard (HCS, 29 CFR 1910.1200).</strong> Employers must provide SDS for all cleaning chemicals and train workers in a language they understand. When chemical exposure happens, TeleDirectMD provides the clinical assessment, treatment, and documented incident record for OSHA files.</li>
  <li><strong>OSHA Respirator Medical Evaluation (29 CFR 1910.134).</strong> Janitors assigned to respirators for asbestos abatement, mold remediation, or chemical spraying need PLHCP medical clearance — and that clearance can be completed by telehealth, same-day.</li>
  <li><strong>Workers' compensation documentation for occupational dermatitis and asthma.</strong> Proving work-relatedness requires physician documentation linking symptoms to workplace exposures. Ongoing virtual care produces stronger WC support than a single urgent-care visit.</li>
  <li><strong>Language access.</strong> OSHA requires hazard training in a worker's language. TeleDirectMD interactions using professional interpretation services reflect that same principle — clinical care in the worker's language.</li>
</ul>
`,
    whatWeSolve: [
      { headline: 'Night-shift accessible care', body: '~27% of building service workers work non-daytime shifts. Same-day evening/weekend availability means a worker with a skin rash or breathing problem during their 11 PM–7 AM shift can connect with a physician — not wait days or go to an ER.' },
      { headline: 'Chemical exposure incident response', body: 'When a worker is exposed to a cleaning chemical, we provide immediate clinical assessment, prescription if needed, and an event record for the employer\'s OSHA 300 log — all before the shift ends.' },
      { headline: 'Early dermatitis management', body: 'Irritant contact dermatitis treated early rarely progresses to full allergic sensitization. Allergic ACD, once established, may permanently disqualify a worker from cleaning work entirely. Early virtual intervention protects livelihood.' },
      { headline: 'Occupational asthma WC documentation', body: 'Proving work-relatedness for occupational asthma requires a physician who understands the exposure history. Ongoing virtual care builds that documented relationship.' },
      { headline: 'Interpreter-supported care for immigrant workers', body: 'Janitorial work is among the top employment categories for undocumented and immigrant workers. Professional interpretation services close the systemic access gap that drives this workforce\'s underutilization of care.' },
    ],
    whatWeDont: [
      { headline: 'No severe chemical exposure management', body: 'Severe respiratory distress, alkali eye injury, or systemic chemical poisoning = ER or 911. We triage fast and document clearly.' },
      { headline: 'No spirometry or in-person PFT', body: 'We can order pulmonary function testing and review results; the test itself is in person.' },
      { headline: 'No patch testing', body: 'Allergen identification requires in-person patch testing. We refer.' },
      { headline: 'No controlled substances', body: 'No Schedule II–V prescribing via telehealth.' },
      { headline: 'No pediatric care', body: 'Adults only (18+).' },
    ],
    employerEconomics: `
<p>Janitorial operating margins are thin and turnover is brutal — averaging ~200% annually and sometimes reaching 400% in this sector. Healthcare access is one of the cheapest reductions of both turnover and chemical incident liability.</p>
<ul>
  <li><strong>Replacement cost: ~$1,000 per cleaning worker</strong> (<a href="https://www.4-m.com/wp-content/uploads/2024/11/HowJanitorialTurnoverImpactsYourBusiness.pdf" target="_blank" rel="noopener noreferrer">4M Building Solutions 2024</a>). A 100-worker company at 200% turnover spends ~$200,000 annually on replacement alone.</li>
  <li><strong>OSHA willful-violation exposure: up to $156,259 per violation (2025).</strong> A chemical incident handled properly — with prompt clinical assessment and documentation — is materially less likely to escalate into a citation.</li>
  <li><strong>$0 to the company.</strong> Workers pay $59 per visit or use commercial insurance in-network. The cleaning company signs a one-page agreement.</li>
</ul>
`,
    faqs: [
      {
        q: 'My cleaning crews are getting skin rashes from the chemicals they use. Can a telehealth doctor actually help with that?',
        a: 'Yes. Contact dermatitis from cleaning chemicals is the most common occupational skin disease in this industry. Dr. Bhavsar can assess the rash by video, determine whether it\'s irritant or allergic, prescribe topical steroids and barrier cream, and counsel your worker on which products or tasks to modify. If the rash is severe or unresponsive, he refers to a dermatologist and provides the workers\' compensation documentation linking it to workplace chemical exposure. This is a bread-and-butter telehealth case — no in-person exam needed.',
      },
      {
        q: 'One of my workers mixed the wrong chemicals and started coughing badly. What should they do?',
        a: 'If they\'re having severe difficulty breathing, chest tightness, or wheezing — call 911 immediately and get them to fresh air. Bleach mixed with ammonia creates chloramine gas, which can cause serious lung damage. For moderate symptoms — coughing, eye irritation, throat burning — after fresh air, they should connect with TeleDirectMD. Dr. Bhavsar evaluates symptom severity, prescribes a bronchodilator if needed, determines whether ER evaluation is warranted, and documents the exposure incident for your OSHA records. For the future, OSHA\'s Hazard Communication Standard requires all workers to be trained never to mix different cleaning products.',
      },
      {
        q: "My janitorial company has huge turnover and I can't afford full health insurance. Is there a practical option?",
        a: 'Direct-pay virtual primary care through TeleDirectMD is designed for this exact situation. Far less than a traditional group insurance premium gives your employees access to a primary care physician for acute illness, skin problems, respiratory issues, and chronic conditions. Workers who have someone to call when they\'re sick miss fewer shifts and stay on the job longer. In an industry with 200% annual turnover, even a modest reduction saves far more than the cost of the benefit.',
      },
    ],
  },
};
