"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Kishore Chandran",
    rating: 5,
    text: "Visited the Zenora project recently and was impressed with the concept. A thoughtfully planned 7-acre low-density villa community with just 59 villas and nearly 50% green space. The focus on calm living, landscaped gardens and community …",
  },
  {
    name: "Kaarthik n",
    rating: 5,
    text: "I have visited their office recently and came to know about their upcoming ultra luxury legacy villa project. Amazed with the project details. Awaiting for the pre launch and launch. Excellent project for Business Tycoons in and around Southern Tamil Nadu.",
  },
  {
    name: "aksarath thangam",
    rating: 5,
    text: "We've booked a dream villa in Coimbatore with Zenvistas! The area is super peaceful and chill. Plus, it's really accessible to all the key spots in the city. Grateful for all your support - whole team",
  },
  {
    name: "Nishaa",
    rating: 5,
    text: "I'm truly impressed with this. The villas they provide are not just homes but a perfect combination of luxury and comfort. It feels like a dream house come true. The location is prime, making it a smart investment for the future. Every …",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  React.useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const active = testimonials[current];

  return (
    <section id="testimonials" className="py-14 sm:py-20 lg:py-24 bg-cream/30">
      <div className="px-5 sm:px-8 md:px-12 lg:px-20 max-w-screen-xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <p className="font-sans text-forest font-semibold text-xs uppercase tracking-[0.25em] mb-3">Client Stories</p>
          <h2
            className="font-display italic font-light text-forest mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            What Our <span className="text-forest">Residents Say</span>
          </h2>

          {/* Google Reviews Badge */}
          <div className="inline-flex items-center gap-2.5 bg-white px-5 py-2.5 rounded-full shadow-sm border border-cream/60">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"
              />
              <path
                fill="#FBBC05"
                d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
              />
            </svg>
            <span className="font-sans text-forest font-medium text-xs tracking-wider">Google Reviews</span>
            <span className="font-sans font-semibold text-xs text-forest">4.9</span>
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-none" />
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial Card */}
        <div
          className="max-w-2xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div
            key={current}
            className="bg-white p-6 sm:p-8 md:p-12 shadow-sm border border-cream/50 relative text-center min-h-[260px] sm:min-h-[240px] flex flex-col justify-center animate-in fade-in duration-500"
          >
            <h3 className="font-serif text-xl md:text-2xl text-forest mb-3">{active.name}</h3>
            <div className="flex justify-center gap-1 text-forest mb-6">
              {[...Array(active.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-forest stroke-none" />
              ))}
            </div>
            <p className="font-sans text-earth text-sm md:text-base leading-relaxed italic max-w-lg mx-auto">
              &ldquo;{active.text}&rdquo;
            </p>
          </div>

          {/* Slider Pagination & Arrows */}
          <div className="flex items-center justify-between mt-6 sm:mt-8 max-w-2xl mx-auto px-1 sm:px-4">
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  className={`h-1.5 transition-all duration-300 rounded-full ${
                    current === idx ? "w-8 bg-forest" : "w-2 bg-cream hover:bg-taupe"
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={prev}
                aria-label="Previous review"
                className="w-11 h-11 border border-cream hover:border-forest text-forest hover:text-forest-light flex items-center justify-center transition-colors bg-white cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                aria-label="Next review"
                className="w-11 h-11 border border-cream hover:border-forest text-forest hover:text-forest-light flex items-center justify-center transition-colors bg-white cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
