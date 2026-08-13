export const metadata = {
  title: 'TeleDirectMD × Alaska Tribal Health: Partnership Brief for Regional Corporations and Village Care Systems',
  description:
    'A partnership proposal for Alaska Native Tribal Health Consortium and regional health corporations. TeleDirectMD is a physician-founded telemedicine practice licensed in Alaska and 40 additional states. This brief lays out the case for an adult primary and urgent-care telehealth layer that plugs into the existing CHA and specialty-referral infrastructure.',
  alternates: { canonical: 'https://teledirectmd.com/partners/tribal-health-alaska' },
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
    title: 'TeleDirectMD × Alaska Tribal Health Partnership Brief',
    description:
      'A physician-founded telemedicine practice offering an adult primary and urgent-care layer for Alaska Native Tribal Health partners. Alaska-licensed, evidence-grounded, complementary to CHA/P and specialty pathways.',
    url: 'https://teledirectmd.com/partners/tribal-health-alaska',
    images: ['https://teledirectmd.com/og-alaska-partnership.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TeleDirectMD × Alaska Tribal Health Partnership Brief',
    description:
      'Adult primary and urgent-care telehealth layer for Alaska Tribal Health partners. Founded by a board-certified family medicine physician.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://teledirectmd.com/partners/tribal-health-alaska#breadcrumbs',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://teledirectmd.com/' },
        { '@type': 'ListItem', position: 2, name: 'Partners', item: 'https://teledirectmd.com/partners/' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Alaska Tribal Health',
          item: 'https://teledirectmd.com/partners/tribal-health-alaska/',
        },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': 'https://teledirectmd.com/partners/tribal-health-alaska#webpage',
      url: 'https://teledirectmd.com/partners/tribal-health-alaska/',
      name: 'TeleDirectMD × Alaska Tribal Health Partnership Brief',
      description:
        'Partnership proposal for Alaska Native Tribal Health Consortium and regional health corporations.',
      inLanguage: 'en-US',
      breadcrumb: { '@id': 'https://teledirectmd.com/partners/tribal-health-alaska#breadcrumbs' },
      isPartOf: { '@id': 'https://teledirectmd.com/#website' },
      author: { '@id': 'https://teledirectmd.com/about#physician' },
      about: { '@id': 'https://teledirectmd.com/#organization' },
      datePublished: '2026-08-13',
      dateModified: '2026-08-13',
    },
    {
      '@type': 'Physician',
      '@id': 'https://teledirectmd.com/about#physician-partnership-alaska',
      name: 'Parth Bhavsar, MD',
      honorificSuffix: 'MD',
      jobTitle: 'Board-Certified Family Medicine Physician, Founder',
      medicalSpecialty: 'https://schema.org/FamilyPractice',
      identifier: { '@type': 'PropertyValue', propertyID: 'NPI', value: '1104323203' },
      worksFor: { '@id': 'https://teledirectmd.com/#organization' },
      areaServed: { '@type': 'State', name: 'Alaska' },
      url: 'https://teledirectmd.com/about',
    },
  ],
};

const styles = `
:root{--tdmd-teal:#006B73;--tdmd-teal-dark:#003E52;--tdmd-accent:#C4551E;--tdmd-bg:#F7F9FA;--tdmd-card:#FFFFFF;--tdmd-border:#C2E0E5;--tdmd-text:#0A2438;--tdmd-muted:#456676}
.tdmd-partner-wrap{background:var(--tdmd-bg);color:var(--tdmd-text);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;line-height:1.7;font-size:17px;padding:1rem 0 3rem}
.tdmd-partner-container{max-width:920px;margin:0 auto;padding:0 1.25rem}
@media (max-width:480px){.tdmd-partner-container{padding:0 .9rem}.tdmd-partner-wrap{font-size:16px}}
.tdmd-partner-breadcrumb{font-size:.85rem;color:var(--tdmd-muted);padding:1rem 0}
.tdmd-partner-breadcrumb a{color:var(--tdmd-teal);text-decoration:none}
.tdmd-partner-breadcrumb span{margin:0 .4rem;color:#B0BEC5}
.tdmd-partner-header{padding:1rem 0 1.5rem;border-bottom:1px solid var(--tdmd-border)}
.tdmd-partner-badge{display:inline-block;background:var(--tdmd-teal);color:#fff;padding:.3rem .7rem;border-radius:999px;font-size:.75rem;font-weight:600;letter-spacing:.03em;text-transform:uppercase;margin-bottom:1rem}
.tdmd-partner-title{font-size:2.1rem;font-weight:700;color:var(--tdmd-teal-dark);margin:.4rem 0;line-height:1.2}
@media (max-width:480px){.tdmd-partner-title{font-size:1.55rem;line-height:1.25}}
.tdmd-partner-sub{color:var(--tdmd-muted);font-size:1.05rem;margin:.5rem 0 1rem;max-width:820px}
.tdmd-partner-meta{color:var(--tdmd-muted);font-size:.9rem;padding-top:.5rem}
.tdmd-partner-body h2{font-size:1.4rem;color:var(--tdmd-teal-dark);margin-top:2rem;margin-bottom:.7rem;padding-bottom:.4rem;border-bottom:2px solid var(--tdmd-border)}
.tdmd-partner-body h3{font-size:1.1rem;color:var(--tdmd-teal-dark);margin-top:1.4rem;margin-bottom:.4rem}
.tdmd-partner-body p{margin:0 0 1rem}
.tdmd-partner-body ul,.tdmd-partner-body ol{margin:0 0 1rem;padding-left:1.4rem}
.tdmd-partner-body li{margin-bottom:.4rem}
.tdmd-partner-card{background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:10px;padding:1.2rem 1.5rem;margin:1.5rem 0}
.tdmd-partner-card h3{margin-top:0}
.tdmd-partner-table-wrap{overflow-x:auto;margin:1rem 0}
.tdmd-partner-table{width:100%;border-collapse:collapse;background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:8px;overflow:hidden;font-size:.94rem}
.tdmd-partner-table th,.tdmd-partner-table td{padding:.7rem .85rem;text-align:left;border-bottom:1px solid var(--tdmd-border);vertical-align:top}
@media (max-width:640px){.tdmd-partner-table{font-size:.86rem}.tdmd-partner-table th,.tdmd-partner-table td{padding:.55rem .65rem;min-width:100px}}
.tdmd-partner-table th{background:#E6F0F2;color:var(--tdmd-teal-dark);font-weight:700}
.tdmd-partner-table tr:last-child td{border-bottom:none}
.tdmd-partner-cta{background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-left:4px solid var(--tdmd-teal);border-radius:8px;padding:1.2rem 1.4rem;margin:1.5rem 0}
.tdmd-partner-cta h3{margin-top:0;color:var(--tdmd-teal-dark)}
.tdmd-partner-cta a{color:var(--tdmd-teal);text-decoration:none;font-weight:600}
.tdmd-partner-refs{background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:10px;padding:1.1rem 1.4rem;margin:2rem 0;font-size:.88rem}
.tdmd-partner-refs h2{font-size:1.2rem;margin-top:0}
.tdmd-partner-refs ol{margin:0;padding-left:1.2rem}
.tdmd-partner-refs li{margin-bottom:.5rem;color:var(--tdmd-muted);word-break:break-word}
.tdmd-partner-refs a{color:var(--tdmd-teal);text-decoration:none;word-break:break-all}
`;

export default function TribalHealthAlaskaPartnership() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <main className="tdmd-partner-wrap">
        <div className="tdmd-partner-container">
          <nav className="tdmd-partner-breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span>›</span>
            <a href="/partners/">Partners</a>
            <span>›</span>
            <span aria-current="page">Alaska Tribal Health</span>
          </nav>

          <header className="tdmd-partner-header">
            <span className="tdmd-partner-badge">Partnership Brief · Alaska</span>
            <h1 className="tdmd-partner-title">
              A Complementary Adult Primary and Urgent-Care Telehealth Layer for Alaska Tribal Health Partners
            </h1>
            <p className="tdmd-partner-sub">
              TeleDirectMD is a board-certified, physician-founded telemedicine practice licensed in Alaska and 40
              additional states. This brief lays out the case for a partnership with Alaska Native Tribal Health
              Consortium, regional health corporations, and village clinic systems, focused on where an adult primary
              and urgent-care telehealth layer complements, rather than duplicates, the existing Community Health Aide
              Program and specialty-referral pathways.
            </p>
            <div className="tdmd-partner-meta">
              Prepared by Parth Bhavsar, MD, Founder and Medical Director, TeleDirectMD · August 13, 2026
            </div>
          </header>

          <section className="tdmd-partner-body">
            <h2>The Opportunity</h2>
            <p>
              Alaska has the strongest published evidence for rural telemedicine in the United States. The 2022{' '}
              <em>Lancet Global Health</em> Hearing Norton Sound cluster-randomized trial, conducted in 15 Bering Strait
              communities in partnership with Norton Sound Health Corporation, demonstrated that a telemedicine
              specialty-referral pathway more than doubled follow-up rates after school hearing screening, with a
              time-to-follow-up 17.6 times faster than standard primary-care referral (95% CI 6.8 to 45.3, p=0.002).
              <sup><a href="#pref-1">[1]</a></sup> The mixed-methods follow-up identified the human factors that
              distinguished high-performing communities from low-performing ones: clinic capacity, personnel ownership
              and engagement, communication, and awareness.<sup><a href="#pref-2">[2]</a></sup>
            </p>
            <p>
              That evidence and the operational experience behind it point at a specific gap that TeleDirectMD is built
              to fill: adult primary and urgent care that is available on demand, does not require a village clinic
              slot, and can hand off to the regional hub or a specialist as needed. This is not the specialty tier, and
              it is not a substitute for the Community Health Aide or Practitioner (CHA/P) layer, both of which are
              foundational to Alaska rural care.<sup><a href="#pref-3">[3]</a></sup> It is the on-demand primary and
              urgent-care layer alongside them.
            </p>

            <h2>About TeleDirectMD</h2>
            <div className="tdmd-partner-card">
              <h3>Practice at a glance</h3>
              <ul>
                <li>
                  Founded and led by Parth Bhavsar, MD, a board-certified family medicine physician (ABFM)
                </li>
                <li>Licensed in Alaska (license 257965) and 40 additional states plus D.C.</li>
                <li>Adult primary and urgent-care scope; no controlled substances; no pediatrics</li>
                <li>
                  In-network on the secondary lane with BlueCross BlueShield plans, Aetna, and UnitedHealthcare across
                  multiple states; retail cash-pay lane available for the uninsured and underinsured
                </li>
                <li>
                  Stack: Elation EHR, JotForm intake, Acuity scheduling, Keragon automation, secure video and
                  store-and-forward workflows
                </li>
                <li>
                  Compliance posture aligned with state medical board and HIPAA requirements. Evidence base for
                  clinical protocols documented in the companion{' '}
                  <a href="/clinical-evidence/rural-telemedicine-alaska/">
                    Rural Telemedicine Evidence Review for Alaska
                  </a>
                </li>
              </ul>
            </div>

            <h2>Where TeleDirectMD Complements the Existing System</h2>
            <div className="tdmd-partner-table-wrap">
              <table className="tdmd-partner-table">
                <thead>
                  <tr>
                    <th>Care need</th>
                    <th>Current pathway</th>
                    <th>TeleDirectMD role</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Alaska Native beneficiary specialty referral</td>
                    <td>CHA/P to regional hub to specialty, as in Norton Sound and other regions</td>
                    <td>None. This is the tribal system's core function.</td>
                  </tr>
                  <tr>
                    <td>Non-beneficiary adult urgent care in a village or on the road system</td>
                    <td>Community clinic if available, ED if not</td>
                    <td>On-demand adult primary and urgent-care visits, refills, referral packaging</td>
                  </tr>
                  <tr>
                    <td>After-hours coverage for stable chronic-disease patients</td>
                    <td>Variable; often ED default</td>
                    <td>Same-day virtual visits, script fulfillment, follow-up coordination</td>
                  </tr>
                  <tr>
                    <td>Adult chronic disease titration (HTN, T2DM, hyperlipidemia)</td>
                    <td>PCP visits at hub or itinerant clinicians</td>
                    <td>Between-visit titration, medication management, education</td>
                  </tr>
                  <tr>
                    <td>Smoke-season respiratory step-up</td>
                    <td>CHA/P, itinerant clinicians, regional hub</td>
                    <td>
                      Rescue-inhaler refills, action-plan review, prednisone burst per plan, referral to hub when
                      indicated
                    </td>
                  </tr>
                  <tr>
                    <td>Employer benefits for regional corporations (non-beneficiary staff)</td>
                    <td>Commercial plans, sometimes no on-demand telehealth</td>
                    <td>
                      Zero-employer-cost telehealth benefit for non-beneficiary employees; in-network options
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Proposed Partnership Models</h2>
            <p>
              We are open to several partnership structures. The specific model depends on the corporation's priorities
              and its existing telehealth infrastructure. Three initial models we would like to discuss:
            </p>

            <h3>Model 1: Non-Beneficiary Adult Urgent-Care Layer</h3>
            <p>
              TeleDirectMD provides on-demand adult primary and urgent-care telehealth for non-beneficiary residents in
              the region, staff of regional corporations, and visitors. This preserves tribal capacity for beneficiary
              care while extending an option to the broader community. No integration required initially; a warm
              handoff to the hub for cases outside our scope.
            </p>

            <h3>Model 2: After-Hours Adult Coverage Partnership</h3>
            <p>
              TeleDirectMD provides after-hours coverage for stable adult patients (chronic-disease refills, uncomplicated
              acute concerns, medication questions) with same-day escalation protocols to the corporation's on-call
              physician team. This model requires clear protocols and a shared communication channel, but no full EHR
              integration.
            </p>

            <h3>Model 3: Referral-Packaging Support</h3>
            <p>
              For adult patients where the corporation identifies capacity constraints in primary-care throughput,
              TeleDirectMD provides pre-referral evaluation, workup ordering, and referral packaging to the corporation's
              specialists. This mirrors the Hearing Norton Sound design in spirit: use a shared electronic record and a
              defined async pathway so patients are not lost between steps.
            </p>

            <h2>Design Principles</h2>
            <ol>
              <li>
                <strong>Complement, do not compete.</strong> The tribal health system is the primary care system for its
                beneficiaries. TeleDirectMD is an additional adult primary and urgent-care option, not a replacement.
              </li>
              <li>
                <strong>Respect the CHA/P layer.</strong> Community Health Aides are the first point of contact in most
                villages, and any partnership design should route through them rather than around them.
              </li>
              <li>
                <strong>Written protocols, not ad hoc referrals.</strong> The Hearing Norton Sound evidence points at
                clinic capacity, personnel ownership, communication, and awareness as the difference between
                high-performing and low-performing telemedicine programs. Written protocols and defined communication
                paths are non-negotiable.
              </li>
              <li>
                <strong>Data sharing with consent.</strong> HIPAA-compliant data flows, patient consent for cross-system
                sharing, and clear documentation lineage.
              </li>
              <li>
                <strong>Cultural safety.</strong> Our clinicians work with the region's cultural context, not around it.
                We are open to protocols, guidance, or training that the corporation determines necessary for its
                communities.
              </li>
            </ol>

            <h2>What We Bring</h2>
            <ul>
              <li>Alaska-licensed physician coverage available on demand</li>
              <li>
                Complete EHR, intake, and scheduling infrastructure already operational (no capital investment required
                on the partner's side)
              </li>
              <li>
                Documented compliance posture (state medical board, HIPAA, informed consent, prescribing protocols)
              </li>
              <li>
                Evidence-based clinical protocols documented in the{' '}
                <a href="/clinical-evidence/rural-telemedicine-alaska/">Rural Telemedicine Evidence Review for Alaska</a>
              </li>
              <li>Willingness to co-design the partnership around the corporation's operational priorities</li>
            </ul>

            <div className="tdmd-partner-cta">
              <h3>Next Step</h3>
              <p>
                If a partnership conversation is of interest, please contact Parth Bhavsar, MD directly at{' '}
                <a href="mailto:contact@teledirectmd.com">contact@teledirectmd.com</a>. We are happy to travel to Anchorage
                or a regional hub for an initial conversation, or to hold a video meeting at your preference.
              </p>
            </div>

            <div className="tdmd-partner-refs">
              <h2>References</h2>
              <ol>
                <li id="pref-1">
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
                <li id="pref-2">
                  Robler SK, Inglis-Jenson M, Gallo JJ, et al. Mobile Health School Screening and Telemedicine Referral
                  to Improve Access to Specialty Care in Rural Alaska: Integrating Mixed Methods Data to Contextualize
                  Trial Outcomes. <em>Ear Hear</em>. 2023;44(5):1271-1281.{' '}
                  <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10583927/" target="_blank" rel="noopener">
                    PMC10583927
                  </a>
                </li>
                <li id="pref-3">
                  Alaska Native Tribal Health Consortium. Community Health Aide Program.{' '}
                  <a
                    href="https://anthc.org/what-we-do/community-health-services/community-health-aide-program/"
                    target="_blank"
                    rel="noopener"
                  >
                    anthc.org
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
