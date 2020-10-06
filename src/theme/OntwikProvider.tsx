import React, { ReactChild } from "react";
import { ThemeProvider } from "styled-components";
import config from "./config";

const OntwikProvider = ({ children, theme }: {children: ReactChild; theme?: any}) => (
  <ThemeProvider theme={theme || config}>{children}</ThemeProvider>
);


export default OntwikProvider