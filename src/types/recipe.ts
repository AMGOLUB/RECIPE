export interface Ingredient {
  amount: string;
  unit: string;
  item: string;
  note?: string;
}

export interface Step {
  instruction: string;
  tip?: string;
}

export interface Recipe {
  id: string;
  title: string;
  subtitle: string;
  origin: string;
  category: string;
  prepTime: string;
  cookTime: string;
  totalTime: string;
  servings: string;
  difficulty: number; // 1-5
  tags: string[];
  headnote: string;
  heroImage: string;
  ingredients: Ingredient[];
  steps: Step[];
}
