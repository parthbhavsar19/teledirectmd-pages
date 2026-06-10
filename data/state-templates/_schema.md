# State-Template Schema

**Created:** 2026-06-10 (Phase 2 of SEO recovery)
**Purpose:** Each state gets one deep JSON file (`{slug}.json`) containing
state-specific narrative blocks that the page template injects at ~10 points
across every state-condition page for that state.

## Why this exists

Per the May 2026 Google deindexing investigation, the root cause was 93%+
Jaccard similarity across `/{state}/{condition}/` pages. Generic-template
pages with state-name swaps were classified as near-duplicates and filtered.

The hand-built California and Vermont pages prove that **content depth saturated
with state-specific entities** (CA page mentions "California" 92 times) survives
deduplication. The per-state JSON template captures that pattern declaratively:
one deep state JSON × the existing condition catalog = state-unique pages without
hand-writing each.

## Fallback behavior

If `data/state-templates/{slug}.json` does NOT exist for a state, the template
renders that state using the current generic behavior (no visible change).
This allows incremental rollout state-by-state.

## File layout

```
data/state-templates/
├── _schema.md                  ← this file
├── de.json                     ← Delaware (canary, first to ship)
├── sd.json                     ← South Dakota
├── ...                         ← one file per state, populated incrementally
```

## Required top-level fields

Every state-template JSON must contain these top-level keys:

```jsonc
{
  "stateCode": "DE",
  "stateName": "Delaware",
  "schemaVersion": "1.0",
  "lastReviewed": "2026-06-10",
  "reviewedBy": "Parth Bhavsar, MD",

  // Auditable rubric — derived from 6 state attributes (see below)
  "voiceProfile": {
    "density": "mid",                // "frontier" | "rural" | "mid" | "urban"
    "regulation": "standard",         // "permissive" | "standard" | "strict"
    "payerLandscape": "multi",        // "self-pay-only" | "single-payer" | "multi-payer"
    "epidemiology": ["lyme-borderline", "allergy-moderate"],  // tags
    "boardStrictness": "standard",    // "minimal" | "standard" | "strict"
    "culturalRegister": "northeast",  // "northeast" | "south" | "midwest" | "west" | "frontier"
    "voiceNotes": "Standard clinical voice; light coastal context for tick-bite pages."
  },

  // ─── INJECTION CONTENT (10 blocks, all required) ───

  "stateHero": {
    "openingParagraph": "...",        // ~120 words, replaces generic intro on every condition page in this state
    "stateContextHint": "...",        // ~30 words appearing in hero subtitle
    "saturation": {                    // verification — automated check at build time
      "stateNameMentions": 4,
      "stateEntityMentions": 3
    }
  },

  "stateEligibility": {
    "localTriggers": ["...", "..."],   // 2-4 state-specific eligibility considerations
    "intro": "..."                     // ~80 words
  },

  "statePricing": {
    "context": "...",                  // ~100 words: state Medicaid stance, HSA/FSA acceptance,
                                       // payer landscape signal, all framed around the locked $79 flat self-pay
    "additionalNotes": []
  },

  "stateTreatmentContext": {
    "pharmacyAndRx": "...",            // ~150 words: state pharmacy partners, prescribing statute,
                                       // PDMP requirements, controlled-substance reiteration
    "pharmacyChains": []               // structured for table use
  },

  "stateEpidemiology": {
    "general": "...",                  // ~120 words: state CDC stats, seasonal patterns,
                                       // primary-source citations inline
    "citations": [                     // structured for footnote / references section
      { "label": "...", "url": "..." }
    ]
  },

  "stateCompliance": {
    "credentialBlock": "...",          // ~100 words: license #, board name, statute,
                                       // verification URL — pulls from data/state-licenses.json
    "verifyUrl": "...",                // canonical verification URL
    "statuteCitation": "..."           // e.g. "Delaware Code Title 24, Ch. 17, § 1769D"
  },

  "stateCities": {
    "metroAndRural": "...",            // ~80 words: cities served + frontier/rural framing if applicable
    "cityList": [],                    // structured list with county attribution
    "frontierCounties": []
  },

  "stateInsurance": {
    "mode": "self-pay-only",           // "self-pay-only" | "single-payer" | "multi-payer"
    "selfPayDisclosure": "...",        // ~80 words, references locked PRICE_PHRASE
    "payers": []                        // populated only if mode !== "self-pay-only"
                                       // each entry: { name, anchorId, planNames, validFrom, copayNote }
  },

  "stateFaqs": [                       // 6 state-specific Q&A pairs appended to existing
    { "question": "...", "answer": "..." }  // condition FAQs and FAQPage JSON-LD
  ],

  // ─── CONDITION × STATE INTERSECTION FACTS ───
  // Per high-traffic condition (10-12 conditions), 80-120 words of bespoke
  // narrative for that condition in that state. Replaces the generic
  // condition opener for conditions listed here. Other conditions fall back
  // to generic condition content + the state injections above.

  "conditionOverrides": {
    "sinus-infection-treatment-online": {
      "stateConditionParagraph": "..." // ~100 words: condition × state intersection facts
                                       // (e.g., "Sinus infection visits in Delaware peak August–October
                                       //  with ragweed and grass pollen ...")
    },
    "tick-bite-treatment-online": {
      "stateConditionParagraph": "..."
    }
    // ... 8-10 more high-traffic conditions per state
  },

  // ─── STATE-SPECIFIC LEGAL LAYER ───
  // Compliance content REQUIRED in addition to (not replacing) the universal
  // compliance blocks in lib/global-invariants.js. Examples:
  //   - FL: Fla. Stat. § 456.47(4)(c) credential disclosure + verify-link
  //   - CA: Cal. Bus. & Prof. Code § 2290.5 disclosure
  //   - TX: 22 TAC § 174.5 telemedicine identification

  "stateLegalLayer": {
    "required": true,                  // if false, only universal compliance applies
    "blocks": [
      {
        "statute": "Fla. Stat. § 456.47(4)(c)",
        "renderAt": "hero-credential",  // injection point: "hero-credential" | "footer" | "head"
        "content": "..."
      }
    ],
    "forbiddenPhrases": []             // additional state-specific forbidden phrases
                                       // (merged with FORBIDDEN_PHRASES_BY_STATE)
  }
}
```

## Voice rubric — the 6 attributes

How `voiceProfile` is derived. All values measurable from public data:

| Attribute | Source | Values |
|---|---|---|
| `density` | Population per sq-mi + % in metros (Census) | `frontier` (<10/mi²), `rural` (10-50), `mid` (50-200), `urban` (>200) |
| `regulation` | State telehealth statute length + payer parity law | `permissive`, `standard`, `strict` |
| `payerLandscape` | Number of dominant commercial payers accepted | `self-pay-only`, `single-payer`, `multi-payer` |
| `epidemiology` | State DOH + CDC BRFSS data (tags) | e.g. `lyme-high`, `tick-rmsf`, `allergy-high`, `uv-coastal` |
| `boardStrictness` | State board telehealth-marketing rules | `minimal`, `standard`, `strict` |
| `culturalRegister` | Census region (weighted lightest) | `northeast`, `south`, `midwest`, `west`, `frontier` |

## Quality bar (must meet before merge)

Each state-template JSON must satisfy:

1. **State-name mentions ≥60** across all narrative blocks combined
2. **State-specific entities ≥10 distinct** (board, statute, payers, agencies, cities, pharmacy chains, Medicaid program, etc.)
3. **Primary-source citations ≥8** with verifiable URLs (.gov, peer-reviewed, payer-published)
4. **`lastReviewed` within last 30 days** at deploy time
5. **No global-invariant phrasing drift** — `$79`, physician credential, and universal compliance blocks pulled from `lib/global-invariants.js`
6. **State-specific legal layer present** if state has known requirements (FL, CA, TX, others)
7. **Build-time forbidden-phrase check passes** (`scripts/check-forbidden-phrases.js`)

## Versioning

When a state JSON changes materially (new payer added, statute citation updated, license number changed):
- Bump `lastReviewed` date
- Increment `schemaVersion` only on schema-breaking changes
- Add a `changelog` field if you want a structured change history (optional)
