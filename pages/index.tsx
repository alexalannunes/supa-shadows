import { Flex, useDisclosure } from "@chakra-ui/react";
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
  color: "rgba(0,0,0,0.1)",
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
      </Flex>
    </Flex>
  );
};

export default Home;
