import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, CheckCircle, Rocket, ArrowRight, Lightbulb } from 'lucide-react';

export const Slide9ChallengesSolutions: React.FC = () => {
  const challenges = [
    {
      issue: 'Single-Ingredient API Limitation',
      desc: 'TheMealDB filter endpoint only accepts one ingredient per HTTP query (filter.php?i=), restricting direct multi-ingredient searches.',
      solution: 'Dispatched concurrent API calls using Promise.all() across all user pantry items and combined the returned meal lists with flatMap().'
    },
    {
      issue: 'Duplicate Recipe Ingestion',
      desc: 'Common recipes (e.g. Chicken Curry) appeared multiple times when searching for both "potato" and "onion".',
      solution: 'Implemented in-memory deduplication using a JavaScript Map keyed by idMeal before running detail lookups and match scoring.'
    },
    {
      issue: '20-Property Unstructured Schema',
      desc: 'TheMealDB returns ingredients as 20 separate un-indexed keys (strIngredient1..strIngredient20) with variable whitespace and casing.',
      solution: 'Created dynamic property loops, normalized strings via .toLowerCase().trim(), and performed bidirectional substring matching.'
    }
  ];

  const futureScope = [
    {
      title: 'Dietary & Allergen Filtering',
      desc: 'Add toggles for Vegetarian, Vegan, Gluten-Free, and Halal cuisines before filtering.'
    },
    {
      title: 'Pantry Expiry Tracking',
      desc: 'Track ingredient purchase dates and prioritize recipes using items closest to expiration.'
    },
    {
      title: 'Smart Ingredient Substitutions',
      desc: 'Suggest culinary replacements for missing ingredients (e.g. butter for oil, yogurt for cream).'
    },
    {
      title: 'Offline Recipe Bookmarking',
      desc: 'Enable users to save favorite recipes locally for offline kitchen cooking without internet.'
    }
  ];

  return (
    <div className="h-full w-full flex flex-col justify-between p-8 md:p-12 relative overflow-hidden bg-[#050505] text-[#e5e5e5] select-none">
      {/* Background Decor */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-[#3b82f6] opacity-10 rounded-full blur-[100px] pointer-events-none" />

      {/* Slide Header */}
      <div className="flex items-start justify-between border-b border-[#222] pb-3">
        <div>
          <div className="flex items-center gap-2 text-[10px] font-mono uppercase text-[#3b82f6] font-bold tracking-[0.25em] mb-1">
            <span>Slide 09 / 10</span>
            <span className="text-[#444]">•</span>
            <span>Engineering Insights</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-light tracking-wide text-white font-display">
            Challenges, Solutions & <span className="font-serif italic text-[#ccc]">Future Scope</span>
          </h2>
          <p className="text-xs md:text-sm text-[#888] mt-0.5 font-light">
            Technical hurdles overcome during development and future roadmap enhancements
          </p>
        </div>
        <div className="hidden sm:flex p-2.5 rounded bg-[#3b82f6]/10 border border-[#3b82f6]/30 text-[#3b82f6]">
          <Lightbulb className="w-5 h-5" />
        </div>
      </div>

      {/* 3-Section Grid: Challenges (4 cols) -> Solutions (4 cols) -> Future Scope (4 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 my-auto py-1 items-stretch">
        {/* Section 1: Development Challenges (4 Cols) */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:col-span-4 rounded-lg bg-[#0d0d0d] border border-[#1a1a1a] p-4 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2 mb-3 text-[#3b82f6] font-mono text-[10px] font-bold uppercase tracking-wider">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>1. Technical Challenges</span>
            </div>

            <div className="space-y-2.5">
              {challenges.map((c, i) => (
                <div key={i} className="p-2.5 rounded bg-[#050505] border border-[#222]">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-white flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
                    {c.issue}
                  </h4>
                  <p className="text-[11px] text-[#888] mt-1 leading-relaxed font-light">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-3 pt-2 border-t border-[#1a1a1a] text-[10px] font-mono text-[#666]">
            Identified via API constraints & edge cases
          </div>
        </motion.div>

        {/* Section 2: Applied Solutions (4 Cols) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.05 }}
          className="lg:col-span-4 rounded-lg bg-[#0d0d0d] border border-[#1a1a1a] p-4 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2 mb-3 text-[#60a5fa] font-mono text-[10px] font-bold uppercase tracking-wider">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>2. Engineering Solutions</span>
            </div>

            <div className="space-y-2.5">
              {challenges.map((c, i) => (
                <div key={i} className="p-2.5 rounded bg-[#050505] border border-[#222]">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-white flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#60a5fa]" />
                    Solution 0{i + 1}
                  </h4>
                  <p className="text-[11px] text-[#aaa] mt-1 leading-relaxed font-light">{c.solution}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-3 pt-2 border-t border-[#1a1a1a] text-[10px] font-mono text-[#3b82f6]">
            Implemented in Home.jsx & calculateMatch()
          </div>
        </motion.div>

        {/* Section 3: Future Scope (4 Cols) */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="lg:col-span-4 rounded-lg bg-[#0d0d0d] border border-[#1a1a1a] p-4 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2 mb-3 text-white font-mono text-[10px] font-bold uppercase tracking-wider">
              <Rocket className="w-3.5 h-3.5 text-[#3b82f6]" />
              <span>3. Future Scope Roadmap</span>
            </div>

            <div className="space-y-2">
              {futureScope.map((f, i) => (
                <div key={i} className="p-2 rounded bg-[#050505] border border-[#222]">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#e5e5e5] flex items-center gap-1.5">
                    <ArrowRight className="w-3 h-3 text-[#3b82f6] shrink-0" />
                    {f.title}
                  </h4>
                  <p className="text-[11px] text-[#888] mt-0.5 leading-relaxed font-light">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-3 pt-2 border-t border-[#1a1a1a] text-[10px] font-mono text-[#666]">
            Planned for PantryPal v2.0
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="pt-2 border-t border-[#1a1a1a] text-xs text-[#666] flex items-center justify-between font-mono text-[11px]">
        <span>Continuous Engineering: High Performance • Fault Tolerance • Scalability</span>
        <span className="text-[#3b82f6] font-bold uppercase tracking-wider text-[10px]">Reliable Quality</span>
      </div>
    </div>
  );
};
