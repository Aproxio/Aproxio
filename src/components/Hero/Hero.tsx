import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [isUserInteracting, setIsUserInteracting] = useState<boolean>(false);

  // Mouse move handler that shifts the transparent spotlight mask to follow the cursor
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!containerRef.current || !overlayRef.current) return;
    setIsUserInteracting(true);

    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Center the 900x500 overlay over cursor with smooth, immediate response
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
      overlayRef.current.style.transform = 'translate(15%, 120px)';
    }
  };

  // Ambient gentle floating motion when not actively hovering
  useEffect(() => {
    if (!containerRef.current || !overlayRef.current) return;

    // Initial position
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
      className="relative w-full min-h-[calc(100vh-80px)] flex flex-col justify-between overflow-hidden bg-canvas pt-10 pb-12 select-none"
    >
      {/* Background Interactive Square Grid */}
      <div className="grid_bg"></div>

      {/* Radial Spotlight Mask that unmasks the square grid directly under the cursor */}
      <div ref={overlayRef} className="overlay"></div>

      {/* Main Hero Content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 flex-1 flex flex-col justify-between">

        {/* Giant Headline matching exact eternal.com typography */}
        <div className="pt-16 sm:pt-24 lg:pt-32 max-w-5xl">
          <h1 className="text-[42px] sm:text-[58px] md:text-[64px] xl:text-[72px] font-light leading-[1.08] tracking-tight text-text-primary">
            Aproxio is more than just a name<br />
            Chase the UNEXPECTED.
          </h1>
        </div>

        {/* Bottom Row: Anchor arrow down on left + Founder note card on right */}
        <div className="pt-16 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-8">

          {/* Scroll down circular arrow matching eternal.com */}
          <a
            href="#projects"
            onClick={scrollToProjects}
            aria-label="Scroll to upcoming projects"
            className="w-10 h-10 rounded-full border border-hairline hover:border-text-primary text-text-secondary hover:text-text-primary flex items-center justify-center transition-colors cursor-pointer group"
          >
            <span className="material-symbols-outlined text-[24px] group-hover:translate-y-0.5 transition-transform">
              keyboard_arrow_down
            </span>
          </a>

          {/* Founder Note Card matching screenshot with hover effect */}
          {/* <Link
            to="/culture"
            className="flex items-center gap-4 md:gap-5 self-start sm:self-end group cursor-pointer"
          >
            <div className="h-[75px] md:h-[95px] aspect-[96/129] overflow-hidden bg-surface-container relative shadow-sm border border-hairline group-hover:border-text-primary transition-colors">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
                alt="Founder & CEO"
                className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-110 transition-all duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 pointer-events-none" />
            </div>
            <div className="flex flex-col gap-1.5 md:gap-2">
              <div className="font-normal text-sm md:text-lg text-text-primary flex flex-col leading-snug">
                <span>A note from our Founder,</span>
                <span className="font-medium text-text-primary">Executive Office</span>
              </div>
              <div>
                <span className="font-normal text-sm md:text-base text-text-primary underline underline-offset-4 group-hover:text-[#7293F3] transition-colors inline-block">
                  Read more
                </span>
              </div>
            </div>
          </Link> */}

        </div>

      </div>
    </section>
  );
};

export default Hero;
