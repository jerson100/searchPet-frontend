import AppRouter from "./components/route/AppRouter/AppRouter";

import GlobalStyles from "@mui/material/GlobalStyles";
import { SnackbarProvider } from "notistack";
import "./configs/axios";

function App() {
  return (
    <>
      <GlobalStyles
        styles={(theme) => ({
          body: {
            margin: 0,
            padding: 0,
            boxSizing: "border-box",
          },
        })}
      />
      <SnackbarProvider>
        <AppRouter />
      </SnackbarProvider>
    </>
  );
}

export default App;
