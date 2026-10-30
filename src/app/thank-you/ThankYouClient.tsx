"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Download, ChevronLeft } from "lucide-react";

export default function ThankYouClient() {
  const searchParams = useSearchParams();
  const shouldAutoDownload =
    searchParams.get("download") === "brochure" ||
    searchParams.get("download") === "true" ||
    searchParams.get("download") === "1" ||
    searchParams.get("brochure") === "1";

  useEffect(() => {
    if (shouldAutoDownload) {
      const timer = setTimeout(() => {
        const link = document.createElement("a");
        link.href = "/pdf/Zenora%20Brochure%20v2_compressed.pdf";
        link.download = "Zenora-Brochure.pdf";
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, 600);

      return () => clearTimeout(timer);
    }
  }, [shouldAutoDownload]);

  return (
    <div className="flex flex-wrap items-center gap-4">
      {/* Primary Action: Download Brochure */}
      <a
        href="/pdf/Zenora%20Brochure%20v2_compressed.pdf"
        download="Zenora-Brochure.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#e1b258] hover:bg-[#cfa145] text-[#140f06] font-sans text-xs sm:text-[13px] uppercase tracking-[0.18em] font-bold transition-all duration-300 shadow-md hover:shadow-xl active:scale-[0.99] cursor-pointer"
      >
        <Download className="w-4 h-4 shrink-0 text-[#140f06]" strokeWidth={2.4} />
        <span>DOWNLOAD BROCHURE</span>
      </a>

      {/* Secondary Action: Back to Home */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 border border-forest/30 hover:border-forest text-forest hover:bg-forest/5 font-sans text-xs sm:text-[13px] uppercase tracking-[0.18em] font-semibold transition-all duration-300 active:scale-[0.99] cursor-pointer"
      >
        <ChevronLeft className="w-4 h-4 shrink-0" strokeWidth={2.2} />
        <span>BACK TO HOME</span>
      </Link>
    </div>
  );
}
