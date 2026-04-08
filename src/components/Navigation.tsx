import { useState } from 'react';
import { categories } from '../data/recipes';
import '../styles/navigation.css';

interface NavigationProps {
  selectedId: string | null;
  onSelect: (id: string | null) => void;
  onCategoryClick?: (category: string) => void;
}

export default function Navigation({ onSelect, onCategoryClick }: NavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleHome = () => {
    onSelect(null);
    setMenuOpen(false);
  };

  const handleCategory = (cat: string) => {
    onSelect(null);
    setMenuOpen(false);
    if (onCategoryClick) {
      setTimeout(() => onCategoryClick(cat), 50);
    }
  };

  return (
    <nav className="nav">
      <div className="nav-inner">
        <button className="nav-brand" onClick={handleHome}>
          21 Recipes
        </button>

        <div className="nav-links">
          {categories.map(cat => (
            <button
              key={cat}
              className="nav-link"
              onClick={() => handleCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          <span className={`nav-hamburger-line ${menuOpen ? 'open' : ''}`} />
          <span className={`nav-hamburger-line ${menuOpen ? 'open' : ''}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="nav-overlay" onClick={() => setMenuOpen(false)}>
          <div className="nav-overlay-content" onClick={e => e.stopPropagation()}>
            <button className="nav-overlay-brand" onClick={handleHome}>
              21 Recipes
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                className="nav-overlay-link"
                onClick={() => handleCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
