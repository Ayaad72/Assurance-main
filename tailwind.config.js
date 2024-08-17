/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Make sure this matches your project structure
  ],
  theme: {
    extend: {
      colors: {
        bardum: {
          DEFAULT: "#b81616", // Replace with the exact red-700 value
          light: "#9e151d", // Lighter shade for hover
        },
        gray: {
          600: "#717996", // Replace with the exact gray-600 value
        },
      },
    },
  },
  plugins: [],
};
