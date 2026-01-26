import React from "react";
import PageShell from "../components/PageShell";
import { Link } from "react-router-dom";
import { CheckCircle2, ClipboardList, FileCheck2, Wrench } from "lucide-react";
import CTA from "../components/CTA";

export default function Capabilities() {
  return (
    <PageShell
      eyebrow="Capabilities"
      title="Capabilities"
      subtitle="A consistent process focused on safety, clarity, and quality workmanship — from planning to final sign‑off."
    >
      <div className="grid gap-4 md:grid-cols-3">
        <Step
          icon={ClipboardList}
          title="1) Scope & plan"
          body="We gather aircraft + goals, confirm constraints, and outline the work so the estimate is clear."
        />
        <Step
          icon={Wrench}
          title="2) Install cleanly"
          body="Tidy routing, consistent labeling, and workmanship that looks intentional — not improvised."
        />
        <Step
          icon={CheckCircle2}
          title="3) Test & deliver"
          body="Functional checks and a disciplined close-out so you can fly with confidence."
        />
      </div>

      <div className="mt-8 surface p-6 md:p-8">
        <div className="grid gap-6 md:grid-cols-2 md:items-start">
          <div>
            <div className="text-lg font-semibold">What we can help with</div>
            <p className="mt-2 text-sm text-slate-600">
              Common work requests we handle across installations, upgrades, and
              troubleshooting.
            </p>

            <ul className="mt-4 grid gap-2 text-sm text-slate-700">
              {[
                "IFR-ready installations",
                "ADS-B solutions and compliance support",
                "Panel planning & layout",
                "Harness building, wiring repair, connector work",
                "Post-install testing & functional checks",
                "Clear documentation and follow-through",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <FileCheck2 className="h-4 w-4 mt-0.5 text-brand-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="surface-muted p-6">
            <div className="text-sm font-semibold">Get scoped quickly</div>
            <p className="mt-2 text-sm text-slate-600">
              The fastest way to start is to share aircraft, tail number, and
              the outcome you want. We’ll respond with next steps.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">
                Request a Quote
              </Link>
              <Link to="/services" className="btn-secondary">
                View services
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <CTA />
      </div>
    </PageShell>
  );
}

function Step({ icon: Icon, title, body }) {
  return (
    <div className="surface p-6">
      <div className="flex items-start gap-3">
        <div className="h-10 w-10 rounded-2xl bg-brand-accent/10 text-brand-accent grid place-items-center">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <div className="font-semibold">{title}</div>
          <p className="mt-2 text-sm text-slate-600">{body}</p>
        </div>
      </div>
    </div>
  );
}
