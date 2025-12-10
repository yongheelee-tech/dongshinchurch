/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#6BA6C4',
        'secondary': '#2C4957',
        'topnav': '#2B93B9',
        'container': '#DBE9EA',
      },
      fontFamily: {
        'sans': ['RixGo', 'sans-serif'],
        'rixgo': ['RixGo', 'sans-serif'],
        'gotham': ['Gotham', 'sans-serif'],
      }
    },
  },
  plugins: [],
} 