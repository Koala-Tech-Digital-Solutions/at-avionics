import React from "react";
import { Link } from "react-router-dom";
import BeforeAfter from "./BeforeAfter";
import { GALLERY_ITEMS } from "../data/gallery";

export default function FeaturedInstalls() {
  const featured = GALLERY_ITEMS.filter((i) => i.featured).slice(0, 3);

  return (
    <section className="mt-10">
      <div className="flex items-end justify-between gap-4">
        <div>
          <div className="text-xs font-semibold tracking-wider uppercase text-brand-accent">
            Featured installs
          </div>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">
            Before / after highlights
          </h2>
          <p className="mt-2 text-slate-600 max-w-prose">
            A few examples of the clean workmanship standards we aim for.
          </p>
        </div>

        <Link to="/gallery" className="btn-secondary shrink-0">
          View gallery
        </Link>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((item) => (
          <div key={item.id} className="surface overflow-hidden">
            <div className="relative aspect-[4/3]">
              <BeforeAfter
                before={item.thumbBefore}
                after={item.thumbAfter}
                alt={item.alt}
                className="absolute inset-0"
              />
            </div>
            <div className="p-4">
              <div className="font-semibold text-slate-900">{item.title}</div>
              <div className="mt-1 text-xs text-slate-600">{item.tag}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
