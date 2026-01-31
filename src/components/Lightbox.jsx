import React from "react";
import { X } from "lucide-react";

export default function Lightbox({ open, onClose, title, children }) {
  React.useEffect(() => {
    if (!open) return;

    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };

    document.addEventListener("keydown", onKey);
    // lock scroll
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-slate-950/70 backdrop-blur-sm"
      onMouseDown={(e) => {
        // close when clicking the backdrop
        if (e.target === e.currentTarget) onClose?.();
      }}
    >
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur shadow-xl overflow-hidden">
          <div className="flex items-center justify-between gap-3 px-4 sm:px-6 py-4 border-b border-white/10">
            <div className="min-w-0">
              <div className="text-white font-semibold truncate">{title}</div>
              <div className="text-white/70 text-xs">
                Click outside or press Esc to close
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-white hover:bg-white/15 transition h-10 w-10"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="p-4 sm:p-6">{children}</div>
        </div>
      </div>
    </div>
  );
}
