import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#E10856",
      light: "#1D1D1D",
      contrastText: "#FFFFFF",
    },
    text: {
      primary: "#AEAEB2",
      secondary: "#C4C4C4",
    },
    info: {
      main: "#0FEFFD",
      light: "#636366",
      dark: "#262626"
    },
    divider:"#CA35F7",
    
  },

  typography: {
    fontFamily: "Roboto",
    caption: {
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: "16px",
      textTransform: "none",
    },
    body1: {
      fontSize: "24px",
      fontWeight: 500,
      lineHeight: "32px",
      textTransform: "none",
    },
    body2: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "22px",
      textTransform: "none",
    },
    h1: {
      fontSize: "56px",
      fontWeight: 500,
      lineHeight: "64px",
    },
    h2: {
      fontSize: "24px",
      fontWeight: 400,
      lineHeight: "34px",
      textTransform: "none",
    },
    h3: {
      fontSize: "32px",
      fontWeight: 500,
      lineHeight: "40px",
    },
    h4: {
      fontSize: "18px",
      fontWeight: 400,
      lineHeight: "24px",
    },
    h5: {
      fontSize: "18px",
      fontWeight: 500,
      lineHeight: "24px",
    },
    h6: {
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "24px",
    },
    subtitle1: {
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "24px",
    },
    subtitle2: {
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: "16px",
      textTransform: "none",
    },
  },
});

export default theme;
