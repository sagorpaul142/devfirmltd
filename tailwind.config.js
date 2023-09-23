/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'down-arrow': "url('/downArrow.png')",
        'down_arrow': "url('/down_arrow.png')"
      },
      colors:{
        'blue-primary':'#383FE1',
        'white-50': 'rgba(255, 255, 255, .50)',
        'menu-hover' : 'rgba(241, 245, 249, 0.1)',
        "primary": '#84878B',
        "secondary": '#3B3E44',
      },
      fontSize:{
        'small':'14px',
        'medium':'18px',
      }
    },
  },
  plugins: [],
}
