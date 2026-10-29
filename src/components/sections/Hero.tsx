"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Download } from "lucide-react";
import styles from "./Hero.module.css";

interface HeroProps {
  onOpenBrochure: () => void;
}

export default function Hero({ onOpenBrochure }: HeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  const formCardRef = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-label", { opacity: 0, y: 15, duration: 0.8, delay: 0.1 })
        .from(".hero-title", { opacity: 0, y: 30, duration: 1 }, "-=0.5")
        .from(".hero-rule", { scaleX: 0, duration: 0.8 }, "-=0.6")
        .from(".hero-desc", { opacity: 0, y: 20, duration: 0.8 }, "-=0.5")
        .from(".hero-cta", { opacity: 0, y: 15, duration: 0.7 }, "-=0.5")
        .from(formCardRef.current, { opacity: 0, x: 35, duration: 0.9 }, "-=1");
    },
    { scope: containerRef }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-transparent border-b border-cream/25 pb-3 text-sm text-cream placeholder:text-cream/30 focus:outline-none focus:border-gold transition-colors font-sans";
  const labelClass = "text-[9px] uppercase tracking-[0.25em] text-cream/60 block mb-2 font-sans";

  return (
    <section id="home" ref={containerRef} className={styles.heroSection}>
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/street-view.jpg"
          alt="Zenora luxury villa community street view in Goldwins, Coimbatore"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className={styles.heroBg} />

      <div className="max-w-screen-xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: hero copy */}
          <div className="lg:col-span-7">
            <p className="hero-label font-sans text-white text-sm uppercase tracking-[0.25em] mb-6">
              Goldwins, Coimbatore
            </p>
            <h1
              className="hero-title font-display italic font-light text-white leading-[1.05]"
              style={{ fontSize: "clamp(2.25rem, 6vw, 5rem)" }}
            >
              Crafted for the Chosen
            </h1>
            <div className="hero-rule w-16 h-px bg-gold opacity-60 my-8 origin-left" />
            <p className="hero-desc font-sans text-white text-sm md:text-base max-w-md leading-relaxed mb-10">
              An exclusive community of 60 thoughtfully designed ultra-luxury villas, where luxury meets tranquility
            </p>
            <button
              onClick={onOpenBrochure}
              className="hero-cta group inline-flex items-center gap-3 bg-noir/40 backdrop-blur-sm hover:bg-gold text-white hover:text-forest font-sans text-xs uppercase tracking-[2px] px-10 py-4 transition-all duration-500"
            >
              <Download className="w-4 h-4" />
              Brochure
            </button>
          </div>

          {/* Right: enquiry form (Solitaire layout, Zenora form copy) */}
          <div className="lg:col-span-5">
            <div ref={formCardRef} className={`${styles.heroCard} p-8 text-cream`}>
              <h3 className="font-display italic font-light text-3xl text-cream mb-8">Enquire</h3>

              {submitted ? (
                <div className="py-10 text-center">
                  <p className="font-display italic font-light text-2xl text-cream">Thank you.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-7">
                  <div>
                    <label className={labelClass}>Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Phone</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Email</label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 border border-gold/70 hover:bg-gold text-cream hover:text-forest font-sans text-[10px] uppercase tracking-[0.25em] transition-all duration-300"
                  >
                    Send Enquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="font-sans text-[9px] uppercase text-white/80 tracking-[0.25em]">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/80 to-transparent" />
      </div>
    </section>
  );
}
