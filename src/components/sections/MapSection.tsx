"use client";

import React from "react";
import { MapPin } from "lucide-react";

export default function MapSection() {
  return (
    <section id="map-section" className="pt-6 pb-20 px-6 md:px-20 max-w-screen-xl mx-auto">
      <div className="mb-10">
        <h2
          className="font-display italic font-light text-forest mb-6"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
        >
          Find us in Coimbatore.
        </h2>
        <p className="font-sans text-earth text-base leading-relaxed max-w-xl">
          Nestled in the serene locality of Goldwins, Zenora offers an unmatched address in Coimbatore, connected to
          the city, yet a world apart.
        </p>
      </div>

      <div className="relative border border-gold/60 overflow-hidden h-[420px] md:h-[500px]">
        <iframe
          title="Zenora, Goldwins, Coimbatore"
          src="https://www.google.com/maps?q=Goldwins,+Coimbatore&output=embed"
          className="absolute inset-0 w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="absolute bottom-6 left-6 max-w-xs p-6 bg-forest/95 border border-gold/30 text-cream">
          <h3 className="font-display italic font-light text-2xl mb-1">Zenora</h3>
          <p className="font-sans text-gold text-[10px] uppercase tracking-[0.25em] mb-3">Goldwins, Coimbatore</p>
          <p className="font-sans text-cream/80 text-xs leading-relaxed mb-4">
            Premium villa community crafted for those who aspire to elevated living in the heart of Tamil Nadu.
          </p>
          <a
            href="https://maps.google.com/?q=Goldwins+Coimbatore"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-sans text-gold text-[10px] uppercase tracking-[0.2em] hover:text-cream transition-colors mb-2"
          >
            <MapPin className="w-3 h-3" />
            View on Google Maps
          </a>
          <a
            href="https://zenvistas.spimproject.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-sans text-gold text-[10px] uppercase tracking-[0.2em] hover:text-cream transition-colors"
          >
            Explore in Webverse
          </a>
        </div>
      </div>
    </section>
  );
}
