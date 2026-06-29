# Chiến lược từ khóa & traffic — HealthCalculation

> Mục tiêu: domain mới (0 authority) có traffic THẬT từ SEO để nuôi AdSense + Affiliate.
> Tài liệu dựa trên **phân tích SERP thật** (tháng 6/2026), không phải số phỏng đoán.

---

## 0. Insight cốt lõi

`Tiền = Traffic × RPM`. Site đã build tốt nhưng traffic = 0. Nút thắt **duy nhất** là rank.

**Sự thật từ SERP:** các head term ("calorie calculator", "bmi calculator", "max heart rate") bị
**giant thống trị** (calculator.net, Mayo, Healthline, MyFitnessPal, AHA, CDC…). Domain mới
**không thể** rank các từ này trong 6–18 tháng đầu. Đừng đối đầu trực diện.

**Cơ hội:** các truy vấn **đuôi dài, ý định cụ thể** có SERP YẾU (toàn site nhỏ, blog, cả Quora/
Facebook lọt top = Google chưa hài lòng). Đây là chỗ domain mới chen được.

---

## 1. Bằng chứng SERP (đã kiểm tra)

| Truy vấn | Ai đang top | Độ khó | Kết luận |
|---|---|---|---|
| `calorie calculator` | calculator.net, Mayo, USDA, MyFitnessPal, Healthline | 🔴 Rất cao | **Bỏ qua** — không đối đầu |
| `bmi calculator` / `max heart rate by age` | CDC, WHO, AHA, Cleveland, Harvard, Hopkins | 🔴 Rất cao | **Bỏ qua** head term |
| `calories burned mowing the lawn` | captaincalculator, vcalc, fitnessvolt, **blog NZ, Facebook** | 🟢 Thấp | **LÀM NGAY** ✅ |
| `calories burned cleaning house` | WebMD slideshow, captaincalculator, **blog dọn nhà** | 🟢 Thấp | **LÀM NGAY** ✅ |
| `waist to hip ratio chart by age` | Wikipedia, Healthline, **fitnessnorms, whyiexercise, etoolsage** | 🟡 TB-thấp | Nên làm ✅ |
| `ideal weight for 5 foot 4 female` | Banner, AARP, **healthyeater (site nhỏ)** | 🟡 TB | Nên làm (programmatic) |
| `how much protein per day for a woman over 60` | PMC, NCOA, Mayo, **Quora lọt top** | 🟡 TB | Nên làm (guide) |
| `how many calories to lose 2 pounds a week` | calculator.net, Ro, Macros Inc, **Quora** | 🟡 TB | Nên làm (guide+tool) |
| `bench press max calculator` | StrengthLevel, M&S, NASM, Omni | 🟠 TB-cao | Để sau |

**Quy luật đọc SERP:** thấy Quora/Reddit/Facebook/blog cá nhân lọt top 10 → Google đang
"vơ bèo vạt tép" → **bạn chen được**. Thấy toàn .gov/.org/Mayo/Healthline → **tránh**.

---

## 2. Ba pattern thắng (xếp theo ROI)

### 🥇 Pattern 1 — "calories burned [hoạt động]" (CAO NHẤT — đã bắt đầu build)
- SERP yếu, **long-tail vô tận** (mỗi hoạt động = 1 trang), 1 "engine" MET dùng chung.
- Ý định rõ: người ta muốn **bảng tra calo theo cân nặng** → ta cho đúng thứ đó (build-time table).
- Đã có sẵn tool `calories-burned-calculator` làm engine.
- **Đã build:** hệ thống động `src/pages/calories-burned/[activity].astro` +
  `src/data/activities.ts` → **30 trang** (mowing-lawn, house-cleaning, jumping-rope, swimming,
  cycling, walking, running, hiking, rowing-machine, elliptical, shoveling-snow, raking-leaves,
  painting, gardening, walking-the-dog, climbing-stairs, jumping-jacks, dancing, basketball,
  weight-lifting, yoga, pilates, boxing, kayaking, skiing, tennis, golfing, soccer, hiit,
  rock-climbing). Tất cả interlink + hub-and-spoke từ `calories-burned-calculator`.
- **Mở rộng tiếp (lên 40–50):** chỉ thêm object vào `activities.ts` → tự có trang + sitemap.
  Ứng viên: `pickleball`, `ice-skating`, `roller-skating`, `chopping-wood`, `moving-furniture`,
  `playing-with-kids`, `treadmill-incline`, `assault-bike`, `stationary-bike`, `crossfit`,
  `martial-arts`, `surfing`, `paddleboarding`, `badminton`, `volleyball`.

### 🥈 Pattern 2 — "[chỉ số] cho [tuổi/giới/chiều cao]" (programmatic)
- `ideal weight for [height] [gender]`, `protein for [age] [gender]`, `bmi for women over [age]`,
  `target heart rate for [age]`, `waist-to-hip ratio for women by age`.
- Cách làm giống Pattern 1: 1 template động + 1 mảng data (height/age combos) → hàng chục trang.
- Tận dụng tool sẵn có: ideal-weight, protein, bmi, heart-rate-zone, waist-to-hip-ratio.

### 🥈 Pattern 2b — Cụm STRENGTH/GYM (đã build — thuần fitness, 0 YMYL)
- Pattern hub-and-spoke giống calories-burned. Hub = `one-rep-max-calculator`.
- **Đã build:** `src/pages/strength/[lift].astro` + `src/data/lifts.ts` → **10 trang**
  (bench-press, squat, deadlift, overhead-press, barbell-row, front-squat,
  incline-bench-press, romanian-deadlift, hip-thrust, power-clean). Mỗi trang: 1RM
  calculator + percentage chart tĩnh (index được) + FAQ + strength standards + link chéo
  tới protein/macro/calorie (đẩy về trang có affiliate).
- Nhắm keyword "bench press calculator", "squat 1rm", "deadlift max"… SERP = site fitness
  (StrengthLevel, M&S), KHÔNG phải authority y khoa → winnable.
- **Mở rộng:** thêm lift vào `lifts.ts` (leg-press, lat-pulldown, dumbbell-press, clean-and-jerk…).

> **Nguyên tắc định hướng (quan trọng):** Site cố tình nghiêng về **fitness calculator
> (non-medical, nhẹ YMYL)** — body-composition, exercise, strength. KHÔNG build tool y khoa
> (pregnancy/ovulation/due-date/medical-condition) dù brief gốc có liệt kê. Vài trang lệch
> "rủi ro bệnh" (waist-to-hip, bmi-women, body-fat, heart-rate guide) nên reframe sang khung
> fitness/giảm cân thay vì y khoa.

### 🥉 Pattern 3 — Guide trả lời câu hỏi (informational, hỗ trợ E-E-A-T)
- "how many calories to lose 2 lbs a week", "is mowing the lawn good exercise",
  "how much protein after 60". Có Quora lọt top = cửa dễ.
- Mỗi guide link xuống tool tương ứng → đẩy người đọc vào trang có affiliate.
- Đã có 14 guide; viết thêm theo câu hỏi đuôi dài bám cụm calories-burned/protein/weight-loss.

---

## 3. Lộ trình ưu tiên

**Phase 1 — Cụm calories-burned**
- [x] Hệ thống động + bảng tra build-time + hub-and-spoke.
- [x] 30 trang hoạt động, mỗi trang có FAQ + link chéo tới calorie/deficit calculator.
- [ ] Mở rộng lên 40–50 hoạt động (thêm vào `activities.ts`).

**Phase 2 — Programmatic "[chỉ số] theo tuổi/giới/chiều cao"**
- [ ] Template động cho ideal-weight theo height×gender (vd 5'0"–6'2" × nam/nữ).
- [ ] Tương tự cho protein-by-age, target-heart-rate-by-age.

**Phase 3 — Guide cụm + internal link + backlink**
- [ ] 10–15 guide câu hỏi đuôi dài, mỗi cái link tới tool.
- [ ] Bắt đầu xây backlink (digital PR, HARO, guest post ngách fitness).

---

## 4. Checklist on-page cho mỗi trang "winnable"

1. **Khớp ý định:** truy vấn "calories burned X" muốn **con số + bảng theo cân nặng** → đặt
   calculator + bảng tĩnh **trên đầu**, không bắt cuộn.
2. **Bảng/dữ liệu render ở build-time** (trong HTML), không chỉ bằng JS → Google index được.
3. Title + H1 chứa đúng cụm từ khóa ("Calories Burned Mowing the Lawn").
4. Schema `WebApplication` + `FAQPage` (đã tự động qua ToolLayout).
5. Internal link: trang con ↔ hub ↔ calorie/deficit calculator (đã làm trong cụm).
6. Nội dung gốc, dẫn nguồn (Compendium of Physical Activities) → E-E-A-T cho YMYL.
7. Disclaimer y tế (đã có component).

---

## 5. Đo lường (làm trước khi viết thêm)

- Bật **Cloudflare Web Analytics** (điền token trong `src/config/site.ts`).
- Verify **Google Search Console** → submit `sitemap-index.xml`.
- Sau 4–8 tuần: xem GSC "Performance" → trang nào có **impressions nhưng vị trí 8–20** =
  "gần top", ưu tiên cải thiện (thêm nội dung, internal link) → ROI cao hơn viết trang mới.
- Nhân rộng pattern nào bắt đầu có impression; bỏ pattern nào 0 impression sau 3 tháng.

---

## 6. Việc KHÔNG nên làm

- ❌ Không nhắm head term ("calorie calculator") — phí công.
- ❌ Không build thêm calculator phổ thông trùng với 14 cái đã có khi chúng chưa rank.
- ❌ Không mua traffic / tự click → ban AdSense.
- ❌ Không viết thin content chỉ để có trang — Google Helpful Content sẽ phạt cả site.

---

*Cập nhật khi có dữ liệu GSC thật. SERP có thể đổi — kiểm chứng lại định kỳ.*
