/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#18181b', // Zinc-900
        background: '#ffffff',
        surface: '#f4f4f5', // Zinc-100
      }
    },
  },
  plugins: [],
}