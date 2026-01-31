import React from "react";
import { Link } from "react-router-dom";
import { BRAND } from "../data/brand";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="text-sm font-semibold text-slate-900">
              {BRAND.name}
            </div>
            <p className="mt-2 text-sm text-slate-600 max-w-prose">
              Precision avionics work with clear communication, clean installs,
              and dependable follow-through.
            </p>
          </div>

          <div className="text-sm">
            <div className="font-semibold text-slate-900">Contact</div>
            <div className="mt-2 space-y-2 text-slate-600">
              <a
                className="block hover:text-slate-900 transition"
                href={`tel:${BRAND.phone.replace(/[^0-9+]/g, "")}`}
              >
                {BRAND.phone}
              </a>
              <a
                className="block hover:text-slate-900 transition"
                href={`mailto:${BRAND.email}`}
              >
                {BRAND.email}
              </a>
              <div className="text-slate-600">{BRAND.address}</div>
              <div className="text-slate-500">{BRAND.hours}</div>
            </div>
          </div>

          <div className="text-sm">
            <div className="font-semibold text-slate-900">Explore</div>
            <div className="mt-2 grid gap-2 text-slate-600">
              <Link className="hover:text-slate-900 transition" to="/services">
                Services
              </Link>
              <Link
                className="hover:text-slate-900 transition"
                to="/capabilities"
              >
                Gallery
              </Link>
              <Link className="hover:text-slate-900 transition" to="/about">
                About
              </Link>
              <Link className="hover:text-slate-900 transition" to="/contact">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {BRAND.name} · All rights reserved.
          </div>
          <div className="flex flex-wrap gap-x-3 gap-y-1 text-slate-400">
            <span>Built with safety, clarity, and quality workmanship.</span>
            <Link className="hover:text-slate-600 transition" to="/credits">
              Photo credits
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
