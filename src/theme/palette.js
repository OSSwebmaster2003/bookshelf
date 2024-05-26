import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6200EE",
    },
    secondary: {
      main: "#FF4D4F",
    },
    dark: {
      main: "#151515",
      grey: "rgba(21, 21, 21, 0.28)",
    },
    white: {
      main: "#FFFFFF",
      grey: "#FEFEFE",
    },
    warning: {
      main: "#FF4D4F",
    },
    danger: {
      main: "#FF0000",
    },
    yellow: {
      main: "#FFEC43",
    },
    success: {
      main: "#00FF29",
    },
  },
});

export default theme;
