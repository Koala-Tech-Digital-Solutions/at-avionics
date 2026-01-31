import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  FileCheck2,
  Radar,
  ShieldCheck,
  Timer,
  Wrench,
} from "lucide-react";
import CTA from "../components/CTA";
import Section from "../components/Section";
import { BRAND } from "../data/brand";
import FeaturedInstalls from "../components/FeaturedInstalls";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <div className="relative overflow-hidden">
        {/* Background airplane image */}
        <div className="absolute inset-0">
          <img
            src="/images/hero-airplane.jpg"
            alt="Airplane"
            className="h-full w-full object-cover"
            loading="eager"
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-slate-950/55" />
          {/* Optional extra gradient for polish */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/10 to-white/0" />
        </div>

        {/* Your existing decorative radial gradient */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(900px_circle_at_20%_10%,rgba(37,99,235,0.18),transparent_55%),radial-gradient(700px_circle_at_80%_0%,rgba(15,23,42,0.10),transparent_55%)]" />

        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-4 pt-12 pb-10 md:pt-16 md:pb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center"
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur px-3 py-1 text-xs font-semibold text-white">
                <BadgeCheck className="h-4 w-4 text-brand-accent" />
                Documentation-first installs · Clear communication
              </div>

              <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-white">
                Precision avionics work — built to fly.
              </h1>
              <p className="mt-4 text-white/80 text-base md:text-lg max-w-prose">
                Upgrade with confidence. We focus on clean workmanship, verified
                testing, and clear documentation so you can get back in the air
                without surprises.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {/* <Link to="/contact" className="btn-primary gap-2">
                  Request a Quote <ArrowRight className="h-4 w-4" />
                </Link> */}
                <Link to="/services" className="btn-secondary">
                  Explore Services
                </Link>
              </div>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/80">
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-white" /> Safety &
                  quality workmanship
                </span>
                <span className="inline-flex items-center gap-2">
                  <FileCheck2 className="h-4 w-4 text-white" /> Clean
                  documentation & labeling
                </span>
                <span className="inline-flex items-center gap-2">
                  <Timer className="h-4 w-4 text-white" /> Clear timelines &
                  updates
                </span>
              </div>
            </div>

            {/* <div className="surface-muted p-6 md:p-8 bg-white/85 backdrop-blur">
              <div className="text-sm font-semibold">Fast quote request</div>
              <p className="mt-2 text-sm text-slate-600">
                Share your aircraft, tail number, and what you want to
                accomplish. We’ll respond with next steps and an estimate.
              </p>

              <div className="mt-5 grid gap-3">
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="text-xs font-semibold text-slate-500">
                    Phone
                  </div>
                  <div className="mt-1 text-sm font-semibold">
                    {BRAND.phone}
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="text-xs font-semibold text-slate-500">
                    Email
                  </div>
                  <div className="mt-1 text-sm font-semibold">
                    {BRAND.email}
                  </div>
                </div>
              </div>

              <Link to="/contact" className="btn-primary w-full mt-5">
                Start a Quote Request
              </Link>

              <p className="mt-3 text-xs text-slate-500">
                No long calls required — just the details we need to scope the
                work.
              </p>
            </div> */}
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4">
        <Section
          eyebrow="What we do"
          title="Installations, upgrades, troubleshooting — done cleanly"
          subtitle="A consistent process focused on safety, clarity, and quality workmanship."
        >
          <div className="grid gap-4 md:grid-cols-3">
            <Feature
              icon={Radar}
              title="ADS-B, transponders, GPS/NAV/COMM"
              body="Plan the upgrade, install cleanly, test thoroughly, and document clearly."
            />
            <Feature
              icon={Wrench}
              title="Troubleshooting & repairs"
              body="Intermittent faults, wiring issues, connector repair, bench testing and verification."
            />
            <Feature
              icon={FileCheck2}
              title="Documentation & quality"
              body="Labeling standards, clean routing, and post-install checks you can trust."
            />
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <FeaturedInstalls />
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/services" className="btn-secondary">
              See full services
            </Link>
            <Link to="/capabilities" className="btn-secondary">
              How we work
            </Link>
          </div>
        </Section>

        <Section
          eyebrow="Experience"
          title="A shop that feels organized — because it is"
          subtitle="A quick look at the kinds of aircraft and avionics environments we work in."
        >
          <PhotoGrid />
        </Section>

        <Section
          eyebrow="Why customers choose us"
          title="A smoother project from first call to final sign-off"
          subtitle="We keep the scope clear, the workmanship clean, and the communication simple."
        >
          <div className="grid gap-4 md:grid-cols-2">
            <Value
              title="Clear scope + clear estimate"
              body="We ask for the details up front so you get an accurate plan and fewer surprises."
            />
            <Value
              title="Clean installs you’re proud of"
              body="Thoughtful routing, tidy terminations, consistent labeling, and a panel that looks intentional."
            />
            <Value
              title="Verified testing before delivery"
              body="Functional checks and a disciplined close-out so you can fly with confidence."
            />
            <Value
              title="Communication that respects your time"
              body="Simple updates on timeline and any decisions that affect cost or schedule."
            />
          </div>
        </Section>

        <CTA />
      </div>
    </main>
  );
}

function Feature({ icon: Icon, title, body }) {
  return (
    <div className="surface p-6">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-2xl bg-brand-accent/10 text-brand-accent grid place-items-center">
          <Icon className="h-5 w-5" />
        </div>
        <div className="font-semibold">{title}</div>
      </div>
      <p className="mt-3 text-sm text-slate-600">{body}</p>
    </div>
  );
}

function Value({ title, body }) {
  return (
    <div className="surface p-6">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 h-8 w-8 rounded-xl bg-slate-900 text-white grid place-items-center">
          <ShieldCheck className="h-4 w-4" />
        </div>
        <div>
          <div className="font-semibold">{title}</div>
          <p className="mt-2 text-sm text-slate-600">{body}</p>
        </div>
      </div>
    </div>
  );
}

function PhotoGrid() {
  const photos = [
    {
      src: "/images/cessna-152.jpg",
      alt: "Cessna 152 aircraft on the ramp",
      label: "Experts who help you get the best out of your aircraft.",
    },
    {
      src: "/images/glass-cockpit.jpg",
      alt: "Glass cockpit avionics panel",
      label: "Modern avionics environments",
    },
    {
      src: "/images/hangar.jpg",
      alt: "Aircraft hangar interior",
      label: "Organized workspace standards",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {photos.map((p) => (
        <figure key={p.src} className="surface overflow-hidden">
          <div className="relative aspect-[4/3]">
            <img
              src={p.src}
              alt={p.alt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/55 via-transparent to-transparent" />
            <figcaption className="absolute bottom-0 left-0 right-0 p-4">
              <div className="inline-flex items-center rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-semibold text-slate-900">
                {p.label}
              </div>
            </figcaption>
          </div>
        </figure>
      ))}
    </div>
  );
}
