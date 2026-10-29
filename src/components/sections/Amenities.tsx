"use client";

import React, { useState } from "react";
import SiteImage from "@/components/ui/SiteImage";
import {
  Sparkles,
  Film,
  Flower2,
  Waves,
  Building2,
  Dumbbell,
  Eye,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const keyAmenities = [
  { id: "kids", label: "Kids Play Area", icon: Sparkles },
  { id: "theatre", label: "Open Air Theatre", icon: Film },
  { id: "yoga", label: "Yoga / Meditation Garden", icon: Flower2 },
  { id: "pool", label: "Swimming Pool", icon: Waves },
  { id: "coworking", label: "Co-working Space", icon: Building2 },
  { id: "gym", label: "Fitness Gym", icon: Dumbbell },
];

const allAmenities = [
  {
    title: "Meditation Centre",
    image: "meditation-centre.jpg",
    desc: "A quiet sanctuary within Zenora. Designed for reflection, stillness, and moments away from the rhythm of the day.",
  },
  {
    title: "Business Lounge",
    image: "business-lounge.jpg",
    desc: "A sophisticated space for residents balancing work and leisure. Quiet, private, and equipped for professional needs.",
  },
  {
    title: "Gala Room",
    image: "gala-room.jpg",
    desc: "A grand setting for special occasions and events. Perfectly designed for celebrations, gatherings, and memorable moments.",
  },
  {
    title: "Clubhouse",
    image: "clubhouse.jpg",
    desc: "A shared address within Zenora. A place where conversations, quiet gatherings, and community moments naturally unfold.",
  },
  {
    title: "Swimming Pool",
    image: "swimming-pool.jpg",
    desc: "A calm water retreat within the landscape. Meant for slow laps, quiet afternoons, and a refreshing pause.",
  },
  {
    title: "Multi Sport Court",
    image: "multi-sport-court.jpg",
    desc: "A versatile court where recreation finds its place. From quick games to longer evenings of sport.",
  },
  {
    title: "Children's Play Garden",
    image: "childrens-play-garden.jpg",
    desc: "A lively corner of the community. Designed for exploration, imagination, and carefree play.",
  },
  {
    title: "Community Lounge",
    image: "Community Lounge.jpg",
    desc: "An informal setting for conversation and connection. A place where neighbours meet beyond the everyday.",
  },
  {
    title: "Cricket Turf",
    image: "cricket.jpg",
    desc: "For the familiar rhythm of the game. Evenings often gather here around friendly matches and spirited play.",
  },
  {
    title: "Private Theatre",
    image: "private-theatre.jpg",
    desc: "Cinema-grade entertainment in the comfort of your community. Because evenings should be extraordinary.",
  },
  {
    title: "Walking Paths",
    image: "walking-paths.jpg",
    desc: "Pathways that move gently through Zenora. Designed for morning walks, evening conversations, and unhurried movement.",
  },
  {
    title: "Garden Cafe",
    image: "garden-cafe.jpg",
    desc: "A serene cafe nestled within lush gardens, offering a perfect spot to enjoy freshly brewed coffee or light bites amidst nature's tranquility.",
  },
];

interface AmenitiesProps {
  isUnlocked?: boolean;
  onRequestUnlock?: () => void;
}

export default function Amenities({ isUnlocked = false, onRequestUnlock }: AmenitiesProps = {}) {
  const [showAll, setShowAll] = useState(false);

  React.useEffect(() => {
    if (isUnlocked) {
      setShowAll(true);
    }
  }, [isUnlocked]);

  const handleToggle = () => {
    if (!isUnlocked) {
      if (onRequestUnlock) {
        onRequestUnlock();
      } else {
        setShowAll(true);
      }
      return;
    }
    setShowAll(!showAll);
  };

  return (
    <section id="amenities" className="py-14 sm:py-20 lg:py-24 bg-white">
      <div className="px-5 sm:px-8 md:px-12 max-w-screen-xl mx-auto">
        {/* Header matching site style */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <p className="font-sans text-forest font-semibold text-xs uppercase tracking-[0.25em] mb-3">
            Lifestyle & Leisure
          </p>
          <h2
            className="font-display italic font-light text-forest"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Curated <span className="text-forest font-serif not-italic">Amenities</span>
          </h2>
          <p className="font-sans text-earth text-sm md:text-base leading-relaxed mt-4">
            Discover a world of thoughtfully curated amenities designed to bring comfort, convenience, and luxury to
            your modern lifestyle.
          </p>
        </div>

        {/* 6 Rounded Icon Cards (Uniform static cards) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-3.5 mb-10 sm:mb-12">
          {keyAmenities.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="flex flex-col items-center justify-center p-4 sm:p-6 rounded-xl border border-cream/70 bg-cream/15 text-forest text-center min-h-[112px] sm:min-h-[140px] select-none shadow-sm"
              >
                <Icon className="w-7 h-7 mb-3 text-forest" />
                <span className="font-sans text-xs tracking-wider font-medium leading-tight">{item.label}</span>
              </div>
            );
          })}
        </div>

        {/* Action Button matching Screenshot 1 */}
        <div className="text-center mb-8">
          <button
            type="button"
            onClick={handleToggle}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 min-h-[48px] bg-forest hover:bg-forest-light text-white font-sans text-xs uppercase tracking-[0.2em] transition-all duration-300 shadow-sm cursor-pointer"
          >
            <Eye className="w-4 h-4" />
            {showAll ? "Hide Features" : "View All Features"}
            {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {/* Expandable Full Photo Amenities Grid */}
        {showAll && (
          <div
            id="all-amenities-grid"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 pt-10 border-t border-cream/60 transition-all duration-500 animate-fadeIn"
          >
            {allAmenities.map((item) => (
              <div key={item.title} className="group relative overflow-hidden bg-ivory shadow-sm border border-cream/50">
                <SiteImage
                  src={item.image}
                  alt={`${item.title} at Zenora luxury villa community`}
                  aspectRatio="aspect-[4/3]"
                />
                <div className="p-6">
                  <h3 className="font-display text-lg text-forest mb-2">{item.title}</h3>
                  <p className="font-sans text-earth text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
