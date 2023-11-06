/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "769px",
        lg: "1024px",
        xl: "1280px",
        custom: "1367px", // Add a custom breakpoint
      },
    },
    fontFamily: {
      abc: ["Poppins"],
    },
  },
  plugins: [],
};
