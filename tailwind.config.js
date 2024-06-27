/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        custom: {
          primary: "#4caf4f",
          silver: "#F5F7FA",
          gray: "#717171",
          dark: "#263238",
        },
      },
      fontSize: {
        // Define your custom text sizes here
        headingSmall: "8vw",
        headingLarge: "60px",
        headingLarge2: "30px",
      },
    },
  },
  plugins: [],
};
