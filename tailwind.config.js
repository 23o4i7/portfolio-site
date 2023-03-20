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
      "dark-slate-blue": "#413E78",
      "pale-blue": "#BCE1EE"
      },
    },
  },
  plugins: [require("daisyui")],
}
