/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        orange: '#EA7A47',
        yellow: '#E9AD49',
        blue:   '#486287',
        bg:     '#0F1115',
        bg2:    '#13161C',
        card:   '#181C24',
        border: 'rgba(255,255,255,0.08)',
        muted:  '#6B7280',
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        xl2: '20px',
      },
    },
  },
  plugins: [],
}
