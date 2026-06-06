import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact · BodyLens",
  description: "Get in touch with the BodyLens team.",
};

const CONTACT_EMAIL = "privacy@lenslabs.app";

export default function BodyLensContactPage() {
  return (
    <div className="flex flex-col min-h-full">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-5 max-w-3xl mx-auto w-full">
        <Link href="/" className="text-lg font-bold tracking-tight text-white">LensLabs</Link>
        <Link href="/bodylens" className="text-sm text-sky-400 hover:underline">← BodyLens</Link>
      </nav>

      <main className="px-6 py-12 max-w-3xl mx-auto w-full flex-1">
        <h1 className="text-3xl font-bold text-white mb-2">Contact Us</h1>
        <p className="text-slate-400 text-sm mb-10">We&apos;d love to hear from you.</p>

        <div className="prose prose-invert prose-slate max-w-none space-y-10 text-slate-300 leading-relaxed">

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">General Enquiries</h2>
            <p className="text-sm">
              For questions, feedback, or support, email us at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-sky-400 hover:underline">{CONTACT_EMAIL}</a>.
              {" "}We aim to respond within 2 business days.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Privacy &amp; Data Requests</h2>
            <p className="text-sm">
              To request access to, export, or deletion of your data, email us at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-sky-400 hover:underline">{CONTACT_EMAIL}</a>{" "}
              with the subject line <strong>&ldquo;Data Request&rdquo;</strong> and the email address associated with your account.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Bug Reports</h2>
            <p className="text-sm">
              Found a bug? Email us with a description of the issue, your device model, and iOS version. Screenshots are always helpful.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Legal</h2>
            <p className="text-sm">
              See our{" "}
              <Link href="/bodylens/privacy" className="text-sky-400 hover:underline">Privacy Policy</Link>{" "}
              and{" "}
              <Link href="/bodylens/terms" className="text-sky-400 hover:underline">Terms of Service</Link>.
            </p>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 px-6 py-8">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <span>© {new Date().getFullYear()} LensLabs. All rights reserved.</span>
          <Link href="/bodylens" className="hover:text-slate-300 transition-colors">← Back to BodyLens</Link>
        </div>
      </footer>
    </div>
  );
}
