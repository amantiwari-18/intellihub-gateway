import { Link } from "@tanstack/react-router";
import { Wordmark } from "./Logo";
import { SITE } from "@/lib/site";

const COLS = [
  {
    title: "Jobs",
    links: [
      { to: "/jobs", label: "All job dossiers" },
      { to: "/jobs/isro-scientist-engineer-job", label: "ISRO Scientist SD" },
      { to: "/jobs/rbi-grade-b-it-job", label: "RBI Grade B IT" },
      { to: "/jobs/upsc-it-director-job", label: "UPSC Assistant Director" },
    ],
  },
  {
    title: "Tenders",
    links: [
      { to: "/tenders", label: "All tenders" },
      { to: "/tenders/seci-solar-bess-tender", label: "SECI Solar + BESS" },
      { to: "/tenders/railway-vande-bharat-tender", label: "Railways KAVACH" },
      { to: "/tenders/gem-multi-cloud-tender", label: "GeM Multi-Cloud" },
    ],
  },
  {
    title: "Settlements",
    links: [
      { to: "/settlements", label: "All matters" },
      { to: "/settlements/3m-combat-arms-earplugs-settlement", label: "3M Earplugs" },
      { to: "/settlements/camp-lejeune-water-contamination-settlement", label: "Camp Lejeune" },
      { to: "/settlements/paraquat-parkinsons-settlement-matrix", label: "Paraquat matrix" },
    ],
  },
  {
    title: "Portal",
    links: [
      { to: "/finance", label: "Calculators" },
      { to: "/about", label: "About" },
      { to: "/contact", label: "Contact" },
      { to: "/privacy", label: "Privacy" },
      { to: "/terms", label: "Terms & disclaimer" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-surface-2">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-4 py-14 sm:px-6 lg:grid-cols-5">
        <div className="lg:col-span-1">
          <Wordmark />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Independent research desk. Not affiliated with any government body or law firm. Always verify with the
            issuing authority before acting.
          </p>
        </div>
        {COLS.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h3 className="mono-num mb-3 text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
              {col.title}
            </h3>
            <ul className="grid gap-2">
              {col.links.map((l) => (
                <li key={l.to + l.label}>
                  <Link to={l.to} className="text-sm text-ink-soft transition-colors hover:text-primary">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-3 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} {SITE.longName}. All rights reserved.
          </p>
          <p className="mono-num flex items-center gap-2">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-primary" />
            Live national portal · updated daily
          </p>
        </div>
      </div>
    </footer>
  );
}
