import React from 'react';
import { motion } from 'motion/react';
import { ChefHat, Sparkles, User, GraduationCap, Utensils, ArrowRight, ShieldCheck } from 'lucide-react';
import { PRESENTER_INFO } from '../../data/slidesData';

interface SlideProps {
  onNext?: () => void;
  onOpenSandbox?: () => void;
}

export const Slide1Title: React.FC<SlideProps> = ({ onNext, onOpenSandbox }) => {
  return (
    <div className="h-full w-full flex flex-col justify-between p-8 md:p-12 relative overflow-hidden bg-[#050505] text-[#e5e5e5] select-none">
      {/* Sophisticated Ambient Glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#3b82f6] opacity-10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#3b82f6] opacity-10 rounded-full blur-[120px] pointer-events-none" />

      {/* Header bar: Project Badge & Verified Status */}
      <div className="flex items-center justify-between z-10">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#3b82f6] animate-pulse" />
          <span className="text-[10px] font-mono tracking-widest uppercase text-[#aaa] font-semibold">
            Major Software Project Presentation • 10-Slide Deck
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono text-[#888] bg-[#0d0d0d] px-3 py-1.5 rounded border border-[#1a1a1a]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#3b82f6]" />
          <span>Verified Codebase & Live Demo</span>
        </div>
      </div>

      {/* Main Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10 my-auto">
        {/* Left Column: Title & Credentials */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 flex flex-col gap-5"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#3b82f6]/10 text-[#3b82f6] border border-[#3b82f6]/30 text-[10px] uppercase font-mono tracking-widest font-bold mb-3">
              <ChefHat className="w-3.5 h-3.5" />
              Software Engineering Capstone
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-wide text-white leading-tight font-display">
              Pantry<span className="font-bold text-[#3b82f6]">Pal</span>
            </h1>
            <p className="text-xl sm:text-2xl font-serif italic text-[#ccc] mt-1">
              &ldquo;{PRESENTER_INFO.tagline}&rdquo;
            </p>
          </div>

          <p className="text-sm md:text-base text-[#999] max-w-xl leading-relaxed font-light">
            An intelligent pantry-first recipe discovery system that matches on-hand kitchen ingredients to curated recipes using concurrent REST API aggregation and real-time compatibility scoring.
          </p>

          {/* Presenter & Trainer Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="flex items-center gap-3 p-3.5 rounded bg-[#0d0d0d] border border-[#1a1a1a] hover:border-[#3b82f6]/40 transition-colors">
              <div className="w-9 h-9 rounded bg-[#3b82f6]/10 text-[#3b82f6] flex items-center justify-center shrink-0 border border-[#3b82f6]/30">
                <User className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] uppercase tracking-widest text-[#666] block">
                  Presented By
                </span>
                <span className="text-sm font-semibold text-white truncate block">
                  {PRESENTER_INFO.presenter}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded bg-[#0d0d0d] border border-[#1a1a1a] hover:border-[#3b82f6]/40 transition-colors">
              <div className="w-9 h-9 rounded bg-white/5 text-white flex items-center justify-center shrink-0 border border-white/10">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] uppercase tracking-widest text-[#666] block">
                  Project Trainer
                </span>
                <span className="text-sm font-semibold text-white truncate block">
                  {PRESENTER_INFO.trainer}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Visual UI Mockup based on project theme */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:col-span-5 flex flex-col justify-center"
        >
          <div className="relative rounded-lg bg-[#0d0d0d] border border-[#1a1a1a] p-5 shadow-2xl overflow-hidden backdrop-blur-xl">
            {/* UI Header Mock */}
            <div className="flex items-center justify-between border-b border-[#222] pb-3 mb-4">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#333]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#333]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#333]" />
              </div>
              <span className="text-[10px] font-mono text-[#666]">pantrypal-app.web.app</span>
              <span className="text-[10px] text-[#3b82f6] font-bold uppercase tracking-widest flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Live Demo
              </span>
            </div>

            {/* Visual Pantry Mockup */}
            <div className="space-y-3.5">
              <div className="text-center py-1">
                <h3 className="text-base font-light tracking-wider text-white uppercase flex items-center justify-center gap-1.5">
                  Pantry<span className="font-bold text-[#3b82f6]">Pal</span>
                </h3>
                <p className="text-[11px] text-[#777] font-serif italic">Tell us what you have. We&apos;ll tell you what to cook.</p>
              </div>

              {/* Input field mockup */}
              <div className="flex items-center bg-[#050505] border border-[#222] rounded p-1.5 pl-3">
                <span className="text-xs text-[#666] flex-1 font-mono">Enter ingredient (e.g. chicken)...</span>
                <span className="px-2.5 py-1 bg-[#3b82f6] text-white text-[11px] font-bold uppercase tracking-wider rounded">
                  + Add
                </span>
              </div>

              {/* Tag Badges as seen in the demo video */}
              <div className="flex flex-wrap gap-1.5 justify-center">
                <span className="px-2.5 py-1 rounded-full bg-white/5 text-white border border-white/10 text-xs flex items-center gap-1">
                  <span>🍴</span> potato <span className="text-[#888] text-[10px] ml-1 font-bold">×</span>
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white/5 text-white border border-white/10 text-xs flex items-center gap-1">
                  <span>🍴</span> tomato <span className="text-[#888] text-[10px] ml-1 font-bold">×</span>
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white/5 text-white border border-white/10 text-xs flex items-center gap-1">
                  <span>🍴</span> onion <span className="text-[#888] text-[10px] ml-1 font-bold">×</span>
                </span>
              </div>

              {/* Find recipes button */}
              <div className="pt-1">
                <button
                  onClick={onOpenSandbox}
                  className="w-full py-2 bg-[#3b82f6] hover:bg-[#2563eb] text-white text-xs font-bold uppercase tracking-wider rounded flex items-center justify-center gap-1.5 transition-all shadow-lg shadow-[#3b82f6]/20 active:scale-98 cursor-pointer"
                >
                  <span>🔍</span> Find Recipes (Interactive Demo)
                </button>
              </div>

              {/* Teaser match card */}
              <div className="p-2.5 bg-[#050505] rounded border border-[#1a1a1a] flex items-center gap-3">
                <img
                  src="https://www.themealdb.com/images/media/meals/7vsvtt1742469493.jpg"
                  alt="Curry"
                  className="w-11 h-11 rounded object-cover border border-[#222]"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1">
                    <h4 className="text-xs font-semibold text-white truncate">Bengali Chicken Curry</h4>
                    <span className="text-[10px] bg-[#3b82f6]/20 text-[#60a5fa] font-bold px-1.5 py-0.5 rounded border border-[#3b82f6]/30">
                      100% Match
                    </span>
                  </div>
                  <p className="text-[10px] text-[#888] truncate mt-0.5">Missing: ginger garlic paste, spices</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer Navigation Bar */}
      <div className="flex items-center justify-between pt-4 border-t border-[#1a1a1a] text-xs text-[#777] z-10 font-mono">
        <div className="flex items-center gap-2">
          <Utensils className="w-4 h-4 text-[#3b82f6]" />
          <span>React 18 • REST API Integration • Dynamic Recipe Matching</span>
        </div>
        {onNext && (
          <button 
            onClick={onNext}
            className="flex items-center gap-1.5 text-[#3b82f6] hover:text-[#60a5fa] font-sans font-bold uppercase tracking-wider text-xs transition-colors cursor-pointer"
          >
            <span>Begin Presentation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
