"use client";

import React from "react";
import Image from "next/image";
import { Check, Download, FileText } from "lucide-react";
import SiteImage from "@/components/ui/SiteImage";

interface OverviewProps {
  onOpenBrochure?: () => void;
  onOpenPaymentSchedule?: () => void;
}

export default function Overview({ onOpenBrochure, onOpenPaymentSchedule }: OverviewProps) {
  return (
    <section id="overview" className="py-24 px-6 md:px-20 max-w-screen-xl mx-auto">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left: Overlapping Architectural Imagery */}
        <div className="lg:col-span-5 relative h-[440px] sm:h-[500px] md:h-[540px] max-w-[480px] mx-auto w-full">
          {/* Top-Left Night/Evening Image */}
          <div className="absolute top-0 left-0 w-[68%] h-[64%] overflow-hidden shadow-lg z-10 border border-white">
            <SiteImage
              src="View-48.jpg"
              alt="Zenora architectural evening elevation"
              aspectRatio="h-full"
              sizes="(max-width: 768px) 60vw, 30vw"
            />
          </div>

          {/* Wine Offset Accent Box */}
          <div className="absolute top-[8%] left-[26%] w-[68%] h-[64%] border-2 border-wine pointer-events-none z-0" />

          {/* Bottom-Right Foreground Day Image */}
          <div className="absolute bottom-0 right-0 w-[72%] h-[66%] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.18)] z-20 border-2 border-white">
            <SiteImage
              src="7-cent-side.jpg"
              alt="Zenora luxury villa exterior"
              aspectRatio="h-full"
              sizes="(max-width: 768px) 70vw, 35vw"
            />
          </div>
        </div>

        {/* Right: Content with Highlights, RERA & Action Buttons */}
        <div className="lg:col-span-7">
          <p className="font-sans text-gold text-xs uppercase tracking-[0.25em] mb-6">
            A New Standard
          </p>

          <h2
            className="font-display italic font-light text-forest leading-[1.1] mb-8"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            More than a home
            <br />
            A way of being.
          </h2>

          <p className="font-sans text-earth text-base leading-[1.9] mb-4">
            Zenora is for those who want more from life: more comfort, more intention, and more elegance in everyday
            living. Designed as an ultra luxury community in the quiet corner of Goldwins, Zenora combines premium
            architecture with curated lifestyle spaces.
          </p>

          <p className="font-sans text-earth text-base leading-[1.9] mb-8">
            The Horizon Garden, Serenity Pool, and Business Lounge, offering an elevated living experience with all the
            modern comforts.
          </p>

          {/* Important Points with Circular Checkmarks */}
          <div className="space-y-3.5 mb-8">
            <div className="flex items-start sm:items-center gap-3.5">
              <span className="w-5 h-5 rounded-full bg-wine text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5 sm:mt-0">
                <Check className="w-3 h-3 stroke-[3]" />
              </span>
              <p className="font-sans text-sm sm:text-[15px] text-gray-700">
                <strong className="font-semibold text-gray-900">Type:</strong> 5.5, 7 & 11 Cent Luxury Villas (4 & 5 BHK)
              </p>
            </div>

            <div className="flex items-start sm:items-center gap-3.5">
              <span className="w-5 h-5 rounded-full bg-wine text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5 sm:mt-0">
                <Check className="w-3 h-3 stroke-[3]" />
              </span>
              <p className="font-sans text-sm sm:text-[15px] text-gray-700">
                <strong className="font-semibold text-gray-900">Structure:</strong> G+1 & G+2 Independent Villas with Sky Terraces
              </p>
            </div>

            <div className="flex items-start sm:items-center gap-3.5">
              <span className="w-5 h-5 rounded-full bg-wine text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5 sm:mt-0">
                <Check className="w-3 h-3 stroke-[3]" />
              </span>
              <p className="font-sans text-sm sm:text-[15px] text-gray-700">
                <strong className="font-semibold text-gray-900">Development:</strong> 60 Exclusive Villas | Goldwins, Coimbatore
              </p>
            </div>
          </div>

          {/* RERA Details with Scannable QR Code */}
          <div className="flex items-center gap-4 mb-9 pt-1">
            <div className="w-13 h-13 border border-gray-200 p-1 bg-white shrink-0 shadow-xs">
              <Image
                src="/images/rera_qr.svg"
                alt="TNRERA QR Code"
                width={52}
                height={52}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="font-sans text-[11px] leading-snug text-gray-600">
              <p className="font-bold text-gray-900 tracking-wide font-mono text-[11px]">
                TNRERA/11/BLG/0013/2026
              </p>
              <p className="text-[10px] text-gray-500 mt-0.5">DATED: 15.02.2026</p>
              <a
                href="https://rera.tn.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-wine hover:underline text-[11px] mt-0.5 inline-block font-medium"
              >
                www.rera.tn.gov.in
              </a>
            </div>
          </div>

          {/* CTA Buttons: Download Brochure & Download Payment Schedule */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              type="button"
              onClick={onOpenBrochure}
              className="inline-flex items-center justify-center gap-2.5 bg-wine hover:bg-[#200508] text-white font-sans text-xs uppercase tracking-[0.18em] px-7 py-4 font-medium transition-all duration-300 shadow-sm hover:shadow-md active:scale-[0.99] cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Brochure</span>
            </button>

            <button
              type="button"
              onClick={onOpenPaymentSchedule}
              className="inline-flex items-center justify-center gap-2.5 bg-[#5b6065] hover:bg-[#484c50] text-white font-sans text-xs uppercase tracking-[0.18em] px-7 py-4 font-medium transition-all duration-300 shadow-sm hover:shadow-md active:scale-[0.99] cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Download Payment Schedule</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

