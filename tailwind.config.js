/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#e1b258",
          hover: "#cfa145",
          light: "#fae8c3",
          dark: "#a57d2a",
          muted: "rgba(225, 178, 88, 0.15)",
        },
        forest: {
          DEFAULT: "#28362b",
          dark: "#1c261e",
          light: "#3a4c3e",
        },
        wine: {
          DEFAULT: "#33090d",
          light: "#561a28",
          dark: "#200407",
        },
        ivory: {
          DEFAULT: "#f5f1ed",
          soft: "#faf7f2",
          dark: "#eae4dc",
        },
        noir: {
          DEFAULT: "#0e0c0b",
          pure: "#070605",
          surface: "#171513",
          card: "#1e1b19",
          border: "rgba(171, 148, 138, 0.2)",
        },
        cream: {
          DEFAULT: "#e1d5c9",
          soft: "#f3ede6",
          dark: "#cfbfaf",
        },
        taupe: {
          DEFAULT: "#ab948a",
          light: "#c4b3aa",
          muted: "rgba(171, 148, 138, 0.4)",
        },
        earth: {
          DEFAULT: "#594433",
          light: "#7a5e47",
        },
        stone: {
          beige: "#b9b4a8",
        },
        charcoal: {
          DEFAULT: "#1e1c1a",
          light: "#2d2a27",
        },
      },
      fontFamily: {
        display: ["var(--font-blacker)", "serif"],
        sans: ["var(--font-bwdiagrid)", "sans-serif"],
        serif: ["var(--font-editorial)", "serif"],
        editorial: ["var(--font-editorial)", "serif"],
      },
      letterSpacing: {
        widest: "0.25em",
        ultra: "0.35em",
      },
      boxShadow: {
        luxury: "0 20px 40px -15px rgba(0, 0, 0, 0.5)",
        goldGlow: "0 0 30px rgba(225, 178, 88, 0.25)",
      },
    },
  },
  plugins: [],
};
