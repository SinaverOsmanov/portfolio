/** @type {import('tailwindcss').Config} */
import skinColorPlugin from './colorPlugin' 

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
        colors: {
            color1: '#ec1839',
            color2: '#fa5b0f',
            color3: '#37b182',
            color4: '#1854b4',
            color5: '#f021b2',
        },
        flex: {
            'flex-1-half': '0 0 50%',
            'flex-1-full': '0 0 100%',
        },
        screens: {
            xs: '320px',
            // => @media (min-width: 640px) { ... }
  
            sm: '425px',
            // => @media (min-width: 640px) { ... }
  
            md: '768px',
            // => @media (min-width: 768px) { ... }
  
            lg: '1024px',
            // => @media (min-width: 1024px) { ... }
  
            xl: '1440px',
            // => @media (min-width: 1280px) { ... }
  
            '2xl': '2560px',
            // => @media (min-width: 1536px) { ... }
        },
    },
  },
  plugins: [],
  jit: true,
};
