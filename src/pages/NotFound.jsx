import React from "react";
import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";

export default function NotFound() {
  return (
    <PageShell title="Page not found" subtitle="That route doesn’t exist.">
      <Link
        to="/"
        className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 transition"
      >
        Back Home
      </Link>
    </PageShell>
  );
}
