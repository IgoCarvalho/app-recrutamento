import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from '@material-ui/styles/ThemeProvider';

import { Routes } from './routes';

import { theme } from './styles/theme';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
