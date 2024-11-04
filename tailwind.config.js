/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#DB5413", // Cor principal, usada nos títulos, botões e links
        secondary: "#13DBB7", // Cor secundária, usada no botão de login
        backgroundHeader: "#FDD3BE", // Cor de fundo do header
        backgroundLight: "#FEEAE0", // Cor de fundo claro
        backgroundCard: "#FDBE9F", // Cor do fundo dos cards
        textHighlight: "#983854", // Cor dos textos destacados e links
        hoverPrimary: "#bc4710", // Cor de hover para botões e links
        hoverSecondary: "#0F9D84", // Cor de hover para o botão de login
      },
      fontFamily: {
        fontProjeto: ["League Spartan"],
      },
    },
  },
  plugins: [],
};
