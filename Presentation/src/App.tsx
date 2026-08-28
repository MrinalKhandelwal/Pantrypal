import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SLIDES_LIST } from './data/slidesData';
import { Slide1Title } from './components/slides/Slide1Title';
import { Slide2Introduction } from './components/slides/Slide2Introduction';
import { Slide3ProblemStatement } from './components/slides/Slide3ProblemStatement';
import { Slide4Objectives } from './components/slides/Slide4Objectives';
import { Slide5Technologies } from './components/slides/Slide5Technologies';
import { Slide6Architecture } from './components/slides/Slide6Architecture';
import { Slide7KeyFeatures } from './components/slides/Slide7KeyFeatures';
import { Slide8ProjectDemo } from './components/slides/Slide8ProjectDemo';
import { Slide9ChallengesSolutions } from './components/slides/Slide9ChallengesSolutions';
import { Slide10Conclusion } from './components/slides/Slide10Conclusion';

import { PresentationHeader } from './components/PresentationHeader';
import { PresentationFooter } from './components/PresentationFooter';
import { SlideOverviewModal } from './components/SlideOverviewModal';
import { PresenterNotesDrawer } from './components/PresenterNotesDrawer';
import { InteractivePantrySandbox } from './components/InteractivePantrySandbox';
import { PrintAllSlidesView } from './components/PrintAllSlidesView';

export default function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [showOverview, setShowOverview] = useState<boolean>(false);
  const [showNotes, setShowNotes] = useState<boolean>(false);
  const [showSandbox, setShowSandbox] = useState<boolean>(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(false);

  const totalSlides = SLIDES_LIST.length; // Exactly 10 slides

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.min(totalSlides - 1, prev + 1));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.max(0, prev - 1));
  }, []);

  const goToSlide = (index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlideIndex(index);
    }
  };

  const restartDeck = () => {
    setCurrentSlideIndex(0);
  };

  // Keyboard navigation handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input or textarea
      if (
        document.activeElement?.tagName === 'INPUT' ||
        document.activeElement?.tagName === 'TEXTAREA'
      ) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'Home') {
        e.preventDefault();
        goToSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        goToSlide(totalSlides - 1);
      } else if (e.key === 'n' || e.key === 'N') {
        setShowNotes((prev) => !prev);
      } else if (e.key === 'o' || e.key === 'O') {
        setShowOverview((prev) => !prev);
      } else if (e.key === 'Escape') {
        setShowOverview(false);
        setShowSandbox(false);
        setShowNotes(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, totalSlides]);

  // Autoplay slideshow effect
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => {
        if (prev < totalSlides - 1) return prev + 1;
        setIsAutoPlaying(false);
        return prev;
      });
    }, 10000); // 10 seconds per slide

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const handlePrint = () => {
    window.print();
  };

  // Dynamic Slide Component mapping
  const renderSlideContent = (index: number) => {
    switch (index) {
      case 0:
        return <Slide1Title onNext={nextSlide} onOpenSandbox={() => setShowSandbox(true)} />;
      case 1:
        return <Slide2Introduction />;
      case 2:
        return <Slide3ProblemStatement />;
      case 3:
        return <Slide4Objectives />;
      case 4:
        return <Slide5Technologies />;
      case 5:
        return <Slide6Architecture />;
      case 6:
        return <Slide7KeyFeatures />;
      case 7:
        return <Slide8ProjectDemo onOpenSandbox={() => setShowSandbox(true)} />;
      case 8:
        return <Slide9ChallengesSolutions />;
      case 9:
        return (
          <Slide10Conclusion
            onRestart={restartDeck}
            onOpenSandbox={() => setShowSandbox(true)}
          />
        );
      default:
        return <Slide1Title onNext={nextSlide} />;
    }
  };

  const currentSlide = SLIDES_LIST[currentSlideIndex];

  return (
    <div className="h-screen w-screen flex flex-col bg-[#050505] text-[#e5e5e5] overflow-hidden select-none font-sans">
      {/* Top Navigation Bar */}
      <PresentationHeader
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onOpenOverview={() => setShowOverview(true)}
        onToggleNotes={() => setShowNotes((prev) => !prev)}
        showNotes={showNotes}
        onOpenSandbox={() => setShowSandbox(true)}
        onPrint={handlePrint}
        isAutoPlaying={isAutoPlaying}
        onToggleAutoPlay={() => setIsAutoPlaying((prev) => !prev)}
      />

      {/* Main Slide Canvas Display */}
      <main className="flex-1 w-full h-[calc(100vh-112px)] overflow-hidden relative flex items-center justify-center p-2 sm:p-4 bg-[#050505]">
        <div className="w-full h-full max-w-7xl mx-auto rounded-lg bg-[#050505] border border-[#1a1a1a] shadow-2xl overflow-hidden relative flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlideIndex}
              initial={{ opacity: 0, scale: 0.99 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.01 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="w-full h-full"
            >
              {renderSlideContent(currentSlideIndex)}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Bottom Controls Bar */}
      <PresentationFooter
        currentSlideIndex={currentSlideIndex}
        totalSlides={totalSlides}
        slides={SLIDES_LIST}
        onPrev={prevSlide}
        onNext={nextSlide}
        onSelectSlide={goToSlide}
      />

      {/* Modal: 10-Slide Overview Grid */}
      {showOverview && (
        <SlideOverviewModal
          slides={SLIDES_LIST}
          currentSlideIndex={currentSlideIndex}
          onSelectSlide={goToSlide}
          onClose={() => setShowOverview(false)}
        />
      )}

      {/* Drawer: Speaker Notes */}
      {showNotes && (
        <PresenterNotesDrawer
          slide={currentSlide}
          onClose={() => setShowNotes(false)}
        />
      )}

      {/* Modal: Interactive Live PantryPal Sandbox */}
      {showSandbox && (
        <InteractivePantrySandbox onClose={() => setShowSandbox(false)} />
      )}

      {/* Hidden Print View for 10-Slide Export */}
      <PrintAllSlidesView />
    </div>
  );
}
