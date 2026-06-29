/**
 * Dữ liệu pin Pinterest. Generator đọc file này để sinh ảnh + CSV.
 * Khi thêm calculator/activity mới → thêm 1 dòng vào đây.
 * (Activities mirror src/data/activities.ts — giữ slug/name/icon/met khớp.)
 */
export const SITE = 'https://healthcalculation.com';

// ── 14 calculator ──
export const CALCULATORS = [
  { slug: 'calorie-tdee-calculator', icon: '🔥', eyebrow: 'Free Calculator', title: 'Calorie & TDEE Calculator', sub: 'Find your daily calories in seconds',
    desc: 'Find exactly how many calories you need to lose, maintain, or gain weight. Free TDEE calculator using the clinically validated Mifflin-St Jeor formula — no sign-up. #caloriecalculator #tdee #weightloss #caloriedeficit', board: 'Weight Loss Calculators' },
  { slug: 'bmr-calculator', icon: '📈', eyebrow: 'Free Calculator', title: 'BMR Calculator', sub: 'How many calories you burn at rest',
    desc: 'Calculate your Basal Metabolic Rate with Mifflin-St Jeor and Harris-Benedict, plus your TDEE at every activity level. Free, no email. #bmr #metabolism #caloriecalculator #weightloss', board: 'Weight Loss Calculators' },
  { slug: 'bmi-calculator', icon: '⚖️', eyebrow: 'Free Calculator', title: 'BMI Calculator', sub: 'Check your Body Mass Index & range',
    desc: 'Check your BMI in seconds and see your healthy weight range by height. Free, private, no account needed. #bmicalculator #healthyweight #weightloss #fitnessgoals', board: 'Weight Loss Calculators' },
  { slug: 'macro-calculator', icon: '🥗', eyebrow: 'Free Calculator', title: 'Macro Calculator', sub: 'Your protein, carbs & fat targets',
    desc: 'Get your daily protein, carbs, and fat targets based on your goal — cutting, maintenance, or bulking. Free macro calculator. #macros #iifym #macrocalculator #flexibledieting', board: 'Fitness & Nutrition' },
  { slug: 'calorie-deficit-calculator', icon: '✂️', eyebrow: 'Free Calculator', title: 'Calorie Deficit Calculator', sub: 'Lose 0.5, 1, or 2 lbs per week',
    desc: 'See your daily calorie target to lose 0.5, 1, or 2 lbs a week, plus a realistic timeline to your goal weight. Free. #caloriedeficit #weightloss #fatloss #weightlossjourney', board: 'Weight Loss Calculators' },
  { slug: 'body-fat-calculator', icon: '📏', eyebrow: 'Free Calculator', title: 'Body Fat % Calculator', sub: 'U.S. Navy method — just a tape',
    desc: 'Estimate your body fat percentage with just a tape measure using the U.S. Navy method. Free, instant, no equipment. #bodyfat #bodycomposition #fitnessgoals #weightloss', board: 'Fitness & Nutrition' },
  { slug: 'waist-to-hip-ratio-calculator', icon: '📐', eyebrow: 'Free Calculator', title: 'Waist-to-Hip Ratio Calculator', sub: 'A key health-risk indicator',
    desc: 'Calculate your waist-to-hip ratio and see what it means for your health, based on WHO thresholds. Free and instant. #waisttohipratio #healthcheck #bodycomposition #wellness', board: 'Fitness & Nutrition' },
  { slug: 'sleep-calculator', icon: '🌙', eyebrow: 'Free Calculator', title: 'Sleep Calculator', sub: 'Best bedtime & wake-up time',
    desc: 'Wake up refreshed by timing your 90-minute sleep cycles. Enter your wake time to see the best bedtimes. Free sleep cycle calculator. #sleepcalculator #bettersleep #sleephygiene #selfcare', board: 'Sleep & Wellness' },
  { slug: 'protein-calculator', icon: '🥩', eyebrow: 'Free Calculator', title: 'Protein Calculator', sub: 'Daily protein for your goal',
    desc: 'Calculate your daily protein needs for weight loss, muscle gain, or healthy aging — based on ISSN guidelines. Free. #protein #proteinintake #musclegain #nutrition', board: 'Fitness & Nutrition' },
  { slug: 'water-intake-calculator', icon: '💧', eyebrow: 'Free Calculator', title: 'Water Intake Calculator', sub: 'How much water you need daily',
    desc: 'Find your daily water target based on your weight and activity level. Free hydration calculator. #waterintake #hydration #healthyhabits #drinkmorewater', board: 'Sleep & Wellness' },
  { slug: 'heart-rate-zone-calculator', icon: '💓', eyebrow: 'Free Calculator', title: 'Heart Rate Zone Calculator', sub: 'Your 5 training zones by age',
    desc: 'Find your max heart rate and 5 training zones for fat-burn and cardio, using the Tanaka formula. Free. #heartrate #cardio #trainingzones #fitness', board: 'Fitness & Nutrition' },
  { slug: 'calories-burned-calculator', icon: '🔥', eyebrow: 'Free Calculator', title: 'Calories Burned Calculator', sub: '30+ activities by weight & time',
    desc: 'See how many calories you burn walking, running, swimming, mowing the lawn, and 30+ more activities by your weight and time. Free MET-based calculator. #caloriesburned #exercise #weightloss #cardio', board: 'Calories Burned by Activity' },
  { slug: 'one-rep-max-calculator', icon: '🏋️', eyebrow: 'Free Calculator', title: 'One-Rep Max Calculator', sub: 'Estimate your 1RM for any lift',
    desc: 'Calculate your one-rep max for bench, squat, and deadlift from your reps, with a full percentage chart. Free. #onerepmax #1rm #strengthtraining #liftingweights', board: 'Fitness & Nutrition' },
  { slug: 'ideal-weight-calculator', icon: '🎯', eyebrow: 'Free Calculator', title: 'Ideal Weight Calculator', sub: 'Healthy target by height & gender',
    desc: 'Find your healthy target weight range using 4 trusted medical formulas. Free ideal body weight calculator. #idealweight #healthyweight #weightlossjourney #healthgoals', board: 'Weight Loss Calculators' },
];

// ── 30 activity (mirror src/data/activities.ts) ──
export const ACTIVITIES = [
  { slug: 'mowing-lawn', name: 'Mowing the Lawn', icon: '🌱', met: 5.0 },
  { slug: 'house-cleaning', name: 'Cleaning the House', icon: '🧹', met: 3.3 },
  { slug: 'jumping-rope', name: 'Jumping Rope', icon: '🪢', met: 11.8 },
  { slug: 'swimming', name: 'Swimming', icon: '🏊', met: 7.0 },
  { slug: 'cycling', name: 'Cycling', icon: '🚴', met: 8.0 },
  { slug: 'walking', name: 'Walking', icon: '🚶', met: 4.3 },
  { slug: 'running', name: 'Running', icon: '🏃', met: 9.8 },
  { slug: 'hiking', name: 'Hiking', icon: '🥾', met: 6.0 },
  { slug: 'rowing-machine', name: 'Rowing Machine', icon: '🚣', met: 7.0 },
  { slug: 'elliptical', name: 'Elliptical Trainer', icon: '🌀', met: 5.0 },
  { slug: 'shoveling-snow', name: 'Shoveling Snow', icon: '❄️', met: 6.0 },
  { slug: 'raking-leaves', name: 'Raking Leaves', icon: '🍂', met: 3.8 },
  { slug: 'painting', name: 'Painting a Room', icon: '🎨', met: 4.5 },
  { slug: 'gardening', name: 'Gardening', icon: '🌷', met: 3.8 },
  { slug: 'walking-the-dog', name: 'Walking the Dog', icon: '🐕', met: 3.0 },
  { slug: 'climbing-stairs', name: 'Climbing Stairs', icon: '🪜', met: 8.8 },
  { slug: 'jumping-jacks', name: 'Jumping Jacks', icon: '🤸', met: 8.0 },
  { slug: 'dancing', name: 'Dancing', icon: '💃', met: 6.5 },
  { slug: 'basketball', name: 'Playing Basketball', icon: '🏀', met: 6.5 },
  { slug: 'weight-lifting', name: 'Weight Lifting', icon: '🏋️', met: 5.0 },
  { slug: 'yoga', name: 'Yoga', icon: '🧘', met: 3.0 },
  { slug: 'pilates', name: 'Pilates', icon: '🤸', met: 3.0 },
  { slug: 'boxing', name: 'Boxing', icon: '🥊', met: 7.8 },
  { slug: 'kayaking', name: 'Kayaking', icon: '🛶', met: 5.0 },
  { slug: 'skiing', name: 'Skiing', icon: '⛷️', met: 7.0 },
  { slug: 'tennis', name: 'Playing Tennis', icon: '🎾', met: 7.3 },
  { slug: 'golfing', name: 'Golfing', icon: '⛳', met: 4.8 },
  { slug: 'soccer', name: 'Playing Soccer', icon: '⚽', met: 7.0 },
  { slug: 'hiit', name: 'HIIT Workout', icon: '⚡', met: 8.0 },
  { slug: 'rock-climbing', name: 'Rock Climbing', icon: '🧗', met: 8.0 },
];
