/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    darkMode: 'media',
    theme: {
        extend: {
            colors: {
                black: {
                    DEFAULT: "#101010",
                    50: "#424242",
                    100: "#383838",
                    200: "#2e2e2e",
                    300: "#242424",
                    400: "#1a1a1a",
                    500: "#101010",
                    600: "#060606",
                    700: "#000000",
                    800: "#000000",
                    900: "#000000",
                },
                "green": {
                    DEFAULT: "#61ff61",
                    "50": "#93ff93",
                    "100": "#89ff89",
                    "200": "#7fff7f",
                    "300": "#75ff75",
                    "400": "#6bff6b",
                    "500": "#61ff61",
                    "600": "#57f557",
                    "700": "#4deb4d",
                    "800": "#43e143",
                    "900": "#39d739"
                  }
            },
            fontFamily: {
                sans: ['Poppins', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
};
