/** @type {import('tailwindcss').Config} */
export default {
  // Toggle dark mode by adding/removing the "dark" class on <html>.
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Brand palette: dark graphite + emerald→teal gradient (Data Engineering theme)
        navy: {
          950: "#070d0c",
          900: "#0b1412",
          800: "#102019",
          700: "#17302a",
        },
        brand: {
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
        },
        accent: "#2dd4bf",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["'Space Grotesk'", "Inter", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        blink: { "0%, 100%": { opacity: 1 }, "50%": { opacity: 0 } },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "gradient-x": "gradient-x 6s ease infinite",
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};
