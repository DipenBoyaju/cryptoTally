/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      filter: {
        'custom-hue': 'hue-rotate(85deg) saturate(80%) brightness(0.85)',
      },
    },
  },
  plugins: [
  ],
}

