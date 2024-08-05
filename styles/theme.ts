import { defineStyleConfig, extendTheme } from "@chakra-ui/react";

const baseInputTheme = defineStyleConfig({
  sizes: {
    sm: {
      field: {
        borderRadius: "md",
      },
    },
  },
  defaultProps: {
    size: "sm",
  },
});

export const theme = extendTheme({
  components: {
    Input: baseInputTheme,
    NumberInput: baseInputTheme,
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});
