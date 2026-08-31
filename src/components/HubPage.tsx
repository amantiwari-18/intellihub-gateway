import { useMemo, useState } from "react";
import { CATEGORIES, bySection, daysRemaining, type Entry } from "@/lib/data";
import { EntryCard } from "./EntryCard";
import { PageHero } from "./PageHero";
import { Breadcrumbs } from "./Breadcrumbs";
import { AdSlot } from "./AdSlot";
import { SECTIONS, type SectionKey } from "@/lib/site";

const PAGE_SIZE = 9;

export function HubPage({ section, title, lead }: { section: SectionKey; title: string; lead: string }) {
  const all = useMemo(() => bySection(section), [section]);
  const [cat, setCat] = useState("all");
  const [q, setQ] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return all.filter((e: Entry) => {
      const catOk = cat === "all" || e.category === cat;
      const qOk =
        !needle ||
        [e.title, e.org, e.summary, ...e.tags].join(" ").toLowerCase().includes(needle);
      return catOk && qOk;
    });
  }, [all, cat, q]);

  const pages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const current = Math.min(page, pages);
  const slice = filtered.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE);
  const openCount = all.filter((e) => !daysRemaining(e.deadline).closed).length;

  return (
    <div data-accent={section}>
      <PageHero
        eyebrow={`${SECTIONS[section].label} intelligence`}
        title={title}
        lead={lead}
        meta={[
          { label: "Indexed", value: String(all.length) },
          { label: "Open now", value: String(openCount) },
          { label: "Verified", value: "Every 24 h" },
        ]}
      >
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: SECTIONS[section].label }]} />
      </PageHero>

      <div className="mx-auto max-w-[1400px] px-4 py-10 sm:px-6">
        <div className="surface-card flex flex-col gap-4 p-4 sm:flex-row sm:items-center">
          <label className="relative flex-1">
            <span className="sr-only">Search {SECTIONS[section].label}</span>
            <svg
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
              width="16"
              height="16"
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
              onChange={(e) => {
                setQ(e.target.value);
                setPage(1);
              }}
              placeholder={`Search ${filtered.length} records — title, authority, tag…`}
              className="w-full rounded-xl border border-border bg-surface-2 py-2.5 pl-10 pr-3 text-sm text-ink outline-none transition focus:border-primary/50 focus:bg-surface focus:ring-4 focus:ring-primary/10"
            />
          </label>
          <div className="flex flex-wrap gap-1.5">
            {CATEGORIES[section].map((c) => (
              <button
                key={c.key}
                type="button"
                onClick={() => {
                  setCat(c.key);
                  setPage(1);
                }}
                className={`rounded-full border px-3.5 py-2 text-[0.78rem] font-bold transition-colors ${
                  cat === c.key
                    ? "border-transparent bg-ink text-background"
                    : "border-border bg-surface text-ink-soft hover:border-primary/40"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {slice.length === 0 ? (
          <p className="surface-card mt-8 p-10 text-center text-sm text-muted-foreground">
            No records match that filter. Try a broader search term.
          </p>
        ) : (
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {slice.map((e) => (
              <EntryCard key={e.id} entry={e} />
            ))}
          </div>
        )}

        {pages > 1 && (
          <nav className="mt-10 flex items-center justify-center gap-2" aria-label="Pagination">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={current === 1}
              className="rounded-lg border border-border px-3 py-2 text-sm font-semibold disabled:opacity-40"
            >
              Previous
            </button>
            <span className="mono-num px-2 text-sm text-muted-foreground">
              Page {current} / {pages}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(pages, p + 1))}
              disabled={current === pages}
              className="rounded-lg border border-border px-3 py-2 text-sm font-semibold disabled:opacity-40"
            >
              Next
            </button>
          </nav>
        )}

        <AdSlot variant="leaderboard" />
      </div>
    </div>
  );
}
