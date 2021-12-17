import {createTheme} from '@mui/material'

export const light = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#283845', // original from logo : #11bed8
    },
    secondary: {
      main: '#109eb3',
      light: '#26A7B8',
    },
    ternary: {
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
    white: {
      main: "#fff"
    },
    black: {
      main: "#000"
    },
    alert: {
      main: "#Dcc5a3",
      error: "#D05757",
      success: "#5AA65F",
      info: "#6fbdb5",
      warning: "#F7c274"
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
      defaultProps: {
        variant: "contained",
        color: "primary",
        disableRipple: true
      }
    }, 
    MuiCardActionArea: {
      defaultProps: {
        disableRipple: true
      }
    },
    MuiListItemButton: {
      defaultProps: {
        disableRipple: true
      }
    },
  },
});

export const dark = createTheme({
  palette: {
    mode: 'dark',
  }
});