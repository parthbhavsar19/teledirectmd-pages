export const metadata = {
  title:
    'Rural Telemedicine Evidence Review for Alaska: NEJM, Lancet, BMJ, and EClinicalMedicine Trials, Systematic Reviews, and Adoption-Ready Protocols',
  description:
    "A physician-authored evidence review of peer-reviewed randomized trials and systematic reviews on rural telemedicine, wildfire-smoke respiratory intervention, and chronic disease management. Emphasis on Alaska applicability, including the 2022 Lancet Global Health Hearing Norton Sound cluster-RCT, the Hózhó Navajo trial, MIRACLE-AF, SMARTER, and VITAL. Written by Parth Bhavsar, MD.",
  alternates: {
    canonical: 'https://teledirectmd.com/clinical-evidence/rural-telemedicine-alaska',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  authors: [{ name: 'Parth Bhavsar, MD' }],
  openGraph: {
    type: 'article',
    siteName: 'TeleDirectMD',
    locale: 'en_US',
    title: 'Rural Telemedicine Evidence Review for Alaska',
    description:
      'Physician-authored evidence review of peer-reviewed rural telemedicine RCTs and systematic reviews. NEJM, Lancet, BMJ, EClinicalMedicine coverage with Alaska adoption analysis.',
    url: 'https://teledirectmd.com/clinical-evidence/rural-telemedicine-alaska',
    images: ['https://teledirectmd.com/og-clinical-evidence-alaska.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rural Telemedicine Evidence Review for Alaska',
    description:
      'Physician evidence review of rural telemedicine RCTs and reviews with Alaska adoption analysis.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://teledirectmd.com/clinical-evidence/rural-telemedicine-alaska#breadcrumbs',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://teledirectmd.com/' },
        { '@type': 'ListItem', position: 2, name: 'Clinical Evidence', item: 'https://teledirectmd.com/clinical-evidence/' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Rural Telemedicine Evidence Review for Alaska',
          item: 'https://teledirectmd.com/clinical-evidence/rural-telemedicine-alaska/',
        },
      ],
    },
    {
      '@type': 'ScholarlyArticle',
      '@id': 'https://teledirectmd.com/clinical-evidence/rural-telemedicine-alaska#article',
      headline: 'Rural Telemedicine Evidence Review for Alaska',
      author: { '@id': 'https://teledirectmd.com/about#physician' },
      publisher: { '@id': 'https://teledirectmd.com/#organization' },
      datePublished: '2026-08-13',
      dateModified: '2026-08-13',
      inLanguage: 'en-US',
      isPartOf: { '@id': 'https://teledirectmd.com/#website' },
      about: 'Rural telemedicine, wildfire smoke respiratory care, chronic disease management, Alaska rural health',
      keywords:
        'rural telemedicine, Alaska, wildfire smoke, Hearing Norton Sound, cluster randomized trial, MIRACLE-AF, SMARTER, Hózhó, VITAL, community health aide, systematic review',
      citation: [
        'https://www.thelancet.com/journals/langlo/article/PIIS2214-109X(22)00184-X/fulltext',
        'https://www.bmj.com/content/389/bmj-2024-082765',
        'https://pubmed.ncbi.nlm.nih.gov/38583185/',
        'https://www.nature.com/articles/s41591-025-03511-2',
        'https://pubmed.ncbi.nlm.nih.gov/42005925/',
        'https://pubmed.ncbi.nlm.nih.gov/40472026/',
        'https://psychiatryonline.org/doi/10.1176/appi.ajp.2012.12050696',
        'https://journals.sagepub.com/doi/10.1177/1357633X221139892',
        'https://pubmed.ncbi.nlm.nih.gov/41324243/',
        'https://pubs.acs.org/doi/10.1021/acs.est.4c06653',
        'https://linkinghub.elsevier.com/retrieve/pii/S0735109725064046',
      ],
    },
    {
      '@type': 'WebPage',
      '@id': 'https://teledirectmd.com/clinical-evidence/rural-telemedicine-alaska#webpage',
      url: 'https://teledirectmd.com/clinical-evidence/rural-telemedicine-alaska/',
      name: 'Rural Telemedicine Evidence Review for Alaska',
      description: metadata.description,
      inLanguage: 'en-US',
      isPartOf: { '@id': 'https://teledirectmd.com/#website' },
      breadcrumb: { '@id': 'https://teledirectmd.com/clinical-evidence/rural-telemedicine-alaska#breadcrumbs' },
      author: { '@id': 'https://teledirectmd.com/about#physician' },
      about: { '@id': 'https://teledirectmd.com/#organization' },
      datePublished: '2026-08-13',
      dateModified: '2026-08-13',
    },
  ],
};

const styles = `
:root{--tdmd-teal:#006B73;--tdmd-teal-dark:#003E52;--tdmd-accent:#C4551E;--tdmd-bg:#F7F9FA;--tdmd-card:#FFFFFF;--tdmd-border:#C2E0E5;--tdmd-text:#0A2438;--tdmd-muted:#456676}
.tdmd-ce-wrap{background:var(--tdmd-bg);color:var(--tdmd-text);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;line-height:1.7;font-size:17px;padding:1rem 0 3rem}
.tdmd-ce-container{max-width:960px;margin:0 auto;padding:0 1.25rem}
@media (max-width:480px){.tdmd-ce-container{padding:0 .9rem}.tdmd-ce-wrap{font-size:16px}}
.tdmd-ce-breadcrumb{font-size:.85rem;color:var(--tdmd-muted);padding:1rem 0}
.tdmd-ce-breadcrumb a{color:var(--tdmd-teal);text-decoration:none}
.tdmd-ce-breadcrumb span{margin:0 .4rem;color:#B0BEC5}
.tdmd-ce-header{padding:1rem 0 1.5rem;border-bottom:1px solid var(--tdmd-border)}
.tdmd-ce-badge{display:inline-block;background:var(--tdmd-teal-dark);color:#fff;padding:.3rem .7rem;border-radius:999px;font-size:.75rem;font-weight:600;letter-spacing:.03em;text-transform:uppercase;margin-bottom:1rem}
.tdmd-ce-title{font-size:2.05rem;font-weight:700;color:var(--tdmd-teal-dark);margin:.4rem 0;line-height:1.2}
@media (max-width:480px){.tdmd-ce-title{font-size:1.55rem;line-height:1.25}}
.tdmd-ce-sub{color:var(--tdmd-muted);font-size:1.02rem;margin:.5rem 0 1rem;max-width:820px}
.tdmd-ce-meta{color:var(--tdmd-muted);font-size:.88rem;padding-top:.5rem;display:flex;flex-wrap:wrap;gap:1.25rem}
.tdmd-ce-body h2{font-size:1.4rem;color:var(--tdmd-teal-dark);margin-top:2rem;margin-bottom:.7rem;padding-bottom:.4rem;border-bottom:2px solid var(--tdmd-border)}
.tdmd-ce-body h3{font-size:1.1rem;color:var(--tdmd-teal-dark);margin-top:1.4rem;margin-bottom:.4rem}
.tdmd-ce-body p{margin:0 0 1rem}
.tdmd-ce-body ul,.tdmd-ce-body ol{margin:0 0 1rem;padding-left:1.4rem}
.tdmd-ce-body li{margin-bottom:.4rem}
.tdmd-ce-body em{font-style:italic}
.tdmd-ce-callout{background:var(--tdmd-card);border-left:4px solid var(--tdmd-teal);border-radius:8px;padding:1rem 1.2rem;margin:1.2rem 0}
.tdmd-ce-callout-title{font-weight:700;color:var(--tdmd-teal-dark);margin-bottom:.4rem}
.tdmd-ce-table-wrap{overflow-x:auto;margin:1rem 0}
.tdmd-ce-table{width:100%;border-collapse:collapse;background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:8px;overflow:hidden;font-size:.92rem}
.tdmd-ce-table th,.tdmd-ce-table td{padding:.65rem .8rem;text-align:left;border-bottom:1px solid var(--tdmd-border);vertical-align:top}
@media (max-width:640px){.tdmd-ce-table{font-size:.85rem}.tdmd-ce-table th,.tdmd-ce-table td{padding:.5rem .6rem;min-width:100px}}
.tdmd-ce-table th{background:#E6F0F2;color:var(--tdmd-teal-dark);font-weight:700}
.tdmd-ce-table tr:last-child td{border-bottom:none}
.tdmd-ce-refs{background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:10px;padding:1.1rem 1.4rem;margin:2rem 0;font-size:.87rem}
.tdmd-ce-refs h2{font-size:1.2rem;margin-top:0}
.tdmd-ce-refs ol{margin:0;padding-left:1.2rem}
.tdmd-ce-refs li{margin-bottom:.5rem;color:var(--tdmd-muted);word-break:break-word}
.tdmd-ce-refs a{color:var(--tdmd-teal);text-decoration:none;word-break:break-all}
`;

export default function RuralTelemedicineAlaskaEvidence() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <main className="tdmd-ce-wrap">
        <div className="tdmd-ce-container">
          <nav className="tdmd-ce-breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span>›</span>
            <a href="/clinical-evidence/">Clinical Evidence</a>
            <span>›</span>
            <span aria-current="page">Rural Telemedicine Evidence Review for Alaska</span>
          </nav>

          <header className="tdmd-ce-header">
            <span className="tdmd-ce-badge">Evidence Review · Physician-Authored</span>
            <h1 className="tdmd-ce-title">Rural Telemedicine Evidence Review for Alaska</h1>
            <p className="tdmd-ce-sub">
              A structured review of peer-reviewed randomized trials and systematic reviews in the <em>New England
              Journal of Medicine</em>, <em>The Lancet</em> family, <em>BMJ</em>, and <em>EClinicalMedicine</em> on
              rural telemedicine efficacy and wildfire-smoke respiratory intervention. Study designs, primary outcomes,
              population demographics, and effect sizes are documented, followed by adoption-readiness analysis for
              remote Alaska.
            </p>
            <div className="tdmd-ce-meta">
              <span>Author: Parth Bhavsar, MD</span>
              <span>Published: August 13, 2026</span>
              <span>Last reviewed: August 13, 2026</span>
            </div>
          </header>

          <section className="tdmd-ce-body">
            <h2 id="tldr">TL;DR</h2>
            <p>
              Two adoption-ready protocols are supported by high-quality randomized evidence for rural Alaska. First,
              asynchronous specialty referral through a store-and-forward pathway is Alaska-specific and cluster-RCT
              proven, with the 2022 <em>Lancet Global Health</em> Hearing Norton Sound trial cutting the access gap in
              half and accelerating time-to-diagnosis by 17.6-fold.<sup><a href="#ce-1">[1]</a></sup> Second,
              telemedicine-based collaborative care for depression in rural federally qualified health centers
              outperforms on-site collaborative care at 18 months.<sup><a href="#ce-2">[2]</a></sup> Two more protocols
              are compelling but require adaptation: telephone-based guideline-directed medical therapy titration for
              heart failure with reduced ejection fraction, and CHW-facilitated telehealth for moderate-severe
              hypertension. Wildfire-smoke telehealth is best supported by mechanistic and epidemiologic evidence with
              consensus guidance, not by randomized trials.
            </p>

            <h2 id="scope">Scope and Methods</h2>
            <p>
              Peer-reviewed randomized trials and systematic reviews from the <em>New England Journal of Medicine</em>,
              the <em>Lancet</em> family (including <em>Lancet Global Health</em>, <em>Lancet Regional Health</em>, and{' '}
              <em>Lancet Digital Health</em>), <em>BMJ</em>, and <em>EClinicalMedicine</em>. A small number of
              high-signal adjacent-journal studies (<em>Nature Medicine</em>, <em>PLoS Medicine</em>, <em>JAMA Internal
              Medicine</em>) are included where they carry direct implications for Alaska. Emphasis on 2022 through
              2026. Primary sources fetched directly; every claim below carries a URL to a primary source.
            </p>

            <h2 id="headline-trials">Headline Trials</h2>

            <h3>Hearing Norton Sound (Alaska)</h3>
            <p>
              Emmett SD, Platt A, Turner EL, et al., <em>Lancet Global Health</em>, 2022.<sup><a href="#ce-1">[1]</a></sup>{' '}
              Cluster-randomized controlled trial across 15 rural Bering Strait communities, 2017 to 2019. 1,481
              children (grades K to 12), predominantly Alaska Native, 790 requiring referral. Intervention: mHealth
              hearing screen plus store-and-forward specialty referral to Anchorage ENT and audiology through a shared
              EHR. Comparator: standard primary-care referral pathway. Primary outcome: time to ear or hearing
              follow-up. Effect: follow-up within 9 months 68.5% intervention vs 32.1% control; mean days to follow-up
              41.5 vs 92.0; adjusted event-time ratio 17.6 (95% CI 6.8 to 45.3; p=0.002). No adverse events. The
              preschool ancillary trial (n=153) replicated the effect (RR 1.57, 95% CI 1.22 to 2.01).
              <sup><a href="#ce-3">[3]</a></sup>
            </p>
            <p>
              This is the only randomized trial to date that has demonstrated telemedicine can close a rural U.S.
              access disparity in Alaska specifically. The mixed-methods follow-up identified the four factors that
              distinguished high-performing communities: clinic capacity, personnel ownership and engagement,
              communication, and awareness.<sup><a href="#ce-4">[4]</a></sup> Scheduling and equipment were not
              consistently associated with outcomes.
            </p>

            <h3>MIRACLE-AF (Rural China, Nature Medicine 2025)</h3>
            <p>
              Cluster-RCT, 30 village clinics 1:1, 34 months mean follow-up. 1,039 rural adults aged 65 and over with
              atrial fibrillation. Village-doctor-led integrated care with telemedicine linkage to specialists.
              Integrated-care adherence at 12 months 33.1% vs 8.7% (p&lt;0.001). Composite cardiovascular events 6.2% vs
              9.6% per year, HR 0.64 (95% CI 0.50 to 0.82, p&lt;0.001).<sup><a href="#ce-5">[5]</a></sup>
            </p>

            <h3>SMARTER (Rural China, BMJ 2025)</h3>
            <p>
              Cluster-RCT, 127 villages across 5 provinces, 4,533 adults aged 35 and over with elevated cardiovascular
              risk. Village-doctor-delivered mobile health intervention with education, monitoring, and gamification.
              Predicted 10-year ASCVD risk change: intervention -6.3% vs control -4.2% (between-group -1.88pp, 95% CI
              -2.57 to -1.19, p&lt;0.001). Systolic BP reduction was 7.64 mmHg greater in the intervention arm
              (p&lt;0.001).<sup><a href="#ce-6">[6]</a></sup>
            </p>

            <h3>Hózhó (Navajo Nation, JAMA Intern Med 2024)</h3>
            <p>
              Stepped-wedge pragmatic trial across 2 Indian Health Service facilities. Adults with HFrEF in rural Navajo
              Nation. Telephone-based remote initiation and titration of guideline-directed medical therapy. Primary
              outcome: increase in GDMT drug classes filled at 30 days. Result: 66.2% intervention vs 13.1% control (OR
              12.99; 95% CI 6.87 to 24.53; p&lt;0.001). Number-needed-to-treat 1.88.<sup><a href="#ce-7">[7]</a></sup>{' '}
              This is the closest published U.S. rural analogue for what an adult primary-care telehealth practice can
              operationalize outside of a specialty center.
            </p>

            <h3>VITAL (Rural Lesotho, EClinicalMedicine 2026)</h3>
            <p>
              Pragmatic parallel-group non-inferiority cluster-RCT, 18 rural nurse-led clinics, 5,770 adults on
              antiretroviral therapy. Clinician clinical decision support plus individualized SMS plus telemedicine
              plus multi-month ART dispensing. Viral suppression at 24 months 77.9% vs 74.3% (aOR 1.18, 95% CI 0.95 to
              1.46). Disengagement from care aOR 0.67 (95% CI 0.48 to 0.93).<sup><a href="#ce-8">[8]</a></sup>
            </p>

            <h3>Hickey (Kenya/Uganda, PLoS Med 2025)</h3>
            <p>
              Pilot RCT, 200 adults aged 40 and over with moderate-severe hypertension (BP 160/100 or higher) at 3 rural
              primary health centers. Clinician-driven, community-health-worker-facilitated telehealth vs clinic-based
              care. BP control at 24 weeks 77% vs 51% (risk difference 26%, 95% CI 14% to 38%, p&lt;0.001). BP control
              at 48 weeks 86% vs 44% (RD 42%, 95% CI 30% to 53%, p&lt;0.001).<sup><a href="#ce-9">[9]</a></sup>
            </p>

            <h3>Fortney Rural Depression Trial (Am J Psychiatry 2013)</h3>
            <p>
              Multi-site pragmatic RCT, 364 depressed adults at rural federally qualified health centers, 18-month
              follow-up. Off-site telephone care manager plus tele-pharmacist plus tele-psychologist plus
              tele-psychiatrist. Response OR 7.74 (95% CI 3.94 to 15.20, p&lt;0.0001). Remission OR 12.69 (95% CI 4.81
              to 33.46, p&lt;0.0001).<sup><a href="#ce-2">[2]</a></sup> Older but still the highest-quality U.S. rural
              depression telehealth RCT.
            </p>

            <h3>Totten Systematic Review (J Telemed Telecare 2022)</h3>
            <p>
              Systematic review of 97 effectiveness studies of rural provider-to-provider telehealth. Outcomes were
              similar or better vs care without telehealth for inpatient consultations, neonatal care, outpatient
              depression and diabetes, and emergency care.<sup><a href="#ce-10">[10]</a></sup>
            </p>

            <h2 id="wildfire-smoke">Wildfire Smoke and Telehealth</h2>
            <p>
              Direct randomized trial evidence for telehealth as an intervention during wildfire smoke events is
              limited to one small feasibility trial (67 young adults with asthma over 8 weeks). What is
              well-established is that wildfire smoke PM2.5 causes acute increases in asthma emergency department
              visits and hospital admissions, and long-term exposure is linked to incident heart failure in Medicare
              cohorts (hazard ratio 1.014 per microgram per cubic meter of 2-year average smoke PM2.5, 95% CI 1.007 to
              1.020).<sup><a href="#ce-11">[11]</a></sup><sup><a href="#ce-12">[12]</a></sup> Fire-smoke PM2.5 appears
              more cardiotoxic per microgram than non-fire PM2.5.
            </p>
            <p>
              Consensus operational guidance from the Australian Centre of Excellence in Severe Asthma, the U.S. EPA,
              and Canadian public-health agencies is to substitute telehealth for face-to-face visits during smoke
              events for asthma, COPD, and pregnancy, verify inhaler technique by video, and refresh written action
              plans before smoke season. Alaska-specific note: the boreal fire regime and Interior Alaska's inversion
              behavior produce longer-duration smoke exposures than most Lower 48 events, which strengthens the
              rationale for telehealth-supported step-up management during multi-week smoke stretches.
              <sup><a href="#ce-13">[13]</a></sup>
            </p>

            <h2 id="cross-journal">Cross-Journal Comparison</h2>
            <div className="tdmd-ce-table-wrap">
              <table className="tdmd-ce-table">
                <thead>
                  <tr>
                    <th>Dimension</th>
                    <th>NEJM</th>
                    <th>Lancet family</th>
                    <th>BMJ</th>
                    <th>EClinicalMedicine</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Rural-telehealth RCT volume 2022 to 2026</td>
                    <td>Very low; mainly perspectives (Volandes 2025)<sup><a href="#ce-14">[14]</a></sup></td>
                    <td>Highest; Emmett Alaska trial<sup><a href="#ce-1">[1]</a></sup></td>
                    <td>SMARTER cluster-RCT<sup><a href="#ce-6">[6]</a></sup></td>
                    <td>VITAL non-inferiority cluster-RCT<sup><a href="#ce-8">[8]</a></sup></td>
                  </tr>
                  <tr>
                    <td>Geographic focus</td>
                    <td>U.S. policy-framed</td>
                    <td>Global; China, India, sub-Saharan Africa; Alaska via Emmett</td>
                    <td>China, U.K.</td>
                    <td>LMIC-heavy, pragmatic</td>
                  </tr>
                  <tr>
                    <td>Dominant designs</td>
                    <td>Perspectives, occasional pragmatic trials</td>
                    <td>Cluster-RCT, pragmatic, mixed-methods</td>
                    <td>Cluster-RCT, protocol papers</td>
                    <td>Non-inferiority cluster-RCTs</td>
                  </tr>
                  <tr>
                    <td>Alaska-actionable finding</td>
                    <td>Framing only</td>
                    <td>Emmett actionable and Alaska-specific</td>
                    <td>SMARTER SBP effects transferable</td>
                    <td>VITAL multi-month dispensing model</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="alaska-mapping">Interventions Mapped to Alaska Rural Health Challenges</h2>
            <div className="tdmd-ce-table-wrap">
              <table className="tdmd-ce-table">
                <thead>
                  <tr>
                    <th>Challenge</th>
                    <th>Evidence-supported intervention</th>
                    <th>Primary evidence</th>
                    <th>Adoption readiness in Alaska</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Loss to follow-up after specialty referral</td>
                    <td>Store-and-forward async specialty referral through shared EHR</td>
                    <td>Emmett 2022<sup><a href="#ce-1">[1]</a></sup></td>
                    <td>High, as partnership with regional Tribal Health corporation</td>
                  </tr>
                  <tr>
                    <td>Rural depression, PTSD, alcohol use disorder</td>
                    <td>Off-site collaborative care with tele-psychiatry</td>
                    <td>Fortney 2013<sup><a href="#ce-2">[2]</a></sup></td>
                    <td>Medium; requires contracted tele-psychiatry</td>
                  </tr>
                  <tr>
                    <td>HFrEF titration and hypertension in remote areas</td>
                    <td>Phone/video-driven GDMT titration with async pharmacy coordination</td>
                    <td>Hózhó Navajo 2024<sup><a href="#ce-7">[7]</a></sup>, Hickey 2025<sup><a href="#ce-9">[9]</a></sup></td>
                    <td>High for hypertension, moderate for HFrEF pending cardiology backstop</td>
                  </tr>
                  <tr>
                    <td>Wildfire smoke exacerbations (Interior Alaska, June to August)</td>
                    <td>
                      Pre-season action-plan refresh, video inhaler technique check, smoke-season virtual triage
                    </td>
                    <td>Consensus guidance; Reid 2025<sup><a href="#ce-13">[13]</a></sup>, Lei 2024<sup><a href="#ce-11">[11]</a></sup></td>
                    <td>High operationally; evidence-informed rather than trial-proven</td>
                  </tr>
                  <tr>
                    <td>Long-term wildfire smoke cardiovascular morbidity</td>
                    <td>Population-level BP and HF screening with follow-up titration</td>
                    <td>Hao 2025<sup><a href="#ce-12">[12]</a></sup>, SMARTER 2025<sup><a href="#ce-6">[6]</a></sup></td>
                    <td>Medium; requires screening-to-treatment pathway</td>
                  </tr>
                  <tr>
                    <td>Continuity for stable chronic-disease patients</td>
                    <td>Async messaging plus multi-month dispensing</td>
                    <td>VITAL 2026<sup><a href="#ce-8">[8]</a></sup></td>
                    <td>High; consistent with standard practice patterns</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="protocols">Adoption-Ready Protocols</h2>

            <h3>Protocol A: Wildfire-smoke season respiratory readiness</h3>
            <p>
              Evidence base: operational consensus, mechanistic and epidemiologic evidence, no rural RCT.
              Evidence-informed, not evidence-proven. Steps: April to May pre-season outreach, refreshed written action
              plan, video inhaler-technique verification, rescue and controller inhaler prescriptions confirmed, oral
              steroid burst reserved for red-zone use per action plan, AirNow and DEC air-quality alert enrollment.
              Same-day virtual slots during AQI 150 and higher events. Escalation to nearest hub ED or medevac for
              airway or breathing red flags.
            </p>

            <h3>Protocol B: Async specialty-adjacent referral partnership</h3>
            <p>
              Evidence base: Emmett 2022 cluster-RCT, reproduced in North STAR and Appalachian STAR protocols. High
              confidence. TeleDirectMD as the adult primary-care node pushing async referrals to Tribal Health
              specialists in a partnership model. See the{' '}
              <a href="/partners/tribal-health-alaska/">Alaska Tribal Health Partnership Brief</a>.
            </p>

            <h3>Protocol C: Chronic disease titration for adult rural Alaskans</h3>
            <p>
              Evidence base: Hózhó, SMARTER, Fortney. High to medium confidence. Titration protocols per condition
              (hypertension, type 2 diabetes, hyperlipidemia, HFrEF non-controlled). Two-week virtual follow-up for the
              first 60 days of any new or uptitrated regimen. Video inhaler or injector technique check at visits 1 and
              3. HFrEF titration requires a documented cardiology backstop before ARNI or SGLT2 initiation off in-person
              exam.
            </p>

            <h3>Protocol D: Continuity for stable chronic conditions</h3>
            <p>
              Evidence base: VITAL. Medium-high confidence for the operational pattern. Multi-month (90-day) dispensing
              plus async messaging. Simple, transferable, already standard practice for stable adult primary care.
            </p>

            <h2 id="limits">What the Evidence Does Not Support</h2>
            <ul>
              <li>
                Remote monitoring alone (device plus dashboard, no titration protocol) as a superior model. It is
                non-inferior, not superior, in most rural populations.
              </li>
              <li>
                Wildfire-smoke-specific mobile app interventions as evidence-based clinical care. Feasibility data only.
              </li>
              <li>
                Video primary care as a full substitute for the CHA/P layer in bush Alaska. The successful models plug
                into the CHA/P layer, not around it.
              </li>
              <li>
                A cite-able NEJM rural telehealth RCT in the 2022 to 2026 window. Volandes 2025 is a perspective, not a
                trial.<sup><a href="#ce-14">[14]</a></sup>
              </li>
            </ul>

            <h2 id="disclosures">Author, Disclosures, and Methods Notes</h2>
            <p>
              Author: Parth Bhavsar, MD, board-certified in family medicine. Founder and Medical Director of
              TeleDirectMD, a physician-led telemedicine practice licensed in Alaska and 40 additional states.
              Disclosures: no external funding was received for this review. TeleDirectMD is a for-profit telemedicine
              practice; this review supports its Alaska partnership and clinical protocol work. Every claim in this
              review is linked to a primary source; readers are encouraged to verify the citations directly. Corrections
              or additional citation suggestions may be sent to{' '}
              <a href="mailto:parth@teledirectmd.com">parth@teledirectmd.com</a>.
            </p>

            <div className="tdmd-ce-callout">
              <div className="tdmd-ce-callout-title">Related pages</div>
              <ul>
                <li>
                  <a href="/health-guides/alaska-wildfire-smoke-respiratory-guide/">
                    Alaska Wildfire Smoke and Your Lungs (patient-facing field guide)
                  </a>
                </li>
                <li>
                  <a href="/partners/tribal-health-alaska/">Alaska Tribal Health Partnership Brief</a>
                </li>
                <li>
                  <a href="/health-guides/wildfire-smoke-health-guide/">
                    Wildfire Smoke and Your Health (general patient guide)
                  </a>
                </li>
              </ul>
            </div>

            <div className="tdmd-ce-refs">
              <h2>References</h2>
              <ol>
                <li id="ce-1">
                  Emmett SD, Platt A, Turner EL, et al. Mobile health school screening and telemedicine referral to
                  improve access to specialty care in rural Alaska: a cluster-randomised controlled trial.{' '}
                  <em>Lancet Glob Health</em>. 2022;10(7):e1023-e1033.{' '}
                  <a
                    href="https://www.thelancet.com/journals/langlo/article/PIIS2214-109X(22)00184-X/fulltext"
                    target="_blank"
                    rel="noopener"
                  >
                    Lancet Global Health
                  </a>
                </li>
                <li id="ce-2">
                  Fortney JC, Pyne JM, Mouden SB, et al. Practice-Based Versus Telemedicine-Based Collaborative Care for
                  Depression in Rural Federally Qualified Health Centers. <em>Am J Psychiatry</em>. 2013;170(4):414-425.{' '}
                  <a
                    href="https://psychiatryonline.org/doi/10.1176/appi.ajp.2012.12050696"
                    target="_blank"
                    rel="noopener"
                  >
                    DOI: 10.1176/appi.ajp.2012.12050696
                  </a>
                </li>
                <li id="ce-3">
                  Robler SK, Platt A, Turner EL, et al. Telemedicine Referral to Improve Access to Specialty Care for
                  Preschool Children in Rural Alaska: A Cluster-Randomized Controlled Trial. <em>Ear Hear</em>.
                  2023;44(5):1240-1250.{' '}
                  <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10583927/" target="_blank" rel="noopener">
                    PMC10583927
                  </a>
                </li>
                <li id="ce-4">
                  Robler SK, Inglis-Jenson M, Gallo JJ, et al. Mobile Health School Screening and Telemedicine Referral
                  to Improve Access to Specialty Care in Rural Alaska: Integrating Mixed Methods Data to Contextualize
                  Trial Outcomes. <em>Ear Hear</em>. 2023;44(5):1271-1281.
                </li>
                <li id="ce-5">
                  Liu W, Li M, Peng Z, et al. Telemedicine-based integrated management of atrial fibrillation in village
                  clinics: a cluster randomized trial. <em>Nat Med</em>. 2025.{' '}
                  <a href="https://www.nature.com/articles/s41591-025-03511-2" target="_blank" rel="noopener">
                    Nature Medicine
                  </a>
                </li>
                <li id="ce-6">
                  Zhang X, Wang S, Zhou X, et al. A village doctor-led mobile health intervention for cardiovascular
                  risk reduction in rural China: cluster randomised controlled trial. <em>BMJ</em>. 2025;389:e082765.{' '}
                  <a href="https://www.bmj.com/content/389/bmj-2024-082765" target="_blank" rel="noopener">
                    BMJ
                  </a>
                </li>
                <li id="ce-7">
                  Telephone-Based Guideline-Directed Medical Therapy Optimization in Navajo Nation: The Hózhó
                  Randomized Clinical Trial. <em>JAMA Intern Med</em>. 2024;184(6):681-690.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/38583185/" target="_blank" rel="noopener">
                    PubMed
                  </a>
                </li>
                <li id="ce-8">
                  Integrating clinical decision support and mobile health for differentiated HIV service delivery in
                  Lesotho (VITAL): a cluster-randomised non-inferiority trial. <em>EClinicalMedicine</em>.
                  2026;94:103850.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/42005925/" target="_blank" rel="noopener">
                    PubMed
                  </a>
                </li>
                <li id="ce-9">
                  Hickey MD, Owaraganise A, Ogachi S, et al. Community health worker-facilitated telehealth for
                  moderate-severe hypertension care in Kenya and Uganda: A randomized controlled trial.{' '}
                  <em>PLoS Med</em>. 2025;22(6):e1004632.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/40472026/" target="_blank" rel="noopener">
                    PubMed
                  </a>
                </li>
                <li id="ce-10">
                  Totten AM, Womack DM, Griffin JC, et al. Telehealth-guided provider-to-provider communication to
                  improve rural health: A systematic review. <em>J Telemed Telecare</em>. 2022.{' '}
                  <a
                    href="https://journals.sagepub.com/doi/10.1177/1357633X221139892"
                    target="_blank"
                    rel="noopener"
                  >
                    J Telemed Telecare
                  </a>
                </li>
                <li id="ce-11">
                  Lei Y, Lei TH, Lu C, Zhang X, Wang F. Wildfire Smoke: Health Effects, Mechanisms, and Mitigation.{' '}
                  <em>Environ Sci Technol</em>. 2024;58(48):21097-21119.{' '}
                  <a href="https://pubs.acs.org/doi/10.1021/acs.est.4c06653" target="_blank" rel="noopener">
                    DOI: 10.1021/acs.est.4c06653
                  </a>
                </li>
                <li id="ce-12">
                  Hao H, Xu K, Zhang D, et al. Long-Term Wildfire Smoke Exposure and Increased Risk of Heart Failure in
                  Older Adults. <em>J Am Coll Cardiol</em>. 2025.{' '}
                  <a
                    href="https://linkinghub.elsevier.com/retrieve/pii/S0735109725064046"
                    target="_blank"
                    rel="noopener"
                  >
                    DOI: 10.1016/j.jacc.2025.04.058
                  </a>
                </li>
                <li id="ce-13">
                  Reid CE, et al. Wildfire and asthma: prospective interventions. 2025.{' '}
                  <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12441628/" target="_blank" rel="noopener">
                    PMC12441628
                  </a>
                </li>
                <li id="ce-14">
                  Volandes AE, Davis AD, Goldstein NE. From Bandwidth to Bedside: Bringing AI-Enabled Care to Rural
                  America. <em>N Engl J Med</em>. 2025 Nov 29. DOI: 10.1056/NEJMp2509491.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/41324243/" target="_blank" rel="noopener">
                    PubMed
                  </a>
                </li>
              </ol>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
