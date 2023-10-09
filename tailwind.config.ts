/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
        container: {
          center: true, // Center the container horizontally
          padding: '1rem', // Add some padding to the container
        },
        colors: {
            color1: '#ec1839',
            color2: '#fa5b0f',
            color3: '#37b182',
            color4: '#1854b4',
            color5: '#f021b2',
        },
        flex: {
            'flex-custom-1\/4': '0 0 25%',
            'flex-custom-1\/3': '0 0 33.3%',
            'flex-custom-1\/2': '0 0 50%',
            'flex-custom-full': '0 0 100%',
        },
        screens: {
            xs: '320px',
            // => @media (min-width: 320px) { ... }
  
            sm: '425px',
            // => @media (min-width: 425px) { ... }

            sl: '580px',
            // => @media (min-width: 320px) { ... }
  
            md: '768px',
            // => @media (min-width: 768px) { ... }
  
            mg: '860px',
            // => @media (min-width: 860px) { ... }

            lg: '1024px',
            // => @media (min-width: 1024px) { ... }

            ls: '1150px',
            // => @media (min-width: 1150px) { ... }

            xl: '1440px',
            // => @media (min-width: 1280px) { ... }
        },
    },
  },
  plugins: [],
  jit: true,
};
