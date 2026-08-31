import { createFileRoute } from "@tanstack/react-router";
import { HubPage } from "@/components/HubPage";
import { seo } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/components/Breadcrumbs";
import { bySection } from "@/lib/data";

export const Route = createFileRoute("/jobs/")({
  head: () => ({
    ...seo({
      title: "Government & PSU Job Dossiers — KT-Transfer",
      description:
        "Verified sarkari, PSU, banking and deep-tech job notifications with pay level, gross CTC, eligibility and deadline for each post.",
      path: "/jobs",
      keywords: "sarkari naukri, government jobs, PSU recruitment, ISRO jobs, RBI Grade B, UPSC recruitment",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            breadcrumbJsonLd([
              { name: "Home", item: "/" },
              { name: "Jobs", item: "/jobs" },
            ]),
            {
              "@type": "ItemList",
              name: "Government job dossiers",
              itemListElement: bySection("jobs").map((e, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: e.title,
                url: `/jobs/${e.slug}`,
              })),
            },
          ],
        }),
      },
    ],
  }),
  component: () => (
    <HubPage
      section="jobs"
      title="Government & PSU job intelligence"
      lead="Every notification decoded into a single dossier: pay level, gross CTC, eligibility gates, selection stages and the exact closing date. Filter by stream or search the index."
    />
  ),
});
