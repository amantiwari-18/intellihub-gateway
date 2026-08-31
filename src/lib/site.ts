export const SITE = {
  name: "KT-Transfer",
  longName: "KT-Transfer Intelligence Portal",
  tagline: "Government jobs, public tenders, mass-tort settlements and pay calculators — verified daily.",
  gaId: "G-7FCW1206KM",
  adsensePublisherId: "ca-pub-4474727542779927",
  adsenseSlot: "8042251860",
  twitter: "@kttransfer",
} as const;

export type SectionKey = "jobs" | "tenders" | "settlements" | "finance";

export const SECTIONS: Record<
  SectionKey,
  { key: SectionKey; label: string; path: string; blurb: string; noun: string }
> = {
  jobs: {
    key: "jobs",
    label: "Jobs",
    path: "/jobs",
    blurb: "Sarkari, PSU, banking and deep-tech recruitment dossiers with salary breakdowns.",
    noun: "Job dossier",
  },
  tenders: {
    key: "tenders",
    label: "Tenders",
    path: "/tenders",
    blurb: "Live public procurement notices with EMD, PBG and BoQ intelligence.",
    noun: "Tender dossier",
  },
  settlements: {
    key: "settlements",
    label: "Settlements",
    path: "/settlements",
    blurb: "Mass-tort and MDL settlement matrices, payout tiers and filing deadlines.",
    noun: "Settlement brief",
  },
  finance: {
    key: "finance",
    label: "Calculators",
    path: "/finance",
    blurb: "7th & 8th CPC salary, HRA, NPS and tender EMD/PBG calculators.",
    noun: "Calculator",
  },
};
