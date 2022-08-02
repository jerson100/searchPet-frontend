import AppRouter from "./components/route/AppRouter/AppRouter";

import GlobalStyles from "@mui/material/GlobalStyles";

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
      <AppRouter />
    </>
  );
}

export default App;
