# MagicMond Global — static site

Hand-coded HTML/CSS/JS rebuild of magicmond.com (migrated off Framer).
No build step, no framework — deploy the folder to any static host.

## Structure

```
├── index.html               Homepage
├── 0-1-consultation/        Consultation page
├── Case-study-1-sm/         Case study: ShoeMonkies
├── Case-study-ri/           Case study: Reidius Infra
├── case-srudy-2-AV/         Case study: AstroVedansh
├── infraedge/               InfraEdge landing page
├── sports/                  Sports landing page
├── css/
│   ├── base.css             Design tokens, reset, buttons, nav, footer,
│   │                        reveal-animation utility classes
│   ├── home.css             Homepage sections
│   └── <page>.css           Per-page styles
├── js/
│   └── main.js              Scroll reveal (IntersectionObserver), mobile nav,
│                            USP vertical ticker, case-study carousel
└── assets/
    ├── images/              All raster/vector images (downloaded from the
    │                        original site, original filenames preserved)
    └── icons/               Inline SVG icons extracted from the original,
                             renamed aliases (logo-wand.svg, check-circle.svg …)
```

## Conventions

- Colors and fonts are defined as CSS custom properties in `css/base.css`
  (`--bg`, `--accent`, `--btn-bg`, `--font-head`, …).
- Fonts load from Google Fonts per page (`Rethink Sans`, `DM Sans`,
  `Instrument Serif` for the italic accents, plus page-specific families).
- Scroll-in animations: add `class="reveal"` (fade + rise), `reveal-scale`,
  or `words` (word-by-word rise; wrap each line in `<span class="w-src">`).
  Stagger with `style="--d:.2s"`.
- Breakpoints match the original Framer site: desktop ≥1200px,
  tablet 900–1199px, phone <900px.
- Sticky effects (service card stack, process visual) are pure CSS
  (`position: sticky`).

## Local preview

```sh
python3 -m http.server 8000
# open http://localhost:8000
```
