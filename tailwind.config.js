module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#0DB4FF",
      secondary: "#DBEEFF",
      danger: "#e3342f",
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      primary: "#0DB4FF",
      secondary: "#DBEEFF",
      danger: "#e3342f",
      dark: "#FF4580"
    }),
  },
  variants: {
    extend: {
      fill: ["group-hover"],
    },
  },
  plugins: [],
};
