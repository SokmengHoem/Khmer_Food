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
    screens: {
      sm: '350px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  plugins: [],
};
