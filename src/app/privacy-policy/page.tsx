import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Zenora by ZenVistas",
  description:
    "Privacy Policy for Zenora luxury villas by ZenVistas Realty in Goldwins, Coimbatore. Learn how we handle your personal data.",
};

export default function PrivacyPolicy() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Hero Header Banner */}
      <section className="bg-forest pt-36 pb-16 md:pt-40 md:pb-20">
        <div className="px-6 md:px-20 max-w-screen-xl mx-auto">
          <p className="font-sans text-gold text-xs uppercase tracking-[0.25em] mb-3">
            ZenVistas Legal
          </p>
          <h1 className="font-display italic font-light text-white text-3xl sm:text-4xl md:text-5xl leading-tight">
            Privacy <span className="font-serif not-italic text-gold">Policy</span>
          </h1>
        </div>
      </section>

      {/* Body Content */}
      <section className="py-16 md:py-24">
        <div className="px-6 md:px-20 max-w-screen-xl mx-auto">
          <div className="font-sans text-earth space-y-8 leading-relaxed max-w-4xl text-sm sm:text-base">
            <div>
              <h2 className="font-display italic text-2xl text-forest mb-3 flex items-start gap-3">
                <span className="font-sans font-bold text-gold text-lg not-italic mt-0.5">1.</span>
                Who We Are
              </h2>
              <p className="pl-7 text-charcoal/85">
                ZenVistas Realty is the developer behind Zenora, a luxury villa community in Goldwins, Coimbatore,
                Tamil Nadu. Our website is zenoravillas.in. This Privacy Policy explains what personal data we collect
                through this website, how we use it, who we share it with, and what rights you hold under Indian law.
              </p>
            </div>

            <div>
              <h2 className="font-display italic text-2xl text-forest mb-3 flex items-start gap-3">
                <span className="font-sans font-bold text-gold text-lg not-italic mt-0.5">2.</span>
                What Information We Collect
              </h2>
              <ol className="list-decimal pl-12 space-y-2 text-charcoal/85">
                <li>
                  <strong className="text-forest">Information you provide:</strong> When you submit the enquiry form
                  on this website, you provide your full name, mobile number, and email address. This data is collected
                  voluntarily.
                </li>
                <li>
                  <strong className="text-forest">Information collected automatically:</strong> When you visit our
                  website, our analytics tools collect your IP address, browser type, device type, pages visited, and
                  session duration.
                </li>
                <li>
                  <strong className="text-forest">Cookies and tracking data:</strong> This website uses Meta Pixel
                  (Facebook advertising) and Google Tag Manager, which place cookies on your browser when you visit.
                  These cookies activate only after you grant consent via the cookie banner on first visit.
                </li>
              </ol>
            </div>

            <div>
              <h2 className="font-display italic text-2xl text-forest mb-3 flex items-start gap-3">
                <span className="font-sans font-bold text-gold text-lg not-italic mt-0.5">3.</span>
                How We Use Your Information
              </h2>
              <p className="pl-7 text-charcoal/85">
                Your enquiry data (name, phone, email) is used to: respond to your property enquiry; arrange site
                visits; follow up via phone, email, and WhatsApp through Wati, our authorised messaging partner; and
                invite you to ZenVistas events including the Exclusive Dinner. We do not use your data for any purpose
                beyond those stated here.
              </p>
            </div>

            <div>
              <h2 className="font-display italic text-2xl text-forest mb-3 flex items-start gap-3">
                <span className="font-sans font-bold text-gold text-lg not-italic mt-0.5">4.</span>
                Third-Party Services
              </h2>
              <ol className="list-decimal pl-12 space-y-2 text-charcoal/85">
                <li>
                  <strong className="text-forest">Meta Platforms Inc.:</strong> The Meta Pixel on our site sends visit
                  and event data to Meta for targeted advertisements on Facebook and Instagram.
                </li>
                <li>
                  <strong className="text-forest">Google LLC:</strong> Google Analytics and Google Tag Manager process
                  anonymised traffic data.
                </li>
                <li>
                  <strong className="text-forest">Wati / Clare.AI Pte. Ltd.:</strong> We use Wati to send WhatsApp
                  messages to prospects who have submitted an enquiry.
                </li>
              </ol>
              <p className="pl-7 mt-3 text-charcoal/85">
                We do not sell, rent, or trade your personal data to any third party for their own commercial purposes.
              </p>
            </div>

            <div>
              <h2 className="font-display italic text-2xl text-forest mb-3 flex items-start gap-3">
                <span className="font-sans font-bold text-gold text-lg not-italic mt-0.5">5.</span>
                Cookies and Tracking
              </h2>
              <ol className="list-decimal pl-12 space-y-2 text-charcoal/85">
                <li>
                  <strong className="text-forest">Essential cookies:</strong> Required for basic website
                  functionality. Cannot be disabled.
                </li>
                <li>
                  <strong className="text-forest">Analytics cookies (Google Analytics):</strong> Track pages visited
                  and session data. Activated only after your consent.
                </li>
                <li>
                  <strong className="text-forest">Advertising cookies (Meta Pixel, Google Tag Manager):</strong> Enable
                  retargeting on Facebook, Instagram, and Google. Activated only after your consent.
                </li>
              </ol>
              <p className="pl-7 mt-3 text-charcoal/85">
                You can manage preferences through the banner on this site, your browser settings, or by opting out at{" "}
                <a
                  href="https://facebook.com/settings"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-forest font-medium underline underline-offset-4 hover:text-forest-light transition-colors"
                >
                  facebook.com/settings
                </a>{" "}
                and{" "}
                <a
                  href="https://adssettings.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-forest font-medium underline underline-offset-4 hover:text-forest-light transition-colors"
                >
                  adssettings.google.com
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="font-display italic text-2xl text-forest mb-3 flex items-start gap-3">
                <span className="font-sans font-bold text-gold text-lg not-italic mt-0.5">6.</span>
                Data Retention
              </h2>
              <p className="pl-7 text-charcoal/85">
                Enquiry data is retained for 24 months and then securely deleted or anonymised. Analytics and advertising
                data retention is governed by Google and Meta&apos;s own policies respectively.
              </p>
            </div>

            <div>
              <h2 className="font-display italic text-2xl text-forest mb-3 flex items-start gap-3">
                <span className="font-sans font-bold text-gold text-lg not-italic mt-0.5">7.</span>
                Your Rights Under the DPDP Act 2023
              </h2>
              <p className="pl-7 text-charcoal/85">
                Under India&apos;s Digital Personal Data Protection Act 2023, you have the right to: access a summary of
                the personal data we hold about you; request correction of inaccurate or incomplete data; request
                erasure of your data; and raise a grievance with our Grievance Officer. To exercise any of these
                rights, write to{" "}
                <a
                  href="mailto:privacy@zenvistas.co.in"
                  className="text-forest font-medium underline underline-offset-4 hover:text-forest-light transition-colors"
                >
                  privacy@zenvistas.co.in
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="font-display italic text-2xl text-forest mb-3 flex items-start gap-3">
                <span className="font-sans font-bold text-gold text-lg not-italic mt-0.5">8.</span>
                Data Security
              </h2>
              <p className="pl-7 text-charcoal/85">
                This website uses HTTPS encryption for all data in transit. Internal access to personal data is
                restricted to team members who require it for their specific function. We implement reasonable
                technical and organisational safeguards.
              </p>
            </div>

            <div>
              <h2 className="font-display italic text-2xl text-forest mb-3 flex items-start gap-3">
                <span className="font-sans font-bold text-gold text-lg not-italic mt-0.5">9.</span>
                Children&apos;s Privacy
              </h2>
              <p className="pl-7 text-charcoal/85">
                This website is not directed at persons under 18. We do not knowingly collect personal data from
                minors.
              </p>
            </div>

            <div>
              <h2 className="font-display italic text-2xl text-forest mb-3 flex items-start gap-3">
                <span className="font-sans font-bold text-gold text-lg not-italic mt-0.5">10.</span>
                Changes to This Policy
              </h2>
              <p className="pl-7 text-charcoal/85">
                This policy may be updated periodically. The current version will always be available on this page with
                the date of last revision.
              </p>
            </div>

            <div>
              <h2 className="font-display italic text-2xl text-forest mb-3 flex items-start gap-3">
                <span className="font-sans font-bold text-gold text-lg not-italic mt-0.5">11.</span>
                Contact
              </h2>
              <div className="pl-7 text-charcoal/85 space-y-1.5">
                <p>
                  <strong className="text-forest">Email:</strong>{" "}
                  <a
                    href="mailto:info@zenvistas.co.in"
                    className="text-forest font-medium underline underline-offset-4 hover:text-forest-light transition-colors"
                  >
                    info@zenvistas.co.in
                  </a>
                </p>
                <p>
                  <strong className="text-forest">Phone:</strong>{" "}
                  <a
                    href="tel:+918870044213"
                    className="text-forest font-medium underline underline-offset-4 hover:text-forest-light transition-colors"
                  >
                    +91 88700 44213
                  </a>
                </p>
                <p>
                  <strong className="text-forest">Address:</strong> ZenVistas Realty, Goldwins, Coimbatore, Tamil Nadu
                  - 641014
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
