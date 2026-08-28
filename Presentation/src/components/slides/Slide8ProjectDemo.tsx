import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PlayCircle, Check, ArrowRight, ExternalLink } from 'lucide-react';
import { DEMO_SAMPLE_RECIPES } from '../../data/slidesData';

interface DemoProps {
  onOpenSandbox?: () => void;
}

export const Slide8ProjectDemo: React.FC<DemoProps> = ({ onOpenSandbox }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [selectedRecipeIndex, setSelectedRecipeIndex] = useState<number>(1); // Bengali Chicken Curry default

  const demoSteps = [
    {
      id: 0,
      title: 'Step 1: Ingredient Input & Tagging',
      summary: "User enters 'potato', 'tomato', 'onion' via text field. Interactive badge chips render with instant delete ('x') option.",
      tag: 'Input Phase'
    },
    {
      id: 1,
      title: 'Step 2: Triggering Search & Loading',
      summary: "User clicks '🔍 Find Recipes'. The button turns to 'Finding recipes...' while Promise.all executes parallel API queries.",
      tag: 'Search & Fetch'
    },
    {
      id: 2,
      title: 'Step 3: Ranked Recipe Discovery Grid',
      summary: 'Recipes are deduplicated, calculated for match %, and sorted descending. High matches (100%, 67%) display with missing items list.',
      tag: 'Results Grid'
    },
    {
      id: 3,
      title: 'Step 4: Recipe Details Inspection',
      summary: 'Clicking "View Recipe" navigates to /recipe/:id. TheMealDB details are parsed into clean ingredient/measurement lists and step-by-step instructions.',
      tag: 'Full Recipe View'
    }
  ];

  return (
    <div className="h-full w-full flex flex-col justify-between p-8 md:p-12 relative overflow-hidden bg-[#050505] text-[#e5e5e5] select-none">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#3b82f6] opacity-10 rounded-full blur-[100px] pointer-events-none" />

      {/* Slide Header */}
      <div className="flex items-start justify-between border-b border-[#222] pb-3">
        <div>
          <div className="flex items-center gap-2 text-[10px] font-mono uppercase text-[#3b82f6] font-bold tracking-[0.25em] mb-1">
            <span>Slide 08 / 10</span>
            <span className="text-[#444]">•</span>
            <span>Live Demonstration</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-light tracking-wide text-white font-display">
            Project Demo & <span className="font-serif italic text-[#ccc]">User Journey</span>
          </h2>
          <p className="text-xs md:text-sm text-[#888] mt-0.5 font-light">
            Step-by-step walkthrough of the actual user workflow captured in the demo video
          </p>
        </div>
        <div className="flex items-center gap-2">
          {onOpenSandbox && (
            <button
              onClick={onOpenSandbox}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#3b82f6]/10 text-[#60a5fa] border border-[#3b82f6]/30 text-xs font-mono font-bold hover:bg-[#3b82f6]/20 transition-all cursor-pointer uppercase tracking-wider text-[10px]"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Launch Live Sandbox</span>
            </button>
          )}
          <div className="hidden sm:flex p-2.5 rounded bg-[#3b82f6]/10 border border-[#3b82f6]/30 text-[#3b82f6]">
            <PlayCircle className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Main Demo Simulation Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 my-auto py-1 items-stretch">
        {/* Left Column: Interactive Step Controller (4 Cols) */}
        <div className="lg:col-span-4 flex flex-col justify-between gap-2">
          <div className="space-y-2">
            {demoSteps.map((step) => (
              <div
                key={step.id}
                onClick={() => setCurrentStep(step.id)}
                className={`p-3 rounded-lg border transition-all cursor-pointer ${
                  currentStep === step.id
                    ? 'bg-[#0d0d0d] border-[#3b82f6] shadow-md shadow-[#3b82f6]/10'
                    : 'bg-[#0d0d0d] border-[#1a1a1a] hover:border-[#333]'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[9px] font-mono text-[#3b82f6] font-bold uppercase tracking-wider">
                    {step.tag}
                  </span>
                  {currentStep === step.id && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] animate-pulse" />
                  )}
                </div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-white">{step.title}</h4>
                <p className="text-[11px] text-[#888] mt-1 line-clamp-2 font-light leading-relaxed">{step.summary}</p>
              </div>
            ))}
          </div>

          <div className="p-2.5 rounded bg-[#0d0d0d] border border-[#1a1a1a] text-[11px] text-[#888] font-mono">
            <span className="text-[#3b82f6] font-bold uppercase tracking-wider text-[10px]">Demo Parameters:</span>
            <div className="mt-0.5 text-[#aaa]">
              Input: <code className="text-[#e5e5e5]">potato, tomato, onion</code>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Frame Mockup of Current Step (8 Cols) */}
        <div className="lg:col-span-8 rounded-lg bg-[#0d0d0d] border border-[#1a1a1a] p-4 shadow-xl flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-[#1a1a1a] pb-2 mb-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#333]" />
              <span className="w-2 h-2 rounded-full bg-[#333]" />
              <span className="w-2 h-2 rounded-full bg-[#333]" />
              <span className="text-[11px] font-mono text-[#888] ml-2 font-medium">
                PantryPal Browser View — {demoSteps[currentStep].title}
              </span>
            </div>
            <span className="text-[10px] font-mono text-[#3b82f6] font-bold uppercase tracking-wider">
              Preview Frame
            </span>
          </div>

          {/* Dynamic Content based on currentStep */}
          <div className="min-h-[250px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {currentStep === 0 && (
                <motion.div
                  key="step0"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="space-y-3.5 text-center py-3"
                >
                  <h3 className="text-xl font-light text-white font-display flex items-center justify-center gap-2">
                    <span>🍳</span> Pantry<span className="font-serif italic text-[#ccc]">Pal</span>
                  </h3>
                  <p className="text-xs text-[#888] font-light">Tell us what you have. We&apos;ll tell you what to cook.</p>

                  <div className="max-w-md mx-auto flex items-center bg-[#050505] border border-[#222] rounded p-1.5 pl-3">
                    <span className="text-xs text-white font-mono flex-1 text-left">onion</span>
                    <span className="px-3 py-1 bg-[#3b82f6] text-white text-[11px] font-bold uppercase tracking-wider rounded">
                      + Add
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 justify-center pt-1">
                    <span className="px-2.5 py-1 rounded bg-[#050505] border border-[#222] text-[#e5e5e5] text-xs font-mono flex items-center gap-1.5">
                      <span>🍴</span> potato <span className="text-[#666] text-xs font-bold hover:text-white cursor-pointer">x</span>
                    </span>
                    <span className="px-2.5 py-1 rounded bg-[#050505] border border-[#222] text-[#e5e5e5] text-xs font-mono flex items-center gap-1.5">
                      <span>🍴</span> tomato <span className="text-[#666] text-xs font-bold hover:text-white cursor-pointer">x</span>
                    </span>
                    <span className="px-2.5 py-1 rounded bg-[#050505] border border-[#222] text-[#e5e5e5] text-xs font-mono flex items-center gap-1.5">
                      <span>🍴</span> onion <span className="text-[#666] text-xs font-bold hover:text-white cursor-pointer">x</span>
                    </span>
                  </div>
                </motion.div>
              )}

              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="space-y-4 text-center py-5"
                >
                  <div className="flex flex-wrap gap-2 justify-center font-mono">
                    <span className="px-2.5 py-1 rounded bg-[#050505] border border-[#222] text-[#e5e5e5] text-xs">
                      🍴 potato
                    </span>
                    <span className="px-2.5 py-1 rounded bg-[#050505] border border-[#222] text-[#e5e5e5] text-xs">
                      🍴 tomato
                    </span>
                    <span className="px-2.5 py-1 rounded bg-[#050505] border border-[#222] text-[#e5e5e5] text-xs">
                      🍴 onion
                    </span>
                  </div>

                  <div className="p-4 max-w-sm mx-auto rounded bg-[#050505] border border-[#3b82f6]/40 text-center space-y-2">
                    <div className="inline-flex items-center gap-2 text-[#60a5fa] font-mono text-xs font-bold uppercase tracking-wider">
                      <span className="w-2 h-2 rounded-full bg-[#3b82f6] animate-ping" />
                      <span>Finding recipes...</span>
                    </div>
                    <p className="text-[11px] text-[#888] font-light">
                      Querying TheMealDB endpoints concurrently via Promise.all()
                    </p>
                  </div>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 py-1"
                >
                  {DEMO_SAMPLE_RECIPES.slice(0, 3).map((r, i) => (
                    <div
                      key={r.idMeal}
                      onClick={() => {
                        setSelectedRecipeIndex(i);
                        setCurrentStep(3);
                      }}
                      className="p-2.5 rounded bg-[#050505] border border-[#222] text-[#e5e5e5] cursor-pointer hover:border-[#3b82f6] transition-all flex flex-col justify-between"
                    >
                      <div>
                        <img
                          src={r.strMealThumb}
                          alt={r.strMeal}
                          className="w-full h-20 object-cover rounded mb-2 border border-[#1a1a1a]"
                        />
                        <h5 className="text-xs font-semibold uppercase tracking-wider text-white truncate">{r.strMeal}</h5>
                        <span className="inline-block mt-1 text-[9px] bg-[#3b82f6]/20 text-[#60a5fa] border border-[#3b82f6]/40 font-mono font-bold px-1.5 py-0.5 rounded">
                          🎯 {r.matchPercentage}% Match
                        </span>
                        <div className="mt-2 p-1.5 bg-[#0d0d0d] border border-[#222] rounded text-[10px] text-[#888]">
                          <span className="font-bold text-[#aaa]">Missing:</span>
                          <p className="truncate text-[#aaa]">
                            {r.missingIngredients.slice(0, 2).join(', ')}
                          </p>
                        </div>
                      </div>
                      <button className="mt-2 w-full py-1 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-mono font-bold uppercase tracking-wider text-[10px] rounded transition-colors">
                        View Recipe
                      </button>
                    </div>
                  ))}
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="rounded bg-[#050505] border border-[#222] p-3.5 space-y-3"
                >
                  <div className="flex items-start gap-4">
                    <img
                      src={DEMO_SAMPLE_RECIPES[selectedRecipeIndex].strMealThumb}
                      alt="Recipe"
                      className="w-18 h-18 rounded object-cover border border-[#222]"
                    />
                    <div>
                      <span className="text-[9px] font-mono uppercase tracking-wider text-[#3b82f6] font-bold">
                        Route: /recipe/{DEMO_SAMPLE_RECIPES[selectedRecipeIndex].idMeal}
                      </span>
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                        {DEMO_SAMPLE_RECIPES[selectedRecipeIndex].strMeal}
                      </h4>
                      <p className="text-xs text-[#888] mt-0.5 font-light">
                        Category: {DEMO_SAMPLE_RECIPES[selectedRecipeIndex].strCategory} • Area: {DEMO_SAMPLE_RECIPES[selectedRecipeIndex].strArea}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                    <div className="p-2.5 rounded bg-[#0d0d0d] border border-[#1a1a1a]">
                      <h5 className="font-semibold uppercase tracking-wider text-[10px] text-[#3b82f6] mb-1 flex items-center gap-1 font-mono">
                        <span>🥕</span> Ingredients (Parsed 1..20):
                      </h5>
                      <ul className="space-y-0.5 text-[10px] font-mono text-[#aaa] max-h-20 overflow-y-auto">
                        {DEMO_SAMPLE_RECIPES[selectedRecipeIndex].ingredientsList?.map((ing, k) => (
                          <li key={k} className="flex justify-between">
                            <span>{ing.ingredient}</span>
                            <span className="text-[#666]">{ing.measure}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-2.5 rounded bg-[#0d0d0d] border border-[#1a1a1a]">
                      <h5 className="font-semibold uppercase tracking-wider text-[10px] text-[#3b82f6] mb-1 flex items-center gap-1 font-mono">
                        <span>📖</span> Instructions:
                      </h5>
                      <p className="text-[11px] text-[#aaa] line-clamp-3 leading-relaxed font-light">
                        {DEMO_SAMPLE_RECIPES[selectedRecipeIndex].strInstructions}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Stepper scrubber bar */}
          <div className="flex items-center justify-between pt-2 border-t border-[#1a1a1a] text-xs font-mono text-[#666]">
            <span>Progression: Step {currentStep + 1} of 4</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
                disabled={currentStep === 0}
                className="px-2.5 py-1 rounded bg-[#050505] border border-[#222] disabled:opacity-30 hover:text-white cursor-pointer text-[10px] uppercase font-mono"
              >
                Back
              </button>
              <button
                onClick={() => setCurrentStep((prev) => Math.min(3, prev + 1))}
                disabled={currentStep === 3}
                className="px-2.5 py-1 rounded bg-[#3b82f6] text-white font-bold disabled:opacity-30 hover:bg-[#2563eb] cursor-pointer text-[10px] uppercase font-mono tracking-wider"
              >
                Next Step
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-2 border-t border-[#1a1a1a] text-xs text-[#666] flex items-center justify-between font-mono text-[11px]">
        <span>Demo Flow: Ingredient Tagging → Async Query → Compatibility Ranking → Recipe Breakdown</span>
        <span className="text-[#3b82f6] font-bold uppercase tracking-wider text-[10px]">Verified Workflow</span>
      </div>
    </div>
  );
};
