import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: [
    "variant",
    [
      "@media (prefers-color-scheme: dark) { &:not(.light *) }",
      "&:is(.dark *)",
    ],
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#051923",
        secondary: "#5ebc67",
        "dark-primary": "#051923",
        "dark-secondary": "#344e41",
        body: "#f5f5f5",
      },
      borderColor: {
        primary: "#051923",
        secondary: "#5ebc67",
      },
      colors: {
        "dark-mode": "#fffff8",
      },
      dropShadow: {
        "text-soft": "0.1rem 0.1rem 0.2rem rgba(0,0,0,0.4)",
        "text-medium": "0.2rem 0.2rem 0.4rem rgba(0, 0, 0, 0.6)",
        "text-heavy": "0 0 1rem rgba(0, 0, 0, 0.7)",
      },
    },
    screens: {
      xs: { min: "320px", max: "399px" },
      sm: { min: "400px", max: "767px" },
      md: { min: "768px", max: "1023px" },
      lg: "1024px",
      xl: "1280px",
      "2xl": "1370px",
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
