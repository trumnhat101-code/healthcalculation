/**
 * ════════════════════════════════════════════════════════════════
 *  SITE & MONETIZATION CONFIG — edit THIS file only.
 *  Mọi thứ liên quan tới kiếm tiền/đo lường gom về đây.
 *  Khi có ID thật: dán vào đúng ô bên dưới, mọi trang tự bật.
 * ════════════════════════════════════════════════════════════════
 */

/** Domain chính (đổi 1 chỗ thay vì sửa từng file). */
export const SITE_URL = 'https://healthcalculation.com';

// ─────────────────────────────────────────────────────────────────
//  GOOGLE ADSENSE
//  Dán publisher ID, ví dụ: 'ca-pub-1234567890123456'
//  Để '' → ads TẮT hoàn toàn (không render gì, an toàn trước khi được duyệt).
// ─────────────────────────────────────────────────────────────────
export const ADSENSE_CLIENT = '';

/** Tự bật khi ADSENSE_CLIENT đúng định dạng ca-pub-XXXX. */
export const adsenseEnabled = /^ca-pub-\d{10,}$/.test(ADSENSE_CLIENT);

// ─────────────────────────────────────────────────────────────────
//  GOOGLE SEARCH CONSOLE
//  Verify bằng thẻ meta: GSC > Settings > Ownership verification > HTML tag.
//  Dán phần content="..." của thẻ (chuỗi ~43 ký tự), KHÔNG dán cả thẻ.
//  Để '' → không render meta. (Verify bằng DNS thì bỏ qua ô này.)
// ─────────────────────────────────────────────────────────────────
export const GSC_VERIFICATION = '';

// ─────────────────────────────────────────────────────────────────
//  CLOUDFLARE WEB ANALYTICS (free, không cookie)
//  Lấy token ở dash.cloudflare.com > Analytics > Web Analytics.
//  Để '' → không nhúng gì.
// ─────────────────────────────────────────────────────────────────
export const CF_ANALYTICS_TOKEN = '';

// ─────────────────────────────────────────────────────────────────
//  AFFILIATE LINKS
//  Dán URL tracking thật vào từng chương trình.
//  Ô nào để '' → CTA của chương trình đó tự ẩn (không hiện link gãy).
// ─────────────────────────────────────────────────────────────────
export const AFF = {
  // Weight loss
  noom:            '',
  found:           '',
  // Meal kits
  hellofresh:      '',
  factor:          '',
  trifecta:        '',
  greenChef:       '',
  // Supplements
  transparentLabs: '',
  // Sleep / Mattress (payout cao)
  saatva:          '',
  nectar:          '',
  helix:           '',
} as const;

export type AffKey = keyof typeof AFF;
