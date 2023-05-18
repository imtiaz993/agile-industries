/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('Assets/images/home-hero-bg.png')",
        "pages-hero-bg": "url('Assets/images/pages-hero-bg.png')",
      },
      colors: {
        blue: "#004A79",
        darkBlue:"#002A42",
        green: "#0BEAA1",
        gray: "#666666",
        ligherGray:'#EEEEEE',
        light: "#FAFAFA",
      },
    },
  },
  plugins: [],
};
