import localFont from "next/font/local";

export const blacker = localFont({
  src: [
    {
      path: "../../public/fonts/blacker/Blacker-Display-Light-trial.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/blacker/Blacker-Display-Light-Italic-trial.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/blacker/Blacker-Display-Regular-trial.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/blacker/Blacker-Display-Regular-Italic-trial.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/blacker/Blacker-Display-Medium-trial.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/blacker/Blacker-Display-Bold-trial.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-blacker",
  display: "swap",
});

export const bwDiagrid = localFont({
  src: [
    {
      path: "../../public/fonts/bwdiagrid/BwDiagrid-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-bwdiagrid",
  display: "swap",
});

export const editorial = localFont({
  src: [
    {
      path: "../../public/fonts/editorial/EditorialNew-Ultralight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/editorial/EditorialNew-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/editorial/EditorialNew-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/editorial/EditorialNew-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-editorial",
  display: "swap",
});

// Cormorant alias pointing to Editorial serif for 100% offline local reliability
export const cormorant = editorial;
