/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#161823',
        gray: {
          50: '#F7F7F7',
          100: '#F5F5F5',
          200: '#E6E6E6',
          300: '#828282',
          400: '#686868',
          500: '#1A1A1A',
        }
      },
      spacing: {
        '19': '76px',
        '34': '136px',
        '37': '148px',
        '4.5': '18px',
      }
    },
  },
  plugins: [],
} 