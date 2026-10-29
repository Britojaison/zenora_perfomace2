"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  { src: "/images/Dinning1.jpg", alt: "Zenora Dining & Living Experience" },
  { src: "/images/Living.jpg", alt: "Spacious Living Room" },
  { src: "/images/Kitchen.jpg", alt: "Modern Kitchen Architecture" },
  { src: "/images/master-bedroom-view-1.jpg", alt: "Master Bedroom Suite" },
  { src: "/images/bedroom01.jpg", alt: "Luxury Bedroom Design" },
  { src: "/images/bathroom.jpg", alt: "Curated Bathroom Finishes" },
  { src: "/images/street-view.jpg", alt: "Scenic Villa Street View" },
  { src: "/images/7-cent-side.jpg", alt: "7 Cent Signature Villa" },
  { src: "/images/aerial-view-club-hosue.jpg", alt: "Aerial Clubhouse View" },
  { src: "/images/swimming-pool.jpg", alt: "Serenity Swimming Pool" },
  { src: "/images/private-theatre.jpg", alt: "Exclusive Private Cinema" },
  { src: "/images/garden-cafe.jpg", alt: "Lush Garden Cafe" },
  { src: "/images/business-lounge.jpg", alt: "Executive Business Lounge" },
  { src: "/images/meditation-centre.jpg", alt: "Tranquil Meditation Centre" },
  { src: "/images/childrens-play-garden.jpg", alt: "Children's Play Garden" },
  { src: "/images/cricket.jpg", alt: "Cricket Turf" },
  { src: "/images/multi-sport-court.jpg", alt: "Multi Sport Arena" },
  { src: "/images/walking-paths.jpg", alt: "Landscaped Walking Paths" },
  { src: "/images/View-48.jpg", alt: "Panoramic Community View" },
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const thumbnailsRef = useRef<HTMLDivElement>(null);

  const scrollToThumb = useCallback((idx: number) => {
    const el = thumbnailsRef.current;
    if (!el) return;
    const thumbWidth = 90;
    el.scrollTo({ left: idx * thumbWidth - el.clientWidth / 2 + thumbWidth / 2, behavior: "smooth" });
  }, []);

  const prev = useCallback(() => {
    setSelectedIndex((prevIdx) => {
      const nextIdx = prevIdx === 0 ? galleryImages.length - 1 : prevIdx - 1;
      scrollToThumb(nextIdx);
      return nextIdx;
    });
  }, [scrollToThumb]);

  const next = useCallback(() => {
    setSelectedIndex((prevIdx) => {
      const nextIdx = prevIdx === galleryImages.length - 1 ? 0 : prevIdx + 1;
      scrollToThumb(nextIdx);
      return nextIdx;
    });
  }, [scrollToThumb]);

  // Auto-scroll every 3.5 seconds unless paused by hover/touch
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      next();
    }, 3500);

    return () => clearInterval(timer);
  }, [isPaused, next]);

  const current = galleryImages[selectedIndex];

  return (
    <section id="gallery" className="py-14 sm:py-20 lg:py-24 bg-white text-charcoal">
      <div className="px-5 sm:px-8 md:px-12 max-w-screen-xl mx-auto">
        {/* Header with counter matching Image 3 */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="font-sans text-forest font-semibold text-xs uppercase tracking-[0.25em] mb-2">Visual Tour</p>
            <h2
              className="font-display italic font-light text-forest"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Project <span className="text-forest font-serif not-italic">Gallery</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 font-display text-lg text-forest/70">
            <span className="text-2xl font-serif text-forest">{selectedIndex + 1}</span>
            <span className="text-forest font-sans text-xs">—</span>
            <span className="text-sm font-sans text-earth/50">{galleryImages.length}</span>
          </div>
        </div>

        {/* Featured Main Image */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="relative h-[280px] sm:h-[420px] md:h-[520px] lg:h-[580px] w-full rounded-sm overflow-hidden mb-4 sm:mb-6 group shadow-md border border-cream/70"
        >
          <Image
            src={current.src}
            alt={current.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-noir/70 via-transparent to-transparent pointer-events-none" />

          {/* Navigation Arrows */}
          <button
            onClick={prev}
            aria-label="Previous gallery image"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/90 hover:bg-white text-forest hover:text-forest-light flex items-center justify-center shadow-md backdrop-blur-sm transition-all border border-cream/70"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next gallery image"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/90 hover:bg-white text-forest hover:text-forest-light flex items-center justify-center shadow-md backdrop-blur-sm transition-all border border-cream/70"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Caption */}
          <div className="absolute bottom-3 sm:bottom-5 left-14 right-14 sm:left-6 sm:right-6">
            <p className="font-serif italic text-base md:text-xl text-white drop-shadow-md text-center sm:text-left">{current.alt}</p>
          </div>
        </div>

        {/* Thumbnails Filmstrip matching Image 3 */}
        <div
          ref={thumbnailsRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="flex gap-2.5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {galleryImages.map((img, i) => (
            <button
              key={img.src}
              onClick={() => {
                setSelectedIndex(i);
                scrollToThumb(i);
              }}
              aria-label={`Select image ${i + 1}`}
              className={`relative shrink-0 w-20 sm:w-24 h-14 sm:h-16 rounded-sm overflow-hidden border transition-all duration-300 ${
                selectedIndex === i
                  ? "ring-2 ring-forest ring-offset-2 opacity-100 scale-105 border-forest shadow-sm"
                  : "opacity-60 hover:opacity-100 border-cream"
              }`}
            >
              <Image src={img.src} alt={img.alt} fill sizes="96px" className="object-cover" />
            </button>
          ))}
        </div>

        {/* Bottom Pagination Dots */}
        <div className="hidden sm:flex justify-center items-center gap-1.5 mt-4">
          {galleryImages.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setSelectedIndex(i);
                scrollToThumb(i);
              }}
              aria-label={`Go to image ${i + 1}`}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                selectedIndex === i ? "w-6 bg-forest" : "w-1.5 bg-cream hover:bg-taupe"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
