import { useState, useEffect, useCallback } from 'react';
import Navigation from './components/Navigation';
import RecipeDetail from './components/RecipeDetail';
import RecipeCard from './components/RecipeCard';
import { recipes, getRecipesByCategory, categoryColors } from './data/recipes';
import './App.css';
import './styles/recipe-card.css';

function App() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedRecipe = selectedId
    ? recipes.find(r => r.id === selectedId) ?? null
    : null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedId]);

  const scrollToCategory = useCallback((category: string) => {
    setTimeout(() => {
      const el = document.getElementById(`category-${category.toLowerCase()}`);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }, []);

  const grouped = getRecipesByCategory();
  const featuredRecipe = recipes[0];

  return (
    <div className="app">
      <Navigation
        selectedId={selectedId}
        onSelect={setSelectedId}
        onCategoryClick={scrollToCategory}
      />

      <main className="main-content">
        {selectedRecipe ? (
          <RecipeDetail
            key={selectedRecipe.id}
            recipe={selectedRecipe}
            onBack={() => setSelectedId(null)}
          />
        ) : (
          <div className="home-page">
            <header className="masthead">
              <p className="masthead-eyebrow">A cookbook for Shona</p>
              <h1 className="masthead-title">21 Amazing Recipes</h1>
              <p className="masthead-tagline">
                By Assistant Chef Asparagus
              </p>
            </header>

            <section className="dedication">
              <div className="dedication-inner">
                <p className="dedication-salutation">Dear Shona,</p>
                <p>Happy 21st Birthday! For your gift this year, I decided to make a cookbook of my 21 favorite things that you have made for me.</p>
                <p>I want to make sure you never forget how much I appreciate everything you do for me. You build the best version of every food I&apos;ve ever had from scratch. You are not only incredibly intelligent and generous and thoughtful and handsome, but also the most creative person I&apos;ve ever met, and I can&apos;t believe I get to call you mine.</p>
                <p className="dedication-sign-off">With lots and lots of love,<br/>Pranjal (Cutie)</p>
              </div>
            </section>

            <RecipeCard
              recipe={featuredRecipe}
              variant="hero"
              onClick={() => setSelectedId(featuredRecipe.id)}
            />

            {Object.entries(grouped).map(([category, categoryRecipes], idx) => {
              const colors = categoryColors[category];
              const isColored = idx % 2 === 1;
              return (
                <section
                  key={category}
                  className={`category-section ${isColored ? 'category-section--tinted' : ''}`}
                  id={`category-${category.toLowerCase()}`}
                  style={isColored ? { backgroundColor: colors?.bg } as React.CSSProperties : undefined}
                >
                  <div className="category-section-inner">
                    <div className="category-heading-wrap">
                      <span
                        className="category-accent-bar"
                        style={{ backgroundColor: colors?.main }}
                      />
                      <h2 className="category-heading">{category}</h2>
                    </div>
                    <div className="category-grid">
                      {categoryRecipes.map(recipe => (
                        <RecipeCard
                          key={recipe.id}
                          recipe={recipe}
                          variant="standard"
                          onClick={() => setSelectedId(recipe.id)}
                        />
                      ))}
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        )}
      </main>

      <footer className="site-footer">
        <p className="site-footer-name">21 Recipes</p>
        <p>Made with love for Shona&apos;s 21st birthday</p>
      </footer>
    </div>
  );
}

export default App;
