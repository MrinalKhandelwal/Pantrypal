import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Workflow, ArrowRight, Layers, Database, Cpu, Compass, CheckCircle2 } from 'lucide-react';

export const Slide6Architecture: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      id: 0,
      title: '1. UI Input & State',
      role: 'Client Interaction',
      icon: <Layers className="w-4 h-4 text-[#3b82f6]" />,
      detail: 'User enters ingredients (e.g., potato, tomato, onion). State handles input via useState, cleans whitespace with .trim(), and renders interactive badge chips with remove buttons.'
    },
    {
      id: 1,
      title: '2. Concurrent API Fetch',
      role: 'Network Layer',
      icon: <Workflow className="w-4 h-4 text-[#3b82f6]" />,
      detail: 'Maps over ingredients array and triggers parallel HTTP GET requests using Promise.all() to TheMealDB filter endpoints (filter.php?i={ingredient}), avoiding blocking bottlenecks.'
    },
    {
      id: 2,
      title: '3. Merge & Deduplicate',
      role: 'Data Pipeline',
      icon: <Database className="w-4 h-4 text-[#3b82f6]" />,
      detail: 'Flattens all incoming meal lists with flatMap(), then eliminates duplicate meal occurrences across multiple ingredients using an in-memory JavaScript Map keyed by idMeal.'
    },
    {
      id: 3,
      title: '4. Batch Details Lookup',
      role: 'Data Enrichment',
      icon: <Cpu className="w-4 h-4 text-[#3b82f6]" />,
      detail: 'Slices top candidates (up to 10) and fetches complete recipes via lookup.php?i={idMeal} with individual try-catch blocks to ensure network resilience.'
    },
    {
      id: 4,
      title: '5. Match Scoring Engine',
      role: 'Algorithmic Core',
      icon: <Compass className="w-4 h-4 text-[#3b82f6]" />,
      detail: 'calculateMatch() extracts 20 ingredient properties (strIngredient1..20), checks bidirectional substrings against user pantry, computes match %, and identifies missing items.'
    },
    {
      id: 5,
      title: '6. Sorted View Rendering',
      role: 'Presentation Layer',
      icon: <CheckCircle2 className="w-4 h-4 text-[#3b82f6]" />,
      detail: 'Sorts recipes descending by matchPercentage and renders Bootstrap grid cards on Home, with React Router Link providing transition to /recipe/:id for full cooking guides.'
    }
  ];

  return (
    <div className="h-full w-full flex flex-col justify-between p-8 md:p-12 relative overflow-hidden bg-[#050505] text-[#e5e5e5] select-none">
      {/* Background Decor */}
      <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-[#3b82f6] opacity-10 rounded-full blur-[100px] pointer-events-none" />

      {/* Slide Header */}
      <div className="flex items-start justify-between border-b border-[#222] pb-4">
        <div>
          <div className="flex items-center gap-2 text-[10px] font-mono uppercase text-[#3b82f6] font-bold tracking-[0.25em] mb-1">
            <span>Slide 06 / 10</span>
            <span className="text-[#444]">•</span>
            <span>System Engineering</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-light tracking-wide text-white font-display">
            System & Workflow <span className="font-serif italic text-[#ccc]">Architecture</span>
          </h2>
          <p className="text-xs md:text-sm text-[#888] mt-1 font-light">
            End-to-end data pipeline from user pantry input to match scoring and view rendering
          </p>
        </div>
        <div className="hidden sm:flex p-2.5 rounded bg-[#3b82f6]/10 border border-[#3b82f6]/30 text-[#3b82f6]">
          <Workflow className="w-5 h-5" />
        </div>
      </div>

      {/* Interactive 6-Step Pipeline Architecture Diagram */}
      <div className="my-auto py-2">
        {/* Horizontal Pipeline Steps */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-3.5">
          {steps.map((s) => (
            <motion.div
              key={s.id}
              onClick={() => setActiveStep(s.id)}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className={`p-3 rounded-lg border transition-all cursor-pointer flex flex-col justify-between ${
                activeStep === s.id
                  ? 'bg-[#0d0d0d] border-[#3b82f6] shadow-md shadow-[#3b82f6]/10'
                  : 'bg-[#0d0d0d] border-[#1a1a1a] hover:border-[#333]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="p-1 rounded bg-[#050505] border border-[#222]">
                    {s.icon}
                  </span>
                  <span className="text-[9px] font-mono text-[#666]">0{s.id + 1}</span>
                </div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-white leading-tight">{s.title}</h4>
              </div>
              <span className="text-[9px] font-mono uppercase tracking-wider text-[#666] mt-2 block">{s.role}</span>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Detail Card for Active Step */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="p-4 rounded-lg bg-[#0d0d0d] border border-[#1a1a1a] flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
        >
          <div className="space-y-1.5 max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border border-[#3b82f6]/30 bg-[#3b82f6]/10 text-[#60a5fa]">
                {steps[activeStep].role}
              </span>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                {steps[activeStep].title} — Flow Details
              </h3>
            </div>
            <p className="text-xs text-[#aaa] leading-relaxed font-light">
              {steps[activeStep].detail}
            </p>
          </div>

          <div className="flex items-center gap-2 self-end md:self-auto shrink-0">
            <button
              onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
              className="px-3 py-1.5 rounded bg-[#050505] border border-[#222] text-[11px] font-mono text-[#888] hover:text-white hover:border-[#444] cursor-pointer"
            >
              Prev
            </button>
            <button
              onClick={() => setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
              className="px-3 py-1.5 rounded bg-[#3b82f6] hover:bg-[#2563eb] text-[11px] font-mono font-bold uppercase tracking-wider text-white cursor-pointer shadow-sm"
            >
              Next Step
            </button>
          </div>
        </motion.div>

        {/* Visual Pipeline Flow Summary */}
        <div className="mt-3 p-2.5 rounded bg-[#050505] border border-[#1a1a1a] flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono text-[#666]">
          <span className="text-[#888] font-semibold uppercase tracking-wider">Data Pipeline:</span>
          <span className="flex items-center gap-1.5 text-[#aaa] overflow-x-auto">
            <span className="text-[#3b82f6]">Pantry Tags</span>
            <ArrowRight className="w-3 h-3 text-[#444]" />
            <span>Concurrent Fetch</span>
            <ArrowRight className="w-3 h-3 text-[#444]" />
            <span>Map Deduplication</span>
            <ArrowRight className="w-3 h-3 text-[#444]" />
            <span>Details Lookup</span>
            <ArrowRight className="w-3 h-3 text-[#444]" />
            <span className="text-[#60a5fa]">Match Ranking</span>
            <ArrowRight className="w-3 h-3 text-[#444]" />
            <span className="text-white">Dynamic View</span>
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-3 border-t border-[#1a1a1a] text-xs text-[#666] flex items-center justify-between font-mono text-[11px]">
        <span>Architectural Principle: Clean Separation of Input, Network, Logic & Presentation</span>
        <span className="text-[#3b82f6] font-bold uppercase tracking-wider text-[10px]">100% Client-Side React SPA</span>
      </div>
    </div>
  );
};
