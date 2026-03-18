import fs from 'fs';
import path from 'path';

function getMediaMentions() {
  const raw = fs.readFileSync(path.join(process.cwd(), 'data', 'media-mentions.json'), 'utf-8');
  return JSON.parse(raw);
}

export async function generateMetadata() {
  const baseUrl = 'https://teledirectmd.com';
  const pageUrl = `${baseUrl}/media-mentions`;

  return {
    title: 'Media Mentions — TeleDirectMD Press Coverage',
    description:
      'TeleDirectMD has been featured in TIME, Newsweek, British GQ, HuffPost, and 19+ other major publications. Read press coverage and expert commentary by Dr. Parth Bhavsar.',
    robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    authors: [{ name: 'Parth Bhavsar, MD' }],
    openGraph: {
      type: 'website',
      siteName: 'TeleDirectMD',
      locale: 'en_US',
      title: 'Media Mentions — TeleDirectMD Press Coverage',
      description:
        'TeleDirectMD has been featured in TIME, Newsweek, British GQ, HuffPost, and 19+ other major publications. Read press coverage and expert commentary by Dr. Parth Bhavsar.',
      url: pageUrl,
      images: [{ url: `${baseUrl}/assets/social/tdmd-media-og.png`, alt: 'TeleDirectMD Media Mentions' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Media Mentions — TeleDirectMD Press Coverage',
      description:
        'TeleDirectMD featured in TIME, Newsweek, British GQ, HuffPost, and 19+ other major publications.',
      images: [`${baseUrl}/assets/social/tdmd-media-og.png`],
    },
    alternates: { canonical: pageUrl },
  };
}

export default async function MediaMentionsPage() {
  const data = getMediaMentions();
  const baseUrl = 'https://teledirectmd.com';

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${baseUrl}/media-mentions#webpage`,
        "url": `${baseUrl}/media-mentions`,
        "name": "Media Mentions — TeleDirectMD Press Coverage",
        "description": "TeleDirectMD has been featured in TIME, Newsweek, British GQ, HuffPost, and 19+ other major publications.",
        "publisher": { "@id": `${baseUrl}#organization` },
        "inLanguage": "en-US"
      },
      {
        "@type": "Organization",
        "@id": `${baseUrl}#organization`,
        "name": "TeleDirectMD",
        "url": baseUrl
      },
      ...data.featured.map((article) => ({
        "@type": "NewsArticle",
        "headline": article.title,
        "url": article.url,
        "datePublished": article.date,
        "publisher": { "@type": "Organization", "name": article.publication },
        "about": { "@id": `${baseUrl}#organization` }
      }))
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1) Hero */}
      <section className="tdmd-media-hero">
        <div className="tdmd-container">
          <p className="tdmd-media-hero-label">Press &amp; Editorial Coverage</p>
          <h1>TeleDirectMD in the Media</h1>
          <p className="tdmd-media-hero-sub">
            Dr. Parth Bhavsar, board-certified family medicine physician and founder of TeleDirectMD, has been featured in 23+ major national and international publications including TIME, Newsweek, British GQ, HuffPost, FOX News Digital, New York Post, Daily Mail, U.S. News &amp; World Report, and more.
          </p>
        </div>
      </section>

      {/* 2) As Featured In logo strip */}
      <section className="tdmd-section">
        <div className="tdmd-container">
          <h2 style={{ textAlign: 'center', marginBottom: '0.25rem' }}>As Featured In</h2>
          <div className="tdmd-media-logos">
            {data.outlets.map((outlet) => (
              <span key={outlet} className="tdmd-media-logo-text">{outlet}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 3) Stats bar */}
      <section className="tdmd-section tdmd-section-highlight">
        <div className="tdmd-container">
          <div className="tdmd-media-stats">
            <div className="tdmd-media-stat">
              <div className="tdmd-media-stat-number">{data.stats.publications}</div>
              <div className="tdmd-media-stat-label">Publications</div>
            </div>
            <div className="tdmd-media-stat">
              <div className="tdmd-media-stat-number">{data.stats.uniqueOutlets}</div>
              <div className="tdmd-media-stat-label">Unique Outlets</div>
            </div>
            <div className="tdmd-media-stat">
              <div className="tdmd-media-stat-number">{data.stats.combinedReadership}</div>
              <div className="tdmd-media-stat-label">Combined Readership</div>
            </div>
            <div className="tdmd-media-stat">
              <div className="tdmd-media-stat-number">{data.stats.healthTopics}</div>
              <div className="tdmd-media-stat-label">Health Topics</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4) Featured Coverage */}
      <section className="tdmd-section" id="featured-coverage">
        <div className="tdmd-container">
          <h2>Featured Coverage</h2>
          <p>Highlighted articles where Dr. Bhavsar provided expert medical commentary.</p>

          <div className="tdmd-media-featured">
            {data.featured.map((article, i) => (
              <div key={i} className="tdmd-media-featured-card">
                <span className="tdmd-media-pub-badge">{article.publication}</span>
                <h3>{article.title}</h3>
                <span className="tdmd-media-featured-card-date">{article.date}</span>
                <a href={article.url} target="_blank" rel="noopener noreferrer">Read Article &rarr;</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5) All Mentions */}
      <section className="tdmd-section tdmd-section-highlight" id="all-mentions">
        <div className="tdmd-container">
          <h2>All {data.mentions.length} Media Mentions</h2>
          <p>Complete chronological list of press coverage, newest first.</p>

          <div className="tdmd-media-timeline">
            {data.mentions.map((mention, i) => (
              <div key={i} className="tdmd-media-timeline-item">
                <span className="tdmd-media-pub-badge">{mention.publication}</span>
                <a
                  className="tdmd-media-timeline-title"
                  href={mention.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {mention.title}
                </a>
                <span className="tdmd-media-timeline-date">{mention.date}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6) Press Inquiry CTA */}
      <section className="tdmd-section">
        <div className="tdmd-container">
          <div className="tdmd-media-press-cta">
            <h3>Press Inquiries</h3>
            <p>
              For press inquiries, expert commentary, or media collaborations, reach out to Dr. Bhavsar and the TeleDirectMD team.
            </p>
            <a href="mailto:contact@teledirectmd.com" className="tdmd-btn tdmd-btn-primary">Contact Us</a>
            <a href="/book-online" className="tdmd-btn tdmd-btn-outline">Book a Visit</a>
          </div>
        </div>
      </section>
    </>
  );
}
