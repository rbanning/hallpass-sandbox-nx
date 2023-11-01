const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.sky,
        secondary: colors.amber,
        accent: colors.amber,       //alias for secondary
        warn: colors.rose,
        neutral: colors.slate
      },  
    },
  },
  plugins: [],
};
