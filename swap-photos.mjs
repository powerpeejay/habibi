#!/usr/bin/env node
// swap-photos.mjs — replace placehold.co URLs in index.html with self-hosted Pexels paths.
// Run AFTER `node fetch-photos.mjs`.
//
// Reads:  ./assets/img/credits.json  (built by fetch-photos.mjs)
// Writes: ./index.html  (in-place, idempotent on re-run if photos exist)
//
// Usage:
//   node swap-photos.mjs           # apply swaps
//   node swap-photos.mjs --dry-run # show what would change

import { readFile, writeFile, access } from 'node:fs/promises';

const ROOT = process.cwd();
const CREDITS_PATH = './assets/img/credits.json';
const HTML_PATH = './index.html';

const DRY = process.argv.includes('--dry-run');

const fileExists = async p => { try { await access(p); return true; } catch { return false; } };

if (!(await fileExists(CREDITS_PATH))) {
  console.error(`✗ ${CREDITS_PATH} not found.`);
  console.error('  Run "node fetch-photos.mjs" first (needs PEXELS_API_KEY).');
  process.exit(1);
}

const credits = JSON.parse(await readFile(CREDITS_PATH, 'utf8'));
const byQuery = {};
for (const p of credits.photos) {
  (byQuery[p.query_name] ??= []).push(p);
}

console.log('Available photo groups:');
for (const [k, v] of Object.entries(byQuery)) console.log(`  ${k}: ${v.length} photo(s)`);
console.log('');

let html = await readFile(HTML_PATH, 'utf8');
const before = html;

// ---------- Swap rules ----------
const swaps = [];

// 1) Über-uns Salon-Innenraum photo
//    Prefer salon-interior-v2 (modern wood/leather query → fits Hamburg-Stadtteil-Vibe)
//    Pick index 2 (skip duplicate Alina-Degli from v1 + softer los-muertos chair) = marcelo-verfe
//    Fall back to salon-interior[0] if v2 not present.
const ueberPhoto = byQuery['salon-interior-v2']?.[2]
  ?? byQuery['salon-interior-v2']?.[0]
  ?? byQuery['salon-interior']?.[0];
if (ueberPhoto) {
  swaps.push({
    label: 'Über-uns Salon-Innenraum',
    pattern: /https:\/\/placehold\.co\/720x900\/1a1612\/faf7f2\?text=Salon\+Innenraum[^"]*/,
    target: `/assets/img/${ueberPhoto.local_filename}`,
    photographer: ueberPhoto.photographer,
  });
} else {
  console.warn('⚠ no "salon-interior" photo available — Über-uns will keep placeholder');
}

// 2) Team portraits — DEAKTIVIERT.
//    Inhaber-Wahl 2026-04-27: Person1.png / Person2.png / Person3.png in /assets/img/
//    werden manuell für die 6 Stylist-Cards genutzt (Watercolor-Illustrationen, kein Pexels).
//    Wenn der Inhaber später echte Photos liefert: hier wieder aktivieren ODER
//    Person1/2/3.png durch echte Files mit gleichen Namen ersetzen.

// ---------- Apply ----------
let applied = 0, missed = 0;
for (const s of swaps) {
  if (s.pattern.test(html)) {
    if (!DRY) html = html.replace(s.pattern, s.target);
    console.log(`  ${DRY ? '⌛' : '✓'} ${s.label} → ${s.target} (by ${s.photographer})`);
    applied++;
  } else {
    console.log(`  ⊙ ${s.label} — pattern not found (already swapped?)`);
    missed++;
  }
}

if (!DRY && html !== before) {
  await writeFile(HTML_PATH, html);
  console.log(`\n✓ ${HTML_PATH} updated. Applied: ${applied}, missed/already-swapped: ${missed}.`);
} else if (DRY) {
  console.log(`\n(dry-run) would apply: ${applied}, miss: ${missed}.`);
} else {
  console.log(`\n⊙ no changes — index.html already swapped.`);
}
