import { getStateBySlug } from '../../../../lib/get-data';
import { notFound } from 'next/navigation';

const FAQ_PAGES = [
  { slug: 'can-you-get-finasteride-online-in-alabama', stateSlug: 'al', conditionSlug: 'hair-loss-treatment-online', medication: 'Finasteride', condition: 'Hair Loss' },
  { slug: 'can-you-get-finasteride-online-in-arizona', stateSlug: 'az', conditionSlug: 'hair-loss-treatment-online', medication: 'Finasteride', condition: 'Hair Loss' },
  { slug: 'can-you-get-finasteride-online-in-california', stateSlug: 'ca', conditionSlug: 'hair-loss-treatment-online', medication: 'Finasteride', condition: 'Hair Loss' },
  { slug: 'can-you-get-finasteride-online-in-colorado', stateSlug: 'co', conditionSlug: 'hair-loss-treatment-online', medication: 'Finasteride', condition: 'Hair Loss' },
  { slug: 'can-you-get-finasteride-online-in-connecticut', stateSlug: 'ct', conditionSlug: 'hair-loss-treatment-online', medication: 'Finasteride', condition: 'Hair Loss' },
  { slug: 'can-you-get-finasteride-online-in-washington-dc', stateSlug: 'dc', conditionSlug: 'hair-loss-treatment-online', medication: 'Finasteride', condition: 'Hair Loss' },
  { slug: 'can-you-get-finasteride-online-in-delaware', stateSlug: 'de', conditionSlug: 'hair-loss-treatment-online', medication: 'Finasteride', condition: 'Hair Loss' },
  { slug: 'can-you-get-finasteride-online-in-florida', stateSlug: 'fl', conditionSlug: 'hair-loss-treatment-online', medication: 'Finasteride', condition: 'Hair Loss' },
  { slug: 'can-you-get-finasteride-online-in-georgia', stateSlug: 'ga', conditionSlug: 'hair-loss-treatment-online', medication: 'Finasteride', condition: 'Hair Loss' },
  { slug: 'can-you-get-finasteride-online-in-hawaii', stateSlug: 'hi', conditionSlug: 'hair-loss-treatment-online', medication: 'Finasteride', condition: 'Hair Loss' },
  { slug: 'can-you-get-finasteride-online-in-idaho', stateSlug: 'id', conditionSlug: 'hair-loss-treatment-online', medication: 'Finasteride', condition: 'Hair Loss' },
  { slug: 'can-you-get-finasteride-online-in-illinois', stateSlug: 'il', conditionSlug: 'hair-loss-treatment-online', medication: 'Finasteride', condition: 'Hair Loss' },
  { slug: 'can-you-get-finasteride-online-in-indiana', stateSlug: 'in', conditionSlug: 'hair-loss-treatment-online', medication: 'Finasteride', condition: 'Hair Loss' },
  { slug: 'can-you-get-finasteride-online-in-iowa', stateSlug: 'ia', conditionSlug: 'hair-loss-treatment-online', medication: 'Finasteride', condition: 'Hair Loss' },
  { slug: 'can-you-get-finasteride-online-in-kansas', stateSlug: 'ks', conditionSlug: 'hair-loss-treatment-online', medication: 'Finasteride', condition: 'Hair Loss' },
  { slug: 'can-you-get-finasteride-online-in-kentucky', stateSlug: 'ky', conditionSlug: 'hair-loss-treatment-online', medication: 'Finasteride', condition: 'Hair Loss' },
  { slug: 'can-you-get-finasteride-online-in-louisiana', stateSlug: 'la', conditionSlug: 'hair-loss-treatment-online', medication: 'Finasteride', condition: 'Hair Loss' },
  { slug: 'can-you-get-finasteride-online-in-maine', stateSlug: 'me', conditionSlug: 'hair-loss-treatment-online', medication: 'Finasteride', condition: 'Hair Loss' },
  { slug: 'can-you-get-finasteride-online-in-maryland', stateSlug: 'md', conditionSlug: 'hair-loss-treatment-online', medication: 'Finasteride', condition: 'Hair Loss' },
  { slug: 'can-you-get-finasteride-online-in-michigan', stateSlug: 'mi', conditionSlug: 'hair-loss-treatment-online', medication: 'Finasteride', condition: 'Hair Loss' },
  { slug: 'can-you-get-finasteride-online-in-minnesota', stateSlug: 'mn', conditionSlug: 'hair-loss-treatment-online', medication: 'Finasteride', condition: 'Hair Loss' },
  { slug: 'can-you-get-finasteride-online-in-mississippi', stateSlug: 'ms', conditionSlug: 'hair-loss-treatment-online', medication: 'Finasteride', condition: 'Hair Loss' },
  { slug: 'can-you-get-finasteride-online-in-missouri', stateSlug: 'mo', conditionSlug: 'hair-loss-treatment-online', medication: 'Finasteride', condition: 'Hair Loss' },
  { slug: 'can-you-get-finasteride-online-in-montana', stateSlug: 'mt', conditionSlug: 'hair-loss-treatment-online', medication: 'Finasteride', condition: 'Hair Loss' },
  { slug: 'can-you-get-finasteride-online-in-nebraska', stateSlug: 'ne', conditionSlug: 'hair-loss-treatment-online', medication: 'Finasteride', condition: 'Hair Loss' },
  { slug: 'can-you-get-finasteride-online-in-nevada', stateSlug: 'nv', conditionSlug: 'hair-loss-treatment-online', medication: 'Finasteride', condition: 'Hair Loss' },
  { slug: 'can-you-get-finasteride-online-in-new-hampshire', stateSlug: 'nh', conditionSlug: 'hair-loss-treatment-online', medication: 'Finasteride', condition: 'Hair Loss' },
  { slug: 'can-you-get-finasteride-online-in-new-jersey', stateSlug: 'nj', conditionSlug: 'hair-loss-treatment-online', medication: 'Finasteride', condition: 'Hair Loss' },
  { slug: 'can-you-get-finasteride-online-in-north-carolina', stateSlug: 'nc', conditionSlug: 'hair-loss-treatment-online', medication: 'Finasteride', condition: 'Hair Loss' },
  { slug: 'can-you-get-finasteride-online-in-north-dakota', stateSlug: 'nd', conditionSlug: 'hair-loss-treatment-online', medication: 'Finasteride', condition: 'Hair Loss' },
  { slug: 'can-you-get-finasteride-online-in-ohio', stateSlug: 'oh', conditionSlug: 'hair-loss-treatment-online', medication: 'Finasteride', condition: 'Hair Loss' },
  { slug: 'can-you-get-finasteride-online-in-oklahoma', stateSlug: 'ok', conditionSlug: 'hair-loss-treatment-online', medication: 'Finasteride', condition: 'Hair Loss' },
  { slug: 'can-you-get-finasteride-online-in-pennsylvania', stateSlug: 'pa', conditionSlug: 'hair-loss-treatment-online', medication: 'Finasteride', condition: 'Hair Loss' },
  { slug: 'can-you-get-finasteride-online-in-south-carolina', stateSlug: 'sc', conditionSlug: 'hair-loss-treatment-online', medication: 'Finasteride', condition: 'Hair Loss' },
  { slug: 'can-you-get-finasteride-online-in-south-dakota', stateSlug: 'sd', conditionSlug: 'hair-loss-treatment-online', medication: 'Finasteride', condition: 'Hair Loss' },
  { slug: 'can-you-get-finasteride-online-in-tennessee', stateSlug: 'tn', conditionSlug: 'hair-loss-treatment-online', medication: 'Finasteride', condition: 'Hair Loss' },
  { slug: 'can-you-get-finasteride-online-in-texas', stateSlug: 'tx', conditionSlug: 'hair-loss-treatment-online', medication: 'Finasteride', condition: 'Hair Loss' },
  { slug: 'can-you-get-finasteride-online-in-utah', stateSlug: 'ut', conditionSlug: 'hair-loss-treatment-online', medication: 'Finasteride', condition: 'Hair Loss' },
  { slug: 'can-you-get-finasteride-online-in-washington', stateSlug: 'wa', conditionSlug: 'hair-loss-treatment-online', medication: 'Finasteride', condition: 'Hair Loss' },
  { slug: 'can-you-get-finasteride-online-in-west-virginia', stateSlug: 'wv', conditionSlug: 'hair-loss-treatment-online', medication: 'Finasteride', condition: 'Hair Loss' },
  { slug: 'can-you-get-finasteride-online-in-wisconsin', stateSlug: 'wi', conditionSlug: 'hair-loss-treatment-online', medication: 'Finasteride', condition: 'Hair Loss' },
  { slug: 'can-you-get-finasteride-online-in-wyoming', stateSlug: 'wy', conditionSlug: 'hair-loss-treatment-online', medication: 'Finasteride', condition: 'Hair Loss' }
];

export async function generateStaticParams() {
  return FAQ_PAGES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = FAQ_PAGES.find((p) => p.slug === slug);
  if (!page) return {};
  const state = getStateBySlug(page.stateSlug);
  if (!state) return {};
  const baseUrl = 'https://teledirectmd.com';
  const pageUrl = `${baseUrl}/faq/deep-dive/${slug}`;
  const title = `Can You Get ${page.medication} Online in ${state.name}? | TeleDirectMD`;
  const description = `Yes, adults in ${state.name} may be eligible for a ${page.medication.toLowerCase()} evaluation by video visit with a board-certified MD at TeleDirectMD. Self pay option starting at $49. Insurance is not required.`;
  return {
    title,
    description,
    robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    authors: [{ name: 'Parth Bhavsar, MD' }],
    openGraph: { type: 'website', siteName: 'TeleDirectMD', locale: 'en_US', title, description, url: pageUrl },
    twitter: { card: 'summary_large_image', title, description },
    alternates: { canonical: pageUrl },
  };
}

export default async function FAQDeepDivePage({ params }) {
  const { slug } = await params;
  const page = FAQ_PAGES.find((p) => p.slug === slug);
  if (!page) notFound();
  const state = getStateBySlug(page.stateSlug);
  if (!state) notFound();
  const baseUrl = 'https://teledirectmd.com';
  const pageUrl = `${baseUrl}/faq/deep-dive/${slug}`;
  const today = new Date().toISOString().split('T')[0];

  const faqItems = [
    { q: `Can I get ${page.medication.toLowerCase()} online in ${state.name}?`, a: `Yes. Adults physically located in ${state.name} may be eligible for a ${page.medication.toLowerCase()} evaluation through a TeleDirectMD video visit with a board-certified MD. If ${page.medication.toLowerCase()} is clinically appropriate based on your history and evaluation, a prescription can be sent to your preferred pharmacy. Self pay option starting at $49. Insurance is not required.` },
    { q: `Do I need a video visit for ${page.medication.toLowerCase()} in ${state.name}?`, a: `TeleDirectMD requires a live, synchronous video visit with a board-certified MD for all evaluations. This ensures a proper clinical assessment, red-flag screening, and individualized treatment decisions. Some states require a real-time clinical encounter for certain prescriptions, and TeleDirectMD meets or exceeds these standards.` },
    { q: `How much does a ${page.medication.toLowerCase()} evaluation cost?`, a: `The TeleDirectMD visit is a self pay option starting at $49. Insurance is not required. Prescription costs for ${page.medication.toLowerCase()} are separate and vary by pharmacy. There are no hidden fees and no subscription is required.` },
    { q: `What happens during the visit?`, a: `You connect by secure video with a board-certified MD licensed in ${state.name}. The physician takes your medical history, evaluates your condition, screens for red flags or contraindications, and discusses treatment options including ${page.medication.toLowerCase()} if appropriate. If a prescription is clinically appropriate, it is sent to your preferred pharmacy.` },
    { q: `What if ${page.medication.toLowerCase()} is not appropriate for me?`, a: `If ${page.medication.toLowerCase()} is not clinically appropriate based on your evaluation, your MD will explain why and discuss alternative options or recommend in-person follow-up. You still receive a complete evaluation and clear guidance on next steps.` },
    { q: `Is TeleDirectMD licensed in ${state.name}?`, a: `Yes. TeleDirectMD is licensed to provide telehealth services in ${state.name}. All visits are conducted by board-certified MDs who hold active medical licenses in ${state.name}.` }
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${baseUrl}/` },
          { '@type': 'ListItem', position: 2, name: 'FAQ', item: `${baseUrl}/faq` },
          { '@type': 'ListItem', position: 3, name: `${page.medication} Online in ${state.name}`, item: pageUrl }
        ]
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqItems.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a }
        }))
      }
    ]
  };

  return (
    <>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px 60px' }}>
        <nav aria-label="Breadcrumb" style={{ fontSize: '14px', color: '#6b7280', padding: '16px 0', borderBottom: '1px solid #e5e7eb' }}>
          <a href="/" style={{ color: '#0d9488' }}>Home</a>
          <span style={{ margin: '0 8px' }}>/</span>
          <a href="/faq" style={{ color: '#0d9488' }}>FAQ</a>
          <span style={{ margin: '0 8px' }}>/</span>
          <span>{page.medication} Online in {state.name}</span>
        </nav>

        <section style={{ padding: '40px 0 24px' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1.2, color: '#111827', marginBottom: '12px' }}>
            Can You Get {page.medication} Online in {state.name}?
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#0d9488', fontWeight: 600, marginBottom: '16px' }}>
            Yes. Adults in {state.name} may be eligible for a {page.medication.toLowerCase()} evaluation by video visit with a board-certified MD.
          </p>
          <p style={{ fontSize: '1rem', color: '#374151', lineHeight: 1.7 }}>
            TeleDirectMD offers live, physician-led video visits for adults located in {state.name} who are experiencing hair loss and want to discuss treatment options including {page.medication.toLowerCase()}. Every visit is a synchronous encounter with a board-certified MD who evaluates your condition, screens for contraindications, and discusses whether {page.medication.toLowerCase()} or other treatments may be appropriate for you. Self pay option starting at $49. Insurance is not required.
          </p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '20px', flexWrap: 'wrap' }}>
            <a href="/book-online" style={{ display: 'inline-block', background: '#0d9488', color: '#fff', padding: '12px 28px', borderRadius: '8px', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none' }}>Book a Visit</a>
            <a href={`/${page.stateSlug}/${page.conditionSlug}`} style={{ display: 'inline-block', background: '#fff', color: '#0d9488', border: '2px solid #0d9488', padding: '10px 24px', borderRadius: '8px', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none' }}>{page.condition} in {state.name}</a>
          </div>
        </section>

        {/* Quick Answer Box */}
        <section style={{ padding: '24px 0', borderTop: '1px solid #e5e7eb' }}>
          <div style={{ background: '#f0fdfa', border: '1px solid #99f6e4', borderRadius: '10px', padding: '20px' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f766e', marginBottom: '10px' }}>Quick Answer</h2>
            <p style={{ fontSize: '0.95rem', color: '#374151', lineHeight: 1.6, margin: 0 }}>
              Yes, adults in {state.name} can get a {page.medication.toLowerCase()} evaluation online through TeleDirectMD. You will see a board-certified MD by live video visit. If {page.medication.toLowerCase()} is clinically appropriate, a prescription is sent to your preferred pharmacy. The visit is a self pay option starting at $49. Insurance is not required. No subscription is needed.
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section style={{ padding: '24px 0', borderTop: '1px solid #e5e7eb' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#111827', marginBottom: '16px' }}>How to Get a {page.medication} Evaluation Online in {state.name}</h2>
          <div style={{ display: 'grid', gap: '12px' }}>
            {[
              { s: '1', t: 'Book your visit', d: `Choose a time. You must be physically in ${state.name} at the time of the visit.` },
              { s: '2', t: 'Connect by video with a board-certified MD', d: `Your physician evaluates your hair loss, reviews your history, and screens for contraindications.` },
              { s: '3', t: 'Receive your treatment plan', d: `If ${page.medication.toLowerCase()} is appropriate, a prescription is sent to your pharmacy. If not, your MD explains next steps.` }
            ].map((step) => (
              <div key={step.s} style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '16px', display: 'flex', gap: '12px' }}>
                <span style={{ background: '#0d9488', color: '#fff', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '13px', flexShrink: 0 }}>{step.s}</span>
                <div><strong style={{ color: '#111827' }}>{step.t}</strong><p style={{ fontSize: '0.9rem', color: '#4b5563', margin: '4px 0 0', lineHeight: 1.5 }}>{step.d}</p></div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Accordion */}
        <section id="faq" style={{ padding: '24px 0', borderTop: '1px solid #e5e7eb' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#111827', marginBottom: '16px' }}>Frequently Asked Questions</h2>
          {faqItems.map((f, i) => (
            <details key={i} style={{ borderBottom: '1px solid #e5e7eb', padding: '12px 0' }}>
              <summary style={{ fontSize: '0.95rem', fontWeight: 600, color: '#111827', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between' }}>
                {f.q}
                <span style={{ color: '#9ca3af', marginLeft: '12px', flexShrink: 0 }}>+</span>
              </summary>
              <p style={{ fontSize: '0.9rem', color: '#4b5563', lineHeight: 1.6, marginTop: '8px' }}>{f.a}</p>
            </details>
          ))}
        </section>

        {/* Related Links */}
        <section style={{ padding: '24px 0', borderTop: '1px solid #e5e7eb' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#111827', marginBottom: '12px' }}>Related Pages</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '8px' }}>
            <li><a href={`/${page.stateSlug}/${page.conditionSlug}`} style={{ color: '#0d9488', fontWeight: 500 }}>{page.condition} Treatment Online in {state.name}</a></li>
            <li><a href={`/${page.stateSlug}/online-doctor-visits`} style={{ color: '#0d9488', fontWeight: 500 }}>Online Doctor Visits in {state.name}</a></li>
            <li><a href={`/${page.stateSlug}`} style={{ color: '#0d9488', fontWeight: 500 }}>TeleDirectMD in {state.name}</a></li>
            <li><a href={`/${page.conditionSlug}`} style={{ color: '#0d9488', fontWeight: 500 }}>{page.condition} Treatment Online (National)</a></li>
          </ul>
        </section>

        {/* Disclaimer */}
        <section style={{ padding: '20px 0', borderTop: '1px solid #e5e7eb' }}>
          <p style={{ fontSize: '0.78rem', color: '#9ca3af', lineHeight: 1.5 }}>
            TeleDirectMD provides MD-only virtual care for adults (18+) in {state.name}. Insurance is not required. A prescription for {page.medication.toLowerCase()} is not guaranteed and depends on the clinical evaluation. You must be physically located in {state.name} at the time of your visit. TeleDirectMD does not prescribe controlled substances. TeleDirectMD is not an emergency service.
          </p>
          <p style={{ fontSize: '0.75rem', color: '#d1d5db', marginTop: '8px' }}>Medically reviewed by Parth Bhavsar, MD. Last updated {today}.</p>
        </section>
      </div>
    </>
  );
}
