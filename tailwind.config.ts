import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0f",
        foreground: "#ecedee",
        primary: { DEFAULT: "#7c3aed", foreground: "#ffffff", 200: "#c4b5fd" },
        secondary: { DEFAULT: "#3b82f6", foreground: "#ffffff" },
        default: { 100: "#1a1a22", 200: "#252531", 300: "#333347", 400: "#8f90a6", 600: "#6b6d85" },
        success: "#22c55e",
        warning: "#f59e0b",
        danger: "#ef4444",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};

export default config;
