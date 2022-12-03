import { AddIcon } from "@chakra-ui/icons";
import { Button, Flex } from "@chakra-ui/react";
import { useMd } from "../hooks/breakpoints";
import { useShadows } from "../hooks/use-shadows";

export function ShadowFooterControl() {
  const [isMd] = useMd();
  const { shadows, handleAddSahdow } = useShadows();

  if (isMd) {
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
      _dark={{ bg: "gray.700" }}
      sx={{ boxShadow: "0px -4px 10px 0px #0000001a" }}
      overflowY="auto"
    >
      {shadows.map((item, index) => (
        <Button
          key={item.id}
          w={42}
          h={42}
          rounded="full"
          colorScheme="teal"
          flexShrink={0}
        >
          {index + 1}
        </Button>
      ))}
      <Button
        w={42}
        h={42}
        rounded="full"
        flexShrink={0}
        onClick={handleAddSahdow}
        boxShadow="md"
      >
        <AddIcon />
      </Button>
    </Flex>
  );
}
