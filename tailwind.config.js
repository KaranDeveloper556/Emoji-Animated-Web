/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'DisplayFont': ['DisplayFont', 'sans-serif'],
        'DisplayBold': ['DisplayBold', 'sans-serif'],
        'SansSerif': ['SansSerif', 'sans-serif'],
      },
    },
  },
  plugins: [],
}