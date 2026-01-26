import React from "react";
import { NavLink } from "react-router-dom";
import { BRAND } from "../data/brand";

function linkClass({ isActive }) {
  return [
    "rounded-xl px-3 py-2 text-sm font-medium transition",
    isActive ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-100",
  ].join(" ");
}

export default function TopBar() {
  return (
    <header className="border-b border-slate-200 sticky top-0 bg-white/80 backdrop-blur z-50">
      <div className="hidden md:block border-b border-slate-200/60 bg-white/40">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between text-xs text-slate-600">
          <div className="truncate">{BRAND.address}</div>
          <div className="flex items-center gap-4">
            <a
              className="hover:text-slate-900 transition"
              href={`tel:${BRAND.phone.replace(/[^0-9+]/g, "")}`}
            >
              {BRAND.phone}
            </a>
            <a
              className="hover:text-slate-900 transition"
              href={`mailto:${BRAND.email}`}
            >
              {BRAND.email}
            </a>
          </div>
        </div>
      </div>

      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3 sm:gap-4">
        {/* Brand */}
        <NavLink to="/" className="flex items-center shrink-0">
          <img
            src="/logo.png"
            alt="A&T Avionics and Maintenance"
            className="h-12 sm:h-14 md:h-16 w-auto max-w-full transition-opacity hover:opacity-90"
          />
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/services" className={linkClass}>
            Services
          </NavLink>
          <NavLink to="/capabilities" className={linkClass}>
            Capabilities
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </div>

        {/* CTA */}
        <NavLink
          to="/contact"
          className="shrink-0 inline-flex items-center justify-center rounded-2xl bg-slate-900 px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-slate-800 transition"
        >
          Get a Quote
        </NavLink>
      </nav>

      {/* Mobile Nav */}
      <div className="md:hidden border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-2 flex flex-wrap gap-2">
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/services" className={linkClass}>
            Services
          </NavLink>
          <NavLink to="/capabilities" className={linkClass}>
            Capabilities
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </div>
      </div>
    </header>
  );
}
