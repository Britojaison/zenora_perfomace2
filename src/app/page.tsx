"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Overview from "@/components/sections/Overview";
import MapSection from "@/components/sections/MapSection";
import Residences from "@/components/sections/Residences";
import QuoteBanner from "@/components/sections/QuoteBanner";
import Amenities from "@/components/sections/Amenities";
import Highlights from "@/components/sections/Highlights";
import Gallery from "@/components/sections/Gallery";
import Location from "@/components/sections/Location";
import Contact from "@/components/sections/Contact";
import EnquiryModal from "@/components/ui/EnquiryModal";
import StickyContactBar from "@/components/ui/StickyContactBar";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-ivory text-charcoal">
      <Navbar />
      <Hero onOpenBrochure={() => setModalOpen(true)} />
      <Overview />
      <Highlights />
      <Residences />
      <QuoteBanner
        image="7-cent-side.jpg"
        alt="Zenora architecture"
        quote="A home that reflects who you have become, and what you are building next."
      />
      <Amenities />
      <QuoteBanner
        image="private-theatre.jpg"
        alt="Zenora luxury villa lifestyle and community amenities in Coimbatore"
        quote="Rise to elevated living."
        attribution="Zenora"
      />
      <Gallery />
      <Location />
      <MapSection />
      <Contact />
      <Footer />

      <EnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <StickyContactBar />
    </main>
  );
}
