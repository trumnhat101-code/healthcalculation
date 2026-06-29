/**
 * Sinh ảnh Pinterest pin (2000×3000) + CSV từ pins.data.mjs.
 * Chạy: npm run pins
 * Output: pinterest-pins/*.png  +  pinterest-pins/pins.csv
 */
import puppeteer from 'puppeteer';
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { SITE, CALCULATORS, ACTIVITIES } from './pins.data.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.resolve(__dirname, '../../pinterest-pins');

const KG_155 = 70.307; // 155 lb in kg
const kcalPerHour = (met) => Math.round(met * KG_155);
const displayUrl = (url) => url.replace(/^https?:\/\//, '');

// ── HTML template cho 1 pin ──
function pinHtml({ eyebrow, icon, title, sub, url }) {
  const titleSize = title.length > 24 ? 46 : title.length > 18 ? 54 : 62;
  return `<!doctype html><html><head><meta charset="utf-8"><style>
    *{margin:0;padding:0;box-sizing:border-box}
    html,body{width:1000px;height:1500px}
    body{
      font-family:'Segoe UI',system-ui,Arial,sans-serif;
      background:linear-gradient(160deg,#16a34a 0%,#0891b2 100%);
      display:flex;flex-direction:column;align-items:center;
      justify-content:space-between;padding:70px 64px;color:#fff;
    }
    .brand{display:flex;align-items:center;gap:12px;background:rgba(255,255,255,.16);
      padding:14px 26px;border-radius:999px;font-size:26px;font-weight:700;backdrop-filter:blur(4px)}
    .brand .b-mark{font-size:30px}
    .card{background:#fff;border-radius:44px;padding:64px 56px;width:100%;
      box-shadow:0 30px 70px rgba(0,0,0,.18);text-align:center;
      display:flex;flex-direction:column;align-items:center;gap:8px}
    .icon{width:184px;height:184px;border-radius:50%;background:#f0fdf4;border:3px solid #bbf7d0;
      display:flex;align-items:center;justify-content:center;font-size:92px;margin-bottom:26px}
    .eyebrow{color:#16a34a;font-size:24px;font-weight:800;letter-spacing:3px;text-transform:uppercase;margin-bottom:14px}
    .title{color:#111827;font-size:${titleSize}px;font-weight:900;line-height:1.12;margin-bottom:20px}
    .sub{color:#6b7280;font-size:30px;line-height:1.4;font-weight:500}
    .footer{display:flex;flex-direction:column;align-items:center;gap:18px}
    .cta{background:#fff;color:#15803d;font-size:30px;font-weight:800;padding:22px 52px;border-radius:999px;
      box-shadow:0 12px 30px rgba(0,0,0,.16)}
    .url{font-size:26px;font-weight:600;color:rgba(255,255,255,.92);letter-spacing:.5px}
  </style></head><body>
    <div class="brand"><span class="b-mark">🧮</span>HealthCalculation.com</div>
    <div class="card">
      <div class="icon">${icon}</div>
      <div class="eyebrow">${eyebrow}</div>
      <div class="title">${title}</div>
      <div class="sub">${sub}</div>
    </div>
    <div class="footer">
      <div class="cta">Calculate Free →</div>
      <div class="url">${displayUrl(url)}</div>
    </div>
  </body></html>`;
}

// ── Danh sách pin ──
function buildPins() {
  const pins = [];

  for (const c of CALCULATORS) {
    const url = `${SITE}/${c.slug}`;
    pins.push({
      file: `calc-${c.slug}.png`,
      board: c.board,
      title: c.title,
      desc: c.desc,
      url,
      html: pinHtml({ eyebrow: c.eyebrow, icon: c.icon, title: c.title, sub: c.sub, url }),
    });
  }

  for (const a of ACTIVITIES) {
    const url = `${SITE}/calories-burned/${a.slug}`;
    const kcal = kcalPerHour(a.met);
    const nameLower = a.name.charAt(0).toLowerCase() + a.name.slice(1);
    pins.push({
      file: `act-${a.slug}.png`,
      board: 'Calories Burned by Activity',
      title: `Calories Burned ${a.name}`,
      desc: `How many calories does ${nameLower} burn? Free chart by your body weight and time — about ${kcal} cal/hour for a 155 lb person. #caloriesburned #exercise #weightloss #fitness`,
      url,
      html: pinHtml({
        eyebrow: 'Calories Burned',
        icon: a.icon,
        title: `Calories Burned ${a.name}`,
        sub: `≈ ${kcal} cal/hour · free chart by weight`,
        url,
      }),
    });
  }

  return pins;
}

function csvCell(s) {
  return `"${String(s).replace(/"/g, '""')}"`;
}

async function main() {
  await mkdir(OUT, { recursive: true });
  const pins = buildPins();
  console.log(`Rendering ${pins.length} pins → ${OUT}`);

  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1000, height: 1500, deviceScaleFactor: 2 });

  for (const p of pins) {
    await page.setContent(p.html, { waitUntil: 'domcontentloaded' });
    await page.screenshot({
      path: path.join(OUT, p.file),
      clip: { x: 0, y: 0, width: 1000, height: 1500 },
    });
    console.log(`  ✓ ${p.file}`);
  }

  await browser.close();

  // CSV để import vào Tailwind / tham chiếu khi lên lịch
  const header = 'filename,title,description,url,board';
  const rows = pins.map((p) =>
    [p.file, p.title, p.desc, p.url, p.board].map(csvCell).join(',')
  );
  await writeFile(path.join(OUT, 'pins.csv'), [header, ...rows].join('\n'), 'utf8');

  console.log(`\nDone: ${pins.length} PNG + pins.csv in pinterest-pins/`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
