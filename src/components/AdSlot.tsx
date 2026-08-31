import { useEffect, useRef } from "react";
import { SITE } from "@/lib/site";

type Variant = "leaderboard" | "rectangle" | "inline";

const SIZES: Record<Variant, string> = {
  leaderboard: "mx-auto my-8 min-h-[90px] max-w-[728px]",
  rectangle: "mx-auto my-5 min-h-[250px] max-w-[300px]",
  inline: "mx-auto my-7 min-h-[120px] max-w-[680px]",
};

/**
 * AdSense unit. Placement rules for this site:
 *  - max 1 inline unit after every second <h2> block
 *  - one leaderboard at the bottom of main content
 *  - one rectangle in the sidebar
 * Never place ads above the fold in the hero, and never inside navigation.
 */
export function AdSlot({ variant = "leaderboard", label = "Advertisement" }: { variant?: Variant; label?: string }) {
  const ref = useRef<HTMLModElement>(null);

  useEffect(() => {
    try {
      const w = window as unknown as { adsbygoogle?: unknown[] };
      w.adsbygoogle = w.adsbygoogle || [];
      w.adsbygoogle.push({});
    } catch {
      /* ad blocker or script not loaded */
    }
  }, []);

  return (
    <aside className={`ad-slot ${SIZES[variant]} p-2 text-center`} aria-label={label}>
      <span className="mono-num block pb-1 text-[0.58rem] uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </span>
      <ins
        ref={ref}
        className="adsbygoogle block w-full"
        style={{ display: "block" }}
        data-ad-client={SITE.adsensePublisherId}
        data-ad-slot={SITE.adsenseSlot}
        data-ad-format={variant === "rectangle" ? "rectangle" : "auto"}
        data-full-width-responsive="true"
      />
    </aside>
  );
}
