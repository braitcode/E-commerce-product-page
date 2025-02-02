/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Orange': 'hsl(26, 100%, 55%)',
        'Pale-orange': 'hsl(25, 100%, 94%)',
        'Very-dark-blue': 'hsl(220, 13%, 13%)',
        'Dark-grayish-blue': 'hsl(219, 9%, 45%)',
        'Grayish-blue': 'hsl(220, 14%, 75%)',
        'Lightgrayish-blue': 'hsl(223, 64%, 98%)',
        'White': 'hsl(0, 0%, 100%)',
        'Black (with 75% opacity for lightbox background)': 'hsl(0, 0%, 0%)',

      },
      fontFamily: {
        kumbh: ['Kumbh Sans', 'Sans-serif']
      }
    },
  },
  plugins: [],
}