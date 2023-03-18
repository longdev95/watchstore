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
    plugins: [],
}
