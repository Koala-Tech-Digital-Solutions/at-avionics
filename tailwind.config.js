/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0F172A",
          accent: "#2563EB",
        },
      },
    },
  },
  plugins: [],
};
