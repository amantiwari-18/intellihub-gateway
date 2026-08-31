import { createFileRoute, notFound } from "@tanstack/react-router";
import { DetailPage } from "@/components/DetailPage";
import { findEntry } from "@/lib/data";
import { seo } from "@/lib/seo";
import { faqJsonLd } from "@/components/Faq";
import { breadcrumbJsonLd } from "@/components/Breadcrumbs";

export const Route = createFileRoute("/jobs/$slug")({
  loader: ({ params }) => {
    const entry = findEntry("jobs", params.slug);
    if (!entry) throw notFound();
    return { entry };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Job dossier unavailable — KT-Transfer" }, { name: "robots", content: "noindex" }] };
    }
    const e = loaderData.entry;
    return {
      ...seo({
        title: `${e.title} — ${e.headline}`.slice(0, 68),
        description: e.summary.slice(0, 158),
        path: `/jobs/${params.slug}`,
        type: "article",
        keywords: [e.org, e.badge, ...e.tags, "government job"].join(", "),
      }),
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "JobPosting",
                title: e.title,
                description: e.summary,
                datePosted: e.updated,
                validThrough: e.deadline,
                employmentType: "FULL_TIME",
                hiringOrganization: { "@type": "Organization", name: e.org },
                jobLocation: {
                  "@type": "Place",
                  address: { "@type": "PostalAddress", addressCountry: "IN" },
                },
              },
              faqJsonLd(e.faqs),
              breadcrumbJsonLd([
                { name: "Home", item: "/" },
                { name: "Jobs", item: "/jobs" },
                { name: e.title, item: `/jobs/${params.slug}` },
              ]),
            ],
          }),
        },
      ],
    };
  },
  component: JobDetail,
});

function JobDetail() {
  const { entry } = Route.useLoaderData();
  return <DetailPage entry={entry} />;
}
