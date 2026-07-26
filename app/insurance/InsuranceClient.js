'use client';

import { useState, useMemo, useEffect } from 'react';
import {
  insuranceByState,
  getActiveInsurers,
  getPendingInsurers,
  getInsuranceStateCount,
  getUniquePayerFamilyCount,
} from '../../lib/insurance-data';

// ─── Coverage checker — production version (Option B: Bold & Decisive) ─────────
// Shipped 2026-06-18 to un-retire /insurance/ as the canonical "Am I in your
// network?" surface. Reads from lib/insurance-data.js (source of truth synced
// to the Payor Enrollment Tracking Sheet + Notion).
//
// 3-step dropdown: State -> Payer -> Plan Type -> Result card
//
// Sitewide policy: Medicaid, Managed Medicaid, CHIP, MME, D-SNP are NEVER
// surfaced as in-network in any state. Selecting Medicaid as the plan type
// always returns the Medicaid exclusion result.

const ALL_US_STATES = [
  ['AL','Alabama'],['AK','Alaska'],['AZ','Arizona'],['AR','Arkansas'],['CA','California'],
  ['CO','Colorado'],['CT','Connecticut'],['DE','Delaware'],['FL','Florida'],['GA','Georgia'],
  ['HI','Hawaii'],['ID','Idaho'],['IL','Illinois'],['IN','Indiana'],['IA','Iowa'],
  ['KS','Kansas'],['KY','Kentucky'],['LA','Louisiana'],['ME','Maine'],['MD','Maryland'],
  ['MA','Massachusetts'],['MI','Michigan'],['MN','Minnesota'],['MS','Mississippi'],['MO','Missouri'],
  ['MT','Montana'],['NE','Nebraska'],['NV','Nevada'],['NH','New Hampshire'],['NJ','New Jersey'],
  ['NM','New Mexico'],['NY','New York'],['NC','North Carolina'],['ND','North Dakota'],['OH','Ohio'],
  ['OK','Oklahoma'],['OR','Oregon'],['PA','Pennsylvania'],['RI','Rhode Island'],['SC','South Carolina'],
  ['SD','South Dakota'],['TN','Tennessee'],['TX','Texas'],['UT','Utah'],['VT','Vermont'],
  ['VA','Virginia'],['WA','Washington'],['WV','West Virginia'],['WI','Wisconsin'],['WY','Wyoming'],
  ['DC','District of Columbia'],
];

// Result copy names the selected state, so this must cover every option in the
// dropdown above, not just the states that had payers when the checker shipped.
const STATE_NAMES = Object.fromEntries(ALL_US_STATES);

// Family-level payer dropdown choices. Selecting a family resolves to a
// state-specific payer name when the result is computed (e.g. BCBS in TX
// resolves to "Blue Cross Blue Shield of Texas").
const PAYER_FAMILIES = [
  { id:'aetna', label:'Aetna', match:(name) => /aetna|allina/i.test(name) },
  { id:'bcbs',  label:'Blue Cross Blue Shield / Anthem / Highmark / Florida Blue',
    match:(name) => /blue cross|bcbs|anthem|highmark|florida blue/i.test(name) },
  { id:'uhc',   label:'UnitedHealthcare', match:(name) => /unitedhealthcare|united healthcare|uhc/i.test(name) },
  { id:'curative', label:'Curative', match:(name) => /curative/i.test(name) },
  { id:'cigna', label:'Cigna', match:() => false },
  { id:'medicaid', label:'Medicaid / Managed Medicaid', match:() => false },
  { id:'other', label:'Other / not listed', match:() => false },
];

const PLAN_TYPES = [
  { id:'ppo', label:'PPO' },
  { id:'hmo', label:'HMO' },
  { id:'epo', label:'EPO' },
  { id:'pos', label:'POS' },
  { id:'ma',  label:'Medicare Advantage' },
  { id:'medicaid', label:'Medicaid / Managed Medicaid' },
  { id:'unsure', label:"I'm not sure" },
];

// ── Brand styles inlined for /insurance/ — matches lib/tdmd-styles.js tokens ──
const STYLES = `
  .ins-page{
    --tdmd-teal:#006b73;
    --tdmd-teal-hover:#005059;
    --tdmd-navy:#003e52;
    --tdmd-navy-deep:#002a3a;
    --tdmd-accent:#ff5a36;
    --tdmd-accent-hover:#e84a28;
    --tdmd-cream:#fff8f5;
    --tdmd-bg:#f6fafb;
    --tdmd-border:#cad7da;
    --tdmd-text:#0d2730;
    --tdmd-muted:#54707a;
    --tdmd-card:#ffffff;
    --tdmd-success-bg:#1b6e3e;
    --tdmd-warning-bg:#cf7a18;
    --tdmd-error-bg:#a02822;
    font-family:-apple-system,BlinkMacSystemFont,"SF Pro Text","Segoe UI",system-ui,sans-serif;
    color:var(--tdmd-text);
    background:var(--tdmd-bg);
    -webkit-font-smoothing:antialiased;
  }
  @media (prefers-color-scheme: dark){
    .ins-page{
      --tdmd-bg:#0a171c;
      --tdmd-card:#122028;
      --tdmd-border:#1e3340;
      --tdmd-text:#e2edf0;
      --tdmd-muted:#8fa8b2;
      --tdmd-cream:#1a201d;
    }
  }
  .ins-hero{
    background:var(--tdmd-navy);
    color:#fff;
    padding:64px 24px;
    position:relative;
    overflow:hidden;
  }
  .ins-hero::before{
    content:"";position:absolute;top:-100px;right:-100px;
    width:480px;height:480px;
    background:radial-gradient(circle,rgba(255,90,54,0.18) 0%,transparent 70%);
    pointer-events:none;
  }
  .ins-hero-inner{
    max-width:1100px;margin:0 auto;
    display:grid;grid-template-columns:1.1fr 1fr;gap:48px;align-items:center;
    position:relative;z-index:1;
  }
  @media(max-width:860px){.ins-hero-inner{grid-template-columns:1fr;gap:32px;}}
  .ins-hero-left h1{
    font-size:44px;font-weight:800;letter-spacing:-0.02em;line-height:1.08;
    margin:0 0 16px;
  }
  @media(min-width:861px){.ins-hero-left h1{font-size:52px;}}
  .ins-hero-left h1 .accent{color:var(--tdmd-accent);}
  .ins-hero-left p{font-size:18px;color:#bfd7dc;margin:0 0 24px;max-width:480px;line-height:1.5;}
  .ins-hero-stats{
    display:flex;gap:32px;margin-top:32px;padding-top:24px;border-top:1px solid rgba(255,255,255,0.15);
  }
  .ins-stat .n{font-size:30px;font-weight:800;color:#fff;font-variant-numeric:tabular-nums;letter-spacing:-0.02em;}
  .ins-stat .l{font-size:12px;color:#9ec0c7;text-transform:uppercase;letter-spacing:0.08em;font-weight:700;margin-top:2px;}
  .ins-checker{
    background:var(--tdmd-card);
    border-radius:20px;
    padding:32px;
    box-shadow:0 24px 48px rgba(0,0,0,0.18);
    color:var(--tdmd-text);
  }
  .ins-checker-title{
    font-size:12px;font-weight:800;letter-spacing:0.12em;text-transform:uppercase;
    color:var(--tdmd-teal);margin:0 0 4px;
  }
  .ins-checker-sub{font-size:18px;font-weight:700;margin:0 0 24px;color:var(--tdmd-navy);}
  .ins-field{margin-bottom:16px;}
  .ins-field-label{
    display:flex;justify-content:space-between;align-items:baseline;
    font-size:13px;font-weight:700;color:var(--tdmd-navy);margin-bottom:8px;
  }
  .ins-field-num{font-size:11px;font-weight:800;color:var(--tdmd-accent);letter-spacing:0.05em;}
  .ins-select{
    width:100%;
    padding:14px 16px;
    border:2px solid var(--tdmd-border);
    border-radius:10px;
    background:var(--tdmd-card);
    font-size:15px;font-weight:600;font-family:inherit;color:var(--tdmd-text);
    appearance:none;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'><path d='M1 1l5 5 5-5' stroke='%23003e52' stroke-width='2.5' fill='none' stroke-linecap='round'/></svg>");
    background-repeat:no-repeat;background-position:right 16px center;
    cursor:pointer;
    transition:border 0.15s;
  }
  .ins-select:focus{outline:none;border-color:var(--tdmd-accent);}
  .ins-select:disabled{opacity:0.5;cursor:not-allowed;}
  .ins-check-btn{
    width:100%;
    padding:16px;
    background:var(--tdmd-accent);
    color:#fff;
    border:none;
    border-radius:10px;
    font-size:16px;font-weight:800;font-family:inherit;
    cursor:pointer;
    margin-top:8px;
    letter-spacing:0.02em;
    transition:background 0.15s,transform 0.1s;
  }
  .ins-check-btn:hover{background:var(--tdmd-accent-hover);}
  .ins-check-btn:active{transform:scale(0.99);}
  .ins-check-btn:disabled{background:var(--tdmd-muted);cursor:not-allowed;opacity:0.5;}
  .ins-result-section{
    max-width:1100px;
    margin:-60px auto 48px;
    padding:0 24px;
    position:relative;
    z-index:2;
    min-height:120px;
  }
  .ins-result-card{
    background:var(--tdmd-card);
    border-radius:20px;
    overflow:hidden;
    box-shadow:0 12px 32px rgba(0,62,82,0.08);
    border:1px solid var(--tdmd-border);
    opacity:0;
    transform:translateY(8px);
    transition:opacity 0.3s,transform 0.3s;
  }
  .ins-result-card.show{opacity:1;transform:translateY(0);}
  .ins-result-banner{
    padding:20px 32px;
    color:#fff;
    font-size:13px;font-weight:800;letter-spacing:0.06em;text-transform:uppercase;
    display:flex;align-items:center;gap:12px;
  }
  .ins-result-banner.success{background:var(--tdmd-success-bg);}
  .ins-result-banner.warning{background:var(--tdmd-warning-bg);}
  .ins-result-banner.error{background:var(--tdmd-error-bg);}
  .ins-banner-icon{
    width:24px;height:24px;border-radius:50%;
    background:rgba(255,255,255,0.22);
    display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:900;
  }
  .ins-result-body{padding:28px 32px;}
  .ins-result-headline{
    font-size:26px;font-weight:800;letter-spacing:-0.015em;
    color:var(--tdmd-navy);margin:0 0 12px;line-height:1.25;
  }
  @media(min-width:861px){.ins-result-headline{font-size:30px;}}
  .ins-result-text{font-size:16px;color:var(--tdmd-muted);margin:0 0 24px;line-height:1.55;}
  .ins-result-grid{
    display:grid;grid-template-columns:repeat(3,1fr);gap:16px;
    background:var(--tdmd-cream);
    border:1px solid #ffd9cb;
    border-radius:14px;
    padding:20px;
    margin:20px 0;
  }
  @media(max-width:640px){.ins-result-grid{grid-template-columns:1fr;}}
  .ins-grid-k{font-size:11px;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;color:var(--tdmd-accent);margin-bottom:4px;}
  .ins-grid-v{font-size:14.5px;font-weight:700;color:var(--tdmd-navy);}
  .ins-actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:24px;}
  .ins-btn{
    display:inline-flex;align-items:center;gap:8px;
    padding:13px 22px;border-radius:10px;
    font-size:15px;font-weight:800;letter-spacing:0.01em;
    text-decoration:none;cursor:pointer;border:none;
    font-family:inherit;
    transition:transform 0.1s,background 0.15s;
  }
  .ins-btn:active{transform:scale(0.98);}
  .ins-btn-primary{background:var(--tdmd-accent);color:#fff;}
  .ins-btn-primary:hover{background:var(--tdmd-accent-hover);}
  .ins-btn-ghost{background:transparent;border:2px solid var(--tdmd-border);color:var(--tdmd-navy);}
  .ins-medicaid-strip{
    max-width:1100px;
    margin:0 auto 64px;
    padding:0 24px;
  }
  .ins-medicaid-card{
    background:var(--tdmd-navy);
    color:#fff;
    border-radius:20px;
    padding:32px 36px;
    display:grid;grid-template-columns:auto 1fr;gap:24px;align-items:start;
  }
  @media(max-width:640px){.ins-medicaid-card{grid-template-columns:1fr;padding:28px;}}
  .ins-medicaid-icon{
    width:52px;height:52px;border-radius:14px;
    background:var(--tdmd-accent);
    display:flex;align-items:center;justify-content:center;
    font-size:28px;font-weight:800;color:#fff;
  }
  .ins-medicaid-card h2{font-size:22px;font-weight:800;margin:0 0 8px;letter-spacing:-0.01em;}
  .ins-medicaid-card p{font-size:15.5px;color:#bfd7dc;margin:0 0 8px;line-height:1.55;}
  .ins-medicaid-card strong{color:#fff;}
  .ins-medicaid-card .sub{font-size:13px;color:#9ec0c7;margin-top:8px;font-weight:600;}
  .ins-faq{
    max-width:780px;margin:0 auto 80px;padding:0 24px;
  }
  .ins-faq h2{font-size:24px;font-weight:800;color:var(--tdmd-navy);letter-spacing:-0.01em;margin:0 0 8px;}
  .ins-faq-intro{font-size:15px;color:var(--tdmd-muted);margin:0 0 24px;}
  .ins-faq-item{
    border:1px solid var(--tdmd-border);
    border-radius:14px;
    padding:18px 22px;
    margin-bottom:10px;
    background:var(--tdmd-card);
  }
  .ins-faq-item summary{
    cursor:pointer;font-weight:700;color:var(--tdmd-navy);font-size:15.5px;
    list-style:none;display:flex;justify-content:space-between;align-items:center;gap:12px;
  }
  .ins-faq-item summary::-webkit-details-marker{display:none;}
  .ins-faq-item summary::after{content:"+";font-size:22px;color:var(--tdmd-accent);font-weight:800;line-height:1;}
  .ins-faq-item[open] summary::after{content:"−";}
  .ins-faq-item .tdmd-faq-a{font-size:15px;color:var(--tdmd-text);line-height:1.55;margin-top:14px;}
  .ins-fineprint{
    max-width:780px;margin:32px auto 80px;padding:0 24px;
    font-size:12.5px;color:var(--tdmd-muted);text-align:center;line-height:1.55;
  }
`;

function resolveResult(stateAbbr, payerId, planId) {
  // Universal Medicaid rejection
  if (payerId === 'medicaid' || planId === 'medicaid') {
    return {
      kind: 'error',
      banner: 'Medicaid Not Accepted',
      icon: '✕',
      headline: 'We don\'t accept Medicaid in any state.',
      text: 'TeleDirectMD is not in-network with any Medicaid program, Managed Medicaid plan, CHIP, Medicare-Medicaid (MME), or Dual Special Needs Plan (D-SNP) — in any state we serve. You can still book a $79 self-pay visit, which is HSA/FSA eligible.',
      status: 'Not accepted',
      eff: '—',
      plans: '—',
      ctaText: 'Book $79 self-pay visit →',
      ctaHref: '/book-online',
      showSecondary: false,
    };
  }

  // Universal Cigna rejection (closed for telehealth-only across all states per Sheet)
  if (payerId === 'cigna') {
    return {
      kind: 'error',
      banner: 'Not In-Network',
      icon: '✕',
      headline: `Cigna is not in-network in ${STATE_NAMES[stateAbbr] || 'your state'}.`,
      text: 'We do not currently have a Cigna contract in any state. You can book a $79 self-pay visit, or submit an out-of-network claim to Cigna for partial reimbursement.',
      status: 'Not contracted',
      eff: '—',
      plans: '—',
      ctaText: 'Book $79 self-pay visit →',
      ctaHref: `/book-online?state=${stateAbbr}`,
      showSecondary: false,
    };
  }

  // Other payer / not listed
  if (payerId === 'other') {
    return {
      kind: 'warning',
      banner: 'Plan Not Listed',
      icon: '?',
      headline: `Tell us which plan you have in ${STATE_NAMES[stateAbbr] || 'your state'}.`,
      text: 'We may still be in-network through a sub-network or affiliate. The fastest way to confirm is to book a $79 self-pay visit — if we can bill your plan instead, we will, and refund the difference.',
      status: 'Check at booking',
      eff: '—',
      plans: '—',
      ctaText: 'Book and we\'ll verify →',
      ctaHref: `/book-online?state=${stateAbbr}`,
      showSecondary: false,
    };
  }

  // Outside the 17 covered states
  const stateActive = getActiveInsurers(stateAbbr) || [];
  const statePending = getPendingInsurers(stateAbbr) || [];
  if (stateActive.length === 0 && statePending.length === 0) {
    return {
      kind: 'error',
      banner: 'State Not Currently Served',
      icon: '✕',
      headline: `We don't currently serve ${STATE_NAMES[stateAbbr] || 'this state'}.`,
      text: 'TeleDirectMD is licensed in 43 states. Coverage is expanding. If you have a different state to check, use the dropdown above. Otherwise, book a $79 self-pay visit (if licensed in your state) or join the waitlist.',
      status: 'Not licensed',
      eff: '—',
      plans: '—',
      ctaText: 'See states we serve →',
      ctaHref: '/who-we-serve',
      showSecondary: false,
    };
  }

  // Resolve the family selection against the state's active insurers
  const family = PAYER_FAMILIES.find(f => f.id === payerId);
  const matchedActive = family ? stateActive.find(p => family.match(p.displayName || p.name)) : null;
  const matchedPending = family ? statePending.find(p => family.match(p.displayName || p.name)) : null;

  if (matchedPending && !matchedActive) {
    return {
      kind: 'warning',
      banner: 'Pending — Coming Soon',
      icon: '⏳',
      headline: `${matchedPending.displayName || matchedPending.name} in ${STATE_NAMES[stateAbbr]} — pending.`,
      text: 'We\'re actively finishing the credentialing process for this payer in this state. We\'ll notify you when it\'s active. In the meantime, you can book a $79 self-pay visit.',
      status: 'Pending',
      eff: 'Pending',
      plans: 'Pending',
      ctaText: 'Book $79 self-pay visit →',
      ctaHref: `/book-online?state=${stateAbbr}`,
      showSecondary: false,
    };
  }

  if (!matchedActive) {
    return {
      kind: 'error',
      banner: 'Not Currently In-Network',
      icon: '✕',
      headline: `${family ? family.label : 'That payer'} in ${STATE_NAMES[stateAbbr]} — not in-network.`,
      text: 'We don\'t currently have an in-network contract with this payer in this state. You can book a $79 self-pay visit, or submit an out-of-network claim to your insurer for partial reimbursement.',
      status: 'Not contracted',
      eff: '—',
      plans: '—',
      ctaText: 'Book $79 self-pay visit →',
      ctaHref: `/book-online?state=${stateAbbr}`,
      showSecondary: false,
    };
  }

  // Active — check if the chosen plan type is excluded by the contract
  const planString = (matchedActive.plans || '').toLowerCase();
  const planLabel = PLAN_TYPES.find(p => p.id === planId)?.label || 'Plan';
  let planExcluded = false;
  let excludeReason = '';

  // CA Aetna excludes HMO/QPOS
  if (stateAbbr === 'CA' && family?.id === 'aetna' && planId === 'hmo') {
    planExcluded = true;
    excludeReason = 'Our Aetna California contract excludes HMO and QPOS plans.';
  }
  // IL / MN / TX UHC are Commercial-only (MA excluded)
  if (['IL','MN','TX'].includes(stateAbbr) && family?.id === 'uhc' && planId === 'ma') {
    planExcluded = true;
    excludeReason = `Our UnitedHealthcare contract in ${STATE_NAMES[stateAbbr]} is Commercial-only — Medicare Advantage is not in-network in this state.`;
  }
  // FL Florida Blue is Commercial-only — Florida Blue Medicare Advantage,
  // Florida Blue Medicaid, and FEP are not in-network.
  if (stateAbbr === 'FL' && family?.id === 'bcbs' && planId === 'ma') {
    planExcluded = true;
    excludeReason = 'Our Florida Blue contract is Commercial-only — Florida Blue Medicare Advantage, Florida Blue Medicaid, and Federal Employee Program (FEP) plans are not in-network.';
  }
  // Curative is contracted for Commercial PPO, EPO, and self-funded plans only.
  if (family?.id === 'curative' && (planId === 'hmo' || planId === 'ma')) {
    planExcluded = true;
    excludeReason = 'Our Curative contract covers Commercial PPO, EPO, and self-funded plans only. HMO and Medicare Advantage products are not in-network.';
  }

  if (planExcluded) {
    return {
      kind: 'error',
      banner: 'Plan Type Not Covered',
      icon: '✕',
      headline: `${family.label} ${planLabel} in ${STATE_NAMES[stateAbbr]} — not in-network.`,
      text: `${excludeReason} We are in-network with this payer's other plan types in this state — try changing the plan type above. Or book a $79 self-pay visit.`,
      status: 'Plan excluded',
      eff: formatDate(matchedActive.effectiveDate),
      plans: matchedActive.planSummary || 'See contract details',
      ctaText: 'Book $79 self-pay visit →',
      ctaHref: `/book-online?state=${stateAbbr}`,
      showSecondary: false,
    };
  }

  // Success!
  const displayName = matchedActive.displayName || matchedActive.name;
  const planTypeText = planId === 'unsure'
    ? 'your plan type'
    : `your ${planLabel} plan`;

  return {
    kind: 'success',
    banner: 'In-Network — You\'re Covered',
    icon: '✓',
    headline: `${displayName} in ${STATE_NAMES[stateAbbr]} — you're in our network.`,
    text: `Dr. Parth Bhavsar is in-network with ${displayName} in ${STATE_NAMES[stateAbbr]}. ${planId === 'unsure' ? '' : `We accept ${planLabel} plans with this payer. `}${family.id === 'curative' ? 'Curative members who have completed their annual Baseline Visit typically have $0 cost sharing for in-network care; members who have not completed it are subject to their plan deductible.' : 'Your standard copay applies.'} We verify your benefits before your visit.`,
    status: 'Active',
    eff: formatDate(matchedActive.effectiveDate),
    plans: matchedActive.plans || 'PPO, HMO, EPO, POS, Medicare Advantage',
    ctaText: `Book with ${displayName} in ${STATE_NAMES[stateAbbr]} →`,
    ctaHref: `/book-online?payer=${family.id}&state=${stateAbbr}&planType=${planId}`,
    showSecondary: true,
  };
}

function formatDate(iso) {
  if (!iso) return '—';
  try {
    const d = new Date(iso + 'T00:00:00');
    return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  } catch { return iso; }
}

const FAQ_ITEMS = [
  { q:'Does TeleDirectMD accept insurance?', a:'Yes. We are in-network with Aetna, Blue Cross Blue Shield affiliates (Florida Blue, Anthem, Highmark, BCBS-IL, BCBS-TX), UnitedHealthcare, and Curative. Curative is in-network in 38 states under a national provider agreement; the other payers are contracted state by state. Use the coverage checker above to confirm your specific plan.' },
  { q:'Which plan types do you accept?', a:'PPO, HMO, EPO, POS, and Medicare Advantage. State-specific exclusions apply (for example, Aetna California excludes HMO and QPOS; UnitedHealthcare in Illinois, Minnesota, and Texas is commercial-only; Curative is Commercial PPO, EPO, and self-funded only, with no HMO or Medicare Advantage). The checker above shows your exact result.' },
  { q:'Does TeleDirectMD accept Medicaid?', a:'No. We are not in-network with any Medicaid program, Managed Medicaid plan, CHIP, Medicare-Medicaid (MME), or Dual Special Needs Plan (D-SNP) in any state we serve. Patients with Medicaid-only coverage can still book a $79 self-pay visit (HSA/FSA eligible).' },
  { q:'How much is a self-pay visit?', a:'$79 flat fee. Includes the physician consultation, any clinically appropriate prescriptions, and a work or school excuse note when medically appropriate. HSA and FSA cards accepted.' },
  { q:'What if my plan is not in-network?', a:'You can book as a self-pay patient for $79 and submit an out-of-network claim to your insurer for partial reimbursement. Many commercial plans cover out-of-network telehealth.' },
];

export default function InsuranceClient() {
  const [stateAbbr, setStateAbbr] = useState('');
  const [payer, setPayer] = useState('');
  const [plan, setPlan] = useState('');
  const [result, setResult] = useState(null);
  const [touched, setTouched] = useState(false);

  // Compute trust-strip numbers live from data
  const stateCount = useMemo(() => getInsuranceStateCount(), []);
  const payerFamilyCount = useMemo(() => getUniquePayerFamilyCount(), []);

  // Pick up ?state=GA etc from URL on mount (lets us deep-link from condition pages)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const s = params.get('state');
    const p = params.get('payer');
    if (s && STATE_NAMES[s.toUpperCase()]) setStateAbbr(s.toUpperCase());
    if (p && PAYER_FAMILIES.find(f => f.id === p)) setPayer(p);
  }, []);

  const canCheck = stateAbbr && payer && plan;

  function handleCheck(e) {
    e?.preventDefault?.();
    if (!canCheck) return;
    setTouched(true);
    const r = resolveResult(stateAbbr, payer, plan);
    setResult(r);
    // Scroll to result
    setTimeout(() => {
      const el = document.getElementById('ins-result-section');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }

  return (
    <div className="ins-page">
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />

      <section className="ins-hero">
        <div className="ins-hero-inner">
          <div className="ins-hero-left">
            <h1>See if you're <span className="accent">covered</span> in 10 seconds.</h1>
            <p>Pick your state, payer, and plan type. Get an instant answer — and if you're in-network, book a same-day video visit with your standard copay applied.</p>
            <div className="ins-hero-stats">
              <div className="ins-stat"><div className="n">{stateCount}</div><div className="l">States</div></div>
              <div className="ins-stat"><div className="n">{payerFamilyCount}</div><div className="l">Major Payers</div></div>
              <div className="ins-stat"><div className="n">$79</div><div className="l">If self-pay</div></div>
            </div>
          </div>

          <form className="ins-checker" onSubmit={handleCheck} aria-label="Coverage checker">
            <p className="ins-checker-title">Coverage Checker</p>
            <p className="ins-checker-sub">Three questions, one answer.</p>

            <div className="ins-field">
              <div className="ins-field-label"><span>State</span><span className="ins-field-num">01</span></div>
              <select className="ins-select" value={stateAbbr} onChange={e => setStateAbbr(e.target.value)} aria-label="Select your state">
                <option value="">Select your state</option>
                {ALL_US_STATES.map(([abbr,name]) => (
                  <option key={abbr} value={abbr}>{name}{insuranceByState[abbr] ? '' : ''}</option>
                ))}
              </select>
            </div>

            <div className="ins-field">
              <div className="ins-field-label"><span>Insurance company</span><span className="ins-field-num">02</span></div>
              <select className="ins-select" value={payer} onChange={e => setPayer(e.target.value)} disabled={!stateAbbr} aria-label="Select your insurer">
                <option value="">Select payer</option>
                {PAYER_FAMILIES.map(f => (
                  <option key={f.id} value={f.id}>{f.label}</option>
                ))}
              </select>
            </div>

            <div className="ins-field">
              <div className="ins-field-label"><span>Plan type</span><span className="ins-field-num">03</span></div>
              <select className="ins-select" value={plan} onChange={e => setPlan(e.target.value)} disabled={!payer} aria-label="Select your plan type">
                <option value="">Select plan type</option>
                {PLAN_TYPES.map(p => (
                  <option key={p.id} value={p.id}>{p.label}</option>
                ))}
              </select>
            </div>

            <button type="submit" className="ins-check-btn" disabled={!canCheck}>
              Check My Coverage →
            </button>
          </form>
        </div>
      </section>

      <section className="ins-result-section" id="ins-result-section">
        {touched && result && (
          <div className={`ins-result-card show`}>
            <div className={`ins-result-banner ${result.kind}`}>
              <div className="ins-banner-icon">{result.icon}</div>
              <span>{result.banner}</span>
            </div>
            <div className="ins-result-body">
              <h2 className="ins-result-headline">{result.headline}</h2>
              <p className="ins-result-text tdmd-insurance-summary">{result.text}</p>

              <div className="ins-result-grid">
                <div><div className="ins-grid-k">Status</div><div className="ins-grid-v">{result.status}</div></div>
                <div><div className="ins-grid-k">Effective</div><div className="ins-grid-v">{result.eff}</div></div>
                <div><div className="ins-grid-k">Plans accepted</div><div className="ins-grid-v">{result.plans}</div></div>
              </div>

              <div className="ins-actions">
                <a href={result.ctaHref} className="ins-btn ins-btn-primary">{result.ctaText}</a>
                {result.showSecondary && (
                  <a href="/about" className="ins-btn ins-btn-ghost">Verify in payer's directory</a>
                )}
              </div>
            </div>
          </div>
        )}
      </section>

      <section className="ins-medicaid-strip">
        <div className="ins-medicaid-card" role="region" aria-label="Medicaid not accepted">
          <div className="ins-medicaid-icon" aria-hidden="true">!</div>
          <div>
            <h2>Medicaid and Medicaid-Medicare plans not accepted</h2>
            <p>TeleDirectMD is <strong>not</strong> in-network with any Medicaid plan, Managed Medicaid plan, CHIP, Medicare-Medicaid (MME), or Dual Special Needs Plan (D-SNP) in any state we serve. If your only coverage is Medicaid, Managed Medicaid, or a Medicaid-Medicare dual plan, our visits cannot be billed to your plan.</p>
            <p className="sub">You can still book a visit at our $79 self-pay rate (HSA/FSA eligible).</p>
          </div>
        </div>
      </section>

      <section className="ins-faq">
        <h2>Frequently asked questions</h2>
        <p className="ins-faq-intro">Quick answers about insurance, self-pay, and how billing works at TeleDirectMD.</p>
        {FAQ_ITEMS.map((item, i) => (
          <details key={i} className="ins-faq-item">
            <summary>{item.q}</summary>
            <p className="tdmd-faq-a">{item.a}</p>
          </details>
        ))}
      </section>

      <p className="ins-fineprint">
        Coverage information is updated weekly from our payer contracts and credentialing system. We verify your specific benefits before each visit. If a payer-specific question isn't answered above, call us at <a href="tel:+16789561855" style={{color:'inherit',textDecoration:'underline'}}>(678) 956-1855</a> or email <a href="mailto:contact@teledirectmd.com" style={{color:'inherit',textDecoration:'underline'}}>contact@teledirectmd.com</a>.
      </p>
    </div>
  );
}
