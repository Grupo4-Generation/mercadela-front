/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        fontProjeto : ['League Spartan']
      }
    },
  },
  plugins: [],

  extend: {
    fontFamily: {
      sans: ["Open Sans", "sans"],
    },
  },
};
