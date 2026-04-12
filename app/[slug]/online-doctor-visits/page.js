import { getStates, getStateBySlug, getConditionCategories } from '../../../lib/get-data';
import { notFound } from 'next/navigation';

const defined_states = ['al', 'az', 'ca', 'co', 'ct', 'dc', 'de', 'fl', 'ga', 'hi', 'id', 'il', 'in', 'ia', 'ks', 'ky', 'la', 'me', 'md', 'mi', 'mn', 'ms', 'mo', 'mt', 'ne', 'nv', 'nh', 'nj', 'nc', 'nd', 'oh', 'ok', 'pa', 'sc', 'sd', 'tn', 'tx', 'ut', 'wa', 'wv', 'wi', 'wy'];

export async function generateStaticParams() {
  return defined_states.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const state = getStateBySlug(slug);
  if (!state || !defined_states.includes(slug)) return {};
  const baseUrl = 'https://teledirectmd.com';
  const pageUrl = `${baseUrl}/${slug}/online-doctor-visits`;
  const title = `Online Doctor Visits in ${state.name} | Physician-Led Video Care | TeleDirectMD`;
  const description = `See a board-certified MD online in ${state.name} by secure video visit. TeleDirectMD offers physician-led telehealth for urgent care, chronic medication refills, and more. Self pay option starting at $49. Insurance is not required.`;
  return {
    title,
    description,
    robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    authors: [{ name: 'Parth Bhavsar, MD' }],
    openGraph: { type: 'website', siteName: 'TeleDirectMD', locale: 'en_US', title, description, url: pageUrl, images: [{ url: `${baseUrl}/assets/social/tdmd-${slug}-og.png`, alt: `TeleDirectMD online doctor visits in ${state.name}` }] },
    twitter: { card: 'summary_large_image', title, description, images: [`${baseUrl}/assets/social/tdmd-${slug}-og.png`] },
    alternates: { canonical: pageUrl },
  };
}

export default async function OnlineDoctorVisitsPage({ params }) {
  const { slug } = await params;
  const state = getStateBySlug(slug);
  if (!state || !defined_states.includes(slug)) notFound();
  const categories = getConditionCategories();
  const totalConditions = categories.reduce((sum, cat) => sum + cat.conditions.length, 0);
  const cities = state.cities || [];
  const baseUrl = 'https://teledirectmd.com';
  const pageUrl = `${baseUrl}/${slug}/online-doctor-visits`;
  const today = new Date().toISOString().split('T')[0];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${baseUrl}#website`,
        url: baseUrl,
        name: 'TeleDirectMD',
        publisher: { '@id': `${baseUrl}#organization` },
        inLanguage: 'en-US'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumbs`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${baseUrl}/` },
          { '@type': 'ListItem', position: 2, name: 'States We Serve', item: `${baseUrl}/states-we-serve` },
          { '@type': 'ListItem', position: 3, name: state.name, item: `${baseUrl}/${slug}` },
          { '@type': 'ListItem', position: 4, name: 'Online Doctor Visits', item: pageUrl }
        ]
      },
      {
        '@type': 'MedicalBusiness',
        '@id': `${pageUrl}#medical-business`,
        name: `TeleDirectMD - ${state.name}`,
        url: pageUrl,
        telephone: '+1-678-956-1855',
        email: 'contact@teledirectmd.com',
        logo: `${baseUrl}/assets/brand/teledirectmd-logo.png`,
        description: `TeleDirectMD provides physician-led video visits in ${state.name} for ${totalConditions} adult conditions, starting at $49. Insurance is not required.`,
        areaServed: { '@type': 'AdministrativeArea', name: state.name },
        medicalSpecialty: 'Family Medicine',
        availableService: {
          '@type': 'MedicalProcedure',
          name: 'Telehealth Video Visit',
          procedureType: 'https://schema.org/NoninvasiveProcedure',
          description: 'Synchronous physician-led video evaluation for adults 18+ located in ' + state.name
        }
      },
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: `What conditions can TeleDirectMD treat online in ${state.name}?`,
            acceptedAnswer: { '@type': 'Answer', text: `TeleDirectMD evaluates and treats ${totalConditions} adult conditions in ${state.name} by secure video visit, including urgent care, chronic medication refills, skin conditions, and wellness visits. Self pay option starting at $49. Insurance is not required.` }
          },
          {
            '@type': 'Question',
            name: `How do online doctor visits work in ${state.name}?`,
            acceptedAnswer: { '@type': 'Answer', text: `You book a visit, connect by secure video with a board-certified MD licensed in ${state.name}, receive an evaluation and treatment plan, and if clinically appropriate, a prescription is sent to your preferred pharmacy. Visits are synchronous and physician-led.` }
          },
          {
            '@type': 'Question',
            name: 'Why does TeleDirectMD use video visits instead of questionnaires?',
            acceptedAnswer: { '@type': 'Answer', text: 'TeleDirectMD uses synchronous video visits because live physician evaluation allows for better clinical assessment, real-time history-taking, appropriate red-flag screening, and individualized treatment decisions. This model meets or exceeds telehealth standards of care in states that require a real-time clinical encounter for prescribing.' }
          },
          {
            '@type': 'Question',
            name: `How much does an online doctor visit cost in ${state.name}?`,
            acceptedAnswer: { '@type': 'Answer', text: `TeleDirectMD offers a self pay option starting at $49 for an adult video visit in ${state.name}. Insurance is not required. There are no hidden fees. If a prescription is not clinically appropriate, you still receive a complete evaluation and guidance.` }
          },
          {
            '@type': 'Question',
            name: 'Do I need insurance for a TeleDirectMD visit?',
            acceptedAnswer: { '@type': 'Answer', text: 'No. Insurance is not required. TeleDirectMD offers a transparent self pay option starting at $49. Prescription costs are separate and vary by medication and pharmacy.' }
          }
        ]
      }
    ]
  };

  const priorityConditions = [
    { slug: 'hair-loss-treatment-online', name: 'Hair Loss Treatment', desc: 'Physician-led evaluation for androgenetic alopecia with guideline-based finasteride and minoxidil discussion.' },
    { slug: 'erectile-dysfunction-treatment-online', name: 'Erectile Dysfunction Treatment', desc: 'Comprehensive MD evaluation with cardiovascular risk screening and PDE5 inhibitor discussion if clinically appropriate.' },
    { slug: 'acne-treatment-online', name: 'Acne Treatment', desc: 'Evaluation for mild-to-moderate acne with topical and oral treatment options discussed during your video visit.' },
    { slug: 'uti-treatment-online', name: 'UTI Treatment', desc: 'Urgent care evaluation for uncomplicated urinary tract infections with same-day prescription if appropriate.' },
    { slug: 'sinus-infection-treatment-online', name: 'Sinus Infection Treatment', desc: 'Evaluation for acute sinusitis with antibiotic stewardship and symptom management guidance.' },
    { slug: 'acid-reflux-refills-online', name: 'Acid Reflux Medication Refills', desc: 'Chronic medication refill evaluation for GERD and acid reflux management.' },
    { slug: 'hypertension-refills-online', name: 'Blood Pressure Medication Refills', desc: 'Ongoing medication refill evaluation for adults managing hypertension.' },
    { slug: 'asthma-refills-online', name: 'Asthma Medication Refills', desc: 'Inhaler and controller medication refill evaluation for adults with established asthma.' }
  ];

  const whyVideoReasons = [
    { title: 'Comprehensive clinical assessment', text: 'A live video visit allows your physician to take a detailed history, ask follow-up questions in real time, and observe relevant clinical information that questionnaires cannot capture.' },
    { title: 'Appropriate red-flag screening', text: 'During a synchronous encounter, your MD can identify warning signs that may require urgent in-person care or specialist referral, providing a safety layer that asynchronous models lack.' },
    { title: 'Individualized treatment decisions', text: 'Treatment is tailored to your specific history, medications, and risk factors during the visit rather than based on a standardized protocol from a form.' },
    { title: 'Meets higher standards of care', text: 'Some states require a synchronous clinical encounter for certain prescriptions. TeleDirectMD meets or exceeds these standards across all states where we are licensed.' }
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px 60px' }}>

        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" style={{ fontSize: '14px', color: '#6b7280', padding: '16px 0', borderBottom: '1px solid #e5e7eb' }}>
          <a href="/" style={{ color: '#0d9488' }}>Home</a>
          <span style={{ margin: '0 8px' }}>/</span>
          <a href="/states-we-serve" style={{ color: '#0d9488' }}>States We Serve</a>
          <span style={{ margin: '0 8px' }}>/</span>
          <a href={`/${slug}`} style={{ color: '#0d9488' }}>{state.name}</a>
          <span style={{ margin: '0 8px' }}>/</span>
          <span>Online Doctor Visits</span>
        </nav>

        {/* Hero */}
        <section style={{ padding: '40px 0 32px' }}>
          <h1 style={{ fontSize: '2.2rem', fontWeight: 700, lineHeight: 1.2, color: '#111827', marginBottom: '12px' }}>
            Online Doctor Visits in {state.name}
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#0d9488', fontWeight: 600, marginBottom: '16px' }}>
            Physician-led video care for {state.name} adults. Self pay option starting at $49. Insurance is not required.
          </p>
          <p style={{ fontSize: '1rem', color: '#374151', lineHeight: 1.7 }}>
            TeleDirectMD offers board-certified physician video visits for adults located in {state.name}. Every visit is a live, synchronous encounter with an MD. There are no mid-level providers, no asynchronous questionnaires, and no subscription requirements. We evaluate and treat {totalConditions} conditions across urgent care, chronic medication refills, skin and bite concerns, sexual health, and wellness. If treatment is clinically appropriate, a prescription is sent to your preferred pharmacy. If your condition requires in-person evaluation, we will tell you directly and provide clear guidance on your next step.
          </p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '24px', flexWrap: 'wrap' }}>
            <a href="/book-online" style={{ display: 'inline-block', background: '#0d9488', color: '#fff', padding: '14px 32px', borderRadius: '8px', fontWeight: 600, fontSize: '1rem', textDecoration: 'none' }}>Book a Visit</a>
            <a href={`/${slug}`} style={{ display: 'inline-block', background: '#fff', color: '#0d9488', border: '2px solid #0d9488', padding: '12px 28px', borderRadius: '8px', fontWeight: 600, fontSize: '1rem', textDecoration: 'none' }}>Explore {state.name} Pages</a>
            <a href="/what-we-treat" style={{ display: 'inline-block', background: '#fff', color: '#374151', border: '2px solid #d1d5db', padding: '12px 28px', borderRadius: '8px', fontWeight: 600, fontSize: '1rem', textDecoration: 'none' }}>View All Conditions</a>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" style={{ padding: '32px 0', borderTop: '1px solid #e5e7eb' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#111827', marginBottom: '20px' }}>How Online Doctor Visits Work in {state.name}</h2>
          <div style={{ display: 'grid', gap: '16px' }}>
            {[
              { step: '1', title: 'Book your visit', text: `Choose a time that works for you. You must be physically located in ${state.name} at the time of the visit.` },
              { step: '2', title: 'Connect by secure video with a board-certified MD', text: 'Your visit is a live, synchronous encounter with a physician. No questionnaires, no mid-levels, no chatbots.' },
              { step: '3', title: 'Receive your evaluation and treatment plan', text: 'Your MD evaluates your condition, screens for red flags, and discusses treatment options. If a prescription is clinically appropriate, it is sent to your preferred pharmacy.' },
              { step: '4', title: 'Follow-up guidance and clear next steps', text: 'You receive clear instructions on what to watch for, when to follow up, and when to seek in-person care if needed.' }
            ].map((s) => (
              <div key={s.step} style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <span style={{ background: '#0d9488', color: '#fff', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '14px', flexShrink: 0 }}>{s.step}</span>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#111827', margin: 0 }}>{s.title}</h3>
                </div>
                <p style={{ fontSize: '0.95rem', color: '#4b5563', lineHeight: 1.6, margin: 0, paddingLeft: '44px' }}>{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Video Matters */}
        <section id="why-video" style={{ padding: '32px 0', borderTop: '1px solid #e5e7eb' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#111827', marginBottom: '8px' }}>Why TeleDirectMD Uses Live Video Visits</h2>
          <p style={{ fontSize: '0.95rem', color: '#4b5563', lineHeight: 1.6, marginBottom: '20px' }}>
            Many online healthcare platforms rely on asynchronous questionnaires where you fill out a form and receive a prescription without ever speaking to a physician. TeleDirectMD takes a different approach. Every visit is a live, synchronous video encounter with a board-certified MD who evaluates your condition in real time.
          </p>
          <div style={{ display: 'grid', gap: '14px' }}>
            {whyVideoReasons.map((r, i) => (
              <div key={i} style={{ background: '#f0fdfa', border: '1px solid #99f6e4', borderRadius: '10px', padding: '18px' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#0f766e', marginBottom: '6px' }}>{r.title}</h3>
                <p style={{ fontSize: '0.92rem', color: '#374151', lineHeight: 1.6, margin: 0 }}>{r.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Conditions We Treat */}
        <section id="conditions" style={{ padding: '32px 0', borderTop: '1px solid #e5e7eb' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#111827', marginBottom: '8px' }}>Conditions We Commonly Treat in {state.name}</h2>
          <p style={{ fontSize: '0.95rem', color: '#4b5563', lineHeight: 1.6, marginBottom: '20px' }}>
            TeleDirectMD evaluates and treats {totalConditions} adult conditions in {state.name}. Below are some of the most commonly requested evaluations. Each links to a dedicated {state.name}-specific treatment page with eligibility details, medication options, and FAQs.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '14px' }}>
            {priorityConditions.map((c) => (
              <a key={c.slug} href={`/${slug}/${c.slug}`} style={{ display: 'block', background: '#fff', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '18px', textDecoration: 'none', transition: 'border-color 0.2s' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#0d9488', marginBottom: '6px' }}>{c.name}</h3>
                <p style={{ fontSize: '0.88rem', color: '#4b5563', lineHeight: 1.5, margin: 0 }}>{c.desc}</p>
              </a>
            ))}
          </div>
          <p style={{ fontSize: '0.9rem', color: '#6b7280', marginTop: '16px' }}>
            <a href={`/${slug}`} style={{ color: '#0d9488', fontWeight: 600 }}>View all {totalConditions} conditions available in {state.name} &rarr;</a>
          </p>
        </section>

        {/* Pricing */}
        <section id="pricing" style={{ padding: '32px 0', borderTop: '1px solid #e5e7eb' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#111827', marginBottom: '16px' }}>What Does an Online Doctor Visit Cost in {state.name}?</h2>
          <div style={{ background: '#f0fdfa', border: '2px solid #0d9488', borderRadius: '12px', padding: '24px', marginBottom: '16px' }}>
            <div style={{ fontSize: '2.2rem', fontWeight: 700, color: '#0d9488' }}>$49</div>
            <div style={{ fontSize: '0.95rem', color: '#374151', marginTop: '4px' }}>Self pay option. Insurance is not required.</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0 0' }}>
              {['Board-certified MD evaluation by video', 'Red-flag screening and clinical triage', 'Treatment plan and prescription if clinically appropriate', 'Follow-up guidance and escalation instructions', 'No hidden fees and no subscription required'].map((item, i) => (
                <li key={i} style={{ fontSize: '0.92rem', color: '#374151', padding: '4px 0', display: 'flex', gap: '8px' }}>
                  <span style={{ color: '#0d9488', fontWeight: 700 }}>&#10003;</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <p style={{ fontSize: '0.88rem', color: '#6b7280' }}>Prescription costs are separate and vary by medication and pharmacy. If medication is not clinically appropriate, you still receive a complete evaluation and clear next steps.</p>
        </section>

        {/* FAQ */}
        <section id="faq" style={{ padding: '32px 0', borderTop: '1px solid #e5e7eb' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#111827', marginBottom: '20px' }}>Frequently Asked Questions About Online Doctor Visits in {state.name}</h2>
          {jsonLd['@graph'].find(g => g['@type'] === 'FAQPage').mainEntity.map((q, i) => (
            <details key={i} style={{ borderBottom: '1px solid #e5e7eb', padding: '14px 0' }}>
              <summary style={{ fontSize: '1rem', fontWeight: 600, color: '#111827', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {q.name}
                <span style={{ color: '#9ca3af', fontSize: '1.2rem', marginLeft: '12px', flexShrink: 0 }}>+</span>
              </summary>
              <p style={{ fontSize: '0.92rem', color: '#4b5563', lineHeight: 1.6, marginTop: '10px' }}>{q.acceptedAnswer.text}</p>
            </details>
          ))}
        </section>

        {/* Cities */}
        {cities.length > 0 && (
          <section style={{ padding: '32px 0', borderTop: '1px solid #e5e7eb' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#111827', marginBottom: '12px' }}>Adults We Serve Across {state.name}</h2>
            <p style={{ fontSize: '0.92rem', color: '#4b5563', lineHeight: 1.6 }}>
              TeleDirectMD evaluates adults located throughout {state.name}, including {cities.slice(0, 10).join(', ')}{cities.length > 10 ? `, and more` : ''}. Whether you are in a major metro or a rural area, the same telehealth eligibility and clinical standards apply. You must be physically located in {state.name} at the time of the visit.
            </p>
          </section>
        )}

        {/* Final CTA */}
        <section style={{ padding: '32px 0', borderTop: '1px solid #e5e7eb', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#111827', marginBottom: '8px' }}>Ready to See a Doctor Online in {state.name}?</h2>
          <p style={{ fontSize: '0.95rem', color: '#4b5563', marginBottom: '20px' }}>Insurance is not required. Adult-only video visits. MD-only care. Safety-first triage and clear next steps.</p>
          <a href="/book-online" style={{ display: 'inline-block', background: '#0d9488', color: '#fff', padding: '14px 40px', borderRadius: '8px', fontWeight: 600, fontSize: '1.05rem', textDecoration: 'none' }}>Book a Visit Now</a>
        </section>

        {/* Disclaimer */}
        <section style={{ padding: '24px 0', borderTop: '1px solid #e5e7eb' }}>
          <p style={{ fontSize: '0.78rem', color: '#9ca3af', lineHeight: 1.5 }}>
            TeleDirectMD provides MD-only virtual urgent care for adults (18+) in {state.name}. Insurance is not required. You must be physically located in {state.name} at the time of your video visit. TeleDirectMD does not prescribe controlled substances. TeleDirectMD is not an emergency service and is not a replacement for urgent in-person care. If you are experiencing a medical emergency, call 911.
          </p>
          <p style={{ fontSize: '0.75rem', color: '#d1d5db', marginTop: '8px' }}>Medically reviewed by Parth Bhavsar, MD. Last updated {today}.</p>
        </section>

      </div>
    </>
  );
}
