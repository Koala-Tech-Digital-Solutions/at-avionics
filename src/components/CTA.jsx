import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, PhoneCall } from "lucide-react";
import { BRAND } from "../data/brand";

export default function CTA({
  title = "Ready to plan your next avionics project?",
  subtitle = "Tell us what you’re flying and what you want to accomplish. We’ll respond with next steps and a clear estimate.",
}) {
  return (
    <section className="surface overflow-hidden">
      <div className="relative p-6 md:p-10">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-brand-accent/10 via-transparent to-slate-900/5" />

        <div className="relative grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <div className="text-xl md:text-2xl font-semibold tracking-tight">
              {title}
            </div>
            <p className="mt-2 text-sm md:text-base text-slate-600 max-w-prose">
              {subtitle}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="btn-primary gap-2">
              Request a Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${BRAND.phone.replace(/[^0-9+]/g, "")}`}
              className="btn-secondary gap-2"
            >
              <PhoneCall className="h-4 w-4" />
              Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

