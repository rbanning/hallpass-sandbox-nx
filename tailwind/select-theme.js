const colors = require('tailwindcss/colors');

const theme = {

  blue: {
    primary: colors.sky,
    secondary: colors.amber,
    accent: colors.amber,       //alias for secondary
    warn: colors.rose,
    neutral: colors.slate
  },

  indigo: {
    primary: colors.indigo,
    secondary: colors.emerald,
    accent: colors.emerald,       //alias for secondary
    warn: colors.rose,
    neutral: colors.slate
  },

  green: {
    primary: colors.emerald,
    secondary: colors.violet,
    accent: colors.violet,       //alias for secondary
    warn: colors.rose,
    neutral: colors.slate
  },

  orange: {
    primary: colors.orange,
    secondary: colors.blue,
    accent: colors.blue,       //alias for secondary
    warn: colors.rose,
    neutral: colors.slate
  },

  red: {
    primary: colors.rose,
    secondary: colors.lime,
    accent: colors.lime,       //alias for secondary
    warn: colors.amber,
    neutral: colors.slate
  },

  default: {
    primary: colors.emerald,
    secondary: colors.fuchsia,
    accent: colors.fuchsia,       //alias for secondary
    warn: colors.rose,
    neutral: colors.slate
  }
};

export const buildTheme = (color) => {
  if (!(color in theme)) {
    console.warn(''); //new line
    console.warn("WARNING: Tailwind utility - buildTheme - invalid theme color", color);
    color = 'default';
  }
  
  return {
    colors: theme[color]
  };
}