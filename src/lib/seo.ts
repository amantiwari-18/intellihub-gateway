import { SITE } from "./site";

type MetaInput = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  keywords?: string;
  image?: string;
};

/**
 * SEO rules for every route on this portal (strictly followed):
 *  1. Unique <title> under 60 chars incl. brand, unique description under 160.
 *  2. Self-referencing canonical on the leaf route only.
 *  3. og:title / og:description / og:url / og:type + twitter:card on every page.
 *  4. Exactly one <h1> per page; headings descend without skipping levels.
 *  5. JSON-LD matched to the page type + BreadcrumbList on every deep page.
 */
export function seo({ title, description, path, type = "website", keywords, image }: MetaInput) {
  const meta: { title?: string; name?: string; property?: string; content?: string }[] = [
    { title },
    { name: "description", content: description },
    { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:url", content: path },
    { property: "og:site_name", content: SITE.longName },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];
  if (keywords) meta.push({ name: "keywords", content: keywords });
  if (image) {
    meta.push({ property: "og:image", content: image });
    meta.push({ name: "twitter:image", content: image });
  }
  return { meta, links: [{ rel: "canonical", href: path }] };
}
