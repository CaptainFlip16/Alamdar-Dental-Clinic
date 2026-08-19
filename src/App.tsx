/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsTrust } from './components/StatsTrust';
import { ServicesSection } from './components/ServicesSection';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { SmileCalculator } from './components/SmileCalculator';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TechComfortBento } from './components/TechComfortBento';
import { SmileJourney } from './components/SmileJourney';
import { DoctorsSection } from './components/DoctorsSection';
import { DoctorDetailModal } from './components/DoctorDetailModal';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { BackToTop } from './components/BackToTop';
import { LiveConciergeDrawer } from './components/LiveConciergeDrawer';
import { Service, Doctor } from './types';
import { Calendar } from 'lucide-react';
import { CLINIC_INFO } from './data/clinicData';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [prefillServiceId, setPrefillServiceId] = useState<string | undefined>(undefined);
  const [prefillDoctorId, setPrefillDoctorId] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceId?: string, doctorId?: string) => {
    setPrefillServiceId(serviceId);
    setPrefillDoctorId(doctorId);
    setIsBookingOpen(true);
  };

  const handleBookFromServiceModal = (serviceId: string) => {
    setSelectedService(null);
    handleOpenBooking(serviceId, undefined);
  };

  const handleBookFromDoctorModal = (doctorId: string) => {
    setSelectedDoctor(null);
    handleOpenBooking(undefined, doctorId);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col selection:bg-sky-500/20 selection:text-sky-950 antialiased">
      {/* Top Fixed / Sticky Navigation with Modern Vibrant Tooth Logo */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* 1. Re-designed High-Impact Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 2. Trust / Statistics Section with Marquee Ticker */}
        <StatsTrust />

        {/* 3. Comprehensive Services Section */}
        <ServicesSection
          onSelectService={(srv) => setSelectedService(srv)}
          onOpenBooking={(srvId) => handleOpenBooking(srvId)}
        />

        {/* 4. Interactive Transparent Care Estimator & PKR Calculator */}
        <SmileCalculator onOpenBooking={(srvId) => handleOpenBooking(srvId)} />

        {/* 5. Why Choose Us / Philosophy Section (Split Layout) */}
        <WhyChooseUs onOpenBooking={() => handleOpenBooking()} />

        {/* 6. 21st.dev Style Bento Grid: High-Tech & Boutique Hospitality */}
        <TechComfortBento onOpenBooking={() => handleOpenBooking()} />

        {/* 7. Smile Journey (3-Step Timeline) */}
        <SmileJourney onOpenBooking={() => handleOpenBooking()} />

        {/* 8. Pakistani Specialist Doctors & Clinical Faculty */}
        <DoctorsSection
          onSelectDoctor={(doc) => setSelectedDoctor(doc)}
          onOpenBooking={handleOpenBooking}
        />

        {/* 9. Real Transformations Before/After Interactive Comparison Slider */}
        <BeforeAfterSection onOpenBooking={() => handleOpenBooking()} />

        {/* 10. Pakistani Patient Testimonials & Experiences */}
        <TestimonialsSection />

        {/* 11. Frequently Asked Questions with Live Search & Category Filter */}
        <FaqSection onOpenBooking={() => handleOpenBooking()} />

        {/* 12. Memorable Final Call-To-Action Banner */}
        <FinalCtaSection onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* 13. Luxury Footer with Lahore Studio & Timings */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Floating Bottom Quick Action on Mobile */}
      <div className="fixed bottom-6 left-6 sm:hidden z-40">
        <button
          onClick={() => handleOpenBooking()}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-sky-600 to-blue-700 text-white shadow-xl shadow-sky-600/25 border border-white/20 active:scale-95 transition-all text-xs font-bold cursor-pointer"
          aria-label="Book appointment"
        >
          <Calendar className="w-3.5 h-3.5 text-sky-100" />
          <span>Book Visit</span>
        </button>
      </div>

      {/* Floating Studio Concierge Trigger (WhatsApp & Fast Triage) */}
      <LiveConciergeDrawer onOpenBooking={() => handleOpenBooking()} />

      {/* Floating Back to Top Button on Bottom Right */}
      <BackToTop />

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookService={handleBookFromServiceModal}
      />

      {/* Doctor Detail Modal */}
      <DoctorDetailModal
        doctor={selectedDoctor}
        onClose={() => setSelectedDoctor(null)}
        onBookDoctor={handleBookFromDoctorModal}
      />

      {/* Interactive Multi-Step Appointment Booking Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialServiceId={prefillServiceId}
        initialDoctorId={prefillDoctorId}
      />
    </div>
  );
}
