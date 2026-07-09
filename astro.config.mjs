import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { execSync } from 'node:child_process';
import { readdirSync } from 'node:fs';

/** Ngày commit cuối của 1 file (ISO 8601) — dùng làm <lastmod> trong sitemap. */
function gitLastmod(file) {
  try {
    return execSync(`git log -1 --format=%cI -- "${file}"`, { encoding: 'utf8' }).trim() || undefined;
  } catch {
    return undefined;
  }
}

/** Ngày mới nhất trong 1 nhóm file (cho route động: template + data đều tính). */
const newest = (...files) =>
  files.map(gitLastmod).filter(Boolean).sort().pop();

// Map route tĩnh → lastmod, dựng từ cây src/pages lúc build.
const PAGES_DIR = 'src/pages';
const lastmodByRoute = {};
for (const entry of readdirSync(PAGES_DIR, { recursive: true })) {
  const rel = String(entry).replace(/\\/g, '/');
  if (!rel.endsWith('.astro') || rel.includes('[')) continue;
  const route = ('/' + rel.replace(/\.astro$/, '')).replace(/\/index$/, '') || '/';
  lastmodByRoute[route] = gitLastmod(`${PAGES_DIR}/${rel}`);
}

// Route động: trang đổi khi template HOẶC file data đổi.
const activityLastmod = newest('src/pages/calories-burned/[activity].astro', 'src/data/activities.ts');
const liftLastmod     = newest('src/pages/strength/[lift].astro', 'src/data/lifts.ts');

export default defineConfig({
  site: 'https://healthcalculation.com',
  integrations: [
    sitemap({
      filter: (page) => !new URL(page).pathname.startsWith('/404'),
      serialize(item) {
        const path = new URL(item.url).pathname.replace(/\/$/, '') || '/';
        const lastmod =
          lastmodByRoute[path] ??
          (path.startsWith('/calories-burned/') ? activityLastmod : undefined) ??
          (path.startsWith('/strength/') ? liftLastmod : undefined);
        if (lastmod) item.lastmod = lastmod;
        return item;
      },
    }),
  ],
  build: {
    format: 'file', // /bmi-calculator.html thay vì /bmi-calculator/index.html
  },
});
