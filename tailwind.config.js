/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/pages/**/*.{js,ts,jsx,tsx}", // ✅ Only includes files in src/pages
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
