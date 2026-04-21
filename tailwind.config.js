/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      colors: {
        brand: {
          orange: '#E86F3F',
          red: '#D4543A',
          blue: '#2D7DD2',
          teal: '#1B998B',
          green: '#28A745',
          purple: '#8338EC',
          dark: '#1a1a2e',
        }
      }
    },
  },
  plugins: [],
};
