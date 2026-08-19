import React from 'react';
import { motion } from 'motion/react';
import { CLINIC_INFO } from '../data/clinicData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const handleBrowseServices = () => {
    const servicesElement = document.querySelector('#services');
    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const transitionConfig = {
    duration: 0.8,
    ease: [0.16, 1, 0.3, 1], // Smooth cubic-bezier curve
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen w-full bg-[#1E293B] p-2 sm:p-4 lg:p-6 flex flex-col justify-between overflow-hidden"
    >
      {/* Outer Rounded Container Frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.985 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex-1 w-full rounded-[28px] sm:rounded-[36px] lg:rounded-[44px] overflow-hidden flex flex-col justify-between shadow-2xl border border-slate-700/50"
      >
        
        {/* Full-Bleed Background Dental Patient & Doctor Imagery */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img
            initial={{ scale: 1.06, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=2400&q=90"
            alt="Dental care at Alamdar Bright Smile Dental Clinic"
            className="w-full h-full object-cover object-[center_35%] will-change-transform"
            loading="eager"
          />
          {/* Subtle contrast gradient overlays for high legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-slate-900/20 pointer-events-none" />
          <div className="absolute inset-0 bg-radial from-transparent via-slate-950/30 to-slate-950/70 pointer-events-none" />
        </div>

        {/* Top Spacer for floating pill navbar */}
        <div className="h-24 sm:h-28" />

        {/* Bottom Hero Content Area */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-10 sm:pb-14 lg:pb-16 pt-32 sm:pt-44">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            
            {/* BOTTOM LEFT: Avatar group + "Strong Teeth Bright Smile" */}
            <div className="lg:col-span-7 space-y-4 text-left">
              
              {/* 3 Overlapping Avatars + 20K+ Satisfied Clients */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...transitionConfig, delay: 0.2 }}
                className="flex items-center gap-3"
              >
                <div className="flex -space-x-2.5 overflow-hidden p-0.5">
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover shadow-sm transition-transform duration-300 hover:scale-110 hover:z-10"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                    alt="Patient avatar"
                  />
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover shadow-sm transition-transform duration-300 hover:scale-110 hover:z-10"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                    alt="Patient avatar"
                  />
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover shadow-sm transition-transform duration-300 hover:scale-110 hover:z-10"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80"
                    alt="Patient avatar"
                  />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold text-white leading-tight">
                    20K+
                  </span>
                  <span className="text-[11px] font-medium text-slate-200/90 leading-tight">
                    Satisfied Clients
                  </span>
                </div>
              </motion.div>

              {/* Exact Screenshot Typography: "Strong Teeth" (Sans) & "Bright Smile" (Italic Serif) */}
              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...transitionConfig, delay: 0.35 }}
                className="text-white tracking-tight leading-[0.98]"
              >
                <span className="block font-sans font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-[76px] drop-shadow-md">
                  Strong Teeth
                </span>
                <span className="block font-serif italic font-normal text-4xl sm:text-6xl md:text-7xl lg:text-[76px] text-sky-100 drop-shadow-md mt-1">
                  Bright Smile
                </span>
              </motion.h1>
            </div>

            {/* BOTTOM RIGHT: Paragraph + Two Pill Buttons */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...transitionConfig, delay: 0.45 }}
                className="text-sm sm:text-base lg:text-lg text-slate-100/95 font-normal leading-relaxed max-w-md drop-shadow-sm"
              >
                Modern dentistry designed to keep your smile strong and confident, relax we'll take care of your smile.
              </motion.p>

              {/* Action Buttons with subtle hover lift and scale */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...transitionConfig, delay: 0.55 }}
                className="flex flex-wrap items-center gap-3.5 pt-1"
              >
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  onClick={onOpenBooking}
                  className="px-7 sm:px-8 py-3.5 rounded-full bg-[#0075FF] hover:bg-[#0060DF] text-white transition-colors text-xs sm:text-sm font-bold tracking-wide shadow-xl shadow-blue-600/30 cursor-pointer will-change-transform"
                >
                  Book Appointment
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  onClick={handleBrowseServices}
                  className="px-7 sm:px-8 py-3.5 rounded-full bg-white hover:bg-slate-100 text-slate-900 transition-colors text-xs sm:text-sm font-bold tracking-wide shadow-lg cursor-pointer will-change-transform"
                >
                  Browse Service
                </motion.button>
              </motion.div>
            </div>

          </div>
        </div>

      </motion.div>
    </section>
  );
};
