/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
      },
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};

