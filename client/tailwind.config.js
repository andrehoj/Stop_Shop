module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    screens: {
      sm: "500px",

      md: "650px",

      lg: "935px",

      xl: "1100px",

      "2xl": "1400px",
    },
    fontFamily: {
      main_font: "Helvetica",
    },
    colors: {
      primary_black: "#222831",
      light_black: "#393E46",
      main_teal: "#e8e076",
      light_grey: "#6b6b6b",
      main_white: "#FFFFFF",
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
