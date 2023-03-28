/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        project: "-7px 6px 10px -9px rgba(0,0,0,0.75)",
        liveGlow: "0px 0px 61px 10px rgba(0,250,29,1);",
        demoGlow: "box-shadow: 0px 0px 61px 10px rgba(236,201,75,1);",
      },
      height: {
        100: "30rem",
      },
      colors: {
        "portfolio-blue": "#1ab2b1",
        "old-blue": "#37aedf",
      },
    },
  },
  plugins: [],
};
