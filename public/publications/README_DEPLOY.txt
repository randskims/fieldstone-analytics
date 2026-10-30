FIELDSTONE PUBLICATIONS SITE — deployment notes
================================================
WHAT THIS IS
  index.html            = the publications list (links to the per-paper pages below)
  <paper-slug>.html x68 = one page per deposit, each carrying Google Scholar
                          "citation_*" meta tags + abstract + links to the Zenodo
                          record and (where available) the direct PDF.
WHY
  Google Scholar does NOT reliably index Zenodo, but it DOES crawl academic pages
  hosted on your own domain that expose citation_* meta tags. Hosting these pages
  lets Scholar discover and attribute the works to your author profiles.
HOW TO DEPLOY
  1. Upload this whole folder to your site at the path:  /publications/
     (so the pages live at https://fieldstoneanalytics.com/publications/index.html etc.)
  2. Link to /publications/ from your homepage nav.
  3. REQUIREMENT: this works only on hosting where you control the raw HTML <head>
     (a static site / custom build / GitHub Pages / Netlify / S3). Most drag-and-drop
     builders (Squarespace, Wix) do NOT let you add <head> meta tags to custom pages —
     if you're on one of those, host this folder as a static subdirectory or on a
     separate static host and link to it.
  4. If your publications path is NOT /publications, edit the BASE value — search the
     pages for "fieldstoneanalytics.com/publications" and replace with your actual path
     (it appears in <link rel="canonical"> and the citation_abstract_html_url tag).
BEST-RESULTS OPTION (optional)
  citation_pdf_url currently points to the PDF on zenodo.org. Scholar indexes
  cross-host PDFs in many cases, but same-host PDFs are most reliable. For best
  results, download each paper's PDF from Zenodo, host them alongside these pages,
  and repoint citation_pdf_url to the local copy.
NOTE
  Scholar indexing is never instant or guaranteed; allow a few weeks after the pages
  are live and linked. The two dataset entries have no PDF (no citation_pdf_url).
