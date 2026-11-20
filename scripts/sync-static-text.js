#!/usr/bin/env node
"use strict";
// Keeps the generated parts of index.html in step with app.js and styles.css:
//   - English copy inside every [data-i18n] element (so crawlers and no-JS visitors see real text)
//   - <meta> description / og / twitter text, taken from T.en
//   - ?v=<hash> on styles.css and app.js, so a new page never loads an old cached file
//   - the Content-Security-Policy <meta>, including the hash of the inline <head> script
// It also checks that French and Arabic define exactly the same keys as English.
//
// Run after editing copy, CSS, JS or the inline script:  node scripts/sync-static-text.js
//   --check   change nothing; exit 1 if index.html is out of date or a check fails
// The GitHub Action in .github/workflows/sync.yml runs this on every push to main.
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const root = path.join(__dirname, "..");
const read = (f) => fs.readFileSync(path.join(root, f), "utf8");
const errors = [];

// --- the translation dictionary, read straight out of app.js
const js = read("app.js");
const start = js.indexOf("const T = ");
const end = js.indexOf("\n};", start);
if (start < 0 || end < 0) throw new Error("Could not find the T dictionary in app.js");
const T = new Function(`${js.slice(start, end + 3)}\nreturn T;`)();
const en = T.en;

for (const l of ["fr", "ar"]) {
  const missing = Object.keys(en).filter((k) => !(k in T[l]));
  const extra = Object.keys(T[l]).filter((k) => !(k in en));
  if (missing.length) errors.push(`${l}: missing keys ${missing.join(", ")}`);
  if (extra.length) errors.push(`${l}: keys not in English ${extra.join(", ")}`);
}

// --- index.html
const original = read("index.html");
let html = original;
const esc = (v) => v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const escAttr = (v) => esc(v).replace(/"/g, "&quot;");

let updated = 0;
html = html.replace(/(<([a-z0-9]+)\b[^>]*\bdata-i18n="([^"]+)"[^>]*>)[^<]*(<\/\2>)/g, (m, open, tag, key, close) => {
  if (!(key in en)) { errors.push(`T.en has no key "${key}"`); return m; }
  updated++;
  return open + esc(en[key]) + close;
});
const total = (html.match(/\bdata-i18n="/g) || []).length;
if (updated !== total) errors.push(`${total - updated} data-i18n element(s) were skipped: they must contain text only, no child tags`);

const setMeta = (attr, name, value) => {
  const re = new RegExp(`(<meta\\s+${attr}="${name}"\\s+content=")[^"]*(">)`);
  if (!re.test(html)) { errors.push(`index.html has no <meta ${attr}="${name}">`); return; }
  html = html.replace(re, (_, a, b) => a + escAttr(value) + b);
};
setMeta("name", "description", en["meta.desc"]);
setMeta("property", "og:title", en.title);
setMeta("property", "og:description", en["meta.desc"]);
setMeta("name", "twitter:title", en.title);
setMeta("name", "twitter:description", en["meta.desc"]);

const hash = (file, alg, enc, len) => crypto.createHash(alg).update(fs.readFileSync(path.join(root, file))).digest(enc).slice(0, len);
html = html
  .replace(/(href="styles\.css)(\?v=[0-9a-f]+)?"/, `$1?v=${hash("styles.css", "sha1", "hex", 8)}"`)
  .replace(/(src="app\.js)(\?v=[0-9a-f]+)?"/, `$1?v=${hash("app.js", "sha1", "hex", 8)}"`);

const inline = html.match(/<script>([\s\S]*?)<\/script>/);
if (!inline) errors.push("index.html has no inline <script> to hash for the Content-Security-Policy");
else {
  const sha = crypto.createHash("sha256").update(inline[1]).digest("base64");
  setMeta("http-equiv", "Content-Security-Policy",
    `default-src 'none'; script-src 'self' 'sha256-${sha}'; style-src 'self'; img-src 'self'; connect-src 'self'; base-uri 'none'; form-action 'none'`);
}

// --- write (or just check)
const changed = html !== original;
if (process.argv.includes("--check")) {
  if (changed) errors.push("index.html is out of date. Run: node scripts/sync-static-text.js");
} else if (changed) {
  fs.writeFileSync(path.join(root, "index.html"), html);
}
if (errors.length) { errors.forEach((e) => console.error("✗ " + e)); process.exit(1); }
console.log(process.argv.includes("--check") ? "index.html is up to date." : changed ? "index.html updated." : "No changes.");
