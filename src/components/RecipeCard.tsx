import type { Recipe } from '../types/recipe';
import { categoryColors } from '../data/recipes';

interface RecipeCardProps {
  recipe: Recipe;
  variant?: 'hero' | 'standard';
  onClick: () => void;
}

export default function RecipeCard({ recipe, variant = 'standard', onClick }: RecipeCardProps) {
  const dots = Array.from({ length: 5 }, (_, i) =>
    i < recipe.difficulty ? '●' : '○'
  ).join('');

  const colors = categoryColors[recipe.category];

  if (variant === 'hero') {
    return (
      <button className="card-hero" onClick={onClick}>
        <div className="card-hero-image-wrap">
          <img
            src={recipe.heroImage}
            alt={recipe.title}
            className="card-hero-image"
            loading="eager"
          />
          <div className="card-hero-image-overlay" />
        </div>
        <div className="card-hero-text">
          <span className="card-hero-origin" style={{ color: colors?.main }}>
            {recipe.origin}
          </span>
          <h2 className="card-hero-title">{recipe.title}</h2>
          <p className="card-hero-subtitle">{recipe.subtitle}</p>
          <p className="card-hero-excerpt">
            {recipe.headnote.length > 160
              ? recipe.headnote.slice(0, 160).replace(/\s\S*$/, '') + '...'
              : recipe.headnote}
          </p>
          <span className="card-hero-cta" style={{ color: colors?.main, borderColor: colors?.main }}>
            Read the recipe
          </span>
        </div>
      </button>
    );
  }

  return (
    <button className="card-standard" onClick={onClick}>
      <div className="card-standard-thumb-wrap">
        <img
          src={recipe.heroImage}
          alt={recipe.title}
          className="card-standard-thumb"
          loading="lazy"
        />
      </div>
      <div className="card-standard-text">
        <h3 className="card-standard-title">{recipe.title}</h3>
        <p className="card-standard-subtitle">{recipe.subtitle}</p>
        <div className="card-standard-meta">
          <span>{recipe.totalTime}</span>
          <span className="card-meta-dot">·</span>
          <span className="card-meta-difficulty" style={{ color: colors?.main }}>{dots}</span>
        </div>
      </div>
    </button>
  );
}
