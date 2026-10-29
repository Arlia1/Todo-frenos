/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#DC2626',
          'red-hover': '#B91C1C',
          'red-light': '#F87171',
          slate: '#0B0F19',
          surface: '#131B2E',
          'surface-card': '#1E293B',
          'surface-light': '#F8FAFC',
          border: '#334155',
        },
        workshop: {
          green: '#15803D',
          'green-hover': '#166534',
        }
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.25), 0 2px 4px -2px rgba(0, 0, 0, 0.2)',
        'lift': '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -4px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}
