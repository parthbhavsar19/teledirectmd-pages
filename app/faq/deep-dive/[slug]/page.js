import { getStateBySlug } from '../../../../lib/get-data';
import { getStateInsurance } from '../../../../lib/insurance-data';
import { notFound } from 'next/navigation';

const STATES = ['al','az','ca','co','ct','dc','de','fl','ga','hi','id','il','in','ia','ks','ky','la','me','md','mi','mn','ms','mo','mt','ne','nv','nh','nj','nc','nd','oh','ok','pa','sc','sd','tn','tx','ut','wa','wv','wi','wy'];

const MEDICATIONS = [
  { key: 'finasteride', medication: 'Finasteride', condition: 'Hair Loss', conditionSlug: 'hair-loss-treatment-online', slugPrefix: 'can-you-get-finasteride-online-in', concern: 'hair loss', evalContext: 'experiencing hair loss and want to discuss treatment options including' },
  { key: 'sildenafil', medication: 'Sildenafil', condition: 'Erectile Dysfunction', conditionSlug: 'erectile-dysfunction-treatment-online', slugPrefix: 'can-you-get-sildenafil-online-in', concern: 'erectile dysfunction', evalContext: 'experiencing erectile dysfunction and want to discuss treatment options including' },
  { key: 'tadalafil', medication: 'Tadalafil', condition: 'Erectile Dysfunction', conditionSlug: 'erectile-dysfunction-treatment-online', slugPrefix: 'can-you-get-tadalafil-online-in', concern: 'erectile dysfunction', evalContext: 'experiencing erectile dysfunction and want to discuss treatment options including' },
  { key: 'propranolol', medication: 'Propranolol', condition: 'Speech Anxiety', conditionSlug: 'performance-anxiety-treatment-online', slugPrefix: 'can-you-get-propranolol-online-in', concern: 'speech anxiety', evalContext: 'experiencing speech anxiety and want to discuss treatment options including' },
  { key: 'uti-antibiotics', medication: 'UTI Antibiotics', condition: 'UTI Treatment', conditionSlug: 'uti-treatment-online', slugPrefix: 'can-you-get-uti-treatment-online-in', concern: 'urinary tract infection symptoms', evalContext: 'experiencing UTI symptoms and want to discuss treatment options including antibiotics for' }
];

const STATE_NAMES = { al:'alabama',az:'arizona',ca:'california',co:'colorado',ct:'connecticut',dc:'washington-dc',de:'delaware',fl:'florida',ga:'georgia',hi:'hawaii',id:'idaho',il:'illinois',in:'indiana',ia:'iowa',ks:'kansas',ky:'kentucky',la:'louisiana',me:'maine',md:'maryland',mi:'michigan',mn:'minnesota',ms:'mississippi',mo:'missouri',mt:'montana',ne:'nebraska',nv:'nevada',nh:'new-hampshire',nj:'new-jersey',nc:'north-carolina',nd:'north-dakota',oh:'ohio',ok:'oklahoma',pa:'pennsylvania',sc:'south-carolina',sd:'south-dakota',tn:'tennessee',tx:'texas',ut:'utah',wa:'washington',wv:'west-virginia',wi:'wisconsin',wy:'wyoming' };

const FAQ_PAGES = [];
MEDICATIONS.forEach((med) => {
  STATES.forEach((st) => {
    FAQ_PAGES.push({ slug: `${med.slugPrefix}-${STATE_NAMES[st]}`, stateSlug: st, conditionSlug: med.conditionSlug, medication: med.medication, condition: med.condition, concern: med.concern, evalContext: med.evalContext });
  });
});

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
  const medLower = page.medication.toLowerCase();
  const title = `Can You Get ${page.medication} Online in ${state.name}? | TeleDirectMD`;
  const stateAbbr = state.abbreviation || page.stateSlug.toUpperCase();
  const stateIns = getStateInsurance(stateAbbr);
  const pricingNote = stateIns
    ? `$49 flat fee or insurance — we accept ${stateIns.map(p => p.name).join(', ')} in ${state.name}.`
    : `Self pay option starting at $49. No insurance required.`;
  const description = `Yes, adults in ${state.name} may be eligible for a ${medLower} evaluation by video visit with a board-certified MD at TeleDirectMD. ${pricingNote}`;
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
  const medLower = page.medication.toLowerCase();
  const isUTI = page.condition === 'UTI Treatment';
  const medDisplay = isUTI ? 'antibiotics for a UTI' : medLower;
  const stateAbbrR = state.abbreviation || page.stateSlug.toUpperCase();
  const stateInsR = getStateInsurance(stateAbbrR);
  const pricingBlurb = stateInsR
    ? `$49 flat fee or insurance — we accept ${stateInsR.map(p => p.name).join(', ')} in ${state.name}.`
    : `Self pay option starting at $49. No insurance required.`;
  const pricingShort = stateInsR
    ? `The visit is $49 flat fee, or you can use insurance if you have ${stateInsR.map(p => p.name).join(', ')}.`
    : `The visit is a self pay option starting at $49. Insurance is not required.`;

  const faqItems = [
    { q: `Can I get ${medDisplay} online in ${state.name}?`, a: `Yes. Adults physically located in ${state.name} may be eligible for a ${page.concern} evaluation through a TeleDirectMD video visit with a board-certified MD. If ${medDisplay} is clinically appropriate based on your history and evaluation, a prescription can be sent to your preferred pharmacy. ${pricingBlurb}` },
    { q: `Do I need a video visit for ${medDisplay} in ${state.name}?`, a: `TeleDirectMD requires a live, synchronous video visit with a board-certified MD for all evaluations. This ensures a proper clinical assessment, red-flag screening, and individualized treatment decisions. Some states require a real-time clinical encounter for certain prescriptions, and TeleDirectMD meets or exceeds these standards.` },
    { q: `How much does a ${page.concern} evaluation cost?`, a: stateInsR
      ? `The TeleDirectMD visit is $49 flat fee, or you can use insurance. We accept ${stateInsR.map(p => p.name).join(', ')} in ${state.name}. Prescription costs are separate and vary by pharmacy. There are no hidden fees and no subscription is required.`
      : `The TeleDirectMD visit is a self pay option starting at $49. Insurance is not required. Prescription costs are separate and vary by pharmacy. There are no hidden fees and no subscription is required.` },
    { q: `What happens during the visit?`, a: `You connect by secure video with a board-certified MD licensed in ${state.name}. The physician takes your medical history, evaluates your condition, screens for red flags or contraindications, and discusses treatment options including ${medDisplay} if appropriate. If a prescription is clinically appropriate, it is sent to your preferred pharmacy.` },
    { q: `What if ${medDisplay} is not appropriate for me?`, a: `If ${medDisplay} is not clinically appropriate based on your evaluation, your MD will explain why and discuss alternative options or recommend in-person follow-up. You still receive a complete evaluation and clear guidance on next steps.` },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
            Yes. Adults in {state.name} may be eligible for a {medDisplay} evaluation by video visit with a board-certified MD.
          </p>
          <p style={{ fontSize: '1rem', color: '#374151', lineHeight: 1.7 }}>
            TeleDirectMD offers live, physician-led video visits for adults located in {state.name} who are {page.evalContext} {medDisplay}. Every visit is a synchronous encounter with a board-certified MD who evaluates your condition, screens for contraindications, and discusses whether {medDisplay} or other treatments may be appropriate for you. {pricingBlurb}
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
              Yes, adults in {state.name} can get a {medDisplay} evaluation online through TeleDirectMD. You will see a board-certified MD by live video visit. If {medDisplay} is clinically appropriate, a prescription is sent to your preferred pharmacy. {pricingShort} No subscription is needed.
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section style={{ padding: '24px 0', borderTop: '1px solid #e5e7eb' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#111827', marginBottom: '16px' }}>How to Get a {page.medication} Evaluation Online in {state.name}</h2>
          <div style={{ display: 'grid', gap: '12px' }}>
            {[
              { s: '1', t: 'Book your visit', d: `Choose a time. You must be physically in ${state.name} at the time of the visit.` },
              { s: '2', t: 'Connect by video with a board-certified MD', d: `Your physician evaluates your ${page.concern}, reviews your history, and screens for contraindications.` },
              { s: '3', t: 'Receive your treatment plan', d: `If ${medDisplay} is appropriate, a prescription is sent to your pharmacy. If not, your MD explains next steps.` }
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
            TeleDirectMD provides MD-only virtual care for adults (18+) in {state.name}. {stateInsR ? `We accept ${stateInsR.map(p => p.name).join(', ')} in ${state.name}. Self-pay is also available starting at $49.` : 'Insurance is not required. Self pay option starting at $49.'} A prescription for {medDisplay} is not guaranteed and depends on the clinical evaluation. You must be physically located in {state.name} at the time of your visit. TeleDirectMD does not prescribe controlled substances. TeleDirectMD is not an emergency service.
          </p>
          <p style={{ fontSize: '0.75rem', color: '#d1d5db', marginTop: '8px' }}>Medically reviewed by Parth Bhavsar, MD. Last updated {today}.</p>
        </section>
      </div>
    </>
  );
}
