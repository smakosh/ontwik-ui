import React from "react";
import { ThemeProvider } from "styled-components";
import { OntwikProviderProps } from "ontwik-ui/src/interfaces";
import config from "./config";

const OntwikProvider = ({ children, theme }: OntwikProviderProps) => (
  <ThemeProvider theme={theme || config}>{children}</ThemeProvider>
);

OntwikProvider.displayName = "OntwikProvider";

export default OntwikProvider;
