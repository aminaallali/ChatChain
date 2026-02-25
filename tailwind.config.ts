import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        dark: {
          colors: {
            background: "#0a0a0f",
            foreground: "#ecedee",
            primary: { DEFAULT: "#7c3aed", foreground: "#fff" },
            secondary: { DEFAULT: "#3b82f6", foreground: "#fff" },
          },
        },
        light: {
          colors: {
            background: "#f8fafc",
            foreground: "#11181c",
            primary: { DEFAULT: "#7c3aed", foreground: "#fff" },
            secondary: { DEFAULT: "#3b82f6", foreground: "#fff" },
          },
        },
      },
    }),
  ],
};

export default config;
