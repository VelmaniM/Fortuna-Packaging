/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#001F3F',
        'navy-dark': '#001428',
        red: '#D32F2F',
        'red-hover': '#B71C1C',
        silver: '#64748B',
        soft: '#F8FAFC',
        border: '#E2E8F0',
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 24px rgba(0, 31, 63, 0.08)',
        'card-hover': '0 12px 40px rgba(0, 31, 63, 0.12)',
      },
    },
  },
  plugins: [],
};
