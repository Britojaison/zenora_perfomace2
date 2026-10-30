import React, { Suspense } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ThankYouClient from "./ThankYouClient";

export const metadata: Metadata = {
  title: "Thank You | Zenora Luxury Villas Coimbatore",
  description:
    "Thank you for expressing interest in Zenora Luxury Villas in Goldwins, Coimbatore. Download the official brochure and our concierge team will connect with you shortly.",
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen w-full bg-[#faf5f0] flex flex-col lg:flex-row relative overflow-hidden">
      {/* Left Column: Confirmation & Actions */}
      <div className="w-full lg:w-1/2 min-h-screen flex flex-col justify-between p-7 sm:p-12 lg:p-16 xl:p-20 z-10 relative bg-[#faf5f0]">
        {/* Top Header: Brand Logo */}
        <header className="mb-12 lg:mb-0">
          <Link href="/" className="inline-block transition-opacity hover:opacity-90">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/zenora_logo_dark.svg"
              alt="Zenora by ZenVistas"
              className="h-9 sm:h-11 w-auto"
            />
          </Link>
        </header>

        {/* Center: Message & Call-To-Action */}
        <div className="my-auto py-8 lg:py-12 max-w-xl">
          <p className="font-sans text-[11px] sm:text-xs tracking-[0.25em] text-[#a57d2a] uppercase font-semibold mb-4 sm:mb-5">
            ENQUIRY RECEIVED
          </p>

          <h1 className="font-serif italic font-light text-forest text-4xl sm:text-5xl lg:text-[54px] xl:text-[60px] leading-[1.08] tracking-tight">
            Your journey
            <br />
            begins here.
          </h1>

          {/* Gold Accent Divider */}
          <div className="w-12 h-[2px] bg-[#e1b258] mt-6 sm:mt-7 mb-7 sm:mb-8" />

          <p className="font-sans text-forest/80 text-sm sm:text-base leading-relaxed mb-9 sm:mb-10 font-normal max-w-lg">
            Thank you for expressing interest in Zenora. Our concierge team has been notified and
            will connect with you shortly to assist with floor plans, pricing, and private site visits.
          </p>

          <Suspense fallback={null}>
            <ThankYouClient />
          </Suspense>
        </div>

        {/* Bottom Footer */}
        <footer className="pt-8 mt-12 lg:mt-0 border-t border-forest/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-sans text-[10px] sm:text-[11px] tracking-[0.2em] text-forest/50 uppercase font-light">
            © 2026 ZENVISTAS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-6 sm:gap-8 font-sans text-[10px] sm:text-[11px] tracking-[0.2em] text-forest/70 uppercase">
            <Link
              href="/privacy-policy"
              className="hover:text-forest transition-colors duration-200"
            >
              PRIVACY POLICY
            </Link>
            <Link
              href="/terms-and-conditions"
              className="hover:text-forest transition-colors duration-200"
            >
              TERMS
            </Link>
          </div>
        </footer>
      </div>

      {/* Right Column: Architectural Visual with Smooth Feathered Fade */}
      <div className="w-full lg:w-1/2 relative min-h-[420px] sm:min-h-[520px] lg:min-h-screen order-last bg-[#faf5f0]">
        <div className="relative w-full h-full min-h-[420px] sm:min-h-[520px] lg:min-h-screen [mask-image:linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.4)_10%,black_24%)] lg:[mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.15)_8%,rgba(0,0,0,0.7)_25%,black_45%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.4)_10%,black_24%)] lg:[-webkit-mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.15)_8%,rgba(0,0,0,0.7)_25%,black_45%)]">
          <Image
            src="/images/clubhouse.jpg"
            alt="Zenora Luxury Clubhouse and Residences"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>
        {/* Soft atmospheric gradient overlays for seamless edge blending */}
        <div className="hidden lg:block absolute inset-y-0 left-0 w-36 xl:w-56 bg-gradient-to-r from-[#faf5f0] via-[#faf5f0]/40 to-transparent pointer-events-none z-10" />
        <div className="lg:hidden absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#faf5f0] via-[#faf5f0]/40 to-transparent pointer-events-none z-10" />
      </div>
    </main>
  );
}
