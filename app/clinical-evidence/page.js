export const metadata = {
  title: 'Clinical Evidence Library | TeleDirectMD',
  description:
    'Physician-authored evidence reviews from TeleDirectMD founder Parth Bhavsar, MD. Peer-reviewed trials and systematic reviews with adoption-readiness analysis for specific patient populations and clinical settings.',
  alternates: { canonical: 'https://teledirectmd.com/clinical-evidence' },
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
    title: 'Clinical Evidence Library | TeleDirectMD',
    description:
      'Physician-authored evidence reviews of peer-reviewed trials and systematic reviews with adoption-readiness analysis.',
    url: 'https://teledirectmd.com/clinical-evidence',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clinical Evidence Library | TeleDirectMD',
    description:
      'Physician-authored evidence reviews with adoption-readiness analysis.',
  },
};

const REVIEWS = [
  {
    slug: 'rural-telemedicine-alaska',
    title: 'Rural Telemedicine Evidence Review for Alaska',
    description:
      'Peer-reviewed randomized trials and systematic reviews from NEJM, Lancet family, BMJ, and EClinicalMedicine on rural telemedicine efficacy and wildfire-smoke respiratory intervention. Includes cross-journal comparison, effect-size forest plot, and Alaska adoption-readiness matrix.',
    published: '2026-08-13',
    reviewed: '2026-08-13',
    focus: 'Alaska rural health',
    trialsCount: 9,
    journals: ['NEJM', 'Lancet', 'BMJ', 'EClinicalMedicine'],
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://teledirectmd.com/clinical-evidence#breadcrumbs',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://teledirectmd.com/' },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Clinical Evidence',
          item: 'https://teledirectmd.com/clinical-evidence/',
        },
      ],
    },
    {
      '@type': 'CollectionPage',
      '@id': 'https://teledirectmd.com/clinical-evidence#webpage',
      url: 'https://teledirectmd.com/clinical-evidence/',
      name: 'Clinical Evidence Library',
      description: metadata.description,
      inLanguage: 'en-US',
      isPartOf: { '@id': 'https://teledirectmd.com/#website' },
      breadcrumb: { '@id': 'https://teledirectmd.com/clinical-evidence#breadcrumbs' },
      author: { '@id': 'https://teledirectmd.com/about#physician' },
      about: { '@id': 'https://teledirectmd.com/#organization' },
      hasPart: REVIEWS.map((r) => ({
        '@type': 'ScholarlyArticle',
        headline: r.title,
        url: `https://teledirectmd.com/clinical-evidence/${r.slug}/`,
        author: { '@id': 'https://teledirectmd.com/about#physician' },
        datePublished: r.published,
        dateModified: r.reviewed,
      })),
    },
  ],
};

const styles = `
:root{--tdmd-teal:#006B73;--tdmd-teal-dark:#003E52;--tdmd-accent:#C4551E;--tdmd-bg:#F7F9FA;--tdmd-card:#FFFFFF;--tdmd-border:#C2E0E5;--tdmd-text:#0A2438;--tdmd-muted:#456676}
.tdmd-cehub-wrap{background:var(--tdmd-bg);color:var(--tdmd-text);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;line-height:1.7;font-size:17px;padding:1rem 0 3rem}
.tdmd-cehub-container{max-width:1080px;margin:0 auto;padding:0 1.25rem}
@media (max-width:480px){.tdmd-cehub-container{padding:0 .9rem}.tdmd-cehub-wrap{font-size:16px}}
.tdmd-cehub-breadcrumb{font-size:.85rem;color:var(--tdmd-muted);padding:1rem 0}
.tdmd-cehub-breadcrumb a{color:var(--tdmd-teal);text-decoration:none}
.tdmd-cehub-breadcrumb span{margin:0 .4rem;color:#B0BEC5}
.tdmd-cehub-hero{background:linear-gradient(135deg,#003E52 0%,#006B73 100%);color:#fff;border-radius:14px;padding:2rem 2.2rem;margin:0 0 1.8rem;box-shadow:0 3px 12px rgba(0,62,82,0.15)}
@media (max-width:480px){.tdmd-cehub-hero{padding:1.4rem 1.3rem}}
.tdmd-cehub-badge{display:inline-block;background:rgba(255,255,255,0.15);color:#fff;padding:.3rem .8rem;border-radius:999px;font-size:.72rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;margin-bottom:.9rem}
.tdmd-cehub-title{font-size:2.1rem;font-weight:700;margin:.2rem 0 .6rem;line-height:1.15;font-family:Georgia,serif}
@media (max-width:480px){.tdmd-cehub-title{font-size:1.6rem}}
.tdmd-cehub-sub{font-size:1.05rem;max-width:780px;margin:0;color:#E4F3F5}
.tdmd-cehub-meta{margin-top:1.1rem;color:#B8D8DE;font-size:.88rem}
.tdmd-cehub-meta strong{color:#FFFFFF}
.tdmd-cehub-section{margin:2rem 0 1rem}
.tdmd-cehub-section h2{font-size:1.35rem;color:var(--tdmd-teal-dark);margin:0 0 .5rem;padding-bottom:.4rem;border-bottom:2px solid var(--tdmd-border);display:flex;align-items:center;gap:.55rem}
.tdmd-cehub-section h2 svg{width:20px;height:20px;color:var(--tdmd-teal)}
.tdmd-cehub-section p{margin:.6rem 0 0;color:var(--tdmd-muted)}
.tdmd-cehub-grid{display:grid;grid-template-columns:1fr;gap:1rem;margin:1.2rem 0}
.tdmd-cehub-card{background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-left:5px solid var(--tdmd-teal);border-radius:10px;padding:1.2rem 1.4rem;text-decoration:none;color:inherit;display:block;transition:box-shadow .2s ease,transform .1s ease}
.tdmd-cehub-card:hover{box-shadow:0 4px 14px rgba(0,62,82,0.12);transform:translateY(-1px)}
.tdmd-cehub-card h3{margin:0 0 .5rem;font-size:1.15rem;color:var(--tdmd-teal-dark)}
.tdmd-cehub-card-desc{font-size:.94rem;color:var(--tdmd-text);margin:0 0 .8rem;line-height:1.55}
.tdmd-cehub-card-meta{display:flex;flex-wrap:wrap;gap:.85rem;font-size:.8rem;color:var(--tdmd-muted);padding-top:.65rem;border-top:1px solid var(--tdmd-border)}
.tdmd-cehub-card-meta span{display:inline-flex;align-items:center;gap:.3rem}
.tdmd-cehub-card-meta strong{color:var(--tdmd-teal-dark);font-weight:700}
.tdmd-cehub-tags{display:flex;flex-wrap:wrap;gap:.35rem;margin:.5rem 0 .3rem}
.tdmd-cehub-tag{background:#E6F0F2;color:var(--tdmd-teal-dark);padding:.15rem .55rem;border-radius:4px;font-size:.72rem;font-weight:600;letter-spacing:.02em}
.tdmd-cehub-cta{margin-top:.9rem;font-weight:600;color:var(--tdmd-teal);font-size:.9rem;display:inline-flex;align-items:center;gap:.35rem}
.tdmd-cehub-cta svg{width:14px;height:14px;transition:transform .15s ease}
.tdmd-cehub-card:hover .tdmd-cehub-cta svg{transform:translateX(3px)}
.tdmd-cehub-about{background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:10px;padding:1.3rem 1.5rem;margin:1.5rem 0;font-size:.95rem}
.tdmd-cehub-about h2{margin-top:0;font-size:1.15rem}
.tdmd-cehub-about ul{margin:.6rem 0 .3rem;padding-left:1.4rem;color:var(--tdmd-text)}
.tdmd-cehub-about li{margin-bottom:.4rem}
.tdmd-cehub-about a{color:var(--tdmd-teal);text-decoration:none}
.tdmd-cehub-methods{background:linear-gradient(135deg,#F7F9FA 0%,#E6F0F2 100%);border:1px solid var(--tdmd-border);border-radius:10px;padding:1.2rem 1.4rem;margin:1.5rem 0}
.tdmd-cehub-methods h2{margin-top:0;font-size:1.15rem;color:var(--tdmd-teal-dark)}
.tdmd-cehub-methods p{color:var(--tdmd-text);margin:.5rem 0}
`;

function formatDate(iso) {
  const d = new Date(iso + 'T00:00:00');
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function ClinicalEvidenceHub() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <main className="tdmd-cehub-wrap">
        <div className="tdmd-cehub-container">
          <nav className="tdmd-cehub-breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span>›</span>
            <span aria-current="page">Clinical Evidence</span>
          </nav>

          <header className="tdmd-cehub-hero">
            <span className="tdmd-cehub-badge">Clinical Evidence Library</span>
            <h1 className="tdmd-cehub-title">Physician-Authored Evidence Reviews</h1>
            <p className="tdmd-cehub-sub">
              Structured reviews of peer-reviewed randomized trials and systematic reviews, mapped to adoption
              readiness for specific patient populations and clinical settings. Written by TeleDirectMD founder Parth
              Bhavsar, MD, board-certified in family medicine.
            </p>
            <div className="tdmd-cehub-meta">
              Editor: <strong>Parth Bhavsar, MD</strong> · Family Medicine · TeleDirectMD
            </div>
          </header>

          <section className="tdmd-cehub-section">
            <h2>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
              Current reviews
            </h2>

            <div className="tdmd-cehub-grid">
              {REVIEWS.map((review) => (
                <a key={review.slug} href={`/clinical-evidence/${review.slug}/`} className="tdmd-cehub-card">
                  <h3>{review.title}</h3>
                  <p className="tdmd-cehub-card-desc">{review.description}</p>
                  <div className="tdmd-cehub-tags">
                    {review.journals.map((j) => (
                      <span key={j} className="tdmd-cehub-tag">{j}</span>
                    ))}
                  </div>
                  <div className="tdmd-cehub-card-meta">
                    <span><strong>Focus:</strong> {review.focus}</span>
                    <span><strong>Trials analyzed:</strong> {review.trialsCount}</span>
                    <span><strong>Published:</strong> {formatDate(review.published)}</span>
                    <span><strong>Last reviewed:</strong> {formatDate(review.reviewed)}</span>
                  </div>
                  <span className="tdmd-cehub-cta">
                    Read review
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </span>
                </a>
              ))}
            </div>
          </section>

          <div className="tdmd-cehub-methods">
            <h2>Editorial standards</h2>
            <p>
              Every review is structured around three constraints. First, primary sources take priority; secondary
              summaries are avoided unless the primary source is not reachable. Second, effect sizes and confidence
              intervals are documented as reported by the original trial or systematic review, not summarized as
              directional adjectives. Third, adoption-readiness analysis distinguishes between what the evidence
              supports for the general case, what it supports for a specific population, and what remains
              evidence-informed rather than trial-proven.
            </p>
            <p>
              Reviews are updated when new headline trials are published in the target journals or when clinical
              guidance from a specialty society, the CDC, or the FDA changes materially. Corrections or additional
              citation suggestions may be sent to{' '}
              <a href="mailto:contact@teledirectmd.com">contact@teledirectmd.com</a>.
            </p>
          </div>

          <div className="tdmd-cehub-about">
            <h2>About this section</h2>
            <p>
              The Clinical Evidence library is separate from the{' '}
              <a href="/health-guides/">Health Guides</a> library. Health Guides are patient-facing, editorial-neutral,
              and follow the standards described in the{' '}
              <a href="/health-guides/editorial-standards/">Editorial Standards</a>. The Clinical Evidence library is
              physician-facing, written for clinicians, health-system partners, and readers who want the underlying
              trial data behind clinical recommendations.
            </p>
            <ul>
              <li>Editor and author: <a href="/about">Parth Bhavsar, MD</a> (board-certified family medicine, NPI 1104323203)</li>
              <li>Publisher: TeleDirectMD, a physician-led telemedicine practice licensed in Alaska and 40 additional states plus D.C.</li>
              <li>Related work: <a href="/partners/tribal-health-alaska/">Alaska Tribal Health Partnership Brief</a></li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
