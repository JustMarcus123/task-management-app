import type { Config } from "tailwindcss";

const config: Config = {

  darkMode: 'class',

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        white:"#ffffff",

        gray:{
          100:"#f3f5f6",
          200:"#e527eb",
          300:"#d1d5db",
          500:"#6b7280",
          700:"#374151",
          800:"#1f2937"
        },
        blue:{
          200: "#93C5FD",
          400:"#60A5FA",
          500:"#3b82f6"
        },
        "dark-bg": "#101214",
        "dark-secondary":"#1d21f21",
        "blue-primary":"#0275f",
        "stroke-dark":"#2d3135",
      },
    },
  },
  plugins: [],
};
export default config;
