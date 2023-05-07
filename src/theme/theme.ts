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
      dark: "#262626",
    },
    divider: "#CA35F7",
  },

  typography: {
    fontFamily: "Roboto",
    subtitle2: {
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: "16px",
      textTransform: "none",
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

theme.typography.h3 = {
  fontSize: "24px",
  lineHeight: "32px",
  fontFamily: "Roboto",
  fontWeight: 500,
  [theme.breakpoints.up("md")]: {
    fontSize: "32px",
    lineHeight: "40px",
  },
};

theme.typography.body1 = {
  fontFamily: "Roboto",
  fontSize: "18px",
  fontWeight: 500,
  lineHeight: "24px",
  textTransform: "none",
  [theme.breakpoints.up("md")]: {
    fontSize: "24px",
    lineHeight: "32px",
  },
};

theme.typography.h1 = {
  fontFamily: "Roboto",
  fontSize: "40px",
  fontWeight: 500,
  lineHeight: "48px",
  textTransform: "none",
  [theme.breakpoints.up("md")]: {
    fontSize: "56px",
    lineHeight: "64px",
  },
};

theme.typography.h6 = {
  fontFamily: "Roboto",
  fontSize: "14px",
  fontWeight: 500,
  lineHeight: "24px",
  textTransform: "none",
  [theme.breakpoints.up("md")]: {
    fontSize: "16px",
    lineHeight: "24px",
  },
};

theme.typography.h5 = {
  fontFamily: "Roboto",
  fontSize: "16px",
  fontWeight: 500,
  lineHeight: "24px",
  textTransform: "none",
  [theme.breakpoints.up("md")]: {
    fontSize: "18px",
    lineHeight: "24px",
  },
};

theme.typography.h4 = {
  fontFamily: "Roboto",
  fontSize: "18px",
  fontWeight: 500,
  lineHeight: "24px",
  textTransform: "none",
  [theme.breakpoints.up("md")]: {
    fontSize: "24px",
    lineHeight: "32px",
  },
};

theme.typography.subtitle1 = {
  fontFamily: "Roboto",
  fontSize: "16px",
  fontWeight: 500,
  lineHeight: "24px",
  textTransform: "none",
  [theme.breakpoints.up("md")]: {
    fontWeight: 400,
  },
};

export default theme;
