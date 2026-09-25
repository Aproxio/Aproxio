import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import businessVisual from '../../images/aproxio-business-card.jpg';

const Businesses: React.FC = () => {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [shine, setShine] = useState({ x: 50, y: 50 });

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setShine({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section className="py-16 lg:py-24 border-t border-hairline" id="projects">
      <div id="businesses" className="relative -top-24 pointer-events-none" aria-hidden="true" />

      <div className="max-w-2xl pb-10 lg:pb-12">
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-medium text-text-primary tracking-tight">
          Our businesses
        </h2>
        <div className="w-12 h-[3px] bg-[#3b82f6] mt-3" />
        <p className="font-body-lg text-body-lg text-text-secondary leading-relaxed mt-5">
          Each product under Aproxio stands on its own — built to serve real customers,
          earn trust, and grow into something lasting. More will join over time.
        </p>
      </div>

      <Link
        ref={cardRef}
        to="/contact"
        onMouseMove={handleMove}
        className="group relative grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden border border-hairline bg-surface-muted text-text-primary transition-transform duration-500 hover:-translate-y-1"
        style={{
          boxShadow: '0 28px 80px -36px rgba(10, 10, 10, 0.35)',
        }}
      >
        {/* Cursor-follow sheen */}
        <div
          className="pointer-events-none absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(600px circle at ${shine.x}% ${shine.y}%, rgba(10,10,10,0.06), transparent 40%)`,
          }}
          aria-hidden="true"
        />

        {/* Visual side — custom brand image */}
        <div className="relative aspect-[16/11] lg:aspect-auto lg:min-h-[420px] overflow-hidden bg-surface-container">
          <img
            src={businessVisual}
            alt=""
            className="w-full h-full object-cover scale-105 grayscale contrast-110 transition-all duration-[1.1s] ease-out group-hover:scale-110 group-hover:grayscale-0 group-hover:contrast-100"
          />

          <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-black/10 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/5" />

          {/* Soft brand wordmark on image */}
          <div className="absolute inset-0 flex items-end p-6 sm:p-8 z-10">
            <div>
              <p className="text-white/70 text-[11px] uppercase tracking-[0.22em] mb-2">
                Chase the unexpected
              </p>
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center transition-transform duration-500 group-hover:rotate-3 group-hover:scale-105">
                <span className="text-white text-xl sm:text-2xl font-semibold tracking-tight">A</span>
              </div>
            </div>
          </div>

          <div className="absolute top-5 left-5 sm:top-6 sm:left-6 z-10 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/50 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-text-primary">
              Coming soon
            </span>
          </div>
        </div>

        {/* Content side */}
        <div className="relative z-10 flex flex-col justify-center p-7 sm:p-10 lg:p-12 xl:px-14 xl:py-14 bg-surface-muted">
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-text-tertiary mb-4">
            01 — Product
          </p>

          <h3 className="text-[36px] sm:text-[52px] lg:text-[56px] font-semibold tracking-tight leading-[0.95] capitalize text-text-primary">
            aproxio
          </h3>

          <p className="mt-5 text-[18px] sm:text-[20px] font-light text-text-primary leading-snug max-w-md">
            Our first product — more to come
          </p>

          <p className="mt-4 text-[14px] sm:text-[15px] text-text-secondary leading-relaxed max-w-lg">
            The first business under the Aproxio umbrella. Built for everyday usefulness,
            reliability, and a standard we will carry into every product we launch next.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-4 max-w-md border-t border-hairline pt-6">
            {[
              { label: 'Type', value: 'Product' },
              { label: 'Status', value: 'Soon' },
              { label: 'Year', value: '2026' },
            ].map((item) => (
              <div key={item.label}>
                <span className="block text-[10px] uppercase tracking-[0.16em] text-text-tertiary">
                  {item.label}
                </span>
                <span className="block mt-1.5 text-[14px] font-medium text-text-primary">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          <span className="mt-9 inline-flex w-fit items-center gap-2.5 px-5 py-2.5 bg-text-primary text-canvas text-[13px] font-semibold tracking-wide uppercase transition-all duration-300 group-hover:gap-3.5 hover:bg-neutral-800">
            Learn more
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </span>
        </div>
      </Link>
    </section>
  );
};

export default Businesses;
