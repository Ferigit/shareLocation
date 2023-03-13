/** @type {import('tailwindcss').Config} */

// spacings are multiples of '4'
const spacings = Array.from({ length: 100 }, (_, index) => [index, `${4 * index}px`]);


module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      spacing: Object.fromEntries(spacings),
      colors: {
        white: {
          DEFAULT: '#ffffff',
          100: 'rgba(255, 255, 255, 0.02)',
          200: 'rgba(255, 255, 255, 0.03)',
        },
        black: {
          DEFAULT: '#0E0F11',
          pure: '#000000',
          100: 'rgba(0, 0, 0, 0.03)',
          200: 'rgba(0, 0, 0, 0.05)',
        },
      },
    },
  },
  plugins: [],
}
