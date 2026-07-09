/**
 * generate-og.mjs — tạo ảnh OG 1200×630 riêng cho từng trang, chạy SAU `astro build`.
 *
 * Cách hoạt động: quét dist/**\/*.html, lấy hero title + meta description từ HTML
 * đã build, render SVG → PNG bằng sharp vào dist/og/<route>.png — khớp với URL
 * /og/<route>.png mà ToolLayout khai báo trong og:image.
 *
 * Không cần khai báo gì thêm ở từng trang; trang mới tự có ảnh ở lần build sau.
 */
import { readdirSync, readFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const DIST = 'dist';
const OUT_DIR = path.join(DIST, 'og');

/** Re-escape các ký tự & thô (nội dung từ HTML đã encode sẵn entity hợp lệ XML). */
const xml = (s) => s.replace(/&(?!(#\d+|#x[0-9a-fA-F]+|amp|lt|gt|quot|apos);)/g, '&amp;');

/** Bẻ dòng theo số ký tự tối đa (đếm entity ≈ 1 ký tự cho gần đúng). */
function wrap(text, maxChars, maxLines) {
  const words = text.split(/\s+/);
  const lines = [];
  let line = '';
  for (const w of words) {
    const candidate = line ? `${line} ${w}` : w;
    if (candidate.replace(/&[a-z#0-9]+;/gi, '.').length <= maxChars) {
      line = candidate;
    } else {
      if (line) lines.push(line);
      line = w;
    }
  }
  if (line) lines.push(line);
  if (lines.length > maxLines) {
    const kept = lines.slice(0, maxLines);
    kept[maxLines - 1] = kept[maxLines - 1].replace(/[,.;:]?$/, '…');
    return kept;
  }
  return lines;
}

const extract = (html, re) => html.match(re)?.[1]?.trim();

function buildSvg({ title, desc, eyebrow }) {
  // Title: cỡ chữ co lại khi phải xuống nhiều dòng
  let titleLines = wrap(title, 26, 3);
  let titleSize = 62;
  if (titleLines.length >= 3) {
    titleSize = 50;
    titleLines = wrap(title, 32, 3);
  }
  const titleLineH = Math.round(titleSize * 1.22);
  const titleY = 300;

  const descLines = wrap(desc, 62, 2);
  const descY = titleY + titleLines.length * titleLineH - titleLineH + 64;

  return `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#16a34a"/>
      <stop offset="100%" stop-color="#0891b2"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <circle cx="1080" cy="90" r="220" fill="#ffffff" opacity="0.06"/>
  <circle cx="120" cy="560" r="260" fill="#ffffff" opacity="0.05"/>

  <rect x="90" y="78" width="64" height="64" rx="16" fill="#ffffff"/>
  <text x="122" y="124" text-anchor="middle" font-family="Arial, sans-serif" font-size="40" font-weight="900" fill="#16a34a">H</text>
  <text x="172" y="122" font-family="Arial, sans-serif" font-size="32" font-weight="800" fill="#ffffff">HealthCalculation.com</text>

  <text x="90" y="228" font-family="Arial, sans-serif" font-size="23" font-weight="700" letter-spacing="3" fill="#ffffff" opacity="0.78">${xml(eyebrow.toUpperCase())}</text>

  ${titleLines
    .map((l, i) => `<text x="90" y="${titleY + i * titleLineH}" font-family="Arial, sans-serif" font-size="${titleSize}" font-weight="900" fill="#ffffff">${xml(l)}</text>`)
    .join('\n  ')}

  ${descLines
    .map((l, i) => `<text x="90" y="${descY + i * 40}" font-family="Arial, sans-serif" font-size="27" font-weight="500" fill="#ffffff" opacity="0.92">${xml(l)}</text>`)
    .join('\n  ')}

  <rect x="90" y="548" width="120" height="8" rx="4" fill="#ffffff" opacity="0.85"/>
</svg>`;
}

function eyebrowFor(route) {
  if (route.startsWith('/guides')) return 'Health & Fitness Guide';
  if (['/about', '/privacy', '/disclaimer'].includes(route)) return 'HealthCalculation';
  return 'Free Calculator';
}

const files = readdirSync(DIST, { recursive: true })
  .map((f) => String(f).replace(/\\/g, '/'))
  .filter((f) => f.endsWith('.html') && f !== 'index.html' && f !== '404.html' && !f.startsWith('og/'));

let count = 0;
await Promise.all(
  files.map(async (rel) => {
    const html = readFileSync(path.join(DIST, rel), 'utf8');
    const route = '/' + rel.replace(/\.html$/, '');

    const title =
      extract(html, /<p class="ph-title">([^<]+)<\/p>/) ??
      extract(html, /<title>([^<|—]+)/) ??
      'Health Calculator';
    const desc = extract(html, /<meta name="description" content="([^"]*)"/) ?? '';

    const outFile = path.join(OUT_DIR, `${route.slice(1)}.png`);
    mkdirSync(path.dirname(outFile), { recursive: true });
    await sharp(Buffer.from(buildSvg({ title, desc, eyebrow: eyebrowFor(route) })))
      .png({ compressionLevel: 9 })
      .toFile(outFile);
    count++;
  }),
);

console.log(`[generate-og] ${count} OG images written to ${OUT_DIR}`);
