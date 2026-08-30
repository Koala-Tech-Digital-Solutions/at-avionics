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
  onIdleClick,
}) {
  const [pct, setPct] = React.useState(55);
  const wrapRef = React.useRef(null);
  const draggingRef = React.useRef(false);
  const startXRef = React.useRef(0);
  const movedRef = React.useRef(false);

  const setFromClientX = React.useCallback((clientX) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.width <= 0) return;
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPct(Math.min(100, Math.max(0, next)));
  }, []);

  const onPointerDown = (e) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    e.preventDefault();
    e.stopPropagation();
    draggingRef.current = true;
    movedRef.current = false;
    startXRef.current = e.clientX;
    e.currentTarget.setPointerCapture(e.pointerId);
    setFromClientX(e.clientX);
  };

  const onPointerMove = (e) => {
    if (!draggingRef.current) return;
    e.preventDefault();
    e.stopPropagation();
    if (Math.abs(e.clientX - startXRef.current) > 4) movedRef.current = true;
    setFromClientX(e.clientX);
  };

  const endDrag = (e) => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    e.stopPropagation();
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // already released
    }
    if (!movedRef.current) onIdleClick?.();
  };

  return (
    <div
      ref={wrapRef}
      className={`relative h-full w-full overflow-hidden rounded-3xl touch-none select-none ${className}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onClick={(e) => e.stopPropagation()}
    >
      {/* BEFORE */}
      <div className="absolute inset-0 pointer-events-none">
        <LazyImage
          src={before}
          alt={alt}
          placeholderSrc={placeholderBefore}
          className="h-full w-full object-cover"
        />
      </div>

      {/* AFTER (clipped) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}
      >
        <LazyImage
          src={after}
          alt={alt}
          placeholderSrc={placeholderAfter}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Divider + drag handle */}
      <div
        className="absolute top-0 bottom-0 z-10 w-12 -translate-x-1/2 cursor-ew-resize"
        style={{ left: `${pct}%` }}
        aria-hidden
      >
        <div className="absolute top-0 bottom-0 left-1/2 w-[2px] -translate-x-1/2 bg-white/80" />
        <div className="absolute top-1/2 left-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/40 bg-white/15 backdrop-blur grid place-items-center">
          <span className="text-white text-xs font-semibold">↔</span>
        </div>
      </div>

      {/* Labels */}
      <div className="pointer-events-none absolute left-3 top-3 rounded-full bg-slate-900/55 text-white text-xs font-semibold px-3 py-1 backdrop-blur">
        {beforeLabel}
      </div>
      <div className="pointer-events-none absolute right-3 top-3 rounded-full bg-slate-900/55 text-white text-xs font-semibold px-3 py-1 backdrop-blur">
        {afterLabel}
      </div>

      {/* Keyboard slider */}
      <input
        aria-label="Before and after comparison slider"
        type="range"
        min="0"
        max="100"
        value={pct}
        onChange={(e) => setPct(Number(e.target.value))}
        onPointerDown={(e) => e.stopPropagation()}
        className="absolute inset-x-3 bottom-3 z-20 w-[calc(100%-24px)] accent-white"
      />
    </div>
  );
}
