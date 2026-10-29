"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import styles from "./EnquiryModal.module.css";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
}

export default function EnquiryModal({
  isOpen,
  onClose,
  title = "Begin your Zenora journey.",
  subtitle = "Get in Touch",
}: EnquiryModalProps) {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-transparent border-b border-cream/25 pb-3 text-sm text-cream placeholder:text-cream/30 focus:outline-none focus:border-gold transition-colors font-sans";
  const labelClass = "text-[9px] uppercase tracking-[0.25em] text-cream/60 block mb-2 font-sans";

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
        <div className="p-8 md:p-10">
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-5 right-5 text-taupe hover:text-gold transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <p className="font-sans text-gold text-xs uppercase tracking-[0.25em] mb-3">{subtitle}</p>
          <h3 className="font-display italic font-light text-3xl text-cream mb-8">
            {title}
          </h3>

          {submitted ? (
            <p className="font-display italic font-light text-2xl text-cream py-6">Thank you.</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-7">
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
                  rows={2}
                  placeholder="Tell us what you're looking for..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputClass} resize-none`}
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 border border-gold/70 hover:bg-gold text-cream hover:text-forest font-sans text-[10px] uppercase tracking-[0.25em] transition-all duration-300"
              >
                Send Enquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
