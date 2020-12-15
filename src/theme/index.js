import { colors, createMuiTheme } from '@material-ui/core';
import shadows from './shadows';
import typography from './typography';

const theme = createMuiTheme({
  palette: {
    background: {
      // dark: '#F4F6F8',
      default: colors.common.white,
      paper: colors.common.white
    },
    primary: {
      main: '#17324f'
    },
    secondary: {
      main: colors.pink[500]
    },
    text: {
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600]
    },
    neutral: {
      main: '#5c6ac4',
    },
  },
  shadows,
  typography
});

export default theme;
