"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import styles from "./EnquiryModal.module.css";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  onSuccess?: () => void;
}

export default function EnquiryModal({
  isOpen,
  onClose,
  title = "Request Details",
  subtitle,
  onSuccess,
}: EnquiryModalProps) {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [submitted, setSubmitted] = useState(false);
  const timerRef = React.useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "unset";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "unset";
      setSubmitted(false);
      if (timerRef.current) clearTimeout(timerRef.current);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (onSuccess) {
      onSuccess();
    }
    const isBrochure = subtitle?.toLowerCase().includes("brochure");
    timerRef.current = setTimeout(() => {
      onClose();
      router.push(isBrochure ? "/thank-you?download=brochure" : "/thank-you");
    }, 500);
  };

  const handleManualClose = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    onClose();
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
        <div className="p-7 sm:p-9 relative">
          <button
            onClick={handleManualClose}
            aria-label="Close"
            className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <h3 className="font-serif italic font-normal text-2xl sm:text-[28px] text-gray-800 text-center mb-6">
            {title}
          </h3>

          {submitted ? (
            <div className="text-center py-6 space-y-3">
              <h4 className="font-serif italic text-2xl text-gray-900">Thank You!</h4>
              <p className="font-sans text-xs text-gray-600 max-w-xs mx-auto leading-relaxed">
                We have received your details. Our sales advisory team will connect with you shortly.
              </p>
              <button
                type="button"
                onClick={handleManualClose}
                className="mt-4 px-6 py-2.5 bg-wine hover:bg-wine-light text-white text-xs font-sans uppercase tracking-wider font-semibold transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-[10px] uppercase tracking-[0.15em] text-gray-500 font-sans font-medium block mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-[#f8f9fa] border border-[#e5e7eb] px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-wine font-sans rounded-none transition-colors"
                />
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-[0.15em] text-gray-500 font-sans font-medium block mb-2">
                  Phone Number
                </label>
                <div className="flex bg-[#f8f9fa] border border-[#e5e7eb]">
                  <span className="px-3 py-3 border-r border-[#e5e7eb] text-xs text-gray-600 font-sans flex items-center gap-1.5 shrink-0">
                    <span>🇮🇳</span>
                    <span className="text-[8px] text-gray-400">▼</span>
                    <span>+91</span>
                  </span>
                  <input
                    type="tel"
                    required
                    placeholder="XXXXXXXXXX"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-transparent px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-[0.15em] text-gray-500 font-sans font-medium block mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="email@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-[#f8f9fa] border border-[#e5e7eb] px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-wine font-sans rounded-none transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-wine hover:bg-wine-light text-white font-sans text-xs uppercase tracking-[0.25em] font-semibold transition-all duration-300 shadow-md cursor-pointer mt-1"
              >
                Submit
              </button>

              <p className="text-[9.5px] text-center text-gray-400 font-sans leading-relaxed pt-1">
                Your information is secure. We will only contact you regarding your inquiry.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
