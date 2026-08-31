import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { seo } from "@/lib/seo";
import { SITE, SECTIONS } from "@/lib/site";
import { ENTRIES, daysRemaining } from "@/lib/data";
import { EntryCard } from "@/components/EntryCard";
import { AdSlot } from "@/components/AdSlot";
import { FaqAccordion, faqJsonLd } from "@/components/Faq";

const HOME_FAQS = [
  {
    q: "Does KT-Transfer list every government job and tender?",
    a: "The archive runs into lakhs of records, so the homepage only shows the highest-signal openings. Use a section hub or the search box to reach the full index — each record has its own permanent, indexable page.",
  },
  {
    q: "How fresh is the data?",
    a: "Every published dossier is re-verified against its source notification within 24 hours, and each page carries the verification date in the sidebar.",
  },
  {
    q: "Is KT-Transfer free to use?",
    a: "Yes. The portal is free and supported by advertising. There is no login, no paywall and no application fee collected by us.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    ...seo({
      title: "KT-Transfer — Govt Jobs, Tenders & Settlement Intelligence",
      description:
        "Verified sarkari job dossiers, live public tenders with EMD data, mass-tort settlement matrices and 7th/8th CPC salary calculators. Updated daily.",
      path: "/",
      keywords:
        "government jobs, sarkari naukri, public tenders, EMD calculator, 8th pay commission calculator, settlement claims",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              name: SITE.longName,
              url: "/",
              potentialAction: {
                "@type": "SearchAction",
                target: "/jobs?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            },
            { "@type": "Organization", name: SITE.longName, url: "/" },
            faqJsonLd(HOME_FAQS),
          ],
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  const [q, setQ] = useState("");

  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return [];
    return ENTRIES.filter((e) =>
      [e.title, e.org, e.summary, e.badge, ...e.tags].join(" ").toLowerCase().includes(needle),
    ).slice(0, 6);
  }, [q]);

  const featured = {
    jobs: ENTRIES.filter((e) => e.section === "jobs").slice(0, 3),
    tenders: ENTRIES.filter((e) => e.section === "tenders").slice(0, 3),
    settlements: ENTRIES.filter((e) => e.section === "settlements").slice(0, 3),
  };
  const openCount = ENTRIES.filter((e) => !daysRemaining(e.deadline).closed).length;

  return (
    <>
      {/* HERO */}
      <section className="paper-hero relative overflow-hidden border-b border-border">
        <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1400px] px-4 pb-16 pt-14 sm:px-6 sm:pt-20">
          <span className="accent-chip mono-num inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.18em]">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            Live national desk · {openCount} openings tracked
          </span>

          <h1 className="mt-6 max-w-4xl text-[clamp(2.1rem,6vw,4.1rem)] font-black leading-[1.03]">
            One desk for <span className="text-brand-gradient">sarkari jobs</span>, public tenders and settlement
            money.
          </h1>
          <p className="mt-5 max-w-2xl text-[1.05rem] leading-[1.8] text-ink-soft">
            {SITE.tagline} Every record gets its own permanent dossier — pay matrix, EMD schedule, eligibility and
            deadlines in plain language.
          </p>

          {/* Global search */}
          <div className="relative mt-8 max-w-2xl">
            <label className="relative block">
              <span className="sr-only">Search jobs, tenders and settlements</span>
              <svg
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.3-4.3" />
              </svg>
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Try “ISRO”, “KAVACH”, “Camp Lejeune”, “8th CPC”…"
                className="w-full rounded-2xl border border-border bg-surface py-4 pl-12 pr-4 text-[0.95rem] text-ink shadow-[var(--shadow-soft)] outline-none transition focus:border-primary/50 focus:ring-4 focus:ring-primary/10"
              />
            </label>
            {results.length > 0 && (
              <ul className="surface-card absolute z-30 mt-2 w-full overflow-hidden p-1.5">
                {results.map((r) => (
                  <li key={r.id}>
                    <Link
                      to={`/${r.section}/${r.slug}`}
                      className="flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 hover:bg-secondary"
                    >
                      <span className="text-sm font-semibold text-ink">{r.title}</span>
                      <span className="mono-num shrink-0 text-[0.66rem] uppercase tracking-wide text-muted-foreground">
                        {r.badge}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-3 flex flex-wrap gap-1.5">
              {["ISRO", "RBI Grade B", "SECI solar", "KAVACH", "3M earplugs", "8th CPC"].map((chip) => (
                <button
                  key={chip}
                  onClick={() => setQ(chip)}
                  className="rounded-full border border-border bg-surface px-3 py-1.5 text-[0.75rem] font-semibold text-ink-soft transition-colors hover:border-primary/40 hover:text-ink"
                >
                  {chip}
                </button>
              ))}
            </div>
          </div>

          {/* Section entries */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {Object.values(SECTIONS).map((s) => (
              <Link
                key={s.key}
                to={s.path}
                data-accent={s.key}
                className="surface-card card-hover group relative overflow-hidden p-5"
              >
                <span className="accent-bar absolute inset-x-0 top-0 h-1" />
                <h2 className="text-[1.05rem] font-extrabold">{s.label}</h2>
                <p className="mt-2 text-[0.85rem] leading-relaxed text-muted-foreground">{s.blurb}</p>
                <span className="accent-text mt-4 inline-flex items-center gap-1.5 text-[0.8rem] font-bold">
                  Explore
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <AdSlot variant="leaderboard" />

        <FeaturedRow
          section="jobs"
          title="Highest-signal job dossiers"
          sub="Only a curated slice appears here — the full index lives in the Jobs hub."
        />
        <FeaturedRow
          section="tenders"
          title="Tenders closing soon"
          sub="EMD, PBG and qualification gates decoded for each notice."
        />

        <AdSlot variant="leaderboard" />

        <FeaturedRow
          section="settlements"
          title="Open settlement programmes"
          sub="Payout tiers and filing sequences, written for claimants not lawyers."
        />

        {/* Calculators teaser */}
        <section className="my-16" data-accent="finance">
          <SectionHeading title="Money tools" sub="Run the numbers before you apply or bid." to="/finance" />
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { to: "/finance/7th-cpc-salary-calculator", t: "7th CPC Salary Calculator", d: "Basic, DA, HRA, TA and NPS for any level." },
              { to: "/finance/8th-cpc-salary-calculator", t: "8th CPC Projection", d: "Model revised pay on your own fitment factor." },
              { to: "/finance/tender-emd-pbg-calculator", t: "EMD & PBG Calculator", d: "Instant earnest money and guarantee amounts." },
            ].map((c) => (
              <Link key={c.to} to={c.to} className="surface-card card-hover p-5">
                <h3 className="text-[1rem] font-extrabold">{c.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="my-16 max-w-3xl">
          <SectionHeading title="Common questions" sub="How this portal works." />
          <FaqAccordion items={HOME_FAQS} />
        </section>
      </div>
    </>
  );
}

function SectionHeading({ title, sub, to }: { title: string; sub: string; to?: string }) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
      <div>
        <h2 className="text-[clamp(1.35rem,3vw,1.9rem)] font-black">{title}</h2>
        <p className="mt-1.5 text-sm text-muted-foreground">{sub}</p>
      </div>
      {to && (
        <Link
          to={to}
          className="rounded-full border border-border bg-surface px-4 py-2 text-[0.82rem] font-bold text-ink hover:border-primary/50"
        >
          View all
        </Link>
      )}
    </div>
  );
}

function FeaturedRow({ section, title, sub }: { section: "jobs" | "tenders" | "settlements"; title: string; sub: string }) {
  const items = ENTRIES.filter((e) => e.section === section).slice(0, 3);
  return (
    <section className="my-16" data-accent={section}>
      <SectionHeading title={title} sub={sub} to={SECTIONS[section].path} />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {items.map((e) => (
          <EntryCard key={e.id} entry={e} />
        ))}
      </div>
    </section>
  );
}
