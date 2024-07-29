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
import { ShadowFooterControl } from "../components/shadow-footer-control";
import { Shadow } from "../types";
import { buildShadow } from "../utils";
import openGraphImageCover from "../public/open-graph-cover.png";
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

const Home: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex minH="100vh" w="full" direction="column">
      <Head>
        <title>Supa Shadows Generator</title>
        <meta
          name="description"
          content="A box-shadow CSS Generator tool to quickly generate box-shadow CSS declarations."
        />
        <meta property="og:title" content="Supa Shadows" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://supa-shadows.vercel.app/" />
        <meta property="og:image" content={openGraphImageCover.src} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Supa Shadows cover" />
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
