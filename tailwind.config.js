/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        back_1: '#e5e5ee',
        cross: '#7f7e85'
      },
      borderRadius: {
        div: '2rem'
      }
    },
  },
  plugins: [],
}

