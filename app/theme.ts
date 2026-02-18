import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
  typography: {
    fontFamily: "var(--font-myfont), Arial, sans-serif",
  },
});

export default theme;
