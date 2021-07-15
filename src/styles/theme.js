import { purple, teal } from "@material-ui/core/colors";
import { createTheme } from "@material-ui/core/styles";

export const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      light: purple[200],
      main: purple[300],
      dark: purple[400]
    },
    secondary: teal,
  },
});