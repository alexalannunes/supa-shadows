import type { AppProps } from "next/app";
import { Box, ChakraProvider, Flex, Spinner } from "@chakra-ui/react";
import "../styles/styles.css";
import { useEffect, useRef } from "react";

function BackdropLoading() {
  const loadingRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // refact this code :)
    setTimeout(() => {
      loadingRef.current?.classList.add("fade-out");
      setTimeout(() => {
        loadingRef.current?.remove();
      }, 500); // in css: transition all .3s linear
    }, 800);
  }, []);
  return (
    <Flex
      ref={loadingRef}
      position="fixed"
      top={0}
      right={0}
      bottom={0}
      left={0}
      bg="white"
      zIndex={9}
      alignItems="center"
      justifyContent="center"
      gap={4}
      _dark={{
        bg: "gray.700",
      }}
    >
      <Spinner size="lg" colorScheme="teal" />
    </Flex>
  );
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <BackdropLoading />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
