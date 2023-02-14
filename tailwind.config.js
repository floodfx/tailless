/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [
    'postcss-import',
    require('@tailwindcss/forms'),
  ],
}
