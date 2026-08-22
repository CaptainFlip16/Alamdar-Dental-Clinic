import React from 'react';
import { X, Award, GraduationCap, Calendar, Check, Star, Sparkles } from 'lucide-react';
import { Doctor } from '../types';

interface DoctorModalProps {
  doctor: Doctor | null;
  onClose: () => void;
  onBookWithDoctor: (doctorId: string) => void;
}

export const DoctorModal: React.FC<DoctorModalProps> = ({
  doctor,
  onClose,
  onBookWithDoctor,
}) => {
  if (!doctor) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-slate-800 flex items-center justify-center shadow-md border border-slate-200 transition-all cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Doctor Header Banner */}
        <div className="p-6 sm:p-8 bg-gradient-to-br from-sky-50 via-blue-50/60 to-white border-b border-slate-200 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg shrink-0">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-1">
            <div className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-sky-600 text-white text-[11px] font-bold mb-1 shadow-2xs">
              <Sparkles className="w-3 h-3 text-sky-100" />
              <span>{doctor.role}</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
              {doctor.name}
            </h3>
            <p className="text-xs sm:text-sm text-sky-700 font-bold">
              {doctor.title}
            </p>
            <p className="text-xs text-slate-500 font-medium">
              {doctor.experience}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 text-left max-h-[55vh] overflow-y-auto">
          
          {/* Biography */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Philosophy & Background
            </h4>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              {doctor.bio}
            </p>
          </div>

          {/* Education & Credentials */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Education & Honors
            </h4>
            
            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
              <GraduationCap className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-slate-900">Degree & Residency</div>
                <div className="text-xs text-slate-600">{doctor.education}</div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
              <Award className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-slate-900">Accreditations</div>
                <div className="text-xs text-slate-600">
                  {Array.isArray(doctor.credentials) ? doctor.credentials.join(', ') : doctor.credentials}
                </div>
              </div>
            </div>
          </div>

          {/* Clinical Specialties */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
              Specialized Focus Areas
            </h4>
            <div className="flex flex-wrap gap-2">
              {doctor.specialties.map((spec, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-xs font-bold text-sky-800 flex items-center gap-1.5"
                >
                  <Check className="w-3.5 h-3.5 text-sky-600" />
                  {spec}
                </span>
              ))}
            </div>
          </div>

          {/* Weekly Availability */}
          <div className="p-3.5 rounded-2xl bg-sky-50/70 border border-sky-100 flex items-center justify-between text-xs">
            <span className="font-bold text-sky-900">Regular Clinic Days:</span>
            <span className="text-slate-700 font-bold">{doctor.availableDays.join(', ')}</span>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-white border-t border-slate-200 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-full border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 cursor-pointer"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onBookWithDoctor(doctor.id);
            }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-500 hover:to-blue-600 text-white text-xs font-bold shadow-md shadow-sky-600/20 transition-all cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-sky-100" />
            <span>Book with {doctor.name.split(',')[0]}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
