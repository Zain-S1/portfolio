import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
    "./styles/**/*.{css}",
    "./node_modules/framer-motion/dist/**/*.{js,ts}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "var(--font-sans)", "system-ui", "sans-serif"]
      },
      colors: {
        background: "#05070D",
        foreground: "#F6F7FB",
        accent: "#5C7CFA",
        muted: "#121826",
        border: "rgba(255,255,255,0.1)"
      },
      boxShadow: {
        glow: "0 20px 60px rgba(92, 124, 250, 0.35)",
        card: "0 12px 40px rgba(5, 7, 13, 0.6)"
      }
    }
  },
  plugins: []
};

export default config;
