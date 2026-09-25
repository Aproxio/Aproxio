import React from 'react';
import { Link } from 'react-router-dom';
import founderVisual from '../../images/aproxio-founder-panel.jpg';

const FounderNote: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 border-t border-hairline">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
        {/* Visual panel — fills the empty side */}
        <div className="lg:col-span-5 order-2 lg:order-1 group relative overflow-hidden rounded-2xl bg-surface-container border border-hairline min-h-[320px] lg:min-h-full">
          <img
            src={founderVisual}
            alt=""
            className="absolute inset-0 w-full h-full object-cover grayscale contrast-110 transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:grayscale-0 group-hover:contrast-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10" />

          <div className="absolute top-5 left-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-white/40">
            <span className="w-1.5 h-1.5 rounded-full bg-text-primary" />
            <span className="text-[10px] font-semibold tracking-[0.14em] uppercase text-text-primary">
              Founder&apos;s note
            </span>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
            <p className="text-white text-lg sm:text-xl font-medium leading-snug tracking-tight">
              Built for people who prefer truth over comfort.
            </p>
            <p className="mt-2 text-white/65 text-[12px] uppercase tracking-[0.16em]">
              Chase the unexpected
            </p>
          </div>
        </div>

        {/* Copy + actions */}
        <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-text-tertiary">
            From the founder
          </span>

          <h2 className="mt-3 font-headline-lg text-headline-lg-mobile md:text-headline-lg text-text-primary font-medium tracking-tight max-w-xl">
            Clarity over comfort.
            <br className="hidden sm:block" />
            Ownership over process.
          </h2>
          <div className="w-12 h-[3px] bg-[#3b82f6] mt-4" />

          <blockquote className="mt-8 border-l-2 border-text-primary/20 pl-5">
            <p className="font-body-lg text-body-lg text-text-secondary leading-relaxed">
              Aproxio exists to build and grow products that people rely on —
              with clear ownership, honest feedback, and teams trusted to decide.
            </p>
          </blockquote>

          <p className="mt-5 font-body-md text-body-md text-text-secondary leading-relaxed max-w-xl">
            Every product we launch should earn its place. When consensus is no substitute for truth,
            each feature and release becomes someone&apos;s responsibility. That is how we ship, and how we endure.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4 max-w-md border-t border-hairline pt-6">
            {[
              { label: 'Principle', value: 'Ownership' },
              { label: 'Pace', value: 'High agency' },
              { label: 'Standard', value: 'Endure' },
            ].map((item) => (
              <div key={item.label}>
                <span className="block text-[10px] uppercase tracking-[0.14em] text-text-tertiary">
                  {item.label}
                </span>
                <span className="block mt-1.5 text-[14px] font-medium text-text-primary">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <Link
              to="/culture"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-text-primary text-canvas font-label-md text-label-md uppercase tracking-wider hover:bg-neutral-800 transition-colors"
            >
              Our culture
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
            <Link
              to="/careers"
              className="inline-flex items-center gap-1.5 font-label-md text-label-md text-text-primary underline underline-offset-4 hover:text-text-secondary transition-colors"
            >
              Explore careers
              <span className="material-symbols-outlined text-[16px]">north_east</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderNote;
