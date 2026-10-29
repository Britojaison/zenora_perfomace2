"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 flex items-center justify-between h-20 sm:h-22">
        <Link href="/" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/zenora_logo_dark.svg"
            alt="Zenora luxury villa community in Goldwins, Coimbatore"
            className="h-10 sm:h-12 w-auto"
          />
        </Link>

        {/* Right Large CTA Buttons matching Reference Layout */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          {/* Phone Call CTA */}
          <a
            href="tel:+918870044213"
            className="inline-flex items-center gap-2 sm:gap-2.5 bg-[#25060a] hover:bg-[#1a0306] text-white font-sans text-xs sm:text-[13px] uppercase tracking-[0.16em] font-semibold px-4 sm:px-6 py-3 sm:py-3.5 transition-all duration-300 shadow-sm hover:shadow-md active:scale-[0.99]"
          >
            <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            <span className="hidden sm:inline">+91 88700 44213</span>
            <span className="sm:hidden">Call</span>
          </a>

          {/* Enquiry Now CTA */}
          <a
            href="/#contact"
            className="inline-flex items-center justify-center bg-wine hover:bg-wine-light text-white font-sans text-xs sm:text-[13px] uppercase tracking-[0.16em] font-semibold px-4 sm:px-7 py-3 sm:py-3.5 transition-all duration-300 shadow-sm hover:shadow-md active:scale-[0.99] cursor-pointer"
          >
            Enquiry Now
          </a>
        </div>
      </div>
    </header>
  );
}
