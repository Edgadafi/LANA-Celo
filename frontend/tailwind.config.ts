import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        prosperity: "#35D07F",
        forest: "#185834",
        snow: "#F9FBF9",
        honey: "#FBCC5C",
        "celo-green": "#35D07F",
        "celo-dark": "#0A1628",
        "celo-darkAlt": "#1a2332",
        primary: {
          500: "#35D07F",
          600: "#2db86b",
        },
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        lora: ["var(--font-lora)", "serif"],
      },
      borderRadius: {
        "soft-xl": "1.5rem",
        "soft-2xl": "2rem",
        "soft-3xl": "2.5rem",
        "soft-[2.5rem]": "2.5rem",
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0, 0, 0, 0.06)",
        "soft-lg": "0 8px 30px rgba(0, 0, 0, 0.08)",
        glass: "0 8px 32px rgba(0, 0, 0, 0.08)",
      },
      backgroundImage: {
        "gradient-soft":
          "linear-gradient(135deg, rgba(249,251,249,0.95) 0%, rgba(249,251,249,0.85) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
