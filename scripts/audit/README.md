# Citation audit

Three checks that run in CI on every PR touching `public/health-guides/**/*.html`, plus locally before commit.

## The checks

### 1. `audit_links.py` — link audit (hard gate, deterministic)

For every URL in every guide's References section, verify HTTP 2xx. Cloudflare/Akamai bot-blocks (CDC, publisher domains) are classified as WARN, not FAIL. Real 404s and 5xxs fail the build.

Run locally:

```bash
python3 scripts/audit/audit_links.py
```

Fixes: swap publisher-direct URLs (Wiley, NEJM, JAMA, BMJ, Lancet, JAAD, OUP, Nature) to `https://pubmed.ncbi.nlm.nih.gov/<PMID>/` or `https://pmc.ncbi.nlm.nih.gov/articles/<PMCID>/`.

### 2. `check_number_attribution.py` — number attribution (hard gate, deterministic, baselined)

For every clinical number in body prose (percentages, doses, HR/RR/OR, CIs, p-values), verify that there is a `<sup><a href="#ref-N">[N]</a></sup>` within the same or an adjacent sentence.

Runs against a **baseline** (`baselines/number_attribution_baseline.json`) that snapshots the current state per guide. CI fails only when a PR **increases** the unattributed count for a guide. This lets us ship the gate today without a wholesale backfill of 87 guides.

Run locally:

```bash
# Full repo audit
python3 scripts/audit/check_number_attribution.py --no-network

# Only guides touched in the current branch vs main
git diff --name-only main | \
  python3 scripts/audit/check_number_attribution.py --no-network --changed-files /dev/stdin
```

Optional stage 2 (no `--no-network` flag): for each attributed number, fetch the cited PubMed abstract and check whether the number appears verbatim. Reports mismatches as `stage2_absent`.

**To update the baseline** (e.g., after cleaning up a guide):

```bash
python3 scripts/audit/check_number_attribution.py --no-network --update-baseline
git add scripts/audit/baselines/number_attribution_baseline.json
git commit -m "chore(audit): update number-attribution baseline"
```

### 3. `check_citation_plausibility.py` — abstract plausibility (advisory, LLM)

For every sentence-citation pair (sentence in body prose + a cited PMID), pull the PubMed abstract and ask GPT-4o-mini whether the abstract plausibly supports the claim. Verdicts: `supports`, `unclear`, `contradicts`, `off_topic`. Only `contradicts` and `off_topic` count as warnings.

Requires `OPENAI_API_KEY` as a GitHub secret. If missing, the check skips gracefully (advisory only). Cost: ~$0.002 per guide with gpt-4o-mini.

Run locally:

```bash
export OPENAI_API_KEY=sk-...
python3 scripts/audit/check_citation_plausibility.py smoking-cessation-guide
```

Also baselined so backfills don't retroactively fail PRs.

## Adding OpenAI to CI

1. Get an API key at https://platform.openai.com/api-keys.
2. Repo Settings → Secrets and variables → Actions → New repository secret.
3. Name: `OPENAI_API_KEY`. Value: your key.
4. The next PR that touches a health guide will run the plausibility check automatically.

## Baselines directory

- `baselines/number_attribution_baseline.json` — per-guide count of unattributed clinical numbers.
- `baselines/citation_plausibility_baseline.json` — per-guide count of `contradicts` + `off_topic` warnings.

Baselines are committed. When you legitimately fix a citation gap, re-run with `--update-baseline` and commit the change.

## Reports

- `reports/link_audit.json`
- `reports/number_attribution.json`
- `reports/citation_plausibility.json`

Gitignored (produced fresh on every run). CI uploads them as workflow artifacts.

## When to override

The gate is not perfect. Every clinical guide has judgment calls:

- Dose ladders where one citation at the section head governs a list of stepped doses.
- Reference numbers that ARE stat citations (e.g., "in 2004"), which the whitelist may or may not catch.
- Stat numbers in figures or table captions that self-cite in the caption text.

If you disagree with a flag, the fix is one of:
1. Add the `[N]` where it belongs (the honest fix).
2. Adjust the pattern in `CLINICAL_NUMBER_PATTERNS` or `CONTEXT_ALLOW` (the systemic fix; discuss in PR).
3. Update the baseline with a commit message explaining why (last resort).
