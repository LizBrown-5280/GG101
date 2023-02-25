/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: [ './index.html', './src/**/*.{vue,js,ts,jsx,tsx}', ],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'class'
  theme: {
    colors: {},
    fontFamily: {},
    extend: {
      fontSize: {
        xxs: '0.625rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
