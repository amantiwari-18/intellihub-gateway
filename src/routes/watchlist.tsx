import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { useWatchlist } from "@/lib/watchlist";
import { seo } from "@/lib/seo";
import { DETAIL_ROUTE } from "@/lib/site";

export const Route = createFileRoute("/watchlist")({
  head: () => ({
    ...seo({
      title: "My Watchlist — KT-Transfer",
      description: "Saved jobs, tenders and settlement briefs, stored privately in your own browser.",
      path: "/watchlist",
    }),
    meta: [
      ...seo({ title: "My Watchlist — KT-Transfer", description: "Saved records.", path: "/watchlist" }).meta,
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: WatchlistPage,
});

function WatchlistPage() {
  const { items, hydrated, remove } = useWatchlist();

  return (
    <div>
      <PageHero
        eyebrow="Private to this device"
        title="Your watchlist"
        lead="Saved records live in this browser's local storage only. Clearing site data removes them."
      >
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Watchlist" }]} />
      </PageHero>

      <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6">
        {!hydrated ? null : items.length === 0 ? (
          <div className="surface-card mx-auto max-w-lg p-12 text-center">
            <p className="text-sm text-muted-foreground">
              Nothing saved yet. Tap the bookmark icon on any dossier to pin it here.
            </p>
            <Link
              to="/jobs"
              className="mt-5 inline-block rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-background"
            >
              Browse jobs
            </Link>
          </div>
        ) : (
          <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {items.map((i) => (
              <li key={i.id} data-accent={i.section} className="surface-card p-5">
                <span className="accent-chip rounded-full px-2.5 py-1 text-[0.66rem] font-bold uppercase">
                  {i.section}
                </span>
                <h2 className="mt-3 text-[1rem] font-extrabold leading-snug">
                  <Link to={DETAIL_ROUTE[i.section]} params={{ slug: i.slug }} className="hover:text-primary">
                    {i.title}
                  </Link>
                </h2>
                <p className="mt-1 text-[0.82rem] text-muted-foreground">{i.subtitle}</p>
                <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
                  <span className="mono-num text-[0.75rem] text-ink-soft">{i.deadlineLabel}</span>
                  <button
                    onClick={() => remove(i.id)}
                    className="text-[0.78rem] font-bold text-destructive hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
