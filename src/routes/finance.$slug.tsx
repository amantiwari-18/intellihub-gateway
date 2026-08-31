import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/Breadcrumbs";
import { AdSlot } from "@/components/AdSlot";
import { FaqAccordion, faqJsonLd } from "@/components/Faq";
import { EmdCalculator, SalaryCalculator } from "@/components/Calculators";
import { FINANCE_TOOLS } from "@/lib/data";
import { seo } from "@/lib/seo";

const FAQS = {
  "7th-cpc-salary-calculator": [
    {
      q: "Which allowances are included in this calculation?",
      a: "Basic pay from the 7th CPC matrix, dearness allowance at your chosen rate, house rent allowance by city class, transport allowance and the 10% NPS deduction.",
    },
    {
      q: "Why does my actual slip differ?",
      a: "Departmental allowances, professional update grants, CGHS deductions and income tax vary by cadre and are not modelled here.",
    },
  ],
  "8th-cpc-salary-calculator": [
    {
      q: "Has the 8th Pay Commission fitment factor been notified?",
      a: "No. The tool lets you model any factor between 1.8× and 3.0× so you can compare scenarios until the official recommendation is published.",
    },
    {
      q: "Does the projection include DA?",
      a: "No. On revision, DA resets to zero and is merged into the revised basic pay, so the projection intentionally excludes it.",
    },
  ],
  "tender-emd-pbg-calculator": [
    {
      q: "Is EMD always a percentage of tender value?",
      a: "Most Indian tenders use 1–3% of estimated value, capped in absolute terms for very large packages. Always read the bid document's own clause.",
    },
    {
      q: "When is the PBG released?",
      a: "Typically after the defect liability or warranty period ends and the completion certificate is issued.",
    },
  ],
} as const;

export const Route = createFileRoute("/finance/$slug")({
  loader: ({ params }) => {
    const tool = FINANCE_TOOLS.find((t) => t.slug === params.slug);
    if (!tool) throw notFound();
    return { tool };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Calculator unavailable — KT-Transfer" }, { name: "robots", content: "noindex" }] };
    }
    const t = loaderData.tool;
    return {
      ...seo({
        title: `${t.title} — Free Online Tool`.slice(0, 68),
        description: t.summary.slice(0, 158),
        path: `/finance/${params.slug}`,
        keywords: `${t.title}, calculator, ${t.badge}`,
      }),
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebApplication",
                name: t.title,
                description: t.summary,
                applicationCategory: "FinanceApplication",
                operatingSystem: "Any",
                offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
              },
              faqJsonLd([...(FAQS[params.slug as keyof typeof FAQS] ?? [])]),
              breadcrumbJsonLd([
                { name: "Home", item: "/" },
                { name: "Calculators", item: "/finance" },
                { name: t.title, item: `/finance/${params.slug}` },
              ]),
            ],
          }),
        },
      ],
    };
  },
  component: CalculatorPage,
});

function CalculatorPage() {
  const { tool } = Route.useLoaderData();
  const faqs = [...(FAQS[tool.slug as keyof typeof FAQS] ?? [])];

  return (
    <div data-accent="finance">
      <PageHero eyebrow={tool.badge} title={tool.title} lead={tool.summary}>
        <Breadcrumbs
          items={[{ label: "Home", to: "/" }, { label: "Calculators", to: "/finance" }, { label: tool.badge }]}
        />
      </PageHero>

      <div className="mx-auto grid max-w-[1400px] gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_340px]">
        <main className="prose-content min-w-0">
          <div className="surface-card p-6">
            {tool.slug === "tender-emd-pbg-calculator" ? (
              <EmdCalculator />
            ) : (
              <SalaryCalculator projection={tool.slug === "8th-cpc-salary-calculator"} />
            )}
          </div>

          <AdSlot variant="inline" />

          <section>
            <h2>How this calculation works</h2>
            <p>
              All arithmetic happens locally in your browser. Nothing you type is transmitted, logged or stored. The
              output is an estimate meant for planning, not an official entitlement statement.
            </p>
          </section>

          <section>
            <h2>Frequently asked questions</h2>
            <FaqAccordion items={faqs} />
          </section>

          <AdSlot variant="leaderboard" />
        </main>

        <aside className="grid content-start gap-5">
          <nav className="surface-card p-5" aria-label="Other calculators">
            <h2 className="mono-num mb-3 text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
              Other calculators
            </h2>
            <ul className="grid gap-3">
              {FINANCE_TOOLS.filter((t) => t.slug !== tool.slug).map((t) => (
                <li key={t.id}>
                  <Link
                    to="/finance/$slug"
                    params={{ slug: t.slug }}
                    className="text-[0.86rem] font-semibold text-ink-soft hover:text-primary"
                  >
                    {t.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <AdSlot variant="rectangle" />
        </aside>
      </div>
    </div>
  );
}
