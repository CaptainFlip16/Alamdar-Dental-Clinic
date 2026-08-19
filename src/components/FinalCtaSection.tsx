import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Phone, Sparkles, ShieldCheck, MapPin } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface FinalCtaSectionProps {
  onOpenBooking: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 sm:py-28 bg-[#1E293B] relative overflow-hidden">
      
      {/* Ambient background glows */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-gradient-to-br from-[#0B192C] via-[#0F233E] to-[#1E293B] rounded-3xl sm:rounded-[44px] p-8 sm:p-14 lg:p-16 border border-slate-700/80 shadow-2xl text-center max-w-5xl mx-auto space-y-8 relative overflow-hidden text-white"
        >
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-sky-200 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-sky-300" />
            <span>Accepting New Patients in Quetta</span>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]">
              Ready to experience dentistry{' '}
              <span className="bg-gradient-to-r from-sky-300 via-sky-200 to-blue-200 bg-clip-text text-transparent italic font-normal">
                crafted with empathy?
              </span>
            </h2>
            
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
              Join over 20,000 satisfied patients. Schedule your personalized 3D consultation at Alamdar Bright Smile Dental Clinic at Shop#1, Tanzeem school, Main Alamdar Road, Quetta.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0075FF] hover:bg-[#0060DF] text-white text-xs sm:text-sm font-bold shadow-xl shadow-blue-600/30 cursor-pointer transition-colors"
            >
              <Calendar className="w-4 h-4 text-sky-100" />
              <span>Schedule 3D Consultation</span>
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href={`tel:${CLINIC_INFO.mobile.replace(/[^0-9+]/g, '')}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/20 text-xs sm:text-sm font-bold backdrop-blur-md cursor-pointer transition-colors"
            >
              <Phone className="w-4 h-4 text-sky-300" />
              <span>Call: {CLINIC_INFO.phone}</span>
            </motion.a>
          </div>

          {/* Reassurance points */}
          <div className="pt-8 border-t border-slate-700/60 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Computerized Pain-Free Protocol</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Main Alamdar Road, Quetta</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
              <span>0% 12-Month Installments</span>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
