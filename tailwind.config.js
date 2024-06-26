/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        goldman: ["Goldman", "sans-serif"],
      },
      backgroundImage: {
        intro: "url('../src/assets/images/bg-intro.jpg')",
      },
    },
  },
  plugins: [],
};
