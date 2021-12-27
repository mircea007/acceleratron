module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        tilt: 'tilt 8s infinite linear',
      },
      keyframes: {
        tilt: {
          '0%, 50%, 100%': {
            'transform': 'rotate(0deg) translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
          },
          '25%': {
            'transform': 'rotate(3deg) translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
          },
          '75%': {
            'transform': 'rotate(-3deg) translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
          },
        },
      },
    },
  },
  plugins: [],
}