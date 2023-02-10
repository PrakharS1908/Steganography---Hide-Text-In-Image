/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        flip: {
          '0%,80%': {
            transform: 'rotateY(360deg)'},
          },
      },
      animation: {
        'flip': 'flip calc(.2s * var(--i)); linear 1',
      }
    },
  },
  plugins: [],
}
