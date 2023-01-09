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
      colors: {
        txDrk1: "#6F6F6F",
        txDrk2: "#B0B0B0",
        txLit1: "#FFFFFF",
        txLit2: "#FBFAF1",
        fillDrk: "#3d3c3c",
        fillDrkhover: "#494949",
        fillDrkactive: "#6F6F6F",
        accent: "#dd8888",
        accentHover: "#a06060",
        accentActive: "#eebbbb",
        accentOpacity: "#eebbbbbd",
      },
    },
  },

  plugins: [],
};
