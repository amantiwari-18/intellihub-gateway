import { useMemo, useState } from "react";
import { formatINR } from "@/lib/data";

const LEVELS: Record<string, number> = {
  "Level 6": 35400,
  "Level 7": 44900,
  "Level 8": 47600,
  "Level 9": 53100,
  "Level 10": 56100,
  "Level 11": 67700,
  "Level 12": 78800,
  "Level 13": 123100,
};
const HRA: Record<string, number> = { "X (Metro)": 27, "Y (Tier 2)": 18, "Z (Tier 3)": 9 };
const TA: Record<string, number> = { "X (Metro)": 3600, "Y (Tier 2)": 1800, "Z (Tier 3)": 1800 };

const field =
  "w-full rounded-xl border border-border bg-surface-2 px-3.5 py-2.5 text-sm font-semibold text-ink outline-none transition focus:border-primary/50 focus:bg-surface focus:ring-4 focus:ring-primary/10";
const labelCls = "mono-num mb-1.5 block text-[0.66rem] uppercase tracking-[0.16em] text-muted-foreground";

function Row({ label, value, strong }: { label: string; value: string; strong?: boolean }) {
  return (
    <div className={`flex items-center justify-between py-2.5 ${strong ? "" : "border-b border-border"}`}>
      <span className={`text-[0.85rem] ${strong ? "font-bold text-ink" : "text-muted-foreground"}`}>{label}</span>
      <span className={`mono-num font-bold ${strong ? "accent-text text-[1.05rem]" : "text-[0.88rem] text-ink"}`}>
        {value}
      </span>
    </div>
  );
}

export function SalaryCalculator({ projection = false }: { projection?: boolean }) {
  const [level, setLevel] = useState("Level 10");
  const [city, setCity] = useState("X (Metro)");
  const [da, setDa] = useState(50);
  const [fitment, setFitment] = useState(2.28);

  const r = useMemo(() => {
    const base = LEVELS[level] ?? 56100;
    const basic = projection ? Math.round((base * fitment) / 100) * 100 : base;
    const daAmt = projection ? 0 : Math.round((basic * da) / 100);
    const hra = Math.round((basic * (HRA[city] ?? 27)) / 100);
    const ta = TA[city] ?? 1800;
    const gross = basic + daAmt + hra + ta;
    const nps = Math.round((basic + daAmt) * 0.1);
    const net = gross - nps;
    return { basic, daAmt, hra, ta, gross, nps, net };
  }, [level, city, da, fitment, projection]);

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="grid gap-4 content-start">
        <div>
          <label className={labelCls} htmlFor="pay-level">
            Pay level (7th CPC)
          </label>
          <select id="pay-level" className={field} value={level} onChange={(e) => setLevel(e.target.value)}>
            {Object.keys(LEVELS).map((l) => (
              <option key={l}>{l}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelCls} htmlFor="city-class">
            City class
          </label>
          <select id="city-class" className={field} value={city} onChange={(e) => setCity(e.target.value)}>
            {Object.keys(HRA).map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>
        {projection ? (
          <div>
            <label className={labelCls} htmlFor="fitment">
              Assumed 8th CPC fitment factor — {fitment.toFixed(2)}×
            </label>
            <input
              id="fitment"
              type="range"
              min={1.8}
              max={3}
              step={0.01}
              value={fitment}
              onChange={(e) => setFitment(Number(e.target.value))}
              className="w-full accent-[var(--accent-detail)]"
            />
          </div>
        ) : (
          <div>
            <label className={labelCls} htmlFor="da-rate">
              Dearness allowance — {da}%
            </label>
            <input
              id="da-rate"
              type="range"
              min={0}
              max={80}
              step={1}
              value={da}
              onChange={(e) => setDa(Number(e.target.value))}
              className="w-full accent-[var(--accent-detail)]"
            />
          </div>
        )}
      </div>

      <div className="surface-card p-5">
        <Row label={projection ? "Revised basic pay" : "Basic pay"} value={formatINR(r.basic)} />
        {!projection && <Row label={`Dearness allowance (${da}%)`} value={formatINR(r.daAmt)} />}
        <Row label={`HRA (${HRA[city]}%)`} value={formatINR(r.hra)} />
        <Row label="Transport allowance" value={formatINR(r.ta)} />
        <Row label="NPS deduction (10%)" value={`− ${formatINR(r.nps)}`} />
        <Row label="Estimated in-hand / month" value={formatINR(r.net)} strong />
      </div>
    </div>
  );
}

export function EmdCalculator() {
  const [value, setValue] = useState(50_00_00_000);
  const [emdPct, setEmdPct] = useState(2);
  const [pbgPct, setPbgPct] = useState(5);

  const emd = (value * emdPct) / 100;
  const pbg = (value * pbgPct) / 100;

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="grid content-start gap-4">
        <div>
          <label className={labelCls} htmlFor="tender-value">
            Tender value (₹)
          </label>
          <input
            id="tender-value"
            type="number"
            min={0}
            className={field}
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
          />
          <p className="mono-num mt-1.5 text-[0.72rem] text-muted-foreground">= {formatINR(value)}</p>
        </div>
        <div>
          <label className={labelCls} htmlFor="emd-pct">
            EMD percentage — {emdPct}%
          </label>
          <input
            id="emd-pct"
            type="range"
            min={0.5}
            max={5}
            step={0.5}
            value={emdPct}
            onChange={(e) => setEmdPct(Number(e.target.value))}
            className="w-full accent-[var(--accent-detail)]"
          />
        </div>
        <div>
          <label className={labelCls} htmlFor="pbg-pct">
            PBG percentage — {pbgPct}%
          </label>
          <input
            id="pbg-pct"
            type="range"
            min={1}
            max={10}
            step={0.5}
            value={pbgPct}
            onChange={(e) => setPbgPct(Number(e.target.value))}
            className="w-full accent-[var(--accent-detail)]"
          />
        </div>
      </div>
      <div className="surface-card p-5">
        <Row label="Tender value" value={formatINR(value)} />
        <Row label={`EMD @ ${emdPct}%`} value={formatINR(emd)} />
        <Row label={`PBG @ ${pbgPct}%`} value={formatINR(pbg)} strong />
      </div>
    </div>
  );
}
