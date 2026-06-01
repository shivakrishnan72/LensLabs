import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy · BodyLens",
  description: "Privacy policy for the BodyLens app.",
};

const EFFECTIVE_DATE = "June 1, 2026";
const CONTACT_EMAIL = "privacy@lenslabs.app";

export default function BodyLensPrivacyPage() {
  return (
    <div className="flex flex-col min-h-full">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-5 max-w-3xl mx-auto w-full">
        <Link href="/" className="text-lg font-bold tracking-tight text-white">LensLabs</Link>
        <Link href="/bodylens" className="text-sm text-sky-400 hover:underline">← BodyLens</Link>
      </nav>

      <main className="px-6 py-12 max-w-3xl mx-auto w-full flex-1">
        <h1 className="text-3xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-slate-400 text-sm mb-10">BodyLens · Effective {EFFECTIVE_DATE}</p>

        <div className="prose prose-invert prose-slate max-w-none space-y-10 text-slate-300 leading-relaxed">

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">1. Overview</h2>
            <p>
              BodyLens is an offline-first health tracking app. Your health data is stored locally on your device by default. This policy explains what data we collect, why, and how it is handled.
            </p>
            <p className="mt-3">
              We do not sell your personal data to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">2. Data We Collect</h2>
            <h3 className="text-base font-medium text-slate-200 mb-2">Data you enter</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Food diary entries (food name, calories, macronutrients, date)</li>
              <li>Daily body weight and body fat percentage</li>
              <li>Water intake and step count</li>
              <li>Workout activity logs</li>
              <li>Nutrition targets and settings</li>
              <li>Profile information (name, age, sex, height, weight) — stored only on-device, never uploaded</li>
            </ul>

            <h3 className="text-base font-medium text-slate-200 mt-5 mb-2">Data from integrations (optional)</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Apple Health:</strong> Steps, sleep, and workout data — only when you grant permission. Read from HealthKit; never written back without your action.</li>
              <li><strong>Strava:</strong> Activity name, type, duration, and distance from your connected Strava account. Requires explicit OAuth sign-in.</li>
            </ul>

            <h3 className="text-base font-medium text-slate-200 mt-5 mb-2">Technical data</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Supabase authentication tokens (email address used to create your account)</li>
              <li>App usage metadata required for cloud sync</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">3. How We Use Your Data</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>To display your diary, insights, and history within the app</li>
              <li>To sync your data across devices via Supabase (our cloud backend)</li>
              <li>To generate AI-powered weekly, monthly, and yearly insights using Claude (Anthropic)</li>
              <li>To send meal reminders and workout recovery alerts (only if enabled)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">4. AI Features</h2>
            <p className="text-sm">
              When you request AI insights, aggregated metrics (e.g. average calories, workout frequency) are sent to Anthropic&apos;s Claude API to generate your narrative. Individual food entries and personal identifiers are not sent. Anthropic&apos;s data use is governed by their{" "}
              <a href="https://www.anthropic.com/privacy" className="text-sky-400 hover:underline" target="_blank" rel="noopener noreferrer">privacy policy</a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">5. Data Storage</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Local storage:</strong> All data is first stored on your device using SQLite. The app is fully functional without a network connection.</li>
              <li><strong>Cloud backup:</strong> When signed in, data syncs to Supabase (hosted on AWS). Supabase stores data in a region within the United States.</li>
              <li><strong>Profile data</strong> (name, photo, age, height) is stored only on-device and is never uploaded.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">6. Data Sharing</h2>
            <p className="text-sm">We share data with the following third parties only as needed to operate the app:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
              <li><strong>Supabase</strong> — cloud database and authentication</li>
              <li><strong>Anthropic</strong> — AI insight generation (aggregated metrics only)</li>
              <li><strong>Strava</strong> — if you connect your account</li>
            </ul>
            <p className="text-sm mt-3">We do not share data with advertisers, data brokers, or analytics platforms.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">7. Your Rights</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Access:</strong> All data you&apos;ve entered is visible directly in the app.</li>
              <li><strong>Deletion:</strong> You can delete your account from Settings → Account → Delete Account. This permanently erases all cloud data and wipes the local database. Deletion is irreversible.</li>
              <li><strong>Portability:</strong> Contact us to request an export of your data.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">8. Children</h2>
            <p className="text-sm">
              BodyLens is not directed at children under 13. We do not knowingly collect data from children under 13. If you believe a child has provided us data, contact us and we will delete it.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">9. Medical Disclaimer</h2>
            <p className="text-sm">
              BodyLens is not a medical device and does not provide medical advice. Content is for informational and educational purposes only. Always consult a qualified healthcare professional before making any health, nutrition, or fitness decisions.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">10. Changes to This Policy</h2>
            <p className="text-sm">
              We may update this policy from time to time. Material changes will be communicated via an in-app notice. Continued use of the app after changes take effect constitutes acceptance of the revised policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">11. Contact</h2>
            <p className="text-sm">
              Questions about this policy? Email us at{" "}
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
