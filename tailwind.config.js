/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,ts}", "./node_modules/tw-elements/js/**/*.js"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "100%",
        lg: "1312px",
      },
    },
    fontFamily: {
      "inter-light": ["Inter Light", "sans-serif"],
      "inter-regular": ["Inter Regular", "sans-serif"],
      "inter-medium": ["Inter Medium", "sans-serif"],
      "inter-semibold": ["Inter SemiBold", "sans-serif"],
      "inter-bold": ["Inter Bold", "sans-serif"],
      "avenir-regular": ["Avenir Regular", "sans-serif"],
      "avenir-medium": ["Avenir Medium", "sans-serif"],
      "avenir-semibold": ["Avenir SemiBold", "sans-serif"],
    },
    extend: {
      colors: {
        white: "rgba(255, 255, 255, 1)",
        black: "rgba(28, 28, 28, 1)",
        gray: "rgba(102, 112, 133, 1)",
        "primary-bg": "rgba(33, 41, 59, 1)",
        primary: "rgba(68, 76, 231, 1)",
        hovered: "rgba(53, 56, 205, 1)",
        focused: "rgba(45, 49, 166, 1)",
        disabled: "var(--color-disabled)",
        secondary: "rgba(208, 213, 221, 1)",
        stroke: "rgba(42, 49, 64, 1)",
      },
      fontSize: {
        xs: ["0.75rem", "initial"],
        sm: ["0.875rem", "20px"],
        xl: ["1.25rem", "initial"],
        "2xl": ["1.5rem", "initial"],
        "3xl": ["1.875rem", "initial"],
        "4xl": ["2rem", "initial"],
        "5xl": ["2.75rem", "56px"],
      },
      screens: {
        xs: "400px",
      },
      boxShadow: {
        "shadow-primary": "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
      },
      backgroundImage: {
        "black-gradient": "linear-gradient(94.68deg, #21293B 0%, #1D1F22 100%)",
        "sphere-parallax": 'url("/images/sphere.png")',
      },
      keyframes: {
        "slide-down": {
          "0%": {
            transform: "translateY(-25%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        "slide-left": {
          "0%": {
            transform: "translateX(25%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
      },
      animation: {
        "slide-down": "slide-down 1s ease-out forwards",
      },
    },
  },
  plugins: [require("tw-elements/plugin.cjs")],
}
