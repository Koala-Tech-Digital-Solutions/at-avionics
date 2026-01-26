import React from "react";

export default function Section({ eyebrow, title, subtitle, children }) {
  return (
    <section className="py-10 md:py-14">
      {(eyebrow || title || subtitle) && (
        <header className="max-w-3xl">
          {eyebrow ? (
            <div className="text-xs font-semibold tracking-wider uppercase text-brand-accent">
              {eyebrow}
            </div>
          ) : null}
          {title ? (
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">
              {title}
            </h2>
          ) : null}
          {subtitle ? (
            <p className="mt-3 text-slate-600 max-w-prose">{subtitle}</p>
          ) : null}
        </header>
      )}

      <div className="mt-6">{children}</div>
    </section>
  );
}

