import React from "react";
import AppRouter from "./components/route/AppRouter/AppRouter";
import ThemeProvider from "@mui/system/ThemeProvider";
import { createTheme, responsiveFontSizes } from "@mui/material";
import GlobalStyles from "@mui/material/GlobalStyles";
import { SnackbarProvider } from "notistack";
import "./configs/axios";
import { AuthProvider } from "./contexts/authContext";

let theme = createTheme({
  palette: {
    mode: "dark",
  },
});
theme = responsiveFontSizes(theme);

function App() {
  return (
    <>
      <SnackbarProvider>
        <AuthProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyles
              styles={(theme) => {
                return {
                  body: {
                    margin: 0,
                    padding: 0,
                    boxSizing: "border-box",
                    backgroundColor: `${
                      theme.palette.mode === "light"
                        ? "rgb(243, 242, 239)"
                        : theme.palette.background.default
                    }`,
                    color: `${theme.palette.text.primary}`,
                  },
                };
              }}
            />
            <AppRouter />
          </ThemeProvider>
        </AuthProvider>
      </SnackbarProvider>
    </>
  );
}

export default App;
