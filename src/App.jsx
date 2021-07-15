import ThemeProvider from "@material-ui/styles/ThemeProvider";
import Login from "./pages/Login";
import { theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Login />
      </div>
    </ThemeProvider>
  );
}

export default App;
