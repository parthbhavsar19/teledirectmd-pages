'use client';
import { B, INSURANCE_CONDITIONS, INSURERS, STATE_NAMES, COPAY_DATA, LAST_REVIEWED } from '../../../data/insurance/insuranceConfig';
import { FAQ, BookCTA, HowItWorksSteps, TrustBar, Breadcrumb, InsuranceDisclaimer, AnswerBlock, PatientJourney, InsurerTrustDetails } from './InsuranceShared';
import { Ico } from './InsuranceIcons';

export default function InsuranceConditionClient({ insurerSlug, conditionSlug }) {
  const insurer = INSURERS[insurerSlug];
  const cond = INSURANCE_CONDITIONS[conditionSlug];
  if (!insurer || !cond) return null;

  const insurerStates = insurer.states.map(code => ({
    code,
    name: STATE_NAMES[code],
    slug: STATE_NAMES[code].toLowerCase().replace(/\s+/g, '-'),
    copay: COPAY_DATA[insurerSlug]?.[code],
    affiliate: insurerSlug === 'blue-cross-blue-shield' && insurer.affiliates?.[code] ? insurer.affiliates[code] : null,
  }));

  const shortName = insurerSlug === 'blue-cross-blue-shield' ? 'BCBS' : insurer.name;

  const FAQS = [
    {
      q: `Does ${insurer.name} cover ${cond.displayName} through telemedicine?`,
      a: `Yes. ${insurer.name} commercial plans cover telemedicine visits for ${cond.displayName}. Under federal telehealth parity requirements, ${insurer.name} is required to cover telehealth services comparably to in-person visits for most commercial plan members. TeleDirectMD (Dr. Parth Bhavsar, MD, NPI: 1104323203) is an in-network telehealth provider with ${shortName} in ${insurer.states.length} states. Your actual cost — copay, coinsurance, or deductible — depends on your specific plan. Contact the member services number on your ${shortName} card to verify your telehealth benefits before booking.`,
    },
    {
      q: `What does ${insurer.name} pay for a ${cond.name} telemedicine visit?`,
      a: `Most ${insurer.name} commercial plans have telehealth copays of $0–$40 for ${cond.name} treatment. Many employer-sponsored ${shortName} plans have $0 telehealth copays — particularly for large employer groups. The exact amount depends on your plan tier, deductible status, and state. Log into your ${shortName} member portal or call member services to verify your specific cost before booking. Self-pay is always available for $49 flat if you prefer to skip insurance.`,
    },
    {
      q: `How do I see a doctor for ${cond.name} using my ${insurer.name} insurance?`,
      a: `Book at teledirectmd.com/book-online, select "Insurance" as your payment method, and have your ${shortName} member ID card ready. We verify your coverage before your visit begins. Dr. Bhavsar, MD will evaluate your ${cond.name.toLowerCase()} symptoms during a secure video visit and send a prescription to your pharmacy if clinically appropriate. The visit is billed to ${shortName} using CPT codes 99213 or 99214 — standard outpatient E&M codes for telehealth.`,
    },
    {
      q: `What states does ${insurer.name} cover ${cond.name} telehealth?`,
      a: `TeleDirectMD is in-network with ${insurer.name} in the following states: ${insurer.states.map(c => STATE_NAMES[c]).join(', ')}. If you are physically located in one of these states during your visit, your ${cond.name.toLowerCase()} telehealth visit may be covered by your ${shortName} plan. Your location at the time of the visit determines coverage — not your home address.`,
    },
    {
      q: `What prescription can I get for ${cond.name} through ${insurer.name} telehealth?`,
      a: `${cond.rxInfo?.typical ? `For ${cond.name.toLowerCase()}, Dr. Bhavsar may prescribe: ${cond.rxInfo.typical}. ${cond.rxInfo.alternatives ? `Alternatives include: ${cond.rxInfo.alternatives}.` : ''} ${cond.rxInfo.coveredByInsurance || ''}` : `If clinically appropriate, Dr. Bhavsar will send a prescription to your preferred pharmacy immediately after your visit.`} ${cond.rxInfo?.notes || ''}`,
    },
    {
      q: `Is the self-pay option available if my ${shortName} plan does not cover ${cond.name}?`,
      a: `Yes. If your ${shortName} plan does not cover this visit, if you are in a state where ${shortName} is not in-network with TeleDirectMD, or if your deductible has not yet been met, you can book as a self-pay patient for a flat $49 fee. Same physician, same quality of care, same clinical standards — no insurance required.`,
    },
    {
      q: `Will ${insurer.name} cover a prescription for ${cond.name} from a telehealth visit?`,
      a: `${insurer.name} covers the telehealth visit itself (billed under your medical benefit). Prescription coverage depends on your ${shortName} pharmacy benefit plan. ${cond.rxInfo?.coveredByInsurance ? cond.rxInfo.coveredByInsurance + "." : `Most ${shortName} commercial plans include pharmacy benefits that cover common medications prescribed for ${cond.name.toLowerCase()}.`} Check your pharmacy benefits with ${shortName} or your pharmacist for your specific medication copay.`,
    },
    {
      q: `How does TeleDirectMD diagnose ${cond.name} via telehealth?`,
      a: `${cond.diagnosisMethod || `Dr. Bhavsar uses validated clinical criteria to evaluate your ${cond.name.toLowerCase()} symptoms during a secure video visit.`} Telehealth is a well-validated, evidence-based modality for ${cond.name.toLowerCase()} management in adults. The same clinical decision-making applied in an in-person office visit is used during your telehealth appointment.`,
    },
    {
      q: `Can I use my ${shortName} FSA or HSA for a ${cond.name} telehealth visit?`,
      a: `Yes. Telehealth visits with a licensed physician are qualified medical expenses eligible for FSA and HSA payment. If your ${shortName} plan applies your deductible first before covering the visit, your FSA or HSA card can be used to pay your responsibility. The $49 self-pay option is also FSA/HSA eligible as a qualified medical expense.`,
    },
    {
      q: `Is TeleDirectMD verified as an in-network provider with ${insurer.name}?`,
      a: `Yes. TeleDirectMD is operated by Dr. Parth Bhavsar, MD (NPI: 1104323203), a board-certified Family Medicine physician. TeleDirectMD is contracted as an in-network telehealth provider with ${insurer.name} in ${insurer.states.length} states. Claims are submitted electronically using CPT codes 99213/99214. You can verify Dr. Bhavsar's NPI at the NPPES NPI Registry (nppes.cms.hhs.gov).`,
    },
    {
      q: `What ${shortName} plans are NOT accepted at TeleDirectMD?`,
      a: `The following ${shortName} plan types are not currently accepted: ${insurer.notAccepted?.join(', ')}. ${insurerSlug === 'blue-cross-blue-shield' ? "Note that BCBS varies by state affiliate — TeleDirectMD is in-network with specific state affiliates (Florida Blue, Anthem BCBS GA, BCBS IL, Highmark BCBS PA, BCBS TX) only." : ""} If your specific plan is not in-network, self-pay is available for $49 flat — same physician and quality of care.`,
    },
    {
      q: `How does the ${insurer.name} billing work for a telehealth visit at TeleDirectMD?`,
      a: `After your visit, TeleDirectMD submits a claim to ${insurer.name} electronically using CPT code 99213 (standard complexity) or 99214 (moderate complexity). ${insurer.name} processes the claim and applies it to your benefits — copay, deductible, or coinsurance. You'll receive an Explanation of Benefits (EOB) from ${shortName} within 2–4 weeks showing what was billed and your responsibility. ${insurer.claimsPhone ? `For billing questions, call ${insurer.name} member services at ${insurer.claimsPhone}.` : ""}`,
    },
  ];

  const SCHEMA = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "name": `Does ${insurer.name} Cover ${cond.displayName} Telemedicine?`,
        "description": `Yes — ${insurer.name} commercial plans cover ${cond.name} telehealth visits. TeleDirectMD is in-network with ${shortName} in ${insurer.states.length} states. Board-certified physician Dr. Parth Bhavsar, MD (NPI: 1104323203). Same-day video visit.`,
        "url": `https://teledirectmd.com/insurance/${insurerSlug}/${conditionSlug}`,
        "lastReviewed": LAST_REVIEWED,
        "reviewedBy": { "@type": "Physician", "name": "Parth Bhavsar, MD", "identifier": { "@type": "PropertyValue", "name": "NPI", "value": "1104323203" } },
        "medicalAudience": { "@type": "MedicalAudience", "audienceType": "Patient", "healthCondition": { "@type": "MedicalCondition", "name": cond.displayName } },
        "about": { "@type": "MedicalCondition", "name": cond.displayName, "code": { "@type": "MedicalCode", "code": cond.icd10, "codingSystem": "ICD-10" } },
        "mentions": [{ "@type": "HealthInsurancePlan", "name": `${insurer.name} Commercial Plans` }],
        "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["[data-speakable]"] },
      },
      {
        "@type": "Physician",
        "name": "Parth Bhavsar, MD",
        "identifier": { "@type": "PropertyValue", "name": "NPI", "value": "1104323203" },
        "medicalSpecialty": "Family Medicine",
        "areaServed": insurer.states.map(code => ({ "@type": "State", "name": STATE_NAMES[code] })),
        "knowsAbout": { "@type": "MedicalCondition", "name": cond.displayName, "code": { "@type": "MedicalCode", "code": cond.icd10, "codingSystem": "ICD-10" } },
        "acceptsInsurance": [{ "@type": "HealthInsurancePlan", "name": `${insurer.name} Commercial Plans` }],
      },
      {
        "@type": "FAQPage",
        "mainEntity": FAQS.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://teledirectmd.com" },
          { "@type": "ListItem", "position": 2, "name": "Insurance", "item": "https://teledirectmd.com/insurance" },
          { "@type": "ListItem", "position": 3, "name": insurer.name, "item": `https://teledirectmd.com/insurance/${insurerSlug}` },
          { "@type": "ListItem", "position": 4, "name": cond.displayName, "item": `https://teledirectmd.com/insurance/${insurerSlug}/${conditionSlug}` },
        ],
      },
    ],
  };

  return (
    <div style={{ fontFamily: B.fb, background: B.bg, color: B.navy }}>
      <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />

      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Insurance", href: "/insurance" },
        { label: insurer.name, href: `/insurance/${insurerSlug}` },
        { label: cond.name },
      ]} />

      {/* HERO */}
      <div style={{ background: `linear-gradient(165deg, ${B.navyDarker} 0%, ${B.navy} 40%, ${B.navyDeep} 100%)`, padding: "56px 24px 64px", position: "relative", overflow: "hidden", marginTop: 16 }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div style={{ maxWidth: 760, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.08)", borderRadius: 100, padding: "8px 16px", marginBottom: 24, backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.12)" }}>
            <Ico.Shield c={insurer.colorLight || "#90C2FF"} s={16} />
            <span style={{ fontFamily: B.fb, fontSize: 13, fontWeight: 600, color: insurer.colorLight || "#90C2FF", letterSpacing: "0.04em", textTransform: "uppercase" }}>
              {shortName} In-Network · {cond.name} · {insurer.states.length} States
            </span>
          </div>
          <h1 style={{ fontFamily: B.fd, fontSize: "clamp(26px, 4.5vw, 42px)", fontWeight: 700, color: B.white, lineHeight: 1.15, margin: "0 0 16px" }}>
            Does {insurer.name} Cover<br />{cond.displayName} Telemedicine?
          </h1>
          <p data-speakable="true" style={{ fontFamily: B.fb, fontSize: "clamp(15px, 2.5vw, 18px)", color: "rgba(255,255,255,0.80)", lineHeight: 1.65, margin: "0 0 10px", maxWidth: 600 }}>
            Yes — {insurer.name} commercial plans cover {cond.name} telehealth visits. TeleDirectMD is in-network with {shortName} in {insurer.states.length} states. {cond.shortDesc}
          </p>
          <p style={{ fontFamily: B.fb, fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.5, margin: "0 0 28px", maxWidth: 560 }}>
            Dr. Parth Bhavsar, MD (NPI: 1104323203) — board-certified Family Medicine. Not a nurse practitioner or PA.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <a href="https://www.teledirectmd.com/book-online" target="_blank" rel="noopener"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", background: B.accent, color: B.white, borderRadius: B.rs, fontWeight: 700, fontSize: 15, textDecoration: "none" }}>
              <Ico.Cal c={B.white} s={18} /> Book {cond.name} Visit with {shortName}
            </a>
            <a href="https://www.teledirectmd.com/book-online" target="_blank" rel="noopener"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 20px", background: "rgba(255,255,255,0.1)", color: B.white, borderRadius: B.rs, fontWeight: 600, fontSize: 14, textDecoration: "none", border: "1px solid rgba(255,255,255,0.2)" }}>
              <Ico.Dollar c={B.white} s={16} /> Self-Pay $49 — No Insurance Needed
            </a>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ margin: "32px 0" }}><TrustBar /></div>

        {/* ANSWER ENGINE BLOCK */}
        <AnswerBlock
          question={`Does ${insurer.name} cover ${cond.displayName} telemedicine?`}
          answer={`Yes — ${insurer.name} commercial plans cover ${cond.displayName} telehealth visits. TeleDirectMD is in-network with ${shortName} in ${insurer.states.map(c => STATE_NAMES[c]).join(', ')}. Dr. Parth Bhavsar, MD evaluates your ${cond.name.toLowerCase()} symptoms by secure video and sends a prescription to your pharmacy if appropriate. Your standard ${shortName} telehealth copay applies — typically $0–$40 for most commercial plans.`}
          color={insurer.color}
        />

        {/* CLINICAL DEPTH */}
        {cond.clinicalDepth && (
          <section style={{ marginBottom: 40 }}>
            <h2 style={{ fontFamily: B.fd, fontSize: 22, fontWeight: 700, color: B.navy, margin: "0 0 12px" }}>
              About {cond.displayName} & Telehealth
            </h2>
            <div style={{ background: B.white, border: `1px solid ${B.border}`, borderRadius: B.r, padding: "24px 28px", boxShadow: B.shadow }}>
              <p style={{ fontSize: 15, color: B.text, lineHeight: 1.8, margin: "0 0 16px" }}>{cond.clinicalDepth}</p>
              {cond.diagnosisMethod && (
                <>
                  <div style={{ fontSize: 12, fontWeight: 700, color: B.teal, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>How Dr. Bhavsar Evaluates {cond.name} via Telehealth</div>
                  <p style={{ fontSize: 14, color: B.text, lineHeight: 1.75, margin: 0 }}>{cond.diagnosisMethod}</p>
                </>
              )}
            </div>
          </section>
        )}

        {/* RX INFO */}
        {cond.rxInfo && (
          <section style={{ marginBottom: 40 }}>
            <h2 style={{ fontFamily: B.fd, fontSize: 22, fontWeight: 700, color: B.navy, margin: "0 0 12px" }}>
              {cond.name} Prescriptions — What {shortName} Covers
            </h2>
            <div style={{ background: B.white, border: `1px solid ${B.border}`, borderRadius: B.r, padding: "24px 28px", boxShadow: B.shadow }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: B.teal, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>Typical Prescription</div>
                  <p style={{ fontSize: 14, color: B.text, lineHeight: 1.7, margin: "0 0 12px" }}>{cond.rxInfo.typical}</p>
                  {cond.rxInfo.alternatives && (
                    <>
                      <div style={{ fontSize: 12, fontWeight: 700, color: B.teal, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>Alternatives</div>
                      <p style={{ fontSize: 14, color: B.text, lineHeight: 1.7, margin: 0 }}>{cond.rxInfo.alternatives}</p>
                    </>
                  )}
                </div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: B.teal, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>Insurance Coverage of Prescription</div>
                  <p style={{ fontSize: 14, color: B.text, lineHeight: 1.7, margin: "0 0 12px" }}>{cond.rxInfo.coveredByInsurance}</p>
                  <div style={{ fontSize: 12, fontWeight: 700, color: B.teal, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>Clinical Notes</div>
                  <p style={{ fontSize: 14, color: B.text, lineHeight: 1.7, margin: 0 }}>{cond.rxInfo.notes}</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* STATES GRID with copay data */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: B.fd, fontSize: 22, fontWeight: 700, color: B.navy, margin: "0 0 8px" }}>
            {insurer.name} {cond.name} Telehealth — Available States
          </h2>
          <p style={{ fontSize: 14, color: B.text, margin: "0 0 16px", lineHeight: 1.6 }}>
            Select your state to see state-specific copay estimates, the exact {shortName} affiliate in your state, and book your visit.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 10 }}>
            {insurerStates.map((state, i) => (
              <a key={i} href={`/insurance/${insurerSlug}/${state.slug}/${conditionSlug}`}
                style={{ display: "flex", flexDirection: "column", gap: 4, background: B.white, border: `1px solid ${B.border}`, borderRadius: B.rs, padding: "14px 16px", textDecoration: "none", boxShadow: B.shadow }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <Ico.Check c={insurer.color} s={14} />
                  <span style={{ fontSize: 14, fontWeight: 700, color: B.navy }}>{state.name}</span>
                </div>
                {state.affiliate && <div style={{ fontSize: 11, color: insurer.color, fontWeight: 600 }}>{state.affiliate}</div>}
                {state.copay && <div style={{ fontSize: 12, color: B.text }}>Copay: {state.copay.typical}</div>}
                <div style={{ fontSize: 11, color: B.teal, marginTop: 2 }}>{cond.name} coverage →</div>
              </a>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: B.fd, fontSize: 22, fontWeight: 700, color: B.navy, margin: "0 0 16px" }}>
            How to Use {insurer.name} for {cond.name} Treatment
          </h2>
          <HowItWorksSteps insurerName={insurer.name} />
        </section>

        {/* PATIENT JOURNEY */}
        <PatientJourney insurerName={insurer.name} conditionName={cond.name} />

        {/* INSURER TRUST DETAILS */}
        <InsurerTrustDetails insurer={insurer} />

        <section style={{ marginBottom: 48 }}><BookCTA insurerName={insurer.name} /></section>

        {/* FAQ */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: B.fd, fontSize: 24, fontWeight: 700, color: B.navy, margin: "0 0 8px" }}>
            Frequently Asked Questions — {shortName} + {cond.name}
          </h2>
          <div style={{ background: B.white, border: `1px solid ${B.border}`, borderRadius: B.r, padding: "4px 24px", boxShadow: B.shadow }}>
            {FAQS.map((faq, i) => <FAQ key={i} question={faq.q} answer={faq.a} />)}
          </div>
        </section>

        <div style={{ marginBottom: 24, display: "flex", flexWrap: "wrap", gap: 10 }}>
          <a href={`/insurance/${insurerSlug}`} style={{ fontSize: 14, color: B.teal, textDecoration: "none" }}>← All {shortName} Coverage</a>
          <span style={{ color: B.border }}>|</span>
          <a href={`/${cond.conditionPageSlug}`} style={{ fontSize: 14, color: B.teal, textDecoration: "none" }}>{cond.displayName} Treatment →</a>
        </div>
        <div style={{ marginBottom: 48 }}><InsuranceDisclaimer /></div>
      </div>
    </div>
  );
}
