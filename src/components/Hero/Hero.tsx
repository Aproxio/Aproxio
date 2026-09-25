import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
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
      // Let CSS media queries own the resting position on compact screens
      if (window.matchMedia('(max-width: 900px)').matches) {
        overlayRef.current.style.transform = '';
      } else {
        overlayRef.current.style.transform = 'translate(15%, 120px)';
      }
    }
  };

  useEffect(() => {
    if (!containerRef.current || !overlayRef.current) return;

    const compact = window.matchMedia('(max-width: 900px)');
    if (compact.matches) {
      overlayRef.current.style.transform = '';
      return;
    }

    overlayRef.current.style.transform = 'translate(15%, 120px)';

    const ambientWaypoints = [
      { x: 250, y: 180 },
      { x: 600, y: 140 },
      { x: 350, y: 280 },
      { x: 180, y: 220 }
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

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById('projects') || document.getElementById('businesses');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full overflow-hidden bg-canvas pt-6 sm:pt-10 pb-10 sm:pb-14 lg:pb-20"
    >
      <div
        className="absolute inset-0 pointer-events-none z-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 80% 55% at 20% 30%, rgba(114, 147, 243, 0.08) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 85% 70%, rgba(232, 227, 217, 0.9) 0%, transparent 50%)'
        }}
      />

      <div className="grid_bg" />
      <div ref={overlayRef} className="overlay" />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div
          className={`pt-4 sm:pt-14 lg:pt-20 max-w-4xl transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="font-label-sm text-label-sm uppercase tracking-[0.18em] text-text-tertiary mb-5">
            Our businesses
          </p>

          <h1 className="font-display text-[40px] sm:text-[64px] md:text-[72px] xl:text-[80px] font-semibold leading-[0.98] tracking-tight text-text-primary">
            Aproxio
          </h1>

          <p className="mt-4 sm:mt-6 text-[22px] sm:text-[34px] md:text-[40px] font-light leading-[1.15] tracking-tight text-text-primary max-w-3xl">
            Building products that endure.
            <br />
            Chase the unexpected.
          </p>

          <p
            className={`mt-5 sm:mt-6 max-w-xl font-body-lg text-body-lg text-text-secondary leading-relaxed transition-all duration-700 delay-150 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Aproxio is a home for products we build and grow — starting with one,
            with more to come under the same standard of clarity and craft.
          </p>

          <div
            className={`mt-8 sm:mt-10 flex flex-col sm:flex-row sm:items-center gap-4 transition-all duration-700 delay-300 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <a
              href="#projects"
              onClick={scrollToProjects}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-text-primary text-canvas font-label-md text-label-md uppercase tracking-wider hover:bg-neutral-800 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text-primary"
            >
              Explore businesses
              <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-hairline bg-transparent text-text-primary font-label-md text-label-md uppercase tracking-wider hover:border-text-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text-primary"
            >
              Get in touch
            </Link>
          </div>
        </div>

        {/* <div
          className={`pt-16 pb-4 flex items-end justify-between gap-8 transition-all duration-700 delay-500 ease-out ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <a
            href="#projects"
            onClick={scrollToProjects}
            aria-label="Scroll to upcoming projects"
            className="w-11 h-11 rounded-full border border-hairline hover:border-text-primary text-text-secondary hover:text-text-primary flex items-center justify-center transition-colors cursor-pointer group"
          >
            <span className="material-symbols-outlined text-[24px] group-hover:translate-y-0.5 transition-transform">
              keyboard_arrow_down
            </span>
          </a>

          <p className="hidden sm:block font-mono text-[11px] tracking-wider uppercase text-text-tertiary">
            Gurugram · Bengaluru · New Delhi
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
