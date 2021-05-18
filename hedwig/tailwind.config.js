module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    colors: {
      white: "#f5f5f5",
      accent: {
        default: "#f05454",
        hover: "#f26979",
        disabled: "#f26979",
      },
      transparent: "transparent",
      gray: {
        100: "#91a3bo",
        200: "#5d7290",
        300: "#242c37",
        400: "#151a21",
        500: "#151a21",
        600: "#222831",
      },
    },
  },
  variants: { extend: {} },
  plugins: [require("tailwind-scrollbar")],
};
