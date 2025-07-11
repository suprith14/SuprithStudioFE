/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'colorChange' :{
            '0%' :{ color: '#FF5733' ,textShadow: '0 0 10px #FF5733'},
            '25%' :{ color: '#33FF57' },
            '50%' :{ color: '#3357FF' },
            '75%' :{ color: '#FF33F5' },
            '100%' :{ color: '#FF5733' }
        },
        verticalScroll: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease-out',
        'headerClrChange':'colorChange 60s infinite',
        'verticalScroll': 'verticalScroll 18s linear infinite',
      }

    },
  },
  plugins: [],
}