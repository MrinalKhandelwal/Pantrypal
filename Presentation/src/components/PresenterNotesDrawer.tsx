import React from 'react';
import { X, FileText, User, GraduationCap } from 'lucide-react';
import { SlideData } from '../types/presentation';
import { PRESENTER_INFO } from '../data/slidesData';

interface NotesDrawerProps {
  slide: SlideData;
  onClose: () => void;
}

export const PresenterNotesDrawer: React.FC<NotesDrawerProps> = ({ slide, onClose }) => {
  return (
    <div className="no-print fixed bottom-14 right-4 sm:right-6 w-full max-w-md bg-[#0d0d0d]/95 border border-[#1a1a1a] rounded-lg shadow-2xl backdrop-blur-xl p-4 sm:p-5 z-40 text-[#e5e5e5] select-none animate-in fade-in slide-in-from-bottom-4 duration-200">
      {/* Drawer Header */}
      <div className="flex items-center justify-between border-b border-[#222] pb-3 mb-3">
        <div className="flex items-center gap-2">
          <div className="p-1 rounded bg-[#3b82f6]/10 text-[#3b82f6] border border-[#3b82f6]/30">
            <FileText className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Speaker Notes (Slide {slide.id}: {slide.title})
            </h4>
            <span className="text-[10px] uppercase tracking-widest text-[#666]">
              Guidance for Presenter: {PRESENTER_INFO.presenter}
            </span>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-1 rounded bg-[#111] hover:bg-[#222] text-[#888] hover:text-white transition-colors cursor-pointer border border-[#222]"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Talking points */}
      <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1 text-xs">
        <div className="text-[10px] uppercase tracking-[0.25em] text-[#3b82f6] font-bold">
          Recommended Talking Points:
        </div>
        {slide.speakerNotes.map((note, idx) => (
          <div key={idx} className="p-2.5 rounded-lg bg-[#050505] border border-[#1a1a1a] text-[#aaa] leading-relaxed">
            <span className="text-[#3b82f6] font-bold mr-1.5">•</span>
            {note}
          </div>
        ))}
      </div>

      {/* Footer info */}
      <div className="mt-3 pt-2.5 border-t border-[#222] flex items-center justify-between text-[10px] font-mono text-[#666]">
        <span className="flex items-center gap-1">
          <User className="w-3 h-3 text-[#3b82f6]" />
          <span className="text-[#888]">{PRESENTER_INFO.presenter}</span>
        </span>
        <span className="flex items-center gap-1 text-[#888]">
          <GraduationCap className="w-3 h-3 text-[#3b82f6]" />
          Trainer: <span className="text-white">{PRESENTER_INFO.trainer}</span>
        </span>
      </div>
    </div>
  );
};
