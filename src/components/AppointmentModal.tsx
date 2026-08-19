import React, { useState, useEffect } from 'react';
import {
  X,
  Calendar as CalendarIcon,
  Clock,
  User,
  Mail,
  Phone,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Heart,
  ShieldCheck,
  Download,
  AlertCircle
} from 'lucide-react';
import { SERVICES, DOCTORS, CLINIC_INFO } from '../data/clinicData';
import { AppointmentFormData } from '../types';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
  initialDoctorId?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialServiceId,
  initialDoctorId,
}) => {
  const [step, setStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);
  const [bookingRef, setBookingRef] = useState<string>('');

  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    email: '',
    phone: '',
    serviceId: initialServiceId || SERVICES[0].id,
    doctorId: initialDoctorId || 'any',
    preferredDate: '',
    preferredTime: '11:00 AM',
    isFirstVisit: true,
    hasDentalAnxiety: false,
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (initialServiceId) {
      setFormData((prev) => ({ ...prev, serviceId: initialServiceId }));
    }
    if (initialDoctorId) {
      setFormData((prev) => ({ ...prev, doctorId: initialDoctorId }));
    }
  }, [initialServiceId, initialDoctorId]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const defaultDateStr = tomorrow.toISOString().split('T')[0];
      
      setFormData((prev) => ({
        ...prev,
        preferredDate: prev.preferredDate || defaultDateStr,
      }));
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const timeSlots = [
    '10:30 AM',
    '11:30 AM',
    '12:30 PM',
    '02:30 PM',
    '03:30 PM',
    '04:30 PM',
    '05:30 PM',
    '06:30 PM',
    '07:30 PM',
  ];

  const validateStep = (currentStep: number): boolean => {
    const errs: Record<string, string> = {};
    if (currentStep === 1) {
      if (!formData.serviceId) errs.serviceId = 'Please select a treatment.';
    } else if (currentStep === 2) {
      if (!formData.preferredDate) errs.preferredDate = 'Please select an appointment date.';
      if (!formData.preferredTime) errs.preferredTime = 'Please pick an available time slot.';
    } else if (currentStep === 3) {
      if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name.';
      if (!formData.email.trim() || !formData.email.includes('@')) {
        errs.email = 'Please enter a valid email address.';
      }
      if (!formData.phone.trim() || formData.phone.length < 8) {
        errs.phone = 'Please enter a valid Pakistani contact number (e.g. 0333 1234567).';
      }
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(3)) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedRef = 'ALM-PK-' + Math.floor(100000 + Math.random() * 900000);
      setBookingRef(generatedRef);
      setIsConfirmed(true);
    }, 850);
  };

  const selectedService = SERVICES.find((s) => s.id === formData.serviceId) || SERVICES[0];
  const selectedDoctor = DOCTORS.find((d) => d.id === formData.doctorId);

  const generateIcsCalendar = () => {
    const calendarContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Alamdar Bright Smile Dental Clinic Quetta//Appointment Booking//EN
BEGIN:VEVENT
SUMMARY:${selectedService.name} - Alamdar Bright Smile Dental Clinic (Quetta)
DESCRIPTION:Consultation with ${selectedDoctor ? selectedDoctor.name : 'Consultant Dental Specialist'}. Booking Ref: ${bookingRef}
LOCATION:${CLINIC_INFO.address}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;
    const blob = new Blob([calendarContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Alamdar-Dental-${bookingRef}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-white w-full max-w-2xl rounded-3xl sm:rounded-[36px] shadow-2xl border border-slate-200 overflow-hidden my-6 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center shadow-md border border-slate-200 hover:bg-slate-200 active:scale-95 transition-all cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-slate-800" />
        </button>

        {/* Modal Header */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-sky-50 via-blue-50/60 to-white border-b border-slate-200">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-[#0075FF] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-sky-800">
              {CLINIC_INFO.name} • Main Alamdar Road, Quetta
            </span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
            {isConfirmed ? 'Appointment Confirmed' : `Reserve Consultation at ${CLINIC_INFO.name}`}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 font-normal mt-1">
            {isConfirmed
              ? 'We look forward to welcoming you at Shop#1, Tanzeem school, Main Alamdar Road, Quetta.'
              : 'Choose your desired service, specialist, and time. Pay comfortably at the clinic.'}
          </p>

          {/* Stepper */}
          {!isConfirmed && (
            <div className="flex items-center gap-2 mt-4 pt-3 border-t border-slate-200">
              {[
                { s: 1, label: 'Treatment' },
                { s: 2, label: 'Date & Time' },
                { s: 3, label: 'Patient Details' },
              ].map((st) => (
                <div key={st.s} className="flex items-center gap-2 flex-1">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                      step >= st.s
                        ? 'bg-[#0075FF] text-white'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {step > st.s ? '✓' : st.s}
                  </div>
                  <span
                    className={`text-xs font-bold hidden sm:inline ${
                      step === st.s ? 'text-slate-900' : 'text-slate-500'
                    }`}
                  >
                    {st.label}
                  </span>
                  {st.s < 3 && (
                    <div
                      className={`h-0.5 flex-1 ${
                        step > st.s ? 'bg-[#0075FF]' : 'bg-slate-200'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[62vh] overflow-y-auto">
          
          {/* CONFIRMATION SCREEN */}
          {isConfirmed ? (
            <div className="space-y-6 text-center py-2 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200 shadow-inner">
                <CheckCircle2 className="w-10 h-10 text-emerald-600" />
              </div>

              <div>
                <span className="text-xs font-mono font-bold tracking-widest bg-sky-50 text-sky-800 border border-sky-200 px-3 py-1 rounded-full">
                  REF: {bookingRef}
                </span>
                <h4 className="font-serif text-2xl font-bold text-slate-900 mt-3">
                  Thank You, {formData.fullName}!
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-md mx-auto font-normal">
                  A WhatsApp & SMS appointment confirmation has been dispatched to{' '}
                  <strong className="text-slate-900">{formData.email}</strong> / <strong className="text-slate-900">{formData.phone}</strong>.
                </p>
              </div>

              {/* Summary card */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 text-left space-y-3 shadow-xs">
                <div className="flex justify-between items-center text-xs pb-2 border-b border-slate-200">
                  <span className="text-slate-500 font-medium">Treatment:</span>
                  <span className="font-bold text-slate-900">{selectedService.name}</span>
                </div>
                <div className="flex justify-between items-center text-xs pb-2 border-b border-slate-200">
                  <span className="text-slate-500 font-medium">Specialist:</span>
                  <span className="font-bold text-slate-900">
                    {selectedDoctor ? selectedDoctor.name : 'First Available Consultant Specialist'}
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs pb-2 border-b border-slate-200">
                  <span className="text-slate-500 font-medium">Date & Time:</span>
                  <span className="font-bold text-sky-700">
                    {formData.preferredDate} at {formData.preferredTime}
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500 font-medium">Clinic Address:</span>
                  <span className="font-medium text-slate-900">{CLINIC_INFO.address}</span>
                </div>
              </div>

              {formData.hasDentalAnxiety && (
                <div className="p-3.5 bg-sky-50 rounded-2xl border border-sky-200 text-xs text-sky-900 flex items-center justify-center gap-2">
                  <Heart className="w-4 h-4 text-sky-600" />
                  <span>
                    <strong>Comfort Protocol Active:</strong> Zero-pain numbing and extra care arranged for your appointment.
                  </span>
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={generateIcsCalendar}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-800 hover:bg-slate-50 shadow-xs cursor-pointer"
                >
                  <Download className="w-4 h-4 text-sky-600" />
                  <span>Add to Calendar (.ics)</span>
                </button>

                <button
                  onClick={onClose}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-2.5 rounded-full bg-[#0075FF] text-white hover:bg-[#0060DF] text-xs font-bold shadow-md shadow-blue-500/20 cursor-pointer"
                >
                  <span>Done</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              
              {/* STEP 1: SERVICE & DOCTOR */}
              {step === 1 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                      Select Treatment Category
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {SERVICES.map((srv) => (
                        <div
                          key={srv.id}
                          onClick={() => setFormData({ ...formData, serviceId: srv.id })}
                          className={`p-3.5 rounded-2xl border text-left cursor-pointer transition-all ${
                            formData.serviceId === srv.id
                              ? 'bg-sky-50 border-sky-500 shadow-xs'
                              : 'bg-white border-slate-200 hover:border-sky-300'
                          }`}
                        >
                          <div className="font-serif text-sm font-bold text-slate-900">
                            {srv.name}
                          </div>
                          <div className="text-[11px] text-slate-500 mt-0.5 flex items-center justify-between">
                            <span>{srv.duration}</span>
                            <span className="font-bold text-sky-700">{srv.startingPrice}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    {errors.serviceId && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.serviceId}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                      Consultant Doctor (Optional)
                    </label>
                    <select
                      value={formData.doctorId}
                      onChange={(e) => setFormData({ ...formData, doctorId: e.target.value })}
                      className="w-full p-3 rounded-2xl bg-white border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    >
                      <option value="any">First Available Specialist (Recommended)</option>
                      {DOCTORS.map((doc) => (
                        <option key={doc.id} value={doc.id}>
                          {doc.name} — {doc.role}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              {/* STEP 2: DATE & TIME */}
              {step === 2 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Appointment Date
                    </label>
                    <input
                      type="date"
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full p-3.5 rounded-2xl bg-white border border-slate-200 text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                    {errors.preferredDate && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.preferredDate}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                      Available Quetta Clinic Slots
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setFormData({ ...formData, preferredTime: time })}
                          className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                            formData.preferredTime === time
                              ? 'bg-[#0075FF] text-white shadow-xs'
                              : 'bg-white border border-slate-200 text-slate-700 hover:bg-sky-50 hover:border-sky-200 hover:text-sky-700'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                    {errors.preferredTime && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.preferredTime}
                      </p>
                    )}
                  </div>

                  <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-100 text-xs text-sky-900 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>
                      Urgent dental emergency in Quetta? Call our hotline at {CLINIC_INFO.emergencyPhone}.
                    </span>
                  </div>
                </div>
              )}

              {/* STEP 3: PATIENT CONTACT & PREFERENCES */}
              {step === 3 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                      Full Patient Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ayesha Khan"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="ayesha@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                      {errors.email && (
                        <p className="text-xs text-red-600 mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                        Pakistani Mobile Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="0333 1234567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-600 mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Patient Comfort Toggles */}
                  <div className="pt-2 space-y-2.5">
                    <label className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200 cursor-pointer hover:bg-sky-50/50 transition-colors">
                      <input
                        type="checkbox"
                        checked={formData.isFirstVisit}
                        onChange={(e) => setFormData({ ...formData, isFirstVisit: e.target.checked })}
                        className="w-4 h-4 accent-[#0075FF] rounded"
                      />
                      <span className="text-xs text-slate-700 font-medium">
                        First visit to Alamdar Bright Smile (Include complimentary checkup & 3D scan)
                      </span>
                    </label>

                    <label className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200 cursor-pointer hover:bg-sky-50/50 transition-colors">
                      <input
                        type="checkbox"
                        checked={formData.hasDentalAnxiety}
                        onChange={(e) =>
                          setFormData({ ...formData, hasDentalAnxiety: e.target.checked })
                        }
                        className="w-4 h-4 accent-[#0075FF] rounded"
                      />
                      <span className="text-xs text-slate-700 font-medium">
                        I experience dental anxiety / request zero-pain numbing protocol
                      </span>
                    </label>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                      Notes or Previous Treatment History (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Any sensitivity, goals, or concerns you would like our consultants to know..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2.5 rounded-full border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 cursor-pointer"
                  >
                    Cancel
                  </button>
                )}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-[#0075FF] hover:bg-[#0060DF] text-white text-xs font-bold shadow-md shadow-blue-500/20 cursor-pointer"
                  >
                    <span>Continue</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-7 py-2.5 rounded-full bg-[#0075FF] hover:bg-[#0060DF] text-white disabled:opacity-50 text-xs font-bold shadow-md shadow-blue-500/20 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Scheduling...</span>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 text-sky-100" />
                        <span>Confirm Appointment Request</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>
          )}

        </div>
      </div>
    </div>
  );
};
