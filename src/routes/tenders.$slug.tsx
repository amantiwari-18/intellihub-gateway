import { createFileRoute, notFound } from "@tanstack/react-router";
import { DetailPage } from "@/components/DetailPage";
import { findEntry } from "@/lib/data";
import { seo } from "@/lib/seo";
import { faqJsonLd } from "@/components/Faq";
import { breadcrumbJsonLd } from "@/components/Breadcrumbs";

export const Route = createFileRoute("/tenders/$slug")({
  loader: ({ params }) => {
    const entry = findEntry("tenders", params.slug);
    if (!entry) throw notFound();
    return { entry };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Tender dossier unavailable — KT-Transfer" }, { name: "robots", content: "noindex" }] };
    }
    const e = loaderData.entry;
    return {
      ...seo({
        title: `${e.title} — ${e.headline}`.slice(0, 68),
        description: e.summary.slice(0, 158),
        path: `/tenders/${params.slug}`,
        type: "article",
        keywords: [e.org, e.badge, ...e.tags, "tender", "EMD"].join(", "),
      }),
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "GovernmentService",
                name: e.title,
                description: e.summary,
                serviceType: "Public Procurement",
                areaServed: "India",
                provider: { "@type": "GovernmentOrganization", name: e.org },
              },
              faqJsonLd(e.faqs),
              breadcrumbJsonLd([
                { name: "Home", item: "/" },
                { name: "Tenders", item: "/tenders" },
                { name: e.title, item: `/tenders/${params.slug}` },
              ]),
            ],
          }),
        },
      ],
    };
  },
  component: TenderDetail,
});

function TenderDetail() {
  const { entry } = Route.useLoaderData();
  return <DetailPage entry={entry} />;
}
