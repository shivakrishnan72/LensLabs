import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BodyLens",
  description: "Offline-first nutrition and fitness tracker with AI-powered weekly insights.",
};

const features = [
  { icon: "🥗", title: "Food & Calorie Logging", desc: "Log meals by search, barcode scan, AI camera scan, or just talking. Tracks calories, macros, fiber, and added sugar — with an editable AI scan and a color-coded Health Score on every food." },
  { icon: "🎯", title: "Fixed or Moving Targets", desc: "Set a static daily calorie goal, or a Moving target tied to your actual burn (e.g. Burn − 300). Not sure where to start? Find My Targets calculates one for you from your weight, goal, and timeline." },
  { icon: "🍽️", title: "Meal Budget & Suggestions", desc: "Your target splits into breakfast/lunch/dinner budgets with carryover. Suggest a Meal builds a suggestion from what you actually eat, scaled to fit what's left in your budget." },
  { icon: "⏱️", title: "Intermittent Fasting", desc: "12–20 hour fasting goals with a live timer on your dashboard, fixed-schedule or log-based, plus a notification the moment your eating window opens." },
  { icon: "🏋️", title: "Workout Tracking", desc: "Syncs workouts automatically from Apple Health (iOS), Health Connect (Android), and Strava — including Garmin, Fitbit, Whoop, Oura, and Polar through their own companion apps." },
  { icon: "📈", title: "Weight & Activity Chart", desc: "Weight and body fat on one chart, overlaid with your cardio/strength activity and daily calorie deficit or surplus — see your own patterns, nothing inferred for you." },
  { icon: "📊", title: "AI Weekly Insights", desc: "Every week, an AI coach reviews your logs and delivers a personalized narrative — what's working, what to improve, and trends to watch." },
  { icon: "🎙️", title: "Voice Logging", desc: "Log food, weight, water, sleep, steps, or activity just by speaking naturally. Transcribed entirely on-device — nothing is recorded or sent anywhere." },
  { icon: "📷", title: "Progress Photos", desc: "Private, on-device photo history for side-by-side comparison over time — often shows changes the scale alone misses." },
  { icon: "📖", title: "Recipe Builder", desc: "Create multi-ingredient recipes with serving sizes. Log any number of servings to your diary with correct macro math." },
  { icon: "💧", title: "Water & Steps", desc: "Track daily water intake and step count. Set targets and see progress at a glance on the Today screen." },
  { icon: "📴", title: "Offline-First", desc: "All data lives on your device. Everything works without internet — syncs to the cloud when connected." },
];

export default function BodyLensPage() {
  return (
    <div className="flex flex-col min-h-full">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-5 max-w-5xl mx-auto w-full">
        <Link href="/" className="text-lg font-bold tracking-tight text-white">LensLabs</Link>
        <div className="flex items-center gap-6 text-sm text-slate-400">
          <Link href="/bodylens" className="text-sky-400 font-medium">BodyLens</Link>
          <Link href="/equitylens" className="hover:text-white transition-colors">EquityLens</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 pt-16 pb-20 max-w-5xl mx-auto w-full">
        <div className="flex flex-col sm:flex-row items-start gap-6 mb-10">
          <div className="w-20 h-20 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-4xl shrink-0">
            🫀
          </div>
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">BodyLens</h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
              Your personal nutrition and fitness companion. Track what you eat, log your workouts, and let AI surface the patterns that matter.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href="https://apps.apple.com/us/app/bodylens-tracker/id6765769466"
            className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-semibold rounded-xl px-6 py-3 text-sm transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download on App Store
          </a>
          <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-slate-400 font-medium rounded-xl px-6 py-3 text-sm">
            Android — Coming soon
          </span>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 pb-24 max-w-5xl mx-auto w-full">
        <h2 className="text-2xl font-bold text-white mb-8">Everything you need</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div key={f.title} className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <span className="text-2xl mb-4 block">{f.icon}</span>
              <h3 className="font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/bodylens/guide" className="inline-flex items-center gap-2 text-sky-400 hover:underline text-sm font-medium">
            See how it all works, feature by feature →
          </Link>
        </div>
      </section>

      {/* Free during launch banner */}
      <section className="px-6 pb-24 max-w-5xl mx-auto w-full">
        <div className="bg-gradient-to-r from-sky-500/10 to-indigo-500/10 border border-sky-500/20 rounded-2xl p-8 text-center">
          <p className="text-sm text-sky-400 font-semibold mb-2">LIMITED TIME</p>
          <h3 className="text-2xl font-bold text-white mb-3">Free during launch</h3>
          <p className="text-slate-400 max-w-md mx-auto text-sm leading-relaxed">
            All premium features — AI scan, voice logging, advanced insights, and Strava sync — are free while we're in early access.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-white/5 px-6 py-8">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <span>© {new Date().getFullYear()} LensLabs. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <Link href="/bodylens/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="/" className="hover:text-slate-300 transition-colors">LensLabs</Link>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/share/1GzPH4VuK3/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="BodyLens on Facebook"
                className="hover:text-slate-300 transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/bodylensapp?utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="BodyLens on Instagram"
                className="hover:text-slate-300 transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2c2.72 0 3.06.01 4.12.06 1.07.05 1.79.22 2.43.46.66.26 1.22.6 1.77 1.16.56.55.9 1.11 1.16 1.77.24.64.41 1.36.46 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.07-.22 1.79-.46 2.43a4.9 4.9 0 0 1-1.16 1.77 4.9 4.9 0 0 1-1.77 1.16c-.64.24-1.36.41-2.43.46-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.07-.05-1.79-.22-2.43-.46a4.9 4.9 0 0 1-1.77-1.16 4.9 4.9 0 0 1-1.16-1.77c-.24-.64-.41-1.36-.46-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.07.22-1.79.46-2.43.26-.66.6-1.22 1.16-1.77a4.9 4.9 0 0 1 1.77-1.16c.64-.24 1.36-.41 2.43-.46C8.94 2.01 9.28 2 12 2Zm0 1.8c-2.67 0-2.99.01-4.04.06-.97.04-1.5.2-1.85.34-.46.18-.8.4-1.15.75-.35.35-.57.69-.75 1.15-.14.35-.3.88-.34 1.85-.05 1.05-.06 1.37-.06 4.04s.01 2.99.06 4.04c.04.97.2 1.5.34 1.85.18.46.4.8.75 1.15.35.35.69.57 1.15.75.35.14.88.3 1.85.34 1.05.05 1.37.06 4.04.06s2.99-.01 4.04-.06c.97-.04 1.5-.2 1.85-.34.46-.18.8-.4 1.15-.75.35-.35.57-.69.75-1.15.14-.35.3-.88.34-1.85.05-1.05.06-1.37.06-4.04s-.01-2.99-.06-4.04c-.04-.97-.2-1.5-.34-1.85a3.1 3.1 0 0 0-.75-1.15 3.1 3.1 0 0 0-1.15-.75c-.35-.14-.88-.3-1.85-.34-1.05-.05-1.37-.06-4.04-.06Zm0 3.38a4.82 4.82 0 1 1 0 9.64 4.82 4.82 0 0 1 0-9.64Zm0 1.8a3.02 3.02 0 1 0 0 6.04 3.02 3.02 0 0 0 0-6.04Zm5.15-1.99a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
