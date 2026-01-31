import React from "react";
import PageShell from "../components/PageShell";
import { FileCheck2, Radar, ShieldCheck, Wrench } from "lucide-react";
import CTA from "../components/CTA";

export default function Services() {
  return (
    <PageShell
      eyebrow="Services"
      title="Services"
      subtitle="Installations, upgrades, troubleshooting, and support — with clean workmanship and clear documentation."
    >
      {/* Wrap hero + cards in same container so widths align perfectly */}
      <div className="max-w-6xl mx-auto w-full">
        {/* Hero image (same width rhythm as cards) */}
        <div className="surface overflow-hidden rounded-3xl">
          <div className="relative aspect-[16/6] sm:aspect-[16/5] md:aspect-[16/4]">
            <img
              src="/images/hangar.jpg"
              alt="Aircraft hangar"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Softer overlay (less dark) */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/55 via-slate-900/25 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/10 via-transparent to-transparent" />

            {/* Glass pill text */}
            <div className="absolute inset-0 p-5 sm:p-6 md:p-8 flex items-end">
              <div className="max-w-xl rounded-2xl border border-white/20 bg-white/10 backdrop-blur px-4 py-3 sm:px-5 sm:py-4">
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

        {/* Services grid */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <ServiceCard
            icon={Radar}
            title="Avionics installation & upgrades"
            body="GPS/NAV/COMM installs, audio panels, transponders, ADS-B, and related wiring work — planned and documented."
            bullets={[
              "Precision-cut, custom-built instrument panels",
              "Custom aircraft wiring harness fabrication",
              "Post-install functional checks",
              "Configuration and programming of Garmin, Dynon, and Avidyne systems",
            ]}
          />

          <ServiceCard
            icon={Wrench}
            title="Troubleshooting & repairs"
            body="Intermittent faults and hard-to-find issues — resolved with disciplined testing and clear findings."
            bullets={[
              "Wiring and connector repair",
              "Bench testing and verification",
              "Clear findings and corrective actions",
              "Remote technical support for avionics integration",
            ]}
          />

          <ServiceCard
            icon={ShieldCheck}
            title="Maintenance support"
            body="Support that fits your schedule and keeps decisions straightforward."
            bullets={[
              "Functional checks and squawk resolution",
              "Pre-buy avionics evaluations",
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
              "IFR system certification support",
            ]}
          />
        </div>

        {/* Aircraft support section */}
        <section className="mt-10 surface p-6 md:p-8">
          <div className="text-xs font-semibold tracking-wider uppercase text-brand-accent">
            Aircraft support
          </div>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">
            Aircraft and operations we support
          </h2>
          <p className="mt-3 text-slate-600 max-w-prose">
            We routinely support common general aviation platforms and can scope
            installs for Part 91 operators and Part 135-ready configurations
            where applicable.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="text-sm font-semibold text-slate-900">
                Airframes
              </div>
              <ul className="mt-3 grid gap-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900" />
                  <span>Cessna (150–175 / 182)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900" />
                  <span>Piper (PA-28 / PA-32)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900" />
                  <span>Beechcraft</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900" />
                  <span>Experimental / LSA (as applicable)</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="text-sm font-semibold text-slate-900">
                Operations
              </div>
              <ul className="mt-3 grid gap-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900" />
                  <span>Part 91 maintenance and avionics installs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900" />
                  <span>Part 135-ready installs (where applicable)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900" />
                  <span>
                    IFR-focused configurations and documentation support
                  </span>
                </li>
              </ul>

              <div className="mt-4 text-xs text-slate-500">
                Final eligibility depends on aircraft configuration and
                applicable approvals.
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="mt-10">
          <CTA />
        </div>
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
