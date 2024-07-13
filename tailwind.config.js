/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sidebarBgColor: "#3F4D67",
        menuActiveColor: "#1DC4E9",
        menuDeactiveColor: "#A9B7D0",
      },
    },
    fontFamily: {
      nexon: ["NEXON Lv1 Gothic OTF"],
    },
  },
  plugins: [],
};
