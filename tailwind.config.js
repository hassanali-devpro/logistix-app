/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'outfit-regular': ['Outfit_400Regular'],
        'outfit-bold': ['Outfit_700Bold'],
      },
    },
  },
  plugins: [],
}

