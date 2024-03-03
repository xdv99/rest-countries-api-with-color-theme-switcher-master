/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    colors: {
      darkBlue: "hsl(209, 23%, 22%)",
      veryDarkBlueDark: "hsl(207, 26%, 17%)",
      veryDarkBlueLight: "hsl(200, 15%, 8%)",
      darkGray: "hsl(0, 0%, 52%)",
      veryLightGray: "hsl(0, 0%, 98%)",
      white: "hsl(0, 0%, 100%)",
      transparent: "rgba(250, 250, 250, 0)",
    },
    fontFamily: {
      nunito: "Nunito Sans",
    },
    extend: {},
  },
  plugins: [],
};
