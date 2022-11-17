/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        "light-green": "#668C3C",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
