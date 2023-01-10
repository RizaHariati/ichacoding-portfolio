/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/main/**/*.{js,jsx,ts,tsx}",
    "./src/modals/**/*.{js,jsx,ts,tsx}",
    "./src/styles/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    transitionDuration: {
      DEFAULT: "500ms",
    },

    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },

    extend: {
      boxShadow: {
        outer: "2px 2px 6px 1px rgba(0, 0, 0, 0.3)",
      },
      colors: {
        textDrk: "#3f3f46",
        textMed: "#52525b",
        textLit: "#a1a1aa",
        textLit: "#d4d4d8",
        fillDrk: "#ffffff",
        fillDrkhover: "#e4e4e7",
        fillDrkactive: "#a1a1aa",
        accent: "#dd8888",
        accentHover: "#a06060",
        accentActive: "#eebbbb",
        accentOpacity: "#eebbbbbd",
      },
    },
  },

  plugins: [],
};
