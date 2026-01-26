import React from "react";
import PageShell from "../components/PageShell";
import { Link } from "react-router-dom";
import { FileCheck2, Radar, ShieldCheck, Timer, Wrench } from "lucide-react";
import CTA from "../components/CTA";

export default function Services() {
  return (
    <PageShell
      eyebrow="Services"
      title="Services"
      subtitle="Installations, upgrades, troubleshooting, and support — with clean workmanship and clear documentation."
    >
      <div className="surface overflow-hidden">
        <div className="relative h-44 sm:h-56 md:h-72">
          <img
            src="/images/hangar.jpg"
            alt="Aircraft hangar"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/30 to-transparent" />
          <div className="absolute inset-0 p-5 sm:p-6 md:p-8 flex items-end">
            <div className="max-w-xl">
              <div className="text-white text-lg sm:text-xl md:text-2xl font-semibold tracking-tight">
                Clean installs. Clear docs. Confident flying.
              </div>
              <div className="mt-1 text-white/85 text-sm sm:text-base">
                We keep scope and communication simple so decisions stay easy.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <ServiceCard
          icon={Radar}
          title="Avionics installation & upgrades"
          body="GPS/NAV/COMM installs, audio panels, transponders, ADS-B and related wiring work — planned and documented."
          bullets={[
            "Precision-Cut, Custom-Built Instrument Panels",
            "Custom Aircraft Wiring Harness Fabrication",
            "Post-install functional checks",
            "Configuration and Programming of Garmin, Dynon, and Avidyne Systems",
          ]}
        />

        <ServiceCard
          icon={Wrench}
          title="Troubleshooting & repairs"
          body="Intermittent faults and hard-to-find issues — resolved with disciplined testing and clear findings."
          bullets={[
            "Wiring / connector repair",
            "Bench testing and verification",
            "Actionable notes for next steps",
            "Remote Technical Support for Avionics Integration",
          ]}
        />

        <ServiceCard
          icon={ShieldCheck}
          title="Maintenance support"
          body="Support that fits your schedule and keeps decisions straightforward."
          bullets={[
            "Functional checks and squawk resolution",
            "Pre-buy avionics evaluation",
            "Coordination for downtime planning",
          ]}
        />

        <ServiceCard
          icon={FileCheck2}
          title="Documentation & quality close-out"
          body="You shouldn’t guess what was done. We keep paperwork, labeling, and testing disciplined."
          bullets={[
            "Labeling standards and clean routing",
            "Verified testing before delivery",
            "Clear sign-off and handover",
            "IFR (Instrument Flight Rules) System Certification",
          ]}
        />
      </div>

      <div className="mt-8 surface p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="text-lg font-semibold">Not sure what you need?</div>
            <p className="mt-2 text-sm text-slate-600 max-w-prose">
              Tell us what you’re flying and what you’re trying to accomplish.
              We’ll help scope the right solution.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="btn-primary">
              Request a Quote
            </Link>
            <Link to="/capabilities" className="btn-secondary">
              Our process
            </Link>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-600">
          <span className="inline-flex items-center gap-2">
            <Timer className="h-4 w-4" /> Clear timelines
          </span>
          <span className="inline-flex items-center gap-2">
            <FileCheck2 className="h-4 w-4" /> Documentation-first
          </span>
          <span className="inline-flex items-center gap-2">
            <ShieldCheck className="h-4 w-4" /> Safety & quality workmanship
          </span>
        </div>
      </div>

      <div className="mt-10">
        <CTA />
      </div>
    </PageShell>
  );
}

function ServiceCard({ icon: Icon, title, body, bullets }) {
  return (
    <div className="surface p-6">
      <div className="flex items-start gap-3">
        <div className="h-10 w-10 rounded-2xl bg-brand-accent/10 text-brand-accent grid place-items-center">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h2 className="font-semibold">{title}</h2>
          <p className="mt-2 text-sm text-slate-600">{body}</p>
        </div>
      </div>

      {bullets?.length ? (
        <ul className="mt-4 grid gap-2 text-sm text-slate-700">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
