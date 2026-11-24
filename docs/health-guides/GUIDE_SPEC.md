# TeleDirectMD Health Guides: build and refresh spec

Owner: Parth Bhavsar, MD. Applies to every new or refreshed guide under `public/health-guides/`, whether a person or an automated Claude routine writes it. Nothing in this spec permits pushing to `main`, merging, or changing Vercel settings: every guide change ships as a draft pull request for Parth to review and merge.

## 1. What a guide is for

Guides are physician-written education that earns a reader's trust. They are not advertising. A reader who trusts the guide may later book, but the guide never pushes them to.

- **Topic scope:** write only on conditions TeleDirectMD currently treats, or a closely related topic that routes care correctly. The current list is `data/conditions/*.json` (excluding `_template.json`), cross-checked against the live What We Treat page and the TeleDirectMD connector's `list_services`. Check the list fresh on every run, because it changes. If the three disagree, flag the mismatch in the PR and don't guess.
- **Telemedicine safety:** each guide states what can be handled by video, what needs in-person care, and the red flags that need emergency care.
- **Audience:** adults 18 and older, unless a guide is explicitly part of the pediatric pilot.
- **Promotion:** at most one soft, factual line that a video visit is available. No booking pushes in the body, no outcome guarantees, no unqualified cost comparisons, and no "surprise" framing about the No Surprises Act.
- **House facts:** if price or coverage appears, use $79 flat fee and "40+ states", never an exact count. Clinician: Parth Bhavsar, MD, physician-only (MD or DO). Contact: contact@teledirectmd.com. If any existing page shows a different price or state count, flag it in the PR rather than copying it.
- **Style:** no em dashes, no placeholders (XXX, TBD, [Name]), no asterisks in visible text. Plain words. FAQ answers are collapsed by default.

## 2. Templates

- **Content and evidence depth: `public/health-guides/erectile-dysfunction-guide/`.** Follow its pattern: decision framework (home, doctor or urgent care), treatment options compared in a table, what doesn't work, red flags, FAQ, and numbered references cited inline as `[n]`. Its citations are being repaired in a separate PR. Copy its structure, not its claims.
  - Do not copy: dated headings such as "What's Changed in 2024 to 2026"; prices without a source and an as-of date; any sentence whose citation hasn't passed the gate below.
- **Page mechanics: `public/health-guides/sinus-infection-guide/`.** Follow it for:
  - question-style H2 headings;
  - head JSON-LD `@graph` with WebSite, BreadcrumbList, MedicalWebPage (with `lastReviewed` and `reviewedBy`), Article (`datePublished`, `dateModified`), MedicalCondition, Physician and FAQPage;
  - canonical URL with a trailing slash;
  - `/health-guides/dark-mode.css` and `/health-guides/dark-mode.js`;
  - a WebP hero plus a 480x270 WebP thumb.
- **Dates:** `datePublished` never changes. Update `dateModified`, `lastReviewed` and the visible "Last reviewed" line together, only when the content changes.

## 3. Publish checklist (every new guide touches all of these)

1. `public/health-guides/<slug>/index.html`: the guide.
2. `public/health-guides/<slug>/images/`: `hero-<slug>.webp` (plus `.jpg` or `.png` fallback) and `thumb-<slug>.webp`. Branded graphics need the TeleDirectMD logo file from Parth, in the version that matches the background. Never recreate the logo.
3. `data/health-guides-citable.json`: one entry `{question, answerHtml, reviewed}`. The answer is a sourced summary with links, and must pass the same gate. The prebuild script `scripts/inject-health-guides-citable.js` injects it.
4. `public/health-guides/index.html`: a card in `.g-grid` with `data-slug`, `data-reviewed`, the thumb, the title, a one-line description and the read time.
5. `public/llms.txt`: one line, `- [Title](https://teledirectmd.com/health-guides/<slug>/): summary`.
6. `public/health-guides/complete-telehealth-conditions-guide/index.html`: a `tdmd-condition-card` link in the right section.
7. Sitemap: automatic. `app/sitemap.js` enumerates the folders. Check the build includes the URL.
8. Connector catalog (separate repo `parthbhavsar19/claude`): rerun `connector/scripts/build-guides.py` and open a separate draft PR there, because `connector/src/data/guides.ts` is not regenerated automatically.

Refreshes touch 1, 3 and 4 (the `data-reviewed` date), plus 5 if the title changes.

## 4. Citation gate (hard rule)

A guide PR cannot be marked ready for review until every reference passes this gate. If a reference fails, the claim is cut or rewritten to say what the source does say. Nothing is ever reconstructed from memory: no title, author, year, DOI, PMID, quote, dose or number.

1. **Retrieve in the same run.** Every source is fetched by a tool during the run that cites it: PubMed connector (metadata, ID conversion, PMC full text), Scite (`verify_papers`, full-text excerpts), ClinicalTrials.gov, or the official page itself for guidelines, labels and agency pages.
2. **Resolve and match.** Journal articles need a PMID or DOI that resolves. Title, first author, journal, year, volume and pages are copied from the retrieved record. The article type comes from PubMed: an editorial is called an editorial, and an observational study is never called a trial. Every hyperlink opens the exact record cited.
3. **Quote the support.** Every factual claim keeps a verbatim quote of up to 40 words from the abstract, full text or official page, and records which one. Any number in the guide must appear in the quote, or be a plain rounding of it.
4. **Cite the primary source.** If the cited paper is quoting another paper's number, cite the original instead.
5. **Check editorial notices.** Run Scite `verify_papers` on every DOI. A retraction or expression of concern means the source is cut. Corrections, and published comments challenging a paper, are noted in the log and the PR.
6. **Date guidelines and moving numbers.** For guidelines, record the body's own page, version or year, and the date read. Prices and counts carry an "as of" date in the text and are re-checked at every refresh.
7. **Abstract-only sources.** If only the abstract was readable, claims are limited to what the abstract says. Anything else is cut or listed as unverified in the PR.
8. **Fail closed.** If a reference can't be verified, it is left out and listed in the PR, never filled in.

### Citation log

Each PR adds `docs/health-guides/citation-logs/<slug>.json`, following `docs/health-guides/citation-log.schema.json`. Check it before opening the PR:

```
node scripts/audit/check-citation-log.mjs public/health-guides/<slug>/index.html docs/health-guides/citation-logs/<slug>.json
```

The checker fails if any entry is `not_supported` or `link_mismatch`, if a `supported` claim has no quote, if a journal reference has neither PMID nor DOI, if a reference shows a retraction or expression of concern, or if a reference number in the guide has no log entry. Note: `scripts/audit/verify_citations.py` needs direct network access to NCBI, which cloud sessions don't have. There, the connector checks above do the same job, and the log records which tool was used.

## 5. Choosing what to write or refresh

In this order:

1. **Guideline change:** a current guide's topic had a guideline or label change from IDSA, AAD, AUA, ACOG, USPSTF, CDC, FDA (labels and safety communications), or the specialty body named in `scripts/add-guideline-source.mjs` for that condition. Cite the body's own page and date.
2. **Stale or weak guide:** `lastReviewed` older than 12 months, or a guide whose citations fail the gate. Fix these before adding new guides.
3. **New guide:** a treated condition with no guide, or a high-demand question the dashboard's Monday plan flagged (`/mnt/project-files/seo-dashboard/weekly/*-action-plan.md` in the dashboard channel). Check open PRs first so work isn't duplicated.

One guide per run. Read the current live page before rewriting it.

## 6. Pull request

- Branch: `claude/guide-<slug>-<YYYY-MM-DD>`. Open as a draft.
- Description:
  - Before and After paragraphs;
  - what changed and why (the trigger from section 5);
  - the reference count;
  - the gate result (counts by verdict);
  - unverified items;
  - any site text that conflicts with $79 or "40+ states";
  - the Vercel preview URL;
  - the live URL.
- Never merge, never push to `main`, never change Vercel settings. Parth merges.
