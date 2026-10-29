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
      <div className="max-w-screen-xl mx-auto px-3 sm:px-8 md:px-12 flex items-center justify-between gap-2 h-16 sm:h-20">
        <Link href="/" className="flex items-center shrink-0 min-w-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={scrolled ? "/images/zenora_logo_dark.svg" : "/images/zenora_logo.svg"}
            alt="Zenora luxury villa community in Goldwins, Coimbatore"
            className="h-7 min-[400px]:h-8 sm:h-12 w-auto transition-opacity duration-300"
          />
        </Link>

        {/* Right Large CTA Buttons matching Reference Layout */}
        <div className="flex items-center gap-1.5 sm:gap-4 shrink-0">
          {/* Phone Call CTA */}
          <a
            href="tel:+918870044213"
            className="inline-flex items-center gap-1.5 sm:gap-2.5 bg-[#e1b258] hover:bg-[#cfa145] text-[#140f06] font-sans text-[10px] sm:text-[13px] uppercase tracking-[0.1em] sm:tracking-[0.16em] font-bold px-3 sm:px-6 min-h-[40px] sm:min-h-[48px] transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.99] cursor-pointer"
          >
            <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 text-[#140f06]" />
            <span className="hidden sm:inline">+91 88700 44213</span>
            <span className="sm:hidden">Call</span>
          </a>

          {/* Enquiry Now CTA */}
          <a
            href="/#contact"
            className="inline-flex items-center justify-center bg-[#e1b258] hover:bg-[#cfa145] text-[#140f06] font-sans text-[10px] sm:text-[13px] uppercase tracking-[0.1em] sm:tracking-[0.16em] font-bold px-3 sm:px-7 min-h-[40px] sm:min-h-[48px] text-center leading-tight transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.99] cursor-pointer"
          >
            Enquiry Now
          </a>
        </div>
      </div>
    </header>
  );
}
