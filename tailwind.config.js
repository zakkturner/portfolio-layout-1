/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        project: "-7px 6px 10px -9px rgba(0,0,0,0.75)",
      },
      colors: {
        "portfolio-blue": "#37aedf",
      },
    },
  },
  plugins: [],
};
