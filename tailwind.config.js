/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#F3E9DC',
        secondary: '#C08552',
        accent: '#3c280d',
      },
      backgroundImage: {
        explosion: 'url("/pulindi_portfolio/bg-explosion.png")',
        circles: 'url("/pulindi_portfolio/bg-circles.png")',
        circleStar: 'url("/pulindi_portfolio/circle-star.svg")',
        site: 'url("/pulindi_portfolio/site-bg.svg")',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      fontFamily: {
        poppins: [`var(--font-poppins)`, 'sans-serif'],
        sora: [`var(--font-sora)`, 'sans-serif'],
      },
    },
  },
  container: {
    padding: {
      DEFAULT: '15px',
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
