export interface BlogTheme {
  colors: {
    primary: string;
    bg: string;
    white: string;
    black: string;
    grey: {
      dark: string;
      default: string;
      light: string;
      ultraLight: string;
    };
  };
  transitions: {
    normal: string;
  };
  fontSize: {
    small: string;
    big: string;
  };
}
