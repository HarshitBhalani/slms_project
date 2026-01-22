/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        seaside: {
          primary: "#26648E",
          secondary: "#4F8FC0",
          aqua: "#53D2DC",
          accent: "#FFE3B3",
          bg: "#F8FAFC",
        },
      },
      boxShadow: {
        soft: "0 10px 28px rgba(38, 100, 142, 0.15)",
      },
      borderRadius: {
        xl: "14px",
      },
    },
  },
  plugins: [],
};
