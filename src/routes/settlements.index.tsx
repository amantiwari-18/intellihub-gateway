import { createFileRoute } from "@tanstack/react-router";
import { HubPage } from "@/components/HubPage";
import { seo } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/components/Breadcrumbs";
import { bySection } from "@/lib/data";

export const Route = createFileRoute("/settlements/")({
  head: () => ({
    ...seo({
      title: "Mass Tort & MDL Settlement Matrices — KT-Transfer",
      description:
        "Payout tiers, eligibility signals and filing deadlines for open settlement programmes including 3M earplugs, Camp Lejeune and paraquat litigation.",
      path: "/settlements",
      keywords: "settlement payout, MDL claims, 3M earplug settlement, Camp Lejeune claim, paraquat settlement",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            breadcrumbJsonLd([
              { name: "Home", item: "/" },
              { name: "Settlements", item: "/settlements" },
            ]),
            {
              "@type": "ItemList",
              name: "Settlement intelligence briefs",
              itemListElement: bySection("settlements").map((e, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: e.title,
                url: `/settlements/${e.slug}`,
              })),
            },
          ],
        }),
      },
    ],
  }),
  component: () => (
    <HubPage
      section="settlements"
      title="Settlement matrices, decoded"
      lead="What each fund actually pays, which evidence moves a claim up a tier, and the filing sequence you cannot skip. Informational only — not legal advice."
    />
  ),
});
