/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./components/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {},
    colors: {
      transparent: "transparent",
      // black: '#000',
      // white: '#fff',
      // gray: {
      //   100: '#f7fafc',
      //   900: '#1a202c',
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
    },
    extend: {
      // spacing: {
      //   "8xl": "96rem",
      //   "9xl": "128rem",
      // },
      // borderRadius: {
      //   "4xl": "2rem",
      // },
    },
  },
  plugins: [],
};
