import React from "react";
import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";
import { BRAND } from "../data/brand";

export default function Thanks() {
  return (
    <PageShell
      title="Thanks — we got your request"
      subtitle="We’ll review the details and contact you soon. If it’s urgent, call us."
    >
      <div className="rounded-3xl border border-slate-200 p-6 text-slate-700">
        <div className="flex flex-wrap gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 transition"
          >
            Back Home
          </Link>

          <a
            href={`tel:${BRAND.phone.replace(/[^0-9+]/g, "")}`}
            className="inline-flex items-center justify-center rounded-2xl border border-slate-200 px-4 py-2.5 text-sm font-semibold hover:bg-slate-50 transition"
          >
            Call Now
          </a>
        </div>
      </div>
    </PageShell>
  );
}
