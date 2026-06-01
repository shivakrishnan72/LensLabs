import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EquityLens",
  description: "AI-powered portfolio advisor that scores stocks, tracks your holdings, and delivers a daily brief on what to watch.",
};

const features = [
  { icon: "🎯", title: "Stock Scoring", desc: "Every holding is scored on fundamentals, momentum, and risk. Know at a glance whether to buy more, hold, or trim." },
  { icon: "📋", title: "Portfolio Tracking", desc: "Import your holdings and track performance, allocation, and sector exposure all in one place." },
  { icon: "📰", title: "Daily Brief", desc: "Wake up to a personalized summary of what moved overnight, what earnings are coming, and what needs your attention today." },
  { icon: "🤖", title: "AI Advisor", desc: "Ask natural language questions about your portfolio. Get answers grounded in your actual holdings, not generic advice." },
  { icon: "📡", title: "Market Signals", desc: "Surface early signals — sentiment shifts, unusual volume, analyst revisions — before they become headlines." },
  { icon: "🔒", title: "Private by Design", desc: "Your portfolio data stays on your device. No brokerage login required — you enter what you own." },
];

export default function EquityLensPage() {
  return (
    <div className="flex flex-col min-h-full">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-5 max-w-5xl mx-auto w-full">
        <Link href="/" className="text-lg font-bold tracking-tight text-white">LensLabs</Link>
        <div className="flex items-center gap-6 text-sm text-slate-400">
          <Link href="/bodylens" className="hover:text-white transition-colors">BodyLens</Link>
          <Link href="/equitylens" className="text-indigo-400 font-medium">EquityLens</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 pt-16 pb-20 max-w-5xl mx-auto w-full">
        <div className="flex flex-col sm:flex-row items-start gap-6 mb-10">
          <div className="w-20 h-20 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-4xl shrink-0">
            📈
          </div>
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">EquityLens</h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
              Know what to buy, hold, or trim — EquityLens scores the market so you don&apos;t have to.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-medium rounded-xl px-6 py-3 text-sm">
            🚀 Coming Soon
          </span>
          <span className="inline-flex items-center text-slate-500 text-sm px-2">
            iOS & Android
          </span>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 pb-24 max-w-5xl mx-auto w-full">
        <h2 className="text-2xl font-bold text-white mb-8">What&apos;s inside</h2>
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

      {/* Waitlist banner */}
      <section className="px-6 pb-24 max-w-5xl mx-auto w-full">
        <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-2xl p-8 text-center">
          <p className="text-sm text-indigo-400 font-semibold mb-2">COMING SOON</p>
          <h3 className="text-2xl font-bold text-white mb-3">Be the first to know</h3>
          <p className="text-slate-400 max-w-md mx-auto text-sm leading-relaxed mb-6">
            EquityLens is in development. Drop your email and we&apos;ll let you know when it&apos;s ready for early access.
          </p>
          <a
            href="mailto:hello@lenslabs.app?subject=EquityLens Early Access"
            className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white font-semibold rounded-xl px-6 py-3 text-sm transition-colors"
          >
            Request Early Access
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-white/5 px-6 py-8">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <span>© {new Date().getFullYear()} LensLabs. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/equitylens/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="/" className="hover:text-slate-300 transition-colors">LensLabs</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
