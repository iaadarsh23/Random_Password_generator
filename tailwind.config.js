
/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./public/**/*.{html,js}",
    "./src/**/*.{html,js}",
    "./*.{html,js}"
  ],



  theme: {
    extend: {
      animation: {
        rotate: 'rotate 6s linear infinite',
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg) scale(20)' },
          '100%': { transform: 'rotate(-360deg) scale(20)' },
        },
      },
    },
  },
  plugins: [],
}

