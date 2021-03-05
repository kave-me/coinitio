import { createMuiTheme, Theme } from '@material-ui/core/styles';
import { ThemeVariant } from './types/Types';
import { deepOrange, deepPurple, lightBlue, orange } from '@material-ui/core/colors';

const getTheme = (variant: ThemeVariant): Theme => {
  return createMuiTheme({
    direction: 'rtl',
    typography: {
      fontFamily: '"Vazir", "Roboto", "Helvetica", "Arial", sans-serif',
    },
    palette:
      variant === ThemeVariant.dark
        ? {
            type: 'dark',
            primary: {
              main: orange[500],
            },
            secondary: {
              main: deepOrange[900],
            },
          }
        : {
            type: 'light',
            primary: {
              main: lightBlue[500],
            },
            secondary: {
              main: deepPurple[500],
            },
          },
  });
};

export default getTheme;
