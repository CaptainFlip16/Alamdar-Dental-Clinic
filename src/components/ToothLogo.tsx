import React from 'react';

interface ToothLogoProps {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  light?: boolean;
}

export const ToothLogo: React.FC<ToothLogoProps> = ({
  className = '',
  iconClassName = 'w-9 h-9',
  textClassName = 'text-xl sm:text-2xl',
  light = false,
}) => {
  return (
    <div className={`flex items-center gap-2.5 group select-none ${className}`}>
      {/* Modern Vibrant Medical Tooth Icon Mark */}
      <div
        className={`relative ${iconClassName} rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm shrink-0 ${
          light
            ? 'bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-sky-500/25'
            : 'bg-gradient-to-br from-sky-500 via-sky-600 to-blue-700 text-white group-hover:shadow-md group-hover:shadow-sky-500/30 group-hover:scale-105'
        }`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 drop-shadow-xs"
        >
          {/* Clean modern tooth mark matching screenshot minimalist geometric aesthetic */}
          <path d="M7 3C4.5 3 3 5 3 8.5C3 13.5 5 18 7.5 21C8.2 21.8 9.5 21.5 9.8 20.5L11 15.5C11.3 14.5 12.7 14.5 13 15.5L14.2 20.5C14.5 21.5 15.8 21.8 16.5 21C19 18 21 13.5 21 8.5C21 5 19.5 3 17 3C14.5 3 13.5 5 12 5C10.5 5 9.5 3 7 3Z" />
          <path d="M9.5 8.5C10.5 9.5 13.5 9.5 14.5 8.5" strokeWidth="1.5" strokeOpacity="0.8" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col text-left">
        <span
          className={`font-sans font-extrabold tracking-tight leading-none ${textClassName} ${
            light ? 'text-white' : 'text-slate-900'
          }`}
        >
          Alamdar
          <span className={`font-semibold ml-1 ${light ? 'text-sky-300' : 'text-sky-600'}`}>Bright Smile</span>
        </span>
        <span
          className={`text-[9px] uppercase tracking-[0.2em] font-semibold leading-tight mt-0.5 ${
            light ? 'text-sky-200/80' : 'text-slate-500'
          }`}
        >
          Quetta • Pakistan
        </span>
      </div>
    </div>
  );
};
