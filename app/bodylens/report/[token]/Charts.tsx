interface WeightPoint {
  date: string;
  weight: number | null;
  body_fat_pct: number | null;
}

interface AdherenceDay {
  date: string;
  cal_consumed: number | null;
  cal_burnt: number | null;
  deficit_surplus: number | null;
}

const W = 800;
const H = 220;
const PAD = { top: 16, bottom: 28, left: 46, right: 46 };
const INNER_W = W - PAD.left - PAD.right;
const INNER_H = H - PAD.top - PAD.bottom;

function formatDate(d: string): string {
  return new Date(d + "T12:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

// Days between two YYYY-MM-DD dates — the report payload's weight/adherence entries are sparse
// (only days that actually have data), so x-position has to be based on real calendar distance
// from the window's first date, not array index, or entries end up evenly spaced regardless of
// how many actual days separate them.
function daysBetween(a: string, b: string): number {
  return Math.round((new Date(b + "T12:00:00").getTime() - new Date(a + "T12:00:00").getTime()) / 86400000);
}

export function WeightBodyFatChart({ points }: { points: WeightPoint[] }) {
  const validWeights = points.filter((p) => p.weight != null);
  if (validWeights.length < 2) return null;

  const minDate = points[0].date;
  const span = Math.max(1, daysBetween(minDate, points[points.length - 1].date));
  const xAt = (date: string) => PAD.left + (daysBetween(minDate, date) / span) * INNER_W;

  const weights = validWeights.map((p) => p.weight as number);
  const wMin = Math.min(...weights);
  const wMax = Math.max(...weights);
  const wRange = wMax - wMin || 1;
  const yAtW = (v: number) => PAD.top + (1 - (v - wMin) / wRange) * INNER_H;

  const validBF = points.filter((p) => p.body_fat_pct != null);
  const showBF = validBF.length >= 2;
  const bfVals = validBF.map((p) => p.body_fat_pct as number);
  const bfMin = showBF ? Math.min(...bfVals) : 0;
  const bfMax = showBF ? Math.max(...bfVals) : 1;
  const bfRange = bfMax - bfMin || 1;
  const yAtBF = (v: number) => PAD.top + (1 - (v - bfMin) / bfRange) * INNER_H;

  function buildSegments(getVal: (p: WeightPoint) => number | null, yAt: (v: number) => number) {
    const segments: string[][] = [];
    let cur: string[] = [];
    for (const p of points) {
      const v = getVal(p);
      if (v == null) {
        if (cur.length > 0) segments.push(cur);
        cur = [];
      } else {
        cur.push(`${xAt(p.date)},${yAt(v)}`);
      }
    }
    if (cur.length > 0) segments.push(cur);
    return segments;
  }
  const weightSegments = buildSegments((p) => p.weight, yAtW);
  const bfSegments = showBF ? buildSegments((p) => p.body_fat_pct, yAtBF) : [];

  const labelPoints = [points[0], points[Math.floor((points.length - 1) / 2)], points[points.length - 1]];

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto">
      {[0.25, 0.5, 0.75].map((f) => {
        const y = PAD.top + f * INNER_H;
        return <line key={f} x1={PAD.left} y1={y} x2={PAD.left + INNER_W} y2={y} stroke="#1e293b" strokeWidth={1} />;
      })}
      {[0.25, 0.5, 0.75].map((f) => {
        const y = PAD.top + f * INNER_H;
        return <text key={f} x={PAD.left - 6} y={y + 4} fontSize={10} fill="#64748b" textAnchor="end">{(wMax - f * wRange).toFixed(1)}</text>;
      })}
      {showBF && [0.25, 0.5, 0.75].map((f) => {
        const y = PAD.top + f * INNER_H;
        return <text key={f} x={PAD.left + INNER_W + 6} y={y + 4} fontSize={10} fill="#a78bfa" textAnchor="start">{(bfMax - f * bfRange).toFixed(1)}%</text>;
      })}
      {weightSegments.map((seg, i) => (
        <polyline key={`w${i}`} points={seg.join(" ")} fill="none" stroke="#38bdf8" strokeWidth={2.5} strokeLinejoin="round" strokeLinecap="round" />
      ))}
      {validWeights.map((p, i) => (
        <circle key={`wc${i}`} cx={xAt(p.date)} cy={yAtW(p.weight as number)} r={2.5} fill="#38bdf8" />
      ))}
      {showBF && bfSegments.map((seg, i) => (
        <polyline key={`bf${i}`} points={seg.join(" ")} fill="none" stroke="#a78bfa" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
      ))}
      {showBF && validBF.map((p, i) => (
        <circle key={`bfc${i}`} cx={xAt(p.date)} cy={yAtBF(p.body_fat_pct as number)} r={2} fill="#a78bfa" />
      ))}
      {labelPoints.map((p, i) => (
        <text key={i} x={xAt(p.date)} y={H - 6} fontSize={10} fill="#64748b" textAnchor={i === 0 ? "start" : i === labelPoints.length - 1 ? "end" : "middle"}>
          {formatDate(p.date)}
        </text>
      ))}
    </svg>
  );
}

export function AdherenceChart({ days }: { days: AdherenceDay[] }) {
  const withData = days.filter((d) => d.deficit_surplus != null);
  if (withData.length < 2) return null;

  const minDate = days[0].date;
  const span = Math.max(1, daysBetween(minDate, days[days.length - 1].date));
  const xAt = (date: string) => PAD.left + (daysBetween(minDate, date) / span) * INNER_W;

  const maxAbs = Math.max(300, ...withData.map((d) => Math.abs(d.deficit_surplus as number)));
  const midY = PAD.top + INNER_H / 2;
  const halfH = INNER_H / 2 - 4;
  const barW = Math.max(3, INNER_W / days.length - 3);

  const labelPoints = [days[0], days[Math.floor((days.length - 1) / 2)], days[days.length - 1]];

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto">
      <line x1={PAD.left} y1={midY} x2={PAD.left + INNER_W} y2={midY} stroke="#1e293b" strokeWidth={1} />
      <text x={PAD.left - 6} y={PAD.top + 10} fontSize={10} fill="#64748b" textAnchor="end">deficit</text>
      <text x={PAD.left - 6} y={H - PAD.bottom - 2} fontSize={10} fill="#64748b" textAnchor="end">surplus</text>
      {withData.map((d, i) => {
        const v = d.deficit_surplus as number;
        const h = Math.min(halfH, (Math.abs(v) / maxAbs) * halfH);
        const y = v >= 0 ? midY - h : midY;
        return <rect key={i} x={xAt(d.date) - barW / 2} y={y} width={barW} height={h} fill="#64748b" rx={1} />;
      })}
      {labelPoints.map((d, i) => (
        <text key={i} x={xAt(d.date)} y={H - 6} fontSize={10} fill="#64748b" textAnchor={i === 0 ? "start" : i === labelPoints.length - 1 ? "end" : "middle"}>
          {formatDate(d.date)}
        </text>
      ))}
    </svg>
  );
}
