"use client";

import React, { useRef, useState } from "react";
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
  const thumbnailsRef = useRef<HTMLDivElement>(null);

  const prev = () => {
    const nextIdx = selectedIndex === 0 ? galleryImages.length - 1 : selectedIndex - 1;
    setSelectedIndex(nextIdx);
    scrollToThumb(nextIdx);
  };

  const next = () => {
    const nextIdx = selectedIndex === galleryImages.length - 1 ? 0 : selectedIndex + 1;
    setSelectedIndex(nextIdx);
    scrollToThumb(nextIdx);
  };

  const scrollToThumb = (idx: number) => {
    const el = thumbnailsRef.current;
    if (!el) return;
    const thumbWidth = 90;
    el.scrollTo({ left: idx * thumbWidth - el.clientWidth / 2 + thumbWidth / 2, behavior: "smooth" });
  };

  const current = galleryImages[selectedIndex];

  return (
    <section id="gallery" className="py-24 bg-[#141211] text-white">
      <div className="px-6 md:px-12 max-w-screen-xl mx-auto">
        {/* Header with counter matching Image 3 */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2
              className="font-display italic font-light text-white"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Project <span className="text-red-500 font-serif not-italic">Gallery</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 font-display text-lg text-cream/70">
            <span className="text-2xl font-serif text-white">{selectedIndex + 1}</span>
            <span className="text-red-500 font-sans text-xs">—</span>
            <span className="text-sm font-sans text-cream/40">{galleryImages.length}</span>
          </div>
        </div>

        {/* Featured Main Image */}
        <div className="relative h-[340px] sm:h-[460px] md:h-[580px] w-full rounded-sm overflow-hidden mb-6 group">
          <Image
            src={current.src}
            alt={current.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-noir/70 via-transparent to-noir/20 pointer-events-none" />

          {/* Navigation Arrows */}
          <button
            onClick={prev}
            aria-label="Previous gallery image"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-sm bg-noir/50 hover:bg-noir/80 text-white flex items-center justify-center backdrop-blur-sm transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next gallery image"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-sm bg-noir/50 hover:bg-noir/80 text-white flex items-center justify-center backdrop-blur-sm transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Caption */}
          <div className="absolute bottom-5 left-6 right-6">
            <p className="font-serif italic text-lg md:text-xl text-white">{current.alt}</p>
          </div>
        </div>

        {/* Thumbnails Filmstrip matching Image 3 */}
        <div
          ref={thumbnailsRef}
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
              className={`relative shrink-0 w-20 sm:w-24 h-14 sm:h-16 rounded-sm overflow-hidden transition-all duration-300 ${
                selectedIndex === i
                  ? "ring-2 ring-red-500 opacity-100 scale-105"
                  : "opacity-45 hover:opacity-85"
              }`}
            >
              <Image src={img.src} alt={img.alt} fill sizes="96px" className="object-cover" />
            </button>
          ))}
        </div>

        {/* Bottom Pagination Dots */}
        <div className="flex justify-center items-center gap-1.5 mt-4">
          {galleryImages.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setSelectedIndex(i);
                scrollToThumb(i);
              }}
              aria-label={`Go to image ${i + 1}`}
              className={`h-1 transition-all duration-300 rounded-full ${
                selectedIndex === i ? "w-6 bg-red-500" : "w-1.5 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
