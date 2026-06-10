# TODO: Rewrite the 3 KEEP payer hubs with unique payer-specific content

**Created:** 2026-06-09 SEO recovery push  
**Priority:** High — after Delaware pilot validates the unique-content approach  
**Owner:** Parth

## Background

In the 2026-06-09 insurance URL retirement, we kept 3 payer hubs alive as canonical authority pages:

| URL | 30-day Clicks | 30-day Impr | Current State |
|---|---|---|---|
| `/insurance/aetna/` | 3 | 881 | thin/templated, surviving but low |
| `/insurance/blue-cross-blue-shield/` | 0 | 349 | thin/templated |
| `/insurance/united-healthcare/` | 3 | 621 | thin/templated |

The other 367 `/insurance/*` URLs were either 410'd (238) or 301-redirected (129, of which 66 were already done; 63 still deferred until destination condition pages get inline payer content).

## What to do

Each of these 3 hubs needs **genuinely unique payer-specific content** so they survive long-term as canonical authority pages and don't get filtered as duplicates. Minimum content per hub:

1. **Network rules** — what plan types we accept (PPO / HMO / EPO / POS), what we don't (Medicaid Advantage, Part D)
2. **State coverage list** — which 20 states we actually accept this payer in (link out to state hub for each)
3. **Copay & billing logic** — what patient pays at point of visit, what gets billed, CPT codes used
4. **Prior-auth & referrals** — when needed, how we handle them
5. **Specific plan names** — e.g. for Aetna: list "Aetna Open Access", "Aetna Choice POS II", "Aetna HMO", etc.
6. **FAQ section** — 6-8 questions specific to that payer
7. **JSON-LD MedicalBusiness** with `acceptedInsurance` array

## Anti-pattern

DO NOT:
- Use the same boilerplate across all 3 hubs with only the payer name swapped (= duplication risk we just retired 238 URLs for)
- Fabricate plan names — verify each against the payer's published 2026 commercial product list
- Promise coverage we don't actually have

## When

After Delaware pilot launches and we have a working state-uniqueness template — that proves the unique-content approach. Then apply same rigor to these 3 hubs.

## Related

- `/home/user/workspace/insurance_redirect_execution_plan.csv` — full keep/kill audit
- `/home/user/workspace/state_uniqueness_kit.json` — per-state payer data already structured
- `/home/user/workspace/delaware_findings.md` — root-cause analysis driving this approach
