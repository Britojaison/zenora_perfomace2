"use client";

import React from "react";
import SiteImage from "@/components/ui/SiteImage";

export default function Overview() {
  return (
    <section id="overview" className="py-24 px-6 md:px-20 max-w-screen-xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative h-[420px] md:h-[520px] max-w-[480px] mx-auto w-full">
          <div className="absolute top-0 left-0 w-[65%] h-[60%] overflow-hidden">
            <SiteImage
              src="aerial-view-club-hosue.jpg"
              alt="Zenora architecture"
              aspectRatio="h-full"
              sizes="(max-width: 768px) 60vw, 30vw"
            />
          </div>
          <div className="absolute top-[12%] left-[38%] w-[62%] h-[60%] border border-gold" />
          <div className="absolute bottom-0 left-[18%] w-[70%] h-[58%] overflow-hidden shadow-2xl">
            <SiteImage
              src="7-cent-side.jpg"
              alt="Zenora villa exterior"
              aspectRatio="h-full"
              sizes="(max-width: 768px) 70vw, 35vw"
            />
          </div>
        </div>

        <div>
          <p className="font-sans text-gold text-xs uppercase tracking-[0.25em] mb-6">A New Standard</p>
          <h2
            className="font-display italic font-light text-forest leading-[1.1] mb-8"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            More than a home
            <br />
            A way of being.
          </h2>
          <p className="font-sans text-earth text-base leading-[1.9] mb-6">
            Zenora is for those who want more from life more comfort, more intention, and more elegance in everyday
            living. Designed as an ultra luxury community in the quiet corner of Goldwins, Zenora combines premium
            architecture with curated lifestyle spaces.
          </p>
          <p className="font-sans text-earth text-base leading-[1.9]">
            The Horizon Garden, Serenity Pool, and Business Lounge, offering an elevated living experience with all the
            modern comforts
          </p>
          <a
            href="#contact"
            className="inline-block mt-10 bg-forest text-ivory font-sans text-[10px] uppercase tracking-[0.25em] px-8 py-4 hover:bg-gold hover:text-noir transition-colors duration-500"
          >
            Join The Experience
          </a>
        </div>
      </div>
    </section>
  );
}
