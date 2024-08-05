import { GetServerSideProps } from "next";
import { base64, buildShadow } from "../utils";
import { Box, Flex } from "@chakra-ui/react";
import { Shadow } from "../types";
import Head from "next/head";

interface PageProps {
  shadow: string;
}

export default function EmbedPage({ shadow }: PageProps) {
  const shadows = JSON.parse(base64.decode(shadow)) as Shadow[];
  const shadowsString = shadows.map(buildShadow).join(",");
  return (
    <>
      <Head>
        <title>Embed - Supa Shadows Generator</title>
        <meta name="description" content="Embed box-shadow by Supa Shadows" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        as="main"
        flex={1}
        h={"calc(100vh - 64px)"}
        flexShrink={0}
        alignItems={"center"}
        justifyContent="center"
        bg="white"
      >
        <Box
          w={300}
          h={300}
          rounded={"3xl"}
          bg={"white"}
          boxShadow={shadowsString}
        />
      </Flex>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<PageProps> = async ({
  query,
}) => {
  return {
    props: {
      shadow: query?.shadow ? String(query.shadow) : "",
    },
  };
};
