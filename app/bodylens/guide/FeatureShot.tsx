"use client";

import { useState } from "react";

interface FeatureShotProps {
  src: string;
  alt: string;
}

// Renders the screenshot at `src` if it exists; falls back to a clean placeholder
// otherwise. This means adding a real screenshot later is just dropping a PNG at
// the given path in /public — no code changes needed.
export default function FeatureShot({ src, alt }: FeatureShotProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="aspect-[9/19] w-full max-w-[260px] mx-auto rounded-[2rem] border-2 border-dashed border-white/10 bg-white/[0.02] flex flex-col items-center justify-center gap-3 p-6 text-center">
        <span className="text-3xl opacity-40">📱</span>
        <span className="text-xs text-slate-600">Screenshot coming soon</span>
      </div>
    );
  }

  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className="w-full max-w-[260px] mx-auto rounded-[2rem] border border-white/10 shadow-2xl shadow-black/40"
    />
  );
}
