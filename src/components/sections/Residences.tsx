"use client";

import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SiteImage from "@/components/ui/SiteImage";

const villas = [
  {
    badge: "Intimate",
    size: "5.5",
    image: "master-bedroom-view-1.jpg",
    alt: "5.5 Cent luxury villa at Zenora, Goldwins, Coimbatore",
    desc: "A refined sanctuary designed for those who value privacy and precision. Every corner considered, every material chosen with intent.",
  },
  {
    badge: "Signature",
    size: "7",
    image: "7-cent-side.jpg",
    alt: "7 Cent luxury villa at Zenora, Goldwins, Coimbatore",
    desc: "The balance of grandeur and warmth. Generous spaces that breathe, with rooftop access to the Sky Garden and Aqua Lounge.",
  },
  {
    badge: "Estate",
    size: "11",
    image: "bedroom01.jpg",
    alt: "11 Cent estate villa at Zenora, Goldwins, Coimbatore",
    desc: "The pinnacle of Zenora living. Expansive, commanding, and designed for those who have arrived — and know it.",
  },
];

export default function Residences() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <section id="residences" className="py-24 bg-cream/40">
      <div className="px-6 md:px-20 max-w-screen-xl mx-auto">
        {/* Pricing Table (Matches Image 4) */}
        <div className="mb-20">
          <div className="text-center md:text-left mb-10">
            <p className="font-sans text-gold text-xs uppercase tracking-[0.25em] mb-3">Pricing & Configurations</p>
            <h2
              className="font-display italic font-light text-forest"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Pricing <span className="font-serif not-italic text-forest">Table</span>
            </h2>
          </div>

          <div className="bg-white shadow-sm overflow-hidden">
            <div className="grid grid-cols-3 bg-forest text-ivory font-sans text-[10px] uppercase tracking-[0.25em] text-center">
              <div className="py-4">Unit Type</div>
              <div className="py-4">Plot Size</div>
              <div className="py-4">Unit Plan</div>
            </div>
            {villas.map((villa) => (
              <div
                key={villa.size}
                className="grid grid-cols-3 items-center text-center border-b border-cream font-sans text-sm text-forest"
              >
                <div className="py-5 font-serif italic text-base">{villa.badge} ({villa.size} Cent)</div>
                <div className="py-5 text-earth">{villa.size} Cent Plot</div>
                <div className="py-3">
                  <a
                    href="#contact"
                    className="inline-block bg-forest text-ivory text-[9px] uppercase tracking-[0.25em] px-5 py-2.5 hover:bg-gold hover:text-noir transition-colors"
                  >
                    Download Unit Plan
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floor Plan Slider (Matches Image 5) */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="font-sans text-gold text-xs uppercase tracking-[0.25em] mb-4">Project Details</p>
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
                className="w-10 h-10 rounded-full border border-forest text-forest flex items-center justify-center hover:bg-forest hover:text-ivory transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                aria-label="Next"
                onClick={() => scroll(1)}
                className="w-10 h-10 rounded-full border border-forest text-forest flex items-center justify-center hover:bg-forest hover:text-ivory transition-colors"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div
            ref={trackRef}
            className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible snap-x md:snap-none pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {villas.map((villa) => (
              <div
                key={villa.size}
                className="group relative overflow-hidden shrink-0 md:shrink snap-start w-[85%] sm:w-[70%] md:w-auto shadow-lg rounded-sm"
              >
                <SiteImage src={villa.image} alt={villa.alt} aspectRatio="aspect-[4/5]" />
                <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/45 to-transparent" />
                <a
                  href="#contact"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-forest text-ivory font-sans text-[10px] uppercase tracking-[0.25em] px-6 py-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-md"
                >
                  View Plan
                </a>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7">
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

          <p className="mt-10 font-sans text-earth text-xs uppercase tracking-[0.25em]">60 exclusive units</p>
        </div>
      </div>
    </section>
  );
}
