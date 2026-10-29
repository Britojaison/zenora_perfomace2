"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Calendar, Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-screen-xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left: Overlapping Photos matching Screenshot 5 */}
        <div className="lg:col-span-6 relative h-[440px] sm:h-[500px] w-full max-w-[500px] mx-auto">
          {/* Back/Top Image */}
          <div className="absolute top-0 left-0 w-[68%] h-[68%] rounded-sm overflow-hidden shadow-md">
            <Image
              src="/images/aerial-view-club-hosue.jpg"
              alt="Zenora luxury villa community Goldwins"
              fill
              sizes="(max-width: 768px) 60vw, 30vw"
              className="object-cover"
            />
          </div>

          {/* Accent Frame Box */}
          <div className="absolute top-[8%] left-[28%] w-[66%] h-[68%] border border-wine/40 pointer-events-none" />

          {/* Front/Bottom Image */}
          <div className="absolute bottom-0 right-0 w-[70%] h-[68%] rounded-sm overflow-hidden shadow-2xl">
            <Image
              src="/images/street-view.jpg"
              alt="Zenora architectural street view"
              fill
              sizes="(max-width: 768px) 70vw, 35vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Right: Contact Form matching Screenshot 5 */}
        <div className="lg:col-span-6">
          <div className="mb-6">
            <p className="font-sans text-gold text-xs uppercase tracking-[0.25em] mb-2">Get In Touch</p>
            <h2
              className="font-display italic font-light text-forest leading-[1.1]"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)" }}
            >
              Start Your <span className="text-wine">Property Journey</span>
            </h2>
          </div>

          {/* Form Container Card */}
          <div className="bg-cream/20 p-8 sm:p-10 rounded-sm border border-cream/70 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center">
                <p className="font-display italic font-light text-2xl text-forest mb-2">Thank you.</p>
                <p className="font-sans text-earth text-sm">
                  Our villa consultant will reach out to schedule your personalized visit.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-[10px] uppercase tracking-[0.2em] text-earth font-sans font-medium block mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-white border border-cream px-4 py-3 text-sm text-forest placeholder:text-taupe focus:outline-none focus:border-wine transition-colors font-sans rounded-none"
                  />
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-[0.2em] text-earth font-sans font-medium block mb-2">
                    Phone Number *
                  </label>
                  <div className="flex border border-cream bg-white">
                    <span className="inline-flex items-center gap-1.5 px-3 border-r border-cream text-xs text-earth font-sans bg-cream/10">
                      <span>🇮🇳</span> +91
                    </span>
                    <input
                      type="tel"
                      required
                      placeholder="XXXXX XXXXX"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-transparent px-4 py-3 text-sm text-forest placeholder:text-taupe focus:outline-none font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-[0.2em] text-earth font-sans font-medium block mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="email@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-white border border-cream px-4 py-3 text-sm text-forest placeholder:text-taupe focus:outline-none focus:border-wine transition-colors font-sans rounded-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-wine hover:bg-wine-light text-white font-sans text-xs uppercase tracking-[0.25em] flex items-center justify-center gap-2 transition-all duration-300 shadow-md"
                >
                  <Calendar className="w-4 h-4" />
                  Book A Site Visit
                </button>

                <p className="text-[10px] text-center text-taupe font-sans leading-relaxed pt-2">
                  Your information is secure. We will only contact you regarding your inquiry.
                </p>
              </form>
            )}
          </div>

          {/* Quick contact strip */}
          <div className="flex flex-wrap items-center gap-6 mt-6 text-xs text-earth font-sans">
            <span className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-wine" /> Goldwins, Coimbatore
            </span>
            <a href="tel:+918870044213" className="flex items-center gap-2 hover:text-wine transition-colors">
              <Phone className="w-3.5 h-3.5 text-wine" /> +91 88700 44213
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=919789003828&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#25D366] transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" /> WhatsApp Chat
            </a>
            <a href="mailto:info@zenvistas.co.in" className="flex items-center gap-2 hover:text-wine transition-colors">
              <Mail className="w-3.5 h-3.5 text-wine" /> info@zenvistas.co.in
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
