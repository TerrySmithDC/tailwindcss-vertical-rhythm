module.exports = {
  mode: "jit",
  purge: ["index.html"],
  darkMode: false, // or 'media' or 'class'
  verticalRhythm: {
    mode: "dynamic",
  },
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("../../src/index.js")],
};
