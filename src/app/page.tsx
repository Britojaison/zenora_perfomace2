"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Overview from "@/components/sections/Overview";
import Highlights from "@/components/sections/Highlights";
import Residences from "@/components/sections/Residences";
import Amenities from "@/components/sections/Amenities";
import Location from "@/components/sections/Location";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
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
      <Amenities />
      <Location />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />

      <EnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <StickyContactBar />
    </main>
  );
}
