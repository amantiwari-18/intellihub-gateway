# IntelliHub Gateway

give me that will make the thoeme best i want you to make it in white theme only but make this the best ever you have seen please make sure this looks good and the ads and analytics and seo things make rules and srcitly need to follow rules and theme and these things also# 🏗️ KT-Transfer — Poori Project Structure (Everything Inside)

---

📁 Root Files — Kya Karta Hai Kya

```

kt_transfer_platform/

│

├── index.html     (862 lines)   ← Homepage — Jobs + Tenders + Calculators + Settlements

├── index.css      (1449 lines)  ← MASTER CSS — sabka style yahan se aata hai

├── app.js         (747 lines)   ← MASTER JS — sirf homepage ke liye

├── about.html     (24KB)        ← About page

├── contact.html   (25KB)        ← Contact page

├── privacy.html   (18KB)        ← Privacy Policy

├── terms.html     (20KB)        ← Terms & Disclaimer

├── 404.html       (10KB)        ← Custom 404 error page

├── ads.txt        (59 bytes)    ← AdSense verification: ca-pub-4474727542779927

├── robots.txt     (396 bytes)   ← SEO: Googlebot allowed, crawl rules

└── sitemap.xml    (5KB)         ← All page URLs for Google indexing

```

---

📂 SECTION FOLDERS — Andar Kya Kya Hai

💼 jobs/ (6 files)

```

jobs/

├── index.html                     ← Jobs Hub listing page

├── isro-scientist-engineer-job.html   ← ISRO Scientist SD (₹28.5 LPA)

├── rbi-grade-b-it-job.html            ← RBI Grade B IT (₹34.5 LPA)

├── upsc-it-director-job.html          ← UPSC Asst. Director IT (Level 11)

├── nic-cloud-devops-job.html          ← NIC Cloud DevOps Lead

└── state-bank-dba-job.html            ← SBI Lead DBA (₹24–32 LPA)

```

🎨 Accent: `--accent-detail: #38bdf8` (Sky Blue)

---

🏛️ tenders/ (6 files)

```

tenders/

├── index.html                         ← Tenders Hub listing page

├── seci-solar-bess-tender.html        ← SECI 1200MW Solar (₹2,800 Cr)

├── railway-vande-bharat-tender.html   ← Railways KAVACH (₹1,450 Cr)

├── defense-quantum-tender.html        ← Defense Quantum (₹950 Cr)

├── cpwd-datacenter-tender.html        ← CPWD Data Center (₹560 Cr)

└── gem-multi-cloud-tender.html        ← GeM Multi-Cloud MeitY (₹350 Cr)

```

🎨 Accent: `--accent-detail: #f59e0b` (Amber)

---

⚖️ settlements/ (4 files)

```

settlements/

├── index.html                                      ← Settlements Hub

├── 3m-combat-arms-earplugs-settlement.html         ← 3M $6.01B (currently open!)

├── camp-lejeune-water-contamination-settlement.html ← Camp Lejeune $150k–$450k

└── paraquat-parkinsons-settlement-matrix.html      ← Paraquat $400k–$600k

```

🎨 Accent: `--accent-detail: #a855f7` (Purple)

---

📊 finance/ (4 files)

```

finance/

├── index.html                        ← Finance Hub

├── 7th-cpc-salary-calculator.html   ← 7th CPC Salary Calculator

├── 8th-cpc-salary-calculator.html   ← 8th CPC Salary Calculator

└── tender-emd-pbg-calculator.html   ← EMD + PBG Calculator

```

🎨 Accent: `--accent-detail: #10b981` (Emerald)

---

🎨 index.css — Complete Section Map (1449 lines)

| Lines | Section | Kya hai |

|---|---|---|

| 1–67 | `:root` Design Tokens | Sab variables — colors, fonts, radius, shadows |

| 68–107 | Reset & Base | `*` reset, `html`, `body` gradient background |

| 109–191 | Ambient Glow Orbs | `.ambient-glow-1/2/3` + `floatAmbient` animation |

| 193–204 | `.container` Layout | Max-width 1400px, responsive padding |

| 206–316 | Site Header & Navbar | Sticky header, `.navbar`, `.brand-logo`, `.nav-links` |

| 318–358 | Hamburger Button | Mobile menu toggle, 3-line animate to X |

| 360–477 | Mobile Drawer | Slide-in right drawer + overlay |

| 479–538 | Buttons | `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-amber`, `.btn-sm` |

| 540–637 | Hero Section | `.hero-section`, `.hero-title`, gradients, `.hero-pill`, `.pulse-dot` |

| 639–688 | Telemetry Cards | Stats grid on homepage (4 col) |

| 689–769 | Search Matrix | Search box, `.search-tag-chip`, quick filter chips |

| 770–877 | Sections & Filter Pills | `.section`, `.section-header`, `.filter-pill` |

| 878–1055 | Cards (Jobs & Tenders) | `.card-item`, badges, `.card-footer-row`, bookmark button |

| 1057–1090 | Guides Grid | 3-column directory grid |

| 1069–1181 | Calculators | `.calc-card`, form inputs, output box |

| 1182–1225 | Watchlist | `.watchlist-card`, `.watchlist-item`, empty state |

| 1227–1285 | FAQ Accordion | `.faq-item`, `.faq-chevron`, answer panel |

| 1287–1366 | Footer | `.site-footer`, 5-col `.footer-grid`, `.footer-bottom` |

| 1368–1386 | Table Responsive | Horizontal scroll wrapper, custom scrollbar |

| 1388–1449 | Utility Classes | Nav icons, badge variants, filter pills repeat |

---

🎨 `:root` Design Tokens — Exact Values

```css

/* Background */

--bg-primary:   #030712   /* Near-black */

--bg-secondary: #080e1e   /* Deep navy */

--bg-tertiary:  #0f172a   /* Slate dark */

--bg-card:      rgba(15,23,42,0.72)   /* Glass card */

/* Accents */

--accent-jobs:    #38bdf8  /* Sky Blue  → Jobs */

--accent-tenders: #f59e0b  /* Amber     → Tenders */

--accent-emerald: #10b981  /* Green     → Brand/Finance */

--accent-violet:  #8b5cf6  /* Violet    → base */

--accent-cyan:    #06b6d4  /* Cyan      → IT tenders */

--accent-rose:    #f43f5e  /* Red-pink  → Defense */

--accent-kt:      #10b981  /* Brand green */

--accent-detail:  #38bdf8  /* Per-page override */

/* Text */

--text-primary:   #f8fafc

--text-secondary: #94a3b8

--text-muted:     #64748b

/* Fonts */

--font-display: 'Outfit'

--font-body:    'Plus Jakarta Sans'

--font-mono:    'JetBrains Mono'

/* Sizes */

--radius-sm:   8px

--radius-md:   14px

--radius-lg:   22px

--radius-full: 9999px

--max-width:   1400px

/* Transitions */

--transition-fast:   0.15s cubic-bezier(0.4, 0, 0.2, 1)

--transition-normal: 0.25s cubic-bezier(0.4, 0, 0.2, 1)

--transition-slow:   0.4s  cubic-bezier(0.16, 1, 0.3, 1)

```

---

⚙️ app.js — Complete Module Map (747 lines)

Module 1 — DATASETS (lines 1–272)

```js

JOBS_DATA = ********

  { id, title, org, cat, badge, badgeClass,

    salary, posts, deadline, deadlineLabel, tags, desc, url }

]

// Job categories: "sarkari" | "tech" | "banking"

TENDERS_DATA = ********

  { id, title, authority, cat, badge, badgeClass,

    value, emd, deadline, deadlineLabel, tags, desc, url }

]

// Tender categories: "defense" | "it" | "infra"

SETTLEMENTS_DATA = ********

  { id, title, authority, cat, badge, value, fee,

    deadline, deadlineLabel, tags, desc, url }

]

```

---

Module 2 — APP STATE (lines 276–285)

```js

appState = {

  currentJobFilter:    "all",

  currentTenderFilter: "all",

  searchQuery:         "",

  watchlist:           [] // persisted in localStorage

}

WATCHLIST_KEY = ********

```

---

Module 3 — UI RENDERING ENGINES (lines 287–487)

```js

getDaysRemaining(deadlineStr)

  → Returns "X Days Left" | "1 Day Left" | "Closed"

renderJobs()

  → Filters JOBS_DATA by category + search

  → Injects HTML cards into #jobs-cards-container

  → Each card: badge, days-pill, title, org, salary, vacancies,

               desc, tags, "View Detailed Dossier" btn, bookmark btn

renderTenders()

  → Filters TENDERS_DATA by category + search

  → Injects HTML into #tenders-cards-container

  → Each card: badge, days-pill, title, authority, value, EMD,

               desc, ref+tags, "View Tender Dossier & BoQ" btn, bookmark

renderWatchlist()

  → Shows saved items from appState.watchlist

  → Updates 3 counters: #watchlist-count-badge, #mobile-watchlist-count, #nav-watchlist-count

  → Empty state: bookmark icon + message if 0 items

```

---

Module 4 — WATCHLIST CONTROLLER (lines 489–537)

```js

window.toggleWatchlist(id, type)

  → type: "job" | "tender"

  → Agar already saved → splice karo (remove)

  → Agar naya → push karo with {id, type, title, subtitle,

                                badge, badgeClass, deadlineLabel, url}

  → localStorage mein save karo

  → Re-render: renderJobs() + renderTenders() + renderWatchlist()

```

---

Module 5 — CALCULATORS (lines 539–620)

```js

initSalaryCalculator()

  → Reads: #pay-level, #city-class, #da-rate

  → Calculates: Basic, DA (50%), HRA (27%/18%/9%), TA, NPS (10%)

  → Updates: #out-basic, #out-da, #out-hra, #out-ta, #out-nps, #out-net

initTenderCalculator()

  → Reads: #tender-value, #emd-pct, #pbg-pct

  → Calculates EMD amount + PBG amount

  → Auto-formats: Lakh / Crore / plain ₹

  → Updates: #emd-out-tv, #emd-out-emd, #emd-out-pbg

```

---

Module 6 — MOBILE NAV (lines 622–668)

```js

initMobileNav()

  → openDrawer()  → adds .active to drawer + overlay, locks body scroll

  → closeDrawer() → removes .active, restores scroll

  → Listeners: hamburger click, close-btn click, overlay click, Escape key

  → All drawer links → closeDrawer() on click

```

---

Module 7 — DOMContentLoaded INIT (lines 670–747)

```js

document.addEventListener("DOMContentLoaded", () => {

  renderJobs()

  renderTenders()

  renderWatchlist()

  initSalaryCalculator()

  initTenderCalculator()

  initMobileNav()

  // Search: #global-search-input → appState.searchQuery → re-render

  // Clear btn: empties search → re-render

  // Quick chips: .search-tag-chip → fills search → scrolls to #jobs-section

  // Filter pills: #jobs-filter-bar → appState.currentJobFilter → renderJobs()

  //               #tenders-filter-bar → appState.currentTenderFilter → renderTenders()

  // FAQ: .faq-item → .active toggle on click

})

```

---

🔗 Ek Page Ka Data Flow — Full Cycle

```

USER Opens Page

      │

      ▼

Browser loads HTML →  (shared styles)

      │

      ▼

Google Fonts async load (Outfit + Plus Jakarta Sans + JetBrains Mono)

      │

      ▼ (Homepage only)



  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  



```

---

📋 Har Page Ka Common Template (Body Section)

```html



  

  

  

  

  



    [Logo + Close btn + Nav links]

  



  

  



    

      [Brand Logo] [Nav Links ul] [Watchlist btn + Hamburger]

    

  



  

    

    



      [breadcrumb] [page-badge] [h1] [page-lead] [meta-strip chips]

    



    

    



      



        

  

          

          



            [h2 sections] [tables] [lists] [highlight-box] [faq-accordion]

            [AdSense  units inline]

          



          



            

 [stat-rows] 



            [AdSense sidebar ad]

            

 [Related links] 



          



        



      



    



  

  

  



    



      [Brand + disclaimer] [Jobs col] [Tenders col] [Settlements col] [Portal col]

    



    



      [Copyright] [Live dot + "Live National Portal"]

    



  



  

  



```

---

🏷️ Badges — Saare Types

| Badge Class | Color | Use Case |

|---|---|---|

| `.badge-sarkari` | Sky Blue `#38bdf8` | Government / UPSC jobs |

| `.badge-tech` | Emerald `#10b981` | IT / Space / Tech jobs |

| `.badge-banking` | Violet `#8b5cf6` | Banking / PSU jobs |

| `.badge-defense` | Amber `#f59e0b` | Defense / Rail tenders |

| `.badge-it` | Cyan `#06b6d4` | IT / Cloud tenders |

| `.badge-infra` | Purple `#c084fc` | Infrastructure tenders |

| `.badge-legal` | Purple `#a855f7` | Legal settlements |

---

💡 Key Things to Remember

> Koi bhi global change → sirf `index.css` edit karo

> Homepage pe nayi job/tender add karni ho → `app.js` mein `JOBS_DATA[]` ya `TENDERS_DATA[]` mein ek object add karo

> Nayi detail page banana ho → Same section se closest page copy karo → title/meta/canonical/content badlo

> `?v=8` → Cache-busting version number, CSS update ke baad ise badho (v9, v10...)

> AdSense slot `8042251860` → Har page mein same slot ID use hoti hai

🔁 Har Page Mein Common Cheezein — Ads + SEO + CSS

---

1️⃣ GOOGLE ANALYTICS — Identical Har Page Mein

**Yeh exact same code har ek page ke `` mein line 4–11 pe hai:**

```html

```

| Item | Value |
|---|---|
| Platform | Google Analytics 4 (GA4) |
| Property ID | `G-7FCW1206KM` |
| Load type | `async` — page load block nahi karta |
| Position | Sabse pehle `` mein (best practice for tracking) |

---

## 2️⃣ GOOGLE ADSENSE — Har Page Mein 3–4 Ad Units

### Publisher Setup (Head mein — line 12–13)
```html

```
| Item | Value |
|---|---|
| Publisher ID | `ca-pub-4474727542779927` |
| Ad Slot ID | `8042251860` (ek hi slot ID har jagah) |
| Load type | `async` |

---

### Ad Placements — Kahan Kahan Lagaaye Hain

#### 📍 Ad Unit 1 — Content ke Andar (h2 ke baad, leaderboard style)
```html

```
**Kahan:** Main content mein har `

` section ke baad (3–4 baar repeat hota hai page mein)

---

#### 📍 Ad Unit 2 — Bottom of Main Content (leaderboard)
```html

```
**CSS:** `.ad-slot-leaderboard { min-height:90px; max-width:728px; margin:2rem auto; }`

---

#### 📍 Ad Unit 3 — Sidebar (rectangle/box ad)
```html

```
**CSS:** `.ad-slot-rectangle { min-height:250px; max-width:300px; margin:1.25rem auto; }`

---

#### 📍 Ad CSS (har page ke inline `@type` use hota hai:**

### Jobs Pages → `JobPosting`
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "JobPosting",
      "title": "Job Title",
      "hiringOrganization": { "@type": "Organization", "name": "ISRO" },
      "baseSalary": { "@type": "MonetaryAmount", "value": 28500 },
      "jobLocation": { "@type": "Place", "address": "India" },
      "employmentType": "FULL_TIME",
      "validThrough": "2026-10-15"
    },
    { "@type": "FAQPage", "mainEntity": [...] },
    { "@type": "BreadcrumbList", "itemListElement": [...] }
  ]
}
```

### Tenders Pages → `GovernmentService`
```json
{
  "@type": "GovernmentService",
  "name": "Tender Name",
  "serviceType": "Public Procurement",
  "areaServed": "India",
  "provider": { "@type": "GovernmentOrganization", "name": "SECI" }
}
```

### Settlements Pages → `LegalService` + `FAQPage`
```json
{
  "@type": "LegalService",
  "name": "3M Combat Arms Settlement Intelligence",
  "serviceType": "Multidistrict Mass Tort Settlement Intelligence"
}
```

### Finance Pages → `WebApplication`
```json
{
  "@type": "WebApplication",
  "name": "8th Pay Commission Salary Calculator",
  "applicationCategory": "FinanceApplication",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" }
}
```

### Har Page Mein Common JSON-LD Pieces
```json
{ "@type": "FAQPage",       "mainEntity": [ Q&A pairs ] },
{ "@type": "BreadcrumbList","itemListElement": [ position 1,2,3 ] }
```

---

## 5️⃣ GOOGLE FONTS — Identical Har Page Mein

```html
<!-- Preconnect for speed -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Async load — render block nahi hoga -->
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;600&display=swap"
      rel="stylesheet"
      media="print"
      onload="this.media='all'">

<!-- Fallback for JS disabled browsers -->
<noscript>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@700;800;900&display=swap" rel="stylesheet">
</noscript>
```

**Technique:** `media="print"` trick → browser immediately load karta hai without blocking render, phir `onload` se `media='all'` ho jaata hai.

---

## 6️⃣ MASTER CSS LINK — Har Page Mein Same

```html
<link rel="stylesheet" href="../index.css?v=8">
```

> ⚠️ `?v=8` → Cache busting. Jab CSS update karo, number badhao (v9, v10...) taaki browser purana cached version na use kare.

---

## 7️⃣ INLINE `<style>` — Jo Same Hai, Jo Different Hai

### ✅ Bilkul Identical Blocks (Copy-paste same across ALL pages)

```css
/* Layout */
.breadcrumb { display:flex; gap:0.4rem; align-items:center; font-size:0.8rem; color:var(--text-muted); margin-bottom:1.1rem; flex-wrap:wrap; }
.breadcrumb a { color:var(--accent-detail); text-decoration:none; }
.breadcrumb svg { flex-shrink:0; opacity:0.5; }

.page-h1 { font-family:var(--font-display); font-size:clamp(1.5rem, 4.5vw, 2.75rem); font-weight:900; line-height:1.15; letter-spacing:-0.03em; margin-bottom:0.75rem; }
.page-lead { font-size:clamp(0.92rem, 2vw, 1.05rem); color:var(--text-secondary); max-width:820px; line-height:1.75; }

.content-grid { display:grid; grid-template-columns:1fr; gap:2rem; margin-top:2.5rem; align-items:start; }
@media (min-width: 920px) { .content-grid { grid-template-columns:1fr 340px; gap:2.5rem; } }

/* Content typography */
.main-content h2 { font-family:var(--font-display); font-size:clamp(1.2rem, 3vw, 1.55rem); font-weight:800; margin:2.5rem 0 1rem; border-bottom:1px solid rgba(255,255,255,0.07); padding-bottom:0.5rem; }
.main-content p, .main-content li { color:var(--text-secondary); line-height:1.8; font-size:0.94rem; }

/* Stat sidebar */
.stat-row { display:flex; justify-content:space-between; padding:0.55rem 0; border-bottom:1px solid var(--border-glass); font-size:0.84rem; }
.stat-label { color:var(--text-muted); }
.stat-value { color:var(--text-primary); font-weight:700; font-family:var(--font-mono); }
.stat-value.accent { color:var(--accent-detail); }

/* FAQ */
.faq-item { background:var(--bg-card); border:1px solid var(--border-glass); border-radius:var(--radius-md); margin-bottom:0.75rem; overflow:hidden; }
.faq-question { padding:1rem 1.25rem; cursor:pointer; display:flex; justify-content:space-between; align-items:center; font-weight:700; font-size:0.95rem; color:var(--text-primary); }
.faq-question:hover { color:var(--accent-detail); }
.faq-answer { padding:0 1.25rem 1.1rem; color:var(--text-secondary); font-size:0.9rem; line-height:1.7; display:none; }
.faq-item.active .faq-answer { display:block; }
.faq-item.active .faq-icon { transform:rotate(180deg); }
.faq-icon { transition:transform 0.2s ease; }

/* Ads */
.ad-slot { display:block; width:100%; background:transparent; border:1px dashed rgba(255,255,255,0.06); border-radius:8px; overflow:hidden; }
.ad-slot-rectangle { min-height:250px; max-width:300px; margin:1.25rem auto; }
.ad-slot-leaderboard { min-height:90px; max-width:728px; margin:2rem auto; }
```

---

### ✏️ Jo Sirf Accent Color Ke Hisaab Se Change Hota Hai

```css
/* Jobs pages */
:root { --accent-detail: #38bdf8; }
.page-hero { border-bottom: 1px solid rgba(56,189,248,0.15); }
.page-badge { border:1px solid rgba(56,189,248,0.3); background:rgba(56,189,248,0.08); }
.org-banner { background:rgba(56,189,248,0.05); border:1px solid rgba(56,189,248,0.2); }
.highlight-box { background:rgba(56,189,248,0.04); }

/* Tenders pages */
:root { --accent-detail: #eab308; }
.page-hero { border-bottom: 1px solid rgba(234,179,8,0.15); }
/* ... same pattern with amber RGBA values */

/* Settlements pages */
:root { --accent-detail: #a855f7; }
/* ... same pattern with purple RGBA values */

/* Finance pages */
:root { --accent-detail: #10b981; }
/* ... same pattern with emerald RGBA values */
```

**Pattern:** Har page ek hi CSS template use karta hai, bas `--accent-detail` aur usse related RGBA values change hoti hain!

---

## 8️⃣ INLINE `<script>` — Har Sub-Page Ke Bottom Mein

```html
<script>
(function() {
  "use strict";
  
  // ---- Mobile Drawer ----
  var toggleBtn = document.getElementById("mobile-menu-toggle");
  var drawer    = document.getElementById("mobile-nav-drawer");
  var overlay   = document.getElementById("mobile-nav-overlay");
  var closeBtn  = document.getElementById("mobile-drawer-close");

  function openDrawer() {
    drawer.classList.add("active");
    overlay.classList.add("active");
    drawer.setAttribute("aria-hidden", "false");
    toggleBtn.setAttribute("aria-expanded", "true");
    toggleBtn.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    drawer.classList.remove("active");
    overlay.classList.remove("active");
    drawer.setAttribute("aria-hidden", "true");
    toggleBtn.setAttribute("aria-expanded", "false");
    toggleBtn.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (toggleBtn) toggleBtn.addEventListener("click", function() {
    drawer.classList.contains("active") ? closeDrawer() : openDrawer();
  });
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  if (overlay)  overlay.addEventListener("click", closeDrawer);
  document.addEventListener("keydown", function(e) { if (e.key === "Escape") closeDrawer(); });
  if (drawer) drawer.querySelectorAll("a").forEach(function(l) {
    l.addEventListener("click", closeDrawer);
  });

  // ---- FAQ Accordion ----
  document.querySelectorAll(".faq-question").forEach(function(btn) {
    btn.addEventListener("click", function() {
      this.parentElement.classList.toggle("active");
    });
  });

  // ---- Nav Watchlist Count (from localStorage) ----
  try {
    var wl = JSON.parse(localStorage.getItem(********) || "[]");
    var el = document.getElementById("nav-watchlist-count");
    if (el) el.textContent = wl.length;
  } catch(e) {}

})();
</script>
```

**Yeh exact same script** sabhi sub-pages (jobs, tenders, settlements, finance) ke bottom mein hoti hai. Sirf homepage pe yeh nahi hoti — wahan `app.js` ye sab handle karta hai.

---

## 📊 Summary Table — Har Page Mein Kya Kya Same Hai

| Element | Same Across ALL Pages? | Details |
|---|---|---|
| Google Analytics ID | ✅ Identical | `G-7FCW1206KM` |
| AdSense Publisher ID | ✅ Identical | `ca-pub-4474727542779927` |
| AdSense Slot ID | ✅ Identical | `8042251860` (sabme ek hi) |
| Ad Placement Pattern | ✅ Same | h2 ke baad + bottom + sidebar |
| `meta robots` | ✅ Identical | `index, follow, max-snippet:-1...` |
| `og:site_name` | ✅ Identical | `KT-Transfer Intelligence Portal` |
| `twitter:card` | ✅ Identical | `summary_large_image` |
| Google Fonts | ✅ Identical | Outfit + Plus Jakarta Sans + JetBrains Mono |
| `index.css` link | ✅ Same path | `../index.css?v=8` |
| Inline CSS template | ✅ 95% Same | Only accent color RGBA changes |
| FAQ accordion CSS | ✅ Identical | |
| Mobile drawer JS | ✅ Identical | |
| Footer HTML | ✅ Identical | Same 5 columns |
| Header / Navbar | ✅ Identical | Same markup |
| `<title>` | ❌ Page-specific | |
| `meta description` | ❌ Page-specific | |
| `meta keywords` | ❌ Page-specific | |
| `canonical` URL | ❌ Page-specific | |
| OG title/desc/url | ❌ Page-specific | |
| Twitter title/desc | ❌ Page-specific | |
| JSON-LD `@type` | ❌ Section-specific | JobPosting / GovernmentService / LegalService / WebApplication |
| `--accent-detail` color | ❌ Section-specific | Blue/Amber/Purple/Green |
| Main content | ❌ Completely unique | |

continue and another things  not all the pages will be shwon in the home page as there will be more then 1lakh pages so it should be like that 

and there should be seo things also the best prctiec for seo 

and pelase make sure tihngs look even better and the good logo should be there not so simple 

pelase give it you all

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d9a10dcd-891f-4145-ac47-55d5f5bd3344).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
