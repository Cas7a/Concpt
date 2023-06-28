/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: { sans: ["Futura", "sans-serif"] },
    extend: {
      fontSize: { header: "1.3rem" },
      zIndex: { "index-header": 9998 },
      boxShadow: {
        header: "0 2px 4px rgba(0, 0, 0, 0.08)",
        modal: "0 2px 8px rgba(0, 0, 0, 0.25)",
      },
      backgroundColor: { backdrop: "rgba(0, 0, 0, 0.15)" },
      keyframes: {
        "slide-right": {
          from: {
            opacity: 0,
            transform: "translateX(100%)",
          },
          to: {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        "slide-out": {
          from: {
            opacity: 1,
            transform: "translateX(0)",
          },
          to: {
            opacity: 0,
            transform: "translateX(100%)",
          },
        },
        "slide-left": {
          from: {
            opacity: 0,
            transform: "translateX(-100%)",
          },
          to: {
            opacity: 1,
            transform: "translateX(0)",
          },
        },

        "slide-left-out": {
          from: {
            opacity: 0,
            transform: "translateX(0)",
          },
          to: {
            opacity: 1,
            transform: "translateX(-100%)",
          },
        },
      },
      animation: {
        "slide-right": "slide-right 500ms ease-in-out",
        "slide-out": "slide-out 500ms ease-in-out",
        "slide-left": "slide-left 500ms ease-in-out",
        "slide-left-out": "slide-left-out 500ms ease-in-out",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      nl: "900px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1400px",
      "3xl": "3840px",
    },
  },
  plugins: [],
};
