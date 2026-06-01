import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-full">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-5 max-w-5xl mx-auto w-full">
        <span className="text-lg font-bold tracking-tight text-white">LensLabs</span>
        <div className="flex items-center gap-6 text-sm text-slate-400">
          <Link href="/bodylens" className="hover:text-white transition-colors">BodyLens</Link>
          <Link href="/equitylens" className="hover:text-white transition-colors">EquityLens</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center text-center px-6 pt-20 pb-24 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs text-slate-400 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
          Apps built with clarity in mind
        </div>
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
          See clearly.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">
            Act with confidence.
          </span>
        </h1>
        <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
          LensLabs builds AI-powered tools that cut through noise — giving you real insight into your health and your money.
        </p>
      </section>

      {/* App Cards */}
      <section className="px-6 pb-32 max-w-5xl mx-auto w-full">
        <div className="grid sm:grid-cols-2 gap-6">
          {/* BodyLens */}
          <Link href="/bodylens" className="group relative flex flex-col bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-sky-500/40 hover:bg-white/[0.07] transition-all">
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-6">
              <span className="text-2xl">🫀</span>
            </div>
            <h2 className="text-xl font-bold text-white mb-2">BodyLens</h2>
            <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-6">
              Offline-first nutrition and fitness tracker. Log food, track macros, sync workouts from Apple Health and Strava, and get AI-powered weekly insights.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {["Calorie Tracking", "Macro Goals", "AI Insights", "Apple Health", "Strava"].map((tag) => (
                <span key={tag} className="text-xs bg-sky-500/10 text-sky-300 border border-sky-500/20 rounded-full px-3 py-1">{tag}</span>
              ))}
            </div>
            <span className="text-sky-400 text-sm font-medium group-hover:underline">Learn more →</span>
          </Link>

          {/* EquityLens */}
          <Link href="/equitylens" className="group relative flex flex-col bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-indigo-500/40 hover:bg-white/[0.07] transition-all">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6">
              <span className="text-2xl">📈</span>
            </div>
            <h2 className="text-xl font-bold text-white mb-2">EquityLens</h2>
            <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-6">
              AI-powered portfolio advisor that scores stocks, tracks your holdings, and delivers a daily brief on what to watch.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {["Stock Scoring", "Portfolio Tracking", "Daily Brief", "AI Advisor", "Signals"].map((tag) => (
                <span key={tag} className="text-xs bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 rounded-full px-3 py-1">{tag}</span>
              ))}
            </div>
            <span className="text-indigo-400 text-sm font-medium group-hover:underline">Learn more →</span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-white/5 px-6 py-8">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <span>© {new Date().getFullYear()} LensLabs. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/bodylens/privacy" className="hover:text-slate-300 transition-colors">BodyLens Privacy</Link>
            <Link href="/equitylens/privacy" className="hover:text-slate-300 transition-colors">EquityLens Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
