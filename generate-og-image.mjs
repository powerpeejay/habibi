#!/usr/bin/env node
// generate-og-image.mjs — render og-template.html at 1200x630 to assets/img/og-image.jpg
//
// Prereqs:
//   - Dev server running (node serve.mjs) on http://localhost:3000
//   - Playwright installed (it is, scaffolded with master node_modules)
//
// Usage:
//   node generate-og-image.mjs
//   node generate-og-image.mjs --url=http://localhost:3000/og-template.html
//
// Output: ./assets/img/og-image.jpg

import { mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const ROOT = process.cwd();
const OUT = join(ROOT, 'assets', 'img', 'og-image.jpg');

const args = Object.fromEntries(
  process.argv.slice(2).filter(a => a.startsWith('--')).map(a => {
    const [k, v] = a.replace(/^--/, '').split('=');
    return [k, v ?? true];
  })
);
const URL = args.url ?? 'http://localhost:3000/og-template.html';

let chromium;
try {
  ({ chromium } = await import('playwright'));
} catch {
  console.error('✗ Playwright not installed. From master: npm install -D --save-exact playwright && npx playwright install chromium');
  process.exit(1);
}

await mkdir(join(ROOT, 'assets', 'img'), { recursive: true });

let browser;
try {
  browser = await chromium.launch();
} catch (err) {
  if (err.message?.includes("Executable doesn't exist")) {
    console.error('✗ Chromium binary missing. Run: npx playwright install chromium');
    process.exit(1);
  }
  throw err;
}

const ctx = await browser.newContext({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 2, // retina render → cleaner downsample
});
const page = await ctx.newPage();

console.log(`→ ${URL}`);
try {
  await page.goto(URL, { waitUntil: 'networkidle', timeout: 15000 });
} catch (err) {
  console.error(`✗ navigate failed: ${err.message}`);
  console.error(`  Is dev server running?  node serve.mjs`);
  await browser.close();
  process.exit(1);
}

await page.evaluate(() => document.fonts?.ready ?? Promise.resolve());
await page.waitForTimeout(600); // settle for glow + grain render

await page.screenshot({
  path: OUT,
  type: 'jpeg',
  quality: 92,
  fullPage: false, // viewport-only; the template is exactly 1200x630
});

await browser.close();
console.log(`✓ ${OUT}  (1200×630 @2x retina)`);
console.log('  Linked from index.html: <meta property="og:image" content="https://newlookbyhabibi.de/assets/img/og-image.jpg">');
