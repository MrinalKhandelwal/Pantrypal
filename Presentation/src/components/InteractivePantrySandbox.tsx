import React, { useState } from 'react';
import { X, Search, Sparkles, ChefHat, AlertCircle, ArrowLeft } from 'lucide-react';
import { DEMO_SAMPLE_RECIPES } from '../data/slidesData';

interface RecipeItem {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  matchPercentage: number;
  matchedIngredients: string[];
  missingIngredients: string[];
  strInstructions?: string;
  strCategory?: string;
  strArea?: string;
  rawMeal?: any;
}

interface SandboxProps {
  onClose: () => void;
}

export const InteractivePantrySandbox: React.FC<SandboxProps> = ({ onClose }) => {
  const [ingredient, setIngredient] = useState<string>('');
  const [ingredients, setIngredients] = useState<string[]>(['potato', 'tomato', 'onion']);
  const [recipes, setRecipes] = useState<RecipeItem[]>(DEMO_SAMPLE_RECIPES as RecipeItem[]);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedRecipe, setSelectedRecipe] = useState<RecipeItem | null>(null);

  const addIngredient = () => {
    if (ingredient.trim() === '') return;
    setIngredients((prev) => [...prev, ingredient.trim()]);
    setIngredient('');
  };

  const removeIngredient = (index: number) => {
    setIngredients((prev) => prev.filter((_, i) => i !== index));
  };

  const calculateMatch = (recipe: any) => {
    const userIngredients = ingredients.map((item) => item.toLowerCase().trim());
    const recipeIngredients: string[] = [];

    for (let i = 1; i <= 20; i++) {
      const ing = recipe[`strIngredient${i}`];
      if (ing && ing.trim() !== '') {
        recipeIngredients.push(ing.toLowerCase().trim());
      }
    }

    const matchedIngredients = userIngredients.filter((userIngredient) =>
      recipeIngredients.some(
        (recipeIngredient) =>
          recipeIngredient.includes(userIngredient) ||
          userIngredient.includes(recipeIngredient)
      )
    );

    const missingIngredients = recipeIngredients.filter(
      (recipeIngredient) =>
        !userIngredients.some(
          (userIngredient) =>
            recipeIngredient.includes(userIngredient) ||
            userIngredient.includes(recipeIngredient)
        )
    );

    const matchPercentage =
      userIngredients.length > 0
        ? Math.round((matchedIngredients.length / userIngredients.length) * 100)
        : 0;

    return {
      ...recipe,
      matchPercentage,
      matchedIngredients,
      missingIngredients,
    };
  };

  const findRecipes = async () => {
    if (ingredients.length === 0) return;
    setLoading(true);

    try {
      const requests = ingredients.map((item) => {
        const cleanIngredient = item.trim().toLowerCase();
        return fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(cleanIngredient)}`
        );
      });

      const responses = await Promise.all(requests);
      const data = await Promise.all(responses.map((res) => res.json()));

      const allRecipes: any[] = data.flatMap((item: any) => item.meals || []);

      const uniqueRecipes: any[] = Array.from(
        new Map(allRecipes.map((r: any) => [r.idMeal, r])).values()
      );

      const recipesToFetch: any[] = uniqueRecipes.slice(0, 10);
      const fullRecipes: any[] = [];

      for (const r of recipesToFetch) {
        try {
          const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${r.idMeal}`
          );
          const lookupData = await response.json();
          if (lookupData.meals && lookupData.meals.length > 0) {
            fullRecipes.push(lookupData.meals[0]);
          }
        } catch (err) {
          console.error('Error fetching recipe:', (r as any).idMeal, err);
        }
      }

      const recipesWithMatch = fullRecipes.map((r) => calculateMatch(r));
      recipesWithMatch.sort((a, b) => b.matchPercentage - a.matchPercentage);

      setRecipes(recipesWithMatch);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    } finally {
      setLoading(false);
    }
  };

  // Helper to extract ingredients list for modal
  const getRecipeIngredientsList = (recipe: any) => {
    const list: { ingredient: string; measure: string }[] = [];
    for (let i = 1; i <= 20; i++) {
      const ing = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];
      if (ing && ing.trim() !== '') {
        list.push({
          ingredient: ing.trim(),
          measure: measure ? measure.trim() : '',
        });
      }
    }
    return list;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-5xl rounded-xl bg-[#0d0d0d] border border-[#222] shadow-2xl overflow-hidden my-auto text-[#e5e5e5] flex flex-col max-h-[90vh]">
        {/* Sandbox Top Bar */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-[#1a1a1a] bg-[#050505]">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#333]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#333]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#333]" />
            </div>
            <div className="h-3 w-px bg-[#222]" />
            <span className="text-xs font-mono text-[#888] font-medium flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#3b82f6]" />
              Live PantryPal Sandbox Simulation (Direct TheMealDB API Integration)
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded bg-[#111] hover:bg-[#222] text-[#888] hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Sandbox Content Body */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6 bg-[#050505]">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-light text-white font-display flex items-center justify-center gap-2">
              <span>🍳</span> Pantry<span className="font-serif italic text-[#ccc]">Pal</span>
            </h1>
            <p className="text-xs md:text-sm text-[#888] mt-1 font-light">
              Tell us what you have. We&apos;ll tell you what to cook.
            </p>
          </div>

          {/* Input Group */}
          <div className="max-w-xl mx-auto flex items-center gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                className="w-full px-4 py-2 rounded bg-[#0d0d0d] border border-[#222] text-white placeholder-[#555] text-xs font-mono focus:outline-none focus:border-[#3b82f6]"
                placeholder="Enter an ingredient (e.g. potato, tomato, onion)..."
                value={ingredient}
                onChange={(e) => setIngredient(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') addIngredient();
                }}
              />
            </div>
            <button
              onClick={addIngredient}
              className="px-4 py-2 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-mono font-bold text-xs uppercase tracking-wider rounded transition-all shadow-sm cursor-pointer shrink-0"
            >
              + Add
            </button>
          </div>

          {/* Tag Badges List */}
          <div className="flex flex-wrap justify-center gap-2">
            {ingredients.map((item, index) => (
              <div
                key={index}
                className="px-2.5 py-1 rounded bg-[#0d0d0d] border border-[#222] text-[#e5e5e5] text-xs font-mono flex items-center gap-1.5"
              >
                <span>🍴 {item}</span>
                <button
                  onClick={() => removeIngredient(index)}
                  className="text-[#666] hover:text-white font-bold text-xs cursor-pointer ml-1"
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          {/* Find Recipes Button */}
          {ingredients.length > 0 && (
            <div className="text-center">
              <button
                onClick={findRecipes}
                disabled={loading}
                className="px-5 py-2 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-mono font-bold text-xs uppercase tracking-wider rounded transition-all cursor-pointer disabled:opacity-50 inline-flex items-center gap-2 shadow-sm"
              >
                <Search className="w-3.5 h-3.5" />
                <span>{loading ? 'Finding recipes...' : 'Find Recipes'}</span>
              </button>
            </div>
          )}

          {/* Loading state */}
          {loading && (
            <p className="text-center text-xs text-[#888] font-mono">
              Querying TheMealDB endpoints concurrently...
            </p>
          )}

          {/* Recipes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {recipes.map((r) => (
              <div
                key={r.idMeal}
                className="rounded-lg bg-[#0d0d0d] border border-[#1a1a1a] p-3.5 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  <img
                    src={r.strMealThumb}
                    alt={r.strMeal}
                    className="w-full h-36 object-cover rounded mb-2.5 border border-[#1a1a1a]"
                  />
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-white leading-snug line-clamp-1">
                    {r.strMeal}
                  </h3>

                  <div className="mt-1.5">
                    <span className="inline-block px-2 py-0.5 rounded bg-[#3b82f6]/20 text-[#60a5fa] border border-[#3b82f6]/40 font-mono text-[10px] font-bold">
                      🎯 {r.matchPercentage}% Match
                    </span>
                  </div>

                  {r.missingIngredients && r.missingIngredients.length > 0 && (
                    <div className="mt-2.5 p-2 bg-[#050505] border border-[#222] rounded text-[11px]">
                      <span className="font-semibold text-[#888] flex items-center gap-1 font-mono text-[10px] uppercase">
                        <AlertCircle className="w-3 h-3 text-[#3b82f6]" /> Missing:
                      </span>
                      <ul className="mt-0.5 space-y-0.5 text-[#aaa] list-disc list-inside font-light">
                        {r.missingIngredients.slice(0, 3).map((ing, i) => (
                          <li key={i} className="truncate">{ing}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => setSelectedRecipe(r)}
                  className="mt-3 w-full py-1.5 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-mono font-bold uppercase tracking-wider text-[10px] rounded transition-colors cursor-pointer"
                >
                  View Recipe
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Recipe Details Sub-Modal */}
        {selectedRecipe && (
          <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <div className="w-full max-w-2xl bg-[#0d0d0d] border border-[#222] rounded-xl p-5 text-white max-h-[85vh] overflow-y-auto space-y-3.5">
              <div className="flex items-center justify-between border-b border-[#1a1a1a] pb-2.5">
                <button
                  onClick={() => setSelectedRecipe(null)}
                  className="flex items-center gap-1.5 text-xs text-[#3b82f6] hover:text-[#60a5fa] font-bold cursor-pointer font-mono uppercase tracking-wider text-[10px]"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Grid</span>
                </button>
                <span className="text-[10px] font-mono text-[#666]">ID: {selectedRecipe.idMeal}</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3.5 items-start">
                <img
                  src={selectedRecipe.strMealThumb}
                  alt={selectedRecipe.strMeal}
                  className="w-full sm:w-40 h-32 object-cover rounded border border-[#222]"
                />
                <div>
                  <h2 className="text-lg font-light text-white font-display">
                    {selectedRecipe.strMeal}
                  </h2>
                  <span className="inline-block mt-1.5 px-2 py-0.5 rounded bg-[#3b82f6]/20 text-[#60a5fa] border border-[#3b82f6]/40 font-mono text-[10px] font-bold">
                    🎯 {selectedRecipe.matchPercentage}% Match
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#3b82f6] mb-1.5 flex items-center gap-1.5 font-mono">
                  <span>🥕</span> Ingredients (Dynamic 1..20 Parse):
                </h3>
                <div className="grid grid-cols-2 gap-2 text-xs bg-[#050505] p-2.5 rounded border border-[#222]">
                  {getRecipeIngredientsList(selectedRecipe).map((ing, k) => (
                    <div key={k} className="flex justify-between border-b border-[#111] pb-1 text-[11px]">
                      <span className="text-[#ccc]">{ing.ingredient}</span>
                      <span className="text-[#666] font-mono text-[10px]">{ing.measure}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#3b82f6] mb-1 flex items-center gap-1.5 font-mono">
                  <span>📖</span> Cooking Instructions:
                </h3>
                <p className="text-xs text-[#aaa] leading-relaxed bg-[#050505] p-2.5 rounded border border-[#222] font-light">
                  {selectedRecipe.strInstructions || 'Preparation instructions loaded from TheMealDB.'}
                </p>
              </div>

              <div className="pt-1 text-right">
                <button
                  onClick={() => setSelectedRecipe(null)}
                  className="px-3 py-1.5 bg-[#050505] hover:bg-[#151515] border border-[#222] text-[#ccc] text-xs font-mono uppercase tracking-wider rounded transition-colors cursor-pointer"
                >
                  Close Details
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
