/**
 * Lifts cho cụm "[bài tập] calculator" (1RM theo từng động tác).
 * Mỗi item sinh 1 trang tĩnh tại /strength/<slug>.
 * Thuần fitness, không YMYL. Pattern giống src/data/activities.ts.
 *
 * Thêm bài tập = thêm 1 object → tự có trang + sitemap.
 */
export interface Lift {
  slug: string;     // url: /strength/<slug>
  name: string;     // "Bench Press" — dùng trong tiêu đề
  phrase: string;   // cụm tự nhiên: "bench press"
  icon: string;     // emoji
  intro: string;    // 1–2 câu mở đầu
  faq: { q: string; a: string }[];
}

export const LIFTS: Lift[] = [
  {
    slug: 'bench-press',
    name: 'Bench Press',
    phrase: 'bench press',
    icon: '🏋️',
    intro: 'Estimate your bench press one-rep max from any set, then get exact training weights for every percentage of your 1RM.',
    faq: [
      { q: 'How do I calculate my bench press max?', a: 'Enter a weight you benched and the number of clean reps you completed. The calculator averages the Epley, Brzycki, and Lander formulas to estimate your one-rep max. Use a 2–10 rep set for best accuracy.' },
      { q: 'What is a good bench press?', a: 'As a rough guide for a male lifter, benching about 0.75× bodyweight is a solid novice goal, 1× bodyweight is intermediate, and 1.5× bodyweight is advanced. Women typically lift around 0.5–0.7× these numbers. Standards vary with age and training history.' },
      { q: 'Should I test a true 1-rep max bench?', a: 'Not often, and never without a spotter or safety arms. A calculated 1RM from a 3–5 rep set is accurate enough for programming, which is why most lifters rarely test a true max.' },
    ],
  },
  {
    slug: 'squat',
    name: 'Squat',
    phrase: 'squat',
    icon: '🦵',
    intro: 'Estimate your back squat one-rep max from your reps, then get training weights for strength, hypertrophy, and endurance work.',
    faq: [
      { q: 'How do I calculate my squat max?', a: 'Enter the weight you squatted and the reps completed. The calculator estimates your 1RM by averaging three validated formulas. A 3–6 rep set gives the most accurate estimate for heavy compound lifts like the squat.' },
      { q: 'What is a good squat?', a: 'For a male lifter, roughly 1.25× bodyweight is a good novice target, 1.5× is intermediate, and 2× bodyweight is advanced. Women typically squat around 0.7–0.9× these figures. Depth, age, and leverages all matter.' },
      { q: 'Why is my squat 1RM lower than expected at high reps?', a: 'Rep-based estimates lose accuracy above 10 reps because leg endurance and conditioning start to dominate over pure strength. Use a heavier 3–6 rep set for a more reliable squat 1RM.' },
    ],
  },
  {
    slug: 'deadlift',
    name: 'Deadlift',
    phrase: 'deadlift',
    icon: '🏋️',
    intro: 'Estimate your deadlift one-rep max from any set, then build your training around exact percentages of your 1RM.',
    faq: [
      { q: 'How do I calculate my deadlift max?', a: 'Enter the weight and the number of reps. The calculator averages the Epley, Brzycki, and Lander formulas. Because the deadlift is very taxing, a 2–5 rep set usually gives a more reliable estimate than high-rep sets.' },
      { q: 'What is a good deadlift?', a: 'For a male lifter, about 1.5× bodyweight is a good novice goal, 2× is intermediate, and 2.5× bodyweight is advanced. Women typically pull around 0.8–1.1× these numbers. The deadlift is usually the heaviest of the main lifts.' },
      { q: 'Is grip strength limiting my deadlift?', a: 'Often, yes. If your back and legs feel strong but the bar slips, your grip may be the bottleneck. Mixed grip, hook grip, or straps for back-off sets can let you train the target muscles closer to their true capacity.' },
    ],
  },
  {
    slug: 'overhead-press',
    name: 'Overhead Press',
    phrase: 'overhead press',
    icon: '💪',
    intro: 'Estimate your overhead (shoulder) press one-rep max from your reps, then get percentage-based training weights.',
    faq: [
      { q: 'How do I calculate my overhead press max?', a: 'Enter the weight pressed and the reps completed; the calculator averages three 1RM formulas. The strict overhead press is a smaller-muscle lift, so a 3–6 rep set gives a good estimate.' },
      { q: 'What is a good overhead press?', a: 'For a male lifter, roughly 0.5× bodyweight is a novice goal, 0.7× is intermediate, and 0.9–1× bodyweight is advanced. Women typically press around 0.45–0.6× these figures. The overhead press is the lightest of the main barbell lifts.' },
      { q: 'Why is my overhead press so much weaker than my bench?', a: 'That is normal — the overhead press uses a smaller muscle base and a longer, less mechanically advantaged range than the bench press. A strict press around 60–70% of your bench is typical.' },
    ],
  },
  {
    slug: 'barbell-row',
    name: 'Barbell Row',
    phrase: 'barbell row',
    icon: '🚣',
    intro: 'Estimate your barbell row one-rep max from your reps, then program your back training with exact percentages.',
    faq: [
      { q: 'How do I calculate my barbell row max?', a: 'Enter the weight rowed and the clean reps completed. The calculator averages three validated formulas. Because rows are often trained for moderate reps, a 5–8 rep set works well for estimating your 1RM.' },
      { q: 'What is a good barbell row?', a: 'For a male lifter, roughly 0.75× bodyweight is a novice goal, 1× bodyweight is intermediate, and 1.25× is advanced. Strict form (minimal body English) lowers these numbers but builds more back muscle.' },
      { q: 'Should my row match my bench press?', a: 'A balanced lifter can usually row close to their bench press for the same reps. If your row lags well behind, prioritizing back volume helps shoulder health and pressing strength.' },
    ],
  },
  {
    slug: 'front-squat',
    name: 'Front Squat',
    phrase: 'front squat',
    icon: '🏋️',
    intro: 'Estimate your front squat one-rep max from your reps, then get exact training weights for each percentage.',
    faq: [
      { q: 'How do I calculate my front squat max?', a: 'Enter the weight and reps; the calculator averages three 1RM formulas. The front squat is limited by upper-back and core endurance, so a 3–5 rep set gives the cleanest estimate.' },
      { q: 'How does the front squat compare to the back squat?', a: 'Most lifters front squat around 80–85% of their back squat. If your front squat is much lower, upper-back strength or wrist/rack mobility is usually the limiting factor rather than leg strength.' },
      { q: 'Is the front squat better than the back squat?', a: 'Neither is universally better. The front squat emphasizes the quads and upper back and is gentler on the lower back, while the back squat allows heavier loading. Many programs use both.' },
    ],
  },
  {
    slug: 'incline-bench-press',
    name: 'Incline Bench Press',
    phrase: 'incline bench press',
    icon: '🏋️',
    intro: 'Estimate your incline bench press one-rep max from your reps, then program your upper-chest work by percentage.',
    faq: [
      { q: 'How do I calculate my incline bench max?', a: 'Enter the weight and reps completed; the calculator averages three validated 1RM formulas. A 3–8 rep set is ideal, since the incline press is frequently trained in that range.' },
      { q: 'How much should I incline bench vs flat bench?', a: 'Most lifters incline press around 70–85% of their flat bench, depending on bench angle. A steeper incline shifts more load to the shoulders and reduces the weight you can handle.' },
      { q: 'Does incline bench build the upper chest?', a: 'Yes — the incline angle increases upper-chest (clavicular head) involvement compared with flat bench, making it a popular accessory for a fuller-looking chest.' },
    ],
  },
  {
    slug: 'romanian-deadlift',
    name: 'Romanian Deadlift',
    phrase: 'Romanian deadlift',
    icon: '🦵',
    intro: 'Estimate your Romanian deadlift (RDL) one-rep max from your reps, then program your hamstring and glute work by percentage.',
    faq: [
      { q: 'How do I calculate my RDL max?', a: 'Enter the weight and reps; the calculator averages three 1RM formulas. RDLs are usually trained for 6–12 reps, so enter a set in that range for a useful estimate.' },
      { q: 'How heavy should my Romanian deadlift be?', a: 'Most lifters use about 60–70% of their conventional deadlift for RDL working sets, because the strict hip-hinge and constant hamstring tension limit the load. Form and stretch matter more than maximal weight here.' },
      { q: 'RDL vs conventional deadlift — what is the difference?', a: 'The RDL keeps the legs relatively straight and the bar moving from a standing position, maximizing hamstring and glute stretch. The conventional deadlift starts from the floor and uses more quads and back.' },
    ],
  },
  {
    slug: 'hip-thrust',
    name: 'Hip Thrust',
    phrase: 'hip thrust',
    icon: '🍑',
    intro: 'Estimate your barbell hip thrust one-rep max from your reps, then program your glute training by percentage.',
    faq: [
      { q: 'How do I calculate my hip thrust max?', a: 'Enter the weight and reps; the calculator averages three 1RM formulas. Hip thrusts are typically trained for 8–15 reps, so enter a set in that range — note that estimates are less precise at very high reps.' },
      { q: 'How much can the average person hip thrust?', a: 'The glutes are powerful, so trained lifters often hip thrust 2–3× bodyweight for reps — much more than they squat or deadlift. Range of motion and a full glute squeeze matter more than chasing maximal load.' },
      { q: 'Is the hip thrust the best glute exercise?', a: 'It is one of the most effective for direct glute loading because peak tension occurs at full hip extension. Combining it with squats and deadlifts gives the most complete glute and lower-body development.' },
    ],
  },
  {
    slug: 'power-clean',
    name: 'Power Clean',
    phrase: 'power clean',
    icon: '⚡',
    intro: 'Estimate your power clean one-rep max from your reps, then program your explosive pulls by percentage of 1RM.',
    faq: [
      { q: 'How do I calculate my power clean max?', a: 'Enter the weight and reps. Note that the power clean is explosive and technique-limited, so 1RM formulas are only a rough guide — use low-rep sets (1–3) for the most meaningful estimate.' },
      { q: 'What is a good power clean?', a: 'For a male lifter, roughly 0.8× bodyweight is a solid intermediate power clean, with advanced lifters reaching 1–1.2× bodyweight. Technique often limits the lift more than raw strength.' },
      { q: 'Are 1RM formulas accurate for the power clean?', a: 'Less so than for grinding lifts like the squat or bench. Olympic lifts are fast and technical, so a missed rep is usually about bar speed and positioning rather than gradual fatigue. Treat the estimate as a ballpark.' },
    ],
  },
];

export const getLift = (slug: string) => LIFTS.find((l) => l.slug === slug);
