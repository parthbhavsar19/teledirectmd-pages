# Legal document sources

Markdown sources for the patient-facing PDFs in `public/legal/`. Each PDF is built with:

```
pandoc docs/legal-src/<slug>.md -o /tmp/<slug>.docx
soffice --headless --convert-to pdf --outdir public/legal /tmp/<slug>.docx
```

`texas-medical-board-complaint-notice.pdf` has no source here; it reproduces the Board's notice verbatim.

Practice entities named in these documents:

- California: TeleDirectMD, a California professional medical corporation (Medical Board of California Fictitious Name Permit No. 562161)
- New York: Parth Bhavsar Medicine PLLC
- Texas: TeleDirectMD, PLLC
- All other states served and Washington, D.C.: Mahavir Health Services, LLC (Georgia), doing business as TeleDirectMD
