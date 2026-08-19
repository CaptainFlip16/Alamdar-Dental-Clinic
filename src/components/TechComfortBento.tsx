import React from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  Camera,
  Layers,
  Heart,
  ShieldCheck,
  Zap,
  VolumeX,
  Coffee,
} from 'lucide-react';

export const TechComfortBento: React.FC = () => {
  const bentoItems = [
    {
      colSpan: 'lg:col-span-8',
      icon: Camera,
      title: '3D Intraoral Digital Scanner',
      subtitle: 'Zero Gooey Putty Impressions',
      description:
        'Captures 6,000 high-resolution dental photos per second to formulate a sub-millimeter 3D digital model of your jaw in under a minute on Main Alamdar Road.',
      badge: 'German Optics',
      bgClass: 'bg-gradient-to-br from-white via-sky-50/50 to-blue-50/40',
    },
    {
      colSpan: 'lg:col-span-4',
      icon: Zap,
      title: 'Computerized Painless Numbing',
      subtitle: 'Gentle Pressure Sensing',
      description:
        'Microprocessor-regulated anesthetic delivery guarantees effortless, pain-free injection protocols without needle sensation.',
      badge: 'Zero-Pain Guarantee',
      bgClass: 'bg-gradient-to-br from-white to-slate-50',
    },
    {
      colSpan: 'lg:col-span-4',
      icon: ShieldCheck,
      title: 'German Triple-Autoclave',
      subtitle: 'Hospital-Grade Sterilization',
      description:
        'Every single dental instrument undergoes ultrasonic cleaning, computerized sealing, and Class-B vacuum autoclave sterilization.',
      badge: '100% Sterile Protocol',
      bgClass: 'bg-gradient-to-br from-white to-slate-50',
    },
    {
      colSpan: 'lg:col-span-8',
      icon: Heart,
      title: 'Hospitality-Driven Comfort Lounge',
      subtitle: 'Unhurried, Calming Environment',
      description:
        'Relax in ergonomic memory-foam dental chairs, with noise-cancelling headphones and private consultation suites at Shop#1, Tanzeem school.',
      badge: 'Calm Sanctuary',
      bgClass: 'bg-gradient-to-br from-white via-sky-50/30 to-blue-50/50',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC] border-t border-slate-200/80 relative overflow-hidden">
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
            <Layers className="w-3.5 h-3.5 text-sky-600" />
            <span>Digital Suite & Patient Comfort</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Advanced medical technology,{' '}
            <span className="bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent italic font-normal">
              engineered around your comfort.
            </span>
          </h2>
          
          <p className="text-base text-slate-600 font-normal max-w-2xl mx-auto">
            We invest in state-of-the-art diagnostic equipment and human-centered ergonomics to ensure every appointment in Quetta is precise, calm, and pain-free.
          </p>
        </motion.div>

        {/* Bento Grid Layout with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 text-left">
          {bentoItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5, transition: { duration: 0.25, ease: 'easeOut' } }}
                className={`${item.colSpan} ${item.bgClass} rounded-3xl sm:rounded-[32px] p-7 sm:p-8 border border-slate-200 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-500/10 transition-colors duration-300 flex flex-col justify-between space-y-6 shadow-sm group will-change-transform`}
              >
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#0075FF] text-white flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-[11px] font-bold shadow-2xs">
                    {item.badge}
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-700 block">
                    {item.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-slate-900 group-hover:text-sky-800 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
