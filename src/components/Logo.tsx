export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} role="img" aria-label="KT-Transfer emblem">
      <defs>
        <linearGradient id="ktg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.55" />
        </linearGradient>
      </defs>
      <rect x="1.5" y="1.5" width="45" height="45" rx="13" fill="url(#ktg)" opacity="0.12" />
      <rect
        x="1.5"
        y="1.5"
        width="45"
        height="45"
        rx="13"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.35"
        strokeWidth="1.5"
      />
      {/* K stroke */}
      <path
        d="M15 12v24M15 24l10-12M15 24l11 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* T with transfer arrow */}
      <path d="M29 14h9M33.5 14v14" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
      <path
        d="M28.5 33.5h11m0 0-3.5-3.5m3.5 3.5-3.5 3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.85"
      />
    </svg>
  );
}

export function Wordmark() {
  return (
    <span className="flex items-center gap-2.5">
      <span className="text-primary">
        <LogoMark className="h-9 w-9" />
      </span>
      <span className="leading-none">
        <span className="block font-display text-[1.05rem] font-extrabold tracking-tight text-ink">
          KT<span className="text-brand-gradient">-Transfer</span>
        </span>
        <span className="mono-num block text-[0.6rem] uppercase tracking-[0.22em] text-muted-foreground">
          Intelligence Portal
        </span>
      </span>
    </span>
  );
}
