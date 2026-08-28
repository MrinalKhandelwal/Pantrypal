import React from 'react';
import { motion } from 'motion/react';
import { AlertTriangle, TrendingDown, HelpCircle, ShoppingCart, Check, X } from 'lucide-react';

export const Slide3ProblemStatement: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col justify-between p-8 md:p-12 relative overflow-hidden bg-[#050505] text-[#e5e5e5] select-none">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#3b82f6] opacity-10 rounded-full blur-[100px] pointer-events-none" />

      {/* Slide Header */}
      <div className="flex items-start justify-between border-b border-[#222] pb-4">
        <div>
          <div className="flex items-center gap-2 text-[10px] font-mono uppercase text-[#3b82f6] font-bold tracking-[0.25em] mb-1">
            <span>Slide 03 / 10</span>
            <span className="text-[#444]">•</span>
            <span>Problem Analysis</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-light tracking-wide text-white font-display">
            Problem Statement & <span className="font-serif italic text-[#ccc]">Motivation</span>
          </h2>
          <p className="text-xs md:text-sm text-[#888] mt-1 font-light">
            The friction home cooks face with disconnected kitchen inventories and conventional recipe sites
          </p>
        </div>
        <div className="hidden sm:flex p-2.5 rounded bg-[#3b82f6]/10 border border-[#3b82f6]/30 text-[#3b82f6]">
          <AlertTriangle className="w-5 h-5" />
        </div>
      </div>

      {/* Main Comparison & Pain Points Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 my-auto py-2 items-stretch">
        {/* Left: 3 Core Pain Points (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-3">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35 }}
            className="p-4 rounded-lg bg-[#0d0d0d] border border-[#1a1a1a] flex items-start gap-3.5"
          >
            <div className="p-2 rounded bg-white/5 text-[#e5e5e5] border border-white/10 shrink-0">
              <TrendingDown className="w-4 h-4 text-[#3b82f6]" />
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white">1. Household Food Waste</h4>
              <p className="text-xs text-[#aaa] mt-1 leading-relaxed font-light">
                Vegetables and pantry items (potatoes, onions, herbs) frequently spoil because users do not know which dishes can utilize them together.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: 0.08 }}
            className="p-4 rounded-lg bg-[#0d0d0d] border border-[#1a1a1a] flex items-start gap-3.5"
          >
            <div className="p-2 rounded bg-white/5 text-[#e5e5e5] border border-white/10 shrink-0">
              <HelpCircle className="w-4 h-4 text-[#3b82f6]" />
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white">2. Daily Mealtime Fatigue</h4>
              <p className="text-xs text-[#aaa] mt-1 leading-relaxed font-light">
                After busy schedules, deciding what to prepare creates cognitive paralysis. Users resort to expensive food delivery despite having usable ingredients.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: 0.16 }}
            className="p-4 rounded-lg bg-[#0d0d0d] border border-[#1a1a1a] flex items-start gap-3.5"
          >
            <div className="p-2 rounded bg-white/5 text-[#e5e5e5] border border-white/10 shrink-0">
              <ShoppingCart className="w-4 h-4 text-[#3b82f6]" />
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white">3. Flawed Recipe-First Paradigm</h4>
              <p className="text-xs text-[#aaa] mt-1 leading-relaxed font-light">
                Mainstream platforms require browsing recipes first, only for users to discover they lack key ingredients after reading the recipe.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right: Visual Comparative Model (7 Cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="lg:col-span-7 rounded-lg bg-[#0d0d0d] border border-[#1a1a1a] p-5 flex flex-col justify-between"
        >
          <h4 className="text-xs font-mono uppercase tracking-widest text-[#888] font-bold mb-3 flex items-center gap-2">
            <span>Paradigm Shift: Traditional Apps vs. PantryPal</span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* Traditional Method Box */}
            <div className="p-4 rounded bg-[#050505] border border-[#222] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[#888] text-xs font-bold font-mono uppercase mb-2.5">
                  <X className="w-3.5 h-3.5 text-[#666]" />
                  <span>Traditional Method</span>
                </div>
                <div className="space-y-2 text-xs text-[#777] font-light">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#444]" />
                    <span>Search: &ldquo;What dish to cook?&rdquo;</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#444]" />
                    <span>Browse 50 static recipes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#444]" />
                    <span>Check ingredient lists manually</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#aaa]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#666]" />
                    <span>Result: 4 missing items → Abandoned</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-2 border-t border-[#1a1a1a] text-[10px] font-mono uppercase text-[#666]">
                High friction • Grocery waste
              </div>
            </div>

            {/* PantryPal Method Box */}
            <div className="p-4 rounded bg-[#050505] border border-[#3b82f6]/40 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[#3b82f6] text-xs font-bold font-mono uppercase mb-2.5">
                  <Check className="w-3.5 h-3.5 text-[#3b82f6]" />
                  <span>PantryPal Engine</span>
                </div>
                <div className="space-y-2 text-xs text-[#aaa] font-light">
                  <div className="flex items-center gap-2 text-white">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
                    <span>Input: &ldquo;What is in your pantry?&rdquo;</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
                    <span>Tag items: Potato, Tomato, Onion</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
                    <span>Algorithmic match & sorting</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#60a5fa] font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
                    <span>Result: Instant recipes + missing alert</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-2 border-t border-[#1a1a1a] text-[10px] font-mono uppercase text-[#3b82f6]">
                Zero waste • Immediate cooking
              </div>
            </div>
          </div>

          <div className="mt-4 p-2.5 rounded bg-[#050505] border border-[#1a1a1a] text-xs text-[#888] flex items-center justify-between font-mono">
            <span className="font-bold text-[#3b82f6] uppercase tracking-wider text-[10px]">Project Motivation:</span>
            <span className="text-[#aaa] text-[11px]">Transform static recipe data into an on-demand, inventory-driven engine.</span>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="pt-3 border-t border-[#1a1a1a] text-xs text-[#666] flex items-center justify-between font-mono text-[11px]">
        <span>Context: Everyday Household Kitchen Management</span>
        <span className="text-[#3b82f6] font-bold uppercase tracking-wider text-[10px]">Goal: Maximize existing ingredients</span>
      </div>
    </div>
  );
};
