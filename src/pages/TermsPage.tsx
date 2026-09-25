import React from 'react';
import { Link } from 'react-router-dom';

const TermsPage: React.FC = () => {
  return (
    <main className="w-full bg-canvas min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pt-8 pb-16 lg:pt-10 lg:pb-24">
        <div className="max-w-3xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-text-tertiary">
            Legal
          </span>
          <h1 className="mt-3 font-headline-lg text-headline-lg-mobile md:text-headline-lg font-medium text-text-primary tracking-tight">
            Terms of use
          </h1>
          <div className="w-12 h-[3px] bg-primary mt-4" />
          <p className="mt-4 text-[13px] text-text-tertiary">Last updated: September 2026</p>

          <div className="mt-10 space-y-8 font-body-md text-body-md text-text-secondary leading-relaxed">
            <section>
              <h2 className="text-lg font-medium text-text-primary mb-3">1. Acceptance of terms</h2>
              <p>
                By accessing this website, you agree to these Terms of Use. If you do not agree,
                please do not use the site.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium text-text-primary mb-3">2. Use of the website</h2>
              <p>
                You may use this site for lawful, informational purposes only. You agree not to
                misuse the site, attempt unauthorized access, or interfere with its operation.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium text-text-primary mb-3">3. Intellectual property</h2>
              <p>
                All content on this website — including text, branding, design, and graphics —
                is owned by or licensed to Aproxio Ltd. You may not copy, modify, or distribute
                it without prior written permission.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium text-text-primary mb-3">4. Forward-looking information</h2>
              <p>
                Content describing upcoming projects or plans is informational and may change.
                It does not constitute a commitment, offer, or guarantee of future products or services.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium text-text-primary mb-3">5. Disclaimer</h2>
              <p>
                The website is provided &quot;as is&quot; without warranties of any kind. Aproxio does not
                warrant that the site will be uninterrupted, error-free, or free of harmful components.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium text-text-primary mb-3">6. Limitation of liability</h2>
              <p>
                To the fullest extent permitted by law, Aproxio Ltd. shall not be liable for any
                indirect, incidental, or consequential damages arising from your use of this website.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium text-text-primary mb-3">7. Changes</h2>
              <p>
                We may update these terms from time to time. Continued use of the site after changes
                means you accept the revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium text-text-primary mb-3">8. Contact</h2>
              <p>
                Questions about these terms can be sent through our{' '}
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

export default TermsPage;
