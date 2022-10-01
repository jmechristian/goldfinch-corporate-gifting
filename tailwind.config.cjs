/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        engravers: 'Engravers Gothic',
        holland: 'Holland',
        canela: 'Canela',
      },
      colors: {
        'base-light': '#f0f0f0',
        'base-yellow': '#ffc90d',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
