import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { id: 'all', label: 'All' },
  { id: 'engineering', label: 'Engineering' },
  { id: 'product', label: 'Product & Design' },
  { id: 'operations', label: 'Operations' },
  { id: 'growth', label: 'Growth & Finance' },
] as const;

const CareersSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [isUserInteracting, setIsUserInteracting] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [selectedDept, setSelectedDept] = useState<string>('all');

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
      overlayRef.current.style.transform = 'translate(15%, 80px)';
    }
  };

  useEffect(() => {
    if (!containerRef.current || !overlayRef.current) return;

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

  const activeLabel =
    categories.find((c) => c.id === selectedDept)?.label ?? 'All';

  const emptyCopy =
    selectedDept === 'all'
      ? 'There are no open roles across Aproxio right now.'
      : `There are no open roles in ${activeLabel} right now.`;

  return (
    <div className="w-full">
      {/* Header */}
      <section
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center overflow-hidden pt-12 pb-16 border-b border-hairline select-none"
      >
        {/* Background Interactive Square Grid */}
        <div className="grid_bg"></div>

        {/* Radial Spotlight Mask */}
        <div ref={overlayRef} className="overlay"></div>

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 bg-primary" />
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-text-tertiary">
              Company
            </span>
            <span className="text-text-tertiary/40">/</span>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-text-primary">
              Careers
            </span>
          </div>

          <div
            className={`transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <h1 className="font-display text-display-mobile md:text-display text-text-primary tracking-tight font-semibold leading-[1.05] max-w-4xl">
              Build with us.
            </h1>
          </div>

          <p
            className={`mt-6 max-w-2xl font-body-lg text-body-lg text-text-secondary leading-relaxed transition-all duration-700 delay-150 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            We hire people who want to build and grow products under Aproxio.
            When the right roles open, they will appear here first.
          </p>
        </div>
      </section>

      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Open roles with Eternal-style tabs */}
      <section className="py-16 lg:py-20 border-b border-hairline" id="open-roles">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-text-tertiary">
              Open roles
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-text-primary font-medium tracking-tight mt-2">
              Current openings
            </h2>
            <div className="w-12 h-[3px] bg-[#3b82f6] mt-3" />
          </div>
          <span className="font-body-md text-[14px] text-text-tertiary">
            0 roles · {activeLabel}
          </span>
        </div>

        {/* Tabs */}
        <div
          role="tablist"
          aria-label="Filter by discipline"
          className="flex flex-wrap items-center gap-2 pb-8 border-b border-hairline"
        >
          {categories.map((cat) => {
            const active = selectedDept === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                type="button"
                aria-selected={active}
                onClick={() => setSelectedDept(cat.id)}
                className={`px-4 py-2.5 font-label-md text-[12px] uppercase tracking-wider transition-colors cursor-pointer border ${
                  active
                    ? 'bg-text-primary text-canvas border-text-primary'
                    : 'bg-transparent text-text-secondary border-hairline hover:text-text-primary hover:border-text-primary/40'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Empty state for active tab */}
        <div
          role="tabpanel"
          className="mt-8 border border-hairline bg-surface-muted rounded-2xl px-6 py-14 sm:px-10 sm:py-16 text-center"
        >
          <div className="mx-auto w-12 h-12 rounded-full border border-hairline bg-canvas flex items-center justify-center mb-5">
            <span className="material-symbols-outlined text-[22px] text-text-tertiary">
              work_outline
            </span>
          </div>

          <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canvas border border-hairline text-[11px] font-medium tracking-[0.14em] uppercase text-text-secondary mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-text-tertiary" />
            Not hiring
          </p>

          <h3 className="text-xl sm:text-2xl font-medium text-text-primary tracking-tight">
            No openings in {activeLabel}
          </h3>
          <p className="mt-3 mx-auto max-w-md font-body-md text-body-md text-text-secondary leading-relaxed">
            {emptyCopy} Check back soon, or reach out if you think you would be a strong fit later.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-text-primary text-canvas font-label-md text-label-md uppercase tracking-wider hover:bg-neutral-800 transition-colors"
            >
              Get in touch
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
            <Link
              to="/culture"
              className="inline-flex items-center justify-center gap-2 font-label-md text-label-md text-text-primary underline underline-offset-4 hover:text-text-secondary transition-colors"
            >
              Learn about our culture
            </Link>
          </div>
        </div>
      </section>

      {/* What we look for */}
      <section className="py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-5">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-text-tertiary">
              When we hire
            </span>
            <h2 className="mt-2 font-headline-md text-headline-md text-text-primary font-medium tracking-tight">
              What we look for
            </h2>
            <div className="w-12 h-[3px] bg-[#3b82f6] mt-3" />
          </div>

          <ul className="lg:col-span-7 space-y-6">
            {[
              {
                title: 'Product mindset',
                body: 'You care about what customers experience — not just what gets shipped on paper.',
              },
              {
                title: 'Builders who own outcomes',
                body: 'You take problems end-to-end — from understanding to launch to follow-through.',
              },
              {
                title: 'High standards, low ego',
                body: 'You welcome feedback, put the product ahead of titles, and raise the bar for the team.',
              },
            ].map((item) => (
              <li key={item.title} className="border-t border-hairline pt-5">
                <h3 className="text-[16px] font-medium text-text-primary">{item.title}</h3>
                <p className="mt-1.5 font-body-md text-body-md text-text-secondary leading-relaxed">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      </div>
    </div>
  );
};

export default CareersSection;
