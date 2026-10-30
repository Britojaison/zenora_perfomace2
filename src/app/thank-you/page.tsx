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
    <main className="min-h-screen w-full bg-[#faf5f0] flex flex-col lg:flex-row relative">
      {/* Left Column: Confirmation & Actions */}
      <div className="w-full lg:w-1/2 lg:min-h-screen flex flex-col justify-between px-5 sm:px-12 lg:px-16 xl:px-20 pt-7 pb-8 sm:py-12 z-10 relative bg-[#faf5f0]">
        {/* Top Header: Brand Logo */}
        <header className="shrink-0 mb-6 sm:mb-10 lg:mb-12">
          <Link href="/" className="inline-block transition-opacity hover:opacity-90">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/zenora_logo_dark.svg"
              alt="Zenora by ZenVistas"
              className="h-8 sm:h-10 w-auto"
            />
          </Link>
        </header>

        {/* Center: Message & Call-To-Action */}
        <div className="py-2 sm:py-6 lg:my-auto max-w-lg">
          <p className="font-sans text-forest font-semibold text-[11px] sm:text-xs uppercase tracking-[0.22em] sm:tracking-[0.25em] mb-3 sm:mb-4">
            Enquiry Received
          </p>

          <h1 className="font-display text-[27px] sm:text-4xl lg:text-[46px] text-forest leading-[1.18] sm:leading-[1.15] mb-4 sm:mb-5">
            Your Journey <span className="font-display italic text-forest">Begins Here.</span>
          </h1>

          <p className="font-sans text-forest/75 text-sm sm:text-base leading-relaxed mb-6 sm:mb-9 font-normal">
            Thank you for expressing interest in Zenora. Our concierge team has been notified and
            will connect with you shortly to assist with floor plans, pricing, and private site visits.
          </p>

          <Suspense fallback={null}>
            <ThankYouClient />
          </Suspense>

          {/* Architectural visual card visible on mobile */}
          <div className="lg:hidden mt-8 relative w-full aspect-[16/10] sm:aspect-[2/1] rounded-sm overflow-hidden shadow-sm border border-forest/10">
            <Image
              src="/images/clubhouse.jpg"
              alt="Zenora Luxury Clubhouse and Residences"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Bottom Footer */}
        <footer className="shrink-0 pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-forest/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 pb-20 sm:pb-8 lg:pb-0">
          <p className="font-sans text-[10px] sm:text-[11px] tracking-[0.18em] sm:tracking-[0.2em] text-forest/50 uppercase font-light">
            © 2026 ZENVISTAS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-6 sm:gap-8 font-sans text-[10px] sm:text-[11px] tracking-[0.18em] sm:tracking-[0.2em] text-forest/70 uppercase">
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

      {/* Right Column: Architectural Visual (Desktop) */}
      <div className="hidden lg:block lg:w-1/2 relative lg:min-h-screen">
        <Image
          src="/images/clubhouse.jpg"
          alt="Zenora Luxury Clubhouse and Residences"
          fill
          priority
          sizes="50vw"
          className="object-cover object-center"
        />
      </div>
    </main>
  );
}
