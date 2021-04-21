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
      dark: "#FF4580",
    }),
    scale: {
      0: "0",
      25: ".25",
      50: ".5",
      75: ".75",
      90: ".9",
      95: ".95",
      100: "1",
      102: "1.02",
      105: "1.05",
      110: "1.1",
      125: "1.25",
      150: "1.5",
      200: "2",
    },
  },
  variants: {
    extend: {
      fill: ["group-hover"],
    },
  },
  plugins: [],
};
