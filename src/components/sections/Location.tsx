"use client";

import React from "react";

const travel = [
  { name: "Coimbatore International Airport", distance: "5.2 km" },
  { name: "Peelamedu Railway Station", distance: "10.8 km" },
  { name: "Coimbatore Central Railway Station", distance: "14.4 km" },
  { name: "Kaniyur Toll Gate", distance: "11.4 km" },
  { name: "Singanallur Bus Stand", distance: "10.4 km" },
  { name: "Gandhipuram Bus Stand", distance: "13.8 km" },
];

export default function Location() {
  return (
    <section id="location" className="py-24 px-6 md:px-20 max-w-screen-xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div>
          <p className="font-sans text-gold text-xs uppercase tracking-[0.25em] mb-4">Location</p>
          <h2
            className="font-display italic font-light text-forest mb-8"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Know your
            <br />
            neighbourhood
          </h2>
          <p className="font-sans text-earth text-base leading-[1.9] max-w-md">
            Goldwins offers calm neighbourhood living with direct access to essentials. Steady development, strong
            residential demand, and the quiet confidence of a location that has already arrived.
          </p>
        </div>

        <div>
          <p className="font-sans text-forest text-xs uppercase tracking-[0.25em] pb-3 mb-2 border-b border-gold inline-block">
            Travel
          </p>
          <div>
            {travel.map((item) => (
              <div key={item.name} className="flex items-center justify-between py-4 border-b border-taupe/20">
                <span className="font-sans text-earth text-base">{item.name}</span>
                <span className="font-sans text-gold text-xs text-right ml-4 shrink-0">{item.distance}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
