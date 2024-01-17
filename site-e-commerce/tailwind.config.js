/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit', // "just in time" gestion dynamique des classes de couleurs
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'header-border-color': '#E4E9F2',
        'cart-button-input': '#f6f8fd',
      },
    },
  },
  plugins: [],
};
