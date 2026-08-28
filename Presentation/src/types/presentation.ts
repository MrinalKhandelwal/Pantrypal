export interface PresenterInfo {
  presenter: string;
  trainer: string;
  project: string;
  tagline: string;
}

export interface SlideData {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  category: 'Overview' | 'Problem & Goals' | 'Technical' | 'Features & Demo' | 'Wrap-up';
  speakerNotes: string[];
  keyPoints: string[];
}

export interface RecipeMock {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  matchPercentage: number;
  matchedIngredients: string[];
  missingIngredients: string[];
  strInstructions?: string;
  strCategory?: string;
  strArea?: string;
  ingredientsList?: { ingredient: string; measure: string }[];
}
