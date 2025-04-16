import { createTheme, ThemeProvider } from "@mui/material";
import FranchisePage from "./components/FranchisePage";
import franchise from "./franchises/macross.json";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <div className="container-lg">
          <FranchisePage franchise={franchise} />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
