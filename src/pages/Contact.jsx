import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BRAND } from "../data/brand";
import PageShell from "../components/PageShell";

// Frontend-only submission (no backend required).
// Set in `.env` as: VITE_FORMSPREE_ENDPOINT="https://formspree.io/f/xxxxxxx"
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || "";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function Contact() {
  const navigate = useNavigate();
  const [startedAt] = useState(() => Date.now());

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    aircraft: "",
    tailNumber: "",
    avionics: "",
    request: "",
    timeline: "",
    // honeypot (spam trap)
    company: "",
  });

  const [status, setStatus] = useState({ state: "idle", message: "" });
  // state: idle | submitting | error

  const missingRequired =
    !form.name.trim() ||
    !form.email.trim() ||
    !isValidEmail(form.email) ||
    !form.aircraft.trim() ||
    !form.request.trim();

  const payload = useMemo(
    () => ({
      name: form.name,
      email: form.email,
      phone: form.phone,
      aircraft: form.aircraft,
      tailNumber: form.tailNumber,
      currentAvionics: form.avionics,
      requestedWork: form.request,
      timeline: form.timeline,
      // Helpful metadata for inbox filtering in form providers.
      subject: `Quote request — ${form.aircraft}${form.tailNumber ? ` (${form.tailNumber})` : ""}`,
    }),
    [form]
  );

  const canSubmit =
    !!FORMSPREE_ENDPOINT &&
    status.state !== "submitting" &&
    !missingRequired &&
    typeof navigator !== "undefined" &&
    navigator.onLine !== false;

  const mailtoHref = useMemo(() => {
    const subject = `Quote request — ${form.aircraft || "Aircraft"}${
      form.tailNumber ? ` (${form.tailNumber})` : ""
    }`;
    const body = [
      `Name: ${form.name || "-"}`,
      `Email: ${form.email || "-"}`,
      `Phone: ${form.phone || "-"}`,
      `Aircraft: ${form.aircraft || "-"}`,
      `Tail Number: ${form.tailNumber || "-"}`,
      `Current Avionics: ${form.avionics || "-"}`,
      `Requested Work: ${form.request || "-"}`,
      `Timeline: ${form.timeline || "-"}`,
    ].join("\n");

    return `mailto:${encodeURIComponent(BRAND.email)}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }, [form]);

  async function onSubmit(e) {
    e.preventDefault();

    // If bot filled honeypot, act like success but do nothing
    if (form.company.trim()) {
      navigate("/thanks");
      return;
    }

    // Basic bot mitigation: humans don’t submit instantly.
    if (Date.now() - startedAt < 1500) {
      setStatus({
        state: "error",
        message: "Please take a moment to review your details, then submit again.",
      });
      return;
    }

    if (missingRequired) {
      setStatus({
        state: "error",
        message: "Please complete all required fields.",
      });
      return;
    }

    if (!FORMSPREE_ENDPOINT) {
      setStatus({
        state: "error",
        message:
          "This form isn’t configured yet. Use the email button below (or set VITE_FORMSPREE_ENDPOINT).",
      });
      return;
    }

    setStatus({ state: "submitting", message: "Sending…" });

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        let msg = "Something went wrong. Please try again.";
        try {
          const data = await res.json();
          if (data?.errors?.length) msg = data.errors[0].message;
        } catch {
          // ignore
        }
        setStatus({ state: "error", message: msg });
        return;
      }

      // redirect on success
      navigate("/thanks");
    } catch {
      setStatus({
        state: "error",
        message: "Network error. Please try again.",
      });
    }
  }

  return (
    <PageShell
      title="Request a Quote"
      subtitle="Fill out the form below. We’ll respond with next steps and a clear estimate."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <form
          onSubmit={onSubmit}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          {/* Honeypot hidden field */}
          <div className="hidden" aria-hidden="true">
            <label>
              Company
              <input
                value={form.company}
                onChange={(e) =>
                  setForm((p) => ({ ...p, company: e.target.value }))
                }
                tabIndex={-1}
                autoComplete="off"
              />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              label="Name *"
              value={form.name}
              onChange={(v) => setForm((p) => ({ ...p, name: v }))}
            />
            <Field
              label="Email *"
              type="email"
              value={form.email}
              onChange={(v) => setForm((p) => ({ ...p, email: v }))}
            />

            <Field
              label="Phone"
              value={form.phone}
              onChange={(v) => setForm((p) => ({ ...p, phone: v }))}
            />
            <Field
              label="Tail Number"
              placeholder="e.g., N123AB"
              value={form.tailNumber}
              onChange={(v) => setForm((p) => ({ ...p, tailNumber: v }))}
            />

            <Field
              label="Aircraft Make / Model *"
              placeholder="e.g., Cessna 172S"
              value={form.aircraft}
              onChange={(v) => setForm((p) => ({ ...p, aircraft: v }))}
              className="sm:col-span-2"
            />

            <Textarea
              label="Current Avionics"
              placeholder="Example: GNS430W, GTX345, audio panel…"
              value={form.avionics}
              onChange={(v) => setForm((p) => ({ ...p, avionics: v }))}
              className="sm:col-span-2"
            />

            <Textarea
              label="Requested Work *"
              placeholder="Install, upgrade, troubleshoot, ADS-B, etc."
              value={form.request}
              onChange={(v) => setForm((p) => ({ ...p, request: v }))}
              className="sm:col-span-2"
            />

            <Field
              label="Timeline"
              placeholder="ASAP, next annual, flexible…"
              value={form.timeline}
              onChange={(v) => setForm((p) => ({ ...p, timeline: v }))}
              className="sm:col-span-2"
            />
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <button
              type="submit"
              disabled={!canSubmit}
              className={
                !canSubmit
                  ? "rounded-2xl bg-slate-300 text-slate-600 px-4 py-2.5 text-sm font-semibold cursor-not-allowed"
                  : "rounded-2xl bg-slate-900 text-white px-4 py-2.5 text-sm font-semibold hover:bg-slate-800 transition"
              }
            >
              {status.state === "submitting"
                ? "Sending…"
                : "Send Quote Request"}
            </button>

            <a
              href={mailtoHref}
              className="rounded-2xl border border-slate-200 px-4 py-2.5 text-sm font-semibold hover:bg-slate-50 transition"
            >
              Email Instead
            </a>

            <a
              href={`tel:${BRAND.phone.replace(/[^0-9+]/g, "")}`}
              className="rounded-2xl border border-slate-200 px-4 py-2.5 text-sm font-semibold hover:bg-slate-50 transition"
            >
              Call Instead
            </a>
          </div>

          {!FORMSPREE_ENDPOINT ? (
            <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950">
              The on-site form is not configured yet. Create a Formspree form and
              set <code>VITE_FORMSPREE_ENDPOINT</code> in <code>.env</code>.
            </div>
          ) : null}

          {status.state === "error" ? (
            <div className="mt-4 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-900">
              {status.message}
            </div>
          ) : null}

          {!canSubmit && FORMSPREE_ENDPOINT ? (
            <p className="mt-4 text-xs text-slate-500">
              Tip: complete required fields, and ensure you’re online.
            </p>
          ) : null}
        </form>

        <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <div className="text-base font-semibold">Contact Details</div>
          <div className="mt-1 text-sm text-slate-600">
            Questions before requesting a quote?
          </div>

          <div className="mt-5 space-y-3">
            <Info label="Phone" value={BRAND.phone} />
            <Info label="Email" value={BRAND.email} />
            <Info label="Location" value={BRAND.address} />
            <Info label="Hours" value={BRAND.hours} />
          </div>
        </aside>
      </div>
    </PageShell>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder = "",
  className = "",
}) {
  return (
    <label className={`grid gap-2 ${className}`}>
      <span className="text-sm font-medium">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="rounded-2xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-slate-900/20"
      />
    </label>
  );
}

function Textarea({
  label,
  value,
  onChange,
  placeholder = "",
  className = "",
}) {
  return (
    <label className={`grid gap-2 ${className}`}>
      <span className="text-sm font-medium">{label}</span>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="min-h-[120px] rounded-2xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-slate-900/20"
      />
    </label>
  );
}

function Info({ label, value }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 rounded-2xl bg-white border border-slate-200 p-3">
      <div className="text-xs text-slate-500">{label}</div>
      <div className="text-sm font-semibold break-words">{value}</div>
    </div>
  );
}
