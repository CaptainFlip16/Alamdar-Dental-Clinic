import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Calendar, Menu, X, MapPin } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { ToothLogo } from './ToothLogo';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Doctors', href: '#doctors' },
    { label: 'Pricing', href: '#pricing' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    // Support pricing jump to smile calculator
    const targetId = href === '#pricing' ? '#services' : href;
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-3 sm:pt-4 px-3 sm:px-6 lg:px-8 transition-all duration-300 pointer-events-none">
      <div className="max-w-6xl mx-auto pointer-events-auto">
        {/* Floating Pill Nav Bar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`w-full rounded-full transition-all duration-300 px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between border ${
            isScrolled
              ? 'bg-white/95 backdrop-blur-md shadow-xl border-slate-200/90 text-slate-900'
              : 'bg-white/95 backdrop-blur-md shadow-lg border-white/80 text-slate-900'
          }`}
        >
          {/* Brand Mark */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-sky-600 rounded-full shrink-0 group"
          >
            <ToothLogo textClassName="text-base sm:text-lg font-bold group-hover:text-[#0075FF] transition-colors" iconClassName="w-7 h-7 sm:w-8 sm:h-8 transition-transform group-hover:scale-105" />
          </a>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs lg:text-sm font-semibold text-slate-700 hover:text-[#0075FF] transition-colors whitespace-nowrap relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#0075FF] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Button: Vibrant Blue Pill */}
          <div className="hidden sm:flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center px-5 lg:px-6 py-2 sm:py-2.5 rounded-full bg-[#0075FF] hover:bg-[#0060DF] text-white transition-colors text-xs lg:text-sm font-bold tracking-wide shadow-md shadow-blue-500/25 cursor-pointer whitespace-nowrap"
            >
              <span>Contact Us</span>
            </motion.button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-sky-600" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </motion.div>

        {/* Mobile Dropdown Menu with AnimatePresence */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="md:hidden mt-2 bg-white/98 backdrop-blur-md border border-slate-200 rounded-3xl p-5 shadow-2xl space-y-3 text-left"
            >
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm font-semibold text-slate-800 hover:text-sky-600 hover:bg-sky-50 py-2 px-3 rounded-xl transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-100 space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-600 px-1">
                  <MapPin className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                  <span className="truncate">Main Alamdar Road, Quetta</span>
                </div>

                <a
                  href={`tel:${CLINIC_INFO.mobile.replace(/[^0-9+]/g, '')}`}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-slate-100 text-xs font-bold text-slate-800"
                >
                  <Phone className="w-3.5 h-3.5 text-sky-600" />
                  <span>Call {CLINIC_INFO.mobile}</span>
                </a>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#0075FF] hover:bg-[#0060DF] text-white text-xs font-bold shadow-md shadow-blue-500/20 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
