import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES, getDirectImageUrl } from '../data/clinicData';
import { Service } from '../types';
import {
  Sparkles,
  Clock,
  CheckCircle2,
  Calendar,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (service: Service) => void;
  onOpenBooking: (serviceId?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onOpenBooking,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Specialties' },
    { id: 'Cosmetic', label: 'Smile Design & Veneers' },
    { id: 'Implant', label: 'Dental Implants' },
    { id: 'Orthodontics', label: 'Clear Aligners' },
    { id: 'General', label: 'Preventive & Hygiene' },
  ];

  const filteredServices = SERVICES.filter((service) => {
    if (selectedCategory === 'all') return true;
    return service.category === selectedCategory;
  });

  return (
    <section id="services" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Background soft ambient accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-sky-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with smooth viewport reveal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200/80 text-sky-800 text-xs font-bold uppercase tracking-wider shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Comprehensive Dental Care</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Tailored dental treatments,{' '}
            <span className="bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent italic font-normal">
              engineered for longevity.
            </span>
          </h2>
          
          <p className="text-base text-slate-600 font-normal max-w-2xl mx-auto">
            From porcelain veneers and Swiss dental implants to invisible aligners, our clinic at Shop#1, Tanzeem school, Main Alamdar Road, Quetta delivers precision dentistry with complete patient comfort.
          </p>
        </motion.div>

        {/* Category Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-2.5 overflow-x-auto pb-4 mb-10 no-scrollbar"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all duration-300 whitespace-nowrap cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#0075FF] text-white shadow-md shadow-blue-500/20 scale-102'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-sky-50 hover:border-sky-200 hover:text-sky-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Services Cards Grid with Staggered Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden flex flex-col justify-between hover:border-sky-300 hover:shadow-xl hover:shadow-sky-500/10 transition-colors duration-300 group will-change-transform"
              >
                <div>
                  {/* Service Photo with Floating Badges */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={getDirectImageUrl(service.imageUrl)}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out will-change-transform"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />

                    {/* Category Chip */}
                    <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-bold text-sky-800 shadow-sm">
                      {service.category}
                    </div>

                    {/* Starting price tag */}
                    <div className="absolute bottom-3.5 right-3.5 px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md text-[11px] font-bold text-white shadow-sm">
                      {service.startingPrice}
                    </div>
                  </div>

                  {/* Card Content Area */}
                  <div className="p-6 text-left space-y-3">
                    <div className="flex items-center gap-2 text-xs font-semibold text-sky-700">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Est. Duration: {service.duration}</span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-sky-700 transition-colors duration-300">
                      {service.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed line-clamp-2">
                      {service.shortDescription}
                    </p>

                    {/* Feature Bullets */}
                    <div className="pt-2 space-y-1.5 border-t border-slate-100">
                      {service.features.slice(0, 3).map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                          <span className="truncate">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-6 pt-0 flex items-center gap-3">
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={() => onSelectService(service)}
                    className="flex-1 py-3 px-4 rounded-2xl bg-sky-50 border border-sky-100 text-sky-800 hover:bg-sky-100 hover:border-sky-200 text-xs font-bold transition-colors duration-200 text-center cursor-pointer"
                  >
                    View Clinical Details
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onOpenBooking(service.id)}
                    className="p-3 rounded-2xl bg-[#0075FF] hover:bg-[#0060DF] text-white shadow-md shadow-blue-500/20 transition-colors duration-200 cursor-pointer"
                    title="Book this treatment"
                    aria-label={`Book ${service.name}`}
                  >
                    <Calendar className="w-4 h-4" />
                  </motion.button>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Reassurance Banner with entrance animation */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-sky-50 via-blue-50/70 to-cyan-50 border border-sky-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-left shadow-xs"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-[#0075FF] text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-slate-900">
                0% Easy Card Installments on All Specialized Care
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 font-normal">
                Spread treatment costs across 3, 6, or 12 monthly installments with major Pakistani banks in Quetta.
              </p>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.03, x: 2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onOpenBooking()}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold whitespace-nowrap shadow-md cursor-pointer shrink-0 transition-colors"
          >
            <span>Consult Our Specialists</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};
