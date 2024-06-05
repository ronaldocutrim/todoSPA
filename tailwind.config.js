/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'selector',
  theme: {
    container: {
      center: true,
      screens: {
        lg: '540px',
      },
    },
    extend: {
      boxShadow: {
        'todo-list-container': '0px 35px 50px -15px rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        'hero-light': "url('hero_background_light.jpg')",
        'hero-dark': "url('hero_background_dark.jpg')",
        'toggle-btn-light': "url('moon-icon.svg')",
        'toggle-btn-dark': "url('sun-icon.svg')",
      },
    },
  },
};
