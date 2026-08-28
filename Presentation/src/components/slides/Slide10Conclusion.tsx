import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Award, CheckCircle2, User, GraduationCap, Sparkles, ChefHat, Heart, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PRESENTER_INFO } from '../../data/slidesData';

interface ConclusionProps {
  onRestart?: () => void;
  onOpenSandbox?: () => void;
}

export const Slide10Conclusion: React.FC<ConclusionProps> = ({ onRestart, onOpenSandbox }) => {
  useEffect(() => {
    // Fire celebratory confetti on slide render
    try {
      confetti({
        particleCount: 40,
        spread: 50,
        origin: { y: 0.8 },
        colors: ['#3b82f6', '#60a5fa', '#93c5fd', '#ffffff']
      });
    } catch {
      // benign fallback
    }
  }, []);

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#3b82f6', '#60a5fa', '#93c5fd', '#ffffff']
      });
    } catch {
      // benign fallback
    }
  };

  return (
    <div className="h-full w-full flex flex-col justify-between p-8 md:p-12 relative overflow-hidden bg-[#050505] text-[#e5e5e5] select-none">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#3b82f6] opacity-10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#3b82f6] opacity-5 rounded-full blur-[100px] pointer-events-none" />

      {/* Slide Header */}
      <div className="flex items-start justify-between border-b border-[#222] pb-3">
        <div>
          <div className="flex items-center gap-2 text-[10px] font-mono uppercase text-[#3b82f6] font-bold tracking-[0.25em] mb-1">
            <span>Slide 10 / 10</span>
            <span className="text-[#444]">•</span>
            <span>Final Summary</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-light tracking-wide text-white font-display">
            Conclusion & <span className="font-serif italic text-[#ccc]">Key Takeaways</span>
          </h2>
          <p className="text-xs md:text-sm text-[#888] mt-0.5 font-light">
            Empowering everyday kitchens through intuitive pantry-first recipe recommendation
          </p>
        </div>
        <button
          onClick={triggerConfetti}
          className="p-2.5 rounded bg-[#3b82f6]/10 border border-[#3b82f6]/30 text-[#3b82f6] hover:bg-[#3b82f6]/20 transition-colors cursor-pointer"
          title="Celebrate Project Completion"
        >
          <Sparkles className="w-5 h-5" />
        </button>
      </div>

      {/* Main Conclusion Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 my-auto py-2 items-center">
        {/* Left Column: Summary Highlights (7 Cols) */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-7 space-y-3"
        >
          <div className="p-4 rounded-lg bg-[#0d0d0d] border border-[#1a1a1a]">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white flex items-center gap-2 mb-1.5">
              <Award className="w-4 h-4 text-[#3b82f6]" />
              <span>Project Summary & Impact</span>
            </h3>
            <p className="text-xs text-[#aaa] leading-relaxed font-light">
              <strong className="text-white font-medium">PantryPal</strong> successfully solves the daily culinary dilemma by reversing the standard recipe search flow. By evaluating available groceries in real-time, the app reduces household food waste, eliminates decision paralysis, and provides a frictionless, zero-cost cooking assistant.
            </p>
          </div>

          {/* Key Deliverables Checkpoints */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="p-2.5 rounded bg-[#0d0d0d] border border-[#1a1a1a] flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#3b82f6] shrink-0" />
              <span className="text-xs text-[#ccc] font-light">React 18 & Router Architecture</span>
            </div>
            <div className="p-2.5 rounded bg-[#0d0d0d] border border-[#1a1a1a] flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#3b82f6] shrink-0" />
              <span className="text-xs text-[#ccc] font-light">Parallel TheMealDB Queries</span>
            </div>
            <div className="p-2.5 rounded bg-[#0d0d0d] border border-[#1a1a1a] flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#3b82f6] shrink-0" />
              <span className="text-xs text-[#ccc] font-light">Algorithmic Match Engine</span>
            </div>
            <div className="p-2.5 rounded bg-[#0d0d0d] border border-[#1a1a1a] flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#3b82f6] shrink-0" />
              <span className="text-xs text-[#ccc] font-light">Clean High-Contrast Dark UI</span>
            </div>
          </div>

          <div className="p-2.5 rounded bg-[#050505] border border-[#1a1a1a] flex items-center justify-between text-xs text-[#888] font-mono">
            <span className="font-bold uppercase tracking-wider text-[#3b82f6] text-[10px]">Takeaway:</span>
            <span className="text-[#aaa] text-right font-light text-[11px]">
              Turning random pantry ingredients into delicious meals with zero food waste.
            </span>
          </div>
        </motion.div>

        {/* Right Column: Formal Acknowledgement & Thank You Card (5 Cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="lg:col-span-5 rounded-lg bg-[#0d0d0d] border border-[#1a1a1a] p-5 shadow-xl text-center space-y-3.5"
        >
          <div className="inline-flex p-2.5 rounded bg-[#3b82f6]/10 text-[#3b82f6] border border-[#3b82f6]/30">
            <ChefHat className="w-7 h-7" />
          </div>

          <div>
            <h3 className="text-3xl font-light text-white font-display">
              Thank <span className="font-serif italic text-[#ccc]">You!</span>
            </h3>
            <p className="text-xs text-[#888] mt-0.5 font-light">Questions, Comments & Feedback are Welcome</p>
          </div>

          <div className="space-y-2 pt-2 border-t border-[#1a1a1a] text-left">
            <div className="flex items-center gap-2.5 p-2 rounded bg-[#050505] border border-[#222]">
              <div className="w-7 h-7 rounded bg-[#3b82f6]/10 text-[#3b82f6] flex items-center justify-center shrink-0 border border-[#3b82f6]/20">
                <User className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="text-[9px] font-mono uppercase tracking-wider text-[#666] block">Presented By</span>
                <span className="text-xs font-semibold text-white">{PRESENTER_INFO.presenter}</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-2 rounded bg-[#050505] border border-[#222]">
              <div className="w-7 h-7 rounded bg-[#3b82f6]/10 text-[#3b82f6] flex items-center justify-center shrink-0 border border-[#3b82f6]/20">
                <GraduationCap className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="text-[9px] font-mono uppercase tracking-wider text-[#666] block">Project Trainer</span>
                <span className="text-xs font-semibold text-white">{PRESENTER_INFO.trainer}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 pt-1 font-mono text-[10px]">
            {onRestart && (
              <button
                onClick={onRestart}
                className="flex items-center gap-1 px-3 py-1.5 rounded bg-[#050505] hover:bg-[#151515] text-[#aaa] border border-[#222] uppercase tracking-wider transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Replay Deck</span>
              </button>
            )}
            {onOpenSandbox && (
              <button
                onClick={onOpenSandbox}
                className="flex items-center gap-1 px-3 py-1.5 rounded bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-sm"
              >
                <Sparkles className="w-3 h-3" />
                <span>Live App Demo</span>
              </button>
            )}
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="pt-2 border-t border-[#1a1a1a] text-xs text-[#666] flex items-center justify-between font-mono text-[11px]">
        <span className="flex items-center gap-1 text-[#666]">
          Crafted for Software Project Evaluation • PantryPal 2026
        </span>
        <span className="text-[#3b82f6] font-bold uppercase tracking-wider text-[10px] flex items-center gap-1">
          <Heart className="w-3 h-3 text-[#3b82f6] fill-[#3b82f6]" />
          <span>Presentation Complete</span>
        </span>
      </div>
    </div>
  );
};
