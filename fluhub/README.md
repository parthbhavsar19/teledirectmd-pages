# FluHub

A patient- and newsroom-facing U.S. influenza resource, published by TeleDirectMD. It is a static site generated from CDC data every Friday, with clinical content written to CDC, FDA and IDSA guidance and signed off by Parth Bhavsar, MD.

```
node scripts/fetch-data.mjs     # pull every source into data/ (about 1 minute, no dependencies)
node scripts/build.mjs          # render dist/ (74 pages plus data shards)
```

Node 22+, no npm packages. `dist/` is plain static files and can be served from any static host (Cloudflare Pages, GitHub Pages, S3). `SITE.baseUrl` in `content/site.mjs` sets canonical URLs and the sitemap.

## Modules

| Page | What it does | Data |
|---|---|---|
| `index.html` | Answers "is flu going around?" in one line, computed from this week's numbers; national flu curve; state tile map | ILINet, NREVSS, NHSN, ARI levels |
| `activity.html` | This week: four headline measures, state tile map, national curves overlaid on every season since 2010–11 with a typical range band, sortable 56-row state table with 16-week sparklines | same |
| `seasons.html` | Historical comparison: season scorecard (peak, hospitalization rate, burden, pediatric deaths, VE, coverage), every-season overlay, FluSurv-NET cumulative curves, burden, pediatric deaths, VE, and coverage charts | ILINet 2010–, FluSurv-NET 2010–, FluVaxView 2009–, curated CDC burden/VE/deaths |
| `states.html`, `state/*.html` (56) | Per-state flu curve vs. the state's own history, lab percent positive, NHSN admissions since Aug 2020 vs. U.S., vaccination coverage by season, season peaks, activity-level archive | same, by jurisdiction |
| `symptoms.html` | Five-question check. Emergency signs first (CDC child or adult list by age); under-5, 65+, pregnancy and CDC conditions route to same-day care; worsening illness routes to in-person care; otherwise-healthy early illness gets the antiviral option; stores nothing | rules in `src/assets/checker.js` |
| `treatment.html` | Who gets antivirals, timing, the four drugs with current FDA ages, pregnancy, children, renal, immunocompromise, prophylaxis, resistance, home care; collapsible clinician dosing tables | CDC March 2026, FDA labels, IDSA 2018 |
| `high-risk.html` | CDC's full current high-risk list as a checklist | CDC |
| `warning-signs.html` | CDC emergency warning signs, children and adults | CDC |
| `testing.html` | When to test, molecular vs. antigen accuracy, home tests, flu vs. COVID-19 vs. RSV vs. cold | CDC, IDSA, FDA |
| `vaccines.html` | 2026–27 strains, which vaccine for whom (incl. 65+, pregnancy, egg allergy, transplant, mRNA), FluMist Home, VE by season, safety, coadministration, cost, dated federal policy timeline | CDC ICCS Sept 2026, FDA, AAP/AAFP/ACOG 2026 |
| `find-a-flu-shot.html` | Live booking options first, then a distance-sorted directory (ZIP, browser location, or state; product filters) | Vaccines.gov 2024 snapshot, Census ZCTA centroids |
| `bird-flu.html` | H5 human case count, deaths, H5N5, precautions, global, swine variants | CDC, MMWR |
| `media.html` | Citation-ready facts regenerated weekly with dates and sources, three CSV downloads, reporter question map | all |
| `faq.html` | 14 questions, accordion, FAQPage JSON-LD | CDC |
| `methods.html` | Sources, definitions, refresh schedule, clinical validation workflow, disclosure | |

Every page carries `MedicalWebPage`, `Dataset` or `FAQPage` JSON-LD, a canonical URL, and is prerendered HTML (charts are inline SVG), so search engines and AI answer engines read the numbers without running JavaScript. JavaScript only adds hover tooltips, sorting, the symptom check, and the locator.

## Data sources

| Source | Endpoint | Notes |
|---|---|---|
| ARI activity level by state | data.cdc.gov `f3zz-zga5` | CDC keeps only the latest week. `data/activity-archive.json` is FluHub's own weekly archive; it grows each Friday and must be committed. |
| ILINet %ILI, national and state | Delphi Epidata `fluview` | 2010–11 onward. National is weighted, states unweighted. Florida reports through Delphi. |
| Clinical lab percent positive | Delphi Epidata `fluview_clinical` | 2015–16 onward. |
| NHSN flu admissions | data.cdc.gov `ua7e-t2fy` | Aug 2020 onward; mandatory since Nov 2024. |
| FluSurv-NET hospitalization rate | Delphi Epidata `flusurv` | Weekly rates; cumulative is summed (2024–25 sums to 127.2 vs. CDC's published 128.3 through Apr 30, the difference is the week-17 cutoff). |
| Vaccination coverage | data.cdc.gov `vh55-3he6` | End-of-season estimate per state and season. |
| Provider directory | data.cdc.gov `bugr-bbfr` | Frozen since Aug 2024. Shown as a directory with that date stated, never as stock. |
| ZIP centroids | Census 2024 Gazetteer ZCTA | |
| Burden, pediatric deaths, VE, baseline | `content/epi.json` (curated) | Refresh by hand when CDC posts end-of-season estimates (expected about November 2026 for 2025–26). |

## Clinical validation workflow

1. Every clinical sentence cites a numbered source in `content/refs.mjs`, which records the version date checked. A page fails to build if it cites a key not in its source set.
2. The physician editor signs off every clinical page and symptom-check outcome before publish and after any guideline change.
3. Guideline watch: CDC antiviral summary, CDC vaccine clinical considerations, FluView, IDSA, AAP, ACOG, AAFP at season start and monthly. A change triggers review of every page citing that source.
4. Symptom-check rules are tested in a real browser (11 scenarios: emergency signs by age, infant fever, rebound, under-5, 65+, pregnancy, worsening, early and late healthy illness, no symptoms) before each release.
5. Where sources disagree (FDA label vs. CDC prophylaxis duration; federal vs. society vaccine guidance) the page says so and names which one FluHub follows.

## Before going live

- Physician review of every clinical page; the byline currently names the clinical editor and the date sources were checked (October 5, 2026).
- Re-verify against the live CDC pages three items that came through a summarizing fetch: the LAIV contraindication wording, the 65+ interim VE range (not shown on the site for that reason), and the H5 exposure breakdown (not shown).
- Pick the domain and set `SITE.baseUrl`.
- TeleDirectMD CTA: `SITE.cta.enabled` in `content/site.mjs`. It appears only on adult results that suit a same-day video visit, the treatment and high-risk pages, and the home page; never on emergency results, children, or worsening illness. It uses "40+ states". `social/content-rules.md` approves "44 states plus Washington D.C."; pick one.
- `.github/workflows/fluhub-refresh.yml` runs every Friday and commits `fluhub/data/*.json`. Add a deploy step for the chosen host.
