/**
 * prerender.mjs
 *
 * Runs AFTER the client + server Vite builds. For each route:
 *   1. Calls render(url) from the SSR bundle → {html, head}
 *   2. Reads dist/index.html (the Vite-built client template)
 *   3. Strips the generic fallback title / description / OG tags (they are
 *      replaced by the per-route tags injected at <!--app-head-->)
 *   4. Injects the rendered HTML and head tags into the placeholders
 *   5. Writes the result to dist/<route>/index.html
 *
 * Usage (called automatically by `npm run build`):
 *   node prerender.mjs
 *
 * Requires Node.js 18+ (native fetch / Request API).
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbs = (p) => path.resolve(__dirname, p);

/* ─── Read / recover the clean Vite-generated template ────────────────── */
//
// When the full `npm run build` chain runs, dist/index.html is always the
// fresh Vite output (contains <!--app-head--> and <!--app-html-->).
//
// When `npm run prerender` is called standalone after a previous run has
// already written the prerendered homepage to dist/index.html, the
// placeholders are gone. We keep a backup at dist/_template.html so the
// script always has a clean copy to work from.
//
const templatePath = toAbs('dist/index.html');
const templateBackup = toAbs('dist/_template.html');

let rawTemplate = fs.readFileSync(templatePath, 'utf-8');

if (!rawTemplate.includes('<!--app-html-->')) {
  // The template has already been replaced — try the backup
  if (!fs.existsSync(templateBackup)) {
    console.error('❌  dist/index.html no longer contains <!--app-html--> and no backup exists.');
    console.error('   Run `npm run build:client` first to regenerate a fresh template.\n');
    process.exit(1);
  }
  console.log('ℹ️   Using backed-up template from dist/_template.html\n');
  rawTemplate = fs.readFileSync(templateBackup, 'utf-8');
} else {
  // Save a pristine backup before we start overwriting routes
  fs.writeFileSync(templateBackup, rawTemplate, 'utf-8');
}

/**
 * Strip generic fallback tags that will be replaced per-route.
 * This prevents duplicate title / description / OG / Twitter / canonical
 * tags in the final HTML that could confuse crawlers.
 */
function stripFallbackMeta(html) {
  return html
    // <title>...</title>
    .replace(/<title>[^<]*<\/title>/gi, '')
    // <meta name="description" .../>  (single or multi-line)
    .replace(/<meta\s+name="description"[^>]*\/>/gis, '')
    // <meta name="keywords" .../>
    .replace(/<meta\s+name="keywords"[^>]*\/>/gis, '')
    // <meta name="robots" .../>
    .replace(/<meta\s+name="robots"[^>]*\/>/gis, '')
    // <link rel="canonical" .../>
    .replace(/<link\s+rel="canonical"[^>]*\/>/gis, '')
    // OG tags (og:title, og:description, og:url, og:type, og:locale, og:site_name, og:image*)
    .replace(/<meta\s+property="og:[^"]*"[^>]*\/>/gis, '')
    // Twitter tags
    .replace(/<meta\s+name="twitter:[^"]*"[^>]*\/>/gis, '');
}

/* ─── Import the SSR render function ──────────────────────────────────── */
const { render } = await import('./dist/server/entry-server.js');

/* ─── Routes to prerender ─────────────────────────────────────────────── */
const routes = [
  '/',
  '/infraedge',
  '/sports',
  '/thank-you',
  '/case-study-onsite',
  '/case-study-shri-yamuna-infra',
  '/case-study-astrovedansh',
  '/case-study-shoemonkies',
  '/case-study-reidius-infra',
];

let ok = 0;
let err = 0;

console.log('\n🔄  Prerendering routes…\n');

for (const url of routes) {
  try {
    const { html: appHtml, head } = await render(url);

    /* Strip fallback generic tags then inject route-specific ones */
    const page = stripFallbackMeta(rawTemplate)
      .replace('<!--app-head-->', head ?? '')
      .replace('<!--app-html-->', appHtml);

    /* Determine output path: / → dist/index.html, /foo → dist/foo/index.html */
    const filePath = url === '/'
      ? 'dist/index.html'
      : `dist${url}/index.html`;

    const absFile = toAbs(filePath);
    fs.mkdirSync(path.dirname(absFile), { recursive: true });
    fs.writeFileSync(absFile, page, 'utf-8');

    const size = (Buffer.byteLength(page, 'utf-8') / 1024).toFixed(1);
    console.log(`  ✅  ${url.padEnd(42)} → ${filePath}  (${size} kB)`);
    ok++;
  } catch (e) {
    console.error(`  ❌  ${url}`);
    console.error(`     ${e.message}\n`);
    err++;
  }
}

console.log(`\n${'─'.repeat(60)}`);
console.log(`✓ Prerendering complete — ${ok} succeeded, ${err} failed.\n`);

if (err > 0) {
  process.exit(1);
}

