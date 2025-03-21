/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff6363",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
      },
      fontfamily: {
        body:["Nunito"]
    },
    },
  },
  plugins: ["prettier-plugin-tailwindcss","@babel/plugin-transform-private-property-in-object",]
};
