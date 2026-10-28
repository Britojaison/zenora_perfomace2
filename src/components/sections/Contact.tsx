"use client";

import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-transparent border-b border-cream/25 pb-3 text-sm text-cream placeholder:text-cream/30 focus:outline-none focus:border-gold transition-colors font-sans";
  const labelClass = "text-[9px] uppercase tracking-[0.25em] text-cream/60 block mb-2 font-sans";

  return (
    <section id="contact" className="py-32 bg-wine">
      <div className="px-6 md:px-20 max-w-screen-xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-sans text-gold text-xs uppercase tracking-[0.25em] mb-4">Get in Touch</p>
            <h2
              className="font-display italic font-light text-cream mb-8"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Begin your
              <br />
              Zenora journey.
            </h2>
            <p className="font-sans text-cream/70 text-base leading-[1.9] max-w-md mb-12">
              Our team is ready to walk you through every detail — from floor plans to financing. Reach out and let us
              show you what elevation truly feels like.
            </p>
            <div className="space-y-4 font-sans text-xs uppercase tracking-[0.15em]">
              <p className="text-cream/70">Goldwins, Coimbatore, Tamil Nadu</p>
              <p>
                <a href="tel:+918870044213" className="text-gold hover:underline">
                  +91 88700 44213
                </a>
              </p>
              <p>
                <a href="mailto:info@zenvistas.co.in" className="text-gold hover:underline normal-case tracking-normal text-sm">
                  info@zenvistas.co.in
                </a>
              </p>
            </div>
          </div>

          <div>
            {submitted ? (
              <p className="font-display italic font-light text-3xl text-cream py-10">Thank you.</p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 max-w-xl">
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
                <div>
                  <label className={labelClass}>Message (optional)</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us what you're looking for..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 border border-gold/70 hover:bg-gold text-cream hover:text-wine font-sans text-[10px] uppercase tracking-[0.25em] transition-all duration-300"
                >
                  Send Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
