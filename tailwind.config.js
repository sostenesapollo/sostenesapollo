/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple-glow': '#a855f7',
        'cyan-glow': '#06b6d4',
      },
    },
  },
  plugins: [],
}

