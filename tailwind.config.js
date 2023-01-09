/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./components/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "600px",
      },
      animation: {
        "fade-up": "zoomin .4s linear 1s forwards",
        "fade-up2": "zoomin .4s linear 1.5s forwards",
        "button-left": "buttonLeft .4s linear 1.5s forwards",
        "button-right": "buttonRight .4s linear 1.5s forwards",
      },
      keyframes: {
        zoomin: {
          "0%": { transform: "translateY(30px)" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        buttonLeft: {
          "0%": { transform: "translateX(-30px)" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        buttonRight: {
          "0%": { transform: "translateX(30px)" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
    },
  },
};
