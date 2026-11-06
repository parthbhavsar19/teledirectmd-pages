const wrap = { maxWidth: '1100px', margin: '0 auto', padding: '0 24px' };
const sectionPad = { padding: '48px 0' };

export default function PediatricsHubClient({ conditions, lastReviewed }) {
  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', color: '#1A1A1A' }}>
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" style={{ ...wrap, paddingTop: '16px', fontSize: '0.85rem', color: '#4A4A4A' }}>
        <a href="/" style={{ color: '#1A8A7D', textDecoration: 'none' }}>Home</a>
        <span aria-hidden="true" style={{ margin: '0 8px' }}>/</span>
        <span aria-current="page">Pediatrics</span>
      </nav>

      {/* Hero */}
      <header style={{ background: 'linear-gradient(135deg, #0B1D3A 0%, #142A4F 100%)', color: '#fff' }}>
        <div style={{ ...wrap, padding: '56px 24px' }}>
          <h1 style={{ fontSize: '2.4rem', lineHeight: 1.2, margin: '0 0 16px', color: '#fff' }}>
            Pediatric Telehealth in 41 States + DC (Ages 5-17)
          </h1>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.7, maxWidth: '70ch', color: 'rgba(255,255,255,0.88)' }}>
            TeleDirectMD is a physician-owned, MD-only pediatric telehealth practice serving children ages 5 to 17
            in 41 states plus Washington, DC. A parent or legal guardian must be present and consent to every visit.
            Self-pay visits are $79; TeleDirectMD does not prescribe controlled substances or treat children under age 5.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '24px' }}>
            {['Physician-owned', 'MD-only — no NPs or PAs treating kids', '41 states + DC', 'Self-pay $79'].map((chip) => (
              <span key={chip} style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.14)', borderRadius: '100px', padding: '8px 16px', fontSize: '0.85rem' }}>
                {chip}
              </span>
            ))}
          </div>
          <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', marginTop: '20px', fontStyle: 'italic' }}>
            Last reviewed on {lastReviewed} by Parth Bhavsar, MD.
          </p>
        </div>
      </header>

      {/* Scope-of-care band */}
      <section style={{ background: '#eef7ee', borderBottom: '1px solid #cfe3cf' }}>
        <div style={{ ...wrap, padding: '20px 24px' }}>
          <p style={{ margin: 0, fontWeight: 700, color: '#1B5E20' }}>
            Physician-owned. MD-only. No NPs or PAs treating kids.
          </p>
        </div>
      </section>

      {/* Condition cards */}
      <section style={{ ...sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '8px' }}>Pediatric conditions we treat</h2>
          <p style={{ color: '#4A4A4A', marginBottom: '28px', maxWidth: '70ch' }}>
            Eight conditions managed by MD-only video visit, with a parent or legal guardian present for the entire visit.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
            {conditions.map((c) => (
              <a
                key={c.slug}
                href={`/${c.slug}/`}
                style={{
                  display: 'block',
                  background: '#FAF8F5',
                  border: '1px solid #E8E8E8',
                  borderRadius: '14px',
                  padding: '24px',
                  textDecoration: 'none',
                  color: '#1A1A1A',
                }}
              >
                <h3 style={{ margin: '0 0 4px', fontSize: '1.15rem', color: '#0B1D3A' }}>{c.name}</h3>
                <div style={{ fontSize: '0.8rem', color: '#1A8A7D', fontWeight: 600, marginBottom: '10px' }}>
                  Ages {c.ages} · {c.icd10}
                </div>
                <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: 1.6, color: '#4A4A4A' }}>{c.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* What we do NOT treat */}
      <section style={{ ...sectionPad, background: '#FAF8F5' }}>
        <div style={wrap}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>What we do not treat</h2>
          <ul style={{ lineHeight: 1.9, color: '#4A4A4A', maxWidth: '70ch' }}>
            <li>Children under age 5 (any condition)</li>
            <li>Mental health conditions and ADHD</li>
            <li>Controlled substances (DEA Schedule II-V)</li>
            <li>Isotretinoin / Accutane</li>
            <li>New asthma diagnoses (refills only)</li>
            <li>Fever in infants under 3 months — go to the ER</li>
          </ul>
          <p style={{ borderLeft: '4px solid #1a5276', paddingLeft: '14px', color: '#1A1A1A', maxWidth: '70ch' }}>
            <strong>Parent/guardian consent:</strong> A parent or legal guardian must be present for the entire visit
            and provide consent. The guardian's identity is verified at the start of the visit.
          </p>
        </div>
      </section>

      {/* Stewardship */}
      <section style={{ ...sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>Our antibiotic stewardship</h2>
          <p style={{ lineHeight: 1.75, color: '#4A4A4A', maxWidth: '72ch' }}>
            Our antibiotic prescribing rate for pediatric acute respiratory infection (ARI) symptoms is kept under 35%,
            consistent with CDC and American Academy of Pediatrics judicious-use guidance.
          </p>
          <p style={{ lineHeight: 1.75, color: '#4A4A4A', maxWidth: '72ch' }}>
            Our antibiotic prescribing rate for diagnosed pediatric bacterial conjunctivitis is held in the 55-70% range,
            consistent with American Academy of Pediatrics and American Academy of Ophthalmology guidance that most cases
            are self-limited and many do not require topical antibiotics.
          </p>
          <p style={{ lineHeight: 1.75, color: '#4A4A4A', maxWidth: '72ch' }}>
            For acne, TeleDirectMD always pairs topical clindamycin with benzoyl peroxide to limit antibiotic resistance,
            following American Academy of Dermatology guidance.
          </p>
        </div>
      </section>

      {/* Explore */}
      <section style={{ ...sectionPad, background: '#FAF8F5' }}>
        <div style={wrap}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '12px' }}>Explore the conditions matrix and care guide</h2>
          <p style={{ lineHeight: 1.75, color: '#4A4A4A', maxWidth: '72ch' }}>
            See the{' '}
            <a href="/pediatric-conditions-matrix/" style={{ color: '#1A8A7D' }}>pediatric conditions matrix</a>{' '}
            for a single scope-of-care table, and our{' '}
            <a href="/pediatric-telehealth-vs-pediatrician-vs-urgent-care/" style={{ color: '#1A8A7D' }}>
              telehealth vs. pediatrician vs. urgent care guide
            </a>{' '}
            for when to choose each setting.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ ...sectionPad, background: '#fff' }}>
        <div style={{ ...wrap, maxWidth: '820px' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '24px' }}>Frequently asked questions</h2>
          {[
            ['What does TeleDirectMD treat in children?', 'TeleDirectMD treats eight pediatric conditions by MD-only video visit: teen acne (ages 12-17), and pink eye, head lice, asthma and allergic rhinitis refills, impetigo, eczema, ringworm, and contact dermatitis (all ages 5-17). A parent or legal guardian must be present. Self-pay is $79, available in 41 states plus Washington, DC.'],
            ['What is the youngest age TeleDirectMD treats?', 'Age 5 for every pediatric condition, and age 12 for acne. TeleDirectMD does not treat children under age 5 for any condition, and any infant under 3 months with a fever needs emergency care, not telehealth.'],
            ["Does a parent have to be present for a child's visit?", "Yes. A parent or legal guardian must be present for the entire visit and provide consent for every TeleDirectMD pediatric visit, for children ages 5-17. The guardian's identity is verified, and the child must be physically located in one of the 41 states plus Washington, DC where TeleDirectMD is licensed at the time of the visit."],
            ['Does TeleDirectMD prescribe controlled substances or treat ADHD or mental health?', 'No. TeleDirectMD does not prescribe controlled substances, does not treat ADHD, and does not diagnose or treat mental health conditions in children. It also does not prescribe isotretinoin (Accutane) for acne or make new asthma diagnoses. These exclusions apply to all children ages 5-17 across the 41 states plus Washington, DC.'],
            ['How much does a pediatric visit cost at TeleDirectMD?', 'A pediatric video visit at TeleDirectMD costs $79 self-pay, with no insurance required, for children ages 5-17. TeleDirectMD is in-network with Aetna, select Blue Cross Blue Shield plans, and UnitedHealthcare where applicable, but is not in-network with any Medicaid, Managed Medicaid, CHIP, or Medicare-Medicaid plan in any state.'],
            ['Are the doctors actual physicians?', 'Yes. Every TeleDirectMD pediatric visit is conducted by a licensed physician (MD). No nurse practitioners or physician assistants treat children at TeleDirectMD. The practice is physician-owned and led by Parth Bhavsar, MD, and operates only in states where its physicians hold active licensure, currently 41 states plus Washington, DC.'],
          ].map(([q, a]) => (
            <div key={q} style={{ marginBottom: '20px' }}>
              <h3 style={{ fontSize: '1.05rem', margin: '0 0 6px', color: '#0B1D3A' }}>{q}</h3>
              <p style={{ margin: 0, lineHeight: 1.7, color: '#4A4A4A' }}>{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Disclaimer */}
      <section style={{ ...sectionPad, background: '#FAF8F5' }}>
        <div style={wrap}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '12px' }}>Pediatric telehealth disclaimer</h2>
          <p style={{ lineHeight: 1.7, color: '#4A4A4A', maxWidth: '78ch', fontSize: '0.95rem' }}>
            This page is informational and not a substitute for in-person care. TeleDirectMD treats children ages 5 to 17
            (acne from age 12), requires a parent or legal guardian present and consenting, and serves children physically
            located in its 41 licensed states plus Washington, DC. TeleDirectMD does not treat children under age 5 for any
            condition, does not prescribe controlled substances or isotretinoin, does not treat ADHD or mental health
            conditions, and does not make new asthma diagnoses. Infants under 3 months with fever require emergency care.
            TeleDirectMD is not in-network with any Medicaid, Managed Medicaid, CHIP, or Medicare-Medicaid plan.
          </p>
          <p style={{ fontSize: '0.85rem', color: '#999', fontStyle: 'italic' }}>
            Last reviewed on {lastReviewed} by Parth Bhavsar, MD.
          </p>
        </div>
      </section>
    </div>
  );
}
