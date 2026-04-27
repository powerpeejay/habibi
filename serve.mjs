#!/usr/bin/env node
// serve.mjs — minimal static file server for client-site development
// Zero dependencies. Pure Node.
//
// Usage:
//   node serve.mjs                # serves ./ on http://localhost:3000
//   PORT=4000 node serve.mjs      # custom port
//   ROOT=./dist node serve.mjs    # serve a different directory

import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize, resolve, sep } from 'node:path';

const PORT = parseInt(process.env.PORT || '3000', 10);
const ROOT = resolve(process.env.ROOT || process.cwd());

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.webmanifest': 'application/manifest+json',
};

const log = (status, method, url, extra = '') => {
  const color = status >= 500 ? '\x1b[31m' : status >= 400 ? '\x1b[33m' : '\x1b[32m';
  console.log(`${color}${status}\x1b[0m ${method} ${url}${extra ? ' ' + extra : ''}`);
};

async function resolveFile(urlPath) {
  // Strip query string, decode, normalize, prevent traversal
  const clean = decodeURIComponent(urlPath.split('?')[0]);
  const safe = normalize(clean).replace(/^(\.\.([\/\\]|$))+/, '');
  let filePath = join(ROOT, safe);

  // Path must remain inside ROOT after resolution
  if (!resolve(filePath).startsWith(ROOT + sep) && resolve(filePath) !== ROOT) {
    return null;
  }

  let st;
  try {
    st = await stat(filePath);
  } catch {
    // Try .html extension fallback (clean URLs)
    try {
      st = await stat(filePath + '.html');
      return { path: filePath + '.html', stat: st };
    } catch {
      return null;
    }
  }

  if (st.isDirectory()) {
    const indexPath = join(filePath, 'index.html');
    try {
      const indexStat = await stat(indexPath);
      return { path: indexPath, stat: indexStat };
    } catch {
      return null;
    }
  }

  return { path: filePath, stat: st };
}

const server = createServer(async (req, res) => {
  const start = Date.now();
  try {
    const resolved = await resolveFile(req.url || '/');

    if (!resolved) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 Not Found');
      log(404, req.method, req.url);
      return;
    }

    const ext = extname(resolved.path).toLowerCase();
    const mime = MIME[ext] || 'application/octet-stream';
    const data = await readFile(resolved.path);

    res.writeHead(200, {
      'Content-Type': mime,
      'Content-Length': data.length,
      'Cache-Control': 'no-cache, no-store, must-revalidate',
    });
    res.end(data);
    log(200, req.method, req.url, `${data.length}b ${Date.now() - start}ms`);
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('500 Internal Server Error');
    log(500, req.method, req.url, err.message);
  }
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`\n✗ Port ${PORT} already in use.`);
    console.error(`  Try: PORT=${PORT + 1} node serve.mjs`);
    process.exit(1);
  }
  throw err;
});

server.listen(PORT, () => {
  console.log(`\n✓ serving \x1b[36m${ROOT}\x1b[0m`);
  console.log(`  → \x1b[1mhttp://localhost:${PORT}\x1b[0m`);
  console.log(`  Ctrl+C to stop\n`);
});

// Clean shutdown on Ctrl+C
process.on('SIGINT', () => {
  console.log('\n→ shutting down');
  server.close(() => process.exit(0));
});
