module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    colors: {
      white: "#f5f5f5",
      transparent: "transparent",
      primary: {
        100: "#050510",
        200: "#7789d4",
        300: "#fc5185",
      },
      gray: {
        100: "#91a3b0",
        200: "#5d7290",
        300: "#1e1e1e",
        400: "#151522",
      },
    },
  },
  variants: { extend: {} },
  plugins: [],
};
