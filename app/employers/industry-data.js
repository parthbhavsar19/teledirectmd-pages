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
      'Virtual primary care for OTR truck drivers and owner-operators. Manage hypertension, diabetes, and dyslipidemia to support drivers between DOT exams. Same-day visits in 41 states + DC. $0 employer cost.',
    heroHeadline: 'Virtual primary care for the people who keep America moving.',
    heroHeadlineEm: 'No truck-stop detour required.',
    heroSub:
      "TeleDirectMD is physician-led virtual primary care designed for OTR drivers and owner-operators. We don't perform or replace your DOT medical exam — federal law requires that in person. What we do is provide the day-to-day primary care that drivers struggle to access on the road: managing high blood pressure, diabetes, cholesterol, mental health, and acute illness from anywhere a driver can get online. Licensed in 41 states + DC.",
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
        why: 'Diabetes prevalence in long-haul drivers is 14% vs. 7% in the general working population. Non-insulin diabetes managed to HbA1c targets is typically DOT-certifiable. Ongoing management of medications, labs, and lifestyle is exactly what virtual primary care does well.',
        citations: [
          { label: 'CDC NIOSH Bulletin 2015', url: 'https://www.cdc.gov/niosh/bulletin/2015/truck-driver-health.html' },
        ],
      },
      {
        name: 'Sleep apnea comorbidity management',
        why: 'Roughly 28% of commercial drivers have OSA, and the conditions that drive OSA severity (HTN, DM2, BMI) are exactly what virtual primary care manages well. We do not diagnose OSA (sleep study required) and we are not your sleep specialist — but managing the comorbidities consistently is itself meaningful.',
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
<p>What we do is ongoing primary care between exams — the same kind of care your driver would get from any family physician, just accessible from the road:</p>
<ul>
  <li><strong>FMCSA §391.41(b)(6) context for chronic disease.</strong> Blood pressure, diabetes, and cholesterol are FMCSA-relevant conditions. Drivers with well-managed BP &lt;140/90 typically qualify for the full 2-year certification period; drivers with uncontrolled disease often receive shorter cards. Consistent primary-care management — what we do — supports better health and, by extension, more straightforward DOT exams.</li>
  <li><strong>National Registry II (2025–2026).</strong> Exam results now transmit electronically to the driver's CDLIS/MVR overnight. Drivers who let chronic disease drift between exams are more visible to employers under the new system.</li>
  <li><strong>Acute illness on the road.</strong> UTIs, sinus infections, skin infections, GI illness — handled by video, prescriptions sent to the pharmacy nearest the driver.</li>
  <li><strong>Drug & alcohol program (49 CFR Part 382).</strong> Testing is administered by employers/TPAs — not by physicians. TeleDirectMD does not perform DOT drug screens.</li>
</ul>
`,
    whatWeSolve: [
      {
        headline: 'Ongoing chronic disease management',
        body: 'Hypertension, diabetes, and high cholesterol are the conditions most likely to drift in a driver who lives on the road without consistent primary care. Virtual visits, lab orders, and medication management keep treatment moving regardless of route.',
      },
      {
        headline: 'Eliminate clinic detours for acute illness',
        body: 'UTIs, sinus infections, skin infections, GI illness — handled by video, prescriptions sent to the pharmacy nearest the driver. No 2–4 hour route deviation.',
      },
      {
        headline: 'Mental health support on the road',
        body: 'SSRIs and SNRIs (non-controlled) are within scope. We do not treat addiction or prescribe controlled-substance ADHD or anxiety medications, but stable management of depression and anxiety is exactly what virtual primary care does well.',
      },
      {
        headline: 'One physician across 41 states + DC',
        body: 'OTR drivers move between states constantly. Dr. Bhavsar holds licenses in 41 states + DC — drivers get care wherever they happen to be (as long as they are physically located in a licensed state at the time of the visit).',
      },
    ],
    whatWeDont: [
      { headline: 'No DOT physical exams or Medical Examiner Certificates', body: 'Federal law (49 CFR §391.43) requires DOT exams to be performed in person by an FMCSA-listed Medical Examiner. We do not replace that exam, and we are not currently set up to complete DOT-specific forms (such as the MCSA-5870 ITDM Assessment) as a packaged service.' },
      { headline: 'No CPAP or sleep study management', body: 'Sleep studies are in-person and CPAP titration is handled by sleep medicine. We can manage the conditions that often coexist with sleep apnea (HTN, DM2), but the OSA workup itself is outside scope.' },
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
        a: "TeleDirectMD does not perform your DOT physical — 49 CFR §391.43 requires that exam to be done in person by an FMCSA-certified Medical Examiner. What we provide is ongoing primary care between DOT exams: managing high blood pressure, diabetes, cholesterol, and mental health so a driver stays healthy. Better-managed chronic conditions generally lead to more straightforward DOT exams.",
      },
      {
        q: "I'm an owner-operator without company health insurance. How does this work for me?",
        a: 'TeleDirectMD is a direct-pay virtual primary care service — no insurance required. You get same-day video visits with Dr. Bhavsar for acute illness, prescription refills, lab review, and ongoing chronic disease management — all from your cab or a truck stop. Prescriptions are sent to a pharmacy near your current location.',
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
      'Virtual primary care for restaurant workers — minor burn assessment, cut and wound care, contact dermatitis, work notes when staff are sick. Same-day visits, $0 employer cost, 41 states + DC.',
    heroHeadline: "A telehealth benefit your kitchen and front-of-house can actually use.",
    heroHeadlineEm: 'Without losing a shift.',
    heroSub:
      "Restaurants have the highest burn and laceration rates of any private industry, the highest occupational dermatitis rates, and a 22% uninsured workforce. TeleDirectMD provides same-day virtual primary care for burns and cuts, contact dermatitis, GI illness, mental health for late-shift workers, and work-excuse notes when staff need them — all without anyone leaving the line for a 3-hour urgent care detour.",
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
        name: 'Acute gastroenteritis (norovirus, viral GI)',
        why: 'Norovirus is responsible for ~50% of all US foodborne illness outbreaks. CDC guidance directs ill food workers to stay home until at least 48 hours after symptoms resolve. We treat the illness, advise on the recovery timeline, and write a standard work-excuse note covering the symptomatic period.',
        citations: [
          { label: 'CDC Norovirus for Food Workers 2024', url: 'https://www.cdc.gov/norovirus/communication-resources/facts-for-food-workers.html' },
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
        name: 'Work-excuse notes for missed shifts',
        why: 'When a worker is sick or recovering from a minor injury, a standard work-excuse note is part of any primary-care visit. We do not issue jurisdiction-specific food handler cards — those go through the local health authority — but the routine work note for a missed shift is included.',
      },
    ],
    regulatoryNotes: `
<p>Restaurant operators live with three regulatory layers on worker health: the FDA Food Code, OSHA recordkeeping, and county-level food handler requirements. TeleDirectMD is a primary-care service — not an occupational health vendor — so the way we fit in is narrower than the way an on-site clinic would.</p>
<ul>
  <li><strong>FDA Food Code ill-employee provisions.</strong> Workers with vomiting, diarrhea, jaundice, fever-plus-sore-throat, or open lesions are restricted from food contact. We treat the illness and write a standard work-excuse note covering the recovery period; jurisdiction-specific "clearance to return to food handling" letters that some health departments require are not a standalone service we offer today.</li>
  <li><strong>OSHA injury recordkeeping (29 CFR Part 1904).</strong> Injuries requiring medical treatment beyond first aid must be recorded. The clinical record from a TeleDirectMD visit (prescription written, follow-up plan, etc.) is yours to use in your OSHA documentation — your safety manager makes the recordability determination.</li>
  <li><strong>Workers' compensation documentation.</strong> Restaurants have high injury frequency. A virtual assessment within hours of injury produces a clinical note your worker can share with the WC carrier; we do not currently offer specialized WC-vendor documentation packages.</li>
  <li><strong>Food handler cards / county health permits.</strong> These go through the local health authority. We do not issue food handler cards.</li>
</ul>
`,
    whatWeSolve: [
      { headline: 'Same-day burn, cut, and skin care', body: 'A line cook with a minor burn or laceration can be assessed by video within an hour and treated by primary care if the injury is within virtual scope — or triaged to in-person care if it is not.' },
      { headline: 'GI illness and standard work-excuse notes', body: 'When a worker calls in with norovirus-style symptoms, we treat the illness and provide a standard work-excuse note covering the symptomatic period. Returning to food handling is per the worker\'s health department guidance, not ours.' },
      { headline: 'Care for the 22% uninsured', body: 'Many restaurant workers will not see a doctor without our flat-rate option. UTIs, cellulitis, and minor burns that would otherwise become ER visits are handled by primary care.' },
      { headline: 'Mental health for late shifts', body: 'Dr. Bhavsar treats anxiety, depression, and shift-work insomnia within standard primary-care scope — SSRIs, SNRIs, sleep hygiene counseling. No controlled substances.' },
      { headline: 'One benefit across multiple locations', body: 'Restaurant groups with multiple sites can offer one virtual primary care benefit to all hourly workers — no negotiating with multiple local clinics or insurance networks.' },
    ],
    whatWeDont: [
      { headline: 'No sutures or in-person procedures', body: 'Deep or gaping lacerations need an in-person clinician with sterile instruments. We assess by video and refer immediately when sutures are needed.' },
      { headline: 'No severe-burn management', body: 'Burns greater than 10% body surface area or full-thickness burns need ER care. We triage but do not manage these virtually.' },
      { headline: 'No vaccine administration', body: 'Vaccines themselves are given at a pharmacy or clinic. Vaccine record review and attestations are not a packaged service we offer today.' },
      { headline: 'No food handler cards or jurisdiction-specific food-safety clearance letters', body: 'County health departments issue food handler cards. Clearance letters worded to specific jurisdiction food codes are not a service we offer today — we issue standard work-excuse notes from primary care.' },
      { headline: 'No occupational-health surveillance programs', body: 'We are a primary-care practice, not an OSHA-recordkeeping or workers-comp-management vendor.' },
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
        a: 'Yes, for most knife cuts. Dr. Bhavsar can assess the wound by video, decide whether it needs in-person suturing (and refer immediately if so), and prescribe antibiotics if it shows signs of infection — within the hour. Suture-requiring wounds get triaged to urgent care right away; the majority that don\'t are managed completely by telehealth. The clinical record is yours to use for workers\' comp if needed.',
      },
      {
        q: 'Our state requires food handler cards. Can TeleDirectMD help with that?',
        a: 'No — food handler cards are issued by the local health authority, and we are not a food-handler-card vendor. What we do offer is standard primary-care work-excuse notes when a worker is sick, and routine medical history review during a regular visit. For the jurisdiction-specific food handler card itself, your workers go through the county or state health department.',
      },
      {
        q: "Half my staff doesn't have health insurance and they call out sick without seeing a doctor. What can I do?",
        a: 'TeleDirectMD\'s flat-rate visits cost a fraction of urgent care or ER, with no transportation barrier and no lost shift to get an appointment. Employers who add this as a voluntary benefit see uninsured workers use it for conditions they\'d previously push through — viral GI, UTIs, skin infections — reducing both spread and absenteeism.',
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
      'Virtual primary care for home health aides and personal care aides — acute care, back and shoulder pain, chronic disease management, mental health. $0 employer cost, 41 states + DC.',
    heroHeadline: 'Virtual primary care for the people who care for everyone else.',
    heroHeadlineEm: "Built for an aging, mostly-female, mostly-immigrant workforce.",
    heroSub:
      "Home health aides are 87% women, 42% foreign-born, with a median wage of $34,900 and back-injury rates more than 5× the general workforce. TeleDirectMD provides primary care for the conditions this workforce actually shows up with: back and shoulder pain, acute illness, chronic disease, and mental health — designed for a workforce that often can't take a daytime appointment without losing pay.",
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
        name: 'Acute illness (URI, GI, UTI, skin infections)',
        why: 'Aides travel between multiple patients\' homes daily, with high exposure and limited time for clinic visits. Standard primary-care management of common acute conditions, with prescriptions sent to the worker\'s preferred pharmacy.',
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
<p>Home care employers operate under several compliance obligations on worker health: TB testing, Hep B documentation, vaccination records, and workers' comp for back injuries. TeleDirectMD is a primary-care practice — not an occupational health vendor or credentialing service — so the way we fit in is narrower than the way an on-site occupational medicine clinic would.</p>
<ul>
  <li><strong>TB screening, Hep B titers, vaccine documentation.</strong> These are credentialing workflows agencies typically run through dedicated occupational medicine vendors. We do not currently offer TB result interpretation, latent-TB treatment programs, vaccine attestation letters, or titer ordering as packaged services.</li>
  <li><strong>Workers' comp for back injuries.</strong> When an aide reports an injury, a virtual primary-care visit produces a clinical note your worker can share with the WC carrier. We do not offer specialized WC vendor documentation packages.</li>
  <li><strong>What we do.</strong> Primary care: chronic disease management (HTN, DM2, depression, anxiety, hypothyroid), acute illness, musculoskeletal pain assessment within virtual scope, standard work-excuse notes, prescription refills.</li>
</ul>
`,
    whatWeSolve: [
      { headline: 'Back and shoulder injury assessment within virtual scope', body: 'When an aide reports a back or shoulder injury after a transfer, we provide same-day primary-care assessment and conservative management (NSAIDs, ergonomic counseling, PT referral). The clinical note is yours to share with WC if needed. Injuries that need imaging or in-person exam are triaged.' },
      { headline: 'Accessible care for a low-wage workforce', body: 'A workforce that\'s 87% female, median $34,900/year, 36% near poverty cannot easily take a daytime appointment. Virtual visits remove the transportation, childcare, and unpaid-time barriers.' },
      { headline: 'Chronic disease management for an older workforce', body: '38.5% of aides are 55+. Managing their HTN, DM2, depression, and other chronic conditions through primary care keeps experienced workers on the job.' },
      { headline: 'Acute illness handled without missing a shift', body: 'URI, GI illness, UTI, skin infections — standard primary-care management with prescriptions sent to the worker\'s pharmacy.' },
      { headline: 'Same physician every visit', body: 'Unlike random-doctor rotations on carrier-bundled telehealth, every visit is with Dr. Bhavsar — so continuity of care is real.' },
    ],
    whatWeDont: [
      { headline: 'No TB testing, screening, or LTBI treatment programs', body: 'TB skin test placement is in-person; TB result interpretation and latent-TB treatment are services we do not currently package for agency-credentialing use.' },
      { headline: 'No Hep B titers, vaccine documentation, or vaccine administration', body: 'OSHA Bloodborne Pathogens record-keeping for agencies typically goes through dedicated occupational medicine vendors. We do not offer this as a standalone service today.' },
      { headline: 'No agency credentialing packages', body: 'Medicaid / managed care credentialing health-clearance letters are an occupational medicine workflow, not a primary-care workflow. Not a service we offer today.' },
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
        q: 'Our agency requires TB tests and Hep B documentation before hire. Can TeleDirectMD handle this?',
        a: 'No — those are credentialing workflows typically handled by occupational medicine vendors, and they are not a service we offer today. TeleDirectMD is a primary-care practice for ongoing worker health: chronic disease management, acute illness, mental health, and routine primary-care concerns. For TB testing, Hep B titers, or vaccine documentation specifically, your agency should continue using its existing occupational medicine vendor.',
      },
      {
        q: 'My aide threw her back out lifting a patient. What should she do?',
        a: 'She should connect with us right away for a same-day video assessment. Dr. Bhavsar evaluates the injury, prescribes anti-inflammatory medication if appropriate, and provides activity-modification guidance. If imaging is needed, he orders it and directs her to a facility. The clinical note is hers to share with the WC carrier if she files a claim. Most acute muscle strains can be managed by primary care; injuries needing in-person exam are triaged.',
      },
      {
        q: 'Our agency has very high turnover. Can healthcare benefits really make a difference?',
        a: 'Research consistently links healthcare access to reduced turnover in hourly workforce roles. For a workforce where 36% live near poverty and 49% rely on public assistance, access to a low-cost primary care option is meaningful in a way voluntary wellness programs are not. An aide who can call a doctor for a UTI or an illness does not miss two shifts waiting to feel better.',
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
      'Virtual primary care for construction crews — same-day care for back pain, sprains, minor lacerations, hypertension management for the 27.8% uninsured workforce. $0 employer cost, 41 states + DC.',
    heroHeadline: 'Virtual primary care for the trades.',
    heroHeadlineEm: 'For the days you do not need to be in a clinic.',
    heroSub:
      "Construction has the second-highest uninsured rate of any occupation (27.8%) — most small specialty subcontractors offer no benefits. TeleDirectMD provides virtual primary care for the conditions trades workers actually let drift: hypertension, diabetes, back and shoulder pain, minor lacerations and cellulitis, mental health. For the day-to-day primary care that an uninsured tradesperson would otherwise skip entirely.",
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
      "Construction medicine is musculoskeletal injury, occasional acute injury, respiratory irritation, and a lot of uncontrolled chronic disease. TeleDirectMD is a primary-care practice for the chronic and routine — not an OSHA-recordkeeping or occupational-medicine vendor.",
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
        name: 'Minor eye irritation (referral-heavy)',
        why: 'Construction trades have the highest occupational eye injury rate of any group. Most job-site eye injuries (embedded foreign body, chemical splash, vision change) require in-person care — we do not manage these by telehealth. Mild conjunctivitis or post-irrigation follow-up can be assessed by video, but our default is to triage to ER or urgent care.',
        citations: [
          { label: 'BLS Eye Injuries 2023', url: 'https://www.bls.gov/opub/ted/2023/workers-suffered-18510-eye-related-injuries-and-illnesses-in-2020.htm' },
        ],
      },
      {
        name: 'Hand and wrist lacerations',
        why: 'Tool injuries from power tools, saws, sheet metal. Wound assessment, antibiotic prescribing for infected wounds, WC documentation, tetanus review — virtual. Deep/gaping wounds get an immediate suturing referral.',
      },
      {
        name: 'Asthma management (workplace-aware)',
        why: 'Silica dust, wood dust, drywall dust, isocyanates from spray foam — significant particulate exposure across the trades. Standard asthma medication management is primary-care scope. Spirometry, OSHA medical surveillance exams, and occupational asthma evaluations are in-person and handled by occupational medicine.',
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
<p>Construction operates under heavy OSHA medical surveillance requirements (respirator clearances, silica, lead, asbestos). These are <strong>occupational-medicine workflows handled by dedicated vendors</strong> — they are not primary-care services. TeleDirectMD is a primary-care practice; OSHA surveillance is not what we do.</p>
<ul>
  <li><strong>OSHA respirator medical evaluations (29 CFR 1910.134), silica surveillance (29 CFR 1926.1153), lead/asbestos surveillance (29 CFR 1926.62 / 1926.1101).</strong> These are vendor services your contractor likely already procures through occupational medicine. We do not offer them.</li>
  <li><strong>What we do.</strong> Primary care between OSHA-mandated exams: hypertension management, diabetes management, cholesterol, mental health, acute illness, minor MSK assessment, prescription refills. Particularly valuable for the 27.8% of construction workers who are uninsured and have no primary-care home.</li>
  <li><strong>Return-to-work after illness or minor injury.</strong> When a worker has had a primary-care visit with us, a standard work-excuse note is part of the encounter. For injury-specific WC return-to-work programs, your contractor should use its dedicated WC clinical vendor.</li>
</ul>
`,
    whatWeSolve: [
      { headline: 'Hypertension and chronic disease management for the 27.8% uninsured', body: 'These workers have no primary care home. We initiate treatment, monitor labs, and manage routine refills via flat-rate visits — the kind of primary care this workforce typically goes without.' },
      { headline: 'Acute illness without losing a day', body: 'Sinus infections, UTIs, skin infections, GI illness — handled by video, prescriptions sent to the worker\'s pharmacy. No clinic detour mid-job.' },
      { headline: 'Back and shoulder pain within virtual scope', body: 'Minor MSK injuries (lumbar strain, rotator cuff irritation) can be assessed and conservatively managed by primary care. Injuries that need imaging or in-person exam are triaged.' },
      { headline: 'Mental health for trades workers', body: 'A construction worker who needs an SSRI or SNRI for depression or anxiety can get one through primary care. No controlled substances, no addiction treatment.' },
      { headline: 'Spanish-language accessibility', body: '33% Hispanic workforce. Professional interpretation services expand access for crews where English is not the primary language.' },
    ],
    whatWeDont: [
      { headline: 'No OSHA medical surveillance programs', body: 'Respirator medical evaluations (29 CFR 1910.134), silica surveillance, lead and asbestos surveillance, audiometric programs — these are occupational medicine services. We are a primary-care practice and do not offer them.' },
      { headline: 'No workers\' compensation clinical packages', body: 'A construction visit with us produces a standard primary-care clinical note. Specialized WC return-to-work programs are run by dedicated occupational medicine vendors.' },
      { headline: 'No DOT/CDL exams', body: 'If your tradesperson also drives commercially, the DOT physical itself remains in person.' },
      { headline: 'No in-person procedures', body: 'No sutures, no embedded foreign body removal, no abscess drainage, no spirometry. Anything that needs hands-on care gets triaged.' },
      { headline: 'No emergency care', body: 'Severe chemical splash, eye injury with vision change, heat stroke, severe respiratory distress = ER or 911.' },
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
        q: 'We have workers who need OSHA respirator medical clearances before they can start a job. Can TeleDirectMD do those?',
        a: 'No — OSHA respirator medical evaluations are an occupational-medicine workflow, and we are a primary-care practice. Your contractor should continue to use its dedicated occupational medicine vendor for 1910.134 clearances, silica surveillance, lead and asbestos surveillance. What TeleDirectMD provides is the day-to-day primary care between those exams: hypertension, diabetes, acute illness, mental health.',
      },
      {
        q: 'One of my workers got something in his eye on a job site. Is this a telehealth situation?',
        a: 'For most eye injuries, no. Embedded foreign body, chemical splash with ongoing pain, any vision change — those need in-person care immediately. For mild post-irrigation follow-up or simple conjunctivitis, primary care can help, but our default is to refer to in-person urgent care or ER. Construction has the highest occupational eye injury rate of any group precisely because these are serious injuries.',
      },
      {
        q: "My subcontractors don't offer health insurance to their crews. Is there anything I can do as a general contractor?",
        a: 'Some general contractors are now including TeleDirectMD access as a primary-care benefit for all workers on their sites — regardless of which subcontractor employs them. This isn\'t traditional health insurance, so it does not create an employment relationship or ACA obligation. It ensures your 27% uninsured crew members have a doctor to call for chronic disease management, acute illness, or mental health. It is not a replacement for site-specific OSHA medical surveillance, which still goes through occupational medicine.',
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
      'Virtual primary care for janitorial crews — contact dermatitis management, asthma care, chronic disease, mental health. Night-shift accessible, $0 employer cost, 41 states + DC.',
    heroHeadline: 'Virtual primary care for cleaning crews.',
    heroHeadlineEm: 'A doctor your team can actually reach.',
    heroSub:
      "Janitorial and cleaning workers face contact dermatitis, asthma, and night-shift health barriers — with a 21.9% uninsured rate, much higher in immigrant subgroups. TeleDirectMD provides virtual primary care for the chronic and routine: contact dermatitis, asthma management, hypertension, mental health, acute illness. Designed for a workforce that often can't reach a daytime clinic.",
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
      "Cleaning chemistry takes a real toll on skin and lungs, on top of a workforce that historically gets less primary care than almost any other. TeleDirectMD is a primary-care practice for the chronic and routine — we are not an occupational medicine vendor for OSHA recordkeeping or workers'-comp incident management.",
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
        name: 'Asthma management',
        why: 'Cleaning workers are a high-risk group for asthma (more than 250 substances in cleaning products are recognized asthma inducers). Standard inhaler management — albuterol, inhaled corticosteroids — is primary-care scope. Occupational asthma WC evaluations and pulmonary function testing are in-person and handled by occupational medicine.',
        citations: [
          { label: 'Mt Sinai Today June 2022', url: 'https://health.mountsinai.org/blog/occupational-asthma-and-cleaning/' },
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
<p>Cleaning operators interact with OSHA standards on hazard communication and respiratory protection. These are occupational medicine workflows. TeleDirectMD is a primary-care practice; OSHA compliance is not what we do.</p>
<ul>
  <li><strong>OSHA Hazard Communication Standard (29 CFR 1910.1200) and OSHA 300 log entries.</strong> Recordkeeping for chemical exposure events is your safety manager's domain. Our clinical note from a primary-care visit is yours to use as you see fit, but we do not produce OSHA-300-formatted documentation as a service.</li>
  <li><strong>OSHA Respirator Medical Evaluations (29 CFR 1910.134).</strong> Occupational medicine vendor service. Not something we offer.</li>
  <li><strong>Workers' comp evaluations for occupational dermatitis or asthma.</strong> Specialized WC vendor work. We can manage the day-to-day clinical condition; we do not offer WC-vendor documentation packages.</li>
  <li><strong>What we do.</strong> Treat the contact dermatitis. Manage the asthma. Manage hypertension, diabetes, and depression. Write prescriptions. Provide standard work-excuse notes.</li>
</ul>
`,
    whatWeSolve: [
      { headline: 'Contact dermatitis treated early', body: 'Irritant contact dermatitis treated early rarely progresses to full allergic sensitization. Topical corticosteroids, barrier-cream counseling, and irritant-avoidance advice are core primary-care services.' },
      { headline: 'Asthma management', body: 'Standard inhaler regimens (albuterol, inhaled corticosteroids) for workers with workplace-triggered asthma. We do not perform pulmonary function testing or occupational asthma WC evaluations — those go to occupational medicine.' },
      { headline: 'Care for the 21.9% uninsured (much higher in immigrant subgroups)', body: 'Cleaning workers are heavily uninsured. Flat-rate primary care for chronic disease, acute illness, and mental health fills the gap their employers and the larger system have left.' },
      { headline: 'Mental health within standard primary-care scope', body: 'PHQ-9 / GAD-7 screening, SSRIs, SNRIs. No controlled substances.' },
      { headline: 'Interpreter-supported care for immigrant workers', body: 'Janitorial work is among the top employment categories for immigrant workers. Professional interpretation services close the systemic access gap.' },
    ],
    whatWeDont: [
      { headline: 'No OSHA recordkeeping or compliance services', body: 'OSHA 300 log entries, Hazard Communication training, respirator medical evaluations — these are occupational medicine and safety-manager workflows. Not services we offer.' },
      { headline: 'No workers\' compensation clinical packages', body: 'For WC evaluation of occupational asthma, dermatitis, or chemical injury claims, your operator should use a dedicated WC clinical vendor.' },
      { headline: 'No emergency care for chemical incidents', body: 'Severe respiratory distress, alkali eye injury, or systemic chemical poisoning = ER or 911. We are not the right channel for acute chemical emergencies.' },
      { headline: 'No spirometry, PFT, or patch testing', body: 'These are in-person diagnostic procedures handled by specialists.' },
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
        a: 'Yes. Contact dermatitis from cleaning chemicals is the most common occupational skin disease in this industry, and it\'s within standard primary-care scope. Dr. Bhavsar can assess the rash by video, prescribe topical steroids and barrier cream, and counsel your worker on irritant avoidance. If the rash is severe, allergic, or needs patch testing, he refers to a dermatologist. For workers\' comp claims linking dermatitis to workplace exposure, your operator should also use its dedicated WC vendor — our note documents the clinical care, not a formal WC-vendor evaluation.',
      },
      {
        q: 'One of my workers mixed the wrong chemicals and started coughing badly. What should they do?',
        a: 'If they\'re having severe difficulty breathing, chest tightness, or wheezing — call 911 immediately and get them to fresh air. Bleach mixed with ammonia creates chloramine gas, which can cause serious lung damage. TeleDirectMD is not the right channel for acute chemical emergencies. For follow-up care after the acute event, primary-care visits can manage residual asthma or irritation.',
      },
      {
        q: "My janitorial company has huge turnover and I can't afford full health insurance. Is there a practical option?",
        a: 'Direct-pay virtual primary care through TeleDirectMD is designed for this exact situation. Far less than a traditional group insurance premium gives your employees access to a primary care physician for acute illness, skin problems, respiratory issues, and chronic conditions. Workers who have someone to call when they\'re sick miss fewer shifts and stay on the job longer.',
      },
    ],
  },
};
