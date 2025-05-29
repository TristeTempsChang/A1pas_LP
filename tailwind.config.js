/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fira: ['"Fira Sans", sans-serif'],
        bricolage: ['"Bricolage Grotesque"', 'sans-serif'],
      }
    },
    screens: {
      'md': '768px',
      'lgExtra': '800px',
      'lg': '1024px',
      'xl': '1280px',
      'xl1': '1300px',
      '2xl': '1536px'
    },
  },
  plugins: [],
}

