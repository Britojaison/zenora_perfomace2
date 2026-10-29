"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import styles from "./Navbar.module.css";

const navLinks = [
  { name: "Residences", href: "#residences" },
  { name: "Amenities", href: "#amenities" },
  { name: "Location", href: "#location" },
  { name: "Contact", href: "#contact" },
  { name: "Webverse", href: "https://zenvistas.spimproject.com/", external: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/zenora_logo_dark.svg"
            alt="Zenora luxury villa community in Goldwins, Coimbatore"
            className="h-10 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className={styles.navLink}
            >
              {link.name}
              <span className={styles.underline} />
            </a>
          ))}
        </nav>

        {/* Right Phone Button matching Screenshot */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+918870044213"
            className="flex items-center gap-2 bg-wine hover:bg-wine-light text-white text-[11px] font-sans px-4 sm:px-5 py-2.5 rounded-sm tracking-wider uppercase transition-all shadow-sm font-medium"
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">+91 88700 44213</span>
            <span className="sm:hidden">Call</span>
          </a>

          <button
            className="md:hidden text-forest p-1"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#faf6f0] border-t border-cream/70 px-6 py-6 shadow-xl">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="text-xs uppercase tracking-[0.2em] text-forest font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs uppercase tracking-[0.2em] text-wine font-semibold pt-2 border-t border-cream/50"
            >
              Enquire Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
