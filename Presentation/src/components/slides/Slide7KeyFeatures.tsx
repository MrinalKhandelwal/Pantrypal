import React from 'react';
import { motion } from 'motion/react';
import { Star, Tags, Layers, Calculator, AlertCircle, ChefHat, Palette } from 'lucide-react';

export const Slide7KeyFeatures: React.FC = () => {
  const features = [
    {
      icon: <Tags className="w-4 h-4 text-[#3b82f6]" />,
      badge: 'User Input',
      title: 'Dynamic Ingredient Tagging',
      desc: 'Users type ingredients and press Enter or click "+ Add". Ingredients are stored in state, formatted with whitespace trimming, and rendered as removable badge chips.'
    },
    {
      icon: <Layers className="w-4 h-4 text-[#3b82f6]" />,
      badge: 'REST Orchestration',
      title: 'Parallel Query Aggregation',
      desc: 'Executes concurrent fetch requests across all user ingredients with Promise.all and eliminates duplicate meals using an in-memory JavaScript Map keyed by idMeal.'
    },
    {
      icon: <Calculator className="w-4 h-4 text-[#3b82f6]" />,
      badge: 'Matching Engine',
      title: 'Algorithmic Match Scoring',
      desc: 'Iterates through up to 20 ingredient properties (strIngredient1..20) per recipe, performs bidirectional substring comparison, and calculates exact match %.'
    },
    {
      icon: <AlertCircle className="w-4 h-4 text-[#3b82f6]" />,
      badge: 'Transparency',
      title: 'Missing Ingredients Alert',
      desc: 'Displays an alert box on each card listing up to 5 ingredients the user currently lacks, providing clear visibility before starting to cook.'
    },
    {
      icon: <ChefHat className="w-4 h-4 text-[#3b82f6]" />,
      badge: 'Routing & Details',
      title: 'Detailed Recipe View (/recipe/:id)',
      desc: 'Dynamic routing with useParams fetches full meal details, parses numbered ingredient/measurement pairs, and presents structured preparation steps.'
    },
    {
      icon: <Palette className="w-4 h-4 text-[#3b82f6]" />,
      badge: 'Visual Design',
      title: 'High-Contrast Dark Theme',
      desc: 'Custom-designed #1e1e1e dark canvas with golden amber headings, crisp white cards, and vibrant green match tags for optimal kitchen readability.'
    }
  ];

  return (
    <div className="h-full w-full flex flex-col justify-between p-8 md:p-12 relative overflow-hidden bg-[#050505] text-[#e5e5e5] select-none">
      {/* Background Glow */}
      <div className="absolute top-10 left-1/3 w-96 h-96 bg-[#3b82f6] opacity-10 rounded-full blur-[100px] pointer-events-none" />

      {/* Slide Header */}
      <div className="flex items-start justify-between border-b border-[#222] pb-4">
        <div>
          <div className="flex items-center gap-2 text-[10px] font-mono uppercase text-[#3b82f6] font-bold tracking-[0.25em] mb-1">
            <span>Slide 07 / 10</span>
            <span className="text-[#444]">•</span>
            <span>Functional Scope</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-light tracking-wide text-white font-display">
            Key Project <span className="font-serif italic text-[#ccc]">Features</span>
          </h2>
          <p className="text-xs md:text-sm text-[#888] mt-1 font-light">
            Six major functionalities implemented and verified in the PantryPal application
          </p>
        </div>
        <div className="hidden sm:flex p-2.5 rounded bg-[#3b82f6]/10 border border-[#3b82f6]/30 text-[#3b82f6]">
          <Star className="w-5 h-5" />
        </div>
      </div>

      {/* 6 Key Features Grid (3x2) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 my-auto py-2">
        {features.map((feat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            className="p-4 rounded-lg bg-[#0d0d0d] border border-[#1a1a1a] hover:border-[#3b82f6]/40 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="p-1.5 rounded bg-[#050505] border border-[#222]">
                  {feat.icon}
                </div>
                <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#60a5fa] bg-[#3b82f6]/10 px-2 py-0.5 rounded-full border border-[#3b82f6]/30">
                  {feat.badge}
                </span>
              </div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-white mb-1.5">{feat.title}</h3>
              <p className="text-xs text-[#aaa] leading-relaxed font-light">{feat.desc}</p>
            </div>
            <div className="mt-3 pt-2 border-t border-[#1a1a1a] flex items-center gap-1.5 text-[10px] font-mono text-[#3b82f6]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
              <span className="uppercase tracking-wider">Feature Verified</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <div className="pt-3 border-t border-[#1a1a1a] text-xs text-[#666] flex items-center justify-between font-mono text-[11px]">
        <span>Verified Features: Tagging • Parallel Fetching • Match Scoring • Missing Items • Detailed View • Theme</span>
        <span className="text-[#3b82f6] font-bold uppercase tracking-wider text-[10px]">6/6 Modules Operational</span>
      </div>
    </div>
  );
};
