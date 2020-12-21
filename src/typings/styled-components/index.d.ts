import config from '../../theme/config';

type ThemeInterface = typeof config;

declare module 'styled-components' {
  interface DefaultTheme extends ThemeInterface {}
}
