import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { OntwikProviderProps } from '../interfaces';
import config from './config';

const OntwikProvider: FC<OntwikProviderProps> = ({ children, theme }) => (
  <ThemeProvider theme={theme || config}>{children}</ThemeProvider>
);

export default OntwikProvider;
