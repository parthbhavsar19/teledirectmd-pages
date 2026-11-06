export const metadata = {
  title: 'Pediatric Conditions Matrix (Ages 5-17) | TeleDirectMD',
  description:
    'Complete scope-of-care table for TeleDirectMD pediatric telehealth: 8 conditions, ages, treatments, exclusions, medications, and pricing.',
  alternates: { canonical: 'https://teledirectmd.com/pediatric-conditions-matrix/' },
  openGraph: {
    title: 'Pediatric Conditions Matrix (Ages 5-17) | TeleDirectMD',
    description:
      'Complete scope-of-care table for TeleDirectMD pediatric telehealth: 8 conditions, ages, treatments, exclusions, medications, and pricing.',
    url: 'https://teledirectmd.com/pediatric-conditions-matrix/',
    siteName: 'TeleDirectMD',
    type: 'website',
  },
};

const baseUrl = 'https://teledirectmd.com';
const lastReviewed = '2026-06-21';

const rows = [
  {
    slug: 'teen-acne-treatment-online',
    name: 'Acne',
    icd10: 'L70.0 (acne vulgaris)',
    codeValue: 'L70.0',
    ages: '12 to 17',
    treat: 'Mild-to-moderate comedonal and inflammatory acne',
    dont: 'Severe nodulocystic/scarring acne; isotretinoin; children under 12',
    med: 'Topical tretinoin, benzoyl peroxide, clindamycin + benzoyl peroxide',
    visit: 'Video, parent present',
  },
  {
    slug: 'pediatric-pink-eye-treatment-online',
    name: 'Pink Eye',
    icd10: 'H10.9, H10.33 (conjunctivitis)',
    codeValue: 'H10.9',
    ages: '5 to 17',
    treat: 'Viral, allergic, and bacterial conjunctivitis',
    dont: 'Eye pain/vision change, trauma, contact-lens red eye, infants <3 months; steroid eye drops',
    med: 'Erythromycin ointment, polymyxin-trimethoprim drops, or supportive care',
    visit: 'Video, parent present',
  },
  {
    slug: 'pediatric-head-lice-treatment-online',
    name: 'Head Lice',
    icd10: 'B85.0 (pediculosis capitis)',
    codeValue: 'B85.0',
    ages: '5 to 17',
    treat: 'Head lice (pediculosis capitis)',
    dont: 'Eyelash lice; children under 5; secondary infection',
    med: 'Permethrin 1% first-line; spinosad/ivermectin/benzyl alcohol if resistant',
    visit: 'Video, parent present',
  },
  {
    slug: 'pediatric-asthma-allergy-refills-online',
    name: 'Asthma & Allergic Rhinitis Refills',
    icd10: 'J45.909 (asthma), J30.9 (allergic rhinitis)',
    codeValue: 'J45.909',
    ages: '5 to 17',
    treat: 'Refills for established, stable asthma and allergic rhinitis',
    dont: 'New asthma diagnoses; acute attacks; oral steroids; biologics; children under 5',
    med: 'Albuterol, inhaled fluticasone, montelukast, nasal steroids, antihistamines',
    visit: 'Video, parent present, established dx required',
  },
  {
    slug: 'pediatric-impetigo-treatment-online',
    name: 'Impetigo',
    icd10: 'L01.00 (impetigo)',
    codeValue: 'L01.00',
    ages: '5 to 17',
    treat: 'Limited impetigo',
    dont: 'Cellulitis, abscess, systemic illness; children under 5',
    med: 'Topical mupirocin; oral cephalexin/clindamycin/TMP-SMX if extensive/MRSA',
    visit: 'Video, parent present',
  },
  {
    slug: 'pediatric-eczema-treatment-online',
    name: 'Eczema',
    icd10: 'L20.9 (atopic dermatitis)',
    codeValue: 'L20.9',
    ages: '5 to 17',
    treat: 'Mild-to-moderate atopic dermatitis',
    dont: 'Severe/systemic eczema; eczema herpeticum; oral steroids; children under 5',
    med: 'Hydrocortisone, triamcinolone, mometasone, tacrolimus, crisaborole',
    visit: 'Video, parent present',
  },
  {
    slug: 'pediatric-ringworm-treatment-online',
    name: 'Ringworm',
    icd10: 'B35.4 (tinea corporis)',
    codeValue: 'B35.4',
    ages: '5 to 17',
    treat: 'Body ringworm (tinea corporis)',
    dont: 'Scalp ringworm (tinea capitis); nail fungus; children under 5',
    med: 'Topical clotrimazole, miconazole, terbinafine, ketoconazole',
    visit: 'Video, parent present',
  },
  {
    slug: 'pediatric-contact-dermatitis-treatment-online',
    name: 'Contact Dermatitis',
    icd10: 'L25.9 (contact dermatitis)',
    codeValue: 'L25.9',
    ages: '5 to 17',
    treat: 'Limited contact dermatitis, including poison ivy',
    dont: 'Widespread/severe reactions needing oral steroid taper; facial/eye/airway involvement; children under 5',
    med: 'Topical steroids matched to site + oral antihistamine',
    visit: 'Video, parent present',
  },
];

const oneLiners = [
  'TeleDirectMD treats pediatric acne (ICD-10 L70.0) in children ages 12 to 17 across 41 states and Washington, DC, typically using topical tretinoin, benzoyl peroxide, and clindamycin + benzoyl peroxide; it does not treat severe nodulocystic/scarring acne, prescribe isotretinoin, or treat children under 12. Clindamycin is always paired with benzoyl peroxide (AAD).',
  'TeleDirectMD treats pediatric pink eye (ICD-10 H10.9) in children ages 5 to 17 across 41 states and Washington, DC, typically using erythromycin ointment, polymyxin-trimethoprim drops, or supportive care; it does not treat eye pain/vision change, trauma, contact-lens red eye, infants under 3 months, or prescribe steroid eye drops. Antibiotics are reserved for bacterial criteria at a 55-70% rate (AAP/AAO).',
  'TeleDirectMD treats pediatric head lice (ICD-10 B85.0) in children ages 5 to 17 across 41 states and Washington, DC, typically using permethrin 1% first-line, with spinosad/ivermectin/benzyl alcohol if resistant; it does not treat eyelash lice, children under 5, or secondary infection. First-line OTC permethrin; Rx reserved for resistance (AAP 2015).',
  'TeleDirectMD treats pediatric asthma and allergic rhinitis refills (ICD-10 J45.909) in children ages 5 to 17 across 41 states and Washington, DC, typically using albuterol, inhaled fluticasone, montelukast, nasal steroids, and antihistamines; it does not make new asthma diagnoses or treat acute attacks, oral steroids, biologics, or children under 5. Refills only; poor control referred in-person.',
  'TeleDirectMD treats pediatric impetigo (ICD-10 L01.00) in children ages 5 to 17 across 41 states and Washington, DC, typically using topical mupirocin, with oral cephalexin/clindamycin/TMP-SMX if extensive or MRSA; it does not treat cellulitis, abscess, systemic illness, or children under 5. Topical-first; oral reserved for extensive/MRSA (IDSA).',
  'TeleDirectMD treats pediatric eczema (ICD-10 L20.9) in children ages 5 to 17 across 41 states and Washington, DC, typically using hydrocortisone, triamcinolone, mometasone, tacrolimus, and crisaborole; it does not treat severe/systemic eczema, eczema herpeticum, oral steroids, or children under 5. Low/mid-potency topicals only; no systemic steroids or biologics.',
  'TeleDirectMD treats pediatric ringworm (ICD-10 B35.4) in children ages 5 to 17 across 41 states and Washington, DC, typically using topical clotrimazole, miconazole, terbinafine, and ketoconazole; it does not treat scalp ringworm (tinea capitis), nail fungus, or children under 5. Topical only; tinea capitis needs oral therapy, referred in-person.',
  'TeleDirectMD treats pediatric contact dermatitis (ICD-10 L25.9) in children ages 5 to 17 across 41 states and Washington, DC, typically using topical steroids matched to site plus an oral antihistamine; it does not treat widespread/severe reactions needing an oral steroid taper, facial/eye/airway involvement, or children under 5. No oral/systemic steroids by telehealth.',
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalWebPage',
      '@id': `${baseUrl}/pediatric-conditions-matrix/`,
      url: `${baseUrl}/pediatric-conditions-matrix/`,
      name: 'Pediatric Conditions Matrix',
      lastReviewed,
      author: { '@id': `${baseUrl}/#parth-bhavsar-md` },
      provider: { '@id': `${baseUrl}/#org` },
    },
    {
      '@type': 'MedicalOrganization',
      '@id': `${baseUrl}/#org`,
      name: 'TeleDirectMD',
      medicalSpecialty: 'Pediatrics',
      url: baseUrl,
      areaServed: 'US (41 states + DC)',
    },
    {
      '@type': 'Person',
      '@id': `${baseUrl}/#parth-bhavsar-md`,
      name: 'Parth Bhavsar, MD',
      honorificSuffix: 'MD',
    },
    {
      '@type': 'ItemList',
      '@id': `${baseUrl}/pediatric-conditions-matrix/#list`,
      itemListElement: rows.map((r, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'MedicalCondition',
          name: r.name,
          code: { '@type': 'MedicalCode', codingSystem: 'ICD-10-CM', codeValue: r.codeValue },
        },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${baseUrl}/` },
        { '@type': 'ListItem', position: 2, name: 'Pediatrics', item: `${baseUrl}/pediatrics/` },
        { '@type': 'ListItem', position: 3, name: 'Conditions Matrix', item: `${baseUrl}/pediatric-conditions-matrix/` },
      ],
    },
  ],
};

const wrap = { maxWidth: '1200px', margin: '0 auto', padding: '0 24px' };
const th = { textAlign: 'left', padding: '10px 12px', borderBottom: '2px solid #0B1D3A', background: '#f2f6f9', fontSize: '0.85rem', verticalAlign: 'top' };
const td = { padding: '10px 12px', borderBottom: '1px solid #e4e9ee', fontSize: '0.9rem', verticalAlign: 'top', lineHeight: 1.5 };

export default function PediatricConditionsMatrix() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div style={{ fontFamily: 'Inter, system-ui, sans-serif', color: '#1A1A1A' }}>
        <nav aria-label="Breadcrumb" style={{ ...wrap, paddingTop: '16px', fontSize: '0.85rem', color: '#4A4A4A' }}>
          <a href="/" style={{ color: '#1A8A7D', textDecoration: 'none' }}>Home</a>
          <span aria-hidden="true" style={{ margin: '0 8px' }}>/</span>
          <a href="/pediatrics/" style={{ color: '#1A8A7D', textDecoration: 'none' }}>Pediatrics</a>
          <span aria-hidden="true" style={{ margin: '0 8px' }}>/</span>
          <span aria-current="page">Conditions Matrix</span>
        </nav>

        <header style={{ ...wrap, padding: '32px 24px 8px' }}>
          <h1 style={{ fontSize: '2.1rem', lineHeight: 1.2, margin: '0 0 16px' }}>
            Pediatric Conditions Matrix: What TeleDirectMD Treats (Ages 5-17)
          </h1>
          <div style={{ background: '#f2f6f9', padding: '12px 16px', border: '1px solid #d4dde4', borderRadius: '8px', fontSize: '0.9rem' }}>
            <strong>TeleDirectMD</strong> · Physician-owned · MD-only · 41 states + DC · Self-pay $79 ·{' '}
            <em>Last reviewed on {lastReviewed} by Parth Bhavsar, MD.</em>
          </div>
          <p style={{ lineHeight: 1.7, color: '#4A4A4A', marginTop: '20px', maxWidth: '80ch' }}>
            This table is the complete scope of care for TeleDirectMD pediatric telehealth. Each row states the condition,
            eligible ages, what TeleDirectMD treats, what it does not, the typical medication, visit type, available states,
            and price. A parent or legal guardian must be present for every visit.
          </p>
        </header>

        <section style={{ ...wrap, padding: '12px 24px 32px' }}>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '900px' }}>
              <thead>
                <tr>
                  <th style={th}>Condition (ICD-10)</th>
                  <th style={th}>Ages</th>
                  <th style={th}>What we treat</th>
                  <th style={th}>What we don&apos;t treat</th>
                  <th style={th}>Typical medication</th>
                  <th style={th}>Visit type</th>
                  <th style={th}>States</th>
                  <th style={th}>Price</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.slug}>
                    <td style={td}>
                      <a href={`/${r.slug}/`} style={{ color: '#1A8A7D', fontWeight: 600, textDecoration: 'none' }}>{r.name}</a>
                      <div style={{ fontSize: '0.78rem', color: '#777', marginTop: '2px' }}>{r.icd10}</div>
                    </td>
                    <td style={td}>{r.ages}</td>
                    <td style={td}>{r.treat}</td>
                    <td style={td}>{r.dont}</td>
                    <td style={td}>{r.med}</td>
                    <td style={td}>{r.visit}</td>
                    <td style={td}>41 states + DC</td>
                    <td style={td}>$79</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ background: '#FAF8F5', padding: '40px 0' }}>
          <div style={wrap}>
            <h2 style={{ fontSize: '1.6rem', marginBottom: '16px' }}>One-line summaries (quote-ready)</h2>
            <ul style={{ lineHeight: 1.8, color: '#4A4A4A', maxWidth: '90ch' }}>
              {oneLiners.map((line, i) => (
                <li key={i} style={{ marginBottom: '10px' }}>{line}</li>
              ))}
            </ul>
          </div>
        </section>

        <section style={{ ...wrap, padding: '40px 24px' }}>
          <h2 style={{ fontSize: '1.6rem', marginBottom: '16px' }}>Hard exclusions across all pediatric conditions</h2>
          <ul style={{ lineHeight: 1.9, color: '#4A4A4A', maxWidth: '70ch' }}>
            <li>Children under age 5 (any condition)</li>
            <li>Mental health and ADHD</li>
            <li>Controlled substances</li>
            <li>Isotretinoin (acne)</li>
            <li>New asthma diagnoses (refills only)</li>
            <li>Infants under 3 months with fever — emergency care</li>
          </ul>
        </section>

        <section style={{ background: '#FAF8F5', padding: '40px 0' }}>
          <div style={wrap}>
            <h2 style={{ fontSize: '1.4rem', marginBottom: '14px' }}>References</h2>
            <ol style={{ lineHeight: 1.8, color: '#4A4A4A', fontSize: '0.9rem', maxWidth: '90ch' }}>
              <li>American Academy of Pediatrics. Antibiotic Stewardship in Pediatrics, 2021. <a href="https://publications.aap.org/pediatrics/article/147/1/e2020040295/33434/Antibiotic-Stewardship-in-Pediatrics" style={{ color: '#1A8A7D' }}>link</a></li>
              <li>American Academy of Ophthalmology. Conjunctivitis Preferred Practice Pattern. <a href="https://www.aao.org/education/preferred-practice-pattern/conjunctivitis-ppp" style={{ color: '#1A8A7D' }}>link</a></li>
              <li>Infectious Diseases Society of America. Skin and Soft Tissue Infections Guidelines, 2014. <a href="https://www.idsociety.org/practice-guideline/skin-and-soft-tissue-infections/" style={{ color: '#1A8A7D' }}>link</a></li>
              <li>CDC. Clinical Care of Head Lice. <a href="https://www.cdc.gov/lice/hcp/clinical-care/index.html" style={{ color: '#1A8A7D' }}>link</a></li>
            </ol>
            <p style={{ fontSize: '0.85rem', color: '#999', fontStyle: 'italic', marginTop: '16px' }}>
              Last reviewed on {lastReviewed} by Parth Bhavsar, MD.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
