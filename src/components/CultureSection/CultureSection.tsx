import React from 'react';

interface Tenet {
  num: string;
  title: string;
  description: string;
}

const CultureSection: React.FC = () => {
  const tenets: Tenet[] = [
    {
      num: "01",
      title: "Radical Transparency",
      description: "Information does not bottleneck at executive levels. Dashboards, unit metrics, failure post-mortems, and customer escalations are broadcast group-wide."
    },
    {
      num: "02",
      title: "Speed as a Foundational Habit",
      description: "Slowness is an institutional disease disguised as prudence. We prefer rapid, reversible decisions executed immediately over prolonged theoretical debates."
    },
    {
      num: "03",
      title: "Intellectual Honesty over Consensus",
      description: "Politeness that masks operational flaws is penalized. We encourage rigorous debate based on verified ground-truth data, regardless of hierarchy."
    },
    {
      num: "04",
      title: "Extreme Ownership Across Every Surface",
      description: "No one says 'that is not my job'. When a delivery fails, a server hangs, or a supplier defaults, whoever discovers it owns the resolution end-to-end."
    }
  ];

  return (
    <div className="w-full">
      {/* Ethos Header Section */}
      <section className="pt-12 pb-20 border-b border-hairline relative">
        <div className="flex items-center gap-space-sm mb-6">
          <span className="w-2 h-2 bg-primary"></span>
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-text-tertiary">Institutional Ethos</span>
          <span className="text-hairline-subtle font-body-md">/</span>
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-text-primary">Culture</span>
        </div>

        <h1 className="font-display text-display-mobile md:text-display text-text-primary tracking-tight font-semibold leading-[1.05] max-w-5xl mb-8">
          Designed to make you feel uncomfortable.<br className="hidden md:inline" />
          Built to endure.
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pt-4">
          <div className="lg:col-span-7">
            <p className="font-body-lg text-body-lg text-text-secondary leading-relaxed">
              Aproxio does not build for comfort or conventional corporate equilibrium. We architect an ecosystem of high-velocity autonomy, radical transparency, and uncompromising personal agency. Excellence is an active discipline, not an accidental milestone.
            </p>
          </div>

          <div className="lg:col-span-5 flex justify-start lg:justify-end">
            <div className="p-4 bg-surface-muted border border-hairline max-w-sm flex items-center gap-4 hover:border-text-primary transition-all group cursor-pointer shadow-sm">
              <div className="w-12 h-12 shrink-0 bg-surface-container overflow-hidden relative border border-hairline group-hover:border-text-primary transition-colors">
                <img 
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-115 transition-all duration-500 ease-out" 
                  alt="Founder Memo" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOZKW8M5k0UuTQUS35DbASz8dtqY0B9toqQbZZUU6imh6lR3IqPADo-lfeOXpu6KOvh85B_EZx-1gwavdZ-4ATBt4s_x6A3FfTPoMOSla9_yqBrilbk2JqSU5EVAxOsKufvfLdPVJMg7W-zf2HtJRiHn90-6VvZhVALy73Tmiq89sS7Ho6pRheafXWxMlgwzDZrgJGyWa7Etl0Wkgyr2r3_T0OSBDNb24I2aU6Wzg5xDCiIKAkfhot"
                />
              </div>
              <div>
                <p className="font-label-md text-label-md text-text-primary font-medium">A note on cultural friction</p>
                <a href="#memo" className="font-body-md text-sm text-text-secondary hover:text-text-primary flex items-center gap-1 mt-0.5">
                  Read Founder's Memo <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tenets Grid */}
      <section className="py-20 border-b border-hairline">
        <div className="inline-block pb-2 mb-10">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-text-tertiary">Core Principles</span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-text-primary font-medium tracking-tight mt-2">
            The Non-Negotiable Tenets
          </h2>
          <div className="w-12 h-[3px] bg-primary mt-3"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tenets.map((tenet) => (
            <div 
              key={tenet.num} 
              className="p-8 border border-hairline bg-surface-muted hover:bg-canvas hover:border-text-primary transition-all group"
            >
              <span className="font-headline-sm text-headline-sm text-text-tertiary group-hover:text-text-primary transition-colors font-mono">
                {tenet.num}
              </span>
              <h3 className="font-title text-2xl font-medium text-text-primary mt-4 mb-3 tracking-tight">
                {tenet.title}
              </h3>
              <p className="font-body-md text-body-md text-text-secondary leading-relaxed">
                {tenet.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Founder's Memo Section */}
      <section className="py-20" id="memo">
        <div className="max-w-3xl space-y-6">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-text-tertiary">Founder's Memo</span>
          <h2 className="font-headline-lg text-3xl md:text-4xl text-text-primary font-medium tracking-tight">
            On Friction and High Performance
          </h2>
          <p className="font-body-lg text-body-lg text-text-secondary leading-relaxed">
            "When people join Aproxio, their first three months are usually marked by cognitive dissonance. They expect polite corporate alignments and multiple layers of sign-offs. Instead, they are handed complete sovereignty and asked why a feature is not live today."
          </p>
          <p className="font-body-md text-body-md text-text-secondary leading-relaxed">
            "We do not promise peace of mind. We promise that you will do the most concentrated, consequential, and intellectually rewarding work of your life. If you thrive under extreme agency, you have found your home."
          </p>
          <div className="pt-4 flex items-center gap-4">
            <span className="font-label-md font-semibold text-text-primary uppercase tracking-wider">— Founder & Group CEO</span>
            <span className="text-text-tertiary text-sm">Aproxio Executive Office</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CultureSection;
