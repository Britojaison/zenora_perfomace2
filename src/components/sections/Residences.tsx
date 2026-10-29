"use client";

import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SiteImage from "@/components/ui/SiteImage";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const villas = [
  {
    badge: "Intimate",
    size: "5.5",
    builtUp: "2,850 – 3,250 Sq.ft.",
    image: "master-bedroom-view-1.jpg",
    alt: "5.5 Cent luxury villa at Zenora, Goldwins, Coimbatore",
    desc: "A refined sanctuary designed for those who value privacy and precision. Every corner considered, every material chosen with intent.",
  },
  {
    badge: "Signature",
    size: "7",
    builtUp: "3,750 – 4,150 Sq.ft.",
    image: "7-cent-side.jpg",
    alt: "7 Cent luxury villa at Zenora, Goldwins, Coimbatore",
    desc: "The balance of grandeur and warmth. Generous spaces that breathe, with rooftop access to the Sky Garden and Aqua Lounge.",
  },
  {
    badge: "Estate",
    size: "11",
    builtUp: "5,200 – 5,850 Sq.ft.",
    image: "bedroom01.jpg",
    alt: "11 Cent estate villa at Zenora, Goldwins, Coimbatore",
    desc: "The pinnacle of Zenora living. Expansive, commanding, and designed for those who have arrived — and know it.",
  },
];

interface ResidencesProps {
  onOpenPlan?: (size?: string) => void;
}

export default function Residences({ onOpenPlan }: ResidencesProps = {}) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  useGSAP(
    () => {
      // Pricing Table Reveal
      gsap.from(".pricing-table-anim", {
        scrollTrigger: {
          trigger: ".pricing-table-anim",
          start: "top 85%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 30,
        duration: 0.9,
        ease: "power3.out",
      });

      // Floor Plan Header Reveal
      gsap.from(".floor-plan-header", {
        scrollTrigger: {
          trigger: ".floor-plan-header",
          start: "top 85%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 25,
        duration: 0.8,
        ease: "power3.out",
      });

      // Villa Cards Staggered Reveal
      gsap.from(".villa-card-anim", {
        scrollTrigger: {
          trigger: ".villa-card-anim",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 45,
        scale: 0.96,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="residences" ref={sectionRef} className="py-14 sm:py-20 lg:py-24 bg-[#faf5f0]/50">
      <div className="px-5 sm:px-8 md:px-12 lg:px-20 max-w-screen-xl mx-auto">
        {/* Pricing Table (Matches Reference Layout) */}
        <div className="pricing-table-anim mb-14 sm:mb-20 lg:mb-24">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] text-gray-900 leading-none">
              Pricing <span className="font-display italic text-forest">Table</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto bg-white shadow-sm border border-gray-200 overflow-hidden">
            {/* Table Header: High-contrast Forest Green with White Text */}
            <div className="grid grid-cols-3 bg-forest text-white font-sans text-[10px] sm:text-sm font-semibold uppercase tracking-[0.08em] sm:tracking-[0.16em] text-center divide-x divide-white/20">
              <div className="py-4 px-2 sm:px-4">Type</div>
              <div className="py-4 px-2 sm:px-4">Land Area</div>
              <div className="py-4 px-2 sm:px-4">Built-up Area</div>
            </div>

            {/* Table Body: Alternating Rows */}
            <div className="divide-y divide-gray-100 font-sans text-xs sm:text-sm text-center">
              {[
                { type: "4 BHK", land: "5.5 Cents", builtUp: "2,850 – 3,250 Sq.ft." },
                { type: "4 BHK", land: "7 Cents", builtUp: "3,750 – 4,150 Sq.ft." },
                { type: "5 BHK", land: "11 Cents", builtUp: "5,200 – 5,850 Sq.ft." },
              ].map((row, idx) => (
                <div
                  key={row.land}
                  className={`grid grid-cols-3 divide-x divide-gray-100 text-gray-800 ${
                    idx % 2 === 1 ? "bg-[#faf7f3]" : "bg-white"
                  } hover:bg-[#f5ede4] transition-colors`}
                >
                  <div className="py-4 px-2 sm:px-4 font-semibold text-gray-900">{row.type}</div>
                  <div className="py-4 px-2 sm:px-4 font-medium">{row.land}</div>
                  <div className="py-4 px-2 sm:px-4 text-gray-600 font-mono text-[10px] sm:text-xs leading-snug flex items-center justify-center">
                    {row.builtUp}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floor Plan Slider (Matches Image 5) */}
        <div>
          <div className="floor-plan-header flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-6 mb-8 sm:mb-12">
            <div>
              <p className="font-sans text-forest font-semibold text-xs uppercase tracking-[0.25em] mb-4">Project Details</p>
              <h2
                className="font-display italic font-light text-forest"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
              >
                Floor <span className="font-serif not-italic text-forest">Plan</span>
              </h2>
              <p className="font-sans text-earth text-sm md:text-base max-w-xl mt-3 leading-relaxed">
                Explore thoughtfully designed villa layouts that blend space, privacy, and architectural precision — crafted for elevated living.
              </p>
            </div>
            <div className="flex gap-3 shrink-0 self-end md:self-auto md:hidden">
              <button
                aria-label="Previous"
                onClick={() => scroll(-1)}
                className="w-11 h-11 rounded-full border border-forest text-forest flex items-center justify-center hover:bg-forest hover:text-ivory transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                aria-label="Next"
                onClick={() => scroll(1)}
                className="w-11 h-11 rounded-full border border-forest text-forest flex items-center justify-center hover:bg-forest hover:text-ivory transition-colors"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div
            ref={trackRef}
            className="flex md:grid md:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pb-2 -mx-5 px-5 sm:-mx-8 sm:px-8 md:mx-0 md:px-0 scroll-pl-5 sm:scroll-pl-8 md:scroll-pl-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {villas.map((villa) => (
              <div
                key={villa.size}
                className="villa-card-anim group relative overflow-hidden shrink-0 md:shrink snap-start w-[85%] sm:w-[70%] md:w-auto shadow-lg rounded-sm"
              >
                <SiteImage src={villa.image} alt={villa.alt} aspectRatio="aspect-[4/5]" />
                <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/45 to-transparent" />
                <button
                  type="button"
                  onClick={() => {
                    if (onOpenPlan) {
                      onOpenPlan(villa.size);
                    } else {
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-forest hover:bg-forest-light text-ivory font-sans text-[10px] uppercase tracking-[0.25em] px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:scale-105 z-10 cursor-pointer"
                >
                  View Plan
                </button>
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 lg:p-7">
                  <span className="font-sans text-gold text-[10px] uppercase tracking-[0.25em] block mb-1.5">
                    {villa.badge}
                  </span>
                  <h3 className="font-serif italic text-2xl lg:text-3xl text-white mb-2.5 flex items-baseline gap-1.5 leading-none">
                    <span>{villa.size}</span>
                    <span>Cent Villa</span>
                  </h3>
                  <p className="font-sans text-cream/90 text-xs sm:text-sm leading-relaxed">{villa.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 sm:mt-10 font-sans text-earth text-xs uppercase tracking-[0.25em]">60 exclusive units</p>
        </div>
      </div>
    </section>
  );
}
