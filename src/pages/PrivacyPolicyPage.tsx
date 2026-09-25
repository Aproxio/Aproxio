import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <main className="w-full bg-canvas min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pt-8 pb-16 lg:pt-10 lg:pb-24">
        <div className="max-w-3xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-text-tertiary">
            Legal
          </span>
          <h1 className="mt-3 font-headline-lg text-headline-lg-mobile md:text-headline-lg font-medium text-text-primary tracking-tight">
            Privacy policy
          </h1>
          <div className="w-12 h-[3px] bg-primary mt-4" />
          <p className="mt-4 text-[13px] text-text-tertiary">Last updated: September 2026</p>

          <div className="mt-10 space-y-8 font-body-md text-body-md text-text-secondary leading-relaxed">
            <section>
              <h2 className="text-lg font-medium text-text-primary mb-3">1. Introduction</h2>
              <p>
                Aproxio Ltd. (&quot;Aproxio&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your privacy.
                This policy explains how we collect, use, and protect information when you visit
                our website or contact us.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium text-text-primary mb-3">2. Information we collect</h2>
              <p className="mb-3">We may collect:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Contact details you provide (such as name, email, and message content)</li>
                <li>Technical data such as browser type, device information, and approximate location</li>
                <li>Usage data about how you navigate our site</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-medium text-text-primary mb-3">3. How we use information</h2>
              <p className="mb-3">We use information to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Respond to enquiries and provide requested information</li>
                <li>Operate, improve, and secure our website</li>
                <li>Meet legal or regulatory obligations where required</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-medium text-text-primary mb-3">4. Sharing of information</h2>
              <p>
                We do not sell personal information. We may share data with trusted service providers
                who help us operate our site, or when required by law.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium text-text-primary mb-3">5. Data retention &amp; security</h2>
              <p>
                We retain information only as long as needed for the purposes described above.
                We apply reasonable administrative and technical safeguards to protect data against
                unauthorized access, loss, or misuse.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium text-text-primary mb-3">6. Your choices</h2>
              <p>
                You may request access to, correction of, or deletion of personal information we hold
                about you, subject to applicable law. Contact us using the details below.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium text-text-primary mb-3">7. Contact</h2>
              <p>
                For privacy-related questions, reach us via our{' '}
                <Link to="/contact" className="text-text-primary underline underline-offset-4 hover:text-text-secondary">
                  Contact
                </Link>{' '}
                page.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicyPage;
