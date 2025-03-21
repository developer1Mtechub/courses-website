
import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      links: "#e2e8f0",
      search: "#92a1b6",
      main: "#ffffff",
      text: "#020617",
      description: "#80828b",
      cards: "#8a8c94",
      icon:"white",
      button:" #ffb402",
      hero:" #224ab7"
    },
    secondary: {
      main: "#475569",
      dark: "#64748B",
      text: "#b9abbd",
    },
    background: {
      default: "#020617",
      modal: "#0f172a",
      navbar: "unset",
      // navbar: "#06081b",
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: {
      fontSize: "69px",
      "@media (max-width:900px)": { fontSize: "30px" },
      fontWeight: "900",
    },
    h2: {
      fontSize: "60px",
      "@media (max-width:900px)": { fontSize: "30px" },
    },
    h3: {
      fontSize: "48px",
      "@media (max-width:900px)": { fontSize: "30px" },
    },
    h6: {
      fontSize: "16px",
    },
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      links: "#000000",
      search: "#475569",
      main: "#000000",
      text: "#1e293b",
      description: "#666972",
      cards: "#80828b",
      icon:"black",
      button:" #ffb402",
        hero:"#2b5ffe"
    },
    secondary: {
      main: "#94a3b8",
      dark: "#8490a3",
      text: "#475569",
    },
    background: {
      default: "white",
      modal: "#ffffff",
      navbar: "unset",
      // navbar: "rgba(232, 233, 255, 0.42)",
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: {
      fontSize: "69px",
      "@media (max-width:900px)": { fontSize: "30px" },
      fontWeight: "900",
    },
    h2: {
      fontSize: "60px",
      "@media (max-width:900px)": { fontSize: "30px" },
    },
    h3: {
      fontSize: "48px",
      "@media (max-width:900px)": { fontSize: "30px" },
    },
    h6: {
      fontSize: "16px",
    },
  },
});
