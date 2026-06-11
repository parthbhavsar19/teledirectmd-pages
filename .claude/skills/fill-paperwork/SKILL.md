---
name: fill-paperwork
description: >-
  Fill out clerical / administrative paperwork from the user's stored profile.
  Use when the user wants to complete, prefill, or auto-populate forms —
  fillable PDFs, flat/scanned PDFs, or DOCX/Word templates — for medical,
  clinical, business, HR, finance, government, or compliance admin. Also use to
  build or update the reusable info profile by extracting data from documents
  the user provides ("save my info", "remember my NPI/address", "set up my
  paperwork profile").
---

# Fill Paperwork

Automate boring clerical admin: read a blank form, fill it from the user's
saved profile, and hand back a completed document. Build the profile once by
extracting from documents the user already has, then reuse it forever.

## Privacy rules (read first — non-negotiable)

This repository deploys to the public web (Vercel). Personal data must **never**
be committed or pushed.

- All real personal data and source/target documents live under `paperwork/`,
  which is **gitignored**. Verify `paperwork/` is in `.gitignore` before
  writing any PII; if it is not, add it first.
- Never paste SSNs, DOB, license numbers, insurance IDs, or patient data into
  commit messages, code comments, the chat transcript more than necessary, or
  any committed file.
- Do **not** route documents through external/cloud MCP servers (Adobe, Google
  Drive, etc.) by default — keep filling **local**. Only use a cloud service if
  the user explicitly asks and the document is not sensitive.
- The container is ephemeral: `paperwork/` is wiped when the session ends. See
  "Persistence" below for how to carry the profile across sessions.

## Setup (run once per session)

```bash
bash .claude/skills/fill-paperwork/scripts/bootstrap.sh   # installs deps
```

Then ensure the working tree exists:

```bash
mkdir -p paperwork/profile paperwork/source-docs paperwork/forms-in paperwork/forms-out
grep -q '^paperwork/' .gitignore || echo 'paperwork/' >> .gitignore
```

If no profile exists yet, copy the template:

```bash
cp .claude/skills/fill-paperwork/templates/profile.template.yaml paperwork/profile/profile.yaml
```

## The two jobs

### Job A — Build / update the profile

When the user gives you documents ("here's my license / CV / last filled form")
or info to remember:

1. Save the source files into `paperwork/source-docs/`.
2. Extract identifying fields. For PDFs use the inspect command or
   `Read`; for images use `Read`; for prior filled forms, inspect their fields.
3. Merge the values into `paperwork/profile/profile.yaml`. Keep keys stable and
   namespaced (see `references/profile.schema.md`). Don't overwrite good data
   with blanks.
4. Show the user a concise summary of what you stored (field names, not full
   secret values) and ask them to confirm or correct anything uncertain.

### Job B — Fill a form

1. **Inspect** the blank form to learn its structure:
   ```bash
   python3 .claude/skills/fill-paperwork/scripts/paperwork.py inspect FORM.pdf --with-text
   ```
   - `fillable: true` → it has form fields; you'll use `fill-pdf`.
   - `fillable: false` → flat/scanned; you'll use `overlay-pdf` with the
     reported `text_blocks` + `page_sizes` to choose coordinates.
   - A `.docx` template → look for `{{placeholders}}`; you'll use `fill-docx`.
2. **Map** profile values to the form's fields. Build a JSON data file in
   `paperwork/` (gitignored). Map by meaning, not blindly — `field_name`s are
   often cryptic. Use the inspect output's labels/nearby text to disambiguate.
3. **Fill** using the matching command (see Commands).
4. **Verify**: re-`inspect` the output PDF (values should be populated), or read
   back the DOCX. For overlays, render a page to PNG and look at it:
   ```bash
   python3 -c "import fitz;d=fitz.open('paperwork/forms-out/out.pdf');d[0].get_pixmap(dpi=120).save('/tmp/preview.png')"
   ```
   Then `Read` `/tmp/preview.png` to confirm text landed in the right boxes.
5. **Report gaps**: list any required fields you could not fill (missing from
   profile) and ask the user for just those values. Never invent data —
   especially dates, signatures, IDs, or attestations.
6. Put finished files in `paperwork/forms-out/` and offer them with
   `SendUserFile`.

### Signatures & attestations

Never auto-sign, auto-date a signature line, or check an attestation/consent box
on the user's behalf unless they explicitly tell you to for that specific form.
Leave those blank and flag them.

## Commands

```bash
P=.claude/skills/fill-paperwork/scripts/paperwork.py

# Inspect a form (fields, or text+coords if flat)
python3 $P inspect FORM.pdf --with-text

# Fill a fillable (AcroForm) PDF.  data.json = {"field_name": "value", ...}
# Checkboxes: truthy values ("yes","true","1","x") tick the box.
python3 $P fill-pdf FORM.pdf data.json --out paperwork/forms-out/FORM.filled.pdf

# Overlay text on a flat/scanned PDF.
# data.json = [{"page":0,"x":110,"y":72,"text":"value","size":11},
#              {"page":0,"x":108,"y":140,"check":true}]
# Coordinates are PDF points; origin top-left, y increases downward.
python3 $P overlay-pdf FORM.pdf data.json --out paperwork/forms-out/FORM.filled.pdf

# Fill a DOCX template ({{placeholder}} tokens, incl. tables/headers/footers).
python3 $P fill-docx TEMPLATE.docx data.json --out paperwork/forms-out/OUT.docx

# Convert filled DOCX/ODT to PDF (LibreOffice; may be unavailable in some
# containers — if it fails, deliver the .docx instead).
python3 $P to-pdf paperwork/forms-out/OUT.docx --out-dir paperwork/forms-out
```

## Web forms / portals

The toolkit fills files, not browser portals. For an online form: extract the
field labels (ask the user to paste them or a screenshot), map them to profile
values, and return a clean **field → value worksheet** the user can copy in. If
a browser-automation tool (e.g. Playwright) is available and the user authorizes
it, you may drive the portal directly — but pause before any final Submit.

## Persistence across sessions

Because `paperwork/` is gitignored and the container is ephemeral, the profile
does not survive a new session by default. Offer the user one of:
- **Re-extract**: they re-share their docs next time (simplest).
- **Private store**: with their go-ahead, save `profile.yaml` to their private
  Google Drive / Notion via MCP, and reload it next session.
- **Encrypted commit**: store an encrypted blob in the repo (only if requested).

Never silently push the profile anywhere.

## References

- `references/profile.schema.md` — profile structure and field naming.
- `references/workflow.md` — worked end-to-end example.
