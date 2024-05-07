import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["variant", ["@media (prefers-color-scheme: dark) { &:not(.light *) }", "&:is(.dark *)"]],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#f2e9e4",
        secondary: "#283618",
        dark: "#081c15",
      },
      borderColor: {
        primary: "#FEFAE0",
        secondary: "#606C38",
      },
      colors: {
        "dark-mode": "#fffff8",
      },
      dropShadow: {
        "text-soft": "0.1rem 0.1rem 0.4rem rgba(0,0,0,0.4)",
        "text-medium": "0.2rem 0.2rem 0.4rem rgba(0, 0, 0, 0.6)",
        "text-heavy": "0 0 1rem rgba(0, 0, 0, 0.7)",
      },
      boxShadow: {
        soft: "0rem 0rem .3rem .2rem rgba(169,169,169,0.3)",
        md: "0rem 0rem .5rem .3rem rgba(169,169,169,0.3)",
      },
    },
    screens: {
      xs: { min: "320px", max: "399px" },
      sm: { min: "400px", max: "767px" },
      md: { min: "768px", max: "1023px" },
      lg: "1024px",
      xl: "1280px",
    },
  },

  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide::-webkit-scrollbar": {
          display: "none",
        },
        ".scrollbar-hide": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      });
    }),
  ],
};
export default config;
