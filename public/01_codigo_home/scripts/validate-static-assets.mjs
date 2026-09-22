import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const srcRoot = path.join(root, 'src');
const refs = new Set();

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

for (const file of walk(srcRoot)) {
  if (!/\.(md|astro|ts|js|css)$/.test(file)) continue;
  const text = fs.readFileSync(file, 'utf8');
  const matches = text.match(/\/(?:images|downloads)\/[A-Za-z0-9._~!$&'()*+,;=:@%/?-]+/g) ?? [];
  for (const ref of matches) refs.add(ref.replace(/[\"'),.;]+$/, ''));
}

const missing = [...refs]
  .filter((ref) => !fs.existsSync(path.join(root, 'public', ref.replace(/^\//, ''))))
  .sort();

if (missing.length) {
  console.error('\nStatic asset validation failed. Missing files:\n');
  for (const ref of missing) console.error(`- ${ref}`);
  console.error(`\nTotal missing: ${missing.length}\n`);
  process.exit(1);
}

console.log(`Static asset validation passed: ${refs.size} referenced assets found.`);
