#!/usr/bin/env node
"use strict";
// Writes the English strings from app.js into the empty [data-i18n] elements of
// index.html, so the page has real text before (or without) JavaScript.
// Run after editing English copy:  node scripts/sync-static-text.js
// Use --check to exit 1 if index.html is out of date (e.g. in CI).
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const js = fs.readFileSync(path.join(root, "app.js"), "utf8");
const start = js.indexOf("const T = ");
const end = js.indexOf("\n};", start);
if (start < 0 || end < 0) throw new Error("Could not find the T dictionary in app.js");
const en = new Function(`${js.slice(start, end + 3)}\nreturn T.en;`)();

const escape = (v) => v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const file = path.join(root, "index.html");
const html = fs.readFileSync(file, "utf8");
const missing = [];
const next = html.replace(/(<([a-z0-9]+)\b[^>]*\bdata-i18n="([^"]+)"[^>]*>)[^<]*(<\/\2>)/g, (m, open, tag, key, close) => {
  if (!(key in en)) { missing.push(key); return m; }
  return open + escape(en[key]) + close;
});
if (missing.length) { console.error("Keys missing from T.en:", missing.join(", ")); process.exit(1); }
if (process.argv.includes("--check")) {
  if (next !== html) { console.error("index.html is out of date. Run: node scripts/sync-static-text.js"); process.exit(1); }
  console.log("index.html static text is up to date.");
} else {
  fs.writeFileSync(file, next);
  console.log(next === html ? "No changes." : "index.html updated.");
}
