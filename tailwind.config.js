/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*", "./pages/*html"],
  theme: {
    screens: {
      xs: "320px",
      sm: "375px",
      lsm: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
        sm: "16px",
        md: "16px",
        lg: "16px",
        xl: "16px",
        "2xl": "16px",
      },
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        // xl: "1280px",
        // "2xl": "1536px",
        xl: "1146px",
        "2xl": "1146px",
      },
    },
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Raleway: ["Raleway", "sans-serif"],
        Playfair: ["Playfair Display", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
        Overpass: ["Overpass", "sans-serif"],
      },

      colors: {
        primary: "#070707",
        yellow: "#FEBB41",
        success: "#004738",
        accent: "#ECF1F4",
        light: "#FAFCFE",
        gray: "#6D737A",
        disable: "#637381",
      },
    },
  },
  plugins: [],
};
