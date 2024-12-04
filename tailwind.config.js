/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        green: {
          100: '#E2F8E1',
          500: '#38B2A3',
        },

      },
    },
  },
  plugins: [],
}
