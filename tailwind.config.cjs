/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "second-color": "var(--second-color)",
      },

      keyframes: {
        'zoom-small': {
          '0%, 100%': { transform: 'scale(1.5)' },
        },

        animation: {
          zoom: 'zoom-small 0.4 ease-in'
        },
      },
      screens: {
        'mobile': { 'max': '739px' },
        // => @media (max-width: 739px) { ... }

        'tablet': { 'min': '740px', 'max': '1023px' },
        // => @media (min-width: 740px) and (max-width: 1023px) { ... }

        'desktop': '1024px',
        // => @media (min-width: 10240px) { ... }
      },
    },
    variants: {
      extend: {
        scale: ['group-hover']
      }
    },
    plugins: [],
  }
}
