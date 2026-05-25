import React, { useState, useEffect } from 'react';
import logo from '../assets/design_draft_text_logo.svg';

const PageLoader = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = 'hidden';

    // Simulate progress bar filling
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Increment faster at first, then slow down
        const increment = Math.max(1, Math.floor((100 - prev) * 0.15));
        return Math.min(100, prev + increment);
      });
    }, 45);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    if (progress === 100) {
      // Start fade out after a slight delay
      const fadeTimeout = setTimeout(() => {
        setIsFading(true);
      }, 300);

      // Unmount loader after fade transition completes
      const unmountTimeout = setTimeout(() => {
        setIsVisible(false);
        document.body.style.overflow = '';
      }, 800);

      return () => {
        clearTimeout(fadeTimeout);
        clearTimeout(unmountTimeout);
      };
    }
  }, [progress]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#200B04] transition-opacity duration-500 ease-in-out ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="w-full max-w-sm px-6 text-center flex flex-col items-center space-y-8">
        {/* Logo with modern pulse/scale animation */}
        <div className="transform scale-95 animate-pulse duration-1000">
          <img
            src={logo?.src || logo}
            alt="Design Draft Logo"
            className="h-14 md:h-16 w-auto brightness-0 invert"
          />
        </div>

        {/* Minimalist Progress Line and Percentage */}
        <div className="w-full space-y-3">
          <div className="flex justify-between items-end text-orange-200/80 font-mono text-sm tracking-widest">
            <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-orange-400">Loading Experience</span>
            <span className="text-base font-medium">{progress}%</span>
          </div>
          
          <div className="h-[2px] w-full bg-orange-950/50 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-orange-600 via-orange-500 to-amber-400 transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Elegant Subtitle */}
        <p className="text-[9px] uppercase tracking-[0.3em] text-orange-200/40 font-medium">
          Thrissur's Leading Home Builders & Developers
        </p>
      </div>
    </div>
  );
};

export default PageLoader;
