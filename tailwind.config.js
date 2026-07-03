/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // MagicMond design tokens (extracted from the original Framer site)
        ink: "#0e081d",
        card: { from: "#16101f", to: "#1c0c29" },
        tile: "#1c0c28",
        accent: "#c055e5",
        "accent-light": "#e0b6ff",
        "accent-pink": "#d86cff",
        brand: "#692083",
        "ie-blue": "#0055ff",
        "ie-serif": "#7db9ff",
        "sp-green": "#1ff9b8",
      },
      fontFamily: {
        head: ['"Rethink Sans"', "sans-serif"],
        body: ['"DM Sans"', "sans-serif"],
        serif: ['"Instrument Serif"', "serif"],
        ui: ["Geist", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        instrument: ['"Instrument Sans"', "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        barlow: ["Barlow", "sans-serif"],
        grotesk: ['"Familjen Grotesk"', "sans-serif"],
      },
      maxWidth: {
        container: "1360px",
      },
    },
  },
  plugins: [],
};
