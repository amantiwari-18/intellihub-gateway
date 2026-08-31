import type { SectionKey } from "./site";

export type Faq = { q: string; a: string };
export type Block = { h2: string; body?: string[]; list?: string[] };

export type Entry = {
  id: string;
  slug: string;
  section: SectionKey;
  title: string;
  org: string;
  category: string;
  badge: string;
  headline: string;
  summary: string;
  deadline: string; // ISO
  tags: string[];
  stats: { label: string; value: string; accent?: boolean }[];
  blocks: Block[];
  faqs: Faq[];
  updated: string;
};

export const CATEGORIES: Record<SectionKey, { key: string; label: string }[]> = {
  jobs: [
    { key: "all", label: "All roles" },
    { key: "sarkari", label: "Sarkari / UPSC" },
    { key: "tech", label: "Tech & Space" },
    { key: "banking", label: "Banking & PSU" },
  ],
  tenders: [
    { key: "all", label: "All tenders" },
    { key: "defense", label: "Defense & Rail" },
    { key: "it", label: "IT & Cloud" },
    { key: "infra", label: "Infrastructure" },
  ],
  settlements: [
    { key: "all", label: "All matters" },
    { key: "mdl", label: "MDL / Mass tort" },
    { key: "environmental", label: "Environmental" },
  ],
  finance: [
    { key: "all", label: "All tools" },
    { key: "salary", label: "Salary" },
    { key: "procurement", label: "Procurement" },
  ],
};

const std = (topic: string): Faq[] => [
  {
    q: `How often is this ${topic} page verified?`,
    a: "Our desk re-checks the source notification every 24 hours and stamps the page with the last verification date shown in the sidebar.",
  },
  {
    q: "Is KT-Transfer an official government portal?",
    a: "No. KT-Transfer is an independent intelligence portal. Always confirm dates, fees and eligibility on the issuing authority's own website before acting.",
  },
];

export const ENTRIES: Entry[] = [
  // ---------------- JOBS ----------------
  {
    id: "isro-scientist-engineer-job",
    slug: "isro-scientist-engineer-job",
    section: "jobs",
    title: "ISRO Scientist / Engineer SD — Avionics & Software",
    org: "Indian Space Research Organisation",
    category: "tech",
    badge: "Tech & Space",
    headline: "₹28.5 LPA CTC",
    summary:
      "ICRB recruitment for Scientist/Engineer SD in avionics, onboard software and mission ground systems across VSSC, URSC and SDSC-SHAR.",
    deadline: "2026-10-15",
    tags: ["Level 10", "GATE optional", "All India"],
    stats: [
      { label: "Pay Level", value: "Level 10", accent: true },
      { label: "Basic Pay", value: "₹56,100" },
      { label: "Gross CTC", value: "₹28.5 LPA" },
      { label: "Vacancies", value: "112" },
      { label: "Application Fee", value: "₹750" },
    ],
    blocks: [
      {
        h2: "Role snapshot",
        body: [
          "Scientist/Engineer SD is the entry gateway into ISRO's technical cadre. Selected candidates are posted to a lead centre and assigned to a live mission programme within the first quarter — launch vehicle avionics, satellite bus software, or range instrumentation.",
          "The cadre follows a time-bound flexible complementing scheme, meaning promotion to Scientist/Engineer SE is assessment-based rather than vacancy-based.",
        ],
      },
      {
        h2: "Eligibility matrix",
        list: [
          "BE / BTech or equivalent in Electronics, Computer Science, Mechanical or Aerospace with a minimum aggregate of 65%",
          "Upper age limit 28 years, with statutory relaxation of 3 years for OBC-NCL and 5 years for SC/ST",
          "GATE score is not mandatory for the written-test route but adds weight in shortlisting ratios",
        ],
      },
      {
        h2: "Compensation breakdown",
        body: [
          "Basic pay begins at ₹56,100 in Level 10 of the 7th CPC matrix. Dearness allowance at the current rate, HRA by city class, transport allowance, and a professional update allowance are added on top.",
          "Total emoluments including employer NPS contribution and medical benefits work out to roughly ₹28.5 lakh per annum in an X-class city posting.",
        ],
      },
      {
        h2: "Selection process",
        list: [
          "Stage 1 — Online written test of 80 objective questions with negative marking",
          "Stage 2 — Technical interview before a three-member board at the lead centre",
          "Stage 3 — Document verification and medical fitness certification",
        ],
      },
    ],
    faqs: [
      {
        q: "Is a GATE score compulsory for ISRO Scientist SD?",
        a: "No. ICRB conducts its own written test. A valid GATE score can be used for a shortlisting advantage in some cycles but it is not a hard requirement.",
      },
      ...std("job"),
    ],
    updated: "2026-08-28",
  },
  {
    id: "rbi-grade-b-it-job",
    slug: "rbi-grade-b-it-job",
    section: "jobs",
    title: "RBI Grade B Officer (DEPR / IT Stream)",
    org: "Reserve Bank of India",
    category: "banking",
    badge: "Banking & PSU",
    headline: "₹34.5 LPA CTC",
    summary:
      "Direct recruitment of Grade B officers in the information technology stream for the Department of Information Technology and FinTech supervision.",
    deadline: "2026-09-30",
    tags: ["Grade B", "Officer cadre", "Mumbai / All India"],
    stats: [
      { label: "Grade", value: "Grade B (DR)", accent: true },
      { label: "Basic Pay", value: "₹55,200" },
      { label: "Gross CTC", value: "₹34.5 LPA" },
      { label: "Vacancies", value: "38" },
      { label: "Application Fee", value: "₹850" },
    ],
    blocks: [
      {
        h2: "Why this cadre matters",
        body: [
          "The IT stream of RBI Grade B supervises core banking resilience, cyber security posture of regulated entities, and the technology stack behind UPI-scale settlement rails.",
          "Officers rotate through DoS, DPSS and the FinTech department, which makes this one of the fastest routes into national payments policy.",
        ],
      },
      {
        h2: "Eligibility",
        list: [
          "BE/BTech in CS/IT/EC or MCA/MTech with 60% aggregate",
          "Age 21 to 30 years as on the cut-off date, with standard category relaxations",
          "Post-qualification IT experience is desirable and carries interview weight",
        ],
      },
      {
        h2: "Examination pattern",
        list: [
          "Phase I — Objective paper covering general awareness, English, quantitative aptitude and reasoning",
          "Phase II — Paper I objective IT, Paper II descriptive IT, Paper III English writing skills",
          "Phase III — Interview of 50 marks with an optional Hindi medium",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the in-hand salary for an RBI Grade B IT officer?",
        a: "Approximately ₹1.16 lakh per month in Mumbai after DA and allowances, before deductions. Bank accommodation materially raises the effective value.",
      },
      ...std("job"),
    ],
    updated: "2026-08-27",
  },
  {
    id: "upsc-it-director-job",
    slug: "upsc-it-director-job",
    section: "jobs",
    title: "UPSC Assistant Director (Information Technology)",
    org: "Union Public Service Commission",
    category: "sarkari",
    badge: "Sarkari / UPSC",
    headline: "Pay Level 11",
    summary:
      "Recruitment by selection for Assistant Director (IT) posts in central ministries, handling digital governance platforms and data centre policy.",
    deadline: "2026-11-05",
    tags: ["Level 11", "Recruitment by selection", "New Delhi"],
    stats: [
      { label: "Pay Level", value: "Level 11", accent: true },
      { label: "Basic Pay", value: "₹67,700" },
      { label: "Gross (X city)", value: "≈ ₹1.18 L / month" },
      { label: "Vacancies", value: "16" },
      { label: "Application Fee", value: "₹25" },
    ],
    blocks: [
      {
        h2: "Nature of the post",
        body: [
          "This is a Group A gazetted post filled through UPSC's recruitment-by-selection route — there is no written examination, only a shortlisting on the recruitment test or interview depending on applicant volume.",
          "Assistant Directors own ministry-level application portfolios, vendor governance and cyber audit compliance.",
        ],
      },
      {
        h2: "Essential qualifications",
        list: [
          "Master's degree in Computer Science / IT, or BE/BTech in CS/IT with two years of relevant experience",
          "Experience in software development, network administration or information security in a government or PSU environment is desirable",
          "Age limit 35 years, relaxable for departmental candidates",
        ],
      },
      {
        h2: "How shortlisting works",
        body: [
          "UPSC applies an experience-weighted matrix. Candidates should quantify project scale, budget handled and team size in the online recruitment application, since the board scores from the declared record.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is there a written exam for Assistant Director (IT)?",
        a: "Usually no. When applications exceed the board's threshold, UPSC may add a recruitment test; otherwise selection is by interview on a shortlisted pool.",
      },
      ...std("job"),
    ],
    updated: "2026-08-26",
  },
  {
    id: "nic-cloud-devops-job",
    slug: "nic-cloud-devops-job",
    section: "jobs",
    title: "NIC Cloud & DevOps Lead — MeghRaj 2.0",
    org: "National Informatics Centre",
    category: "tech",
    badge: "Tech & Space",
    headline: "Contract, ₹1.8 L / month",
    summary:
      "Lead engineer for the national government cloud programme covering Kubernetes platform engineering, observability and zero-trust rollout.",
    deadline: "2026-09-18",
    tags: ["Contractual", "Kubernetes", "Delhi / Pune / Hyderabad"],
    stats: [
      { label: "Engagement", value: "Contract (3 yrs)", accent: true },
      { label: "Monthly Pay", value: "₹1.80 L" },
      { label: "Vacancies", value: "24" },
      { label: "Experience", value: "8+ years" },
      { label: "Application Fee", value: "Nil" },
    ],
    blocks: [
      {
        h2: "Programme context",
        body: [
          "MeghRaj 2.0 consolidates ministry workloads onto a sovereign multi-region cloud. The DevOps lead role sits between the platform SRE team and onboarding ministries.",
        ],
      },
      {
        h2: "Core requirements",
        list: [
          "Production Kubernetes at multi-cluster scale, including CNI, service mesh and policy engines",
          "Infrastructure as code with Terraform and pipeline hardening under CERT-In advisories",
          "Demonstrated incident command experience on a citizen-facing system",
        ],
      },
    ],
    faqs: [
      {
        q: "Does the NIC contract role convert to a permanent post?",
        a: "Not automatically. It is renewable in three-year blocks and counts as relevant experience for later regular recruitment.",
      },
      ...std("job"),
    ],
    updated: "2026-08-25",
  },
  {
    id: "state-bank-dba-job",
    slug: "state-bank-dba-job",
    section: "jobs",
    title: "SBI Lead Database Administrator (SO)",
    org: "State Bank of India",
    category: "banking",
    badge: "Banking & PSU",
    headline: "₹24–32 LPA CTC",
    summary:
      "Specialist officer recruitment for lead DBAs owning core banking database estates, DR drills and performance engineering.",
    deadline: "2026-10-02",
    tags: ["Specialist Officer", "Oracle / PostgreSQL", "Mumbai"],
    stats: [
      { label: "Grade", value: "MMGS-III", accent: true },
      { label: "CTC Band", value: "₹24–32 LPA" },
      { label: "Vacancies", value: "9" },
      { label: "Experience", value: "6+ years" },
      { label: "Application Fee", value: "₹750" },
    ],
    blocks: [
      {
        h2: "Scope of the role",
        body: [
          "Lead DBAs own uptime for the core banking database estate across primary and DR sites, including quarterly switchover drills mandated by the bank's IT governance committee.",
        ],
      },
      {
        h2: "Skill expectations",
        list: [
          "Oracle RAC and Data Guard at terabyte scale, or PostgreSQL HA with logical replication",
          "Query plan level performance tuning and capacity forecasting",
          "Familiarity with RBI cyber security framework audit evidence",
        ],
      },
    ],
    faqs: [
      {
        q: "Is the SBI SO selection interview only?",
        a: "Shortlisting is on qualification and experience, followed by an interview. Some cycles add a short online test when volumes are high.",
      },
      ...std("job"),
    ],
    updated: "2026-08-24",
  },

  // ---------------- TENDERS ----------------
  {
    id: "seci-solar-bess-tender",
    slug: "seci-solar-bess-tender",
    section: "tenders",
    title: "SECI 1200 MW Solar + BESS Tranche XIV",
    org: "Solar Energy Corporation of India",
    category: "infra",
    badge: "Infrastructure",
    headline: "₹2,800 Cr",
    summary:
      "ISTS-connected solar capacity bundled with 600 MWh battery storage under a 25-year PPA, tendered on a reverse-auction basis.",
    deadline: "2026-09-22",
    tags: ["RfS", "e-Reverse auction", "Pan-India"],
    stats: [
      { label: "Estimated Value", value: "₹2,800 Cr", accent: true },
      { label: "EMD", value: "₹28.0 Cr" },
      { label: "PBG", value: "3% of value" },
      { label: "PPA Tenure", value: "25 years" },
      { label: "Bid Mode", value: "e-Reverse auction" },
    ],
    blocks: [
      {
        h2: "Scope of work",
        body: [
          "Design, finance, build, own and operate 1200 MW of ISTS-connected solar capacity co-located with a 600 MWh battery energy storage system, delivering a firm four-hour peak block.",
        ],
      },
      {
        h2: "Qualification requirements",
        list: [
          "Net worth of at least ₹1.05 crore per MW quoted as on the last audited financial year",
          "Minimum liquidity or internal accrual of ₹0.35 crore per MW",
          "Prior commissioning of at least 250 MW of utility-scale renewable capacity",
        ],
      },
      {
        h2: "EMD and guarantee schedule",
        body: [
          "EMD is payable as a bank guarantee from a scheduled commercial bank valid for the bid validity plus a claim period. Performance bank guarantee is submitted in two tranches — at PPA signing and at financial closure.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can a consortium bid for this tender?",
        a: "Yes. A consortium of up to three members is permitted with a clearly nominated lead member holding at least 51% equity through the lock-in period.",
      },
      ...std("tender"),
    ],
    updated: "2026-08-29",
  },
  {
    id: "railway-vande-bharat-tender",
    slug: "railway-vande-bharat-tender",
    section: "tenders",
    title: "Indian Railways KAVACH Deployment — Zone Package IV",
    org: "Ministry of Railways / RDSO",
    category: "defense",
    badge: "Defense & Rail",
    headline: "₹1,450 Cr",
    summary:
      "Supply, installation, testing and commissioning of the indigenous KAVACH train collision avoidance system across 3,400 route kilometres.",
    deadline: "2026-09-12",
    tags: ["RDSO approved", "TCAS", "Multi-zone"],
    stats: [
      { label: "Estimated Value", value: "₹1,450 Cr", accent: true },
      { label: "EMD", value: "₹14.5 Cr" },
      { label: "PBG", value: "5% of value" },
      { label: "Route Km", value: "3,400" },
      { label: "Completion", value: "30 months" },
    ],
    blocks: [
      {
        h2: "Package definition",
        body: [
          "The package covers trackside RFID tag laying, station KAVACH units, loco cab equipment retrofits, optical fibre backbone and integration with the existing interlocking.",
        ],
      },
      {
        h2: "Mandatory approvals",
        list: [
          "RDSO approval for KAVACH sub-systems in the current validity cycle",
          "Prior execution of at least one signalling contract of 40% of this value",
          "ISO 9001 and SIL-4 certification evidence for the safety-critical stack",
        ],
      },
    ],
    faqs: [
      {
        q: "Is the EMD refundable for unsuccessful bidders?",
        a: "Yes. EMD is released to unsuccessful bidders after the award decision, typically within 30 days of the letter of acceptance issued to the winner.",
      },
      ...std("tender"),
    ],
    updated: "2026-08-28",
  },
  {
    id: "defense-quantum-tender",
    slug: "defense-quantum-tender",
    section: "tenders",
    title: "Defence Quantum Key Distribution Network",
    org: "Ministry of Defence (DRDO)",
    category: "defense",
    badge: "Defense & Rail",
    headline: "₹950 Cr",
    summary:
      "Establishment of a quantum-secure communication backbone linking command headquarters with QKD trusted nodes and post-quantum fallback.",
    deadline: "2026-10-08",
    tags: ["Make-I", "QKD", "Restricted"],
    stats: [
      { label: "Estimated Value", value: "₹950 Cr", accent: true },
      { label: "EMD", value: "₹9.5 Cr" },
      { label: "PBG", value: "5% of value" },
      { label: "Category", value: "Make-I (Indian)" },
      { label: "Security", value: "Clearance required" },
    ],
    blocks: [
      {
        h2: "Programme outline",
        body: [
          "The network deploys fibre-based QKD links between trusted nodes with a hybrid post-quantum cryptography overlay so that key material remains protected against harvest-now-decrypt-later attacks.",
        ],
      },
      {
        h2: "Bidder eligibility",
        list: [
          "Indian vendor as defined under the Defence Acquisition Procedure with at least 50% indigenous content",
          "Security clearance from the ministry for handling classified network topology",
          "Demonstrated laboratory QKD link over at least 100 km of deployed fibre",
        ],
      },
    ],
    faqs: [
      {
        q: "Are foreign OEMs allowed to participate?",
        a: "Only as technology partners to an Indian prime bidder, subject to indigenous content thresholds and ministry clearance.",
      },
      ...std("tender"),
    ],
    updated: "2026-08-26",
  },
  {
    id: "cpwd-datacenter-tender",
    slug: "cpwd-datacenter-tender",
    section: "tenders",
    title: "CPWD Tier-III Government Data Centre — Phase II",
    org: "Central Public Works Department",
    category: "infra",
    badge: "Infrastructure",
    headline: "₹560 Cr",
    summary:
      "Civil, electrical and mechanical works for a 12 MW IT-load Tier-III certified government data centre with N+1 redundancy.",
    deadline: "2026-09-05",
    tags: ["EPC", "Tier-III", "Uptime certified"],
    stats: [
      { label: "Estimated Value", value: "₹560 Cr", accent: true },
      { label: "EMD", value: "₹5.6 Cr" },
      { label: "PBG", value: "5% of value" },
      { label: "IT Load", value: "12 MW" },
      { label: "Completion", value: "24 months" },
    ],
    blocks: [
      {
        h2: "Works included",
        list: [
          "Shell and core civil works with seismic zone IV compliance",
          "HV/LV electrical distribution, UPS, DG sets and BMS integration",
          "Precision cooling, VESDA, gas suppression and physical security systems",
        ],
      },
      {
        h2: "Evaluation method",
        body: [
          "Two-packet system with a technical qualification gate followed by a financial bid opening for qualified bidders only. Award is on lowest evaluated cost inclusive of five-year comprehensive AMC.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is Uptime Institute certification mandatory?",
        a: "Yes. Tier-III design and constructed-facility certification are contractual milestones tied to payment releases.",
      },
      ...std("tender"),
    ],
    updated: "2026-08-23",
  },
  {
    id: "gem-multi-cloud-tender",
    slug: "gem-multi-cloud-tender",
    section: "tenders",
    title: "GeM Multi-Cloud Managed Services for MeitY",
    org: "Government e-Marketplace / MeitY",
    category: "it",
    badge: "IT & Cloud",
    headline: "₹350 Cr",
    summary:
      "Rate-contract style engagement for managed multi-cloud operations, FinOps and 24x7 SOC coverage for MeitY-administered workloads.",
    deadline: "2026-09-27",
    tags: ["GeM bid", "MeghRaj empanelled", "3 years"],
    stats: [
      { label: "Estimated Value", value: "₹350 Cr", accent: true },
      { label: "EMD", value: "₹3.5 Cr" },
      { label: "PBG", value: "3% of value" },
      { label: "Tenure", value: "3 years + 2" },
      { label: "Bid Portal", value: "GeM" },
    ],
    blocks: [
      {
        h2: "Service scope",
        list: [
          "Landing zone design and migration waves for 40+ ministry applications",
          "FinOps reporting with committed 18% year-on-year run-rate optimisation",
          "24x7 security operations centre with CERT-In incident reporting SLAs",
        ],
      },
      {
        h2: "Pre-qualification",
        body: [
          "Bidders must be MeitY-empanelled cloud service providers or managed service partners with an average annual turnover of ₹120 crore over the last three financial years.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can an MSP bid without being a hyperscaler?",
        a: "Yes, provided it holds valid partner authorisations from the underlying empanelled cloud providers and meets the turnover gate.",
      },
      ...std("tender"),
    ],
    updated: "2026-08-22",
  },

  // ---------------- SETTLEMENTS ----------------
  {
    id: "3m-combat-arms-earplugs-settlement",
    slug: "3m-combat-arms-earplugs-settlement",
    section: "settlements",
    title: "3M Combat Arms Earplugs Settlement Intelligence",
    org: "MDL 2885 — N.D. Florida",
    category: "mdl",
    badge: "MDL / Mass tort",
    headline: "$6.01 Billion fund",
    summary:
      "Payout structure, registration mechanics and tier eligibility for the 3M Combat Arms dual-ended earplug resolution programme.",
    deadline: "2026-12-31",
    tags: ["Hearing loss", "Tinnitus", "Veterans"],
    stats: [
      { label: "Total Fund", value: "$6.01 B", accent: true },
      { label: "Claim Window", value: "Open" },
      { label: "Typical Tier", value: "$5k – $250k" },
      { label: "Attorney Fee", value: "~33% contingency" },
      { label: "Claimants", value: "≈ 260,000" },
    ],
    blocks: [
      {
        h2: "How the fund is structured",
        body: [
          "The resolution allocates a fixed fund across registered claimants using a points matrix. Points are driven by audiogram severity, documented tinnitus, duration of exposure and service era.",
          "Payments are staged across multiple annual tranches rather than paid as a single lump sum.",
        ],
      },
      {
        h2: "Eligibility signals",
        list: [
          "Service use of the dual-ended Combat Arms earplug during the covered period",
          "Contemporaneous or post-service audiometric evidence of hearing threshold shift",
          "Documented tinnitus diagnosis strengthens tier placement",
        ],
      },
      {
        h2: "What to prepare",
        list: [
          "Service records showing unit and deployment window",
          "All available audiograms, including entrance and separation tests",
          "VA disability rating decisions relating to hearing loss or tinnitus",
        ],
      },
    ],
    faqs: [
      {
        q: "Does a VA disability rating guarantee a payout tier?",
        a: "No. A rating is strong supporting evidence but the settlement matrix applies its own scoring based on audiometric data and exposure documentation.",
      },
      {
        q: "Is this legal advice?",
        a: "No. This page is informational intelligence only. Consult a licensed attorney in your jurisdiction before making filing decisions.",
      },
    ],
    updated: "2026-08-30",
  },
  {
    id: "camp-lejeune-water-contamination-settlement",
    slug: "camp-lejeune-water-contamination-settlement",
    section: "settlements",
    title: "Camp Lejeune Water Contamination Claim Matrix",
    org: "CLJA — E.D. North Carolina",
    category: "environmental",
    badge: "Environmental",
    headline: "$150k – $450k elective option",
    summary:
      "Elective option tiers, tier-one qualifying illnesses and administrative claim sequencing under the Camp Lejeune Justice Act.",
    deadline: "2026-11-30",
    tags: ["CLJA", "Tier 1 illness", "Administrative claim"],
    stats: [
      { label: "Elective Range", value: "$150k – $450k", accent: true },
      { label: "Residency Min.", value: "30 days" },
      { label: "Covered Period", value: "1953 – 1987" },
      { label: "Admin Step", value: "Mandatory (6 months)" },
      { label: "Death Uplift", value: "+$100k" },
    ],
    blocks: [
      {
        h2: "Elective option tiers",
        body: [
          "The government's elective option offers fixed amounts based on diagnosis tier and length of exposure, avoiding individual causation litigation for those who accept.",
        ],
        list: [
          "Tier 1 diagnoses include kidney cancer, liver cancer, non-Hodgkin lymphoma, leukaemia and bladder cancer",
          "Tier 2 diagnoses include multiple myeloma, Parkinson's disease and kidney disease",
          "Exposure of 30 to 364 days pays the lower band; 365 days or more pays the higher band",
        ],
      },
      {
        h2: "Filing sequence",
        list: [
          "File the administrative claim with the Department of the Navy JAG",
          "Wait the statutory six-month period or an earlier denial",
          "Only then may a civil action be filed in the Eastern District of North Carolina",
        ],
      },
    ],
    faqs: [
      {
        q: "Can family members and in-utero claimants file?",
        a: "Yes. Spouses, children and in-utero exposure claims are covered where the residency and diagnosis criteria are met.",
      },
      {
        q: "Does accepting the elective option end other claims?",
        a: "Yes. Accepting the elective option resolves the claim and forecloses further litigation on the same injury.",
      },
    ],
    updated: "2026-08-29",
  },
  {
    id: "paraquat-parkinsons-settlement-matrix",
    slug: "paraquat-parkinsons-settlement-matrix",
    section: "settlements",
    title: "Paraquat–Parkinson's Settlement Matrix",
    org: "MDL 3004 — S.D. Illinois",
    category: "mdl",
    badge: "MDL / Mass tort",
    headline: "$400k – $600k core tier",
    summary:
      "Exposure documentation standards, bellwether posture and estimated tier values in the paraquat dichloride Parkinson's litigation.",
    deadline: "2027-03-31",
    tags: ["Herbicide", "Parkinson's", "Applicator claims"],
    stats: [
      { label: "Core Tier", value: "$400k – $600k", accent: true },
      { label: "Status", value: "Settlement track" },
      { label: "Exposure Proof", value: "Purchase / employment" },
      { label: "Attorney Fee", value: "~40% contingency" },
      { label: "Filed Claims", value: "≈ 6,000" },
    ],
    blocks: [
      {
        h2: "Matrix drivers",
        list: [
          "Age at diagnosis — earlier onset scores higher",
          "Hoehn and Yahr stage at the time of claim submission",
          "Cumulative documented exposure days as a licensed applicator or farm worker",
        ],
      },
      {
        h2: "Evidence checklist",
        list: [
          "Neurologist diagnosis with ICD coding and treatment history",
          "Applicator licence records or employer affidavits establishing exposure",
          "Product purchase records where available",
        ],
      },
    ],
    faqs: [
      {
        q: "Do residential exposures qualify?",
        a: "Paraquat is restricted-use, so residential exposure claims are rare and require unusually strong proximity evidence.",
      },
      {
        q: "Is this legal advice?",
        a: "No. Values shown are reported ranges for orientation only and are not a promise of any recovery.",
      },
    ],
    updated: "2026-08-27",
  },
];

export const FINANCE_TOOLS = [
  {
    id: "7th-cpc-salary-calculator",
    slug: "7th-cpc-salary-calculator",
    title: "7th CPC Salary Calculator",
    summary:
      "Compute basic pay, DA, HRA by city class, transport allowance and NPS deduction for any 7th Pay Commission level.",
    category: "salary",
    badge: "Salary",
  },
  {
    id: "8th-cpc-salary-calculator",
    slug: "8th-cpc-salary-calculator",
    title: "8th CPC Salary Projection Calculator",
    summary:
      "Project revised pay under an assumed 8th CPC fitment factor and compare it against your current 7th CPC entitlement.",
    category: "salary",
    badge: "Salary",
  },
  {
    id: "tender-emd-pbg-calculator",
    slug: "tender-emd-pbg-calculator",
    title: "Tender EMD & PBG Calculator",
    summary:
      "Work out earnest money deposit and performance bank guarantee amounts, with automatic lakh/crore formatting.",
    category: "procurement",
    badge: "Procurement",
  },
] as const;

export function bySection(section: string) {
  return ENTRIES.filter((e) => e.section === section);
}

export function findEntry(section: string, slug: string) {
  return ENTRIES.find((e) => e.section === section && e.slug === slug);
}

export function daysRemaining(deadline: string) {
  const diff = Math.ceil((new Date(deadline).getTime() - Date.now()) / 86_400_000);
  if (diff < 0) return { label: "Closed", days: diff, closed: true };
  if (diff === 0) return { label: "Closes today", days: 0, closed: false };
  if (diff === 1) return { label: "1 day left", days: 1, closed: false };
  return { label: `${diff} days left`, days: diff, closed: false };
}

export function formatINR(n: number) {
  if (!isFinite(n)) return "₹0";
  if (n >= 1_00_00_000) return `₹${(n / 1_00_00_000).toFixed(2)} Cr`;
  if (n >= 1_00_000) return `₹${(n / 1_00_000).toFixed(2)} Lakh`;
  return `₹${Math.round(n).toLocaleString("en-IN")}`;
}
