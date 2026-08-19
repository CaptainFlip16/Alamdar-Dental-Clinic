import React from 'react';
import { motion } from 'motion/react';
import { DOCTORS, getDirectImageUrl } from '../data/clinicData';
import { Doctor } from '../types';
import { Award, Calendar, CheckCircle2, ShieldCheck, ChevronRight } from 'lucide-react';

interface DoctorsSectionProps {
  onSelectDoctor: (doctor: Doctor) => void;
  onOpenBooking: (serviceId?: string, doctorId?: string) => void;
}

export const DoctorsSection: React.FC<DoctorsSectionProps> = ({
  onSelectDoctor,
  onOpenBooking,
}) => {
  return (
    <section id="doctors" className="py-20 sm:py-28 bg-[#F8FAFC] border-t border-slate-200/80 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-sky-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

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
            <Award className="w-3.5 h-3.5 text-sky-600" />
            <span>Consultant Clinical Faculty</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Meet the clinical specialists{' '}
            <span className="bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent italic font-normal">
              dedicated to your care.
            </span>
          </h2>
          
          <p className="text-base text-slate-600 font-normal max-w-2xl mx-auto">
            Our team combines international training, PMDC certifications, and a compassionate touch to ensure every treatment on Main Alamdar Road, Quetta exceeds your expectations.
          </p>
        </motion.div>

        {/* 3-Column Doctors Grid with Staggered Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DOCTORS.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
              className="bg-white rounded-3xl sm:rounded-[32px] border border-slate-200 overflow-hidden flex flex-col justify-between hover:border-sky-300 hover:shadow-xl hover:shadow-sky-500/10 transition-colors duration-300 group will-change-transform"
            >
              <div>
                {/* Doctor Portrait Image */}
                <div className="relative aspect-[4/4.5] overflow-hidden bg-slate-100">
                  <img
                    src={getDirectImageUrl(doctor.imageUrl)}
                    alt={doctor.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out will-change-transform"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.includes('unsplash.com')) {
                        target.src =
                          'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80';
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent pointer-events-none" />

                  {/* Experience Badge */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-white/60 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-slate-900 block">
                        {doctor.experience}
                      </span>
                      <span className="text-[10px] text-sky-700 font-bold uppercase tracking-wider">
                        PMDC Verified
                      </span>
                    </div>
                    <ShieldCheck className="w-5 h-5 text-sky-600" />
                  </div>
                </div>

                {/* Content info */}
                <div className="p-6 text-left space-y-3">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                      {doctor.name}
                    </h3>
                    <p className="text-xs font-bold text-sky-700 mt-0.5">
                      {doctor.role}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed line-clamp-3">
                    {doctor.bio}
                  </p>

                  {/* Specialties Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {doctor.specialties.slice(0, 3).map((spec, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-lg bg-sky-50 border border-sky-100 text-[11px] font-semibold text-sky-800"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 flex items-center gap-3">
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={() => onSelectDoctor(doctor)}
                  className="flex-1 py-3 px-4 rounded-2xl bg-sky-50 border border-sky-100 text-sky-800 hover:bg-sky-100 hover:border-sky-200 text-xs font-bold transition-colors text-center cursor-pointer"
                >
                  View Credentials
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onOpenBooking(undefined, doctor.id)}
                  className="p-3 rounded-2xl bg-[#0075FF] hover:bg-[#0060DF] text-white shadow-md shadow-blue-500/20 transition-colors cursor-pointer"
                  title={`Book appointment with ${doctor.name}`}
                  aria-label={`Book appointment with ${doctor.name}`}
                >
                  <Calendar className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
