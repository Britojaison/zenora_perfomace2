"use client";

import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SiteImage from "@/components/ui/SiteImage";

const tabs = ["Indoor", "Outdoor", "Clubhouse"] as const;
type Tab = (typeof tabs)[number];

const images: Record<Tab, string[]> = {
  Indoor: [
    "bedroom01.jpg",
    "bathroom.jpg",
    "Kitchen.jpg",
    "Living.jpg",
    "Dinning1.jpg",
    "master-bedroom-view-1.jpg",
    "View-10.jpg",
    "View-11.jpg",
    "View-42.jpg",
  ],
  Outdoor: ["street-view.jpg", "7-cent-side.jpg", "aerial-view-club-hosue.jpg"],
  Clubhouse: ["clubhouse.jpg", "swimming-pool.jpg", "private-theatre.jpg", "View-48.jpg"],
};

const descriptions: Partial<Record<Tab, { title: string; text: string }>> = {
  Indoor: {
    title: "Indoor Spaces",
    text: "Interiors defined by proportion and light. Spaces that feel calm, considered and quietly refined.",
  },
};

export default function Gallery() {
  const [active, setActive] = useState<Tab>("Indoor");
  const rowRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    rowRef.current?.scrollBy({ left: dir * 480, behavior: "smooth" });
  };

  const desc = descriptions[active];

  return (
    <section id="gallery" className="pt-32 pb-16 px-6 md:px-20 max-w-screen-xl mx-auto">
      <div className="mb-16">
        <p className="font-sans text-gold text-xs uppercase tracking-[0.25em] mb-4">Gallery</p>
        <h2
          className="font-display italic font-light text-forest"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
        >
          See it to believe it.
        </h2>
      </div>

      <div className="mb-12">
        <div className="inline-flex w-full md:w-auto border-b border-taupe/20 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`relative font-sans text-[10px] md:text-xs uppercase tracking-wider px-4 md:px-6 py-3 transition-colors duration-300 whitespace-nowrap ${
                active === tab ? "text-forest" : "text-taupe hover:text-earth"
              }`}
            >
              {tab}
              {active === tab && <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold" />}
            </button>
          ))}
        </div>
        {desc && (
          <div className="max-w-2xl">
            <h3
              className="font-display text-forest mb-3"
              style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)" }}
            >
              {desc.title}
            </h3>
            <p className="font-sans text-earth text-base leading-relaxed">{desc.text}</p>
          </div>
        )}
      </div>

      <div className="relative group/gallery">
        <button
          onClick={() => scroll(-1)}
          aria-label="Scroll left"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-forest/80 hover:bg-forest text-cream rounded-full transition-all duration-300 opacity-0 group-hover/gallery:opacity-100 -translate-x-1/2 hover:scale-110"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => scroll(1)}
          aria-label="Scroll right"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-forest/80 hover:bg-forest text-cream rounded-full transition-all duration-300 opacity-0 group-hover/gallery:opacity-100 translate-x-1/2 hover:scale-110"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div ref={rowRef} className="flex gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {images[active].map((src, i) => (
            <SiteImage
              key={`${active}-${src}`}
              src={src}
              alt={`${active.toLowerCase()} view ${i + 1}`}
              aspectRatio="aspect-[4/3]"
              className="flex-shrink-0 w-[350px] md:w-[450px] cursor-pointer"
              sizes="(max-width: 768px) 350px, 450px"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
