import React, { useEffect } from 'react';
import { X, Calendar, Clock, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { Service } from '../types';
import { CLINIC_INFO, getDirectImageUrl } from '../data/clinicData';

interface ServiceDetailModalProps {
  service: Service | null;
  onClose: () => void;
  onBookService: (serviceId: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookService,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-2xl rounded-3xl sm:rounded-[36px] shadow-2xl border border-slate-200 overflow-hidden my-4 sm:my-6 text-left max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top High-Visibility Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 w-10 h-10 rounded-full bg-white/90 text-slate-700 flex items-center justify-center shadow-md border border-slate-200 hover:bg-white active:scale-95 transition-all cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-slate-800" />
        </button>

        <div className="overflow-y-auto">
          {/* Hero Header Image */}
          <div className="relative h-52 sm:h-60 bg-slate-100 overflow-hidden">
            <img
              src={getDirectImageUrl(service.imageUrl)}
              alt={service.name}
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent" />
            
            <div className="absolute bottom-4 left-5 right-14 text-white space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-sky-300 bg-slate-900/70 px-2.5 py-1 rounded-md backdrop-blur-xs">
                {service.category} Specialty
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                {service.name}
              </h3>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-5 sm:p-8 space-y-6">
            
            {/* Quick Details Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-sky-50 border border-sky-100 text-xs">
              <div>
                <span className="text-slate-500 block text-[11px] font-medium">Investment:</span>
                <span className="font-bold text-slate-900 text-sm">{service.startingPrice}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[11px] font-medium">Est. Duration:</span>
                <span className="font-bold text-sky-700">{service.duration}</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="text-slate-500 block text-[11px] font-medium">Clinical Location:</span>
                <span className="font-bold text-slate-900">Main Alamdar Rd, Quetta</span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Clinical Overview
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                {service.fullDescription}
              </p>
            </div>

            {/* Key Advantages / Features */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                What Is Included in Your Treatment
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {service.features.map((feat, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800"
                  >
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pain-free reassurance note */}
            <div className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-sky-50/70 border border-sky-100 text-xs text-sky-900">
              <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0" />
              <span>
                All procedures performed under computerized pain-free numbing with 0% installment options at Shop#1, Tanzeem school, Main Alamdar Road.
              </span>
            </div>

            {/* Bottom Actions */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-full border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 active:scale-95 transition-all cursor-pointer"
              >
                Close
              </button>

              <button
                onClick={() => onBookService(service.id)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0075FF] hover:bg-[#0060DF] text-white text-xs font-bold shadow-md shadow-blue-500/20 active:scale-98 transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-sky-100" />
                <span>Book This Treatment</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
