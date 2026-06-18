import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "var(--container-pad)",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        light: "var(--color-light)",
        dark: "var(--color-dark)",
        brand: "var(--color-brand)",
        "dark-accent": "var(--color-dark-accent)",
        "light-accent": "var(--color-light-accent)",
        "muted-dark": "var(--color-muted-dark)",
        line: "var(--color-line)",
        "line-dark": "var(--color-line-dark)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
        accent: ["var(--font-accent)"],
        mono: ["var(--font-mono)"],
      },
      fontSize: {
        "heading-xl": ["clamp(2.8rem, 8vw, 7rem)", { lineHeight: "0.98" }],
        "heading-lg": ["clamp(1.9rem, 4.5vw, 3rem)", { lineHeight: "1.18" }],
        "heading-md": ["clamp(1.5rem, 3vw, 2.1rem)", { lineHeight: "1.28" }],
        "heading-sm": ["clamp(1.15rem, 2vw, 1.5rem)", { lineHeight: "1.3" }],
        label: ["clamp(0.66rem, 1vw, 0.76rem)", { lineHeight: "1.4" }],
        "label-lg": ["clamp(0.78rem, 1.2vw, 0.95rem)", { lineHeight: "1.4" }],
        "body-text": ["clamp(0.95rem, 1.1vw, 1.05rem)", { lineHeight: "1.95" }],
        "body-text-sm": ["clamp(0.85rem, 1vw, 0.92rem)", { lineHeight: "1.85" }],
      },
      spacing: {
        "section-padding": "var(--section-padding)",
      },
      maxWidth: {
        "container-max": "var(--container-max)",
      },
      transitionTimingFunction: {
        "out-expo": "var(--ease-out-expo)",
        "out-quart": "var(--ease-out-quart)",
      },
    },
  },
  plugins: [],
};

export default config;
