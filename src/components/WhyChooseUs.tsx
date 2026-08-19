import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ShieldCheck,
  Sparkles,
  HeartHandshake,
  Cpu,
  CheckCircle2,
  Calendar,
} from 'lucide-react';
import { getDirectImageUrl } from '../data/clinicData';

interface WhyChooseUsProps {
  onOpenBooking: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenBooking }) => {
  const [activePillarIndex, setActivePillarIndex] = useState<number>(0);

  const pillars = [
    {
      id: 'gentle',
      icon: HeartHandshake,
      title: 'Zero-Pain Gentle Philosophy',
      tagline: 'Empathetic care designed specifically to eradicate dental anxiety.',
      description:
        'We utilize computer-controlled local anesthesia and soothing comfort protocols at Shop#1, Tanzeem school, Main Alamdar Road so you never experience needle discomfort or procedure stress in Quetta.',
      bullets: [
        'Computerized painless anesthetic delivery',
        'Noise-cancelling headphones with curated audio',
        'Unhurried appointments with patient-led pacing',
      ],
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=85',
      badge: 'Pain-Free Certified',
    },
    {
      id: 'tech',
      icon: Cpu,
      title: 'German & Swiss Digital Precision',
      tagline: 'Leading-edge 3D scanning, CAD/CAM milling & low-dose digital imaging.',
      description:
        'Say goodbye to gooey impression trays. Our 3D intraoral scanner maps your teeth in 60 seconds with microscopic accuracy, enabling same-day veneer and crown previewing right on Main Alamdar Road.',
      bullets: [
        'Zero-putty 3D digital impressions',
        'German Class-B triple vacuum sterilization',
        'Swiss Straumann® certified implant components',
      ],
      image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1000&q=85',
      badge: '100% Digital Workflow',
    },
    {
      id: 'specialists',
      icon: ShieldCheck,
      title: 'Consultant Specialist Team',
      tagline: 'PMDC and FCPS certified dental specialists with decades of proven mastery.',
      description:
        'Every smile transformation is planned collaboratively between prosthodontists, implantologists, and orthodontists trained in leading international clinical institutions.',
      bullets: [
        'PMDC Registered & verified faculty consultants',
        '10-Year written guarantee on porcelain restorations',
        'Over 20,000 successful procedures documented',
      ],
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=85',
      badge: 'PMDC Certified Team',
    },
  ];

  const current = pillars[activePillarIndex];

  return (
    <section id="about" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-sky-100/50 rounded-full blur-3xl pointer-events-none -z-10" />

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
            <span>The Alamdar Bright Smile Standard</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Why patients across Quetta{' '}
            <span className="bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent italic font-normal">
              entrust us with their smiles.
            </span>
          </h2>
          
          <p className="text-base text-slate-600 font-normal max-w-2xl mx-auto">
            A sanctuary where medical precision, biocompatible materials, and soothing hospitality merge to redefine your dental journey on Main Alamdar Road.
          </p>
        </motion.div>

        {/* 2-Column Interactive Split Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center text-left">
          
          {/* Left Column: Interactive Pillar Selector */}
          <div className="lg:col-span-6 space-y-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              const isSelected = activePillarIndex === idx;
              return (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ scale: 1.01 }}
                  onClick={() => setActivePillarIndex(idx)}
                  className={`p-6 rounded-3xl border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-br from-sky-50 to-blue-50/50 border-sky-300 shadow-lg shadow-sky-500/10'
                      : 'bg-white border-slate-200 hover:border-sky-200 hover:bg-slate-50/70'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isSelected
                          ? 'bg-[#0075FF] text-white shadow-md shadow-blue-500/25 scale-105'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-900">
                          {pillar.title}
                        </h3>
                        {isSelected && (
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#0075FF] text-white shadow-2xs">
                            Active
                          </span>
                        )}
                      </div>
                      
                      <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                        {pillar.tagline}
                      </p>

                      {isSelected && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="pt-3 space-y-2 border-t border-sky-200/60 mt-3"
                        >
                          <p className="text-xs text-slate-700 font-normal leading-relaxed">
                            {pillar.description}
                          </p>
                          <div className="space-y-1.5 pt-1">
                            {pillar.bullets.map((b, bIdx) => (
                              <div key={bIdx} className="flex items-center gap-2 text-xs text-slate-800">
                                <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                                <span>{b}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}

            <div className="pt-2">
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow-md transition-colors duration-200 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-sky-300" />
                <span>Visit Our Alamdar Road Clinic</span>
              </motion.button>
            </div>
          </div>

          {/* Right Column: Dynamic Image Card with Crossfade */}
          <div className="lg:col-span-6 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-[36px] overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-slate-900"
              >
                <img
                  src={getDirectImageUrl(current.image)}
                  alt={current.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                {/* Floating Badge */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/80 shadow-xl flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">
                      {current.title}
                    </span>
                    <span className="text-[11px] text-sky-700 font-semibold">
                      Main Alamdar Road, Quetta
                    </span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-[11px] font-bold">
                    {current.badge}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
