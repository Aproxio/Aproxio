import React from 'react';
import { Link } from 'react-router-dom';
import businessVisual from '../../images/Mbito.svg';

const Businesses: React.FC = () => {
  return (
    <section className="py-16 lg:py-20" id="projects">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
        
        {/* Visual side */}
        <div className="lg:col-span-5 group relative overflow-hidden rounded-2xl bg-surface-container border border-hairline min-h-[320px] lg:min-h-full">
          <img
            src={businessVisual}
            alt="Mbito Visual"
            className="absolute inset-0 w-full h-full object-cover grayscale contrast-110 transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:grayscale-0 group-hover:contrast-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10" />

          {/* Top left pill */}
          <div className="absolute top-5 left-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-white/40 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[10px] font-semibold tracking-[0.14em] uppercase text-text-primary">
              Coming soon
            </span>
          </div>


        </div>

        {/* Content side */}
        <div className="lg:col-span-7 flex flex-col justify-center py-4 lg:py-8">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-text-tertiary">
            01 — Product
          </span>

          <h3 className="mt-3 text-[36px] sm:text-[52px] lg:text-[56px] font-semibold tracking-tight leading-[0.95] capitalize text-text-primary">
            Mbito
          </h3>
          <div className="w-12 h-[3px] bg-text-primary rounded-full mt-4" />

          <p className="mt-5 text-[18px] sm:text-[20px] font-light text-text-primary leading-snug max-w-md">
            Our first product — more to come
          </p>

          <p className="mt-4 font-body-md text-body-md text-text-secondary leading-relaxed max-w-xl">
            The first business under the Aproxio umbrella. Built for everyday usefulness,
            reliability, and a standard we will carry into every product we launch next.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4 max-w-md border-t border-hairline pt-6">
            {[
              { label: 'Type', value: 'Product' },
              { label: 'Status', value: 'Soon' },
              { label: 'Year', value: '2026' },
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

          <div className="mt-9 flex items-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-text-primary text-canvas font-label-md text-label-md uppercase tracking-wider rounded-lg hover:bg-neutral-800 transition-all duration-200 shadow-sm"
            >
              Learn more
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Businesses;
