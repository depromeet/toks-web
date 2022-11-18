import '@emotion/react';
import { KeyOfColors, KeyOfShadows } from './theme';

declare module '@emotion/react' {
  export interface Theme {
    color: KeyOfColors;
    shadows: KeyOfShadows;
  }
}
