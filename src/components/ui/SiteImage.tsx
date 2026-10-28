"use client";

import React from "react";
import Image from "next/image";

interface SiteImageProps {
  src: string; // filename inside /public/images, e.g. "clubhouse.jpg"
  alt: string;
  aspectRatio?: string; // tailwind aspect class, e.g. "aspect-[16/10]"
  className?: string;
  tag?: string;
  priority?: boolean;
  sizes?: string;
}

export default function SiteImage({
  src,
  alt,
  aspectRatio = "aspect-[16/10]",
  className = "",
  tag,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw",
}: SiteImageProps) {
  return (
    <div className={`relative overflow-hidden bg-forest-dark group ${aspectRatio} ${className}`}>
      <Image
        src={`/images/${encodeURIComponent(src)}`}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
      />
      {tag && (
        <span className="absolute top-3 left-3 text-[9px] uppercase tracking-widest text-cream bg-forest/80 backdrop-blur-sm px-2.5 py-1 rounded-sm font-sans">
          {tag}
        </span>
      )}
    </div>
  );
}
