import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TRANSFORMATION_CASES, getDirectImageUrl } from '../data/clinicData';
import { Sparkles, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

interface BeforeAfterSectionProps {
  onOpenBooking: () => void;
}

export const BeforeAfterSection: React.FC<BeforeAfterSectionProps> = ({ onOpenBooking }) => {
  const [activeCaseIndex, setActiveCaseIndex] = useState<number>(0);
  const [sliderPos, setSliderPos] = useState<number>(50); // percentage 0-100

  const activeCase = TRANSFORMATION_CASES[activeCaseIndex] || TRANSFORMATION_CASES[0];

  const handleNext = () => {
    setActiveCaseIndex((prev) => (prev + 1) % TRANSFORMATION_CASES.length);
    setSliderPos(50);
  };

  const handlePrev = () => {
    setActiveCaseIndex(
      (prev) => (prev - 1 + TRANSFORMATION_CASES.length) % TRANSFORMATION_CASES.length
    );
    setSliderPos(50);
  };

  return (
    <section id="results" className="py-20 sm:py-28 bg-white border-t border-slate-200/80 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-sky-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with smooth viewport reveal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-14 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200/80 text-sky-800 text-xs font-bold uppercase tracking-wider shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Clinical Results & Transformations</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Real smiles crafted with{' '}
            <span className="bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent italic font-normal">
              microscopic precision.
            </span>
          </h2>
          
          <p className="text-base text-slate-600 font-normal max-w-2xl mx-auto">
            Interact with the slider below to explore actual patient transformations delivered by our consultant specialists at Main Alamdar Road, Quetta.
          </p>
        </motion.div>

        {/* 2-Column Split Interactive Case Viewer */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
          
          {/* Left / Top: Interactive Before/After Split Comparison Slider */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCase.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-3xl sm:rounded-[36px] overflow-hidden shadow-2xl border border-slate-200 aspect-[4/3] select-none bg-slate-900"
              >
                {/* AFTER IMAGE (Base layer - fully visible) */}
                <img
                  src={getDirectImageUrl(activeCase.afterImage)}
                  alt={`${activeCase.title} - After Transformation`}
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />

                {/* BEFORE IMAGE (Clipped overlay - perfectly anchored without zooming or stretching) */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
                    WebkitClipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
                  }}
                >
                  <img
                    src={getDirectImageUrl(activeCase.beforeImage)}
                    alt={`${activeCase.title} - Before Treatment`}
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  />
                  {/* Before label tag */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider">
                    Before
                  </div>
                </div>

                {/* After label tag */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#0075FF]/90 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider pointer-events-none">
                  After
                </div>

                {/* Split Divider Handle Line */}
                <div
                  className="absolute top-0 bottom-0 w-0.5 bg-white shadow-2xl pointer-events-none z-10"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white text-slate-800 shadow-xl flex items-center justify-center border-2 border-sky-500 cursor-ew-resize">
                    <span className="text-xs font-bold font-mono">‹ ›</span>
                  </div>
                </div>

                {/* Touch / Mouse Range Slider Controller */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPos}
                  onChange={(e) => setSliderPos(Number(e.target.value))}
                  className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-20"
                  aria-label="Drag to compare before and after"
                />
              </motion.div>
            </AnimatePresence>

            <p className="text-center text-xs text-slate-500 font-medium mt-3">
              Drag the slider left or right to inspect clinical tooth texture and shade accuracy.
            </p>
          </div>

          {/* Right / Bottom: Clinical Case Details & Navigation */}
          <div className="lg:col-span-5 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
                {activeCase.category}
              </span>

              {/* Case Navigation Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="w-9 h-9 rounded-full bg-white border border-slate-200 hover:border-sky-300 hover:bg-sky-50 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Previous case"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-bold text-slate-500">
                  {activeCaseIndex + 1} / {TRANSFORMATION_CASES.length}
                </span>
                <button
                  onClick={handleNext}
                  className="w-9 h-9 rounded-full bg-white border border-slate-200 hover:border-sky-300 hover:bg-sky-50 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Next case"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-2">
                {activeCase.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                {activeCase.description}
              </p>
            </div>

            {/* Case Specs */}
            <div className="space-y-2.5 pt-2 border-t border-slate-200 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Lead Specialist:</span>
                <span className="font-bold text-slate-900">{activeCase.dentist}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Treatment Duration:</span>
                <span className="font-bold text-sky-700">{activeCase.duration}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Clinical Location:</span>
                <span className="font-medium text-slate-900">Main Alamdar Road Quetta</span>
              </div>
            </div>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenBooking}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#0075FF] hover:bg-[#0060DF] text-white text-xs font-bold shadow-md shadow-blue-500/20 transition-colors cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-sky-100" />
              <span>Book Your Transformation Consultation</span>
            </motion.button>
          </div>

        </div>

      </div>
    </section>
  );
};
