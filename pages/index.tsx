import { Flex, useDisclosure } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { useMemo, useState } from "react";
import { v4 } from "uuid";
import { Header } from "../components/header";
import { ModalShadows } from "../components/modal";
import { ShadowControl } from "../components/shadow-control";
import { ShadowPreview } from "../components/shadow-preview";
import { ShadowProperties } from "../components/shadow-properties";
import { useShadows } from "../hooks/use-shadows";
import { atom } from "jotai";
import { buildShadow } from "../utils/build-shadow";
import { Shadow } from "../types";
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
export const backgroundAtom = atom("white");
export const widthAtom = atom(16);
export const heightAtom = atom(16);
export const borderColorAtom = atom("#E2E8F0");
export const borderRadiusAtom = atom(1);

const Home: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [box, setBox] = useState({
    color: "#EDF2F7",
    background: "white",
    width: 16,
    height: 16,
    borderColor: "#E2E8F0",
    borderRadius: 1,
  });

  const {
    shadows,
    handleAddSahdow,
    handleToggleActive,
    handleToggleInset,
    handleRemove,
    handleHorizontalOffset,
    handleVerticalOffset,
    handleBlur,
    handleSpread,
    handleColor,
  } = useShadows();

  const boxShadow = useMemo(() => {
    return shadows
      .filter((i: Shadow) => i.active)
      .map(buildShadow)
      .join(",");
  }, [shadows]);

  return (
    <Flex minH="100vh" w="full" direction="column">
      <Head>
        <title>Supa Shadows Generator</title>
        <meta name="description" content="Supa Shadows Generator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ModalShadows isOpen={isOpen} onClose={onClose} boxShadow={boxShadow} />

      <Flex w="full" direction="column">
        <Header onOpen={onOpen} />
        <Flex minH="calc(100vh - 64px)">
          <ShadowControl
            shadows={shadows}
            onAddShadow={handleAddSahdow}
            onToggleActive={handleToggleActive}
            onToggleInset={handleToggleInset}
            onRemove={handleRemove}
            onHorizontalOffset={handleHorizontalOffset}
            onVerticalOffset={handleVerticalOffset}
            onBlur={handleBlur}
            onSpread={handleSpread}
            onColor={handleColor}
          />
          <ShadowPreview boxShadow={boxShadow} />
          <ShadowProperties />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;
