/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins-Bold",
        regular: "Poppins-Regular",
        medium: "Poppins-Medium",
      },
    },
  },
  plugins: [],
};
