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
  const [modalMeta, setModalMeta] = useState({
    title: "Request Details",
    subtitle: "Floor Plan",
  });

  const [featuresUnlocked, setFeaturesUnlocked] = useState(false);

  const handleOpenPlan = (_size?: string) => {
    setModalMeta({
      title: "Request Details",
      subtitle: _size ? `${_size} Cent Villa Plan` : "Floor Plan",
    });
    setModalOpen(true);
  };

  const handleOpenBrochure = () => {
    setModalMeta({
      title: "Request Details",
      subtitle: "Download Brochure",
    });
    setModalOpen(true);
  };

  const handleRequestUnlockFeatures = () => {
    setModalMeta({
      title: "Request Details",
      subtitle: "Amenities & Features",
    });
    setModalOpen(true);
  };

  const handleScheduleVisit = () => {
    setModalMeta({
      title: "Schedule A Site Visit",
      subtitle: "Site Visit Request",
    });
    setModalOpen(true);
  };

  const handleModalSuccess = () => {
    setFeaturesUnlocked(true);
  };

  return (
    <main className="relative min-h-screen bg-ivory text-charcoal">
      <Navbar />
      <Hero onOpenBrochure={handleOpenBrochure} />
      <Overview onOpenBrochure={handleOpenBrochure} />
      <Highlights onScheduleVisit={handleScheduleVisit} />
      <Residences onOpenPlan={handleOpenPlan} />
      <Amenities
        isUnlocked={featuresUnlocked}
        onRequestUnlock={handleRequestUnlockFeatures}
      />
      <Location />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />

      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalMeta.title}
        subtitle={modalMeta.subtitle}
        onSuccess={handleModalSuccess}
      />
      <StickyContactBar />
    </main>
  );
}
