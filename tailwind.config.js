/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        custom: {
          gray1: "#252625",
          gray2: "#3e3e3e",
          black: "#000000",
          white: "#ffffff",
          green: "#16A34A",
        },
      },
      fontSize: {
        // Define your custom text sizes here
        headingSmall: "8vw",
        headingLarge: "4vw",
      },
    },
  },
  plugins: [],
};
