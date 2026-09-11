import type { Metadata } from "next";
import Link from "next/link";
import { WeightBodyFatChart, AdherenceChart } from "./Charts";

export const metadata: Metadata = {
  title: "Progress Report",
  description: "A shared BodyLens progress report.",
  // These links are unguessable but still shouldn't be crawlable/indexed — it's someone's
  // private health data.
  robots: { index: false, follow: false },
};

// Not secret — this is a public, no-auth endpoint (the token itself is the credential), and
// the same project ref already ships inside the BodyLens app's own client bundle.
const EDGE_FUNCTION_URL = "https://etcehyrsucthvacxbktw.supabase.co/functions/v1/get-shared-report";

interface FoodLogEntry {
  date: string; food_name: string; cal: number; fat: number; carb: number;
  protein: number; fiber: number; added_sugar: number; multiplier: number;
}
interface WeightPoint { date: string; weight: number | null; body_fat_pct: number | null }
interface AdherenceDay {
  date: string; cal_consumed: number | null; cal_burnt: number | null; deficit_surplus: number | null;
  protein: number | null; fiber: number | null; added_sugar: number | null;
}
interface Targets { cal_target: number | null; protein_target: number | null }
interface WorkoutEntry {
  date: string; activity_type: string; name: string | null;
  duration_secs: number | null; distance_m: number | null; source: string;
}
interface Insight { week_start: string; narrative: string; generated_at: string }

interface ReportPayload {
  label: string;
  generated_at: string;
  window_days: number;
  food_log?: FoodLogEntry[];
  weight_trend?: WeightPoint[];
  adherence?: AdherenceDay[];
  targets?: Targets | null;
  workouts?: WorkoutEntry[];
  insight?: Insight | null;
}

const ERROR_MESSAGES: Record<string, { title: string; body: string }> = {
  not_found: { title: "Link not found", body: "This report link doesn't exist, or the URL may be incomplete." },
  expired: { title: "This link has expired", body: "Ask the person who shared this with you to send a new one." },
  revoked: { title: "This link is no longer active", body: "Access to this report has been turned off." },
  missing_token: { title: "Invalid link", body: "This link is missing required information." },
  feature_disabled: { title: "This feature is currently unavailable", body: "Please check back later." },
  network_error: { title: "Something went wrong", body: "Please try again in a moment." },
};

async function fetchReport(token: string): Promise<{ data: ReportPayload | null; errorKey: string | null }> {
  try {
    const res = await fetch(`${EDGE_FUNCTION_URL}?token=${encodeURIComponent(token)}`, { cache: "no-store" });
    const body = await res.json();
    if (!res.ok) return { data: null, errorKey: body?.error ?? "network_error" };
    return { data: body as ReportPayload, errorKey: null };
  } catch {
    return { data: null, errorKey: "network_error" };
  }
}

function formatDate(d: string): string {
  return new Date(d + "T12:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
function formatDuration(secs: number | null): string {
  if (!secs) return "";
  const m = Math.round(secs / 60);
  const h = Math.floor(m / 60);
  return h > 0 ? `${h}h ${m % 60}m` : `${m} min`;
}
function formatDistance(m: number | null): string {
  if (!m) return "";
  return `${(m / 1000).toFixed(1)} km`;
}

interface FoodDayGroup {
  date: string;
  items: FoodLogEntry[];
  totals: { cal: number; protein: number; carb: number; fat: number; fiber: number; added_sugar: number };
}

// food_log_entries' macro columns are already the final (post-multiplier) values — see
// addFoodLogEntry in lib/queries.ts — so these are summed as-is, never multiplied again.
function groupFoodLogByDate(entries: FoodLogEntry[]): FoodDayGroup[] {
  const byDate = new Map<string, FoodLogEntry[]>();
  for (const e of entries) {
    const list = byDate.get(e.date) ?? [];
    list.push(e);
    byDate.set(e.date, list);
  }
  return Array.from(byDate.entries()).map(([date, items]) => ({
    date,
    items,
    totals: items.reduce((acc, i) => ({
      cal: acc.cal + i.cal,
      protein: acc.protein + i.protein,
      carb: acc.carb + i.carb,
      fat: acc.fat + i.fat,
      fiber: acc.fiber + i.fiber,
      added_sugar: acc.added_sugar + i.added_sugar,
    }), { cal: 0, protein: 0, carb: 0, fat: 0, fiber: 0, added_sugar: 0 }),
  }));
}

export default async function CoachReportPage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  const { data, errorKey } = await fetchReport(token);

  if (errorKey || !data) {
    const msg = ERROR_MESSAGES[errorKey ?? "network_error"] ?? ERROR_MESSAGES.network_error;
    return (
      <div className="flex flex-col min-h-full">
        <nav className="px-6 py-5 max-w-3xl mx-auto w-full">
          <Link href="/bodylens" className="text-lg font-bold tracking-tight text-white">BodyLens</Link>
        </nav>
        <div className="flex-1 flex items-center justify-center px-6">
          <div className="max-w-sm text-center">
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl mx-auto mb-5">🔒</div>
            <h1 className="text-xl font-bold text-white mb-2">{msg.title}</h1>
            <p className="text-slate-400 text-sm">{msg.body}</p>
          </div>
        </div>
      </div>
    );
  }

  const generatedAt = new Date(data.generated_at).toLocaleString("en-US", {
    month: "short", day: "numeric", hour: "numeric", minute: "2-digit",
  });

  return (
    <div className="flex flex-col min-h-full">
      <nav className="px-6 py-5 max-w-3xl mx-auto w-full flex items-center justify-between">
        <Link href="/bodylens" className="text-lg font-bold tracking-tight text-white">BodyLens</Link>
        <span className="text-xs text-slate-500">by LensLabs</span>
      </nav>

      <main className="px-6 pb-16 max-w-3xl mx-auto w-full flex-1">
        <div className="mb-8">
          <p className="text-xs text-sky-400 font-semibold uppercase tracking-wide mb-2">Progress Report</p>
          <h1 className="text-2xl font-bold text-white mb-1">{data.label}</h1>
          <p className="text-slate-500 text-xs">
            Last {data.window_days} days · updated {generatedAt}
          </p>
        </div>

        {"insight" in data && (
          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-semibold text-white">Weekly Insight</h2>
              {data.insight && <span className="text-xs text-slate-500">Week of {formatDate(data.insight.week_start)}</span>}
            </div>
            {data.insight ? (
              <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-line">{data.insight.narrative}</p>
            ) : (
              <p className="text-slate-500 text-sm">No insight generated yet this week.</p>
            )}
          </section>
        )}

        {data.adherence && data.adherence.length > 0 && (
          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6">
            <h2 className="text-sm font-semibold text-white mb-1">Calorie Adherence</h2>
            {data.targets?.cal_target != null && (
              <p className="text-xs text-slate-500 mb-4">Target: {data.targets.cal_target} cal/day{data.targets.protein_target != null ? ` · ${data.targets.protein_target}g protein` : ""}</p>
            )}
            <AdherenceChart days={data.adherence} />
            <div className="overflow-x-auto mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-slate-500 text-xs">
                    <th className="pb-2 pr-4 font-medium">Date</th>
                    <th className="pb-2 pr-4 font-medium">Consumed</th>
                    <th className="pb-2 pr-4 font-medium">Burned</th>
                    <th className="pb-2 pr-4 font-medium">Deficit/Surplus</th>
                    <th className="pb-2 pr-4 font-medium">Protein</th>
                    <th className="pb-2 pr-4 font-medium">Fiber</th>
                    <th className="pb-2 font-medium">Added Sugar</th>
                  </tr>
                </thead>
                <tbody>
                  {data.adherence.map((d) => (
                    <tr key={d.date} className="border-t border-white/5">
                      <td className="py-2 pr-4 text-slate-300">{formatDate(d.date)}</td>
                      <td className="py-2 pr-4 text-slate-300">{d.cal_consumed ?? "—"}</td>
                      <td className="py-2 pr-4 text-slate-300">{d.cal_burnt ?? "—"}</td>
                      <td className="py-2 pr-4 text-slate-300">
                        {d.deficit_surplus == null ? "—" : d.deficit_surplus >= 0 ? `${d.deficit_surplus} deficit` : `${Math.abs(d.deficit_surplus)} surplus`}
                      </td>
                      <td className="py-2 pr-4 text-slate-300">{d.protein != null ? `${d.protein}g` : "—"}</td>
                      <td className="py-2 pr-4 text-slate-300">{d.fiber != null ? `${d.fiber}g` : "—"}</td>
                      <td className="py-2 text-slate-300">{d.added_sugar != null ? `${d.added_sugar}g` : "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {data.weight_trend && data.weight_trend.length > 0 && (
          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6">
            <h2 className="text-sm font-semibold text-white mb-4">Weight &amp; Body Fat</h2>
            <WeightBodyFatChart points={data.weight_trend} />
            <div className="flex items-center justify-center gap-5 mt-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-400" />
                <span className="text-xs text-slate-500">Weight</span>
              </div>
              {data.weight_trend.some((w) => w.body_fat_pct != null) && (
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-violet-400" />
                  <span className="text-xs text-slate-500">Body Fat %</span>
                </div>
              )}
            </div>
          </section>
        )}

        {data.workouts && data.workouts.length > 0 && (
          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6">
            <h2 className="text-sm font-semibold text-white mb-4">Workouts</h2>
            <div className="flex flex-col gap-2">
              {data.workouts.map((w, i) => (
                <div key={i} className="flex items-center justify-between text-sm border-t border-white/5 pt-2 first:border-0 first:pt-0">
                  <div>
                    <span className="text-slate-300">{w.name || w.activity_type}</span>
                    <span className="text-slate-500 text-xs ml-2">{formatDate(w.date)}</span>
                  </div>
                  <span className="text-slate-500 text-xs">
                    {[formatDuration(w.duration_secs), formatDistance(w.distance_m)].filter(Boolean).join(" · ")}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {data.food_log && data.food_log.length > 0 && (
          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6">
            <h2 className="text-sm font-semibold text-white mb-4">Food Diary</h2>
            <div className="flex flex-col gap-6">
              {groupFoodLogByDate(data.food_log).map((day) => (
                <div key={day.date} className="overflow-x-auto">
                  <p className="text-xs text-slate-500 mb-2">{formatDate(day.date)}</p>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-slate-500 text-xs">
                        <th className="pb-2 pr-4 font-medium">Food</th>
                        <th className="pb-2 pr-4 font-medium">Cal</th>
                        <th className="pb-2 pr-4 font-medium">Protein</th>
                        <th className="pb-2 pr-4 font-medium">Carbs</th>
                        <th className="pb-2 pr-4 font-medium">Fat</th>
                        <th className="pb-2 pr-4 font-medium">Fiber</th>
                        <th className="pb-2 font-medium">Added Sugar</th>
                      </tr>
                    </thead>
                    <tbody>
                      {day.items.map((f, i) => (
                        <tr key={i} className="border-t border-white/5">
                          <td className="py-2 pr-4 text-slate-300">{f.food_name}</td>
                          <td className="py-2 pr-4 text-slate-300">{Math.round(f.cal)}</td>
                          <td className="py-2 pr-4 text-slate-500 text-xs">{Math.round(f.protein)}g</td>
                          <td className="py-2 pr-4 text-slate-500 text-xs">{Math.round(f.carb)}g</td>
                          <td className="py-2 pr-4 text-slate-500 text-xs">{Math.round(f.fat)}g</td>
                          <td className="py-2 pr-4 text-slate-500 text-xs">{Math.round(f.fiber)}g</td>
                          <td className="py-2 text-slate-500 text-xs">{Math.round(f.added_sugar)}g</td>
                        </tr>
                      ))}
                      <tr className="border-t border-white/10">
                        <td className="py-2 pr-4 text-white text-xs font-semibold">Daily Total</td>
                        <td className="py-2 pr-4 text-white text-xs font-semibold">{Math.round(day.totals.cal)}</td>
                        <td className="py-2 pr-4 text-slate-300 text-xs font-semibold">{Math.round(day.totals.protein)}g</td>
                        <td className="py-2 pr-4 text-slate-300 text-xs font-semibold">{Math.round(day.totals.carb)}g</td>
                        <td className="py-2 pr-4 text-slate-300 text-xs font-semibold">{Math.round(day.totals.fat)}g</td>
                        <td className="py-2 pr-4 text-slate-300 text-xs font-semibold">{Math.round(day.totals.fiber)}g</td>
                        <td className="py-2 text-slate-300 text-xs font-semibold">{Math.round(day.totals.added_sugar)}g</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="bg-gradient-to-r from-sky-500/10 to-indigo-500/10 border border-sky-500/20 rounded-2xl p-6 text-center">
          <p className="text-sm text-slate-300 mb-3">Curious what's behind this report?</p>
          <Link
            href="/bodylens"
            className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-semibold rounded-xl px-6 py-3 text-sm transition-colors"
          >
            Learn more about BodyLens
          </Link>
        </section>

        <p className="text-xs text-slate-600 text-center mt-8">
          Shared via BodyLens · Read-only · This link updates automatically
        </p>
      </main>
    </div>
  );
}
