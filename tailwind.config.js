/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        "darkmode": ["darkmode-on", "sans-serif"]
      },
      colors: {
        "gunmetal": "#333841",
        "blue-purple": "#413E78",
        "dark-blue-purple": "#2E294E",
        "pale-blue": "#BCE1EE",
        "slate-black": "#272727"
      },
    },
  },
  plugins: [require("daisyui")],
}
