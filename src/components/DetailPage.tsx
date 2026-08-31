import { Link } from "@tanstack/react-router";
import { bySection, daysRemaining, type Entry } from "@/lib/data";
import { PageHero } from "./PageHero";
import { Breadcrumbs } from "./Breadcrumbs";
import { AdSlot } from "./AdSlot";
import { FaqAccordion } from "./Faq";
import { SECTIONS, DETAIL_ROUTE } from "@/lib/site";
import { useWatchlist } from "@/lib/watchlist";

export function DetailPage({ entry }: { entry: Entry }) {
  const d = daysRemaining(entry.deadline);
  const s = SECTIONS[entry.section];
  const related = bySection(entry.section)
    .filter((e) => e.id !== entry.id)
    .slice(0, 4);
  const { has, toggle, hydrated } = useWatchlist();
  const href = `/${entry.section}/${entry.slug}`;
  const saved = hydrated && has(entry.id);

  return (
    <div data-accent={entry.section}>
      <PageHero
        eyebrow={entry.badge}
        title={entry.title}
        lead={entry.summary}
        meta={[
          { label: "Authority", value: entry.org },
          { label: "Deadline", value: new Date(entry.deadline).toLocaleDateString("en-IN", { dateStyle: "medium" }) },
          { label: "Status", value: d.label },
          { label: "Headline", value: entry.headline },
        ]}
      >
        <Breadcrumbs
          items={[{ label: "Home", to: "/" }, { label: s.label, to: s.path }, { label: entry.badge }]}
        />
      </PageHero>

      <div className="mx-auto grid max-w-[1400px] gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_340px]">
        <main className="prose-content min-w-0">
          {entry.blocks.map((b, i) => (
            <section key={b.h2}>
              <h2>{b.h2}</h2>
              {b.body?.map((p) => <p key={p}>{p}</p>)}
              {b.list && (
                <ul>
                  {b.list.map((li) => (
                    <li key={li}>{li}</li>
                  ))}
                </ul>
              )}
              {i === 1 && <AdSlot variant="inline" />}
            </section>
          ))}

          <section>
            <h2>Frequently asked questions</h2>
            <FaqAccordion items={entry.faqs} />
          </section>

          <div className="surface-card mt-10 p-5">
            <h2 className="!mt-0 !border-0 !pb-0 !text-base">Disclaimer</h2>
            <p className="!text-sm">
              KT-Transfer is an independent information desk. Figures, deadlines and eligibility summaries are
              editorial interpretations of public documents and may change without notice. Verify with{" "}
              {entry.org} before submitting any application, bid or claim.
            </p>
          </div>

          <AdSlot variant="leaderboard" />
        </main>

        <aside className="grid content-start gap-5">
          <div className="surface-card p-5">
            <h2 className="mono-num mb-3 text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
              Key metrics
            </h2>
            <dl className="grid">
              {entry.stats.map((st) => (
                <div key={st.label} className="flex items-center justify-between border-b border-border py-2.5 last:border-0">
                  <dt className="text-[0.83rem] text-muted-foreground">{st.label}</dt>
                  <dd className={`mono-num text-[0.85rem] font-bold ${st.accent ? "accent-text" : "text-ink"}`}>
                    {st.value}
                  </dd>
                </div>
              ))}
            </dl>
            <button
              type="button"
              onClick={() =>
                toggle({
                  id: entry.id,
                  section: entry.section,
                  title: entry.title,
                  subtitle: entry.org,
                  url: href,
                  deadlineLabel: d.label,
                })
              }
              className={`mt-4 w-full rounded-xl px-4 py-2.5 text-sm font-bold transition-colors ${
                saved
                  ? "border border-primary/40 bg-accent text-accent-foreground"
                  : "bg-ink text-background hover:opacity-90"
              }`}
            >
              {saved ? "Saved to watchlist" : "Save to watchlist"}
            </button>
            <p className="mono-num mt-3 text-center text-[0.66rem] uppercase tracking-[0.14em] text-muted-foreground">
              Verified {new Date(entry.updated).toLocaleDateString("en-IN", { dateStyle: "medium" })}
            </p>
          </div>

          <AdSlot variant="rectangle" />

          <nav className="surface-card p-5" aria-label={`Related ${s.label}`}>
            <h2 className="mono-num mb-3 text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
              Related {s.label.toLowerCase()}
            </h2>
            <ul className="grid gap-3">
              {related.map((r) => (
                <li key={r.id}>
                  <Link
                    to={DETAIL_ROUTE[r.section]}
                    params={{ slug: r.slug }}
                    className="block text-[0.86rem] font-semibold leading-snug text-ink-soft transition-colors hover:text-primary"
                  >
                    {r.title}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to={s.path}
              className="accent-text mt-4 inline-block text-[0.8rem] font-bold hover:underline"
            >
              Browse all {s.label.toLowerCase()} →
            </Link>
          </nav>
        </aside>
      </div>
    </div>
  );
}
