import { ThemeProvider } from "@mui/material";
import "./App.css";
import Routes from "./Routes/Routes";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Routes/>
    </ThemeProvider>
  );
}

export default App;
