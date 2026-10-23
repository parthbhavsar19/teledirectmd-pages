export const metadata = {
  title: 'Clinical Partnerships | Physician Video Visits for Test-to-Treat and Telehealth Platforms | TeleDirectMD',
  description:
    'TeleDirectMD partners with at-home test makers, telehealth platforms and employers to provide live video visits with a board-certified physician in 40+ states plus DC. MD and DO only, LegitScript-certified, flat per-visit pricing.',
  alternates: { canonical: 'https://teledirectmd.com/partners' },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  authors: [{ name: 'Parth Bhavsar, MD' }],
  openGraph: {
    type: 'website',
    siteName: 'TeleDirectMD',
    locale: 'en_US',
    title: 'TeleDirectMD Clinical Partnerships',
    description:
      'From a positive home test to a physician by video. Physician-only clinical partner for test makers, telehealth platforms and employers in 40+ states plus DC.',
    url: 'https://teledirectmd.com/partners',
    images: ['https://teledirectmd.com/images/tdmd-og-navy.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TeleDirectMD Clinical Partnerships',
    description:
      'Physician-only clinical partner for at-home test makers, telehealth platforms and employers in 40+ states plus DC.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://teledirectmd.com/partners#breadcrumbs',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://teledirectmd.com/' },
        { '@type': 'ListItem', position: 2, name: 'Partners', item: 'https://teledirectmd.com/partners/' },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': 'https://teledirectmd.com/partners#webpage',
      url: 'https://teledirectmd.com/partners/',
      name: 'TeleDirectMD Clinical Partnerships',
      description:
        'Physician-only clinical partner for at-home test makers, telehealth platforms and employers in 40+ states plus DC.',
      inLanguage: 'en-US',
      breadcrumb: { '@id': 'https://teledirectmd.com/partners#breadcrumbs' },
      isPartOf: { '@id': 'https://teledirectmd.com/#website' },
      about: { '@id': 'https://teledirectmd.com/#organization' },
      datePublished: '2026-10-23',
      dateModified: '2026-10-23',
    },
    {
      '@type': 'Service',
      '@id': 'https://teledirectmd.com/partners#service',
      serviceType: 'Clinical partnership: physician video visits',
      provider: { '@id': 'https://teledirectmd.com/#organization' },
      areaServed: 'United States',
      description:
        'Live video visits with a board-certified physician for partner companies, including test-to-treat visits after at-home tests, urgent care coverage for telehealth platforms, state coverage, refill bridge visits and employer virtual care. Adults 18+. MD and DO only.',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://teledirectmd.com/partners#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do you offer async or questionnaire-only visits?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Every TeleDirectMD visit is a live video visit with a board-certified physician.',
          },
        },
        {
          '@type': 'Question',
          name: 'TeleDirectMD also sees patients directly. Will you market to our customers?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Patients seen through a partner program stay with that partner. We do not market TeleDirectMD services to them, and partner records are kept separate under a business associate agreement.',
          },
        },
        {
          '@type': 'Question',
          name: 'How are partner visits priced?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Flat per-visit or per-hour fees set in a written agreement. Fees are never tied to prescriptions, products or referrals.',
          },
        },
      ],
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
.tdmd-partner-actions{display:flex;flex-wrap:wrap;gap:.75rem;margin-top:1rem}
.tdmd-partner-btn{display:inline-block;background:var(--tdmd-teal);color:#fff;text-decoration:none;font-weight:600;padding:.7rem 1.2rem;border-radius:8px}
.tdmd-partner-btn.alt{background:transparent;color:var(--tdmd-teal);border:1px solid var(--tdmd-teal)}
.tdmd-partner-facts{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:.75rem;margin:1.5rem 0 .5rem}
.tdmd-partner-fact{background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:10px;padding:.9rem 1rem}
.tdmd-partner-fact b{display:block;color:var(--tdmd-teal-dark);font-size:1.15rem}
.tdmd-partner-fact span{color:var(--tdmd-muted);font-size:.9rem}
.tdmd-partner-body h2{font-size:1.4rem;color:var(--tdmd-teal-dark);margin-top:2rem;margin-bottom:.7rem;padding-bottom:.4rem;border-bottom:2px solid var(--tdmd-border)}
.tdmd-partner-body h3{font-size:1.1rem;color:var(--tdmd-teal-dark);margin-top:1.4rem;margin-bottom:.4rem}
.tdmd-partner-body p{margin:0 0 1rem}
.tdmd-partner-body ul,.tdmd-partner-body ol{margin:0 0 1rem;padding-left:1.4rem}
.tdmd-partner-body li{margin-bottom:.4rem}
.tdmd-partner-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1rem;margin:1rem 0}
.tdmd-partner-card{background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:10px;padding:1.1rem 1.3rem}
.tdmd-partner-card h3{margin-top:0}
.tdmd-partner-card p:last-child,.tdmd-partner-card ul:last-child{margin-bottom:0}
.tdmd-partner-cta{background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-left:4px solid var(--tdmd-teal);border-radius:8px;padding:1.2rem 1.4rem;margin:1.5rem 0}
.tdmd-partner-cta h3{margin-top:0;color:var(--tdmd-teal-dark)}
.tdmd-partner-cta a{color:var(--tdmd-teal);font-weight:600}
.tdmd-partner-faq details{background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:8px;margin:.6rem 0;padding:.2rem 1.1rem}
.tdmd-partner-faq summary{cursor:pointer;font-weight:600;color:var(--tdmd-teal-dark);padding:.7rem 0}
.tdmd-partner-faq details p{margin:0 0 .9rem}
.tdmd-partner-fine{font-size:.85rem;color:var(--tdmd-muted);margin-top:2rem}
`;

export default function PartnersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <main className="tdmd-partner-wrap">
        <div className="tdmd-partner-container">
          <nav className="tdmd-partner-breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span>›</span>
            <span aria-current="page">Partners</span>
          </nav>

          <header className="tdmd-partner-header">
            <span className="tdmd-partner-badge">Clinical partnerships</span>
            <h1 className="tdmd-partner-title">
              From a positive home test to a physician by video, in 40+ states
            </h1>
            <p className="tdmd-partner-sub">
              TeleDirectMD is a physician-only telehealth practice. At-home test makers, telehealth platforms and
              employers work with us so their customers can see a board-certified physician by live video and leave
              with a treatment plan, under the partner&apos;s brand or ours.
            </p>
            <div className="tdmd-partner-actions">
              <a className="tdmd-partner-btn" href="https://form.jotform.com/262775281673063" target="_blank" rel="noopener">
                Start a partnership conversation
              </a>
              <a className="tdmd-partner-btn alt" href="mailto:contact@teledirectmd.com?subject=Partnership%20inquiry">
                contact@teledirectmd.com
              </a>
            </div>
            <div className="tdmd-partner-facts">
              <div className="tdmd-partner-fact"><b>MD and DO only</b><span>No NPs or PAs</span></div>
              <div className="tdmd-partner-fact"><b>40+ states</b><span>Plus Washington, D.C.</span></div>
              <div className="tdmd-partner-fact"><b>Live video, every visit</b><span>No questionnaire-only prescribing</span></div>
              <div className="tdmd-partner-fact"><b>LegitScript certified</b><span>Telehealth prescriber</span></div>
            </div>
          </header>

          <section className="tdmd-partner-body">
            <h2>Ways to work with us</h2>
            <div className="tdmd-partner-grid">
              <div className="tdmd-partner-card">
                <h3>Test-to-treat visits</h3>
                <p>
                  Your customer tests positive at home for a UTI, flu, COVID, BV, a yeast infection, chlamydia or
                  trichomoniasis, then books a video visit with a physician (same-day when available) who treats
                  according to current guidelines.
                </p>
              </div>
              <div className="tdmd-partner-card">
                <h3>Urgent care coverage for platforms</h3>
                <p>
                  Live video visits for adult urgent care, skin and sexual health on your platform and under your
                  brand, including evenings and weekends.
                </p>
              </div>
              <div className="tdmd-partner-card">
                <h3>Coverage in states where you&apos;re short</h3>
                <p>
                  Physician video visits in states where you lack clinicians, or where state rules call for a live
                  visit rather than a questionnaire.
                </p>
              </div>
              <div className="tdmd-partner-card">
                <h3>Refill bridge visits</h3>
                <p>
                  Up to 90-day refills of established medications for blood pressure, cholesterol, thyroid, asthma,
                  GERD, migraine and contraception.
                </p>
              </div>
              <div className="tdmd-partner-card">
                <h3>Employer and benefits virtual care</h3>
                <p>
                  Flat-fee physician visits for employee populations. See our <a href="/employers/">employer</a> and{' '}
                  <a href="/employers/brokers/">broker</a> programs.
                </p>
              </div>
            </div>

            <h2>Clinical scope</h2>
            <div className="tdmd-partner-grid">
              <div className="tdmd-partner-card">
                <h3>What we treat</h3>
                <ul>
                  <li>Uncomplicated UTI in non-pregnant adult women</li>
                  <li>Flu, COVID-19, sore throat and strep, sinus, ear and eye infections</li>
                  <li>BV, yeast infections, chlamydia, trichomoniasis, genital herpes, DoxyPEP</li>
                  <li>Acne, rosacea, eczema and other skin conditions; hair loss</li>
                  <li>Travel medicine and refills of established medications</li>
                </ul>
                <p>
                  Full list: <a href="/what-we-treat/">What We Treat</a>.
                </p>
              </div>
              <div className="tdmd-partner-card">
                <h3>What we don&apos;t do</h3>
                <ul>
                  <li>Controlled substances (Schedule II to V)</li>
                  <li>GLP-1s or other weight-loss medications</li>
                  <li>IV or IM medications. Gonorrhea and syphilis positives are referred for in-person treatment.</li>
                  <li>Pediatrics, male UTIs, or UTIs in pregnancy. We do not treat male UTIs.</li>
                  <li>Async or questionnaire-only prescribing</li>
                </ul>
              </div>
            </div>

            <h2>Built so partners keep their patients</h2>
            <p>
              TeleDirectMD also sees patients directly. Partner programs are kept separate from that side of the
              practice, and these commitments go into every agreement:
            </p>
            <ol>
              <li>
                <strong>Your patients stay yours.</strong> Patients seen through your program belong to your program.
              </li>
              <li>
                <strong>No marketing to your customers.</strong> We never solicit them for TeleDirectMD&apos;s own
                services.
              </li>
              <li>
                <strong>Separate records under a BAA.</strong> Partner visits are documented in our EHR under a business
                associate agreement, with clear data ownership terms.
              </li>
            </ol>

            <h2>Compliance and clinical independence</h2>
            <ul>
              <li>LegitScript-certified telehealth prescriber; HIPAA-compliant stack with Elation Health EHR.</li>
              <li>
                Flat per-visit or per-hour fees in a written agreement, never tied to prescriptions, products or
                referrals.
              </li>
              <li>Prescribing decisions rest with the treating physician, including the decision to refer in person.</li>
              <li>Licensure follows the patient&apos;s location at the time of the visit.</li>
            </ul>

            <h2>Getting started</h2>
            <ol>
              <li>A short scoping conversation: tests or services, states and expected volume.</li>
              <li>BAA and services agreement with flat per-visit fees.</li>
              <li>A pilot in your priority states, then expansion.</li>
            </ol>

            <div className="tdmd-partner-cta">
              <h3>Talk with Dr. Bhavsar</h3>
              <p>
                Parth Bhavsar, MD, board-certified in family medicine, founder and medical director. Email{' '}
                <a href="mailto:contact@teledirectmd.com?subject=Partnership%20inquiry">contact@teledirectmd.com</a>, call
                678-956-1855, or use the{' '}
                <a href="https://form.jotform.com/262775281673063" target="_blank" rel="noopener">
                  partner inquiry form
                </a>
                . We reply within one business day.
              </p>
            </div>

            <h2>Partner FAQ</h2>
            <div className="tdmd-partner-faq">
              <details>
                <summary>Do you offer async or questionnaire-only visits?</summary>
                <p>No. Every TeleDirectMD visit is a live video visit with a board-certified physician.</p>
              </details>
              <details>
                <summary>TeleDirectMD also sees patients directly. Will you market to our customers?</summary>
                <p>
                  No. Patients seen through a partner program stay with that partner. We do not market TeleDirectMD
                  services to them, and partner records are kept separate under a business associate agreement.
                </p>
              </details>
              <details>
                <summary>How are partner visits priced?</summary>
                <p>
                  Flat per-visit or per-hour fees set in a written agreement. Fees are never tied to prescriptions,
                  products or referrals.
                </p>
              </details>
              <details>
                <summary>Can you work under our brand?</summary>
                <p>
                  Yes. The patient can see your brand while the clinical relationship is with TeleDirectMD&apos;s
                  physician.
                </p>
              </details>
              <details>
                <summary>How much volume can you take?</summary>
                <p>
                  Capacity is agreed per partner before launch. Our physician roster is expanding, and we scope pilots
                  so turnaround commitments are met from day one.
                </p>
              </details>
            </div>

            <p className="tdmd-partner-fine">
              TeleDirectMD is operated by Mahavir Health Services LLC. Services are available to adults 18+ located in
              states we serve and are subject to applicable law. All treatment decisions are made by the treating
              physician based on clinical appropriateness; no diagnosis, prescription or outcome is guaranteed.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
