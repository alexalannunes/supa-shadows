import { Box, Flex, Heading, VStack } from "@chakra-ui/react";
import { memo } from "react";
import { useXl } from "../../hooks/use-breakpoints";
import { BackgroundField } from "./background-field";
import { BorderColorField } from "./border-color-field";
import { BorderRadiusField } from "./border-radius-field";
import { CanvasColorField } from "./canvas-color-field";
import { HeightField } from "./height-field";
import { WidthField } from "./width-field";

export function Component() {
  const [isXl] = useXl();

  if (!isXl) {
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
