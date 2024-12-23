module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    extend: {
      animation: {
        wiggle: 'wiggle 1s ease-in-out',
      }
    },
  },
  theme: {
    screens: {
      'xl': {'min': '1281px'},
      'lg': {'max': '1280px'},
      'md': {'max': '1024px'},
      'sm': {'max': '639px'},

    },
    extend: {
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
