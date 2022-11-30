import { Box, Flex, Heading, useMediaQuery, VStack } from "@chakra-ui/react";
import { memo } from "react";
import { BackgroundField } from "./background";
import { BorderColorField } from "./border-color";
import { BorderRadiusField } from "./border-radius";
import { CanvasColorField } from "./canvas-color";
import { HeightField } from "./height";
import { WidthField } from "./width";

export function Component() {
  const [hide] = useMediaQuery("(max-width: 1200px)");
  console.log(hide);

  if (hide) {
    return null;
  }

  return (
    <Box
      as="section"
      w="sm"
      borderLeft="1px"
      borderLeftColor="gray.300"
      overflowY="auto"
      h="calc(100vh - 64px)"
      className="custom-scrollbar--color-mode"
      _dark={{ bg: "gray.700", borderLeftColor: "gray.600" }}
      pb={4}
    >
      <Flex justifyContent="space-between" alignItems="center" p={4}>
        <Heading fontSize="md">Box Properties</Heading>
      </Flex>

      <VStack spacing={5} p={4}>
        <CanvasColorField />
        <BackgroundField />
        <BorderColorField />
        <BorderRadiusField />
        <WidthField />
        <HeightField />
      </VStack>
    </Box>
  );
}

const ShadowProperties = memo(Component);
ShadowProperties.displayName = "ShadowProperties";
export { ShadowProperties };
