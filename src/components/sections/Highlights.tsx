"use client";

import React from "react";
import { Building2, Home, Sparkles, Plane, Calendar } from "lucide-react";

const highlights = [
  {
    icon: Building2,
    title: "60 Exclusive Ultra-Luxury Villas",
  },
  {
    icon: Home,
    title: "Exclusive Clubhouse & Wellness Arena",
  },
  {
    icon: Sparkles,
    title: "4+ Curated Rooftop Lifestyle Experiences",
  },
  {
    icon: Plane,
    title: "10 Minutes from Coimbatore Airport",
  },
];

export default function Highlights() {
  return (
    <section id="highlights" className="py-24 bg-[#faf5f0]">
      <div className="px-6 md:px-20 max-w-screen-xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] text-forest leading-none">
              Project <span className="font-display italic text-wine">Highlights</span>
            </h2>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 bg-wine hover:bg-[#200508] text-white font-sans text-xs uppercase tracking-[0.2em] px-7 py-3.5 font-medium transition-all duration-300 shadow-sm hover:shadow-md active:scale-[0.99] self-start sm:self-auto cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Schedule A Site Visit</span>
          </a>
        </div>

        {/* 4 Clean Square Cards in 1 Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 sm:p-10 shadow-sm border border-gray-100/70 flex flex-col items-center justify-center text-center aspect-square transition-all duration-300 hover:shadow-md hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 flex items-center justify-center mb-6 text-wine group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-9 h-9 stroke-[1.4]" />
                </div>
                <p className="font-sans text-forest text-sm sm:text-[15px] font-medium leading-relaxed max-w-[210px]">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

