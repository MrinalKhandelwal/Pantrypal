import React, { useState, useEffect } from 'react';
import { 
  Grid, 
  FileText, 
  Sparkles, 
  Maximize2, 
  Minimize2, 
  Printer, 
  Clock, 
  ChefHat,
  Play,
  Pause
} from 'lucide-react';
import { SlideData } from '../types/presentation';
import { PRESENTER_INFO } from '../data/slidesData';

interface HeaderProps {
  currentSlide: SlideData;
  totalSlides: number;
  onOpenOverview: () => void;
  onToggleNotes: () => void;
  showNotes: boolean;
  onOpenSandbox: () => void;
  onPrint: () => void;
  isAutoPlaying: boolean;
  onToggleAutoPlay: () => void;
}

export const PresentationHeader: React.FC<HeaderProps> = ({
  currentSlide,
  totalSlides,
  onOpenOverview,
  onToggleNotes,
  showNotes,
  onOpenSandbox,
  onPrint,
  isAutoPlaying,
  onToggleAutoPlay
}) => {
  const [seconds, setSeconds] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  useEffect(() => {
    const timer = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  return (
    <header className="no-print h-14 bg-[#050505]/95 border-b border-[#222] backdrop-blur-md px-4 sm:px-6 flex items-center justify-between z-30 select-none">
      {/* Left: Project & Slide Indicator */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-md bg-[#3b82f6]/10 text-[#3b82f6] border border-[#3b82f6]/30">
            <ChefHat className="w-4 h-4" />
          </div>
          <div>
            <h1 className="text-sm sm:text-base font-light tracking-widest uppercase text-white leading-none">
              Pantry<span className="text-[#3b82f6] font-bold">Pal</span>
            </h1>
            <p className="text-[9px] uppercase tracking-widest text-[#666] leading-tight">
              Software Project Presentation
            </p>
          </div>
        </div>

        <div className="h-4 w-px bg-[#222] hidden sm:block" />

        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded bg-[#0d0d0d] border border-[#1a1a1a] text-[11px] font-mono font-bold text-[#3b82f6] tracking-wider">
            {currentSlide.id.toString().padStart(2, '0')} / {totalSlides.toString().padStart(2, '0')}
          </span>
          <span className="text-xs text-[#888] font-medium truncate max-w-[140px] sm:max-w-xs tracking-wide">
            {currentSlide.title}
          </span>
        </div>
      </div>

      {/* Center: Presenter & Trainer Badges (desktop) */}
      <div className="hidden lg:flex items-center gap-4 text-[11px] text-[#888] tracking-wider uppercase font-sans">
        <p>
          Presenter: <span className="text-white font-medium">{PRESENTER_INFO.presenter}</span>
        </p>
        <span className="text-[#444]">•</span>
        <p>
          Trainer: <span className="text-white font-medium">{PRESENTER_INFO.trainer}</span>
        </p>
      </div>

      {/* Right: Quick Action Controls */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        {/* Timer */}
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0d0d0d] border border-[#1a1a1a] text-[11px] font-mono text-[#888]">
          <Clock className="w-3.5 h-3.5 text-[#3b82f6]" />
          <span>{formatTime(seconds)}</span>
        </div>

        {/* AutoPlay Toggle */}
        <button
          onClick={onToggleAutoPlay}
          className={`p-2 rounded border transition-colors cursor-pointer ${
            isAutoPlaying
              ? 'bg-[#3b82f6]/20 border-[#3b82f6]/40 text-[#3b82f6]'
              : 'bg-[#0d0d0d] border-[#1a1a1a] text-[#888] hover:text-white hover:border-[#333]'
          }`}
          title={isAutoPlaying ? 'Pause Slideshow' : 'Autoplay Slideshow (10s)'}
        >
          {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>

        {/* Overview Grid Button */}
        <button
          onClick={onOpenOverview}
          className="p-2 rounded bg-[#0d0d0d] border border-[#1a1a1a] text-[#888] hover:text-white hover:border-[#333] transition-colors cursor-pointer"
          title="All 10 Slides Grid"
        >
          <Grid className="w-4 h-4" />
        </button>

        {/* Speaker Notes Toggle */}
        <button
          onClick={onToggleNotes}
          className={`p-2 rounded border transition-colors cursor-pointer ${
            showNotes
              ? 'bg-[#3b82f6]/20 border-[#3b82f6]/40 text-[#3b82f6]'
              : 'bg-[#0d0d0d] border-[#1a1a1a] text-[#888] hover:text-white hover:border-[#333]'
          }`}
          title="Toggle Presenter Notes"
        >
          <FileText className="w-4 h-4" />
        </button>

        {/* Live Sandbox Button */}
        <button
          onClick={onOpenSandbox}
          className="px-3 py-1.5 rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/30 text-[#3b82f6] text-[11px] uppercase tracking-widest font-bold hover:bg-[#3b82f6]/20 transition-all cursor-pointer flex items-center gap-1.5"
          title="Interactive PantryPal Simulation"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#3b82f6]" />
          <span className="hidden sm:inline">Live Demo</span>
        </button>

        {/* Print / Export PDF */}
        <button
          onClick={onPrint}
          className="p-2 rounded bg-[#0d0d0d] border border-[#1a1a1a] text-[#888] hover:text-white hover:border-[#333] transition-colors cursor-pointer hidden sm:block"
          title="Print / Save Deck as PDF"
        >
          <Printer className="w-4 h-4" />
        </button>

        {/* Fullscreen Button */}
        <button
          onClick={toggleFullscreen}
          className="p-2 rounded bg-[#0d0d0d] border border-[#1a1a1a] text-[#888] hover:text-white hover:border-[#333] transition-colors cursor-pointer"
          title="Toggle Fullscreen"
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </button>
      </div>
    </header>
  );
};
