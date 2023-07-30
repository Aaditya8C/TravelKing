/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'travelking':'linear-gradient(to right, #fa9e1b, #8d4fff)'
      },
      fontFamily: {
        Pacifico:['Pacifico', 'cursive'],
        Lobster:['Lobster', 'cursive'],
      },
      colors:{
        'dark-blue':'rgba(54, 19, 84, 0.6)',
      },
      // backgroundColor:{
      //   'travelking':'linear-gradient(to right, #fa9e1b, #8d4fff)'
      // }
    },
  },
  plugins: [],
}
