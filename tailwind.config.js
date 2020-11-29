module.exports = {
  purge: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/containers/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      serif: ["Roboto Slab", "serif"],
    },
    extend: {
      boxShadow: {
        "sm-white":
          "0 10px 15px -3px rgba(255, 255, 255, 0.09), 0 4px 6px -2px rgba(255, 255, 255, 0.02)",
        white: "0 35px 60px -15px rgba(255, 255, 255, 0.3)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
