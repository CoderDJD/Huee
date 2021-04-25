module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      primary: {
        100: "#050510",
        200: "#151522"
      },
      secondary: {
        100: "#f5f5f5",
        200: "#5d7290",
        300: "#fc5185",
        400: "#7789d4"
      }
    }
  },

  variants: {
    extend: {}
  },
  plugins: []
};
