import React, { useState, useEffect, useRef } from 'react';
/*
import { submitContactInquiry } from '../../services/contactService';
import { toast } from 'react-toastify';

interface FormFields {
  name: string;
  email: string;
  department: string;
  subject: string;
  message: string;
}
*/

const ContactSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [isUserInteracting, setIsUserInteracting] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!containerRef.current || !overlayRef.current) return;
    setIsUserInteracting(true);

    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

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
      if (window.matchMedia('(max-width: 900px)').matches) {
        overlayRef.current.style.transform = '';
      } else {
        overlayRef.current.style.transform = 'translate(15%, 80px)';
      }
    }
  };

  useEffect(() => {
    if (!containerRef.current || !overlayRef.current) return;

    if (window.matchMedia('(max-width: 900px)').matches) {
      overlayRef.current.style.transform = '';
      return;
    }

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

  /*
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
  */

  return (
    <div className="w-full">
      {/* Header Section with Interactive Hover Grid */}
      <section
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative overflow-hidden pt-8 pb-12 sm:pt-12 sm:pb-16 md:min-h-[calc(100dvh-5rem)] md:flex md:flex-col md:justify-center border-b border-hairline select-none"
      >
        {/* Background Interactive Square Grid */}
        <div className="grid_bg"></div>

        {/* Radial Spotlight Mask */}
        <div ref={overlayRef} className="overlay"></div>

        {/* Header Content */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center gap-space-sm mb-6">
          <span className="w-2 h-2 bg-primary"></span>
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-text-tertiary">Direct Dispatches</span>
          <span className="text-hairline-subtle font-body-md">/</span>
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-text-primary">Contact</span>
        </div>

        <div
          className={`transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h1 className="font-display text-display-mobile md:text-display text-text-primary tracking-tight font-semibold leading-[1.05] max-w-5xl mb-6">
            Get in touch with<br />
            Aproxio leadership.
          </h1>
        </div>

        <p
          className={`font-body-lg text-body-lg text-text-secondary max-w-3xl leading-relaxed transition-all duration-700 delay-150 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          To chase the unexpected
        </p>
        </div>
      </section>

      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Main Grid: Form + Office Details */}
        <section className="py-16 sm:py-24 md:py-32 flex flex-col items-center justify-center text-center">
          <p className="font-label-sm text-sm uppercase tracking-[0.2em] text-text-tertiary mb-6">
            Get In Touch
          </p>
          <div className="flex flex-col items-center gap-2 sm:gap-3 w-full max-w-full">
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=founder.aproxio@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-lg sm:text-3xl md:text-4xl lg:text-5xl text-text-primary hover:text-text-secondary transition-colors duration-300 border-b border-transparent hover:border-text-secondary pb-1 break-all sm:break-normal"
            >
              founder.aproxio@gmail.com
            </a>
            <a 
              href="tel:+919592850867"
              className="font-display text-lg sm:text-2xl md:text-3xl lg:text-4xl text-text-primary hover:text-text-secondary transition-colors duration-300 border-b border-transparent hover:border-text-secondary pb-1"
            >
              +91 95928 50867
            </a>
          </div>
          <p className="mt-10 font-body-lg text-text-secondary max-w-xl mx-auto leading-relaxed">
            We are always looking for unexpected opportunities and visionary founders. Drop us an email or give us a call.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ContactSection;
