/**
 * @see https://tailwindcss.com/docs/configuration
 */

module.exports = {
  content: [
    './src/pages/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        // The shadow-card class that is used for Cards.
        // @see: https://tailwindcss.com/docs/box-shadow
        card: '0 2px 1px -1px rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 1px 3px 0 rgba(0, 0, 0, .12)',
      },
    },
  },
  plugins: [],
};
