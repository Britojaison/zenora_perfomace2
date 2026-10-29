"use client";

import React from "react";

export default function Footer() {
  return (
    <footer>
      {/* RERA Bar */}
      <div className="bg-[#f0ebe3] py-8 text-center px-6 border-t border-cream/70">
        <p className="font-display italic font-light text-forest text-xl mb-1">RERA NUMBER</p>
        <p className="font-sans text-earth text-sm font-medium">TNRERA/11/BLG/0013/2026</p>
        <a
          href="https://rera.tn.gov.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-wine text-xs hover:underline transition-colors mt-0.5 inline-block"
        >
          https://rera.tn.gov.in/
        </a>
      </div>

      {/* Main Light Luxury Footer */}
      <div className="bg-[#faf6f0] text-forest border-t border-cream/60">
        <div className="max-w-screen-xl mx-auto px-6 md:px-20 pt-16 pb-10">
          <div className="grid md:grid-cols-3 gap-12 mb-14">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/zenora_logo_dark.svg" alt="Zenora" className="h-10 w-auto mb-5" />
              <p className="font-sans text-earth text-sm leading-relaxed max-w-xs">
                A luxury villa community in Goldwins, Coimbatore. Elevation without compromise.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-wine font-medium mb-1">Navigate</p>
              {[
                { name: "Residences", href: "#residences" },
                { name: "Amenities", href: "#amenities" },
                { name: "Gallery", href: "#gallery" },
                { name: "Location", href: "#location" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-sans text-earth hover:text-wine text-xs transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-wine font-medium mb-1">Contact</p>
              <a href="mailto:info@zenvistas.co.in" className="font-sans text-wine text-xs hover:underline">
                info@zenvistas.co.in
              </a>
              <a href="https://zenoravillas.in" className="font-sans text-wine text-xs hover:underline">
                zenoravillas.in
              </a>
              <p className="font-sans text-earth text-sm leading-relaxed mt-1">
                Goldwins, Coimbatore
                <br />
                Tamil Nadu, India
              </p>
            </div>
          </div>

          <div className="border-t border-cream/70 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-sans text-taupe text-[11px]">© {new Date().getFullYear()} ZenVistas. All rights reserved.</p>
            <div className="flex gap-6 flex-wrap justify-center">
              <span className="font-sans text-taupe text-[11px] hover:text-forest cursor-pointer">Terms and Conditions</span>
              <span className="font-sans text-taupe text-[11px] hover:text-forest cursor-pointer">Privacy Policy</span>
              <span className="font-sans text-taupe text-[11px] hover:text-forest cursor-pointer">Cookies</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
