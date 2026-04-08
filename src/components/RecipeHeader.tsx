import type { Recipe } from '../types/recipe';
import { categoryColors } from '../data/recipes';

interface RecipeHeaderProps {
  recipe: Recipe;
}

export default function RecipeHeader({ recipe }: RecipeHeaderProps) {
  const dots = Array.from({ length: 5 }, (_, i) =>
    i < recipe.difficulty ? '●' : '○'
  ).join('');

  const colors = categoryColors[recipe.category];

  return (
    <>
      <div className="recipe-hero-photo">
        <img
          src={recipe.heroImage}
          alt={recipe.title}
          className="recipe-hero-img"
        />
        <div className="recipe-hero-overlay" />
        <div className="recipe-hero-content">
          <span className="recipe-hero-category" style={{ background: colors?.main }}>
            {recipe.category}
          </span>
          <h1 className="recipe-hero-title">{recipe.title}</h1>
          <p className="recipe-hero-subtitle">{recipe.subtitle}</p>
        </div>
      </div>

      <div className="recipe-header-body">
        <p className="recipe-origin">A recipe from the {recipe.origin} tradition</p>
        <div className="recipe-meta">
          <span>{recipe.prepTime} prep</span>
          <span className="meta-dot">·</span>
          <span>{recipe.cookTime} cook</span>
          <span className="meta-dot">·</span>
          <span>Serves {recipe.servings}</span>
          <span className="meta-dot">·</span>
          <span className="meta-difficulty" style={{ color: colors?.main }}>{dots}</span>
        </div>
      </div>
    </>
  );
}
