import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
    "./styles/**/*.{css}",
    "./node_modules/framer-motion/dist/**/*.{js,ts}"
  ],
  theme: {
    extend: {
      colors: {
        base: "#f6f6f6",
        card: "#ffffff",
        accent: "#111111",
        muted: "#dcdcdc"
      },
      borderRadius: {
        xl: "1.25rem",
        "2xl": "1.75rem",
        "3xl": "2.5rem"
      },
      boxShadow: {
        panel: "0 20px 60px rgba(15, 23, 42, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
