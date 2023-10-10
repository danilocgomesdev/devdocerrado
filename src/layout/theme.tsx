import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true,
  },
  style: {
    global: {
      body: {
        margin: 0,
        padding: 0,
        fontFamily: "'Roboto', sans-serif",
        fontWeight: 400,
        fontSize: "1rem",
      },
    },
  },

  colors: {
    hoverColor: "#8cd925",

    light: {
      primary: "#99f71a",
      background: "#f6f6fa",
      text: "white",
      border: "#90CDF4",
      colorDiscreta: "#A0AEC0",
      cabecalho: "#edf2f7",
      tabela: "#F3F7FB",
    },
    dark: {
      primary: "#1d3045",
      background: "#0D1C2E",
      text: "white",
      border: "#1A365D",
      colorDiscreta: "#718096",
      cabecalho: "#2f4054",
      tabela: "#1E2B3D",
    },
  },
});
