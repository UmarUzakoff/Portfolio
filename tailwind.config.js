/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        light1: "#FDFDFD",
        light2: "#F4F4F4",
        dark1: "#111111",
        dark2: "#222222",
        blue: "#2EA8C7",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
  ],
};
