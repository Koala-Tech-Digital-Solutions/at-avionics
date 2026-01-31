import React from "react";
import PageShell from "../components/PageShell";
import { Tag } from "lucide-react";
import CTA from "../components/CTA";
import BeforeAfter from "../components/BeforeAfter";
import Lightbox from "../components/Lightbox";
import { GALLERY_ITEMS } from "../data/gallery";

export default function Capabilities() {
  const filters = React.useMemo(() => {
    const tags = Array.from(new Set(GALLERY_ITEMS.map((i) => i.tag)));
    return ["All", ...tags];
  }, []);

  const [active, setActive] = React.useState("All");
  const [selected, setSelected] = React.useState(null);

  const shown =
    active === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((i) => i.tag === active);

  return (
    <PageShell
      eyebrow="Capabilities"
      title="Work Gallery"
      subtitle="Before/after examples of our workmanship — clean installs, tidy routing, and documentation-first close-out."
    >
      {/* Filters */}
      <div className="surface p-6 md:p-8">
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => {
            const on = active === f;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setActive(f)}
                className={[
                  "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold transition border",
                  on
                    ? "bg-slate-900 text-white border-slate-900"
                    : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50",
                ].join(" ")}
              >
                <Tag className="h-3.5 w-3.5" />
                {f}
              </button>
            );
          })}
        </div>
      </div>

      {/* Gallery grid */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((item) => {
          const isBeforeAfter = !!(item.before && item.after);

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelected(item)}
              className="surface overflow-hidden text-left hover:shadow-lg transition"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                {isBeforeAfter ? (
                  <BeforeAfter
                    before={item.thumbBefore || item.before}
                    after={item.thumbAfter || item.after}
                    alt={item.alt}
                    className="absolute inset-0"
                  />
                ) : (
                  <img
                    src={item.thumb || item.image}
                    alt={item.alt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                )}
              </div>

              <div className="p-4">
                <div className="font-semibold text-slate-900">{item.title}</div>
                <div className="mt-1 text-xs text-slate-600">{item.tag}</div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={!!selected}
        onClose={() => setSelected(null)}
        title={selected?.title}
      >
        {selected ? (
          <div className="grid gap-4">
            <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-white/10">
              {selected.before && selected.after ? (
                <BeforeAfter
                  before={selected.before}
                  after={selected.after}
                  alt={selected.alt}
                  placeholderBefore={selected.thumbBefore || selected.before}
                  placeholderAfter={selected.thumbAfter || selected.after}
                  className="absolute inset-0"
                />
              ) : (
                <img
                  src={selected.image}
                  alt={selected.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full bg-white/10 border border-white/10 text-white text-xs font-semibold px-3 py-1">
                {selected.tag}
              </span>
            </div>
          </div>
        ) : null}
      </Lightbox>

      <div className="mt-10">
        <CTA />
      </div>
    </PageShell>
  );
}
