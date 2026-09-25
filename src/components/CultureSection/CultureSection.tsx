import React from 'react';
import { Link } from 'react-router-dom';

interface Principle {
  num: string;
  title: string;
  description: string;
}

const CultureSection: React.FC = () => {
  const principles: Principle[] = [
    {
      num: '01',
      title: 'Clarity first',
      description:
        'We share context early and often. Goals, metrics, and decisions are visible so teams can move without waiting for permission.',
    },
    {
      num: '02',
      title: 'Own the outcome',
      description:
        'Responsibility does not stop at a job title. When something breaks, the person closest to it leads the fix through to resolution.',
    },
    {
      num: '03',
      title: 'Bias to action',
      description:
        'We prefer small, reversible steps over long debates. Ship, learn, and improve — speed with judgment, not speed for its own sake.',
    },
    {
      num: '04',
      title: 'Honest feedback',
      description:
        'Respect includes telling the truth. We challenge ideas with data and care, regardless of hierarchy, so the work gets better.',
    },
  ];

  const waysOfWorking = [
    {
      title: 'Product teams, clear ownership',
      body: 'Compact groups with end-to-end responsibility for the products they build and run.',
    },
    {
      title: 'Written over whispered',
      body: 'Decisions and updates live in shared notes so context compounds across product teams.',
    },
    {
      title: 'Standards over slogans',
      body: 'We measure quality by what ships, what lasts, and how customers experience the product.',
    },
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <section className="pt-8 pb-16 lg:pt-10 lg:pb-20 border-b border-hairline">
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 bg-primary" />
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-text-tertiary">
            Company
          </span>
          <span className="text-text-tertiary/40">/</span>
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-text-primary">
            Culture
          </span>
        </div>

        <h1 className="font-display text-display-mobile md:text-display text-text-primary tracking-tight font-semibold leading-[1.05] max-w-4xl">
          How we work together.
        </h1>

        <p className="mt-6 max-w-2xl font-body-lg text-body-lg text-text-secondary leading-relaxed">
          We build products. Culture is how we do that well — small teams, visible decisions,
          and a high bar for quality so every business under Aproxio can grow with trust.
        </p>
      </section>

      {/* Principles */}
      <section className="py-16 lg:py-20 border-b border-hairline">
        <div className="mb-10">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-text-tertiary">
            Principles
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-text-primary font-medium tracking-tight mt-2">
            What we expect of each other
          </h2>
          <div className="w-12 h-[3px] bg-[#3b82f6] mt-3" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {principles.map((item) => (
            <div
              key={item.num}
              className="p-7 sm:p-8 border border-hairline bg-surface-muted hover:border-text-primary/40 transition-colors"
            >
              <span className="font-mono text-[13px] text-text-tertiary tracking-wider">
                {item.num}
              </span>
              <h3 className="mt-3 text-xl sm:text-2xl font-medium text-text-primary tracking-tight">
                {item.title}
              </h3>
              <p className="mt-3 font-body-md text-body-md text-text-secondary leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Ways of working — generic visual, no personal identity */}
      <section className="py-16 lg:py-20 border-b border-hairline">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5 group relative overflow-hidden rounded-2xl border border-hairline bg-surface-container min-h-[280px] lg:min-h-[360px]">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
              alt=""
              className="absolute inset-0 w-full h-full object-cover grayscale contrast-110 transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:grayscale-0 group-hover:contrast-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-white text-sm font-medium tracking-wide">
                Spaces designed for focused work — not performance theater.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-text-tertiary">
              Ways of working
            </span>
            <h2 className="mt-2 font-headline-md text-headline-md text-text-primary font-medium tracking-tight max-w-lg">
              Practical habits, not corporate slogans.
            </h2>
            <div className="w-12 h-[3px] bg-[#3b82f6] mt-3" />

            <ul className="mt-8 space-y-6">
              {waysOfWorking.map((item) => (
                <li key={item.title} className="border-t border-hairline pt-5">
                  <h3 className="text-[16px] font-medium text-text-primary">{item.title}</h3>
                  <p className="mt-1.5 font-body-md text-body-md text-text-secondary leading-relaxed">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-xl">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-text-tertiary">
              Join us
            </span>
            <h2 className="mt-2 font-headline-md text-headline-md text-text-primary font-medium tracking-tight">
              Looking for people who love building products.
            </h2>
            <p className="mt-4 font-body-md text-body-md text-text-secondary leading-relaxed">
              If you value ownership, honest feedback, and shipping products customers trust —
              we would like to hear from you.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              to="/careers"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-text-primary text-canvas font-label-md text-label-md uppercase tracking-wider hover:bg-neutral-800 transition-colors"
            >
              View careers
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-hairline text-text-primary font-label-md text-label-md uppercase tracking-wider hover:border-text-primary transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CultureSection;
