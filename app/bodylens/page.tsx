import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BodyLens",
  description: "Offline-first nutrition and fitness tracker with AI-powered weekly insights.",
};

const features = [
  { icon: "🥗", title: "Food & Calorie Logging", desc: "Log meals manually, scan barcodes, or use AI camera scan to identify food from a photo. Tracks calories, macros, fiber, and added sugar." },
  { icon: "🏋️", title: "Workout Tracking", desc: "Syncs workouts automatically from Apple Health and Strava. Captures activity type, duration, and distance." },
  { icon: "📊", title: "AI Weekly Insights", desc: "Every week, an AI coach reviews your logs and delivers a personalized narrative — what's working, what to improve, and trends to watch." },
  { icon: "💧", title: "Water & Steps", desc: "Track daily water intake and step count. Set targets and see progress at a glance on the Today screen." },
  { icon: "📖", title: "Recipe Builder", desc: "Create multi-ingredient recipes with serving sizes. Log any number of servings to your diary with correct macro math." },
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
          <div className="flex gap-6">
            <Link href="/bodylens/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="/" className="hover:text-slate-300 transition-colors">LensLabs</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
