import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Delete Account · BodyLens",
  description: "How to request account deletion for BodyLens.",
};

export default function BodyLensDeleteAccountPage() {
  return (
    <div className="flex flex-col min-h-full">
      <nav className="flex items-center justify-between px-6 py-5 max-w-3xl mx-auto w-full">
        <Link href="/" className="text-lg font-bold tracking-tight text-white">LensLabs</Link>
        <Link href="/bodylens" className="text-sm text-sky-400 hover:underline">← BodyLens</Link>
      </nav>

      <main className="flex-1 max-w-3xl mx-auto w-full px-6 py-12">
        <h1 className="text-3xl font-bold text-white mb-4">Delete Your BodyLens Account</h1>
        <p className="text-slate-400 mb-8">Last updated: July 2026</p>

        <div className="space-y-6 text-slate-300 leading-relaxed">
          <p>
            You can request the deletion of your BodyLens account and all associated data at any time.
          </p>

          <div className="bg-slate-800 rounded-xl p-6 space-y-3">
            <h2 className="text-white font-semibold text-lg">How to request account deletion</h2>
            <p>Send an email to <a href="mailto:hello@lenslabs.app" className="text-sky-400 hover:underline">hello@lenslabs.app</a> with:</p>
            <ul className="list-disc list-inside space-y-1 text-slate-400">
              <li>Subject: <span className="text-white">Delete My BodyLens Account</span></li>
              <li>Your registered email address</li>
            </ul>
          </div>

          <p>
            We will permanently delete your account and all associated data — including your food logs,
            workout history, health data, and profile — within <strong className="text-white">30 days</strong> of receiving your request.
          </p>

          <p>
            If you have any questions, contact us at{" "}
            <a href="mailto:hello@lenslabs.app" className="text-sky-400 hover:underline">hello@lenslabs.app</a>.
          </p>
        </div>
      </main>
    </div>
  );
}
