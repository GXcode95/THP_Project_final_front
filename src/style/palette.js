import {createTheme} from '@mui/material'

export const light = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#109eb3', // original from logo : #11bed8
    },
    secondary: {
      main: '#ffb735',
    },
    error: {
      main: '#ff3a3a',
    },
    info: {
      main: '#f576a0',
    },
    warning: {
      main: '#8622c3',
    },
    success: {
      main: '#43a047',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none"
        },
      },
      defaultProps: {
        variant: "contained",
        color: "primary",
        disableRipple: true
      }
    } 
  },
});
export const dark = createTheme({
  palette: {
    mode: 'dark',
  }
});