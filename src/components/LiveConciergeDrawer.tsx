import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MessageCircle,
  X,
  Phone,
  Calendar,
  Send,
  ShieldAlert,
  Clock,
  Sparkles,
  MapPin,
  CheckCircle2,
} from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface LiveConciergeDrawerProps {
  onOpenBooking: () => void;
}

export const LiveConciergeDrawer: React.FC<LiveConciergeDrawerProps> = ({ onOpenBooking }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [quickQuestion, setQuickQuestion] = useState<string>('');

  const quickPrompts = [
    'How much do porcelain veneers cost?',
    'Do you offer pain-free treatments?',
    'Where is your clinic on Alamdar Road Quetta?',
    'I have a dental emergency right now',
  ];

  const handleSendWhatsApp = (customMsg?: string) => {
    const textToSend = customMsg || quickQuestion || 'Hello! I would like to inquire about dental treatments at Alamdar Bright Smile Dental Clinic on Main Alamdar Road, Quetta.';
    const encoded = encodeURIComponent(textToSend);
    const whatsappUrl = `https://wa.me/${CLINIC_INFO.mobile.replace(/[^0-9]/g, '')}?text=${encoded}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Floating Pill Trigger (Fixed bottom-left on desktop & tablet) */}
      <div className="fixed bottom-6 left-6 z-40 hidden sm:block">
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white text-slate-800 border border-slate-200 shadow-xl hover:shadow-2xl hover:border-sky-300 transition-all cursor-pointer text-xs font-bold"
          aria-label="Open Studio Concierge"
        >
          <div className="w-6 h-6 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center">
            <MessageCircle className="w-3.5 h-3.5" />
          </div>
          <span>Clinic Chat</span>
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        </motion.button>
      </div>

      {/* Floating Concierge Modal / Drawer */}
      <AnimatePresence>
        {isOpen && (
          <div
            className="fixed inset-0 z-50 overflow-hidden bg-slate-900/50 backdrop-blur-xs flex items-end sm:items-end sm:justify-start p-4 sm:p-6"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.96 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="bg-white w-full max-w-md rounded-3xl shadow-2xl border border-slate-200 overflow-hidden text-left"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-5 bg-gradient-to-r from-[#0B192C] to-[#1E293B] text-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#0075FF] text-white flex items-center justify-center shadow-sm">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-white">
                      Alamdar Bright Smile
                    </h3>
                    <div className="flex items-center gap-1.5 text-[11px] text-sky-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Online • Main Alamdar Road Quetta</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close concierge"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Body */}
              <div className="p-5 space-y-4 max-h-[60vh] overflow-y-auto">
                {/* Greeting Bubble */}
                <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-100 text-xs text-slate-800 space-y-1.5">
                  <p className="font-bold text-slate-900">
                    Assalam-o-Alaikum! Welcome to Alamdar Bright Smile Dental Clinic.
                  </p>
                  <p className="text-slate-600 font-normal leading-relaxed">
                    How may we assist you today? You can connect directly on WhatsApp with our clinical coordinator at Shop#1, Tanzeem school, Main Alamdar Road, Quetta:
                  </p>
                </div>

                {/* Quick Prompts */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Frequently Requested:
                  </span>
                  <div className="flex flex-col gap-1.5">
                    {quickPrompts.map((prompt, i) => (
                      <button
                        key={i}
                        onClick={() => handleSendWhatsApp(prompt)}
                        className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 text-left hover:bg-sky-50 hover:border-sky-300 transition-all flex items-center justify-between group cursor-pointer"
                      >
                        <span className="line-clamp-1 font-medium">{prompt}</span>
                        <Send className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Direct Custom WhatsApp Message Box */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Chat with Quetta Coordinator on WhatsApp:
                  </span>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="Type your message..."
                      value={quickQuestion}
                      onChange={(e) => setQuickQuestion(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') handleSendWhatsApp();
                      }}
                      className="flex-1 px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:bg-white"
                    />
                    <button
                      onClick={() => handleSendWhatsApp()}
                      className="px-4 py-2 rounded-xl bg-[#0075FF] hover:bg-[#0060DF] text-white text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Chat</span>
                    </button>
                  </div>
                </div>

                {/* Emergency & Studio Info */}
                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 space-y-1.5 text-xs text-slate-800">
                  <div className="flex items-center gap-2 font-bold">
                    <ShieldAlert className="w-4 h-4 text-amber-500" />
                    <span>24/7 Dental Emergency Quetta:</span>
                  </div>
                  <a
                    href={`tel:${CLINIC_INFO.emergencyPhone}`}
                    className="block font-mono font-bold text-sm text-sky-700 hover:underline"
                  >
                    {CLINIC_INFO.emergencyPhone}
                  </a>
                </div>

                {/* Quick Booking CTA in Concierge */}
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3 rounded-2xl bg-[#0075FF] hover:bg-[#0060DF] text-white text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md shadow-blue-500/20"
                >
                  <Calendar className="w-4 h-4 text-sky-100" />
                  <span>Open Full Appointment Scheduler</span>
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
