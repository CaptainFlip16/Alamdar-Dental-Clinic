import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Calculator,
  CheckCircle2,
  Calendar,
  CreditCard,
} from 'lucide-react';
import { SERVICES } from '../data/clinicData';

interface SmileCalculatorProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const SmileCalculator: React.FC<SmileCalculatorProps> = ({ onOpenBooking }) => {
  const [selectedTreatments, setSelectedTreatments] = useState<string[]>([
    SERVICES[0].id, // Porcelain Veneers default
  ]);
  const [teethCount, setTeethCount] = useState<number>(4);
  const [installmentPlan, setInstallmentPlan] = useState<number>(6); // 6 months default

  const treatmentOptions = [
    {
      id: 'veneers',
      name: 'Handcrafted Porcelain Veneers',
      unitPrice: 25000,
      unit: 'per tooth',
      isPerTooth: true,
      category: 'Cosmetic',
    },
    {
      id: 'implants',
      name: 'Swiss Titanium Implant & Crown',
      unitPrice: 75000,
      unit: 'per implant',
      isPerTooth: true,
      category: 'Restorative',
    },
    {
      id: 'aligners',
      name: 'Clear Aligner System (Dual Arch)',
      unitPrice: 150000,
      unit: 'complete treatment',
      isPerTooth: false,
      category: 'Orthodontics',
    },
    {
      id: 'whitening',
      name: 'In-Clinic Laser Teeth Whitening',
      unitPrice: 22000,
      unit: 'full session',
      isPerTooth: false,
      category: 'Cosmetic',
    },
    {
      id: 'cleaning',
      name: 'Ultrasonic Scaling & Polishing',
      unitPrice: 5000,
      unit: 'full hygiene session',
      isPerTooth: false,
      category: 'Hygiene',
    },
  ];

  const toggleTreatment = (id: string) => {
    if (selectedTreatments.includes(id)) {
      if (selectedTreatments.length > 1) {
        setSelectedTreatments(selectedTreatments.filter((item) => item !== id));
      }
    } else {
      setSelectedTreatments([...selectedTreatments, id]);
    }
  };

  const calculateTotal = (): number => {
    let total = 0;
    treatmentOptions.forEach((opt) => {
      if (selectedTreatments.includes(opt.id)) {
        if (opt.isPerTooth) {
          total += opt.unitPrice * teethCount;
        } else {
          total += opt.unitPrice;
        }
      }
    });
    return total;
  };

  const grandTotal = calculateTotal();
  const monthlyInstallment = Math.round(grandTotal / installmentPlan);

  const formatPKR = (num: number) => {
    return 'PKR ' + num.toLocaleString('en-PK');
  };

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-[#F0F7FF]/60 border-y border-sky-100/80 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-sky-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with smooth viewport reveal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-14 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider shadow-2xs">
            <Calculator className="w-3.5 h-3.5 text-sky-600" />
            <span>Interactive Estimator</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Transparent pricing &{' '}
            <span className="bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent italic font-normal">
              flexible payment plans.
            </span>
          </h2>
          
          <p className="text-base text-slate-600 font-normal max-w-2xl mx-auto">
            Select your desired treatments to estimate your personalized investment. Every estimate includes our 3D digital simulation and follow-up care at Shop#1, Tanzeem school, Main Alamdar Road, Quetta.
          </p>
        </motion.div>

        {/* 2-Column Calculator Layout */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
          
          {/* Left Column: Treatment Configurator */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6"
          >
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                1. Select Desired Procedures
              </label>
              <div className="space-y-2.5">
                {treatmentOptions.map((opt) => {
                  const isSelected = selectedTreatments.includes(opt.id);
                  return (
                    <motion.div
                      key={opt.id}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      onClick={() => toggleTreatment(opt.id)}
                      className={`p-4 rounded-2xl border transition-colors duration-200 cursor-pointer flex items-center justify-between gap-3 ${
                        isSelected
                          ? 'bg-sky-50/70 border-sky-500 shadow-xs'
                          : 'bg-slate-50/70 border-slate-200 hover:border-sky-300 hover:bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-md flex items-center justify-center transition-colors duration-200 ${
                            isSelected
                              ? 'bg-[#0075FF] text-white'
                              : 'border border-slate-300 bg-white'
                          }`}
                        >
                          {isSelected && <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <div>
                          <div className="font-serif text-base font-semibold text-slate-900">
                            {opt.name}
                          </div>
                          <span className="text-[11px] font-semibold text-sky-700">
                            {opt.category} • {formatPKR(opt.unitPrice)} {opt.unit}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Teeth / Unit Slider */}
            {selectedTreatments.some((t) => ['veneers', 'implants'].includes(t)) && (
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    2. Quantity of Restorative Teeth / Units
                  </label>
                  <span className="text-sm font-bold text-sky-700 bg-sky-50 border border-sky-200 px-3 py-0.5 rounded-full">
                    {teethCount} {teethCount === 1 ? 'Tooth' : 'Teeth'}
                  </span>
                </div>

                <input
                  type="range"
                  min="1"
                  max="10"
                  value={teethCount}
                  onChange={(e) => setTeethCount(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0075FF]"
                />

                <div className="flex justify-between text-[11px] font-medium text-slate-400">
                  <span>1 Single Tooth</span>
                  <span>4 Front Aesthetic</span>
                  <span>6 Smile Zone</span>
                  <span>10 Full Arch</span>
                </div>
              </div>
            )}

            {/* Installment Tenure Selector */}
            <div className="pt-4 border-t border-slate-100 space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  3. Installment Duration (0% Markup Available)
                </label>
              </div>

              <div className="grid grid-cols-3 gap-2.5">
                {[3, 6, 12].map((months) => (
                  <button
                    key={months}
                    onClick={() => setInstallmentPlan(months)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                      installmentPlan === months
                        ? 'bg-slate-900 text-white shadow-xs scale-102'
                        : 'bg-slate-50 border border-slate-200 text-slate-700 hover:bg-sky-50 hover:border-sky-200 hover:text-sky-700'
                    }`}
                  >
                    {months} Months
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Crystal-Clear Total & Booking Card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 bg-gradient-to-br from-[#0B192C] via-[#0F233E] to-[#1E293B] text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-800 space-y-6 relative overflow-hidden"
          >
            {/* Subtle glow inside dark card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between border-b border-slate-700/80 pb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-sky-300">
                Investment Summary
              </span>
              <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/80 border border-emerald-700/50 px-2.5 py-0.5 rounded-full">
                0% Interest
              </span>
            </div>

            {/* Total Display with animated number feeling */}
            <div className="space-y-1">
              <span className="text-xs text-slate-400 block font-medium">Estimated Total Investment:</span>
              <div className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white transition-all duration-300">
                {formatPKR(grandTotal)}
              </div>
              <p className="text-[11px] text-sky-200/80 font-normal">
                Includes clinical consultation, 3D photography, and warranty documentation at Alamdar Road Quetta.
              </p>
            </div>

            {/* Monthly Installment Pill */}
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-300 flex items-center gap-1.5">
                  <CreditCard className="w-3.5 h-3.5 text-sky-300" />
                  <span>{installmentPlan}-Month Installment:</span>
                </span>
                <span className="text-sm font-bold text-sky-300 font-serif">
                  {formatPKR(monthlyInstallment)} / mo
                </span>
              </div>
              <p className="text-[10px] text-slate-400">
                Available for Meezan, HBL, Alfalah & Bank of Khyber cardholders.
              </p>
            </div>

            {/* Benefit Checkmarks */}
            <div className="space-y-2 text-xs text-slate-300 pt-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero hidden fees or surprise clinic charges</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Complimentary 3D digital simulation</span>
              </div>
            </div>

            {/* Booking CTA */}
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onOpenBooking(selectedTreatments[0])}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#0075FF] hover:bg-[#0060DF] text-white font-bold text-xs tracking-wide shadow-lg shadow-blue-600/30 transition-colors duration-200 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-sky-100" />
              <span>Book Consultation for this Plan</span>
            </motion.button>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
