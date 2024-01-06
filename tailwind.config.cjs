const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
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
        green: {
          DEFAULT: "#61ff61",
          50: "#93ff93",
          100: "#89ff89",
          200: "#7fff7f",
          300: "#75ff75",
          400: "#6bff6b",
          500: "#61ff61",
          600: "#57f557",
          700: "#4deb4d",
          800: "#43e143",
          900: "#39d739",
        },
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        mono: ["VT323", ...defaultTheme.fontFamily.mono],
      },
      keyframes: {
        "underline-gradient": {
          "0%": { transform: "translate3d(0%, 0%, 0)" },
          "50%": { transform: "translate3d(-75%, 0%, 0)" },
          "100%": { transform: "translate3d(0%, 0%, 0)" },
        },
      },
      animation: {
        "underline-gradient": "underline-gradient 6s infinite",
      },
      backgroundImage: (theme) => ({
        "underline-gradient":
          "linear-gradient(90deg, rgba(255, 0, 0, 1) 0%, rgba(255, 154, 0, 1) 10%, rgba(208, 222, 33, 1) 20%, rgba(79, 220, 74, 1) 30%, rgba(63, 218, 216, 1) 40%, rgba(47, 201, 226, 1) 50%, rgba(28, 127, 238, 1) 60%, rgba(95, 21, 242, 1) 70%, rgba(186, 12, 248, 1) 80%, rgba(251, 7, 217, 1) 90%, rgba(255, 0, 0, 1) 100%)",
      }),
    },
  },

  plugins: [require("@tailwindcss/forms")],
};
