/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: [
          "Hanken Grotesk",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        body: [
          "Hanken Grotesk",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        display: [
          "Instrument Serif",
          "ui-serif",
          "Georgia",
          "serif",
        ],
      },
    },
  },
  plugins: [],
};