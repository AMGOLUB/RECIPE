import type { Recipe } from '../types/recipe';
import RecipeHeader from './RecipeHeader';
import IngredientList from './IngredientList';
import StepList from './StepList';
import '../styles/recipe-detail.css';

interface RecipeDetailProps {
  recipe: Recipe;
  onBack: () => void;
}

export default function RecipeDetail({ recipe, onBack }: RecipeDetailProps) {
  return (
    <div className="recipe-detail-page">
      <button className="back-link" onClick={onBack}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ marginRight: 6 }}>
          <path d="M8.5 2.5L4 7L8.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        All Recipes
      </button>

      <RecipeHeader recipe={recipe} />

      <article className="recipe-article">
        <div className="recipe-introduction">
          <p className="recipe-headnote">{recipe.headnote}</p>
        </div>

        <IngredientList ingredients={recipe.ingredients} />
        <StepList steps={recipe.steps} />
      </article>
    </div>
  );
}
