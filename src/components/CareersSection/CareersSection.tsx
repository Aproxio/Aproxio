import React, { useState, useEffect } from 'react';
import { getJobs, submitApplication } from '../../services/careersService';
import { CareerJob } from '../../types';
import { toast } from 'react-toastify';

interface ExtendedJob extends CareerJob {
  unit?: string;
  departmentLabel?: string;
}

const CareersSection: React.FC = () => {
  const [jobs, setJobs] = useState<ExtendedJob[]>([]);
  const [selectedDept, setSelectedDept] = useState<string>('all');
  const [loading, setLoading] = useState<boolean>(true);
  const [applyingJob, setApplyingJob] = useState<ExtendedJob | null>(null);
  const [submitting, setSubmitting] = useState<boolean>(false);

  // Application form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resumeLink: '',
    note: ''
  });

  const categories = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'engineering', label: 'Engineering' },
    { id: 'product', label: 'Product & Design' },
    { id: 'operations', label: 'Operations & Supply Chain' },
    { id: 'growth', label: 'Growth & Finance' }
  ];

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const data = await getJobs(selectedDept);
        setJobs(data as ExtendedJob[]);
      } catch (err) {
        console.error('Failed to fetch jobs:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, [selectedDept]);

  const handleApplySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast.error('Please provide name and email.');
      return;
    }
    setSubmitting(true);
    try {
      const res = await submitApplication({
        jobId: applyingJob?.id,
        jobTitle: applyingJob?.title,
        ...formData
      });
      toast.success(res.message || 'Application submitted successfully!');
      setApplyingJob(null);
      setFormData({ name: '', email: '', phone: '', resumeLink: '', note: '' });
    } catch (err) {
      toast.error('Submission failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="pt-12 pb-16 border-b border-hairline">
        <div className="flex items-center gap-space-sm mb-6">
          <span className="w-2 h-2 bg-primary"></span>
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-text-tertiary">Talent & Mandates</span>
          <span className="text-hairline-subtle font-body-md">/</span>
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-text-primary">Careers</span>
        </div>

        <h1 className="font-display text-display-mobile md:text-display text-text-primary tracking-tight font-semibold leading-[1.05] max-w-5xl mb-6">
          High stakes. Maximum agency.<br />
          No passengers.
        </h1>

        <p className="font-body-lg text-body-lg text-text-secondary max-w-3xl leading-relaxed">
          We do not hire to fill seats or protect legacy systems. We hire founders in employee clothing who want to build the physical-digital backbone of regional commerce.
        </p>
      </section>

      {/* Roles & Filters */}
      <section className="py-16" id="open-roles">
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 gap-4">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-text-tertiary">Open Listings</span>
            <h2 className="font-headline-lg text-headline-lg text-text-primary font-medium tracking-tight mt-1">
              Select your mandate.
            </h2>
          </div>
          <span className="font-body-md text-text-secondary">
            Showing {jobs.length} featured roles across all group units
          </span>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center gap-2 pb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedDept(cat.id)}
              className={`px-4 py-2 font-label-md text-label-md uppercase tracking-wider transition-colors cursor-pointer ${
                selectedDept === cat.id
                  ? 'bg-text-primary text-canvas'
                  : 'bg-surface-muted text-text-secondary hover:text-text-primary hover:bg-surface-container'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Job Listings Cards */}
        {loading ? (
          <div className="py-12 text-center text-text-secondary">Loading roles...</div>
        ) : (
          <div className="space-y-4">
            {jobs.map((job) => (
              <div 
                key={job.id}
                className="bg-surface-muted hover:bg-canvas p-6 lg:p-8 border border-hairline hover:border-text-primary transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6"
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-label-sm text-label-sm uppercase px-2 py-0.5 bg-canvas border border-hairline text-text-primary font-medium tracking-wider">
                      {job.unit || 'Aproxio'}
                    </span>
                    <span className="font-label-sm text-label-sm uppercase px-2 py-0.5 bg-canvas text-text-secondary tracking-wider">
                      {job.departmentLabel || job.department}
                    </span>
                    <span className="font-label-sm text-label-sm uppercase text-text-tertiary">
                      {job.type}
                    </span>
                  </div>

                  <h3 className="font-headline-sm text-2xl text-text-primary font-medium">
                    {job.title}
                  </h3>

                  <p className="font-body-md text-sm text-text-secondary max-w-2xl">
                    {job.description}
                  </p>

                  <div className="flex items-center gap-4 text-text-secondary font-body-md text-sm pt-2">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">location_on</span>
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">work_history</span>
                      {job.experience}
                    </span>
                  </div>
                </div>

                <button 
                  onClick={() => setApplyingJob(job)}
                  className="px-6 py-3 bg-text-primary text-canvas font-label-md text-label-md uppercase tracking-wider hover:bg-neutral-800 transition-colors shrink-0 cursor-pointer"
                >
                  Apply for Role
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Application Modal */}
      {applyingJob && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-canvas border border-hairline max-w-lg w-full p-8 shadow-2xl relative">
            <button 
              onClick={() => setApplyingJob(null)}
              className="absolute top-4 right-4 text-text-secondary hover:text-text-primary cursor-pointer"
            >
              <span className="material-symbols-outlined text-[24px]">close</span>
            </button>

            <span className="font-label-sm text-label-sm uppercase tracking-wider text-text-tertiary">Direct Mandate Application</span>
            <h3 className="font-headline-sm text-2xl font-medium text-text-primary mt-1 mb-4">
              {applyingJob.title}
            </h3>
            <p className="text-sm text-text-secondary mb-6">
              Unit: {applyingJob.unit || 'Aproxio'} • {applyingJob.location}
            </p>

            <form onSubmit={handleApplySubmit} className="space-y-4">
              <div>
                <label className="font-label-sm text-xs uppercase text-text-tertiary block mb-1">Full Name *</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Morgan"
                  className="w-full px-3 py-2 border border-hairline text-sm text-text-primary focus:outline-none focus:border-text-primary"
                />
              </div>

              <div>
                <label className="font-label-sm text-xs uppercase text-text-tertiary block mb-1">Email Address *</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@example.com"
                  className="w-full px-3 py-2 border border-hairline text-sm text-text-primary focus:outline-none focus:border-text-primary"
                />
              </div>

              <div>
                <label className="font-label-sm text-xs uppercase text-text-tertiary block mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full px-3 py-2 border border-hairline text-sm text-text-primary focus:outline-none focus:border-text-primary"
                />
              </div>

              <div>
                <label className="font-label-sm text-xs uppercase text-text-tertiary block mb-1">Resume / Portfolio / GitHub Link</label>
                <input 
                  type="url" 
                  value={formData.resumeLink}
                  onChange={(e) => setFormData({ ...formData, resumeLink: e.target.value })}
                  placeholder="https://linkedin.com/in/... or drive link"
                  className="w-full px-3 py-2 border border-hairline text-sm text-text-primary focus:outline-none focus:border-text-primary"
                />
              </div>

              <div>
                <label className="font-label-sm text-xs uppercase text-text-tertiary block mb-1">Brief Note on your past impact</label>
                <textarea 
                  rows={3}
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  placeholder="What is the hardest problem you have solved?"
                  className="w-full px-3 py-2 border border-hairline text-sm text-text-primary focus:outline-none focus:border-text-primary"
                ></textarea>
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setApplyingJob(null)}
                  className="px-4 py-2 font-label-md text-sm uppercase text-text-secondary hover:text-text-primary cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-6 py-2.5 bg-text-primary text-canvas font-label-md text-sm uppercase tracking-wider hover:bg-neutral-800 disabled:opacity-50 cursor-pointer"
                >
                  {submitting ? 'Submitting...' : 'Submit Credentials'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareersSection;
