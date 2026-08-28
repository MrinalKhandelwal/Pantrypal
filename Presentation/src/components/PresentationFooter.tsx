import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SlideData } from '../types/presentation';

interface FooterProps {
  currentSlideIndex: number;
  totalSlides: number;
  slides: SlideData[];
  onPrev: () => void;
  onNext: () => void;
  onSelectSlide: (index: number) => void;
}

export const PresentationFooter: React.FC<FooterProps> = ({
  currentSlideIndex,
  totalSlides,
  slides,
  onPrev,
  onNext,
  onSelectSlide,
}) => {
  const progressPercent = ((currentSlideIndex + 1) / totalSlides) * 100;

  return (
    <footer className="no-print h-14 bg-[#050505]/95 border-t border-[#222] backdrop-blur-md px-4 sm:px-6 flex flex-col justify-between z-30 select-none relative">
      {/* Top micro progress line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#1a1a1a] overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#3b82f6] via-[#60a5fa] to-[#93c5fd] transition-all duration-300 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className="h-full flex items-center justify-between">
        {/* Left: Previous Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={onPrev}
            disabled={currentSlideIndex === 0}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#0d0d0d] border border-[#1a1a1a] text-xs font-mono font-medium text-[#888] hover:text-white hover:border-[#333] disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4 text-[#888]" />
            <span className="hidden sm:inline uppercase tracking-wider text-[11px]">Prev</span>
          </button>
        </div>

        {/* Center: Slide Dots / Pill Buttons (1 to 10) */}
        <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto py-1">
          {slides.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => onSelectSlide(idx)}
              className={`h-7 px-2.5 sm:px-3 rounded text-[11px] font-mono font-bold transition-all cursor-pointer flex items-center justify-center ${
                currentSlideIndex === idx
                  ? 'bg-[#3b82f6] text-white shadow-lg shadow-[#3b82f6]/20 scale-105 border border-[#3b82f6]'
                  : 'bg-[#0d0d0d] border border-[#1a1a1a] text-[#777] hover:text-white hover:border-[#333]'
              }`}
              title={`${s.id}. ${s.title}`}
            >
              {s.id.toString().padStart(2, '0')}
            </button>
          ))}
        </div>

        {/* Right: Next Button & Shortcut hint */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-1.5 text-[10px] font-mono text-[#666]">
            <kbd className="px-1.5 py-0.5 rounded bg-[#0d0d0d] border border-[#1a1a1a] text-[#888]">
              ←
            </kbd>
            <kbd className="px-1.5 py-0.5 rounded bg-[#0d0d0d] border border-[#1a1a1a] text-[#888]">
              →
            </kbd>
            <span className="uppercase tracking-widest text-[9px]">Keys</span>
          </div>

          <button
            onClick={onNext}
            disabled={currentSlideIndex === totalSlides - 1}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-[#3b82f6] hover:bg-[#2563eb] text-white text-xs font-mono font-bold uppercase tracking-wider disabled:opacity-30 disabled:pointer-events-none transition-all shadow-lg shadow-[#3b82f6]/20 cursor-pointer"
          >
            <span className="hidden sm:inline text-[11px]">Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
