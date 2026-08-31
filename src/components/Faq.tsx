import { useState } from "react";
import type { Faq as FaqType } from "@/lib/data";

export function FaqAccordion({ items }: { items: FaqType[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mt-4 grid gap-2.5">
      {items.map((f, i) => (
        <div key={f.q} className="surface-card overflow-hidden">
          <button
            type="button"
            aria-expanded={open === i}
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-[0.94rem] font-bold text-ink hover:text-primary"
          >
            {f.q}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className={`shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`}
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
          {open === i && (
            <p className="px-5 pb-5 text-[0.9rem] leading-relaxed text-ink-soft">{f.a}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export function faqJsonLd(items: FaqType[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
