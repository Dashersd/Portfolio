/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#111827',
        'secondary-bg': '#1F2937',
        'primary-text': '#F3F4F6',
        'accent': '#06B6D4',
      },
    },
  },
  plugins: [],
}

