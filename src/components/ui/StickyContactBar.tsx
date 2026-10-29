"use client";

import React from "react";
import { Phone } from "lucide-react";

export default function StickyContactBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-forest/95 backdrop-blur-md border-t border-gold/25 pt-2 px-3 pb-[max(0.5rem,env(safe-area-inset-bottom))] flex items-center gap-2">
      <a
        href="tel:+918870044213"
        className="flex-1 min-h-[44px] border border-gold/40 text-cream flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.15em] font-sans"
      >
        <Phone className="w-3.5 h-3.5 text-gold" />
        +91 88700 44213
      </a>
      <a
        href="#contact"
        className="flex-1 min-h-[44px] flex items-center justify-center bg-gold text-forest text-center text-[10px] uppercase tracking-[0.2em] font-sans font-semibold"
      >
        Enquire
      </a>
    </div>
  );
}
