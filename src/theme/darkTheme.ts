import { transitions, fontSize } from './common';

const darkTheme = {
  colors: {
    primary: '#72cc96', // Color for buttons or links
    bg: '#000', // Background color
    white: '#fff',
    black: '#000',
    grey: {
      dark: 'rgba(255,255,255, 0.9)',
      default: 'rgba(255,255,255, 0.7)',
      light: 'rgba(255,255,255, 0.5)',
      ultraLight: 'rgba(255,255,255, 0.15)',
    },
  },
  transitions,
  fontSize,
};

export { darkTheme };
