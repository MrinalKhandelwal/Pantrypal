import React from 'react';
import { motion } from 'motion/react';
import { Lightbulb, Compass, HeartHandshake, Zap, ArrowRight, Layers, CheckCircle2 } from 'lucide-react';

export const Slide2Introduction: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col justify-between p-8 md:p-12 relative overflow-hidden bg-[#050505] text-[#e5e5e5] select-none">
      {/* Background Decor */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#3b82f6] opacity-10 rounded-full blur-[100px] pointer-events-none" />

      {/* Slide Header */}
      <div className="flex items-start justify-between border-b border-[#222] pb-4">
        <div>
          <div className="flex items-center gap-2 text-[10px] font-mono uppercase text-[#3b82f6] font-bold tracking-[0.25em] mb-1">
            <span>Slide 02 / 10</span>
            <span className="text-[#444]">•</span>
            <span>Project Overview</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-light tracking-wide text-white font-display">
            Project <span className="font-serif italic text-[#ccc]">Introduction</span> & Concept
          </h2>
          <p className="text-xs md:text-sm text-[#888] mt-1 font-light">
            Bridging the gap between available pantry items and ready-to-cook culinary recipes
          </p>
        </div>
        <div className="hidden sm:flex p-2.5 rounded bg-[#3b82f6]/10 border border-[#3b82f6]/30 text-[#3b82f6]">
          <Lightbulb className="w-5 h-5" />
        </div>
      </div>

      {/* Main Content Grid: 4 Core Pillars of the Introduction */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-auto py-2">
        {/* Card 1: What is PantryPal */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="p-5 rounded-lg bg-[#0d0d0d] border border-[#1a1a1a] hover:border-[#3b82f6]/40 transition-all flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-3 mb-2.5">
              <div className="w-9 h-9 rounded bg-[#3b82f6]/10 border border-[#3b82f6]/30 text-[#3b82f6] flex items-center justify-center">
                <Compass className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">What is PantryPal?</h3>
            </div>
            <p className="text-xs text-[#aaa] leading-relaxed font-light">
              A modern, client-side dynamic recipe finder web application that inverts the conventional cooking workflow. Users specify ingredients currently available in their pantry, and the system instantly returns compatible recipes.
            </p>
          </div>
          <div className="mt-3.5 pt-2.5 border-t border-[#1a1a1a] flex items-center gap-2 text-[11px] font-mono text-[#3b82f6]">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#3b82f6] shrink-0" />
            <span className="uppercase tracking-wider">Pantry-First Architecture</span>
          </div>
        </motion.div>

        {/* Card 2: The Core Idea */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.08 }}
          className="p-5 rounded-lg bg-[#0d0d0d] border border-[#1a1a1a] hover:border-[#3b82f6]/40 transition-all flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-3 mb-2.5">
              <div className="w-9 h-9 rounded bg-[#3b82f6]/10 border border-[#3b82f6]/30 text-[#3b82f6] flex items-center justify-center">
                <Zap className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">The Main Idea</h3>
            </div>
            <p className="text-xs text-[#aaa] leading-relaxed font-light">
              Eliminate the question <span className="text-white font-serif italic font-medium">&ldquo;What can I make with this?&rdquo;</span> by dynamically calculating recipe match percentages and displaying exact missing ingredients, enabling immediate cooking decisions.
            </p>
          </div>
          <div className="mt-3.5 pt-2.5 border-t border-[#1a1a1a] flex items-center gap-2 text-[11px] font-mono text-[#3b82f6]">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#3b82f6] shrink-0" />
            <span className="uppercase tracking-wider">Real-time Match Percentage Scoring</span>
          </div>
        </motion.div>

        {/* Card 3: Problem Addressed */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.16 }}
          className="p-5 rounded-lg bg-[#0d0d0d] border border-[#1a1a1a] hover:border-[#3b82f6]/40 transition-all flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-3 mb-2.5">
              <div className="w-9 h-9 rounded bg-white/5 border border-white/10 text-white flex items-center justify-center">
                <Layers className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Problem Addressed</h3>
            </div>
            <p className="text-xs text-[#aaa] leading-relaxed font-light">
              Home cooks frequently struggle with mismatched ingredients, causing unused produce to spoil. Standard recipe platforms prioritize curated dishes over on-hand inventory, creating needless grocery store trips.
            </p>
          </div>
          <div className="mt-3.5 pt-2.5 border-t border-[#1a1a1a] flex items-center gap-2 text-[11px] font-mono text-[#888]">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#3b82f6] shrink-0" />
            <span className="uppercase tracking-wider">Food Spoilage & Decision Fatigue Reduction</span>
          </div>
        </motion.div>

        {/* Card 4: Why It Is Useful */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.24 }}
          className="p-5 rounded-lg bg-[#0d0d0d] border border-[#1a1a1a] hover:border-[#3b82f6]/40 transition-all flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-3 mb-2.5">
              <div className="w-9 h-9 rounded bg-[#3b82f6]/10 border border-[#3b82f6]/30 text-[#3b82f6] flex items-center justify-center">
                <HeartHandshake className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Why It Is Useful</h3>
            </div>
            <p className="text-xs text-[#aaa] leading-relaxed font-light">
              Provides practical utility: reduces household grocery expenses, saves meal prep time, encourages culinary creativity, and delivers accessible cooking guides with verified ingredients and instructions.
            </p>
          </div>
          <div className="mt-3.5 pt-2.5 border-t border-[#1a1a1a] flex items-center gap-2 text-[11px] font-mono text-[#3b82f6]">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#3b82f6] shrink-0" />
            <span className="uppercase tracking-wider">Sustainable & Cost-Effective Living</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Summary Bar */}
      <div className="p-3 rounded bg-[#0d0d0d] border border-[#1a1a1a] flex items-center justify-between text-xs text-[#888] font-mono">
        <span className="flex items-center gap-2 overflow-x-auto text-[11px]">
          <span className="text-[#3b82f6] font-bold uppercase tracking-wider">Pipeline:</span> User Tags [Potato, Tomato, Onion]
          <ArrowRight className="w-3.5 h-3.5 text-[#555]" />
          TheMealDB Concurrent Queries
          <ArrowRight className="w-3.5 h-3.5 text-[#555]" />
          Match Scoring Algorithm
          <ArrowRight className="w-3.5 h-3.5 text-[#555]" />
          Sorted Recipe Deck
        </span>
        <span className="text-[#555] hidden sm:inline text-[10px] uppercase tracking-widest">PantryPal Presentation</span>
      </div>
    </div>
  );
};
