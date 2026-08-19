import React, { useEffect } from 'react';
import { X, Calendar, CheckCircle2, Award } from 'lucide-react';
import { Doctor } from '../types';
import { getDirectImageUrl } from '../data/clinicData';

interface DoctorDetailModalProps {
  doctor: Doctor | null;
  onClose: () => void;
  onBookDoctor: (doctorId: string) => void;
}

export const DoctorDetailModal: React.FC<DoctorDetailModalProps> = ({
  doctor,
  onClose,
  onBookDoctor,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (doctor) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [doctor, onClose]);

  if (!doctor) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-2xl rounded-3xl sm:rounded-[36px] shadow-2xl border border-slate-200 overflow-hidden my-4 sm:my-6 text-left max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* High-visibility Close Button (Pinned Top Right) */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 w-10 h-10 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center shadow-md border border-slate-200 hover:bg-slate-200 active:scale-95 transition-all cursor-pointer"
          aria-label="Close details"
        >
          <X className="w-5 h-5 text-slate-800" />
        </button>

        {/* Modal Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 overflow-y-auto">
          
          {/* Left / Top Doctor Photo */}
          <div className="md:col-span-5 relative bg-slate-100 h-72 sm:h-84 md:h-auto min-h-[260px] flex items-center justify-center overflow-hidden">
            <img
              src={getDirectImageUrl(doctor.imageUrl)}
              alt={doctor.name}
              className="w-full h-full object-cover object-top"
              loading="eager"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.includes('unsplash.com')) {
                  target.src = 'https://images.unsplash.com/photo-1594824813589-40b5c16e788c?auto=format&fit=crop&w=800&q=80';
                }
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent md:hidden pointer-events-none" />
            <div className="absolute bottom-3 left-3 right-16 p-2 rounded-xl bg-white/95 backdrop-blur-md text-xs font-bold text-sky-800 shadow-sm md:hidden truncate">
              {doctor.experience}
            </div>
          </div>

          {/* Right / Bottom Info */}
          <div className="md:col-span-7 p-5 sm:p-7 md:p-8 flex flex-col justify-between space-y-5">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-sky-800 text-[11px] font-bold uppercase tracking-wider mb-2 border border-sky-100">
                <Award className="w-3 h-3 text-sky-600" />
                <span>{doctor.experience}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                {doctor.name}
              </h3>
              <p className="text-xs sm:text-sm text-sky-700 font-bold mt-0.5 mb-3">
                {doctor.role}
              </p>

              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mb-4">
                {doctor.bio}
              </p>

              {/* Specializations */}
              <div className="space-y-2 mb-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Clinical Specializations
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {doctor.specialties.map((spec, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-sky-50 border border-sky-100 text-xs font-semibold text-sky-800"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Degrees & Fellowships */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Qualifications & Memberships
                </h4>
                {doctor.credentials.map((cred, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                    <span>{cred}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Bottom CTAs */}
            <div className="pt-4 border-t border-slate-100 flex items-center gap-2.5 sm:gap-3">
              <button
                onClick={onClose}
                className="px-4 sm:px-5 py-3 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50 active:scale-95 text-xs font-bold transition-all cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => onBookDoctor(doctor.id)}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 rounded-full bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-500 hover:to-blue-600 text-white text-xs font-bold shadow-md shadow-sky-600/20 active:scale-98 transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-sky-100" />
                <span>Book with {doctor.name.split(' ')[1] || doctor.name}</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
