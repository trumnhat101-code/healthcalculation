/**
 * indexnow.mjs — ping IndexNow (Bing, Yandex, Seznam, Naver…) sau khi deploy.
 *
 * Chạy: `npm run indexnow` (SAU khi `wrangler deploy` xong — API sẽ fetch
 * key file trên domain thật để xác minh, nên phải deploy trước).
 *
 * Đọc danh sách URL từ dist/sitemap-0.xml và submit 1 lần duy nhất.
 * Google KHÔNG dùng IndexNow — với Google vẫn cần Search Console + sitemap.
 */
import { readFileSync } from 'node:fs';

const HOST = 'healthcalculation.com';
const KEY = 'bc3dc5605ce821316a2d4735d1d17048'; // khớp public/<KEY>.txt

const xml = readFileSync('dist/sitemap-0.xml', 'utf8');
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

if (!urlList.length) {
  console.error('[indexnow] Không tìm thấy URL nào trong dist/sitemap-0.xml — chạy `npm run build` trước.');
  process.exit(1);
}

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList,
  }),
});

// 200 = OK, 202 = nhận rồi sẽ xác minh key sau — cả hai đều thành công.
if (res.status === 200 || res.status === 202) {
  console.log(`[indexnow] Đã submit ${urlList.length} URL — HTTP ${res.status}`);
} else {
  console.error(`[indexnow] Lỗi HTTP ${res.status}: ${await res.text()}`);
  process.exit(1);
}
