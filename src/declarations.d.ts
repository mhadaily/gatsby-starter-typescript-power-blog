import { BlogTheme } from './theme';

declare const graphql: (query: TemplateStringsArray) => void;

declare module 'styled-components' {
  export interface DefaultTheme extends BlogTheme {}
}
