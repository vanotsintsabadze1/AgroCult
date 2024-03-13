/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        footer: "#212529",
      },
      boxShadow: {
        "blog-card": "0rem 0.2rem .5rem 0.6rem rgba(169,169,169,0.5)",
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
  plugins: [],
};
