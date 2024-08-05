import { ChakraProvider, theme } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import "../styles/styles.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
