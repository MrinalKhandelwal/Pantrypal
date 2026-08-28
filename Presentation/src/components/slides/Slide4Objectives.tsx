import React from 'react';
import { motion } from 'motion/react';
import { Target, Keyboard, Network, Percent, BookOpenCheck } from 'lucide-react';

export const Slide4Objectives: React.FC = () => {
  const objectives = [
    {
      id: '01',
      icon: <Keyboard className="w-5 h-5 text-[#3b82f6]" />,
      badge: 'Input Flexibility',
      title: 'Zero-Friction Tag-Based Input',
      desc: 'Provide an intuitive input system supporting keyboard shortcuts (Enter key), real-time whitespace trimming, and removable badge chips for pantry management.',
      codeRef: 'addIngredient(), onKeyDown (Enter), removeIngredient()'
    },
    {
      id: '02',
      icon: <Network className="w-5 h-5 text-[#3b82f6]" />,
      badge: 'API Orchestration',
      title: 'Multi-Query Concurrent Fetching',
      desc: 'Orchestrate parallel asynchronous REST calls to TheMealDB filter endpoints using Promise.all, aggregating results and removing duplicates via JavaScript Map.',
      codeRef: 'Promise.all(requests), flatMap(), Map(idMeal)'
    },
    {
      id: '03',
      icon: <Percent className="w-5 h-5 text-[#3b82f6]" />,
      badge: 'Match Engine',
      title: 'Smart Match Percentage Algorithm',
      desc: 'Cross-reference user pantry tags against up to 20 dynamically indexed recipe ingredients (strIngredient1..20), calculate compatibility score, and sort descending.',
      codeRef: 'calculateMatch(recipe), matchPercentage, sort()'
    },
    {
      id: '04',
      icon: <BookOpenCheck className="w-5 h-5 text-[#3b82f6]" />,
      badge: 'Actionable UI',
      title: 'Missing Ingredients & Detailed Guide',
      desc: 'Transparently alert users about missing groceries (up to 5 items) on cards, with seamless client-side routing (/recipe/:id) to full step-by-step instructions.',
      codeRef: 'missingIngredients[], React Router useParams(/recipe/:id)'
    }
  ];

  return (
    <div className="h-full w-full flex flex-col justify-between p-8 md:p-12 relative overflow-hidden bg-[#050505] text-[#e5e5e5] select-none">
      {/* Background Decor */}
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#3b82f6] opacity-10 rounded-full blur-[100px] pointer-events-none" />

      {/* Slide Header */}
      <div className="flex items-start justify-between border-b border-[#222] pb-4">
        <div>
          <div className="flex items-center gap-2 text-[10px] font-mono uppercase text-[#3b82f6] font-bold tracking-[0.25em] mb-1">
            <span>Slide 04 / 10</span>
            <span className="text-[#444]">•</span>
            <span>Project Scope</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-light tracking-wide text-white font-display">
            Project <span className="font-serif italic text-[#ccc]">Objectives</span> & Goals
          </h2>
          <p className="text-xs md:text-sm text-[#888] mt-1 font-light">
            Four core engineering and user-experience targets established for PantryPal
          </p>
        </div>
        <div className="hidden sm:flex p-2.5 rounded bg-[#3b82f6]/10 border border-[#3b82f6]/30 text-[#3b82f6]">
          <Target className="w-5 h-5" />
        </div>
      </div>

      {/* 4 Objective Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-auto py-2">
        {objectives.map((obj, idx) => (
          <motion.div
            key={obj.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: idx * 0.08 }}
            className="p-5 rounded-lg bg-[#0d0d0d] border border-[#1a1a1a] hover:border-[#3b82f6]/40 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded bg-[#3b82f6]/10 border border-[#3b82f6]/30 flex items-center justify-center">
                    {obj.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#666] font-bold block">
                      OBJECTIVE {obj.id}
                    </span>
                    <h3 className="text-sm font-semibold text-white uppercase tracking-wider">{obj.title}</h3>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-[#3b82f6]/30 bg-[#3b82f6]/10 text-[#60a5fa]">
                  {obj.badge}
                </span>
              </div>
              <p className="text-xs text-[#aaa] leading-relaxed font-light">{obj.desc}</p>
            </div>

            <div className="mt-3.5 pt-2.5 border-t border-[#1a1a1a] flex items-center justify-between text-[10px] font-mono">
              <span className="text-[#666] uppercase tracking-wider">Implementation:</span>
              <span className="text-[#888] font-medium bg-[#050505] px-2 py-0.5 rounded border border-[#222]">
                {obj.codeRef}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Milestone Bar */}
      <div className="p-3 rounded bg-[#0d0d0d] border border-[#1a1a1a] flex items-center justify-between text-xs text-[#888] font-mono text-[11px]">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#3b82f6]" />
          <span className="text-white font-bold uppercase tracking-wider text-[10px]">Criterion:</span>
          <span>Seamless end-to-end recipe match execution without server bottlenecks</span>
        </span>
        <span className="text-[#555] text-[10px] uppercase tracking-widest">PantryPal v1.0</span>
      </div>
    </div>
  );
};
