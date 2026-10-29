import type { Metadata, Viewport } from "next";
import "./globals.css";
import { blacker, bwDiagrid, editorial } from "./fonts";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "Zenora Villas · Luxury Villas in Coimbatore | Crafted for the Chosen",
  description:
    "Zenora Villas — An affordable luxury villa community in Goldwins, Coimbatore. 60 exclusive villas with Sky Garden, Aqua Lounge, Star Deck, Private Theatre & more. Starting from 5.5 cents.",
  keywords:
    "Zenora Villas,Zenora,luxury villas Coimbatore,villas in Goldwins Coimbatore,affordable luxury villas,ZenVistas,premium villas Coimbatore,gated community Coimbatore,villa projects in Coimbatore,Goldwins villas",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#28362b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${blacker.variable} ${bwDiagrid.variable} ${editorial.variable} bg-ivory text-charcoal font-sans antialiased`}
      >
        <SmoothScrollProvider>
          {children}
          <FloatingWhatsApp />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
