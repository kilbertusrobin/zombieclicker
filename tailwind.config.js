/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8", // Couleur personnalisée
        secondary: "#9333EA",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Police personnalisée
      },
    },
  },
  plugins: [],
};
