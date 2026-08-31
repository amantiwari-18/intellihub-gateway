import { createFileRoute } from "@tanstack/react-router";
import { HubPage } from "@/components/HubPage";
import { seo } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/components/Breadcrumbs";
import { bySection } from "@/lib/data";

export const Route = createFileRoute("/tenders/")({
  head: () => ({
    ...seo({
      title: "Live Government Tenders & EMD Data — KT-Transfer",
      description:
        "Public procurement notices with estimated value, EMD, performance bank guarantee, qualification criteria and bid deadlines, refreshed daily.",
      path: "/tenders",
      keywords: "government tenders, EMD, PBG, GeM bids, SECI tender, railway tender, defence procurement",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            breadcrumbJsonLd([
              { name: "Home", item: "/" },
              { name: "Tenders", item: "/tenders" },
            ]),
            {
              "@type": "ItemList",
              name: "Public tender dossiers",
              itemListElement: bySection("tenders").map((e, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: e.title,
                url: `/tenders/${e.slug}`,
              })),
            },
          ],
        }),
      },
    ],
  }),
  component: () => (
    <HubPage
      section="tenders"
      title="Public procurement intelligence"
      lead="Estimated value, earnest money deposit, performance guarantee and qualification gates for every live notice — plus the evaluation method that actually decides the award."
    />
  ),
});
