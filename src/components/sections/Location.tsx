"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Bus, GraduationCap, HeartPulse } from "lucide-react";

type CategoryKey = "schools" | "hospitals" | "connectivity";

interface CategoryData {
  title: string;
  categoryLabel: string;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  items: { name: string; distance: string }[];
}

const categories: Record<CategoryKey, CategoryData> = {
  connectivity: {
    title: "Nearby Connectivity",
    categoryLabel: "TRANSPORT",
    image: "/images/street-view.jpg",
    icon: Bus,
    items: [
      { name: "Coimbatore International Airport", distance: "5.2 km" },
      { name: "Peelamedu Railway Station", distance: "10.8 km" },
      { name: "Kaniyur Toll Gate", distance: "11.4 km" },
      { name: "Singanallur Bus Stand", distance: "10.4 km" },
      { name: "Coimbatore Central Railway Station", distance: "14.4 km" },
      { name: "Gandhipuram Bus Stand", distance: "13.8 km" },
    ],
  },
  schools: {
    title: "Reputed Institutions",
    categoryLabel: "EDUCATION",
    image: "/images/childrens-play-garden.jpg",
    icon: GraduationCap,
    items: [
      { name: "The Camford International School", distance: "3.5 km" },
      { name: "PSG Institute of Technology & Applied Research", distance: "4.8 km" },
      { name: "GRD College of Arts & Science", distance: "6.2 km" },
      { name: "CIT (Coimbatore Institute of Technology)", distance: "7.5 km" },
      { name: "GD Matriculation Hr. Sec. School", distance: "8.1 km" },
    ],
  },
  hospitals: {
    title: "Healthcare Centers",
    categoryLabel: "HEALTHCARE",
    image: "/images/meditation-centre.jpg",
    icon: HeartPulse,
    items: [
      { name: "KMCH (Kovai Medical Center & Hospital)", distance: "4.2 km" },
      { name: "Lotus Eye Hospital & Institute", distance: "5.8 km" },
      { name: "Royal Care Super Speciality Hospital", distance: "6.9 km" },
      { name: "Aravind Eye Hospital", distance: "8.5 km" },
      { name: "PSG Hospitals (Peelamedu)", distance: "9.2 km" },
    ],
  },
};

export default function Location() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("connectivity");

  const currentData = categories[activeCategory];
  const IconComponent = currentData.icon;

  return (
    <section id="location" className="py-14 sm:py-20 lg:py-24 px-5 sm:px-8 md:px-12 max-w-screen-xl mx-auto">
      {/* Header matching Screenshot 2 */}
      <div className="text-center mb-8 sm:mb-14">
        <p className="font-sans text-forest font-semibold text-xs uppercase tracking-[0.25em] mb-3">Explore The Area</p>
        <h2
          className="font-display italic font-light text-forest"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
        >
          Location <span className="text-forest">Highlights</span>
        </h2>
      </div>

      {/* 4-Column Layout */}
      <div className="grid grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4 items-stretch">
        {/* Card 1: Schools */}
        <button
          onClick={() => setActiveCategory("schools")}
          className={`group relative h-[150px] sm:h-[240px] lg:h-[420px] rounded-sm overflow-hidden text-left focus:outline-none transition-all duration-300 ${
            activeCategory === "schools" ? "ring-2 ring-forest ring-offset-2 scale-[1.02]" : "hover:opacity-95"
          }`}
        >
          <Image
            src={categories.schools.image}
            alt="Schools near Zenora Goldwins"
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-noir/90 via-noir/40 to-noir/10" />
          <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-6">
            <span className="font-sans text-[8px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.25em] text-cream/70 mb-1">Education</span>
            <h3 className="font-serif text-sm sm:text-2xl text-white font-medium leading-tight">Schools</h3>
          </div>
        </button>

        {/* Card 2: Hospitals */}
        <button
          onClick={() => setActiveCategory("hospitals")}
          className={`group relative h-[150px] sm:h-[240px] lg:h-[420px] rounded-sm overflow-hidden text-left focus:outline-none transition-all duration-300 ${
            activeCategory === "hospitals" ? "ring-2 ring-forest ring-offset-2 scale-[1.02]" : "hover:opacity-95"
          }`}
        >
          <Image
            src={categories.hospitals.image}
            alt="Hospitals near Zenora Goldwins"
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-noir/90 via-noir/40 to-noir/10" />
          <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-6">
            <span className="font-sans text-[8px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.25em] text-cream/70 mb-1">Healthcare</span>
            <h3 className="font-serif text-sm sm:text-2xl text-white font-medium leading-tight">Hospitals</h3>
          </div>
        </button>

        {/* Card 3: Connectivity */}
        <button
          onClick={() => setActiveCategory("connectivity")}
          className={`group relative h-[150px] sm:h-[240px] lg:h-[420px] rounded-sm overflow-hidden text-left focus:outline-none transition-all duration-300 ${
            activeCategory === "connectivity" ? "ring-2 ring-forest ring-offset-2 scale-[1.02]" : "hover:opacity-95"
          }`}
        >
          <Image
            src={categories.connectivity.image}
            alt="Connectivity near Zenora Goldwins"
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-noir/90 via-noir/40 to-noir/10" />
          <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-6">
            <span className="font-sans text-[8px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.25em] text-cream/70 mb-1">Transit</span>
            <h3 className="font-serif text-sm sm:text-2xl text-white font-medium leading-tight">Connectivity</h3>
          </div>
        </button>

        {/* Card 4: Details Panel (Matches Image 2 Right Column) */}
        <div className="col-span-3 lg:col-span-1 bg-white p-6 sm:p-7 rounded-sm shadow-sm border border-cream/50 flex flex-col lg:h-[420px]">
          <div>
            <div className="flex items-center gap-3 text-forest mb-2">
              <IconComponent className="w-6 h-6 stroke-[1.5]" />
            </div>
            <div className="w-12 h-0.5 bg-forest mb-4" />
            <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-taupe block mb-1">
              {currentData.categoryLabel}
            </span>
            <h3 className="font-serif text-xl text-forest mb-4">{currentData.title}</h3>

            <div className="divide-y divide-cream/60">
              {currentData.items.slice(0, 5).map((item) => (
                <div key={item.name} className="py-2.5 flex items-center justify-between gap-3 text-xs">
                  <span className="font-sans text-earth min-w-0 flex-1 lg:truncate lg:max-w-[170px]">{item.name}</span>
                  <span className="font-sans text-forest font-semibold shrink-0 ml-2">{item.distance}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
