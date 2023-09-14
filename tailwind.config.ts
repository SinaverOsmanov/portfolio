/** @type {import('tailwindcss').Config} */

export default {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        screens: {
          'xs': '320px',
          // => @media (min-width: 640px) { ... }

          'sm': '425px',
          // => @media (min-width: 640px) { ... }
    
          'md': '768px',
          // => @media (min-width: 768px) { ... }
    
          'lg': '1024px',
          // => @media (min-width: 1024px) { ... }
    
          'xl': '1440px',
          // => @media (min-width: 1280px) { ... }
    
          '2xl': '2560px',
          // => @media (min-width: 1536px) { ... }
        },
      },
      extend: {
        flex: {
          'flex-1-half': "0 0 50%",
          'flex-1-full': "0 0 100%",
        }
      },
    plugins: [],
    jit: true
};
