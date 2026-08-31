import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/Breadcrumbs";
import { AdSlot } from "@/components/AdSlot";
import { FINANCE_TOOLS } from "@/lib/data";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/finance/")({
  head: () => ({
    ...seo({
      title: "Pay & Tender Calculators — KT-Transfer",
      description:
        "Free 7th CPC salary calculator, 8th Pay Commission projection tool and tender EMD/PBG calculator with instant lakh and crore formatting.",
      path: "/finance",
      keywords: "7th cpc calculator, 8th pay commission calculator, EMD calculator, PBG calculator, HRA calculator",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            breadcrumbJsonLd([
              { name: "Home", item: "/" },
              { name: "Calculators", item: "/finance" },
            ]),
          ],
        }),
      },
    ],
  }),
  component: FinanceHub,
});

function FinanceHub() {
  return (
    <div data-accent="finance">
      <PageHero
        eyebrow="Money tools"
        title="Calculators for pay, allowances and bid guarantees"
        lead="Everything runs in your browser — no sign-up, no data leaves the device. Figures are indicative and should be confirmed against the current government order."
      >
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Calculators" }]} />
      </PageHero>

      <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6">
        <div className="grid gap-5 md:grid-cols-3">
          {FINANCE_TOOLS.map((t) => (
            <Link key={t.id} to={`/finance/${t.slug}`} className="surface-card card-hover p-6">
              <span className="accent-chip rounded-full px-2.5 py-1 text-[0.66rem] font-bold uppercase tracking-wide">
                {t.badge}
              </span>
              <h2 className="mt-4 text-[1.05rem] font-extrabold">{t.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.summary}</p>
            </Link>
          ))}
        </div>
        <AdSlot variant="leaderboard" />
      </div>
    </div>
  );
}
