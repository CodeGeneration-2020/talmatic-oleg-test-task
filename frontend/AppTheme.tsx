import React, { FC } from "react";
import {
  createTheme,
  responsiveFontSizes,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { IAppThemeProps } from "./src/types/autocomplete.types";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 475,
      md: 768,
      lg: 1024,
      xl: 1440,
    },
  },
  spacing: [0, 4, 8, 12, 16, 24, 36],
  palette: {
    secondary: {
      main: "#8A8A8A",
      dark: "#01123F",
      contrastText: "#FFFFFF",
    },
  },
});

const AppTheme: FC<IAppThemeProps> = ({ children }) => (
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={responsiveFontSizes(theme)}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  </StyledEngineProvider>
);

export default AppTheme;
