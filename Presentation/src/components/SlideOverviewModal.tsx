import React from 'react';
import { X, ArrowRight, Layers } from 'lucide-react';
import { SlideData } from '../types/presentation';

interface OverviewProps {
  slides: SlideData[];
  currentSlideIndex: number;
  onSelectSlide: (index: number) => void;
  onClose: () => void;
}

export const SlideOverviewModal: React.FC<OverviewProps> = ({
  slides,
  currentSlideIndex,
  onSelectSlide,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md overflow-y-auto select-none">
      <div className="relative w-full max-w-5xl rounded-lg bg-[#0d0d0d] border border-[#1a1a1a] shadow-2xl p-6 md:p-8 text-[#e5e5e5] my-auto max-h-[90vh] overflow-y-auto">
        {/* Ambient Blur */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#3b82f6] opacity-10 blur-[100px] rounded-full pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#222] pb-4 mb-6 relative z-10">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-md bg-[#3b82f6]/10 text-[#3b82f6] border border-[#3b82f6]/30">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-light tracking-wider uppercase text-white">Presentation Slide Index</h2>
              <p className="text-[11px] uppercase tracking-widest text-[#666]">Complete 10-slide structural overview of PantryPal</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded bg-[#111] hover:bg-[#222] text-[#888] hover:text-white transition-colors cursor-pointer border border-[#222]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 10-Slide Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 relative z-10">
          {slides.map((s, idx) => (
            <div
              key={s.id}
              onClick={() => {
                onSelectSlide(idx);
                onClose();
              }}
              className={`p-3.5 rounded-lg border transition-all cursor-pointer flex flex-col justify-between h-36 ${
                currentSlideIndex === idx
                  ? 'bg-[#151515] border-[#3b82f6] shadow-xl shadow-[#3b82f6]/10 ring-1 ring-[#3b82f6]/50'
                  : 'bg-[#080808] border-[#1a1a1a] hover:border-[#3b82f6]/40 hover:bg-[#0f0f0f]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold text-[#3b82f6] tracking-wider">
                    SLIDE {s.id.toString().padStart(2, '0')}
                  </span>
                  <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-white/5 text-[#888] border border-white/10">
                    {s.category}
                  </span>
                </div>
                <h3 className="text-xs font-bold text-white font-sans line-clamp-2 leading-snug tracking-wide">
                  {s.title}
                </h3>
              </div>

              <div className="flex items-center justify-between text-[10px] text-[#666] pt-2 border-t border-[#1a1a1a]">
                <span className="truncate">{s.subtitle.slice(0, 20)}...</span>
                <ArrowRight className="w-3 h-3 text-[#3b82f6] shrink-0" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom hint */}
        <div className="mt-6 pt-4 border-t border-[#222] text-xs font-mono text-[#666] flex items-center justify-between relative z-10">
          <span className="uppercase tracking-wider text-[10px]">Click any slide card to jump directly</span>
          <span className="text-[#3b82f6] font-semibold uppercase tracking-widest text-[10px]">10/10 Slides Ready</span>
        </div>
      </div>
    </div>
  );
};
