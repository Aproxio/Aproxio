import React, { useState, useEffect } from 'react';
import { getReports, ReportItem } from '../../services/investorsService';
import { toast } from 'react-toastify';

interface FinancialIndicator {
  label: string;
  value: string;
  subLabel: string;
  subVal: string;
}

const InvestorsSection: React.FC = () => {
  const [reports, setReports] = useState<ReportItem[]>([]);
  const [category, setCategory] = useState<string>('all');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchReports = async () => {
      setLoading(true);
      try {
        const data = await getReports(category);
        setReports(data);
      } catch (err) {
        console.error('Failed to load reports:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchReports();
  }, [category]);

  const handleDownload = (report: ReportItem) => {
    toast.info(`Preparing report download: ${report.title}`);
  };

  const metrics: FinancialIndicator[] = [
    { label: "Net Consolidated Revenue", value: "₹4,206 Cr", subLabel: "YoY Expansion", subVal: "+42.8%" },
    { label: "Adjusted EBITDA", value: "18.4%", subLabel: "Margin Expansion", subVal: "+310 bps" },
    { label: "Active Monthly Transactors", value: "124.6M", subLabel: "Portfolio Scale", subVal: "+24.1%" },
    { label: "Quick Logistics Growth", value: "+114%", subLabel: "Gross Order Value", subVal: "Accelerating" }
  ];

  return (
    <div className="w-full">
      {/* Header Section */}
      <section className="pt-12 pb-16 border-b border-hairline">
        <div className="flex items-center gap-space-sm mb-6">
          <span className="w-2 h-2 bg-primary"></span>
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-text-tertiary">Shareholder Relations</span>
          <span className="text-hairline-subtle font-body-md">/</span>
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-text-primary">Investors</span>
        </div>

        <h1 className="font-display text-display-mobile md:text-display text-text-primary tracking-tight font-semibold leading-[1.05] max-w-5xl mb-6">
          Disciplined capital.<br />
          Long-horizon compounding.
        </h1>

        <p className="font-body-lg text-body-lg text-text-secondary max-w-3xl leading-relaxed">
          We treat outside capital with the same uncompromising stewardship as if it were our own savings. Here you will find unfiltered unit economics and governance reports.
        </p>
      </section>

      {/* Metrics Dashboard */}
      <section className="py-16 border-b border-hairline">
        <div className="inline-block pb-2 mb-8">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-text-tertiary">Group Key Indicators</span>
          <h2 className="font-headline-lg text-3xl font-medium text-text-primary mt-1">Financial Highlights</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, idx) => (
            <div key={idx} className="p-6 bg-surface-muted border border-hairline hover:border-text-primary transition-all flex flex-col justify-between">
              <div>
                <span className="font-label-sm text-xs uppercase text-text-tertiary tracking-wider block mb-2">{m.label}</span>
                <div className="font-display text-4xl lg:text-5xl text-text-primary font-semibold tracking-tight">{m.value}</div>
              </div>
              <div className="pt-6 mt-4 border-t border-hairline flex items-center justify-between text-sm">
                <span className="text-text-secondary">{m.subLabel}</span>
                <span className="font-semibold text-text-primary bg-surface-container px-2 py-0.5 text-xs">{m.subVal}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shareholder Letters & Reports */}
      <section className="py-16" id="filings">
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-hairline gap-4">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-text-primary font-medium tracking-tight">
              Shareholder Letters & Results
            </h2>
            <p className="font-body-md text-text-secondary mt-1 max-w-xl">
              Quarterly disclosures, detailed unit economics breakdowns, and management perspectives.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCategory('all')}
              className={`px-3 py-1 font-label-sm text-xs uppercase border transition-colors cursor-pointer ${
                category === 'all' ? 'border-text-primary bg-text-primary text-canvas' : 'border-hairline text-text-secondary hover:text-text-primary'
              }`}
            >
              All Filings
            </button>
            <button
              onClick={() => setCategory('letters')}
              className={`px-3 py-1 font-label-sm text-xs uppercase border transition-colors cursor-pointer ${
                category === 'letters' ? 'border-text-primary bg-text-primary text-canvas' : 'border-hairline text-text-secondary hover:text-text-primary'
              }`}
            >
              Letters
            </button>
            <button
              onClick={() => setCategory('presentations')}
              className={`px-3 py-1 font-label-sm text-xs uppercase border transition-colors cursor-pointer ${
                category === 'presentations' ? 'border-text-primary bg-text-primary text-canvas' : 'border-hairline text-text-secondary hover:text-text-primary'
              }`}
            >
              Transcripts
            </button>
          </div>
        </div>

        {/* Reports Grid */}
        {loading ? (
          <div className="py-12 text-center text-text-secondary">Loading filings...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
            {reports.map((report) => (
              <div 
                key={report.id}
                className="group p-6 bg-surface-muted border border-hairline hover:border-text-primary transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-hairline pb-3 mb-4">
                    <span className="font-label-sm text-xs uppercase font-semibold text-text-primary">aproxio</span>
                    <span className="px-2 py-0.5 text-[10px] uppercase font-semibold bg-accent-electric text-canvas">
                      {report.period}
                    </span>
                  </div>

                  <h3 className="font-title text-lg font-medium text-text-primary leading-snug group-hover:text-text-secondary transition-colors mb-2">
                    {report.title}
                  </h3>

                  <span className="font-label-sm text-xs text-text-tertiary block mb-3">
                    {report.date}
                  </span>

                  <p className="font-body-md text-xs text-text-secondary leading-relaxed">
                    {report.summary}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-hairline flex items-center justify-between">
                  <button 
                    onClick={() => handleDownload(report)}
                    className="font-label-md text-xs uppercase font-medium text-text-primary flex items-center gap-1 hover:underline cursor-pointer"
                  >
                    <span>Download PDF</span>
                    <span className="material-symbols-outlined text-[16px]">download</span>
                  </button>
                  <span className="font-label-sm text-[10px] text-text-tertiary uppercase">2.4 MB</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default InvestorsSection;
