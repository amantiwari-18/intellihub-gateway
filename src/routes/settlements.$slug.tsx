import { createFileRoute, notFound } from "@tanstack/react-router";
import { DetailPage } from "@/components/DetailPage";
import { findEntry } from "@/lib/data";
import { seo } from "@/lib/seo";
import { faqJsonLd } from "@/components/Faq";
import { breadcrumbJsonLd } from "@/components/Breadcrumbs";

export const Route = createFileRoute("/settlements/$slug")({
  loader: ({ params }) => {
    const entry = findEntry("settlements", params.slug);
    if (!entry) throw notFound();
    return { entry };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Settlement brief unavailable — KT-Transfer" }, { name: "robots", content: "noindex" }] };
    }
    const e = loaderData.entry;
    return {
      ...seo({
        title: `${e.title}`.slice(0, 68),
        description: e.summary.slice(0, 158),
        path: `/settlements/${params.slug}`,
        type: "article",
        keywords: [e.org, e.badge, ...e.tags, "settlement"].join(", "),
      }),
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "LegalService",
                name: e.title,
                description: e.summary,
                serviceType: "Mass tort settlement intelligence",
                areaServed: "US",
              },
              faqJsonLd(e.faqs),
              breadcrumbJsonLd([
                { name: "Home", item: "/" },
                { name: "Settlements", item: "/settlements" },
                { name: e.title, item: `/settlements/${params.slug}` },
              ]),
            ],
          }),
        },
      ],
    };
  },
  component: SettlementDetail,
});

function SettlementDetail() {
  const { entry } = Route.useLoaderData();
  return <DetailPage entry={entry} />;
}
