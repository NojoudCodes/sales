/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "serif"]
      },
      colors: {
        primary: '#0B63F8',
        secondary: '#FFBC0F',
        body: '#F8F8F8',
        dark: '#1131313',
        dark60: 'rgba(19, 19, 19, 0.6)',
        black20: 'rgba(0, 0, 0, 0.2)',
        light: '#ADA7A7'
      }
    },
  },
  plugins: [],
}