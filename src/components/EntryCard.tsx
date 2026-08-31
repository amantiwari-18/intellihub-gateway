import { Link } from "@tanstack/react-router";
import { daysRemaining, type Entry } from "@/lib/data";
import { useWatchlist } from "@/lib/watchlist";
import { DETAIL_ROUTE } from "@/lib/site";

export function EntryCard({ entry }: { entry: Entry }) {
  const d = daysRemaining(entry.deadline);
  const { has, toggle, hydrated } = useWatchlist();
  const saved = hydrated && has(entry.id);

  return (
    <article data-accent={entry.section} className="surface-card card-hover group relative flex flex-col p-5">
      <span className="accent-bar absolute inset-x-0 top-0 h-0.5 rounded-t-[var(--radius-lg)] opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className="accent-chip rounded-full px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-wide">
          {entry.badge}
        </span>
        <span
          className={`mono-num rounded-full border px-2.5 py-1 text-[0.68rem] font-semibold ${
            d.closed
              ? "border-border bg-secondary text-muted-foreground"
              : d.days <= 14
                ? "border-destructive/30 bg-destructive/8 text-destructive"
                : "border-border bg-secondary text-ink-soft"
          }`}
        >
          {d.label}
        </span>
        <button
          type="button"
          aria-pressed={saved}
          aria-label={saved ? "Remove from watchlist" : "Save to watchlist"}
          onClick={() =>
            toggle({
              id: entry.id,
              section: entry.section,
              title: entry.title,
              subtitle: entry.org,
              slug: entry.slug,
              deadlineLabel: d.label,
            })
          }
          className={`ml-auto inline-flex h-8 w-8 items-center justify-center rounded-lg border transition-colors ${
            saved ? "border-primary/40 bg-accent text-primary" : "border-border bg-surface text-muted-foreground hover:text-ink"
          }`}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill={saved ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
          </svg>
        </button>
      </div>

      <h3 className="text-[1.05rem] font-extrabold leading-snug">
        <Link to={DETAIL_ROUTE[entry.section]} params={{ slug: entry.slug }} className="transition-colors after:absolute after:inset-0 hover:text-primary">
          {entry.title}
        </Link>
      </h3>
      <p className="mt-1 text-[0.82rem] font-semibold text-muted-foreground">{entry.org}</p>
      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-ink-soft">{entry.summary}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {entry.tags.map((t) => (
          <span key={t} className="rounded-md bg-secondary px-2 py-1 text-[0.68rem] font-medium text-muted-foreground">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
        <span className="mono-num accent-text text-sm font-bold">{entry.headline}</span>
        <span className="inline-flex items-center gap-1.5 text-[0.8rem] font-bold text-ink transition-transform group-hover:translate-x-0.5">
          Open dossier
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </div>
    </article>
  );
}
