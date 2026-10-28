"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
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
            src="/images/zenora_logo.svg"
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

        <a href="#contact" className={styles.enquire}>
          Enquire
        </a>

        <button
          className="md:hidden text-white"
          aria-label="Toggle menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-forest border-t border-white/10 px-6 py-6">
          <nav className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="text-[11px] uppercase tracking-[0.2em] text-white/90"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[11px] uppercase tracking-[0.2em] text-gold"
            >
              Enquire
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
