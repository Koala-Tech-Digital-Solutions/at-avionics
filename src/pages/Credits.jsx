import React from "react";
import PageShell from "../components/PageShell";

export default function Credits() {
  return (
    <PageShell
      eyebrow="Credits"
      title="Photo credits"
      subtitle="Some photos are used under Creative Commons licenses."
    >
      <div className="surface p-6 md:p-8 text-sm text-slate-700 space-y-4">
        <Credit
          label="/images/cessna-152.jpg"
          title="Cessna 152 Aircraft"
          author="Md Shaifuzzaman Ayon"
          sourceUrl="https://commons.wikimedia.org/wiki/File:Cessna_152_Aircraft.jpg"
          license="CC BY-SA 4.0"
          licenseUrl="https://creativecommons.org/licenses/by-sa/4.0/"
        />
        <Credit
          label="/images/glass-cockpit.jpg"
          title="SR22TN Perspective Cockpit"
          author="Millz311"
          sourceUrl="https://commons.wikimedia.org/wiki/File:SR22TN_Perspective_Cockpit.jpg"
          license="CC BY-SA 3.0"
          licenseUrl="https://creativecommons.org/licenses/by-sa/3.0/"
        />
        <Credit
          label="/images/hangar.jpg"
          title="Boeing Aviation Hangar (Steven F. Udvar-Hazy Center)"
          author="Jonathan Cutrer"
          sourceUrl="https://commons.wikimedia.org/wiki/File:Boeing_Aviation_Hangar_(48891573528).jpg"
          license="CC BY 2.0"
          licenseUrl="https://creativecommons.org/licenses/by/2.0/"
        />
      </div>
    </PageShell>
  );
}

function Credit({ label, title, author, sourceUrl, license, licenseUrl }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="font-semibold text-slate-900">{title}</div>
      <div className="mt-1 text-xs text-slate-500">{label}</div>
      <div className="mt-2">
        Author: <span className="font-medium">{author}</span>
      </div>
      <div className="mt-1">
        Source:{" "}
        <a className="text-brand-accent hover:underline" href={sourceUrl}>
          Wikimedia Commons
        </a>
      </div>
      <div className="mt-1">
        License:{" "}
        <a className="text-brand-accent hover:underline" href={licenseUrl}>
          {license}
        </a>
      </div>
    </div>
  );
}

