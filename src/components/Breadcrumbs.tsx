import { Link } from "@tanstack/react-router";

export type Crumb = { label: string; to?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-5">
      <ol className="flex flex-wrap items-center gap-1.5 text-[0.78rem] text-muted-foreground">
        {items.map((c, i) => (
          <li key={c.label} className="flex items-center gap-1.5">
            {c.to ? (
              <Link to={c.to} className="accent-text font-semibold hover:underline">
                {c.label}
              </Link>
            ) : (
              <span className="text-ink-soft">{c.label}</span>
            )}
            {i < items.length - 1 && (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5">
                <path d="M9 18l6-6-6-6" />
              </svg>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function breadcrumbJsonLd(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.item,
    })),
  };
}
