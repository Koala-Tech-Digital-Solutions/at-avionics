import React from "react";
import PageShell from "../components/PageShell";
import { Link } from "react-router-dom";
import { FileCheck2, ShieldCheck, Timer, UserRound } from "lucide-react";
import CTA from "../components/CTA";

export default function About() {
  const team = [
    {
      name: "Rubén Darío Charry Reinoso",
      role: "Accountable Manager",
      photo: "/images/team/ruben-charry.jpg",
      bio: "Supports repair station operations through maintenance planning, scheduling, reliability analysis, and process improvement. Focused on documentation control, asset optimization, and operational efficiency aligned with U.S. aviation standards.",
      initials: "RD",
    },
    {
      name: "Wilfer Ossa",
      role: "Quality Manager",
      photo: "/images/team/wilfer-ossa.jpg",
      bio: "Avionics specialist with extensive experience in troubleshooting, system integration, and inspections. Former Colombian Air Force avionics technician and inspector, currently supporting U.S. general aviation with a focus on clean panel upgrades, analog-to-digital conversions, and documentation-first installations. Holds an active FCC General Radiotelephone Operator License.",
      initials: "WO",
    },

    {
      name: "Carlos Garcia",
      role: "Avionics Lead Technician",
      photo: "/images/team/carlos-garcia.jpg",
      bio: "Avionics technician with over 25 years of experience in installations, inspections, and repairs. Currently supporting U.S. general aviation aircraft, including Cessna and Piper platforms, with a focus on reliable avionics integration and compliant maintenance practices. Holds an active FCC General Radiotelephone Operator License.",
      initials: "CG",
    },
  ];

  return (
    <PageShell
      eyebrow="About"
      title="About A&T"
      subtitle="Built on precision, trust, and aviation professionalism."
    >
      {/* Main content */}
      <div className="max-w-6xl mx-auto w-full surface p-6 md:p-8 text-slate-700">
        {/* Image + text (Option A) */}
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
            <div className="relative aspect-[4/3]">
              <img
                src="/images/cessna-152.jpg"
                alt="General aviation aircraft"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3">
                <div className="inline-flex items-center rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-semibold text-slate-900">
                  General aviation, done right
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-slate-800 text-base md:text-lg leading-relaxed">
              We focus on clean workmanship, clear communication, and dependable
              outcomes. That means tidy routing, disciplined testing, and
              documentation that makes future service easier.
            </p>
          </div>
        </div>

        {/* Principles */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Principle
            icon={ShieldCheck}
            title="Quality workmanship"
            body="Clean routing, consistent labeling, and attention to detail."
          />
          <Principle
            icon={FileCheck2}
            title="Documentation-first"
            body="Clear close-out notes so you know what was done and why."
          />
          <Principle
            icon={Timer}
            title="Respect your time"
            body="Simple updates and clear decisions when scope affects schedule."
          />
        </div>

        {/* Quote section */}
        {/* <div className="mt-8 surface-muted p-6">
          <div className="text-sm font-semibold">What we need to quote</div>
          <p className="mt-2 text-sm text-slate-600">
            Aircraft make/model, tail number, current avionics (if known), and
            the outcome you want. That’s enough to start.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-primary">
              Request a Quote
            </Link>
            <Link to="/services" className="btn-secondary">
              View services
            </Link>
          </div>
        </div> */}
      </div>

      {/* Team */}
      <section className="mt-10 max-w-6xl mx-auto w-full surface p-6 md:p-8">
        <div className="text-xs font-semibold tracking-wider uppercase text-brand-accent">
          Team
        </div>
        <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">
          Meet the people behind the work
        </h2>
        <p className="mt-3 text-slate-600 max-w-prose">
          Real people, clear communication, and a consistent standard for clean
          installs and dependable support.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {team.map((p) => (
            <EmployeeCard key={p.name} person={p} />
          ))}
        </div>
      </section>

      <div className="mt-10 max-w-6xl mx-auto w-full">
        <CTA />
      </div>
    </PageShell>
  );
}

function Principle({ icon: Icon, title, body }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex items-start gap-3">
        <div className="h-9 w-9 rounded-2xl bg-brand-accent/10 text-brand-accent grid place-items-center">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <div className="text-sm font-semibold text-slate-900">{title}</div>
          <div className="mt-1 text-xs text-slate-600">{body}</div>
        </div>
      </div>
    </div>
  );
}

function EmployeeCard({ person }) {
  const [imgOk, setImgOk] = React.useState(true);

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6">
      <div className="flex items-start gap-4">
        <div className="relative h-16 w-16 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shrink-0">
          {person.photo && imgOk ? (
            <img
              src={person.photo}
              alt={`${person.name} headshot`}
              className="h-full w-full object-cover"
              loading="lazy"
              onError={() => setImgOk(false)}
            />
          ) : (
            <div className="h-full w-full grid place-items-center bg-slate-900 text-white">
              <span className="font-semibold">{person.initials || "AT"}</span>
            </div>
          )}
        </div>

        <div className="min-w-0">
          <div className="flex items-start gap-2">
            <div className="font-semibold text-slate-900 break-words leading-snug">
              {person.name}
            </div>
            <UserRound className="h-4 w-4 text-slate-400 mt-0.5 shrink-0" />
          </div>

          <div className="mt-1 text-sm text-slate-600 break-words">
            {person.role}
          </div>

          <p className="mt-3 text-[13px] text-slate-600 leading-6 text-left">
            {person.bio}
          </p>
        </div>
      </div>
    </div>
  );
}

{
  /* <aside className="surface p-6 md:p-8">
          <div className="text-sm font-semibold">At a glance</div>
          <div className="mt-4 grid gap-3 text-sm text-slate-700">
            <InfoRow label="Shop" value={BRAND.name} />
            <InfoRow label="Phone" value={BRAND.phone} />
            <InfoRow label="Email" value={BRAND.email} />
            <InfoRow label="Location" value={BRAND.address} />
            <InfoRow label="Hours" value={BRAND.hours} />
          </div>

          <div className="mt-6 text-xs text-slate-500">
            Want this page to include your certifications, brands you install,
            and airports you serve? Tell me what to add and I’ll format it
            professionally.
          </div>
        </aside> */
}
