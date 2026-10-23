import { useState } from 'react';
import { SimulationDemo } from './SimulationDemo';
import './container-simulator.css';

type Choice = { label: string; impact: number; cost: number; delay: number; explanation: string };
type Stage = { title: string; situation: string; choices: [Choice, Choice, Choice] };
const stages: Stage[] = [
  { title: 'Shipment planning', situation: 'A Baltimore distributor requests a mixed container of shelf-stable Cameroonian foods. The purchase order is incomplete and the supplier quotes have different lead times.', choices: [
    { label: 'Confirm product specifications, buyer demand, lead times and landed-cost assumptions before committing.', impact: 20, cost: 0, delay: 0, explanation: 'A documented commercial plan reduces avoidable surprises.' },
    { label: 'Book a container based on supplier quotes alone.', impact: -10, cost: 1600, delay: 4, explanation: 'Unverified demand and costs create a margin and scheduling risk.' },
    { label: 'Promise delivery before checking product availability.', impact: -15, cost: 2400, delay: 7, explanation: 'An unsupported delivery promise can create expensive changes.' }
  ]},
  { title: 'Compliance review', situation: 'One packaged product has incomplete ingredient and allergen labeling documentation for U.S. retail sale.', choices: [
    { label: 'Hold the affected item and verify labeling and applicable FDA/import obligations.', impact: 20, cost: 250, delay: 2, explanation: 'A controlled correction before loading is preferable to a preventable import problem.' },
    { label: 'Ship it and ask the importer to relabel after arrival.', impact: -20, cost: 4200, delay: 12, explanation: 'Shipping with an unresolved label issue can lead to holds, rework and losses.' },
    { label: 'Remove the allergen reference from the commercial paperwork.', impact: -25, cost: 6500, delay: 18, explanation: 'Inaccurate records compound the safety and regulatory risk.' }
  ]},
  { title: 'Export documentation', situation: 'The packing list and commercial invoice use different carton quantities for two products.', choices: [
    { label: 'Reconcile quantities against the final purchase order and physical count before release.', impact: 15, cost: 100, delay: 1, explanation: 'Consistent documents support smoother handoffs and customs review.' },
    { label: 'Use the invoice figures without checking the cargo.', impact: -10, cost: 1200, delay: 4, explanation: 'A mismatch can trigger corrections and inspection.' },
    { label: 'Let the freight forwarder guess the correct quantities.', impact: -15, cost: 2000, delay: 6, explanation: 'Delegation does not replace accurate shipper records.' }
  ]},
  { title: 'Container preparation', situation: 'The loading team reports damaged outer cartons and no agreed pallet or weight-distribution plan.', choices: [
    { label: 'Replace damaged cartons, confirm packing integrity and approve a safe loading plan.', impact: 15, cost: 450, delay: 1, explanation: 'Packaging and load control reduce transit damage and disputes.' },
    { label: 'Load everything to avoid missing the vessel cutoff.', impact: -15, cost: 2800, delay: 3, explanation: 'A rushed load increases damage and handling risk.' },
    { label: 'Move damaged cartons to the back without recording them.', impact: -20, cost: 3600, delay: 5, explanation: 'Concealing condition issues makes claims and traceability harder.' }
  ]},
  { title: 'Ocean transit', situation: 'The vessel schedule slips and the buyer asks whether its retail promotion can still proceed.', choices: [
    { label: 'Update the milestone plan, alert the buyer and agree a revised receiving window.', impact: 15, cost: 300, delay: 3, explanation: 'Early, documented communication protects the commercial relationship.' },
    { label: 'Wait for the ship to arrive before saying anything.', impact: -10, cost: 1100, delay: 6, explanation: 'Late notification reduces the buyer’s ability to adapt.' },
    { label: 'Guarantee the original delivery date despite the delay.', impact: -15, cost: 1800, delay: 7, explanation: 'Unreliable commitments damage trust and may create penalties.' }
  ]},
  { title: 'U.S. arrival', situation: 'The broker requests a final review of entry data, FDA-related information and importer responsibilities.', choices: [
    { label: 'Coordinate with the importer and licensed broker to verify applicable entry and food requirements.', impact: 20, cost: 200, delay: 1, explanation: 'Clear ownership and verified information reduce avoidable entry problems.' },
    { label: 'Submit incomplete information to save time.', impact: -20, cost: 5000, delay: 14, explanation: 'Incomplete filings may create delays, holds or additional expense.' },
    { label: 'Assume the ocean carrier handles all food import requirements.', impact: -15, cost: 3200, delay: 9, explanation: 'Carrier transport does not replace importer and regulatory responsibilities.' }
  ]},
  { title: 'Delivery and reorder', situation: 'The shipment reaches the distributor. Some SKUs sell faster than expected, while others remain in the warehouse.', choices: [
    { label: 'Review actual sell-through, landed cost and buyer feedback before planning the next mix.', impact: 20, cost: 0, delay: 0, explanation: 'Reorder planning should follow real demand and verified economics.' },
    { label: 'Repeat the exact container mix without checking sales.', impact: -10, cost: 1900, delay: 0, explanation: 'Reordering slow movers ties up working capital.' },
    { label: 'Increase every SKU quantity by the same percentage.', impact: -15, cost: 2700, delay: 0, explanation: 'Uniform growth ignores product-level demand differences.' }
  ]}
];
type Decision = { stage: number; choice: number };
export function ContainerExportSimulator() {
  const [started, setStarted] = useState(false);
  const [decisions, setDecisions] = useState<Decision[]>([]);
  const [selection, setSelection] = useState<number | null>(null);
  const [showSample, setShowSample] = useState(false);
  const current = decisions.length;
  const complete = current === stages.length;
  const score = Math.max(0, Math.min(100, 30 + decisions.reduce((sum, d) => sum + stages[d.stage].choices[d.choice].impact, 0)));
  const extraCost = decisions.reduce((sum, d) => sum + stages[d.stage].choices[d.choice].cost, 0);
  const delay = decisions.reduce((sum, d) => sum + stages[d.stage].choices[d.choice].delay, 0);
  const last = decisions.length ? stages[current - 1].choices[decisions[current - 1].choice] : null;
  function reset() { setStarted(false); setDecisions([]); setSelection(null); setShowSample(false); }
  function submit() { if (selection === null || complete) return; setDecisions(old => [...old, { stage: current, choice: selection }]); setSelection(null); }
  return <div className="page active" id="lab">
    <section className="kicker"><div className="container"><div className="eyebrow">Gloway Academy · Interactive training prototype</div><h1>Container Export Simulator™</h1><p>Manage a fictional mixed-food container from Douala to Baltimore. Make seven trade decisions and see how risk, avoidable costs and delays accumulate.</p><span className="pill">Scenario CMR-USA-001 · Educational demonstration</span></div></section>
    <section className="container ces-shell">
      {!started ? <div className="ces-intro"><div><div className="eyebrow">Your assignment</div><h2>One container. Seven decisions.</h2><p>You are the export operations lead coordinating a Cameroonian food manufacturer, freight partners and a U.S. distributor. Each decision changes the simulated outcome.</p><p className="ces-disclaimer">All costs, delays and scores are illustrative scenario assumptions—not freight quotations, predictions, legal advice or regulatory clearance.</p><button className="btn green" onClick={() => setStarted(true)}>Start shipment simulation →</button></div><aside className="ces-route"><span>ORIGIN</span><strong>Douala, Cameroon</strong><span>DESTINATION</span><strong>Baltimore, United States</strong><span>CARGO</span><strong>Mixed packaged food products</strong><span>MISSION</span><strong>Deliver reliably. Protect the reorder.</strong></aside></div> :
      <div className="ces-layout"><div className="ces-main">
        <div className="ces-progress"><span>{complete ? 'Simulation complete' : `Stage ${current + 1} of ${stages.length}`}</span><span>{Math.round(current / stages.length * 100)}%</span></div>
        <div className="ces-progressbar" role="progressbar" aria-label="Shipment simulation progress" aria-valuenow={current} aria-valuemin={0} aria-valuemax={stages.length}><span style={{ width: `${current / stages.length * 100}%` }} /></div>
        {complete ? <><div className="eyebrow">Shipment outcome</div><h2>{score >= 75 ? 'Well-managed shipment.' : score >= 45 ? 'Shipment needs improvement.' : 'High-risk shipment.'}</h2><p>Your choices generated a simulated decision score of <b>{score}/100</b>, additional costs of <b>${extraCost.toLocaleString()}</b> and <b>{delay} days</b> of accumulated delay.</p><h3>Decision review</h3><ol className="ces-review">{decisions.map(d => <li key={d.stage}><b>{stages[d.stage].title}:</b> {stages[d.stage].choices[d.choice].explanation}</li>)}</ol><button className="btn green" onClick={reset}>Restart simulation ↻</button></> :
        <><div className="eyebrow">Decision {current + 1} / {stages.length}</div><h2>{stages[current].title}</h2><p>{stages[current].situation}</p><h3>What will you do?</h3><div className="ces-choices">{stages[current].choices.map((choice, i) => <button key={i} type="button" aria-pressed={selection === i} className={selection === i ? 'ces-choice selected' : 'ces-choice'} onClick={() => setSelection(i)}><span className="ces-letter">{String.fromCharCode(65 + i)}</span>{choice.label}</button>)}</div><button className="btn green" disabled={selection === null} onClick={submit}>Confirm decision →</button>{last && <div className="ces-feedback" aria-live="polite"><b>Previous stage:</b> {last.explanation}</div>}</>}
      </div><aside className="ces-sidebar"><div className="eyebrow">Shipment control tower</div><h3>Douala → Baltimore</h3><div className="ces-metric"><span>Decision score</span><strong>{score}/100</strong></div><div className="ces-metric"><span>Simulated extra costs</span><strong>${extraCost.toLocaleString()}</strong></div><div className="ces-metric"><span>Accumulated delay</span><strong>{delay} days</strong></div><div className="ces-stages">{stages.map((s,i)=><div key={s.title} className={i===current?'current':i<current?'done':''}><span>{i<current?'✓':String(i+1).padStart(2,'0')}</span>{s.title}</div>)}</div><p className="ces-disclaimer">Illustrative scoring only. A high score does not establish shipment or regulatory readiness.</p></aside></div>}
      <div className="ces-sample"><button type="button" onClick={() => setShowSample(x => !x)} aria-expanded={showSample}>{showSample ? 'Hide' : 'Explore'} the original allergen-label decision exercise {showSample ? '↑' : '↓'}</button>{showSample && <SimulationDemo />}</div>
    </section>
  </div>;
}
