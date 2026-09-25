import React, { useState } from 'react';
import { submitContactInquiry } from '../../services/contactService';
import { toast } from 'react-toastify';

interface FormFields {
  name: string;
  email: string;
  department: string;
  subject: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormFields>({
    name: '',
    email: '',
    department: 'Media & Press Relations',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState<boolean>(false);

  const departments: string[] = [
    'Media & Press Relations',
    'Shareholder & Investor Relations',
    'Commercial & Supplier Partnerships',
    'Executive Leadership Office',
    'General Inquiries'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please complete all required fields.');
      return;
    }
    setLoading(true);
    try {
      const res = await submitContactInquiry({
        fullName: formData.name,
        email: formData.email,
        organization: formData.subject,
        category: formData.department,
        message: formData.message
      });
      toast.success(res.message || 'Dispatch delivered successfully!');
      setFormData({
        name: '',
        email: '',
        department: 'Media & Press Relations',
        subject: '',
        message: ''
      });
    } catch (err) {
      toast.error('Failed to deliver message. Please retry.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      {/* Header Section */}
      <section className="pt-12 pb-16 border-b border-hairline">
        <div className="flex items-center gap-space-sm mb-6">
          <span className="w-2 h-2 bg-primary"></span>
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-text-tertiary">Direct Dispatches</span>
          <span className="text-hairline-subtle font-body-md">/</span>
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-text-primary">Contact</span>
        </div>

        <h1 className="font-display text-display-mobile md:text-display text-text-primary tracking-tight font-semibold leading-[1.05] max-w-5xl mb-6">
          Get in touch with<br />
          Aproxio leadership.
        </h1>

        <p className="font-body-lg text-body-lg text-text-secondary max-w-3xl leading-relaxed">
          For strategic commercial inquiries, institutional disclosures, or media communications, contact our corresponding desks.
        </p>
      </section>

      {/* Main Grid: Form + Office Details */}
      <section className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Form */}
          <div className="lg:col-span-7 bg-surface-muted p-8 border border-hairline">
            <h2 className="font-headline-sm text-2xl font-medium text-text-primary mb-2">
              Send an Official Dispatch
            </h2>
            <p className="text-sm text-text-secondary mb-8">
              All communications are logged and routed directly to the designated department team.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="font-label-sm text-xs uppercase text-text-tertiary block mb-2">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter full name"
                    className="w-full px-4 py-3 bg-canvas border border-hairline text-sm text-text-primary focus:outline-none focus:border-text-primary"
                  />
                </div>

                <div>
                  <label className="font-label-sm text-xs uppercase text-text-tertiary block mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="corporate@domain.com"
                    className="w-full px-4 py-3 bg-canvas border border-hairline text-sm text-text-primary focus:outline-none focus:border-text-primary"
                  />
                </div>
              </div>

              <div>
                <label className="font-label-sm text-xs uppercase text-text-tertiary block mb-2">Designated Department</label>
                <select
                  value={formData.department}
                  onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                  className="w-full px-4 py-3 bg-canvas border border-hairline text-sm text-text-primary focus:outline-none focus:border-text-primary"
                >
                  {departments.map((dept, idx) => (
                    <option key={idx} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-label-sm text-xs uppercase text-text-tertiary block mb-2">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Mandate / Inquiry Reference"
                  className="w-full px-4 py-3 bg-canvas border border-hairline text-sm text-text-primary focus:outline-none focus:border-text-primary"
                />
              </div>

              <div>
                <label className="font-label-sm text-xs uppercase text-text-tertiary block mb-2">Dispatch Content *</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Detail your inquiry or proposal with clarity and concise metrics..."
                  className="w-full px-4 py-3 bg-canvas border border-hairline text-sm text-text-primary focus:outline-none focus:border-text-primary"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="px-8 py-3.5 bg-text-primary text-canvas font-label-md text-sm uppercase tracking-wider hover:bg-neutral-800 transition-colors disabled:opacity-50 cursor-pointer"
              >
                {loading ? 'Transmitting Dispatch...' : 'Transmit Dispatch'}
              </button>
            </form>
          </div>

          {/* Directory & Head Office */}
          <div className="lg:col-span-5 space-y-8">
            {/* Headquarters Card */}
            <div className="p-8 border border-hairline bg-surface-muted">
              <span className="font-label-sm text-xs uppercase text-text-tertiary tracking-wider block mb-2">Corporate Headquarters</span>
              <h3 className="font-title text-xl font-medium text-text-primary mb-3">
                Aproxio Towers
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                Aproxio Horizon Towers, Sector 44,<br />
                Gurugram, NCR 122003, India
              </p>
              <div className="pt-4 border-t border-hairline text-xs text-text-secondary space-y-1">
                <p>Phone: +91 124 415 7700</p>
                <p>Email: contact@aproxio.com</p>
              </div>
            </div>

            {/* Department Desks */}
            <div className="space-y-4">
              <div className="p-4 border border-hairline bg-canvas">
                <h4 className="font-label-md text-sm font-medium text-text-primary">Press & Media Desk</h4>
                <p className="text-xs text-text-secondary mt-1">press@aproxio.com</p>
              </div>
              <div className="p-4 border border-hairline bg-canvas">
                <h4 className="font-label-md text-sm font-medium text-text-primary">Investor Relations Desk</h4>
                <p className="text-xs text-text-secondary mt-1">ir@aproxio.com</p>
              </div>
              <div className="p-4 border border-hairline bg-canvas">
                <h4 className="font-label-md text-sm font-medium text-text-primary">Talent Mandate Admissions</h4>
                <p className="text-xs text-text-secondary mt-1">careers@aproxio.com</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ContactSection;
