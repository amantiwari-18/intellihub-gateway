import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  lead,
  meta,
  children,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  meta?: { label: string; value: string }[];
  children?: ReactNode;
}) {
  return (
    <section className="paper-hero relative border-b border-border">
      <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1400px] px-4 pb-12 pt-10 sm:px-6 sm:pt-14">
        {children}
        {eyebrow && (
          <span className="accent-chip mono-num mb-4 inline-block rounded-full px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.16em]">
            {eyebrow}
          </span>
        )}
        <h1 className="max-w-4xl text-[clamp(1.75rem,4.6vw,3rem)] font-black leading-[1.1]">{title}</h1>
        {lead && <p className="mt-4 max-w-3xl text-[1rem] leading-[1.8] text-ink-soft">{lead}</p>}
        {meta && meta.length > 0 && (
          <dl className="mt-7 flex flex-wrap gap-2.5">
            {meta.map((m) => (
              <div key={m.label} className="surface-card px-4 py-2.5">
                <dt className="mono-num text-[0.6rem] uppercase tracking-[0.16em] text-muted-foreground">{m.label}</dt>
                <dd className="mono-num mt-0.5 text-[0.92rem] font-bold text-ink">{m.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  );
}
