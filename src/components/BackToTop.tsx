import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }
      setIsVisible(currentScroll > 320);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 right-6 z-40"
        >
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="relative w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-xl border border-white/20 hover:bg-sky-600 active:scale-95 transition-all duration-200 cursor-pointer group"
          >
            {/* Circular Progress SVG */}
            <svg
              className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5"
              viewBox="0 0 44 44"
            >
              <circle
                cx="22"
                cy="22"
                r={radius}
                className="text-slate-700"
                strokeWidth="2.5"
                stroke="currentColor"
                fill="transparent"
              />
              <circle
                cx="22"
                cy="22"
                r={radius}
                className="text-sky-400 transition-all duration-100"
                strokeWidth="2.5"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
              />
            </svg>

            <ArrowUp className="w-4 h-4 text-white group-hover:-translate-y-0.5 transition-transform duration-200" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
