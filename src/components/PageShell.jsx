import React from "react";

export default function PageShell({ eyebrow, title, subtitle, children }) {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12 md:py-16">
      <header className="relative">
        <div className="absolute -inset-x-6 -inset-y-10 -z-10 pointer-events-none bg-[radial-gradient(700px_circle_at_15%_20%,rgba(37,99,235,0.14),transparent_60%)]" />
        {eyebrow ? (
          <div className="text-xs font-semibold tracking-wider uppercase text-brand-accent">
            {eyebrow}
          </div>
        ) : null}
        <h1 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-3 text-slate-600 max-w-prose">{subtitle}</p>
        ) : null}
      </header>

      <section className="mt-8">{children}</section>
    </main>
  );
}
