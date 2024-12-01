/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundSize: {
        landscape: "100% auto", // Landscape fits width
        portrait: "auto 100%", // Portrait fits height
      },
      colors: {
        primary: "#ffb700",
        inputbgcolor : "#383637",
        secondary : "#b2b1b2"
      },
      
    },
  },
  plugins: [],
};
