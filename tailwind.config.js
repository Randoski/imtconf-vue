/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1440px',
    },

    fontFamily: {
      'pry': ['"Cabinet Grotesk"', 'sans-serif'],
      'sec': ['"Maison Neue"', 'sans-serif'],
    },

    fontSize: {
      'forty': '40px',
      '14': '14px',
      '20': '20px',
      '24': '24px',
      '400': '400px',
      '300': '300px',
      '500': '500px',
    },

    extend: {
      colors: {
        // Primary colors
        purple: 'rgb(125, 0, 235)',
        white: 'rgb(255, 255, 255)',
        pink: 'rgb(253, 194, 255)',
        softBrown: 'rgb(246, 239, 236)',
        deepBrown: 'rgb(191, 130, 96)',
        blue: 'rgb(38, 122, 150)',
        black: 'rgb(0, 0, 0)',
        hamburgerColor: 'rgb(26, 26, 26)',
        orange: 'rgb(243, 161, 0)',
        red: 'rgb(255, 0, 0)',

        // Shades of grey
        grey1: 'rgb(128, 128, 128)',
        grey2: 'rgb(51, 51, 51)',
        grey3: 'rgb(242, 242, 242)',
        grey4: 'rgb(217, 217, 217)',


        // Pastel
        pastelPurple: 'rgb(246, 237, 254)',
        pastelBlue: 'rgb(234, 240, 242)',
      },
    },
  },
  plugins: [],
}

