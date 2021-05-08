module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    colors: {
      white: "#F5F5F5",
      accent: "#FCC200",
      transparent: "transparent",
      gray: {
        100: "#91a3b0",
        200: "#5d7290",
        300: "#050510",
      },
    },
  },
  variants: { extend: {} },
  plugins: [require("tailwind-scrollbar")],
};
