import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service · BodyLens",
  description: "Terms of service for the BodyLens app.",
};

const EFFECTIVE_DATE = "June 1, 2026";
const CONTACT_EMAIL = "privacy@lenslabs.app";

export default function BodyLensTermsPage() {
  return (
    <div className="flex flex-col min-h-full">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-5 max-w-3xl mx-auto w-full">
        <Link href="/" className="text-lg font-bold tracking-tight text-white">LensLabs</Link>
        <Link href="/bodylens" className="text-sm text-sky-400 hover:underline">← BodyLens</Link>
      </nav>

      <main className="px-6 py-12 max-w-3xl mx-auto w-full flex-1">
        <h1 className="text-3xl font-bold text-white mb-2">Terms of Service</h1>
        <p className="text-slate-400 text-sm mb-10">BodyLens · Effective {EFFECTIVE_DATE}</p>

        <div className="prose prose-invert prose-slate max-w-none space-y-10 text-slate-300 leading-relaxed">

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">1. Acceptance of Terms</h2>
            <p>
              By downloading, installing, or using BodyLens, you agree to be bound by these Terms of Service. If you do not agree, do not use the app.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">2. Use of the App</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>BodyLens is for personal, non-commercial use only.</li>
              <li>You must be at least 13 years old to use the app.</li>
              <li>You are responsible for maintaining the security of your account credentials.</li>
              <li>You agree not to misuse the app, attempt to reverse engineer it, or use it in any way that violates applicable laws.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">3. Your Data</h2>
            <p className="text-sm">
              You retain ownership of all health and personal data you enter into BodyLens. By using the app, you grant LensLabs a limited license to store and process your data solely to provide the service. See our{" "}
              <Link href="/bodylens/privacy" className="text-sky-400 hover:underline">Privacy Policy</Link>{" "}
              for full details on how your data is handled.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">4. Medical Disclaimer</h2>
            <p className="text-sm">
              BodyLens is not a medical device and does not provide medical advice. All content is for informational and educational purposes only. Always consult a qualified healthcare professional before making any health, nutrition, or fitness decisions. LensLabs is not liable for any health outcomes resulting from use of the app.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">5. AI-Generated Content</h2>
            <p className="text-sm">
              BodyLens uses AI to generate insights, food estimates, and suggestions. These are estimates only and may not be accurate. Do not rely on AI-generated content for medical or dietary decisions.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">6. Account Termination</h2>
            <p className="text-sm">
              You may delete your account at any time from Settings → Account → Delete Account. We reserve the right to suspend or terminate accounts that violate these terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">7. Limitation of Liability</h2>
            <p className="text-sm">
              To the fullest extent permitted by law, LensLabs shall not be liable for any indirect, incidental, or consequential damages arising from your use of BodyLens. The app is provided &ldquo;as is&rdquo; without warranty of any kind.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">8. Changes to These Terms</h2>
            <p className="text-sm">
              We may update these terms from time to time. Material changes will be communicated via an in-app notice. Continued use of the app after changes take effect constitutes acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">9. Contact</h2>
            <p className="text-sm">
              Questions about these terms? Email us at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-sky-400 hover:underline">{CONTACT_EMAIL}</a>.
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
