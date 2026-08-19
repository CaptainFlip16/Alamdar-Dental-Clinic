import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS } from '../data/clinicData';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2, Heart, MapPin } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const filterOptions = [
    { id: 'all', label: 'All Reviews (4.9 ★)' },
    { id: 'veneers', label: 'Porcelain Veneers' },
    { id: 'implants', label: 'Dental Implants' },
    { id: 'aligners', label: 'Clear Aligners' },
    { id: 'pain-free', label: 'Pain-Free Dentistry' },
  ];

  const filteredList = TESTIMONIALS.filter((t) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'veneers') return t.treatment.toLowerCase().includes('veneer');
    if (selectedFilter === 'implants') return t.treatment.toLowerCase().includes('implant');
    if (selectedFilter === 'aligners') return t.treatment.toLowerCase().includes('aligner');
    if (selectedFilter === 'pain-free') return t.treatment.toLowerCase().includes('pain') || t.quote.toLowerCase().includes('gentle') || t.quote.toLowerCase().includes('pain');
    return true;
  });

  const activeIndex = currentIndex % (filteredList.length || 1);
  const current = filteredList[activeIndex] || TESTIMONIALS[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredList.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredList.length) % filteredList.length);
  };

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-[#F8FAFC] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200/80 text-sky-800 text-xs font-bold uppercase tracking-wider shadow-2xs">
            <Heart className="w-3.5 h-3.5 text-sky-600" />
            <span>Patient Experiences</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Trusted by families{' '}
            <span className="bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent italic font-normal">
              across Quetta.
            </span>
          </h2>
          <p className="text-base text-slate-600 font-normal max-w-2xl mx-auto">
            Read how our gentle touch, modern 3D dentistry, and unhurried appointments at Shop#1, Tanzeem school, Main Alamdar Road have transformed dental visits into comfortable care.
          </p>
        </div>

        {/* Filter Badges */}
        <div className="flex items-center justify-center gap-2.5 overflow-x-auto pb-3 mb-10 no-scrollbar">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => {
                setSelectedFilter(opt.id);
                setCurrentIndex(0);
              }}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                selectedFilter === opt.id
                  ? 'bg-[#0075FF] text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-sky-50 hover:border-sky-200 hover:text-sky-700'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Highlight Testimonial Showcase Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl sm:rounded-[36px] p-8 sm:p-12 border border-slate-200 shadow-xl relative text-left">
          
          <Quote className="w-12 h-12 text-sky-200/80 absolute top-8 right-8 pointer-events-none" />

          <div className="space-y-6">
            {/* Stars */}
            <div className="flex items-center gap-1.5">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
              <span className="text-xs font-bold text-slate-500 ml-2">Verified Patient Review</span>
            </div>

            {/* Quote */}
            <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl text-slate-900 leading-relaxed font-normal">
              "{current.quote}"
            </blockquote>

            {/* Patient Details & Controls */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-serif text-lg font-bold text-slate-900">
                    {current.patientName}
                  </h4>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    Verified
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                  <MapPin className="w-3 h-3 text-sky-600" />
                  <span>{current.location}</span>
                  <span>•</span>
                  <span className="text-sky-700 font-semibold">{current.treatment}</span>
                  <span>•</span>
                  <span>{current.date}</span>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2 self-end sm:self-center">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full border border-slate-200 hover:border-sky-300 hover:bg-sky-50 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs font-bold text-slate-400 px-1">
                  {activeIndex + 1} / {filteredList.length}
                </span>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full border border-slate-200 hover:border-sky-300 hover:bg-sky-50 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
