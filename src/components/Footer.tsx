import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle2, ShieldAlert } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { ToothLogo } from './ToothLogo';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setEmailSubscribed(true);
      setEmailInput('');
    }
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const elem = document.querySelector(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    {
      name: 'Instagram',
      handle: CLINIC_INFO.social?.instagramHandle || 'dr_ejaznourozi',
      url: CLINIC_INFO.social?.instagram || 'https://www.instagram.com/dr_ejaznourozi',
      short: 'IG',
    },
    {
      name: 'TikTok',
      handle: CLINIC_INFO.social?.tiktokHandle || 'Ejazhussain842',
      url: CLINIC_INFO.social?.tiktok || 'https://www.tiktok.com/@Ejazhussain842',
      short: 'TT',
    },
    {
      name: 'Facebook',
      handle: CLINIC_INFO.social?.facebookName || 'Dr. Ejaz Hussain Nourozi',
      url: CLINIC_INFO.social?.facebook || 'https://www.facebook.com/Dr.EjazHussainNourozi',
      short: 'FB',
    },
    {
      name: 'WhatsApp',
      handle: '03158034831',
      url: `https://wa.me/923158034831`,
      short: 'WA',
    },
  ];

  return (
    <footer className="bg-[#0B1528] text-slate-200 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800 text-left">
          
          {/* Brand Col (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <ToothLogo light iconClassName="w-9 h-9" textClassName="text-xl sm:text-2xl" />

            <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed max-w-sm">
              Strong Teeth, Bright Smile. Led by Dr. Ejaz Hussain Nourozi (BDS, RDS, C-endo | FJDC Karachi). Dedicated to gentle conservative dentistry and precision clinical oral care on Main Alamdar Road, Quetta.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2 sm:gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800 hover:bg-[#0075FF] text-slate-300 hover:text-white text-xs font-semibold cursor-pointer transition-colors"
                  title={`${social.name}: ${social.handle}`}
                >
                  <span className="font-bold text-[10px] uppercase text-sky-300">{social.short}</span>
                  <span className="text-[11px]">{social.handle}</span>
                </a>
              ))}
            </div>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800/80 border border-slate-700 text-[11px] text-slate-300">
                <ShieldAlert className="w-4 h-4 text-amber-400" />
                <span>Dental Emergency Quetta: {CLINIC_INFO.emergencyPhone}</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a
                  href="#hero"
                  onClick={(e) => handleSmoothScroll(e, '#hero')}
                  className="hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleSmoothScroll(e, '#services')}
                  className="hover:text-white transition-colors"
                >
                  Treatments & Care
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleSmoothScroll(e, '#about')}
                  className="hover:text-white transition-colors"
                >
                  Why Choose Us
                </a>
              </li>
              <li>
                <a
                  href="#doctors"
                  onClick={(e) => handleSmoothScroll(e, '#doctors')}
                  className="hover:text-white transition-colors"
                >
                  Specialist Doctor
                </a>
              </li>
              <li>
                <a
                  href="#transformations"
                  onClick={(e) => handleSmoothScroll(e, '#transformations')}
                  className="hover:text-white transition-colors"
                >
                  Smile Transformations
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => handleSmoothScroll(e, '#faq')}
                  className="hover:text-white transition-colors"
                >
                  Patient FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Clinic Location (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400">
              Quetta Main Clinic
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{CLINIC_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`tel:${CLINIC_INFO.phone}`} className="hover:text-white transition-colors">
                  {CLINIC_INFO.phone} / {CLINIC_INFO.mobile}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`mailto:${CLINIC_INFO.email}`} className="hover:text-white transition-colors">
                  {CLINIC_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 px-4 rounded-xl bg-[#0075FF] hover:bg-[#0060DF] text-white text-xs font-bold transition-all shadow-md shadow-blue-500/20 cursor-pointer"
              >
                Book Appointment
              </button>
            </div>
          </div>

          {/* Hours & Digest (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400">
              Clinic Timings
            </h4>
            <div className="space-y-1.5 text-xs text-slate-400">
              {CLINIC_INFO.hours.map((h, i) => (
                <div key={i} className="flex justify-between gap-2">
                  <span className="text-slate-400">{h.days}:</span>
                  <span className="text-white font-medium">{h.time}</span>
                </div>
              ))}
            </div>

            <div className="pt-3">
              <h5 className="text-[11px] font-bold text-slate-300 mb-1.5">
                Oral Health Digest Quetta
              </h5>
              {emailSubscribed ? (
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-950/80 p-2.5 rounded-xl border border-emerald-800">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Subscribed! Thank you.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex items-center gap-1.5">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="bg-slate-800/80 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 w-full"
                  />
                  <button
                    type="submit"
                    className="p-2 rounded-xl bg-[#0075FF] hover:bg-[#0060DF] text-white shrink-0 cursor-pointer transition-colors"
                    aria-label="Subscribe to newsletter"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {CLINIC_INFO.name}. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <span className="text-sky-400 font-medium">PMDC Certified Dental Clinic</span>
            <a href="#privacy" onClick={(e) => e.preventDefault()} className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" onClick={(e) => e.preventDefault()} className="hover:text-slate-300 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
