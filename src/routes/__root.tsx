import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SITE } from "@/lib/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="mono-num text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground">Error 404</p>
        <h1 className="mt-3 text-6xl font-black text-ink">Page not found</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          This dossier has been retired, moved, or never existed. Start from a section hub instead.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {[
            { to: "/", label: "Home" },
            { to: "/jobs", label: "Jobs" },
            { to: "/tenders", label: "Tenders" },
            { to: "/settlements", label: "Settlements" },
          ].map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold text-ink hover:border-primary/50"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-bold text-ink">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Try refreshing, or head back to the homepage.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-background"
          >
            Try again
          </button>
          <a href="/" className="rounded-full border border-border px-4 py-2 text-sm font-semibold text-ink">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${SITE.longName} — Jobs, Tenders & Settlements` },
      { name: "description", content: SITE.tagline },
      { name: "author", content: SITE.longName },
      { property: "og:site_name", content: SITE.longName },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: SITE.twitter },
      { name: "theme-color", content: "#ffffff" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
    scripts: [
      { src: `https://www.googletagmanager.com/gtag/js?id=${SITE.gaId}`, async: true },
      {
        children: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${SITE.gaId}');`,
      },
      {
        src: `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${SITE.adsensePublisherId}`,
        async: true,
        crossOrigin: "anonymous",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-background"
      >
        Skip to content
      </a>
      <Header />
      <div id="main">
        <Outlet />
      </div>
      <Footer />
    </QueryClientProvider>
  );
}
