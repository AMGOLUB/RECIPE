import type { Step } from '../types/recipe';

interface StepListProps {
  steps: Step[];
}

export default function StepList({ steps }: StepListProps) {
  return (
    <section className="steps-section">
      <h2 className="section-heading">Preparation</h2>
      <ol className="steps-list">
        {steps.map((step, idx) => (
          <li key={idx} className="step-item">
            <span className="step-number">{idx + 1}</span>
            <div className="step-content">
              <p className="step-instruction">{step.instruction}</p>
              {step.tip && (
                <div className="step-tip">
                  <span className="step-tip-label">Tip</span>
                  <p className="step-tip-text">{step.tip}</p>
                </div>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
