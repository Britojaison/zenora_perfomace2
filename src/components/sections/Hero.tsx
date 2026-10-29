"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRouter } from "next/navigation";
import styles from "./Hero.module.css";

interface HeroProps {
  onOpenBrochure?: () => void;
}

export default function Hero(props: HeroProps) {
  void props;
  const router = useRouter();
  const containerRef = useRef<HTMLElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const formCardRef = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-vertical-anim", { opacity: 0, y: 15, duration: 0.8, delay: 0.1 })
        .from(".hero-image-box", { opacity: 0, scale: 0.96, duration: 1 }, "-=0.5")
        .from(".hero-badge", { opacity: 0, y: 20, duration: 0.8 }, "-=0.6")
        .from(formCardRef.current, { opacity: 0, x: 25, duration: 0.9 }, "-=0.8");
    },
    { scope: containerRef }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    router.push("/thank-you");
  };

  return (
    <section id="home" ref={containerRef} className={styles.heroSection}>
      {/* Background Architectural Image with Luxury Overlay */}
      <div className={styles.heroBgWrapper}>
        <Image
          src="/images/aerial-view-club-hosue.jpg"
          alt="Zenora luxury villa community aerial view in Goldwins, Coimbatore"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-[1.02]"
        />
        <div className={styles.heroBgOverlay} />
      </div>

      {/* Main Container - Centered horizontally across viewport */}
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10 w-full flex items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 xl:gap-24 w-full">
          {/* Left: Framed Visual Showcase with Vertical Title */}
          <div ref={visualRef} className="relative flex items-center justify-center shrink-0">
            {/* Assembly grouping vertical title + tall photo in flow */}
            <div className="flex items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8">
              {/* Vertical Title (In layout flow so hero composition is mathematically centered) */}
              <div className={`hero-vertical-anim ${styles.verticalTextContainer}`}>
                <div className={styles.verticalTextInner}>
                  <span>Luxury</span>
                  <span>Villas</span>
                </div>
              </div>

              {/* Tall Framed Image Container */}
              <div className="hero-image-box relative w-[300px] sm:w-[350px] md:w-[390px] lg:w-[420px] h-[480px] sm:h-[530px] md:h-[580px] lg:h-[620px]">
                {/* Offset Accent Outline Box (Extending top & right) */}
                <div className="absolute -top-5 -right-5 w-full h-full border-2 border-forest pointer-events-none z-0" />

                {/* Main Photo */}
                <div className="relative w-full h-full rounded-none overflow-hidden shadow-2xl z-10 border border-white">
                  <Image
                    src="/images/7-cent-side.jpg"
                    alt="Zenora luxury villa architecture in Goldwins, Coimbatore"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                {/* Overlapping Bottom Badge / Pill (Centered 2-Column Grid, No overflow) */}
                <div className="hero-badge absolute -bottom-7 sm:-bottom-8 left-1/2 -translate-x-1/2 w-[92%] sm:w-[90%] max-w-[420px] bg-white rounded-2xl sm:rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.12)] py-3 sm:py-3.5 px-3 sm:px-5 grid grid-cols-[1fr_auto_1fr] items-center border border-gray-100 z-20 overflow-hidden">
                  {/* Left Column: Specs / Location */}
                  <div className="flex flex-col items-center justify-center text-center px-1 sm:px-2">
                    <p className="font-serif text-sm sm:text-base md:text-lg text-forest font-bold leading-tight whitespace-nowrap">
                      5.5, 7 & 11 Cent
                    </p>
                    <p className="font-sans text-[9px] sm:text-[10px] md:text-[11px] tracking-[0.16em] text-earth uppercase mt-1 font-medium whitespace-nowrap">
                      Goldwins, Coimbatore
                    </p>
                  </div>

                  {/* Center Divider */}
                  <div className="w-px h-8 sm:h-9 bg-forest/25 shrink-0 mx-1 sm:mx-2" />

                  {/* Right Column: Units / Pricing */}
                  <div className="flex flex-col items-center justify-center text-center px-1 sm:px-2">
                    <p className="font-serif text-base sm:text-xl md:text-2xl text-forest font-bold leading-tight whitespace-nowrap">
                      60 Villas*
                    </p>
                    <p className="font-serif italic text-[11px] sm:text-xs text-earth mt-0.5 whitespace-nowrap">
                      Onwards
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Floating White Enquiry Form Card */}
          <div className="flex justify-center shrink-0 w-full sm:w-auto">
            <div
              ref={formCardRef}
              className="w-full max-w-[420px] sm:w-[420px] bg-white rounded-md shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)] p-8 sm:p-10 border border-gray-100 relative z-10"
            >
              <h2 className="font-serif italic font-light text-3xl sm:text-[36px] text-gray-800 text-center mb-8">
                Enquiry Now
              </h2>

              {submitted ? (
                <div className="py-12 text-center">
                  <p className="font-serif italic text-2xl text-forest mb-2">Thank you.</p>
                  <p className="font-sans text-earth text-xs leading-relaxed">
                    Our luxury villa consultant will get in touch with you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="text-[10px] uppercase tracking-[0.15em] text-gray-500 font-sans font-medium block mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-[#f8f9fa] border border-[#e5e7eb] px-4 py-3.5 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-forest font-sans rounded-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-[0.15em] text-gray-500 font-sans font-medium block mb-2">
                      Phone Number *
                    </label>
                    <div className="flex bg-[#f8f9fa] border border-[#e5e7eb]">
                      <span className="px-3 py-3.5 border-r border-[#e5e7eb] text-xs text-gray-600 font-sans flex items-center gap-1.5 shrink-0">
                        <span>🇮🇳</span>
                        <span className="text-[8px] text-gray-400">▼</span>
                        <span>+91</span>
                      </span>
                      <input
                        type="tel"
                        required
                        placeholder="XXXXXXXXXX"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-transparent px-4 py-3.5 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none font-sans"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-[0.15em] text-gray-500 font-sans font-medium block mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="email@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-[#f8f9fa] border border-[#e5e7eb] px-4 py-3.5 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-forest font-sans rounded-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-forest hover:bg-forest-light text-white font-sans text-xs uppercase tracking-[0.25em] font-semibold transition-all duration-300 shadow-md cursor-pointer"
                  >
                    Submit
                  </button>

                  <p className="text-[9px] text-center text-gray-400 font-sans leading-relaxed pt-2">
                    Your information is secure. We will only contact you regarding your inquiry.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
