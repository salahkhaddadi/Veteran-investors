/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    backgroundImage: {
      timeSquare:
        "linear-gradient(rgba(248, 250, 252, 0.3), rgba(248, 250, 252, 0.3)),url('./assets/timeSquare.jpeg')",
    },
    extend: {},
  },
  plugins: [],
};
