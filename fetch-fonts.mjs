#!/usr/bin/env node
// fetch-fonts.mjs — download Google Fonts woff2 to /fonts/, emit local @font-face CSS.
// One-shot self-hosting workflow (DSGVO-clean — no fonts.googleapis.com / fonts.gstatic.com requests at runtime).
//
// Reads inline FONTS_URL config below.
// Writes:
//   ./fonts/<google-hash>.woff2  (idempotent — skips existing)
//   ./fonts/fonts.css            (rewritten with /fonts/ paths)
//
// Usage:
//   node fetch-fonts.mjs
//   node fetch-fonts.mjs --force   # re-download even if exists

import { writeFile, mkdir, access } from 'node:fs/promises';
import { join } from 'node:path';

const ROOT = process.cwd();
const FONTS_DIR = join(ROOT, 'fonts');
const FONTS_CSS = join(FONTS_DIR, 'fonts.css');

const FORCE = process.argv.includes('--force');

// Chrome UA forces Google Fonts API to return woff2
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36';

// Project-specific font set per DESIGN.md §3
const FONTS_URL = 'https://fonts.googleapis.com/css2'
  + '?family=Sacramento'
  + '&family=Fraunces:ital,wght@0,500;0,600;1,500;1,600'
  + '&family=Inter:wght@400;500;600'
  + '&display=swap';

const fileExists = async p => { try { await access(p); return true; } catch { return false; } };

await mkdir(FONTS_DIR, { recursive: true });

console.log(`→ fetching CSS from Google Fonts API (Chrome UA for woff2)...`);
const cssResp = await fetch(FONTS_URL, { headers: { 'User-Agent': UA } });
if (!cssResp.ok) {
  console.error(`✗ Google Fonts API: ${cssResp.status} ${cssResp.statusText}`);
  process.exit(1);
}
let css = await cssResp.text();
console.log(`  got ${css.length} chars of CSS`);

const urls = [...new Set(
  [...css.matchAll(/url\((https:\/\/fonts\.gstatic\.com\/s\/[^)]+\.woff2)\)/g)].map(m => m[1])
)];
console.log(`  found ${urls.length} unique woff2 URLs`);

let downloaded = 0, skipped = 0, totalBytes = 0;

for (const url of urls) {
  const filename = url.split('/').pop();
  const dest = join(FONTS_DIR, filename);

  if (!FORCE && await fileExists(dest)) {
    console.log(`  ⊙ skip (exists): ${filename}`);
    skipped++;
  } else {
    const resp = await fetch(url);
    if (!resp.ok) {
      console.error(`  ✗ download failed: ${filename} (${resp.status})`);
      continue;
    }
    const buf = Buffer.from(await resp.arrayBuffer());
    await writeFile(dest, buf);
    totalBytes += buf.length;
    downloaded++;
    console.log(`  ✓ ${filename} (${(buf.length / 1024).toFixed(1)} KB)`);
  }

  css = css.split(url).join(`/fonts/${filename}`);
}

await writeFile(FONTS_CSS, css);

console.log(`\n=== summary ===`);
console.log(`  Downloaded: ${downloaded}`);
console.log(`  Skipped:    ${skipped}`);
console.log(`  Total:      ${(totalBytes / 1024).toFixed(1)} KB`);
console.log(`  CSS:        ${FONTS_CSS}`);
console.log(`\nAdd to <head>:`);
console.log(`  <link rel="stylesheet" href="/fonts/fonts.css">`);
