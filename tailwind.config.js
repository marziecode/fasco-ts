/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["volkhov-regular"],
        serif: ["poppins-regular"],
      },
      boxShadow: {
        '3xl': '0px 4px 14px 1px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
};
