import { createMuiTheme } from '@material-ui/core/styles';
import { red, yellow, indigo, grey } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  direction: 'rtl',
  typography: {
    fontFamily: '"Vazir", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  palette: {
    primary: {
      main: yellow[600],
      dark: '#c6a700',
      light: '#ffff6b',
      contrastText: grey[900],
    },
    secondary: {
      main: indigo[100],
      dark: '#9499b7',
      light: '#f8fdff',
      contrastText: '#141c69',
    },

    error: red,
    background: {
      default: '#fff',
    },
  },
});

export default theme;
