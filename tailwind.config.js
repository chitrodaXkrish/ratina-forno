/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        fornoBlue: '#1D5BA8',
        warmIvory: '#F9F5EC',
        charcoal: '#191919',
        white: '#FFFFFF',
      },
      fontFamily: {
        display: ['Cooper BT', 'Georgia', 'serif'],
        sans: ['"Source Sans 3"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 90px rgba(25, 25, 25, 0.08)',
      },
    },
  },
  plugins: [],
}

