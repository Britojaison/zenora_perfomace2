"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Check, Download } from "lucide-react";
import SiteImage from "@/components/ui/SiteImage";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface OverviewProps {
  onOpenBrochure?: () => void;
}

export default function Overview({ onOpenBrochure }: OverviewProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        defaults: { ease: "power3.out", clearProps: "opacity,transform,visibility" },
      });

      tl.from(".overview-img-back", { opacity: 0, x: -35, scale: 0.95, duration: 1 })
        .from(".overview-accent-box", { opacity: 0, scale: 0.9, duration: 0.8 }, "-=0.7")
        .from(".overview-img-front", { opacity: 0, y: 35, scale: 0.95, duration: 1 }, "-=0.7")
        .from(".overview-text-reveal", { opacity: 0, y: 25, duration: 0.8, stagger: 0.12 }, "-=0.8")
        .from(".overview-check-item", { opacity: 0, x: -15, duration: 0.6, stagger: 0.1 }, "-=0.4")
        .from(".overview-qr-box", { opacity: 0, y: 15, duration: 0.6 }, "-=0.4")
        .from(".overview-btn", { opacity: 0, y: 15, duration: 0.6, stagger: 0.1 }, "-=0.4");
    },
    { scope: sectionRef }
  );

  return (
    <section id="overview" ref={sectionRef} className="py-14 sm:py-20 lg:py-24 px-5 sm:px-8 md:px-12 lg:px-20 max-w-screen-xl mx-auto">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">

        {/* Left: Overlapping Architectural Imagery */}
        <div className="lg:col-span-5 relative h-[340px] sm:h-[460px] md:h-[540px] max-w-[480px] mx-auto w-full">
          {/* Top-Left Night/Evening Image */}
          <div className="overview-img-back absolute top-0 left-0 w-[68%] h-[64%] overflow-hidden shadow-lg z-10 border border-white">
            <SiteImage
              src="View-48.jpg"
              alt="Zenora architectural evening elevation"
              aspectRatio="h-full"
              sizes="(max-width: 768px) 60vw, 30vw"
            />
          </div>

          {/* Gold Offset Accent Outline Box (Matching Hero Style, tightly framed) */}
          <div className="overview-accent-box absolute bottom-2 -right-2 sm:bottom-3 sm:-right-3 w-[72%] h-[66%] border-2 border-[#e1b258]/60 pointer-events-none z-0" />

          {/* Bottom-Right Foreground Day Image */}
          <div className="overview-img-front absolute bottom-0 right-0 w-[72%] h-[66%] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.18)] z-20 border-2 border-white">
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
          <p className="overview-text-reveal font-sans text-forest font-semibold text-xs uppercase tracking-[0.25em] mb-6">
            A New Standard
          </p>

          <h2
            className="overview-text-reveal font-display italic font-light text-forest leading-[1.1] mb-8"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            More than a home
            <br />
            A way of being.
          </h2>

          <p className="overview-text-reveal font-sans text-earth text-[15px] sm:text-base leading-[1.8] sm:leading-[1.9] mb-4">
            Zenora is for those who want more from life: more comfort, more intention, and more elegance in everyday
            living. Designed as an ultra-luxury community in the quiet corner of Goldwins, Zenora combines premium
            architecture with curated lifestyle spaces.
          </p>

          <p className="overview-text-reveal font-sans text-earth text-[15px] sm:text-base leading-[1.8] sm:leading-[1.9] mb-8">
            The Horizon Garden, Serenity Pool, and Business Lounge offer an elevated living experience with all the
            modern comforts.
          </p>

          {/* Important Points with Circular Checkmarks */}
          <div className="space-y-3.5 mb-8">
            <div className="overview-check-item flex items-start sm:items-center gap-3.5">
              <span className="w-5 h-5 rounded-full bg-forest text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5 sm:mt-0">
                <Check className="w-3 h-3 stroke-[3]" />
              </span>
              <p className="font-sans text-sm sm:text-[15px] text-gray-700">
                <strong className="font-semibold text-gray-900">Type:</strong> 5.5, 7 & 11 Cent Luxury Villas (4 & 5 BHK)
              </p>
            </div>

            <div className="overview-check-item flex items-start sm:items-center gap-3.5">
              <span className="w-5 h-5 rounded-full bg-forest text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5 sm:mt-0">
                <Check className="w-3 h-3 stroke-[3]" />
              </span>
              <p className="font-sans text-sm sm:text-[15px] text-gray-700">
                <strong className="font-semibold text-gray-900">Structure:</strong> G+1 & G+2 Independent Villas with Sky Terraces
              </p>
            </div>

            <div className="overview-check-item flex items-start sm:items-center gap-3.5">
              <span className="w-5 h-5 rounded-full bg-forest text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5 sm:mt-0">
                <Check className="w-3 h-3 stroke-[3]" />
              </span>
              <p className="font-sans text-sm sm:text-[15px] text-gray-700">
                <strong className="font-semibold text-gray-900">Development:</strong> 60 Exclusive Villas | Goldwins, Coimbatore
              </p>
            </div>
          </div>

          {/* RERA Details with Scannable QR Code */}
          <div className="overview-qr-box flex items-center gap-4 mb-9 pt-1">
            <div className="w-14 h-14 border border-gray-200 p-1 bg-white shrink-0 shadow-xs">
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
                className="text-forest hover:underline text-[11px] mt-0.5 inline-block font-medium"
              >
                www.rera.tn.gov.in
              </a>
            </div>
          </div>

          {/* CTA Button: Download Brochure */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              type="button"
              onClick={onOpenBrochure}
              className="overview-btn inline-flex items-center justify-center gap-2.5 bg-forest hover:bg-forest-light text-white font-sans text-xs uppercase tracking-[0.15em] sm:tracking-[0.18em] px-6 sm:px-7 py-4 min-h-[48px] font-medium transition-[background-color,box-shadow] duration-300 shadow-sm hover:shadow-md cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Brochure</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
