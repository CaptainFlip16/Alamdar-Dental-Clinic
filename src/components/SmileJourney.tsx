import React from 'react';
import { motion } from 'motion/react';
import {
  Calendar,
  Sparkles,
  Camera,
  Layers,
  Smile,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';

interface SmileJourneyProps {
  onOpenBooking: () => void;
}

export const SmileJourney: React.FC<SmileJourneyProps> = ({ onOpenBooking }) => {
  const steps = [
    {
      number: '01',
      icon: Camera,
      title: 'Digital Consultation & 3D Scan',
      duration: '45 Minutes',
      description:
        'Meet your specialist at Shop#1, Tanzeem school, Main Alamdar Road. We capture high-res intraoral 3D scans and facial photos to preview your new smile digitally.',
    },
    {
      number: '02',
      icon: Layers,
      title: 'Smile Mockup & Custom Planning',
      duration: '3–5 Days',
      description:
        'Review a trial smile physically in your mouth or virtually on screen. You inspect tooth shape, shade, and alignment before any actual procedure begins.',
    },
    {
      number: '03',
      icon: ShieldCheck,
      title: 'Painless Artistry & Placement',
      duration: 'Single / Dual Session',
      description:
        'With computerized painless numbing, our specialists gently bond your custom restorations or place your implants with microscopic precision.',
    },
    {
      number: '04',
      icon: Smile,
      title: 'Smile Reveal & 10-Yr Warranty',
      duration: 'Lifelong Care',
      description:
        'Walk out with radiant confidence. Receive your certification warranty card and ongoing preventive support in Quetta.',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white border-t border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with smooth viewport reveal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200/80 text-sky-800 text-xs font-bold uppercase tracking-wider shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>The 4-Step Process</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            How we design your{' '}
            <span className="bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent italic font-normal">
              dream smile.
            </span>
          </h2>
          
          <p className="text-base text-slate-600 font-normal max-w-2xl mx-auto">
            From initial 3D diagnostics to final placement, our protocol is transparent, unhurried, and comfortable from start to finish.
          </p>
        </motion.div>

        {/* 4 Steps Grid with Staggered Viewport Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
                className="bg-slate-50/80 rounded-3xl p-6 sm:p-7 border border-slate-200 hover:border-sky-300 hover:bg-white hover:shadow-xl hover:shadow-sky-500/10 transition-colors duration-300 flex flex-col justify-between space-y-6 group will-change-transform"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl sm:text-3xl font-bold text-sky-300 group-hover:text-[#0075FF] transition-colors duration-300">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-white border border-slate-200 text-sky-600 flex items-center justify-center shadow-xs group-hover:bg-[#0075FF] group-hover:text-white group-hover:border-blue-600 transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-sky-700 block mb-1">
                    {step.duration}
                  </span>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-sky-700">
                  <span>Step {step.number} Protocol</span>
                  <ChevronRight className="w-4 h-4 text-sky-500 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0075FF] hover:bg-[#0060DF] text-white text-xs sm:text-sm font-bold shadow-xl shadow-blue-500/20 cursor-pointer transition-colors"
          >
            <Calendar className="w-4 h-4 text-sky-100" />
            <span>Start Step 01: Schedule 3D Scan in Quetta</span>
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};
