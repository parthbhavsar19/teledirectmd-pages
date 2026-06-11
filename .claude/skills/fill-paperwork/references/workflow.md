# Worked example: filling a clinical intake/credentialing PDF

A concrete run-through of Job B so the pattern is clear.

## 1. Inspect the blank form

```bash
P=.claude/skills/fill-paperwork/scripts/paperwork.py
python3 $P inspect paperwork/forms-in/credentialing.pdf --with-text
```

Sample output (fillable form):

```json
{
  "fillable": true,
  "field_count": 4,
  "fields": [
    {"name": "applicant_name", "type": "Text",     "value": ""},
    {"name": "npi_no",         "type": "Text",     "value": ""},
    {"name": "dob",            "type": "Text",     "value": ""},
    {"name": "attest",         "type": "CheckBox", "value": "Off"}
  ]
}
```

## 2. Map profile → field names

Read `paperwork/profile/profile.yaml`, then build the data file. Note the
mapping is by meaning, and `dob` is reformatted to the form's expected style.
The attestation checkbox is **left out** — the user must consent themselves.

`paperwork/credentialing.data.json`:

```json
{
  "applicant_name": "Parth Bhavsar",
  "npi_no": "1234567890",
  "dob": "03/14/1985"
}
```

## 3. Fill

```bash
python3 $P fill-pdf paperwork/forms-in/credentialing.pdf \
  paperwork/credentialing.data.json \
  --out paperwork/forms-out/credentialing.filled.pdf
```

The command reports `filled` and `data_keys_not_in_pdf` (typos in your map).

## 4. Verify

```bash
python3 $P inspect paperwork/forms-out/credentialing.filled.pdf
# values should now be populated
```

For flat/overlay forms, render and eyeball it:

```bash
python3 -c "import fitz;d=fitz.open('paperwork/forms-out/credentialing.filled.pdf');d[0].get_pixmap(dpi=120).save('/tmp/preview.png')"
```

Then `Read /tmp/preview.png`.

## 5. Report

> Filled 3 of 4 fields. Left blank for you: **attest** (attestation checkbox —
> you should check this yourself). Missing from your profile: none.
> Output: `paperwork/forms-out/credentialing.filled.pdf`

Then offer the file with `SendUserFile`.

---

## Flat / scanned form variant

`inspect --with-text` returns `fillable: false` plus `text_blocks` (each with a
`rect: [x0,y0,x1,y1]`) and `page_sizes`. Pick an `x` just right of a label and a
`y` near the label's baseline. Overlay data file:

```json
[
  {"page": 0, "x": 130, "y": 96,  "text": "Parth Bhavsar"},
  {"page": 0, "x": 130, "y": 124, "text": "1234567890"},
  {"page": 0, "x": 92,  "y": 160, "check": true}
]
```

```bash
python3 $P overlay-pdf paperwork/forms-in/flat.pdf paperwork/flat.data.json \
  --out paperwork/forms-out/flat.filled.pdf
```

Render → `Read` the PNG → nudge x/y a few points if anything is off, and re-run.
Overlay is non-destructive to the source, so iterate freely.

## DOCX template variant

If the template uses `{{tokens}}`:

```bash
python3 $P fill-docx paperwork/forms-in/template.docx paperwork/t.data.json \
  --out paperwork/forms-out/out.docx
python3 $P to-pdf paperwork/forms-out/out.docx --out-dir paperwork/forms-out
```

If `to-pdf` fails (no working LibreOffice), deliver `out.docx` as-is.
