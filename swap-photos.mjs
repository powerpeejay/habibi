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

// 1) Über-uns Salon-Innenraum photo (first salon-interior)
const ueberPhoto = byQuery['salon-interior']?.[0];
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

// 2) Team portraits (6 slots)
const TEAM_NAMES = ['Reza', 'Ali', 'Mahmoud', 'Daniel', 'Karim', 'Omid'];
const teamPhotos = byQuery['team-portrait'] || [];
for (let i = 0; i < TEAM_NAMES.length; i++) {
  const photo = teamPhotos[i];
  if (!photo) {
    console.warn(`⚠ no "team-portrait" photo for slot ${i + 1} (${TEAM_NAMES[i]}) — keeping placeholder`);
    continue;
  }
  swaps.push({
    label: `Team-Portrait #${i + 1} (${TEAM_NAMES[i]})`,
    pattern: new RegExp(`https://placehold\\.co/400x500/2d2620/faf7f2\\?text=${TEAM_NAMES[i]}`),
    target: `/assets/img/${photo.local_filename}`,
    photographer: photo.photographer,
  });
}

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
