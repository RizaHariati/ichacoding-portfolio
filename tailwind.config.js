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
      animation: {
        newPulse: "newPulse 1s linear 1",
        mainImage: "mainImage 1s ease-in-out 1  ",
        popImage: "popImage 0.5s linear 1",
      },
      keyframes: {
        newPulse: {
          "0%": {
            opacity: "0.2",
            AnimationTimeline: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "100%": {
            opacity: "1",
            AnimationTimeline: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },

        mainImage: {
          "0%": {
            transform: "translateY(20%)",
            AnimationTimeline: "cubic-bezier(0.8, 0, 1, 1)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            AnimationTimeline: "cubic-bezier(0, 0, 0.2, 1)",
            opacity: "1",
          },
        },
        popImage: {
          "0%": {
            AnimationTimeline: "cubic-bezier(0.8, 0, 1, 1)",
            scale: "0.4",
          },
          "100%": {
            AnimationTimeline: "cubic-bezier(0, 0, 0.2, 1)",
            scale: "1",
          },
        },
      },
      boxShadow: {
        outer: "2px 2px 6px 1px rgba(0, 0, 0, 0.3)",
      },
      colors: {
        textDrk: "#e7e5e4",
        textMed: "#d6d3d1",
        textLit: "#a8a29e",
        fillDrkSolid: "#292524",
        fillMed: "#404040",
        fillDrk: "#a8a29e31",
        fillDrkhover: "#a8a29e75",
        fillDrkactive: "#a8a29e96",
        accent: "#d4a99c",
        accentHover: "#C99383",
        accentActive: "#dfbeb5",
        accentOpacity: "#dfbeb55e",
        shadow: "#78716c",
        backgroundOpacity: "#1c1917ad",
      },
    },
  },

  plugins: [],
};
