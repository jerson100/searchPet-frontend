import React from "react";
import AppRouter from "./components/route/AppRouter/AppRouter";
import ThemeProvider from "@mui/system/ThemeProvider";
import { createTheme, responsiveFontSizes } from "@mui/material";
import GlobalStyles from "@mui/material/GlobalStyles";
import { SnackbarProvider } from "notistack";
import "./configs/axios";
import { AuthProvider } from "./contexts/authContext";

let theme = createTheme({
  //   palette: {
  //     mode: "dark",
  //   },
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
                return `
                    body {
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                        background-color: ${
                          theme.palette.mode === "light"
                            ? "rgb(243, 242, 239)"
                            : theme.palette.background.default
                        };
                        color: ${theme.palette.text.primary};
                    }
                    @media screen and (min-width: 760px) {
                        body::-webkit-scrollbar {
                            width: 10px;
                        }
                
                        body::-webkit-scrollbar-track {
                            /* box-shadow: inset 0 0 6px rgb(158, 158, 157); */
                            /* border: solid 1px rgb(158, 158, 157); */
                            background-color: rgba(158, 158, 157, 0.321);
                        }
                
                        body::-webkit-scrollbar-thumb {
                            /* background-color: rgb(158, 158, 157); */
                            background-color:  ${
                              theme.palette.mode === "dark"
                                ? "rgb(35 35 35)"
                                : "rgba(158, 158, 157, 0.321)"
                            };
                            outline: 1px solid ${
                              theme.palette.mode === "dark"
                                ? "rgb(35 35 35)"
                                : "rgba(158, 158, 157, 0.321)"
                            };
                            border-radius: 5px;
                        }
                    }
                `;
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
