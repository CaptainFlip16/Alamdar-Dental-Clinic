import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_ITEMS, CLINIC_INFO } from '../data/clinicData';
import { Plus, Minus, Search, HelpCircle, Phone, MessageSquare } from 'lucide-react';

interface FaqSectionProps {
  onOpenBooking: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenBooking }) => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'general', label: 'General & Comfort' },
    { id: 'cosmetic', label: 'Treatments & Pricing' },
    { id: 'insurance', label: 'Payments & Installments' },
    { id: 'emergency', label: 'Emergencies' },
  ];

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-sky-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200/80 text-sky-800 text-xs font-bold uppercase tracking-wider shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5 text-sky-600" />
            <span>Common Questions</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Everything you need to know about{' '}
            <span className="bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent italic font-normal">
              our care.
            </span>
          </h2>
          <p className="text-base text-slate-600 font-normal max-w-2xl mx-auto">
            Clear, transparent answers regarding consultations, procedures, PKR pricing, and painless dental technology at Shop#1, Tanzeem school, Main Alamdar Road, Quetta.
          </p>
        </div>

        {/* Search Bar & Category Filters */}
        <div className="space-y-4 mb-10 max-w-2xl mx-auto">
          {/* Search Box */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search treatments, insurance, pricing in PKR..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:bg-white shadow-inner transition-colors"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#0075FF] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-sky-50 hover:text-sky-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-sky-50/60 border-sky-300 shadow-md shadow-sky-500/5'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {faq.question}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen
                          ? 'bg-[#0075FF] text-white rotate-180'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 font-normal leading-relaxed border-t border-sky-100 pt-3">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200">
              <p className="text-sm font-semibold text-slate-700">No matching questions found.</p>
              <p className="text-xs text-slate-500 mt-1">Try a different keyword or contact our Quetta clinic coordinator directly.</p>
            </div>
          )}
        </div>

        {/* Still Have Questions Bar */}
        <div className="mt-12 p-6 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-serif text-base sm:text-lg font-bold text-slate-900">
              Still have questions about treatments or appointments in Quetta?
            </h4>
            <p className="text-xs text-slate-600">
              Our clinical coordinator is available on WhatsApp or phone to guide you.
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href={`tel:${CLINIC_INFO.mobile.replace(/[^0-9+]/g, '')}`}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-bold"
            >
              <Phone className="w-3.5 h-3.5 text-sky-600" />
              <span>Call Coordinator</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#0075FF] hover:bg-[#0060DF] text-white text-xs font-bold shadow-xs cursor-pointer"
            >
              <span>Book Visit</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
