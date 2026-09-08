"use client";

import { useState, type ReactNode } from "react";

type Tab = "tip" | "bmi" | "loan";

const money = (n: number) =>
  isFinite(n) ? "$" + Math.round(n).toLocaleString("en-US") : "$0";

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="field">
      <label>{label}</label>
      {children}
    </div>
  );
}

function Result({
  big,
  rows,
}: {
  big: [string, string];
  rows: [string, string][];
}) {
  return (
    <div className="result">
      <p className="result-big-label">{big[0]}</p>
      <p className="result-big grad-text">{big[1]}</p>
      <div className="result-rows">
        {rows.map(([k, v]) => (
          <div key={k} className="result-row">
            <span>{k}</span>
            <span>{v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function num(v: string) {
  const n = Number(v);
  return isFinite(n) ? n : 0;
}

function TipCalc() {
  const [bill, setBill] = useState(50);
  const [tip, setTip] = useState(15);
  const [people, setPeople] = useState(2);
  const tipAmt = (bill * tip) / 100;
  const total = bill + tipAmt;
  const per = people > 0 ? total / people : total;
  return (
    <div className="calc-body">
      <div className="fields">
        <Field label="Bill amount ($)">
          <input type="number" min={0} value={bill} onChange={(e) => setBill(num(e.target.value))} />
        </Field>
        <Field label={`Tip — ${tip}%`}>
          <input type="range" min={0} max={30} value={tip} onChange={(e) => setTip(num(e.target.value))} />
        </Field>
        <Field label="Split between (people)">
          <input type="number" min={1} value={people} onChange={(e) => setPeople(num(e.target.value))} />
        </Field>
      </div>
      <Result
        big={["Per person", money(per)]}
        rows={[["Tip", money(tipAmt)], ["Total", money(total)]]}
      />
    </div>
  );
}

function BmiCalc() {
  const [h, setH] = useState(175);
  const [w, setW] = useState(70);
  const bmi = h > 0 ? w / (h / 100) ** 2 : 0;
  const cat =
    bmi < 18.5 ? "Underweight" : bmi < 25 ? "Normal" : bmi < 30 ? "Overweight" : "Obese";
  return (
    <div className="calc-body">
      <div className="fields">
        <Field label={`Height — ${h} cm`}>
          <input type="range" min={120} max={220} value={h} onChange={(e) => setH(num(e.target.value))} />
        </Field>
        <Field label={`Weight — ${w} kg`}>
          <input type="range" min={30} max={180} value={w} onChange={(e) => setW(num(e.target.value))} />
        </Field>
      </div>
      <Result big={["BMI", bmi.toFixed(1)]} rows={[["Category", cat]]} />
    </div>
  );
}

function LoanCalc() {
  const [amount, setAmount] = useState(20000);
  const [rate, setRate] = useState(8);
  const [years, setYears] = useState(5);
  const r = rate / 100 / 12;
  const n = years * 12;
  const emi = r === 0 ? amount / n : (amount * r * (1 + r) ** n) / ((1 + r) ** n - 1);
  const total = emi * n;
  const interest = total - amount;
  return (
    <div className="calc-body">
      <div className="fields">
        <Field label="Loan amount ($)">
          <input type="number" min={0} value={amount} onChange={(e) => setAmount(num(e.target.value))} />
        </Field>
        <Field label={`Interest — ${rate}% / year`}>
          <input type="range" min={0} max={30} step={0.5} value={rate} onChange={(e) => setRate(num(e.target.value))} />
        </Field>
        <Field label={`Term — ${years} year${years > 1 ? "s" : ""}`}>
          <input type="range" min={1} max={30} value={years} onChange={(e) => setYears(num(e.target.value))} />
        </Field>
      </div>
      <Result
        big={["Monthly", money(emi)]}
        rows={[["Total paid", money(total)], ["Total interest", money(interest)]]}
      />
    </div>
  );
}

const TABS: [Tab, string][] = [
  ["tip", "Tip Splitter"],
  ["bmi", "BMI"],
  ["loan", "Loan / EMI"],
];

export default function Calculators() {
  const [tab, setTab] = useState<Tab>("tip");
  return (
    <div className="glass calc">
      <div className="calc-tabs" role="tablist">
        {TABS.map(([key, label]) => (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={tab === key}
            className={`calc-tab ${tab === key ? "active" : ""}`}
            onClick={() => setTab(key)}
          >
            {label}
          </button>
        ))}
      </div>
      {tab === "tip" && <TipCalc />}
      {tab === "bmi" && <BmiCalc />}
      {tab === "loan" && <LoanCalc />}
    </div>
  );
}
