"use client";

import React from "react";
import Image from "next/image";

interface QuoteBannerProps {
  image: string;
  quote: string;
  attribution?: string;
  alt: string;
}

export default function QuoteBanner({ image, quote, attribution, alt }: QuoteBannerProps) {
  return (
    <section className="relative h-[70vh] md:h-screen overflow-hidden">
      <Image
        src={`/images/${encodeURIComponent(image)}`}
        alt={alt}
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-noir/40" />
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="text-center max-w-2xl">
          <p
            className="font-display italic font-light text-cream leading-[1.3]"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.8rem)" }}
          >
            {quote}
          </p>
          {attribution && (
            <p className="font-sans text-gold text-xs uppercase tracking-[0.25em] mt-6">{attribution}</p>
          )}
        </div>
      </div>
    </section>
  );
}
