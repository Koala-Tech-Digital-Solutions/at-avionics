import React from "react";
import PageShell from "../components/PageShell";
import { Link } from "react-router-dom";
import { FileCheck2, ShieldCheck, Timer, UserRound } from "lucide-react";
import CTA from "../components/CTA";
import { BRAND } from "../data/brand";

export default function About() {
  const team = [
    {
      name: "Wilfer Ossa",
      role: "Avionics Specialist",
      bio: "Retired from the Colombian Air Force with 25 years of experience in avionics. Served as an Avionics Technician, Inspector, and Section Chief of Avionics. Holds an active FCC General Radiotelephone Operator License. Extensive knowledge in troubleshooting, maintenance, and system integration. Currently has 2 years of hands-on experience in the U.S. aviation sector, specializing in panel with a specialization in panel upgrades (analog to digital conversions).",
      initials: "WO",
    },
    {
      name: "Carlos Garcia",
      role: "Avionics Technician",
      bio: "Avionics and electrical systems technician with over 25 years of experience. Formerly employed by Aviónica de Occidente (Cali, Colombia) as a certified Aircraft Maintenance Technician (TMA 0837), focused on avionics installations, inspections, and repairs. Holds an active FCC General Radiotelephone Operator License. Brings 3 years of experience working in the U.S. general aviation industry. Skilled in maintenance and avionics integration on a range of airframes, including Cessna 150/152/180/182 and Piper PA-28 series.",
      initials: "CG",
    },
    {
      name: "Rubén Darío Charry Reinoso ",
      role: "Role / Title",
      bio: "Aeronautical maintenance technologist and industrial engineer with a solid track record in asset optimization, reliability, and business processes. Specialized in asset management in complex environments, with expertise in comprehensive solutions for the aviation industry. Trained in maintenance planning, scheduling, and strategic maintenance management, integrating technical rigor with strategic vision.",
      initials: "RD",
    },
  ];

  return (
    <PageShell
      eyebrow="About"
      title="About A&T"
      subtitle="Built on precision, trust, and aviation professionalism."
    >
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div className="surface p-6 md:p-8 text-slate-700">
          <div className="rounded-3xl overflow-hidden border border-slate-200 bg-slate-100">
            <div className="relative h-44 sm:h-56">
              <img
                src="/images/cessna-152.jpg"
                alt="General aviation aircraft"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="inline-flex items-center rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-semibold text-slate-900">
                  General aviation, done right
                </div>
              </div>
            </div>
          </div>

          <p className="text-slate-800">
            We focus on clean workmanship, clear communication, and dependable
            outcomes. That means tidy routing, disciplined testing, and
            documentation that makes future service easier.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
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

          <div className="mt-6 surface-muted p-6">
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
          </div>
        </div>

        <aside className="surface p-6 md:p-8">
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
        </aside>
      </div>

      <section className="mt-10 surface p-6 md:p-8">
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
          {team.map((p, idx) => (
            <EmployeeCard key={idx} person={p} />
          ))}
        </div>
      </section>

      <div className="mt-10">
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

function InfoRow({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl bg-slate-50 border border-slate-200 p-3">
      <div className="text-xs text-slate-500">{label}</div>
      <div className="text-sm font-semibold text-slate-900 text-right break-words max-w-[65%]">
        {value}
      </div>
    </div>
  );
}

function EmployeeCard({ person }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6">
      <div className="flex items-start gap-4">
        <div className="h-14 w-14 rounded-2xl bg-slate-900 text-white grid place-items-center shrink-0">
          <span className="font-semibold">{person.initials || "AT"}</span>
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <div className="font-semibold text-slate-900 truncate">
              {person.name}
            </div>
            <UserRound className="h-4 w-4 text-slate-400" />
          </div>
          <div className="mt-1 text-sm text-slate-600">{person.role}</div>
          <p className="mt-3 text-sm text-slate-600">{person.bio}</p>
        </div>
      </div>
    </div>
  );
}
