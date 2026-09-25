import React, { useState, useEffect, useRef } from 'react';
import { getImpactData, ImpactData } from '../../services/impactService';
import impactScooter from '../../images/impact-scooter.jpg';
import impactShelter from '../../images/impact-shelter.jpg';

const ImpactSection: React.FC = () => {
  const [data, setData] = useState<ImpactData>({ metrics: [], initiatives: [] });
  const [_loading, setLoading] = useState<boolean>(true);

  const containerRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [isUserInteracting, setIsUserInteracting] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(frame);
  }, []);

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
      overlayRef.current.style.transform = 'translate(15%, 80px)';
    }
  };

  // Ambient gentle floating motion when not actively hovering
  useEffect(() => {
    if (!containerRef.current || !overlayRef.current) return;

    // Initial position
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

  useEffect(() => {
    const fetchImpact = async () => {
      try {
        const res = await getImpactData();
        setData(res);
      } catch (err) {
        console.error('Failed to load impact data:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchImpact();
  }, []);

  return (
    <div className="w-full">
      {/* Header Section with Interactive Hover Grid */}
      <section
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center overflow-hidden pt-12 pb-16 border-b border-hairline select-none"
      >
        {/* Background Interactive Square Grid */}
        <div className="grid_bg"></div>

        {/* Radial Spotlight Mask that unmasks the square grid directly under the cursor */}
        <div ref={overlayRef} className="overlay"></div>

        {/* Header Content */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex items-center gap-space-sm mb-6">
            <span className="w-2 h-2 bg-primary"></span>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-text-tertiary">Sustainability & ESG</span>
            <span className="text-hairline-subtle font-body-md">/</span>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-text-primary">Impact</span>
          </div>

          <div
            className={`transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <h1 className="font-display text-display-mobile md:text-display text-text-primary tracking-tight font-semibold leading-[1.05] max-w-5xl mb-6">
              Our impact beyond business.<br />
              Built for regeneration.
            </h1>
          </div>

          {/* <p
            className={`font-body-lg text-body-lg text-text-secondary max-w-3xl leading-relaxed transition-all duration-700 delay-150 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Scale carries civic responsibility. As millions depend on our networks daily, we leverage our density to electrify urban mobility, eliminate single-use plastics, and eradicate food insecurity.
          </p> */}
        </div>
      </section>

      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Hero Dual Photo Impact Banner */}
        <section className="py-16 border-b border-hairline">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Card 1 */}
            <div className="flex flex-col group cursor-pointer">
              <div className="w-full aspect-[16/10] bg-surface-container overflow-hidden mb-6 relative border border-transparent group-hover:border-hairline transition-all shadow-sm">
                <img 
                  className="w-full h-full object-cover scale-105 grayscale contrast-110 transition-all duration-[1.1s] ease-out group-hover:scale-110 group-hover:grayscale-0 group-hover:contrast-100" 
                  alt="Electric Scooter Delivery Fleet" 
                  src={impactScooter}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-black/10 to-transparent pointer-events-none opacity-80 group-hover:opacity-40 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/5 pointer-events-none opacity-80 group-hover:opacity-40 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300 pointer-events-none" />
              </div>
              <h3 className="font-title text-2xl font-medium text-text-primary leading-snug group-hover:text-text-secondary transition-colors">
                Climate Conscious Deliveries
              </h3>
              <p className="font-body-md text-body-md text-text-secondary mt-2 leading-relaxed">
                100% EV-based food deliveries by 2030, marching towards Net-zero emissions across our entire fulfillment and last-mile value chain by 2033.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col group cursor-pointer">
              <div className="w-full aspect-[16/10] bg-surface-container overflow-hidden mb-6 relative border border-transparent group-hover:border-hairline transition-all shadow-sm">
                <img 
                  className="w-full h-full object-cover scale-105 grayscale contrast-110 transition-all duration-[1.1s] ease-out group-hover:scale-110 group-hover:grayscale-0 group-hover:contrast-100" 
                  alt="Worker Safety and Wellbeing" 
                  src={impactShelter}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-black/10 to-transparent pointer-events-none opacity-80 group-hover:opacity-40 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/5 pointer-events-none opacity-80 group-hover:opacity-40 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300 pointer-events-none" />
              </div>
              <h3 className="font-title text-2xl font-medium text-text-primary leading-snug group-hover:text-text-secondary transition-colors">
                Health, Safety and Wellbeing
              </h3>
              <p className="font-body-md text-body-md text-text-secondary mt-2 leading-relaxed">
                Comprehensive medical insurance, ergonomic rest shelters, and emergency accident response for our hundreds of thousands of gig and warehouse partners.
              </p>
            </div>
          </div>
        </section>

        {/* Metrics Counters */}
        <section className="py-16 border-b border-hairline">
          <div className="inline-block pb-2 mb-8">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-text-tertiary">Verified Milestones</span>
            <h2 className="font-headline-lg text-3xl font-medium text-text-primary mt-1">Impact at Scale</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.metrics.map((m, idx) => (
              <div key={idx} className="p-6 bg-surface-muted border border-hairline hover:border-text-primary transition-colors">
                <div className="font-display text-4xl lg:text-5xl font-semibold text-text-primary tracking-tight mb-2">
                  {m.value}
                </div>
                <h4 className="font-title text-base font-medium text-text-primary mb-2">
                  {m.label}
                </h4>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {m.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Strategic Initiatives */}
        <section className="py-16">
          <h2 className="font-headline-lg text-3xl font-medium text-text-primary mb-8 tracking-tight">
            Strategic Initiatives
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.initiatives.map((init, idx) => (
              <div key={idx} className="p-6 border border-hairline bg-surface-muted flex flex-col justify-between">
                <div>
                  <span className="font-label-sm text-xs uppercase px-2 py-0.5 bg-canvas border border-hairline text-text-primary font-medium tracking-wider mb-4 inline-block">
                    {init.tag}
                  </span>
                  <h3 className="font-title text-xl font-medium text-text-primary mb-2">
                    {init.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {init.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ImpactSection;
