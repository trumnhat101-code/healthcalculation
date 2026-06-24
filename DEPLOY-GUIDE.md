# Hướng dẫn Deploy lên Cloudflare Pages

## Bước 1 — Cài dependencies (chạy 1 lần)

```bash
cd toolsite-health-starter
npm install
```

## Bước 2 — Test local

```bash
npm run dev
# → Mở http://localhost:4321
```

Kiểm tra:
- [ ] Trang chủ (/)
- [ ] /calorie-tdee-calculator → nhập số, bấm Calculate
- [ ] /bmi-calculator
- [ ] /macro-calculator
- [ ] /sleep-calculator
- [ ] /about

## Bước 3 — Thay domain thật

Tìm + thay `healthcalculation.com` trong các file:

```
astro.config.mjs               → site: 'https://healthcalculation.com'
public/robots.txt              → Sitemap URL
src/pages/*.astro              → const SITE = 'https://...'
src/layouts/ToolLayout.astro   → logo text (nếu đổi brand name)
```

## Bước 4 — Push lên GitHub

```bash
git add .
git commit -m "feat: Astro project — 4 health calculators"
git push origin main
```

## Bước 5 — Kết nối Cloudflare Pages

1. Vào **https://pages.cloudflare.com** → "Create a project"
2. Chọn **Connect to Git** → chọn repo vừa push
3. Cấu hình build:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** `18` (thêm env var `NODE_VERSION = 18`)
4. Click **Save and Deploy**

CF Pages sẽ tự build và deploy. Mỗi lần push Git → auto redeploy.

## Bước 6 — Gắn custom domain

1. Trong CF Pages project → "Custom domains" → Add domain
2. CF tự tạo DNS record (CNAME → pages.dev)
3. HTTPS tự động

## Bước 7 — Page Rules (CF Dashboard)

Tạo Page Rule để force www → non-www:
- Match: `www.healthcalculation.com/*`
- Setting: Forwarding URL (301) → `https://healthcalculation.com/$1`

## Bước 8 — Submit Google Search Console

1. Vào **https://search.google.com/search-console**
2. Add property → URL prefix → `https://healthcalculation.com`
3. Verify bằng HTML file hoặc DNS record
4. Submit sitemap: `https://healthcalculation.com/sitemap-index.xml`

---

## TODO checklist sau deploy

> **Tất cả monetization/analytics giờ nằm trong MỘT file: `src/config/site.ts`.**
> Điền ID vào đó là cả site tự bật — không cần sửa từng trang nữa.

- [ ] **`src/config/site.ts`** → điền `ADSENSE_CLIENT` (sau khi được AdSense duyệt) → ads tự bật trên 33 trang
- [ ] **`src/config/site.ts`** → điền `CF_ANALYTICS_TOKEN` → Cloudflare Web Analytics tự bật (free, no cookie)
- [ ] **`src/config/site.ts`** → điền các link trong `AFF` (noom, hellofresh, saatva…) → CTA affiliate tự hiện sau kết quả tool; ô nào để trống thì CTA đó tự ẩn
- [ ] Thay `contact@healthcalculation.com` trong about.astro nếu đổi email
- [ ] Tạo `public/og-default.png` (1200×630) cho ảnh share social
- [ ] Kiểm tra PageSpeed Insights ≥ 90 mobile

> Mẹo: chạy `npm run build` rồi mở `dist/` — khi config còn rỗng sẽ không có script ads/analytics nào (an toàn để nộp AdSense review).

## Thêm tool mới

Copy bất kỳ tool page nào (vd: bmi-calculator.astro) sang file mới:

```bash
cp src/pages/bmi-calculator.astro src/pages/protein-calculator.astro
```

Chỉnh:
1. `title`, `description`, `canonical`
2. `faq`, `affiliates`, `related`
3. Form inputs + JavaScript logic
4. Thêm vào nav trong `ToolLayout.astro` và trang chủ `index.astro`
