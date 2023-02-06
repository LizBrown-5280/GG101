/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: [ './index.html', './src/**/*.{vue,js,ts,jsx,tsx}', ],
  content: [ './index.html', './src/**/*.{vue,js,ts,jsx,tsx}', ],
  darkMode: 'media', // or 'class'
  theme: {
    colors: {},
    fontFamily: {},
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}