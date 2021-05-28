const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    colors: {
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
      white: "#f5f5f5",
      transparent: "transparent",
      accent: {
        default: "#f05454",
        hover: "#f26979",
        disabled: "#f26979",
      },
      dark: {
        100: "#91a3b0",
        200: "#5d7290",
        300: "#242c37",
        400: "#151a21",
        500: "#222831",
      },
    },
  },
  variants: { scrollbar: ["rounded"] },
  plugins: [require("tailwind-scrollbar")],
};
