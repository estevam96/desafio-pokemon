/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';

import theme from './app/styles/theme';

export type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export interface IType {
  type: {
    name: string;
    url: string;
  };
}
export interface IPokemon {
  id?: number;
  name: string;
  types?: IType[];
  sprites?: {
    front_default: string;
  };
}
