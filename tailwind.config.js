const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  darkMode: "class",

  theme: {
    extend: {
      colors: {
        warmGray: colors.warmGray,
      },
      typography: (theme) => ({
        dark: {
          css: {
            color: "white",
          },
        },
      }),
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
