"use client";

import React from "react";

const stats = [
  { number: "60", label: "Exclusive Units" },
  { number: "3", label: "Villa Configurations" },
  { number: "4+", label: "Rooftop Experiences" },
  { number: "10", label: "Minutes From Airport" },
];

const highlights = [
  "Aspirational homes for the next chapter",
  "Rooftop lifestyle : Sky Garden, Aqua Lounge, Star Deck",
  "Goldwins convenience, minus the noise",
  "Modern design with practical comfort",
  "Clubhouse, Wellness Arena, EV charging, CCTV",
];

export default function Highlights() {
  return (
    <section id="highlights" className="py-24 bg-cream/40">
      <div className="px-6 md:px-20 max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="font-sans text-gold text-xs uppercase tracking-[0.25em] mb-4">Zenora Living</p>
            <h2
              className="font-display italic font-light text-forest"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
            >
              Project <span className="font-serif not-italic text-forest">Highlights</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="self-start md:self-auto bg-forest text-ivory font-sans text-[10px] uppercase tracking-[0.25em] px-8 py-4 hover:bg-gold hover:text-noir transition-colors duration-500"
          >
            Schedule A Site Visit
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-5">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white text-center py-10 px-4 shadow-sm">
              <p className="font-sans text-gold font-light leading-none mb-3" style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}>
                {stat.number}
              </p>
              <p className="font-sans text-earth text-[10px] uppercase tracking-[0.25em]">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-5">
          {highlights.map((item) => (
            <div key={item} className="bg-white py-10 px-6 text-center shadow-sm flex items-center justify-center min-h-[140px]">
              <p className="font-sans text-forest text-sm leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
