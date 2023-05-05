import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  spacing: 4,
  palette: {
    primary: {
      main: '#E10856',
      light: '#CCE3FF',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#0FEFFD',
      light: '#D0D5DD',
      contrastText: '#FFFFFF',
    },
    text: {
      primary: '#343446',
      secondary: '#7D7D89',
      disabled: '#F2F2F7',
    },
    info: {
      main: '#344054',
      light: '#B2B2B9',
      dark: '#4B4B60',
    },
    warning: {
      main: '#FFA74F',
    },
    error: {
      main: '#B71A33',
    },
    success: {
      main: '#20B03F',
      light: '#F7931A',
    },
    grey: {
      50: 'rgba(247, 147, 26, 0.2)',
      100: 'rgba(34, 34, 34, 0.2)',
      200: 'rgba(230, 0, 122, 0.2)',
      300: 'rgba(98, 126, 234, 0.2)',
      400: 'rgba(38, 161, 123, 0.2)',
      500: 'rgba(25, 25, 113, 0.2)',
      600: 'rgba(219, 201, 132, 0.2)',
      700: 'rgba(242, 242, 247, 1)',
      800: 'rgba(250, 252, 255, 1)',
      900: 'rgba(180, 180, 207, 1)',
      A100: 'rgba(44, 44, 44, 0.08)',
      A200: 'rgba(250, 252, 255, 1)',
      A400: 'rgba(247, 147, 26, 1)',
    },
    divider: '#E8E8F7',
    background: { paper: '#FAFCFF' },
  },

  typography: {
    fontFamily: 'Roboto',
    caption: {
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '16px',
      textTransform: 'none',
      fontFamily: 'Roboto',
    },
    body1: {
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: '22px',
      textTransform: 'none',
      fontFamily: 'Graphik',
    },
    body2: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '22px',
      textTransform: 'none',
      fontFamily: 'Graphik',
    },
    h1: {
      fontSize: '56px',
      fontWeight: 500,
      lineHeight: '64px',
      //textTransform: 'none',
      fontFamily: 'Roboto',
      fontStyle: 'normal'
    },
    h2: {
      fontSize: '24px',
      fontWeight: 400,
      lineHeight: '34px',
      textTransform: 'none',
      fontFamily: 'Graphik',
    },
    h3: {
      fontSize: '32px',
      fontWeight: 500,
      lineHeight: '40px',
      //textTransform: 'none',
      fontFamily: 'Roboto',
      fontStyle: 'normal'
    },
    h4: {
      fontSize: '18px',
      fontWeight: 400,
      lineHeight: '24px',
      //textTransform: 'none',
      fontFamily: 'Roboto',
      fontStyle: 'normal'
    },
    h5: {
      fontSize: '18px',
      fontWeight: 500,
      lineHeight: '24px',
      //textTransform: 'none',
      fontFamily: 'Roboto',
      fontStyle: 'normal'
    },
    h6: {
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: '24px',
      //textTransform: 'none',
      fontFamily: 'Roboto',
      fontStyle: 'normal'
    },
    subtitle1: {
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: '24px',
      //textTransform: 'none',
      fontFamily: 'Roboto',
      fontStyle: 'normal'
    },
    subtitle2: {
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '16px',
      textTransform: 'none',
      fontFamily: 'Roboto',
      fontStyle: 'normal'
    },
    button: {
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '42px',
      textTransform: 'none',
      fontFamily: 'Graphik',
    },
    overline: {
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: '14px',
      textTransform: 'none',
      fontFamily: 'Graphik',
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          background: '#FFFFFF',
          color: '#0052FF',
          '&:hover': {
            background: 'none',
          },
        },
        outlinedPrimary: {
          borderColor: '#0052FF',
          background: '#FFFFFF',
          '&:hover': {
            background: 'none',
          },
        },
      },
    },
  },
})

export default theme