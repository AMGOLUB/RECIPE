import { useState } from 'react';
import type { Ingredient } from '../types/recipe';

interface IngredientListProps {
  ingredients: Ingredient[];
}

export default function IngredientList({ ingredients }: IngredientListProps) {
  const [checked, setChecked] = useState<Set<number>>(new Set());

  const toggle = (idx: number) => {
    setChecked(prev => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  return (
    <section className="ingredients-section">
      <h2 className="section-heading">Ingredients</h2>
      <ul className="ingredients-list">
        {ingredients.map((ing, idx) => (
          <li key={idx}>
            <button
              className={`ingredient-row ${checked.has(idx) ? 'checked' : ''}`}
              onClick={() => toggle(idx)}
            >
              <span className="ingredient-check">
                {checked.has(idx) ? (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="0.5" y="0.5" width="15" height="15" rx="2" stroke="currentColor" fill="var(--accent-soft)"/>
                    <path d="M4.5 8L7 10.5L11.5 5.5" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="0.5" y="0.5" width="15" height="15" rx="2" stroke="currentColor"/>
                  </svg>
                )}
              </span>
              <span className="ingredient-text">
                {ing.amount && (
                  <strong className="ingredient-amount">
                    {ing.amount}{ing.unit ? ` ${ing.unit}` : ''}
                  </strong>
                )}{' '}
                {ing.item}
                {ing.note && <span className="ingredient-note">, {ing.note}</span>}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
