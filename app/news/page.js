import { getAggregateRating, getReviewBlock } from '../../lib/review-schema';
import FaqAccordion from '../components/FaqAccordion';

export const metadata = {
  title: 'Telemedicine News & Media Coverage | TeleDirectMD',
  description:
    'TeleDirectMD news, announcements, and media coverage. Dr. Parth Bhavsar, MD has been quoted as a medical expert in TIME, Newsweek, HuffPost, U.S. News, Fox News Digital, NY Post, and 21+ national publications. Latest telehealth industry updates.',
  alternates: { canonical: 'https://teledirectmd.com/news' },
  robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  authors: [{ name: 'TeleDirectMD' }],
  openGraph: {
    type: 'website',
    siteName: 'TeleDirectMD',
    locale: 'en_US',
    title: 'Telemedicine News & Media Coverage | TeleDirectMD',
    description:
      'TeleDirectMD announcements and Dr. Bhavsar media coverage. Featured in TIME, Newsweek, HuffPost, U.S. News, Fox News Digital, NY Post, and more.',
    url: 'https://teledirectmd.com/news',
  },
};

const BASE_URL = 'https://teledirectmd.com';

// Published news articles — the only confirmed child is the Aetna California announcement
const NEWS_ARTICLES = [
  {
    slug: 'aetna-california-may-2026',
    title: 'TeleDirectMD Now In-Network with Aetna in California',
    date: '2026-05-11',
    dateDisplay: 'May 11, 2026',
    category: 'Announcement',
    summary:
      'TeleDirectMD is now in-network with Aetna commercial plans in California, effective April 30, 2026. Aetna members in California can now book same-day telehealth video visits with Dr. Parth Bhavsar, MD, with their Aetna plan accepted in-network across Los Angeles, San Francisco, San Diego, San Jose, Sacramento, and all other California markets.',
  },
];

// Media mentions for editorial context (no fabricated quotes)
const MEDIA_MENTIONS = [
  { outlet: 'TIME', topic: 'Cold & Flu Season Telehealth', url: 'https://time.com' },
  { outlet: 'Newsweek', topic: 'Online Urgent Care Pricing', url: 'https://newsweek.com' },
  { outlet: 'HuffPost', topic: 'Telehealth Access & Affordability', url: 'https://huffpost.com' },
  { outlet: 'U.S. News & World Report', topic: 'Best Telehealth Services', url: 'https://health.usnews.com' },
  { outlet: 'Fox News Digital', topic: 'Urgent Care Alternatives', url: 'https://foxnews.com' },
  { outlet: 'NY Post', topic: 'Cost of Medical Care', url: 'https://nypost.com' },
  { outlet: 'Daily Mail', topic: 'Online Doctor Visits', url: 'https://dailymail.co.uk' },
  { outlet: 'Healthline', topic: 'Telemedicine for Infections', url: 'https://healthline.com' },
  { outlet: 'Yahoo Health', topic: 'Telehealth Trends', url: 'https://yahoo.com/health' },
];

const FAQS = [
  {
    question: 'Does TeleDirectMD publish news about its services?',
    answer:
      'Yes. TeleDirectMD publishes service announcements, coverage expansions, and insurance partnership news at teledirectmd.com/news. The most recent announcement covers the Aetna California in-network addition (May 2026). Additional announcements will be published as new insurance contracts and state licenses are added.',
  },
  {
    question: 'Where has Dr. Parth Bhavsar, MD been quoted as a medical expert?',
    answer:
      'Dr. Bhavsar has been cited as a medical expert in TIME, Newsweek, HuffPost, U.S. News & World Report, Fox News Digital, NY Post, Daily Mail, Healthline, Yahoo Health, and more than 21 national publications. His commentary focuses on urgent care, telehealth access, cost-effective medical care, infectious disease, and men\'s health. See the media mentions page for a curated list with source links.',
  },
  {
    question: 'What was the Aetna California announcement?',
    answer:
      'On May 11, 2026, TeleDirectMD announced that it is now in-network with Aetna commercial plans in California, effective April 30, 2026. This means Aetna members with California commercial plans can book a same-day telehealth video visit with Dr. Bhavsar with their insurance accepted in-network. The $79 self-pay option remains available for non-Aetna patients in California.',
  },
  {
    question: 'Is TeleDirectMD expanding to new states?',
    answer:
      'Yes. TeleDirectMD is actively pursuing additional state medical licenses and insurance contracts. The practice currently serves 42 states + Washington DC. Expansions to additional states will be announced on this news page when they are completed. Patients in currently unserved states (AK, HI, NY, MA, RI, VT, NM, OR, AR) can check back periodically or contact the practice directly for an update on their state.',
  },
  {
    question: 'What is TeleDirectMD\'s position on telehealth regulation?',
    answer:
      'TeleDirectMD supports evidence-based telehealth regulation that protects patients while maintaining access. This includes requirements for live, synchronous physician encounters (which TeleDirectMD already requires for all visits), state medical licensing compliance, and HIPAA privacy protections. The practice does not support regulatory models that allow asynchronous questionnaire-only prescribing without real physician oversight for clinical decision-making.',
  },
  {
    question: 'How can journalists or media reach TeleDirectMD for comment?',
    answer:
      'Media inquiries can be directed to contact@teledirectmd.com. Dr. Bhavsar is available for comment on topics including urgent care cost comparisons, telehealth access for uninsured and underinsured patients, evidence-based prescribing in telemedicine, and men\'s health. Response time for media requests is typically within 24 business hours.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      '@id': `${BASE_URL}/news#breadcrumbs`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'News', item: `${BASE_URL}/news/` },
      ],
    },
    {
      '@type': 'CollectionPage',
      '@id': `${BASE_URL}/news#webpage`,
      url: `${BASE_URL}/news/`,
      name: 'Telemedicine News & Media Coverage | TeleDirectMD',
      description:
        'TeleDirectMD announcements and media coverage hub. Physician expert commentary featured in 21+ national publications.',
      inLanguage: 'en-US',
      breadcrumb: { '@id': `${BASE_URL}/news#breadcrumbs` },
      publisher: { '@id': `${BASE_URL}/#organization` },
      reviewedBy: { '@id': `${BASE_URL}/#physician` },
      lastReviewed: '2026-05-23',
      hasPart: NEWS_ARTICLES.map((a) => ({
        '@type': 'NewsArticle',
        '@id': `${BASE_URL}/news/${a.slug}/`,
        url: `${BASE_URL}/news/${a.slug}/`,
        headline: a.title,
        datePublished: a.date,
        description: a.summary,
        author: { '@id': `${BASE_URL}/#physician` },
        publisher: { '@id': `${BASE_URL}/#organization` },
      })),
    },
    {
      '@type': 'MedicalOrganization',
      '@id': `${BASE_URL}/#organization`,
      name: 'TeleDirectMD',
      url: BASE_URL,
      logo: `${BASE_URL}/logo.webp`,
      telephone: '+1-678-956-1855',
      email: 'contact@teledirectmd.com',
      priceRange: '$79',
      medicalSpecialty: ['Family Medicine', 'Urgent Care', 'Telemedicine'],
      paymentAccepted: ['Credit Card', 'Debit Card', 'HSA', 'FSA', 'Aetna', 'Blue Cross Blue Shield', 'UnitedHealthcare'],
      currenciesAccepted: 'USD',
      aggregateRating: getAggregateRating(),
      sameAs: [
        'https://www.zocdoc.com/practice/teledirectmd-98837',
        'https://www.healthgrades.com/group-directory/ga-georgia/lawrenceville/teledirectmd-ooop5jn',
        'https://www.instagram.com/teledirectmd/',
        'https://www.webmd.com/provider/parth-bhavsar/overview',
      ],
    },
    {
      '@type': 'Physician',
      '@id': `${BASE_URL}/#physician`,
      name: 'Parth Bhavsar, MD',
      url: `${BASE_URL}/about`,
      identifier: { '@type': 'PropertyValue', name: 'NPI', value: '1104323203' },
      medicalSpecialty: 'Family Medicine',
      worksFor: { '@id': `${BASE_URL}/#organization` },
      description: 'Board-certified physician and founder of TeleDirectMD. Medical expert commentary featured in TIME, Newsweek, HuffPost, U.S. News, Fox News Digital, NY Post, Daily Mail, Healthline, and 21+ national publications.',
      ...getReviewBlock(),
    },
    {
      '@type': 'FAQPage',
      '@id': `${BASE_URL}/news#faqpage`,
      mainEntity: FAQS.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ],
};

const PAGE_CSS = `
  :root{--tdmd-teal:#006b73;--tdmd-navy:#003e52;--tdmd-accent:#ff5a36;--tdmd-bg-soft:#f3fafb;--tdmd-border:#dde3e6;--tdmd-text:#12323a;--tdmd-muted:#4b5f66;--tdmd-card:#ffffff;--tdmd-shadow:0 8px 20px rgba(0,0,0,0.06);--tdmd-radius:18px;}
  @media(prefers-color-scheme:dark){:root:not([data-theme="light"]){--tdmd-teal:#2bc4cf;--tdmd-navy:#a0d8e8;--tdmd-accent:#ff7a5c;--tdmd-bg-soft:#0f1f24;--tdmd-border:#1e3340;--tdmd-text:#e2edf0;--tdmd-muted:#8fa8b2;--tdmd-card:#122028;--tdmd-shadow:0 8px 20px rgba(0,0,0,0.3);color-scheme:dark;}}
  :root[data-theme="dark"]{--tdmd-teal:#2bc4cf;--tdmd-navy:#a0d8e8;--tdmd-accent:#ff7a5c;--tdmd-bg-soft:#0f1f24;--tdmd-border:#1e3340;--tdmd-text:#e2edf0;--tdmd-muted:#8fa8b2;--tdmd-card:#122028;--tdmd-shadow:0 8px 20px rgba(0,0,0,0.3);color-scheme:dark;}
  .nws-wrap{max-width:1100px;margin:0 auto;padding:0 1.5rem 4rem;font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:var(--tdmd-text);}
  .nws-hero{background:var(--tdmd-bg-soft);padding:3rem 0 2.5rem;}
  .nws-hero-inner{max-width:1100px;margin:0 auto;padding:0 1.5rem;}
  .nws-bc{font-size:0.88rem;color:var(--tdmd-muted);margin-bottom:1.25rem;}
  .nws-bc a{color:var(--tdmd-navy);font-weight:700;text-decoration:underline;text-underline-offset:2px;}
  .nws-bc span{margin:0 0.4rem;}
  .nws-h1{font-size:clamp(1.75rem,4vw,2.4rem);font-weight:800;margin:0 0 0.75rem;letter-spacing:-0.02em;line-height:1.2;color:var(--tdmd-text);}
  .nws-lead{font-size:1.05rem;line-height:1.65;max-width:72ch;margin:0 0 1.25rem;color:var(--tdmd-text);}
  .nws-badge-row{display:flex;flex-wrap:wrap;gap:0.5rem 0.75rem;margin-bottom:1.25rem;}
  .nws-badge{background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:999px;padding:0.3rem 0.85rem;font-size:0.88rem;font-weight:700;color:var(--tdmd-navy);}
  .nws-badge--accent{background:var(--tdmd-accent);color:#fff;border-color:var(--tdmd-accent);}
  .nws-ctas{display:flex;flex-wrap:wrap;gap:0.75rem;margin-bottom:1.25rem;}
  .nws-btn{display:inline-block;padding:0.65rem 1.5rem;border-radius:999px;font-weight:700;font-size:0.95rem;text-decoration:none;text-align:center;}
  .nws-btn-primary{background:var(--tdmd-teal);color:#fff;}
  .nws-btn-outline{border:2px solid var(--tdmd-teal);color:var(--tdmd-teal);background:var(--tdmd-card);}
  .nws-reviewed{font-size:0.85rem;color:var(--tdmd-muted);margin:0.5rem 0 0;}
  .nws-reviewed a{color:var(--tdmd-navy);font-weight:700;text-decoration:underline;text-underline-offset:2px;}
  .nws-section{padding:2.5rem 0;}
  .nws-h2{font-size:clamp(1.3rem,3vw,1.75rem);font-weight:800;margin:0 0 0.75rem;letter-spacing:-0.01em;color:var(--tdmd-text);}
  .nws-h3{font-size:1.15rem;font-weight:700;margin:0 0 0.5rem;color:var(--tdmd-navy);}
  .nws-p{font-size:1rem;line-height:1.7;margin:0 0 1rem;color:var(--tdmd-text);}
  .nws-article-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:1.25rem;margin-top:1rem;}
  .nws-article-card{background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:14px;padding:1.4rem 1.5rem;box-shadow:var(--tdmd-shadow);border-top:4px solid var(--tdmd-teal);text-decoration:none;color:var(--tdmd-text);display:block;transition:border-color .2s;}
  .nws-article-card:hover{border-color:var(--tdmd-teal);box-shadow:0 4px 16px rgba(0,107,115,.12);}
  .nws-article-meta{display:flex;gap:0.75rem;align-items:center;margin-bottom:0.65rem;}
  .nws-article-cat{background:var(--tdmd-bg-soft);border:1px solid var(--tdmd-border);border-radius:999px;padding:0.2rem 0.65rem;font-size:0.78rem;font-weight:700;color:var(--tdmd-teal);}
  .nws-article-date{font-size:0.82rem;color:var(--tdmd-muted);}
  .nws-article-title{font-weight:800;font-size:1.05rem;color:var(--tdmd-navy);margin:0 0 0.5rem;letter-spacing:-0.01em;line-height:1.35;}
  .nws-article-summary{font-size:0.88rem;color:var(--tdmd-muted);line-height:1.5;margin:0 0 0.75rem;}
  .nws-article-link{font-size:0.85rem;color:var(--tdmd-teal);font-weight:700;}
  .nws-media-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:0.85rem;margin-top:1rem;}
  .nws-media-pill{background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:12px;padding:0.85rem 1rem;text-decoration:none;color:var(--tdmd-text);display:block;transition:border-color .2s;}
  .nws-media-pill:hover{border-color:var(--tdmd-teal);}
  .nws-media-outlet{font-weight:800;font-size:0.95rem;color:var(--tdmd-navy);margin:0 0 0.25rem;}
  .nws-media-topic{font-size:0.8rem;color:var(--tdmd-muted);}
  .nws-two-col{display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-top:1rem;}
  .nws-info-box{background:var(--tdmd-card);border:1px solid var(--tdmd-border);border-radius:14px;padding:1.25rem 1.4rem;box-shadow:var(--tdmd-shadow);}
  .nws-info-box--teal{border-top:4px solid var(--tdmd-teal);}
  .nws-info-box--accent{border-top:4px solid var(--tdmd-accent);}
  .nws-list{padding-left:1.25rem;margin:0.5rem 0;display:grid;gap:0.4rem;font-size:0.96rem;line-height:1.55;}
  .nws-link-cloud{display:flex;flex-wrap:wrap;gap:0.5rem 0.75rem;margin-top:1rem;}
  .nws-link-cloud a{color:var(--tdmd-navy);font-weight:700;text-decoration:underline;text-underline-offset:2px;font-size:0.95rem;}
  .nws-link-cloud a:hover{color:var(--tdmd-teal);}
  .nws-cta-bar{margin-top:2.5rem;background:linear-gradient(135deg,rgba(0,107,115,.08),rgba(0,62,82,.04));border:1px solid var(--tdmd-border);border-radius:var(--tdmd-radius);padding:1.25rem 1.5rem;display:flex;align-items:center;justify-content:space-between;gap:1rem;flex-wrap:wrap;}
  .nws-cta-bar h3{margin:0;font-size:1.15rem;font-weight:800;letter-spacing:-0.01em;}
  .nws-cta-bar p{margin:0.35rem 0 0;color:var(--tdmd-muted);font-size:0.95rem;max-width:62ch;}
  .nws-cta-bar-actions{display:flex;gap:0.75rem;flex-wrap:wrap;align-items:center;}
  .nws-divider{border:none;border-top:1px solid var(--tdmd-border);margin:2rem 0;}
  .nws-timeline{display:grid;gap:1rem;margin-top:1rem;}
  .nws-timeline-item{display:flex;gap:1rem;align-items:flex-start;}
  .nws-timeline-dot{width:12px;height:12px;border-radius:50%;background:var(--tdmd-teal);flex-shrink:0;margin-top:0.35rem;}
  .nws-timeline-content h4{margin:0 0 0.25rem;font-size:0.95rem;font-weight:700;color:var(--tdmd-navy);}
  .nws-timeline-content p{margin:0;font-size:0.88rem;color:var(--tdmd-muted);line-height:1.5;}
  .nws-timeline-content time{font-size:0.78rem;color:var(--tdmd-muted);font-style:italic;}
  @media(max-width:768px){.nws-two-col{grid-template-columns:1fr;}}
  @media(max-width:520px){.nws-article-grid,.nws-media-grid{grid-template-columns:1fr;}}
`;

export default function NewsHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />

      {/* Hero */}
      <div className="nws-hero">
        <div className="nws-hero-inner">
          <nav className="nws-bc" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">News</span>
          </nav>
          <h1 className="nws-h1">Telemedicine News &amp; Media Coverage</h1>
          <p className="nws-lead">
            This page collects official TeleDirectMD announcements, service expansion news, and media coverage
            of Dr. Parth Bhavsar, MD. Dr. Bhavsar has been quoted as a physician expert in more than 21 national
            publications on topics including telehealth access, urgent care cost comparisons, men&apos;s health,
            infectious disease, and the future of primary care delivery.
          </p>
          <p className="nws-lead">
            For in-depth health guides written by Dr. Bhavsar, visit the{' '}
            <a href="/health-guides" style={{ color: 'var(--tdmd-navy)', fontWeight: 700, textDecoration: 'underline' }}>Health Guides</a> section.
            For a curated list of media appearances with direct source links, see the{' '}
            <a href="/media-mentions" style={{ color: 'var(--tdmd-navy)', fontWeight: 700, textDecoration: 'underline' }}>Media Mentions</a> page.
          </p>
          <div className="nws-badge-row">
            <span className="nws-badge nws-badge--accent">Latest: Aetna California — May 2026</span>
            <span className="nws-badge">21+ National Publications</span>
            <span className="nws-badge">Service Expansions</span>
            <span className="nws-badge">Insurance Updates</span>
          </div>
          <div className="nws-ctas">
            <a href="/media-mentions" className="nws-btn nws-btn-primary">Media Mentions</a>
            <a href="/health-guides" className="nws-btn nws-btn-outline">Health Guides</a>
          </div>
          <p className="nws-reviewed">
            Content reviewed by{' '}
            <a href="/about">Parth Bhavsar, MD</a>
            {' '}(NPI&nbsp;1104323203) &mdash; Last updated: May 23, 2026
          </p>
        </div>
      </div>

      <div className="nws-wrap">

        {/* Latest Articles */}
        <section className="nws-section" aria-labelledby="articles-heading">
          <h2 id="articles-heading" className="nws-h2">Latest Announcements</h2>
          <p className="nws-p">
            TeleDirectMD publishes official announcements when new insurance partnerships are established, new state licenses
            are obtained, or significant service changes occur. The announcement below is the first published news article
            in this section; additional announcements will be added here as they occur.
          </p>
          <div className="nws-article-grid">
            {NEWS_ARTICLES.map((article) => (
              <a key={article.slug} href={`/news/${article.slug}`} className="nws-article-card">
                <div className="nws-article-meta">
                  <span className="nws-article-cat">{article.category}</span>
                  <time className="nws-article-date" dateTime={article.date}>{article.dateDisplay}</time>
                </div>
                <h3 className="nws-article-title">{article.title}</h3>
                <p className="nws-article-summary">{article.summary.substring(0, 200)}&hellip;</p>
                <span className="nws-article-link">Read full announcement &rarr;</span>
              </a>
            ))}
          </div>
        </section>

        <hr className="nws-divider" />

        {/* Service timeline */}
        <section className="nws-section" aria-labelledby="timeline-heading">
          <h2 id="timeline-heading" className="nws-h2">TeleDirectMD Service Milestones</h2>
          <p className="nws-p">
            TeleDirectMD has expanded steadily since its founding by Dr. Parth Bhavsar. The timeline below summarizes
            key milestones in the practice&apos;s growth, licensing, and insurance network expansion.
          </p>
          <div className="nws-timeline">
            {[
              { date: 'May 2026', title: 'Aetna California in-network', desc: 'TeleDirectMD becomes in-network with Aetna commercial plans in California, effective April 30, 2026. Expands Aetna coverage to California adults across all California markets.' },
              { date: 'Spring 2026', title: '42 states + DC covered', desc: 'Telehealth licensure expands to 42 states and Washington DC, making TeleDirectMD available to a majority of US adults. Select insurance now accepted in multiple states.' },
              { date: '2026', title: 'LegitScript certified', desc: 'TeleDirectMD receives LegitScript certification, an independent verification of compliant and ethical online pharmacy and telemedicine practices.' },
              { date: '2025\u20132026', title: 'Media expert commentary', desc: 'Dr. Bhavsar quoted as medical expert in 21+ national publications including TIME, Newsweek, HuffPost, U.S. News, Fox News Digital, and NY Post.' },
              { date: '2025', title: 'BCBS and UHC partnerships', desc: 'TeleDirectMD establishes in-network relationships with Blue Cross Blue Shield and UnitedHealthcare commercial plans in select states, expanding insurance options for patients.' },
              { date: 'Earlier', title: 'Aetna network (initial states)', desc: 'First commercial insurance in-network relationship established with Aetna in an initial group of states, beginning the transition from self-pay-only to multi-insurance model.' },
              { date: 'Founding', title: 'TeleDirectMD launched by Dr. Bhavsar', desc: 'Practice founded by Parth Bhavsar, MD (board-certified Family Medicine, NPI 1104323203) as an MD-only virtual urgent care practice with $79 flat self-pay pricing.' },
            ].map((item, i) => (
              <div key={i} className="nws-timeline-item">
                <div className="nws-timeline-dot" />
                <div className="nws-timeline-content">
                  <time>{item.date}</time>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="nws-divider" />

        {/* Media Coverage Section */}
        <section className="nws-section" aria-labelledby="media-heading">
          <h2 id="media-heading" className="nws-h2">National Media Coverage — Dr. Parth Bhavsar, MD</h2>
          <p className="nws-p">
            Dr. Bhavsar is regularly contacted by journalists for physician commentary on topics within his clinical expertise.
            He has been quoted in breaking health news stories, feature investigations into healthcare costs, and expert
            roundups on telehealth policy. His commentary is distinguished by its clinical specificity and willingness to
            address cost and access issues directly — qualities that make him a frequently cited source for health journalists.
          </p>
          <p className="nws-p">
            The outlets below represent a selection of publications that have quoted Dr. Bhavsar. For direct links to each
            article, visit the <a href="/media-mentions">Media Mentions</a> page, which maintains a curated list with URLs.
          </p>
          <div className="nws-media-grid">
            {MEDIA_MENTIONS.map((m) => (
              <a key={m.outlet} href={m.url} className="nws-media-pill" target="_blank" rel="noopener noreferrer">
                <p className="nws-media-outlet">{m.outlet}</p>
                <p className="nws-media-topic">{m.topic}</p>
              </a>
            ))}
          </div>
          <p className="nws-p" style={{ marginTop: '1rem' }}>
            Media inquiries: <strong>contact@teledirectmd.com</strong>. Dr. Bhavsar is available for comment on
            urgent care cost comparisons, telehealth access, men&apos;s health, infectious disease management,
            and healthcare price transparency. Typical response time: 24 business hours.
          </p>
        </section>

        <hr className="nws-divider" />

        {/* TeleDirectMD editorial topics */}
        <section className="nws-section" aria-labelledby="topics-heading">
          <h2 id="topics-heading" className="nws-h2">Telehealth Topics TeleDirectMD Covers</h2>
          <p className="nws-p">
            The news and health guides sections together address a wide range of telehealth topics. The division is intentional:
            this news page covers service announcements, industry context, and media coverage. The{' '}
            <a href="/health-guides">health guides</a> section contains longer, clinically sourced articles written by or under
            the supervision of Dr. Bhavsar. Both sections are updated on an ongoing basis as new information becomes available.
          </p>
          <div className="nws-two-col">
            <div className="nws-info-box nws-info-box--teal">
              <h3 className="nws-h3">News and Announcements</h3>
              <ul className="nws-list">
                <li>New state license announcements</li>
                <li>Insurance network additions (Aetna, BCBS, UHC)</li>
                <li>Service changes and pricing updates</li>
                <li>Regulatory developments affecting telehealth</li>
                <li>Media coverage and expert commentary appearances</li>
                <li>Recognition and certification milestones</li>
              </ul>
            </div>
            <div className="nws-info-box nws-info-box--teal">
              <h3 className="nws-h3">Health Guides &amp; Clinical Content</h3>
              <ul className="nws-list">
                <li>Condition-specific treatment guides (UTI, sinus, strep, etc.)</li>
                <li>Medication explainers (finasteride, sildenafil, valacyclovir)</li>
                <li>Cost comparison analyses with sources</li>
                <li>When to go to urgent care vs. telehealth vs. ER</li>
                <li>Men&apos;s health: ED, hair loss, performance anxiety</li>
                <li>Women&apos;s health: UTI, yeast infection, birth control</li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="nws-divider" />

        {/* Telehealth industry context */}
        <section className="nws-section" aria-labelledby="industry-heading">
          <h2 id="industry-heading" className="nws-h2">The State of Telehealth in 2026</h2>
          <p className="nws-p">
            Telehealth has become a mainstream component of US healthcare delivery following a massive acceleration during
            the COVID-19 pandemic. By 2023, telehealth accounted for approximately 22% of all outpatient visits in the US,
            up from less than 1% prior to 2020, according to McKinsey &amp; Company research. The share has since moderated
            but remains significantly elevated compared to the pre-pandemic baseline.
          </p>
          <p className="nws-p">
            The 2026 telehealth landscape is characterized by platform consolidation, increased regulatory scrutiny
            (particularly around prescribing practices), and growing insurance integration. CMS has extended pandemic-era
            telehealth flexibilities through 2026, pending Congressional action on permanent rules. The major outstanding
            policy question is whether the in-person visit requirement for controlled substance prescribing via telemedicine
            will be permanently modified.
          </p>
          <p className="nws-p">
            TeleDirectMD operates in the &ldquo;acute care and medication refill&rdquo; segment of telehealth — the largest
            by volume and most directly competitive with urgent care centers and retail health clinics. The practice&apos;s
            $79 price point, MD-only model, and growing insurance network position it in a distinct niche from both the
            large employer-benefit platforms (Teladoc, MDLIVE) and the subscription-model startups (K Health, Ro, Hims).
          </p>
          <p className="nws-p">
            Dr. Bhavsar has commented publicly on the importance of physician-led telehealth, the risks of AI-only diagnostic
            tools, and the need for transparent pricing in online medical care. These positions reflect TeleDirectMD&apos;s
            operating philosophy and are reflected in the practice&apos;s consistent flat-fee pricing and synchronous
            physician-only visit model.
          </p>
        </section>

        <hr className="nws-divider" />

        {/* FAQ */}
        <section className="nws-section" aria-labelledby="faq-heading">
          <FaqAccordion
            items={FAQS.map((f) => ({ question: f.question, answer: f.answer }))}
            sectionTitle="News &amp; Media FAQ"
            sectionId="faq"
          />
        </section>

        {/* Related links */}
        <section className="nws-section" aria-labelledby="related-heading">
          <h2 id="related-heading" className="nws-h2">Related Resources</h2>
          <div className="nws-link-cloud">
            <a href="/media-mentions">Media Mentions</a>
            <a href="/health-guides">Health Guides</a>
            <a href="/about">About Dr. Bhavsar, MD</a>
            <a href="/insurance">Insurance &amp; Pricing</a>
            <a href="/faq">FAQ</a>
            <a href="/compare">Compare Telehealth Services</a>
            <a href="/states-we-serve">States We Serve</a>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="nws-cta-bar">
          <div>
            <h3>Experience the practice behind the media coverage</h3>
            <p>
              $79 flat, same-day video visit with a board-certified MD. Select Aetna, BCBS, and UHC also accepted.
              No membership, no hidden fees.
            </p>
          </div>
          <div className="nws-cta-bar-actions">
            <a href="/book-online" className="nws-btn nws-btn-primary">Book a Visit</a>
            <a href="/about" className="nws-btn nws-btn-outline">About Dr. Bhavsar</a>
          </div>
        </div>

      </div>
    </>
  );
}
