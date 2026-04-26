'use client';
import { B, INSURANCE_CONDITIONS, INSURERS, STATE_NAMES, COPAY_DATA, STATE_INSURANCE_MAP, LAST_REVIEWED } from '../../../data/insurance/insuranceConfig';
import { FAQ, BookCTA, HowItWorksSteps, TrustBar, Breadcrumb, InsuranceDisclaimer, AnswerBlock, CopayCard, PatientJourney, CommissionerLink, CrossInsurerTable } from './InsuranceShared';
import { CompareToOtherTelehealthGrid, Or49CashLink } from '../../components/CostCompareModules';
import { Ico } from './InsuranceIcons';
import { getNationalConditionSlug } from '../../../lib/internal-links';
import { getAggregateRating, getReviewBlock } from '../../../lib/review-schema';

export default function InsuranceStateConditionClient({ insurerSlug, stateSlug, conditionSlug }) {
  const insurer = INSURERS[insurerSlug];
  const cond = INSURANCE_CONDITIONS[conditionSlug];
  if (!insurer || !cond) return null;

  // Resolve state code from slug
  const slugToCode = {};
  Object.entries(STATE_NAMES).forEach(([code, name]) => {
    slugToCode[name.toLowerCase().replace(/\s+/g,'-')] = code;
  });
  const stateCode = slugToCode[stateSlug];
  const stateName = STATE_NAMES[stateCode] || stateSlug;
  const shortName = insurerSlug === 'blue-cross-blue-shield' ? 'BCBS' : insurer.name;
  const affiliateName = insurerSlug === 'blue-cross-blue-shield' && insurer.affiliates?.[stateCode]
    ? insurer.affiliates[stateCode]
    : insurer.name;

  const copayData = COPAY_DATA[insurerSlug]?.[stateCode];
  const stateInfo = STATE_INSURANCE_MAP[stateCode];

  const FAQS = [
    {
      q: `Does ${affiliateName} cover ${cond.displayName} telemedicine in ${stateName}?`,
      a: `Yes. ${affiliateName} commercial plans cover telehealth visits for ${cond.displayName} in ${stateName}. TeleDirectMD (Dr. Parth Bhavsar, MD, NPI: 1104323203) is an in-network telehealth provider with ${shortName} in ${stateName}. Your standard ${shortName} telehealth copay applies — typically ${copayData?.typical || "$0–$40"} for most commercial plans. If clinically appropriate, your prescription is sent to your ${stateName} pharmacy immediately after your visit.`,
    },
    {
      q: `What is my ${shortName} copay for ${cond.name} treatment in ${stateName}?`,
      a: `${copayData ? `Most ${affiliateName} commercial plans in ${stateName} have telehealth copays of ${copayData.typical}. ${copayData.employer}.` : `Most ${shortName} commercial plans in ${stateName} have telehealth copays of $0–$40.`} Your exact cost depends on your specific plan and whether your deductible has been met. Log into your ${shortName} member portal or call the member services number on your card to verify your telehealth copay before your ${cond.name.toLowerCase()} visit. Self-pay is always available for a flat $49 if you prefer to skip insurance.`,
    },
    {
      q: `How does TeleDirectMD diagnose ${cond.name} via telehealth in ${stateName}?`,
      a: `${cond.diagnosisMethod || `Dr. Bhavsar uses validated clinical criteria to evaluate your ${cond.name.toLowerCase()} symptoms during a secure video visit.`} Telehealth is a well-established, evidence-based modality for ${cond.name.toLowerCase()} management. The same clinical standards used in an in-person office visit are applied — you are seen by Dr. Bhavsar, MD, a board-certified physician, not a nurse practitioner or PA.`,
    },
    {
      q: `What prescription can I get for ${cond.name} through ${shortName} telehealth in ${stateName}?`,
      a: `${cond.rxInfo?.typical ? `For ${cond.name.toLowerCase()}, Dr. Bhavsar may prescribe: ${cond.rxInfo.typical}. ${cond.rxInfo.alternatives ? `Alternatives include: ${cond.rxInfo.alternatives}.` : ''} ${cond.rxInfo.coveredByInsurance || ''}` : `If clinically appropriate, Dr. Bhavsar will send a prescription to your preferred ${stateName} pharmacy immediately after your visit. Coverage of the prescription depends on your ${shortName} pharmacy benefit plan.`} ${cond.rxInfo?.notes || ''}`,
    },
    {
      q: `Can I get a ${cond.name} prescription through telemedicine with ${shortName} in ${stateName}?`,
      a: `Yes. If Dr. Bhavsar, MD determines that a prescription is clinically appropriate for your ${cond.name.toLowerCase()} symptoms, it is sent electronically to your preferred ${stateName} pharmacy the moment your visit ends. ${affiliateName} covers the telehealth visit itself (billed as CPT 99213/99214). Your prescription is then covered by your ${shortName} pharmacy benefit — check your plan's formulary for your specific medication's tier and cost.`,
    },
    {
      q: `What if my ${shortName} plan does not cover ${cond.name} in ${stateName}?`,
      a: `If your specific ${shortName} plan is not in-network with TeleDirectMD in ${stateName}, or if your deductible has not yet been met, you can book as a self-pay patient for a flat $49 fee — same physician, same quality of care, no insurance needed. You may also be eligible to submit an out-of-network claim to ${affiliateName} for partial reimbursement depending on your plan's out-of-network benefit.`,
    },
    {
      q: `How fast can I be seen for ${cond.name} in ${stateName}?`,
      a: `TeleDirectMD typically offers same-day and next-day video visits. Book at teledirectmd.com/book-online and select a time that works for you. Most patients are seen within a few hours of booking during business hours. Your ${cond.name.toLowerCase()} symptoms are evaluated by Dr. Bhavsar, MD — not a nurse practitioner or PA — ensuring you receive a board-certified clinical assessment.`,
    },
    {
      q: `Does ${shortName} in ${stateName} cover the prescription after my telehealth visit?`,
      a: `Yes — your ${affiliateName} pharmacy benefit applies to prescriptions written during a covered telehealth visit. ${cond.rxInfo?.coveredByInsurance ? cond.rxInfo.coveredByInsurance + "." : ""} Check your ${shortName} formulary or call your pharmacy with your ${shortName} member ID to confirm your copay before pickup. Most first-line medications for ${cond.name.toLowerCase()} are Tier 1 or Tier 2 generics covered by virtually all commercial plans.`,
    },
    {
      q: `Is TeleDirectMD a legitimate telehealth provider accepted by ${shortName}?`,
      a: `Yes. TeleDirectMD is operated by Dr. Parth Bhavsar, MD (NPI: 1104323203), a board-certified Family Medicine physician. TeleDirectMD is LegitScript certified, HIPAA compliant, and is contracted as an in-network telehealth provider with ${affiliateName} in ${stateName}. Claims are billed using standard CPT codes (99213/99214) and submitted electronically to ${shortName}.`,
    },
    {
      q: `What ${shortName} plans are NOT accepted at TeleDirectMD in ${stateName}?`,
      a: `${insurer.notAccepted?.join(', ')} ${insurerSlug === 'blue-cross-blue-shield' ? `Note that BCBS varies significantly by state affiliate. TeleDirectMD is in-network with ${affiliateName} specifically — not all BCBS-branded plans are in-network.` : ''} If your plan is not listed, self-pay is available for $49 flat — no insurance required, same physician and quality of care.`,
    },
    {
      q: `Will ${shortName} send me an Explanation of Benefits after my telehealth visit?`,
      a: `Yes. After your telehealth visit, ${affiliateName} will process the claim and send you an Explanation of Benefits (EOB) — typically within 2–4 weeks by mail or available sooner in your ${shortName} member portal. The EOB shows the amount billed (CPT 99213 or 99214), what ${shortName} paid, and your responsibility (copay or deductible portion). This is standard for any in-network physician visit.`,
    },
    {
      q: `Can I use my ${shortName} FSA or HSA for a ${cond.name} telehealth visit in ${stateName}?`,
      a: `Yes. Telehealth visits with a licensed physician are qualified medical expenses eligible for FSA (Flexible Spending Account) and HSA (Health Savings Account) payment. If your ${shortName} plan applies your deductible first, your FSA or HSA card can be used to pay your portion. The $49 self-pay option is also FSA/HSA eligible.`,
    },
  ];

  const SCHEMA = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "name": `${cond.displayName} Treatment Covered by ${affiliateName} in ${stateName}`,
        "description": `${affiliateName} covers ${cond.name} telehealth visits in ${stateName}. TeleDirectMD is in-network with ${shortName} in ${stateName}. Board-certified physician Dr. Parth Bhavsar, MD (NPI: 1104323203). Same-day video visit — your ${shortName} copay applies.`,
        "url": `https://teledirectmd.com/insurance/${insurerSlug}/${stateSlug}/${conditionSlug}`,
        "lastReviewed": LAST_REVIEWED,
        "reviewedBy": { "@type": "Physician", "name": "Parth Bhavsar, MD", "identifier": { "@type": "PropertyValue", "name": "NPI", "value": "1104323203" } },
        "medicalAudience": { "@type": "MedicalAudience", "audienceType": "Patient", "healthCondition": { "@type": "MedicalCondition", "name": cond.displayName } },
        "about": { "@type": "MedicalCondition", "name": cond.displayName, "code": { "@type": "MedicalCode", "code": cond.icd10, "codingSystem": "ICD-10" } },
        "mentions": [
          { "@type": "HealthInsurancePlan", "name": `${affiliateName} Commercial Plans — ${stateName}` },
          { "@type": "Drug", "name": cond.rxInfo?.typical?.split(' ')[0] || "See visit for prescription details" },
        ],
        "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["[data-speakable]"] },
      },
      {
        "@type": "Physician",
        "name": "Parth Bhavsar, MD",
        "identifier": { "@type": "PropertyValue", "name": "NPI", "value": "1104323203" },
        "medicalSpecialty": "Family Medicine",
        "areaServed": { "@type": "State", "name": stateName },
        "knowsAbout": { "@type": "MedicalCondition", "name": cond.displayName, "code": { "@type": "MedicalCode", "code": cond.icd10, "codingSystem": "ICD-10" } },
        "acceptsInsurance": [{ "@type": "HealthInsurancePlan", "name": `${affiliateName} Commercial Plans — ${stateName}` }],
        ...getReviewBlock(),
      },
      {
        "@type": "MedicalOrganization",
        "@id": "https://teledirectmd.com/#organization",
        "name": "TeleDirectMD",
        "url": "https://teledirectmd.com",
        "medicalSpecialty": "General Practice",
        "aggregateRating": getAggregateRating(),
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
          { "@type": "ListItem", "position": 4, "name": stateName, "item": `https://teledirectmd.com/insurance/${insurerSlug}/${stateSlug}` },
          { "@type": "ListItem", "position": 5, "name": cond.displayName, "item": `https://teledirectmd.com/insurance/${insurerSlug}/${stateSlug}/${conditionSlug}` },
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
        { label: stateName, href: `/insurance/${insurerSlug}/${stateSlug}` },
        { label: cond.name },
      ]} />

      {/* HERO */}
      <div style={{ background: `linear-gradient(165deg, ${B.navyDarker} 0%, ${B.navy} 40%, ${B.navyDeep} 100%)`, padding: "56px 24px 64px", position: "relative", overflow: "hidden", marginTop: 16 }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div style={{ maxWidth: 760, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.08)", borderRadius: 100, padding: "8px 16px", marginBottom: 24, backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.12)" }}>
            <Ico.Shield c={insurer.colorLight || "#90C2FF"} s={16} />
            <span style={{ fontFamily: B.fb, fontSize: 13, fontWeight: 600, color: insurer.colorLight || "#90C2FF", letterSpacing: "0.04em", textTransform: "uppercase" }}>
              {shortName} In-Network · {cond.name} · {stateName}
            </span>
          </div>
          <h1 style={{ fontFamily: B.fd, fontSize: "clamp(26px, 4.5vw, 42px)", fontWeight: 700, color: B.white, lineHeight: 1.15, margin: "0 0 16px" }}>
            {cond.displayName} Treatment<br />Covered by {shortName} in {stateName}
          </h1>
          <p data-speakable="true" style={{ fontFamily: B.fb, fontSize: "clamp(15px, 2.5vw, 18px)", color: "rgba(255,255,255,0.80)", lineHeight: 1.65, margin: "0 0 10px", maxWidth: 600 }}>
            {affiliateName} covers {cond.name} telehealth visits in {stateName}. TeleDirectMD is in-network — your standard {shortName} copay applies{copayData ? ` (typically ${copayData.typical})` : ""}. {cond.shortDesc}
          </p>
          <p style={{ fontFamily: B.fb, fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.5, margin: "0 0 28px", maxWidth: 560 }}>
            Evaluated by Dr. Parth Bhavsar, MD (NPI: 1104323203) — board-certified Family Medicine physician, not a nurse practitioner or PA.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <a href="https://www.teledirectmd.com/book-online" target="_blank" rel="noopener"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", background: B.accent, color: B.white, borderRadius: B.rs, fontWeight: 700, fontSize: 15, textDecoration: "none" }}>
              <Ico.Cal c={B.white} s={18} /> Book {cond.name} Visit with {shortName}
            </a>
            <a href="https://www.teledirectmd.com/book-online" target="_blank" rel="noopener"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 20px", background: "rgba(255,255,255,0.1)", color: B.white, borderRadius: B.rs, fontWeight: 600, fontSize: 14, textDecoration: "none", border: "1px solid rgba(255,255,255,0.2)" }}>
              <Ico.Dollar c={B.white} s={16} /> Self-Pay $49 (No Insurance Needed)
            </a>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ margin: "32px 0" }}><TrustBar /></div>

        {/* ANSWER ENGINE BLOCK */}
        <AnswerBlock
          question={`Does ${affiliateName} cover ${cond.displayName} telemedicine in ${stateName}?`}
          answer={`Yes — ${affiliateName} commercial plans cover ${cond.displayName} telehealth visits in ${stateName}. TeleDirectMD is in-network with ${shortName} in ${stateName}. Dr. Parth Bhavsar, MD evaluates your ${cond.name.toLowerCase()} symptoms by secure video and sends a prescription to your ${stateName} pharmacy if appropriate. Your standard ${shortName} telehealth copay applies — typically ${copayData?.typical || "$0–$40"} for most commercial plans. Self-pay is $49 flat if you prefer to skip insurance.`}
          color={insurer.color}
        />

        {/* COPAY CARD */}
        {copayData && <CopayCard insurerName={affiliateName} stateName={stateName} copayData={copayData} insurerColor={insurer.color} />}

        {/* KEY FACTS BOX */}
        <div style={{ background: insurer.colorLight, border: `1px solid ${insurer.color}33`, borderRadius: B.r, padding: "28px", marginBottom: 40 }}>
          <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
            <Ico.Check c={insurer.color} s={28} />
            <div>
              <div style={{ fontSize: 17, fontWeight: 700, color: B.navy, marginBottom: 8 }}>
                {affiliateName} covers {cond.displayName} telehealth in {stateName}
              </div>
              <p style={{ fontSize: 14, color: B.text, margin: "0 0 16px", lineHeight: 1.75 }}>
                {cond.clinicalDepth || `${affiliateName} commercial plans cover telehealth visits for ${cond.displayName} in ${stateName}. TeleDirectMD is an in-network telehealth provider. Your standard ${shortName} copay applies.`}
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(155px, 1fr))", gap: 10 }}>
                {[
                  { label: "Insurer", val: `${shortName} In-Network` },
                  { label: "State", val: stateName },
                  { label: "Condition", val: cond.displayName },
                  { label: "ICD-10 Code", val: cond.icd10 },
                  { label: "Typical Copay", val: copayData?.typical || "$0–$40" },
                  { label: "Self-Pay Option", val: "$49 flat fee" },
                  { label: "Prescribing MD", val: "Dr. Parth Bhavsar, MD" },
                  { label: "Billing Code", val: "CPT 99213/99214" },
                ].map((item, i) => (
                  <div key={i} style={{ background: "rgba(255,255,255,0.65)", borderRadius: B.rs, padding: "10px 14px" }}>
                    <div style={{ fontSize: 10, fontWeight: 700, color: insurer.color, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 2 }}>{item.label}</div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: B.navy }}>{item.val}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CLINICAL + RX SECTION */}
        {cond.rxInfo && (
          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: B.fd, fontSize: 22, fontWeight: 700, color: B.navy, margin: "0 0 16px" }}>
              {cond.name} Treatment & Prescriptions — What to Expect
            </h2>
            <div style={{ background: B.white, border: `1px solid ${B.border}`, borderRadius: B.r, padding: "24px 28px", boxShadow: B.shadow }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: B.teal, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>Typical Prescription</div>
                  <p style={{ fontSize: 14, color: B.text, lineHeight: 1.7, margin: "0 0 12px" }}>{cond.rxInfo.typical}</p>
                  {cond.rxInfo.alternatives && (
                    <>
                      <div style={{ fontSize: 12, fontWeight: 700, color: B.teal, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>Alternatives</div>
                      <p style={{ fontSize: 14, color: B.text, lineHeight: 1.7, margin: "0 0 12px" }}>{cond.rxInfo.alternatives}</p>
                    </>
                  )}
                </div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: B.teal, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>Insurance Coverage</div>
                  <p style={{ fontSize: 14, color: B.text, lineHeight: 1.7, margin: "0 0 12px" }}>{cond.rxInfo.coveredByInsurance}</p>
                  <div style={{ fontSize: 12, fontWeight: 700, color: B.teal, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>Clinical Notes</div>
                  <p style={{ fontSize: 14, color: B.text, lineHeight: 1.7, margin: 0 }}>{cond.rxInfo.notes}</p>
                </div>
              </div>
              {cond.diagnosisMethod && (
                <div style={{ borderTop: `1px solid ${B.border}`, marginTop: 20, paddingTop: 20 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: B.teal, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>How Dr. Bhavsar Diagnoses {cond.name} via Telehealth</div>
                  <p style={{ fontSize: 14, color: B.text, lineHeight: 1.7, margin: 0 }}>{cond.diagnosisMethod}</p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* HOW IT WORKS */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: B.fd, fontSize: 22, fontWeight: 700, color: B.navy, margin: "0 0 16px" }}>
            How to Get {cond.displayName} Treatment Using {shortName} in {stateName}
          </h2>
          <HowItWorksSteps insurerName={affiliateName} />
        </section>

        {/* PATIENT JOURNEY */}
        <PatientJourney insurerName={affiliateName} conditionName={cond.name} />

        {/* CROSS-INSURER TABLE */}
        <CrossInsurerTable stateCode={stateCode} stateName={stateName} currentInsurer={insurerSlug} />

        {/* BOOK CTA */}
        <section style={{ marginBottom: 48 }}><BookCTA insurerName={affiliateName} /></section>

        {/* FAQ */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: B.fd, fontSize: 24, fontWeight: 700, color: B.navy, margin: "0 0 8px" }}>
            Frequently Asked Questions — {shortName} + {cond.name} in {stateName}
          </h2>
          <div style={{ background: B.white, border: `1px solid ${B.border}`, borderRadius: B.r, padding: "4px 24px", boxShadow: B.shadow }}>
            {FAQS.map((faq, i) => <FAQ key={i} question={faq.q} answer={faq.a} />)}
          </div>
        </section>

        {/* OTHER CONDITIONS */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: B.fd, fontSize: 18, fontWeight: 700, color: B.navy, margin: "0 0 12px" }}>
            Other {shortName} Conditions Covered in {stateName}
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {Object.values(INSURANCE_CONDITIONS).filter(c => c.slug !== conditionSlug).map((c, i) => (
              <a key={i} href={`/insurance/${insurerSlug}/${stateSlug}/${c.slug}`}
                style={{ fontSize: 13, fontWeight: 500, color: insurer.color, background: insurer.colorLight, padding: "5px 12px", borderRadius: 100, textDecoration: "none", border: `1px solid ${insurer.color}22` }}>
                {c.name}
              </a>
            ))}
          </div>
        </section>

        {/* SELF-PAY BACK-LINK — internal linking for AI visibility */}
        {(() => {
          const nationalCondSlug = getNationalConditionSlug(conditionSlug);
          if (!nationalCondSlug) return null;
          return (
            <section style={{ marginBottom: 32, padding: "16px 20px", background: "#F9FAFB", border: `1px solid ${B.border}`, borderRadius: B.r }} data-speakable="true">
              <h2 style={{ fontFamily: B.fd, fontSize: 18, fontWeight: 700, color: B.navy, margin: "0 0 6px" }}>No {shortName}? Self-Pay {cond.name} in {stateName}</h2>
              <p style={{ fontSize: 14, color: B.text, margin: "0 0 10px", lineHeight: 1.6 }}>Not an {shortName} member? TeleDirectMD offers the same {cond.name.toLowerCase()} telehealth visit for $49 without insurance.</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                <a href={`/${stateCode.toLowerCase()}/${nationalCondSlug}/`} style={{ fontSize: 14, color: B.teal, textDecoration: "none", padding: "6px 12px", border: `1px solid ${B.teal}`, borderRadius: B.rs }}>$49 {cond.name} in {stateName} →</a>
                <a href={`/${stateCode.toLowerCase()}/`} style={{ fontSize: 14, color: B.teal, textDecoration: "none", padding: "6px 12px", border: `1px solid ${B.teal}`, borderRadius: B.rs }}>All conditions in {stateName} →</a>
              </div>
            </section>
          );
        })()}

        {/* NAV LINKS */}
        <div style={{ marginBottom: 24, display: "flex", flexWrap: "wrap", gap: 10 }}>
          <a href={`/insurance/${insurerSlug}/${stateSlug}`} style={{ fontSize: 14, color: B.teal, textDecoration: "none" }}>← {shortName} in {stateName}</a>
          <span style={{ color: B.border }}>|</span>
          <a href={`/insurance/${insurerSlug}/${conditionSlug}`} style={{ fontSize: 14, color: B.teal, textDecoration: "none" }}>{shortName} + {cond.name} (All States)</a>
          <span style={{ color: B.border }}>|</span>
          <a href={`/${cond.conditionPageSlug}`} style={{ fontSize: 14, color: B.teal, textDecoration: "none" }}>{cond.displayName} Treatment →</a>
        </div>

        {/* COMMISSIONER LINK */}
        <CommissionerLink stateCode={stateCode} stateName={stateName} />

        {/* Cost-page link + compare-grid (PR 3 of cost-and-compare sprint) */}
        <Or49CashLink />
        <CompareToOtherTelehealthGrid heading="Compare TeleDirectMD to Other Telehealth Providers" />

        <div style={{ marginBottom: 48 }}><InsuranceDisclaimer /></div>
      </div>
    </div>
  );
}
