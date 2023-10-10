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
      100: "#8AF222",
      200: "#5EA617",
      300: "#508C14",
      400: "#34590E",
      500: "#022601",
      600: "#010D00",
      700: "#111b0a",
      800: "#0e130a",
      900: "#0b0c0b",
    },
  },
});
