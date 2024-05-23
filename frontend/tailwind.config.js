/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark_bg: "#121212",
        dark_txt: "#e0e0e0",
        dark_txt_secondary: "#525050",
        neon: "#dd3679",
      }
    },
  },
  plugins: [],
}