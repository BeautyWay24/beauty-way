/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        bg:'#16151A',
        mauve: '#7E5AF0',
        orange: '#E35925',
        black: '#231F20',
        blue: 'rgb(103, 156, 246)',
        blue1: 'rgb(64, 55, 246)',
        blueBg: 'rgb(175, 201, 246)',
        yellow: '#EFA51F',
        beige: '#E6D5B8',
        transparent: 'transparent',
        greyBg: 'rgba(240, 240, 240, 0.5)'
      },
      borderWidth: {
        '1': '2px',
      },    
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};