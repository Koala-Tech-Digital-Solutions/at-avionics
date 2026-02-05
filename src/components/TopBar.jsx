import React from "react";
import { NavLink } from "react-router-dom";
import { BRAND } from "../data/brand";
import { Menu, X } from "lucide-react";

function linkClass({ isActive }) {
  return [
    "rounded-xl px-3 py-2 text-sm font-medium transition",
    isActive ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-100",
  ].join(" ");
}

export default function TopBar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="border-b border-slate-200 sticky top-0 bg-white/80 backdrop-blur z-50">
      {/* Top info bar (desktop only) */}
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

      {/* Main nav */}
      <nav className="max-w-6xl mx-auto px-4 flex items-center justify-between gap-3 sm:gap-4 min-h-[76px] md:min-h-[88px]">
        {/* Brand */}
        <NavLink
          to="/"
          className="flex items-center shrink-0"
          onClick={() => setOpen(false)}
          aria-label="Go to homepage"
        >
          <img
            src="/logo.png"
            alt="A&T Avionics and Maintenance"
            className="h-12 sm:h-14 md:h-16 w-auto"
          />
        </NavLink>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-1">
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/services" className={linkClass}>
            Services
          </NavLink>
          <NavLink to="/gallery" className={linkClass}>
            Gallery
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* CTA */}
          <NavLink
            to="/contact"
            className="shrink-0 inline-flex items-center justify-center rounded-2xl bg-slate-900 px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-slate-800 transition"
            onClick={() => setOpen(false)}
          >
            Get a Quote
          </NavLink>

          {/* Hamburger (mobile only) */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-3 py-2 text-slate-900 hover:bg-slate-50 transition"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown (animated) */}
      <div
        className={`md:hidden overflow-hidden border-t border-slate-200 bg-white/95 backdrop-blur transition-all duration-300 ease-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-3 grid gap-2">
          <NavLink
            to="/"
            end
            className={linkClass}
            onClick={() => setOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className={linkClass}
            onClick={() => setOpen(false)}
          >
            Services
          </NavLink>
          <NavLink
            to="/capabilities"
            className={linkClass}
            onClick={() => setOpen(false)}
          >
            Capabilities
          </NavLink>
          <NavLink
            to="/about"
            className={linkClass}
            onClick={() => setOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={linkClass}
            onClick={() => setOpen(false)}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </header>
  );
}
