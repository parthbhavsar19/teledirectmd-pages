# TeleDirectMD Pages — Setup & Deployment Guide

## What This System Does

This system generates **condition-specific, state-specific landing pages** for TeleDirectMD at scale. Instead of manually creating each page in Squarespace, you add one JSON data file per condition and the system generates a page for every state automatically.

- **1 condition JSON file** → **39 state-specific pages** (one build command)
- **50 condition files** → **1,950 pages** (same one build command)
- Your existing Squarespace site stays completely untouched
- All pages live at `teledirectmd.com/{state}/{condition}` — same domain, no subdomain

### URL Structure

```
https://teledirectmd.com/{state-slug}/{condition-slug}
```

Example: `https://teledirectmd.com/pa/asthma-refills-online`

---

## How It All Fits Together

```
Visitor → teledirectmd.com/pa/asthma-refills-online
                    ↓
          Cloudflare Worker (free)
          Inspects the URL path
                    ↓
    ┌───────────────┴───────────────┐
    ↓                               ↓
 State/condition page?          Everything else?
    ↓                               ↓
 Vercel (Next.js static)       Squarespace (as-is)
 teledirectmd-pages.vercel.app  teledirectmd.squarespace.com
```

The Cloudflare Worker sits in front of your domain and routes traffic:
- **`/{state}/{condition}`** URLs → Vercel (your new generated pages)
- **Everything else** (homepage, about, FAQ, booking, etc.) → Squarespace (unchanged)

---

## Prerequisites

- A **Vercel** account — sign up free at [vercel.com](https://vercel.com)
- A **Cloudflare** account — sign up free at [cloudflare.com](https://cloudflare.com)
- **Node.js** ≥ 18 installed on your computer ([download here](https://nodejs.org/))
- **npm** (comes with Node.js)

---

## Step-by-Step Deployment

### Step 1: Deploy to Vercel

This is the easiest step. You have two options:

**Option A — GitHub + Vercel (Recommended)**

1. Create a GitHub account if you don't have one at [github.com](https://github.com)
2. Create a new repository and push this entire `teledirectmd-pages` folder to it
3. Go to [vercel.com/new](https://vercel.com/new) and click "Import Git Repository"
4. Select your GitHub repo
5. Vercel auto-detects Next.js — just click "Deploy"
6. Wait for the build to finish (takes about 1-2 minutes)
7. Vercel gives you a URL like `teledirectmd-pages.vercel.app` — save this URL

Every time you push changes to the GitHub repo, Vercel rebuilds automatically.

**Option B — Vercel CLI (if you prefer command line)**

```bash
npm install -g vercel
cd teledirectmd-pages
vercel --prod
```

Follow the prompts. It will give you a deployment URL.

### Step 2: Move DNS to Cloudflare

**Important**: Your domain's DNS must be managed by Cloudflare for the Worker to intercept requests. This is the most critical step.

1. Log in to [cloudflare.com](https://dash.cloudflare.com)
2. Click "Add a site" and enter `teledirectmd.com`
3. Select the **Free** plan
4. Cloudflare will scan your existing DNS records and import them
5. **Verify all records are correct** — especially the ones pointing to Squarespace
6. Cloudflare gives you two nameservers (e.g., `ada.ns.cloudflare.com`, `bob.ns.cloudflare.com`)
7. Go to your domain registrar (where you bought teledirectmd.com) and change the nameservers to the Cloudflare ones
8. Wait for DNS propagation (usually 1-24 hours)
9. Once active, make sure the main DNS record for `teledirectmd.com` has the **orange cloud icon** (proxied) enabled

**Note**: If your DNS is already at Cloudflare, skip to Step 3.

### Step 3: Deploy the Cloudflare Worker

1. Install Wrangler (Cloudflare's CLI):
   ```bash
   npm install -g wrangler
   ```

2. Log in to Cloudflare:
   ```bash
   wrangler login
   ```
   This opens a browser window — click "Allow".

3. Deploy the Worker:
   ```bash
   cd cloudflare-worker
   wrangler deploy
   ```

4. You should see output confirming the Worker is deployed.

### Step 4: Add the Worker Route

1. Go to the [Cloudflare dashboard](https://dash.cloudflare.com)
2. Select `teledirectmd.com`
3. Go to **Workers & Pages** → **Routes**
4. Click **Add Route**
5. Set:
   - **Route pattern**: `teledirectmd.com/*`
   - **Worker**: `teledirectmd-router`
6. Click **Save**

### Step 5: Update the Vercel URL (if needed)

If your Vercel deployment URL is different from `teledirectmd-pages.vercel.app`, update it:

1. Edit `cloudflare-worker/wrangler.toml`
2. Change `VERCEL_ORIGIN` to your actual Vercel URL
3. Re-deploy the Worker: `wrangler deploy`

### Step 6: Verify Everything Works

1. Visit `https://teledirectmd.com` — should show your normal Squarespace site
2. Visit `https://teledirectmd.com/pa/asthma-refills-online` — should show the generated page
3. Visit `https://teledirectmd.com/ca/asthma-refills-online` — should show California version
4. Visit `https://teledirectmd.com/about` — should show your normal Squarespace about page

If the condition pages show but the main site doesn't, check the `SQUARESPACE_ORIGIN` value in `wrangler.toml`.

---

## Project Structure

```
teledirectmd-pages/
├── app/
│   ├── layout.js                          # Root layout (html + body shell)
│   └── [stateSlug]/
│       └── [conditionSlug]/
│           └── page.js                    # Main page component (20 sections)
├── data/
│   ├── states.json                        # 39 states with cities, pharmacies, regulations
│   └── conditions/
│       ├── asthma-refills-online.json     # Complete asthma condition data (~34KB)
│       └── _template.json                 # Empty skeleton for new conditions
├── lib/
│   ├── get-data.js                        # Data loading + placeholder replacement
│   ├── json-ld.js                         # Schema.org JSON-LD generator
│   └── tdmd-styles.js                     # Verbatim CSS from master template
├── cloudflare-worker/
│   ├── worker.js                          # Reverse proxy routing script
│   └── wrangler.toml                      # Worker configuration
├── next.config.js                         # Static export config
├── vercel.json                            # Vercel settings + headers
├── package.json
└── SETUP.md                               # This file
```

---

## Adding a New Condition (Your Main Workflow)

This is what you'll do repeatedly to scale from 1 condition to 50:

1. **Copy the template**:
   ```bash
   cp data/conditions/_template.json data/conditions/{condition-slug}.json
   ```
   Example: `cp data/conditions/_template.json data/conditions/uti-treatment-online.json`

2. **Fill in the condition data**. Use these placeholders — they're automatically replaced per state at build time:
   - `{state}` → full state name (e.g., "Pennsylvania")
   - `{stateAbbr}` → abbreviation (e.g., "PA")
   - `{stateSlug}` → URL slug (e.g., "pa")
   - `{cities}` → top 10 cities comma-separated
   - `{citiesExtended}` → all cities comma-separated
   - `{city1}`, `{city2}`, `{city3}` → individual top cities
   - `{pharmacies}` → pharmacy chain names
   - `{telehealthRegulation}` → state telehealth law summary

3. **Build**:
   ```bash
   npm run build
   ```
   This generates pages for all 39 states × all conditions.

4. **Push to GitHub** (triggers automatic Vercel deployment):
   ```bash
   git add .
   git commit -m "Add UTI condition"
   git push
   ```

That's it. 39 new pages are live within 2 minutes.

### Adding a New State

Add an entry to `data/states.json`:

```json
{
  "name": "StateName",
  "abbr": "XX",
  "slug": "xx",
  "cities": ["City1", "City2", "City3"],
  "pharmacies": ["CVS Pharmacy", "Walgreens", "Walmart Pharmacy"],
  "telehealthRegulation": "Description of the state's telehealth regulations."
}
```

Then add the slug to `cloudflare-worker/worker.js` in the `STATE_SLUGS` set, and re-deploy the Worker.

---

## Data File Reference

### `states.json`

Array of 39 state objects. Each state has:
- `name` — Full state name
- `abbr` — Two-letter abbreviation (uppercase)
- `slug` — URL slug (lowercase abbreviation)
- `cities` — Array of top cities (used for local SEO)
- `pharmacies` — Array of pharmacy chain names
- `telehealthRegulation` — State-specific telehealth regulation summary

### Condition JSON (`data/conditions/*.json`)

Each condition file contains all 20 page sections:

| Section | Key | Description |
|---------|-----|-------------|
| Hero | `hero` | H1, subtitle, intro paragraph, TOC links |
| Eligibility | `eligibility` | Eligible/not-eligible checklists |
| How It Works | `howItWorks` | 3-step process |
| Regulations | `telehealthRegulations` | State telehealth law display |
| Comparison | `comparisonTable` | TeleDirectMD vs ER vs urgent care |
| Decision Guide | `decisionGuide` | When to use TeleDirectMD |
| Pricing | `pricing` | Cost information ($49) |
| What Is | `whatIsCondition` | Educational medical content |
| Causes | `causesAndRiskFactors` | Medical causes and risk factors |
| Symptoms | `symptomsAndRedFlags` | Symptoms + emergency red flags |
| Differential | `differentialDiagnosis` | Related conditions |
| Telehealth Eligibility | `telehealthEligibility` | Appropriate vs inappropriate for video |
| Treatment | `treatmentOptions` | Treatment approaches |
| Medications | `medications` | Common prescriptions |
| Home Care | `homeCare` | Self-care and prevention tips |
| When Not To Use | `whenNotToUse` | Emergency guidance |
| FAQ | `faq` | 30 frequently asked questions |
| References | `references` | Medical citations with URLs |
| Disclaimer | `disclaimer` | Legal/medical disclaimer |
| Related Conditions | `relatedConditions` | Cross-links to related pages |

Plus `jsonLd` for Schema.org structured data inputs (ICD-10 codes, symptoms, drugs, guidelines, etc.)

---

## Build Verification

After any changes:

```bash
npm run build
```

Check for:
- Zero build errors
- Expected page count: states × conditions (e.g., 39 × 1 = 39 pages + 1 not-found = 40)
- Spot-check HTML files in `out/` directory

---

## Costs

| Service | Cost |
|---------|------|
| Vercel (Pro) | ~$20/month |
| Cloudflare (Free plan) | $0 |
| Cloudflare Workers (free tier) | $0 (100K requests/day) |
| **Total** | **~$20/month** |

The Vercel free tier works for testing but has limits. The Pro plan ($20/month) gives you unlimited builds and higher bandwidth.

---

## Getting Help

If you need someone to handle the initial deployment (Steps 2-4), any web developer familiar with Cloudflare and Vercel can set this up in under an hour. The ongoing workflow (adding conditions) requires no technical expertise beyond editing JSON files and running `npm run build`.
