import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Cookie Policy | Zenora by ZenVistas",
  description:
    "Cookie Policy for Zenora luxury villas in Goldwins, Coimbatore. Learn about essential, analytics, and advertising cookies.",
};

const cookieItems = [
  {
    name: "Session cookie",
    setBy: "ZenVistas",
    purpose: "Required for website function. Stores your session state.",
    duration: "Session only",
    consent: "Not required",
  },
  {
    name: "_fbp, _fbc",
    setBy: "Meta (Facebook)",
    purpose: "Records your visit so we can serve relevant Zenora ads on Facebook and Instagram.",
    duration: "Up to 90 days",
    consent: "Required",
  },
  {
    name: "_ga, _gid",
    setBy: "Google Analytics",
    purpose: "Tracks pages visited and session duration to help us understand how visitors use the site.",
    duration: "Up to 2 years",
    consent: "Required",
  },
  {
    name: "_gcl_au",
    setBy: "Google Tag Manager",
    purpose: "Conversion tracking for Google Ads campaigns.",
    duration: "90 days",
    consent: "Required",
  },
];

export default function CookiesPage() {
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
            Cookie <span className="font-serif not-italic text-gold">Policy</span>
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
                What Are Cookies
              </h2>
              <ol className="list-decimal pl-12 space-y-2 text-charcoal/85">
                <li>
                  Cookies are small text files stored on your device by your browser when you visit a website.
                </li>
                <li>They allow websites to remember information about your visit.</li>
                <li>
                  Some cookies are necessary for the site to function, while others are used for analytics and
                  advertising.
                </li>
              </ol>
            </div>

            <div>
              <h2 className="font-display italic text-2xl text-forest mb-3 flex items-start gap-3">
                <span className="font-sans font-bold text-gold text-lg not-italic mt-0.5">2.</span>
                Cookies We Use on This Website
              </h2>
              <div className="overflow-x-auto mt-4 rounded-sm border border-cream">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-forest text-cream">
                      <th className="p-3.5 border-b border-cream/20 font-medium">Cookie</th>
                      <th className="p-3.5 border-b border-cream/20 font-medium">Set by</th>
                      <th className="p-3.5 border-b border-cream/20 font-medium">Purpose</th>
                      <th className="p-3.5 border-b border-cream/20 font-medium whitespace-nowrap">Duration</th>
                      <th className="p-3.5 border-b border-cream/20 font-medium">Consent</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-cream/60">
                    {cookieItems.map((item) => (
                      <tr key={item.name} className="hover:bg-cream/15 transition-colors">
                        <td className="p-3.5 font-medium text-forest whitespace-nowrap">{item.name}</td>
                        <td className="p-3.5 text-charcoal/85 whitespace-nowrap">{item.setBy}</td>
                        <td className="p-3.5 text-charcoal/85 leading-relaxed">{item.purpose}</td>
                        <td className="p-3.5 text-charcoal/85 whitespace-nowrap">{item.duration}</td>
                        <td className="p-3.5 text-charcoal/85 whitespace-nowrap">
                          <span
                            className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-medium ${
                              item.consent === "Required"
                                ? "bg-forest/15 text-forest"
                                : "bg-forest/10 text-forest"
                            }`}
                          >
                            {item.consent}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="font-display italic text-2xl text-forest mb-3 flex items-start gap-3">
                <span className="font-sans font-bold text-gold text-lg not-italic mt-0.5">3.</span>
                Managing Your Preferences
              </h2>
              <ol className="list-decimal pl-12 space-y-2 text-charcoal/85">
                <li>
                  When you first visit our website, a consent banner will appear allowing you to accept all cookies,
                  decline non-essential cookies, or manage individual preferences.
                </li>
                <li>
                  Non-essential cookies (Meta Pixel, Google Analytics, Google Tag Manager) will only be placed after you
                  give explicit consent.
                </li>
                <li>
                  You can withdraw or change your consent at any time. To opt out of Meta advertising cookies, visit{" "}
                  <a
                    href="https://facebook.com/settings"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-forest font-medium underline underline-offset-4 hover:text-forest-light transition-colors"
                  >
                    facebook.com/settings
                  </a>{" "}
                  and navigate to Ads.
                </li>
                <li>
                  To opt out of Google advertising, visit{" "}
                  <a
                    href="https://adssettings.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-forest font-medium underline underline-offset-4 hover:text-forest-light transition-colors"
                  >
                    adssettings.google.com
                  </a>
                  . Cookie preferences can also be managed through your browser settings.
                </li>
              </ol>
            </div>

            <div>
              <h2 className="font-display italic text-2xl text-forest mb-3 flex items-start gap-3">
                <span className="font-sans font-bold text-gold text-lg not-italic mt-0.5">4.</span>
                Contact
              </h2>
              <p className="pl-7 text-charcoal/85">
                For questions about our use of cookies:{" "}
                <a
                  href="mailto:info@zenvistas.co.in"
                  className="text-forest font-medium underline underline-offset-4 hover:text-forest-light transition-colors"
                >
                  info@zenvistas.co.in
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
