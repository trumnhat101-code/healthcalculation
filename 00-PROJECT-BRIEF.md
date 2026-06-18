# TOOL SITE #2 — HEALTH & FITNESS — Project Brief & Kickoff

> **Mục đích:** bàn giao đầy đủ để bắt đầu **phiên chat mới** cho **site tool ngách Health & Fitness (US)** — pillar thứ 2 để đa dạng hóa, không phụ thuộc ngách finance. Copy cả thư mục `toolsite-health-starter/` sang folder mới rồi mở chat mới trỏ vào đó. File tự chứa đủ ngữ cảnh.

---

## 0. TL;DR

Xây site **máy tính sức khỏe & thể hình cho US** (calorie/TDEE, BMI, macro, due date, ovulation, sleep…). Mỗi tool = 1 trang tĩnh JS client-side, nhắm 1 từ khóa. **Kiếm tiền 2 lớp: Affiliate (meal kits, weight-loss apps, supplements, mattress, baby products) + AdSense.** Traffic từ **SEO**. Lên Mediavine/Raptive khi đủ traffic.

**Vì sao ngách này (diversify từ finance):** volume tìm kiếm khổng lồ, audience & mùa vụ **khác hẳn** finance (giảm tương quan rủi ro), affiliate đa dạng. Lưu ý: sức khỏe là **YMYL** → Google soi E-E-A-T kỹ, cần nội dung chính xác + disclaimer.

**Chỉ traffic THẬT.** Không bot/nick farmed/tự click → AdSense ban vĩnh viễn.

---

## 1. Mục tiêu

- Pillar thu nhập thứ 2 (song song site finance), giảm phụ thuộc 1 ngách/1 nguồn.
- Bắt đầu 10–15 tool Ưu tiên 1 + nội dung hỗ trợ + disclaimer y tế + deploy + Search Console.

## 2. Mô hình & monetization

- **Affiliate (lớp chính):**
  - Weight loss: **Noom, Found** (payout cao) — gắn vào calorie/deficit/BMI.
  - Meal kits: **HelloFresh, Factor, Green Chef, Trifecta** — gắn vào calorie/macro/keto.
  - Supplements: Amazon, Transparent Labs, Legion — gắn vào protein/macro/1RM.
  - **Sleep → Mattress (Saatva, Nectar, Helix): payout RẤT cao** — gắn vào sleep calculator.
  - Pregnancy/baby: Amazon Baby, **BabyList registry**, que thử (Premom/Easy@Home) — gắn vào due date/ovulation/baby cost.
  - Fitness gear/trackers: Amazon, Garmin/Fitbit.
- **AdSense (lớp phủ)** → Mediavine/Raptive khi đủ traffic.
- **CTA affiliate ngay sau kết quả tool** = chuyển đổi cao nhất.

## 3. Ngách & danh sách tool

Đầy đủ 30 tool + từ khóa + affiliate + ưu tiên: **`Tool-Site-Health-Fitness-US.xlsx`** (3 sheet).

**Top ƯU TIÊN 1 (làm trước):**

| Tool | Từ khóa chính | Affiliate |
|---|---|---|
| Calorie Calculator (TDEE) | calorie calculator | Noom, HelloFresh, Factor |
| TDEE Calculator | tdee calculator | Noom, meal kits |
| BMI Calculator | bmi calculator | Weight-loss apps, smart scales |
| Macro Calculator | macro calculator | Supplements, meal kits |
| Protein Intake Calculator | protein calculator | Protein supplements |
| Calorie Deficit Calculator | calorie deficit calculator | Noom, Found |
| Keto Macro Calculator | keto calculator | Keto meal kits |
| Due Date Calculator | due date calculator | Baby products, BabyList |
| Ovulation Calculator | ovulation calculator | Ovulation tests (Premom) |
| Sleep Calculator | sleep calculator | Mattress (Saatva/Nectar — payout cao) |

> Cầu/RPM/cạnh tranh trong Excel là **định tính** — validate volume thật trước khi build.

## 4. Kiến trúc kỹ thuật

**Giống hệt site finance** — chi tiết ở **`KIEN-TRUC-TOOL-SITE.md`** (kèm theo, niche-agnostic): mỗi tool 1 trang tĩnh JS client-side; stack HTML thuần → Astro/Next static; bố cục tool-trên/content-dưới; SEO (title/meta/canonical/H1/JSON-LD/sitemap); hiệu năng (JS tối thiểu, CWV); deploy Cloudflare/Netlify/Vercel.

**Khác biệt riêng cho Health (YMYL):**
- Thêm **disclaimer "not medical advice"** mỗi trang (đã có trong template).
- **E-E-A-T**: dẫn nguồn uy tín (công thức Mifflin-St Jeor, khuyến nghị y tế), trang About/tác giả, độ chính xác cao. Google xét sức khỏe khắt khe hơn.

## 5. Template khởi đầu (đã có, chạy được)

**`calorie-tdee-calculator.html`** — mở trình duyệt là chạy. Công thức **Mifflin-St Jeor** đã test (nam 80kg/180cm/30y → BMR 1780). Có sẵn: tool (sex/age/weight/height/activity, đơn vị US lbs+ft/in) → BMR/TDEE + mục tiêu lose/maintain/gain, bố cục SEO + schema + chỗ đặt AdSense/affiliate (`TODO`). **Dùng làm khuôn** cho các tool health khác.

## 6. Lộ trình build

1. Validate 10–15 tool Ưu tiên 1 (keyword volume + độ khó SERP).
2. Dựng layout + tool mẫu (calorie/TDEE) → deploy thử.
3. Tách component (Astro): ToolLayout + AdSlot + AffiliateCTA + Faq + Disclaimer.
4. Làm 10–15 tool Ưu tiên 1 + nội dung + disclaimer + internal link.
5. SEO ops: sitemap, Search Console, trang About/E-E-A-T.
6. Monetize: affiliate (meal kit/weight-loss/mattress/baby) + AdSense → Mediavine.

## 7. Tuân thủ

- **Traffic thật** từ SEO/owned. Không bot/nick/tự click → ban AdSense.
- **YMYL**: nội dung chính xác + disclaimer y tế + nguồn; không tuyên bố y khoa sai.
- Nội dung gốc & hữu ích; 1 người 1 tài khoản AdSense; disclosure + `rel="sponsored nofollow"` cho affiliate.

## 8. Tài sản kèm theo (trong folder này)

- `00-PROJECT-BRIEF.md` — file này.
- `Tool-Site-Health-Fitness-US.xlsx` — 30 tool + từ khóa + affiliate + ưu tiên.
- `KIEN-TRUC-TOOL-SITE.md` — kiến trúc kỹ thuật (dùng chung).
- `calorie-tdee-calculator.html` — template tool chạy được.

## 9. Gợi ý câu mở đầu cho PHIÊN CHAT MỚI

```
Mình đang xây TOOL SITE ngách Health & Fitness cho thị trường US,
kiếm tiền bằng Affiliate + AdSense, traffic từ SEO (pillar thứ 2, đa dạng hóa khỏi finance).
Bối cảnh & kế hoạch đầy đủ ở 00-PROJECT-BRIEF.md trong folder này
(kèm Tool-Site-Health-Fitness-US.xlsx, KIEN-TRUC-TOOL-SITE.md, calorie-tdee-calculator.html).

Hãy đọc các file đó rồi giúp mình [CHỌN 1]:
- làm thêm 3 tool Ưu tiên 1 (BMI + Macro + Due Date) theo khuôn template, hoặc
- dựng layout component Astro (ToolLayout + AdSlot + AffiliateCTA + Disclaimer), hoặc
- lập kế hoạch SEO + validate từ khóa cho 15 tool đầu (chú ý E-E-A-T cho YMYL).
```

---

## PHỤ LỤC — Các ngách tool site khác để mở rộng (pillar tiếp theo)

Khi 2 pillar (finance + health) chạy ổn, cân nhắc thêm (đa dạng audience + affiliate):

| Ngách | Tool tiêu biểu | Affiliate mạnh | Ghi chú |
|---|---|---|---|
| **Home & DIY** | paint/flooring/concrete/BTU/square footage calculator | Home Depot/Lowe's, Angi leads, tools (Amazon) | Buyer intent cao, RPM khá |
| **Auto / Car** | fuel cost, MPG, lease vs buy, depreciation | **Car insurance (payout cao)**, parts, loans | Insurance affiliate = vàng |
| **Pets** | dog age, pet food/calorie, puppy weight | **Pet insurance**, Chewy, Amazon | Cảm xúc, ít cạnh tranh hơn |
| **SEO/Dev tools** | word counter, keyword density, QR, JSON | **SaaS recurring (Semrush/Ahrefs), hosting** | AdSense thấp nhưng affiliate SaaS cao |
| **Cooking** | recipe converter, baking conversions, scaler | Kitchen (Amazon), meal kits | Traffic Pinterest mạnh |
| **Real estate (investor)** | cap rate, rental ROI, BRRRR | RE software, mortgage | Audience RPM cao |
| **Wedding/Events** | wedding budget, guest list, RSVP | Vendors, registries | Mùa vụ |

Gợi ý thứ tự: **Health (đang làm) → Home/DIY hoặc Auto (insurance affiliate) → Pets**. Mỗi pillar 1 folder starter riêng như thế này.

---

*Lưu ý: con số RPM/cầu/ngưỡng có thể đã thay đổi — luôn kiểm chứng số liệu hiện hành.*
