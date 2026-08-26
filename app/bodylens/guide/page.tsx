import type { Metadata } from "next";
import Link from "next/link";
import FeatureShot from "./FeatureShot";

export const metadata: Metadata = {
  title: "Guide",
  description: "A closer look at how BodyLens actually works, feature by feature.",
};

interface GuideSection {
  slug: string;
  title: string;
  image: string;
  alt: string;
  paragraphs: string[];
}

const SECTIONS: GuideSection[] = [
  {
    slug: "dashboard",
    title: "Your day at a glance",
    image: "/bodylens/guide/dashboard.jpg",
    alt: "BodyLens Today tab showing three progress rings for calories, protein, and steps",
    paragraphs: [
      "The Today tab is built around three rings — calories consumed, protein, and steps — each measured against your daily target. If you haven't set a target yet, the rings use sensible defaults so they're never just empty.",
      "Your calorie deficit or surplus updates in real time as you log food, with no manual math. And even before anything syncs from a wearable, BodyLens estimates your baseline calorie burn (BMR) from your profile, so the number is never stuck at zero for a whole day.",
      "Five quick-action icons sit in the top right: Estimate Burn, Health Sync, Manual Log (weight, steps, sleep, activities), AI Food Scan, and a shortcut to your Diary.",
    ],
  },
  {
    slug: "targets",
    title: "Targets that fit how you actually eat",
    image: "/bodylens/guide/targets.jpg",
    alt: "BodyLens target settings showing Fixed and Moving calorie target options",
    paragraphs: [
      "Set a Fixed daily calorie target for a static number every day, or a Moving target tied to your actual burn — for example, \"Burn − 300\" gives you a consistent deficit whether today was a rest day or a hard workout. Moving targets fall back to your fixed number on days burn isn't logged, so the ring is never left blank.",
      "Not sure where to start? Find My Targets calculates a recommended calorie and protein goal from your current weight, goal weight, and timeline — no guesswork required.",
      "Calorie Banking, if enabled, carries unused calories from a light day into the next, so one lower-calorie day builds a little runway instead of just disappearing.",
    ],
  },
  {
    slug: "logging",
    title: "Four ways to log food",
    image: "/bodylens/guide/scan.png",
    alt: "BodyLens AI food scan results screen with editable identified food items",
    paragraphs: [
      "Search your personal or global food database, scan a barcode for instant nutrition facts, point the camera at your plate for AI food identification, or just talk — say \"I had chicken and rice for lunch\" and it's logged.",
      "AI scan results are fully editable before you save them: rename anything the AI got wrong, uncheck items you don't want, and adjust each portion's serving multiplier — nothing gets logged until you confirm it.",
      "Every food shows a small color-coded Health Score (green, yellow, red) based on its fiber, protein, and added sugar balance — a quick visual cue, not a ban on anything.",
      "Save any combination of foods as a reusable Combo Meal, or build multi-ingredient Recipes with automatic per-serving macro math.",
    ],
  },
  {
    slug: "meal-budget",
    title: "Meal Budget & smart suggestions",
    image: "/bodylens/guide/meal-budget.jpg",
    alt: "BodyLens Meal Budget card showing breakfast, lunch, and dinner calorie budgets",
    paragraphs: [
      "Your daily target automatically splits into Breakfast, Lunch, and Dinner budgets, with leftover calories carrying forward — eat light at breakfast and you've got more room at lunch. If you log snacks consistently, BodyLens learns your typical snack calories and reserves that amount up front too.",
      "Suggest a Meal finds the food you eat most consistently for that meal slot, pulls in what you typically pair with it, and scales servings to fit whatever budget you have left — capped at twice your usual amount, so a big deficit doesn't turn one usual bottle of something into ten.",
      "Review the suggestion, uncheck anything you don't want, adjust any portion, and log the whole thing in one tap.",
    ],
  },
  {
    slug: "fasting",
    title: "Intermittent fasting, built in",
    image: "/bodylens/guide/fasting.png",
    alt: "BodyLens intermittent fasting timer card showing eating window countdown",
    paragraphs: [
      "Choose a fasting goal — 12, 14, 16, 18, or 20 hours — and BodyLens tracks it for you right on the Today dashboard. Fixed Schedule mode works purely off the clock from a set eating-window start time; Log-Based mode starts the timer automatically from your last logged meal, for schedules that shift day to day.",
      "A notification lets you know the moment your eating window opens, so you're never left checking the clock yourself.",
    ],
  },
  {
    slug: "weight-chart",
    title: "See your whole story on one chart",
    image: "/bodylens/guide/weight-chart.png",
    alt: "BodyLens Weight chart with body fat overlay, activity dots, and a calorie deficit/surplus strip",
    paragraphs: [
      "The History tab's Weight chart overlays your body fat percentage automatically once you've logged any — weight stalling while body fat drops usually means you're building muscle, not spinning your wheels.",
      "It goes further: small dots mark cardio (red) and strength (blue) activity on the days you trained, and a thin strip beneath the line shows your daily calorie deficit or surplus — direction, not color, tells the story, since a surplus isn't \"bad\" if you're trying to build. Nothing is inferred or diagnosed for you; it's just everything laid out on one timeline so you can see your own patterns.",
    ],
  },
  {
    slug: "health-sync",
    title: "Your wearable data, automatically",
    image: "/bodylens/guide/health-sync.png",
    alt: "BodyLens Health Sync screen showing imported steps, calories, and workouts",
    paragraphs: [
      "Connect Apple Health (iOS) or Health Connect (Android) once, and steps, calories burned, sleep, weight, body fat, and workouts flow in automatically — no manual entry. It works with virtually any wearable that syncs through those platforms, including Garmin, Fitbit, Whoop, Oura Ring, and Polar, through each device's own companion app.",
      "On Android, for the most accurate numbers, we recommend connecting just one fitness app to Health Connect — when multiple apps report different totals for the same day, BodyLens does its best to reconcile them, but one clear source is always more reliable than picking between several.",
    ],
  },
  {
    slug: "voice",
    title: "Log by talking, not typing",
    image: "/bodylens/guide/voice.png",
    alt: "BodyLens voice logging modal actively listening",
    paragraphs: [
      "Tap the mic and speak naturally — \"I ate a banana and some oats,\" \"I weigh 175 pounds,\" \"walked 30 minutes,\" \"slept seven and a half hours,\" or \"two glasses of water.\" BodyLens parses food, weight, water, sleep, steps, and activity from natural speech in one shot, no rigid phrasing required.",
      "Speech is transcribed on your device — nothing is recorded or sent to a server.",
    ],
  },
  {
    slug: "progress-photos",
    title: "Progress Photos",
    image: "/bodylens/guide/progress-photos.png",
    alt: "BodyLens Progress Photos comparison view",
    paragraphs: [
      "Photos are stored privately on your device only — never uploaded to the cloud. Side-by-side comparison over time often shows physical changes the scale alone misses, especially when your weight is holding steady but your body composition is genuinely shifting.",
    ],
  },
  {
    slug: "insights",
    title: "Weekly AI insights",
    image: "/bodylens/guide/insights.png",
    alt: "BodyLens Insights screen showing an AI-generated weekly narrative",
    paragraphs: [
      "Every week, an AI coach reviews your logs and writes a plain-language narrative — what's working, what to adjust, and trends worth watching — instead of leaving you to interpret a wall of charts yourself. A Momentum score (0–100) reflects your consistency: logging frequency, hitting targets, and workout days.",
    ],
  },
];

export default function BodyLensGuidePage() {
  return (
    <div className="flex flex-col min-h-full">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-5 max-w-4xl mx-auto w-full">
        <Link href="/" className="text-lg font-bold tracking-tight text-white">LensLabs</Link>
        <Link href="/bodylens" className="text-sm text-sky-400 hover:underline">← BodyLens</Link>
      </nav>

      {/* Hero */}
      <section className="px-6 pt-10 pb-14 max-w-4xl mx-auto w-full">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">The BodyLens Guide</h1>
        <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
          A closer look at how each part of the app actually works — not just a feature list, but what it looks like and why it's there.
        </p>
      </section>

      {/* Jump-to nav */}
      <section className="px-6 pb-16 max-w-4xl mx-auto w-full">
        <div className="flex flex-wrap gap-2">
          {SECTIONS.map((s) => (
            <a
              key={s.slug}
              href={`#${s.slug}`}
              className="text-xs bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 rounded-full px-3 py-1.5 transition-colors"
            >
              {s.title}
            </a>
          ))}
        </div>
      </section>

      {/* Sections */}
      <div className="px-6 max-w-4xl mx-auto w-full flex flex-col gap-24 pb-24">
        {SECTIONS.map((s, i) => (
          <section key={s.slug} id={s.slug} className="scroll-mt-8">
            <div className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-10 items-center`}>
              <div className="w-full md:w-[280px] shrink-0">
                <FeatureShot src={s.image} alt={s.alt} />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-4">{s.title}</h2>
                <div className="flex flex-col gap-3 text-slate-400 text-sm leading-relaxed">
                  {s.paragraphs.map((p, pi) => <p key={pi}>{p}</p>)}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="px-6 pb-24 max-w-4xl mx-auto w-full">
        <div className="bg-gradient-to-r from-sky-500/10 to-indigo-500/10 border border-sky-500/20 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-3">Ready to try it?</h3>
          <Link href="/bodylens" className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-semibold rounded-xl px-6 py-3 text-sm transition-colors">
            Back to BodyLens
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-white/5 px-6 py-8">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <span>© {new Date().getFullYear()} LensLabs. All rights reserved.</span>
          <Link href="/bodylens" className="hover:text-slate-300 transition-colors">← Back to BodyLens</Link>
        </div>
      </footer>
    </div>
  );
}
