// ─── Symptom-page content config (20 pages) ─────────────────────────────
// Deep per-symptom content. Each page targets 3,500–4,500 words across
// 17 sections, 12+ FAQs, 5+ authoritative references, and a per-symptom
// medication table. Mirrors the gold-standard structure used by
// app/[slug]/[conditionSlug]/page.js (condition-by-state pages).
//
// Sources for queries + volumes: teledirectmd_symptom_keywords.md.
// Sources for cost figures: teledirectmd_cost_benchmarks.md.
// Schema via lib/symptom-schema.js. Renderer at app/symptoms/[slug]/page.js.

export const SYMPTOM_PAGE_SLUGS = [
  'persistent-cough',
  'sore-throat',
  'acne-breakout',
  'burning-urination',
  'allergy-symptoms',
  'strep-throat',
  'cystic-acne',
  'sinus-pressure',
  'bronchitis',
  'yeast-infection',
  'erectile-dysfunction',
  'acid-reflux',
  'pink-eye',
  'migraine',
  'ear-pain',
  'sinus-infection',
  'cold-sore',
  'birth-control',
  'skin-rash',
  'asthma',
];

// Map symptom slug → existing condition page slug.
export const SYMPTOM_TO_CONDITION = {
  'persistent-cough':       'common-cold-treatment-online',
  'sore-throat':            'sore-throat-treatment-online',
  'acne-breakout':          'acne-treatment-online',
  'burning-urination':      'uti-treatment-online',
  'allergy-symptoms':       'seasonal-allergies-treatment-online',
  'strep-throat':           'sore-throat-treatment-online',
  'cystic-acne':            'acne-treatment-online',
  'sinus-pressure':         'sinus-infection-treatment-online',
  'bronchitis':             'common-cold-treatment-online',
  'yeast-infection':        'yeast-infection-treatment-online',
  'erectile-dysfunction':   'erectile-dysfunction-treatment-online',
  'acid-reflux':            'acid-reflux-refills-online',
  'pink-eye':               'pink-eye-treatment-online',
  'migraine':               'migraine-refills-online',
  'ear-pain':               'ear-pain-treatment-online',
  'sinus-infection':        'sinus-infection-treatment-online',
  'cold-sore':              'cold-sore-treatment-online',
  'birth-control':          'birth-control-refills-online',
  'skin-rash':              'contact-dermatitis-treatment-online',
  'asthma':                 'asthma-refills-online',
};

// Reverse map: condition slug → symptom slugs.
export const CONDITION_TO_SYMPTOMS = (() => {
  const out = {};
  for (const [sym, cond] of Object.entries(SYMPTOM_TO_CONDITION)) {
    if (!out[cond]) out[cond] = [];
    out[cond].push(sym);
  }
  return out;
})();

// Map symptom slug → matching cost-page slug if one exists.
export const SYMPTOM_TO_COST_PAGE = {
  'burning-urination':  'uti-treatment-cost',
  'sinus-pressure':     'sinus-infection-treatment-cost',
  'sinus-infection':    'sinus-infection-treatment-cost',
  'sore-throat':        'sore-throat-treatment-cost',
  'strep-throat':       'sore-throat-treatment-cost',
};

// Build-time constants for schema dates.
export const SYMPTOM_PUBLISHED = '2026-04-26';
export const SYMPTOM_LAST_REVIEWED = '2026-04-26';

// Standard cost comparison block reused per page (small per-symptom
// note appended in each entry). Source: teledirectmd_cost_benchmarks.md.
export const COST_TABLE_ROWS = [
  { setting: 'Emergency Room (uninsured)',     range: '$1,500–$3,000+',  note: 'Avg ~$2,715 (Mira Health, Feb 2025).' },
  { setting: 'Urgent Care (cash-pay)',          range: '$150–$300',       note: 'Avg ~$280 (Mira Health, 2025).' },
  { setting: 'Primary Care (self-pay)',         range: '$100–$200',       note: 'Avg ~$171 (Mira Health, Feb 2025).' },
  { setting: 'Retail Clinic (CVS MinuteClinic)','range': '$99–$139',      note: 'Visit only; meds extra (CVS, 2024).' },
  { setting: 'TeleDirectMD',                    range: '$49 flat',        note: 'Same-day video visit; meds via GoodRx.' },
];

// ────────────────────────────────────────────────────────────────────
// Per-page configs (20).
// ────────────────────────────────────────────────────────────────────

export const SYMPTOM_PAGES = {};

SYMPTOM_PAGES["persistent-cough"] = {
  slug: `persistent-cough`,
  pid: `sym-cough`,
  query: `cough that won't go away`,
  h1: `Cough That Won't Go Away — A Family Doctor's Guide to What It Usually Means`,
  metaTitle: `Cough That Won't Go Away — Causes, When to See a Doctor | TeleDirectMD`,
  metaDescription: `A cough lasting 3+ weeks is most often post-infectious bronchitis, asthma, GERD, or postnasal drip. $49 telehealth visit; same-day evaluation in 41 states.`,
  breadcrumb: `Cough That Won't Go Away`,
  answerLead: `Cough lasting 3+ weeks — what it usually means:`,
  answerBody: `A cough that won't go away is most commonly <strong>post-infectious bronchitis</strong>, <strong>undertreated asthma or cough-variant asthma</strong>, <strong>GERD with reflux cough</strong>, or <strong>upper-airway cough syndrome (postnasal drip)</strong>. Together those four account for the vast majority of subacute and chronic cough in adult non-smokers per <a href="https://www.aafp.org/pubs/afp/issues/2017/1101/p575.html">AAFP guidance</a>. A $49 TeleDirectMD video visit with a board-certified family-medicine MD distinguishes among them in 10–15 minutes; most patients receive a treatment plan and prescription same day.`,
  symptomDef: {
    altNames: [
      `Chronic cough`,
      `Subacute cough`,
      `Post-viral cough`
    ],
    anatomy: `Respiratory tract (larynx, trachea, bronchi)`,
    treatment: `Inhaled bronchodilator, inhaled corticosteroid, proton-pump inhibitor, or intranasal steroid depending on cause`,
    conditionDisplayName: `Bronchitis / chronic cough`
  },
  whatThisMeans: [
    `A cough is called <strong>acute</strong> if it lasts under 3 weeks, <strong>subacute</strong> from 3 to 8 weeks, and <strong>chronic</strong> over 8 weeks. Most subacute cough is post-infectious — your airways stay inflamed and hyperreactive for weeks after a viral upper-respiratory infection, even after the virus itself has cleared.`,
    `In adult non-smokers, the four causes that explain most chronic cough are <strong>upper-airway cough syndrome</strong> (postnasal drip from rhinitis or sinusitis), <strong>asthma or cough-variant asthma</strong>, <strong>gastroesophageal reflux disease (GERD)</strong>, and <strong>nonasthmatic eosinophilic bronchitis</strong>. Two or three of these can coexist in the same patient.`,
    `Smoking, vaping, ACE-inhibitor blood-pressure medications (lisinopril, enalapril, benazepril), and occupational exposures (dust, fumes, mold) are also frequent culprits and are easy to identify in a focused video visit. Roughly 5–35% of patients on an ACE inhibitor develop a dry persistent cough that resolves within 1–4 weeks of switching to an angiotensin-receptor blocker (ARB).`,
    `Less common but important causes include pertussis (whooping cough — adult cases often go undiagnosed and last 6–10 weeks), tuberculosis (especially in immigrants, healthcare workers, and the immunocompromised), and lung cancer (consider in any smoker over 50 with a new chronic cough).`
  ],
  differentials: [
    {
      name: `Post-infectious / acute bronchitis`,
      description: `Cough lasting 3–8 weeks following a viral URI. Airways remain inflamed and hyperreactive. Resolves on its own or with a short inhaled bronchodilator course.`,
      prevalence: `~30–40% of subacute cough`,
      features: `Recent cold or flu; cough mostly dry or with scant clear sputum; no fever; no wheezing at rest.`,
      next: `Telehealth — empiric bronchodilator trial appropriate.`
    },
    {
      name: `Asthma / cough-variant asthma`,
      description: `Hyperreactive airways causing cough as the primary symptom. Often nocturnal or exercise-triggered. Cough-variant asthma can present with no audible wheeze.`,
      prevalence: `~25% of chronic cough`,
      features: `Worse at night, after exercise, or in cold air; family history of atopy; symptom relief with albuterol.`,
      next: `Telehealth — empiric inhaled corticosteroid + bronchodilator trial; spirometry if uncertain.`
    },
    {
      name: `GERD / reflux cough`,
      description: `Acid reflux irritates the larynx and triggers a vagal cough reflex. Often worse lying flat or after meals; heartburn is not always present.`,
      prevalence: `~20% of chronic cough`,
      features: `Worse at night or after meals; dry cough; throat clearing; sour taste; hoarseness.`,
      next: `Telehealth — empiric PPI trial (8 weeks) ± lifestyle change.`
    },
    {
      name: `Upper-airway cough syndrome (postnasal drip)`,
      description: `Mucus dripping from the nose and sinuses into the throat triggers a chronic clearing-cough. Driven by allergic rhinitis or chronic sinusitis.`,
      prevalence: `~20% of chronic cough`,
      features: `Throat clearing; sensation of mucus in throat; nasal congestion; cough worse on waking.`,
      next: `Telehealth — intranasal corticosteroid ± oral antihistamine.`
    },
    {
      name: `ACE-inhibitor cough`,
      description: `A dry, persistent, tickling cough that develops within weeks to months of starting an ACE inhibitor. Resolves 1–4 weeks after switching to an ARB.`,
      prevalence: `5–35% of ACE-inhibitor users`,
      features: `Dry cough; on lisinopril, enalapril, ramipril, or benazepril; no other respiratory symptoms.`,
      next: `Telehealth — switch to ARB (losartan, valsartan).`
    }
  ],
  redFlags: [
    `Coughing up blood — more than streaks of blood-tinged sputum (hemoptysis warrants imaging)`,
    `Severe shortness of breath at rest or sudden new shortness of breath`,
    `Chest pain or pressure with the cough — suggests cardiac, pulmonary embolism, or pneumothorax`,
    `Fever ≥ 102°F (38.9°C) lasting more than 3 days`,
    `Unintentional weight loss of more than 10 lb (4.5 kg) over 6 months alongside cough`,
    `Drenching night sweats`,
    `Cough in a smoker over 50 with a change in cough character or new hemoptysis`,
    `Travel from or contact with a TB-endemic area + cough > 3 weeks`
  ],
  eligibility: [
    `You are 18 or older and located in one of TeleDirectMD's 41 licensed states at the time of the visit`,
    `Cough has lasted 3 weeks or longer without improvement`,
    `No hemoptysis (more than streaks)`,
    `No severe shortness of breath at rest`,
    `No chest pain with the cough`,
    `No fever above 102°F lasting more than 3 days`,
    `No unintentional weight loss`,
    `You can identify the rough timeline of when the cough started and what triggers it`,
    `You have a pharmacy where a prescription can be sent`,
    `You are not currently using oxygen or have an existing diagnosis of severe COPD with frequent exacerbations`
  ],
  notEligibility: [
    `Coughing up frank blood — needs imaging and possibly bronchoscopy`,
    `Cough with severe shortness of breath at rest — emergency or in-person evaluation`,
    `Suspected pneumonia (high fever, focal lung exam, hypoxia)`,
    `Children under 18 — pediatric cough warrants in-person evaluation`,
    `Active or recent TB exposure — public-health workup required`,
    `Chronic cough in a smoker over 50 with weight loss — needs imaging first`
  ],
  howTelehealthHelps: [
    `A focused video visit takes a structured cough history: duration, dry vs. productive, color of sputum, triggers (cold air, exercise, lying flat, eating), nocturnal pattern, exposures (vaping, occupational dust, pets), medications (especially ACE inhibitors), travel, and TB risk.`,
    `Dr. Bhavsar inspects the oropharynx via video, listens for audible wheeze or stridor, watches the work of breathing, and reviews any home pulse-oximeter reading. While a stethoscope exam is not possible, the visit history is highly diagnostic for the four common causes.`,
    `For typical post-infectious cough or mild bronchitis, an inhaled bronchodilator (albuterol HFA (see medication table)) and an antitussive (benzonatate or guaifenesin/dextromethorphan) are often appropriate without an in-person visit.`,
    `When the history suggests asthma, a step-up trial of an inhaled corticosteroid (fluticasone, budesonide-formoterol) is started; spirometry is referred if needed.`,
    `When GERD is the most likely cause, an 8-week empiric trial of omeprazole 20 mg twice daily is started, with lifestyle counseling on meal timing, head-of-bed elevation, and trigger foods.`,
    `When postnasal drip is leading, an intranasal corticosteroid (fluticasone, mometasone) plus a second-generation antihistamine is prescribed; sinus imaging is referred if symptoms persist.`,
    `When red flags are present, the visit redirects you to in-person urgent care, your PCP, or the ER for chest X-ray, CBC, spirometry, or further workup. There is no charge for the misroute.`
  ],
  treatmentOptions: [
    {
      category: `Over-the-counter relief`,
      detail: `Guaifenesin (Mucinex) 600–1,200 mg twice daily thins mucus. Dextromethorphan (Robitussin DM) suppresses cough. Honey (1–2 tsp at bedtime) has small-trial evidence for nighttime cough relief in adults per Cochrane reviews. Saline nasal rinses help when postnasal drip is contributing.`
    },
    {
      category: `Inhaled bronchodilators`,
      detail: `Albuterol HFA 2 puffs every 4–6 hours as needed for post-infectious airway hyperreactivity or cough-variant asthma. Most patients see improvement within 3–7 days. Generic albuterol runs (see medication table).`
    },
    {
      category: `Inhaled corticosteroids`,
      detail: `For suspected asthma or eosinophilic bronchitis: fluticasone 110 mcg twice daily, or budesonide-formoterol (Symbicort) 160/4.5 mcg twice daily for combined inhaled steroid + long-acting bronchodilator effect. Takes 1–2 weeks to reach full benefit.`
    },
    {
      category: `Acid-suppression therapy`,
      detail: `For suspected reflux cough: omeprazole 20 mg twice daily before meals for 8 weeks, plus lifestyle changes (no eating within 3 hours of bed, head-of-bed elevation, weight loss if relevant). About 70% of reflux cough resolves with adequate PPI therapy.`
    },
    {
      category: `Postnasal-drip therapy`,
      detail: `Intranasal fluticasone or mometasone 1–2 sprays per nostril daily, plus an oral second-generation antihistamine (cetirizine, loratadine, levocetirizine) if allergic component. Saline rinse twice daily.`
    },
    {
      category: `Medication review`,
      detail: `Stop ACE inhibitors when ACE-cough is suspected — switch to an ARB (losartan, valsartan). Discuss with your prescribing clinician before stopping any blood-pressure medication.`
    },
    {
      category: `Behavioral / environmental`,
      detail: `Smoking and vaping cessation. Avoid known triggers (cold air, perfumes, smoke). Hydration. Sleep with a humidifier. For nocturnal cough, elevate head of bed 6 inches.`
    }
  ],
  medications: [
    {
      generic: `albuterol HFA`,
      brand: `ProAir, Ventolin, Proventil`,
      dosageForm: `metered-dose inhaler`,
      drugClass: `short-acting beta-2 agonist`,
      dose: `2 puffs every 4–6h PRN`,
      price: `$19–$81`,
      priceSourceUrl: `https://www.goodrx.com/albuterol`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Tremor, jitteriness, transient tachycardia.`
    },
    {
      generic: `fluticasone HFA`,
      brand: `Flovent, Arnuity`,
      dosageForm: `metered-dose inhaler`,
      drugClass: `inhaled corticosteroid`,
      dose: `110 mcg 2 puffs BID`,
      price: `$11–$36`,
      priceSourceUrl: `https://www.goodrx.com/fluticasone-propionate-hfa`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Hoarseness, oral thrush — rinse mouth after use.`
    },
    {
      generic: `omeprazole`,
      brand: `Prilosec`,
      dosageForm: `oral capsule`,
      drugClass: `proton-pump inhibitor`,
      dose: `20 mg BID before meals × 8 weeks`,
      price: `$4–$22`,
      priceSourceUrl: `https://www.goodrx.com/omeprazole`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Headache, abdominal pain; long-term: B12 deficiency, increased fracture risk.`
    },
    {
      generic: `benzonatate`,
      brand: `Tessalon Perles`,
      dosageForm: `oral capsule`,
      drugClass: `peripheral antitussive`,
      dose: `100–200 mg three times daily`,
      price: `$9–$49`,
      priceSourceUrl: `https://www.goodrx.com/benzonatate`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Drowsiness, dizziness; do not chew (severe oropharyngeal numbness).`
    },
    {
      generic: `fluticasone nasal`,
      brand: `Flonase`,
      dosageForm: `nasal spray`,
      drugClass: `intranasal corticosteroid`,
      dose: `2 sprays each nostril daily`,
      price: `$8–$15 OTC`,
      sideEffects: `Nasal dryness, occasional epistaxis.`
    }
  ],
  recovery: [
    {
      period: `Days 1–3 of treatment`,
      detail: `Symptom improvement is uncommon this early. Bronchodilators may give immediate relief if cough-variant asthma is the cause. PPIs and inhaled steroids do not produce noticeable change yet.`
    },
    {
      period: `Week 1–2`,
      detail: `Post-infectious cough often improves significantly with bronchodilator therapy. Inhaled steroids start showing benefit. PPI-treated reflux cough may show early reduction in throat clearing.`
    },
    {
      period: `Week 3–4`,
      detail: `Most post-infectious cough has resolved. Asthma-related cough markedly improved on inhaled steroid. Reflux cough showing 30–50% reduction.`
    },
    {
      period: `Week 6–8`,
      detail: `PPI reflux cough should be 70%+ improved. Persistent cough at this point requires re-evaluation, spirometry, or imaging.`
    },
    {
      period: `Beyond 8 weeks`,
      detail: `Chronic cough that has not responded to empiric trials needs in-person workup with chest X-ray, spirometry, possibly chest CT or referral to pulmonology, ENT, or GI.`
    }
  ],
  homeCare: [
    `Stay well hydrated — aim for 8 cups of water daily. Hydration thins respiratory secretions.`,
    `Honey 1–2 teaspoons at bedtime has small-trial evidence for nighttime cough relief in adults per Cochrane reviews. Do not give honey to children under 1.`,
    `Run a cool-mist humidifier in the bedroom at night.`,
    `Avoid known triggers: smoke, vaping, perfumes, cold air, dusty environments.`,
    `For nocturnal cough, elevate the head of the bed 6 inches with risers (better than pillow stacking — reduces reflux).`,
    `For postnasal drip: saline nasal rinses twice daily (Neti pot or NeilMed sinus rinse with distilled water).`,
    `Salt-water gargles 3–4 times daily soothe a cough-irritated throat.`,
    `If you have asthma, identify and remove indoor allergen exposures (dust mites, pet dander, mold).`,
    `For reflux: avoid eating within 3 hours of bedtime, lose 5–10% body weight if relevant, limit alcohol, caffeine, chocolate, mint, and high-fat meals.`,
    `Stop smoking and vaping. The single highest-yield intervention for any chronic cough.`
  ],
  faqs: [
    {
      question: `How long does a normal post-cold cough last?`,
      answer: `Most viral coughs resolve in 7–10 days. A cough lasting 3–8 weeks is called subacute and is usually post-infectious — your airways are still hyperreactive after the virus cleared. Cough beyond 8 weeks is chronic and warrants a structured workup.`
    },
    {
      question: `Is a cough that lasts 3 weeks dangerous?`,
      answer: `Not usually. Most subacute cough (3–8 weeks) is post-infectious and resolves on its own or with a short inhaled-bronchodilator course. Cough lasting more than 8 weeks, or with red flags like blood, weight loss, or shortness of breath, warrants imaging and in-person evaluation.`
    },
    {
      question: `Can a doctor prescribe an inhaler online for cough?`,
      answer: `Yes. TeleDirectMD can prescribe albuterol or fluticasone-based inhalers for post-infectious or cough-variant asthma after a focused video visit. Generic albuterol HFA runs (see medication table); generic fluticasone HFA runs $50–$70.`
    },
    {
      question: `Do I need a chest X-ray for a chronic cough?`,
      answer: `Not always. For typical post-infectious cough without red flags, treatment can begin without imaging. A chest X-ray is recommended if you have hemoptysis, weight loss, smoking history with new cough, fever, or symptoms persisting beyond 8 weeks despite empiric therapy.`
    },
    {
      question: `Can GERD really cause a chronic cough?`,
      answer: `Yes — reflux cough is one of the four most common causes of chronic cough in adults per AAFP guidance, accounting for roughly 20% of cases. It is often worse at night or after meals; heartburn is not always present. Treatment is twice-daily omeprazole for 8 weeks plus lifestyle changes.`
    },
    {
      question: `Does TeleDirectMD treat asthma-related cough?`,
      answer: `Yes. Asthma and cough-variant asthma are within scope. Albuterol prescriptions, inhaled steroid trials, and step-up therapy are all available through a $49 video visit. Patients with frequent exacerbations or hospitalizations need in-person pulmonology.`
    },
    {
      question: `When should I go to the ER for a cough?`,
      answer: `Go to the ER if you are coughing up blood (more than streaks), have severe shortness of breath at rest, chest pain, fever above 102°F lasting 3+ days, blue lips or fingertips, or feel unable to speak full sentences. These suggest pneumonia, pulmonary embolism, or pneumothorax.`
    },
    {
      question: `Could my blood-pressure medication be causing the cough?`,
      answer: `Yes — 5–35% of patients on an ACE inhibitor (lisinopril, enalapril, ramipril, benazepril) develop a dry persistent cough that resolves 1–4 weeks after switching to an ARB like losartan or valsartan. Always discuss with your prescribing clinician before stopping any BP medication.`
    },
    {
      question: `How much does a chronic cough visit cost without insurance?`,
      answer: `$49 flat at TeleDirectMD. Compare to $150–$280 cash-pay urgent care or roughly $2,715 average uninsured ER visit per Mira Health 2025 data. Inhaler costs vary by formulation; see medication table.`
    },
    {
      question: `Can vaping cause a chronic cough?`,
      answer: `Yes. Vaping causes airway inflammation and bronchitis-like cough; it is a leading reversible cause of chronic cough in adults under 40. EVALI (e-cigarette / vaping-associated lung injury) is a more serious form requiring in-person workup.`
    },
    {
      question: `Is bronchitis contagious?`,
      answer: `Acute viral bronchitis is contagious for the first 7–10 days, mostly through respiratory droplets. Chronic bronchitis (smoker's cough or COPD-related) is not contagious. The visit will distinguish between them based on symptom timeline and exposure history.`
    },
    {
      question: `Will a Z-Pak (azithromycin) help my cough?`,
      answer: `Usually not. Most acute cough is viral, and antibiotics are not indicated. AAFP and CDC guidance specifically discourage routine antibiotic use for acute bronchitis. Prescribing antibiotics for a viral cough drives resistance and offers no benefit.`
    },
    {
      question: `Can I get an inhaler refill through TeleDirectMD?`,
      answer: `Yes. Same-day refills of albuterol, fluticasone, budesonide-formoterol (Symbicort), and tiotropium (Spiriva) for stable asthma or chronic cough are routine $49 visits. New asthma diagnoses with frequent exacerbations need in-person evaluation.`
    },
    {
      question: `When should I follow up if my cough is not improving?`,
      answer: `Contact us 7–10 days after starting an empiric trial if symptoms have not improved. We will switch therapy or refer for in-person workup. Persistent cough beyond 8 weeks despite 2 empiric trials requires chest X-ray and possibly spirometry.`
    }
  ],
  relatedSymptoms: [
    `bronchitis`,
    `asthma`,
    `sinus-pressure`,
    `allergy-symptoms`,
    `acid-reflux`
  ],
  references: [
    {
      label: `AAFP — Evaluation of Subacute and Chronic Cough in Adults (2017)`,
      url: `https://www.aafp.org/pubs/afp/issues/2017/1101/p575.html`
    },
    {
      label: `CHEST — Cough Guidelines (2018)`,
      url: `https://journal.chestnet.org/article/S0012-3692(17)33126-5/fulltext`
    },
    {
      label: `CDC — Acute Bronchitis Treatment Guidance`,
      url: `https://www.cdc.gov/antibiotic-use/clinicians/acute-bronchitis.html`
    },
    {
      label: `Mayo Clinic — Chronic Cough`,
      url: `https://www.mayoclinic.org/diseases-conditions/chronic-cough/symptoms-causes/syc-20351575`
    },
    {
      label: `NIH MedlinePlus — Cough`,
      url: `https://medlineplus.gov/cough.html`
    },
    {
      label: `Cochrane — Honey for acute cough in children and adults`,
      url: `https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD007094.pub5/full`
    },
    {
      label: `Mira Health — ER visit cost (Feb 2025)`,
      url: `https://www.talktomira.com/post/how-much-does-an-er-visit-cost`
    },
    {
      label: `GoodRx — Albuterol pricing`,
      url: `https://www.goodrx.com/albuterol`
    }
  ],
  riskFactors: [
    `Smoking`,
    `Vaping`,
    `ACE-inhibitor use`,
    `Allergies / atopy`,
    `GERD`,
    `Occupational dust exposure`,
    `Recent viral URI`
  ],
  typicalTests: [
    `Chest X-ray`,
    `Spirometry / pulmonary function tests`,
    `Allergy testing`,
    `Esophageal pH monitoring`,
    `Sinus CT`
  ]
};

SYMPTOM_PAGES["sore-throat"] = {
  slug: `sore-throat`,
  pid: `sym-sore-throat`,
  query: `sore throat that won't go away`,
  h1: `Sore Throat That Won't Go Away — Strep, Viral, or Mono?`,
  metaTitle: `Sore Throat That Won't Go Away — Causes, When It's Strep | TeleDirectMD`,
  metaDescription: `Sore throat lasting 5+ days is often viral pharyngitis, strep, mononucleosis, or postnasal drip. $49 video visit; amoxicillin prescribed if strep. 41 states.`,
  breadcrumb: `Sore Throat That Won't Go Away`,
  answerLead: `Sore throat lasting 5+ days — what it usually is:`,
  answerBody: `A persistent sore throat is most often <strong>viral pharyngitis</strong> (70–85% of adult cases), <strong>group A streptococcal pharyngitis</strong> (5–15% of adult cases per <a href="https://www.idsociety.org/practice-guideline/strep-throat/">IDSA guidelines</a>), or <strong>infectious mononucleosis</strong>. A $49 TeleDirectMD video visit applies the modified Centor criteria, looks at the throat, and decides who needs amoxicillin (~ (see medication table)) and who needs supportive care alone.`,
  symptomDef: {
    altNames: [
      `Pharyngitis`,
      `Tonsillitis`,
      `Throat pain`,
      `Painful swallowing`,
      `Odynophagia`
    ],
    anatomy: `Oropharynx (tonsils, pharyngeal mucosa)`,
    treatment: `Amoxicillin or penicillin V if bacterial; supportive care if viral`,
    conditionDisplayName: `Sore throat / pharyngitis`
  },
  whatThisMeans: [
    `The vast majority of adult sore throats are <strong>viral</strong> — caused by rhinovirus, coronavirus, adenovirus, influenza, or SARS-CoV-2. Viral pharyngitis usually resolves in 7–10 days without antibiotics. Antibiotics will not shorten a viral sore throat and contribute to resistance.`,
    `<strong>Group A streptococcal (GAS) pharyngitis</strong> — strep throat — accounts for 5–15% of adult sore throats and benefits from antibiotics: shorter symptom duration, reduced contagion, and (rarely) prevention of acute rheumatic fever and post-streptococcal glomerulonephritis.`,
    `Clinicians use the <strong>modified Centor / McIsaac criteria</strong> to estimate strep probability: fever > 38°C, tender anterior cervical lymphadenopathy, tonsillar exudate (white spots), absence of cough, and age. Three or more criteria → moderate-to-high probability; two or fewer → low probability.`,
    `<strong>Infectious mononucleosis</strong> (Epstein-Barr virus) is common in young adults aged 15–25. It presents with severe pharyngitis, marked fatigue, posterior cervical lymphadenopathy, and sometimes splenomegaly. A monospot or EBV antibody test confirms it.`,
    `Other less-common causes of persistent sore throat include peritonsillar abscess (severe one-sided pain, muffled voice), epiglottitis (drooling, stridor — emergency), gonococcal pharyngitis, postnasal drip, and acid reflux laryngopharyngitis.`
  ],
  differentials: [
    {
      name: `Viral pharyngitis`,
      description: `70–85% of adult sore throats. Caused by rhinovirus, adenovirus, influenza, coronavirus, or SARS-CoV-2. Resolves in 7–10 days without antibiotics.`,
      prevalence: `70–85%`,
      features: `Cough, runny nose, low-grade fever; mild-moderate throat pain; usually no tonsillar exudate.`,
      next: `Telehealth — supportive care; antibiotics not indicated.`
    },
    {
      name: `Group A streptococcal pharyngitis`,
      description: `Bacterial throat infection. Antibiotics shorten illness, reduce contagion, and (rarely) prevent acute rheumatic fever.`,
      prevalence: `5–15% adults; 15–30% children`,
      features: `Fever > 38°C; tonsillar exudate; tender anterior lymph nodes; absence of cough; sudden onset.`,
      next: `Telehealth — Centor 3–4: empiric amoxicillin. Centor 0–1: supportive care.`
    },
    {
      name: `Infectious mononucleosis (EBV)`,
      description: `Severe viral pharyngitis with marked fatigue and lymphadenopathy. Most common in adolescents and young adults.`,
      prevalence: `~1% of college-age sore throats`,
      features: `Severe fatigue; posterior cervical lymphadenopathy; tonsillar exudate; possibly splenomegaly; lasts 2–4 weeks.`,
      next: `Telehealth + lab referral for monospot or EBV serology.`
    },
    {
      name: `Peritonsillar abscess`,
      description: `Pus collection between the tonsil and pharyngeal muscle. Surgical or in-person urgent-care emergency.`,
      prevalence: `~30/100,000 adults/year`,
      features: `Severe one-sided throat pain; muffled 'hot potato' voice; trismus; uvula deviation; drooling.`,
      next: `ER — immediate drainage and IV antibiotics.`
    },
    {
      name: `Postnasal drip / reflux laryngitis`,
      description: `Chronic sore throat from mucus drip or acid reflux. Usually low-grade and lasts weeks to months.`,
      prevalence: `Common cause of chronic sore throat`,
      features: `Throat clearing; morning hoarseness; sour taste; no fever; no exudate.`,
      next: `Telehealth — intranasal steroid or PPI trial.`
    }
  ],
  redFlags: [
    `Drooling or inability to swallow your own saliva`,
    `Stridor (high-pitched noisy breathing in)`,
    `Voice muffled — 'hot potato' voice (peritonsillar abscess or epiglottitis)`,
    `Severe one-sided throat swelling with uvula deviation`,
    `Severe neck stiffness with high fever (consider meningitis)`,
    `Trismus — inability to open the mouth fully`,
    `Tongue or facial swelling (consider angioedema or Ludwig angina)`,
    `Inability to keep down liquids (dehydration risk in severe pharyngitis)`
  ],
  eligibility: [
    `Adult age 18 or older located in one of the 41 licensed states at the time of the visit`,
    `Sore throat lasting 2 days to 2 weeks`,
    `Able to swallow liquids without drooling`,
    `No stridor or muffled voice`,
    `No severe one-sided throat swelling`,
    `No high fever (> 103°F) with neck stiffness`,
    `Willing to use a rapid at-home strep test if symptoms are mid-range Centor`,
    `Have a pharmacy where antibiotics can be sent if needed`,
    `No history of recurrent strep with peritonsillar abscess`
  ],
  notEligibility: [
    `Drooling, stridor, or inability to swallow saliva — ER`,
    `Severe one-sided throat swelling — peritonsillar abscess, needs in-person drainage`,
    `Suspected epiglottitis (drooling, fever, tripod position) — ER immediately`,
    `Sore throat with cervical neck stiffness and high fever — rule out meningitis in person`,
    `Recurrent strep (more than 5 in a year) — ENT evaluation for tonsillectomy`,
    `Penicillin and cephalosporin allergy with high-probability strep — needs in-person rapid strep + alternative antibiotic`
  ],
  howTelehealthHelps: [
    `Dr. Bhavsar inspects the throat under good light via the patient's phone camera (mouth wide open, light from behind the camera). Tonsillar exudate, asymmetric swelling, and uvula deviation are usually visible on a clear video.`,
    `A focused history covers symptom timeline, fever pattern, presence of cough or runny nose, lymph-node tenderness, exposures (sick contacts, school/daycare), and tonsillectomy status.`,
    `The visit applies the modified Centor / McIsaac criteria to estimate strep probability. High Centor (3–4): empiric amoxicillin or penicillin V. Mid-range Centor (1–2): at-home rapid antigen detection test ($25–$50) or in-person testing. Low Centor (0): viral; supportive care.`,
    `Mononucleosis is suspected in young adults with severe fatigue and posterior cervical lymphadenopathy lasting more than 1 week. The visit refers to a local lab for monospot or EBV serology.`,
    `Patients with red-flag features (drooling, stridor, severe one-sided pain, voice change, trismus) are immediately redirected to in-person urgent care or the ER.`,
    `When antibiotics are appropriate, the prescription goes to your pharmacy of choice; the visit also covers symptom management — ibuprofen, acetaminophen, salt-water gargle, throat lozenges, hydration.`
  ],
  treatmentOptions: [
    {
      category: `Symptom control (all causes)`,
      detail: `Acetaminophen 650 mg or ibuprofen 400 mg every 6 hours for pain and fever. Salt-water gargle (1/2 tsp salt in 8 oz warm water) 3–4 times daily. Throat lozenges with menthol or benzocaine. Adequate fluid intake. Cool fluids and popsicles soothe. Rest and avoid talking when painful.`
    },
    {
      category: `First-line antibiotics for strep`,
      detail: `Penicillin V 500 mg twice daily × 10 days, OR amoxicillin 500 mg twice daily × 10 days (preferred — better taste in suspensions, equally effective). Both are see the medication table. Symptoms typically improve within 24–48 hours of starting therapy.`
    },
    {
      category: `Penicillin-allergic patients`,
      detail: `Cephalexin 500 mg twice daily × 10 days (if no anaphylactic penicillin reaction), OR clindamycin 300 mg three times daily × 10 days, OR azithromycin 500 mg day 1 then 250 mg daily × 4 days. Macrolide resistance in GAS is rising; consider azithromycin only if other agents are not options.`
    },
    {
      category: `Mononucleosis supportive care`,
      detail: `Mono is viral — antibiotics not indicated and amoxicillin can cause a generalized rash in mono patients. Treatment is rest, fluids, NSAIDs, and avoidance of contact sports for 4 weeks (splenic rupture risk). Most symptoms improve in 2–4 weeks; fatigue may linger 1–3 months.`
    },
    {
      category: `Postnasal-drip pharyngitis`,
      detail: `Intranasal fluticasone 2 sprays each nostril daily plus a second-generation oral antihistamine (cetirizine, loratadine). Saline nasal rinses twice daily.`
    },
    {
      category: `Reflux laryngitis`,
      detail: `Omeprazole 20 mg twice daily before meals × 8 weeks. Lifestyle: no eating within 3 hours of bed, head-of-bed elevation, avoid alcohol/coffee/chocolate.`
    }
  ],
  medications: [
    {
      generic: `amoxicillin`,
      brand: `Amoxil`,
      dosageForm: `oral capsule, suspension`,
      drugClass: `aminopenicillin antibiotic`,
      dose: `500 mg PO BID × 10 days`,
      price: `$5–$21`,
      priceSourceUrl: `https://www.goodrx.com/amoxicillin`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Diarrhea, rash; rash develops in mononucleosis.`
    },
    {
      generic: `penicillin V potassium`,
      brand: `Veetids`,
      dosageForm: `oral tablet, suspension`,
      drugClass: `penicillin antibiotic`,
      dose: `500 mg PO BID × 10 days`,
      price: `$2–$26`,
      priceSourceUrl: `https://www.goodrx.com/penicillin-v-potassium`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Diarrhea, allergic reaction.`
    },
    {
      generic: `cephalexin`,
      brand: `Keflex`,
      dosageForm: `oral capsule, suspension`,
      drugClass: `first-generation cephalosporin`,
      dose: `500 mg PO BID × 10 days`,
      price: `$8–$37`,
      priceSourceUrl: `https://www.goodrx.com/cephalexin`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Diarrhea, rash; cross-reactivity with penicillin allergy is low (~2%).`
    },
    {
      generic: `azithromycin`,
      brand: `Zithromax (Z-Pak)`,
      dosageForm: `oral tablet`,
      drugClass: `macrolide antibiotic`,
      dose: `500 mg day 1, then 250 mg daily × 4 days`,
      price: `$6–$35`,
      priceSourceUrl: `https://www.goodrx.com/azithromycin`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Diarrhea, QT prolongation; rising macrolide resistance in GAS.`
    },
    {
      generic: `ibuprofen`,
      brand: `Advil, Motrin`,
      dosageForm: `oral tablet`,
      drugClass: `NSAID`,
      dose: `400 mg PO every 6h PRN`,
      price: `$2–$13`,
      priceSourceUrl: `https://www.goodrx.com/ibuprofen`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `GI upset, kidney effects with long-term use; avoid in CKD or peptic ulcer.`
    }
  ],
  recovery: [
    {
      period: `Day 1–2 of antibiotics`,
      detail: `Pain and fever begin improving within 24–48 hours of starting effective antibiotics for strep. Patient is no longer contagious after 24 hours on antibiotics.`
    },
    {
      period: `Day 3–5`,
      detail: `Most patients near-resolution of fever and significant reduction in throat pain. Eating and drinking comfortable. Continue full 10-day antibiotic course even if feeling well.`
    },
    {
      period: `Day 7–10`,
      detail: `Symptoms fully resolved for most strep patients. For viral pharyngitis treated supportively, this is when most cases resolve as well.`
    },
    {
      period: `Week 2`,
      detail: `Persistent symptoms beyond 10 days warrant re-evaluation: consider mononucleosis, undiagnosed GAS recurrence, or peritonsillar complication.`
    },
    {
      period: `Week 3–4 (mono)`,
      detail: `Mononucleosis fatigue and lymphadenopathy commonly persist 2–4 weeks; full recovery may take 2–3 months. Avoid contact sports for 4 weeks due to splenic rupture risk.`
    }
  ],
  homeCare: [
    `Salt-water gargles 3–4 times daily — 1/2 teaspoon table salt in 8 oz warm water.`,
    `Hydration with cool or warm fluids; popsicles soothe.`,
    `Honey 1–2 teaspoons or in tea (small-trial benefit per Cochrane reviews).`,
    `Acetaminophen or ibuprofen on schedule for the first 48 hours.`,
    `Throat lozenges with menthol or benzocaine; numb-spray (Chloraseptic) for severe pain.`,
    `Rest and avoid talking when painful.`,
    `Cool-mist humidifier in the bedroom at night.`,
    `Replace toothbrush after 24 hours on antibiotics (avoids reinfection).`,
    `Wash hands; avoid sharing utensils, glasses, or food during the contagious period.`,
    `Stay home from work or school until 24 hours on antibiotics or 24 hours fever-free for viral pharyngitis.`
  ],
  faqs: [
    {
      question: `When should I worry about a sore throat that won't go away?`,
      answer: `See a clinician if it lasts longer than 7 days, you have fever above 101°F, white spots on tonsils, severe ear pain on one side, or trouble swallowing. Drooling, stridor, or muffled voice means the ER, not telehealth — those suggest peritonsillar abscess or epiglottitis.`
    },
    {
      question: `Can TeleDirectMD diagnose strep online?`,
      answer: `Yes for high or low Centor scores — clinical decision-making works well at the extremes. Mid-range cases benefit from a rapid antigen test, which can be done at home for $25–$50 (CVS sells a 2-pack) or via a brief in-person stop. Many patients resolve clinically without testing.`
    },
    {
      question: `What antibiotic is first-line for strep throat?`,
      answer: `Amoxicillin or penicillin V are first-line per IDSA guidelines, both about $9–$15 generic. Course is 10 days. Cephalexin is preferred for non-anaphylactic penicillin allergy. Azithromycin is reserved for true beta-lactam allergy because of rising macrolide resistance.`
    },
    {
      question: `How quickly will I feel better on antibiotics?`,
      answer: `Fever and pain typically improve within 24–48 hours of effective antibiotics. You are no longer contagious after 24 hours on antibiotics. Always finish the full 10-day course to prevent rare complications like rheumatic fever and post-streptococcal glomerulonephritis.`
    },
    {
      question: `What if it's not strep — do I still get treatment?`,
      answer: `Yes — for viral pharyngitis you get a clear plan: ibuprofen or acetaminophen on schedule, salt-water gargles, throat lozenges, hydration, and a return-precautions list. Antibiotics will not help and will not be prescribed.`
    },
    {
      question: `Could it be mono instead of strep?`,
      answer: `Yes — especially if you are 15–25 years old with severe fatigue, swollen lymph nodes throughout the neck (including the posterior chain), and a 'swollen' throat sensation lasting more than a week. The visit will refer for monospot or EBV antibody testing.`
    },
    {
      question: `How long is strep contagious?`,
      answer: `Untreated, strep is contagious for 2–3 weeks. With effective antibiotics, contagion drops dramatically after 24 hours of treatment, which is why most schools and workplaces use that as a return cutoff.`
    },
    {
      question: `Can a sore throat with cough still be strep?`,
      answer: `Cough makes strep much less likely — absence of cough is one of the four Centor criteria. A sore throat with cough is almost always viral. Antibiotics are not indicated when cough is part of the symptom package.`
    },
    {
      question: `What is a peritonsillar abscess?`,
      answer: `A pus collection between the tonsil and the pharyngeal muscle. It causes severe one-sided throat pain, muffled voice ('hot potato'), trismus (limited mouth opening), and uvula deviation. It needs in-person drainage and IV antibiotics — not telehealth.`
    },
    {
      question: `How much does a sore throat visit cost without insurance?`,
      answer: `$49 at TeleDirectMD; antibiotic (see medication table); total $58–$64. Compare to $185–$345 at urgent care including the strep test, or $99–$139 at CVS MinuteClinic per their public price list.`
    },
    {
      question: `Can I just take leftover antibiotics from a previous infection?`,
      answer: `Strongly discouraged. Partial courses fuel resistance, and the leftover antibiotic may not match the current pathogen. A 10-minute $49 visit gets you the right drug, the right dose, and the right duration.`
    },
    {
      question: `When is a tonsillectomy considered?`,
      answer: `Tonsillectomy is considered for recurrent strep (typically more than 7 episodes in 1 year, 5/year for 2 years, or 3/year for 3 years per Paradise criteria), recurrent peritonsillar abscess, or severe sleep apnea from tonsillar hypertrophy. Decision is made with an ENT in person.`
    },
    {
      question: `Does strep cause kidney damage or rheumatic fever?`,
      answer: `Acute rheumatic fever and post-streptococcal glomerulonephritis are very rare in the modern US (less than 1 case per 100,000 per year) and the main reason antibiotic treatment is offered. Most uncomplicated strep cases would resolve without antibiotics — but the small risk of complications justifies the 10-day course.`
    },
    {
      question: `Is COVID-19 a possible cause of my sore throat?`,
      answer: `Yes — sore throat is one of the most common COVID-19 symptoms, especially since the Omicron variants. The visit will ask about loss of taste/smell, exposures, and recent at-home test results. Most COVID-related sore throats are managed supportively.`
    }
  ],
  relatedSymptoms: [
    `strep-throat`,
    `sinus-infection`,
    `persistent-cough`,
    `ear-pain`,
    `cold-sore`
  ],
  references: [
    {
      label: `IDSA — Group A Streptococcal Pharyngitis Guidelines (2012, reaffirmed)`,
      url: `https://www.idsociety.org/practice-guideline/strep-throat/`
    },
    {
      label: `AAFP — Diagnosis and Treatment of Streptococcal Pharyngitis`,
      url: `https://www.aafp.org/pubs/afp/issues/2009/0301/p383.html`
    },
    {
      label: `Mayo Clinic — Strep throat`,
      url: `https://www.mayoclinic.org/diseases-conditions/strep-throat/symptoms-causes/syc-20350338`
    },
    {
      label: `CDC — Group A Strep Pharyngitis`,
      url: `https://www.cdc.gov/groupastrep/diseases-public/strep-throat.html`
    },
    {
      label: `NIH MedlinePlus — Mononucleosis`,
      url: `https://medlineplus.gov/mononucleosis.html`
    },
    {
      label: `GoodRx — Amoxicillin pricing`,
      url: `https://www.goodrx.com/amoxicillin`
    },
    {
      label: `Mira Health — Urgent care strep test cost`,
      url: `https://www.talktomira.com/post/how-much-does-a-strep-test-cost-at-urgent-care`
    },
    {
      label: `CVS MinuteClinic — Price list`,
      url: `https://www.cvs.com/minuteclinic/services/price-lists`
    }
  ],
  riskFactors: [
    `Close contact with strep cases`,
    `School / daycare exposure`,
    `Crowded living conditions`,
    `Age 5–25 (peak GAS years)`,
    `Smoking`,
    `Postnasal drip / chronic rhinitis`
  ],
  typicalTests: [
    `Rapid antigen detection test (RADT)`,
    `Throat culture`,
    `Monospot / EBV antibody panel`,
    `CBC with differential`
  ]
};

SYMPTOM_PAGES["acne-breakout"] = {
  slug: `acne-breakout`,
  pid: `sym-acne-breakout`,
  query: `how to get rid of acne fast`,
  h1: `How to Get Rid of an Acne Breakout — What a Family Doctor Actually Prescribes`,
  metaTitle: `How to Get Rid of Acne Fast — Prescription vs. OTC | TeleDirectMD`,
  metaDescription: `Bad acne breakouts respond best to prescription tretinoin, topical clindamycin, or oral doxycycline. $49 telehealth visit; same-day Rx. 41 states.`,
  breadcrumb: `Acne Breakout`,
  answerLead: `Getting rid of an acne breakout — what evidence supports:`,
  answerBody: `OTC benzoyl peroxide and adapalene clear most mild acne. <strong>Moderate-to-severe inflammatory breakouts respond best to prescription tretinoin plus topical clindamycin or oral doxycycline</strong> per <a href="https://www.aad.org/member/clinical-quality/guidelines/acne">AAD 2024 acne management guidelines</a>. A $49 TeleDirectMD video visit lets a board-certified MD start prescription therapy same day — most generics run (see medication table).`,
  symptomDef: {
    altNames: [
      `Acne vulgaris`,
      `Pimples`,
      `Zits`,
      `Comedones`,
      `Inflammatory acne`
    ],
    anatomy: `Pilosebaceous units of skin (face, back, chest, shoulders)`,
    treatment: `Topical retinoid + topical antibiotic / benzoyl peroxide; oral antibiotic for moderate-severe; hormonal therapy for women`,
    conditionDisplayName: `Acne vulgaris`
  },
  whatThisMeans: [
    `Acne forms when hair follicles become clogged with sebum (oil) and dead skin cells, allowing <em>Cutibacterium acnes</em> bacteria to multiply and trigger inflammation. Four pathogenic drivers — excess sebum, follicular hyperkeratinization, bacterial proliferation, and inflammation — each respond to different medications, which is why combination therapy works better than monotherapy.`,
    `Acne is graded as <strong>mild</strong> (mostly comedones — whiteheads/blackheads), <strong>moderate</strong> (papules and pustules), or <strong>severe</strong> (nodules, cysts, scarring). Mild acne usually responds to OTC topical adapalene 0.1% or benzoyl peroxide 2.5–10%. Moderate acne needs prescription topical retinoid + topical antibiotic or benzoyl peroxide. Severe or scarring acne needs oral antibiotics, hormonal therapy, or isotretinoin.`,
    `Adult acne is increasingly common, especially in women aged 20–40 with hormonal patterns (jawline distribution, monthly flares). Spironolactone has good evidence for hormonal female acne and is appropriate for telehealth prescribing in patients without contraindications.`,
    `Common myths: chocolate, greasy food, and dirty skin do not cause acne. Genetic predisposition, hormones, and follicular biology drive it. Aggressive scrubbing and harsh cleansers worsen acne by stripping the skin barrier.`
  ],
  differentials: [
    {
      name: `Comedonal acne (mild)`,
      description: `Predominantly whiteheads and blackheads with few inflammatory papules. T-zone distribution.`,
      prevalence: `Most common acne presentation in adolescents`,
      features: `Open and closed comedones; minimal redness; minimal pain.`,
      next: `Telehealth — topical adapalene + benzoyl peroxide; OTC adequate for many.`
    },
    {
      name: `Inflammatory papulopustular acne (moderate)`,
      description: `Red papules and pustules predominate. Often coexists with comedones.`,
      prevalence: `~40% of acne cases seek care`,
      features: `Red bumps and pustules; tender; predominantly cheeks, chin.`,
      next: `Telehealth — tretinoin + topical clindamycin or BP; oral doxycycline if severe.`
    },
    {
      name: `Nodular / cystic acne (severe)`,
      description: `Deep, painful, often-scarring nodules and cysts under the skin. High risk of permanent scarring.`,
      prevalence: `~10–15% of acne presentations`,
      features: `Deep, painful nodules; cysts; often jawline and cheeks; scars from prior lesions.`,
      next: `Telehealth for initial workup; refer to in-person dermatology for isotretinoin.`
    },
    {
      name: `Hormonal female acne`,
      description: `Adult-onset acne in women with jawline distribution and monthly flares. Often coexists with hirsutism or irregular periods.`,
      prevalence: `~50% of adult women with acne`,
      features: `Jawline / chin distribution; flares 1 week before menses; resistant to topical-only therapy.`,
      next: `Telehealth — spironolactone after labs; topical retinoid; consider combined OCP.`
    },
    {
      name: `Acne mimickers`,
      description: `Rosacea, perioral dermatitis, folliculitis, and pseudofolliculitis barbae can look like acne but require different treatment.`,
      prevalence: `Common misdiagnosis`,
      features: `Rosacea: flushing, central face, no comedones. Perioral dermatitis: papules around mouth/nose, often after topical steroid use.`,
      next: `Telehealth — diagnosis-specific therapy; some require ivermectin or different antibiotics.`
    }
  ],
  redFlags: [
    `Sudden severe cystic acne in an adult with no prior history — rule out hormonal cause (PCOS, androgen excess), medication trigger (steroids, lithium), or rare endocrine tumor`,
    `Painful nodules with fever, malaise, or arthritis — consider acne fulminans (rare)`,
    `Acne with significant scarring already forming — accelerate to isotretinoin via in-person dermatology`,
    `Acne suspicious for gram-negative folliculitis after long-term antibiotics`,
    `Hidradenitis suppurativa (deep abscesses in armpits, groin) — different disease requiring derm`
  ],
  eligibility: [
    `Adult age 18 or older located in one of 41 licensed states`,
    `Mild, moderate, or early severe acne`,
    `Not pregnant and not actively trying to conceive (tretinoin and tetracyclines are contraindicated; spironolactone is teratogenic)`,
    `No history of severe drug allergy to retinoids or tetracyclines`,
    `Able to upload clear photos of affected areas before or during the visit`,
    `Willing to commit to 8–12 weeks of consistent therapy`,
    `No active eczema, rosacea, or perioral dermatitis flare on the same area`,
    `Have a pharmacy where prescriptions can be sent`
  ],
  notEligibility: [
    `Severe nodulocystic or scarring acne — needs in-person dermatology and likely isotretinoin`,
    `Pregnant or actively trying to conceive — most acne medications are teratogenic`,
    `Acne fulminans (rare; severe systemic symptoms with skin)`,
    `Hidradenitis suppurativa — different disease, derm required`,
    `Acne not responding to 12+ weeks of well-conducted prescription therapy`
  ],
  howTelehealthHelps: [
    `Patient uploads 3–4 clear, well-lit photos of affected areas (cheeks, forehead, chin, back) before the visit. Live video used if photos are insufficient.`,
    `Dr. Bhavsar grades severity (mild / moderate / severe), identifies lesion types (comedones / papules / pustules / nodules / cysts), and assesses scarring.`,
    `Reviews triggers: medications (lithium, steroids, anabolic steroids), hormones (menstrual pattern, PCOS features), skincare regimen, family history.`,
    `First-line moderate inflammatory acne: tretinoin 0.025–0.05% nightly + benzoyl peroxide wash or topical clindamycin 1% morning. Set realistic expectation: 6–12 weeks for visible improvement.`,
    `If oral antibiotics are needed: doxycycline 100 mg twice daily × 12 weeks (preferred over minocycline due to side-effect profile). Always paired with topical therapy to avoid antibiotic monotherapy.`,
    `For hormonal pattern in women: spironolactone 50–100 mg daily after baseline potassium and creatinine labs.`,
    `Severe cystic or scarring acne: explicit referral to in-person dermatology for isotretinoin evaluation (requires monthly bloodwork and pregnancy testing via the iPLEDGE program).`,
    `Visit ends with written treatment plan, photo review, follow-up schedule (12 weeks), and side-effect counseling.`
  ],
  treatmentOptions: [
    {
      category: `OTC topical therapy (mild acne)`,
      detail: `Adapalene 0.1% gel (Differin OTC) nightly is the most evidence-based OTC retinoid. Benzoyl peroxide 2.5–10% wash or leave-on once daily reduces C. acnes. Salicylic acid 0.5–2% cleanser unclogs pores. Most mild comedonal acne clears with adapalene + benzoyl peroxide.`
    },
    {
      category: `Prescription topical retinoids`,
      detail: `Tretinoin 0.025% / 0.05% / 0.1% cream nightly (start low, titrate up). Adapalene 0.3% gel. Tazarotene 0.045% / 0.1%. Apply pea-sized amount to entire face (not just lesions) at bedtime; pair with broad-spectrum sunscreen daytime. Visible improvement: 6–12 weeks. Initial irritation expected.`
    },
    {
      category: `Topical antibiotics + benzoyl peroxide`,
      detail: `Clindamycin 1% solution or gel + benzoyl peroxide 5% (combination products like BenzaClin reduce resistance). Apply morning, after sunscreen. Always pair with retinoid at night. Avoid topical erythromycin (resistance is high).`
    },
    {
      category: `Oral antibiotics (moderate-severe inflammatory)`,
      detail: `Doxycycline 100 mg PO BID × 12 weeks is first-line. Alternative: minocycline 100 mg daily (rare side effects: pigmentation, lupus-like syndrome). Always combine with topical retinoid + benzoyl peroxide to prevent resistance. Course should not exceed 3–4 months without re-evaluation.`
    },
    {
      category: `Hormonal therapy (women)`,
      detail: `Spironolactone 50–100 mg daily for hormonal pattern in adult women (jawline, premenstrual flare). Monitor potassium and creatinine at baseline and 3 months. Combined oral contraceptives (ethinyl estradiol-containing) are also FDA-approved for acne. Avoid in pregnancy.`
    },
    {
      category: `Severe / referral`,
      detail: `Isotretinoin (Accutane) for severe nodulocystic or scarring acne — requires in-person dermatology, monthly labs, and iPLEDGE registration. 80%+ long-term remission rate. Not prescribed via telehealth.`
    },
    {
      category: `Skincare basics`,
      detail: `Gentle non-comedogenic cleanser twice daily. Non-comedogenic moisturizer (Cetaphil, CeraVe, Vanicream). Broad-spectrum SPF 30+ daily — required when on retinoids. No scrubbing; no harsh exfoliants. Don't pick or pop lesions.`
    }
  ],
  medications: [
    {
      generic: `tretinoin cream/gel`,
      brand: `Retin-A, Altreno, Atralin`,
      dosageForm: `topical cream/gel`,
      drugClass: `topical retinoid`,
      dose: `Pea-sized amount nightly`,
      price: `$29–$288`,
      priceSourceUrl: `https://www.goodrx.com/tretinoin`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Initial dryness, peeling, redness, photosensitivity; pregnancy contraindicated.`
    },
    {
      generic: `adapalene`,
      brand: `Differin`,
      dosageForm: `topical gel`,
      drugClass: `topical retinoid`,
      dose: `Pea-sized amount nightly`,
      price: `$13–$83`,
      priceSourceUrl: `https://www.goodrx.com/adapalene`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Initial irritation; photosensitivity; pregnancy category C.`
    },
    {
      generic: `clindamycin phosphate`,
      brand: `Cleocin-T, ClindaMax`,
      dosageForm: `topical solution / gel / lotion`,
      drugClass: `topical lincosamide antibiotic`,
      dose: `Apply twice daily`,
      price: `$14–$24`,
      priceSourceUrl: `https://www.goodrx.com/clindamycin`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Skin dryness; rare C. difficile colitis. Always pair with benzoyl peroxide.`
    },
    {
      generic: `doxycycline hyclate`,
      brand: `Vibramycin, Doryx`,
      dosageForm: `oral capsule/tablet`,
      drugClass: `tetracycline antibiotic`,
      dose: `100 mg PO BID × 12 weeks`,
      price: `$5–$80`,
      priceSourceUrl: `https://www.goodrx.com/doxycycline-hyclate`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Photosensitivity, GI upset, esophagitis (take with full glass of water and stay upright); contraindicated in pregnancy.`
    },
    {
      generic: `spironolactone`,
      brand: `Aldactone`,
      dosageForm: `oral tablet`,
      drugClass: `potassium-sparing diuretic / anti-androgen`,
      dose: `50–100 mg PO daily`,
      price: `$9–$16`,
      priceSourceUrl: `https://www.goodrx.com/spironolactone`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Hyperkalemia, breast tenderness, menstrual irregularity, dizziness. Monitor K+ and creatinine. Contraindicated in pregnancy.`
    }
  ],
  recovery: [
    {
      period: `Week 1–2 of treatment`,
      detail: `Initial irritation common with topical retinoids — dryness, peeling, redness. Use only every other night and apply moisturizer afterward. No visible acne improvement yet — sometimes a transient 'purge' (deeper lesions surfacing).`
    },
    {
      period: `Week 4–6`,
      detail: `Skin tolerating retinoid; daily use established. Mild reduction in new lesion formation. Existing lesions still healing.`
    },
    {
      period: `Week 8–12`,
      detail: `First clearly visible improvement on photographs. Existing inflammatory lesions resolving; new lesion formation reduced 30–50%.`
    },
    {
      period: `Month 4–6`,
      detail: `For oral antibiotic responders: significant clearing. Time to taper antibiotic and continue topical therapy alone. For non-responders, consider escalation to spironolactone (women) or in-person derm for isotretinoin.`
    },
    {
      period: `Maintenance`,
      detail: `Acne is chronic — most patients need ongoing topical retinoid (tretinoin or adapalene) to prevent recurrence. Stopping treatment too early is the leading cause of relapse.`
    }
  ],
  homeCare: [
    `Wash face twice daily with a gentle non-comedogenic cleanser (Cetaphil, CeraVe Foaming, Vanicream). No scrubbing.`,
    `Apply non-comedogenic moisturizer morning and night — even oily skin needs it, especially while on retinoids.`,
    `Daily broad-spectrum SPF 30+ sunscreen — non-negotiable on retinoids and oral antibiotics.`,
    `Avoid picking, popping, or squeezing lesions — drives scarring and post-inflammatory hyperpigmentation.`,
    `Change pillowcases twice weekly; clean phone screen daily.`,
    `Don't share makeup; replace makeup brushes every 3 months and clean weekly.`,
    `Use 'non-comedogenic' or 'oil-free' makeup, sunscreen, and moisturizers.`,
    `Don't over-exfoliate — at most a gentle chemical exfoliant 1–2 times per week.`,
    `Limit known triggers if you notice them: whey protein supplements, some hair pomades, chronic friction (helmets, masks).`,
    `Take photos every 4 weeks to track progress objectively — month-to-month change is hard to see in the mirror.`
  ],
  faqs: [
    {
      question: `How fast can prescription acne treatment work?`,
      answer: `Topical tretinoin: visible improvement in 6–12 weeks. Oral doxycycline: 4–8 weeks for inflammatory lesions. Spironolactone: 8–16 weeks. Isotretinoin: 4–6 months for full clearance. There is no overnight fix; setting realistic expectations is part of every visit.`
    },
    {
      question: `Can I get a tretinoin prescription online?`,
      answer: `Yes. TeleDirectMD's $49 visit covers tretinoin 0.025% to 0.1% for chronic acne. Generic tretinoin runs (see medication table). Brand-name Retin-A, Altreno, or Atralin can run $200+ even with insurance. Most patients use generic cream successfully.`
    },
    {
      question: `What's the difference between OTC and prescription retinoids?`,
      answer: `OTC adapalene 0.1% (Differin Gel) is genuinely effective and cheaper than most prescriptions ($13). Prescription tretinoin and adapalene 0.3% are stronger and faster but require a prescription. For mild acne, OTC adapalene is a reasonable first choice.`
    },
    {
      question: `Does benzoyl peroxide bleach fabrics?`,
      answer: `Yes — benzoyl peroxide oxidizes dyes and will bleach colored sheets, pillowcases, towels, and shirts. Use white cotton bedding while on benzoyl peroxide and let it dry fully before bed.`
    },
    {
      question: `Are oral antibiotics safe to take long-term for acne?`,
      answer: `Oral antibiotics for acne are typically used for 12 weeks and should not exceed 3–4 months without re-evaluation. Long-term courses drive antibiotic resistance and gut-microbiome disruption. Always pair with topical retinoid + benzoyl peroxide to reduce resistance.`
    },
    {
      question: `Will telehealth treat hormonal acne in women?`,
      answer: `Yes. Spironolactone is appropriate for adult women with a hormonal pattern (jawline distribution, premenstrual flares) and no contraindications. Baseline potassium and creatinine labs are ordered through a local lab. Combined oral contraceptives are another option.`
    },
    {
      question: `How much does prescription acne treatment cost?`,
      answer: `$49 for the TeleDirectMD visit. Generic tretinoin: $24–$70/month. Generic doxycycline: $15/month. Spironolactone: $10–$30/month. Most patients on combinations spend (see medication table) — far less than a single in-person derm visit.`
    },
    {
      question: `When should I see a dermatologist instead of telehealth?`,
      answer: `If you have cystic or scarring acne, treatment-resistant moderate acne after 12+ weeks of well-conducted prescription therapy, or you are a candidate for isotretinoin. Isotretinoin requires in-person derm with monthly bloodwork and the iPLEDGE program.`
    },
    {
      question: `Can stress cause acne breakouts?`,
      answer: `Indirectly, yes. Stress raises cortisol and androgens, which can trigger sebum production and inflammatory flares. Managing sleep and stress helps but is not a substitute for medical therapy in moderate-to-severe acne.`
    },
    {
      question: `Does diet affect acne?`,
      answer: `High-glycemic-load diets and skim milk have moderate evidence for triggering acne in susceptible patients per AAD guidelines. Whey protein supplements often worsen acne. Low-glycemic diet may help; the effect is modest compared to topical and oral therapy.`
    },
    {
      question: `Will my acne come back after I stop treatment?`,
      answer: `Acne is chronic; most patients need ongoing topical retinoid (tretinoin or adapalene) for maintenance to prevent recurrence. Stopping all therapy too early is the leading cause of relapse. Isotretinoin offers ~80% long-term remission.`
    },
    {
      question: `Can I get a same-day acne prescription?`,
      answer: `Yes. Most patients booking before 6 PM get a same-day prescription sent to their pharmacy. Photos uploaded with the booking speed the visit. Refills for stable acne therapy are routine $49 visits.`
    },
    {
      question: `How do I know if it's actually rosacea, not acne?`,
      answer: `Rosacea is centered on the nose and cheeks with flushing and small papules but no comedones. Acne has whiteheads and blackheads. Rosacea responds to ivermectin cream, metronidazole, or oral doxycycline at sub-antimicrobial dose. Photo upload helps distinguish them.`
    },
    {
      question: `Do popular skincare TikTok routines (10-step, slugging) help?`,
      answer: `Most don't. Aggressive multi-product routines can disrupt the skin barrier and worsen acne. Evidence supports a simple regimen: gentle cleanser, retinoid at night, moisturizer, sunscreen by day. More products usually means more irritation.`
    }
  ],
  relatedSymptoms: [
    `cystic-acne`,
    `skin-rash`,
    `cold-sore`,
    `birth-control`
  ],
  references: [
    {
      label: `AAD — Acne Management Guidelines (2024)`,
      url: `https://www.aad.org/member/clinical-quality/guidelines/acne`
    },
    {
      label: `AAD — Acne Patient Information`,
      url: `https://www.aad.org/public/diseases/acne/`
    },
    {
      label: `AAFP — Diagnosis and Treatment of Acne`,
      url: `https://www.aafp.org/pubs/afp/issues/2019/1015/p475.html`
    },
    {
      label: `NIH MedlinePlus — Acne`,
      url: `https://medlineplus.gov/acne.html`
    },
    {
      label: `Mayo Clinic — Acne`,
      url: `https://www.mayoclinic.org/diseases-conditions/acne/symptoms-causes/syc-20368047`
    },
    {
      label: `GoodRx — Tretinoin pricing`,
      url: `https://www.goodrx.com/tretinoin`
    },
    {
      label: `GoodRx — Doxycycline pricing`,
      url: `https://www.goodrx.com/doxycycline-hyclate`
    },
    {
      label: `Cochrane — Spironolactone for acne in women`,
      url: `https://www.cochrane.org/CD009633`
    }
  ],
  riskFactors: [
    `Adolescence (peak 12–24)`,
    `Family history`,
    `Hormonal patterns (PCOS, premenstrual)`,
    `Certain medications (lithium, steroids, anabolics)`,
    `High-glycemic diet`,
    `Oily/comedogenic cosmetics`
  ],
  typicalTests: [
    `Photo grading (gold standard for severity)`,
    `Hormonal labs (testosterone, DHEA-S) if PCOS suspected`,
    `Baseline potassium / creatinine before spironolactone`,
    `Pregnancy test before retinoids in women of childbearing potential`
  ]
};

SYMPTOM_PAGES["burning-urination"] = {
  slug: `burning-urination`,
  pid: `sym-burning-urination`,
  query: `burning when I pee`,
  h1: `Burning When You Pee — A Family Doctor's Guide to UTIs and What Else Could Be Going On`,
  metaTitle: `Burning When You Pee — UTI Symptoms, Treatment, Cost | TeleDirectMD`,
  metaDescription: `Burning urination is most often a UTI in women. Telehealth visit + antibiotic = $50–$115 total. Same-day Rx in 41 states. No urinalysis required for uncomplicated cases.`,
  breadcrumb: `Burning When You Pee`,
  answerLead: `Burning when you urinate — what it usually means:`,
  answerBody: `In adult, non-pregnant women, burning when you urinate (dysuria) with frequency and urgency is most often <strong>uncomplicated bladder infection (cystitis)</strong>. Per <a href="https://www.idsociety.org/practice-guideline/uncomplicated-cystitis-and-pyelonephritis-uti/">IDSA guidelines</a>, empiric antibiotics without urinalysis are appropriate for the classic clinical picture. A $49 TeleDirectMD video visit with a board-certified MD; nitrofurantoin runs (see medication table).`,
  symptomDef: {
    altNames: [
      `Dysuria`,
      `Painful urination`,
      `Stinging urination`
    ],
    anatomy: `Lower urinary tract (bladder, urethra)`,
    treatment: `Oral antibiotic (nitrofurantoin, trimethoprim-sulfamethoxazole, or fosfomycin)`,
    conditionDisplayName: `Urinary tract infection (cystitis)`
  },
  whatThisMeans: [
    `Dysuria — burning during urination — is the hallmark symptom of urinary tract infection. In an adult woman with the classic triad of dysuria + urinary frequency + urgency and no vaginal discharge, the probability of UTI is over 90% per AAFP review of clinical decision rules.`,
    `<strong>Uncomplicated cystitis</strong> is a UTI in a non-pregnant, non-immunosuppressed adult woman without anatomical urinary abnormalities. Empiric antibiotic therapy without urinalysis is supported by IDSA, AUA, and EAU guidelines because the diagnosis is largely clinical.`,
    `<strong>Complicated UTI</strong> includes any UTI in a man, pregnant woman, child, immunocompromised patient, recent urinary instrumentation, or with structural abnormalities (kidney stones, indwelling catheter). These require urinalysis, culture, and often longer courses.`,
    `Other causes of dysuria: vulvovaginal candidiasis (with itching, discharge), STIs (chlamydia, gonorrhea, trichomoniasis, herpes), atrophic vaginitis (postmenopausal), interstitial cystitis (chronic pelvic pain syndrome), and kidney stones. Visit history sorts these.`,
    `<strong>Pyelonephritis</strong> (kidney infection) is a more serious upper-tract UTI, often presenting with flank pain, fever, chills, nausea, and vomiting. Pyelonephritis typically warrants in-person evaluation; some uncomplicated cases can be managed outpatient with fluoroquinolone or IM ceftriaxone followed by oral antibiotics.`
  ],
  differentials: [
    {
      name: `Uncomplicated bladder infection (cystitis)`,
      description: `Lower UTI in non-pregnant adult women. Treated empirically without urinalysis per IDSA.`,
      prevalence: `~50% of women have ≥1 UTI in lifetime; 12% per year for 18–24-year-olds`,
      features: `Dysuria + frequency + urgency + suprapubic discomfort; no fever; no flank pain.`,
      next: `Telehealth — empiric nitrofurantoin or Bactrim × 5 days.`
    },
    {
      name: `Pyelonephritis (kidney infection)`,
      description: `Upper UTI involving kidneys. Higher morbidity than cystitis. Some cases need IV antibiotics.`,
      prevalence: `~250,000 cases/year in US`,
      features: `Flank pain + fever > 38°C + nausea/vomiting + costovertebral angle tenderness; can have dysuria too.`,
      next: `ER or in-person urgent care — needs urinalysis, culture, possibly imaging.`
    },
    {
      name: `Vulvovaginal candidiasis`,
      description: `Yeast infection causing burning with urination as urine touches inflamed vulvar skin.`,
      prevalence: `~75% of women have ≥1 episode lifetime`,
      features: `Itching + thick white discharge + vulvar erythema; no urinary urgency or frequency.`,
      next: `Telehealth — fluconazole 150 mg PO or topical antifungal.`
    },
    {
      name: `STI urethritis (chlamydia, gonorrhea)`,
      description: `Sexually transmitted urethritis can mimic UTI. Important to consider in sexually active women, especially with new partner or recent unprotected sex.`,
      prevalence: `~1.6 million chlamydia cases/year in US`,
      features: `Dysuria + pelvic pain + abnormal discharge ± post-coital bleeding. Often no urinary frequency.`,
      next: `Telehealth + lab referral for NAAT testing of cervix/urine.`
    },
    {
      name: `Interstitial cystitis / bladder pain syndrome`,
      description: `Chronic non-infectious bladder pain syndrome. Cultures negative.`,
      prevalence: `Up to 12% of women experience symptoms`,
      features: `Chronic pelvic pain + frequency + urgency without infection on cultures.`,
      next: `Telehealth screening; urology referral for confirmation and management.`
    },
    {
      name: `UTI in men`,
      description: `Uncommon under age 50. When present, almost always complicated and warrants workup.`,
      prevalence: `~12% lifetime risk in men`,
      features: `Same urinary symptoms; often with prostatitis features (perineal pain, fever).`,
      next: `In-person evaluation with urinalysis, culture, prostate exam.`
    }
  ],
  redFlags: [
    `Fever ≥ 38°C (100.4°F), chills, flank pain, or costovertebral angle tenderness — pyelonephritis`,
    `Nausea / vomiting with urinary symptoms`,
    `Visible blood in urine (gross hematuria)`,
    `Pregnancy with any UTI symptoms — urinalysis and culture-confirmed treatment required (asymptomatic bacteriuria treated in pregnancy)`,
    `Recurrent UTI within the past 4 weeks (≥2 in 6 months or ≥3 in 12 months)`,
    `Male patient with UTI symptoms — uncommon; warrants in-person workup`,
    `Indwelling catheter or recent urinary instrumentation`,
    `Diabetes with poor glycemic control`,
    `Severely immunocompromised (chemotherapy, transplant, advanced HIV)`
  ],
  eligibility: [
    `Adult, non-pregnant woman age 18 or older`,
    `Located in one of the 41 licensed states`,
    `Symptoms ≤ 7 days of dysuria, frequency, urgency`,
    `No fever, flank pain, or vomiting`,
    `No vaginal discharge or vulvar itching`,
    `Not pregnant and not actively trying to conceive`,
    `Not immunocompromised`,
    `Have a pharmacy where the antibiotic can be sent`,
    `First UTI or first UTI in the past 4 weeks (recurrent UTIs need additional workup)`
  ],
  notEligibility: [
    `Pregnancy with UTI — needs in-person urinalysis and culture (asymptomatic bacteriuria still treated in pregnancy)`,
    `Fever, flank pain, vomiting — pyelonephritis suspected; ER or in-person urgent care`,
    `Visible blood in urine — needs imaging and possibly urology`,
    `Male patient — UTI in men is uncommon; needs in-person workup`,
    `Recurrent UTI (≥3 in 12 months or ≥2 in 6 months) — needs cultures and possibly imaging`,
    `Indwelling catheter or recent urinary instrumentation`,
    `Severely immunocompromised patient`
  ],
  howTelehealthHelps: [
    `Dr. Bhavsar takes a focused UTI history: symptom onset, presence of fever or flank pain, vaginal discharge or itching, sexual history, contraception, pregnancy status, prior UTIs, and last menstrual period.`,
    `For uncomplicated lower UTI in non-pregnant women, IDSA guidelines support empiric antibiotic prescribing without urinalysis. The diagnosis is clinical when classic symptoms are present and no red flags exist.`,
    `First-line antibiotics: nitrofurantoin (Macrobid) 100 mg PO BID × 5 days, OR trimethoprim-sulfamethoxazole (Bactrim DS) 1 tab PO BID × 3 days where local E. coli resistance is < 20%, OR fosfomycin 3 g PO × 1 dose. All are see the medication table.`,
    `Symptomatic relief: phenazopyridine (Pyridium / AZO) 100–200 mg PO TID × 2 days for severe dysuria — note this turns urine bright orange.`,
    `Patients with red flags (fever, flank pain, vomiting, pregnancy, male, recurrent) are redirected to in-person care or the ER.`,
    `Follow-up plan: contact us in 48–72 hours if symptoms have not improved. Persistent symptoms after appropriate antibiotic warrant urinalysis and culture for resistance — telehealth can order this through a local lab.`,
    `Recurrent UTI prevention counseling: post-coital voiding, hydration, vaginal estrogen for postmenopausal women, methenamine hippurate, and discussion of post-coital prophylactic antibiotic if pattern is sex-related.`
  ],
  treatmentOptions: [
    {
      category: `First-line antibiotics (uncomplicated UTI)`,
      detail: `Nitrofurantoin (Macrobid) 100 mg twice daily × 5 days is the IDSA first choice — narrow-spectrum, low resistance, no kidney concentration. Avoid in CrCl < 30. Trimethoprim-sulfamethoxazole (Bactrim DS) 1 tab twice daily × 3 days where local E. coli resistance is < 20%. Fosfomycin (Monurol) 3 g × 1 dose for convenience.`
    },
    {
      category: `Alternative / second-line antibiotics`,
      detail: `Cephalexin 500 mg twice daily × 5–7 days. Cefdinir 300 mg twice daily × 5 days. Amoxicillin-clavulanate (Augmentin) 875 mg twice daily × 5–7 days. Fluoroquinolones (ciprofloxacin) reserved for complicated UTI or pyelonephritis due to side effects and resistance.`
    },
    {
      category: `Symptomatic relief`,
      detail: `Phenazopyridine (AZO Standard, Pyridium) 100–200 mg three times daily × 1–2 days for dysuria. Turns urine and contact-lenses orange. Don't use for more than 2 days. Acetaminophen or ibuprofen for general discomfort.`
    },
    {
      category: `Hydration`,
      detail: `Drink 2–3 liters of water daily. Cranberry juice and supplements have weak evidence; not a substitute for antibiotics in active infection but may have small benefit for prevention in some women.`
    },
    {
      category: `Recurrent UTI prevention`,
      detail: `Post-coital voiding. Vaginal estrogen for postmenopausal women (best evidence for recurrence prevention). Methenamine hippurate 1 g BID. Post-coital antibiotic prophylaxis (single-dose nitrofurantoin or Bactrim) for sex-related recurrence. Daily prophylactic antibiotic for 6 months for severe recurrent UTI.`
    },
    {
      category: `When to escalate`,
      detail: `Symptoms not improving in 48–72 hours: get a urinalysis with culture for resistance. Pyelonephritis: oral fluoroquinolone or IM ceftriaxone followed by oral antibiotic, or ER if vomiting/septic features.`
    }
  ],
  medications: [
    {
      generic: `nitrofurantoin monohydrate / macrocrystals`,
      brand: `Macrobid`,
      dosageForm: `oral capsule`,
      drugClass: `nitrofuran antibiotic`,
      dose: `100 mg PO BID × 5 days`,
      price: `$6–$35`,
      priceSourceUrl: `https://www.goodrx.com/nitrofurantoin-mono-macro`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `GI upset; avoid in CrCl < 30 (ineffective and risk pulmonary toxicity).`
    },
    {
      generic: `trimethoprim-sulfamethoxazole`,
      brand: `Bactrim DS, Septra DS`,
      dosageForm: `oral tablet`,
      drugClass: `sulfa antibiotic`,
      dose: `1 DS tab PO BID × 3 days`,
      price: `$2–$13`,
      priceSourceUrl: `https://www.goodrx.com/septra`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Sulfa rash; hyperkalemia; check creatinine; avoid in pregnancy at term.`
    },
    {
      generic: `fosfomycin`,
      brand: `Monurol`,
      dosageForm: `oral granules (single dose)`,
      drugClass: `phosphonic-acid antibiotic`,
      dose: `3 g PO × 1 dose`,
      price: `$33–$99`,
      priceSourceUrl: `https://www.goodrx.com/fosfomycin`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Diarrhea, nausea; convenient single dose.`
    },
    {
      generic: `cephalexin`,
      brand: `Keflex`,
      dosageForm: `oral capsule`,
      drugClass: `first-generation cephalosporin`,
      dose: `500 mg PO BID × 5–7 days`,
      price: `$8–$37`,
      priceSourceUrl: `https://www.goodrx.com/cephalexin`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Diarrhea; mild rash; ~2% cross-reactivity with severe penicillin allergy.`
    },
    {
      generic: `phenazopyridine`,
      brand: `AZO Standard, Pyridium`,
      dosageForm: `oral tablet`,
      drugClass: `urinary analgesic`,
      dose: `100–200 mg PO TID × 1–2 days`,
      price: `$3–$37`,
      priceSourceUrl: `https://www.goodrx.com/phenazopyridine`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Orange-red urine and contact lens staining; not an antibiotic; max 2 days.`
    }
  ],
  recovery: [
    {
      period: `First 24 hours of antibiotics`,
      detail: `Most patients feel symptomatic improvement within 24 hours of starting nitrofurantoin or Bactrim. Phenazopyridine helps with the burning sensation independently.`
    },
    {
      period: `Day 2–3`,
      detail: `Burning, frequency, and urgency continue improving rapidly. Phenazopyridine can be stopped after 2 days.`
    },
    {
      period: `Day 5`,
      detail: `End of nitrofurantoin course. Symptoms should be fully resolved or nearly so. Persistent symptoms warrant urinalysis and culture for resistance.`
    },
    {
      period: `Week 1–2`,
      detail: `If symptoms recurred or never resolved, telehealth follow-up. Urine culture orders, possible alternative antibiotic, or referral for further workup.`
    },
    {
      period: `Recurrent UTI follow-up`,
      detail: `Two or more UTIs in 6 months, or three or more in 12 months — get post-treatment culture, identify pattern (post-coital, postmenopausal), and start prevention strategy. Possibly refer to urology for imaging or cystoscopy.`
    }
  ],
  homeCare: [
    `Increase water intake to 2–3 liters daily during and after the infection.`,
    `Empty the bladder fully each time; double-void if helpful.`,
    `Urinate after sexual intercourse (post-coital voiding has good prevention evidence).`,
    `Wipe front to back after using the toilet.`,
    `Avoid bubble baths, scented feminine washes, and douches.`,
    `Switch from spermicidal contraception (diaphragm, spermicide-coated condoms) — these increase UTI risk.`,
    `Cotton underwear; avoid prolonged time in wet swimsuits or workout clothes.`,
    `Phenazopyridine (AZO) for symptom relief in the first 1–2 days only — not a substitute for antibiotic.`,
    `Cranberry products have weak evidence; not a treatment but possibly modest prevention benefit.`,
    `Postmenopausal women: discuss vaginal estrogen with your clinician — strong evidence for recurrent-UTI prevention.`
  ],
  faqs: [
    {
      question: `Is burning when I pee always a UTI?`,
      answer: `Most commonly yes in adult women with classic symptoms (dysuria + frequency + urgency, no discharge), but it can also be yeast infection, STI, atrophic vaginitis, kidney stone, or interstitial cystitis. The visit history and symptom pattern distinguish them.`
    },
    {
      question: `Can I treat a UTI without seeing a doctor?`,
      answer: `No — UTIs require a prescription antibiotic. Cranberry juice and OTC phenazopyridine (AZO) only relieve symptoms. They do not treat the infection. Untreated UTIs can ascend to the kidneys and cause pyelonephritis or sepsis.`
    },
    {
      question: `Does TeleDirectMD prescribe antibiotics for UTI?`,
      answer: `Yes. For uncomplicated lower UTI in adult, non-pregnant women, antibiotics like nitrofurantoin or Bactrim DS are prescribed empirically after a $49 video visit. Same-day to your pharmacy of choice.`
    },
    {
      question: `Is a urine test required for UTI treatment?`,
      answer: `Not for an uncomplicated lower UTI in adult, non-pregnant women per IDSA guidelines. Empiric treatment is standard. Tests are ordered for recurrent UTI, complicated infection, atypical symptoms, or treatment failure.`
    },
    {
      question: `How much does UTI treatment cost online?`,
      answer: `Total $50–$115: $49 visit + low-cost generic antibiotics (see medication table). Compare to $160–$320 urgent care and $1,200–$3,000+ ER per BetterCare 2025.`
    },
    {
      question: `When should I go to the ER for a UTI?`,
      answer: `Go to the ER if you have fever, chills, flank or back pain, vomiting, blood in urine, are pregnant, are severely immunocompromised, or have recurrent UTI within 4 weeks. These suggest kidney involvement or complicated infection.`
    },
    {
      question: `Can men have UTIs treated by telehealth?`,
      answer: `Generally no. UTI in men is uncommon and almost always warrants an in-person workup with urinalysis, culture, and prostate exam to rule out prostatitis. We will redirect to urgent care or your PCP.`
    },
    {
      question: `What if my UTI symptoms don't improve in 48 hours?`,
      answer: `Contact us within 48–72 hours if symptoms persist. We will either change antibiotics (some bacteria are resistant — especially to Bactrim in many regions) or refer for in-person urinalysis and culture to identify the pathogen.`
    },
    {
      question: `Why does my urine look orange after taking AZO?`,
      answer: `Phenazopyridine (AZO) is a urinary analgesic dye. It turns urine bright orange-red and can stain contact lenses. The discoloration is harmless and resolves within 24–48 hours after stopping. Do not use phenazopyridine for more than 2 days.`
    },
    {
      question: `Are recurrent UTIs treatable through telehealth?`,
      answer: `The first acute episode is — but recurrent UTIs (≥2 in 6 months or ≥3 in 12 months) need urinalysis with culture, identification of the trigger pattern (post-coital, postmenopausal), and a structured prevention plan. Most prevention strategies can be set up via telehealth after initial cultures.`
    },
    {
      question: `Is sex causing my UTIs?`,
      answer: `Sexual activity is the strongest UTI risk factor in pre-menopausal women — friction promotes bacterial entry into the urethra. Post-coital voiding within 30 minutes reduces recurrence. Avoiding spermicidal contraception also helps. Post-coital prophylactic antibiotic is an option for severe recurrence.`
    },
    {
      question: `Can I get a UTI from holding my pee?`,
      answer: `Possibly — bacterial multiplication in stagnant urine is a risk factor. Urinate when you feel the urge, especially after intercourse. Hydration and regular voiding help prevent UTI.`
    },
    {
      question: `Will probiotics or D-mannose prevent UTI recurrence?`,
      answer: `D-mannose has limited but suggestive evidence for preventing E. coli UTI in women with recurrence. Probiotics (oral lactobacillus) have weak evidence. Both are reasonable adjuncts but not substitutes for antibiotics in active infection.`
    },
    {
      question: `Do I need to retest urine after the antibiotic course?`,
      answer: `Not for uncomplicated UTI if symptoms fully resolved. Retest is recommended for pregnant women (test of cure), recurrent UTI evaluation, or persistent symptoms despite treatment.`
    }
  ],
  relatedSymptoms: [
    `yeast-infection`,
    `birth-control`,
    `sinus-infection`
  ],
  references: [
    {
      label: `IDSA / EAU — Uncomplicated UTI Guidelines`,
      url: `https://www.idsociety.org/practice-guideline/uncomplicated-cystitis-and-pyelonephritis-uti/`
    },
    {
      label: `AAFP — UTI Diagnosis and Treatment`,
      url: `https://www.aafp.org/pubs/afp/issues/2020/1101/p540.html`
    },
    {
      label: `Mayo Clinic — UTI`,
      url: `https://www.mayoclinic.org/diseases-conditions/urinary-tract-infection/symptoms-causes/syc-20353447`
    },
    {
      label: `AUA — Recurrent UTI Guideline`,
      url: `https://www.auanet.org/guidelines-and-quality/guidelines/recurrent-uti`
    },
    {
      label: `NIH MedlinePlus — UTI`,
      url: `https://medlineplus.gov/urinarytractinfections.html`
    },
    {
      label: `GoodRx — Nitrofurantoin pricing`,
      url: `https://www.goodrx.com/nitrofurantoin-mono-macro`
    },
    {
      label: `Mira Health — UTI / Urgent care cost (2025)`,
      url: `https://www.talktomira.com/post/how-much-does-urgent-care-cost-without-insurance`
    },
    {
      label: `BetterCare — ER visit cost (April 2025)`,
      url: `https://bettercare.com/costs/er-visit-cost`
    }
  ],
  riskFactors: [
    `Sexual activity`,
    `Spermicide use`,
    `Postmenopausal estrogen deficiency`,
    `Prior UTI`,
    `Diabetes`,
    `Immobility / catheter use`,
    `Pregnancy`
  ],
  typicalTests: [
    `Urinalysis with microscopy`,
    `Urine culture and sensitivity`,
    `Renal/bladder ultrasound (recurrent UTI)`,
    `STI NAAT panel`,
    `Vaginal swab/wet mount`
  ]
};

SYMPTOM_PAGES["allergy-symptoms"] = {
  slug: `allergy-symptoms`,
  pid: `sym-allergy`,
  query: `itchy eyes and runny nose`,
  h1: `Itchy Eyes and Runny Nose — Is It Allergies, a Cold, or Something Else?`,
  metaTitle: `Itchy Eyes & Runny Nose — Allergies vs. Cold | TeleDirectMD`,
  metaDescription: `Itchy eyes + runny nose without fever is usually allergic rhinitis. Prescription antihistamines, nasal steroids, and eye drops via $49 telehealth visit. 41 states.`,
  breadcrumb: `Itchy Eyes and Runny Nose`,
  answerLead: `Itchy eyes and runny nose — what it usually is:`,
  answerBody: `Itchy eyes plus a clear runny nose without fever is most often <strong>allergic rhinitis</strong> (hay fever) per <a href="https://acaai.org/allergies/allergic-conditions/hay-fever/">ACAAI guidance</a>. Prescription nasal steroids (fluticasone), oral antihistamines (cetirizine, levocetirizine), and prescription antihistamine eye drops resolve symptoms for most patients. <strong>$49 telehealth visit</strong>; generics (see medication table).`,
  symptomDef: {
    altNames: [
      `Allergic rhinitis`,
      `Hay fever`,
      `Seasonal allergies`,
      `Allergic conjunctivitis`
    ],
    anatomy: `Nasal mucosa, conjunctiva`,
    treatment: `Intranasal corticosteroid + oral antihistamine + antihistamine eye drops`,
    conditionDisplayName: `Seasonal / allergic rhinitis`
  },
  whatThisMeans: [
    `<strong>Itchy is the key word.</strong> Colds and viral URIs rarely make the eyes itchy. Allergic rhinitis is an IgE-mediated hypersensitivity reaction — pollen, dust mites, pet dander, cockroach allergen, or mold spores trigger mast-cell histamine release in the nasal mucosa and conjunctiva.`,
    `Telltale pattern: clear watery rhinorrhea, sneezing in clusters, itchy eyes/nose/palate, post-nasal drip; no fever, no body aches, often worse outdoors during specific seasons or in specific environments (a friend's apartment with cats, a damp basement).`,
    `Allergic rhinitis affects roughly 20–30% of US adults and 40% of children per CDC and ACAAI data. Many patients have coexisting allergic conjunctivitis, allergic asthma, or atopic dermatitis (the 'atopic march').`,
    `OTC second-generation antihistamines (loratadine, cetirizine, fexofenadine) help mild cases. For moderate-to-severe symptoms, prescription nasal steroids (fluticasone, mometasone) are first-line per ARIA and AAAAI guidelines and are usually more effective than oral antihistamines alone.`
  ],
  differentials: [
    {
      name: `Seasonal allergic rhinitis`,
      description: `Spring/fall flares from tree, grass, or weed pollen. Symptoms predictable by season.`,
      prevalence: `~20% of US adults`,
      features: `Clear rhinorrhea, sneezing, itchy eyes/nose; seasonal pattern; outdoor trigger.`,
      next: `Telehealth — intranasal steroid + antihistamine.`
    },
    {
      name: `Perennial allergic rhinitis`,
      description: `Year-round symptoms from indoor allergens — dust mites, pet dander, mold, cockroach.`,
      prevalence: `~10% of US adults`,
      features: `Year-round; worse in bedroom; pet exposure correlation.`,
      next: `Telehealth — daily intranasal steroid; allergen avoidance counseling; consider allergist for testing.`
    },
    {
      name: `Vasomotor (non-allergic) rhinitis`,
      description: `Non-IgE-mediated rhinitis triggered by temperature change, odors, alcohol, or hormonal changes.`,
      prevalence: `Common in adults > 30`,
      features: `Clear runny nose without itching; triggered by cold air, perfume, spicy food.`,
      next: `Telehealth — intranasal ipratropium or steroid.`
    },
    {
      name: `Viral upper respiratory infection (cold)`,
      description: `Self-limited viral illness lasting 7–10 days. Sometimes confused with allergies.`,
      prevalence: `Adults: 2–3 colds/year average`,
      features: `Sore throat first, then runny nose; possible low-grade fever; body aches; resolves in 7–10 days.`,
      next: `Telehealth or supportive care; antibiotics not indicated.`
    },
    {
      name: `Allergic conjunctivitis`,
      description: `IgE-mediated eye-only allergy. Often coexists with rhinitis.`,
      prevalence: `~30% of patients with allergic rhinitis`,
      features: `Itchy, watery, red eyes; bilateral; no purulent discharge.`,
      next: `Telehealth — antihistamine eye drops + oral antihistamine.`
    }
  ],
  redFlags: [
    `Wheezing, shortness of breath, or chest tightness — concurrent asthma exacerbation`,
    `Severe facial swelling, throat tightness, or hives — anaphylaxis (call 911)`,
    `Severe one-sided eye pain or vision change — not allergic; could be acute angle-closure glaucoma or uveitis`,
    `High fever (> 101°F) — suggests infection, not allergy`,
    `Purulent (yellow-green) eye discharge that mats lashes shut — bacterial conjunctivitis`,
    `Symptoms not responding to combined nasal steroid + antihistamine for 2+ weeks despite adherence`,
    `Allergic reaction with stridor or dysphagia — emergency`
  ],
  eligibility: [
    `Adult age 18 or older located in one of 41 licensed states`,
    `Symptoms consistent with allergic rhinitis or allergic conjunctivitis`,
    `No wheezing or shortness of breath`,
    `No fever above 101°F`,
    `No purulent eye discharge or severe eye pain`,
    `Have not had recent severe anaphylactic reaction requiring epinephrine`,
    `Willing to commit to daily preventive therapy if needed`,
    `Have a pharmacy where prescriptions can be sent`
  ],
  notEligibility: [
    `Anaphylaxis (call 911) or recurrent severe allergic reactions — needs allergist and EpiPen`,
    `Acute asthma exacerbation with significant breathing difficulty — ER`,
    `Severe one-sided eye pain or vision changes — needs in-person ophthalmology`,
    `Suspected bacterial conjunctivitis with purulent discharge — different treatment path`,
    `Symptoms not responding to standard therapy after 2+ weeks — refer to allergist`
  ],
  howTelehealthHelps: [
    `Dr. Bhavsar takes an allergy-focused history: symptom timing (seasonal vs. year-round), triggers (outdoor pollen, pets, dust), severity, prior treatments tried, asthma symptoms, atopic dermatitis, family history.`,
    `Inspects the conjunctivae, nasal turbinates (when visible), and pharynx via video. Looks for the 'allergic shiner' (dark under-eye circles), nasal crease, and pale/boggy nasal mucosa.`,
    `Prescription intranasal corticosteroid (fluticasone or mometasone, 1–2 sprays each nostril daily) is first-line for moderate-to-severe allergic rhinitis. Takes 2–4 days to reach full effect.`,
    `Adds oral second-generation antihistamine (cetirizine 10 mg daily, levocetirizine 5 mg daily, or fexofenadine 180 mg daily) for breakthrough symptoms. Avoids first-generation antihistamines (diphenhydramine) because of sedation and anticholinergic effects.`,
    `For ocular symptoms: olopatadine 0.1–0.7% one drop each eye twice daily, or ketotifen OTC. Avoid topical decongestant drops (Visine) — rebound redness with prolonged use.`,
    `If wheezing or shortness of breath suggests allergic asthma: rescue albuterol inhaler plus consideration of inhaled corticosteroid. Refer to in-person if frequent exacerbations.`,
    `Counsel on allergen avoidance: HEPA filtration in bedroom, dust-mite encasings, shower after outdoor exposure, washing pets, removing carpets if feasible.`,
    `Refer to an allergist for skin testing or sublingual immunotherapy if symptoms remain poorly controlled despite optimal medical therapy.`
  ],
  treatmentOptions: [
    {
      category: `Intranasal corticosteroids (first-line)`,
      detail: `Fluticasone propionate 50 mcg, 1–2 sprays each nostril daily (Flonase, OTC). Mometasone 50 mcg (Nasonex, prescription). Triamcinolone (Nasacort, OTC). Budesonide (Rhinocort, OTC). Takes 2–4 days for full effect. Most evidence-based class for moderate-to-severe allergic rhinitis.`
    },
    {
      category: `Oral antihistamines (second-generation)`,
      detail: `Cetirizine 10 mg daily (Zyrtec, OTC). Levocetirizine 5 mg daily (Xyzal, OTC/Rx). Loratadine 10 mg daily (Claritin, OTC). Fexofenadine 180 mg daily (Allegra, OTC). Less sedation than first-generation. Onset within 1–2 hours. Good for breakthrough symptoms.`
    },
    {
      category: `Combination prescription sprays`,
      detail: `Azelastine + fluticasone (Dymista) 1 spray each nostril twice daily — useful for moderate-severe symptoms not responding to monotherapy. Olopatadine + mometasone in development.`
    },
    {
      category: `Antihistamine eye drops (allergic conjunctivitis)`,
      detail: `Olopatadine 0.1–0.7% (Patanol, Pataday, OTC) one drop twice daily. Ketotifen 0.025% (Zaditor, OTC). Cromolyn 4% if pure mast-cell stabilization preferred.`
    },
    {
      category: `Saline nasal rinses`,
      detail: `NeilMed sinus rinse, Neti pot, or saline spray 1–2 times daily. Use distilled or boiled-and-cooled water (never tap — risk of Naegleria amoeba). Mechanically clears allergen and mucus. No side effects.`
    },
    {
      category: `Leukotriene receptor antagonist`,
      detail: `Montelukast 10 mg daily — option in patients with concurrent asthma. Boxed warning for neuropsychiatric effects per FDA — discuss risk-benefit. Not first-line for rhinitis alone.`
    },
    {
      category: `Allergen avoidance`,
      detail: `Pollen counts: keep windows closed during peak season, shower after outdoor exposure, change clothes. Dust mite: bedroom encasings, weekly hot-water laundry. Pets: HEPA filter, no pet in bedroom, regular bathing.`
    },
    {
      category: `Immunotherapy (allergist referral)`,
      detail: `Subcutaneous immunotherapy (allergy shots) or sublingual tablets (Grastek, Ragwitek) for moderate-severe allergic rhinitis not controlled by medical therapy. Disease-modifying — can reduce or eliminate symptoms long-term.`
    }
  ],
  medications: [
    {
      generic: `fluticasone propionate nasal`,
      brand: `Flonase`,
      dosageForm: `nasal spray`,
      drugClass: `intranasal corticosteroid`,
      dose: `1–2 sprays each nostril daily`,
      price: `$16–$27`,
      priceSourceUrl: `https://www.goodrx.com/fluticasone-propionate-non-prescription`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Nasal dryness, occasional epistaxis, rare nasal septal perforation.`
    },
    {
      generic: `cetirizine`,
      brand: `Zyrtec`,
      dosageForm: `oral tablet`,
      drugClass: `second-generation antihistamine`,
      dose: `10 mg PO daily`,
      price: `$2–$10`,
      priceSourceUrl: `https://www.goodrx.com/cetirizine`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Mild sedation in 5–10%, dry mouth.`
    },
    {
      generic: `levocetirizine`,
      brand: `Xyzal`,
      dosageForm: `oral tablet`,
      drugClass: `second-generation antihistamine`,
      dose: `5 mg PO daily evening`,
      price: `$3–$71`,
      priceSourceUrl: `https://www.goodrx.com/levocetirizine`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Mild sedation, dry mouth; less than cetirizine for some patients.`
    },
    {
      generic: `olopatadine ophthalmic`,
      brand: `Pataday, Patanol`,
      dosageForm: `ophthalmic solution`,
      drugClass: `antihistamine / mast-cell stabilizer eye drop`,
      dose: `1 drop each eye twice daily (0.1%) or once daily (0.7%)`,
      price: `$8–$20`,
      priceSourceUrl: `https://www.goodrx.com/olopatadine`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Transient stinging on instillation, dry eye.`
    },
    {
      generic: `azelastine-fluticasone`,
      brand: `Dymista`,
      dosageForm: `nasal spray`,
      drugClass: `combination antihistamine + corticosteroid`,
      dose: `1 spray each nostril BID`,
      price: `$37–$165`,
      priceSourceUrl: `https://www.goodrx.com/azelastine-fluticasone`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Bitter taste, headache, mild epistaxis.`
    }
  ],
  recovery: [
    {
      period: `Day 1–3`,
      detail: `Antihistamines provide rapid (1–2 hour) relief. Nasal steroids not yet at full effect. Eye drops give immediate relief on application.`
    },
    {
      period: `Day 4–7`,
      detail: `Nasal steroid reaching full effect. Significant reduction in congestion, post-nasal drip, and rhinorrhea. Continue daily through allergy season.`
    },
    {
      period: `Week 2`,
      detail: `Most patients well-controlled. If still symptomatic, consider adding a combination spray (azelastine-fluticasone) or escalating antihistamine.`
    },
    {
      period: `Seasonal pattern`,
      detail: `For seasonal allergic rhinitis, start treatment 1–2 weeks before peak season for prophylaxis. Continue through season; can taper afterward.`
    },
    {
      period: `Beyond 2 weeks of optimal therapy`,
      detail: `Persistent uncontrolled symptoms — refer to allergist for skin testing and consideration of immunotherapy.`
    }
  ],
  homeCare: [
    `Run a HEPA air purifier in the bedroom; change filters per manufacturer schedule.`,
    `Use dust-mite-proof encasings on mattresses and pillows.`,
    `Wash bedding weekly in hot (130°F+) water.`,
    `Shower and change clothes after coming indoors during pollen season.`,
    `Keep windows closed and run AC during peak pollen hours (early morning).`,
    `Wear sunglasses outdoors to reduce eye-pollen contact.`,
    `If pet-allergic: keep pets out of the bedroom; bathe pets weekly; HEPA filter in shared spaces.`,
    `Saline nasal rinses 1–2 times daily during peak season — Neti pot or NeilMed sinus rinse with distilled water only.`,
    `Track local pollen counts (pollen.com or weather apps) and time outdoor activities accordingly.`,
    `Avoid first-generation antihistamines (diphenhydramine, hydroxyzine) — sedating and anticholinergic; use second-generation instead.`
  ],
  faqs: [
    {
      question: `How can I tell if it's allergies or a cold?`,
      answer: `Allergies: itchy eyes/nose, clear runny nose, no fever, often longer than 7–10 days, often worse outdoors or in specific environments. Colds: scratchy throat first, possible low-grade fever, body aches, resolves in 7–10 days. Itching is the most reliable allergy clue.`
    },
    {
      question: `Can a doctor prescribe allergy medication online?`,
      answer: `Yes. TeleDirectMD's $49 visit covers prescription antihistamines (levocetirizine, fexofenadine), nasal steroids (fluticasone, mometasone, Dymista), and antihistamine eye drops. Most generics are (see medication table).`
    },
    {
      question: `Are nasal steroids better than antihistamines?`,
      answer: `For moderate-to-severe allergic rhinitis, nasal steroids (fluticasone, mometasone) are usually more effective than oral antihistamines per ARIA guidelines. They take 2–4 days to reach full effect. Antihistamines work within hours and add benefit when used together.`
    },
    {
      question: `Are OTC allergy medications enough?`,
      answer: `For mild seasonal allergies, often yes — loratadine, cetirizine, OTC fluticasone (Flonase). For moderate-to-severe symptoms or symptoms that have not responded after 2 weeks, prescription strength or combination therapy works better.`
    },
    {
      question: `How much does an allergy telehealth visit cost?`,
      answer: `$49 for the visit. Add low-cost generic prescriptions (see medication table); total typically $54–$74. Compare to $150–$280 cash-pay urgent care or $300+ for an allergist visit.`
    },
    {
      question: `When should I see an allergist instead of telehealth?`,
      answer: `See an allergist if symptoms have not responded to combined nasal steroid + antihistamine after 2–4 weeks of consistent use, if you want allergy testing to identify specific triggers, or if you are considering immunotherapy (allergy shots or sublingual tablets).`
    },
    {
      question: `Can allergies cause asthma symptoms?`,
      answer: `Yes. Allergic asthma is common — exposure to pollen, dust mite, or pet dander triggers wheezing and shortness of breath. The visit will evaluate and treat both conditions; allergic asthma usually responds well to inhaled steroids plus the antihistamine/nasal-steroid combination.`
    },
    {
      question: `Do I need to know what I'm allergic to before treatment?`,
      answer: `No. Treatment is symptom-based and works regardless of which trigger is causing symptoms. Identifying specific allergens (testing) helps with avoidance and immunotherapy, but the medications work either way.`
    },
    {
      question: `Are first-generation antihistamines (Benadryl) okay to use?`,
      answer: `Discouraged for routine allergy management — diphenhydramine is sedating, has anticholinergic effects, impairs reaction time and learning, and is associated with increased dementia risk in older adults per Beers Criteria. Use second-generation antihistamines instead.`
    },
    {
      question: `Can I take Sudafed (pseudoephedrine) for allergies?`,
      answer: `Pseudoephedrine relieves congestion but doesn't treat the underlying allergic inflammation. It can raise blood pressure, cause insomnia, and worsen prostate-related urinary symptoms. Use sparingly; nasal steroid is the better long-term answer.`
    },
    {
      question: `What is the difference between Zyrtec, Claritin, and Allegra?`,
      answer: `All are second-generation antihistamines. Cetirizine (Zyrtec) is most potent but has the highest rate of mild sedation (~10%). Loratadine (Claritin) is least sedating but slightly less effective. Fexofenadine (Allegra) is non-sedating and avoids food interactions but should be taken away from juice.`
    },
    {
      question: `How do I prevent rebound congestion from nasal sprays?`,
      answer: `Avoid OTC decongestant nasal sprays (oxymetazoline, Afrin) for more than 3 consecutive days — longer use causes rhinitis medicamentosa. Steroid sprays (Flonase, Nasacort) and saline are safe for daily long-term use.`
    },
    {
      question: `Can I get prescription allergy eye drops online?`,
      answer: `Yes. Olopatadine 0.7% (Pataday once-daily) and ketotifen are now OTC. Stronger prescription drops (azelastine, alcaftadine) are still prescription-only and can be sent same-day after a $49 visit.`
    },
    {
      question: `Is allergy immunotherapy (shots) worth it?`,
      answer: `For moderate-severe perennial allergies not controlled by medication, immunotherapy is disease-modifying — many patients have lasting relief after 3–5 years of treatment. It requires an allergist and either weekly shots or daily sublingual tablets. We can refer.`
    }
  ],
  relatedSymptoms: [
    `sinus-pressure`,
    `asthma`,
    `pink-eye`,
    `sinus-infection`,
    `persistent-cough`
  ],
  references: [
    {
      label: `ACAAI — Hay Fever / Allergic Rhinitis`,
      url: `https://acaai.org/allergies/allergic-conditions/hay-fever/`
    },
    {
      label: `AAAAI / ARIA — Allergic Rhinitis Guidelines`,
      url: `https://www.aaaai.org/conditions-treatments/allergies/rhinitis`
    },
    {
      label: `AAFP — Diagnosis and Treatment of Allergic Rhinitis`,
      url: `https://www.aafp.org/pubs/afp/issues/2015/1115/p985.html`
    },
    {
      label: `CDC — Allergies`,
      url: `https://www.cdc.gov/nchs/products/databriefs/db459.htm`
    },
    {
      label: `Mayo Clinic — Hay fever`,
      url: `https://www.mayoclinic.org/diseases-conditions/hay-fever/symptoms-causes/syc-20373039`
    },
    {
      label: `NIH MedlinePlus — Allergic rhinitis`,
      url: `https://medlineplus.gov/hayfever.html`
    },
    {
      label: `GoodRx — Fluticasone nasal pricing`,
      url: `https://www.goodrx.com/fluticasone-propionate-nasal`
    },
    {
      label: `FDA — Montelukast Boxed Warning`,
      url: `https://www.fda.gov/drugs/drug-safety-and-availability/fda-requires-boxed-warning-about-serious-mental-health-side-effects-asthma-and-allergy-drug`
    }
  ],
  riskFactors: [
    `Family history of atopy`,
    `Childhood eczema`,
    `Childhood asthma`,
    `Indoor pet exposure`,
    `Cigarette-smoke exposure`,
    `Living in high-pollen region`
  ],
  typicalTests: [
    `Skin prick testing (allergist)`,
    `Specific IgE serum testing (ImmunoCAP)`,
    `Nasal smear for eosinophils`,
    `Spirometry if asthma suspected`
  ]
};

SYMPTOM_PAGES["strep-throat"] = {
  slug: `strep-throat`,
  pid: `sym-strep`,
  query: `white spots on tonsils`,
  h1: `White Spots on Your Tonsils — Strep, Mono, or Just Tonsillitis?`,
  metaTitle: `White Spots on Tonsils — Strep, Mono, or Tonsillitis | TeleDirectMD`,
  metaDescription: `White spots on tonsils can be strep, viral pharyngitis, mononucleosis, or tonsillitis. $49 telehealth visit; amoxicillin $9 if strep. 41 states.`,
  breadcrumb: `White Spots on Tonsils`,
  answerLead: `White spots on your tonsils — what it usually is:`,
  answerBody: `White spots (tonsillar exudate) most often signal <strong>group A streptococcal pharyngitis (strep)</strong>, <strong>viral pharyngitis</strong>, <strong>mononucleosis</strong>, or <strong>tonsil stones (tonsilloliths)</strong>. Strep is treated with amoxicillin or penicillin V (~ (see medication table)) per <a href="https://www.idsociety.org/practice-guideline/strep-throat/">IDSA guidelines</a>; viral causes resolve on their own. A $49 TeleDirectMD video visit applies the modified Centor criteria to decide.`,
  symptomDef: {
    altNames: [
      `Tonsillar exudate`,
      `White patches on tonsils`,
      `Pharyngitis with exudate`,
      `Tonsillitis`
    ],
    anatomy: `Palatine tonsils`,
    treatment: `Amoxicillin or penicillin V if bacterial; supportive care if viral`,
    conditionDisplayName: `Strep throat / streptococcal pharyngitis`
  },
  whatThisMeans: [
    `Tonsillar exudate (white spots) is one of the four <strong>modified Centor criteria</strong> for strep throat. The others are fever > 38°C, tender anterior cervical lymph nodes, and absence of cough. Three or four criteria → moderate-to-high probability of strep. Two or fewer → low probability.`,
    `Mononucleosis (Epstein-Barr virus) commonly produces white tonsillar exudate in young adults aged 15–25, alongside marked fatigue and posterior cervical lymphadenopathy. The exudate can look identical to strep.`,
    `Tonsil stones (tonsilloliths) are calcified debris in tonsillar crypts that show as small white spots without inflammation, often with bad breath. They are not infectious and don't need antibiotics.`,
    `Less common: gonococcal pharyngitis (sexual exposure history), candidal pharyngitis (immunocompromised, inhaled-steroid use), oral herpes, diphtheria (rare in vaccinated populations).`
  ],
  differentials: [
    {
      name: `Group A streptococcal pharyngitis`,
      description: `Bacterial throat infection. Antibiotics shorten illness, reduce contagion, and rarely prevent rheumatic fever.`,
      prevalence: `5–15% adults; 15–30% children`,
      features: `Fever > 38°C; sudden onset; tonsillar exudate; tender anterior lymph nodes; no cough.`,
      next: `Telehealth — Centor 3–4 → empiric amoxicillin/penicillin V.`
    },
    {
      name: `Viral pharyngitis with exudate`,
      description: `Adenovirus, mononucleosis, and other viruses can produce visible exudate identical to strep.`,
      prevalence: `Common`,
      features: `Cough or runny nose often present; gradual onset; less neck-node tenderness.`,
      next: `Telehealth — supportive care.`
    },
    {
      name: `Infectious mononucleosis (EBV)`,
      description: `Severe pharyngitis with marked fatigue. Common in 15–25-year-olds.`,
      prevalence: `~1% of college pharyngitis`,
      features: `Posterior cervical lymphadenopathy; profound fatigue; possible splenomegaly.`,
      next: `Telehealth + monospot or EBV antibody test.`
    },
    {
      name: `Tonsil stones (tonsilloliths)`,
      description: `Calcified debris in tonsillar crypts. Not an infection.`,
      prevalence: `Common, often incidental`,
      features: `Small hard white spots; bad breath; no fever; no pain or mild pain.`,
      next: `Self-care — gargles, manual removal, hydration. Persistent: ENT for tonsillar cryptolysis.`
    },
    {
      name: `Peritonsillar abscess`,
      description: `Pus collection adjacent to tonsil. Unilateral. Surgical emergency.`,
      prevalence: `~30/100,000/year`,
      features: `Severe one-sided pain; muffled voice; trismus; uvula deviation; drooling.`,
      next: `ER — drainage and IV antibiotics.`
    }
  ],
  redFlags: [
    `Drooling or trouble swallowing your own saliva — peritonsillar abscess or epiglottitis`,
    `Stridor (high-pitched noisy breathing in)`,
    `Severe one-sided throat swelling or uvula deviation`,
    `Inability to open the mouth wide (trismus)`,
    `Voice severely muffled (hot-potato voice)`,
    `High fever > 103°F with rigors`,
    `Tongue or floor-of-mouth swelling`,
    `Severe one-sided ear pain with the throat pain (referred from peritonsillar abscess)`
  ],
  eligibility: [
    `Adult age 18 or older located in one of 41 licensed states`,
    `Sore throat with visible white spots ≤ 14 days`,
    `Able to swallow liquids without drooling`,
    `No stridor, muffled voice, or trismus`,
    `No severe one-sided throat pain or swelling`,
    `Phone camera capable of clear oropharynx images`,
    `Have a pharmacy where antibiotics can be sent`
  ],
  notEligibility: [
    `Drooling, stridor, or muffled voice — ER`,
    `Severe one-sided throat pain with uvula deviation — peritonsillar abscess`,
    `Recurrent strep (≥7/year) — ENT for tonsillectomy evaluation`,
    `Suspected diphtheria (rare; gray pseudomembrane) — ER + public health`,
    `Penicillin and cephalosporin allergy with high-Centor strep — needs in-person rapid test`
  ],
  howTelehealthHelps: [
    `Patient opens mouth wide with bright light from behind the camera; Dr. Bhavsar inspects tonsils, palate, and posterior pharynx for exudate, asymmetry, uvula position, and palatal petechiae.`,
    `Focused history: symptom onset, fever pattern, presence of cough/congestion, tender lymph nodes, sick contacts, sexual history (gonococcal pharyngitis), and recent dental procedures.`,
    `Modified Centor / McIsaac criteria applied. Centor 3–4 → empiric amoxicillin or penicillin V × 10 days. Centor 1–2 → at-home rapid antigen test ($25–$50) or in-person test. Centor 0 → supportive care for likely viral cause.`,
    `If history fits mononucleosis (15–25 years old, severe fatigue, posterior nodes lasting > 1 week), refer to a local lab for monospot or EBV serology.`,
    `If tonsilloliths are visible (small hard white debris without erythema or fever), reassure and counsel on gargles and manual removal.`,
    `Visit ends with prescription (when appropriate), symptom-management plan, return precautions, and a 48–72-hour follow-up trigger if symptoms worsen.`
  ],
  treatmentOptions: [
    {
      category: `First-line antibiotics for strep`,
      detail: `Amoxicillin 500 mg PO BID × 10 days OR penicillin V 500 mg PO BID × 10 days. Both ~$9–$15 generic. Symptom improvement within 24–48 hours; finish full course.`
    },
    {
      category: `Penicillin-allergic patients`,
      detail: `Cephalexin 500 mg PO BID × 10 days (non-anaphylactic allergy; 2% cross-reactivity). Clindamycin 300 mg PO TID × 10 days. Azithromycin 500 mg day 1 then 250 mg × 4 days (rising macrolide resistance — only when other agents not options).`
    },
    {
      category: `Symptomatic care`,
      detail: `Acetaminophen 650 mg or ibuprofen 400 mg every 6 hours. Salt-water gargles. Throat lozenges with menthol or benzocaine. Cool fluids and popsicles. Adequate fluid intake.`
    },
    {
      category: `Mononucleosis supportive care`,
      detail: `Rest, hydration, NSAIDs. Avoid amoxicillin in mono (causes generalized rash). Avoid contact sports for 4 weeks (splenic rupture risk). Most fatigue resolves in 2–4 weeks.`
    },
    {
      category: `Tonsil stones`,
      detail: `Salt-water gargles 3–4 times daily. Water flosser at low pressure aimed at tonsillar crypts. Hydration. Persistent or recurrent stones: ENT for tonsillar cryptolysis.`
    },
    {
      category: `Behavioral`,
      detail: `Hand hygiene; avoid sharing utensils, toothbrushes, and drinks during contagious period. Replace toothbrush after 24 hours on antibiotics. Stay home until 24 hours fever-free.`
    }
  ],
  medications: [
    {
      generic: `amoxicillin`,
      brand: `Amoxil`,
      dosageForm: `oral capsule, suspension`,
      drugClass: `aminopenicillin`,
      dose: `500 mg PO BID × 10 days`,
      price: `$5–$21`,
      priceSourceUrl: `https://www.goodrx.com/amoxicillin`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Diarrhea, rash; rash develops in mononucleosis.`
    },
    {
      generic: `penicillin V potassium`,
      brand: `Veetids`,
      dosageForm: `oral tablet`,
      drugClass: `penicillin`,
      dose: `500 mg PO BID × 10 days`,
      price: `$2–$24`,
      priceSourceUrl: `https://www.goodrx.com/penicillin-v-potassium`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Diarrhea, allergic reaction.`
    },
    {
      generic: `cephalexin`,
      brand: `Keflex`,
      dosageForm: `oral capsule`,
      drugClass: `first-generation cephalosporin`,
      dose: `500 mg PO BID × 10 days`,
      price: `$5–$24`,
      priceSourceUrl: `https://www.goodrx.com/cephalexin/how-much-does-cephalexin-cost-without-insurance`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Diarrhea; rare cross-reactivity with severe penicillin allergy.`
    },
    {
      generic: `azithromycin`,
      brand: `Zithromax`,
      dosageForm: `oral tablet`,
      drugClass: `macrolide`,
      dose: `500 mg day 1 then 250 mg × 4 days`,
      price: `$6–$35`,
      priceSourceUrl: `https://www.goodrx.com/azithromycin`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Diarrhea, QT prolongation; rising macrolide resistance.`
    },
    {
      generic: `ibuprofen`,
      brand: `Advil`,
      dosageForm: `oral tablet`,
      drugClass: `NSAID`,
      dose: `400 mg PO every 6h PRN`,
      price: `$2–$13`,
      priceSourceUrl: `https://www.goodrx.com/ibuprofen`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `GI upset; avoid in CKD or peptic ulcer.`
    }
  ],
  recovery: [
    {
      period: `Day 1–2 of antibiotics`,
      detail: `Pain and fever begin improving within 24–48 hours of effective antibiotics. No longer contagious after 24 hours on antibiotics.`
    },
    {
      period: `Day 3–5`,
      detail: `Most symptoms resolved or markedly improved. Continue full 10-day course.`
    },
    {
      period: `Day 7–10`,
      detail: `Symptoms fully resolved for most strep patients.`
    },
    {
      period: `Beyond 10 days`,
      detail: `Persistent symptoms warrant re-evaluation: undiagnosed mononucleosis, peritonsillar complication, antibiotic resistance, or alternative diagnosis.`
    },
    {
      period: `Mono recovery`,
      detail: `Fatigue and lymphadenopathy 2–4 weeks; full energy return 1–3 months. No contact sports for 4 weeks.`
    }
  ],
  homeCare: [
    `Salt-water gargles 3–4 times daily.`,
    `Hydration with cool or warm fluids; popsicles.`,
    `Acetaminophen or ibuprofen on schedule for the first 48 hours.`,
    `Throat lozenges or numbing spray.`,
    `Honey 1–2 teaspoons or in tea.`,
    `Cool-mist humidifier in the bedroom.`,
    `Replace toothbrush after 24 hours on antibiotics.`,
    `Wash hands; avoid sharing utensils, glasses, food.`,
    `Stay home until 24 hours on antibiotics or 24 hours fever-free if viral.`,
    `For tonsil stones: water flosser on low setting, oral hygiene, salt-water gargle.`
  ],
  faqs: [
    {
      question: `Are white spots on tonsils always strep?`,
      answer: `Not always. They can also be viral pharyngitis (especially adenovirus), mononucleosis, tonsil stones, or rarely fungal infection. The Centor criteria (fever, exudate, tender lymph nodes, absence of cough) help estimate strep probability.`
    },
    {
      question: `Can a doctor diagnose strep over video?`,
      answer: `Yes for high or low Centor scores. Mid-range cases benefit from a rapid antigen test, which can be done at home for $25–$50 or via a brief in-person stop. Many patients resolve clinically without testing.`
    },
    {
      question: `What antibiotic is given for strep throat?`,
      answer: `Amoxicillin or penicillin V are first-line per IDSA — $9–$15 generic. Cephalexin or azithromycin are alternatives for penicillin allergy. Course is 10 days. Improvement usually within 24–48 hours.`
    },
    {
      question: `How long am I contagious with strep?`,
      answer: `You are no longer contagious 24 hours after starting effective antibiotics. Untreated strep stays contagious 2–3 weeks. Always finish the full course to reduce contagion and prevent rare complications.`
    },
    {
      question: `Could it be mono instead of strep?`,
      answer: `Yes — especially in young adults with severe fatigue, posterior cervical lymphadenopathy, and tonsillar exudate that doesn't respond to amoxicillin (and amoxicillin in mono can cause a generalized rash). Monospot testing distinguishes them.`
    },
    {
      question: `What if my symptoms haven't improved by day 3 on antibiotics?`,
      answer: `Contact us. Possibilities include resistance (uncommon for strep), wrong diagnosis (mono, viral), peritonsillar complication, or non-adherence. A repeat visit and possible rapid strep or monospot are next steps.`
    },
    {
      question: `Are tonsil stones the same as strep?`,
      answer: `No — tonsil stones (tonsilloliths) are calcified debris in tonsillar crypts, not infection. They look like small hard white specks, often with bad breath, but no fever or significant pain. Salt-water gargles and water flossers help; antibiotics do nothing.`
    },
    {
      question: `When does strep need an ER visit?`,
      answer: `ER if you have drooling, stridor, voice change, severe one-sided throat swelling (peritonsillar abscess), trismus (can't open mouth), or high fever > 103°F. These suggest complications requiring drainage or IV antibiotics.`
    },
    {
      question: `How much does strep treatment cost online?`,
      answer: `$49 visit + $9 amoxicillin = $58 total. With at-home strep test: ~$88. Compare to $185–$345 urgent care per Mira Health 2025 or $99–$139 at CVS MinuteClinic.`
    },
    {
      question: `Can I skip antibiotics if my strep is mild?`,
      answer: `Untreated strep usually resolves in 7–10 days, but antibiotics shorten illness, reduce contagion, and prevent rare complications (rheumatic fever, post-streptococcal glomerulonephritis). For confirmed strep, treatment is recommended.`
    },
    {
      question: `Do tonsillectomies help recurrent strep?`,
      answer: `For very frequent recurrence (≥7 episodes in 1 year, ≥5/year for 2 years, or ≥3/year for 3 years per Paradise criteria), tonsillectomy reduces episodes. Decision is made with an ENT in person.`
    },
    {
      question: `Can adults get strep throat?`,
      answer: `Yes, though it's more common in children. Adults account for 5–15% of strep pharyngitis cases. Symptoms and treatment are the same; complication rates are similar.`
    },
    {
      question: `Is amoxicillin safe in pregnancy?`,
      answer: `Amoxicillin and penicillin V are FDA Category B and considered safe in pregnancy. Cephalexin is also safe. Avoid tetracyclines and fluoroquinolones in pregnancy.`
    },
    {
      question: `Why did my doctor warn me not to take amoxicillin if I might have mono?`,
      answer: `Amoxicillin (and ampicillin) cause a generalized maculopapular rash in roughly 90% of mono patients. The rash is not a true allergy and goes away after stopping the drug — but it's uncomfortable and can be confused with a real penicillin allergy. Confirming strep first matters.`
    }
  ],
  relatedSymptoms: [
    `sore-throat`,
    `sinus-infection`,
    `ear-pain`,
    `cold-sore`
  ],
  references: [
    {
      label: `IDSA — Strep Pharyngitis Guidelines (2012, reaffirmed)`,
      url: `https://www.idsociety.org/practice-guideline/strep-throat/`
    },
    {
      label: `AAFP — Streptococcal Pharyngitis`,
      url: `https://www.aafp.org/pubs/afp/issues/2009/0301/p383.html`
    },
    {
      label: `Mayo Clinic — Strep throat`,
      url: `https://www.mayoclinic.org/diseases-conditions/strep-throat/symptoms-causes/syc-20350338`
    },
    {
      label: `CDC — Group A Strep`,
      url: `https://www.cdc.gov/groupastrep/diseases-public/strep-throat.html`
    },
    {
      label: `NIH MedlinePlus — Strep throat`,
      url: `https://medlineplus.gov/streptthroat.html`
    },
    {
      label: `AAO-HNS — Tonsillectomy clinical practice guideline`,
      url: `https://www.entnet.org/quality-practice/quality-products/clinical-practice-guidelines/`
    },
    {
      label: `GoodRx — Amoxicillin pricing`,
      url: `https://www.goodrx.com/amoxicillin`
    }
  ],
  riskFactors: [
    `Age 5–25`,
    `Close contacts with strep`,
    `School/daycare exposure`,
    `Crowded living conditions`,
    `Smoking exposure`
  ],
  typicalTests: [
    `Rapid antigen detection test (RADT)`,
    `Throat culture`,
    `Monospot / EBV antibody panel`,
    `CBC with differential`
  ]
};

SYMPTOM_PAGES["cystic-acne"] = {
  slug: `cystic-acne`,
  pid: `sym-cystic-acne`,
  query: `pimples on face that won't go away`,
  h1: `Pimples That Won't Go Away — Could It Be Cystic or Hormonal Acne?`,
  metaTitle: `Persistent Pimples & Cystic Acne — When to Get Real Treatment | TeleDirectMD`,
  metaDescription: `Pimples that don't respond to OTC for 8+ weeks usually need prescription tretinoin, oral antibiotics, or hormonal therapy. $49 telehealth visit.`,
  breadcrumb: `Cystic Acne`,
  answerLead: `Persistent pimples that won't clear — what's likely going on:`,
  answerBody: `Pimples that don't respond to OTC for 8+ weeks are usually <strong>moderate-to-severe inflammatory acne</strong>, <strong>cystic acne</strong>, or <strong>hormonal acne</strong>. Per <a href="https://www.aad.org/member/clinical-quality/guidelines/acne">AAD 2024 acne guidelines</a>, these need prescription topicals (tretinoin, adapalene), oral antibiotics, hormonal therapy, or — for severe scarring — isotretinoin via in-person dermatology. A $49 TeleDirectMD visit grades severity and starts treatment same day.`,
  symptomDef: {
    altNames: [
      `Nodulocystic acne`,
      `Severe inflammatory acne`,
      `Hormonal acne`,
      `Adult acne`
    ],
    anatomy: `Skin (deep dermis pilosebaceous units)`,
    treatment: `Topical retinoid + oral antibiotic; spironolactone for women; isotretinoin for severe (in-person derm)`,
    conditionDisplayName: `Cystic / nodular acne`
  },
  whatThisMeans: [
    `Cystic acne forms when deep follicular inflammation causes fluctuant nodules under the skin — distinct from comedonal acne (whiteheads/blackheads) or papulopustular acne. The lesions are painful, slow to heal, and have a high rate of permanent scarring.`,
    `Combination therapy is the standard: topical retinoid (tretinoin or adapalene) plus oral antibiotic (doxycycline) for 12 weeks, then transition to topical-only maintenance. Hormonal cystic acne in women responds well to spironolactone.`,
    `Severe scarring nodulocystic acne is the indication for isotretinoin (Accutane), which produces ~80% long-term remission but requires in-person dermatology with monthly bloodwork and pregnancy testing via the iPLEDGE program. Telehealth does not prescribe isotretinoin.`,
    `Adult-onset cystic acne, especially in women with jawline distribution and monthly flares, often signals a hormonal pattern (PCOS, premenstrual androgen surge). Spironolactone 50–100 mg daily is well-evidenced and appropriate for telehealth in patients without contraindications.`
  ],
  differentials: [
    {
      name: `Hormonal female cystic acne`,
      description: `Adult women, jawline distribution, premenstrual flares. Often coexists with hirsutism or oligomenorrhea (consider PCOS).`,
      prevalence: `~50% of adult women with persistent acne`,
      features: `Jawline/chin lesions; monthly cyclical flare; resistant to topical-only therapy.`,
      next: `Telehealth — spironolactone after labs.`
    },
    {
      name: `Moderate inflammatory acne`,
      description: `Papules and pustules with occasional nodules. Antibiotic-responsive.`,
      prevalence: `~40% of presenting cases`,
      features: `Red papules + pustules; mild scarring possible; cheeks and forehead.`,
      next: `Telehealth — tretinoin + oral doxycycline × 12 weeks.`
    },
    {
      name: `Severe nodulocystic acne`,
      description: `Deep painful nodules and cysts; substantial risk of scarring. Indicated for isotretinoin.`,
      prevalence: `~10–15% of acne presentations`,
      features: `Deep tender nodules > 5 mm; fluctuant cysts; persistent erythema; scarring forming.`,
      next: `Initial telehealth + referral to in-person dermatology for isotretinoin.`
    },
    {
      name: `Acne fulminans / acne conglobata`,
      description: `Rare severe forms. Acne fulminans has fever, malaise, joint pain. Acne conglobata has draining sinus tracts.`,
      prevalence: `Rare`,
      features: `Systemic features; abscess-like tracts; severe scarring.`,
      next: `In-person dermatology + possible hospitalization for acne fulminans.`
    },
    {
      name: `Hidradenitis suppurativa`,
      description: `Different disease entirely — recurrent painful abscesses in armpits, groin, under breasts. Sometimes mistaken for severe acne.`,
      prevalence: `1% of population`,
      features: `Abscesses in skin folds (axilla, groin, perineum); sinus tracts; not face.`,
      next: `Telehealth screening + dermatology referral.`
    }
  ],
  redFlags: [
    `Sudden severe cystic acne in an adult with no prior history — rule out hormonal (PCOS, androgen excess), medication trigger (lithium, anabolic steroids, corticosteroids), or rare endocrine cause`,
    `Acne with fever, joint pain, or malaise (acne fulminans) — needs urgent dermatology`,
    `Drainage with surrounding cellulitis or abscess — may need in-person incision/drainage`,
    `Significant scarring already forming — accelerate to in-person dermatology for isotretinoin`,
    `Suspected hidradenitis suppurativa (axilla/groin abscesses) — different disease pathway`,
    `Pregnancy with severe acne — most acne medications are teratogenic`
  ],
  eligibility: [
    `Adult age 18+ in one of 41 licensed states`,
    `Mild, moderate, or early-severe acne`,
    `Not pregnant or actively trying to conceive`,
    `No history of severe drug reaction to retinoids or tetracyclines`,
    `Able to upload clear photos before/during visit`,
    `Willing to commit to 12 weeks of consistent therapy`,
    `No active eczema, rosacea, or perioral dermatitis flare on the same area`,
    `Have a pharmacy where prescriptions can be sent`
  ],
  notEligibility: [
    `Severe scarring nodulocystic acne — needs in-person derm and likely isotretinoin`,
    `Pregnancy — most acne meds teratogenic`,
    `Acne fulminans (rare; severe systemic features) — urgent in-person derm`,
    `Hidradenitis suppurativa — different disease`,
    `Acne unresponsive to 12+ weeks of well-conducted prescription therapy`,
    `Severe drug allergy precluding standard topical/oral therapy`
  ],
  howTelehealthHelps: [
    `Patient uploads 3–4 clear photos of cheeks, forehead, chin, jawline, and back. Live video used if photos are insufficient.`,
    `Dr. Bhavsar grades severity, identifies lesion types, assesses scarring, and reviews triggers (medications, hormones, skincare).`,
    `Moderate inflammatory or early cystic acne: tretinoin 0.025–0.05% + oral doxycycline 100 mg BID × 12 weeks. Always paired with topical to limit antibiotic resistance.`,
    `Hormonal pattern in women: spironolactone 50–100 mg daily after baseline potassium and creatinine. Combined OCPs another option.`,
    `Severe scarring or treatment-resistant: explicit referral to in-person dermatology for isotretinoin evaluation via iPLEDGE.`,
    `Photo follow-up at 4 and 12 weeks to track progress objectively. Set realistic expectation: 6–12 weeks for visible improvement, 12+ for full clearing.`,
    `Counsel on skincare: gentle cleanser, non-comedogenic moisturizer, daily SPF 30+ (mandatory on retinoids), no picking, change pillowcases.`
  ],
  treatmentOptions: [
    {
      category: `Prescription topical retinoids`,
      detail: `Tretinoin 0.025–0.1% nightly. Adapalene 0.3% gel. Tazarotene 0.045–0.1%. Pea-sized dose at bedtime; pair with sunscreen daily. Visible improvement: 6–12 weeks.`
    },
    {
      category: `Oral antibiotics (12-week course)`,
      detail: `Doxycycline 100 mg PO BID × 12 weeks first-line. Minocycline 100 mg daily alternative. Always combine with topical retinoid + benzoyl peroxide to prevent resistance. Don't exceed 3–4 months.`
    },
    {
      category: `Hormonal therapy (women)`,
      detail: `Spironolactone 50–100 mg daily for hormonal pattern. Monitor potassium and creatinine at baseline and 3 months. Combined OCPs FDA-approved for acne. Avoid in pregnancy.`
    },
    {
      category: `Topical antibiotic + benzoyl peroxide combinations`,
      detail: `Clindamycin 1% + benzoyl peroxide 5% (BenzaClin, Onexton). Apply morning. Reduces resistance vs. topical antibiotic alone.`
    },
    {
      category: `Severe / isotretinoin pathway`,
      detail: `Isotretinoin (Absorica, Claravis) 0.5–1 mg/kg daily × 4–6 months for severe scarring nodulocystic acne. ~80% long-term remission. Requires in-person derm + iPLEDGE + monthly labs/pregnancy tests.`
    },
    {
      category: `Skincare`,
      detail: `Gentle non-comedogenic cleanser (Cetaphil, CeraVe Foaming, Vanicream) twice daily. Non-comedogenic moisturizer. Daily SPF 30+. No scrubbing or harsh exfoliants.`
    },
    {
      category: `Procedural adjuncts`,
      detail: `Cortisone injection (0.1 mL of 2.5–5 mg/mL triamcinolone) for individual painful cysts — done in-person derm or PCP. Chemical peels and laser for scarring (post-isotretinoin).`
    }
  ],
  medications: [
    {
      generic: `tretinoin`,
      brand: `Retin-A, Altreno`,
      dosageForm: `topical cream/gel`,
      drugClass: `topical retinoid`,
      dose: `Pea-sized nightly`,
      price: `$29–$93`,
      priceSourceUrl: `https://www.goodrx.com/retin-a`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Initial dryness/peeling, photosensitivity; pregnancy contraindicated.`
    },
    {
      generic: `doxycycline hyclate`,
      brand: `Vibramycin, Doryx`,
      dosageForm: `oral capsule`,
      drugClass: `tetracycline`,
      dose: `100 mg BID × 12 weeks`,
      price: `$5–$80`,
      priceSourceUrl: `https://www.goodrx.com/doxycycline-hyclate`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Photosensitivity, GI upset, esophagitis; pregnancy contraindicated.`
    },
    {
      generic: `spironolactone`,
      brand: `Aldactone`,
      dosageForm: `oral tablet`,
      drugClass: `anti-androgen`,
      dose: `50–100 mg daily`,
      price: `$6–$29`,
      priceSourceUrl: `https://www.goodrx.com/spironolactone`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Hyperkalemia, breast tenderness, menstrual irregularity; pregnancy contraindicated.`
    },
    {
      generic: `clindamycin-benzoyl peroxide`,
      brand: `BenzaClin, Onexton`,
      dosageForm: `topical gel`,
      drugClass: `antibiotic + benzoyl peroxide combination`,
      dose: `Apply morning`,
      price: `$32–$45`,
      priceSourceUrl: `https://www.goodrx.com/clindamycin-benzoyl-peroxide`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Skin dryness; bleaches fabrics.`
    },
    {
      generic: `adapalene-benzoyl peroxide`,
      brand: `Epiduo, Epiduo Forte`,
      dosageForm: `topical gel`,
      drugClass: `retinoid + BP combination`,
      dose: `Apply nightly`,
      price: `$23–$328`,
      priceSourceUrl: `https://www.goodrx.com/adapalene-benzoyl-peroxide`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Initial irritation, photosensitivity; bleaches fabrics.`
    }
  ],
  recovery: [
    {
      period: `Week 1–2`,
      detail: `Initial irritation from retinoid common — dryness, peeling. Use every other night, add moisturizer. May see transient 'purge' (deeper lesions surfacing).`
    },
    {
      period: `Week 4–6`,
      detail: `Skin tolerating retinoid; daily use established. Mild reduction in new lesions. Existing lesions still healing.`
    },
    {
      period: `Week 8–12`,
      detail: `First clearly visible improvement. New lesion formation reduced 30–50%. Inflammatory lesions resolving.`
    },
    {
      period: `Month 4–6`,
      detail: `Antibiotic responders: significant clearing. Time to taper antibiotic to topical-only maintenance. Non-responders: escalate to spironolactone (women) or in-person derm.`
    },
    {
      period: `Maintenance (long-term)`,
      detail: `Acne is chronic — most patients need ongoing topical retinoid maintenance. Stopping too early is the leading cause of relapse.`
    }
  ],
  homeCare: [
    `Gentle non-comedogenic cleanser twice daily — no scrubbing.`,
    `Non-comedogenic moisturizer morning and night.`,
    `Daily broad-spectrum SPF 30+ — non-negotiable on retinoids.`,
    `Don't pick, pop, or squeeze lesions — drives scarring.`,
    `Change pillowcases twice weekly; clean phone screen daily.`,
    `Don't share makeup; clean brushes weekly; replace every 3 months.`,
    `Use 'non-comedogenic' or 'oil-free' makeup, sunscreen, moisturizer.`,
    `Avoid over-exfoliating — at most a gentle chemical exfoliant 1–2 times weekly.`,
    `Limit triggers: whey protein, comedogenic hair products, chronic friction.`,
    `Take photos every 4 weeks to track progress objectively.`
  ],
  faqs: [
    {
      question: `How is cystic acne different from regular pimples?`,
      answer: `Cystic acne is deep, painful, often-scarring nodules beneath the skin. Regular acne is surface whiteheads, blackheads, or small inflammatory bumps. Cystic acne usually requires combination prescription therapy and has a high scar rate without treatment.`
    },
    {
      question: `Can telehealth treat cystic acne?`,
      answer: `Yes for moderate cases — tretinoin + oral antibiotic + sometimes spironolactone. Severe scarring nodulocystic acne needs in-person dermatology for isotretinoin (Accutane), which requires monthly labs and the iPLEDGE program.`
    },
    {
      question: `How long does cystic acne treatment take to work?`,
      answer: `Tretinoin: 6–12 weeks for visible improvement. Doxycycline: 4–8 weeks. Spironolactone: 8–16 weeks. Most patients see meaningful improvement at 12 weeks and continue therapy for 6+ months.`
    },
    {
      question: `What's the strongest acne medication?`,
      answer: `Isotretinoin (Accutane) — clears severe acne in 80%+ of patients in 4–6 months with long-term remission. Requires in-person dermatology with monthly bloodwork, pregnancy testing, and iPLEDGE registration. Not prescribed via telehealth.`
    },
    {
      question: `Can hormonal acne in women be treated online?`,
      answer: `Yes. Spironolactone is appropriate for adult women with hormonal pattern (jawline, monthly flares) and no contraindications. Baseline potassium and creatinine ordered through a local lab. Combined OCPs are another option.`
    },
    {
      question: `Does insurance cover acne treatment?`,
      answer: `Most generics are cheaper with GoodRx than insurance copays. Tretinoin: $24–$70. Doxycycline: $15. Spironolactone: $10–$30. Visit: $49 cash or in-network with Aetna/BCBS/UHC.`
    },
    {
      question: `Do I need to take antibiotics forever?`,
      answer: `No. Oral antibiotics for acne are typically used for 12 weeks then tapered to topical-only maintenance. Long-term continuous antibiotic use is avoided due to resistance and gut microbiome effects.`
    },
    {
      question: `Can cystic acne come back after treatment?`,
      answer: `Yes — acne is chronic. Most patients need ongoing topical retinoid (tretinoin or adapalene) maintenance to prevent recurrence. Stopping all therapy too early is the most common cause of relapse. Isotretinoin offers ~80% long-term remission.`
    },
    {
      question: `Should I be tested for PCOS if I have hormonal acne?`,
      answer: `If hormonal acne coexists with irregular periods, hirsutism, weight gain, or infertility, evaluation for PCOS is reasonable: total/free testosterone, DHEA-S, LH/FSH, fasting glucose. Ovarian ultrasound at gynecology if labs suggest PCOS.`
    },
    {
      question: `Are cortisone injections useful for individual cysts?`,
      answer: `Yes — intralesional triamcinolone (2.5–5 mg/mL, 0.1 mL) can resolve a painful cyst in 24–72 hours. Done in-person at a derm or family medicine office. Telehealth can refer for the procedure.`
    },
    {
      question: `Will dietary changes (no dairy, low-glycemic) clear my acne?`,
      answer: `Diet has a modest effect: high-glycemic-load diets and skim milk are associated with worse acne in susceptible patients per AAD evidence reviews. Whey protein worsens acne in some. Low-glycemic diet may help; effect is small compared to topical and oral therapy.`
    },
    {
      question: `Is microneedling, blue-light, or chemical peel useful?`,
      answer: `Adjunctive at best. Light therapy and chemical peels offer modest benefit. Microneedling is for scar treatment, not active acne. Don't substitute these for evidence-based topical and oral therapy.`
    },
    {
      question: `What about "natural" acne treatments — tea tree oil, zinc, niacinamide?`,
      answer: `Tea tree oil 5% has small-trial efficacy similar to benzoyl peroxide 5% but is much slower. Oral zinc 30–50 mg has limited evidence. Niacinamide 4% topical reduces inflammation. None replace prescription therapy for moderate-severe acne.`
    },
    {
      question: `Can stress trigger cystic acne flares?`,
      answer: `Yes, indirectly — stress elevates cortisol and androgens which can drive sebum production and inflammatory flares. Sleep, stress management, and exercise help but are not substitutes for medical therapy in moderate-severe cases.`
    }
  ],
  relatedSymptoms: [
    `acne-breakout`,
    `skin-rash`,
    `cold-sore`,
    `birth-control`
  ],
  references: [
    {
      label: `AAD — Acne Management Guidelines (2024)`,
      url: `https://www.aad.org/member/clinical-quality/guidelines/acne`
    },
    {
      label: `AAD — Cystic Acne Patient Information`,
      url: `https://www.aad.org/public/diseases/acne/`
    },
    {
      label: `AAFP — Acne Diagnosis and Treatment`,
      url: `https://www.aafp.org/pubs/afp/issues/2019/1015/p475.html`
    },
    {
      label: `Mayo Clinic — Acne`,
      url: `https://www.mayoclinic.org/diseases-conditions/acne/symptoms-causes/syc-20368047`
    },
    {
      label: `NIH MedlinePlus — Acne`,
      url: `https://medlineplus.gov/acne.html`
    },
    {
      label: `iPLEDGE — Isotretinoin Risk Management`,
      url: `https://www.ipledgeprogram.com/`
    },
    {
      label: `GoodRx — Tretinoin pricing`,
      url: `https://www.goodrx.com/tretinoin`
    },
    {
      label: `Cochrane — Spironolactone for adult female acne`,
      url: `https://www.cochrane.org/CD009633`
    }
  ],
  riskFactors: [
    `Family history`,
    `Hormonal pattern (PCOS, premenstrual)`,
    `Adolescence`,
    `Certain medications (lithium, steroids)`,
    `High-glycemic diet`,
    `Comedogenic skincare/hair products`
  ],
  typicalTests: [
    `Photo grading`,
    `Hormonal labs (testosterone, DHEA-S) if PCOS suspected`,
    `Baseline potassium/creatinine before spironolactone`,
    `Pregnancy test before retinoids in women of childbearing potential`
  ]
};

SYMPTOM_PAGES["sinus-pressure"] = {
  slug: `sinus-pressure`,
  pid: `sym-sinus-pressure`,
  query: `sinus pressure headache for a week`,
  h1: `Sinus Pressure That Won't Quit — When It's Bacterial vs. Viral`,
  metaTitle: `Sinus Pressure & Headache Lasting >7 Days — Telehealth Treatment | TeleDirectMD`,
  metaDescription: `Sinus pressure persisting >10 days, worsening after improvement, or with face pain often signals bacterial sinusitis. Same-day $49 telehealth visit.`,
  breadcrumb: `Sinus Pressure`,
  answerLead: `Sinus pressure for more than a week — what's likely going on:`,
  answerBody: `<p>Most sinus pressure is viral and resolves in 7–10 days. But pressure that persists past 10 days, worsens after initial improvement ("double sickening"), or comes with severe one-sided face pain, fever, or thick discolored discharge often signals <strong>acute bacterial rhinosinusitis</strong>. AAFP guidelines support treatment when symptoms last 10+ days without improvement, are severe (>3–4 days of high fever and purulent discharge), or worsen after initial improvement. A telehealth visit can confirm the pattern, prescribe amoxicillin-clavulanate or a saline-rinse + intranasal-steroid plan, and rule out red flags requiring imaging.</p>`,
  symptomDef: {
    altNames: [
      `Sinus headache`,
      `Facial pressure`,
      `Rhinosinusitis`,
      `Sinus congestion`
    ],
    anatomy: `Paranasal sinuses (maxillary, frontal, ethmoid, sphenoid)`,
    treatment: `Saline irrigation + intranasal steroid; amoxicillin-clavulanate if bacterial criteria met`,
    conditionDisplayName: `Acute rhinosinusitis`
  },
  whatThisMeans: [
    `<p><strong>Viral sinusitis is by far the most common cause</strong> of sinus pressure — 90–98% of acute cases. It typically follows a cold, peaks at days 3–5, and resolves by day 10. Antibiotics do not help viral sinusitis and may cause harm.</p>`,
    `<p><strong>The 10-day rule and double-worsening pattern</strong> are the key bacterial signals. AAFP and IDSA guidelines recommend antibiotics when symptoms persist 10+ days without improvement, are severe at onset (high fever ≥39°C with purulent discharge), or worsen after a period of improvement.</p>`,
    `<p><strong>Allergic and non-allergic rhinitis</strong> can mimic sinus pressure — chronic congestion, postnasal drip, and pressure without infection. Intranasal steroids (fluticasone, mometasone) treat both.</p>`,
    `<p><strong>Migraine with sinus features</strong> is frequently misdiagnosed as sinus headache. Studies show ~88% of self-diagnosed sinus headaches meet migraine criteria. Pulsating, light-sensitive pain points to migraine.</p>`
  ],
  differentials: [
    {
      name: `Viral rhinosinusitis`,
      description: `Self-limited viral inflammation following a URI.`,
      prevalence: `~90% of acute sinusitis cases`,
      features: `Bilateral pressure, clear-to-yellow mucus, peaks day 3–5, resolves by day 10`,
      next: `Saline rinse + intranasal steroid + decongestant; no antibiotic`
    },
    {
      name: `Acute bacterial rhinosinusitis`,
      description: `Bacterial superinfection of sinuses (typically S. pneumoniae, H. influenzae).`,
      prevalence: `~2% of acute sinusitis`,
      features: `Symptoms >10 days without improvement, double-worsening, severe unilateral facial pain, fever >39°C with purulent discharge`,
      next: `Amoxicillin-clavulanate 875/125 mg BID × 5–7 days (first-line per IDSA)`
    },
    {
      name: `Allergic rhinitis`,
      description: `IgE-mediated nasal inflammation from environmental allergens.`,
      prevalence: `Affects ~25% of US adults`,
      features: `Itchy eyes, sneezing, clear watery discharge, seasonal pattern, history of allergies`,
      next: `Intranasal steroid daily + oral antihistamine (loratadine/cetirizine)`
    },
    {
      name: `Migraine with sinus features`,
      description: `Migraine misperceived as sinus headache.`,
      prevalence: `~88% of "sinus headaches" meet migraine criteria`,
      features: `Throbbing pain, light/sound sensitivity, nausea, recurs in same pattern, no purulent discharge`,
      next: `Migraine abortive (sumatriptan) and preventive evaluation`
    },
    {
      name: `Dental abscess (referred pain)`,
      description: `Upper-tooth root infection mimicking maxillary sinus pressure.`,
      prevalence: `Cause of ~10% of unilateral maxillary pain`,
      features: `One-sided cheek pressure, tooth pain on tapping, worse with chewing`,
      next: `Dental referral; in-person urgent evaluation`
    }
  ],
  redFlags: [
    `<strong>Severe one-sided face or eye pain with vision change</strong> — possible orbital cellulitis (ER now)`,
    `<strong>High fever >39°C with stiff neck or confusion</strong> — possible intracranial spread`,
    `<strong>Eyelid swelling, redness, or proptosis</strong> — orbital complication`,
    `<strong>Severe headache unlike any before</strong> with sinus symptoms — needs imaging`,
    `<strong>Symptoms >12 weeks</strong> — chronic sinusitis; needs ENT and CT`,
    `<strong>4+ acute episodes per year</strong> — recurrent acute sinusitis; ENT evaluation`,
    `<strong>Recent facial trauma or surgery</strong> with new pressure`
  ],
  eligibility: [
    `Adults 18+ in any of our 41 states`,
    `Sinus pressure 7–14 days, with or without improvement pattern`,
    `Mild-to-moderate symptoms (no high fever, no vision change)`,
    `Want guidance on whether antibiotics are appropriate`,
    `Need an OTC plan (saline + intranasal steroid) reviewed`,
    `Recurrent sinusitis but currently stable, want refill or new course`,
    `Symptoms post-cold lasting longer than expected`,
    `Want a telehealth assessment before deciding on antibiotics`
  ],
  notEligibility: [
    `Severe vision change, eye pain, or eye swelling — ER now`,
    `High fever with neck stiffness or confusion — ER now`,
    `Symptoms >12 weeks (chronic) — needs ENT and CT scan`,
    `Children under 2 with ear pain — pediatric in-person`,
    `Severe immunocompromise (chemo, transplant) — in-person`,
    `Recurrent failures of multiple antibiotic courses — ENT specialist`
  ],
  howTelehealthHelps: [
    `<p>You complete a focused intake covering symptom timeline (start date, peak, current trajectory), discharge color, fever, and red flag screen. This timeline is what determines bacterial vs. viral.</p>`,
    `<p>Dr. Bhavsar reviews and applies AAFP/IDSA criteria: ≥10 days without improvement, severe at onset (≥39°C + purulent), or double-worsening pattern. If criteria are met, amoxicillin-clavulanate is first-line.</p>`,
    `<p>If symptoms are <10 days or improving, you'll receive a structured non-antibiotic plan: high-volume saline irrigation 1–2× daily + intranasal fluticasone + 3-day pseudoephedrine cap, with explicit return-precautions.</p>`,
    `<p>Allergic rhinitis component is addressed with daily intranasal steroid year-round if appropriate — the highest-evidence treatment for chronic congestion.</p>`,
    `<p>If migraine with sinus features is more likely, you'll get an abortive (sumatriptan) and a preventive plan instead of unnecessary antibiotics.</p>`,
    `<p>Prescriptions are sent to your pharmacy within an hour. You're given a 48-hour and 7-day check-in plan and clear escalation triggers.</p>`,
    `<p>If imaging or ENT referral is indicated, you'll get a referral letter and guidance on what to ask the specialist.</p>`
  ],
  treatmentOptions: [
    {
      category: `Saline nasal irrigation`,
      detail: `High-volume isotonic or hypertonic saline (Neti pot or squeeze bottle) 1–2× daily — strong evidence for symptom relief and the cornerstone of viral sinusitis care.`
    },
    {
      category: `Intranasal corticosteroid`,
      detail: `Fluticasone 50 mcg 2 sprays each nostril daily, or mometasone equivalent. Reduces inflammation, improves drainage, helps both viral and allergic components.`
    },
    {
      category: `Oral / topical decongestant (short course)`,
      detail: `Pseudoephedrine 30–60 mg every 4–6 hours up to 3–5 days, OR oxymetazoline nasal spray ≤3 days only (rebound risk).`
    },
    {
      category: `First-line antibiotic (if criteria met)`,
      detail: `Amoxicillin-clavulanate 875/125 mg twice daily × 5–7 days per IDSA guidelines — covers beta-lactamase-producing H. influenzae.`
    },
    {
      category: `Penicillin-allergy alternative`,
      detail: `Doxycycline 100 mg twice daily × 5–7 days for confirmed penicillin allergy.`
    },
    {
      category: `Pain and fever control`,
      detail: `Ibuprofen 400 mg every 6 hours with food, or acetaminophen 500–1000 mg every 6 hours.`
    },
    {
      category: `Adjunctive intranasal antihistamine`,
      detail: `Azelastine if allergic component present — works within 30 minutes.`
    }
  ],
  medications: [
    {
      generic: `Amoxicillin-clavulanate`,
      brand: `Augmentin`,
      dosageForm: `Oral tablet`,
      drugClass: `Beta-lactam antibiotic`,
      dose: `875/125 mg twice daily × 5–7 days`,
      price: `$14–$35`,
      priceSourceUrl: `https://www.goodrx.com/amoxicillin-potassium-clavulanate`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Diarrhea, GI upset, rash`
    },
    {
      generic: `Doxycycline`,
      brand: `Vibramycin`,
      dosageForm: `Oral capsule`,
      drugClass: `Tetracycline antibiotic`,
      dose: `100 mg twice daily × 5–7 days`,
      price: `$5–$48`,
      priceSourceUrl: `https://www.goodrx.com/doxycycline-hyclate`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Photosensitivity, GI upset; avoid in pregnancy`
    },
    {
      generic: `Fluticasone propionate`,
      brand: `Flonase`,
      dosageForm: `Nasal spray`,
      drugClass: `Intranasal corticosteroid`,
      dose: `2 sprays each nostril once daily`,
      price: `$14–$53`,
      priceSourceUrl: `https://www.goodrx.com/fluticasone-propionate`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Nasal dryness, occasional epistaxis`
    },
    {
      generic: `Pseudoephedrine`,
      brand: `Sudafed`,
      dosageForm: `Oral tablet`,
      drugClass: `Sympathomimetic decongestant`,
      dose: `30–60 mg every 4–6 hours, max 3–5 days`,
      price: `$2–$8`,
      priceSourceUrl: `https://www.goodrx.com/pseudoephedrine`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Insomnia, jitteriness, BP elevation`
    },
    {
      generic: `Sumatriptan (if migraine)`,
      brand: `Imitrex`,
      dosageForm: `Oral tablet`,
      drugClass: `5-HT1B/1D agonist (triptan)`,
      dose: `50–100 mg at headache onset; may repeat once after 2 hours`,
      price: `$6–$70`,
      priceSourceUrl: `https://www.goodrx.com/sumatriptan`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Chest tightness, flushing; avoid with CV disease`
    }
  ],
  recovery: [
    {
      period: `Day 1–2`,
      detail: `Saline rinses 2× daily and intranasal steroid started. If antibiotic prescribed, fever and pain begin to improve within 48 hours.`
    },
    {
      period: `Day 3–5`,
      detail: `Significant pressure relief expected. If on antibiotic and no improvement at 72 hours, recheck — may need broader coverage.`
    },
    {
      period: `Day 5–7`,
      detail: `Most symptoms 70–90% resolved. Continue intranasal steroid for full course.`
    },
    {
      period: `Day 7–14`,
      detail: `Residual mild congestion is normal. Maintenance saline rinses help prevent recurrence.`
    },
    {
      period: `Beyond 4 weeks`,
      detail: `If symptoms persist, this is subacute sinusitis — re-evaluate; consider ENT referral and imaging.`
    }
  ],
  homeCare: [
    `Saline nasal irrigation with a Neti pot or squeeze bottle 1–2× daily using distilled or boiled water`,
    `Sleep with head elevated 30–45° to promote sinus drainage`,
    `Warm compresses over the cheeks and forehead 15 minutes 3× daily`,
    `Run a cool-mist humidifier in the bedroom (clean weekly)`,
    `Stay well-hydrated — 2+ liters water daily thins mucus`,
    `Steam inhalation from a hot shower or bowl 2× daily`,
    `Avoid known allergens (dust mites, pet dander) and smoke exposure`,
    `Don't fly if symptoms are severe — pressure changes can worsen pain`,
    `Limit alcohol and caffeine while symptomatic`,
    `Don't use oxymetazoline >3 days — rebound congestion is real`
  ],
  faqs: [
    {
      question: `How do I know if my sinus pressure is bacterial vs. viral?`,
      answer: `Three criteria suggest bacterial sinusitis (per IDSA/AAFP): symptoms lasting more than 10 days without any improvement; severe symptoms at onset (high fever ≥39°C plus purulent discharge for 3–4 days); or double-worsening (initial improvement followed by worsening). Without one of these, it's almost certainly viral and antibiotics will not help.`
    },
    {
      question: `Can a telehealth doctor prescribe antibiotics for sinus pressure?`,
      answer: `Yes — when bacterial criteria are documented. Dr. Bhavsar can prescribe amoxicillin-clavulanate (first-line) or doxycycline (penicillin-allergic) when your symptom timeline meets IDSA criteria. We will not prescribe antibiotics for clearly viral sinusitis — that's antibiotic stewardship and protects you from unnecessary side effects and resistance.`
    },
    {
      question: `Is yellow or green mucus a sign of bacterial infection?`,
      answer: `No. Mucus color alone does NOT distinguish viral from bacterial sinusitis. Yellow-green mucus simply means white blood cells are present, which happens in both viral and bacterial cases. Duration and pattern are what matter.`
    },
    {
      question: `How long does sinus pressure last?`,
      answer: `Viral sinusitis peaks at days 3–5 and resolves by day 10. Bacterial sinusitis treated with appropriate antibiotics typically improves within 48–72 hours and resolves within 7–10 days. If symptoms last over 4 weeks, it's subacute; over 12 weeks, chronic — both warrant further evaluation.`
    },
    {
      question: `Should I get a CT scan?`,
      answer: `CT scans are NOT recommended for uncomplicated acute sinusitis. They're reserved for chronic sinusitis (>12 weeks), recurrent sinusitis (4+ episodes/year), suspected complications (orbital, intracranial), or pre-surgical planning. Your telehealth visit will identify if you meet criteria.`
    },
    {
      question: `Does a saline rinse really help?`,
      answer: `Yes — strong evidence. Cochrane reviews and AAFP guidelines recommend high-volume saline irrigation as a cornerstone of sinusitis care. It mechanically clears mucus, reduces inflammation, and improves drainage. Use distilled or previously boiled water to avoid rare amebic infections.`
    },
    {
      question: `What's the difference between sinus headache and migraine?`,
      answer: `Studies show approximately 88% of self-diagnosed "sinus headaches" actually meet migraine criteria. Migraines are typically throbbing, one-sided, with light/sound sensitivity and nausea. True sinus headaches involve face pressure with other infection signs (purulent discharge, fever). Many people get triptans on telehealth and find their "sinus headaches" disappear.`
    },
    {
      question: `Can I take pseudoephedrine if I have high blood pressure?`,
      answer: `Use caution. Pseudoephedrine can raise blood pressure and heart rate. If your hypertension is well-controlled, short courses (3–5 days) are usually safe. If uncontrolled, avoid pseudoephedrine and use intranasal alternatives (saline, intranasal steroid). Discuss with your provider.`
    },
    {
      question: `How long can I use Afrin (oxymetazoline)?`,
      answer: `No more than 3 consecutive days. Longer use causes rhinitis medicamentosa — rebound congestion that gets worse every time you stop. If you've been using it longer, taper by switching to one nostril at a time and adding intranasal steroid.`
    },
    {
      question: `Are antibiotics safer if 'just in case'?`,
      answer: `No. Unnecessary antibiotics cause GI side effects, yeast infections, C. difficile colitis, allergic reactions, and contribute to resistance. AAFP estimates 50% of sinusitis antibiotic prescriptions are unnecessary. We follow IDSA criteria — that's the safer, evidence-based path.`
    },
    {
      question: `Can I fly with sinus pressure?`,
      answer: `It's not dangerous but can be very painful. Pressure changes during ascent and descent can cause severe pain (sinus barotrauma) and rarely bleeding. If you must fly, use oxymetazoline 30 minutes before takeoff/landing and chew gum during descent.`
    },
    {
      question: `Why does my sinus pressure get worse when I bend over?`,
      answer: `Sinus pressure that worsens with bending or head movement is classic for sinusitis — gravity shifts the trapped mucus and inflamed tissues. This sign helps distinguish sinusitis from tension headache or migraine.`
    },
    {
      question: `What if I'm pregnant?`,
      answer: `Saline rinses, acetaminophen, and intranasal budesonide are safe in pregnancy. Avoid pseudoephedrine in the first trimester. If antibiotic is needed, amoxicillin-clavulanate is generally safe; doxycycline is contraindicated. Always disclose pregnancy on your visit.`
    },
    {
      question: `How is the $49 visit cheaper than urgent care?`,
      answer: `Urgent care averages $280 per visit (Mira Health data); ER averages $2,715. Our $49 cash-pay visit covers the consult, prescriptions sent the same day, and a 48-hour follow-up message. No facility fee, no waiting room, no surprise bills.`
    }
  ],
  relatedSymptoms: [
    `sinus-infection`,
    `persistent-cough`,
    `allergy-symptoms`,
    `ear-pain`
  ],
  references: [
    {
      label: `AAFP — Acute Sinusitis: Diagnosis and Treatment`,
      url: `https://www.aafp.org/pubs/afp/issues/2016/1015/p640.html`
    },
    {
      label: `CDC — Sinus Infection (Sinusitis)`,
      url: `https://www.cdc.gov/antibiotic-use/sinus-infection.html`
    },
    {
      label: `Mayo Clinic — Acute Sinusitis`,
      url: `https://www.mayoclinic.org/diseases-conditions/acute-sinusitis/symptoms-causes/syc-20351671`
    },
    {
      label: `IDSA — Acute Bacterial Rhinosinusitis Guideline`,
      url: `https://www.idsociety.org/practice-guideline/acute-bacterial-rhinosinusitis/`
    },
    {
      label: `GoodRx — Prescription Pricing`,
      url: `https://www.goodrx.com/`
    },
    {
      label: `Mira Health — Average Cost Reports`,
      url: `https://www.talktomira.com/`
    }
  ],
  riskFactors: [
    `Recent viral URI`,
    `Allergic rhinitis`,
    `Cigarette smoke exposure`,
    `Anatomic deviated septum`,
    `Dental infection (upper teeth)`,
    `Immunocompromise`
  ],
  typicalTests: [
    `Clinical exam (no test needed for acute sinusitis)`,
    `CT sinus (only if chronic, recurrent, or complicated)`,
    `Nasal endoscopy (chronic cases, ENT)`,
    `Allergy testing (if allergic component suspected)`
  ]
};

SYMPTOM_PAGES["bronchitis"] = {
  slug: `bronchitis`,
  pid: `sym-bronchitis`,
  query: `chest cold won't go away with mucus cough`,
  h1: `Chest Cold That Won't Quit — Bronchitis vs. Pneumonia`,
  metaTitle: `Bronchitis Symptoms: When a Chest Cold Needs a Doctor | TeleDirectMD`,
  metaDescription: `Productive cough lasting 2–3 weeks with chest tightness is usually viral acute bronchitis — antibiotics rarely help. $49 telehealth visit rules out pneumonia and asthma flare.`,
  breadcrumb: `Bronchitis`,
  answerLead: `Chest cold with productive cough — what's likely going on:`,
  answerBody: `<p>Acute bronchitis is almost always viral and can produce a productive cough lasting 2–3 weeks (sometimes up to 6). Antibiotics do <strong>not</strong> shorten this — Cochrane and CDC are explicit. The key job of a visit is to <strong>rule out pneumonia, asthma exacerbation, and pertussis</strong>, then build a symptom-control plan. Telehealth handles this through focused intake and exam plus pulse-ox and breathing assessment if you have a home device.</p>`,
  symptomDef: {
    altNames: [
      `Acute bronchitis`,
      `Chest cold`,
      `Tracheobronchitis`,
      `Productive cough`
    ],
    anatomy: `Lower respiratory tract (large bronchi)`,
    treatment: `Symptom control (cough suppressants, bronchodilator if wheezing). No antibiotic for uncomplicated viral bronchitis.`,
    conditionDisplayName: `Acute bronchitis`
  },
  whatThisMeans: [
    `<p><strong>Acute bronchitis is viral in 90%+ of cases.</strong> Influenza, RSV, rhinovirus, coronavirus, and adenovirus are the top causes. The cough lasts a median of 18 days — many people are surprised by how long it persists even though they're getting better.</p>`,
    `<p><strong>Productive cough with yellow/green mucus does NOT mean bacterial.</strong> It just means white blood cells are present. Cochrane meta-analyses show antibiotics offer minimal benefit (a half-day shorter symptoms) at the cost of 24% more side effects.</p>`,
    `<p><strong>Pneumonia must be ruled out</strong> when there's high fever, chest pain with breathing, hypoxia (SpO2 <94%), confusion, or focal lung findings on exam. These warrant in-person evaluation and chest X-ray.</p>`,
    `<p><strong>Asthma exacerbation</strong> often presents as "bronchitis" — chest tightness, cough, wheeze. A telehealth visit can identify this pattern and start albuterol + a short oral steroid course when appropriate.</p>`
  ],
  differentials: [
    {
      name: `Acute viral bronchitis`,
      description: `Self-limited viral inflammation of large airways.`,
      prevalence: `~95% of acute bronchitis cases`,
      features: `Productive cough 1–3 weeks (median 18 days), low-grade fever early, chest soreness from coughing`,
      next: `Symptom control (dextromethorphan, honey, fluids); no antibiotic`
    },
    {
      name: `Community-acquired pneumonia`,
      description: `Bacterial or atypical infection of lung parenchyma.`,
      prevalence: `~5% of patients with cough plus fever`,
      features: `High fever, pleuritic chest pain, tachypnea, hypoxia, focal exam findings, ill appearance`,
      next: `Chest X-ray; antibiotics (amoxicillin or doxycycline) — usually in-person`
    },
    {
      name: `Asthma exacerbation`,
      description: `Reversible bronchoconstriction often triggered by viral URI.`,
      prevalence: `Common — accounts for many "bronchitis" presentations`,
      features: `Wheeze, chest tightness, nighttime cough, history of asthma or atopy, response to albuterol`,
      next: `Albuterol inhaler + 5-day oral prednisone if moderate-severe`
    },
    {
      name: `Pertussis (whooping cough)`,
      description: `Bordetella pertussis infection causing prolonged paroxysmal cough.`,
      prevalence: `Underdiagnosed in adults — consider if cough >2 weeks`,
      features: `Paroxysms of coughing, post-tussive vomit, inspiratory whoop (often absent in adults)`,
      next: `Macrolide antibiotic (azithromycin); public health reporting`
    },
    {
      name: `Post-infectious cough`,
      description: `Persistent airway hyperreactivity after a viral URI.`,
      prevalence: `Up to 25% of post-URI cases`,
      features: `Dry, tickly cough lasting 3–8 weeks after a cold`,
      next: `Inhaled steroid trial; cough suppressant; reassurance`
    }
  ],
  redFlags: [
    `<strong>Shortness of breath at rest</strong> or SpO2 <94% — possible pneumonia or PE`,
    `<strong>Chest pain with breathing</strong> (pleuritic) — possible pneumonia/PE`,
    `<strong>Coughing up blood</strong> — needs in-person evaluation`,
    `<strong>High fever >39°C lasting >3 days</strong> — possible pneumonia`,
    `<strong>Confusion or new lethargy</strong> — sepsis risk`,
    `<strong>Cough >8 weeks</strong> — chronic cough workup needed`,
    `<strong>Unilateral leg swelling with cough</strong> — rule out PE in ER`
  ],
  eligibility: [
    `Adults 18+ in our 41 states`,
    `Productive or dry cough 1–6 weeks`,
    `No high fever, no severe shortness of breath`,
    `Stable vital signs (if you can check them)`,
    `No prior history of frequent pneumonia`,
    `Want guidance on whether antibiotics or in-person are needed`,
    `Asthma history with current chest tightness needing assessment`,
    `Need work/school note while symptomatic`
  ],
  notEligibility: [
    `Severe shortness of breath at rest — ER`,
    `SpO2 <94% — in-person evaluation`,
    `Hemoptysis (blood in sputum) — urgent in-person`,
    `Suspected pneumonia (high fever + chest pain + ill appearance) — in-person`,
    `Severe immunocompromise — in-person`,
    `Cough >8 weeks — needs in-person and possibly imaging`
  ],
  howTelehealthHelps: [
    `<p>You complete an intake covering cough duration, sputum, fever, breathing difficulty, chest pain, and red flags. If you have a home pulse oximeter, you'll be asked to record SpO2.</p>`,
    `<p>Dr. Bhavsar does a video exam: looks at work of breathing, listens to your speech for breathlessness, asks you to take deep breaths and cough on camera, and checks for wheeze.</p>`,
    `<p>If signs point to viral bronchitis, you receive a symptom-control plan: dextromethorphan or benzonatate for cough, honey before bed, hydration, humidifier, and clear escalation triggers.</p>`,
    `<p>If asthma exacerbation is likely, albuterol inhaler ± a 5-day prednisone burst is prescribed.</p>`,
    `<p>If pertussis is suspected (cough >2 weeks with paroxysms), azithromycin is prescribed and household contacts are advised.</p>`,
    `<p>If pneumonia red flags are present, you'll be directed to in-person urgent care or the ER for chest X-ray.</p>`,
    `<p>A 48-hour follow-up message and 7-day reassessment plan are included. No facility fee, no waiting room.</p>`
  ],
  treatmentOptions: [
    {
      category: `Cough suppressants`,
      detail: `Dextromethorphan 30 mg every 6–8 hours, or benzonatate 100–200 mg three times daily for adults with disruptive cough.`
    },
    {
      category: `Honey`,
      detail: `1–2 teaspoons before bed — Cochrane evidence supports honey for cough relief in adults and children >1 year.`
    },
    {
      category: `Bronchodilator`,
      detail: `Albuterol inhaler 2 puffs every 4–6 hours when wheeze or chest tightness is present (especially in smokers and asthmatics).`
    },
    {
      category: `Short oral steroid (asthma exacerbation)`,
      detail: `Prednisone 40 mg daily × 5 days when bronchitis triggers an asthma flare.`
    },
    {
      category: `Pertussis treatment`,
      detail: `Azithromycin 500 mg day 1, then 250 mg days 2–5 — only if pertussis suspected (limits transmission, doesn't shorten cough).`
    },
    {
      category: `Mucolytic / hydration`,
      detail: `Guaifenesin 600–1200 mg every 12 hours, plus 2+ liters water daily to thin secretions.`
    },
    {
      category: `Symptomatic relief`,
      detail: `Acetaminophen or ibuprofen for chest soreness and low-grade fever; warm humidifier in bedroom.`
    }
  ],
  medications: [
    {
      generic: `Dextromethorphan`,
      brand: `Delsym, Robitussin DM`,
      dosageForm: `Oral liquid/tablet`,
      drugClass: `Centrally acting cough suppressant`,
      dose: `30 mg every 6–8 hours`,
      price: `$10–$15`,
      priceSourceUrl: `https://www.goodrx.com/dextromethorphan`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Drowsiness, dizziness; avoid with MAOIs/SSRIs at high doses`
    },
    {
      generic: `Benzonatate`,
      brand: `Tessalon Perles`,
      dosageForm: `Oral capsule`,
      drugClass: `Peripheral cough suppressant`,
      dose: `100–200 mg three times daily`,
      price: `$7–$23`,
      priceSourceUrl: `https://www.goodrx.com/benzonatate`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Numbness if chewed (DO NOT chew); sedation`
    },
    {
      generic: `Albuterol HFA`,
      brand: `ProAir, Ventolin`,
      dosageForm: `Metered-dose inhaler`,
      drugClass: `Short-acting beta-2 agonist`,
      dose: `2 puffs every 4–6 hours as needed`,
      price: `$19–$59`,
      priceSourceUrl: `https://www.goodrx.com/albuterol`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Tremor, jitteriness, tachycardia`
    },
    {
      generic: `Prednisone`,
      brand: `Deltasone`,
      dosageForm: `Oral tablet`,
      drugClass: `Systemic corticosteroid`,
      dose: `40 mg daily × 5 days (asthma flare with bronchitis)`,
      price: `$6–$20`,
      priceSourceUrl: `https://www.goodrx.com/prednisone`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Insomnia, mood changes, blood-sugar elevation`
    },
    {
      generic: `Azithromycin`,
      brand: `Zithromax`,
      dosageForm: `Oral tablet (Z-Pak)`,
      drugClass: `Macrolide antibiotic`,
      dose: `500 mg day 1, then 250 mg days 2–5 (only if pertussis suspected)`,
      price: `$6–$35`,
      priceSourceUrl: `https://www.goodrx.com/azithromycin`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `GI upset, QT prolongation`
    }
  ],
  recovery: [
    {
      period: `Week 1`,
      detail: `Symptoms often peak — cough may worsen briefly. Fever should resolve within 3–5 days.`
    },
    {
      period: `Week 2`,
      detail: `Cough beginning to improve. Sputum clearer. Energy returning.`
    },
    {
      period: `Week 3`,
      detail: `Cough largely resolved in 75% of patients. Some residual tickly cough is normal.`
    },
    {
      period: `Week 4–6`,
      detail: `Up to 25% have post-infectious cough this long — usually responds to short inhaled-steroid trial.`
    },
    {
      period: `Beyond 8 weeks`,
      detail: `Defined as chronic cough — needs further workup (chest X-ray, asthma evaluation, GERD assessment).`
    }
  ],
  homeCare: [
    `Hydrate aggressively — 2–3 liters water daily thins mucus`,
    `Honey 1–2 teaspoons at bedtime (adults and children >1 year)`,
    `Cool-mist humidifier in bedroom (clean weekly to prevent mold)`,
    `Steam inhalation from hot showers 2× daily`,
    `Sleep with head elevated to reduce nighttime cough`,
    `Stop smoking and avoid all secondhand smoke — single biggest factor`,
    `Throat lozenges with menthol to soothe cough reflex`,
    `Avoid cold air exposure and exercise outdoors in cold weather while symptomatic`,
    `Take ibuprofen for chest-wall soreness from coughing`,
    `Limit alcohol — dehydrates and worsens cough`
  ],
  faqs: [
    {
      question: `Do I need antibiotics for bronchitis?`,
      answer: `For uncomplicated viral acute bronchitis, no. Cochrane meta-analyses and CDC guidance are clear: antibiotics offer minimal benefit (about a half-day shorter cough) and cause 24% more side effects. We follow stewardship — antibiotics are reserved for pertussis or pneumonia, not viral bronchitis.`
    },
    {
      question: `How long does bronchitis last?`,
      answer: `Median cough duration is 18 days, and 25% of patients still cough at 4 weeks. Symptoms beyond 8 weeks are defined as chronic cough and warrant further workup.`
    },
    {
      question: `How do I know if it's pneumonia instead?`,
      answer: `Pneumonia red flags: high fever (>39°C lasting >3 days), pleuritic chest pain, shortness of breath at rest, hypoxia (SpO2 <94%), confusion, or appearing very ill. If any of these, in-person evaluation with a chest X-ray is needed.`
    },
    {
      question: `Why is my mucus yellow/green if it's not bacterial?`,
      answer: `Mucus color reflects white blood cells, not bacteria specifically. Both viral and bacterial respiratory infections produce yellow-green mucus. Color alone is not a reason to prescribe antibiotics.`
    },
    {
      question: `Can a telehealth doctor prescribe an inhaler?`,
      answer: `Yes — albuterol is a non-controlled medication. Dr. Bhavsar can prescribe an albuterol inhaler when wheeze, chest tightness, or asthma history are present. We can also start a short oral steroid course for asthma exacerbations.`
    },
    {
      question: `What's the difference between bronchitis and a cold?`,
      answer: `A cold is upper respiratory (runny nose, sore throat, sneezing). Bronchitis involves lower-airway inflammation — productive cough, chest tightness, soreness with coughing. A cold can progress into bronchitis as the virus moves down the airways.`
    },
    {
      question: `Should I get a chest X-ray?`,
      answer: `Not for uncomplicated bronchitis. Indications for chest X-ray: high fever, abnormal vital signs, focal lung findings, hemoptysis, or cough >8 weeks. Your visit will tell you whether you meet criteria.`
    },
    {
      question: `Can I exercise with bronchitis?`,
      answer: `Mild low-impact exercise (walking) is fine if you have no fever and feel up to it. Avoid intense exertion and outdoor cold-air exercise while coughing — both worsen airway inflammation. Expect reduced exercise tolerance for 2–3 weeks.`
    },
    {
      question: `Is it safe to fly with bronchitis?`,
      answer: `Yes, if you have no fever, no shortness of breath at rest, and SpO2 ≥94%. Stay hydrated and bring cough drops. If you have any wheeze or shortness of breath, get cleared first.`
    },
    {
      question: `What's chronic bronchitis vs. acute bronchitis?`,
      answer: `Acute is the short illness most people mean (1–3 weeks of cough). Chronic bronchitis is a form of COPD: productive cough most days for 3+ months in 2 consecutive years, almost always linked to smoking. Chronic needs spirometry and ongoing care.`
    },
    {
      question: `Does smoking make bronchitis worse?`,
      answer: `Yes — significantly. Smokers have longer, more severe symptoms, more secondary bacterial infection, and higher risk of progression to chronic bronchitis. Stop completely while symptomatic; this is also the highest-yield time to quit for good.`
    },
    {
      question: `Can I take cough syrup with my other medications?`,
      answer: `Most over-the-counter cough syrups are safe but can interact with antidepressants (especially MAOIs and high-dose SSRIs with dextromethorphan), sedatives, and alcohol. Always tell us your full med list — we'll flag interactions.`
    },
    {
      question: `What if I'm pregnant?`,
      answer: `Most acute bronchitis treatment in pregnancy is supportive — hydration, honey, humidifier, acetaminophen. Dextromethorphan and guaifenesin are generally considered low-risk in 2nd/3rd trimester. Avoid codeine and benzonatate. We adjust the plan when you tell us you're pregnant.`
    },
    {
      question: `Why is the $49 telehealth visit cheaper?`,
      answer: `Average urgent care visit: ~$280. Average ER visit: ~$2,715. Average primary care: ~$171 (Mira Health data). Our flat $49 cash-pay visit covers the consult, prescriptions sent same day, and a 48-hour message follow-up. No facility fees, no surprise bills.`
    }
  ],
  relatedSymptoms: [
    `persistent-cough`,
    `asthma`,
    `sinus-pressure`,
    `sinus-infection`
  ],
  references: [
    {
      label: `AAFP — Acute Bronchitis`,
      url: `https://www.aafp.org/pubs/afp/issues/2016/0915/p560.html`
    },
    {
      label: `CDC — Chest Cold (Acute Bronchitis)`,
      url: `https://www.cdc.gov/antibiotic-use/bronchitis.html`
    },
    {
      label: `Cochrane Review — Antibiotics for Acute Bronchitis`,
      url: `https://www.cochrane.org/CD000245/ARI_antibiotics-acute-bronchitis`
    },
    {
      label: `Mayo Clinic — Bronchitis`,
      url: `https://www.mayoclinic.org/diseases-conditions/bronchitis/symptoms-causes/syc-20355566`
    },
    {
      label: `NIH MedlinePlus — Bronchitis`,
      url: `https://medlineplus.gov/bronchitis.html`
    },
    {
      label: `GoodRx — Prescription Pricing`,
      url: `https://www.goodrx.com/`
    }
  ],
  riskFactors: [
    `Active smoking or secondhand smoke`,
    `Recent viral URI`,
    `Asthma or COPD history`,
    `GERD`,
    `Air pollution exposure`,
    `Immunocompromise`
  ],
  typicalTests: [
    `Clinical exam (no test needed for uncomplicated cases)`,
    `Pulse oximetry (home or in office)`,
    `Chest X-ray (only if pneumonia suspected)`,
    `Spirometry (if asthma/COPD suspected)`
  ]
};

SYMPTOM_PAGES["yeast-infection"] = {
  slug: `yeast-infection`,
  pid: `sym-yeast-infection`,
  query: `vaginal yeast infection treatment online`,
  h1: `Vaginal Yeast Infection — Same-Day Diflucan Online`,
  metaTitle: `Yeast Infection Treatment Online — Fluconazole Rx in 1 Hour | TeleDirectMD`,
  metaDescription: `Itching, thick white discharge, burning? Most uncomplicated yeast infections treat with one fluconazole pill or 1–7 day topical. $49 telehealth visit, prescription same day.`,
  breadcrumb: `Yeast Infection`,
  answerLead: `Vaginal itching with thick white discharge — what's likely going on:`,
  answerBody: `<p>The classic combination of intense itching, burning, and thick white "cottage cheese" discharge without odor strongly suggests <strong>vulvovaginal candidiasis</strong> (yeast infection). Per CDC and AAFP, uncomplicated cases respond to a single 150 mg fluconazole oral dose or 1–7 day topical azoles. Telehealth handles uncomplicated cases efficiently — most women feel better within 24–48 hours of treatment.</p>`,
  symptomDef: {
    altNames: [
      `Vulvovaginal candidiasis`,
      `Vaginal candidiasis`,
      `Thrush (vaginal)`,
      `Yeast`
    ],
    anatomy: `Vulva and vagina`,
    treatment: `Single-dose fluconazole 150 mg, or topical azole (miconazole, clotrimazole) 1–7 days`,
    conditionDisplayName: `Vulvovaginal candidiasis`
  },
  whatThisMeans: [
    `<p><strong>Yeast infections affect 75% of women at some point</strong>; about 45% have ≥2 episodes. Most are caused by Candida albicans, which is part of normal flora that overgrows when the vaginal environment changes.</p>`,
    `<p><strong>Triggers include antibiotics, hormonal changes (pregnancy, contraceptives), uncontrolled diabetes, immunosuppression, tight non-breathable clothing, and recent corticosteroid use.</strong> Identifying the trigger helps prevent recurrence.</p>`,
    `<p><strong>Bacterial vaginosis (BV) and trichomoniasis can mimic yeast</strong> but treat differently. Fishy odor, thin gray discharge, and burning during sex point to BV (metronidazole). Frothy yellow-green discharge with strawberry cervix suggests trichomoniasis (also metronidazole).</p>`,
    `<p><strong>Recurrent yeast (≥4 episodes/year) needs different management</strong> — confirm with culture, longer induction therapy (7–14 days), and 6-month maintenance suppression with weekly fluconazole.</p>`
  ],
  differentials: [
    {
      name: `Vulvovaginal candidiasis`,
      description: `Overgrowth of Candida species in the vagina.`,
      prevalence: `~75% of women lifetime`,
      features: `Intense itching, thick white discharge, no odor, burning with urination/sex`,
      next: `Single fluconazole 150 mg PO, or topical clotrimazole/miconazole 1–7 days`
    },
    {
      name: `Bacterial vaginosis`,
      description: `Overgrowth of anaerobic bacteria displacing normal lactobacilli.`,
      prevalence: `Most common vaginitis (~30% of women)`,
      features: `Thin gray-white discharge, fishy odor (worse after sex), mild irritation, NO intense itch`,
      next: `Metronidazole 500 mg PO BID × 7 days, or clindamycin cream`
    },
    {
      name: `Trichomoniasis`,
      description: `Sexually transmitted protozoan infection.`,
      prevalence: `~3–4 million US cases/year`,
      features: `Frothy yellow-green discharge, strawberry cervix, fishy odor, dyspareunia`,
      next: `Metronidazole 2 g PO single dose; partner treatment; STI screen`
    },
    {
      name: `Allergic / contact vulvitis`,
      description: `Reaction to soaps, detergents, latex, lubricants, or feminine sprays.`,
      prevalence: `Common — often misdiagnosed as yeast`,
      features: `Burning > itching, no discharge, recent product use, redness`,
      next: `Identify and stop trigger; topical hydrocortisone 1% short course`
    },
    {
      name: `Atrophic vaginitis`,
      description: `Estrogen-deficiency thinning of vaginal tissue (postmenopausal).`,
      prevalence: `~50% of postmenopausal women`,
      features: `Dryness, burning, dyspareunia, light spotting, thin pale tissue`,
      next: `Vaginal estrogen cream or moisturizer`
    }
  ],
  redFlags: [
    `<strong>Pregnancy</strong> — avoid oral fluconazole; use topical only`,
    `<strong>Pelvic pain or fever</strong> — possible PID; in-person workup`,
    `<strong>Foul odor</strong> — points to BV or trichomoniasis, not yeast`,
    `<strong>Bloody discharge</strong> — needs in-person exam`,
    `<strong>4+ episodes per year</strong> — recurrent VVC; needs culture and induction-maintenance regimen`,
    `<strong>Severe vulvar swelling/ulcers</strong> — in-person exam`,
    `<strong>Diabetes uncontrolled</strong> — recurrent yeast often signals high glucose`
  ],
  eligibility: [
    `Women 18+ in our 41 states`,
    `Classic itching + thick white discharge + no odor`,
    `First episode or infrequent recurrence`,
    `Not pregnant (or willing to use topical-only therapy)`,
    `Not currently on warfarin (interaction with fluconazole)`,
    `No fever or pelvic pain`,
    `Want fast same-day prescription`,
    `Need treatment without in-person exam embarrassment`
  ],
  notEligibility: [
    `Pelvic pain, fever, or new abdominal pain — possible PID, needs in-person`,
    `First-ever vaginal symptoms — recommended to confirm diagnosis in person at least once`,
    `Bloody discharge or post-menopausal bleeding — in-person`,
    `4+ infections in a year — needs culture and structured induction`,
    `Pregnancy with severe symptoms — OB evaluation`,
    `Severe vulvar lesions or ulcers — in-person exam`
  ],
  howTelehealthHelps: [
    `<p>You complete a focused intake covering symptom pattern, discharge characteristics, odor, recent antibiotic use, sexual history, and pregnancy status.</p>`,
    `<p>Dr. Bhavsar reviews and applies CDC/AAFP criteria. Classic VVC with no red flags can be treated empirically — extensive evidence supports this approach.</p>`,
    `<p>You receive your prescription within an hour: oral fluconazole 150 mg single dose (most women's preference) or topical miconazole/clotrimazole if pregnant or preferred.</p>`,
    `<p>If history suggests BV or trichomoniasis instead, metronidazole is prescribed and partner-treatment guidance given.</p>`,
    `<p>Recurrent cases are flagged for culture and structured 6-month suppression therapy.</p>`,
    `<p>You get a 48-hour follow-up message and clear instructions on what to do if symptoms don't improve in 72 hours.`
  ],
  treatmentOptions: [
    {
      category: `Single-dose oral antifungal`,
      detail: `Fluconazole 150 mg PO once — most convenient option for uncomplicated VVC. May repeat in 72 hours for severe symptoms.`
    },
    {
      category: `Topical azoles (1-day)`,
      detail: `Miconazole 1200 mg or tioconazole 6.5% ointment — single application; same efficacy as oral.`
    },
    {
      category: `Topical azoles (3-day)`,
      detail: `Miconazole 4% cream or clotrimazole 200 mg suppository × 3 nights — preferred in pregnancy.`
    },
    {
      category: `Topical azoles (7-day)`,
      detail: `Miconazole 2% cream or clotrimazole 100 mg × 7 nights — for severe or pregnancy cases.`
    },
    {
      category: `Recurrent VVC induction`,
      detail: `Fluconazole 150 mg every 72 hours × 3 doses, then weekly × 6 months.`
    },
    {
      category: `Symptomatic relief`,
      detail: `Topical hydrocortisone 1% short course for severe vulvar itch; cool compresses; loose cotton clothing.`
    },
    {
      category: `Trigger reduction`,
      detail: `Stop douching; switch to fragrance-free cleansers; avoid tight non-breathable underwear; control diabetes.`
    }
  ],
  medications: [
    {
      generic: `Fluconazole`,
      brand: `Diflucan`,
      dosageForm: `Oral tablet`,
      drugClass: `Triazole antifungal`,
      dose: `150 mg PO single dose; may repeat in 72 hours`,
      price: `$3–$29`,
      priceSourceUrl: `https://www.goodrx.com/fluconazole`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Headache, nausea; avoid in pregnancy`
    },
    {
      generic: `Miconazole`,
      brand: `Monistat`,
      dosageForm: `Vaginal cream/suppository`,
      drugClass: `Topical imidazole antifungal`,
      dose: `1, 3, or 7 day regimens available`,
      price: `$11–$19`,
      priceSourceUrl: `https://www.goodrx.com/monistat-1`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Local burning, irritation`
    },
    {
      generic: `Clotrimazole`,
      brand: `Gyne-Lotrimin`,
      dosageForm: `Vaginal cream/tablet`,
      drugClass: `Topical imidazole antifungal`,
      dose: `100 mg vaginal × 7 days`,
      price: `$5–$13`,
      priceSourceUrl: `https://www.goodrx.com/clotrimazole-non-prescription/what-is`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Local burning`
    },
    {
      generic: `Terconazole`,
      brand: `Terazol`,
      dosageForm: `Vaginal cream`,
      drugClass: `Topical triazole antifungal`,
      dose: `0.4% cream × 7 days or 0.8% × 3 days`,
      price: `$9–$45`,
      priceSourceUrl: `https://www.goodrx.com/terconazole`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Local irritation, headache`
    },
    {
      generic: `Metronidazole (if BV)`,
      brand: `Flagyl`,
      dosageForm: `Oral tablet`,
      drugClass: `Nitroimidazole antibiotic`,
      dose: `500 mg BID × 7 days`,
      price: `$5–$22`,
      priceSourceUrl: `https://www.goodrx.com/metronidazole`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Metallic taste, GI upset; avoid alcohol`
    }
  ],
  recovery: [
    {
      period: `Hours 24–48`,
      detail: `Itching and burning begin to improve. Discharge thins.`
    },
    {
      period: `Day 3`,
      detail: `Most symptoms 70%+ resolved. If not, second fluconazole dose may be added or topical extended.`
    },
    {
      period: `Day 5–7`,
      detail: `Symptoms fully resolve in 80–90% of cases.`
    },
    {
      period: `Week 2`,
      detail: `Tissue healing complete. Resume normal activity.`
    },
    {
      period: `3+ episodes in 12 months`,
      detail: `Triggers persistent management — ask about culture-confirmed recurrent VVC plan.`
    }
  ],
  homeCare: [
    `Wear loose, breathable cotton underwear`,
    `Avoid scented soaps, douches, sprays, and bubble baths`,
    `Change out of wet swimsuits and workout clothes promptly`,
    `Sleep without underwear to allow airflow`,
    `Limit refined sugar (some women find it triggers flares)`,
    `Probiotic-rich foods (yogurt with live cultures) — modest evidence`,
    `Avoid sex during active infection if it's painful`,
    `Cool compresses for itch relief`,
    `Don't share towels or wash items together with infectious laundry`,
    `If diabetic, optimize glucose control — high glucose feeds yeast`
  ],
  faqs: [
    {
      question: `Can a telehealth doctor prescribe fluconazole?`,
      answer: `Yes — fluconazole (Diflucan) is a non-controlled medication. Dr. Bhavsar can prescribe a single 150 mg oral dose for uncomplicated yeast infections. The prescription is sent to your pharmacy within an hour.`
    },
    {
      question: `Should I just buy Monistat over the counter?`,
      answer: `That's reasonable for classic recurrent symptoms you've had before. But about 33% of women who self-diagnose yeast actually have BV, trichomoniasis, or contact dermatitis — those won't respond to Monistat. A $49 telehealth visit lets us confirm and treat correctly the first time.`
    },
    {
      question: `How fast does fluconazole work?`,
      answer: `Most women notice itching and burning improve within 24–48 hours. Full symptom resolution typically by day 5–7. If you're not better at 72 hours, message us — a second dose or different therapy may be needed.`
    },
    {
      question: `Is fluconazole safe in pregnancy?`,
      answer: `No — oral fluconazole is avoided in pregnancy due to possible teratogenic effects. CDC and ACOG recommend topical azoles (miconazole or clotrimazole 7-day course) instead. Always tell us if you're pregnant or trying.`
    },
    {
      question: `Why do I keep getting yeast infections?`,
      answer: `Common triggers: recent antibiotics, hormonal contraceptives, pregnancy, uncontrolled diabetes, immunosuppression, tight clothing, and frequent douching. If you have ≥4 episodes/year, you have recurrent VVC and need a different plan: culture, longer induction, then 6-month suppression.`
    },
    {
      question: `Can a man get a yeast infection from his partner?`,
      answer: `Rarely — male candidiasis (balanitis) presents as an itchy red rash on the glans. Not considered an STI; treat with topical antifungal. Routine partner treatment is not recommended for typical female VVC, but symptomatic partners should be treated.`
    },
    {
      question: `What's the difference between yeast and BV?`,
      answer: `Yeast: thick white "cottage cheese" discharge, intense itch, no odor, burning. BV: thin gray-white discharge, fishy odor (especially after sex), mild irritation, no intense itch. The treatments are completely different — that's why getting the diagnosis right matters.`
    },
    {
      question: `Is yeast an STI?`,
      answer: `No. Candida is part of normal flora; overgrowth happens for non-sexual reasons. However, sexual activity can sometimes trigger flares due to friction, lubricant changes, or microbiome disruption.`
    },
    {
      question: `Can I have sex with a yeast infection?`,
      answer: `It's not dangerous but usually uncomfortable. Sex can worsen burning and slightly delay healing. Most women prefer to wait until symptoms resolve. If you do have sex, use a non-irritating lubricant.`
    },
    {
      question: `What if symptoms don't improve in 3 days?`,
      answer: `Message us. Possibilities: the diagnosis isn't yeast (could be BV, trichomoniasis, or dermatitis); the strain is non-albicans (resistant to single-dose fluconazole); or recurrent VVC requiring induction therapy. We can adjust the plan.`
    },
    {
      question: `Are probiotics helpful?`,
      answer: `Modest evidence — Lactobacillus probiotics (oral or vaginal) may reduce recurrence in women with frequent infections. Not a substitute for antifungals during an active infection. Brand quality varies; look for Lactobacillus rhamnosus or L. reuteri strains.`
    },
    {
      question: `Does eating yogurt help?`,
      answer: `Probably not significantly. The strains in most yogurts don't reliably reach the vagina. Targeted Lactobacillus probiotic supplements are more effective if you want to try probiotic prophylaxis.`
    },
    {
      question: `Can the $49 visit cover prescriptions for both me and my partner?`,
      answer: `For yeast infections, partner treatment is rarely needed — they're not classified as STIs. If your partner has symptoms (rash, itching), they need their own visit and prescription. Standard VVC treatment is for you alone.`
    },
    {
      question: `How does this compare to a $280 urgent care visit?`,
      answer: `Urgent care averages $280 (Mira Health). A primary care visit averages $171. Our $49 telehealth visit handles uncomplicated VVC just as effectively — same first-line medication, same 24-hour symptom relief — with no waiting room or facility fee.`
    }
  ],
  relatedSymptoms: [
    `burning-urination`,
    `skin-rash`,
    `birth-control`
  ],
  references: [
    {
      label: `CDC — Vaginal Candidiasis`,
      url: `https://www.cdc.gov/fungal/diseases/candidiasis/genital/index.html`
    },
    {
      label: `AAFP — Vulvovaginitis: Diagnosis and Treatment`,
      url: `https://www.aafp.org/pubs/afp/issues/2018/0301/p321.html`
    },
    {
      label: `CDC — STI Treatment Guidelines (Vulvovaginal Candidiasis)`,
      url: `https://www.cdc.gov/std/treatment-guidelines/candidiasis.htm`
    },
    {
      label: `Mayo Clinic — Yeast Infection`,
      url: `https://www.mayoclinic.org/diseases-conditions/yeast-infection/symptoms-causes/syc-20378999`
    },
    {
      label: `ACOG — Vaginitis FAQ`,
      url: `https://www.acog.org/womens-health/faqs/vaginitis`
    },
    {
      label: `GoodRx — Prescription Pricing`,
      url: `https://www.goodrx.com/`
    }
  ],
  riskFactors: [
    `Recent antibiotic use`,
    `Pregnancy`,
    `Uncontrolled diabetes`,
    `Immunosuppression`,
    `Hormonal contraceptives`,
    `Corticosteroid use`,
    `Tight non-breathable underwear`
  ],
  typicalTests: [
    `Clinical diagnosis (symptoms + characteristic discharge)`,
    `Vaginal pH (4–4.5 in yeast vs. >4.5 in BV/trich)`,
    `Microscopy with KOH (yeast/hyphae)`,
    `Culture (recurrent or refractory cases)`
  ]
};

SYMPTOM_PAGES["erectile-dysfunction"] = {
  slug: `erectile-dysfunction`,
  pid: `sym-erectile-dysfunction`,
  query: `erectile dysfunction telehealth prescription`,
  h1: `Erectile Dysfunction — Online Sildenafil & Tadalafil Same Day`,
  metaTitle: `ED Treatment Online — Viagra, Cialis Generic Rx | TeleDirectMD`,
  metaDescription: `Trouble getting or keeping an erection? Generic sildenafil from $0.50/pill, tadalafil daily option. $49 telehealth, real doctor, prescription same day in 41 states.`,
  breadcrumb: `Erectile Dysfunction`,
  answerLead: `Trouble getting or keeping an erection — what to know:`,
  answerBody: `<p>Erectile dysfunction (ED) affects ~30 million American men. About 70% of cases respond to first-line PDE5 inhibitors — sildenafil, tadalafil, vardenafil, or avanafil. AUA guidelines support telehealth-based prescribing of these medications after a focused history and cardiovascular risk assessment. Generic sildenafil now costs about $0.50–$2 per pill.</p>`,
  symptomDef: {
    altNames: [
      `ED`,
      `Impotence`,
      `Erectile insufficiency`
    ],
    anatomy: `Penis (cavernosal vascular and neural systems)`,
    treatment: `PDE5 inhibitor (sildenafil, tadalafil, vardenafil) — first-line; address vascular risk factors`,
    conditionDisplayName: `Erectile dysfunction`
  },
  whatThisMeans: [
    `<p><strong>ED is a vascular disease in most cases.</strong> The same arterial dysfunction that causes ED can precede heart attack and stroke by 3–5 years. ED is sometimes called "the canary in the coal mine" for cardiovascular disease.</p>`,
    `<p><strong>PDE5 inhibitors work for ~70% of men.</strong> Sildenafil and vardenafil are on-demand (take 30–60 minutes before sex). Tadalafil works longer (up to 36 hours "weekend pill") or daily low-dose. Avanafil has the fastest onset.</p>`,
    `<p><strong>Cardiovascular risk must be assessed</strong> because PDE5 inhibitors are absolutely contraindicated with nitrates (cause severe hypotension). Recent heart attack, unstable angina, or severe heart failure are also contraindications.</p>`,
    `<p><strong>Lifestyle factors matter enormously.</strong> Smoking, sedentary behavior, obesity, and uncontrolled diabetes/hypertension all worsen ED. Mediterranean-style diet, weight loss, and exercise improve ED in trials independently of medication.</p>`
  ],
  differentials: [
    {
      name: `Vasculogenic ED`,
      description: `Endothelial dysfunction reducing penile blood flow.`,
      prevalence: `~70% of ED cases`,
      features: `Gradual onset over months-years, age >40, CV risk factors, normal libido`,
      next: `PDE5 inhibitor + CV risk reduction`
    },
    {
      name: `Psychogenic ED`,
      description: `Performance anxiety, depression, relationship stress.`,
      prevalence: `~20% of cases (more common <40)`,
      features: `Sudden onset, situational (good with masturbation, poor with partner), preserved morning erections`,
      next: `PDE5 trial + counseling/CBT; treat depression if present`
    },
    {
      name: `Hypogonadism (low testosterone)`,
      description: `Insufficient testosterone production.`,
      prevalence: `~5–10% of ED cases`,
      features: `Low libido, fatigue, mood changes, reduced muscle mass`,
      next: `Morning total testosterone × 2; if low, endocrine workup`
    },
    {
      name: `Medication-induced ED`,
      description: `Side effect from antidepressants, beta-blockers, finasteride, antihistamines.`,
      prevalence: `~25% of men on multiple meds`,
      features: `Onset coincides with new medication start`,
      next: `Review meds; substitute when possible (e.g., bupropion vs SSRI)`
    },
    {
      name: `Neurogenic ED`,
      description: `Nerve damage from diabetes, prostate surgery, spinal cord injury, MS.`,
      prevalence: `Variable`,
      features: `Poor response to oral PDE5; numbness or other neuro symptoms`,
      next: `Specialist (urology); intracavernosal injection or vacuum device`
    }
  ],
  redFlags: [
    `<strong>Currently using nitrates</strong> (nitroglycerin) — PDE5 inhibitors absolutely contraindicated`,
    `<strong>Recent heart attack, stroke, or unstable angina</strong> — needs cardiology clearance`,
    `<strong>Severe heart failure</strong> — needs cardiology clearance`,
    `<strong>Painful or curved erection</strong> — possible Peyronie's disease; urology referral`,
    `<strong>Priapism history</strong> (erection >4 hours) — needs urology`,
    `<strong>Sudden vision or hearing loss</strong> on PDE5 — stop drug, ER`,
    `<strong>Severe liver or kidney impairment</strong> — dose adjustment needed`
  ],
  eligibility: [
    `Men 18+ in our 41 states`,
    `Persistent difficulty achieving or maintaining erection`,
    `No nitrate use`,
    `No recent (<6 month) heart attack or stroke`,
    `No severe heart failure (NYHA III–IV)`,
    `Want generic sildenafil or tadalafil prescription`,
    `Comfortable with telehealth-based CV risk assessment`,
    `Need same-day discreet prescription`
  ],
  notEligibility: [
    `Currently using nitrates (any form) — absolute contraindication`,
    `Heart attack, stroke, or unstable angina in past 6 months`,
    `Severe heart failure (NYHA III–IV)`,
    `Severe hypotension or uncontrolled hypertension`,
    `Suspected Peyronie's disease — urology referral`,
    `Severe liver disease (Child-Pugh C)`,
    `Concurrent ritonavir or other strong CYP3A4 inhibitor without dose adjustment`
  ],
  howTelehealthHelps: [
    `<p>You complete a focused intake covering ED severity, onset pattern, libido, morning erections, medications, cardiovascular history, and AUA Sexual Health Inventory for Men (SHIM) score.</p>`,
    `<p>Dr. Bhavsar reviews and screens for contraindications. Cardiovascular risk is assessed using your reported BP, history, and any recent labs.</p>`,
    `<p>If safe, you receive a generic sildenafil 50 mg or tadalafil 10 mg trial — typically the most cost-effective starting points.</p>`,
    `<p>If pattern suggests psychogenic ED (preserved morning erections, sudden onset, situational), counseling resources are provided alongside PDE5 trial.</p>`,
    `<p>If hypogonadism is suspected (low libido, fatigue), you'll be directed to lab testing for total testosterone before pursuing TRT-related care in person.</p>`,
    `<p>Lifestyle plan: smoking cessation, exercise, Mediterranean-pattern diet, weight loss target — these improve ED outcomes by 30–40% independently of medication.</p>`,
    `<p>Generic sildenafil from GoodRx is often $0.50–$2 per pill. Prescription is sent same day, no embarrassment, no waiting room.`
  ],
  treatmentOptions: [
    {
      category: `Sildenafil (on-demand)`,
      detail: `50 mg taken 30–60 min before sex; may adjust to 25 or 100 mg. Avoid high-fat meals (delays absorption).`
    },
    {
      category: `Tadalafil (on-demand)`,
      detail: `10 mg taken 30 min before sex; may adjust to 5–20 mg. Effect lasts up to 36 hours — "weekend pill."`
    },
    {
      category: `Tadalafil daily`,
      detail: `2.5–5 mg every day for spontaneity; also FDA-approved for BPH.`
    },
    {
      category: `Vardenafil`,
      detail: `10 mg before sex; alternative to sildenafil with similar profile.`
    },
    {
      category: `Avanafil`,
      detail: `100 mg before sex; fastest onset (~15 min); fewer visual side effects.`
    },
    {
      category: `Lifestyle change`,
      detail: `Smoking cessation, regular aerobic exercise (150 min/week), Mediterranean diet, weight loss if BMI >27 — significantly improve ED.`
    },
    {
      category: `Address underlying conditions`,
      detail: `Optimize blood pressure, glucose, cholesterol; review medication list for ED-causing drugs.`
    }
  ],
  medications: [
    {
      generic: `Sildenafil`,
      brand: `Viagra`,
      dosageForm: `Oral tablet`,
      drugClass: `PDE5 inhibitor`,
      dose: `50 mg 30–60 min before sex; range 25–100 mg`,
      price: `$5–$147`,
      priceSourceUrl: `https://www.goodrx.com/sildenafil`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Headache, flushing, nasal congestion, blue-tinted vision; avoid with nitrates`
    },
    {
      generic: `Tadalafil`,
      brand: `Cialis`,
      dosageForm: `Oral tablet`,
      drugClass: `PDE5 inhibitor`,
      dose: `10 mg before sex (range 5–20 mg) OR 2.5–5 mg daily`,
      price: `$5–$147`,
      priceSourceUrl: `https://www.goodrx.com/sildenafil`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Headache, back pain, nasal congestion; avoid with nitrates`
    },
    {
      generic: `Vardenafil`,
      brand: `Levitra`,
      dosageForm: `Oral tablet`,
      drugClass: `PDE5 inhibitor`,
      dose: `10 mg 30–60 min before sex; range 5–20 mg`,
      price: `$5–$147`,
      priceSourceUrl: `https://www.goodrx.com/sildenafil`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Headache, flushing; avoid with QT-prolonging meds`
    },
    {
      generic: `Avanafil`,
      brand: `Stendra`,
      dosageForm: `Oral tablet`,
      drugClass: `PDE5 inhibitor`,
      dose: `100 mg 15 min before sex; range 50–200 mg`,
      price: `$5–$147`,
      priceSourceUrl: `https://www.goodrx.com/sildenafil`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Headache, flushing; faster onset, fewer visual changes`
    },
    {
      generic: `Bupropion (if ED from SSRI)`,
      brand: `Wellbutrin`,
      dosageForm: `Oral tablet`,
      drugClass: `NDRI antidepressant`,
      dose: `150 mg daily, may add to or replace SSRI`,
      price: `$5–$147`,
      priceSourceUrl: `https://www.goodrx.com/sildenafil`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Insomnia, dry mouth; lowers seizure threshold`
    }
  ],
  recovery: [
    {
      period: `First dose`,
      detail: `Take on empty stomach 30–60 minutes before planned sex. Sexual stimulation still required for erection.`
    },
    {
      period: `After 4 attempts`,
      detail: `If no benefit, dose may be doubled (e.g., 50→100 mg sildenafil). Most non-responders haven't tried optimal dose.`
    },
    {
      period: `After 8 attempts at max dose`,
      detail: `If still no response, switch to a different PDE5 inhibitor — some men respond to one but not another.`
    },
    {
      period: `Month 2–3`,
      detail: `Lifestyle changes (exercise, weight loss, no smoking) compound the benefit of medication.`
    },
    {
      period: `Long-term`,
      detail: `Daily tadalafil is an option for spontaneity. Annual cardiovascular review recommended — ED predicts CV events.`
    }
  ],
  homeCare: [
    `Quit smoking — single highest-impact lifestyle change`,
    `Aerobic exercise 150 minutes per week (improves erections in trials)`,
    `Mediterranean-style diet (vegetables, fish, olive oil)`,
    `Weight loss if BMI >27 — every kg helps`,
    `Limit alcohol to 1–2 drinks (more worsens ED)`,
    `Pelvic floor (Kegel) exercises — moderate evidence`,
    `Sleep 7–9 hours nightly; treat sleep apnea if suspected`,
    `Manage stress — performance anxiety is a major contributor`,
    `Open communication with partner reduces psychogenic component`,
    `Time medication with meals — avoid high-fat meal with sildenafil`
  ],
  faqs: [
    {
      question: `Is ED a sign of heart disease?`,
      answer: `Often yes — vasculogenic ED reflects endothelial dysfunction throughout the body. Studies show ED can precede heart attack or stroke by 3–5 years. We use the visit to flag CV risk factors and recommend appropriate workup.`
    },
    {
      question: `Can a telehealth doctor prescribe Viagra or Cialis?`,
      answer: `Yes — sildenafil and tadalafil are non-controlled medications. Dr. Bhavsar can prescribe them after a focused history and cardiovascular risk assessment, in line with AUA guidelines. The prescription is sent the same day.`
    },
    {
      question: `How much does generic sildenafil cost?`,
      answer: `Generic sildenafil is now $0.50–(see medication table) coupon at most pharmacies — about 10–20× cheaper than brand-name Viagra. Tadalafil generic is $0.80–$3 per pill. We send the prescription anywhere you choose.`
    },
    {
      question: `What's the difference between Viagra and Cialis?`,
      answer: `Sildenafil (Viagra): on-demand, lasts 4–6 hours, take on empty stomach. Tadalafil (Cialis): on-demand option lasts 24–36 hours ("weekend pill") OR daily low-dose for spontaneity. Both have ~70% response rate. Choice depends on lifestyle preference.`
    },
    {
      question: `Can I take sildenafil if I'm on blood pressure medication?`,
      answer: `Most BP medications are compatible (ACE inhibitors, ARBs, calcium channel blockers, diuretics). The exception is nitrates (nitroglycerin, isosorbide) — absolute contraindication. Alpha-blockers (tamsulosin) need spaced timing. We screen all your meds.`
    },
    {
      question: `Do I need a blood test before getting an ED prescription?`,
      answer: `Not for typical PDE5 prescribing — AUA endorses telehealth prescribing after focused history. We may suggest testosterone testing if low libido and fatigue are present, but that doesn't delay your initial prescription.`
    },
    {
      question: `How long does sildenafil take to work?`,
      answer: `30–60 minutes on an empty stomach. High-fat meals delay absorption by up to 60 minutes. Effect lasts 4–6 hours. Sexual stimulation is still required for erection.`
    },
    {
      question: `What if Viagra doesn't work the first time?`,
      answer: `~70% respond to first attempt at proper dose. Try at least 4 attempts at proper dose (50 mg sildenafil or 10 mg tadalafil) before declaring failure. Many non-responders need dose increase or switch to a different PDE5 inhibitor.`
    },
    {
      question: `Are PDE5 inhibitors safe long-term?`,
      answer: `Yes — over 25 years of safety data. No evidence of long-term harm with appropriate use. Daily tadalafil is FDA-approved for chronic use. Common side effects are mild and self-limited.`
    },
    {
      question: `Can ED be reversed with lifestyle changes?`,
      answer: `Yes — weight loss, smoking cessation, exercise, and Mediterranean diet improve ED in 30–40% of men in trials, sometimes restoring spontaneous function. These compound with medication for best results.`
    },
    {
      question: `What about testosterone replacement?`,
      answer: `TRT is appropriate only for men with confirmed low testosterone (two morning total T levels <300 ng/dL) AND symptoms (low libido, fatigue, mood). It's not a routine ED treatment. Side effects include erythrocytosis, infertility, and possible CV risk; needs in-person monitoring.`
    },
    {
      question: `Can I get vacuum devices or injections through telehealth?`,
      answer: `Vacuum devices (VEDs) are available OTC and we can recommend reputable ones. Intracavernosal injections (alprostadil, Trimix) require in-person urology training and are reserved for PDE5 non-responders.`
    },
    {
      question: `Will my partner know I'm on Viagra?`,
      answer: `Only if you tell them. Sildenafil and tadalafil cause no obvious behavioral changes; mild facial flushing or nasal congestion may occur. Many couples find open conversation about ED actually improves intimacy.`
    },
    {
      question: `How does the $49 visit compare to other telehealth ED services?`,
      answer: `Many ED-only telehealth services charge $30–$60/visit PLUS expensive bundled medication ($60–$200/month). With us, the $49 visit goes through a real GA-licensed physician, and you fill the prescription at YOUR pharmacy with GoodRx — generic sildenafil at $0.50/pill saves hundreds per year.`
    }
  ],
  relatedSymptoms: [],
  references: [
    {
      label: `AUA — Erectile Dysfunction Guideline`,
      url: `https://www.auanet.org/guidelines-and-quality/guidelines/erectile-dysfunction-(ed)-guideline`
    },
    {
      label: `Mayo Clinic — Erectile Dysfunction`,
      url: `https://www.mayoclinic.org/diseases-conditions/erectile-dysfunction/symptoms-causes/syc-20355776`
    },
    {
      label: `NIDDK — Erectile Dysfunction`,
      url: `https://www.niddk.nih.gov/health-information/urologic-diseases/erectile-dysfunction`
    },
    {
      label: `Urology Care Foundation — ED`,
      url: `https://www.urologyhealth.org/urology-a-z/e/erectile-dysfunction-(ed)`
    },
    {
      label: `AAFP — Erectile Dysfunction Diagnosis & Management`,
      url: `https://www.aafp.org/pubs/afp/issues/2016/1015/p820.html`
    },
    {
      label: `GoodRx — Sildenafil Pricing`,
      url: `https://www.goodrx.com/sildenafil`
    }
  ],
  riskFactors: [
    `Age >40`,
    `Cardiovascular disease`,
    `Diabetes`,
    `Hypertension`,
    `Smoking`,
    `Obesity`,
    `Sedentary lifestyle`,
    `Depression`,
    `Certain medications (SSRIs, beta-blockers)`
  ],
  typicalTests: [
    `Clinical history (Sexual Health Inventory for Men, SHIM)`,
    `Morning total testosterone (if low libido/fatigue)`,
    `Fasting lipid panel and glucose (CV risk)`,
    `Blood pressure check`
  ]
};

SYMPTOM_PAGES["acid-reflux"] = {
  slug: `acid-reflux`,
  pid: `sym-acid-reflux`,
  query: `acid reflux heartburn medication online`,
  h1: `Acid Reflux & Heartburn — Same-Day PPI Prescription Online`,
  metaTitle: `Acid Reflux Treatment Online — PPI Prescription | TeleDirectMD`,
  metaDescription: `Burning chest pain, regurgitation, sour taste? Most acid reflux responds to lifestyle change + omeprazole/pantoprazole. $49 telehealth, prescription same day in 41 states.`,
  breadcrumb: `Acid Reflux`,
  answerLead: `Burning chest sensation after meals — what's likely going on:`,
  answerBody: `<p>Heartburn after meals or when lying down with sour taste or regurgitation is the classic presentation of <strong>gastroesophageal reflux disease (GERD)</strong>. Per ACG and AAFP guidelines, an 8-week proton pump inhibitor trial (omeprazole, pantoprazole, esomeprazole) plus lifestyle modification is first-line and can be initiated through telehealth. Endoscopy is reserved for alarm features.</p>`,
  symptomDef: {
    altNames: [
      `Heartburn`,
      `GERD`,
      `Reflux`,
      `Pyrosis`,
      `Regurgitation`
    ],
    anatomy: `Lower esophageal sphincter and esophagus`,
    treatment: `PPI 8-week trial + lifestyle changes; H2 blocker if mild`,
    conditionDisplayName: `Gastroesophageal reflux disease (GERD)`
  },
  whatThisMeans: [
    `<p><strong>GERD affects ~20% of US adults.</strong> The lower esophageal sphincter relaxes inappropriately, allowing acid to back up. Most cases respond well to acid suppression plus lifestyle change.</p>`,
    `<p><strong>The classic combo is heartburn plus regurgitation</strong> with worsening after meals, when bending, or when lying down. Sour taste, chronic cough, hoarseness, and dental erosion can also be GERD manifestations.</p>`,
    `<p><strong>Cardiac chest pain can mimic reflux.</strong> Crushing pressure, exertional pain, radiation to arm/jaw, sweating, or shortness of breath warrants ER evaluation — never assume bad chest pain is just heartburn.</p>`,
    `<p><strong>Alarm features</strong> require endoscopy: difficulty swallowing, weight loss, blood in stool/vomit, anemia, persistent vomiting, or symptoms not responding to 8 weeks of PPI.</p>`
  ],
  differentials: [
    {
      name: `GERD (acid reflux)`,
      description: `Lower esophageal sphincter dysfunction allowing acid reflux.`,
      prevalence: `~20% of US adults`,
      features: `Heartburn after meals, regurgitation, sour taste, worse lying down`,
      next: `PPI 8-week trial + lifestyle (weight loss, head elevation, avoid trigger foods)`
    },
    {
      name: `Functional dyspepsia`,
      description: `Upper-abdominal symptoms without structural cause.`,
      prevalence: `~10–15% adults`,
      features: `Postprandial fullness, early satiety, epigastric pain without classic heartburn`,
      next: `PPI trial + dietary modification; consider H. pylori test`
    },
    {
      name: `H. pylori-related gastritis or ulcer`,
      description: `Gastric or duodenal infection causing inflammation/ulcer.`,
      prevalence: `~10–15% in US`,
      features: `Burning epigastric pain, may be relieved by food (duodenal) or worsened (gastric)`,
      next: `H. pylori test (stool antigen or breath); triple/quadruple therapy if positive`
    },
    {
      name: `Cardiac chest pain`,
      description: `Coronary artery disease — angina or acute coronary syndrome.`,
      prevalence: `Critical to rule out`,
      features: `Pressure/squeezing rather than burning, exertional, radiates to arm/jaw, sweating, SOB`,
      next: `ER immediately if suspected`
    },
    {
      name: `Eosinophilic esophagitis`,
      description: `Allergic-mediated esophageal inflammation.`,
      prevalence: `Increasingly recognized`,
      features: `Dysphagia, food impaction, history of atopy, poor PPI response`,
      next: `GI referral for endoscopy with biopsies`
    }
  ],
  redFlags: [
    `<strong>Crushing chest pain, exertional pain, or pain radiating to arm/jaw</strong> — possible cardiac event; ER`,
    `<strong>Difficulty swallowing or food sticking</strong> — needs endoscopy`,
    `<strong>Vomiting blood or coffee-ground material</strong> — ER`,
    `<strong>Black tarry stools or bright red blood</strong> — ER`,
    `<strong>Unintentional weight loss >5%</strong> — needs workup`,
    `<strong>Persistent vomiting</strong> — in-person evaluation`,
    `<strong>Symptoms unresolved after 8 weeks of PPI</strong> — endoscopy referral`,
    `<strong>Age >50 with new-onset symptoms</strong> — endoscopy threshold lower`
  ],
  eligibility: [
    `Adults 18+ in our 41 states`,
    `Classic heartburn / regurgitation pattern`,
    `No alarm features (dysphagia, weight loss, GI bleeding)`,
    `Symptoms <5 years duration without prior workup`,
    `Want PPI 8-week trial`,
    `Need refill of established GERD medication`,
    `Open to lifestyle change recommendations`,
    `Already had endoscopy and need maintenance therapy`
  ],
  notEligibility: [
    `Chest pain suggestive of cardiac origin — ER`,
    `Difficulty swallowing or food impaction — needs endoscopy`,
    `Hematemesis, melena, or hematochezia — ER`,
    `Unintentional weight loss — needs workup`,
    `Symptoms unresolved after 8+ weeks of appropriate PPI — endoscopy`,
    `Age >50 with new alarm features — in-person workup`
  ],
  howTelehealthHelps: [
    `<p>You complete an intake covering symptom pattern (timing relative to meals/position), severity, alarm features, OTC use, and trigger foods.</p>`,
    `<p>Dr. Bhavsar reviews and screens carefully for cardiac and alarm-feature red flags. If safe for telehealth, an 8-week PPI trial is started.</p>`,
    `<p>You receive a same-day prescription: omeprazole 20–40 mg or pantoprazole 40 mg once daily 30–60 min before breakfast. Generics are $5–$15/month.</p>`,
    `<p>A structured lifestyle plan is provided: weight loss target, trigger-food list, head-of-bed elevation, eating schedule (no food 3 hours before bed), alcohol/tobacco reduction.</p>`,
    `<p>Step-down plan included: after 8 weeks of relief, taper to lowest effective dose or H2 blocker maintenance.</p>`,
    `<p>If you've failed PPI or have alarm features, you'll be referred for in-person GI evaluation with endoscopy guidance.</p>`,
    `<p>Follow-up message check-in at 2 weeks; full reassessment at 8 weeks.`
  ],
  treatmentOptions: [
    {
      category: `Proton pump inhibitor (first-line)`,
      detail: `Omeprazole 20 mg or pantoprazole 40 mg daily, 30–60 min before breakfast × 8 weeks. May increase to twice daily for severe symptoms.`
    },
    {
      category: `H2 receptor blocker`,
      detail: `Famotidine 20–40 mg twice daily for mild symptoms or as PPI step-down.`
    },
    {
      category: `Alginate / antacid PRN`,
      detail: `Calcium carbonate (Tums) or aluminum/magnesium hydroxide (Maalox) for breakthrough symptoms — fast onset, short duration.`
    },
    {
      category: `Lifestyle modification`,
      detail: `Weight loss if BMI >25, head-of-bed elevation 6–8 inches, no food 3 hours before bed, smaller meals, avoid trigger foods.`
    },
    {
      category: `Dietary triggers`,
      detail: `Common triggers: spicy/fatty foods, citrus, tomato, chocolate, peppermint, coffee, alcohol, carbonated drinks. Identify your specific triggers via food diary.`
    },
    {
      category: `PPI step-down`,
      detail: `After 8 weeks of relief, taper to lowest effective dose (e.g., omeprazole 10 mg) or switch to H2 blocker for maintenance.`
    },
    {
      category: `Reflux surgery (severe refractory)`,
      detail: `Nissen fundoplication or magnetic sphincter augmentation for severe GERD failing maximal medical therapy — surgical referral.`
    }
  ],
  medications: [
    {
      generic: `Omeprazole`,
      brand: `Prilosec`,
      dosageForm: `Oral capsule`,
      drugClass: `Proton pump inhibitor`,
      dose: `20 mg daily 30–60 min before breakfast × 8 weeks`,
      price: `$8–$22`,
      priceSourceUrl: `https://www.goodrx.com/omeprazole-otc`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Headache, diarrhea; long-term: bone density, B12, magnesium`
    },
    {
      generic: `Pantoprazole`,
      brand: `Protonix`,
      dosageForm: `Oral tablet`,
      drugClass: `Proton pump inhibitor`,
      dose: `40 mg daily before breakfast × 8 weeks`,
      price: `$6–$27`,
      priceSourceUrl: `https://www.goodrx.com/pantoprazole`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Headache, diarrhea; same long-term concerns as omeprazole`
    },
    {
      generic: `Esomeprazole`,
      brand: `Nexium`,
      dosageForm: `Oral capsule`,
      drugClass: `Proton pump inhibitor`,
      dose: `20–40 mg daily before breakfast`,
      price: `$9–$76`,
      priceSourceUrl: `https://www.goodrx.com/esomeprazole`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Headache, GI upset`
    },
    {
      generic: `Famotidine`,
      brand: `Pepcid`,
      dosageForm: `Oral tablet`,
      drugClass: `H2 receptor antagonist`,
      dose: `20–40 mg twice daily`,
      price: `$2–$89`,
      priceSourceUrl: `https://www.goodrx.com/famotidine`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Headache, dizziness; renal dose adjustment`
    },
    {
      generic: `Calcium carbonate`,
      brand: `Tums`,
      dosageForm: `Oral chewable`,
      drugClass: `Antacid`,
      dose: `500–1000 mg PRN heartburn`,
      price: `$5–$8`,
      priceSourceUrl: `https://www.goodrx.com/calcium-carbonate`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Constipation, hypercalcemia at high doses`
    }
  ],
  recovery: [
    {
      period: `Day 1–3`,
      detail: `Begin PPI before breakfast and lifestyle changes. Symptoms may not improve immediately — PPI takes 3–5 days for peak effect.`
    },
    {
      period: `Week 1–2`,
      detail: `Heartburn frequency and severity should decrease 50%+. Use antacids PRN for breakthrough.`
    },
    {
      period: `Week 4`,
      detail: `Most patients are symptom-free. If not, dose may be doubled or timing reviewed.`
    },
    {
      period: `Week 8`,
      detail: `Reassess: if symptom-free, taper to lowest effective dose. If still symptomatic, GI referral for endoscopy.`
    },
    {
      period: `Long-term`,
      detail: `On-demand PPI use (only when symptomatic) is preferred over chronic daily use to minimize long-term risks.`
    }
  ],
  homeCare: [
    `Elevate head of bed 6–8 inches with blocks (pillows alone don't work)`,
    `Avoid lying down within 3 hours of eating`,
    `Eat smaller, more frequent meals`,
    `Lose weight if BMI >25 — single most effective lifestyle change`,
    `Keep a food diary to identify personal triggers`,
    `Limit coffee, alcohol, chocolate, peppermint, and carbonated drinks`,
    `Avoid tight-fitting clothes around the abdomen`,
    `Stop smoking — nicotine relaxes the LES`,
    `Chew sugar-free gum after meals (increases saliva, neutralizes acid)`,
    `Sleep on left side (anatomically reduces reflux vs. right side)`
  ],
  faqs: [
    {
      question: `Can a telehealth doctor prescribe omeprazole or pantoprazole?`,
      answer: `Yes — these are non-controlled medications. Dr. Bhavsar can prescribe an 8-week PPI trial after a focused history that screens for cardiac and alarm-feature red flags. ACG and AAFP guidelines support this approach.`
    },
    {
      question: `How long should I take a PPI?`,
      answer: `For uncomplicated GERD, 8 weeks at standard dose, then taper to lowest effective dose or switch to H2 blocker. Long-term daily PPI use is appropriate for severe esophagitis or Barrett's esophagus, but otherwise on-demand or low-dose maintenance is preferred.`
    },
    {
      question: `Are PPIs safe long-term?`,
      answer: `Generally yes when used appropriately. Long-term concerns include modest increased risk of bone fractures, B12 deficiency, magnesium deficiency, and C. diff infection. The relative risks are small but real — that's why we recommend stepping down to lowest effective dose.`
    },
    {
      question: `What's the difference between omeprazole and pantoprazole?`,
      answer: `Both are equally effective for typical GERD. Pantoprazole has fewer drug interactions (preferred if you take clopidogrel, methotrexate, or atazanavir). Omeprazole is the cheapest and most studied. Choice often comes down to insurance coverage.`
    },
    {
      question: `Should I take my PPI with food or empty stomach?`,
      answer: `30–60 minutes BEFORE breakfast, on an empty stomach. PPIs need to be present in your blood when proton pumps are activated by the meal. Taking with food reduces effectiveness ~50%.`
    },
    {
      question: `Why does my chest burn at night?`,
      answer: `Lying flat removes gravity's help in keeping acid down. Solutions: elevate head of bed 6–8 inches (blocks under bedposts, NOT pillows), don't eat within 3 hours of bed, sleep on your left side, and lose weight if applicable.`
    },
    {
      question: `Can heartburn be a heart attack?`,
      answer: `Yes — cardiac chest pain can mimic GERD. Red flags: pressure/squeezing rather than burning, exertional onset, radiation to arm/jaw, sweating, shortness of breath. Any of these — go to ER, don't try to wait it out.`
    },
    {
      question: `Do I need an endoscopy?`,
      answer: `Not for typical uncomplicated GERD responding to PPI. Endoscopy is indicated for alarm features (dysphagia, weight loss, bleeding, anemia, persistent vomiting), failure of 8-week PPI trial, or new-onset symptoms after age 50.`
    },
    {
      question: `Can I drink coffee with GERD?`,
      answer: `Coffee is a common trigger but tolerance varies. Try eliminating for 2 weeks; if symptoms improve, you have your answer. Some find low-acid or cold-brew coffee more tolerable. Avoid drinking coffee within 3 hours of bed.`
    },
    {
      question: `Will losing weight cure my GERD?`,
      answer: `For many people, yes — significantly. A 2016 New England Journal of Medicine review found weight loss of just 10% reduced GERD symptoms by 40%+. Losing weight is the single highest-yield lifestyle change.`
    },
    {
      question: `What about H. pylori — should I be tested?`,
      answer: `H. pylori testing is recommended for: dyspepsia not responding to PPI, history of peptic ulcer, family history of gastric cancer, long-term PPI use, or suspected MALT lymphoma. Not routine for typical GERD. Stool antigen or breath testing is non-invasive.`
    },
    {
      question: `Are antacids enough?`,
      answer: `For occasional mild heartburn, yes. For typical GERD (symptoms ≥2 days/week), antacids alone are inadequate — H2 blockers or PPIs are needed. Antacids are useful as PRN add-ons for breakthrough symptoms.`
    },
    {
      question: `Can GERD cause a chronic cough?`,
      answer: `Yes — GERD is a top-3 cause of chronic cough lasting >8 weeks. Reflux can also cause hoarseness, sore throat, and asthma worsening. A PPI trial is often diagnostic for these atypical presentations.`
    },
    {
      question: `Is the $49 telehealth visit a good fit for ongoing GERD care?`,
      answer: `Yes — for most uncomplicated patients, follow-up at week 8 is the only re-visit needed, then we can do refills via async messaging. Total annual cost is far less than an in-person GI specialist visit.`
    }
  ],
  relatedSymptoms: [
    `persistent-cough`,
    `sore-throat`
  ],
  references: [
    {
      label: `ACG — GERD Clinical Guideline`,
      url: `https://gi.org/guideline/diagnosis-and-management-of-gastroesophageal-reflux-disease/`
    },
    {
      label: `AAFP — Diagnosis and Management of GERD`,
      url: `https://www.aafp.org/pubs/afp/issues/2010/0501/p1278.html`
    },
    {
      label: `Mayo Clinic — GERD`,
      url: `https://www.mayoclinic.org/diseases-conditions/gerd/symptoms-causes/syc-20361940`
    },
    {
      label: `NIDDK — Acid Reflux & GERD`,
      url: `https://www.niddk.nih.gov/health-information/digestive-diseases/acid-reflux-ger-gerd-adults`
    },
    {
      label: `AGA — GERD Best Practice Advice`,
      url: `https://www.gastrojournal.org/article/S0016-5085(22)00718-7/fulltext`
    },
    {
      label: `GoodRx — Omeprazole Pricing`,
      url: `https://www.goodrx.com/omeprazole`
    }
  ],
  riskFactors: [
    `Obesity (BMI >25)`,
    `Pregnancy`,
    `Hiatal hernia`,
    `Smoking`,
    `Alcohol use`,
    `Trigger foods`,
    `Late-night eating`,
    `Certain medications (calcium channel blockers, anticholinergics)`
  ],
  typicalTests: [
    `Clinical diagnosis (typical heartburn/regurgitation responding to PPI)`,
    `H. pylori test (if dyspepsia or PPI failure)`,
    `Endoscopy (alarm features, PPI failure, age >50 with new symptoms)`,
    `24-hour pH monitoring (refractory cases)`
  ]
};

SYMPTOM_PAGES["pink-eye"] = {
  slug: `pink-eye`,
  pid: `sym-pink-eye`,
  query: `pink eye drops prescription online`,
  h1: `Pink Eye (Conjunctivitis) — Same-Day Antibiotic Drops Online`,
  metaTitle: `Pink Eye Treatment Online — Antibiotic Eye Drops Rx | TeleDirectMD`,
  metaDescription: `Red, watery, sticky eye? Most pink eye is viral and self-limited; bacterial cases need antibiotic drops. $49 telehealth visit, prescription same day in 41 states.`,
  breadcrumb: `Pink Eye`,
  answerLead: `Red, watery, or sticky eye — what's likely going on:`,
  answerBody: `<p>"Pink eye" (conjunctivitis) has three main causes: <strong>viral</strong> (most common — self-limited, watery, often with cold symptoms), <strong>bacterial</strong> (sticky purulent discharge, lids matted shut in morning), and <strong>allergic</strong> (itchy, bilateral, often seasonal). Per AAO and AAFP, telehealth can effectively triage and treat conjunctivitis when there are no red flags. Bacterial cases benefit from antibiotic drops.</p>`,
  symptomDef: {
    altNames: [
      `Conjunctivitis`,
      `Red eye`,
      `Sticky eye`
    ],
    anatomy: `Conjunctiva (eye surface lining)`,
    treatment: `Viral: supportive. Bacterial: antibiotic drops (erythromycin, polymyxin/trimethoprim, ofloxacin). Allergic: antihistamine drops`,
    conditionDisplayName: `Conjunctivitis`
  },
  whatThisMeans: [
    `<p><strong>Viral conjunctivitis is by far the most common form (~80%).</strong> Adenovirus is the typical cause. Symptoms include redness, watery discharge, and burning, often starting in one eye and spreading to the other. Often accompanies a cold or sore throat.</p>`,
    `<p><strong>Bacterial conjunctivitis</strong> presents with thick yellow-green discharge, eyelids matted shut on waking, and unilateral onset typically. S. aureus, S. pneumoniae, and H. influenzae are common. Antibiotic drops shorten duration and reduce contagion.</p>`,
    `<p><strong>Allergic conjunctivitis</strong> is bilateral, intensely itchy, often with nasal symptoms. It's seasonal (spring pollen) or perennial (dust, pets). Treatment is antihistamine eye drops, not antibiotics.</p>`,
    `<p><strong>Vision-threatening red flags</strong> require immediate in-person care: vision loss/blurring, severe pain, photophobia, contact lens wearer with red eye, or a feeling of something stuck in the eye that doesn't wash out.</p>`
  ],
  differentials: [
    {
      name: `Viral conjunctivitis`,
      description: `Adenoviral conjunctivitis (most common).`,
      prevalence: `~80% of acute conjunctivitis`,
      features: `Watery discharge, gritty/burning sensation, often spreads to second eye, frequent associated URI`,
      next: `Supportive: cool compresses, artificial tears, hand hygiene; resolves 1–2 weeks`
    },
    {
      name: `Bacterial conjunctivitis`,
      description: `S. aureus, S. pneumoniae, H. influenzae infection.`,
      prevalence: `~15% of cases (more common in children)`,
      features: `Thick yellow-green purulent discharge, lids matted shut on waking, unilateral often`,
      next: `Erythromycin or polymyxin/trimethoprim drops × 5–7 days`
    },
    {
      name: `Allergic conjunctivitis`,
      description: `IgE-mediated allergic response.`,
      prevalence: `~25% US adults seasonally`,
      features: `Bilateral itching, watery discharge, nasal symptoms, seasonal pattern`,
      next: `Olopatadine or ketotifen antihistamine drops; oral antihistamine`
    },
    {
      name: `Iritis / uveitis`,
      description: `Inflammation of inner eye structures.`,
      prevalence: `Uncommon but vision-threatening`,
      features: `Severe pain, photophobia, blurred vision, perilimbal redness`,
      next: `Urgent ophthalmology referral; topical steroids only under specialist`
    },
    {
      name: `Corneal abrasion / foreign body`,
      description: `Mechanical injury to corneal surface.`,
      prevalence: `Common`,
      features: `Sharp pain, foreign-body sensation, history of injury or contact lens, fluorescein uptake`,
      next: `In-person fluorescein exam; antibiotic drops; foreign body removal`
    }
  ],
  redFlags: [
    `<strong>Vision change or blurring not relieved by blinking</strong> — possible iritis, keratitis`,
    `<strong>Severe eye pain</strong> — possible iritis, glaucoma, keratitis`,
    `<strong>Photophobia (severe light sensitivity)</strong> — iritis, keratitis`,
    `<strong>Contact lens wearer with red eye</strong> — possible bacterial keratitis (sight-threatening, ER)`,
    `<strong>Foreign body sensation that won't wash out</strong> — possible corneal abrasion or embedded body`,
    `<strong>Recent eye trauma or chemical exposure</strong> — emergent care`,
    `<strong>Pupil irregular or non-reactive</strong> — emergent`,
    `<strong>Marked eyelid swelling or proptosis</strong> — possible orbital cellulitis`
  ],
  eligibility: [
    `Adults and children (with parent) in our 41 states`,
    `Red eye with discharge, no vision change`,
    `No severe pain, no photophobia`,
    `Not a contact lens wearer with active redness`,
    `No recent eye trauma`,
    `Symptoms <2 weeks`,
    `Want guidance on viral vs. bacterial pattern`,
    `Need work/school exclusion note`
  ],
  notEligibility: [
    `Vision change, blurring, or vision loss — needs in-person`,
    `Severe pain or marked photophobia — needs in-person`,
    `Contact lens wearer with red eye — needs in-person same day (keratitis risk)`,
    `Recent eye trauma or chemical splash — ER`,
    `Suspected herpes (vesicular lesions on lid) — ophthalmology`,
    `Marked eyelid swelling, redness, or fever — possible orbital cellulitis — ER`,
    `Newborns (<28 days) — ophthalmology / pediatrics`
  ],
  howTelehealthHelps: [
    `<p>You complete an intake covering laterality, discharge type (watery vs. thick), itching, vision changes, contact lens use, recent illness, and red flags.</p>`,
    `<p>Dr. Bhavsar reviews and looks at your eye on video — checks redness pattern, discharge, lid swelling, and pupil response.</p>`,
    `<p>If pattern fits viral conjunctivitis: supportive care plan with hygiene measures, cool compresses, artificial tears. No antibiotics needed.</p>`,
    `<p>If bacterial pattern (thick purulent discharge, lids matted): antibiotic drops prescribed (erythromycin ointment, polymyxin/trimethoprim, or ofloxacin) × 5–7 days.</p>`,
    `<p>If allergic: olopatadine or ketotifen antihistamine drops + oral antihistamine if nasal symptoms.</p>`,
    `<p>School/work exclusion note provided when relevant — many schools exclude until 24 hours of antibiotic treatment for bacterial cases.</p>`,
    `<p>Clear escalation triggers: any vision change, severe pain, or worsening despite drops → in-person same day.`
  ],
  treatmentOptions: [
    {
      category: `Supportive (viral)`,
      detail: `Cool compresses 4× daily, artificial tears, strict hand hygiene, no eye-touching, separate towels — resolves in 1–2 weeks.`
    },
    {
      category: `Antibiotic drops (bacterial)`,
      detail: `Polymyxin B/trimethoprim 1 drop every 4–6 hours × 5–7 days, OR erythromycin ointment 4× daily × 5–7 days.`
    },
    {
      category: `Fluoroquinolone drops`,
      detail: `Ofloxacin or moxifloxacin drops for severe bacterial cases or contact-lens-related keratitis (with in-person eval).`
    },
    {
      category: `Antihistamine drops (allergic)`,
      detail: `Olopatadine 0.2% once daily, or ketotifen OTC twice daily — relief within minutes.`
    },
    {
      category: `Oral antihistamine (allergic)`,
      detail: `Cetirizine 10 mg or loratadine 10 mg daily for systemic allergy symptoms.`
    },
    {
      category: `Hygiene / spread prevention`,
      detail: `Wash hands frequently, dispose of contact lenses, replace eye makeup, wash pillowcases daily, separate towels.`
    },
    {
      category: `Contact lens management`,
      detail: `Remove contact lenses immediately; switch to glasses for at least 1 week after symptoms resolve; replace contacts and case after recovery.`
    }
  ],
  medications: [
    {
      generic: `Polymyxin B / Trimethoprim`,
      brand: `Polytrim`,
      dosageForm: `Ophthalmic drops`,
      drugClass: `Topical antibiotic combination`,
      dose: `1 drop every 4–6 hours × 5–7 days`,
      price: `$5–$12`,
      priceSourceUrl: `https://www.goodrx.com/polymyxin-b-trimethoprim`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Local burning, itching`
    },
    {
      generic: `Erythromycin`,
      brand: `Ilotycin`,
      dosageForm: `Ophthalmic ointment`,
      drugClass: `Topical macrolide antibiotic`,
      dose: `Apply 4 times daily × 5–7 days`,
      price: `$4–$12`,
      priceSourceUrl: `https://www.goodrx.com/erythromycin`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Temporary blurry vision after application`
    },
    {
      generic: `Ofloxacin`,
      brand: `Ocuflox`,
      dosageForm: `Ophthalmic drops`,
      drugClass: `Topical fluoroquinolone`,
      dose: `1–2 drops every 2–4 hours initially, then 4 times daily × 5–7 days`,
      price: `$5–$15`,
      priceSourceUrl: `https://www.goodrx.com/ocuflox`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Burning, blurred vision`
    },
    {
      generic: `Olopatadine`,
      brand: `Pataday`,
      dosageForm: `Ophthalmic drops`,
      drugClass: `Antihistamine / mast cell stabilizer`,
      dose: `1 drop daily (0.2%) or twice daily (0.1%)`,
      price: `$3–$38`,
      priceSourceUrl: `https://www.goodrx.com/olopatadine`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Mild burning, headache`
    },
    {
      generic: `Ketotifen`,
      brand: `Zaditor, Alaway`,
      dosageForm: `Ophthalmic drops`,
      drugClass: `Antihistamine / mast cell stabilizer`,
      dose: `1 drop twice daily`,
      price: `$3–$13`,
      priceSourceUrl: `https://www.goodrx.com/ketotifen`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Mild burning, dry eye`
    }
  ],
  recovery: [
    {
      period: `Day 1–2`,
      detail: `Bacterial: discharge improves with first 2 days of antibiotic. Viral: may worsen before improving over the first week.`
    },
    {
      period: `Day 3–5`,
      detail: `Bacterial cases largely resolved on antibiotic. Viral still active.`
    },
    {
      period: `Week 1`,
      detail: `Viral conjunctivitis usually improving — redness fading.`
    },
    {
      period: `Week 2`,
      detail: `Most viral cases fully resolved. Some adenoviral subtypes can take 2–3 weeks.`
    },
    {
      period: `Beyond 2 weeks`,
      detail: `If still symptomatic, in-person ophthalmology evaluation recommended.`
    }
  ],
  homeCare: [
    `Cool compresses 4× daily for 5–10 minutes`,
    `Artificial tears (preservative-free) 4–6× daily for comfort`,
    `Wash hands before and after touching the eye`,
    `Use separate towels and pillowcases — change daily`,
    `Don't share eye makeup; replace mascara/eyeliner used while sick`,
    `Don't wear contact lenses until fully resolved`,
    `Don't wear eye makeup until fully resolved`,
    `Stay home from school/work until 24 hours of antibiotic if bacterial; until eye-discharge resolved if viral`,
    `Avoid touching/rubbing the eye`,
    `Disinfect frequently touched surfaces (phone, doorknobs)`
  ],
  faqs: [
    {
      question: `Can a telehealth doctor prescribe antibiotic eye drops?`,
      answer: `Yes — for typical bacterial conjunctivitis with no red flags. Dr. Bhavsar can prescribe polymyxin/trimethoprim, erythromycin, or ofloxacin via video visit. Contact lens wearers with red eye need in-person evaluation due to keratitis risk.`
    },
    {
      question: `How do I know if my pink eye is viral or bacterial?`,
      answer: `Bacterial: thick yellow-green pus, lids matted shut on waking, often unilateral. Viral: watery discharge, often with cold symptoms, frequently spreads from one eye to the other. Allergic: bilateral, intensely itchy, often seasonal. We make this distinction on video visit.`
    },
    {
      question: `How contagious is pink eye?`,
      answer: `Viral conjunctivitis is highly contagious — spread by hand-to-eye contact and shared surfaces for up to 2 weeks. Bacterial is contagious until 24 hours after starting antibiotic drops. Strict hand hygiene and not sharing towels/pillows are the cornerstones of preventing spread.`
    },
    {
      question: `How long until I can return to work or school?`,
      answer: `Bacterial: typically 24 hours after starting antibiotic drops. Viral: until eye discharge has resolved (usually 5–7 days). Many workplaces and schools have specific policies — we provide a return note when needed.`
    },
    {
      question: `Should I throw away my eye makeup?`,
      answer: `Yes — discard and replace any mascara, eyeliner, or eyeshadow used during the infection. Bacteria and viruses contaminate makeup and can re-infect you or others.`
    },
    {
      question: `Can I wear my contacts during pink eye?`,
      answer: `No — remove immediately and wear glasses until the eye is fully recovered (at least 1 week post-symptom resolution). Discard the lenses worn just before/during the infection. Contact lens-related red eye warrants in-person evaluation due to keratitis risk.`
    },
    {
      question: `Will pink eye cause permanent damage?`,
      answer: `Uncomplicated viral, bacterial, and allergic conjunctivitis don't cause permanent damage. Complications occur with: bacterial keratitis (especially in contact lens wearers), herpes simplex eye infection, and untreated severe bacterial cases. Vision changes, severe pain, or photophobia warrant in-person care.`
    },
    {
      question: `Why does only one eye have pink eye?`,
      answer: `Bacterial conjunctivitis often starts in one eye. Viral can be unilateral initially but typically spreads to both within 1–2 days via auto-inoculation (hand contact). Allergic is almost always bilateral from the start.`
    },
    {
      question: `Can I use breast milk or honey for pink eye?`,
      answer: `No — these home remedies are not evidence-based and can introduce additional infection. Stick to artificial tears, cool compresses, and hand hygiene for viral cases; use prescribed drops for bacterial cases.`
    },
    {
      question: `Is over-the-counter Visine helpful?`,
      answer: `No — Visine and similar redness-reducer drops temporarily constrict blood vessels but don't treat the underlying cause and can cause rebound redness. Use artificial tears (preservative-free) for comfort instead.`
    },
    {
      question: `My child has pink eye — how do I prevent the rest of the family from getting it?`,
      answer: `Strict hand hygiene; separate towels, pillowcases, and washcloths; clean toys with disinfectant; replace eye makeup; keep child out of pools and away from siblings' faces. Wash bedding daily during the active infection.`
    },
    {
      question: `Are antibiotic drops always needed?`,
      answer: `No — most pink eye is viral and doesn't need antibiotics. AAFP and AAO recommend antibiotic drops only for clear bacterial pattern. Inappropriate antibiotic use can cause local irritation, allergic reaction, and resistance. Watchful waiting + supportive care is appropriate for many cases.`
    },
    {
      question: `How fast do antibiotic drops work?`,
      answer: `Symptoms typically improve within 24–48 hours of starting drops. If no improvement in 3 days, message us — may need switch to different antibiotic or in-person evaluation. Complete the full 5–7 day course even if better.`
    },
    {
      question: `How does the $49 visit compare to urgent care?`,
      answer: `Urgent care averages $280 (Mira Health). Our $49 telehealth visit handles most uncomplicated conjunctivitis cases — same first-line drops, same school/work note, no waiting room. We escalate to in-person if vision changes or red flags develop.`
    }
  ],
  relatedSymptoms: [
    `allergy-symptoms`,
    `sinus-pressure`
  ],
  references: [
    {
      label: `AAO — Conjunctivitis Preferred Practice Pattern`,
      url: `https://www.aao.org/preferred-practice-pattern/conjunctivitis-ppp`
    },
    {
      label: `CDC — Conjunctivitis (Pink Eye)`,
      url: `https://www.cdc.gov/conjunctivitis/about/index.html`
    },
    {
      label: `Mayo Clinic — Pink Eye`,
      url: `https://www.mayoclinic.org/diseases-conditions/pink-eye/symptoms-causes/syc-20376355`
    },
    {
      label: `AAFP — Conjunctivitis: Systematic Review`,
      url: `https://www.aafp.org/pubs/afp/issues/2010/0115/p137.html`
    },
    {
      label: `AAO — Pink Eye Patient Information`,
      url: `https://www.aao.org/eye-health/diseases/pink-eye-conjunctivitis`
    },
    {
      label: `GoodRx — Polytrim Pricing`,
      url: `https://www.goodrx.com/polytrim`
    }
  ],
  riskFactors: [
    `Recent URI / cold`,
    `Contact lens use (especially with poor hygiene)`,
    `Allergies / atopy`,
    `Crowded settings (schools, daycare)`,
    `Eye-rubbing`,
    `Shared towels/pillows`
  ],
  typicalTests: [
    `Clinical diagnosis (history and exam)`,
    `Fluorescein staining (rule out abrasion if pain present)`,
    `Conjunctival culture (severe or refractory cases)`,
    `Slit-lamp exam (in-person if red flags)`
  ]
};

SYMPTOM_PAGES["migraine"] = {
  slug: `migraine`,
  pid: `sym-migraine`,
  query: `migraine treatment online prescription`,
  h1: `Migraine Headache — Same-Day Triptan or Preventive Rx`,
  metaTitle: `Migraine Treatment Online — Sumatriptan Rx Same Day | TeleDirectMD`,
  metaDescription: `Throbbing one-sided headache with light sensitivity? Most migraines respond to triptans. $49 telehealth visit, sumatriptan or rizatriptan prescription same day in 41 states.`,
  breadcrumb: `Migraine`,
  answerLead: `Throbbing headache with light sensitivity — what to do:`,
  answerBody: `<p>Migraine affects ~12% of Americans. The classic pattern is throbbing, often one-sided headache with light/sound sensitivity, nausea, and reduced ability to function. Per American Headache Society guidelines, triptans (sumatriptan, rizatriptan, eletriptan) are first-line abortive therapy and can be prescribed via telehealth. Frequent migraines (>4/month) warrant a preventive medication.</p>`,
  symptomDef: {
    altNames: [
      `Migraine headache`,
      `Migraine with aura`,
      `Hemicrania`,
      `Vascular headache`
    ],
    anatomy: `Trigeminal pain pathways and cerebral vasculature`,
    treatment: `Triptan abortive (sumatriptan); CGRP antagonist for refractory; preventive if ≥4 attacks/month`,
    conditionDisplayName: `Migraine`
  },
  whatThisMeans: [
    `<p><strong>Migraine is a neurologic disease, not just a headache.</strong> It involves trigeminal nerve activation, cortical spreading depression, and CGRP release. Pain is typically unilateral, throbbing, moderate-to-severe, and worsened by activity.</p>`,
    `<p><strong>The 5-4-3-2-1 criteria help diagnose:</strong> 5+ attacks lasting 4–72 hours, with 2 of (unilateral, pulsating, moderate-severe, aggravated by activity), and 1 of (nausea/vomiting, photophobia/phonophobia).</p>`,
    `<p><strong>Aura affects ~25% of migraineurs.</strong> Visual aura (zigzag lines, blind spots) typically precedes headache by 20–60 minutes. Sensory or speech aura less common. Aura without headache is possible.</p>`,
    `<p><strong>Red flag headaches require imaging.</strong> Sudden "thunderclap" onset, new headache after age 50, headache with fever/neck stiffness, headache with neurologic deficit, or change in headache pattern need in-person workup.</p>`
  ],
  differentials: [
    {
      name: `Migraine without aura`,
      description: `Recurrent throbbing headache meeting ICHD-3 criteria.`,
      prevalence: `~9% of US adults`,
      features: `Unilateral pulsating, photophobia, nausea, moderate-severe, 4–72 hours`,
      next: `Triptan PRN; preventive if ≥4 attacks/month or disabling`
    },
    {
      name: `Migraine with aura`,
      description: `Migraine preceded by reversible focal neuro symptoms.`,
      prevalence: `~3% of US adults`,
      features: `Visual zigzags or scintillations 20–60 min before headache; reversible`,
      next: `Triptan; avoid combined hormonal contraceptives if aura`
    },
    {
      name: `Tension-type headache`,
      description: `Bilateral pressing band-like headache.`,
      prevalence: `Most common headache type`,
      features: `Bilateral, pressing, mild-moderate, no nausea, no photophobia/phonophobia`,
      next: `NSAIDs PRN; lifestyle (sleep, hydration); preventive amitriptyline if frequent`
    },
    {
      name: `Cluster headache`,
      description: `Severe unilateral periorbital pain in attacks.`,
      prevalence: `Rare but distinct`,
      features: `Excruciating one-sided eye pain, tearing, nasal congestion, restlessness, lasts 15 min–3 hr`,
      next: `100% O2 for abortive; verapamil prevention; specialist referral`
    },
    {
      name: `Medication-overuse headache`,
      description: `Daily headache from analgesic overuse.`,
      prevalence: `Affects ~1–2% adults`,
      features: `Headache ≥15 days/month, frequent NSAID/triptan/opioid use`,
      next: `Withdrawal of overused med; preventive therapy; specialist help`
    }
  ],
  redFlags: [
    `<strong>Sudden "thunderclap" onset</strong> (worst headache of life, peaks in seconds) — possible SAH; ER`,
    `<strong>New-onset headache after age 50</strong> — possible GCA, tumor`,
    `<strong>Headache with fever and neck stiffness</strong> — possible meningitis; ER`,
    `<strong>Focal neurologic deficit not resolving</strong> — possible stroke/TIA`,
    `<strong>Confusion, seizure, or syncope</strong> with headache — ER`,
    `<strong>Progressively worsening headache over weeks</strong> — needs imaging`,
    `<strong>Headache after head trauma</strong> — needs evaluation`,
    `<strong>Pregnancy with new severe headache</strong> — rule out preeclampsia`
  ],
  eligibility: [
    `Adults 18+ in our 41 states`,
    `Established migraine pattern or first attack with classic features`,
    `No red flag features`,
    `Want triptan PRN or preventive prescription`,
    `Established patient needing refill`,
    `Frequent attacks (>4/month) wanting preventive plan`,
    `No cardiovascular contraindications to triptans`,
    `Not pregnant (or seeking pregnancy-safe options)`
  ],
  notEligibility: [
    `Sudden thunderclap headache — ER now`,
    `New headache after age 50 — needs in-person workup`,
    `Headache with focal deficit — ER`,
    `Headache with fever and neck stiffness — ER`,
    `Severe coronary artery disease (triptan contraindicated)`,
    `Recent stroke or TIA (triptan contraindicated)`,
    `Hemiplegic or basilar migraine (triptan contraindicated; specialist)`
  ],
  howTelehealthHelps: [
    `<p>You complete a structured intake covering attack frequency, duration, character (pulsating/pressing), associated symptoms (nausea, photophobia), aura, triggers, and red flag screen.</p>`,
    `<p>Dr. Bhavsar applies ICHD-3 criteria and screens for cardiovascular contraindications (history of MI, stroke, uncontrolled HTN, hemiplegic/basilar migraine).</p>`,
    `<p>If safe, abortive triptan is prescribed: sumatriptan 50–100 mg or rizatriptan 10 mg ODT (oral disintegrating). Take at headache onset; may repeat once after 2 hours.</p>`,
    `<p>If attacks are ≥4/month or disabling, preventive options discussed: propranolol, topiramate, amitriptyline, or candesartan — all evidence-based.</p>`,
    `<p>If migraine with aura on combined hormonal contraceptives, contraceptive review for stroke risk (CDC MEC Category 4).</p>`,
    `<p>Lifestyle / trigger plan: sleep regularity, hydration, regular meals, limit caffeine and alcohol, stress management.</p>`,
    `<p>Migraine diary template provided. 8-week follow-up to assess response and adjust.`
  ],
  treatmentOptions: [
    {
      category: `Triptan abortive (first-line)`,
      detail: `Sumatriptan 50–100 mg PO at headache onset; may repeat once after 2 hours. Maximum 200 mg/24h. ODT, nasal, and SC formulations available.`
    },
    {
      category: `Alternative triptans`,
      detail: `Rizatriptan 10 mg ODT (faster), eletriptan 40 mg, naratriptan 2.5 mg (slower onset, longer duration) — interchangeable based on response.`
    },
    {
      category: `NSAIDs`,
      detail: `Naproxen 500–550 mg or ibuprofen 600–800 mg at onset; effective for milder migraines. Combination with triptan increases efficacy.`
    },
    {
      category: `Antiemetic`,
      detail: `Ondansetron 4–8 mg or prochlorperazine for migraine-associated nausea; metoclopramide also has antimigraine activity.`
    },
    {
      category: `Preventive medication`,
      detail: `Propranolol 40–160 mg, topiramate 25–100 mg, amitriptyline 10–50 mg, or candesartan 16 mg daily — for ≥4 attacks/month or disabling.`
    },
    {
      category: `CGRP antagonists`,
      detail: `Erenumab, fremanezumab, galcanezumab (monoclonal antibodies) or atogepant/rimegepant (oral) for refractory cases — typically after specialist referral.`
    },
    {
      category: `Lifestyle / non-medication`,
      detail: `Regular sleep schedule, hydration, regular meals, exercise, stress management (CBT, biofeedback), magnesium 400 mg + riboflavin 400 mg + CoQ10 100 mg supplementation.`
    }
  ],
  medications: [
    {
      generic: `Sumatriptan`,
      brand: `Imitrex`,
      dosageForm: `Oral tablet / nasal / SC`,
      drugClass: `5-HT1B/1D agonist (triptan)`,
      dose: `50–100 mg PO at onset; may repeat after 2h`,
      price: `$6–$12`,
      priceSourceUrl: `https://www.goodrx.com/sumatriptan`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Chest tightness, flushing, paresthesia; avoid in CAD/uncontrolled HTN`
    },
    {
      generic: `Rizatriptan`,
      brand: `Maxalt`,
      dosageForm: `Oral disintegrating tablet`,
      drugClass: `5-HT1B/1D agonist (triptan)`,
      dose: `10 mg ODT at onset; may repeat after 2h`,
      price: `$14–$233`,
      priceSourceUrl: `https://www.goodrx.com/rizatriptan`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Drowsiness, dizziness; same CV cautions`
    },
    {
      generic: `Propranolol`,
      brand: `Inderal`,
      dosageForm: `Oral tablet`,
      drugClass: `Non-selective beta-blocker`,
      dose: `40 mg BID, titrate to 80–160 mg/day`,
      price: `$6–$28`,
      priceSourceUrl: `https://www.goodrx.com/propranolol`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Fatigue, bradycardia, sexual dysfunction; avoid in asthma`
    },
    {
      generic: `Topiramate`,
      brand: `Topamax`,
      dosageForm: `Oral tablet`,
      drugClass: `Antiepileptic`,
      dose: `25 mg daily, titrate to 100 mg/day in divided doses`,
      price: `$9–$38`,
      priceSourceUrl: `https://www.goodrx.com/topiramate`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Cognitive slowing, paresthesia, weight loss, kidney stones`
    },
    {
      generic: `Amitriptyline`,
      brand: `Elavil`,
      dosageForm: `Oral tablet`,
      drugClass: `Tricyclic antidepressant`,
      dose: `10–50 mg at bedtime`,
      price: `$4–$11`,
      priceSourceUrl: `https://www.goodrx.com/amitriptyline`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Sedation, anticholinergic, weight gain`
    }
  ],
  recovery: [
    {
      period: `Hour 0 (attack onset)`,
      detail: `Take triptan as soon as headache begins (not aura). NSAID can be combined for added benefit. Antiemetic if nausea.`
    },
    {
      period: `Hour 1–2`,
      detail: `50–60% of patients have significant relief by 2 hours with triptan.`
    },
    {
      period: `Hour 2 (if needed)`,
      detail: `May repeat triptan once if headache persists. If still no relief, the episode may need rescue (NSAID + antiemetic).`
    },
    {
      period: `Day 1–2`,
      detail: `Postdrome phase — fatigue, mental fog, neck stiffness — common and self-resolving.`
    },
    {
      period: `Long-term`,
      detail: `With effective abortive + lifestyle changes, expect 50%+ reduction in attack burden. Preventive medication adds another 50% reduction in frequency.`
    }
  ],
  homeCare: [
    `Maintain consistent sleep schedule (same bedtime/wake every day)`,
    `Hydrate — aim for 2+ liters water daily`,
    `Eat regular meals — skipping meals is a top trigger`,
    `Limit caffeine to ≤200 mg daily (and consistent — withdrawal triggers migraine)`,
    `Limit alcohol; identify your specific triggers (red wine common)`,
    `Track migraines in a diary (app or paper) — identifies patterns`,
    `Manage stress with daily relaxation (10 min meditation, deep breathing)`,
    `Cool compress on forehead and dark quiet room during attack`,
    `Regular aerobic exercise 150 min/week reduces frequency`,
    `Consider magnesium 400 mg + riboflavin 400 mg + CoQ10 100 mg daily (modest evidence)`
  ],
  faqs: [
    {
      question: `Can a telehealth doctor prescribe sumatriptan?`,
      answer: `Yes — sumatriptan and other triptans are non-controlled medications. Dr. Bhavsar can prescribe them after a focused history and screen for cardiovascular contraindications. Same-day prescription typical.`
    },
    {
      question: `How fast do triptans work?`,
      answer: `50–60% of patients have significant relief within 2 hours of oral sumatriptan. Subcutaneous sumatriptan works within 10 minutes; nasal forms within 15–30 minutes. Take at headache onset for best effect — not during aura, not when severe.`
    },
    {
      question: `Can I take a triptan if I also have an SSRI?`,
      answer: `Yes, in most cases. The serotonin syndrome risk from triptan + SSRI/SNRI combinations is very low at usual doses. American Headache Society and FDA reviews support continued combined use; we just monitor for symptoms.`
    },
    {
      question: `How often can I take a triptan?`,
      answer: `Maximum 9–10 days of triptan use per month to avoid medication-overuse headache. If you're using triptans more often, you need a preventive medication. We can prescribe one alongside the triptan.`
    },
    {
      question: `What's the difference between migraine and tension headache?`,
      answer: `Migraine: unilateral throbbing pulsating, moderate-severe, with nausea/photophobia/phonophobia, worse with activity. Tension: bilateral pressing band-like, mild-moderate, no nausea or photophobia. Treatment differs significantly — that's why diagnosis matters.`
    },
    {
      question: `Should I get an MRI for my migraines?`,
      answer: `Routine imaging is NOT recommended for typical recurrent migraine that meets diagnostic criteria. American Headache Society explicitly says imaging is unnecessary for stable migraine pattern. Imaging is reserved for atypical features or red flags.`
    },
    {
      question: `What are common migraine triggers?`,
      answer: `Top triggers: stress, sleep changes (too little or too much), skipped meals, dehydration, hormonal changes (menstruation), specific foods (red wine, aged cheese, processed meats), bright lights, weather changes, strong smells. A diary identifies your specific pattern.`
    },
    {
      question: `Is migraine with aura a stroke risk?`,
      answer: `Yes — migraine with aura roughly doubles stroke risk overall (still low absolute risk). Combined with smoking and combined hormonal contraceptives, the relative risk increases significantly. We screen for these and adjust contraception if needed.`
    },
    {
      question: `Can hormonal birth control trigger migraines?`,
      answer: `For women with migraine with aura, combined hormonal contraceptives (pill, patch, ring) increase stroke risk significantly (CDC MEC Category 4 — avoid). Progestin-only pill, IUD, or non-hormonal options are safer alternatives.`
    },
    {
      question: `What about CGRP antagonists like Aimovig or Nurtec?`,
      answer: `CGRP monoclonal antibodies (erenumab, fremanezumab, galcanezumab) and oral CGRP antagonists (atogepant, rimegepant) are highly effective for prevention and abortive use. They're typically prescribed after trying generic preventives or by specialists; insurance often requires step-therapy.`
    },
    {
      question: `Can chronic migraine be cured?`,
      answer: `Migraine cannot be "cured" but can be effectively managed. With abortive + preventive + lifestyle approach, many patients reduce attacks by 70%+ and return to normal function. Some achieve long-term remission.`
    },
    {
      question: `What if I'm pregnant?`,
      answer: `Pregnancy changes migraine treatment. Acetaminophen is first-line; avoid NSAIDs after 20 weeks. Triptans are generally avoided though sumatriptan has the most data. Preventives: propranolol or magnesium are options. We work with your OB.`
    },
    {
      question: `How does the $49 visit compare to a neurologist?`,
      answer: `Neurology consult averages $300–$500 with often 2–6 month wait. For typical migraine, primary-care–level prescribing (which we do) is appropriate per AAN guidelines. We refer to neurology for refractory or atypical cases.`
    },
    {
      question: `Can stress alone trigger a migraine?`,
      answer: `Yes — stress is the most common trigger reported. Interestingly, the "let-down" period AFTER stress is also a major trigger. Stress reduction (CBT, biofeedback, meditation) reduces frequency comparable to medication.`
    }
  ],
  relatedSymptoms: [
    `sinus-pressure`
  ],
  references: [
    {
      label: `American Academy of Neurology — Migraine Guidelines`,
      url: `https://www.aan.com/Guidelines/home/GuidelineDetail/979`
    },
    {
      label: `American Headache Society — Consensus Statement`,
      url: `https://americanheadachesociety.org/resources/`
    },
    {
      label: `Mayo Clinic — Migraine`,
      url: `https://www.mayoclinic.org/diseases-conditions/migraine-headache/symptoms-causes/syc-20360201`
    },
    {
      label: `AAFP — Headache: Differential Diagnosis`,
      url: `https://www.aafp.org/pubs/afp/issues/2013/0515/p682.html`
    },
    {
      label: `NIH NINDS — Migraine`,
      url: `https://www.ninds.nih.gov/health-information/disorders/migraine`
    },
    {
      label: `GoodRx — Sumatriptan Pricing`,
      url: `https://www.goodrx.com/sumatriptan`
    }
  ],
  riskFactors: [
    `Family history of migraine`,
    `Female sex (3:1 ratio)`,
    `Age 25–45 (peak)`,
    `Hormonal changes`,
    `Stress`,
    `Sleep irregularity`,
    `Specific food triggers`
  ],
  typicalTests: [
    `Clinical diagnosis (ICHD-3 criteria)`,
    `Brain MRI (only if red flags)`,
    `No routine labs needed`,
    `Headache diary (essential for management)`
  ]
};

SYMPTOM_PAGES["ear-pain"] = {
  slug: `ear-pain`,
  pid: `sym-ear-pain`,
  query: `ear pain adult ear infection online`,
  h1: `Ear Pain — Same-Day Telehealth for Ear Infection`,
  metaTitle: `Ear Pain Treatment Online — Adult Ear Infection Rx | TeleDirectMD`,
  metaDescription: `Adult ear pain, fullness, or hearing change? Get evaluated for middle/outer ear infection or eustachian tube issue. $49 telehealth, prescription same day in 41 states.`,
  breadcrumb: `Ear Pain`,
  answerLead: `Ear pain in an adult — what's likely:`,
  answerBody: `<p>Ear pain in adults has many causes — most commonly <strong>otitis externa</strong> (swimmer's ear), <strong>acute otitis media</strong> (middle ear infection), <strong>eustachian tube dysfunction</strong> from a cold, or <strong>referred pain</strong> from teeth/jaw/throat. Per AAFP, telehealth can effectively triage and treat most cases. Antibiotic drops or oral antibiotics are prescribed when bacterial infection is identified.</p>`,
  symptomDef: {
    altNames: [
      `Otalgia`,
      `Earache`,
      `Ear infection`
    ],
    anatomy: `External, middle, or inner ear`,
    treatment: `Otitis externa: ofloxacin/ciprofloxacin drops. Otitis media: amoxicillin or amoxicillin-clavulanate. ETD: decongestant + nasal steroid`,
    conditionDisplayName: `Otitis (ear infection) or eustachian tube dysfunction`
  },
  whatThisMeans: [
    `<p><strong>Otitis externa (swimmer's ear)</strong> is infection of the ear canal. Pain worsens with tugging on the ear or pushing on the tragus. Often follows water exposure or trauma from cotton swabs.</p>`,
    `<p><strong>Acute otitis media</strong> is middle ear infection, typically following a cold. Pain, fullness, hearing reduction, and sometimes fever. In adults, often treated with watchful waiting unless severe.</p>`,
    `<p><strong>Eustachian tube dysfunction</strong> is the most common cause of ear pain after a cold. The tube can't equalize pressure; symptoms include fullness, popping, and mild pain. Usually self-resolves.</p>`,
    `<p><strong>Red flags</strong> include sudden hearing loss (needs urgent ENT for steroids within 72 hours), severe vertigo, facial weakness, or fever with neck stiffness.</p>`
  ],
  differentials: [
    {
      name: `Otitis externa`,
      description: `Bacterial infection of ear canal (often Pseudomonas or Staph).`,
      prevalence: `Common — peaks in summer`,
      features: `Pain worse with tragus pressure or pinna pull, canal swelling, recent water exposure`,
      next: `Ofloxacin or ciprofloxacin/dexamethasone otic drops × 7 days; keep ear dry`
    },
    {
      name: `Acute otitis media`,
      description: `Middle-ear bacterial or viral infection.`,
      prevalence: `Less common in adults than children`,
      features: `Deep ear pain, fullness, hearing reduction, often after URI`,
      next: `Amoxicillin 1 g TID × 7 days, or watchful waiting if mild; analgesics`
    },
    {
      name: `Eustachian tube dysfunction`,
      description: `Inability to equalize middle-ear pressure.`,
      prevalence: `Very common after URI`,
      features: `Fullness, popping, mild pain, recent cold or flight`,
      next: `Decongestant + intranasal steroid; Valsalva; usually self-resolves 1–2 weeks`
    },
    {
      name: `Cerumen impaction`,
      description: `Hardened earwax causing pressure.`,
      prevalence: `~5% adults yearly`,
      features: `Fullness, hearing reduction, mild pain, no inflammation`,
      next: `Carbamide peroxide drops; in-office irrigation if persistent`
    },
    {
      name: `Referred pain (TMJ, dental, throat)`,
      description: `Pain perceived in ear from neighboring structures.`,
      prevalence: `Common`,
      features: `Normal ear exam, pain with chewing/jaw/swallowing`,
      next: `Treat underlying cause (dental visit, TMJ care, strep evaluation)`
    }
  ],
  redFlags: [
    `<strong>Sudden hearing loss</strong> — emergency; ENT within 72 hours for systemic steroids`,
    `<strong>Severe vertigo with hearing loss</strong> — possible labyrinthitis; in-person`,
    `<strong>Facial weakness or asymmetry</strong> — possible Bell's palsy or Ramsay-Hunt; in-person`,
    `<strong>Fever with severe headache or neck stiffness</strong> — meningitis risk; ER`,
    `<strong>Mastoid swelling/redness behind the ear</strong> — possible mastoiditis; ER`,
    `<strong>Foul-smelling discharge with hearing loss in chronic case</strong> — cholesteatoma; ENT`,
    `<strong>Severe vertigo with vomiting</strong> — vestibular neuritis vs. central cause`
  ],
  eligibility: [
    `Adults and adolescents in our 41 states`,
    `Ear pain, fullness, or hearing reduction`,
    `No red flag features`,
    `Recent water exposure (otitis externa) or cold (ETD/AOM)`,
    `Want guidance on antibiotics vs. supportive care`,
    `Recurrent eustachian tube dysfunction needing refill`,
    `Pain manageable while awaiting plan`,
    `Need work/school note`
  ],
  notEligibility: [
    `Sudden hearing loss — urgent ENT (≤72 hours for steroids)`,
    `Severe vertigo — in-person`,
    `Facial weakness — needs in-person`,
    `Fever with neck stiffness — ER`,
    `Mastoid swelling/tenderness behind ear — ER`,
    `Children under 2 — pediatric in-person preferred`,
    `Suspected foreign body — in-person removal`
  ],
  howTelehealthHelps: [
    `<p>You complete an intake covering pain location, character, hearing change, recent water/cold exposure, fever, and red flag screen.</p>`,
    `<p>Dr. Bhavsar examines the external ear on video, checks for tragus tenderness, and asks about jaw/throat symptoms.</p>`,
    `<p>If pattern fits otitis externa: ofloxacin or ciprofloxacin/dexamethasone otic drops prescribed × 7 days, with strict dry-ear instructions.</p>`,
    `<p>If acute otitis media is suspected (deep pain after URI, fever, hearing loss): amoxicillin 1 g three times daily × 7 days for adults — or watchful waiting if symptoms mild.</p>`,
    `<p>If eustachian tube dysfunction: decongestant short course + intranasal steroid; reassurance that resolution typically takes 1–2 weeks.</p>`,
    `<p>Cerumen impaction: carbamide peroxide drops; in-office irrigation referral if needed.</p>`,
    `<p>Pain control: ibuprofen 400 mg every 6 hours, acetaminophen 1000 mg every 6 hours; warm compresses.`
  ],
  treatmentOptions: [
    {
      category: `Otitis externa drops (first-line)`,
      detail: `Ofloxacin 0.3% otic 5 drops twice daily × 7 days, OR ciprofloxacin/dexamethasone (Ciprodex) 4 drops twice daily × 7 days.`
    },
    {
      category: `Acute otitis media oral antibiotic`,
      detail: `Amoxicillin 1 g three times daily × 7 days; amoxicillin-clavulanate 875/125 mg BID if severe or recent antibiotic exposure.`
    },
    {
      category: `Penicillin-allergy alternative`,
      detail: `Doxycycline 100 mg BID × 7 days, or cefuroxime 500 mg BID × 7 days for AOM in penicillin-allergic adults.`
    },
    {
      category: `Eustachian tube dysfunction`,
      detail: `Pseudoephedrine 60 mg every 4–6 hours × 3–5 days + intranasal fluticasone 2 sprays each nostril daily; Valsalva maneuver.`
    },
    {
      category: `Cerumen removal`,
      detail: `Carbamide peroxide drops 5–10 drops twice daily × 4 days, then warm-water irrigation. Avoid Q-tips.`
    },
    {
      category: `Pain control`,
      detail: `Ibuprofen 400–600 mg every 6 hours, or acetaminophen 1000 mg every 6 hours (max 3 g/day). Warm compresses 15 min as needed.`
    },
    {
      category: `Dry-ear measures (otitis externa)`,
      detail: `No swimming/water exposure for duration of treatment; cotton ball + petroleum jelly during showers; hair dryer on low setting after exposure.`
    }
  ],
  medications: [
    {
      generic: `Ofloxacin`,
      brand: `Floxin Otic`,
      dosageForm: `Ear drops`,
      drugClass: `Topical fluoroquinolone`,
      dose: `5 drops in affected ear twice daily × 7 days`,
      price: `$20–$155`,
      priceSourceUrl: `https://www.goodrx.com/floxin`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Local irritation, taste changes`
    },
    {
      generic: `Ciprofloxacin / Dexamethasone`,
      brand: `Ciprodex`,
      dosageForm: `Ear drops`,
      drugClass: `Topical fluoroquinolone + steroid`,
      dose: `4 drops in affected ear twice daily × 7 days`,
      price: `$55–$211`,
      priceSourceUrl: `https://www.goodrx.com/ciprofloxacin-dexamethasone`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Local irritation; faster pain relief due to steroid`
    },
    {
      generic: `Amoxicillin`,
      brand: `Amoxil`,
      dosageForm: `Oral capsule/suspension`,
      drugClass: `Beta-lactam antibiotic`,
      dose: `1 g three times daily × 7 days for adult AOM`,
      price: `$4–$16`,
      priceSourceUrl: `https://www.goodrx.com/amoxicillin`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `GI upset, rash, diarrhea`
    },
    {
      generic: `Amoxicillin-clavulanate`,
      brand: `Augmentin`,
      dosageForm: `Oral tablet`,
      drugClass: `Beta-lactam + beta-lactamase inhibitor`,
      dose: `875/125 mg BID × 7 days`,
      price: ` (see medication table)`,
      sideEffects: `Diarrhea, GI upset`
    },
    {
      generic: `Pseudoephedrine`,
      brand: `Sudafed`,
      dosageForm: `Oral tablet`,
      drugClass: `Decongestant`,
      dose: `60 mg every 4–6 hours × 3–5 days`,
      price: `$6–$7`,
      priceSourceUrl: `https://www.goodrx.com/pseudoephedrine`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Insomnia, BP elevation`
    }
  ],
  recovery: [
    {
      period: `Day 1–2`,
      detail: `Pain begins to decrease with appropriate treatment. Otitis externa drops with steroid (Ciprodex) typically fastest pain relief.`
    },
    {
      period: `Day 3–5`,
      detail: `Most pain resolved; complete the full antibiotic course even if better.`
    },
    {
      period: `Day 7`,
      detail: `Treatment course complete; hearing typically restored. ETD may take longer.`
    },
    {
      period: `Week 2`,
      detail: `Eustachian tube dysfunction usually fully resolved by now.`
    },
    {
      period: `Beyond 4 weeks`,
      detail: `Persistent symptoms warrant ENT referral — possible chronic otitis media, eustachian tube dysfunction, or cholesteatoma.`
    }
  ],
  homeCare: [
    `Keep ear dry during otitis externa treatment (cotton ball + petroleum jelly in shower)`,
    `No swimming until cleared`,
    `Don't use Q-tips — they push wax in and damage canal lining`,
    `Warm compress 15 minutes 3× daily for pain`,
    `Sleep with affected ear up if possible`,
    `Stay hydrated and elevate head for ETD`,
    `For ETD: try Valsalva maneuver (pinch nose, gently blow) and yawning`,
    `Chew gum during altitude changes`,
    `Avoid loud noise exposure during recovery`,
    `Don't fly if severe symptoms — use decongestant 30 min before flight if needed`
  ],
  faqs: [
    {
      question: `Can a telehealth doctor prescribe ear drops?`,
      answer: `Yes — ofloxacin and ciprofloxacin/dexamethasone otic drops are non-controlled medications. Dr. Bhavsar can prescribe them after a focused history and video exam for typical otitis externa.`
    },
    {
      question: `How do I know if it's swimmer's ear or middle ear infection?`,
      answer: `Otitis externa (swimmer's ear): pain WORSE with tugging on the ear or pushing the tragus; recent water exposure. Acute otitis media: deep ear pain, fullness, hearing reduction, often after a cold; pulling the ear doesn't make it worse.`
    },
    {
      question: `Do adults with ear infections need antibiotics?`,
      answer: `Otitis externa: yes — antibiotic drops are first-line. Acute otitis media in adults: many cases are viral or self-resolve; antibiotics are recommended for moderate-severe pain, fever >39°C, or symptoms not improving in 48 hours. We follow AAFP guidance.`
    },
    {
      question: `How fast do ear drops work?`,
      answer: `Ciprodex (with steroid) typically reduces pain within 24 hours. Plain antibiotic drops (ofloxacin) take 2–3 days for noticeable improvement. Complete the full course (7 days) even if symptoms resolve early.`
    },
    {
      question: `Why does my ear hurt after a cold?`,
      answer: `Most likely eustachian tube dysfunction. The cold inflames the tube connecting your middle ear to the back of your throat, preventing pressure equalization. Decongestant + intranasal steroid helps. Resolves over 1–2 weeks usually.`
    },
    {
      question: `Can I fly with ear pain?`,
      answer: `Flying with active ear infection or significant ETD can be very painful and rarely cause eardrum perforation. If you must fly, use pseudoephedrine 30 min before takeoff/landing and chew gum. Avoid flying if severe pain or fever.`
    },
    {
      question: `Is it safe to use Q-tips?`,
      answer: `No — Q-tips push wax deeper, damage canal skin, and increase otitis externa risk. The ear is self-cleaning. If wax causes problems, use carbamide peroxide drops or have it removed in-office.`
    },
    {
      question: `What if my ear is draining fluid?`,
      answer: `Clear or yellow drainage often indicates a perforated eardrum (often from middle ear infection) or otitis externa. Don't put cotton in the ear. We can prescribe appropriate drops; some perforations need ENT follow-up.`
    },
    {
      question: `Should I get a hearing test?`,
      answer: `Routine hearing tests are not needed for typical ear infections. Hearing tests are warranted for: hearing loss persisting >4 weeks after infection, sudden hearing loss (urgent), or recurrent ear infections.`
    },
    {
      question: `Can ear pain be referred from somewhere else?`,
      answer: `Yes — "referred otalgia" is common. Sources include teeth (especially upper molars), TMJ disorder, throat (tonsillitis, even cancer), and cervical spine. If your ear exam is normal, we look elsewhere.`
    },
    {
      question: `How do I prevent swimmer's ear?`,
      answer: `Dry ears thoroughly after swimming (towel + tilt head); use 50/50 alcohol/white vinegar drops after swimming if prone; wear earplugs while swimming; avoid Q-tips; treat skin conditions like eczema in the canal.`
    },
    {
      question: `What if my child has ear pain?`,
      answer: `Children under 2 are best evaluated in person — exam findings drive treatment decisions. For children 2+, telehealth can be appropriate for typical mild cases with parental input and clear escalation criteria.`
    },
    {
      question: `Can ear pain mean something serious?`,
      answer: `Rarely. Red flags: sudden hearing loss (urgent ENT), severe vertigo, facial weakness, mastoid swelling, fever with neck stiffness, or chronic foul-smelling drainage with hearing loss (possible cholesteatoma).`
    },
    {
      question: `How does the $49 visit compare to urgent care?`,
      answer: `Urgent care averages $280 (Mira Health). Our $49 telehealth visit handles most adult ear pain — same first-line drops or antibiotics, prescriptions sent same day. We escalate to in-person if exam is needed or red flags present.`
    }
  ],
  relatedSymptoms: [
    `sinus-pressure`,
    `sinus-infection`,
    `sore-throat`
  ],
  references: [
    {
      label: `AAFP — Acute Otitis Media`,
      url: `https://www.aafp.org/pubs/afp/issues/2019/1001/p435.html`
    },
    {
      label: `AAP — Diagnosis and Management of Acute Otitis Media`,
      url: `https://publications.aap.org/pediatrics/article/131/3/e964/30912`
    },
    {
      label: `Mayo Clinic — Ear Infection (Middle Ear)`,
      url: `https://www.mayoclinic.org/diseases-conditions/ear-infections/symptoms-causes/syc-20351616`
    },
    {
      label: `CDC — Ear Infection`,
      url: `https://www.cdc.gov/antibiotic-use/ear-infection.html`
    },
    {
      label: `AAO-HNS — Otitis Externa Guideline`,
      url: `https://www.entnet.org/quality-practice/quality-products/clinical-practice-guidelines/acute-otitis-externa/`
    },
    {
      label: `GoodRx — Ciprodex Pricing`,
      url: `https://www.goodrx.com/ciprodex`
    }
  ],
  riskFactors: [
    `Recent water exposure (swimming, hot tub)`,
    `Recent URI / cold`,
    `Q-tip use or ear trauma`,
    `Allergies (predispose to ETD)`,
    `Smoking`,
    `Diabetes (otitis externa risk)`
  ],
  typicalTests: [
    `Clinical exam (otoscopy in person; video for external ear)`,
    `Tympanometry (in-office)`,
    `Audiometry (if hearing loss persists)`,
    `Culture (refractory or chronic cases)`
  ]
};

SYMPTOM_PAGES["sinus-infection"] = {
  slug: `sinus-infection`,
  pid: `sym-sinus-infection`,
  query: `sinus infection antibiotics online doctor`,
  h1: `Sinus Infection (Sinusitis) — Same-Day Antibiotic Online`,
  metaTitle: `Sinus Infection Treatment Online — Antibiotic Rx | TeleDirectMD`,
  metaDescription: `Sinus infection lasting 10+ days, double-worsening pattern, or severe symptoms? Same-day antibiotic prescription if criteria met. $49 telehealth, 41 states.`,
  breadcrumb: `Sinus Infection`,
  answerLead: `Sinus infection — when antibiotics are right, when they're not:`,
  answerBody: `<p>About 90% of sinus infections are viral and resolve without antibiotics. Bacterial sinusitis (10%) meets one of three IDSA/AAFP criteria: <strong>persistent</strong> (>10 days without improvement), <strong>severe</strong> (high fever ≥39°C with purulent discharge × 3–4 days), or <strong>worsening</strong> (double-sickening pattern). When criteria are met, amoxicillin-clavulanate is first-line. Telehealth handles this triage and prescribing efficiently.</p>`,
  symptomDef: {
    altNames: [
      `Sinusitis`,
      `Acute bacterial rhinosinusitis`,
      `Acute sinusitis`
    ],
    anatomy: `Paranasal sinuses`,
    treatment: `Most cases viral (supportive). Bacterial: amoxicillin-clavulanate × 5–7 days`,
    conditionDisplayName: `Acute rhinosinusitis`
  },
  whatThisMeans: [
    `<p><strong>Sinus infection often starts as a viral cold</strong> that doesn't resolve normally. By day 7, most viral cases improve. If symptoms persist past 10 days or worsen after initial improvement, bacterial infection should be considered.</p>`,
    `<p><strong>The diagnosis is clinical, not radiologic.</strong> CT scans are not recommended for uncomplicated acute sinusitis — they can't reliably distinguish viral from bacterial and expose you to radiation.</p>`,
    `<p><strong>Yellow or green mucus is NOT a reliable sign of bacterial infection.</strong> Both viral and bacterial sinus infections produce thick discolored mucus. Duration and pattern are what guide antibiotic decisions.</p>`,
    `<p><strong>Complications are rare but serious</strong> — orbital cellulitis (eye swelling, vision change), intracranial extension (severe headache, fever, neuro symptoms). These need ER evaluation.</p>`
  ],
  differentials: [
    {
      name: `Viral rhinosinusitis`,
      description: `Common cold inflammation extending to sinuses.`,
      prevalence: `~90% of acute sinusitis`,
      features: `Symptoms <10 days, peaks day 3–5, resolves by day 10, no double-worsening`,
      next: `Saline + intranasal steroid + analgesics; no antibiotic`
    },
    {
      name: `Acute bacterial rhinosinusitis`,
      description: `Bacterial superinfection.`,
      prevalence: `~2–10% of cases`,
      features: `Symptoms ≥10 days without improvement, severe at onset (fever ≥39°C + purulent), or double-worsening`,
      next: `Amoxicillin-clavulanate 875/125 mg BID × 5–7 days`
    },
    {
      name: `Allergic rhinitis`,
      description: `IgE-mediated nasal inflammation.`,
      prevalence: `~25% adults`,
      features: `Itchy eyes, sneezing, watery discharge, seasonal`,
      next: `Intranasal steroid daily + oral antihistamine`
    },
    {
      name: `Migraine with sinus features`,
      description: `Migraine misdiagnosed as sinus.`,
      prevalence: `~88% of "sinus headaches"`,
      features: `Pulsating pain, photophobia, nausea, recurrent`,
      next: `Triptan trial; preventive evaluation`
    },
    {
      name: `Dental abscess (referred)`,
      description: `Upper tooth abscess mimicking maxillary sinus pain.`,
      prevalence: `~10% of unilateral maxillary pain`,
      features: `One-sided cheek pain, tooth pain on tapping, worse with chewing`,
      next: `Dental referral for evaluation`
    }
  ],
  redFlags: [
    `<strong>Severe one-sided eye pain or vision change</strong> — orbital cellulitis; ER`,
    `<strong>High fever with neck stiffness or confusion</strong> — possible intracranial spread`,
    `<strong>Eyelid swelling, redness, or proptosis</strong> — orbital complication`,
    `<strong>Severe headache unlike any before</strong> — needs imaging`,
    `<strong>Symptoms >12 weeks</strong> — chronic sinusitis; ENT and CT`,
    `<strong>4+ acute episodes per year</strong> — recurrent acute; ENT evaluation`,
    `<strong>Severe immunocompromise</strong> — risk of fungal sinusitis`
  ],
  eligibility: [
    `Adults 18+ in our 41 states`,
    `Sinus symptoms 7–14 days`,
    `Mild-to-moderate severity`,
    `Want guidance on antibiotic vs. supportive plan`,
    `Fits IDSA/AAFP criteria for bacterial sinusitis`,
    `Have tried OTC measures with limited improvement`,
    `Need same-day prescription if appropriate`,
    `Recurrent sinusitis but currently stable`
  ],
  notEligibility: [
    `Severe vision change or eye swelling — ER`,
    `High fever with neck stiffness — ER`,
    `Symptoms >12 weeks — ENT referral, CT`,
    `Severe immunocompromise — in-person`,
    `Multiple antibiotic course failures — ENT specialist`,
    `Suspected complications — ER`
  ],
  howTelehealthHelps: [
    `<p>You complete an intake covering exact symptom timeline (onset day, peak, current trajectory), discharge color, fever, double-worsening pattern, and red flag screen.</p>`,
    `<p>Dr. Bhavsar applies IDSA/AAFP criteria: persistent (≥10 days), severe (≥39°C + purulent × 3–4 days), or worsening (double-sickening). Antibiotics only when criteria met.</p>`,
    `<p>If bacterial criteria met: amoxicillin-clavulanate 875/125 mg BID × 5–7 days (first-line). Doxycycline if penicillin-allergic.</p>`,
    `<p>If viral pattern (most cases): high-volume saline irrigation + intranasal fluticasone + symptom-control plan with clear return precautions.</p>`,
    `<p>Allergic rhinitis component addressed with year-round daily intranasal steroid when appropriate.</p>`,
    `<p>If migraine pattern is more likely than bacterial sinusitis, triptan plus preventive evaluation instead of antibiotic.</p>`,
    `<p>48-hour follow-up message; clear escalation triggers; ENT referral if recurrent or complicated.`
  ],
  treatmentOptions: [
    {
      category: `First-line antibiotic`,
      detail: `Amoxicillin-clavulanate 875/125 mg twice daily × 5–7 days per IDSA — covers beta-lactamase H. influenzae.`
    },
    {
      category: `Penicillin-allergy alternative`,
      detail: `Doxycycline 100 mg twice daily × 5–7 days for confirmed penicillin allergy.`
    },
    {
      category: `Treatment failure (after 72h on amoxicillin-clavulanate)`,
      detail: `Levofloxacin 500 mg daily × 5–7 days, OR moxifloxacin 400 mg daily × 5–7 days.`
    },
    {
      category: `Saline irrigation (cornerstone)`,
      detail: `Neti pot or squeeze bottle with isotonic or hypertonic saline 1–2× daily — distilled or boiled water only.`
    },
    {
      category: `Intranasal corticosteroid`,
      detail: `Fluticasone 50 mcg 2 sprays each nostril daily — improves drainage, reduces inflammation, helps both viral and allergic.`
    },
    {
      category: `Decongestant (short course)`,
      detail: `Pseudoephedrine 30–60 mg every 4–6 hours × max 3–5 days, or oxymetazoline nasal spray ≤3 days only.`
    },
    {
      category: `Pain and fever control`,
      detail: `Ibuprofen 400 mg every 6 hours, or acetaminophen 1000 mg every 6 hours (max 3 g/day).`
    }
  ],
  medications: [
    {
      generic: `Amoxicillin-clavulanate`,
      brand: `Augmentin`,
      dosageForm: `Oral tablet`,
      drugClass: `Beta-lactam antibiotic`,
      dose: `875/125 mg BID × 5–7 days`,
      price: `$12–$35`,
      priceSourceUrl: `https://www.goodrx.com/amoxicillin-potassium-clavulanate`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Diarrhea, GI upset`
    },
    {
      generic: `Doxycycline`,
      brand: `Vibramycin`,
      dosageForm: `Oral capsule`,
      drugClass: `Tetracycline antibiotic`,
      dose: `100 mg BID × 5–7 days`,
      price: `$5–$80`,
      priceSourceUrl: `https://www.goodrx.com/doxycycline-hyclate`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Photosensitivity; avoid in pregnancy`
    },
    {
      generic: `Levofloxacin`,
      brand: `Levaquin`,
      dosageForm: `Oral tablet`,
      drugClass: `Fluoroquinolone antibiotic`,
      dose: `500 mg daily × 5–7 days (if treatment failure)`,
      price: `$8–$148`,
      priceSourceUrl: `https://www.goodrx.com/levofloxacin`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Tendon rupture, QT prolongation, GI; reserved for failures`
    },
    {
      generic: `Fluticasone propionate`,
      brand: `Flonase`,
      dosageForm: `Nasal spray`,
      drugClass: `Intranasal corticosteroid`,
      dose: `2 sprays each nostril once daily`,
      price: `$16–$27`,
      priceSourceUrl: `https://www.goodrx.com/fluticasone-propionate-non-prescription`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Nasal dryness, occasional epistaxis`
    },
    {
      generic: `Pseudoephedrine`,
      brand: `Sudafed`,
      dosageForm: `Oral tablet`,
      drugClass: `Sympathomimetic decongestant`,
      dose: `30–60 mg every 4–6 hours, max 3–5 days`,
      price: `$2–$8`,
      priceSourceUrl: `https://www.goodrx.com/pseudoephedrine`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Insomnia, BP elevation`
    }
  ],
  recovery: [
    {
      period: `Day 1–2 of antibiotic`,
      detail: `Pain and fever begin to decrease; full improvement should be evident within 48–72 hours.`
    },
    {
      period: `Day 3 of antibiotic`,
      detail: `If no significant improvement, switch (treatment failure). Otherwise complete the course.`
    },
    {
      period: `Day 5–7`,
      detail: `Symptoms 80%+ resolved; complete full course; continue intranasal steroid 1–2 weeks more.`
    },
    {
      period: `Week 2–4`,
      detail: `Residual mild congestion is normal; saline rinses help.`
    },
    {
      period: `Beyond 4 weeks`,
      detail: `Subacute sinusitis — re-evaluate; consider ENT referral and imaging.`
    }
  ],
  homeCare: [
    `Saline nasal irrigation 1–2× daily with distilled/boiled water`,
    `Sleep with head elevated 30–45°`,
    `Warm compresses 15 min × 3 daily`,
    `Cool-mist humidifier in bedroom`,
    `Hydrate aggressively — 2+ liters water daily`,
    `Steam inhalation from hot showers 2× daily`,
    `Avoid known allergens and smoke exposure`,
    `Don't fly with severe symptoms`,
    `Limit alcohol while symptomatic`,
    `Don't use oxymetazoline >3 days — rebound congestion`
  ],
  faqs: [
    {
      question: `Can a telehealth doctor prescribe antibiotics for a sinus infection?`,
      answer: `Yes — when IDSA/AAFP criteria are met. Dr. Bhavsar can prescribe amoxicillin-clavulanate (first-line) or doxycycline (penicillin-allergic). We don't prescribe antibiotics for clearly viral patterns — that's stewardship and protects you from unnecessary side effects.`
    },
    {
      question: `How long does a sinus infection last?`,
      answer: `Viral sinusitis: peaks day 3–5, resolves by day 10. Bacterial sinusitis treated with appropriate antibiotics: 48–72 hour improvement, full resolution by day 7–10. Symptoms >4 weeks = subacute; >12 weeks = chronic — both warrant further evaluation.`
    },
    {
      question: `What's the difference between viral and bacterial sinus infection?`,
      answer: `Three IDSA/AAFP criteria for bacterial: symptoms ≥10 days without improvement; severe at onset (fever ≥39°C + purulent discharge × 3–4 days); or double-worsening (improved then got worse). Without one of these, it's almost certainly viral.`
    },
    {
      question: `Is the color of mucus a good sign of bacterial infection?`,
      answer: `No. Yellow or green mucus reflects white blood cell presence, which occurs in both viral and bacterial sinusitis. Color alone is NOT a reason to prescribe antibiotics. Pattern and duration matter.`
    },
    {
      question: `Can a sinus infection go away on its own?`,
      answer: `Yes — about 90% of sinus infections are viral and self-resolve within 10 days. Many "bacterial" cases also resolve without antibiotics; AAFP and Cochrane data show modest benefit from antibiotics even in suspected bacterial cases.`
    },
    {
      question: `Do I need a CT scan for sinusitis?`,
      answer: `No — not for uncomplicated acute sinusitis. CT is reserved for chronic sinusitis (>12 weeks), recurrent (4+/year), suspected complications (orbital, intracranial), or pre-surgical planning.`
    },
    {
      question: `What's the best home remedy?`,
      answer: `Saline nasal irrigation has the strongest evidence — Cochrane and AAFP support it. Use a Neti pot or squeeze bottle 1–2× daily with distilled or boiled water. Reduces symptoms, improves drainage, and reduces antibiotic use.`
    },
    {
      question: `Are intranasal steroids safe long-term?`,
      answer: `Yes — fluticasone, mometasone, and budesonide are safe for years of daily use. Local side effects (nasal dryness, occasional bleeding) are mild. Systemic absorption is minimal at recommended doses.`
    },
    {
      question: `What if my sinus infection isn't getting better on antibiotics?`,
      answer: `Reassess at 72 hours. If no improvement, it suggests resistant bacteria or wrong diagnosis. We typically switch to levofloxacin or moxifloxacin for treatment failure, or refer to ENT for nasal endoscopy and culture.`
    },
    {
      question: `Can I prevent recurrent sinus infections?`,
      answer: `Yes: daily saline irrigation, treat allergic rhinitis aggressively (year-round intranasal steroid), control GERD if reflux affects sinuses, quit smoking, manage humidity, treat dental issues. ENT can identify structural problems (deviated septum, polyps).`
    },
    {
      question: `What if I'm pregnant?`,
      answer: `Saline irrigation, acetaminophen, and intranasal budesonide are safe in pregnancy. Avoid pseudoephedrine in 1st trimester. If antibiotic needed, amoxicillin-clavulanate is generally safe; doxycycline is contraindicated.`
    },
    {
      question: `Can sinus infection cause headache?`,
      answer: `Yes — facial pressure and headache are typical. However, ~88% of self-diagnosed "sinus headaches" actually meet migraine criteria. If headache is throbbing with light/sound sensitivity and no infection signs, it may be migraine.`
    },
    {
      question: `How long should I be on antibiotics?`,
      answer: `5–7 days for adult acute bacterial sinusitis per current IDSA/AAFP guidance. Longer courses (10–14 days) are no more effective and increase side effects. Complete the full course even if better.`
    },
    {
      question: `How does the $49 visit compare to urgent care or PCP?`,
      answer: `Urgent care: ~$280; PCP: ~$171; ER: ~$2,715 (Mira Health). Our $49 telehealth visit handles uncomplicated sinusitis efficiently — same first-line antibiotics, prescription same day, no waiting room. We escalate to in-person for red flags or complications.`
    }
  ],
  relatedSymptoms: [
    `sinus-pressure`,
    `persistent-cough`,
    `ear-pain`,
    `allergy-symptoms`
  ],
  references: [
    {
      label: `AAFP — Acute Sinusitis: Diagnosis and Treatment`,
      url: `https://www.aafp.org/pubs/afp/issues/2016/1015/p640.html`
    },
    {
      label: `CDC — Sinus Infection (Sinusitis)`,
      url: `https://www.cdc.gov/antibiotic-use/sinus-infection.html`
    },
    {
      label: `Mayo Clinic — Acute Sinusitis`,
      url: `https://www.mayoclinic.org/diseases-conditions/acute-sinusitis/symptoms-causes/syc-20351671`
    },
    {
      label: `IDSA — Acute Bacterial Rhinosinusitis Guideline`,
      url: `https://www.idsociety.org/practice-guideline/acute-bacterial-rhinosinusitis/`
    },
    {
      label: `AAO-HNS — Adult Sinusitis Clinical Practice Guideline`,
      url: `https://www.entnet.org/quality-practice/quality-products/clinical-practice-guidelines/adult-sinusitis/`
    },
    {
      label: `GoodRx — Augmentin Pricing`,
      url: `https://www.goodrx.com/augmentin`
    }
  ],
  riskFactors: [
    `Recent viral URI`,
    `Allergic rhinitis`,
    `Smoking / smoke exposure`,
    `Anatomic deviated septum`,
    `Dental infection`,
    `Immunocompromise`
  ],
  typicalTests: [
    `Clinical exam (no test for acute uncomplicated)`,
    `CT sinus (chronic, recurrent, complicated only)`,
    `Nasal endoscopy (chronic, ENT)`,
    `Allergy testing (if allergic component)`
  ]
};

SYMPTOM_PAGES["cold-sore"] = {
  slug: `cold-sore`,
  pid: `sym-cold-sore`,
  query: `cold sore valacyclovir prescription online`,
  h1: `Cold Sore (Oral Herpes) — Same-Day Valacyclovir Online`,
  metaTitle: `Cold Sore Treatment Online — Valacyclovir Rx Same Day | TeleDirectMD`,
  metaDescription: `Tingling lip, blister forming? Antivirals work best within 48 hours. Same-day valacyclovir or acyclovir prescription via $49 telehealth visit in 41 states.`,
  breadcrumb: `Cold Sore`,
  answerLead: `Tingling, then blister on the lip — what's likely:`,
  answerBody: `<p>Cold sores (herpes labialis) are caused by HSV-1, which most people acquire in childhood and harbor for life. About 30–50% of adults have recurrent outbreaks. Antiviral therapy (valacyclovir, acyclovir, famciclovir) shortens duration and severity when started within 48 hours of the first tingle. Telehealth is well-suited for prompt treatment.</p>`,
  symptomDef: {
    altNames: [
      `Herpes labialis`,
      `Oral herpes`,
      `Fever blister`,
      `HSV-1 lip`
    ],
    anatomy: `Lip vermillion border and adjacent skin`,
    treatment: `Valacyclovir 2 g BID × 1 day at first tingle; daily suppression if frequent`,
    conditionDisplayName: `Herpes labialis`
  },
  whatThisMeans: [
    `<p><strong>HSV-1 affects ~67% of the global population</strong>; primary infection usually occurs in childhood and is often asymptomatic. The virus then lives dormant in the trigeminal ganglion and reactivates periodically.</p>`,
    `<p><strong>Outbreaks have a predictable course:</strong> tingling/burning prodrome (24 hours), papule formation, vesicle (blister) cluster, ulceration, crust, and healing — typically 7–10 days untreated, 4–7 days treated.</p>`,
    `<p><strong>Triggers include stress, sun exposure, illness, fever, hormonal changes, and immunosuppression.</strong> Identifying triggers helps prevent recurrences.</p>`,
    `<p><strong>HSV is contagious during outbreaks and asymptomatic shedding</strong> — avoid kissing, sharing utensils/lip products during active lesions. Newborns and immunocompromised individuals are especially vulnerable.</p>`
  ],
  differentials: [
    {
      name: `Herpes labialis (HSV-1)`,
      description: `Reactivation of HSV-1 on the lip.`,
      prevalence: `30–50% of adults have recurrent outbreaks`,
      features: `Prodromal tingle, vesicle cluster on vermilion border, crusting, 7–10 day course`,
      next: `Valacyclovir 2 g BID × 1 day at first tingle; or acyclovir 400 mg 5×/day × 5 days`
    },
    {
      name: `Angular cheilitis`,
      description: `Inflammation at corners of mouth, often candidal or bacterial.`,
      prevalence: `Common in elderly and immunocompromised`,
      features: `Cracked, red, fissured corners of mouth, no vesicles`,
      next: `Topical antifungal/antibacterial; address nutritional deficiencies`
    },
    {
      name: `Aphthous ulcer (canker sore)`,
      description: `Non-infectious oral ulcer inside the mouth.`,
      prevalence: `Affects 20% of population`,
      features: `Round/oval ulcer with yellow base on inner cheek/tongue, NO outer lip lesions`,
      next: `Topical analgesics; usually self-resolves 1–2 weeks`
    },
    {
      name: `Impetigo`,
      description: `Bacterial skin infection (S. aureus, Strep).`,
      prevalence: `More common in children`,
      features: `Honey-colored crusts, often around nose and mouth, can spread`,
      next: `Mupirocin ointment or oral cephalexin`
    },
    {
      name: `Contact dermatitis`,
      description: `Allergic/irritant reaction to lip products.`,
      prevalence: `Common`,
      features: `Bilateral redness/scaling, no vesicle clusters, recent product change`,
      next: `Stop trigger; topical hydrocortisone 1%`
    }
  ],
  redFlags: [
    `<strong>Eye involvement</strong> (lesions near eye, eye pain, or vision change) — possible herpetic keratitis; ER/ophthalmology`,
    `<strong>Severe outbreak with fever and lymphadenopathy in a child</strong> — primary HSV gingivostomatitis, may need hospitalization`,
    `<strong>Outbreak in eczema patient (eczema herpeticum)</strong> — emergent`,
    `<strong>Outbreak in immunocompromised patient</strong> — needs higher-dose IV/systemic therapy`,
    `<strong>Lesions persist >2 weeks</strong> — atypical, needs evaluation`,
    `<strong>Bacterial superinfection</strong> (worsening pain, pus, spreading redness)`,
    `<strong>Newborn exposure</strong> — risk of neonatal herpes (urgent)`
  ],
  eligibility: [
    `Adults and children (with parent) in our 41 states`,
    `Recurrent cold sore — recognize the prodrome`,
    `First-ever cold sore not severe (no fever, can eat/drink)`,
    `Want same-day antiviral`,
    `Frequent recurrences (≥6/year) — daily suppression option`,
    `Pre-trip prophylaxis (sun exposure, ski trip)`,
    `Pre-procedure (laser, dental work)`,
    `Need work note if lesion visible`
  ],
  notEligibility: [
    `Eye involvement — ophthalmology emergent`,
    `Eczema herpeticum — ER`,
    `Severely immunocompromised — in-person`,
    `Newborn exposed or sick — urgent pediatric`,
    `Severe primary outbreak with dehydration — in-person`,
    `Lesion >2 weeks unresolved — in-person evaluation`
  ],
  howTelehealthHelps: [
    `<p>You complete an intake covering frequency, current stage (tingle, blister, ulcer, crust), triggers, immunocompromise, and red flags.</p>`,
    `<p>Dr. Bhavsar reviews and prescribes valacyclovir 2 g BID × 1 day (single-day regimen) at first tingle — most effective and convenient. Acyclovir is a budget alternative.</p>`,
    `<p>If you have ≥6 outbreaks per year, daily suppressive therapy can be prescribed: valacyclovir 500 mg or 1 g daily.</p>`,
    `<p>Pre-trip prophylaxis (e.g., ski trip with intense sun): valacyclovir 500 mg daily starting day before trip and through duration.</p>`,
    `<p>Trigger management: SPF 30+ lip balm year-round, stress reduction, lysine supplementation (modest evidence).</p>`,
    `<p>If atypical pattern (eye involvement, severe primary outbreak, immunocompromise), in-person referral.</p>`,
    `<p>Prescription sent same day.`
  ],
  treatmentOptions: [
    {
      category: `Valacyclovir 1-day regimen (preferred)`,
      detail: `2000 mg BID × 1 day at first tingle — strongest evidence for shortening outbreak; most convenient.`
    },
    {
      category: `Acyclovir`,
      detail: `400 mg 5 times daily × 5 days, or 200 mg 5 times daily × 5 days; less convenient but cheap.`
    },
    {
      category: `Famciclovir`,
      detail: `1500 mg single dose at first tingle, OR 750 mg BID × 1 day.`
    },
    {
      category: `Daily suppression (≥6 outbreaks/year)`,
      detail: `Valacyclovir 500 mg daily, or acyclovir 400 mg BID. Reduces frequency by ~75%.`
    },
    {
      category: `Topical antiviral`,
      detail: `Penciclovir 1% cream or acyclovir 5% cream every 2 hours while awake — modest benefit; often combined with oral.`
    },
    {
      category: `Pre-trigger prophylaxis`,
      detail: `Valacyclovir 500 mg daily starting 1 day before trigger event (sun exposure, dental work) for 7 days.`
    },
    {
      category: `Symptom relief`,
      detail: `Topical docosanol 10% (Abreva) at first tingle; oral analgesics; cool compresses; avoid spicy/acidic foods during ulcer phase.`
    }
  ],
  medications: [
    {
      generic: `Valacyclovir`,
      brand: `Valtrex`,
      dosageForm: `Oral tablet`,
      drugClass: `Antiviral (prodrug of acyclovir)`,
      dose: `2 g BID × 1 day (recurrent); 500 mg daily (suppression)`,
      price: `$19–$57`,
      priceSourceUrl: `https://www.goodrx.com/valacyclovir`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Headache, nausea; rare TTP/HUS in immunocompromised`
    },
    {
      generic: `Acyclovir`,
      brand: `Zovirax`,
      dosageForm: `Oral capsule/cream`,
      drugClass: `Antiviral`,
      dose: `400 mg 5×/day × 5 days, or 5% cream every 2 hours`,
      price: `$5–$28`,
      priceSourceUrl: `https://www.goodrx.com/acyclovir`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `GI upset, headache; rare renal impairment`
    },
    {
      generic: `Famciclovir`,
      brand: `Famvir`,
      dosageForm: `Oral tablet`,
      drugClass: `Antiviral`,
      dose: `1500 mg single dose at first tingle`,
      price: `$20–$90`,
      priceSourceUrl: `https://www.goodrx.com/famciclovir`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Headache, nausea`
    },
    {
      generic: `Penciclovir`,
      brand: `Denavir`,
      dosageForm: `Topical cream`,
      drugClass: `Topical antiviral`,
      dose: `Apply every 2 hours while awake × 4 days`,
      price: `$141–$779`,
      priceSourceUrl: `https://www.goodrx.com/penciclovir`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Local irritation`
    },
    {
      generic: `Docosanol`,
      brand: `Abreva`,
      dosageForm: `Topical cream`,
      drugClass: `Antiviral OTC`,
      dose: `Apply 5 times daily until healed`,
      price: `$13–$21`,
      priceSourceUrl: `https://www.goodrx.com/docosanol`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Mild local irritation`
    }
  ],
  recovery: [
    {
      period: `Hours 0–24 (prodrome)`,
      detail: `Take antiviral immediately at first tingle — best chance to abort or shorten outbreak.`
    },
    {
      period: `Day 1–2`,
      detail: `Vesicle formation reduced or aborted with prompt antiviral; pain peaks.`
    },
    {
      period: `Day 3–4`,
      detail: `Ulceration phase — keep clean and dry; avoid touching.`
    },
    {
      period: `Day 5–7`,
      detail: `Crusting and healing. Most treated outbreaks fully healed by day 7.`
    },
    {
      period: `Long-term`,
      detail: `With daily suppression, frequency drops ~75%. Reassess annually.`
    }
  ],
  homeCare: [
    `Take antiviral at first tingle — don't wait for blister`,
    `Apply SPF 30+ lip balm year-round (UV is a major trigger)`,
    `Avoid touching the lesion; wash hands if you do`,
    `Don't share utensils, towels, lip balm, or razors during outbreak`,
    `Avoid kissing during active lesions`,
    `Cool compresses for pain relief`,
    `Avoid spicy/acidic foods during ulcer phase`,
    `Get adequate sleep — fatigue triggers outbreaks`,
    `Manage stress — significant trigger for many`,
    `Lysine 1000 mg daily — modest evidence for prevention`
  ],
  faqs: [
    {
      question: `Can a telehealth doctor prescribe valacyclovir?`,
      answer: `Yes — valacyclovir (Valtrex) and acyclovir are non-controlled medications. Dr. Bhavsar can prescribe them at first symptoms; same-day prescription is typical. Single-day valacyclovir is the most convenient regimen.`
    },
    {
      question: `How fast do cold sore antivirals work?`,
      answer: `Best within 48 hours of first tingle — they can abort the outbreak entirely or significantly shorten its course. Started later, they still help reduce duration by 1–2 days. The single-day valacyclovir regimen has equivalent efficacy to longer courses.`
    },
    {
      question: `Are cold sores contagious?`,
      answer: `Yes — highly contagious during active outbreaks (tingling through full healing). Asymptomatic viral shedding also occurs. Avoid kissing, oral sex, and sharing items during outbreaks. Wash hands after touching the area.`
    },
    {
      question: `Will I always have cold sores?`,
      answer: `HSV-1 lives in your nerve ganglia for life — there's no cure. However, frequency typically decreases with age and effective suppressive therapy can reduce outbreaks by 75%+. Many people achieve very long lesion-free periods.`
    },
    {
      question: `What triggers cold sores?`,
      answer: `Most common triggers: sun (UV) exposure, stress, illness, fever, hormonal changes (menstruation), fatigue, immunosuppression, and trauma to the lip. Daily SPF lip balm and stress management are highest-yield prevention.`
    },
    {
      question: `Should I take daily antivirals?`,
      answer: `Daily suppressive therapy makes sense if you have ≥6 outbreaks per year, severe outbreaks affecting work/life, or specific high-risk situations (immunocompromise, pregnancy near term). Reduces frequency ~75%.`
    },
    {
      question: `Can I get HSV-1 from my partner?`,
      answer: `Yes — HSV-1 transmits through skin contact and saliva. Most adults already carry HSV-1 from childhood. Genital HSV-1 (from oral sex during an outbreak) is increasingly common. Use barriers and avoid oral sex during outbreaks.`
    },
    {
      question: `Is Abreva (docosanol) effective?`,
      answer: `Modestly. OTC docosanol shortens outbreaks by about 1 day if used at first tingle. It's better than nothing but less effective than oral valacyclovir. Best as adjunct, not replacement.`
    },
    {
      question: `Does lysine really help?`,
      answer: `Modest evidence. L-lysine (1000 mg daily) may reduce outbreak frequency in some studies — not a substitute for antivirals during active outbreaks but reasonable preventive add-on.`
    },
    {
      question: `Can children get prescribed valacyclovir?`,
      answer: `Yes — valacyclovir is approved for children ≥12. Dose adjusted for younger children using acyclovir. Primary HSV gingivostomatitis in young children can be severe and may need urgent in-person care.`
    },
    {
      question: `What if I'm pregnant?`,
      answer: `Acyclovir and valacyclovir are considered low-risk in pregnancy and used routinely. If you have frequent outbreaks, daily suppression starting at week 36 reduces neonatal HSV exposure. Consult your OB.`
    },
    {
      question: `Can I use cold sore medication for genital herpes?`,
      answer: `Yes — acyclovir, valacyclovir, and famciclovir all treat genital HSV (HSV-2 and oral HSV-1 transmitted to genitals). Doses differ. Genital herpes warrants its own dedicated visit and STI screening.`
    },
    {
      question: `How can I prevent transmitting cold sores to my baby?`,
      answer: `During outbreaks: don't kiss the baby, wash hands frequently, don't share utensils, avoid touching the baby's face. Newborn HSV is rare but serious — extra precautions when you have an active lesion.`
    },
    {
      question: `How does the $49 visit save me money?`,
      answer: `Compared to urgent care ($280) or PCP visit ($171), our $49 telehealth visit handles cold sores efficiently — same antiviral options, prescribed within an hour, no waiting room. Generic valacyclovir is (see medication table).`
    }
  ],
  relatedSymptoms: [],
  references: [
    {
      label: `AAD — Cold Sores: Overview`,
      url: `https://www.aad.org/public/diseases/a-z/cold-sores-overview`
    },
    {
      label: `CDC — Herpes Simplex Virus`,
      url: `https://www.cdc.gov/herpes/about/index.html`
    },
    {
      label: `Mayo Clinic — Cold Sore`,
      url: `https://www.mayoclinic.org/diseases-conditions/cold-sore/symptoms-causes/syc-20371017`
    },
    {
      label: `AAFP — Herpes Labialis Treatment`,
      url: `https://www.aafp.org/pubs/afp/issues/2002/1101/p1697.html`
    },
    {
      label: `NIH MedlinePlus — Herpes (Oral)`,
      url: `https://medlineplus.gov/herpessimplex.html`
    },
    {
      label: `GoodRx — Valacyclovir Pricing`,
      url: `https://www.goodrx.com/valacyclovir`
    }
  ],
  riskFactors: [
    `Childhood HSV-1 exposure`,
    `Sun (UV) exposure`,
    `Stress`,
    `Illness/fever`,
    `Hormonal changes`,
    `Immunosuppression`,
    `Lip trauma`
  ],
  typicalTests: [
    `Clinical diagnosis (vesicular cluster on lip)`,
    `Viral PCR or culture (atypical or first severe outbreak)`,
    `HSV serology (rarely needed)`,
    `No routine labs needed for typical recurrent cold sores`
  ]
};

SYMPTOM_PAGES["birth-control"] = {
  slug: `birth-control`,
  pid: `sym-birth-control`,
  query: `birth control pills online prescription`,
  h1: `Birth Control Pills — Online Prescription Same Day`,
  metaTitle: `Birth Control Online — Pill, Patch, Ring Rx Same Day | TeleDirectMD`,
  metaDescription: `Get a same-day birth control prescription via $49 telehealth — pill, patch, or ring. CDC MEC-screened, sent to your pharmacy in 41 states.`,
  breadcrumb: `Birth Control`,
  answerLead: `Birth control prescription, refill, or new method:`,
  answerBody: `<p>Hormonal contraception is one of the most studied and effective medical interventions. Per CDC's U.S. Medical Eligibility Criteria (US MEC) and ACOG, telehealth-based prescribing is well-supported for most women without high-risk conditions. We screen for contraindications, prescribe an appropriate method, and provide structured follow-up.</p>`,
  symptomDef: {
    altNames: [
      `Oral contraceptives`,
      `Hormonal birth control`,
      `The pill`,
      `Contraceptives`
    ],
    anatomy: `Hypothalamic-pituitary-ovarian axis`,
    treatment: `Combined hormonal contraception (pill, patch, ring) or progestin-only methods after MEC screening`,
    conditionDisplayName: `Contraception`
  },
  whatThisMeans: [
    `<p><strong>Hormonal contraception is highly effective</strong> when used consistently. Combined hormonal contraceptives (pill, patch, ring) are 99% effective with perfect use, ~91% with typical use. Most patients can safely use them per CDC US MEC.</p>`,
    `<p><strong>Progestin-only methods</strong> (mini-pill, hormonal IUD, implant, depot injection) are options when estrogen is contraindicated — including breastfeeding, history of blood clots, migraine with aura, or smokers >35.</p>`,
    `<p><strong>Many non-contraceptive benefits</strong>: regulating cycles, reducing menstrual bleeding/cramps, treating acne, managing PMS/PMDD, reducing ovarian and endometrial cancer risk, treating PCOS symptoms.</p>`,
    `<p><strong>Critical to screen for blood clot risk</strong>: smoking + age >35, migraine with aura, history of DVT/PE, uncontrolled hypertension, or diabetes with vascular disease — these are CDC MEC Category 4 (avoid combined estrogen). Progestin-only is safer.</p>`
  ],
  differentials: [
    {
      name: `Combined hormonal contraception (CHC)`,
      description: `Estrogen + progestin pill, patch, or ring.`,
      prevalence: `~25% of US women on contraception`,
      features: `Cycle regulation, acne benefit, ~99% effective with perfect use`,
      next: `Screen MEC; prescribe pill (e.g., levonorgestrel/EE), patch (Xulane), or ring (NuvaRing)`
    },
    {
      name: `Progestin-only pill (POP)`,
      description: `Norethindrone or drospirenone-only pill.`,
      prevalence: `Used when CHC contraindicated`,
      features: `Safe with breastfeeding, migraine with aura, smokers >35`,
      next: `Take same time daily (3-hour window for most POPs); drospirenone has 24-hour window`
    },
    {
      name: `Long-acting reversible contraception (LARC)`,
      description: `IUD or implant — most effective methods.`,
      prevalence: `~12% of US contraceptive users (growing)`,
      features: `Hormonal IUD (Mirena, Kyleena), copper IUD (Paragard), implant (Nexplanon)`,
      next: `Telehealth can refer for placement; counseling and prescription pre-visit`
    },
    {
      name: `Emergency contraception`,
      description: `Levonorgestrel (Plan B) or ulipristal (Ella) for post-coital prevention.`,
      prevalence: `Used by ~25% of women at some point`,
      features: `Most effective within 72 hours (LNG) or 120 hours (UPA)`,
      next: `Levonorgestrel 1.5 mg (OTC) or ulipristal 30 mg (Rx)`
    },
    {
      name: `Cycle dysregulation requiring evaluation`,
      description: `Abnormal bleeding patterns suggesting underlying pathology.`,
      prevalence: `Common reason for visit`,
      features: `Heavy menstrual bleeding, intermenstrual bleeding, prolonged irregular cycles, postmenopausal bleeding`,
      next: `In-person evaluation; possible ultrasound; labs (TSH, prolactin, CBC)`
    }
  ],
  redFlags: [
    `<strong>Migraine with aura</strong> — combined estrogen contraindicated (CDC MEC Cat 4); use progestin-only`,
    `<strong>Smoker age ≥35</strong> — combined estrogen contraindicated; use progestin-only`,
    `<strong>History of DVT, PE, or stroke</strong> — combined estrogen contraindicated`,
    `<strong>Uncontrolled hypertension (>160/100)</strong> — combined estrogen contraindicated`,
    `<strong>Active liver disease</strong> — review with provider`,
    `<strong>Breast cancer (current)</strong> — hormonal contraception contraindicated`,
    `<strong>Postmenopausal bleeding or new heavy abnormal bleeding</strong> — needs evaluation`,
    `<strong>Pregnancy possibility</strong> — confirm before prescribing`
  ],
  eligibility: [
    `Women 18+ in our 41 states`,
    `Healthy, no MEC Category 4 contraindications`,
    `Want to start, switch, or refill birth control`,
    `BP <140/90 (or controlled with medication)`,
    `Refilling current method on a regular cycle`,
    `Want acne, cycle regulation, or PMDD benefits`,
    `Postpartum >6 weeks (CHC) or any time (POP/LARC)`,
    `Need same-day prescription — ran out, traveling, etc.`
  ],
  notEligibility: [
    `Active migraine with aura (combined hormonal — but progestin-only OK)`,
    `Smoker age ≥35 (combined hormonal — but progestin-only OK)`,
    `History of DVT/PE/stroke (combined hormonal — but progestin-only OK)`,
    `Uncontrolled hypertension (>160/100) — needs in-person`,
    `Active breast cancer — in-person`,
    `Severe liver disease — in-person`,
    `Postmenopausal or new abnormal bleeding — needs in-person workup`
  ],
  howTelehealthHelps: [
    `<p>You complete a focused intake covering medical history, blood pressure, smoking, migraines (with or without aura), prior contraception experience, breastfeeding, and any contraindications.</p>`,
    `<p>Dr. Bhavsar applies CDC US MEC. Most patients are MEC Category 1–2 (safe to prescribe combined hormonal). Higher categories prompt progestin-only methods or in-person referral.</p>`,
    `<p>You receive a same-day prescription: typically generic levonorgestrel/ethinyl estradiol (e.g., Aviane, Lessina) or norethindrone for progestin-only. Patch and ring prescriptions also available.</p>`,
    `<p>Counseling on side effects (breakthrough bleeding first 3 months, breast tenderness, mood changes), how to take consistently, what to do with missed pills, and when to follow up.</p>`,
    `<p>Annual reassessment scheduled to recheck blood pressure, migraine status, and life changes that might affect MEC category.</p>`,
    `<p>If LARC desired, we can prescribe interim method and refer for IUD/implant placement at a local clinic.</p>`,
    `<p>Generic pills are often $0–$10/month with insurance; (see medication table).`
  ],
  treatmentOptions: [
    {
      category: `Combined oral contraceptive (pill)`,
      detail: `Generic levonorgestrel/ethinyl estradiol (Aviane, Lessina, Sronyx) or norethindrone-containing pills — $0 with most insurance.`
    },
    {
      category: `Contraceptive patch`,
      detail: `Norelgestromin/EE (Xulane) — apply once weekly × 3 weeks, off 1 week. Avoid with BMI >30 (less effective).`
    },
    {
      category: `Contraceptive vaginal ring`,
      detail: `Etonogestrel/EE (NuvaRing) or segesterone/EE (Annovera) — insert, leave 3 weeks, remove 1 week. Annovera reusable for 13 cycles.`
    },
    {
      category: `Progestin-only pill`,
      detail: `Norethindrone 0.35 mg daily (3-hour window), or drospirenone 4 mg daily (24-hour window — more forgiving) when estrogen contraindicated.`
    },
    {
      category: `LARC referral`,
      detail: `Hormonal IUD (Mirena, Kyleena, Liletta, Skyla), copper IUD (Paragard), or implant (Nexplanon) — refer for placement; we prescribe interim.`
    },
    {
      category: `Depot medroxyprogesterone`,
      detail: `Depo-Provera 150 mg IM every 3 months — refer to local clinic for injection.`
    },
    {
      category: `Emergency contraception`,
      detail: `Levonorgestrel 1.5 mg (Plan B One-Step, OTC) within 72 hours, or ulipristal 30 mg (Ella, Rx) within 120 hours — copper IUD most effective.`
    }
  ],
  medications: [
    {
      generic: `Levonorgestrel / Ethinyl estradiol`,
      brand: `Aviane, Lessina`,
      dosageForm: `Oral tablet (28-day pack)`,
      drugClass: `Combined oral contraceptive`,
      dose: `1 tablet daily, same time`,
      price: `$15–$68`,
      priceSourceUrl: `https://www.goodrx.com/aviane`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Breakthrough bleeding, breast tenderness, nausea (early); minor VTE risk increase`
    },
    {
      generic: `Norethindrone`,
      brand: `Camila, Errin`,
      dosageForm: `Oral tablet`,
      drugClass: `Progestin-only pill`,
      dose: `0.35 mg daily, same time (3-hour window)`,
      price: `$4–$28`,
      priceSourceUrl: `https://www.goodrx.com/norethindrone`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Irregular bleeding, headache; safe with breastfeeding`
    },
    {
      generic: `Norelgestromin / Ethinyl estradiol`,
      brand: `Xulane`,
      dosageForm: `Transdermal patch`,
      drugClass: `Combined hormonal contraception`,
      dose: `1 patch weekly × 3 weeks, off 1 week`,
      price: `$8–$28`,
      priceSourceUrl: `https://www.goodrx.com/camila`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Skin irritation, breast tenderness; reduced efficacy if BMI >30`
    },
    {
      generic: `Etonogestrel / Ethinyl estradiol`,
      brand: `NuvaRing`,
      dosageForm: `Vaginal ring`,
      drugClass: `Combined hormonal contraception`,
      dose: `1 ring inserted, left for 21 days, removed for 7`,
      price: `$45–$199`,
      priceSourceUrl: `https://www.goodrx.com/nuvaring`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Vaginal discharge, irritation; same general profile as pills`
    },
    {
      generic: `Drospirenone`,
      brand: `Slynd`,
      dosageForm: `Oral tablet`,
      drugClass: `Progestin-only pill`,
      dose: `4 mg daily; 24-hour missed-dose window`,
      price: `$196–$233`,
      priceSourceUrl: `https://www.goodrx.com/slynd`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Acne, breast pain; safer for breastfeeding women, smokers >35`
    }
  ],
  recovery: [
    {
      period: `Week 1`,
      detail: `Begin pill on day 1 of cycle (or with backup method 7 days). Some breakthrough bleeding is normal.`
    },
    {
      period: `Month 1`,
      detail: `Most side effects (breakthrough bleeding, breast tenderness, nausea) peak early and resolve.`
    },
    {
      period: `Month 3`,
      detail: `Full effects established; cycles regulate. Reassess if bothersome side effects persist.`
    },
    {
      period: `Annual`,
      detail: `Reassess BP, migraine, smoking, weight; recheck MEC category. Switch method if needed.`
    },
    {
      period: `Discontinuation`,
      detail: `Fertility returns within 1–3 months for most; can take longer for depot injection (up to 9 months).`
    }
  ],
  homeCare: [
    `Take pill at the same time every day (set a phone alarm)`,
    `Use backup method (condoms) for first 7 days when starting CHC`,
    `If you miss a pill, follow specific instructions (provided per pill type)`,
    `Keep a backup pack of pills in case of refill delay`,
    `Track BP at home if you have one (target <130/80)`,
    `Don't smoke if on combined hormonal — major VTE risk`,
    `Watch for warning signs: severe headache, chest pain, leg pain/swelling, vision change`,
    `Note any new migraine aura — switch to progestin-only`,
    `Use condoms for STI protection (pills don't protect against STIs)`,
    `Don't combine with St. John's wort (reduces efficacy)`
  ],
  faqs: [
    {
      question: `Can a telehealth doctor prescribe birth control?`,
      answer: `Yes — comprehensive ACOG and CDC guidance supports telehealth-based contraceptive prescribing. Dr. Bhavsar uses CDC US MEC to screen for contraindications and prescribes the appropriate method. Same-day prescription typical.`
    },
    {
      question: `Do I need a pelvic exam to get the pill?`,
      answer: `No. ACOG, CDC, and AAFP all explicitly state that pelvic exams are NOT required for prescribing oral contraceptives or other hormonal methods. Blood pressure check and history are sufficient.`
    },
    {
      question: `Which pill is best?`,
      answer: `For most women, generic levonorgestrel/ethinyl estradiol (e.g., Aviane, Lessina) is first-line — well-studied, affordable, effective. We may suggest different progestins for specific concerns (e.g., drospirenone-containing pills for acne/PMS).`
    },
    {
      question: `Is the patch or ring better than the pill?`,
      answer: `All three are highly effective when used correctly. The patch (weekly) and ring (3 weeks in / 1 out) are options for women who prefer not to take a daily pill. Patch is less effective if BMI >30; ring may have fewer breakthrough bleeding episodes.`
    },
    {
      question: `Can I get birth control if I'm a smoker?`,
      answer: `Yes, but: smokers age <35 can use combined hormonal contraception. Smokers ≥35 should NOT use combined hormonal (CDC MEC Cat 4 — VTE/stroke risk). Progestin-only methods (mini-pill, hormonal IUD, implant) are safe for any smoker.`
    },
    {
      question: `What if I have migraines?`,
      answer: `Migraines WITHOUT aura: combined hormonal is generally OK with monitoring. Migraines WITH aura: combined hormonal is contraindicated (CDC MEC Cat 4 — stroke risk). Progestin-only methods are safe and effective alternatives.`
    },
    {
      question: `Will birth control help my acne?`,
      answer: `Yes — combined hormonal contraceptives (especially those with drospirenone or norgestimate) significantly reduce acne. Multiple combined pills are FDA-approved for moderate acne. Improvement typically visible in 3 months.`
    },
    {
      question: `Will I gain weight on the pill?`,
      answer: `Most studies show NO significant weight gain with combined oral contraceptives. Some progestin-only methods (especially Depo-Provera injection) can cause weight gain in some women. We'll discuss if this is a concern.`
    },
    {
      question: `Can I skip my period on birth control?`,
      answer: `Yes — extended-cycle pills (Seasonique, Loseasonique) are designed for periods every 3 months. Standard pills can also be used continuously by skipping the placebo week. Safe and well-studied.`
    },
    {
      question: `How quickly does birth control start working?`,
      answer: `Combined pills started on day 1 of period: immediately effective. Started any other day: use backup method for 7 days. Progestin-only pills: backup for 48 hours. Same applies to patch and ring.`
    },
    {
      question: `What if I miss a pill?`,
      answer: `For combined pills: take it as soon as remembered. If >24 hours late, take immediately and continue normal schedule + backup for 7 days. Progestin-only: 3-hour window for older POPs; 24-hour window for drospirenone (Slynd). Detailed instructions provided in your pill pack.`
    },
    {
      question: `Can I get an IUD through telehealth?`,
      answer: `We can do the consultation, MEC screening, and prescription, then refer you to a local clinic for placement. We also bridge with another method until placement. Insertion itself requires in-person visit.`
    },
    {
      question: `What about emergency contraception?`,
      answer: `Levonorgestrel (Plan B One-Step) is OTC and effective up to 72 hours after unprotected sex. Ulipristal (Ella) is prescription-only and effective up to 120 hours — significantly more effective. Copper IUD is the most effective (within 5 days). We can prescribe Ella same day.`
    },
    {
      question: `How does the $49 visit compare to other birth control services?`,
      answer: `Many telehealth-only contraception services charge $20–$60/visit but tie you to their pharmacy. Our $49 visit goes through a real GA-licensed physician, you fill the prescription at YOUR pharmacy, and generic pills are often $0 with insurance or (see medication table).`
    }
  ],
  relatedSymptoms: [],
  references: [
    {
      label: `ACOG — Combined Hormonal Contraception`,
      url: `https://www.acog.org/womens-health/faqs/combined-hormonal-birth-control-pill-patch-and-ring`
    },
    {
      label: `CDC — U.S. Medical Eligibility Criteria`,
      url: `https://www.cdc.gov/contraception/hcp/usmec/index.html`
    },
    {
      label: `AAFP — Contraception`,
      url: `https://www.aafp.org/pubs/afp/issues/2017/1015/p507.html`
    },
    {
      label: `Mayo Clinic — Birth Control Pill`,
      url: `https://www.mayoclinic.org/tests-procedures/combination-birth-control-pills/about/pac-20385282`
    },
    {
      label: `CDC — Selected Practice Recommendations for Contraceptive Use`,
      url: `https://www.cdc.gov/contraception/hcp/usspr/index.html`
    },
    {
      label: `GoodRx — Birth Control Pricing`,
      url: `https://www.goodrx.com/`
    }
  ],
  riskFactors: [
    `Age (>35 with smoking → combined hormonal risk)`,
    `Smoking`,
    `Migraine with aura`,
    `Hypertension`,
    `Personal/family history of DVT/PE`,
    `Diabetes with vascular disease`,
    `Obesity (BMI >35)`
  ],
  typicalTests: [
    `Blood pressure check`,
    `Pregnancy test (if indicated)`,
    `Lipid panel (baseline if cardiovascular risk)`,
    `No routine pelvic exam needed`,
    `No routine STI testing needed (offered separately)`
  ]
};

SYMPTOM_PAGES["skin-rash"] = {
  slug: `skin-rash`,
  pid: `sym-skin-rash`,
  query: `itchy red rash treatment online doctor`,
  h1: `Itchy or Red Rash — Same-Day Telehealth Treatment`,
  metaTitle: `Skin Rash Treatment Online — Same-Day Rx | TeleDirectMD`,
  metaDescription: `Itchy red rash from contact, eczema, allergies, or fungal infection? $49 video visit, photo evaluation, prescription same day in 41 states.`,
  breadcrumb: `Skin Rash`,
  answerLead: `Itchy or red rash — what's likely going on:`,
  answerBody: `<p>Most rashes fall into a few common categories: <strong>contact dermatitis</strong> (allergic or irritant), <strong>eczema</strong> (atopic dermatitis), <strong>fungal infection</strong> (tinea), <strong>drug reaction</strong>, or <strong>viral exanthem</strong>. Per AAD and AAFP, telehealth with photo upload effectively triages and treats most uncomplicated rashes. We screen for serious conditions (Stevens-Johnson, anaphylaxis, severe drug reactions, cellulitis) requiring in-person care.</p>`,
  symptomDef: {
    altNames: [
      `Dermatitis`,
      `Skin eruption`,
      `Itchy rash`,
      `Pruritic rash`
    ],
    anatomy: `Skin`,
    treatment: `Identify pattern; topical steroid (hydrocortisone, triamcinolone) for inflammatory; antifungal for tinea; oral antihistamine for itch`,
    conditionDisplayName: `Dermatitis`
  },
  whatThisMeans: [
    `<p><strong>Contact dermatitis is the most common rash we treat.</strong> Allergic (poison ivy, nickel, fragrance) or irritant (soap, chemicals). Linear streaks or geometric shape often hint at the trigger.</p>`,
    `<p><strong>Eczema (atopic dermatitis)</strong> tends to flare in flexural areas (elbows, knees, neck), is itchy, and has a chronic relapsing pattern. Often associated with allergies and asthma.</p>`,
    `<p><strong>Fungal infections (tinea)</strong> appear as scaly red patches with central clearing — "ringworm" pattern. Commonly affect groin (jock itch), feet (athlete's foot), trunk, or scalp.</p>`,
    `<p><strong>Red flag rashes</strong> need urgent care: rash with fever and mucosal involvement (Stevens-Johnson), expanding red painful area with fever (cellulitis), petechiae or purpura that don't blanch, or any rash with anaphylaxis signs.</p>`
  ],
  differentials: [
    {
      name: `Allergic contact dermatitis`,
      description: `Type IV hypersensitivity to allergens (nickel, poison ivy, fragrance, etc.).`,
      prevalence: `Very common`,
      features: `Linear or geometric pattern, intense itch, vesicles in acute phase, identifiable trigger`,
      next: `Identify and stop trigger; topical steroid (triamcinolone 0.1%); oral antihistamine`
    },
    {
      name: `Atopic dermatitis (eczema)`,
      description: `Chronic relapsing inflammatory skin disease.`,
      prevalence: `~10–15% of adults, ~15–20% of children`,
      features: `Flexural distribution (elbows, knees), dry itchy skin, chronic relapsing, atopic history`,
      next: `Daily emollient + topical steroid for flares; trigger avoidance`
    },
    {
      name: `Tinea (fungal infection)`,
      description: `Dermatophyte infection of skin (corporis, cruris, pedis).`,
      prevalence: `Common`,
      features: `Annular scaly red patches with central clearing, may have advancing border`,
      next: `Topical antifungal (clotrimazole, terbinafine) × 2–4 weeks; oral if extensive`
    },
    {
      name: `Urticaria (hives)`,
      description: `IgE-mediated or non-allergic mast cell activation.`,
      prevalence: `~20% of population at some point`,
      features: `Wheals (raised pink-white plaques) lasting <24 hours each, intense itch, may migrate`,
      next: `Cetirizine 10–20 mg daily; identify trigger; epinephrine if angioedema/anaphylaxis`
    },
    {
      name: `Drug reaction`,
      description: `Cutaneous adverse reaction to medication.`,
      prevalence: `~2–5% of new medication starts`,
      features: `Symmetric morbilliform rash 7–14 days after starting drug, often itchy`,
      next: `Stop offending drug; supportive; topical steroid; in-person if mucosal/systemic`
    }
  ],
  redFlags: [
    `<strong>Rash with fever, mucosal lesions (mouth, eyes, genitals)</strong> — possible Stevens-Johnson syndrome; ER`,
    `<strong>Expanding painful red area with fever</strong> — cellulitis or necrotizing infection; in-person urgent`,
    `<strong>Petechiae/purpura that don't blanch</strong> — possible meningococcemia, vasculitis; ER`,
    `<strong>Rash with breathing difficulty or facial/throat swelling</strong> — anaphylaxis; ER`,
    `<strong>Blisters covering large area</strong> — burn, severe drug reaction; ER`,
    `<strong>Painful purple/black necrotic skin</strong> — necrotizing fasciitis; ER`,
    `<strong>Whole-body rash with new medication 1–2 weeks ago</strong> — possible severe drug reaction (DRESS, SJS)`,
    `<strong>Rash in pregnancy with fever</strong> — needs urgent evaluation`
  ],
  eligibility: [
    `Adults and children in our 41 states`,
    `Localized rash with photo upload available`,
    `No fever, no mucosal involvement, no systemic illness`,
    `Rash <2 weeks duration without spreading rapidly`,
    `Want guidance on OTC vs. prescription options`,
    `Recurrent eczema or contact dermatitis flare`,
    `Suspected fungal infection`,
    `Allergic reaction without anaphylaxis signs`
  ],
  notEligibility: [
    `Anaphylaxis (breathing difficulty, throat swelling) — ER NOW`,
    `Stevens-Johnson signs (mucosal lesions) — ER`,
    `Cellulitis with fever or systemic signs — in-person`,
    `Petechiae/purpura — in-person`,
    `Severe blistering covering large body area — in-person`,
    `Whole-body rash 1–2 weeks after new medication — in-person evaluation`,
    `Rash in immunocompromised patient with concerns — in-person`
  ],
  howTelehealthHelps: [
    `<p>You upload 2–4 well-lit photos (whole rash + close-up) before your visit. Pattern, distribution, and morphology are critical for diagnosis.</p>`,
    `<p>Dr. Bhavsar reviews photos and history (onset, evolution, exposures, medications, fever, itch, pain) and screens for red flag conditions.</p>`,
    `<p>If contact dermatitis pattern: identify trigger, prescribe triamcinolone 0.1% cream BID + oral antihistamine for itch; sometimes short oral prednisone for severe poison-ivy.</p>`,
    `<p>If eczema flare: prescribe medium-potency topical steroid for flare + maintenance moisturizer plan + trigger reduction.</p>`,
    `<p>If tinea: topical antifungal (terbinafine, clotrimazole) for 2–4 weeks; oral terbinafine for extensive or scalp/nail involvement.</p>`,
    `<p>If urticaria: cetirizine 10–20 mg daily (can go up to 40 mg/day under supervision) ± famotidine; identify trigger.</p>`,
    `<p>Photo-based follow-up at 1 week to assess response; in-person referral if not improving.`
  ],
  treatmentOptions: [
    {
      category: `Low-potency topical steroid`,
      detail: `Hydrocortisone 1–2.5% twice daily for face, groin, mild dermatitis.`
    },
    {
      category: `Medium-potency topical steroid`,
      detail: `Triamcinolone 0.1% twice daily × 1–2 weeks for body eczema, contact dermatitis.`
    },
    {
      category: `High-potency topical steroid`,
      detail: `Clobetasol 0.05% (short courses only) for severe localized dermatitis on body (not face/groin).`
    },
    {
      category: `Topical antifungal`,
      detail: `Clotrimazole, terbinafine, or ketoconazole cream BID × 2–4 weeks for tinea.`
    },
    {
      category: `Oral antihistamine`,
      detail: `Cetirizine 10 mg or fexofenadine 180 mg daily for urticaria/itch; can increase to 4× standard for chronic urticaria.`
    },
    {
      category: `Oral steroid (severe)`,
      detail: `Prednisone 40 mg daily × 5 days for severe poison-ivy or extensive contact dermatitis.`
    },
    {
      category: `Daily emollient (eczema)`,
      detail: `Plain petrolatum, CeraVe, or Cetaphil cream applied 2–3× daily — foundation of eczema management; reduces flares.`
    }
  ],
  medications: [
    {
      generic: `Triamcinolone 0.1%`,
      brand: `Kenalog`,
      dosageForm: `Topical cream/ointment`,
      drugClass: `Medium-potency topical corticosteroid`,
      dose: `Apply BID × 1–2 weeks`,
      price: `$5–$25`,
      priceSourceUrl: `https://www.goodrx.com/kenalog`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Skin thinning with prolonged use; avoid face/groin`
    },
    {
      generic: `Hydrocortisone 1–2.5%`,
      brand: `Cortizone`,
      dosageForm: `Topical cream`,
      drugClass: `Low-potency topical corticosteroid`,
      dose: `Apply BID × 1–2 weeks`,
      price: `$4–$11`,
      priceSourceUrl: `https://www.goodrx.com/hydrocortisone`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Minimal at low potency; suitable for face/groin`
    },
    {
      generic: `Clobetasol 0.05%`,
      brand: `Temovate`,
      dosageForm: `Topical cream/ointment`,
      drugClass: `Super-high-potency topical corticosteroid`,
      dose: `Apply BID × max 2 weeks`,
      price: `$11–$251`,
      priceSourceUrl: `https://www.goodrx.com/clobetasol`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Skin thinning; use only on body, short courses`
    },
    {
      generic: `Terbinafine`,
      brand: `Lamisil`,
      dosageForm: `Topical cream / oral`,
      drugClass: `Antifungal`,
      dose: `Apply 1% cream BID × 2–4 weeks; oral 250 mg daily for 2–6 weeks for severe`,
      price: `$6–$64`,
      priceSourceUrl: `https://www.goodrx.com/terbinafine`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Local irritation (cream); LFT elevation (oral)`
    },
    {
      generic: `Cetirizine`,
      brand: `Zyrtec`,
      dosageForm: `Oral tablet`,
      drugClass: `Second-generation antihistamine`,
      dose: `10 mg once daily; up to 40 mg/day for chronic urticaria`,
      price: `$2–$10`,
      priceSourceUrl: `https://www.goodrx.com/cetirizine`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Mild drowsiness; dry mouth`
    }
  ],
  recovery: [
    {
      period: `Day 1–3`,
      detail: `Itch begins to decrease with treatment. Avoid the trigger (if known).`
    },
    {
      period: `Week 1`,
      detail: `Most contact dermatitis 50%+ resolved with topical steroid + trigger avoidance.`
    },
    {
      period: `Week 2`,
      detail: `Tinea typically clearing with topical antifungal; complete the full 4-week course to prevent relapse.`
    },
    {
      period: `Week 4`,
      detail: `Eczema flare resolved with consistent steroid + maintenance moisturizer.`
    },
    {
      period: `Long-term`,
      detail: `Eczema is chronic — daily moisturizer + intermittent steroid for flares is the foundation. Identify and avoid triggers.`
    }
  ],
  homeCare: [
    `Identify and avoid the trigger (food, soap, plant, jewelry, fabric)`,
    `Cool compresses 15 min × 3 daily for itch and inflammation`,
    `Lukewarm (not hot) showers and gentle fragrance-free cleanser`,
    `Pat dry; apply moisturizer within 3 minutes of bath`,
    `Apply prescribed topical medication first, then moisturizer on top`,
    `Use thick moisturizers (CeraVe, Cetaphil cream, Vanicream)`,
    `Wear loose 100% cotton clothing while symptomatic`,
    `Avoid scratching — keep nails short, consider cotton gloves at night`,
    `Oatmeal baths (Aveeno colloidal) for widespread itch`,
    `Take antihistamines before bed to reduce night-time scratching`
  ],
  faqs: [
    {
      question: `Can a telehealth doctor prescribe medication for a rash?`,
      answer: `Yes — for most uncomplicated rashes. Dr. Bhavsar reviews your photos and history to identify the pattern and prescribe appropriate topical or oral medication. Same-day prescription typical.`
    },
    {
      question: `What kind of photos should I upload?`,
      answer: `At least 2: one wide shot showing the distribution (where on body), one close-up showing morphology (texture, color, vesicles, scale). Use natural light, avoid flash glare. Include a measuring reference (coin, ruler) if helpful.`
    },
    {
      question: `Is hydrocortisone enough or do I need a prescription steroid?`,
      answer: `OTC hydrocortisone 1% works for mild dermatitis, especially on the face. Body areas with significant inflammation usually need prescription-strength triamcinolone 0.1%. We'll match potency to severity and location.`
    },
    {
      question: `How do I know if it's contact dermatitis vs. eczema?`,
      answer: `Contact dermatitis: clear trigger, often linear or geometric, typically resolves with trigger avoidance. Eczema: chronic relapsing, flexural areas, history of allergies/asthma, often family history. We use photos and history to distinguish.`
    },
    {
      question: `What if my rash is from a medication?`,
      answer: `Stop the suspected medication if possible (after talking with us if it's prescribed). Mild morbilliform drug rashes resolve with stopping the drug + topical steroid + antihistamine. SEVERE features (mucosal involvement, blistering, fever) need ER.`
    },
    {
      question: `Is it ringworm or eczema?`,
      answer: `Ringworm (tinea): annular (ring-shaped) with central clearing and active scaly border. Eczema: poorly defined, on flexural areas, no central clearing. KOH prep can confirm in person if uncertain — but usually photo + history is enough.`
    },
    {
      question: `Why do I keep getting eczema flares?`,
      answer: `Common triggers: dry skin (especially winter), hot showers, fragrances, harsh soaps, wool/synthetic fabrics, stress, sweat, food allergies (in some). Daily moisturizer is the foundation of prevention.`
    },
    {
      question: `Do I need a biopsy?`,
      answer: `Not for most rashes. Biopsies are reserved for atypical, persistent, or concerning lesions, suspected drug reactions with systemic features, suspected vasculitis, or possible skin cancer. We refer to dermatology if biopsy is appropriate.`
    },
    {
      question: `How long until my rash gets better?`,
      answer: `Contact dermatitis: 7–14 days with treatment + trigger avoidance. Tinea: 2–4 weeks of topical antifungal. Eczema flare: 5–14 days with topical steroid; chronic management is daily moisturizer. Urticaria: minutes to days.`
    },
    {
      question: `Can I use my partner's prescription cream?`,
      answer: `Not recommended — different rashes need different treatments. Steroid creams worsen fungal infections; antifungals don't help eczema. Get an accurate diagnosis first.`
    },
    {
      question: `What if my rash is spreading?`,
      answer: `If spreading rapidly with fever, blisters, or systemic symptoms, that's a red flag — go to in-person care. Slow spread of contact dermatitis from oils tracking around (poison-ivy) is normal but the rash itself doesn't transfer person-to-person.`
    },
    {
      question: `Is the rash contagious?`,
      answer: `Most rashes (contact dermatitis, eczema, drug rashes) are NOT contagious. Tinea (ringworm), scabies, impetigo, and some viral exanthems ARE contagious. We identify which type your rash is.`
    },
    {
      question: `What if I'm pregnant and have a rash?`,
      answer: `Most topical steroids (low- to medium-potency) are safe in pregnancy. Oral antihistamines (cetirizine, loratadine) are well-studied. Rash WITH fever or systemic symptoms in pregnancy needs urgent in-person evaluation.`
    },
    {
      question: `How does the $49 visit save vs. dermatology?`,
      answer: `Dermatology consults often $300–$500 with 2–6 month waits. Many rashes are easily diagnosed and treated at primary care level — that's what we do. We refer to dermatology for atypical, recurrent, or concerning lesions.`
    }
  ],
  relatedSymptoms: [
    `allergy-symptoms`,
    `acne-breakout`
  ],
  references: [
    {
      label: `AAD — Contact Dermatitis`,
      url: `https://www.aad.org/public/diseases/eczema/types/contact-dermatitis`
    },
    {
      label: `AAFP — Contact Dermatitis`,
      url: `https://www.aafp.org/pubs/afp/issues/2010/0801/p249.html`
    },
    {
      label: `Mayo Clinic — Contact Dermatitis`,
      url: `https://www.mayoclinic.org/diseases-conditions/contact-dermatitis/symptoms-causes/syc-20352742`
    },
    {
      label: `NIH MedlinePlus — Rashes`,
      url: `https://medlineplus.gov/rashes.html`
    },
    {
      label: `AAD — Atopic Dermatitis Clinical Guideline`,
      url: `https://www.aad.org/member/clinical-quality/guidelines/atopic-dermatitis`
    },
    {
      label: `GoodRx — Triamcinolone Pricing`,
      url: `https://www.goodrx.com/triamcinolone`
    }
  ],
  riskFactors: [
    `Atopic history (allergies, asthma, eczema)`,
    `Frequent contact with allergens or irritants`,
    `Dry skin, frequent hand-washing`,
    `Damp environments (fungal)`,
    `New medications`,
    `Family history`
  ],
  typicalTests: [
    `Clinical exam with photos (telehealth)`,
    `KOH prep (fungal — in-person)`,
    `Patch testing (recurrent contact dermatitis — dermatology)`,
    `Biopsy (atypical or concerning — dermatology)`
  ]
};

SYMPTOM_PAGES["asthma"] = {
  slug: `asthma`,
  pid: `sym-asthma`,
  query: `asthma inhaler refill online prescription`,
  h1: `Asthma — Inhaler Refill & Same-Day Online Prescription`,
  metaTitle: `Asthma Inhaler Refill Online — Same-Day Rx | TeleDirectMD`,
  metaDescription: `Wheezing, chest tightness, or out of asthma inhaler? Same-day refill of albuterol, ICS, or ICS-LABA via $49 telehealth visit in 41 states.`,
  breadcrumb: `Asthma`,
  answerLead: `Asthma symptoms or out of inhaler — what to do:`,
  answerBody: `<p>Asthma affects ~25 million Americans. Per GINA and AAAAI guidelines, primary-care–level prescribing of albuterol, inhaled corticosteroids (ICS), and ICS-LABA combinations is appropriate via telehealth for stable patients. We can refill rescue and controller inhalers, manage mild flares with short oral steroid bursts, and identify when in-person evaluation is needed.</p>`,
  symptomDef: {
    altNames: [
      `Bronchial asthma`,
      `Reactive airway disease`,
      `Wheeze`
    ],
    anatomy: `Lower airways (bronchi)`,
    treatment: `Short-acting bronchodilator (albuterol) for rescue; ICS or ICS-LABA daily controller; short prednisone for moderate flares`,
    conditionDisplayName: `Asthma`
  },
  whatThisMeans: [
    `<p><strong>Asthma is reversible airway inflammation.</strong> Symptoms include wheeze, chest tightness, cough (especially at night/early morning), and shortness of breath. Triggers include URIs, allergens, exercise, cold air, smoke, and stress.</p>`,
    `<p><strong>Modern asthma care emphasizes daily controller therapy</strong> (inhaled corticosteroid). The old albuterol-only approach is outdated — even mild asthma benefits from low-dose ICS, used either daily or as-needed combined with rescue.</p>`,
    `<p><strong>SMART therapy</strong> (Single Maintenance and Reliever Therapy) uses ICS-LABA (e.g., budesonide-formoterol/Symbicort) as both controller AND rescue — current GINA preferred approach for moderate persistent asthma.</p>`,
    `<p><strong>Severe flare red flags</strong>: SpO2 <92%, can't speak in full sentences, peak flow <50% personal best, cyanosis, or no improvement after multiple albuterol treatments. These need ER, not telehealth.</p>`
  ],
  differentials: [
    {
      name: `Asthma exacerbation (mild-moderate)`,
      description: `Reversible bronchoconstriction triggered by URI, allergens, exercise.`,
      prevalence: `~50% of asthmatics have exacerbation yearly`,
      features: `Wheeze, chest tightness, cough, response to albuterol`,
      next: `Albuterol every 4–6 hours; consider 5-day prednisone burst if moderate`
    },
    {
      name: `Stable asthma needing refill`,
      description: `Controlled asthma needing maintenance medication continuation.`,
      prevalence: `Common reason for visit`,
      features: `Symptoms <2×/week, no nocturnal symptoms, normal activity`,
      next: `Refill ICS or ICS-LABA; verify technique; reassess control with ACT score`
    },
    {
      name: `COPD`,
      description: `Chronic obstructive pulmonary disease (smokers, age >40).`,
      prevalence: `~6% of adults`,
      features: `Smoking history, chronic productive cough, less reversible airflow limitation`,
      next: `Spirometry; LAMA-LABA combinations; smoking cessation`
    },
    {
      name: `Vocal cord dysfunction`,
      description: `Paradoxical vocal cord movement causing stridor.`,
      prevalence: `Often misdiagnosed as asthma`,
      features: `Inspiratory wheeze (more than expiratory), poor response to albuterol, episodic`,
      next: `ENT/speech therapy referral`
    },
    {
      name: `Cardiac asthma (heart failure)`,
      description: `Pulmonary congestion from heart failure mimicking asthma.`,
      prevalence: `In older adults with CV disease`,
      features: `Orthopnea, paroxysmal nocturnal dyspnea, leg edema, JVD`,
      next: `In-person evaluation; CXR, BNP, echo`
    }
  ],
  redFlags: [
    `<strong>Can't speak in full sentences from breathlessness</strong> — severe attack; ER`,
    `<strong>SpO2 <92%</strong> on home pulse oximeter — severe; ER`,
    `<strong>Peak flow <50% personal best</strong> — severe attack; ER`,
    `<strong>Cyanosis (blue lips/fingertips)</strong> — ER NOW`,
    `<strong>No improvement after 2–3 albuterol treatments</strong> — ER`,
    `<strong>Confusion or drowsiness</strong> — impending respiratory failure; ER`,
    `<strong>Silent chest on auscultation</strong> — severe airway obstruction`,
    `<strong>Recent prior intubation for asthma</strong> — high risk of severe attack`
  ],
  eligibility: [
    `Adults and adolescents with established asthma in our 41 states`,
    `Stable asthma needing refill of rescue or controller`,
    `Mild flare without red flag features`,
    `Want to optimize asthma control`,
    `Recent diagnosis confirmed elsewhere needing ongoing care`,
    `Need step-up or step-down of therapy`,
    `Pre-trip planning (high-altitude, allergic environment)`,
    `Need school/work documentation`
  ],
  notEligibility: [
    `Severe attack: can't speak full sentences, SpO2 <92% — ER`,
    `First-ever wheeze without prior diagnosis — needs in-person`,
    `Children <5 with first wheeze — pediatric in-person`,
    `Recent intubation for asthma — specialist follow-up`,
    `Suspected COPD without spirometry — needs in-person`,
    `Severe nocturnal symptoms or frequent ER visits — needs specialist`
  ],
  howTelehealthHelps: [
    `<p>You complete an Asthma Control Test (ACT) intake covering symptom frequency, nighttime awakenings, rescue use, activity limitation, and overall control.</p>`,
    `<p>Dr. Bhavsar reviews your current regimen, technique, and adherence. Inhaler technique is reviewed on video — major reason for poor control.</p>`,
    `<p>Stable patients: refill rescue (albuterol) and controller (ICS or ICS-LABA). 90-day prescriptions where insurance allows reduce cost.</p>`,
    `<p>Mild flare: increase ICS dose temporarily, use albuterol every 4 hours, and a 5-day prednisone burst if moderate-severe symptoms.</p>`,
    `<p>Step-up therapy if poorly controlled: add LABA (Symbicort, Advair, Breo); add montelukast for allergic component; SMART regimen for moderate persistent.</p>`,
    `<p>Trigger plan: allergic component → daily intranasal steroid + cetirizine; smoking cessation; exercise pre-treatment.</p>`,
    `<p>Action plan provided in writing: green/yellow/red zones with specific instructions; peak flow targets if you have a meter.`
  ],
  treatmentOptions: [
    {
      category: `Rescue inhaler (SABA)`,
      detail: `Albuterol HFA 2 puffs every 4–6 hours as needed; ProAir or Ventolin generic. Should not be needed >2 days/week if controlled.`
    },
    {
      category: `Inhaled corticosteroid (ICS) — controller`,
      detail: `Fluticasone (Flovent), budesonide (Pulmicort) — 1–2 puffs twice daily for mild persistent asthma.`
    },
    {
      category: `ICS-LABA combination`,
      detail: `Budesonide-formoterol (Symbicort), fluticasone-salmeterol (Advair), fluticasone-vilanterol (Breo) — for moderate persistent or SMART therapy.`
    },
    {
      category: `SMART regimen`,
      detail: `Budesonide-formoterol used as both daily controller AND rescue — preferred GINA approach for many adults with moderate asthma.`
    },
    {
      category: `Leukotriene modifier`,
      detail: `Montelukast 10 mg daily — adjunctive for allergic asthma; less effective than ICS alone.`
    },
    {
      category: `Short oral steroid burst`,
      detail: `Prednisone 40 mg daily × 5 days for moderate exacerbations.`
    },
    {
      category: `Trigger management`,
      detail: `Allergen reduction (dust mites, pets), smoking cessation, intranasal steroid for rhinitis, vaccinations (flu, COVID, pneumococcal).`
    }
  ],
  medications: [
    {
      generic: `Albuterol HFA`,
      brand: `ProAir, Ventolin`,
      dosageForm: `Metered-dose inhaler`,
      drugClass: `Short-acting beta-2 agonist (SABA)`,
      dose: `2 puffs every 4–6 hours as needed`,
      price: `$19–$81`,
      priceSourceUrl: `https://www.goodrx.com/albuterol`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Tremor, tachycardia, jitteriness`
    },
    {
      generic: `Fluticasone HFA`,
      brand: `Flovent`,
      dosageForm: `Metered-dose inhaler`,
      drugClass: `Inhaled corticosteroid`,
      dose: `88–220 mcg twice daily`,
      price: `$136–$297`,
      priceSourceUrl: `https://www.goodrx.com/fluticasone-propionate-hfa`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Oral thrush (rinse mouth after); hoarse voice`
    },
    {
      generic: `Budesonide-formoterol`,
      brand: `Symbicort`,
      dosageForm: `Metered-dose inhaler`,
      drugClass: `ICS-LABA combination`,
      dose: `2 puffs BID (or SMART: as needed)`,
      price: `$86–$173`,
      priceSourceUrl: `https://www.goodrx.com/budesonide-formoterol`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Tachycardia, tremor, oral thrush`
    },
    {
      generic: `Montelukast`,
      brand: `Singulair`,
      dosageForm: `Oral tablet`,
      drugClass: `Leukotriene receptor antagonist`,
      dose: `10 mg daily`,
      price: `$4–$97`,
      priceSourceUrl: `https://www.goodrx.com/montelukast`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Headache; rare neuropsychiatric (FDA black box)`
    },
    {
      generic: `Prednisone`,
      brand: `Deltasone`,
      dosageForm: `Oral tablet`,
      drugClass: `Systemic corticosteroid`,
      dose: `40 mg daily × 5 days for flare`,
      price: `$2–$22`,
      priceSourceUrl: `https://www.goodrx.com/prednisone`,
      priceSourceLabel: `GoodRx`,
      sideEffects: `Insomnia, mood, hyperglycemia (short courses generally safe)`
    }
  ],
  recovery: [
    {
      period: `Hour 1 (rescue)`,
      detail: `Albuterol relieves bronchospasm within 5–15 minutes; effect lasts 4–6 hours.`
    },
    {
      period: `Day 1–3 of flare`,
      detail: `Increase ICS dose temporarily; start prednisone burst if moderate. Symptoms improving.`
    },
    {
      period: `Day 5–7`,
      detail: `Flare typically resolved with appropriate burst + controller adjustment.`
    },
    {
      period: `Week 2–4`,
      detail: `Step-up of controller therapy maintained; reassess at 4–6 weeks for control.`
    },
    {
      period: `Long-term`,
      detail: `With proper controller use, most patients achieve good control: rescue use <2×/week, no nighttime awakenings, normal activity.`
    }
  ],
  homeCare: [
    `Use spacer with metered-dose inhalers — improves drug delivery 50%+`,
    `Rinse mouth after every ICS use to prevent thrush`,
    `Reduce dust mite exposure: encase mattress and pillow in dust-proof covers, wash bedding weekly in hot water`,
    `Avoid smoke — single highest-impact lifestyle factor`,
    `Keep pets out of bedroom if pet-allergic`,
    `Use air purifier with HEPA filter`,
    `Get annual flu shot and stay current on COVID/pneumococcal vaccines`,
    `Pre-medicate with albuterol 15 min before exercise if exercise-induced`,
    `Track peak flow if your provider recommends a meter`,
    `Carry rescue inhaler at all times — never leave home without it`
  ],
  faqs: [
    {
      question: `Can a telehealth doctor prescribe asthma inhalers?`,
      answer: `Yes — albuterol, fluticasone, budesonide, ICS-LABA combinations, and montelukast are non-controlled medications. Dr. Bhavsar can refill or initiate these for stable established asthma. Same-day prescription typical.`
    },
    {
      question: `Do I need to be seen in person to get my inhaler?`,
      answer: `Not for stable established asthma. AAFP and GINA support telehealth-based maintenance care. New diagnosis, severe flare, or concerning features warrant in-person evaluation with spirometry.`
    },
    {
      question: `Should I be on a daily inhaler or just albuterol?`,
      answer: `Modern guidelines (GINA 2024) recommend ICS-containing therapy for nearly all adult asthma — even mild. Albuterol-only therapy is outdated. We typically prescribe either daily ICS or ICS-LABA used as-needed.`
    },
    {
      question: `What is SMART therapy?`,
      answer: `Single Maintenance and Reliever Therapy uses budesonide-formoterol (Symbicort) as BOTH daily controller and as-needed rescue. GINA-preferred approach for moderate persistent asthma. Reduces severe exacerbations and prednisone use.`
    },
    {
      question: `How do I know if my asthma is well-controlled?`,
      answer: `Asthma Control Test (ACT) score ≥20/25, rescue use ≤2 days/week, no nighttime awakenings, no activity limitation, peak flow ≥80% personal best, no exacerbations needing prednisone in past year.`
    },
    {
      question: `When should I go to the ER?`,
      answer: `Severe attack signs: can't speak in full sentences, SpO2 <92%, peak flow <50%, blue lips/fingers, no improvement after 2–3 albuterol treatments, confusion. Don't drive yourself — call 911.`
    },
    {
      question: `Why does inhaler technique matter so much?`,
      answer: `Up to 50% of asthma patients use inhalers incorrectly — they're not getting the medication into their lungs. Proper technique (with spacer for MDIs, deep slow inhalation, hold breath 10 seconds) doubles drug delivery. We review on video.`
    },
    {
      question: `Is montelukast (Singulair) safe?`,
      answer: `Effective adjunct for allergic asthma. FDA added a black-box warning in 2020 for rare neuropsychiatric effects (depression, anxiety, suicidal thoughts). We use it selectively after discussing risks; ICS remains first-line.`
    },
    {
      question: `Can I get pregnant with asthma?`,
      answer: `Yes — controlled asthma in pregnancy has good outcomes. Albuterol, budesonide (Pulmicort), and montelukast are widely used in pregnancy. Uncontrolled asthma is more dangerous than the medications. Stay on your controller.`
    },
    {
      question: `What about exercise-induced asthma?`,
      answer: `Two approaches: pre-medicate with albuterol 15 min before exercise (works for many), or daily ICS to reduce baseline inflammation. Many athletes manage well with proper plan.`
    },
    {
      question: `Should I get allergy testing?`,
      answer: `Yes if allergic triggers seem important. Allergy testing identifies specific triggers (dust mites, pet dander, pollen) so you can target avoidance. Allergist referral or allergy panel from primary care can do this.`
    },
    {
      question: `Can I stop my controller if I feel better?`,
      answer: `Don't stop without guidance. Stable control on a step warrants 3 months of stability before stepping down — and even then, you may step down rather than stop entirely. Sudden discontinuation often causes a flare 1–4 weeks later.`
    },
    {
      question: `What's the difference between asthma and COPD?`,
      answer: `Asthma: reversible (albuterol works well), often starts in childhood, allergic component common. COPD: less reversible, smoking-related, age >40, chronic productive cough. Spirometry can distinguish; some have features of both.`
    },
    {
      question: `How does the $49 telehealth visit compare to specialist care?`,
      answer: `Pulmonologist consults are $300–$500 with often 2–3 month waits. For typical maintenance and mild flares, primary-care–level prescribing (which we do) is appropriate per GINA guidelines. We refer to pulmonology for severe, refractory, or complex cases.`
    }
  ],
  relatedSymptoms: [
    `bronchitis`,
    `persistent-cough`,
    `allergy-symptoms`
  ],
  references: [
    {
      label: `AAAAI — Asthma`,
      url: `https://www.aaaai.org/conditions-treatments/asthma`
    },
    {
      label: `GINA — Global Strategy for Asthma Management`,
      url: `https://ginasthma.org/2024-report/`
    },
    {
      label: `CDC — Asthma`,
      url: `https://www.cdc.gov/asthma/about/index.html`
    },
    {
      label: `AAFP — Asthma in Adults: Treatment`,
      url: `https://www.aafp.org/pubs/afp/issues/2020/0915/p332.html`
    },
    {
      label: `NIH NHLBI — Asthma Management Guidelines`,
      url: `https://www.nhlbi.nih.gov/resources/2020-focused-updates-asthma-management-guidelines`
    },
    {
      label: `GoodRx — Albuterol Pricing`,
      url: `https://www.goodrx.com/albuterol`
    }
  ],
  riskFactors: [
    `Family history of asthma/atopy`,
    `Allergic rhinitis`,
    `Eczema`,
    `Smoke exposure`,
    `Obesity`,
    `Childhood respiratory infections`,
    `Occupational exposures`,
    `Air pollution`
  ],
  typicalTests: [
    `Asthma Control Test (ACT) score`,
    `Spirometry (in-person, baseline)`,
    `Peak flow monitoring (home)`,
    `Allergy testing (if allergic component)`,
    `FeNO (specialist setting)`
  ]
};

