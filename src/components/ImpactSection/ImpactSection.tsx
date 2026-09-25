import React, { useState, useEffect } from 'react';
import { getImpactData, ImpactData } from '../../services/impactService';

const ImpactSection: React.FC = () => {
  const [data, setData] = useState<ImpactData>({ metrics: [], initiatives: [] });
  const [_loading, setLoading] = useState<boolean>(true);

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
      {/* Header Section */}
      <section className="pt-12 pb-16 border-b border-hairline">
        <div className="flex items-center gap-space-sm mb-6">
          <span className="w-2 h-2 bg-primary"></span>
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-text-tertiary">Sustainability & ESG</span>
          <span className="text-hairline-subtle font-body-md">/</span>
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-text-primary">Impact</span>
        </div>

        <h1 className="font-display text-display-mobile md:text-display text-text-primary tracking-tight font-semibold leading-[1.05] max-w-5xl mb-6">
          Our impact beyond business.<br />
          Built for regeneration.
        </h1>

        <p className="font-body-lg text-body-lg text-text-secondary max-w-3xl leading-relaxed">
          Scale carries civic responsibility. As millions depend on our networks daily, we leverage our density to electrify urban mobility, eliminate single-use plastics, and eradicate food insecurity.
        </p>
      </section>

      {/* Hero Dual Photo Impact Banner */}
      <section className="py-16 border-b border-hairline">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Card 1 */}
          <div className="flex flex-col group cursor-pointer">
            <div className="w-full aspect-[16/10] bg-surface-container overflow-hidden mb-6 relative border border-transparent group-hover:border-hairline transition-all shadow-sm">
              <img 
                className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-108 transition-all duration-700 ease-out" 
                alt="Electric Scooter Delivery Fleet" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkcGmvGSn0ITT2P2CKcQkQIHJCervjuzPXSbslT2zej-WysfPYt5utJki5NAHuuy14R6d1EiAbkQUqolQssxbBLM2mpBQb8tzvRXwoLkvd-C_pd9OXkl1qU9da__V5ck2U_WOE8KceFv2TvpkKGcubd_inhREquNfV3YCpa6NyZzwRADnPv-9kFYCTWPa4vlXXJ-zRPtJ9ixVsXJbHno1P7kJkamqLiIwUwCg22voWNZagC_wMOn-A"
              />
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
                className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-108 transition-all duration-700 ease-out" 
                alt="Worker Safety and Wellbeing" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdqlNcjYjZLkYmCp2gF2GViShxG1YEkUDDvd-_yUB8VET9elnG_a2V5uy-LFllNbl89eBkprB4AYTR672zZ_2gx9Qgkwsy5W4NQJvk9XS2toHPbOkzCANV2NNB2DMqCUoJLq6n6Xh08u7JzgZtnyxbGSPx2XyRSz0UhVXwuUGZI6_Vu7eJKIgBnZ4kT-J2IlfrEjTTR4mWZifYxWhS1AhcQMGbGjwYSQ7W5hHChWxkCq2OrgGfGLr4"
              />
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
  );
};

export default ImpactSection;
