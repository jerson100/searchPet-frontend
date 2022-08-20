import AppRouter from "./components/route/AppRouter/AppRouter";
import ThemeProvider from "@mui/system/ThemeProvider";
import { createTheme } from "@mui/material";
import GlobalStyles from "@mui/material/GlobalStyles";
import { SnackbarProvider } from "notistack";
import "./configs/axios";
import { AuthProvider } from "./contexts/authContext";

const theme = createTheme();

function App() {
  return (
    <>
      <GlobalStyles
        styles={(theme) => ({
          body: {
            margin: 0,
            padding: 0,
            boxSizing: "border-box",
            backgroundColor: "rgb(243, 242, 239)",
          },
        })}
      />
      <SnackbarProvider>
        <AuthProvider>
          <ThemeProvider theme={theme}>
            <AppRouter />
          </ThemeProvider>
        </AuthProvider>
      </SnackbarProvider>
    </>
  );
}

export default App;
