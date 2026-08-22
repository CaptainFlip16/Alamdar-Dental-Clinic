import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Award, Users, Smile, ShieldCheck } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const StatsTrust: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  const stats = [
    {
      icon: Smile,
      value: '20,000+',
      label: 'Happy Smiles Crafted',
      sublabel: 'Across Quetta & Balochistan',
    },
    {
      icon: Users,
      value: '99.6%',
      label: 'Patient Satisfaction',
      sublabel: 'Verified clinical feedback & ratings',
    },
    {
      icon: Award,
      value: 'PMDC Registered',
      label: 'Dr. Ejaz Hussain Nourozi',
      sublabel: 'BDS, RDS, C-endo | FJDC (Karachi)',
    },
    {
      icon: ShieldCheck,
      value: '100%',
      label: 'Digital 3D Workflow',
      sublabel: 'Zero impression mess or radiation risk',
    },
  ];

  const tickerItems = [
    'Dr. Ejaz Hussain Nourozi (BDS, RDS, C-endo)',
    'FJDC (Karachi) • PMDC Registered',
    'Shop#1, Tanzeem school, Main Alamdar Road Quetta',
    'Clinic Contacts: 03158034831 / 03170919977',
    'Specialist in Endodontics & Modern Root Canal (C-endo)',
    'Computerized Pain-Free Local Anesthesia',
    'German Class-B Triple Autoclave Sterilization',
    '0% Easy Card Installments',
  ];

  // Quadruple items to ensure seamless infinite looping without gaps on any screen width
  const fullTicker = [...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <section className="bg-gradient-to-b from-[#F0F9FF]/80 via-white to-slate-50 border-y border-slate-200/80 overflow-hidden">
      
      {/* Gentle, Readable Scrolling News Ticker Bar */}
      <div
        className="py-3 bg-[#0B192C] text-white border-b border-slate-800 overflow-hidden relative shadow-inner select-none cursor-pointer"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        title="Hover to pause ticker"
      >
        <motion.div
          animate={{ x: isPaused ? undefined : ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 65, // Gentle, comfortable reading speed
            ease: 'linear',
          }}
          className="flex w-max space-x-10 text-xs font-semibold uppercase tracking-widest text-sky-200 will-change-transform"
        >
          {fullTicker.map((item, idx) => (
            <div key={idx} className="flex items-center space-x-3 shrink-0">
              <span className="w-2 h-2 rounded-full bg-sky-400 shadow-xs shadow-sky-400" />
              <span className="text-slate-100 font-medium tracking-wider">{item}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Main 4-Column Stats Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5, transition: { duration: 0.25, ease: 'easeOut' } }}
                className="bg-white p-5 sm:p-6 rounded-3xl border border-slate-200 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-500/10 transition-colors duration-300 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 shadow-sm group cursor-default will-change-transform"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-50 to-sky-100 border border-sky-200/70 flex items-center justify-center text-sky-600 shrink-0 shadow-xs group-hover:scale-110 group-hover:bg-[#0075FF] group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <div className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                    {item.value}
                  </div>
                  <div className="text-xs font-bold text-sky-700 uppercase tracking-wide">
                    {item.label}
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium hidden sm:block">
                    {item.sublabel}
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
