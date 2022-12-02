import { Flex, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import { atom } from "jotai";
import type { NextPage } from "next";
import Head from "next/head";
import { v4 } from "uuid";
import {
  Header,
  ModalShadows,
  ShadowControl,
  ShadowPreview,
  ShadowProperties,
} from "../components";
import { Shadow } from "../types";
import { buildShadow } from "../utils";
export const shadowBase = {
  id: v4(),
  x: 0,
  y: 10,
  blur: 8,
  spread: 0,
  inset: false,
  active: true,
  color: "#0000001a",
};

export const colorAtom = atom("#EDF2F7");
export const backgroundAtom = atom("#FFFFFF");
export const widthAtom = atom(16);
export const heightAtom = atom(16);
export const borderColorAtom = atom("#E2E8F0");
export const borderRadiusAtom = atom(1);
export const shadowsAtom = atom([shadowBase]);
export const shadowStringAtom = atom((get) => {
  return get(shadowsAtom)
    .filter((i: Shadow) => i.active)
    .map(buildShadow)
    .join(",");
});

function ShadowFooterControl() {
  const [hide] = useMediaQuery("(min-width: 820px)");

  if (hide) {
    return null;
  }

  return (
    <Flex
      alignItems="center"
      gap={2}
      px={4}
      h={20}
      position="fixed"
      bottom={0}
      left={0}
      right={0}
      bg="white"
      _dark={{
        bg: "gray.700",
      }}
      sx={{
        boxShadow: "0px -4px 10px 0px #0000001a",
      }}
    >
      In progress
    </Flex>
  );
}

const Home: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex minH="100vh" w="full" direction="column">
      <Head>
        <title>Supa Shadows Generator</title>
        <meta name="description" content="Supa Shadows Generator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ModalShadows isOpen={isOpen} onClose={onClose} />

      <Flex w="full" direction="column">
        <Header onOpen={onOpen} />
        <Flex minH="calc(100vh - 64px)">
          <ShadowControl />
          <ShadowPreview />
          <ShadowProperties />
        </Flex>
        <ShadowFooterControl />
      </Flex>
    </Flex>
  );
};

export default Home;
