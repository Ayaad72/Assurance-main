/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Make sure this matches your project structure
  ],
  theme: {
    extend: {
      colors: {
        main: {
          DEFAULT: "var(--blueThemeColor)",
          background: "var(--blueThemeColor)",
        },
      },
    },
  },
  plugins: [],
};
