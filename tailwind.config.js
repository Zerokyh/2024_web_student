/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        blink: "blink 5.0s infinite both",
        "tracking-in-contract":
          "tracking-in-contract 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000)   both",
      },
      keyframes: {
        blink: {
          "0%,50%,to": {
            opacity: "1",
          },
          "25%,75%": {
            opacity: "0",
          },
        },
        "tracking-in-contract": {
          "0%": {
            "letter-spacing": "1em",
            opacity: "0",
          },
          "40%": {
            opacity: ".6",
          },
          to: {
            "letter-spacing": "normal",
            opacity: "1",
          },
        },
      },

      colors: {
        sidebarBgColor: "#3F4D67",
        menuActiveColor: "#1DC4E9",
        menuDeactiveColor: "#A9B7D0",
      },

      width: {
        studentBasicWidthLeft: "260px",
        studentMaxWidthRight: "800px",
      },

      height: {
        studentshortHight: "100px",
        studentLowHight: "200px",
        studentBasicHight: "400px",
        studentMediumHight: "600px",
        studentMaxHight: "800px",
      },
    },
    fontFamily: {
      nexon: ["NEXON Lv1 Gothic OTF"],
      pretendard: ["Pretendard-Regular"],
    },
  },
  plugins: [],
};
