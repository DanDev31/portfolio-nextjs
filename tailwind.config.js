/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        main: "var(--bg-1)",
        "theme-switch": "var(--bg-2)",
        mobile: "var(--bg-3)",
        "main-reverse": "var(--primary)",
      },
      borderColor: {
        primary: "var(--bg-2)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      textColor: {
        primary: "var(--primary)",
        moon: "var(--color-moon)",
      },
    },
  },
  plugins: [],
};
