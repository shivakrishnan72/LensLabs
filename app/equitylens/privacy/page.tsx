import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy · EquityLens",
  description: "Privacy policy for the EquityLens app.",
};

export default function EquityLensPrivacyPage() {
  return (
    <div className="flex flex-col min-h-full">
      <nav className="flex items-center justify-between px-6 py-5 max-w-3xl mx-auto w-full">
        <Link href="/" className="text-lg font-bold tracking-tight text-white">LensLabs</Link>
        <Link href="/equitylens" className="text-sm text-indigo-400 hover:underline">← EquityLens</Link>
      </nav>
      <main className="px-6 py-12 max-w-3xl mx-auto w-full flex-1 flex items-center justify-center">
        <div className="text-center">
          <p className="text-4xl mb-4">🚧</p>
          <h1 className="text-2xl font-bold text-white mb-3">Privacy Policy</h1>
          <p className="text-slate-400 text-sm">EquityLens is coming soon. Privacy policy will be published before launch.</p>
        </div>
      </main>
    </div>
  );
}
