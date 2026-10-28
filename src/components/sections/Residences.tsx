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
        <div className="flex items-end justify-between gap-6 mb-12">
          <div>
            <p className="font-sans text-gold text-xs uppercase tracking-[0.25em] mb-4">Residences</p>
            <h2
              className="font-display italic font-light text-forest"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Choose your elevation.
            </h2>
          </div>
          <div className="flex gap-3 shrink-0">
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
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {villas.map((villa) => (
            <div
              key={villa.size}
              className="group relative overflow-hidden shrink-0 snap-start w-[85%] md:w-[calc(50%-12px)] shadow-lg"
            >
              <SiteImage src={villa.image} alt={villa.alt} aspectRatio="aspect-[4/3]" />
              <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/40 to-transparent" />
              <a
                href="#contact"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-forest text-ivory font-sans text-[10px] uppercase tracking-[0.25em] px-6 py-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              >
                Enquire
              </a>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="font-sans text-gold text-[10px] uppercase tracking-[0.25em] block mb-2">
                  {villa.badge}
                </span>
                <h3 className="font-serif italic text-3xl text-white mb-3 flex items-baseline gap-1.5 leading-none">
                  <span>{villa.size}</span>
                  <span>Cent Villa</span>
                </h3>
                <p className="font-sans text-cream text-sm leading-relaxed max-w-md">{villa.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white shadow-sm">
          <div className="grid grid-cols-3 bg-forest text-ivory font-sans text-[10px] uppercase tracking-[0.25em] text-center">
            <div className="py-4">Villa</div>
            <div className="py-4">Plot Size</div>
            <div className="py-4">Enquiry</div>
          </div>
          {villas.map((villa) => (
            <div
              key={villa.size}
              className="grid grid-cols-3 items-center text-center border-b border-cream font-sans text-sm text-forest"
            >
              <div className="py-5">{villa.badge}</div>
              <div className="py-5">{villa.size} Cent</div>
              <div className="py-3">
                <a
                  href="#contact"
                  className="inline-block bg-forest text-ivory text-[9px] uppercase tracking-[0.25em] px-5 py-2 hover:bg-gold hover:text-noir transition-colors"
                >
                  Enquire
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 font-sans text-earth text-xs uppercase tracking-[0.25em]">60 exclusive units</p>
      </div>
    </section>
  );
}
