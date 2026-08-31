import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Wordmark } from "./Logo";
import { SECTIONS } from "@/lib/site";
import { useWatchlist } from "@/lib/watchlist";

const NAV = [
  { to: "/", label: "Home" },
  { to: SECTIONS.jobs.path, label: "Jobs" },
  { to: SECTIONS.tenders.path, label: "Tenders" },
  { to: SECTIONS.settlements.path, label: "Settlements" },
  { to: SECTIONS.finance.path, label: "Calculators" },
  { to: "/about", label: "About" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const { items, hydrated } = useWatchlist();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", esc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", esc);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" aria-label="KT-Transfer home">
          <Wordmark />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="rounded-full px-3.5 py-2 text-[0.86rem] font-semibold text-ink-soft transition-colors hover:bg-secondary hover:text-ink"
              activeProps={{ className: "bg-accent text-accent-foreground" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/watchlist"
            className="hidden items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-2 text-[0.82rem] font-semibold text-ink shadow-[var(--shadow-soft)] transition-colors hover:border-primary/50 sm:inline-flex"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
            </svg>
            Watchlist
            <span className="mono-num rounded-full bg-primary px-1.5 py-0.5 text-[0.65rem] text-primary-foreground">
              {hydrated ? items.length : 0}
            </span>
          </Link>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface lg:hidden"
          >
            <span className="sr-only">Menu</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 bg-ink/30 transition-opacity lg:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <div
        className={`fixed right-0 top-0 z-50 h-full w-[80%] max-w-xs border-l border-border bg-surface p-5 shadow-[var(--shadow-lift)] transition-transform duration-300 lg:hidden ${open ? "translate-x-0" : "translate-x-full"}`}
        aria-hidden={!open}
      >
        <div className="mb-6 flex items-center justify-between">
          <Wordmark />
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="grid gap-1" aria-label="Mobile">
          {[...NAV, { to: "/watchlist", label: "Watchlist" }, { to: "/contact", label: "Contact" }].map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-2.5 text-sm font-semibold text-ink-soft hover:bg-secondary hover:text-ink"
              activeProps={{ className: "bg-accent text-accent-foreground" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
