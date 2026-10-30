import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Terms and Conditions | Zenora by ZenVistas",
  description:
    "Terms and Conditions governing the use of zenoravillas.in, promotional resources for Zenora luxury villas in Goldwins, Coimbatore.",
};

export default function TermsAndConditions() {
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
            Terms and <span className="font-serif not-italic text-gold">Conditions</span>
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
                Acceptance of Terms
              </h2>
              <p className="pl-7 text-charcoal/85">
                Access to and use of the website zenoravillas.in constitutes your acceptance of these Terms &amp;
                Conditions. If you do not agree, you should not use this website. These terms apply to all users,
                including visitors, enquirers, and anyone registering for ZenVistas events.
              </p>
            </div>

            <div>
              <h2 className="font-display italic text-2xl text-forest mb-3 flex items-start gap-3">
                <span className="font-sans font-bold text-gold text-lg not-italic mt-0.5">2.</span>
                Purpose of This Website
              </h2>
              <p className="pl-7 text-charcoal/85">
                This website is a promotional and informational resource for Zenora by ZenVistas, a luxury villa
                project in Goldwins, Coimbatore. It is not a statutory document, a sale agreement, or a binding offer
                to sell. No transaction, reservation, or booking occurs through this website alone.
              </p>
            </div>

            <div>
              <h2 className="font-display italic text-2xl text-forest mb-3 flex items-start gap-3">
                <span className="font-sans font-bold text-gold text-lg not-italic mt-0.5">3.</span>
                Pricing
              </h2>
              <p className="pl-7 text-charcoal/85">
                All pricing displayed on this website is indicative only and subject to change without prior notice.
                Website pricing does not constitute a binding price commitment. The legally binding price is that agreed
                and executed in the formal sale agreement between ZenVistas Realty and the buyer. Buyers are advised to
                confirm current pricing directly with the ZenVistas sales team before making any financial decision.
              </p>
            </div>

            <div>
              <h2 className="font-display italic text-2xl text-forest mb-3 flex items-start gap-3">
                <span className="font-sans font-bold text-gold text-lg not-italic mt-0.5">4.</span>
                RERA Registration
              </h2>
              <p className="pl-7 text-charcoal/85">
                Zenora by ZenVistas is registered with the Tamil Nadu Real Estate Regulatory Authority under registration
                number{" "}
                <span className="font-semibold text-forest">TNRERA/11/BLG/0013/2026</span>. This website is a
                promotional resource and does not constitute the statutory project disclosure. The complete and legally
                authoritative project record is available for independent verification at{" "}
                <a
                  href="https://rera.tn.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-forest font-medium underline underline-offset-4 hover:text-forest-light transition-colors"
                >
                  tnrera.in
                </a>
                . Buyers are encouraged to verify all project details on the TNRERA portal before proceeding with any
                booking.
              </p>
            </div>

            <div>
              <h2 className="font-display italic text-2xl text-forest mb-3 flex items-start gap-3">
                <span className="font-sans font-bold text-gold text-lg not-italic mt-0.5">5.</span>
                Enquiry Form and Communications
              </h2>
              <p className="pl-7 text-charcoal/85">
                By submitting an enquiry through this website, you consent to being contacted by ZenVistas Realty and
                its authorised representatives via phone, email, and WhatsApp regarding the Zenora project. Enquiry
                submission does not constitute a booking or reservation of any unit. You may withdraw your consent to
                communications at any time by writing to{" "}
                <a
                  href="mailto:info@zenvistas.co.in"
                  className="text-forest font-medium underline underline-offset-4 hover:text-forest-light transition-colors"
                >
                  info@zenvistas.co.in
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="font-display italic text-2xl text-forest mb-3 flex items-start gap-3">
                <span className="font-sans font-bold text-gold text-lg not-italic mt-0.5">6.</span>
                Exclusive Dinner
              </h2>
              <p className="pl-7 text-charcoal/85">
                The Exclusive Dinner is an invitation-only event organised by ZenVistas Realty for families at an
                advanced stage of considering Zenora. Attendance does not constitute or imply any obligation to purchase.
                Events are limited to 4 families per evening. ZenVistas Realty reserves the right to reschedule or cancel
                any Exclusive Dinner event. Invitations are non-transferable.
              </p>
            </div>

            <div>
              <h2 className="font-display italic text-2xl text-forest mb-3 flex items-start gap-3">
                <span className="font-sans font-bold text-gold text-lg not-italic mt-0.5">7.</span>
                Intellectual Property
              </h2>
              <p className="pl-7 text-charcoal/85">
                All content on this website, including text, images, architectural renders, videos, floor plans,
                logos, and the Zenora and ZenVistas brand names, is the property of ZenVistas Realty and is protected
                by applicable Indian copyright law. Reproduction, distribution, or commercial use of any website content
                without prior written permission is prohibited.
              </p>
            </div>

            <div>
              <h2 className="font-display italic text-2xl text-forest mb-3 flex items-start gap-3">
                <span className="font-sans font-bold text-gold text-lg not-italic mt-0.5">8.</span>
                Limitation of Liability
              </h2>
              <p className="pl-7 text-charcoal/85">
                ZenVistas Realty has taken reasonable care to ensure the accuracy of information on this website.
                However, we do not warrant that all content is complete, current, or free from error. We are not liable
                for any loss or damage arising from reliance on website content. All property purchase decisions should
                be based on formal sale documentation, independent legal and financial advice, and direct verification of
                project details.
              </p>
            </div>

            <div>
              <h2 className="font-display italic text-2xl text-forest mb-3 flex items-start gap-3">
                <span className="font-sans font-bold text-gold text-lg not-italic mt-0.5">9.</span>
                Third-Party Links
              </h2>
              <p className="pl-7 text-charcoal/85">
                This website may link to third-party sites including the TNRERA portal, the Webverse microsite, and
                social media platforms. These links are provided for convenience. ZenVistas Realty does not control and
                is not responsible for the content or practices of any third-party site.
              </p>
            </div>

            <div>
              <h2 className="font-display italic text-2xl text-forest mb-3 flex items-start gap-3">
                <span className="font-sans font-bold text-gold text-lg not-italic mt-0.5">10.</span>
                Modifications
              </h2>
              <p className="pl-7 text-charcoal/85">
                These terms may be updated at any time. The current version will be posted on this page with a revised
                date. Continued use of the website after any update constitutes acceptance of the revised terms.
              </p>
            </div>

            <div>
              <h2 className="font-display italic text-2xl text-forest mb-3 flex items-start gap-3">
                <span className="font-sans font-bold text-gold text-lg not-italic mt-0.5">11.</span>
                Governing Law and Jurisdiction
              </h2>
              <p className="pl-7 text-charcoal/85">
                These terms are governed by Indian law. Any dispute arising from these terms or your use of this website
                is subject to the exclusive jurisdiction of the courts of Coimbatore, Tamil Nadu.
              </p>
            </div>

            <div>
              <h2 className="font-display italic text-2xl text-forest mb-3 flex items-start gap-3">
                <span className="font-sans font-bold text-gold text-lg not-italic mt-0.5">12.</span>
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
