/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple': 'hsl(259, 100%, 65%)',
        'litRed': 'hsl(0, 100%, 67%)',
        'offWhite': 'hsl(0, 0%, 94%)',
        'litGrey': 'hsl(0, 0%, 86%)',
        'smokeGrey':'hsl(0, 1%, 44%)',
        'offBlack':'hsl(0, 0%, 8%)'
      },
      borderRadius: {
        '12xl': '6rem',
        '24xl': '12rem',
      },
    },
  },
  plugins: [],
}
