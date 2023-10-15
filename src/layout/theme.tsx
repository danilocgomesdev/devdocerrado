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
    verde: {
      100: "#DBFFD7",
      200: "#BBFFB0",
      300: "#9FFF8B",
      400: "#86FE68",
      500: "#70F947",
      600: "#53BF39",
      700: "#39872A",
      800: "#204F19",
      900: "#0A1808",
    },
    cinza: {
      50: "#F4F5F6",
      100: "#D4D6DB",
      200: "#AAAEB6",
      300: "#808691",
      400: "#565E6C",
      500: "#2C3747",
      600: "#222A37",
      700: "#191D27",
      800: "#0F1117",
      900: "#050507",
    },
  },
});
