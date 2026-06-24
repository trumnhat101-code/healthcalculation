/**
 * Activities cho cụm "calories burned [hoạt động]".
 * Mỗi item sinh 1 trang tĩnh tại /calories-burned/<slug>.
 * MET lấy từ Compendium of Physical Activities (Ainsworth et al., 2011).
 *
 * Thêm hoạt động mới = thêm 1 object vào mảng này → tự có trang + sitemap.
 * Ưu tiên hoạt động có SERP yếu + long-tail rõ (mowing lawn, cleaning…).
 */
export interface Activity {
  slug: string;      // url: /calories-burned/<slug>
  name: string;      // "Mowing the Lawn" — dùng trong tiêu đề
  phrase: string;    // cụm tự nhiên: "mowing the lawn"
  met: number;       // MET đại diện (cường độ trung bình)
  metRange?: string; // ghi chú dải cường độ
  icon: string;      // emoji / HTML entity
  intro: string;     // 1–2 câu mở đầu
  faq: { q: string; a: string }[];
}

export const ACTIVITIES: Activity[] = [
  {
    slug: 'mowing-lawn',
    name: 'Mowing the Lawn',
    phrase: 'mowing the lawn',
    met: 5.0,
    metRange: 'Push mower 4.5–6.0 MET · Riding mower ~2.5 MET',
    icon: '🌱',
    intro: 'Pushing a lawn mower is a surprisingly effective full-body workout. Use the calculator below to see exactly how many calories you burn mowing, based on your weight and time spent.',
    faq: [
      { q: 'How many calories does mowing the lawn burn?', a: 'A 180 lb person burns roughly 410 calories per hour pushing a lawn mower (MET 5.0). Lighter individuals burn less and heavier individuals more, since calorie burn scales with body weight.' },
      { q: 'Is mowing the lawn good exercise?', a: 'Yes. Pushing a mower is moderate-intensity cardio (about 5 METs) that also engages your legs, core, and arms. A typical 45–60 minute mow can count toward your weekly 150 minutes of moderate activity.' },
      { q: 'Does a push mower burn more calories than a riding mower?', a: 'Significantly. A push mower runs around 5 METs while a riding mower is closer to 2.5 METs — roughly the same as light housework — so you burn about half as many calories on a riding mower.' },
    ],
  },
  {
    slug: 'house-cleaning',
    name: 'Cleaning the House',
    phrase: 'cleaning the house',
    met: 3.3,
    metRange: 'Light tidying 2.5 MET · Vigorous scrubbing/mopping 3.5–4.0 MET',
    icon: '🧹',
    intro: 'Housework counts as real movement (NEAT). Enter your weight and how long you clean to see how many calories vacuuming, mopping, and scrubbing actually burn.',
    faq: [
      { q: 'How many calories does cleaning the house burn?', a: 'The average person burns about 170–300 calories per hour cleaning, depending on intensity and body weight. Vigorous tasks like scrubbing floors or mopping burn the most.' },
      { q: 'Can cleaning help you lose weight?', a: 'Cleaning contributes to NEAT (non-exercise activity thermogenesis), which can account for hundreds of extra calories burned per day. It is not a substitute for structured exercise but it adds up meaningfully over a week.' },
      { q: 'Which cleaning tasks burn the most calories?', a: 'Scrubbing floors on hands and knees, mopping, and moving furniture burn the most (3.5–4+ METs). Dusting and light tidying burn the least (around 2.5 METs).' },
    ],
  },
  {
    slug: 'jumping-rope',
    name: 'Jumping Rope',
    phrase: 'jumping rope',
    met: 11.8,
    metRange: 'Moderate pace 11.8 MET · Fast pace 12.3 MET',
    icon: '🪢',
    intro: 'Jumping rope is one of the most calorie-dense activities you can do. See how many calories you burn skipping rope based on your weight and duration.',
    faq: [
      { q: 'How many calories does jumping rope burn?', a: 'A 155 lb person burns roughly 372 calories in 30 minutes of moderate rope jumping (MET 11.8) — comparable to running at a fast pace, making it one of the most time-efficient calorie burners.' },
      { q: 'Is jumping rope better than running?', a: 'Per minute, jumping rope burns roughly the same calories as a brisk-to-fast run, but in a much smaller space and with added coordination and shoulder work. Many people find it harder to sustain for long periods.' },
      { q: 'How long should I jump rope to lose weight?', a: 'Even 10–15 minutes of rope work burns 120–185 calories for most adults. Building to 20–30 minutes a few times a week, paired with a calorie deficit, supports steady fat loss.' },
    ],
  },
  {
    slug: 'swimming',
    name: 'Swimming',
    phrase: 'swimming',
    met: 7.0,
    metRange: 'Leisurely 5.8 MET · Moderate laps 7.0 MET · Vigorous laps 9.8 MET',
    icon: '🏊',
    intro: 'Swimming is a full-body, low-impact workout. Use the calculator to estimate calories burned swimming laps based on your weight, time, and intensity.',
    faq: [
      { q: 'How many calories does swimming burn?', a: 'Swimming moderate laps (MET 7.0) burns about 423 calories per hour for a 155 lb person. Vigorous laps can push that past 590 calories per hour.' },
      { q: 'Is swimming good for weight loss?', a: 'Yes — it burns significant calories while being gentle on the joints, making it ideal for people with injuries or higher body weight. Pair it with a calorie deficit for fat loss.' },
      { q: 'Which swim stroke burns the most calories?', a: 'Butterfly burns the most, followed by freestyle (front crawl) at a fast pace, then breaststroke and backstroke. Intensity and pace matter more than stroke choice for most swimmers.' },
    ],
  },
  {
    slug: 'cycling',
    name: 'Cycling',
    phrase: 'cycling',
    met: 8.0,
    metRange: 'Leisure 4.0 MET · Moderate 12–14 mph 8.0 MET · Vigorous 14–16 mph 10.0 MET',
    icon: '🚴',
    intro: 'Whether you ride outdoors or on a stationary bike, cycling is excellent low-impact cardio. Estimate calories burned cycling by your weight, time, and pace.',
    faq: [
      { q: 'How many calories does cycling burn?', a: 'Cycling at a moderate 12–14 mph (MET 8.0) burns about 484 calories per hour for a 155 lb person. Faster riding and hills increase the burn substantially.' },
      { q: 'Is a stationary bike as good as outdoor cycling?', a: 'For calorie burn, yes — a stationary bike at the same effort level burns comparable calories. Outdoor riding adds wind resistance and terrain, which can raise the burn.' },
      { q: 'How long should I cycle to lose weight?', a: '30–60 minutes of moderate cycling most days, combined with a calorie deficit, supports steady weight loss. Consistency matters more than any single long ride.' },
    ],
  },
  {
    slug: 'walking',
    name: 'Walking',
    phrase: 'walking',
    met: 4.3,
    metRange: 'Slow 2.8 MET · Moderate 3.5 mph 4.3 MET · Brisk 4.5 mph 6.3 MET',
    icon: '🚶',
    intro: 'Walking is the most accessible exercise there is. See how many calories walking burns based on your weight, pace, and time — then read our in-depth walking guide.',
    faq: [
      { q: 'How many calories does walking burn?', a: 'Walking at a moderate 3.5 mph (MET 4.3) burns about 260 calories per hour for a 155 lb person. Brisk walking at 4.5 mph raises that to roughly 380 calories per hour.' },
      { q: 'How many calories do 10,000 steps burn?', a: '10,000 steps is roughly 4–5 miles and burns about 300–500 calories for most adults, depending on body weight and pace.' },
      { q: 'Is walking enough to lose weight?', a: 'Yes, when paired with a modest calorie deficit. Walking 30–60 minutes daily is sustainable, low-impact, and adds up to meaningful weekly calorie expenditure.' },
    ],
  },
  {
    slug: 'running',
    name: 'Running',
    phrase: 'running',
    met: 9.8,
    metRange: '5 mph 8.3 MET · 6 mph 9.8 MET · 7.5 mph 12.5 MET',
    icon: '🏃',
    intro: 'Running is one of the highest calorie-burning activities per minute. Estimate calories burned running based on your weight, pace, and distance or time.',
    faq: [
      { q: 'How many calories does running burn?', a: 'Running at 6 mph (MET 9.8) burns about 593 calories per hour for a 155 lb person. Faster paces and hills increase the burn.' },
      { q: 'How many calories does running a mile burn?', a: 'A rough rule is that running burns about 100 calories per mile for a 155 lb person, though this rises with body weight and pace.' },
      { q: 'Is running or walking better for weight loss?', a: 'Running burns more calories per minute, but walking is easier to sustain and gentler on joints. The best choice is the one you will do consistently.' },
    ],
  },
  {
    slug: 'hiking',
    name: 'Hiking',
    phrase: 'hiking',
    met: 6.0,
    metRange: 'Hills/uneven terrain 5.3–6.0 MET · With heavy pack 7.8 MET',
    icon: '🥾',
    intro: 'Hiking combines cardio with the added work of elevation and terrain. Estimate the calories you burn hiking based on your weight, time, and effort.',
    faq: [
      { q: 'How many calories does hiking burn?', a: 'Hiking on hills (MET 6.0) burns about 363 calories per hour for a 155 lb person. Carrying a heavy backpack or climbing steep grades can push this to 470+ calories per hour.' },
      { q: 'Does hiking burn more calories than walking?', a: 'Yes. Elevation gain, uneven terrain, and a backpack all raise the MET above flat walking, so hiking burns roughly 30–80% more calories than a flat walk at the same speed.' },
      { q: 'Is hiking good for weight loss?', a: 'Hiking is excellent for weight loss — it burns substantial calories, is low-impact on flat sections, and is enjoyable enough that many people do it for hours.' },
    ],
  },
  {
    slug: 'rowing-machine',
    name: 'Rowing Machine',
    phrase: 'rowing',
    met: 7.0,
    metRange: 'Moderate 7.0 MET · Vigorous 8.5 MET',
    icon: '🚣',
    intro: 'The rowing machine is a full-body, low-impact workout that hits legs, back, and arms. Estimate calories burned rowing by your weight, time, and intensity.',
    faq: [
      { q: 'How many calories does the rowing machine burn?', a: 'Moderate rowing (MET 7.0) burns about 423 calories per hour for a 155 lb person; vigorous rowing can exceed 515 calories per hour.' },
      { q: 'Is the rowing machine good for weight loss?', a: 'Yes — rowing engages about 85% of your muscles and burns significant calories while being gentle on the joints, making it efficient for fat loss when paired with a calorie deficit.' },
      { q: 'How long should I row to lose weight?', a: '20–40 minutes of steady rowing several times a week, combined with a calorie deficit, supports weight loss. Interval rowing can raise the burn in less time.' },
    ],
  },
  {
    slug: 'elliptical',
    name: 'Elliptical Trainer',
    phrase: 'using the elliptical',
    met: 5.0,
    metRange: 'Moderate 5.0 MET · Vigorous ~7.0 MET',
    icon: '🏋️',
    intro: 'The elliptical delivers low-impact cardio that spares your knees and hips. Estimate the calories you burn on the elliptical based on your weight and time.',
    faq: [
      { q: 'How many calories does the elliptical burn?', a: 'A moderate elliptical session (MET 5.0) burns about 302 calories per hour for a 155 lb person. Raising resistance and incline increases the burn.' },
      { q: 'Is the elliptical good for weight loss?', a: 'Yes. The elliptical burns solid calories with minimal joint impact, which makes it sustainable for longer sessions and for people with knee or hip concerns.' },
      { q: 'Elliptical vs treadmill — which burns more?', a: 'A treadmill at a run typically burns more calories per minute, but the elliptical is lower-impact. At equal perceived effort the difference is small.' },
    ],
  },
];

export const getActivity = (slug: string) => ACTIVITIES.find(a => a.slug === slug);
