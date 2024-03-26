/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        'dark': 'rgb(25, 25, 25)',
        'dark-100': 'rgb(94, 94, 94)',
        'dark-200': 'rgb(61, 61, 60)',
        'dark-300': 'rgb(127, 127, 127)',
        'light': '#FFF',
        'danget-100': 'rgb(193, 59, 47)'
        // Add more custom colors as needed
      },
    },
  },
  plugins: [],
}