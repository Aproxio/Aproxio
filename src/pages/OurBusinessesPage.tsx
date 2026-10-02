import React, { useState, useEffect, useRef } from 'react';
import Businesses from '../components/Businesses/Businesses';

const OurBusinessesPage: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [isUserInteracting, setIsUserInteracting] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!containerRef.current || !overlayRef.current) return;
    setIsUserInteracting(true);

    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    overlayRef.current.style.transition = 'transform 0.12s ease-out';
    overlayRef.current.style.transform = `translate(${Math.floor(mouseX - 450)}px, ${Math.floor(mouseY - 250)}px)`;
  };

  const handleMouseEnter = () => {
    setIsUserInteracting(true);
  };

  const handleMouseLeave = () => {
    setIsUserInteracting(false);
    if (overlayRef.current) {
      overlayRef.current.style.transition = 'transform 0.9s ease-out';
      if (window.matchMedia('(max-width: 900px)').matches) {
        overlayRef.current.style.transform = '';
      } else {
        overlayRef.current.style.transform = 'translate(15%, 80px)';
      }
    }
  };

  useEffect(() => {
    if (!containerRef.current || !overlayRef.current) return;

    if (window.matchMedia('(max-width: 900px)').matches) {
      overlayRef.current.style.transform = '';
      return;
    }

    overlayRef.current.style.transform = 'translate(15%, 80px)';

    const ambientWaypoints = [
      { x: 200, y: 60 },
      { x: 500, y: 40 },
      { x: 300, y: 90 },
      { x: 150, y: 70 }
    ];

    let pointIndex = 0;
    const interval = setInterval(() => {
      if (!isUserInteracting && overlayRef.current) {
        const point = ambientWaypoints[pointIndex];
        overlayRef.current.style.transition = 'transform 2.2s ease-in-out';
        overlayRef.current.style.transform = `translate(${point.x}px, ${point.y}px)`;
        pointIndex = (pointIndex + 1) % ambientWaypoints.length;
      }
    }, 3200);

    return () => clearInterval(interval);
  }, [isUserInteracting]);

  return (
    <main className="w-full bg-canvas min-h-screen">
      {/* Header */}
      <section
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative overflow-hidden pt-12 pb-14 sm:pt-16 sm:pb-20 border-b border-hairline select-none"
      >
        {/* Background Interactive Square Grid */}
        <div className="grid_bg"></div>

        {/* Radial Spotlight Mask */}
        <div ref={overlayRef} className="overlay"></div>

        <div className="page-frame relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 bg-primary" />
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-text-tertiary">
              Company
            </span>
            <span className="text-text-tertiary/40">/</span>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-text-primary">
              Businesses
            </span>
          </div>

          <div
            className={`max-w-3xl transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <h1 className="font-display text-display-mobile md:text-display text-text-primary font-semibold">
              Our businesses.
            </h1>
            <p
              className={`mt-5 max-w-xl font-body-lg text-body-lg text-text-secondary leading-relaxed transition-all duration-700 delay-150 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Each product under Aproxio stands on its own — built to serve real customers,
              earn trust, and grow into something lasting. More will join over time.
            </p>
          </div>
        </div>
      </section>

      <div className="page-frame">
        <Businesses />
      </div>
    </main>
  );
};

export default OurBusinessesPage;
