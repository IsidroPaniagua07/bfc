/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'raleway' : ['Raleway', 'sans-serif'],
        'lora': ['Lora', 'serif'],
        'rajdhani': ['Rajdhani', 'sans-serif'],
        'julius': ['Julius Sans One', 'sans-serif']
    },
  },
  plugins: [],
}
}