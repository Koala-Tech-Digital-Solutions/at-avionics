import React from "react";
import LazyImage from "./LazyImage";

export default function BeforeAfter({
  before,
  after,
  alt,
  beforeLabel = "Before",
  afterLabel = "After",
  className = "",
  placeholderBefore,
  placeholderAfter,
}) {
  const [pct, setPct] = React.useState(55);

  return (
    <div
      className={`relative h-full w-full overflow-hidden rounded-3xl ${className}`}
    >
      {/* BEFORE */}
      <div className="absolute inset-0">
        <LazyImage
          src={before}
          alt={alt}
          placeholderSrc={placeholderBefore}
          className="h-full w-full object-cover"
        />
      </div>

      {/* AFTER (clipped) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}
      >
        <LazyImage
          src={after}
          alt={alt}
          placeholderSrc={placeholderAfter}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Divider */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-white/80"
        style={{ left: `${pct}%` }}
      />
      <div
        className="absolute top-1/2 -translate-y-1/2 h-10 w-10 rounded-full border border-white/40 bg-white/15 backdrop-blur grid place-items-center"
        style={{ left: `${pct}%`, transform: "translate(-50%, -50%)" }}
      >
        <span className="text-white text-xs font-semibold">↔</span>
      </div>

      {/* Labels */}
      <div className="absolute left-3 top-3 rounded-full bg-slate-900/55 text-white text-xs font-semibold px-3 py-1 backdrop-blur">
        {beforeLabel}
      </div>
      <div className="absolute right-3 top-3 rounded-full bg-slate-900/55 text-white text-xs font-semibold px-3 py-1 backdrop-blur">
        {afterLabel}
      </div>

      {/* Slider */}
      <input
        aria-label="Before and after comparison slider"
        type="range"
        min="0"
        max="100"
        value={pct}
        onChange={(e) => setPct(Number(e.target.value))}
        className="absolute inset-x-3 bottom-3 w-[calc(100%-24px)] accent-white"
      />
    </div>
  );
}
