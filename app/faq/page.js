import fs from 'fs';
import path from 'path';

function getFaqData() {
  const raw = fs.readFileSync(path.join(process.cwd(), 'data', 'faq.json'), 'utf-8');
  return JSON.parse(raw);
}

export async function generateMetadata() {
  const baseUrl = 'https://teledirectmd.com';
  const pageUrl = `${baseUrl}/faq`;

  return {
    title: 'TeleDirectMD FAQ — Pricing, Insurance, Prescriptions & More',
    description:
      'Get answers to common questions about TeleDirectMD. $49 flat-fee visits, no insurance required, same-day appointments with a board-certified physician licensed in 35+ states.',
    robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    authors: [{ name: 'Parth Bhavsar, MD' }],
    openGraph: {
      type: 'website',
      siteName: 'TeleDirectMD',
      locale: 'en_US',
      title: 'TeleDirectMD FAQ — Pricing, Insurance, Prescriptions & More',
      description:
        'Get answers to common questions about TeleDirectMD. $49 flat-fee visits, no insurance required, same-day appointments with a board-certified physician licensed in 35+ states.',
      url: pageUrl,
      images: [{ url: `${baseUrl}/assets/social/tdmd-faq-og.png`, alt: 'TeleDirectMD FAQ' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'TeleDirectMD FAQ — Pricing, Insurance, Prescriptions & More',
      description:
        'Get answers to common questions about TeleDirectMD. $49 flat-fee visits, no insurance required.',
      images: [`${baseUrl}/assets/social/tdmd-faq-og.png`],
    },
    alternates: { canonical: pageUrl },
  };
}

export default async function FaqPage() {
  const sections = getFaqData();
  const baseUrl = 'https://teledirectmd.com';
  const pageUrl = `${baseUrl}/faq`;

  const allQuestions = sections.flatMap((s) => s.items);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allQuestions.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="tdmd-faq-hero">
        <div className="tdmd-container">
          <h1>Frequently Asked Questions</h1>
          <p className="tdmd-faq-hero-subtitle">
            Virtual urgent care led by a single board-certified MD — licensed in more than 35 states. Adults 18+ only.
          </p>
        </div>
      </section>

      {/* FAQ sections */}
      <section className="tdmd-section">
        <div className="tdmd-container">
          {sections.map((section, si) => (
            <div key={si} className="tdmd-faq-section-block" id={`faq-${si}`}>
              <div className="tdmd-faq-section-header">
                <h2>{section.sectionName}</h2>
                <p>{section.sectionDescription}</p>
              </div>

              <div className="tdmd-faq-list" role="list">
                {section.items.map((item, qi) => (
                  <details key={qi} className="tdmd-faq-item" role="listitem">
                    <summary className="tdmd-faq-question">{item.question}</summary>
                    <div className="tdmd-faq-answer">
                      <p>{item.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}

          {/* Bottom CTA */}
          <div className="tdmd-bottom-cta">
            <div className="tdmd-bottom-cta-copy">
              <h3>Still have questions? Book a $49 MD Video Visit</h3>
              <p>Same-day appointments with a board-certified physician. No insurance required.</p>
            </div>
            <div className="tdmd-bottom-cta-actions">
              <a href="/book-online" className="tdmd-btn tdmd-btn-primary">Book a $49 Visit</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
