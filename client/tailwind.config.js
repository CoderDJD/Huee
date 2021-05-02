module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    colors: {
      white: "#f5f5f5",
      accent: "#F65151",
      transparent: "transparent",
      gray: {
        100: "#91a3b0",
        200: "#5d7290",
        300: "#1e1e1e",
        400: "#050510",
      },
    },
    spacing: {
      1: "8px",
      2: "12px",
      3: "16px",
      4: "24px",
      5: "32px",
      6: "48px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
