/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backGroundFooterColor: "#4b4444",
      },

      backgroundImage: {
        "login-bg": "url('images/login.png')",
      },
    },
  },
  plugins: [],
};
