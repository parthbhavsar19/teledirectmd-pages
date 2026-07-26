// Per-state content assembly for /insurance/curative/{state}/.
//
// Curative confirmed in writing on 2026-07-26 (Curative Network Contracting) that the
// TeleDirectMD provider agreement is NATIONAL: in-network for Curative members in every
// state where Dr. Bhavsar holds an active license. Exhibit D of that agreement is a set of
// state regulatory addenda for nine jurisdictions; it does not limit the contract's reach.
//
// This module exists so no Curative state page is a state-name substitution of another.
// Every narrative block below is assembled from data the repo already maintains per state:
//   data/state-licenses.json  license number, issuing board, verification registry, expiry
//   data/states.json          localities, pharmacy chains, telehealth statute summary
// Server-only by design: keeping the JSON reads out of insuranceConfig.js keeps 70KB of
// state data out of every insurance page's client bundle. Routes compute content and pass
// it down as props.

import fs from 'fs';
import path from 'path';
import { CURATIVE_STATES, EXHIBIT_D_STATES, CURATIVE_CONTRACT, CURATIVE_PLAN_DETAIL } from '../data/insurance/insuranceConfig';

const dataDir = path.join(process.cwd(), 'data');

let _states = null;
let _licenses = null;

function statesData() {
  if (!_states) _states = JSON.parse(fs.readFileSync(path.join(dataDir, 'states.json'), 'utf-8'));
  return _states;
}

function licenseData() {
  if (!_licenses) {
    _licenses = JSON.parse(fs.readFileSync(path.join(dataDir, 'state-licenses.json'), 'utf-8')).licenses;
  }
  return _licenses;
}

function longDate(iso) {
  if (!iso) return null;
  const [y, m, d] = iso.split('-').map(Number);
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];
  return `${months[m - 1]} ${d}, ${y}`;
}

// The repo's own state data is em-dash free today, but these strings flow straight into
// visible copy and JSON-LD, so normalize rather than trust.
function noEmDash(text) {
  return typeof text === 'string' ? text.replace(/\s*[—–]\s*/g, ', ') : text;
}

function joinList(items, conjunction = 'and') {
  if (items.length === 0) return '';
  if (items.length === 1) return items[0];
  return `${items.slice(0, -1).join(', ')}, ${conjunction} ${items[items.length - 1]}`;
}

// Conditions linked from each state page. Every slug resolves to a real
// /{stateSlug}/{condition}/ page for all Curative states, so the links land inside
// the site graph rather than dead-ending.
export const CURATIVE_CONDITIONS = [
  { slug: 'uti-treatment-online', label: 'UTI (Urinary Tract Infection)' },
  { slug: 'sinus-infection-treatment-online', label: 'Sinus Infection' },
  { slug: 'sore-throat-treatment-online', label: 'Sore Throat' },
  { slug: 'ear-pain-treatment-online', label: 'Ear Infection and Ear Pain' },
  { slug: 'pink-eye-treatment-online', label: 'Pink Eye (Conjunctivitis)' },
  { slug: 'influenza-treatment-online', label: 'Flu and Influenza' },
  { slug: 'yeast-infection-treatment-online', label: 'Yeast Infection' },
  { slug: 'bv-treatment-online', label: 'BV (Bacterial Vaginosis)' },
  { slug: 'shingles-treatment-online', label: 'Shingles' },
  { slug: 'seasonal-allergies-treatment-online', label: 'Seasonal Allergies' },
  { slug: 'hypertension-refills-online', label: 'Hypertension Refills' },
  { slug: 'hyperlipidemia-refills-online', label: 'Hyperlipidemia Refills' },
];

// Cost mechanics and participating networks are set by the Curative contract, not by
// state, so these are re-exported from the payer-level config rather than varied here.
export const CURATIVE_COPAY = CURATIVE_PLAN_DETAIL.copay;
export const CURATIVE_PLANS = CURATIVE_PLAN_DETAIL.plans;
export const CURATIVE_PRODUCT_LINES = CURATIVE_PLAN_DETAIL.productLines;
export const CURATIVE_EXCLUDED_LINES = CURATIVE_PLAN_DETAIL.excludedLines;

/**
 * Returns the raw per-state source records the Curative pages draw on, or null when the
 * state is not enabled. Callers should treat a null return as "no page for this state".
 */
export function getCurativeStateSources(code) {
  const cfg = CURATIVE_STATES[code];
  if (!cfg || !cfg.enabled) return null;
  const state = statesData().find((s) => s.abbr === code);
  const license = licenseData()[cfg.slugAbbr];
  if (!state || !license) return null;
  return { cfg, state, license };
}

/**
 * Assembles the full content object for one Curative state page.
 *
 * The two blocks that carry the Exhibit D distinction are `regulatory` (a state regulatory
 * addendum section for the nine Exhibit D jurisdictions) and its national-network
 * counterpart for every other state. They are mutually exclusive and materially different
 * in claim, heading, and detail.
 */
export function getCurativeStateContent(code) {
  const sources = getCurativeStateSources(code);
  if (!sources) return null;
  const { cfg, state, license } = sources;

  const stateName = state.name;
  const cities = state.cities || [];
  const pharmacies = state.pharmacies || [];
  const isExhibitD = EXHIBIT_D_STATES.includes(code);
  const board = license.issuingBoard;
  const expires = longDate(license.dateExpires);
  const issued = longDate(license.dateIssued);

  // Florida is a telehealth provider registration under Fla. Stat. 456.47 rather than a
  // full license, and the repo records that distinction. Say so instead of flattening it.
  const isTelehealthRegistration = /telehealth provider registration/i.test(license.notes || '');

  // Only cite a statute where the repo records one, so a future registration state does not
  // inherit Florida's citation.
  const registrationAuthority = code === 'FL' ? ' under Fla. Stat. 456.47' : '';

  const credentialSentence = isTelehealthRegistration
    ? `Parth Bhavsar, MD holds ${stateName} out-of-state telehealth provider registration ${license.licenseNumber}, issued by the ${board}, which authorizes telehealth practice with ${stateName} patients${registrationAuthority}.`
    : `Parth Bhavsar, MD holds ${stateName} medical license ${license.licenseNumber}, issued by the ${board}${expires ? `, current through ${expires}` : ''}.`;

  const intro = code === 'GA'
    ? `Georgia is TeleDirectMD's home state and the first state activated under the Curative agreement. ${credentialSentence} He is board-certified in Family Medicine and sees Georgia patients by secure video for the same everyday problems you would take to a primary care or urgent care office.`
    : `Curative coverage in ${stateName} rests on a single fact: TeleDirectMD's provider agreement with Curative is national, and Dr. Bhavsar is licensed to practice in ${stateName}. ${credentialSentence} He is board-certified in Family Medicine and sees ${stateName} patients by secure video for the everyday problems you would otherwise take to a primary care or urgent care office.`;

  const networkPara = code === 'GA'
    ? `Georgia members reach the network through Curative's Cigna Healthcare PPO wrap network arrangement. TeleDirectMD participates through a direct contract with Curative, so your visit is processed as in-network care rather than as an out-of-network claim. The agreement took effect ${cfg.effectiveDate}, and Georgia credentialing was confirmed active on ${cfg.credentialingConfirmed}.`
    : `TeleDirectMD holds a direct contract with Curative rather than a state-by-state panel arrangement, so a ${stateName} member's video visit is adjudicated as in-network care instead of an out-of-network claim. The agreement took effect ${cfg.effectiveDate}. ${CURATIVE_CONTRACT.source} confirmed the national scope of the agreement in writing on ${CURATIVE_CONTRACT.confirmedDate}, covering every state where Dr. Bhavsar holds an active license.`;

  const cityList = joinList(cities.slice(0, 6));
  const localPara = `Because the visit is virtual, there is no drive and no waiting room. ${stateName} patients from ${cityList}, along with rural counties with no urgent care nearby, connect from home or from work. Prescriptions are routed electronically to your local pharmacy, including ${joinList(pharmacies.slice(0, 5))} locations across the state.`;

  const telehealthPara = noEmDash(state.telehealthRegulation);

  const licensurePara = isTelehealthRegistration
    ? `${credentialSentence} The ${board} maintains the public record for that registration, and the registry linked below is the primary source for it. Curative claims for ${stateName} members are submitted under NPI 1104323203.`
    : `${credentialSentence}${issued ? ` The license was issued ${issued}.` : ''} You can confirm it independently through the ${board} registry linked below. Curative claims for ${stateName} members are submitted under NPI 1104323203.`;

  const regulatory = isExhibitD
    ? {
        heading: `${stateName} regulatory addendum to the Curative provider agreement`,
        lead: `${stateName} is one of nine jurisdictions covered by Exhibit D of the TeleDirectMD provider agreement with Curative.`,
        body: [
          `Exhibit D attaches a state-specific regulatory addendum to the base agreement for each of those jurisdictions: ${joinList(EXHIBIT_D_STATES.map((c) => CURATIVE_STATES[c]?.name).filter(Boolean))}. The addendum conforms the contract to the provisions ${stateName} law imposes on health plans and their participating providers, including the state's rules on claim handling, member appeals, and continuity of care.`,
          `For a ${stateName} Curative member the practical effect is that plan protections written into ${stateName} insurance law travel with the contract rather than sitting outside it. Exhibit D is an addendum, not a limitation: it does not confine the agreement to those nine jurisdictions, and the network is national.`,
        ],
        badge: 'Exhibit D jurisdiction',
      }
    : {
        heading: `How national network access works in ${stateName}`,
        lead: `${stateName} is covered by the base Curative provider agreement, with no separate state addendum required.`,
        body: [
          `Nine jurisdictions carry a state regulatory addendum under Exhibit D of the agreement. ${stateName} is not one of them, which means the base contract terms apply directly: the same participating networks, the same Baseline Visit cost-sharing design, and the same claim submission path, without a state-specific rider.`,
          `Network access for a ${stateName} member therefore turns on two things only, both of which are already true: Curative's national agreement with TeleDirectMD, and Dr. Bhavsar's active ${stateName} license. There is no separate state panel to be admitted to and no referral requirement.`,
        ],
        badge: 'National agreement, no state addendum',
      };

  const planNote = isExhibitD
    ? `Curative participating networks per contract Exhibit C, effective ${cfg.effectiveDate}, as conformed by the ${stateName} regulatory addendum in Exhibit D. Plan acceptance is subject to your specific plan benefits. Self-pay $79 is always available.`
    : `Curative participating networks per contract Exhibit C, effective ${cfg.effectiveDate}, applied to ${stateName} under the base agreement with no state addendum required. Plan acceptance is subject to your specific plan benefits. Self-pay $79 is always available.`;

  const faqs = [
    {
      q: `Which doctors take Curative insurance in ${stateName}?`,
      a: `TeleDirectMD is in-network with Curative in ${stateName} for Commercial PPO, EPO, and self-funded plans. Visits are with Parth Bhavsar, MD (NPI 1104323203), board-certified in Family Medicine. Appointments are virtual and usually available the same day.`,
    },
    // State-specific: licensure record, drawn from data/state-licenses.json.
    {
      q: isTelehealthRegistration
        ? `Is Parth Bhavsar, MD registered to practice telehealth in ${stateName}?`
        : `Is Parth Bhavsar, MD licensed in ${stateName}?`,
      a: isTelehealthRegistration
        ? `Yes. He holds ${stateName} out-of-state telehealth provider registration ${license.licenseNumber} from the ${board}, which authorizes telehealth practice with ${stateName} patients${registrationAuthority}. The registration is verifiable in the ${board} public registry. Curative claims for ${stateName} members are billed under NPI 1104323203.`
        : `Yes. He holds ${stateName} medical license ${license.licenseNumber}, issued by the ${board}${expires ? ` and current through ${expires}` : ''}. The license is verifiable in the ${board} public registry. An active ${stateName} license is what makes the national Curative agreement operative for ${stateName} members.`,
    },
    // State-specific: telehealth statute summary, drawn from data/states.json.
    {
      q: `What do ${stateName} telehealth rules allow during a Curative visit?`,
      a: `${telehealthPara} Within those rules Dr. Bhavsar can evaluate you and, when clinically appropriate, send a prescription to a ${stateName} pharmacy. Controlled substances are never prescribed.`,
    },
    // State-specific: the Exhibit D distinction, different question and answer per branch.
    isExhibitD
      ? {
          q: `Does the Curative plan meet ${stateName} insurance requirements?`,
          a: `Yes. ${stateName} is one of the nine jurisdictions covered by Exhibit D of the provider agreement, which attaches a ${stateName} regulatory addendum conforming the contract to state requirements for health plans and participating providers. That addendum governs items such as claim handling, member appeals, and continuity of care. It supplements the national agreement rather than narrowing it.`,
        }
      : {
          q: `Curative is not on my ${stateName} plan documents as a local network. Am I still in-network?`,
          a: `Yes, if your plan is a Curative Commercial PPO, EPO, or self-funded product. TeleDirectMD contracts with Curative directly at the national level, so participation does not depend on a ${stateName} state addendum or a local panel. ${CURATIVE_CONTRACT.source} confirmed the national scope in writing on ${CURATIVE_CONTRACT.confirmedDate}. Verify your specific plan with Curative before booking.`,
        },
    {
      q: `What will a ${stateName} Curative member pay for a video visit?`,
      a: `Curative members who complete their annual Baseline Visit within 120 days of their plan start date have $0 copays, $0 deductible, and 0% coinsurance for in-network care, including this visit. Members who have not completed the Baseline Visit pay toward their plan deductible, commonly $5,000 individual and $10,000 family on the EPO product. A flat $79 self-pay visit is also available if you prefer not to use insurance.`,
    },
    // State-specific: localities and pharmacy routing.
    {
      q: `Where in ${stateName} can I use a Curative visit?`,
      a: `Anywhere in ${stateName}, as long as you are physically located in the state at the time of the visit. Patients connect from ${joinList(cities.slice(0, 4))} and from smaller communities across the state. Any prescription is sent electronically to the pharmacy you name, including ${joinList(pharmacies.slice(0, 3))}.`,
    },
    {
      q: `Does TeleDirectMD accept ${stateName} Medicaid or Medicare plans through Curative?`,
      a: `No. The Curative agreement covers Commercial PPO, EPO, and self-funded plans only. TeleDirectMD is not in-network with ${stateName} Medicaid, Managed Medicaid, CHIP, or Medicare-Medicaid plans, and does not bill them in any state. Medicare Advantage and HMO products are also outside the Curative contract. The $79 flat self-pay visit remains available.`,
    },
  ];

  return {
    code,
    slug: cfg.slug,
    stateSlug: cfg.slugAbbr,
    name: stateName,
    effectiveDate: cfg.effectiveDate,
    effectiveDateISO: cfg.effectiveDateISO,
    isExhibitD,
    conditionPrefix: `/${cfg.slugAbbr}/`,
    license: {
      number: license.licenseNumber,
      board,
      boardUrl: license.issuingBoardUrl,
      verificationUrl: license.verificationUrl,
      credential: license.credentialDisplayLong,
      expires,
      isTelehealthRegistration,
    },
    cities,
    pharmacies,
    intro,
    networkPara,
    localPara,
    licensurePara,
    telehealthPara,
    regulatory,
    planNote,
    plans: CURATIVE_PLANS,
    productLines: CURATIVE_PRODUCT_LINES,
    excludedLines: CURATIVE_EXCLUDED_LINES,
    copay: CURATIVE_COPAY,
    conditions: CURATIVE_CONDITIONS,
    faqs,
  };
}

/**
 * Lightweight roster for the hub: enough to render and group the state grid without
 * assembling every state's narrative.
 */
export function getCurativeRoster() {
  return Object.keys(CURATIVE_STATES)
    .filter((code) => CURATIVE_STATES[code].enabled)
    .map((code) => {
      const { cfg, state, license } = getCurativeStateSources(code);
      return {
        code,
        slug: cfg.slug,
        name: cfg.name,
        isExhibitD: EXHIBIT_D_STATES.includes(code),
        board: license.issuingBoard,
        topCity: (state.cities || [])[0] || null,
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name));
}
